# Gemini 2.5 Pro — findings by GPT 6 Astra

- Source: Google DeepMind / `gemini-2.5-pro`
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemini 2.5 Pro, stable June 2025 model.
- **Short description:** Multimodal reasoning model for code, documents and mixed-media analysis.
- **Provider / access / IDs:** Gemini API `gemini-2.5-pro`, native generateContent API; no verified Zen Free ID. Current access is limited to previous active users; Google says it is not deprecated.
- **Release / knowledge:** June 2025 stable update; January 2025 cutoff.
- **Context window:** 1,048,576 input, 65,536 output.
- **Modalities:** Text, images, audio, video and PDF input; text output. Thinking, functions, structured output, code execution and grounding supported; no native audio/image generation or Live API. [Current API documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro).
- **Pricing (2026-10-04):** Evaluated paid standard tier: USD 1.25 input / 10 output / 0.125 cache hit per million tokens through 200K input; above that, 2.50 / 15 / 0.25. Cache storage USD 4.50 per million tokens/hour. Listed free tier has quotas and product-improvement data use; paid tier does not. Access restriction still applies. [Pricing](https://ai.google.dev/gemini-api/docs/pricing?authuser=2).
- **Architecture:** Proprietary sparse MoE transformer; parameter counts undisclosed. [Model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf).

### Raw benchmarks found

Agent / tool use:

- Independent AA: GDPval-AA v2.1 **444 Elo**, AA-Briefcase v1.1 **302**, AutomationBench-AA **2%**, Terminal-Bench 4.0 **0%**. [AA comparison, Gemini column](https://artificialanalysis.ai/models/comparisons/minimax-m3-vs-gemini-2-5-pro).
- Terminal-Bench 2.1, Tau3/Tau2, Claw-Eval and MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Vendor GA table: GPQA Diamond **86.4%**, HLE **21.6%**, AIME 2025 **88.0%**. [June card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf).
- AA: Intelligence Index **16**, HLE **23%**, CritPt **3%**, Omniscience **−16** (index, not accuracy). Current index versions differ from older normalization references. [AA](https://artificialanalysis.ai/models/comparisons/minimax-m3-vs-gemini-2-5-pro).

Coding:

- Vendor GA SWE-bench Verified **59.6% single attempt / 67.2% multiple attempts**, Aider Polyglot **82.2%**, LiveCodeBench January–May 2025 **69.0%**. GA evaluations used the June 5 preview endpoint; March/May columns are different versions. [Card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf).
- Independent SciCode **46%**. [AA](https://artificialanalysis.ai/models/comparisons/minimax-m3-vs-gemini-2-5-pro).
- SWE-Pro, Vibe Code Bench and DeepSWE: no verified public score found.

Long context:

- MRCR v2 eight-needle: **58.0% cumulative 128K / 16.4% pointwise 1M**; MMMU **82.0%**, VideoMME with audio/subtitles **86.9%**. [Card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Pro-Model-Card.pdf).
- AA-LCR v1.1 **69%**. [AA](https://artificialanalysis.ai/models/comparisons/minimax-m3-vs-gemini-2-5-pro).

### Normalized scores (1–100)

- **Tool use: 42/100.** Current independent workflow and terminal results limit agent suitability despite supported tool interfaces.
- **Reasoning: 76/100.** Strong GPQA, tempered by HLE and retrieval weaknesses.
- **Context window: 95/100.** Million-token capacity meets the specified tier; weak full-window retrieval prevents an uplift.
- **Multimodal: 95/100.** Audio, video, images and PDF input cover the audio-input tier; output remains text.
- **Coding: 71/100.** Useful code editing and scientific coding; repository and modern terminal outcomes cap the score.
- **Cost efficiency: 77/100.** Paid short-context pricing offers reasonable value, with output and long-context premiums.
- **Overall Score: 76/100.** Half-up mean: (42 + 76 + 95 + 95 + 71) / 5 = 75.8; best suited to existing mixed-media workflows with supervision.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Fresh official documentation, vendor card and independent evaluator research; scores are normalized interpretations.

