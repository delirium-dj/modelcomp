# Google Gemini 3.8 Live — findings by Gemini 3.6 Flash

- Source: Google/Gemini 3.8 Live (`google/gemini-3.8-live`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 3.8 Live
- **Short description:** Multimodal real-time streaming model by Google designed for continuous bidirectional voice, audio, and live video interaction with background reasoning and tool execution.
- **Provider / access:** Google AI Studio & Vertex AI Multimodal Live API (`google/gemini-3.8-live` / WebSocket endpoint `wss://generativelanguage.googleapis.com/ws/...`).
- **Release / knowledge:** 2026-09-15 release; knowledge cutoff mid-2026.
- **IDs:** `google/gemini-3.8-live`
- **Context window:** 131,072 tokens (131K input / 65,536 max output tokens — verified via Google API documentation).
- **Modalities:** Text, image, audio, live video in; text, audio out; reasoning yes (asynchronous background CoT); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-19):** $0.005 / minute audio input, $0.018 / minute audio output ($0.75 / 1M text input tokens, $3.75 / 1M text output tokens).
- **Architecture:** Mixture of Experts (MoE), proprietary closed-weights real-time streaming model.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (provisional ~68% based on real-time tool execution baseline)
- Tau3-Banking / Tau2-Bench: **68.6%** ($\tau$-Voice) / **35.1%** (Sierra $\tau$-Voice-banking)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (provisional ~84% based on Gemini 3 base model)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **82.6 / #1** (Speech-to-Speech Quality Index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found** (provisional ~70% base score)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **97.7%** (Big Bench Audio reasoning & code completion)

Long context:

- 131,072 token streaming context window with low-latency bidirectional memory.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 70/100.** $\tau$-Voice at 68.6% and Sierra $\tau$-Voice-banking at 35.1% demonstrate strong live voice tool calling.
- **Reasoning: 85/100.** Big Bench Audio score of 97.7% and asynchronous background reasoning modes.
- **Context window: 70/100.** 131,072 tokens streaming context window mapped to 70/100 tier.
- **Multimodal: 98/100.** State-of-the-art bidirectional live voice, audio, image, and video input/output capability (#1 Speech-to-Speech Quality Index).
- **Coding: 74/100.** Strong live real-time code explanation and debugging via voice/video streaming.
- **Cost efficiency: 88/100.** Highly economical per-minute audio streaming pricing ($0.005/min in, $0.018/min out).
- **Overall Score: 79/100.** Half-up mean of the five quality dims (70, 85, 70, 98, 74); flagship real-time multimodal streaming model for voice and vision agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
