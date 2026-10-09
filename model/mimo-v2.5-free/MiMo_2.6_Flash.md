# MiMo V2.5 Free — findings by MiMo 2.6 Flash

> ⚠️ **Self-affiliation disclosure:** I am MiMo 2.6 Flash (Xiaomi — `opencode/mimo-v2.6-flash`); this report is about a Xiaomi MiMo model. I researched it the same way as any other queue item (my own prior-run v2.6 reports allowed for family context) and deliberately discounted scores where Xiaomi-only claims lacked independent or even hard-numbered confirmation. Read with that conflict of interest in mind.

- Source: Xiaomi MiMo launch page + HF model card, Kilo Code model page, Hugging Face, OpenRouter, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5 (Free tier entry) — Xiaomi's **native omni-modal open-weights MoE**, public beta **2026-04-23**, open-sourced **2026-04-22/27 under MIT** (HF collection `mimo-v25`); sibling MiMo-V2.5-Pro (1.02T/42B) launched Apr 27. "Free" = the **capped free Zen tier** for this model; native API from **$0.14/$0.28**.
- **Short description:** **310B total / 15B active** sparse MoE trained on **48T tokens**, backbone inherited from MiMo-V2-Flash (hybrid SWA, 5:1 SWA:GA, 128 window) plus in-house **729M ViT + 261M audio encoders** and 3-layer MTP. Post-training: SFT → large-scale agentic RL → Multi-Teacher On-Policy Distillation (MOPD); context extended 32K→256K→1M. Positioned as "frontier agency and native multimodality in one model": **surpasses MiMo-V2-Pro in agentic performance, matches MiMo-V2.5-Pro at half the cost**, matches Gemini 3 Pro on video and Claude Sonnet 4.6 on multimodal agentic work (vendor claims), on the **Claw-Eval performance/efficiency Pareto frontier** (saves ~50% tokens vs Muse Spark at equal ClawEval score). Kilo: "Pro-level agentic performance at roughly half the inference cost."
- **Provider / access:** Xiaomi API/AI Studio; **free capped Zen tier** (meta; also OpenCode Zen); OpenRouter `xiaomi/mimo-v2.5` ($0.14/$0.28, 1.05M); open weights on HF/ModelScope (MIT). Id `mimo-v2-5-0424` (Kilo).
- **Release / knowledge:** 2026-04-22.
- **Context window:** **1M native / 128K max out** (model page; Kilo 1,048,576/131,072). ⚠️ meta says "200K Zen cap / 32K out" — the 200K is the free-tier cap; out-token conflict flagged (128K model page vs 32K meta, likely Zen-cap too).
- **Modalities:** **text, image, video, audio in; text out** (native omni-modal).
- **Pricing:** **Free Zen tier (capped)**; native **~$0.14 / $0.28 per 1M** — an order of magnitude under frontier tariffs.

### Raw benchmarks found

> Primary: HF model-card leaderboard links (self-reported, post-trained rows) +
> Xiaomi launch pages + Kilo Code's third-party page. Base-model rows (5-shot) kept
> separate from post-trained rows. Benchmark charts on the launch page are images —
> several numeric rows (MMMU-Pro, VideoMME, CharXiv, post-trained GPQA/HLE) exist as
> plots but not as text; absent numbers are scored as absent.

Agentic / tool use:

- **Terminal-Bench 2.0: 65.8** (harborframework leaderboard, HF card) — strong for the tier.
- **Claw-Eval General: 62.1–62.3 Pass³** (161 tasks; HF 62.1 / launch 62.3), Multi-Turn 63.2 (38 tasks), **Multimodal view 23.8** (101 tasks — weak); "Pareto frontier of performance and token efficiency."
- PinchBench (Kilo/OpenClaw third-party): average 89.7%, Coding 97.8%; ResearchClawBench 16.91 (weak).
- No OSWorld/τ²/BrowseComp/GDPval rows.

Coding:

- **SWE-bench Pro: 56.1** (ScaleAI leaderboard). **AA Coding Index: 56.8** (Kilo) — mid, well under the 70 reference. Internal MiMo Coding Bench: "matches V2.5-Pro at half the cost" (no number). Base model: LCB v6 35.5, SWE-agentless 30.8 (base-only, flagged).

Reasoning & knowledge:

- **No post-trained GPQA/HLE/AIME row found in text sources** — only base-model rows: GPQA-Diamond 58.1, MMLU-Pro 65.8, MMLU 86.3, AIME24&25 36.9 (all 5-shot base, flagged BASE). Launch claims RL/MOPD "further strengthens reasoning" without numbers.

