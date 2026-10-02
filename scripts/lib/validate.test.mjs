// Regression tests for scripts/lib/validate.mjs — permanence tripwire + gates.
// Run: `pnpm test` (zero deps, node:test only).
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  MIRROR_ROOTS,
  isResearchPath,
  isRegenerablePath,
  classifyMissingTracked,
  findMirror,
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
    const meta = { id: "a", name: "Good Name", short: "s", contextWindow: "c", modalities: "m", pricingNote: "p" };
    assert.deepEqual(checkMetaFile("s", meta, ["id", "name", "short", "contextWindow", "modalities", "pricingNote"]), []);
  });

  it("ignores extra fields (scaffolded stamp never fails validation)", () => {
    const meta = { id: "a", name: "Good Name", short: "s", contextWindow: "c", modalities: "m", pricingNote: "p", scaffolded: true };
    assert.deepEqual(checkMetaFile("s", meta, ["id", "name", "short", "contextWindow", "modalities", "pricingNote"]), []);
  });
});
