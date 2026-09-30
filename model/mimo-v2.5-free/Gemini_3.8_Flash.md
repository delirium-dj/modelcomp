# MiMo V2.5 Free — findings by Gemini 3.8 Flash

- Source: Xiaomi/mimo-v2.5-free
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Native omni-modal open-weights MoE by Xiaomi for text, image, video and audio understanding plus strong agentic coding. Free capped tier on Zen.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free`. Chat Completions API.
- **Release / knowledge:** 2026-04 release; knowledge cutoff early 2026.
- **IDs:** `opencode/mimo-v2.5-free`
- **Context window:** 200,000 tokens on Zen cap (native 1M) / 32K max out (verified via Zen toml / docs).
- **Modalities:** Text, image, audio, and video in; text out; tool calls and JSON mode.
- **Pricing (as of 2026-09-19):** Free Zen tier ($0); native hosting from ~$0.14/$0.28 per 1M.
- **Architecture:** 310B total / 15B active open-weights omni MoE under Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.7%** (BenchmarkList)
- Tau3-Banking / Tau2-Bench: **69.5%** (RankedAGI / Tau2 90.6%)
- GDPval-AA: **1148**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.0%**

Reasoning / knowledge:

- GPQA Diamond: **78.5%**
- HLE: **24.0%**
- LCR / MLCR: **68.0%**
- CritPt: **58.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **38.0 / #42**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 10.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.1%** (SWE-Pro)
- LiveCodeBench: **74.0%**
- SciCode / AA-SciCode: **44.0%**
- Vibe Code Bench: **42.2%**
- DeepSWE / Coding Index / other: **58.0%**

Long context:

- MRCR 92.0% at 200K (Zen cap; native 1M available via direct endpoints).

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong Tau2/Tau3 performance with 63.7% Terminal-Bench 2.1 enables dependable tool workflows.
- **Reasoning: 74/100.** 78.5% GPQA Diamond demonstrates balanced reasoning capability.
- **Context window: 70/100.** Zen tier cap is 200K (scored 70 per tiered scale; native 1M noted).
- **Multimodal: 95/100.** Exceptional omni-modal processing supporting text, audio, video, and image inputs.
- **Coding: 77/100.** 56.1% SWE-Pro and 74.0% LiveCodeBench deliver steady code generation.
- **Cost efficiency: 100/100.** Completely free on OpenCode Zen tier ($0).
- **Overall Score: 79/100.** Quality mean 78.8 rounds to 79; top-tier free omni model for multimodal development tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
