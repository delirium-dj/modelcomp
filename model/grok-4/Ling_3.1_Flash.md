# Grok 4 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Grok 4
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July-2025 flagship reasoning model with native tool use, real-time X/platform search, and a parallel-agent "Grok 4 Heavy" mode for the hardest queries; predecessor of the Grok 4.3–4.7 line.
- **Provider / access:** xAI — API plus SuperGrok/Premium+ subscriptions (SuperGrok Heavy tier runs the Heavy variant). No free tier (repo meta.json `noFreeId: true`).
- **Release / knowledge:** Released 2025-07-09/10; knowledge cutoff not stated in captured sources.
- **IDs:** `xai/grok-4` (repo meta.json).
- **Context window:** 256K tokens (meta.json; corroborated by launch coverage).
- **Modalities:** Text, image, PDF in; text out (repo meta.json; launch coverage confirms text + image).
- **Pricing (as of 2026-10):** $3 input / $15 output per 1M tokens up to 128K; $6/$30 above 128K; automatic prompt caching $0.75/1M input.
- **Architecture:** proprietary; "same 4-series weights" for standard and Heavy per Smythos (Heavy adds up to ~32 parallel agents).

### Raw benchmarks found

Agent / tool use:

- Vending-Bench (agentic e-commerce simulation, 5-run averages): **$4,694.15 net worth, 4,569 units sold** (xAI launch, official, vendor self-reported) — vs Claude Opus 4 ($2,077.41 / 1,412 units) and humans ($844.05 / 344 units).
- Berkeley Function Calling Leaderboard: **62.97%** accuracy (evals.report, official, 2025-07-09; BenchmarkList: 63.0%, rank 8/85, 92nd pct).
- Second-pass agentic rows (2026-10-12): τ²-Bench Telecom: **74.9%** (BenchmarkList, rank 99/332 — first τ² read); MCP-Universe: **33.3%** (BenchmarkList, rank 2/27, 96th pct — small field); MCPMark: **31.7%** pass@1 (rank 15/41; filesystem 50.8%, Postgres 58.3%, Playwright 35.0%, GitHub 14.1%, Notion 2.7%; $257.41/run, 16.25 turns, 643K tokens); Terminal-Bench 2.0: **28.1%** ±4.79 (rank 49/68); Terminal-Bench Hard: **37.9%** (rank 38/326); Terminal Bench: **27.2%** (rank 5/8); TIR-Bench: **22.5%** (rank 6/25); BabyAI: 76.0 (rank 9/32); EvoEnv: 54.0% (rank 5/10); VerdictBench: 54.4% (rank 11/19); Gert Labs: 47.5% (rank 30/62); Agent Island: 0.67 (rank 26/49); Galileo Agent: 0.42 (rank 11/22); APEX-Agents: **30.3%** (BenchmarkList, rank 26/44) vs APEX-Agents-AA **1.6%** (benchgap est ±11.4 — a severe conflict, kept); MCP Atlas: **43.5%** (benchgap est ±14.8, low confidence); MCP-Tasks: **79.1%** (benchgap est ±8.2, low confidence); BFCL v4: **57.5%** (benchgap est ±8.7, low confidence) vs the official v3-era 62.97%; GDPval-AA: **17.9%** (benchgap est ±8.8) / 991 Elo (rank 116/352); AA Agentic Index: low-teens (benchgap est, row partially garbled); VibeCodingBench (alt-research, 180 tasks, 15-model field): **88.0%** final score, 97.8% pass rate (176/180), rank #9/15, $5.47/run — a strong small-field agentic-app read, kept as a secondary source.

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (evals.report, official); **87.5%** (aimodelsnavi).
- HLE: **24.52%** accuracy, no tools (evals.report, official); HLE leaderboard lists **24.5%** with 56.4% calibration error; ~25.4% no-tools (Kingy AI via deepnoodle); ~27% with tools (launch materials, secondary); 41% with tools (aimodelsnavi — conflicting, possibly conflated with Heavy).
- Grok 4 Heavy (separate parallel-agent variant): HLE text-only subset **50.7%** without external tools — first model ≥50% (xAI); **60%** pass@1 on the text-only subset with Python and Internet tools (xAI launch table; the "60" sits in the text-only-with-tools column, and attribution to Heavy is inferred from xAI's statement that Heavy is the 50%+ model).
- FrontierMath: **19.66%** (official). ARC-AGI-1: **66.67%** (official). ARC-AGI-2: **15.97%** (official; xAI claims 15.9%, then closed-model SOTA — nearly double Opus 4's ~8.6%).
- AIME 2024: **93.0%** (TPS) / 94% (community); AIME 2025: **91.7%** (aimodelsnavi) / 94% (MathArena/X posts) / 95.1% (TPS). AIME (OTIS Mock): **84.0%** (official). USAMO'25: **61.9%** (Grok 4 Heavy).
- SimpleQA Verified: **47.9%** (official). MMLU-Pro: **83%** (aimodelsnavi) / 87% (champaignmagazine) — conflicting.
- Artificial Analysis Intelligence Index: **73** at launch (July 2025), then above Gemini 2.5 Pro (70) and o3 (70).
- Second-pass reasoning rows (2026-10-12): AA-GPQA Diamond: **87.7%** (measured — confirms the vendor's 87.0–87.5%); AA-HLE: **26.7%** (measured — slightly above the vendor's 24.5% no-tools); HLE: **42.9%** (benchgap est ±9.5, medium confidence — conflicts with the measured 26.7%; possibly a with-tools/protocol estimate, kept as a conflict); AIME 2026: **95.5%** (benchgap est ±0.6); GPQA (general): **88.4%** (benchgap est ±4.9, high confidence); Vals GPQA Diamond: 84.7% (±7.4); Vals MMLU-Pro: **86.9%** (±2.2, high confidence — supports the 87% champaignmagazine read over the 83% aimodelsnavi read); FrontierMath v2: Tiers 1–3 **19.7%** / Tier 4 **2.1%** (confirms the official FrontierMath 19.66%); CritPt: **2.0%** (measured — a severe cap); AA Intelligence Index: **22.5%** (v4.3.2 measured — the rebase-era read of the launch-era 73; LLM Registry's 41.4/100 is an older AA version, last verified 2026-02-16); AA-Omniscience: **+2.1** (accuracy 40.5%, hallucination rate 64.5% — a mildly positive, mid-band profile); BioMysteryBench: 41.2% (est ±5.9, human-difficult); ARC-AGI-1: **79.6%** (BenchmarkList, rank 43/97) vs the official 66.67% — conflict kept; ARC-AGI-2: **29.4%** (BenchmarkList, rank 44/99) vs the official 15.97% — conflict kept (either way, far below GPT-5.2's 52.9% and Gemini 3.1 Pro's 77.1%).

Coding:

- SWE-bench Verified: **72.5%** (aimodelsnavi); 72–75% (community tests, secondary); 81.0% (TPS — config unclear, unverified).
- LiveCodeBench: **79%** (aimodelsnavi) / 79.3% (TPS) / 81.9% pass@1 (evals.report, unverified) / 82% (leaderboard via champaignmagazine); Vals LiveCodeBench: **81.5%** (benchgap est ±3.8).
- Second-pass coding rows (2026-10-12): SWE-bench Verified — **72.5%** (aimodelsnavi, official-era) / **74.6%** (Vals est ±1.4, medium confidence) / **67.8%** (benchgap est ±3.6, medium confidence) — a 6.8-point cluster around the vendor's 72.5%; AA Coding Index: **41.6%** (benchgap est ±11.4, low confidence); AA-SciCode: **46.0%** (benchgap est ±8.6, low confidence — the first SciCode-adjacent read); Vibe Code Bench v1.1: no grok-4 row on the mainstream boards (Vals/AIEvals/BenchLM); the alt-research VibeCodingBench (a different benchmark, 180 tasks) has Grok 4 at 88.0% (rank #9/15) — see agentic rows; DeepSWE: still no grok-4 score (Grok 4.5 posts 62.0% / DeepSWE 1.1 56.6% for reference).

Long context:

- No MRCR / RULER / GraphWalks scores found; 256K window.
- Second-pass long-context rows (2026-10-12): AA-LCR v1.1: **68%** (AA measured — the first long-context retrieval read; mid-band, does not lift the 256K-window score).

Multimodal:

- Image and PDF input supported (meta.json); no MMMU / MMMU-Pro / VQA scores found in captured sources.
- Second-pass multimodal rows (2026-10-12): AA-MMMU-Pro: **68.8%** (AA measured — the first multimodal benchmark score; mid-band for the era, consistent with the existing 73).

### Normalized scores (1–100)

- **Tool use: 70/100.** Vending-Bench dominance (2.3× Opus 4's net worth), BFCL 63.0% (rank 8/85), τ²-Bench Telecom 74.9% and MCP-Universe 33.3% (rank 2/27, small field) support the score; Terminal-Bench 2.0 28.1%, MCPMark 31.7%, Terminal Bench 27.2%, GDPval-AA 17.9% (est) and MCP Atlas 43.5% (est) cap it. Unchanged — the second-pass evidence is mixed, not directional.
- **Reasoning: 74/100.** GPQA 87.0–87.7% (AA-measured 87.7% confirms) and AIME 2025 91.7–95.5% (AIME26 est 95.5%) are near-frontier for math/science; capped by AA-HLE 26.7% (measured), FrontierMath v2 19.7%/2.1%, CritPt 2.0%, and the AA Intelligence Index rebase (73 → 22.5 on v4.3.2). ARC-AGI-2 is conflicting (15.97% official vs 29.4% BenchmarkList) — either way far below the 2026 frontier (GPT-5.2 52.9%, Gemini 3.1 Pro 77.1%). Unchanged.
- **Context window: 74/100.** 256K sits between the 200K=70 and 1M=95 anchors; the new AA-LCR v1.1 read of 68% is mid-band and does not move the score either way.
- **Multimodal: 73/100.** Text/image/PDF input per repo meta.json (image+PDF band); the first multimodal score, AA-MMMU-Pro 68.8% (measured), is mid-band for the era — consistent with 73, not enough to corroborate strength above it.
- **Coding: 73/100.** SWE-bench Verified 72.5% (independent ests 67.8–74.6% cluster around it) and LiveCodeBench 79–81.5% were strong for July 2025 but sit below the Oct-2026 frontier (SWE-bench leader 97.0%, DeepSWE leader 73.0%); AA Coding Index 41.6% and AA-SciCode 46.0% (both low-confidence ests) are the new caps; no Vibe Code Bench v1.1 or DeepSWE row exists for grok-4.
- **Cost efficiency: 58/100.** $3/$15 per 1M matches the ~60 anchor, but rates double above 128K tokens ($6/$30) and there is no free tier.
- **Overall Score: 72.8/100.** Mean of the five quality dimensions (70+74+74+73+73)/5 = 72.8; all core evidence is July-2025 vintage, several tracker figures conflict, and the headline HLE "60%" belongs to Grok 4 Heavy with tools — not standard Grok 4. Unchanged by the second pass: the new rows confirm the anchors (AA-GPQA 87.7%, AA-HLE 26.7%, SWE-bench cluster 67.8–74.6%) without shifting any dimension.

---

## Update 2026-10-12 (deep second pass, 6 independent searches)

- **Score changes: none.** All seven dimensions stand (Tool 70 / Reasoning 74 / Context 74 / Multimodal 73 / Coding 73 / Cost 58 / Overall 72.8). The second pass filled every evidence gap the first pass flagged (τ², TB 2.0, MCPMark, MCP-Universe, AA-LCR, AA-MMMU-Pro, AA-SciCode, SWE-bench ests) and the new rows confirm rather than move the anchors.
- **Key fills:** agentic — τ²-Bench Telecom 74.9% (first τ² read), MCP-Universe 33.3% (rank 2/27), MCPMark 31.7% (rank 15/41), Terminal-Bench 2.0 28.1%±4.79, TB Hard 37.9%, MCP Atlas 43.5% (est), MCP-Tasks 79.1% (est), BFCL v4 57.5% (est), GDPval-AA 17.9% (est) / 991 Elo, VibeCodingBench 88.0% (alt-research, #9/15); reasoning — AA-GPQA 87.7% (measured), AA-HLE 26.7% (measured), AIME26 95.5% (est), Vals MMLU-Pro 86.9% (high conf), FrontierMath v2 19.7%/2.1%, CritPt 2.0%, AA Index 22.5 (v4.3.2 rebase of launch-era 73), AA-Omniscience +2.1, ARC-AGI-1 79.6% / ARC-AGI-2 29.4% (BenchmarkList, both above xAI's official 66.67%/15.97% — conflicts kept); coding — SWE-bench Verified ests 67.8–74.6% (Vals 74.6%, benchgap 67.8%, around the official 72.5%), Vals LiveCodeBench 81.5%, AA Coding Index 41.6%, AA-SciCode 46.0%; context — AA-LCR v1.1 68% (first retrieval read); multimodal — AA-MMMU-Pro 68.8% (first multimodal score).
- **Conflicts kept:** HLE 26.7% (AA measured) vs 42.9% (benchgap est, medium conf — possibly with-tools/protocol); ARC-AGI-1 66.67% official vs 79.6% (BenchmarkList); ARC-AGI-2 15.97% official vs 29.4% (BenchmarkList); APEX-Agents 30.3% (BenchmarkList) vs 1.6% (benchgap est); MMLU-Pro 83% vs 87% (Vals MMLU-Pro 86.9% high-conf supports the higher read); BFCL v3-era 62.97% official vs BFCL v4 57.5% (est).
- **Rankings (Oct 2026):** Rank.ai consensus #39/122 (59/100); LMArena #62/112 (1410; swfte July-2026 snapshot: #11 overall at 1441 — Math tied 1st, Coding/Instruction-Following/Longer-Query tied 2nd at launch); the current LMArena top-24 is Grok 4.6/4.5/4.3 — grok-4 itself has slipped out of the visible top tier.
- **Still open:** a strong-scaffold Terminal-Bench 2.1 run; SciCode/DeepSWE/Vibe-Code-Bench-v1.1 measured rows; MCP-Atlas and APEX-Agents independent reproductions (only estimates exist); the ARC-AGI tiebreaker between xAI's official and BenchmarkList's reads.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-12)
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
