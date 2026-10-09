# Gemini 3.5 Flash-Lite — findings by MiMo 2.6 Flash

- Source: Google Models blog (3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber joint launch), Artificial Analysis, BenchLM, Vals AI, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite — Google's **ultra-low-latency Lite tier of the 3.5 Flash generation**, released **2026-07-21** (AA) alongside Gemini 3.6 Flash and 3.5 Flash-Cyber in Google's joint "Gemini models" announcement.
- **Short description:** The speed specialist: **345.6 output tokens/s — #4/182 in its price class** (median 110.9) with fairly concise output (59M vs 100M median tokens per AA-Index run) and reasoning-model extended thinking. AA: Intelligence Index **22 (#41/182 price class, class median 13)** — "amongst the leading models in intelligence for its price, notably fast," though "somewhat expensive for similar-priced models" ($0.30/$2.50 vs class medians $0.25/$0.90). BenchLM: 50.77/100, #89/887 (24/623 coverage). Standout launch row: **OSWorld-Verified 74** — computer-use at a level usually seen only in flagships.
- **Provider / access:** Google AI Studio / Gemini API (4 providers per AA); **free tier on Google AI Studio and OpenCode Zen** with standard rate limits (meta). Proprietary.
- **Release / knowledge:** 2026-07-21.
- **Context window:** **1,048,576 (1M).**
- **Modalities:** **text, image, speech/audio, video in** (AA; meta: text/image/audio/PDF); text out.
- **Pricing:** **$0.30 / $2.50 per 1M**, **90% cache discount** ($0.19), $0.19 per AA-Index task (AA); free tier available.

### Raw benchmarks found

> Primary: Google joint-launch blog rows (via BenchLM provenance), AA's independent
> rows, Vals AI leaderboards. Coverage is partial (24/623) — flagged.

Agentic / tool use:

- **OSWorld-Verified: 74** (Google launch) — flagship-class computer use, the model's standout row.
- **Terminal-Bench 2.1: 54.0** (Google) / 50.2 (Vals) — mid.
- GDPval-AA: Elo 1139 / 24.3%; **AA Agentic Index: 15.9** — weak.

Coding:

- SWE-bench Pro 54.2 (Google), SWE-bench 75.0 (Vals), LiveCodeBench 79.0 (Vals),
  **AA-SciCode 41.3** (well under 55), **AA Coding Index 49.3** (well under 70).

Reasoning & knowledge:

- **AA-GPQA Diamond: 83.8** (AA and Vals agree) — misses the 90 reference.
- **AA-HLE: 18.8** — far below the 40 reference. AA Intelligence Index **22.2**, MMLU-Pro 85.8 (Vals), CritPt 0.0.
- AA-Omniscience: index 5.2 (accuracy 29.5, **hallucination only 34.4** — low-confabulation profile).

Multimodal / long context:

- **AA-MMMU-Pro: 79.0** — top of image band; speech and video inputs supported natively.
- **MRCRv2: 72.2** (Google), **AA-LCR: 76.0** — decent 1M-class retrieval.

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld-Verified 74 is exceptional for a Lite model; TB2.1 ~50-54 is mid and GDPval/AA-Agentic (1139, 15.9) are weak — the split profile caps it below 80.
- **Reasoning: 76/100.** GPQA 83.8 and MMLU-Pro 85.8 are respectable for the tier, but HLE 18.8 misses by a mile and the composite index (22) is price-class-strong, not absolute-strong.
- **Context window: 93/100.** 1M with MRCRv2 72.2 / LCR 76.0 — real retrieval evidence, mid-quality rather than elite.
- **Multimodal: 91/100.** Text+image+**speech+video** in with MMMU-Pro 79.0 — audio-class modalities put it in the 90–100 band per the methodology.
- **Coding: 73/100.** Mid SWE rows (54.2 Pro, 75 Vals) with SciCode 41.3 and Coding Index 49.3 both far under reference — lite-tier coding, no way around it.
- **Cost efficiency: 91/100** (excluded from Overall). $0.30/$2.50 with 90% cache sits well under the $0.60/$2.20 ≈ 92 anchor on input and a touch over on output; a free tier on AI Studio and Zen and 346 t/s throughput seal the value case (AA's "somewhat expensive for class" note keeps it from the mid-90s).
- **Overall Score: 82/100.** (78+76+93+91+73)/5 = 82.2 → 82 — Google's speed play: flagship-class OSWorld 74, audio+video input, 1M context and 346 t/s at free-tier-available pricing — weighed against sub-reference GPQA/HLE, weak coding depth, and a price-class (not absolute) intelligence index.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — Artificial Analysis model page (release date, index 22, 345.6 t/s #4/182, TTFT, pricing, modality matrix, Omniscience/speed/verbosity detail), BenchLM (24 rows with per-row provenance: Google joint-launch blog for OSWorld/TB2.1/SWE-Pro/MRCR, AA for index/GPQA/HLE/LCR/SciCode/Coding-Index, Vals AI leaderboards; updated 2026-10-07), Vals model pages, repo meta (free-tier note, 1M, modalities). Scores are normalized 1–100 interpretations, not official vendor scores; family ordering checked against own Gemini 3.5 Flash (86), 3 Flash (83) and 3.7/3.8 Flash (87/88) reports — Lite tier sits appropriately below same-generation Flash.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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

