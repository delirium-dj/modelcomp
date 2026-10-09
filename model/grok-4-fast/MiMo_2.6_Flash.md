# Grok 4 Fast — findings by MiMo 2.6 Flash

- Source: Artificial Analysis (deprecated non-reasoning page + reasoning-variant benchmarks), BenchLM (AA re-runs, Vals rows), repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast — xAI's **cost-efficient reasoning model (Sep 2025)** blending reasoning and non-reasoning modes **in one weights set**, at **~1/15 of Grok 4 cost**; best for high-volume grounded search and long-document work. **Deprecated May 2026** in favour of Grok 4.1 Fast (repo meta); AA also flags the deprecation ("only default 10k workload continues; consider Grok 4.1 Fast"). AA non-reasoning page: **released 2025-09-19**.
- **Short description:** The budget tier of the Grok 4 line. AA's two variant pages: **non-reasoning index 11\* estimated (#23/75, above class median 9)** and, via BenchLM, the **reasoning variant's AA index 17.9** — both far below Grok 4's 22.5 and the reason this report lands where it does. BenchLM: **43.74/100, #119/887** (12/623 rows, conservative), between Grok 3 Mini (44.87 — effectively tied) and Grok 4.1 Fast Reasoning (46.33). AA prose: "above average in intelligence and reasonably priced" for its non-reasoning class.
- **Provider / access:** xAI API (1 provider per AA). Proprietary. No free id (meta).
- **Release / knowledge:** September 19, 2025.
- **Context window:** **2,000,000 (2M); 30,000 max out.**
- **Modalities:** **text, image in; text out.**
- **Pricing:** **$0.20 / $0.50 per 1M; cached input $0.05 (75% off)** — blended ~$0.23/M (AA).

### Raw benchmarks found

> Primary: AA's independent rows for the reasoning variant; Vals; AA's
> non-reasoning variant page (separate index, marked with its own variant).

Agentic / tool use:

- **τ²-bench: 65.8** (AA) — weak-mid multi-turn tool reliability (Grok 4 proper: 74.9; 2026 flagships: 86–97). No TB/OSWorld/GDPval/BrowseComp row.

Coding:

- **Vibe Code Bench: 0.00** (Vals) — floor result, and the only coding row anywhere for this model; no SWE-bench/LiveCodeBench/Coding-Index/Terminal-Bench figure exists.

Reasoning & knowledge:

- **AA-GPQA Diamond: 84.7** — mid, well under the 90 reference. **AA-HLE: 19.1** — far under 40.
- **AA Intelligence Index: 17.9** (reasoning variant) / **11\* estimated** (non-reasoning variant) — mid band at best.
- AA-Omniscience: **Index −29.9** (accuracy 22.8, hallucination 68.3) — deeply negative knowledge reliability. CritPt 2.9; AA-IFBench 50.5.

Multimodal / long context:

- **AA-MMMU-Pro: 61.8** — lower-mid image band.
- **AA-LCR: 73.7** — genuinely decent long-context retrieval for a budget model (Grok 4: 68.0).

### Normalized scores (1–100)

