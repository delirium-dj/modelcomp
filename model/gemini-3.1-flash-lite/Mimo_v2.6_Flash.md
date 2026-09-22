# Gemini 3.1 Flash Lite — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-3.1-flash-lite`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's most cost-efficient Gemini 3 model (preview 2026-03-03; GA Vertex 2026-05-07) — ~363 tok/s, GPQA 86.9% at $0.25/$1.50, built for high-volume translation/classification/light agentic work with full 1M multimodal context.
- **Provider / access:** Google AI Studio / Gemini API `gemini-3.1-flash-lite` (stable); Vertex AI / Gemini Enterprise Agent Platform; free tier on AI Studio and OpenCode Zen with standard rate limits (Chat Completions). Not Live API.
- **Release / knowledge:** 2026-03-03 preview (Google blog); Vertex GA **2026-05-07** (retirement May 7, 2027+). Knowledge cutoff **January 2025**.
- **IDs:** `google/gemini-3.1-flash-lite`.
- **Context window:** 1,048,576 input; 65,536 max output.
- **Modalities:** text/image/video/audio/PDF in; text out; thinking levels minimal/low/medium/high; function calling yes; structured outputs; Search/Maps grounding; code execution; file search; **no** Live API, no image/audio generation, no computer use.
- **Pricing (as of 2026-09-22):** **$0.25 in / $1.50 out per 1M** (text/image/video); audio in $0.50; cache read $0.025; batch $0.125/$0.75; free AI Studio tier (preview Tier-1 RPD caps until spend gates). Flat — no >200K cliff.
- **Architecture:** proprietary sparse MoE (undisclosed); based on Gemini 3 stack quality lift over 2.5 Flash-Lite.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Google model card / launch blog 2026-03-03 unless noted.

Agent / tool use:

- Terminal-Bench / Toolathlon / MCP-Atlas / GDPval-AA / OSWorld for 3.1 Flash-Lite: no verified public score found on Google's card excerpt (TopReviewed: trails 3.5 Flash on agentic boards; SWE-Bench Pro for sibling family is on 3.5 Flash-Lite card at 38.3% for **3.1 Flash-Lite** per that comparison table — **SWE-Bench Pro 38.3%** appears on the 3.5 Flash-Lite card as the 3.1 Flash-Lite column: use that)
- SWE-Bench Pro (Public): **38.3%** (Google 3.5 Flash-Lite card comparison column for 3.1 Flash-Lite)
- Terminal-Bench 2.1: **31.0%** (Google 3.5 Flash-Lite card comparison column for 3.1 Flash-Lite)
- OSWorld-Verified: **54.3%** (same comparison table)
- GDPval-AA v2: **642 Elo** (same comparison table — very low vs 3.5 Flash-Lite 1140)

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (Google; beats Gemini 2.5 Flash 82.8, GPT-5 mini 82.3)
- Humanity's Last Exam (full, no tools): **16.0%** (Google)
- SimpleQA Verified: **43.3%**; FACTS: **40.6%** (Google)
- MMMLU: **88.9%** (Google)
- Artificial Analysis Intelligence Index: **34** (TopReviewed/AA, 2026-05-28)
- LMArena Elo: **1432** (Google/AA)

Coding:

- LiveCodeBench: **72.0%** (Google; UI window 2025-01-01–2025-05-01; trails GPT-5 mini 80.4)
- SWE-bench Verified / DeepSWE: no verified public score found for 3.1 Flash-Lite

Long context:

- MRCR v2 8-needle 128K average: **60.1%** (Google)
- MRCR v2 1M pointwise: **12.3%** (Google — window far beyond reliable retrieval)

Multimodal:

- MMMU-Pro: **76.8%** (Google; beats Gemini 2.5 Flash 66.7, GPT-5 mini 74.1)
- CharXiv Reasoning: **73.2%** (Google)
- Video-MMMU: **84.8%** (Google)
- Native text/image/video/audio/PDF in

### Normalized scores (1–100)

- **Tool use: 58/100.** SWE-Pro 38.3, TB2.1 31.0, OSWorld 54.3, GDPval 642 — usable light agent loops but clearly a **lite** agentic tier; far below 3.5 Flash-Lite and full Flash models on the same Google tables.
- **Reasoning: 76/100.** GPQA 86.9 is the standout (beats 2.5 Flash), MMMLU 88.9, AA Index 34 solid for price; HLE 16.0 and missing ARC-AGI/CritPt cap frontier claims.
- **Context window: 72/100.** Full 1M/64K window at this price is rare, but MRCR only 60.1% @ 128K and **12.3% @ 1M** — practical reliable range ~64–128K; treat 1M as bulk stuffing, not deep needle search.
- **Multimodal: 92/100.** Full text/image/video/audio/PDF in with MMMU-Pro 76.8, Video-MMMU 84.8, CharXiv 73.2 — excellent multimodal coverage for a Lite tier (audio present → upper band).
- **Coding: 64/100.** LiveCodeBench 72.0 is good for the tier; SWE-Pro 38.3 / TB2.1 31.0 show agentic coding is not the sweet spot — translation/classification/extraction are.
- **Cost efficiency: 95/100.** $0.25/$1.50 + $0.025 cache + batch 50% + free tier + 363 tok/s — best $/intelligence in Google's lineup at launch; tiny discount for audio 2× rate and preview-era RPD caps (now GA on Vertex).
- **Overall Score: 72/100.** Mean of five quality dims (58+76+72+92+64)/5 = 72.4 → 72. Best-fit: high-volume multimodal classification/translation/extraction/summarization where GPQA-class quality at Lite prices matters more than Terminal-Bench/GDPval agentic strength — step up to 3.5 Flash-Lite for agentic coding workloads.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (DeepMind 3.1 Flash-Lite model card, Google blog 2026-03-03, Gemini API models/pricing docs, Vertex Enterprise docs, TopReviewed, Google 3.5 Flash-Lite card cross-column); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
