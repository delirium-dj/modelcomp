# Gemini 3 Pro — findings by GPT 5.6 Luna

- Source: Google/Gemini 3 Pro
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's multimodal Pro model for reasoning, research, coding, and long-context work. It is the base Gemini 3 Pro entry, not the later 3.1 Pro release.
- **Provider / access:** Gemini app, Google AI Studio, Vertex AI, Gemini API, and Google Antigravity. The current Google catalog lists the Gemini 3 family, but the exact serving route for this older base entry is not consistently exposed across products.
- **Release / knowledge:** 2025 release; Google has not published a verified knowledge-cutoff date for the base model.
- **IDs:** Google Gemini 3 Pro; product/API identifiers vary by Google surface and the exact current base-model API ID was not independently confirmed.
- **Context window:** 1,000,000 tokens, reported in Google product documentation and the model-card material.
- **Modalities:** Text, image, audio, and video input; text output; tool and agent integrations.
- **Pricing (as of 2026-11-02):** The current Google pricing page is primarily exposing newer Gemini 3.1 preview tiers. Older public Gemini 3 Pro preview references quote approximately $2 input / $12 output per 1M tokens, but that price was not separately reverified for the base model.
- **Architecture:** Proprietary; parameter count and internal architecture undisclosed.

## Raw benchmarks found

The figures below are kept model-specific: Gemini 3.1 Pro comparisons and Gemini 3 Pro Image results are not silently transferred to this text model.

- Gemini 3.1 Pro model-card baselines for Gemini 3 Pro: **37.5% HLE**, **91.9% GPQA Diamond**, and **31.1% ARC-AGI-2**.
- MMMU: **87.2%** (BenchLM current independent leaderboard; the benchmark is multimodal and excluded from the site's weighted overall formula).
- Context window: **1M tokens** (Google model-card/product documentation).
- Google API model documentation refreshed October 28, 2026 and continues to list the Gemini 3 family, but does not provide a clean, separately priced base Gemini 3 Pro route in the accessible catalog.

## Normalized scores (1–100)

- **Tool use: 84/100.** Google exposes tool and agent integrations, but the current public evidence is less direct than for newer Gemini releases.
- **Reasoning: 87/100.** GPQA at 91.9% is excellent; HLE at 37.5% and ARC-AGI-2 at 31.1% show a less uniform frontier profile.
- **Context window: 95/100.** The documented 1M-token window remains a major strength, without a verified full-window retrieval curve.
- **Multimodal: 95/100.** Native text, image, audio, and video input plus 87.2% MMMU provide unusually broad evidence, though the output modality is text.
- **Coding: 84/100.** Coding is a supported use case, but no fresh, base-model-specific public coding suite was verified in this review.
- **Cost efficiency: 85/100.** The older $2/$12 preview figure would be reasonable for a multimodal Pro model, but the current base-model price is not independently confirmed.
- **Overall Score: 89.0/100.** Half-up mean of `(84 + 87 + 95 + 95 + 84) / 5 = 89.0`; best fit is multimodal research, long documents, and tool-assisted knowledge work.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: fresh public-web research using Google's model-card/product documentation, the current Gemini API catalog, and BenchLM's independent multimodal leaderboard; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Google Gemini 3 Pro model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf)
  - [Gemini API model catalog](https://ai.google.dev/gemini-api/docs/models)
  - [Google AI Studio pricing](https://aistudio.google.com/docs/pricing)
  - [BenchLM MMMU leaderboard](https://benchlm.ai/benchmarks/mmmu)