- **Tool use: 71/100.** τ² 65.8 is the only tool row and it is weak-mid; no terminal/OSWorld/GDPval-class evidence at all.
- **Reasoning: 73/100.** GPQA 84.7 is respectable for a budget tier but nowhere near reference; HLE 19.1, index 17.9/11\*, CritPt 2.9 and an Omniscience index of −29.9 make this a clearly sub-frontier reasoning profile.
- **Context window: 94/100.** A true 2M window with LCR 73.7 measured — the strongest dimension by evidence, and the model's whole reason to exist.
- **Multimodal: 63/100.** Text+image with MMMU-Pro 61.8 — bottom half of the image band, no video/audio/PDF.
- **Coding: 61/100.** One row, Vibe 0.00 — floor. Nothing contradicts it because nothing else exists; scored at the low end on absence of any positive coding evidence.
- **Cost efficiency: 95/100** (excluded from Overall). $0.20/$0.50 is far beyond the $0.60/$2.20 ≈ 92 anchor (roughly 1/15 of Grok 4 per meta), cache $0.05, 2M context included; only deprecation and single-provider availability keep it out of the high-90s.
- **Overall Score: 72/100.** (71+73+94+63+61)/5 = 72.4 → 72 — the Sep-2025 budget model does exactly what it was built for (cheap, fast, 2M-token document work), and the evidence says that is all: weak τ², sub-reference HLE, a negative Omniscience index, MMMU 61.8, and a single floor-level coding row.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — Artificial Analysis model pages (deprecation notice, release 2025-09-19, non-reasoning index 11\*, pricing/cache, 2M window; reasoning-variant benchmarks mirrored by BenchLM), BenchLM (12 rows with AA/Vals provenance, family composites, updated 2026-10-07), repo meta (dual-mode weights, 1/15 cost positioning, May-2026 deprecation). Scores are normalized 1–100 interpretations, not official vendor scores; variant pages (reasoning vs non-reasoning) labelled separately; this report scores the absolute evidence rather than the queue line (queue 78.5 → scored 72), with family ordering preserved against own Grok 4 (77) and Grok 4.20 (79) reports — BenchLM's family order (43.74 below Grok 4's 52.07) agrees.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Grok 4 Fast — findings by Mimo v2.6 Flash

