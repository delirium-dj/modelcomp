# Grok 4.3 — findings by Qwen 3.8 Flash

- Source: xAI / Grok 4.3 (`xai/grok-4.3`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — pricing reconfirmed **$1.25 / $2.50** (cached $0.20, 1M ctx) on requesty/orq/xAI docs; AA Intelligence Index re-read at **24.9 on the v5.0 scale** (vs 53 on v4.0) logged as a **leaderboard rebuild / scale drift, not a downgrade**; successors **Grok 4.5 / 4.6 / 4.7** (4.6 SWE-bench 95.6%) are separate ids in their own folders — their absolutes are not merged here; still **no 4.3-specific** SWE-bench/GPQA/HLE row so Tool/Coding caps hold — **bands unchanged, Overall remains 74**
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

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three-plus independent sources consulted. This is a **confirmation pass** — the pass-1 figure set holds, with one scale-drift caveat and a sharpened successor boundary.

**Sources:** pricing + index — https://www.requesty.ai/models/xai/grok-4.3 (**"grok-4.3 API pricing: $1.25/1M input, $2.50/1M output, 1M context … Intelligence Index 24.9"**) and https://orq.ai/models/xai-grok-4.3 (**"1M context, reasoning and tool calling. Pricing from $1.25/M input tokens"**) · launch economics — https://artificialanalysis.ai/articles/xai-launches-grok-4-3-with-improved-agentic-performance-and-lower-pricing (**"Grok 4.3 … Intelligence Index while costing less to run the full benchmark suite. Grok 4.3 costs $395 to run the Artificial Analysis Intelligence Index"**) and https://www.frankx.ai/blog/grok-4-3-analysis-2026 (**"scores 53 on the Artificial Analysis Intelligence Index, lifts GDPval-AA to 1500 Elo, ships a 1M context window with always-on"** reasoning — exact match to pass 1) · lifecycle/successors — https://docs.x.ai/developers/migration/may-15-retirement (**"you will be billed at grok-4.3 pricing"** for deprecated slugs → 4.3 is the still-listed baseline, not retired) and https://www.ai-toolbox.co/grok-models/grok-models-explained-2026 (**"xAI's newest Grok model is Grok 4.7, released September 21, 2026"**) and https://unifically.com/blogs/grok-4.6 (**"Grok 4.6 scores 95.6% on SWE-bench Verified"**) — 4.5/4.6/4.7 are distinct ids scored in their own folders.

**What was checked and how it resolved:**

1. **Pricing — reconfirmed unchanged.** $1.25 / $2.50 per 1M with $0.20 cached and a 1M window is corroborated across three independent listings; Cost 90 stands (the >200 K 2× billing cliff remains the one caveat).
2. **AA Intelligence Index "drop" is scale drift, not a downgrade.** The 24.9 now shown on requesty is the **v5.0** leaderboard rebuild; pass-1's 53 was **v4.0**. Same model, different scale — the v5.0 deflation cascade does not, by itself, move a band. Reasoning 70 held; the pass-1 honesty note (no broken-out GPQA/HLE row for the ID) still applies.
3. **Successor boundary sharpened.** Grok 4.5 / 4.6 / 4.7 (4.6's 95.6 % SWE-bench Verified, 4.7's Sept-2026 500K launch) are **newer distinct ids**; per the exact-ID rule their absolutes are **not** merged into this folder. This is why `model/grok-4.3` keeps its own thin coding/agent coverage.
4. **Thin verified coverage persists.** Still no independently published 4.3-specific SWE-bench Verified / LiveCodeBench / τ² / Terminal-Bench row, so the Tool 66 and Coding 62 provisional caps are unchanged — the revisit trigger (a measured 4.3 coding/agent absolute) has **not** fired.

**Scores changed by this pass:** none — Tool 66, Reasoning 70, Context 95, Multimodal 78, Coding 62, Cost 90 all hold → **Overall remains 74** (5-quality-dim mean unchanged).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Artificial Analysis Intelligence Index v4.0 via FrankX analysis, llm-stats comparison, OpenRouter/requesty listings, xAI launch materials; all fetched 2026-10-02); scores are normalized 1–100 interpretations, not official vendor scores. Left SWE-bench/GPQA/ARC-AGI-2 blank rather than reuse older-Grok numbers.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (requesty + orq + xAI docs for the unchanged $1.25/$2.50/1M price; Artificial Analysis launch article + FrankX for Index/GDPval; xAI retirement-migration doc + ai-toolbox/unifically for the 4.5/4.6/4.7 successor boundary). Logged the AA v5.0 re-read (24.9) as leaderboard scale drift rather than a capability change, and declined to merge successor-model absolutes into this id per the exact-ID rule — **no dimension changed and Overall remains 74**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
