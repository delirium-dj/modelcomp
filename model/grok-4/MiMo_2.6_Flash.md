# Grok 4 — findings by MiMo 2.6 Flash

- Source: Artificial Analysis (deprecated-model page), BenchLM, Epoch AI FrontierMath leaderboard, repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 — xAI's reasoning model with tool calling and image understanding, released **2025-07-10** (AA), predecessor of the 4.1/4.20/4.3/4.5/4.6/4.7 line. **Deprecated on Artificial Analysis** ("we only continue performance benchmarking for the default 10k input token workload… consider Grok 4.20 0309 instead") — historical-results-only status is a first-class caveat for this report.
- **Short description:** The July-2025 frontier entry (launched alongside Grok 4 Heavy) that topped LMArena at release; today AA rates it **below average in intelligence and particularly expensive for its price class**: Intelligence Index **22 (estimated)**, #143/225, class median 26. BenchLM: 52.07/100, #86/887 (15/623 rows, flagged conservative; labeled "Non-Reasoning" despite AA/xAI describing extended thinking — conflict noted). One serving provider remains.
- **Provider / access:** xAI API (1 provider per AA). Proprietary. No free id (meta).
- **Release / knowledge:** 2025-07-10.
- **Context window:** **256,000** (meta; AA "256k"/FAQ 260k) — BenchLM lists 128K, flagged conflict.
- **Modalities:** **text, image, PDF in** (meta; AA lists text+image only — PDF flag from meta); text out; reasoning/extended thinking (AA).
- **Pricing:** **$3.00 / $15.00 per 1M**, cached input **$0.75 (75% off)**; **higher above 128K tokens** (meta). AA: "somewhat expensive" vs class medians $2/$10.

### Raw benchmarks found

> Primary: AA's independent (now historical) rows via BenchLM + AA page; Epoch
> FrontierMath leaderboard; Gert/React-Native leaderboards. 15 rows only — thin.

Agentic / tool use:

- **τ²-bench: 74.9** (AA re-run) — respectable multi-turn tool work (2026 flagships: 86–97).
- Gert Labs: 42.34%. No TB/OSWorld/BrowseComp/GDPval/Toolathlon row.

Coding:

- React Native Evals: 72.6 (niche leaderboard). **No SWE-V/SciCode/Coding-Index/Terminal-Bench row** — launch-era coding reputation not measurable in this cycle's sources.

Reasoning & knowledge:

- **AA-GPQA Diamond: 87.7** — near the 90 reference. **AA-HLE: 26.7** — misses 40.
- **AA Intelligence Index: 22.5 (estimated)** — below its class median (26); model deprecated so index is an estimate.
- FrontierMath v2 (Epoch): **T1–3 19.655**, T4 2.083 — genuinely decent math (near Opus-4.5-class T1–3).
- AA-Omniscience: index 2.1 (accuracy 40.5, hallucination 64.5); AA-IFBench 53.7; CritPt 2.0.

Multimodal / long context:

- **AA-MMMU-Pro: 68.8** — mid image band. **AA-LCR: 68.0** — mid-grade retrieval at 256K.

### Normalized scores (1–100)

- **Tool use: 79/100.** τ² 74.9 is a solid multi-turn tool row, but it is essentially the only agentic measurement — Gert 42.3 is weak and there is no TB/OSWorld/BrowseComp evidence at all.
- **Reasoning: 79/100.** GPQA 87.7 near-reference and FrontierMath T1–3 19.7 are real strengths; HLE 26.7 misses badly and the estimated index (22, below class median) is the deprecated model's current reality.
- **Context window: 87/100.** 256K (conflicting 128K listing flagged) with LCR 68.0 — a solid-size window with mid retrieval evidence.
- **Multimodal: 66/100.** Text+image (+PDF per meta) with MMMU-Pro 68.8 — standard image band, no audio/video.
- **Coding: 75/100.** One niche row (React Native 72.6) and nothing else — no SWE-V, no SciCode, no TB — scored mid on era reputation plus absence of contradicting evidence.
- **Cost efficiency: 56/100** (excluded from Overall). $3/$15 sits on the $3/$15 ≈ 60 anchor with only a 75%-off cache (vs 90% everywhere in 2026), a >128K price surcharge, and single-provider/deprecated availability holding it below.
- **Overall Score: 77/100.** (79+79+87+66+75)/5 = 77.2 → 77 — a deprecated July-2025 flagship whose τ² 74.9, GPQA 87.7 and FrontierMath 19.7 still hold up, weighed against a below-class-median estimated index, sub-reference HLE, near-zero coding coverage, and pricing that no longer matches its intelligence.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — Artificial Analysis model page (release date, deprecation notice, estimated index 22, pricing, modality/context specs, historical-results caveat), BenchLM (15 rows with per-row provenance incl. AA re-runs, Epoch leaderboard, Gert/React-Native boards, family scores; updated 2026-10-07), Epoch AI FrontierMath v2 leaderboard, repo meta (pricing tiers, 128K surcharge, PDF input). Scores are normalized 1–100 interpretations, not official vendor scores; deprecated/estimated readings and the 128K-vs-256K conflict flagged; family ordering checked against own Grok 4.3 (81), 4.5 (84), 4.6 (85) and 4.7 (84) reports.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
