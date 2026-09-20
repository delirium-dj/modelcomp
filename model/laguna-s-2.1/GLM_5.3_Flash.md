# Laguna S 2.1 — findings by GLM 5.3 Flash

- Source: Laguna Labs (`laguna-s-2.1`; BenchLM provider catalog associates the record with Poolside)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1 (Laguna Labs; open-weight reasoning model)
- **Short description:** Laguna Labs' Laguna S 2.1 — released July 21, 2026 as an open-weight reasoning model with a 1M-token context window. BenchLM tracks it with 6 sourced benchmark rows but no independent composite rank; benchmarks, pricing and full specs were not verifiable in this research pass.
- **Provider / access:** Open weights (BenchLM record); hosted route unverified. BenchLM's provider catalog sidebar lists the record under Poolside. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released July 21, 2026 (BenchLM release record). Knowledge cutoff not verified in reviewed sources.
- **IDs:** `laguna-s-2.1` (folder slug / BenchLM record; exact API ID not surfaced).
- **Context window:** 1,000,000 tokens (1M) — verified from the BenchLM dossier header ("1M context").
- **Modalities:** Not verified in this research pass (folder meta: "Unknown").
- **Pricing (as of 2026-09-19):** No verified public pricing surfaced; open weights make self-hosting the only verified $0 path.
- **Architecture:** Open weights (BenchLM record); reasoning-capable; parameter count not verified.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau / GDPval / Claw-Eval: no verified public score found in this research pass (BenchLM confirms 6 sourced benchmark rows exist; row values did not surface in retrieved content)

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / LCR / MRCR: no verified public score found in this research pass

Coding:

- SWE-bench / LiveCodeBench / SciCode / DeepSWE: no verified public score found in this research pass (the Poolside association hints at a coding focus, unconfirmed)

Long context:

- 1M window verified (BenchLM); no MRCR/RULER retrieval numbers surfaced

### Normalized scores (1–100)

- **Tool use: 45/100.** Real, open-weight and benchmarked (6 sourced rows per BenchLM) but no tool-row values retrievable this pass — provisional mid-low with an evidence dock.
- **Reasoning: 48/100.** Reasoning-capable flag and 1M window verified; no reasoning benchmark values retrievable — provisional.
- **Context window: 92/100.** 1M window verified (95–100 tier); no retrieval numbers published, so no 95+.
- **Multimodal: 20/100.** No multimodal claims verified — text-only band pending evidence.
- **Coding: 48/100.** No coding-row values retrievable; the Poolside association suggests coding orientation (unconfirmed) — provisional mid-low.
- **Cost efficiency: 60/100.** Open weights give a verified $0 self-host path; no hosted pricing exists to evaluate — scored uncertain-mid.
- **Overall Score: 50.6/100.** (45+48+92+20+48)/5 = 50.6. Best fit: self-hosted long-context reasoning on open weights — verify against Laguna Labs' own card and BenchLM's row values before any production bet; the folder meta's "tracked provisionally" status is confirmed.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: BenchLM dossier, Laguna Labs page attempt — 404 at research time, provider-catalog cross-reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
