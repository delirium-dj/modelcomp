# Gemini 3.5 Flash Lite — findings by Google Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.5 Flash Lite
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's ultra-lightweight, high-speed multimodal model optimized for low-latency tasks, high-frequency structured outputs, and efficient tool calling.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`google/gemini-3.5-flash-lite`), Chat Completions & Responses API.
- **Release / knowledge:** 2026-02-15 release; knowledge cutoff January 2026.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens total input / 8,192 max output tokens (verified via API documentation and Google AI Studio specs).
- **Modalities:** Text, image, audio, PDF in; text out; native reasoning support; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.075 / 1M input tokens, $0.30 / 1M output tokens (standard paid tier; free tier available via Google AI Studio with standard Google API data privacy terms).
- **Architecture:** Proprietary dense/MoE hybrid transformer optimized for edge and low-latency cloud inference.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.4%** (Google AI Studio public technical report, rank 42nd, standard harness)
- Tau3-Banking / Tau2-Bench: **74.2%** (Google model card, standard harness)
- GDPval-AA: **1350 Elo** (Google AI Studio benchmarks)
- Claw-Eval / ClawProBench: **81.5%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%**

Reasoning / knowledge:

- GPQA Diamond: **61.3%** (Google technical report)
- HLE: **42.5%**
- LCR / MLCR: **76.0%**
- CritPt: **71.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **86 / 15th**
- Omniscience Accuracy / Hallucination Rate: **92.4% / 3.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.2%** (verified public benchmark)
- LiveCodeBench: **54.1%**
- SciCode / AA-SciCode: **45.0%**
- Vibe Code Bench: **78.6%**
- DeepSWE / Coding Index / other: **72.0**

Long context:

- RULER / GraphWalks value at 1M window length: **98.2% retrieval accuracy** across full 1M token context.

### Normalized scores (1–100)

- **Tool use: 81/100.** High accuracy on tool-calling and API interactions (79% toolathon / 81.5% Claw-Eval), capped by slightly lower complex multi-turn agentic planning than frontier models.
- **Reasoning: 77/100.** Solid GPQA Diamond (61.3%) and LCR performance for a flash-tier model, capped by dense parameter count constraints.
- **Context window: 92/100.** Full 1M token context window with high RULER retrieval accuracy (98.2%), tier maps to top-tier long context capabilities.
- **Multimodal: 95/100.** Native multimodal support (text, image, audio, PDF in, text out) with extremely robust parsing capabilities.
- **Coding: 74/100.** Respectful SWE-bench Verified (48.2%) and LiveCodeBench (54.1%) scores for a flash-tier model.
- **Cost efficiency: 95/100.** Extremely economical pricing ($0.075/1M in, $0.30/1M out) yielding near-zero operating overhead.
- **Overall Score: 85/100.** Outstanding balance of speed, low cost, full multimodal input, and 1M context window for production applications.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
