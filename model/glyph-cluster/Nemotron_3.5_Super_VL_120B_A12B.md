# Glyph Cluster — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Stealth (Microsoft AI / MAI attributed) / Glyph Cluster
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster
- **Short description:** Anonymous stealth reasoning model attributed to Microsoft AI / MAI research telemetry. Public webfetch lookup (OpenRouter model page) returned no public model page, specs, or benchmarks; identity could not be independently verified online.
- **Provider / access:** No public provider route confirmed via webfetch (OpenRouter model page returned 404).
- **Release / knowledge:** Not confirmed via public source.
- **IDs:** `stealth/glyph-cluster` referenced in project metadata; no public vendor page located via webfetch.
- **Context window:** not publicly confirmed via webfetch.
- **Modalities:** not publicly confirmed via webfetch.
- **Pricing (as of 2026-11-11):** not publicly confirmed via webfetch.
- **Architecture:** Anonymous stealth reasoning model (per project metadata); not independently verifiable via public webfetch sources.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

- Terminal-Bench: no verified public score found
- Tau3 / Tau2: no verified public score found
- Claw-Eval: no verified public score found
- GDPval / OSWorld / Automation: no verified public score found
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index): no verified public score found
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas): no verified public score found
- Cost per task / speed (if available): no per-task cost or speed figures located via webfetch.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 15/100.** No public evidence of tool calling. Capped by total absence of verified agentic-tool evidence.
- **Reasoning: 15/100.** No verified public reasoning benchmarks. Capped by total absence of verified evidence.
- **Context window: 10/100.** Not publicly confirmed via webfetch; lowest tier (<100K → 10–49).
- **Multimodal: 15/100.** No multimodal capability confirmed via webfetch; text-only = 10–20 per methodology.
- **Coding: 15/100.** No verified public coding benchmarks. Capped by total absence of verified evidence.
- **Cost efficiency: 10/100.** No public pricing confirmed via webfetch; cannot assume free.
- **Overall Score: 14/100.** Mean of (15 + 15 + 10 + 15 + 15) / 5 = 14.0 → 14. Best-fit: unverified stealth reasoning model; no public data to substantiate any capability.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-11
- Method: public internet research via webfetch (OpenRouter model page returned no public page/specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenRouter model search](https://openrouter.ai/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
