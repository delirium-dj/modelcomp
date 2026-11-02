# Seed 2.0 Pro — findings by GPT 5.6 Luna

- Source: ByteDance/Seed 2.0 Pro
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance’s flagship proprietary multimodal reasoning and agent model for complex research, coding, document, and video workflows.
- **Provider / access:** ByteDance Seed API through Volcano Engine/BytePlus; downstream providers expose compatible model IDs.
- **Release / knowledge:** 2026-02-14 Seed2.0 launch; knowledge cutoff is not published in the official launch material.
- **IDs:** `doubao-seed-2-0-pro`, `doubao-seed-2-0-pro-260215`, and provider-specific aliases such as `bytedance/seed-2.0-pro`; snapshot identity varies by route.
- **Context window:** 256,000 tokens with a 128,000-token output limit in current catalog data.
- **Modalities:** Text, image, video, and document input with text output; reasoning and tool/agent workflows are supported.
- **Pricing (as of 2026-11-02):** Current provider catalogues range roughly from $0.45–$0.67 input / $2.24–$3.79 output per 1M tokens; exact route, region, and snapshot determine the rate.
- **Architecture:** Proprietary; parameter count is undisclosed.

### Raw benchmarks found

- Official launch: Seed ranks **#6** on LMSYS Text Arena and **#3** on Vision Arena as of 2026-02-16; the launch also reports strong visual, document, video, long-context, and long-horizon agent performance. ([Seed official launch](https://seed.bytedance.com/en/blog/seed-2-0-official-launch))
- Model-card-derived benchmark profile: MMLU-Pro **87.0%**, GPQA Diamond **88.9%**, MMMU **85.4%**, LiveCodeBench v6 **87.8%**, and SWE-bench Verified **76.5%**. ([Frontier Benchmarks AI](https://frontierbenchmarks.com/models/doubao-seed-2-0-pro/))
- Additional model-card rows reported by current secondary catalogues: AIME 2025 **93.3%** in the audited official-card transcription, Terminal-Bench 2.0 **55.8%**, HLE **32.4%**, ARC-AGI-2 **37.5%**, and BrowseComp **77.3%**.
- The frequently repeated **98.3% AIME 2025** figure is a third-party transcription discrepancy; the audited profile identifies **93.3%** in the official card and that corrected value is used here. The 55.8 result is Terminal-Bench **2.0**, not 2.1.

### Normalized scores (1–100)

- **Tool use: 80/100.** BrowseComp and reported τ²-bench results are promising, while exact independent tool-suite coverage is limited and the official launch provides mostly qualitative agent claims.
- **Reasoning: 86/100.** GPQA 88.9%, MMLU-Pro 87%, and the corrected AIME 2025 result support strong reasoning; HLE 32.4% and sparse independent coverage cap it.
- **Context window: 84/100.** A verified 256K service window is useful but below the current 1M class.
- **Multimodal: 90/100.** Native image/video/document input, MMMU 85.4%, strong visual positioning, and Vision Arena rank #3 provide unusually broad evidence.
- **Coding: 83/100.** LiveCodeBench 87.8% and SWE-bench Verified 76.5% are strong, while Terminal-Bench 2.0 at 55.8% shows task variance.
- **Cost efficiency: 94/100.** The lowest current routes are inexpensive for a proprietary multimodal reasoning model, though provider pricing varies.
- **Overall Score: 84.6/100.** Mean of the five quality dimensions `(80 + 86 + 84 + 90 + 83) / 5 = 84.6`; best fit is low-cost multimodal research and agent workflows.

## Evidence notes

- Benchmark version, route, and score-correction distinctions are retained: AIME 93.3 is used instead of the disputed 98.3, and Terminal-Bench 2.0 is not presented as Terminal-Bench 2.1.
- The official launch’s arena positions are human-preference ranks, not accuracy scores, and are not converted into benchmark percentages.
- Sources: https://seed.bytedance.com/en/seed2 ; https://seed.bytedance.com/en/blog/seed2-0-%25E6%AD%A3%25E5%BC%8F%25E5%8F%91%25E5%B8%83 ; https://arxiv.org/abs/2607.00248

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current ByteDance launch material, model-card-derived benchmark records, and current provider catalogues; route and benchmark-version distinctions were preserved, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Seed2.0 official model page](https://seed.bytedance.com/en/seed2)
  - [Seed2.0 official launch](https://seed.bytedance.com/en/blog/seed-2-0-official-launch)
  - [Seed 2.0 Pro benchmark profile](https://frontierbenchmarks.com/models/doubao-seed-2-0-pro/)
  - [Models.dev Seed 2.0 Pro provider catalogue](https://models.dev/models/bytedance-seed/seed-2.0-pro)
