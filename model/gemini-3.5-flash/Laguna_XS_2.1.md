# Gemini 3.5 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's next-generation 3.5 Flash model with enhanced speed and capabilities.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.5-flash`); OpenCode Zen; OpenAI-compatible API.
- **Release / knowledge:** Released 2026-04; knowledge cutoff approximately 2025.
- **IDs:** `google/gemini-3.5-flash` (free tier available on Google AI Studio and Zen).
- **Context window:** 1,048,576 tokens (1M input / 1M output); verified via needle-in-a-haystack tests.
- **Modalities:** Text, image, audio, PDF in; text out; reasoning support; tool calling; JSON mode.
- **Pricing (as of 2026-10-01):** Free tier available; fallback paid-tier pricing (introductory rates).
- **Architecture:** Proprietary Mixture-of-Experts (MoE) model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.5%**
- Tau3-Banking: **70.2%**
- GDPval-AA: **1480 Elo**
- SWE Atlas Codebase QnA: **81.2%**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **81.4%**
- HLE: **30.4%**
- LCR: **88.5%**
- CritPt: **75.2%**
- AI Intelligence Index: **52** (#22)
- OmniSense Accuracy: **88.5%**, Hallucination: **3.0%**

Coding:

- SWE-bench Verified: **42.4%**
- LiveCodeBench: **68.5%**
- SciCode: **42.5%**
- Vibe Code Bench: **68.2%**
- DeepSWE: **58.2%**

Long context:

- RULER / GraphWalks: **98.4%** retrieval accuracy at 1M context.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 82/100.** Terminal-Bench 76.5%, GDPval 1480 Elo, SWE-Atlas QnA 81.2% show solid tool execution; capped by missing Claw-Eval.
- **Reasoning: 80/100.** GPQA 81.4% solid; AI Index 52; HLE 30.4% mid-tier; Omniscience 88.5% excellent; CritPt 75.2% strong.
- **Context window: 100/100.** Full 1M with 98.4% retrieval at scale; verified needle-in-haystack performance.
- **Multimodal: 90/100.** Native text/image/audio/PDF in; text-only out; extensive modality support; near-perfect for text+image tier.
- **Coding: 38/100.** SWE-Verified 42.4%, LiveCode 68.5%, DeepSWE 58.2% show moderate coding ability; SciCode 42.5% lower end of range.
- **Cost efficiency: 100/100.** Free tier available with standard rate limits; excellent cost for Flash-level capabilities.
- **Overall Score: 78/100.** Mean of (82 + 80 + 100 + 90 + 38) / 5 = 78.0. Good Flash model for multimodal workflows with free tier; coding performance is moderate.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Benchmark aggregator results, needle-in-haystack verification); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.