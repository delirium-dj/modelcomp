// Regression tests for scripts/lib/validate.mjs — permanence tripwire + gates.
// Run: `pnpm test` (zero deps, node:test only).
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  MIRROR_ROOTS,
  FORBIDDEN_ROOTS,
  MERGED_MODEL_SLUGS,
  MERGED_SOURCE_STEMS,
  RETIRED_ALIAS_SLUGS,
  META_SHORT_MAX,
  META_MODALITIES_MAX,
  META_PRICING_MAX,
  META_CONTEXT_MAX,
  modalityProblems,
  mergedSlugMessage,
  mergedStemMessage,
  retiredAliasMessage,
  forbiddenRootMessage,
  isResearchPath,
  isRegenerablePath,
  classifyMissingTracked,
  findMirror,
  findForbiddenRoot,
  deletionFailMessage,
  checkFilename,
  checkMetaFile,
} from "./validate.mjs";

describe("tripwire path filters (RULES.md)", () => {
  it("research paths participate, everything else skips", () => {
    assert.equal(isResearchPath("model/foo/Big_Pickle.md"), true);
    assert.equal(isResearchPath("model/foo/Big_Pickle.md.excluded"), true);
    assert.equal(isResearchPath("model/foo/meta.json"), false);
    assert.equal(isResearchPath("model/foo/notes.txt"), false);
  });

  it("regenerable files never trip the wire", () => {
    assert.equal(isRegenerablePath("model/foo/average.md"), true);
    assert.equal(isRegenerablePath("model/foo/README.md"), true);
    assert.equal(isRegenerablePath("model/foo/Big_Pickle.md"), false);
  });
});

describe("classifyMissingTracked (sanctioned survivals vs FAIL)", () => {
  it("twin retirement is INFO, never FAIL", () => {
    assert.equal(classifyMissingTracked({ twinRetired: true, mirror: undefined }), "twin-retired");
    assert.equal(classifyMissingTracked({ twinRetired: true, mirror: "models_voice" }), "twin-retired");
  });

  it("mirror relocation is INFO, never FAIL", () => {
    assert.equal(classifyMissingTracked({ twinRetired: false, mirror: "models_voice" }), "relocated");
  });

  it("anything else is a forbidden deletion", () => {
    assert.equal(classifyMissingTracked({ twinRetired: false, mirror: undefined }), "deleted");
  });

  it("merged duplicate stem is INFO, never FAIL (2026-10-08 source merge)", () => {
    assert.equal(classifyMissingTracked({ twinRetired: false, mirror: undefined, mergedSource: true }), "merged-source");
  });

  it("merged-source wins over twin retirement and mirror relocation", () => {
    assert.equal(classifyMissingTracked({ twinRetired: true, mirror: undefined, mergedSource: true }), "merged-source");
    assert.equal(classifyMissingTracked({ twinRetired: false, mirror: "models_voice", mergedSource: true }), "merged-source");
  });
});

describe("findMirror (user-directed relocations)", () => {
  const existsAt = (m, parts) => m === "models_voice" && parts.join("/") === "foo/Big_Pickle.md";
  const roots = ["models_voice", "models_finance"];

  it("finds the sanctioned mirror holding the same path", () => {
    assert.equal(findMirror(["model", "foo", "Big_Pickle.md"], roots, existsAt), "models_voice");
  });

  it("returns undefined outside model/ or when no mirror holds it", () => {
    assert.equal(findMirror(["other", "foo"], roots, existsAt), undefined);
    assert.equal(findMirror(["model", "bar", "X.md"], roots, existsAt), undefined);
  });

  it("MIRROR_ROOTS covers the voice + finance trees", () => {
    assert.deepEqual(MIRROR_ROOTS, ["models_voice", "models_finance"]);
  });
});

