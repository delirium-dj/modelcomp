# Grok 4.3 — findings by Qwen 3.8 Flash

- Source: xAI / Grok 4.3 (`xai/grok-4.3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's spring-2026 flagship chat/reasoning model that replaced the Grok 4.20 line — an "intelligence-per-dollar" play: ~40–60% cheaper than its predecessor, always-on reasoning, 1M context, and the first xAI API model with native video input. Not a benchmark leader; the pitch is frontier-class breadth at a budget price.
- **Provider / access:** xAI API (`grok-4.3`); also OpenRouter (`x-ai/grok-4.3`). Chat Completions / Responses; reasoning always-on; tool calls. (Separate xAI "Custom Voices" voice-cloning + real-time speech-to-speech endpoint exists, but voice is an add-on API, not the core `grok-4.3` text model — stays under `model/`.)
- **Release / knowledge:** beta 2026-04-17, public API 2026-04-30, GA week of 2026-05-04; knowledge cutoff not disclosed.
- **IDs:** `xai/grok-4.3`.
- **Context window:** 1M total (a regression from Grok 4.20's 2M); no fixed output cap; per-token price doubles past 200K in a single request — verified via Artificial Analysis + FrankX analysis.
- **Modalities:** text, image, video in; text out; reasoning always-on; tool calls. Native video via a vision encoder (no transcription step). No image/audio *output* in the core model.
- **Pricing (as of 2026-10-02):** $1.25 in / $2.50 out per 1M; cached input $0.20 (84% off); >200K requests billed at 2×. Paid flagship; ~10× cheaper output than Opus-tier.
- **Architecture:** proprietary; params not disclosed. ~181 tok/s output (≈2.5× its tier median).

### Raw benchmarks found

> Verified against Artificial Analysis Intelligence Index v4.0 and xAI launch materials (via FrankX analysis + llm-stats, fetched 2026-10-02). Honest gaps noted: no independently published SWE-bench Verified / ARC-AGI-2 / GPQA / HLE row *specific to Grok 4.3* was found (older Grok 4 / 4.20 numbers are sometimes recycled — not used).

Agent / tool use:

- GDPval-AA: **1500 Elo** (up +321 from Grok 4.20's 1179) — its standout single gain
- Finance Agent v2: **37.7%** (llm-stats, 1 eval); llm-stats normalized "Agents" index 10.2 (#124) — weak agentic depth
- Terminal-Bench 2.1 / τ²-Bench / OSWorld: **no verified public Grok 4.3 row found** (τ² is inside the AA composite but not broken out)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.0: **53** (composite of GDPval, τ² Telecom, Terminal-Bench Hard, SciCode, AA-LCR, Omniscience, IFBench, HLE, GPQA Diamond, CritPt); tier median ~36, leaders Opus 4.8 61.4 / GPT-5.5 60.2
- GPQA Diamond / HLE / LCR individually: **no verified public Grok 4.3 score found** (rolled into the 53 composite)

Coding:

- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: **no verified public Grok 4.3 score found** (analysis deliberately left these blank rather than recycle older-Grok figures)

Multimodal / long context:

- Native **video input** (first for xAI API) + image; no published MMMU/video-retrieval score. No MRCR/RULER ≥98% retrieval row for the 1M window.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Sparse verified coverage caps confidence on Tool and Coding. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 66/100.** GDPval-AA 1500 Elo is a strong real-world-task signal and 181 tok/s makes it excellent in latency-bound agent loops, but Finance Agent v2 37.7% and the weak llm-stats Agents index (10.2, #124) show thin verified agentic depth, and no Terminal-Bench/τ² row is published for this model — capped well below frontier.
- **Reasoning: 70/100.** AA Intelligence Index v4.0 of 53 is comfortably above its ~36 price-tier median and encodes GPQA/HLE/LCR, but sits ~8 points below the 60+ leaders and has no independently broken-out GPQA 90+ / HLE 40+ row, so upper-mid band.
- **Context window: 95/100.** 1M-token window meets the ≥1M tier (a downgrade from 4.20's 2M), but there is no published ≥98% long-context-retrieval metric and pricing doubles past 200K — band floor.
- **Multimodal: 78/100.** text+image+**video** in / text out lands in the +video 75–90 band; native video encoding is a genuine first for xAI, but no visual/video benchmark scores are published and there is no non-text output, so near the floor.
- **Coding: 62/100.** Provisional and explicitly capped: no verified SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode row exists for Grok 4.3 (only recycled older-Grok figures, which were not used). General reasoning + always-on thinking support competent code work, but the absence of a measured coding number keeps it mid-band.
- **Cost efficiency: 90/100.** $1.25 / $2.50 per 1M (cached $0.20) — cheap on output for its capability class; the >200K 2× cliff is the one economic caveat. Cost is excluded from Overall.
- **Overall Score: 74/100.** Mean of Tool 66, Reasoning 70, Context 95, Multimodal 78, Coding 62 = 74.2 → 74. Best fit: high-volume, cost-sensitive production (classification, extraction, summarization, fast agentic loops) where an ~8-point intelligence gap vs Opus/GPT/Gemini leaders doesn't change the outcome; the verified coverage is thin on coding and deep agent tasks, so re-measure those on your own workload before committing.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Artificial Analysis Intelligence Index v4.0 via FrankX analysis, llm-stats comparison, OpenRouter/requesty listings, xAI launch materials; all fetched 2026-10-02); scores are normalized 1–100 interpretations, not official vendor scores. Left SWE-bench/GPQA/ARC-AGI-2 blank rather than reuse older-Grok numbers.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
