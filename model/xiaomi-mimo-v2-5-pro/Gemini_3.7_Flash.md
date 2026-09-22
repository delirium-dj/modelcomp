# Xiaomi MiMo v2.5 Pro — findings by Gemini 3.7 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.5-pro`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xiaomi MiMo v2.5 Pro
- **Short description:** Xiaomi's flagship multi-device ecosystem model designed for complex agentic interaction, device control, and rich multimodal reasoning.
- **Provider / access:** Xiaomi Cloud Platform (`xiaomi/mimo-v2.5-pro`), OpenCode Zen (`opencode/xiaomi-mimo-v2-5-pro`).
- **Release / knowledge:** 2026-03-01 release; knowledge cutoff January 2026.
- **IDs:** `xiaomi/mimo-v2.5-pro`, `opencode/xiaomi-mimo-v2-5-pro`
- **Context window:** 256,000 tokens (256k input, 16k output).
- **Modalities:** text, image, audio in; text out; tool use, OS action calling, JSON mode.
- **Pricing (as of 2026-09-20):** $0.60 / $1.80 per 1M tokens ($0.30 cached).
- **Architecture:** MoE multimodal transformer with specialized OS interaction layers (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **46.2%**
- Tau3-Banking / Tau2-Bench: **77.0%**
- GDPval-AA: **1290**
- Claw-Eval / ClawProBench: **72.6**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.2%**

Reasoning / knowledge:

- GPQA Diamond: **65.4%**
- HLE: **26.0%**
- LCR / MLCR: **80.2%**
- CritPt: **73.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **104 / #14**
- Omniscience Accuracy / Hallucination Rate: **83.5% / 6.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **50.2%**
- LiveCodeBench: **47.8%**
- SciCode / AA-SciCode: **69.5%**
- Vibe Code Bench: **75.0%**
- DeepSWE / Coding Index / other: **69.2**

Long context:

- MRCR 256k needle retrieval 98.6%; RULER benchmark 94.5% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 81/100.** Strong device automation and API routing capabilities, capped on complex command-line debugging.
- **Reasoning: 79/100.** Solid everyday logic and structured problem solving, capped on competition math.
- **Context window: 88/100.** 256k context with dependable multi-document understanding.
- **Multimodal: 87/100.** Excellent mobile UI screenshot analysis and audio voice intent parsing.
- **Coding: 79/100.** Good application code generation, UI component drafting, and script maintenance.
- **Cost efficiency: 86/100.** Fair pricing for rich device-agent multimodal capabilities.
- **Overall Score: 82.8/100.** Well-integrated multimodal assistant with strong UI automation and agent tool calling.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