Multimodal / long context:

- Claims (unnumbered): matches Gemini 3 Pro on video (VideoMME), competitive on MMMU-Pro/CharXiv vs closed models, surpasses MiMo-V2-Omni; hard numbers not extractable (chart images) — scored conservatively.
- Long context: 1M native; family GraphWalks evidence published for **Pro** (0.56 BFS/0.92 Parents @512K, 0.37/0.62 @1M; v2.5 shares the architecture lineage — INHERITED context).

### Normalized scores (1–100)

- **Tool use: 79/100.** TB2.0 65.8 and Claw-Eval ~62 are solid daily-agent rows with excellent token efficiency; ResearchClawBench 16.9 and Claw-Eval Multimodal 23.8 are weak, and no OSWorld/τ²/BrowseComp-class independent rows exist.
- **Reasoning: 75/100.** Effectively unmeasured for the post-trained model: only base 5-shot GPQA 58.1 / MMLU-Pro 65.8 are on record; era-adjusted benefit of the RL/MOPD stage is claimed but not demonstrated with a single hard reasoning number.
- **Context window: 91/100.** 1M native with family GraphWalks evidence (Pro-published, architecture-shared — flagged inherited); free-tier 200K cap noted.
- **Multimodal: 91/100.** Native **text+image+video+audio** input puts it in the audio-class band (90–100) per methodology; claims of Gemini-3-Pro-level video are vendor-stated without extractable numbers, so it sits at the band's lower end (Claw-Eval multimodal 23.8 also counts against).
- **Coding: 76/100.** SWE-Pro 56.1 and AA Coding Index 56.8 are honest mid-band rows (both far under references), plus strong TB2.0 65.8; no SWE-V/SciCode/post-trained-LCB row exists.
- **Cost efficiency: 97/100** (excluded from Overall). Free capped Zen tier + $0.14/$0.28 native is an order of magnitude below the $0.60/$2.20 ≈ 92 anchor — only the Zen cap keeps it from a nominal 100.
- **Overall Score: 82/100.** (79+75+91+91+76)/5 = 82.4 → 82 — Xiaomi's omni-modal efficiency play: TB2.0 65.8, Claw-Eval ~62 at the token-efficiency frontier, native audio/video input and 1M context for free-tier access — held down by a reasoning record that is base-model-only, mid coding indices, and multimodal claims that exist mainly as unnumbered charts. **Affiliated scoring: where evidence was missing I scored the absence, not the brand.**

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07 (⚠️ self-affiliated: Xiaomi model, conflict disclosed above)
- Method: fresh public internet research — mimo.xiaomi.com/mimo-v2-5 (release, 310B/15B/48T, training pipeline, Claw-Eval 62.3, closed-model parity claims, token plan), mimo.mi.com docs (MIT open-source announcement, beta 2026-04-23, leaderboards), HF `XiaomiMiMo/MiMo-V2.5` (architecture table, leaderboard-linked post-trained rows: SWE-Pro 56.1, ResearchClawBench 16.91, Claw-Eval 62.1/23.8/63.2, TB2.0 65.8, base-model tables), Kilo Code page (AA Coding Index 56.8, TB-Hard 41.7, PinchBench, pricing/ctx), OpenRouter API (pricing/ctx), repo meta (free-tier note; 32K-out conflict flagged). Scores are normalized 1–100 interpretations, not official vendor scores; base vs post-trained rows separated; family ordering checked against own MiMo V2.6 Free (85), V2.6 Flash (87) and V2.6 Pro (90) reports — this generation sits below them.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# MiMo V2.5 Free — findings by Mimo v2.6 Flash

