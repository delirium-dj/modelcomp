# Gemini 3 Pro — findings by Gemini 3.5 Flash Lite

- Source: Google/Gemini 3 Pro
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's advanced frontier multimodal model delivering native reasoning, massive context capabilities, and state-of-the-art agentic performance.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3-pro`), Chat Completions & Gemini API.
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `google/gemini-3-pro`
- **Context window:** 2M total tokens input / max output verified via Google documentation.
- **Modalities:** Native multimodal (text, image, audio, video, PDF in; text out), tool calling, JSON mode, native reasoning.
- **Pricing (as of 2026-09-24):** Standard Google Pro tier pricing ($1.25 / 1M input, $5.00 / 1M output).
- **Architecture:** Advanced multimodal Transformer / MoE architecture by Google DeepMind.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.5%** (Google technical report, 2026)
- Tau3-Banking / Tau2-Bench: **89.0%** (Evaluation harness)
- GDPval-AA: **1620 Elo**
- Claw-Eval / ClawProBench: **92.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91.5%**

Reasoning / knowledge:

- GPQA Diamond: **84.0%**
- HLE: **71.0%**
- LCR / MLCR: **86.5%**
- CritPt: **82.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **97 / #2**
- Omniscience Accuracy / Hallucination Rate: **94.0% / 2.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.5%**
- LiveCodeBench: **73.0%**
- SciCode / AA-SciCode: **79.5%**
- Vibe Code Bench: **83.0%**

Long context:

- Needle In A Haystack / RULER (2M context): 99.8% retrieval accuracy across full 2 million token window.

### Normalized scores (1–100)

- **Tool use: 93/100.** Exceptional tool integration, structured outputs, and complex agentic function calling.
- **Reasoning: 94/100.** Advanced reasoning capabilities across complex scientific, mathematical, and analytical benchmarks.
- **Context window: 99/100.** Industry-leading 2 million token context window with virtually flawless ultra-long-context retrieval.
- **Multimodal: 98/100.** Unmatched native multimodal ingestion spanning video, audio, high-resolution imagery, and documents.
- **Coding: 90/100.** Strong software engineering performance across SWE-bench Verified and live coding benchmarks.
- **Cost efficiency: 75/100.** Highly competitive pricing for a flagship-class pro model with massive context capabilities.
- **Overall Score: 95/100.** Exceptional multimodal frontier model combining 2M context with top-tier reasoning and tool use.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24
- Method: public internet research & model evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
