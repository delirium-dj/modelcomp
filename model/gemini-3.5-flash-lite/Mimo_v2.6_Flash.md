# Gemini 3.5 Flash Lite — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-3.5-flash-lite`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's fastest/costliest-light 3.5-class model (2026-07-21): ~350 tok/s, built for high-throughput agentic and document pipelines — on many agentic/coding evals it beats prior Gemini 3 Flash and dominates 3.1 Flash-Lite.
- **Provider / access:** Google AI Studio / Gemini API `gemini-3.5-flash-lite` (GA); Vertex AI; free tier on AI Studio and OpenCode Zen with standard rate limits (Chat Completions).
- **Release / knowledge:** 2026-07-21 (DeepMind model card / Google blog); knowledge cutoff March 2026 (per anotherwrapper).
- **IDs:** `google/gemini-3.5-flash-lite`.
- **Context window:** 1,048,576 input; 65,536 max output (64K / Requesty shows 66K).
- **Modalities:** text/image/audio/video in; text out; thinking levels supported; tool calls yes; JSON mode yes; context caching implicit+explicit.
- **Pricing (as of 2026-09-22):** **$0.30 in / $2.50 out per 1M** (text/image/video); audio in $0.50-class on sibling tiers; cache read ~$0.03; free tier available. Confirmed across DeepMind card, Requesty, anotherwrapper, llmdb.
- **Architecture:** proprietary; natively multimodal reasoning model in the Gemini 3 stack; ~350 output tok/s (AA index).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2 harness): **54.0%** (Google model card; vs 3.1 Flash-Lite 31.0, Claude Haiku 4.5 44.2, GPT-5.4 mini 59.2)
- OSWorld-Verified: **74.0%** (Google; beats GPT-5.4 mini 72.1 — and beats Gemini 3 Flash 65.1)
- GDPval-AA v2: **1140 Elo** (Google; vs 3.1 Flash-Lite 642, GPT-5.4 mini 1171)
- SWE-Bench Pro (Public): **54.2%** (Google; vs 3.1 Flash-Lite 38.3, GPT-5.4 mini 54.4 — beats Gemini 3 Flash 49.6)
- Tau3 / Toolathlon / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.8%** (Requesty benchmark panel)
- Artificial Analysis Intelligence Index: **22.7** (Requesty/AA)
- MLE-Bench: **39.2%** (Google; vs 3.1 Flash-Lite 22.0)
- HLE / ARC-AGI-2 / CritPt: no verified public score found for 3.5 Flash-Lite specifically

Coding:

- SWE-Bench Pro (Public): **54.2%** (Google — headline coding result)
- Terminal-Bench 2.1: **54.0%** (Google)
- Coding Index: **49.3%** (Requesty)
- SciCode: **41.3%** (Requesty)
- LiveCodeBench / SWE-bench Verified / DeepSWE: no verified public score found

Long context:

- GDM-MRCR v2 (8-needle) 128K average: **72.2%** (Google; vs 3.1 Flash-Lite 60.1)
- GDM-MRCR v2 1M pointwise: **21.3%** (Google; window far exceeds deep-retrieval reliability)
- GraphWalks: no verified public score found

Multimodal:

- CharXiv Reasoning (no tools): **74.5%** (Google; with tools 76.5%)
- Native text/image/audio/video input (DeepMind card)
- MMMU-Pro / Video-MMMU absolute scores: no verified public score found on the 3.5 Flash-Lite card excerpt (3.1 Flash-Lite sibling: MMMU-Pro 76.8%, Video-MMMU 84.8%)

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld 74.0, GDPval-AA 1140, TB2.1 54.0, SWE-Pro 54.2 — unusually strong agentic set for a Lite tier (beats Gemini 3 Flash on several); capped by no Tau/MCP-Atlas/Toolathlon rows and GDPval still below GPT-5.4 mini.
- **Reasoning: 74/100.** GPQA 83.8 and MLE-Bench 39.2 are solid for Lite, but AA Intelligence Index 22.7 is mid-pack and no HLE/ARC-AGI evidence — clearly a speed/cost-optimized reasoner, not a frontier one.
- **Context window: 80/100.** Full 1M/64K window per tier mapping, but measured MRCR is only 72.2% at 128K and 21.3% at 1M — practical reliable range ~128–256K; deep needle tasks need chunking.
- **Multimodal: 88/100.** Native text/image/audio/video in (audio → upper band) with CharXiv 74.5%; missing MMMU-Pro/Video-MMMU rows for this exact card cap below the 90+ full-Flash multimodal scores.
- **Coding: 76/100.** SWE-Pro 54.2% (near GPT-5.4 mini, far above 3.1 Flash-Lite) and TB2.1 54% are the standouts; Coding Index 49.3 / SciCode 41.3 are mid, and no SWE-Verified/LiveCodeBench row holds it below full-Flash coding scores.
- **Cost efficiency: 93/100.** $0.30/$2.50 with 1M context, ~350 tok/s, free AI Studio/Zen tier, and Lite-tier quality that beats older full Flash models on agentic evals — exceptional intelligence-per-dollar; paid output still bills thinking tokens.
- **Overall Score: 79/100.** Mean of five quality dims (78+74+80+88+76)/5 = 79.2 → 79. Best-fit: high-volume agentic document/OS/SWE pipelines and chart understanding at minimal latency/cost; step up to 3.5/3.6/3.8 Flash when HLE-class reasoning or top CharXiv/MMMU-Pro multimodal margins are required.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (DeepMind 3.5 Flash-Lite model card + Google blog 2026-07-21, Requesty, anotherwrapper, benchlm.ai, llmdb.app, Gemini API models/pricing docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
