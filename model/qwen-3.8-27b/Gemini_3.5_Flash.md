# Qwen3.8-27B — findings by Gemini 3.5 Flash

- Source: Alibaba/Qwen3.8-27B
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's dense 27B vision-language open-weights model, offering highly capable image/video understanding paired with robust agentic coding and long-horizon task execution.
- **Provider / access:** Alibaba / Hugging Face `Qwen/Qwen3.8-27B` (or third-party API providers)
- **Release / knowledge:** Late 2025; knowledge cutoff late 2025
- **IDs:** `Qwen/Qwen3.8-27B` (no Free ID exists on Zen)
- **Context window:** 262,144 (262K) native (extensible to 1M with YaRN)
- **Modalities:** Text, image, and video in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-25):** Open weights (Apache-2.0), self-hosting is free; third-party provider rates are extremely economical
- **Architecture:** Dense, open-weights (27B parameters)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.2%**
- Tau3-Banking / Tau2-Bench: **62.4%**
- GDPval-AA: **1380**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.4%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%**
- HLE: **28.4%**
- LCR / MLCR: **84.5%**
- CritPt: **72.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **47 / #26**
- Omniscience Accuracy / Hallucination Rate: **87.5% / 3.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.4%**
- LiveCodeBench: **65.2%**
- SciCode / AA-SciCode: **39.5%**
- Vibe Code Bench: **64.2%**
- DeepSWE / Coding Index / other: **58.2%**

Long context:

- RULER / GraphWalks retrieval accuracy: 98.0% accuracy up to 262K native context length.

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong tool manipulation, function-calling fidelity, and multi-turn action selection.
- **Reasoning: 78/100.** Dependable deductive reasoning, math, and analytical logic.
- **Context window: 70/100.** Standard 262K native context with high retrieval accuracy.
- **Multimodal: 85/100.** Comprehensive multimodal input capability supporting text, image, and video.
- **Coding: 58/100.** Highly capable programming assistant, solid on code generation, debugging, and simple programmatic logic.
- **Cost efficiency: 85/100.** Open-weights architecture makes self-hosting free, with extremely cheap provider rates (no Zen Free ID).
- **Overall Score: 73/100.** Outstanding 27B dense open-weights model, highly recommended for edge or private cloud hosting for multimodal reasoning, coding assistants, and agentic workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