describe("forbidden duplicate roots (voicemodels/ never recurs)", () => {
  it("FORBIDDEN_ROOTS lists the retired voice-tree name", () => {
    assert.deepEqual(FORBIDDEN_ROOTS, ["voicemodels"]);
  });

  it("message routes to the canonical tree", () => {
    const msg = forbiddenRootMessage("voicemodels");
    assert.match(msg, /voicemodels\//);
    assert.match(msg, /models_voice\//);
    assert.match(msg, /never recreate/);
  });

  it("findForbiddenRoot detects a present root, ignores an absent one", () => {
    const present = (r, f) => r === "/repo" && f === "voicemodels";
    assert.equal(findForbiddenRoot("/repo", FORBIDDEN_ROOTS, present), "voicemodels");
    assert.equal(findForbiddenRoot("/repo", FORBIDDEN_ROOTS, () => false), undefined);
  });

  it("findForbiddenRoot joins repo root + name (never name + name)", () => {
    // Regression for the shadowed loop variable that probed
    // "voicemodels/voicemodels" instead of "<root>/voicemodels" (B1).
    const seen = [];
    findForbiddenRoot("/repo", FORBIDDEN_ROOTS, (r, f) => {
      seen.push([r, f]);
      return false;
    });
    assert.deepEqual(seen, [["/repo", "voicemodels"]]);
  });
});

describe("merged duplicate slugs (never come back)", () => {
  it("maps google-gemini-2.5-flash-lite to its canonical folder", () => {
    assert.equal(MERGED_MODEL_SLUGS.get("google-gemini-2.5-flash-lite"), "gemini-2.5-flash-lite");
  });

  it("maps glm-5.1-coding to its canonical folder", () => {
    assert.equal(MERGED_MODEL_SLUGS.get("glm-5.1-coding"), "glm-5.1");
  });

  it("maps grok-4-fast-reasoning to its canonical folder", () => {
    assert.equal(MERGED_MODEL_SLUGS.get("grok-4-fast-reasoning"), "grok-4-fast");
  });

  it("maps grok-4.1-fast-reasoning to its canonical folder", () => {
    assert.equal(MERGED_MODEL_SLUGS.get("grok-4.1-fast-reasoning"), "grok-4.1-fast");
  });

  it("maps longcat_2.5_preview to its dotted canonical folder", () => {
    assert.equal(MERGED_MODEL_SLUGS.get("longcat_2.5_preview"), "longcat-2.5-preview");
  });

  it("message names both slugs and the canonical research route", () => {
    const msg = mergedSlugMessage("google-gemini-2.5-flash-lite", "gemini-2.5-flash-lite");
    assert.match(msg, /google-gemini-2\.5-flash-lite/);
    assert.match(msg, /gemini-2\.5-flash-lite/);
    assert.match(msg, /never recreate/);
  });
});

describe("retired vendor aliases (never scaffolded)", () => {
  it("maps grok-code-fast-1 to its canonical folder", () => {
    assert.equal(RETIRED_ALIAS_SLUGS.get("grok-code-fast-1"), "grok-build-0.1");
  });

  it("message names both slugs and the canonical research route", () => {
    const msg = retiredAliasMessage("grok-code-fast-1", "grok-build-0.1");
    assert.match(msg, /grok-code-fast-1/);
    assert.match(msg, /grok-build-0\.1/);
    assert.match(msg, /never scaffold/);
  });
});

describe("merged duplicate stems (never come back)", () => {
  it("maps Laguna_XS_2_1 to its canonical dotted stem", () => {
    assert.equal(MERGED_SOURCE_STEMS.get("Laguna_XS_2_1"), "Laguna_XS_2.1");
  });

  it("message names both stems and the canonical write route", () => {
    const msg = mergedStemMessage("Laguna_XS_2_1", "Laguna_XS_2.1");
    assert.match(msg, /Laguna_XS_2_1\.md/);
    assert.match(msg, /Laguna_XS_2\.1\.md/);
    assert.match(msg, /never recreate/);
  });
});

describe("deletionFailMessage (restoration route)", () => {
  it("names the file and the restore command", () => {
    const msg = deletionFailMessage("model/foo/Big_Pickle.md");
    assert.match(msg, /model\/foo\/Big_Pickle\.md/);
    assert.match(msg, /git restore --source=HEAD/);
    assert.match(msg, /never delete/);
  });
});

describe("checkFilename (hygiene gate)", () => {
  it("accepts version dots, rejects the rest", () => {
    assert.equal(checkFilename("s", "DeepSeek_4.1_Flash.md"), null);
    assert.match(checkFilename("s", "my-file.md"), /must match/);
    assert.match(checkFilename("s", "my file.md"), /must match/);
  });
});

describe("checkMetaFile (meta gates, sync order)", () => {
  it("lists missing fields first, underscore gate last", () => {
    const msgs = checkMetaFile("s", { id: "x", name: "Bad_Name" }, ["id", "name", "short"]);
    assert.deepEqual(msgs, [
      'model/s/meta.json: missing required field "short"',
      'model/s/meta.json: "name" must use spaces, never underscores (got "Bad_Name") — set the official vendor display name',
    ]);
  });

  it("passes a complete, clean meta", () => {
    const meta = { id: "a", name: "Good Name", short: "s", contextWindow: "c", modalities: "Text in/out", pricingNote: "p" };
    assert.deepEqual(checkMetaFile("s", meta, ["id", "name", "short", "contextWindow", "modalities", "pricingNote"]), []);
  });

  it("ignores extra fields (scaffolded stamp never fails validation)", () => {
    const meta = { id: "a", name: "Good Name", short: "s", contextWindow: "c", modalities: "Text in/out", pricingNote: "p", scaffolded: true };
    assert.deepEqual(checkMetaFile("s", meta, ["id", "name", "short", "contextWindow", "modalities", "pricingNote"]), []);
  });
});

describe("checkMetaFile (GPT display-name gate)", () => {
  const REQUIRED = ["id", "name", "short", "contextWindow", "modalities", "pricingNote"];
  const good = { id: "a", name: "GPT-5.6 Terra", short: "s", contextWindow: "c", modalities: "Text in/out", pricingNote: "p" };

  it("passes hyphenated GPT names", () => {
    assert.deepEqual(checkMetaFile("s", good, REQUIRED), []);
    assert.deepEqual(checkMetaFile("s", { ...good, name: "GPT-OSS 120B" }, REQUIRED), []);
  });

  it("fails space-separated GPT names", () => {
    const msgs = checkMetaFile("s", { ...good, name: "GPT 5.6 Terra" }, REQUIRED);
    assert.equal(msgs.length, 1);
    assert.match(msgs[0], /hyphenate the GPT prefix/);
  });

  it("leaves voice product names alone", () => {
    assert.deepEqual(checkMetaFile("s", { ...good, name: "GPT Realtime 2" }, REQUIRED), []);
  });
});

describe("checkMetaFile (card uniformity gates)", () => {
  const REQUIRED = ["id", "name", "short", "contextWindow", "modalities", "pricingNote"];
  const good = { id: "a", name: "Good Name", short: "s", contextWindow: "c", modalities: "Text in/out", pricingNote: "p" };

  it(`fails short over ${META_SHORT_MAX} chars, passes at cap`, () => {
    const over = checkMetaFile("s", { ...good, short: "x".repeat(META_SHORT_MAX + 1) }, REQUIRED);
    assert.equal(over.length, 1);
    assert.match(over[0], /"short" is 241 chars/);
    assert.deepEqual(checkMetaFile("s", { ...good, short: "x".repeat(META_SHORT_MAX) }, REQUIRED), []);
  });

  it("fails modalities capability notes, passes clean combos", () => {
    const msgs = checkMetaFile("s", { ...good, modalities: "Text in/out only; reasoning; tool calls" }, REQUIRED);
    assert.equal(msgs.length, 1);
    assert.match(msgs[0], /capability note "reasoning" belongs in "short"/);
    assert.deepEqual(checkMetaFile("s", { ...good, modalities: "Text, image, video in; text out" }, REQUIRED), []);
  });

  it("fails modalities without text in/out shape, passes the unknown-spec hatch", () => {
    const msgs = checkMetaFile("s", { ...good, modalities: "Not announced" }, REQUIRED);
    assert.deepEqual(msgs, []);
    assert.deepEqual(checkMetaFile("s", { ...good, modalities: "No verified public matrix" }, REQUIRED), []);
    const bad = checkMetaFile("s", { ...good, modalities: "Multimodal support" }, REQUIRED);
    assert.ok(bad.some((m) => /in \.\.\. out|must name text/.test(m)));
  });

  it(`fails modalities over ${META_MODALITIES_MAX} chars`, () => {
    const msgs = checkMetaFile(
      "s",
      { ...good, modalities: "Text in/out (" + "x".repeat(META_MODALITIES_MAX) + ")" },
      REQUIRED,
    );
    assert.ok(msgs.some((m) => /max 80/.test(m)));
  });

  it(`fails contextWindow over ${META_CONTEXT_MAX} and pricingNote over ${META_PRICING_MAX} chars`, () => {
    const msgs = checkMetaFile(
      "s",
      { ...good, contextWindow: "x".repeat(META_CONTEXT_MAX + 1), pricingNote: "x".repeat(META_PRICING_MAX + 1) },
      REQUIRED,
    );
    assert.equal(msgs.length, 2);
    assert.match(msgs[0], /"contextWindow"/);
    assert.match(msgs[1], /"pricingNote"/);
  });

  it("fails over-long pricingTiers entries with their index", () => {
    const msgs = checkMetaFile(
      "s",
      { ...good, pricingTiers: ["$1/$2 per 1M", "x".repeat(META_PRICING_MAX + 1)] },
      REQUIRED,
    );
    assert.equal(msgs.length, 1);
    assert.match(msgs[0], /pricingTiers\[1\]/);
  });

  it("modalityProblems is empty for clean values", () => {
    assert.deepEqual(modalityProblems("Text/image/audio/video in; text out"), []);
    assert.deepEqual(modalityProblems("Text in → typed decision out"), []);
    assert.deepEqual(modalityProblems("Not announced"), []);
  });
});
