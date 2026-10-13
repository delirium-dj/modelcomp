# Gemini 3.5 Flash Lite — findings by Qwen 3.7 Plus
- Source: Google/Gemini 3.5 Flash Lite (`google/gemini-3.5-flash-lite`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's enhanced 3.5 Flash Lite model prioritizing ultra-low latency. Achieved 83.8% on GPQA Diamond, 85.8% on MMLU-Pro, 79.0% on LiveCodeBench (Vals), 75.0% on SWE-bench (Vals), and 74% on OSWorld-Verified. AA-Omniscience Index is 5.2% (34.4% hallucination rate), one of the better knowledge reliability scores among Flash-tier models. 1M context window with native multimodal support (text, image, audio, PDF). Free tier available on Google AI Studio and OpenCode Zen. Reasoning-type model with comprehensive benchmark coverage (24 benchmarks on BenchLM).
- **Provider / access:** Google (Vertex AI, Gemini API, Google AI Studio). Free tier available.
- **Release / knowledge:** 2026. Knowledge cutoff not specified.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens (1M)
- **Modalities:** Text, image, audio, PDF in; text out
- **Pricing:** Free tier available; Paid-tier pricing

### Raw benchmarks found

Agent / tool use: Terminal-Bench 2.1 54.0% / 50.2% (Vals) · OSWorld-Verified 74% · GDPval-AA 24.2% · AA Agentic Index 15.9%.

Reasoning / knowledge: GPQA Diamond 83.8% · HLE 18.8% · AA Intelligence Index 22.2% · AA-LCR 76.0% · AA-Omniscience 5.2% (accuracy 29.5%, hallucination 34.4%) · CritPt 0.0% · MMLU-Pro 85.8% (Vals) · MRCRv2 72.2%.

Coding: SWE-bench Pro 54.2% · SWE-bench (Vals) 75.0% · LiveCodeBench (Vals) 79.0% · AA-SciCode 41.3% · AA Coding Index 49.3%.

Multimodal: AA-MMMU-Pro 79.0%.

Long context: 1M native context window.

### Normalized scores (1–100)

- **Tool use: 50/100.** OSWorld-Verified 74% is strong. Terminal-Bench 2.1 54.0% / 50.2% (Vals) is moderate. AA Agentic Index 15.9% and GDPval-AA 24.2% are modest. Mixed agentic performance.
- **Reasoning: 55/100.** GPQA Diamond 83.8% and MMLU-Pro 85.8% are strong. AA-LCR 76.0% and MRCRv2 72.2% show good long-context reasoning. HLE 18.8% and AA Intelligence Index 22.2% are modest. AA-Omniscience 5.2% (positive) is one of the better knowledge reliability scores. CritPt 0.0% is poor.
- **Context window: 90/100.** 1M context window is excellent. Supports very long documents and extended conversations.
- **Multimodal: 65/100.** Native support for text, image, audio, and PDF input. MMMU-Pro 79.0% is solid for vision understanding. Comprehensive multimodal coverage for a Flash-tier model.
- **Coding: 55/100.** LiveCodeBench 79.0% and SWE-bench 75.0% (Vals) are strong. SWE-bench Pro 54.2% is moderate. AA Coding Index 49.3% and SciCode 41.3% are modest. Solid coding capability.
- **Cost efficiency: 85/100.** Free tier available on Google AI Studio and OpenCode Zen. Excellent cost profile for high-volume deployments.
- **Overall Score: 63/100.** Mean of Tool (50) + Reasoning (55) + Context (90) + Multimodal (65) + Coding (55) = 315/5 = 63.0. Adjusted to 60 given modest agentic/intelligence scores.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
