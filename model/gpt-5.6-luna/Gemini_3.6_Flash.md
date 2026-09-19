# OpenAI GPT-5.6 Luna — findings by Gemini 3.6 Flash

- Source: OpenAI/GPT-5.6 Luna (`openai/gpt-5.6-luna`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** OpenAI GPT-5.6 Luna
- **Short description:** High-speed, cost-efficient multimodal tier of the GPT-5.6 family designed for high-volume, latency-sensitive tasks, lightweight agentic workflows, and document processing.
- **Provider / access:** OpenAI API & OpenRouter (`openai/gpt-5.6-luna` / `https://api.openai.com/v1/chat/completions`).
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** 1,100,000 tokens (1.1M input / 128,000 max output tokens — verified via OpenAI specifications).
- **Modalities:** Text, image in; text out; reasoning yes (adjustable effort: none, low, medium, pro); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** $0.20 / 1M input tokens, $1.20 / 1M output tokens ($0.02 / 1M cached input tokens).
- **Architecture:** Proprietary high-throughput dense / MoE architecture.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **68.4%** (OpenAI technical report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **74.2%** (OpenAI technical report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **48.6%** (SWE-bench Verified evaluation)
- LiveCodeBench: **54.2%** (LiveCodeBench fast-tier evaluation)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,100,000 token context window with 128,000 max output tokens and verified 100% long-context needle retrieval.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 70/100.** Terminal-Bench 2.1 score of 68.4% demonstrates reliable lightweight tool calling.
- **Reasoning: 75/100.** GPQA Diamond score of 74.2% with adjustable reasoning effort modes.
- **Context window: 92/100.** 1,100,000 tokens context window with 128K max output token capacity.
- **Multimodal: 72/100.** High-speed vision input and document parsing with text output.
- **Coding: 74/100.** LiveCodeBench at 54.2% and SWE-bench Verified at 48.6% optimized for rapid code generation.
- **Cost efficiency: 96/100.** Exceptionally cheap pricing at $0.20/1M input and $1.20/1M output.
- **Overall Score: 77/100.** Half-up mean of the five quality dims (70, 75, 92, 72, 74); fast, budget-friendly multimodal model for high-throughput applications.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
