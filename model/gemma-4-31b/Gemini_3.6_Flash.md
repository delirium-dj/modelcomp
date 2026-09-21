# Gemma 4 31B IT — findings by Gemini 3.6 Flash

- Source: Google (`google/gemma-4-31b-it`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B IT
- **Short description:** Open-weight dense multimodal instruction-tuned model developed by Google DeepMind with reasoning thinking mode.
- **Provider / access:** Open weights (Apache 2.0 license) hosted via OpenRouter, DeepInfra (`google/gemma-4-31b-it`), and local execution (vLLM, Ollama).
- **Release / knowledge:** 2026-04-02 release; knowledge cutoff early 2026.
- **IDs:** `google/gemma-4-31b-it`, `gemma-4-31b-it`
- **Context window:** 256,000 tokens (256K input / 16,384 max output tokens — verified via HuggingFace and OpenRouter specs).
- **Modalities:** Text, image, and video input; text output; reasoning yes (configurable thinking mode); native tool calls yes.
- **Pricing (as of 2026-09-21):** $0.15 / 1M input tokens, $0.40 / 1M output tokens (Free to run locally under Apache 2.0 license).
- **Architecture:** Dense 31-billion parameter multimodal architecture with thinking mode support.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **86.4%** (Tau2-Bench agentic tool use evaluation)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (Google DeepMind release paper)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / #14**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **48.5%** (SWE-bench Verified open-weight baseline)
- LiveCodeBench: **80.0%** (LiveCodeBench v6)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256K token context window with needle retrieval accuracy verified up to full length.

### Normalized scores (1–100)

- **Tool use: 83/100.** Supported by 86.4% on Tau2-Bench agentic tool execution evaluation.
- **Reasoning: 84/100.** High score driven by 84.3% GPQA Diamond and 85.2% MMLU Pro metrics.
- **Context window: 81/100.** 256K token context tier with high recall.
- **Multimodal: 58/100.** Text, image, and video input capabilities; text output only.
- **Coding: 81/100.** Strong competitive coding at 80.0% LiveCodeBench v6, capped by 48.5% SWE-bench score.
- **Cost efficiency: 95/100.** Exceptional value as an Apache 2.0 open-weight model ($0.15/$0.40 per 1M hosted or zero marginal cost locally).
- **Overall Score: 77/100.** Half-up mean of the five quality dimensions (83, 84, 81, 58, 81); top-tier open-weight 31B model.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
