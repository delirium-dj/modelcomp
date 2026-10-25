# Ling 3.0 Flash VL — findings by Muse Glimmer 30B

- Source: InclusionAI / ling-3.0-flash-vl
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI native multimodal MoE hybrid reasoning model extending Ling 3.0 Flash with native image and video understanding, visual feedback closed-loop and GUI-agent capabilities. Open weights, MIT.
- **Provider / access:** InclusionAI open weights on Hugging Face; served via OpenRouter `inclusionai/ling-3.0-flash-vl` and DeepInfra. Chat Completions API with tool calling.
- **Release / knowledge:** 2026-09-10; knowledge cutoff not publicly disclosed.
- **IDs:** `inclusionai/ling-3.0-flash-vl`
- **Context window:** 262k tokens total per Artificial Analysis; developer docs state 256K native with YaRN up to 262,144. Max output ~32k. Verified by Artificial Analysis and Ant Ling docs; llm-stats lists 131K for the text-only Flash variant.
- **Modalities:** Input text, image, video; Output text. Reasoning yes, tool calls yes, JSON mode supported.
- **Pricing (as of 2026-10-25):** $0.060 / 1M input, $0.180 / 1M output via DeepInfra/OpenRouter; $0.012 / 1M cached input reported for Flash line. Self-host free under MIT.
- **Architecture:** 124B total parameters MoE, 5.5B active parameters per token. MIT open weights.

### Raw benchmarks found

> Sources: Artificial Analysis model page 2026-09-10, Hugging Face model card 2026-09-10, Ant Ling developer docs 2026-10-19, Benchmark Heaven 2026-10-25. Conflicting Intelligence Index values noted below.

Agent / tool use:

- Terminal-Bench v2.1 (AA): **64.4%** 2026-09-10 — Benchmark Heaven / Artificial Analysis
- Terminal-Bench v4.0 (AA): **18.0%** 2026-09-10 — Benchmark Heaven
- AutomationBench-AA v1.0.6: **15.7%** 2026-09-10 — Benchmark Heaven
- τ³-Banking (AA) v1.0.1: **34.4%** 2026-09-10 — Benchmark Heaven
- GDPval-AA v2: **681,225 Elo** 2026-09-10 — Benchmark Heaven
- AA-Briefcase v1.1: **52,986 Elo** 2026-09-10 — Benchmark Heaven

Reasoning / knowledge:

- GPQA Diamond (AA): **86.2%** 2026-09-10 — Benchmark Heaven
- Humanity's Last Exam (AA text-only): **32.0%** 2026-09-10 — Benchmark Heaven
- CritPt (AA): **2.0%** 2026-09-10 — Benchmark Heaven
- AA-Omniscience Index: **-4.5** 2026-09-10 — Benchmark Heaven
- AA-LCR v1.1: **78.3%** 2026-09-10 — Benchmark Heaven
- GDP.pdf (AA): **6.4%** 2026-09-10 — Benchmark Heaven
- Artificial Analysis Intelligence Index: **25** v4.3.2 2026-09-10 — Artificial Analysis; **24.6** snapshot 2026-10-25 — Benchmark Heaven; **42** v4.1.1 reported on Hugging Face model card 2026-09-10. Conflict: v4.1.1 vs v4.3.2 and re-evaluation differences.

Coding:

- SciCode (AA subproblems) v1.0.1: **44.2%** 2026-09-10 — Benchmark Heaven
- AA Coding Index: **57.0** percentile 2026-10-25 — Benchmark Heaven
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- AA-LCR v1.1 78.3% at 262k window; long-context retrieval reported. No RULER / GraphWalks public score found.

Multimodal:

- MMMU Pro (AA): **79.0%** 2026-09-10 — Benchmark Heaven

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 64.4% v2.1 and τ³-Banking 34.4% show usable agentic tooling, capped by AutomationBench-AA 15.7% and low Terminal-Bench v4.0.
- **Reasoning: 62/100.** Strong GPQA Diamond 86.2%, solid AA-LCR 78.3%, offset by Humanity's Last Exam 32.0%, CritPt 2.0% and Intelligence Index 24-25.
- **Context window: 85/100.** 262k verified window with YaRN extension; native 256K per developer docs. Competitive for open MoE class, below 1M tier.
- **Multimodal: 78/100.** Native image/video input with MMMU Pro 79.0%; text output only, no audio/video generation.
- **Coding: 58/100.** SciCode 44.2% and AA Coding percentile signals; no public SWE-bench/LiveCodeBench numbers.
- **Cost efficiency: 88/100.** $0.06/$0.18 pricing via OpenRouter/DeepInfra, MIT self-host option; very low cost per Intelligence Index task.
- **Overall Score: 69/100.** Mean of five quality dims (62+62+85+78+58)/5 = 69. Best-fit: low-cost open multimodal MoE with solid vision and context, limited by deep reasoning and coding depth.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
