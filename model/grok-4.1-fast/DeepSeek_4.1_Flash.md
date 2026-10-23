# Grok 4.1 Fast — findings by DeepSeek 4.1 Flash

- Source: xAI (SpaceXAI) / Grok 4.1 Fast (`grok-4-1-fast`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-03); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`grok-4-1-fast`, 1 row) computes an overall **36.41/100 (#157 of 227)** and confirms the deep pass. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-pulled live: BenchLM (base + reasoning), Artificial Analysis (non-reasoning + reasoning), Vals AI Vibe Code Bench, x.ai's official Grok 4.1 news, and docs.x.ai.
> New numbers found this pass: τ²-Bench Telecom 93.3% (reasoning) / 63.7% (non-reasoning), Gert Labs 47.32% (base), AA Intelligence Index 20.4 (reasoning) / 11.3 (base), AA-GPQA Diamond 85.3% / 63.7%, AA-HLE 19.3% / 5.1%, AA-LCR v1.1 74.0% (reasoning) / 31.3% (base), AA-MMMU-Pro 63.3% / 48.4%, AA-IFBench 52.7% / 36.5%, Vibe Code Bench 1.20% (reasoning), BenchLM composites 36.1 (base) / 45.73 (reasoning).
> Conflicts surfaced: (1) **context window** — Artificial Analysis lists **2M** for both variants, BenchLM lists **1M** for the base row but **2M** for the reasoning row; kept 2M on the stronger AA + BenchLM-reasoning evidence, base-tag conflict noted. (2) **scale mismatch** — BenchLM composites (36.1/45.73) sit far below this project's normalized 68 because the methodology and cohort differ; not directly comparable. (3) **coding harnesses disagree** — Vals Vibe Code Bench 1.20% (end-to-end web apps; near the bottom of 112 entries) vs. the prior pass's LMArena WebDev 1239.95 Elo and SciCode 44.21%; different harnesses, so both are listed, not averaged. (4) **deprecation** — AA flags the model deprecated and superseded by Grok 4.3; docs.x.ai's live model/pricing list no longer carries `grok-4-1-fast` (now grok-4.3 and newer). Sources: https://benchlm.ai/models/grok-4-1-fast · https://benchlm.ai/models/grok-4-1-fast-reasoning · https://artificialanalysis.ai/models/grok-4-1-fast · https://artificialanalysis.ai/models/grok-4-1-fast-reasoning · https://www.vals.ai/benchmarks/vibe-code · https://x.ai/news/grok-4-1 · https://docs.x.ai/docs/models

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's ultra-low-latency Grok 4.1 API family (a reasoning and a non-reasoning variant), a 2M-context multimodal model positioned for speed over peak intelligence. Now **legacy/deprecated**: retired and requests redirect to Grok 4.3 at Grok 4.3 pricing (Artificial Analysis flags it deprecated; docs.x.ai no longer lists it).
- **Provider / access:** xAI Console and OpenRouter (`grok-4.1-fast`). API IDs: `grok-4-1-fast`, `grok-4-1-fast-reasoning`, `grok-4-1-fast-non-reasoning`. Chat Completions style.
- **Release / knowledge:** Released 2025-11-19 (Artificial Analysis; x.ai announced Grok 4.1 on 2025-11-17). Knowledge cutoff not published.
- **IDs:** `grok-4-1-fast` (no OpenCode Zen ID).
- **Context window:** 2,000,000 tokens (Artificial Analysis, both variants; BenchLM reasoning row agrees — the BenchLM base row lists 1M, a conflict). Max output not published.
- **Modalities:** Text and image (vision) in; text out. Reasoning (per variant), tool calls, structured outputs/JSON.
- **Pricing (as of 2026-10-11, legacy route):** $0.20 in / $0.50 out per 1M (Vals AI lists the reasoning route at $0.2/$0.5; xAI legacy route $0.20/$0.50).
- **Architecture:** Proprietary (weights not released; parameter count undisclosed).

### Raw benchmarks found

> Re-verified 2026-10-11 unless labelled "prior pass". Where a model has distinct reasoning and non-reasoning variants, both are shown.

Agent / tool use:

- τ²-Bench Telecom: **93.3%** (reasoning) / **63.7%** (non-reasoning) — https://benchlm.ai/models/grok-4-1-fast-reasoning , https://benchlm.ai/models/grok-4-1-fast
- Gert Labs: **47.32%** (non-reasoning) — https://benchlm.ai/models/grok-4-1-fast
- Vibe Code Bench (agentic web-app build, OpenHands): **1.20%** (reasoning) — https://www.vals.ai/benchmarks/vibe-code
- Prior pass (Vector Wire / AA runs): AA Agentic Index 32.95 (non-reasoning); GDPval win-rate 14.07% (non-reasoning); AA IT-Bench SRE 17.89%; Terminal-Bench Hard 24.24% (reasoning) / 14.39% (non-reasoning) — not re-verified this pass.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **20.4** (reasoning) / **11.3** (non-reasoning) — https://benchlm.ai/models/grok-4-1-fast-reasoning , https://benchlm.ai/models/grok-4-1-fast (AA page shows 20 est. reasoning / 11 est. base — https://artificialanalysis.ai/models/grok-4-1-fast-reasoning)
- AA-GPQA Diamond: **85.3%** (reasoning) / **63.7%** (non-reasoning) — BenchLM (AA runs)
- AA-HLE: **19.3%** (reasoning) / **5.1%** (non-reasoning) — BenchLM (AA runs)
- AA-Omniscience: **−29.9** (reasoning) / **−50.9** (non-reasoning); accuracy 25.1% / 17.2%; hallucination rate 73.4% / 82.3% — BenchLM (AA runs)
- AA-IFBench: **52.7%** (reasoning) / **36.5%** (non-reasoning) — BenchLM (AA runs)
- CritPt: **2.9%** (reasoning) / **0.0%** (non-reasoning) — BenchLM (AA runs)
- LMArena Text Arena (family-level, Grok 4.1): Thinking #1 (1483 Elo), non-reasoning #2 (1465 Elo) — https://x.ai/news/grok-4-1
- Prior pass: AIME 2026 94.17% (thinking); HMMT Feb 2026 86.36% / Nov 2025 93.33%; MathArena visual math 69.03 — not re-verified this pass.

Coding:

- Vibe Code Bench: **1.20%** (reasoning; rank ~107/112, harness OpenHands) — https://www.vals.ai/benchmarks/vibe-code
- Prior pass: SciCode 44.21% (reasoning) / 29.63% (non-reasoning); AA Coding Index 19.47; LMArena WebDev 1239.95 — not re-verified this pass.

Long context:

- 2M-token window (Artificial Analysis, both variants); AA-LCR v1.1 **74.0%** (reasoning) / **31.3%** (non-reasoning) — https://benchlm.ai/models/grok-4-1-fast-reasoning , https://benchlm.ai/models/grok-4-1-fast
- Prior pass: rated "capable in long context" (−19.8% vs the leader), 1 of 3 long-context benchmarks measured — not re-verified this pass.

Multimodal:

- Text + image in → text out — https://artificialanalysis.ai/models/grok-4-1-fast
- AA-MMMU-Pro: **63.3%** (reasoning) / **48.4%** (non-reasoning) — BenchLM (AA runs)

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench Telecom 93.3% (reasoning) is strong and unchanged, but the non-reasoning τ² row (63.7%), Gert Labs 47.32% and the prior-pass GDPval/Terminal numbers land below the mid band; net agentic profile is mid (62–63). Held.
- **Reasoning: 64/100.** AA Intelligence Index 20.4 (reasoning) sits in the mid band (20–35 → 55–65) and AA-Omniscience is negative; AA-GPQA Diamond 85.3% and AA-LCR 74.0% (both reasoning) are above the mid band while HLE 19.3% is modest — the leader-gap and hallucination profile cap it. Held.
- **Context window: 95/100.** 2M tokens is the ≥1M tier (95–100); scored at the lower end because no ≥98% retrieval evidence at 512K+ is published (AA-LCR 74.0% is good but not near-perfect). Held.
- **Multimodal: 62/100.** Text + image (vision) in → the 60–70 band; AA-MMMU-Pro 63.3% (reasoning) is solid-but-not-frontier and the model sits behind the multimodal leaders. Held.
- **Coding: 56/100.** Vibe Code Bench 1.20% (reasoning) is near the bottom of 112 entries and materially weakens the end-to-end coding picture; SciCode 44.21% (reasoning) and AA Coding Index 19.47 remain mid-low. Lowered from 58.
- **Cost efficiency: 95/100.** $0.20 in / $0.50 out per 1M is cheap (~$0.10/$0.20 = 97–99 band, adjusted down slightly for the output rate). Held.
- **Overall Score: 68/100.** (62 + 64 + 95 + 62 + 56) / 5 = 67.8 → **68** (round-half-up). Best-fit: legacy low-latency, long-context multimodal calls — migrate to Grok 4.3 (or newer) for new work.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: independent public internet research (BenchLM base + reasoning rows, Artificial Analysis model pages, Vals AI Vibe Code Bench, x.ai official news, docs.x.ai). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