- Source: Xiaomi/`mimo-v2.5` (Free Zen tier)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (free capped tier for Xiaomi MiMo-V2.5)
- **Short description:** Xiaomi's open-weight (MIT) native omni-modal MoE — text, image, video, and audio understanding plus agentic coding in one 310B/15B-active model; Free tier on OpenCode Zen, with native 1M context reduced to a 200K cap on the free route.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (Chat Completions); Xiaomi MiMo API `mimo-v2.5` (OpenAI/Anthropic-compatible); OpenRouter. Free limited-time offer also advertised on Xiaomi's own API page.
- **Release / knowledge:** 2026-04-22 (public beta / release); open-sourced 2026-04-27 under MIT; knowledge cutoff not clearly published (system prompts reference late-2025 dates).
- **IDs:** `opencode/mimo-v2.5-free` (Zen); `mimo-v2.5` (Xiaomi); HF `XiaomiMiMo/MiMo-V2.5`.
- **Context window:** native **1,048,576** (HF/model card); Zen free cap **200K in / 32K out** (per repo meta); Xiaomi API lists 1M context / 128K max output.
- **Modalities:** text/image/video/audio in; text out; deep thinking toggle; tool calls yes; streaming; web search; structured output; context caching.
- **Pricing (as of 2026-09-22):** Free Zen capped tier (primary); native Xiaomi API **$0.14 in / $0.28 out per 1M** (cache-hit $0.0028) — also promoted "Free (limited time)". Artificial Analysis confirms $0.14/$0.28.
- **Architecture:** Sparse MoE, **310B total / 15B active**; 729M ViT + 261M audio encoder; MIT license open weights (FP8 mixed).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Claw-Eval general subset: **62.3** (Xiaomi release, 2026-04-22 — Pareto frontier of performance/efficiency; surpasses MiMo-V2-Pro)
- MiMo Coding Bench / SWE Marathon–style internal agentic sets: strong (Xiaomi claims match MiMo-V2.5-Pro at half cost) — no third-party agentic % published for the free tier specifically
- Toolathon / MCP-Atlas / Tau3: no verified public score found

Reasoning / knowledge:

- AIME 2025: **94.1%** (LLM Reference, observed 2026-06-07; from HuggingFace model-card lineage — treat as V2-series card value)
- GPQA Diamond (Google-Proof Q&A): **83.7%** (LLM Reference, same provenance)
- MMLU-Pro: **84.9%** (LLM Reference, same provenance)
- Artificial Analysis Intelligence Index: **38** (Artificial Analysis, 2026-04-22; above median 26 among comparable open-weight models)
- HLE / ARC-AGI-2 / CritPt: no verified public score found for MiMo-V2.5 specifically

Coding:

- SWE-bench Pro (Pass³, N=3): reported on HF model card (scaleAI/SWE-bench_Pro sections) — exact headline % not extracted as a single public figure in this pass; no SWE-bench Verified % verified for V2.5 non-Pro
- LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- Native 1M window; no MRCR/RULER retrieval curve published — no verified public score found for long-context needle accuracy

Multimodal:

- Xiaomi claims parity with frontier closed models: matches **Gemini 3 Pro on video**, **Claude Sonnet 4.6 on multimodal agentic** work; competitive on VideoMME, CharXiv, MMMU-Pro (release post — comparative claims, not absolute scores extracted)
- AAA/Omniscience: no verified public score found

### Normalized scores (1–100)

- **Tool use: 78/100.** Claw-Eval 62.3 with claimed Pro-parity at half cost is real agentic evidence, but no MCP-Atlas/Tau/Toolathlon numbers and free-tier caps may throttle parallel tool loops.
- **Reasoning: 75/100.** AIME 94.1 / GPQA 83.7 / MMLU-Pro 84.9 (V2-lineage card) plus AA Intelligence Index 38 — solid open-weight reasoning; no HLE/ARC-AGI rows and free-tier thinking budgets cap frontier claims.
- **Context window: 76/100.** Native 1M is excellent, but the Zen free route everyone evaluates here is hard-capped at **200K in / 32K out** — effective free-tier window is mid-size; no retrieval-quality curve published.
- **Multimodal: 95/100.** Genuine omni-modal input (text/image/video/audio) with claimed video-parity to Gemini 3 Pro and multimodal-agentic parity to Sonnet 4.6 — full native coverage lifts this into the top band.
- **Coding: 76/100.** Internal bench parity with V2.5-Pro at half cost and open SWE-bench Pro Pass³ rows on the HF card; no SWE-bench Verified/LiveCodeBench public % for V2.5 keeps this below official-Google/Anthropic coding tiers.
- **Cost efficiency: 100/100.** Free Zen tier with omni-modal inference; even paid native rates ($0.14/$0.28) are among the cheapest capable open-weight APIs — free-tier anchor = 100.
- **Overall Score: 80/100.** Mean of five quality dims (78+75+76+95+76)/5 = 80.0. Best-fit: free omni-modal understanding and light agentic coding where 200K context suffices; switch to paid native or mimo-v2.5-pro when you need full 1M context or harder long-horizon agent runs.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Xiaomi mimo.xiaomi.com release + HF model card, mimo.mi.com API/docs, Artificial Analysis, LLM Reference, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

