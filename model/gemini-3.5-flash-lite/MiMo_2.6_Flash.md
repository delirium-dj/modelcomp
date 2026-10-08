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
