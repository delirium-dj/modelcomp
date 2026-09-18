# MiMo V2.5 Free — findings by Gemini 3.5 Flash Lite

- Source: Xiaomi/MiMo V2.5 Free
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Native omni-modal open-weights MoE by Xiaomi for text, image, video and audio understanding plus strong agentic coding. Free capped tier on Zen.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (Chat Completions API).
- **Release / knowledge:** 2026 release.
- **IDs:** `opencode/mimo-v2.5-free`
- **Context window:** 200K Zen cap (native 1M) / 32K out.
- **Modalities:** Text, image, audio, video in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** Free Zen tier; native from ~$0.14/$0.28 per 1M.
- **Architecture:** Native omni-modal Mixture-of-Experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.0%**
- Tau3-Banking / Tau2-Bench: **69.0%**
- GDPval-AA: **1430 Elo**
- Claw-Eval / ClawProBench: **77.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **73.5%**

Reasoning / knowledge:

- GPQA Diamond: **64.0%**
- HLE: **48.0%**
- LCR / MLCR: **70.0%**
- CritPt: **61.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.9 / #13**
- Omniscience Accuracy / Hallucination Rate: **91.8% / 3.3%**

Coding:

- SWE-bench Verified / SWE-Pro: **60.0%**
- LiveCodeBench: **65.0%**
- SciCode / AA-SciCode: **56.0%**
- Vibe Code Bench: **74.0%**
- DeepSWE / Coding Index / other: **78.0**

Long context:

- Native 1M context with 200K Zen cap.

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool use and omni-modal interaction.
- **Reasoning: 83/100.** Solid logical reasoning across modalities.
- **Context window: 82/100.** 200K Zen cap (native 1M).
- **Multimodal: 92/100.** Native text, image, audio, and video ingestion.
- **Coding: 83/100.** Capable agentic coding benchmark performance.
- **Cost efficiency: 100/100.** Free Zen tier access.
- **Overall Score: 84.8/100.** Versatile free omni-modal open-weights model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
