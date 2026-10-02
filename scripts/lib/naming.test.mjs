// Regression tests for scripts/lib/naming.mjs — filename/key/slug conventions.
// Run: `npm test` / `node --test scripts/lib/` (zero deps, node:test only).
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  normName,
  stemToKey,
  labelOf,
  resolveSourceMeta,
  SLUG_VERSION_EXCEPTION,
  hyphenVersionViolation,
  VIRTUAL_KEYS,
  formatSlugGuess,
  missingMetaFields,
  metaNameHasUnderscore,
  buildScaffoldMeta,
  isScaffoldStub,
  metaNameIsSlugGuess,
} from "./naming.mjs";

// Sample overrides mirroring the real SOURCE_OVERRIDES shape in sync-data.mjs.
const OVERRIDES = {
  "DeepSeek 4.1 Flash": { label: "DeepSeek v4.1 Flash", slug: "deepseek-v4.1-flash" },
  "big-pickle": { label: "Big Pickle", slug: "big-pickle" },
  "Ox Alpha": { slug: "ox_alpha" },
};

const catalogLookup = (norm) =>
  ({
    "claudeopus46": "claude-opus-4.6",
    "oxalpha": "ox_alpha",
  })[norm] ?? undefined;

describe("normName (deep-link + catalog folding)", () => {
  it("folds case and punctuation", () => {
    assert.equal(normName("DeepSeek v4.1 Flash"), "deepseekv41flash");
    assert.equal(normName("deepseek-v4.1-flash"), "deepseekv41flash");
    assert.equal(normName("MiMo v2.6 Flash"), "mimov26flash");
  });
});

describe("stemToKey / labelOf", () => {
  it("maps Gemini_3.6_Flash -> 'Gemini 3.6 Flash'", () => {
    assert.equal(stemToKey("Gemini_3.6_Flash"), "Gemini 3.6 Flash");
    assert.equal(labelOf("Gemini_3.6_Flash.md"), "Gemini 3.6 Flash");
  });
});

describe("resolveSourceMeta (override precedence)", () => {
  it("override label + slug win over the catalog", () => {
    assert.deepEqual(resolveSourceMeta("DeepSeek 4.1 Flash", OVERRIDES, catalogLookup), {
      label: "DeepSeek v4.1 Flash",
      slug: "deepseek-v4.1-flash",
    });
  });

  it("label-only edge case keeps key as slug source (big-pickle)", () => {
    assert.deepEqual(resolveSourceMeta("big-pickle", OVERRIDES, catalogLookup), {
      label: "Big Pickle",
      slug: "big-pickle",
    });
  });

  it("slug-only override keeps the key as label (Ox Alpha)", () => {
    assert.deepEqual(resolveSourceMeta("Ox Alpha", OVERRIDES, catalogLookup), {
      label: "Ox Alpha",
      slug: "ox_alpha",
    });
  });

  it("falls back to the catalog when no override exists", () => {
    assert.deepEqual(resolveSourceMeta("Claude Opus 4.6", OVERRIDES, catalogLookup), {
      label: "Claude Opus 4.6",
      slug: "claude-opus-4.6",
    });
  });

  it("slug is undefined when the agent has no tracked model page", () => {
    assert.deepEqual(resolveSourceMeta("Ghost Rater", OVERRIDES, catalogLookup), {
      label: "Ghost Rater",
      slug: undefined,
    });
  });
});

describe("hyphenVersionViolation (model/README.md convention)", () => {
  it("flags digit-hyphen-digit with the dotted suggestion", () => {
    assert.equal(hyphenVersionViolation("gpt-5-5"), "gpt-5.5");
  });

  it("leaves codename suffixes alone (gpt-6-astra)", () => {
    assert.equal(hyphenVersionViolation("gpt-6-astra"), null);
  });

  it("leaves dotted versions alone", () => {
    assert.equal(hyphenVersionViolation("gpt-5.5"), null);
  });

  it("honors param-size exceptions", () => {
    assert.ok(SLUG_VERSION_EXCEPTION.has("gemma-4-31b"));
    assert.ok(SLUG_VERSION_EXCEPTION.has("qwen-3.8-27b"));
    assert.ok(SLUG_VERSION_EXCEPTION.has("qwen-3.5-9b"));
    assert.equal(hyphenVersionViolation("gemma-4-31b"), null);
    assert.equal(hyphenVersionViolation("qwen-3.8-27b"), null);
    // Version 3.5 + 9B params: the "5-9" hit is not a hyphen version.
    assert.equal(hyphenVersionViolation("qwen-3.5-9b"), null);
  });
});

describe("VIRTUAL_KEYS", () => {
  it("holds exactly the six sort views (never average)", () => {
    assert.deepEqual([...VIRTUAL_KEYS].sort(), ["code", "context", "cost", "multi", "reason", "tool"]);
    assert.ok(!VIRTUAL_KEYS.has("average"));
  });
});

describe("formatSlugGuess (meta auto-scaffold)", () => {
  it("title-cases separators to spaces", () => {
    assert.equal(formatSlugGuess("muse-spark-1.3-free"), "Muse Spark 1.3 Free");
    assert.equal(formatSlugGuess("ox_alpha"), "Ox Alpha");
  });
});

describe("meta validation gates", () => {
  const REQUIRED = ["id", "name", "short", "contextWindow", "modalities", "pricingNote"];

  it("reports missing / empty required fields", () => {
    assert.deepEqual(missingMetaFields({ id: "x" }, REQUIRED), ["name", "short", "contextWindow", "modalities", "pricingNote"]);
    assert.deepEqual(missingMetaFields({ id: "x", name: "" }, ["id", "name"]), ["name"]);
  });

  it("passes a complete meta", () => {
    const meta = Object.fromEntries(REQUIRED.map((k) => [k, "v"]));
    assert.deepEqual(missingMetaFields(meta, REQUIRED), []);
  });

  it("rejects underscore display names (slug artifacts)", () => {
    assert.equal(metaNameHasUnderscore("Bad_Name"), true);
    assert.equal(metaNameHasUnderscore("Good Name"), false);
  });
});

describe("scaffolded stub stamp (GLM53F_IMP #9)", () => {
  it("buildScaffoldMeta stamps scaffolded: true with a slug-guess name", () => {
    const meta = buildScaffoldMeta("ox_alpha");
    assert.equal(meta.scaffolded, true);
    assert.equal(meta.name, "Ox Alpha");
    assert.equal(meta.id, "opencode/ox_alpha");
    assert.equal(meta.short, "Ox Alpha model evaluation entry.");
    assert.deepEqual(missingMetaFields(meta, ["id", "name", "short", "contextWindow", "modalities", "pricingNote"]), []);
  });

  it("isScaffoldStub detects only an exact true stamp", () => {
    assert.equal(isScaffoldStub(buildScaffoldMeta("ox_alpha")), true);
    assert.equal(isScaffoldStub({ name: "Curated" }), false);
    assert.equal(isScaffoldStub({ name: "X", scaffolded: "true" }), false);
    assert.equal(isScaffoldStub(null), false);
    assert.equal(isScaffoldStub("scaffolded"), false);
  });

  it("metaNameIsSlugGuess drives auto-clear (curated name clears the stamp)", () => {
    const stub = buildScaffoldMeta("ox_alpha");
    assert.equal(metaNameIsSlugGuess(stub, "ox_alpha"), true);
    assert.equal(metaNameIsSlugGuess({ ...stub, name: "Ox Alpha (GLM)" }, "ox_alpha"), false);
    assert.equal(metaNameIsSlugGuess(undefined, "ox_alpha"), false);
  });
});
