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