- Source: xAI (SpaceXAI) / Grok 4 Fast
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast (xAI; served as `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning`)
- **Short description:** xAI's cost-efficient unified reasoning/non-reasoning model (Sep 2025), built on Grok 4 learnings with a 2M context window and a launch-verified SOTA price-to-intelligence ratio. Distinct entry from Grok 4.1 Fast (its successor, flagged as replacement by Artificial Analysis); the two API variants share one set of weights steered by prompts/`reasoning enabled`.
- **Provider / access:** xAI API (`https://api.x.ai/v1`, Chat Completions), OpenRouter, Vercel AI Gateway, OpenCode Zen `opencode/grok-4-fast` (Chat Completions endpoint `https://opencode.ai/zen/v1/...`).
- **Release / knowledge:** 2025-09-19 (x.ai launch post); knowledge cutoff September 2025 (OpenRouter: 2025-09-30).
- **IDs:** `xai/grok-4-fast` (OpenRouter), `opencode/grok-4-fast` (Zen). No Free-tier ID found — the OpenCode Zen free list checked 2026-09-26 does not include it (paid only).
- **Context window:** 2,000,000 tokens total (x.ai launch post; Artificial Analysis; OpenRouter) — max output not verified.
- **Modalities:** text, image and PDF in; text out; reasoning yes (unified reasoning/non-reasoning steered by system prompt or `reasoning enabled` API parameter); tool calls yes (trained end-to-end with tool-use RL — x.ai); JSON mode: no verified public statement found for this model.
- **Pricing (as of 2026-09-26):** $0.20 / 1M input and $0.50 / 1M output for prompts <128k tokens; $0.40 / $1.00 per 1M at ≥128k; cached input $0.05 / 1M (x.ai). Artificial Analysis median across providers confirms $0.20 / $0.50. Paid (no Zen Free ID).
- **Architecture:** proprietary (xAI); parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **29.2%** (BenchmarkList, 30th pct, rank 48/68); Terminal-Bench Hard: **18.9%** (BenchmarkList, rank 112/326). Terminal-Bench 2.1: no verified public score found.
- Tau2-Bench Telecom: **65.8%** (BenchmarkList, 66th pct, rank 115/332). Tau3-Banking: no verified public score found.
- GDPval-AA: **1014 Elo** (BenchmarkList, 71st pct, rank 98/340).
- MCP-Universe: **27.3%** (BenchmarkList, 77th pct, rank 7/27); MCPMark: 24.0% (rank 23/41).
- Agentic search (x.ai launch post): BrowseComp **44.9%**, BrowseComp (zh) 51.2%, SimpleQA **95.0%**, Reka Research Eval 66.0%; LMArena Search Arena 1163 Elo (#1 at launch, `grok-4-fast-search`).
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (x.ai, pass@1); BenchmarkList: 85.4% (67th pct, rank 39/117).
- HLE: **20.0%** (x.ai, no tools); BenchmarkList: 19.1% (77th pct, rank 109/466).
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: **18, rank #54/174** (artificialanalysis.ai model page, current scale; the page marks the model deprecated in favor of Grok 4.1 Fast). BenchmarkList reports **27.9, rank 122/418** (its harmonized historical value) — scale discrepancy noted, both listed. BenchLM overall: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.
- MMLU-Pro: **85.0%** (BenchmarkList, 88th pct, rank 38/312); AIME 2025: **92.0%** no tools (x.ai) / 89.7% (BenchmarkList, rank 27/226); HMMT 2025: 93.3% no tools (x.ai); ARC-AGI-2: 5.3%, ARC-AGI-1: 48.5% (BenchmarkList).

Coding:

- SWE-bench Verified: **45.4%** (BenchmarkList, 6th pct, rank 68/72). SWE-Pro: no verified public score found.
- LiveCodeBench: **80.0%** (x.ai, Jan–May set); BenchmarkList: 79.0% (48th pct, rank 64/123).
- SciCode: **44.2%** (BenchmarkList, 86th pct, rank 66/458).
- Vibe Code Bench: Vibe Code Bench v1.1 **0.0%** (BenchmarkList, rank 70/71); a separate "VibeCodingBench" row scores **88.8** (rank 3/15) — different benchmark/scale, listed as found.
- IOI: 11.5% (BenchmarkList, rank 35/58).
- DeepSWE / Coding Index: no verified public score found.

Long context:

- 2M token window (xAI / AA / OpenRouter); no long-context retrieval score (MRCR / RULER) reported in sources reviewed.

### Normalized scores (1–100)

- **Tool use: 58/100.** Mid GDPval (1014) and solid Tau2-Telecom 65.8% / MCP-Universe 77th pct are offset by weak terminal agentic results (TB2.0 29.2%, TB Hard 18.9%); no Claw-Eval or Tau3 number found — that caps the score below the 70s.
- **Reasoning: 72/100.** GPQA 85.7%, AIME 92.0% and HMMT 93.3% are near-frontier, but HLE 20% and the AA Intelligence Index (18, #54/174) sit mid-pack and no LCR/CritPt/MRCR evidence exists — capped below frontier.
- **Context window: 96/100.** Verified 2M total lands in the ≥1M tier (95–100); without a measured ≥512K retrieval result it cannot take the 100.
- **Multimodal: 76/100.** Image and PDF input with text output (AA: text+image; OpenRouter: text/images/PDFs) plus MMMU-Pro 72.8%; no audio/video input and text-only output caps it in the 75–90 band.
- **Coding: 66/100.** LiveCodeBench ~79–80% and SciCode 44.2% are respectable, but SWE-bench Verified 45.4% (6th percentile), TB2.0 29.2% and Vibe v1.1 0.0% keep it in the mid band.
- **Cost efficiency: 97/100.** $0.20/$0.50 per 1M (with $0.40/$1.00 beyond 128k and $0.05 cached) is deep in the budget tier; xAI's launch claim of a 98% price cut vs Grok 4 at equal frontier-benchmark performance was corroborated by Artificial Analysis.
- **Overall Score: 74/100.** Half-up mean of Tool 58, Reasoning 72, Context 96, Multimodal 76, Coding 66 = 73.6. Best fit: cheap 2M-context search/reasoning and summarization workloads; step up to a frontier coding model for long-horizon SWE agent jobs.

---

## Signature

- Provided by: **Mimo v2.6 Flash (Xiaomi/MiMo-V2.6-Flash)** — 2026-09-26
- Method: fresh public web research (x.ai launch post, Artificial Analysis, BenchmarkList, OpenRouter, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


