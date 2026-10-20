// Schema gate for providers/<slug>/meta.json — the curated provider dataset
// consumed by src/data/providers.ts (Providers page). Zero-dep node:test,
// same conventions as the other scripts/lib suites. Runs from the repo root
// (see package.json "test").
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dirs = readdirSync(join(root, "providers")).filter(
  (d) => !d.includes(".") && d !== "README.md" && d !== "node_modules",
);

describe("providers/<slug>/meta.json", () => {
  const seenNames = new Map();

  it("has at least one provider folder", () => {
    assert.ok(dirs.length > 0, "no provider folders found under providers/");
  });

  for (const slug of dirs) {
    let meta;
    it(`${slug}: parses as JSON with required fields`, () => {
      meta = JSON.parse(readFileSync(join(root, "providers", slug, "meta.json"), "utf8"));
      // providers.ts names slug the canonical key — no "id" field.
      assert.ok(!("id" in meta), "no explicit id field — folder name is the key");
      assert.ok(typeof meta.name === "string" && meta.name.length > 0, "name required");
      assert.ok(typeof meta.short === "string" && meta.short.length > 0, "short required");
      assert.ok(meta.plans !== undefined, "plans required");
    });

    it(`${slug}: schema is valid`, () => {
      assert.ok(meta, "parse test must run first");
      assert.ok(
        meta.kind === undefined || meta.kind === "vendor" || meta.kind === "aggregator",
        `kind must be vendor|aggregator (got ${meta.kind})`,
      );
      assert.ok(Array.isArray(meta.plans) && meta.plans.length > 0, "plans non-empty array");
      for (const plan of meta.plans) {
        assert.ok(typeof plan.name === "string" && plan.name.length > 0, "plan.name required");
        assert.ok(typeof plan.price === "string" && plan.price.length > 0, "plan.price required");
        if (plan.notes !== undefined) assert.equal(typeof plan.notes, "string", "notes string");
        if (plan.evidenceUrl !== undefined) {
          assert.ok(plan.evidenceUrl.startsWith("https://"), `evidenceUrl must be https (claim culture)`);
        }
      }
      for (const key of ["hosts", "idPrefixes"]) {
        if (meta[key] !== undefined) {
          assert.ok(Array.isArray(meta[key]), `${key} must be an array`);
          assert.ok(meta[key].length > 0, `${key} must not be empty when present`);
          assert.ok(meta[key].every((s) => typeof s === "string" && s.length > 0), `${key} entries are strings`);
        }
      }
      if (meta.officialUrl !== undefined) assert.ok(meta.officialUrl.startsWith("https"), "officialUrl https");
    });

    it(`${slug}: display name is unique across providers`, () => {
      assert.ok(meta, "parse test must run first");
      assert.ok(!seenNames.has(meta.name), `duplicate provider name: ${meta.name}`);
      seenNames.set(meta.name, slug);
    });
  }
});
