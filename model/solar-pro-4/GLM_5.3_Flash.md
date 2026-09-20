# Solar Pro 4 — findings by GLM 5.3 Flash

- Source: Upstage AI (`solar-pro-4`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4 (Upstage; no Free-tier wording)
- **Short description:** Upstage AI's Solar Pro 4 — released August 11, 2026 as a proprietary reasoning model with a 512K context window. BenchLM tracks it with 11 sourced benchmark rows but no independent composite rank yet; vendor specifications were not independently verifiable in this research pass.
- **Provider / access:** Upstage API (launch post linked from BenchLM's record). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released August 11, 2026 (BenchLM release record). Knowledge cutoff not verified in reviewed sources.
- **IDs:** `solar-pro-4` (folder slug / BenchLM record; exact API ID not surfaced).
- **Context window:** 512K tokens (BenchLM dossier header, corroborated by the record being tracked under "512K context").
- **Modalities:** Not verified in this research pass (folder meta: "Unknown"); Upstage's Solar line is text-focused — no multimodal claim found.
- **Pricing (as of 2026-09-19):** No verified public pricing surfaced in reviewed sources.
- **Architecture:** Proprietary, closed weights; reasoning-capable. Parameter count not verified.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau / GDPval / Claw-Eval: no verified public score found in this research pass (BenchLM confirms 11 sourced benchmark rows exist for the model; row values did not surface in retrieved content)

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / LCR / MRCR: no verified public score found in this research pass

Coding:

- SWE-bench / LiveCodeBench / SciCode / DeepSWE: no verified public score found in this research pass

Long context:

- 512K window verified (BenchLM); no MRCR/RULER retrieval numbers surfaced

### Normalized scores (1–100)

- **Tool use: 45/100.** The model is real and benchmarked (11 sourced rows per BenchLM) but no tool-row values were retrievable this pass — provisional mid-low with an evidence dock.
- **Reasoning: 50/100.** Reasoning-capable flag verified; no reasoning benchmark values retrievable — provisional.
- **Context window: 88/100.** 512K verified — squarely in the 500K–1M tier (85–94); no retrieval numbers, so no 90+.
- **Multimodal: 20/100.** No multimodal claims verified; the Solar line is text-centric — text-only band pending evidence.
- **Coding: 45/100.** No coding-row values retrievable; provisional mid-low.
- **Cost efficiency: 50/100.** No verified pricing — scored mid-uncertain rather than inventing a tier.
- **Overall Score: 49.6/100.** (45+50+88+20+45)/5 = 49.6. Best fit: long-context text work on a proprietary Korean-lab stack — re-verify against Upstage's launch post and BenchLM's row values before committing; vendor specs remain unverified.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: BenchLM dossier, Upstage model/blog page attempts, LLMReference attempt — vendor pages 404 at research time); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
