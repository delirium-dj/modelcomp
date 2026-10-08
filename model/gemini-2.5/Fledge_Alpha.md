# Gemini 2.5 — findings by Fledge Alpha

- Source: Google (`google/gemini-2.5-pro`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google's Gemini 2.5 family flagship, served as `gemini-2.5-pro` — a deep-reasoning "thinking" model with 1M context and full multimodal input. Flag: served under the `gemini-2.5-pro` API ID; the 2.5 family also ships Flash / Flash-Lite siblings tracked separately.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-2.5-pro`), Vertex AI, OpenRouter `google/gemini-2.5-pro`. Generative AI API with thinking mode.
- **Release / knowledge:** 2026-06-17 stable release (pricepertoken); now a legacy access-limited model per Gemini API docs as the 3.x line rolls out.
- **IDs:** `google/gemini-2.5-pro` (no Free ID on Zen)
- **Context window:** 1,048,576 (1M) tokens; max output ~65.5K (pricepertoken, Inworld).
- **Modalities:** text/image/audio/video/file in; text out; thinking on; function calling; structured output; prompt caching; web search; computer use (separate preview ID).
- **Pricing (as of 2026-10-08):** $1.25 input / $10.00 output per 1M (Google API list); tiered to $0.625/$5.00 for prompts ≤200K (pricepertoken). Cached input ~$0.063–0.31. Paid only.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Lite: **40.0%** (LayerLens via pricepertoken leaderboard, Sep 2026)
- Terminal-Bench / Tau suite: no verified public score found

Reasoning / knowledge:

- HLE (no tools): **18.8%** (Google via DataCamp; ahead of o3-mini 14%, DeepSeek-R1 8.6%)
- GPQA Diamond: **84.4%** (pricepertoken)
- MMLU-Pro: **86.2%** (94th percentile, pricepertoken)
- AIME 2024: **92.0%** pass@1; AIME 2025: **86.7%** (Google via DataCamp)
- AA Intelligence Index: **16.1** (64th percentile, pricepertoken/Artificial Analysis)

Coding:

- LiveCodeBench v5: **70.4%** (DataCamp)
- Aider Polyglot (whole file): **74.0%** (DataCamp)
- Coding composite: **80.1** (pricepertoken)

Multimodal:

- MMMU: strong multimodal input across text/image/audio/video (family capability, Google); no single verified MMMU number captured for this ID in this pass.

Long context:

- 1M-token window verified (pricepertoken, Inworld, ModelBench); no MRCR/RULER public number captured.

### Normalized scores (1–100)

- **Tool use: 74/100.** Function calling, web search, and a computer-use sibling; SWE-bench Lite 40% shows mid-tier agentic execution; capped by thin Terminal-Bench/Tau coverage.
- **Reasoning: 82/100.** GPQA 84.4%, AIME 2024 92.0%, HLE 18.8% (class-leading at launch); capped by a dated AA Intelligence Index (16.1) against 2026 frontier models.
- **Context window: 88/100.** Verified 1M window with caching; capped by age and lack of fresh long-context retrieval numbers.
- **Multimodal: 85/100.** Full text/image/audio/video input — the broadest input coverage of its generation; text-only output caps it.
- **Coding: 74/100.** LiveCodeBench 70.4% and Aider 74.0% were strong in 2025 but trail 2026 coding specialists; SWE-bench Lite 40% confirms mid-pack.
- **Cost efficiency: 55/100.** $1.25/$10 list (half at ≤200K) with cheap cache reads; reasonable for the capability but no free tier.
- **Overall Score: 81/100.** Mean of (74, 82, 88, 85, 74) = 80.6 → 81. Best fit: multimodal-heavy analysis pipelines needing audio/video input at 1M context on a budget-friendly Google stack.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (DataCamp, pricepertoken, ModelBench, Inworld, CloudPrice); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
