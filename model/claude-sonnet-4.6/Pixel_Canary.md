# Claude Sonnet 4.6 — findings by Pixel Canary

- Source: Anthropic (`anthropic/claude-sonnet-4.6`), also `openrouter/anthropic/claude-sonnet-4-6` and `google-vertex-anthropic/claude-sonnet-4-6@default`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (Anthropic's February 2026 mid-tier; **no OpenCode Zen Free ID** — paid tier only)
- **Short description:** The Sonnet-line successor that trades Anthropic's reasoning-flagship behaviour for speed and unit economics: strong single-shot repository work (SWE-bench Verified 79.6%) and excellent scientific knowledge on vendor-reported numbers, but weak persistence on long-horizon agentic harnesses and a poor honesty profile when measured without extended thinking.
- **Provider / access:** Anthropic API, AWS Bedrock / Google Vertex AI, and OpenRouter; tool use, structured output, PDF and image input, prompt caching.
- **Release / knowledge:** **2026-02-17** (models.dev `release_date`); knowledge cutoff not published by Anthropic for this release.
- **IDs:** `anthropic/claude-sonnet-4-6`, OpenRouter `anthropic/claude-sonnet-4-6`; no free variant.
- **Context window:** **200K tokens** on the standard endpoint (BenchLM "Context Window = 200K"), with models.dev listing **1,000,000 input / 128,000 output** for the 1M-context endpoint variant. Max output 64K–128K depending on endpoint.
- **Modalities:** Text, image and PDF in; text out. Reasoning: available as an opt-in thinking toggle — BenchLM classifies its measured rows as **Non-Reasoning**, which explains most of the gap between vendor and independent scores. Tool calling, structured output, web search: yes. No video or audio input.
- **Pricing (as of 2026-09-29):** **$3.00 / 1M input, $15.00 / 1M output, $0.30 cached input** (identical rate card on Anthropic, OpenRouter and Vertex) — blended 4:1 ≈ $5.40 / 1M. No batch/off-peak discount listed.
- **Architecture:** proprietary, weights unpublished, parameter count undisclosed.

### Raw benchmarks found

BenchLM profile `claude-sonnet-4-6` (updated 2026-09-28): **56.28 / 100, rank #53 of 512**. Family standings BenchLM publishes: Claude Opus 5.5 **87.1**, Claude Fable 5.1 **83.0**, Claude Sonnet 5.5 **80.5**, Claude Sonnet 5 **~74**, Claude Opus 4.5 **55.03**, Claude Sonnet 4.6 **56.28**.

Coding:

- SWE-bench Verified: **79.6%**; SWE-bench (Vals, independent harness): **77.4%**
- LiveCodeBench (Vals): **82.1%**; Vibe Code Bench: **51.48%**
- Terminal-Bench 2.0: **59.1%**; Terminal-Bench 2.1 (Vals): **57.3%**

Agentic / tool use:

- OSWorld-Verified: **72.1%**; Claw-Eval: **67.8%**
- OSWorld 2.0: **8.3%** — the sharpest drop in the row set, i.e. long-horizon computer use degrades far faster than single-shot tasks

Reasoning / knowledge:

- Vendor-reported: GPQA **89.9%**, HLE **49%**, SuperGPQA **95%**, MMLU-Pro **79.2%**
- Artificial Analysis (independent, no-thinking): AA-GPQA Diamond **79.9%**, AA-HLE **13.3%**, AA Intelligence Index **24.7**, GPQA Diamond (Vals) 85.6%, MMLU-Pro (Vals) 87.3%
- AA-Omniscience: Accuracy **38.6%**, Hallucination Rate **68.5%**, Omniscience Index **−3.5**
- AA-IFBench: **41.2%**

Mathematics:

- FrontierMath v2 (Tiers 1–3): **32.4%**; FrontierMath v2 (Tier 4): **8.3%**
- CritPt: **0.9%**

Multimodal / long context:

- CharXiv: **77.4%**; AA-MMMU-Pro: **70.6%**; Design Arena Website: **1292**
- AA-LCR (long-context reasoning): **68.3%**; no MRCR/RULER/GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 66/100.** Respectable single-shot tool work (OSWorld-Verified 72.1%, Claw-Eval 67.8%, τ²-bench-class results in the family) but it does not sustain autonomy: OSWorld 2.0 collapses to 8.3% and Terminal-Bench 2.0 only reaches 59.1%.
- **Reasoning: 55/100.** Vendor rows look strong (GPQA 89.9%, HLE 49%, SuperGPQA 95%), yet the independent Artificial Analysis measurements taken without extended thinking are much weaker — AA-GPQA 79.9%, AA-HLE 13.3%, Intelligence Index 24.7, CritPt 0.9%, plus a 68.5% hallucination rate at 38.6% accuracy (Omniscience Index −3.5).
- **Context window: 62/100.** 200K on the standard endpoint (1M/128K-out on the long-context variant) with only moderate measured retrieval depth (AA-LCR 68.3%); no MRCR/RULER curve and no 1M-context row, so it is a mid-2025-class window in 2026 terms.
- **Multimodal: 62/100.** Text + image + PDF in with credible chart reading (CharXiv 77.4%) and Design Arena 1292, but AA-MMMU-Pro 70.6% is average and there is no video, audio or vision-agent output path.
- **Coding: 74/100.** SWE-bench Verified 79.6% / 77.4% (Vals) and LiveCodeBench 82.1% are the strongest part of the profile; Vibe Code Bench 51.48% and Terminal-Bench 57–59% show it is a good patch-model rather than an autonomous builder.
- **Cost efficiency: 58/100.** $3.00 / $15.00 per 1M with $0.30 cache reads is the classic Sonnet rate card — reasonable per unit of quality, but there is no OpenCode Zen Free ID and no batch discount, so a $0 Zen tier would out-score it outright (a $0 tier would be 100).
- **Overall Score: 63.8/100.** (66 + 55 + 62 + 62 + 74) / 5 = 63.8 — a fast, well-priced single-shot coding and document model; not a candidate for long-horizon agents or unsupervised factual work.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `claude-sonnet-4-6` refreshed 2026-09-28, models.dev provider/pricing index, OpenRouter listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

