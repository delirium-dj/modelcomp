# Gemini 3.5 Flash Lite - findings by Flint

- Source: Google / Gemini 3.5 Flash Lite (proprietary)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's 1M-context Flash-Lite (GPQA 83.8%, SWE-bench 75%) for ultra-low-latency volume work; free tier on AI Studio/Zen.
- **Provider / access:** Google AI Studio / Gemini API, OpenCode Zen free tier; DeepMind model card.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff 2026-03 (models.dev).
- **IDs:** `google/gemini-3.5-flash-lite`; `opencode/gemini-3.5-flash-lite`.
- **Context window:** **1,048,576** total / **65,536** out (models.dev; repo meta 1M).
- **Modalities:** Text, image, audio, PDF in; text out (models.dev).
- **Pricing (as of 2026-10-25):** Free tier on Google AI Studio / OpenCode Zen; paid tier.

- **Architecture:** Proprietary; models.dev: open_weights = false.

### Raw benchmarks found

- Coding / agentic: SWE-Bench Pro: **54.2** resolve rate (DeepMind); Terminal-Bench: **54.0** (Terminus 2, v2.1); MLE-Bench: **39.2%**.
- Reasoning: CharXiv Reasoning: **74.5** (no tools) / **76.5** (with tools); GDPval-AA: **1140** Elo; OSWorld-Verified: **74.0**.

### Cross-source comparison

- Coding conflict: repo meta **SWE-bench 75%** vs models.dev **SWE-bench Pro 54.2** -> flagged; lite tuning trails full Flash line.

### Normalized scores (1-100)

- **Tool use: 60/100.** SWE-Bench Pro **54.2%**, Terminal-Bench: **54.0%** -> mid.
- **Reasoning: 55/100.** CharXiv **74.5-76.5%**, GPQA **83.8%**, GDPval-AA **1140%** -> mid-high.
- **Context window: 95/100.** **1,048,576** total -> top tier.
- **Multimodal: 80/100.** Text, image, audio, PDF in; text out -> high.
- **Coding: 55/100.** SWE-Bench Pro **54.2%**, Terminal-Bench: **54.0%** -> mid (lite tuning).
- **Cost efficiency: 100/100.** Free tier on AI Studio/Zen.

- **Overall Score: 69/100.** Mean of the five quality dims (60 + 55 + 95 + 80 + 55) / 5 = 69; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/gemini-3.5-flash-lite)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
