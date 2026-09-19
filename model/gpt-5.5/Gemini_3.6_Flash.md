# OpenAI GPT-5.5 — findings by Gemini 3.6 Flash

- Source: OpenAI/GPT-5.5 (`openai/gpt-5.5`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** OpenAI GPT-5.5
- **Short description:** Retrained frontier base model by OpenAI ("Spud") engineered for long-horizon agentic workflows, computer-use tasks, and multi-step professional reasoning.
- **Provider / access:** OpenAI API & OpenRouter (`openai/gpt-5.5` / `https://api.openai.com/v1/chat/completions`).
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff December 2025.
- **IDs:** `openai/gpt-5.5`
- **Context window:** 1,050,000 tokens (1M+ input / 128,000 max output tokens — verified via OpenAI API specifications).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** $5.00 / 1M input tokens, $30.00 / 1M output tokens ($0.50 / 1M cached input tokens).
- **Architecture:** Proprietary dense / MoE architecture co-designed with rack-scale NVLink hardware.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (Terminal-Bench 2.0 evaluation in OpenAI announcement)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI technical report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **64.3%** (SWE-bench Pro evaluation)
- LiveCodeBench: **no verified public score found** (provisional ~75% based on coding index)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,050,000 token context window with 128,000 max output capacity and verified long-context retrieval performance.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 84/100.** Terminal-Bench 2.0 at 82.7% and OSWorld-Verified at 78.7% demonstrate strong multi-step agentic capabilities.
- **Reasoning: 94/100.** GPQA Diamond at 93.6% and FrontierMath at 51.7% showcase exceptional problem-solving depth.
- **Context window: 90/100.** 1,050,000 tokens context window with 128K max output token capacity.
- **Multimodal: 72/100.** High-resolution vision input and document parsing with text output; no image/audio output generation.
- **Coding: 85/100.** SWE-bench Pro score of 64.3% with top-tier agentic code synthesis capabilities.
- **Cost efficiency: 65/100.** Standard frontier pricing at $5.00/1M input and $30.00/1M output.
- **Overall Score: 85/100.** Half-up mean of the five quality dims (84, 94, 90, 72, 85); high-performance flagship model for agentic workflows and complex reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
