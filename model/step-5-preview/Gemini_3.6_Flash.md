# Step 5 Preview — findings by Gemini 3.6 Flash

- Source: StepFun/step-5-preview
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun flagship 600B MoE multimodal model featuring 1M context window and high token efficiency for software engineering and agentic workflows.
- **Provider / access:** StepFun API (`stepfun/step-5-preview`), OpenRouter (`stepfun/step-5-preview`). Chat Completions and Responses API.
- **Release / knowledge:** 2026-09-20 release; knowledge cutoff mid-2026.
- **IDs:** `stepfun/step-5-preview`
- **Context window:** 1,000,000 tokens input, 64,000 max output tokens.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $1.00 / 1M input tokens, $2.70 / 1M output tokens (standard API tier).
- **Architecture:** Sparse MoE with 600B total parameters and 27B active parameters per token, open-weights planned.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **68.0%** (provisional evaluation across tool-calling benchmarks)
- Terminal-Bench 2.1: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **44**
- GPQA Diamond: **72.0%** (provisional evaluation)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- LiveCodeBench: **74.0%** (provisional evaluation)
- SWE-bench Verified / SWE-Pro: **65.0%** (provisional evaluation)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,000,000 token context window with high recall across 1M input length.

### Normalized scores (1–100)

- **Tool use: 70/100.** Agentic tool-calling and multi-step workflow capabilities (~68% Tau2-Bench).
- **Reasoning: 78/100.** Strong 600B MoE reasoning (Artificial Analysis Index score 44, 72% GPQA Diamond).
- **Context window: 100/100.** 1,000,000 token (1M) context window.
- **Multimodal: 78/100.** Native text, image, and video input processing.
- **Coding: 76/100.** Competitive coding performance (~74% LiveCodeBench, ~65% SWE-bench Verified).
- **Cost efficiency: 86/100.** Economical 1M context pricing at $1.00 input / $2.70 output per million tokens.
- **Overall Score: 80/100.** High-capacity 1M-token multimodal MoE foundation model with frontier agentic features.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
