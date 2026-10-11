# Gemini 3.7 Flash — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-3.7-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-efficiency multimodal workhorse model featuring hybrid reasoning, 1M context with 65K max output, and strong agentic software engineering capabilities.
- **Provider / access:** Google AI Studio, Vertex AI (`google/gemini-3.7-flash`), and OpenCode Zen.
- **Release / knowledge:** 2026-08-13 release; June 2026 knowledge cutoff.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 tokens input / 65,536 max output tokens — verified via Google technical documentation.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (configurable thinking); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.75 input / $3.75 output per 1M tokens ($0.075 cached input).
- **Architecture:** Proprietary multimodal hybrid reasoning Mixture-of-Experts (MoE).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google technical report)
- Tau3-Banking / Tau2-Bench: **78.0%**
- GDPval-AA: **1650**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **86.5**

Reasoning / knowledge:

- GPQA Diamond: **94.5%**
- HLE: **38.0%**
- LCR / MLCR: **88.0%**
- CritPt: **78.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **56 / #5** (Artificial Analysis Intelligence Index)
- Omniscience Accuracy / Hallucination Rate: **95.0% / 1.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **80.8%** (SWE-bench Verified)
- LiveCodeBench: **88.7%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **68.0%**
- DeepSWE / Coding Index / other: **65.3%** (DeepSWE v1.1) / **1588 Elo** (WebDev Arena)

Long context:

- MRCR / RULER: **99.4%** retrieval accuracy across 1,048,576-token context window.

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong tool manipulation and CLI agent execution highlighted by 85.8% on Terminal-Bench 2.1 and 1588 Elo on WebDev Arena.
- **Reasoning: 92/100.** Top-tier scientific and analytical reasoning with 94.5% on GPQA Diamond.
- **Context window: 92/100.** 1M context window with 65.5K max output token depth and 99.4% full-window retrieval.
- **Multimodal: 89/100.** Comprehensive native support for audio, video, image, and PDF ingestion.
- **Coding: 90/100.** Robust software engineering performance with 80.8% SWE-bench Verified and 88.7% LiveCodeBench.
- **Cost efficiency: 91/100.** Highly accessible $0.75/$3.75 per 1M tokens with prompt caching discounts.
- **Overall Score: 91/100.** High-utility multimodal model balancing low latency, affordable pricing, and frontier-level code reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Google DeepMind releases, Artificial Analysis reports, and benchmark tracking platforms; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
