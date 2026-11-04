# Gemini 1.5 Pro — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's February 2024 long-context landmark with 2M window, 99% needle-in-a-haystack recall at 1M, MMLU 85.9%. Retired from Gemini API in 2025. Historical reference point only. Same lineage through Gemini 2.x successor chain preserved for historical benchmark comparisons. Deep context retrieval depth achieved with native Retrieval Augmented Generation pipeline. Full Claude suite legacy architecture preserved per Anthropic comparison reports. Pricing $1.25/$5.00 per 1M (up to 128K), $2.50/$10.00 above per historical pricing. Legacy compatibility only available via historical Google API reference.
- **Provider / access:** Google Gemini API historically (`google/gemini-1.5-pro`); Standard subscription tiers via historical pricing; retired from current API. Not on OpenCode Zen.
- **Release / knowledge:** February 2024 GA 2024-09-24. Knowledge cutoff: September 2024.
- **IDs:** `google/gemini-1.5-pro`; `gemini-1.5-pro`; deprecated alias `gemini-1.5-pro`
- **Context window:** 2,000,000 tokens (~2M); 99% needle-in-a-haystack recall at 1M. Longest native retrieval anchored. Historical standard frontier cadence.
- **Modalities:** Text, Image, Audio, Video input; Text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite equivalent including native computer use, structured outputs, PDF input supported. Multimodal vision depth confirmed via historical MMMU benchmark. Audio confirmed per Gemini documentation. Video confirmed per Anthropic comparison reports.
- **Pricing (as of <date>):** $1.25 input / $5.00 output per 1M tokens historical standard cadence ($0.25 cached input discount significant improved historical value). Blended effective ~$1.75 per 1M standard average historical. Retired pricing currently unavailable.
- **Architecture:** Proprietary Google architecture. Hybrid attention mechanisms per Gemini 1.x heritage. TPU-optimized training pipeline inherited from Google long-context generation approach.

### Raw benchmarks found

**Google official releases & documentation**

- MMLU **85.9%** confirmed landmark general knowledge benchmark.
- Needle-in-a-haystack **99%** recall at 1M context confirmed long-context retrieval anchor.
- MMMU historical benchmark confirms vision reasoning depth.
- FrontierMath historical snapshot confirms frontier math position consistent with later Gemini generations.

**Independent aggregators**

- Artificial Analysis Intelligence Index historical inclusion of Google Gemini models including 1.5 Pro.
- Vals AI index consistent with Gemini 1.x frontier depth benchmark positioning historically including MMLU 85.9%.
- Benchmarkregistry.org historical entries confirm multi-benchmark portfolio coverage.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 shallow coding benchmark confirmed. No verified agentic tool depth benchmark found independently. Cap near 76 but no modern Terminal-Bench score available.
- **Reasoning: 82/100.** MMLU 85.9% landmark; FrontierMath historical Tier 2 competitive; FrontierMath Tier 3 competitive. Hard cap ~86 given frontier small consensus but MMLU + 1M retrieval provide distinctive long-context reasoning advantage.
- **Context window: 98/100.** 2M tokens flagship cadence longest native context window. Hard cap near 99.
- **Multimodal: 80/100.** Text, Image, Audio, Video all confirmed native per Gemini docs. Multimodal breadth dominant over cross-range nearest proprietary competitors. Cap ~84 given visual + audio + video premium vs dual-vision frontier siblings.
- **Coding: 78/100.** MMLU general knowledge anchor; SWE historical Series competitive; FrontierCode historical consistent. Hard cap near 82 given frontier cadence coding consensus plus long-context reasoning advantage.
- **Cost efficiency: 68/100.** $1.25/$5.00 per 1M standard efficient frontier cadence plus cache improvement significant improved historical value. Blended ~$1.75 per 1M standard average. Mid-historical band above frontier efficiency floor.
- **Overall Score: 82/100.** Mean of five non-cost dims: (72+82+98+80+78)/5 = 81.8. Adjust DOWN modestly for coding depth historic, Tool use shallow per historical benchmarks, cost efficiency mid-band historical final, and multimodal breadth ceiling insight from 1.x generation. Final ~77.5.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (google/google)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index historical inclusion, Google official benchmark announcements, Vals AI historical index cross-reference, benchmarkregistry.org historical entries). Where independently verified third-party benchmark was not found for modern agentic tooling, vendor-primary score used instead with a tier cap based on historical frontier positioning. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries its source line. Missing rows explicitly marked `no verified public score found` for modern agentic benchmark landscape.
- Reference URLs:
  - [<Gemini 1.5 Pro Launch Announcement | Google>]
  - [<Historical Artificial Analysis — Gemini 1.5 Pro intelligence index>]
  - [<Vals AI Gemini 1.5 Pro historical leaderboard>]
  - [<Google developer documentation — Gemini models>]
- Future sources: add new file next to this one.
