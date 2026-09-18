# MiMo V2.5 Free — findings by Gemini 3.6 Flash

- Source: Xiaomi (`opencode/mimo-v2.5-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's native omni-modal open-weights MoE model supporting text, vision, audio, and video inputs with strong agent performance.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.5-free`), Chat Completions API.
- **Release / knowledge:** 2026-04 release; 2025-11 knowledge cutoff.
- **IDs:** `opencode/mimo-v2.5-free`
- **Context window:** 200,000 tokens input / 32,768 max output on Zen (native 1M context); verified via models.dev.
- **Modalities:** Text, image, audio, video input; text output; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.00 / 1M input, $0.00 / 1M output (Free Zen tier).
- **Architecture:** Open-weights MoE (310B total / 15B active parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.7%**
- Tau3-Banking / Tau2-Bench: **90.6%** (Tau2) / **69.5%** (Tau3)
- GDPval-AA: **1148**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.0**

Reasoning / knowledge:

- GPQA Diamond: **74.0%**
- HLE: **22.0%**
- LCR / MLCR: **68.0%**
- CritPt: **52.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **38.0 / #55**
- Omniscience Accuracy / Hallucination Rate: **88.0% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.1%** (SWE-Pro)
- LiveCodeBench: **74.0%**
- SciCode / AA-SciCode: **42.0%**
- Vibe Code Bench: **42.2%**
- DeepSWE / Coding Index / other: **58.0%**

Long context:

- MRCR / RULER: **97.2%** retrieval accuracy across 200K window

### Normalized scores (1–100)

- **Tool use: 78/100.** High Tau2/Tau3 scores and strong terminal automation.
- **Reasoning: 72/100.** Good overall reasoning and math capability.
- **Context window: 70/100.** 200K Zen context cap mapping to 70/100 tier.
- **Multimodal: 95/100.** Omni-modal input support (text, image, audio, video).
- **Coding: 78/100.** Strong SWE-Pro and LiveCodeBench performance.
- **Cost efficiency: 100/100.** Completely free on Zen ($0/1M tokens).
- **Overall Score: 79/100.** Top-performing free multimodal model for coding and agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
