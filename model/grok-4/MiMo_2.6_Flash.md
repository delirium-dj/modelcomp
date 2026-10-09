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

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Grok 4 — findings by Mimo v2.6 Flash

- Source: xAI (`xai/grok-4`, API alias `grok-4-0709`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 (xAI flagship, base non-Heavy variant; `Grok 4 Heavy` multi-agent mode is a **separate, pricier variant** and is not scored here)
- **Short description:** xAI's July-2025 reasoning flagship powering the Grok chatbot on X and the xAI API — a tool-using "PhD-level" generalist that led the Artificial Analysis Intelligence Index at launch. Superseded in the product line by Grok 4.20 / 4.3 / 4.5 / 4.6 but still served as a distinct API model.
- **Provider / access:** xAI API (Chat Completions, OpenAI-compatible) — `grok-4` / `grok-4-0709`; also Grok apps on X and third-party hosts (Azure AI Foundry was predicted at launch for Grok 3/3-mini lineage). **No OpenCode Zen Free ID** (`noFreeId: true`).
- **Release / knowledge:** released 2025-07-09 (livestream) / generally available 2025-07-10; pretraining knowledge cutoff not published by xAI.
- **IDs:** `xai/grok-4` (also catalogued as `grok-4-0709`, `xai/grok-4-0709`); no Free ID on Zen.
- **Context window:** 256,000 tokens (256K) input (Artificial Analysis model page; ModelBench); max output 256K per ModelBench, 128K per Vals AI — API chat surface documented at 256K in/out (DeepLearning.AI The Batch: "API up to 256,000 tokens"), app surface up to 128K.
- **Modalities:** text + image in; text out (The Batch reports images out in the app); PDF/file input listed by Vals AI; **reasoning model** (thinks before answering; xAI does not expose reasoning tokens); tool/function calling and structured/JSON outputs confirmed (Artificial Analysis launch note); web search + code execution in the Grok app.
- **Pricing (as of 2026-09-24):** **$3.00 / 1M input, $15.00 / 1M output, $0.75 / 1M cached input** (base tier); pricing steps up above 128K input tokens. Paid, no $0 tier. Blended ≈ $4.20/1M at a 7:2:1 cache ratio (Artificial Analysis).
- **Architecture:** proprietary Mixture-of-Experts transformer, **~1.7 trillion parameters** as reported by press (DeepLearning.AI The Batch); xAI published **no model card**, no training-data disclosure and no open weights.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = `no verified public score found`.

Agent / tool use:

- Terminal-Bench 2.0: **27.2%** tasks resolved (benchmarks.company, 3rd-party harness) — no Terminal-Bench 2.1 score for this model
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** for Grok 4 (only the later Grok 4.3 posts Elo 1500)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Tool calling + structured outputs: supported (Artificial Analysis launch coverage); in-app web search and code execution (xAI)

Reasoning / knowledge:

- GPQA Diamond: **87.5%** (xAI-reported, no tools — Weights & Biases launch write-up) / **88.0%** (Artificial Analysis independent run, then an all-time high, beating Gemini 2.5 Pro's 84%) / 88.0% (benched.ai)
- HLE: **24.0%** (Artificial Analysis, original Jan-2025 dataset, text-only subset, no tools — all-time high at launch) / **25.4%** (xAI-reported, no tools) / **38.6%** (benched.ai, harness/tools configuration not stated — treat as provisional)
- AIME 2025: **91.7%** (xAI, no tools) / **92.7%** (benchmarks.company, developer-reported) / **94.0%** (benched.ai); AIME 2025 with tools: **98.4%** (xAI)
- AIME 2024: **94%** (Artificial Analysis — joint highest at launch)
- MMLU-Pro: **87%** (Artificial Analysis, joint highest at launch) / 85.3% (Vals AI) / 87.0% (benched.ai)
- MMMU Pro: **76.5%** (Vals AI) · MedQA **92.5%** · MGSM **90.9%** (Vals AI, July 2025 update)
- HMMT 2025: **93.9%**, USAMO 2025: **37.5%**, MATH-500: SOTA-at-launch claim (xAI)
- ARC-AGI-2: **15.9% / 16.2%** (xAI; ≈2× Claude Opus 4's 8.6%) — Grok 4 Heavy with tools 44.4% is a **different variant**
- Artificial Analysis Intelligence Index: **73** at launch (2025-07-10, then #1 vs o3/Gemini 2.5 Pro at 70); **re-scored 34 / #108 of 195** under the current index version (Artificial Analysis model page, median 36) — index version changed, both figures are AA's own
- LCR / MLCR / CritPt: **no verified public score found**

Coding:

- SWE-bench Verified: **69.1%** (benchmarks.company, 3rd-party); Vals AI reports Grok 4 placed 2nd behind Claude Sonnet 4 (non-thinking) with a ~15% lift over its earlier Grok 4 results but publishes no number in its update log. The widely leaked **72–75%** figure belongs to **Grok 4 Code**, a distinct variant — not scored here.
- LiveCodeBench: **79.3%** (xAI, Jan–May 2025 window; 79.0% no-tools) / **81.9%** (benchmarks.company, developer-reported) / 0.790 (LLM Stats leaderboard)
- SciCode: **no verified public score found** (Artificial Analysis notes Grok 4 trailed o4-mini high here)
- HumanEval: **98.0%** (benched.ai)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / SWE-bench Pro: **no verified public score found**; Artificial Analysis reported Grok 4 led its **Coding Index** (LiveCodeBench + SciCode) at launch (2025-07)

Long context:

- **no long-context retrieval reported** — no MRCR / RULER / GraphWalks figures published for Grok 4; 256K window only

### Normalized scores (1–100)

- **Tool use: 55/100.** Function calling, structured output and in-app tool use are confirmed, but the only measured agentic number is Terminal-Bench 2.0 **27.2%**, far under the 45–60% mid band; no Tau, GDPval, Claw-Eval or MCP-Atlas evidence for this exact model, which caps the score.
- **Reasoning: 77/100.** GPQA Diamond 87.5–88% and launch-era #1 Intelligence Index (73) are near-frontier, and HLE 24–25.5% beat every 2025 peer — but HLE stays well below the 40% frontier ref, the current AA re-score sits below median (34 vs 36), and no LCR/CritPt data exists; that gap caps it in the high-70s.
- **Context window: 72/100.** 256K documented (Artificial Analysis, ModelBench) lands in the 200K–500K tier (70 reference), nudged up by 128–256K max output; no retrieval measurement at the window's end to justify more.
- **Multimodal: 72/100.** Text + image in (AA, Vals) plus image out in the app and file input, but no verified video/audio input and no PDF-confirmed score, so it sits at the top of the "+image in" band rather than the video/PDF band.
- **Coding: 73/100.** LiveCodeBench 79.3–81.9% and HumanEval 98% are strong (mid-band top end per methodology), pulled down by SWE-bench Verified 69.1% versus today's 90%+ frontier and Terminal-Bench 2.0 27.2%; SciCode and DeepSWE are unverified.
- **Cost efficiency: 60/100.** $3/$15 with $0.75 cached input matches the methodology's exact `$3/$15 ≈ 60` anchor — mid-priced, no free tier, and pricier than the $0.10–$1.25 open-weight field.
- **Overall Score: 70/100.** (55 + 77 + 72 + 72 + 73) / 5 = 70.0 — best fit: a paid, well-reasoned 2025 generalist for X-integrated chat and mixed reasoning/coding workloads, now beaten by its own 4.5/4.6 line on both price and agentic capability.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-24
- Method: public internet research (Artificial Analysis Grok 4 model page + launch post, benchmarks.company sourced rows, Weights & Biases xAI launch write-up, Vals AI Grok 4 update log, DeepLearning.AI The Batch, LLM Stats, ModelBench, benched.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

