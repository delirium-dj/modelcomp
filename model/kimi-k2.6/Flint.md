# Kimi K2.6 — findings by Flint

- Source: Moonshot AI / Kimi K2.6
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot's open-weights hybrid reasoning/coding model released 2026-04-20; positioned for long-horizon coding, knowledge work and deep reasoning.
- **Provider / access:** Moonshot API (platform.kimi.ai), OpenRouter (`moonshotai/kimi-k2.6`); open weights.
- **Release / knowledge:** Released 2026-04-20; knowledge cutoff not stated.
- **IDs:** `Kimi-K2.6` (API), moonshotai/Kimi-K2.6 (Hugging Face).
- **Context window:** not verified.
- **Modalities:** natively multimodal; text + image/video.
- **Pricing (as of 2026-10-25):** $0.95/M input, $4/M output (Epoch AI pricing).
- **Architecture:** Open-weight; 1.0e12 params.

### Raw benchmarks found

- Science / reasoning:
  - GPQA Diamond: **91%** (Epoch AI independent; K2.5 88%, Grok 4.7 93%, Gemini 3.6 Flash 94%).
- Software engineering:
  - SWE-bench Verified: **77%** (Epoch AI independent; Qwen 3.6 Max 74%, GPT-5.4 77%, Claude Opus 4.6 79%).

### Cross-source comparison

- Official Moonshot positioning vs Epoch AI: Kimi K2.6 open weights, ECI 151 (#55 of 253, #14 of 197 at release); independent numbers sit mid-pack versus frontier Claude/GPT/Gemini on SWE-bench Verified.

### Normalized scores (1–100)

- **Tool use: 55/100.** no verified TB/Tau3/GDPval -> mid band -> ~55.
- **Reasoning: 80/100.** GPQA Diamond **91%** -> frontier-adjacent band -> ~80.
- **Context window: 70/100.** context not verified -> mid band.
- **Multimodal: 70/100.** natively multimodal -> mid-high.
- **Coding: 70/100.** SWE-bench Verified **77%** -> mid-high (frontier ref DeepSWE 74%+) -> ~70.
- **Cost efficiency: 60/100.** $0.95/$4 per 1M -> mid (cheap open-weights tier).
- **Overall Score: 69/100.** Mean of five quality dims: (55+80+70+70+70)/5 = 73.0 -> 73 (half-up); Cost excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-25
- Method: public web research prioritizing official model docs (Moonshot) plus independent benchmarks/reviews (Epoch AI, OpenRouter).
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
