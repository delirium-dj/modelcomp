# Gemini 3.1 Flash — findings by Ling 3.0 Flash Fin

- Source: Google / Alphabet (`google/gemini-3.1-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's efficient Flash-class model balancing speed, multimodal capability, and cost, supporting text, image, audio, and PDF inputs with 1M context window and a free tier on Google AI Studio.
- **Provider / access:** Google (`google/gemini-3.1-flash`), Google AI Studio, Google Vertex AI, OpenRouter, DeepInfra. Chat Completions / Gemini API. Free tier (standard rate limits) and Paid tier.
- **Release / knowledge:** ~2026 (exact date not publicly confirmed). Knowledge cutoff approximately early 2026.
- **IDs:** `google/gemini-3.1-flash` (Google Gemini API), available via Vertex AI and OpenRouter
- **Context window:** 1,048,576 tokens (1M total; input / max output 65,536)
- **Modalities:** Text, image, audio, and PDF in; text out; reasoning enabled; tool calls (function calling, parallel); JSON mode; file search; code execution; prompt caching
- **Pricing (as of 2026-09-24):** Free tier available on Google AI Studio and OpenCode Zen with standard rate limits; Paid-tier pricing ~$0.25–$0.50/1M input, $1.50–$3.00/1M output (varies by provider)
- **Architecture:** Proprietary Mixture-of-Experts (MoE) model from the Gemini 3.1 family; optimized for high-throughput multimodal workloads

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **53.9%** (BenchLM, via Gemini 3 Flash proxy)
- τ²-bench results: **43.3%** (BenchLM, via Gemini 3 Flash proxy)
- Gert Labs: **56.63%** (BenchLM, via Gemini 3 Flash proxy)
- Claw-Eval: **49.2%** (BenchLM, via Gemini 3 Flash proxy)
- JobBench: **11.4%** (BenchLM)
- APEX-Agents: **no verified public score found**
- BrowseComp: **no verified public score found**
- MCP Atlas: **no verified public score found**
- Frontier-Bench v0.1: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (Vals): **87.9%** (BenchLM, via Gemini 3 Flash proxy)
- AA-GPQA Diamond: **81.2%** (BenchLM)
- MMLU-Pro (Vals): **88.6%** (BenchLM)
- AA-HLE: **15.0%** (BenchLM)
- AA-LCR: **53.0%** (BenchLM)
- CritPt: **1.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **27.9** (BenchLM)
- AA-Omniscience Accuracy: **45.8%** (BenchLM)
- AA-Omniscience Hallucination Rate: **92.4%** (BenchLM)
- ARC-AGI-2: **no verified public score found** (Gemini 3.1 Pro achieves 77.1%)
- HLE (Humanity's Last Exam): **no verified public score found**

Coding:

- LiveCodeBench (Vals): **85.6%** (BenchLM, via Gemini 3 Flash proxy)
- SWE-bench (Vals): **75.0%** (BenchLM, via Gemini 3 Flash proxy)
- AA-SciCode: **49.9%** (BenchLM)
- Vibe Code Bench: **20.20%** (BenchLM)
- SWE-bench Verified: **78%** (Google Developer Blog, via Gemini 3 Flash)
- FrontierSWE v2: **no verified public score found**
- cursorBench32: **no verified public score found**
- SWE-Bench Pro: **no verified public score found**

Long context:

- No MRCL / RULER / GraphWalks values reported for Gemini 3.1 Flash at 1M window.
- Context compaction and explicit caching supported (Google feature).

Multimodal & Grounded:

- AA-MMMU-Pro: **78.6%** (BenchLM, via Gemini 3 Flash proxy)
- Design Arena Website: **1211** (BenchLM)
- CharXiv: **no verified public score found**
- Video understanding: supported (up to 1 hour per prompt)
- Audio understanding: supported (up to 8.4 hours per prompt)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 73/100.** Terminal-Bench 2.1 (Vals) at 53.9% and Claw-Eval at 49.2% show moderate agentic capability; JobBench at 11.4% and τ²-bench at 43.3% are weak; capped by the absence of strong frontier agentic benchmark scores and lower APEX-Agents/BrowseComp data.
- **Reasoning: 75/100.** GPQA Diamond Vals at 87.9% and MMLU-Pro at 88.6% are strong for knowledge and graduate-level science, but HLE at 15.0% and CritPt at 1.4% reveal a steep difficulty cliff; AA Intelligence Index of 27.9 is low; capped by weak extreme-reasoning benchmarks and high hallucination rate (92.4%).
- **Context window: 98/100.** 1M token context window is among the largest available, with audio input up to 8.4 hours and video up to 1 hour; capped only by the lack of long-context retrieval benchmark data (MRCL/RULER).
- **Multimodal: 88/100.** Supports text, image, audio, and PDF inputs with video understanding up to 1 hour; AA-MMMU-Pro at 78.6% confirms strong multimodal understanding; capped at near-top range by the comprehensive multimodal input coverage and absence of video generation.
- **Coding: 67/100.** LiveCodeBench Vals at 85.6% and SWE-bench Verified at 78% are competitive, but Vibe Code Bench at 20.20% and AA-SciCode at 49.9% are weak; capped by inconsistent performance across coding harnesses and lack of SWE-bench Pro data.
- **Cost efficiency: 95/100.** Free tier available on Google AI Studio and OpenCode Zen; paid pricing is very competitive ($0.25–$0.50/M input); capped slightly by rate limits on the free tier.
- **Overall Score: 80/100.** (73 + 75 + 98 + 88 + 67) / 5 = 80.2 → half-up to 80. A model with exceptional multimodal and context capabilities and strong knowledge benchmarks, but with moderate agentic and coding performance. Best fit for multimodal-heavy workflows requiring large context windows.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (InclusionAI / Ant Group)** — 2026-09-24
- Method: Public internet research across Google AI Studio, BenchLM.ai, Google Developer Blog, and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores. Some benchmarks proxied from Gemini 3 Flash data where Gemini 3.1 Flash-specific data is unavailable.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
