# HY4 — findings by GLM 5.3 Flash

- Source: Tencent (`tencent/hy4` — tracked provisionally; possibly unreleased or internal)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY4 (Tencent Hunyuan HY4; unverified — possibly unreleased or internal)
- **Short description:** A Tencent Hunyuan-family model with no verified public information as of 2026-09-19. The only public trace found is BenchLM's model-radar note (inside the Hy3 dossier, 2026-09-18) listing "Hy4 preview" as a newer Tencent model in the line; no model page, news coverage, benchmark, or pricing record exists.
- **Provider / access:** None verified. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Not verified. First referenced as "Hy4 preview" on BenchLM's radar (September 2026).
- **IDs:** none verified (`hy4` folder slug only).
- **Context window:** No verified public value (folder meta: "Unknown").
- **Modalities:** No verified public matrix (folder meta: "Unknown").
- **Pricing (as of 2026-09-19):** No verified public pricing (folder meta: "Unknown"). No free tier.
- **Architecture:** No verified public data — possibly unreleased or internal.

### Raw benchmarks found

Agent / tool use:

- All benchmarks: no verified public score found (no Terminal-Bench, Tau, GDPval, Claw-Eval, MCP-Atlas, SWE-bench, GPQA, HLE, MRCR, LiveCodeBench, SciCode, or AA Index rows exist in any reviewed source)

Reasoning / knowledge:

- No verified public score found

Coding:

- No verified public score found

Long context:

- No verified public score found

### Normalized scores (1–100)

- **Tool use: 10/100.** No verified public data of any kind; scored at the methodology floor pending any published record.
- **Reasoning: 10/100.** No verified public data; floor score.
- **Context window: 10/100.** Window unknown — untierable, scored at the floor.
- **Multimodal: 10/100.** Modality matrix unknown; floor score.
- **Coding: 10/100.** No verified public data; floor score.
- **Cost efficiency: 10/100.** No pricing exists to evaluate; floor score rather than a free-tier 100.
- **Overall Score: 10/100.** (10+10+10+10+10)/5 = 10.0. Best fit: none — a placeholder entry until Tencent publishes a model card; the folder meta's "tracked provisionally" status is confirmed by this independent research pass.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: BenchLM HY4 model page attempt, Tencent Hunyuan page attempt, multiple news outlets — all negative); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
