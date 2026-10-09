# Kimi K2.7 Code HighSpeed — findings by Mimo v2.6 Flash

- Source: MoonshotAI/`kimi-for-coding-highspeed`
- Date: 2026-10-09 (UTC; original research 2026-10-01, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** Moonshot AI's high-throughput serving variant of Kimi K2.7 Code (both released 2026-06-12), documented in Kimi Code docs as "the high-speed version of K2.7 Code, with the same coding ability and ~5–6× faster output" — 6× speed at 3× quota usage. Not a variant/alias of another entry in this dataset (distinct from `kimi-k2.7-code`).
- **Provider / access:** Kimi Code (`kimi-for-coding-highspeed`, Allegretto plan or above) per official Kimi Code model docs; OpenCode tracks the model with 262K context/output. Moonshot API/OpenRouter-class routes exist for the base K2.7 Code lane.
- **Release / knowledge:** released 2026-06-12 (OpenCode model data, same day as K2.7 Code); knowledge cutoff not published.
- **IDs:** `kimi-for-coding-highspeed` (Kimi Code docs), "Kimi K2.7 Code Highspeed" (OpenCode data). **No OpenCode Zen Free ID found.**
- **Context window:** 262K tokens (OpenCode model data) / "256k" marketed in Kimi Code docs (both = 256–262K class); max output 262K (OpenCode). The base lane's Fireworks spec: 262K context.
- **Modalities:** image + video in, text out — Kimi Code docs multimodal row for HighSpeed: "Image, video"; reasoning yes (Thinking: ON); function calling on the base lane.
- **Pricing:** no separate HighSpeed API list price published. Base K2.7 Code lane: **$0.95 / 1M input, $0.19 cached, $4.00 / 1M output** (Fireworks; Moonshot list via Requesty). On Kimi Code plans HighSpeed consumes **3× quota** at 6× speed (official docs). Cost efficiency scored on the base-lane list price with the 3× quota multiplier noted.
- **Architecture:** same weights as Kimi K2.7 Code — open-weight MoE, **1.027T parameters** (HF safetensors count 1,026.88B, re-checked 2026-10-09; AA rounds to 1T) with **32B active** per token (AA, 2026-10-09), built on Kimi K2.6 with ~30% lower thinking-token usage (Fireworks description of the base model).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.
> **Harness note:** Moonshot publishes no separate benchmark table for HighSpeed; the numbers below are measured on **K2.7 Code**, the base checkpoint Moonshot says has "the same coding ability". Every row is attributed to the base lane — treat them as vendor-asserted equivalent, not an independent HighSpeed run.

Agent / tool use:

- Terminal-Bench 2.1: **67.04%** (Vals AI, `kimi/kimi-k2.7-code`) — #1 open-weight at time of eval
- Terminal-Bench Hard: **44.7%** (Artificial Analysis via Requesty)
- τ²-Bench: **90.1%** (AA via Requesty)
- GDPval / OSWorld / MCP Atlas / Toolathlon: **no verified public score found**
- SWE-bench (agentic loop): **78.20% Verified** (Vals) — matches Claude Opus 4.6 Thinking and GPT-5.4 xhigh per Vals

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (AA via Requesty)
- HLE: **35.0%** (AA via Requesty)
- Artificial Analysis Intelligence Index: **26** (AA direct page for Kimi K2.7 Code, v4.3.2, re-checked 2026-10-09 — **#24/117** open-weights class, median 18). **Conflict resolved:** the 2026-10-01 first pass recorded 43 via a Requesty catalog listing; the primary AA page reads 26 on the current index, so 43 is treated as a stale/variant listing and superseded.
- AIME / MMLU-Pro / LCR / CritPt: **no verified public score found**

Coding:

- SWE-bench Verified: **78.20%** (Vals) — new #1 open-weight at eval time
- Terminal-Bench 2.1: **67.04%** (Vals)
- LiveCodeBench: **82.05%** (Vals; #8 open-weight)
- Vibe Code Bench v1.1: **47.21%** (Vals; #3 open-weight)
- SciCode: **47.5%**; AA Coding Index: **60.8** (AA via Requesty)

Long context:

- 256–262K window (AA page 2026-10-09: 256k header / 260k FAQ — consistent with OpenCode's 262K); MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- Image + video input (Kimi Code docs HighSpeed row); independently re-confirmed 2026-10-09 via the HF `moonshotai/Kimi-K2.7-Code` chat template (image + `kimi_k25_video_placeholder` blocks); MMMU / CharXiv / Video-MME: **no verified public score found**
- HF-card eval rows (base checkpoint, 2026-10-09): LHTB (Long-Horizon Terminal-Bench) Solved **3/46** (rank 4; mean reward 36.7); WildClawBench Overall **46.9** (rank 10, avg time 674s) — both community-PR, `verified: false` on HF.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-Bench 90.1% is strong and Terminal-Bench 2.1 67.04% clears the mid band (TB 45–60 → 50–70) at its top end; Terminal-Bench Hard 44.7% sits just under that band and there is no GDPval/OSWorld row — composite at 78, all rows vendor-base-lane.
- **Reasoning: 79/100.** GPQA Diamond 89.6% is just under the 90%+ frontier band (~87 by interpolation) and HLE 35.0% is mid-high (AA rows via Requesty; not re-published on the AA model page as of 2026-10-09); the direct AA Intelligence Index reads **26** (v4.3.2, #24/117, above the class median 18 but inside the mid band rather than above it — replaces the stale 43 listing), and AA measures 77.3 t/s with a 2.97s TTFT on the base lane — trimmed 80→79 on the corrected Index.
- **Context window: 70/100.** 262K (256K marketed) sits just above the 200K anchor (200K = 70) in the 200K–500K tier (65–84), with an unusually generous 262K output cap; no retrieval measurement found.
- **Multimodal: 78/100.** Image **and video** input qualifies for the +video/PDF-in band (75–90); no audio input, no non-text output, and no vision/video benchmark row — scored low in band.
- **Coding: 85/100.** SWE-bench Verified 78.20% clears the DeepSWE-74% frontier anchor, LiveCodeBench 82.05% hits the mid anchor, Terminal-Bench 2.1 67.04% is open-weight-leading — but SciCode 47.5% (<55% ref), AA Coding Index 60.8 (<70 ref) and Vibe 47.21% keep it out of the 90s.
- **Cost efficiency: 88/100.** $0.95/$4.00 lands essentially at the ~$1.25/$4.25 ≈ 88 anchor with a cheaper input and 80%-off cache reads — tempered by the 3× quota multiplier that HighSpeed burns on Kimi Code plans.
- **Overall Score: 78/100.** (78 + 79 + 70 + 78 + 85) / 5 = 78.0 → 78 — best-fit as a fast open-weight coding agent: SWE-V 78% and TB2.1 67% with 6× output speed, capped by 262K context, mid-band Terminal-Bench Hard and the fact that all published numbers are measured on the base K2.7 Code checkpoint.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-09 (original: 2026-10-01; user-approved second pass)
- Method: public internet research (official Kimi Code model-configuration docs, Vals AI K2.7 Code eval write-up, Artificial Analysis rows via Requesty, Fireworks model metadata, OpenCode model-usage data); second pass 2026-10-09 re-checked [Artificial Analysis Kimi K2.7 Code](https://artificialanalysis.ai/models/kimi-k2-7-code) and [HF moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) (AA and Grokipedia have no page for the HighSpeed ID itself; Vals URL 404 — coverage gap confirmed); scores are normalized 1–100 interpretations, not official vendor scores. Key caveat: benchmark rows are measured on K2.7 Code, asserted equivalent for HighSpeed by Moonshot.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.7_Code.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Conflict resolved:** AA Intelligence Index 43 (Requesty catalog, first pass) vs **26** (AA direct, v4.3.2, #24/117 open-weights) → 26 adopted as the primary-source value; Reasoning trimmed 80→79, Overall unchanged at 78.
- **Confirmed:** $0.95/$4.00 pricing, 80% cache discount, 256–262K context class, image+video input (HF chat template), 1T-class MoE — all re-verified.
- **New:** 32B active params (AA); HF eval rows LHTB Solved 3/46 (rank 4) and WildClawBench 46.9 (rank 10); base-lane speed 77.3 t/s (#30/117), TTFT 2.97s, $0.54/Index-task; Modified MIT license; 8 API providers.
- **Coverage gap:** the HighSpeed serving ID (`kimi-for-coding-highspeed`) is not tracked independently by AA, Benchmark Registry, or Grokipedia — all HighSpeed claims remain Moonshot-asserted equivalents of base-lane numbers.
