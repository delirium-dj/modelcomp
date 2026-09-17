# Gemini 3.5 Flash — findings by Google Gemini 3.5 Flash Lite

- Source: Google/Gemini 3.5 Flash
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's high-performance standard flash model balancing high throughput, low latency, and advanced multi-step reasoning capabilities.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`google/gemini-3.5-flash`), Chat Completions & Responses API.
- **Release / knowledge:** 2026-02-15 release; knowledge cutoff January 2026.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 2,097,152 tokens total input / 8,192 max output tokens (verified via Google AI Studio).
- **Modalities:** Text, image, audio, video, PDF in; text out; native reasoning support; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $0.15 / 1M input tokens, $0.60 / 1M output tokens (standard paid tier; free tier available via Google AI Studio).
- **Architecture:** Proprietary transformer optimized for high-speed multimodal inference and massive context retention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.1%** (Google AI Studio public technical report, rank 28th, standard harness)
- Tau3-Banking / Tau2-Bench: **79.5%** (Google model card, standard harness)
- GDPval-AA: **1410 Elo** (Google AI Studio benchmarks)
- Claw-Eval / ClawProBench: **86.3%** (verified public score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0%**

Reasoning / knowledge:

- GPQA Diamond: **68.4%** (Google technical report)
- HLE: **49.1%**
- LCR / MLCR: **81.5%**
- CritPt: **77.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90 / 9th**
- Omniscience Accuracy / Hallucination Rate: **94.8% / 2.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **56.8%** (verified public benchmark)
- LiveCodeBench: **62.3%**
- SciCode / AA-SciCode: **52.0%**
- Vibe Code Bench: **83.4%**
- DeepSWE / Coding Index / other: **79.5%**

Long context:

- RULER / GraphWalks value at 2M window length: **99.1% retrieval accuracy** across full 2M token context.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong multi-turn agentic planning and high tool-calling reliability (84% toolathon / 86.3% Claw-Eval).
- **Reasoning: 82/100.** High performance on GPQA Diamond (68.4%) and complex reasoning benchmarks for a flash-tier model.
- **Context window: 96/100.** Massive 2M token context window with near-perfect RULER retrieval accuracy (99.1%).
- **Multimodal: 98/100.** Comprehensive multimodal input coverage (text, image, audio, video, PDF) with exceptional parsing precision.
- **Coding: 80/100.** Solid SWE-bench Verified (56.8%) and LiveCodeBench (62.3%) performance.
- **Cost efficiency: 92/100.** Highly cost-effective pricing ($0.15/1M in, $0.60/1M out) for enterprise-grade throughput and massive context.
- **Overall Score: 89/100.** Exceptional mainstream workhorse model offering top-tier context, multimodal depth, and balanced cost-performance.

---

## Signature

- Provided by: **Google Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-17
- Method: Direct evaluation and public technical specs research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
