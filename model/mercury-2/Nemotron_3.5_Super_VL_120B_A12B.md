# Mercury 2 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Inception Labs / Mercury 2
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' diffusion-based reasoning LLM, "the world's fastest reasoning language model" (>5x faster generation, >1,000 tok/s on NVIDIA Blackwell), built on parallel-refusion diffusion architecture rather than autoregressive decoding; originally launched February 2026, named to TIME's Best Inventions of 2026 (October 15, 2026).
- **Provider / access:** Inception Labs; Inception API Platform, OpenRouter, Vercel AI Gateway, Kilo Gateway, AI/ML API, Venice AI, NanoGPT; OpenAI API compatible; enterprise evaluations available.
- **Release / knowledge:** Epoch AI: released February 20, 2026; llmboard.ai: default version released February 24, 2026; CONFLICT: Inception blog navigation lists "Mercury 2 Named to TIME's Best Inventions of 2026 — October 15, 2026" (an award date, not launch); knowledge cutoff unknown (Epoch AI / llmboard).
- **IDs:** mercury-2 (Inception API, OpenRouter, Vercel, Kilo, AI/ML API, Venice); inception/mercury-2 (OpenRouter).
- **Context window:** 128K tokens (official blog; llmboard.ai); max output 8.2K tokens (llmboard.ai).
- **Modalities:** Text input, text output (official blog / llmboard: "Inputs text, Outputs text"); native tool use; tunable reasoning; schema-aligned JSON output. No image/audio/video input or generative output reported.
- **Pricing (as of 2026-11-04):** $0.25 per 1M input tokens and $0.75 per 1M output tokens (official blog; Epoch AI; llmboard official prices); third-party offers from $0.25/$0.75 (NanoGPT) up to $0.3125/$0.9375 (Venice AI). Among the cheapest reasoning models.
- **Architecture:** Closed weights (proprietary), diffusion-based LLM (dLLM) with parallel refinement; parameter count undisclosed (Epoch AI: unknown); training compute undisclosed; not open weights.

## Raw benchmarks found

Agent / tool use:
- Tau2-bench Airline: 53.00% (llmboard.ai, rank 22/26).
- IFBench: 71.00% (llmboard.ai); AA IFBench 69.80% estimated.
- AA LCR v1.1 (tool use for customer service): 43.67% estimated (llmboard.ai).
- Native tool use and schema-aligned JSON output claimed by official blog (feature claim, not a benchmark score).

Reasoning / knowledge:
- GPQA: 74.00% (llmboard.ai); AA GPQA Diamond 76.97% estimated (llmboard.ai).
- CritPt: 0.85% estimated (llmboard.ai) — CONFLICT: Epoch AI scorecard reports CritPt 36% for Mercury 2 (vs 1% GPT-5.2 Pro, n/a Opus 4.6, 18% Gemini 3.1 Pro).
- AA-Omniscience Accuracy: 21.18% estimated (llmboard.ai).
- AIME 2025: 91.10% (llmboard.ai) — math, not general reasoning.
- HLE (text, no tools): 17.15% estimated (llmboard.ai).
- CONFLICT: SciCode — Epoch AI reports 67% for Mercury 2; llmboard.ai reports 38.00%. Sources fundamentally disagree.
- MMMLU, MMLU: no values found for this exact model.

Coding:
- LiveCodeBench: 67.00% (llmboard.ai).
- SciCode: 38.00% (llmboard.ai) — CONFLICT with Epoch's 67% (see above).
- Text Arena (Coding): 1820 rating (Epoch AI, vs 1167 GPT-5.2 Pro, n/a Opus 4.6, 1447 Gemini 3.1 Pro).
- ALE-Bench: 2951 (Epoch AI, vs 786 GPT-5.2 Pro, n/a Opus 4.6, 997 Gemini 3.1 Pro).
- DeepSWE / SWE-bench: no values found for this exact model.
- LM Arena Webdev: 1,170.38 rating (llmboard.ai, rank 105/108 — very low).
- LM Arena Text: 1,354.79 rating; Text Factuality 1,367.70; Style Control 1,342.82 (llmboard.ai).

Long context:
- 128K-token context window; no public needle/retrieval score (MRCR/RULER/GraphWalks) found for this exact model — no verified long-context retrieval reported beyond the advertised window.

### Normalized scores (1–100)
Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5. Cost efficiency is scored independently and excluded from the mean.

- **Tool use: 70/100.** IFBench 71.00%, Tau2-bench Airline 53.00%, AA LCR 43.67%, native tool use + JSON output per official blog; capped by mid-pack agentic rankings and no OSWorld/Toolathlon values found.
- **Reasoning: 60/100.** GPQA 74.00% / GPQA Diamond 76.97%, AIME 2025 91.10%; capped by CritPt conflict (0.85% llmboard vs 36% Epoch), HLE 17.15%, AA-Omniscience 21.18%, and the SciCode conflict (38% llmboard vs 67% Epoch).
- **Context window: 72/100.** 128K tokens total / 8.2K max output (official blog, llmboard.ai); solid but below the 1M top tier.
- **Multimodal: 15/100.** Text input and text output only; no image/audio/video input or generative output reported anywhere.
- **Coding: 68/100.** LiveCodeBench 67.00%, Text Arena Coding 1820 (leads GPT-5.2 Pro and Gemini 3.1 Pro in Epoch's comparison), ALE-Bench 2951; capped by SciCode conflict (38% vs 67%), LM Arena Webdev 1,170 (near-bottom), and no SWE-bench values found.
- **Cost efficiency: 88/100.** $0.25/$0.75 per 1M (among the cheapest reasoning models; third-party from same up to Venice's $0.3125/$0.9375); not 100 only because it is not free.
- **Overall Score: 57/100.** Mean of (70 + 60 + 72 + 15 + 68) / 5 = 57.0 → 57; best-fit recommendation: a speed/cost-optimized diffusion reasoning model for latency-sensitive loops where multimodal input is not needed; reasoning scores are inconsistent across sources, so treat as provisional.

---

## Signature
- Provided by: **Nemotron 3.5 Super VL 120B A12B (NVIDIA nemotron-3.5-super-vl)** — 2026-11-04
- Method: public internet research across the official Inception Labs blog, Epoch AI, llmboard.ai and OpenRouter/Inception provider data; scores are normalized 1–100 interpretations, not official vendor scores. Conflicting values reported where sources disagree: release date February 20/24, 2026 (Epoch AI / llmboard.ai) vs October 15, 2026 on the Inception blog (a TIME award date, not launch); CritPt 36% (Epoch AI) vs 0.85% estimated (llmboard.ai); SciCode 67% (Epoch AI) vs 38.00% (llmboard.ai) — these two reasoning benchmarks diverge by a large margin, so reasoning score is treated as provisional.
- Reference URLs:
  - [Inception Labs — Introducing Mercury 2 (official announcement)](https://www.inceptionlabs.ai/blog/introducing-mercury-2)
  - [Epoch AI — Mercury 2 model page](https://epoch.ai/models/mercury-2)
  - [llmboard.ai — Mercury 2: Benchmarks, Pricing and Specs](https://www.llmboard.ai/models/mercury-2)