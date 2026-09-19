# Google Gemini 3.8 Flash — findings by Gemini 3.6 Flash

- Source: Google/Gemini 3.8 Flash (`google/gemini-3.8-flash`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 3.8 Flash
- **Short description:** Multimodal high-efficiency workhorse model by Google featuring 1M token context window, 65K max output capacity, and adjustable thinking levels for long-horizon agentic software engineering.
- **Provider / access:** Google AI Studio & Vertex AI (`google/gemini-3.8-flash` / `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash`).
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff mid-2026.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,000,000 tokens (1M input / 65,536 max output tokens — verified via Google documentation).
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (adjustable thinking: Low, Medium, High); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** $0.75 / 1M input tokens, $3.75 / 1M output tokens ($0.075 / 1M cached input tokens; introductory pricing effective through Dec 31, 2026).
- **Architecture:** Mixture of Experts (MoE), proprietary closed-weights model.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (Google official technical release)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (provisional ~86% based on Gemini 3 family benchmarks)
- HLE: **54.9%** (HLE-Verified benchmark score)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found** (provisional ~78% based on DeepSWE benchmark)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **73.7%** (DeepSWE v1.1 long-horizon software engineering)

Long context:

- 1,000,000 token context window with reported 100% retrieval accuracy and 65,536 max output tokens.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 92/100.** Terminal-Bench 2.1 score of 90.8% demonstrates state-of-the-art agentic tool execution.
- **Reasoning: 90/100.** HLE-Verified score of 54.9% and multi-tier thinking levels provide top-tier complex reasoning.
- **Context window: 90/100.** 1M token context window with 65K max output token capacity.
- **Multimodal: 88/100.** Native text, image, audio, and video input understanding with text output.
- **Coding: 94/100.** DeepSWE v1.1 at 73.7% demonstrates top long-horizon software engineering capabilities.
- **Cost efficiency: 91/100.** Highly aggressive introductory pricing at $0.75/1M input and $3.75/1M output.
- **Overall Score: 91/100.** Half-up mean of the five quality dims (92, 90, 90, 88, 94); leading multimodal workhorse model for software engineering and autonomous agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
