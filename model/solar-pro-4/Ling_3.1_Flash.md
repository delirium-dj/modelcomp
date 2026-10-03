# Solar Pro 4 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Solar Pro 4
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4 (SP4)
- **Short description:** Upstage AI's closed commercial flagship reasoning model — optimized for production enterprise workflows (document understanding, information extraction, long-context reasoning, continuous decision-making) at a fraction of frontier-model cost.
- **Provider / access:** Upstage — first-party API (with BYOK / ZDR enforcement options), OpenRouter (70% off launch promotion); integrated into Nous Research's Hermes Agent. Within a week of OpenRouter listing, token consumption exceeded 370 billion.
- **Release / knowledge:** 2026-08-06 (AA) / announced 2026-08-11 (PR) / OpenRouter listing 2026-08-10. Replaces Solar Pro 3 (April 2026, Intelligence Index 14). Knowledge cutoff not captured.
- **IDs:** `solar-pro4` (OpenRouter `upstage/solar-pro4`); folder `solar-pro-4`.
- **Context window:** **Conflicting:** 384K (AA launch article) vs 512K (AA model page) vs 524K (OpenRouter listing). Max output 256K (AA article) vs 131.1K (OpenRouter). Flagged, not resolved.
- **Modalities:** Text in, text out.
- **Pricing (as of 2026-10):** $0.30 / $1.20 per 1M input/output, cache hit $0.06 (80% discount) via Upstage first-party — doubled from Solar Pro 3's $0.15/$0.60/$0.02; blended $0.22/M (7:2:1). OpenRouter promotional: $0.09 / $0.36, cache read $0.018.
- **Architecture:** Not publicly disclosed (proprietary).

### Raw benchmarks found

**Artificial Analysis (independent):**
- GPQA Diamond **89.1%**; HLE **29.2%**; AA-LCR **74.0%** (PR says 71 points, "2.3x superior to the previous version" — minor conflict, flagged); CritPt **5.4%**; SciCode **44.6%**; Coding Index **52.7**; AA-Omniscience accuracy 18.9% / non-hallucination rate **75.6%**.
- Terminal-Bench: v2.1 **57.3%**; v4.0 **0.51%** (v4.0 protocol change makes rows partially comparable — flagged).
- **Intelligence Index: 42** (AA launch article, 2026-08-12; "27-point increase over Solar Pro 3's 14", alongside Inkling xhigh 42, just behind MiMo-V2.5-Pro 43) **vs 28.1** (AA model page, v4.3 conditions, Sept 2026) — conflicting snapshots, likely index re-basing; both reported.
- Design Arena Elos: Agents Arena Webapps 1098; Models Arena 3D 1194; Code Categories 1189; Data Visualization 1188; Game Development 1183; UI Component 1156; Website 1183.
- PR comparison claims: surpassed Nemotron 3 Ultra (38) and Gemini 3.5 Flash-Light (37); outperformed Mistral Medium 3.5 (30) and Cohere Command A+ (23).

## Scores

- **Tool use: 61/100.** Terminal-Bench v2.1 57.3%, Coding Index 52.7, Design Arena Elos 1156-1194, Hermes Agent integration; no Tau-bench/MCP-Atlas captured; TB v4.0 0.51% reflects a protocol change, not capability.
- **Reasoning: 67/100.** GPQA Diamond 89.1% is frontier-tier; HLE 29.2% solid; CritPt 5.4% weak; Intelligence Index conflict (42 vs 28.1) flagged — the score rests on the benchmark rows, not the composite.
- **Context window: 89/100.** 384-524K (conflict flagged) with a strong measured long-context row: AA-LCR 74.0% (2.3x the predecessor).
- **Multimodal: 15/100.** Text-only per captured sources.
- **Coding: 63/100.** SciCode 44.6%, Coding Index 52.7, TB v2.1 57.3%; no SWE-bench row captured.
- **Cost efficiency: 86/100.** $0.30/$1.20 first-party (doubled from Solar Pro 3) with 80% cache discount; OpenRouter promotional $0.09/$0.36; blended $0.22/M.
- **Overall Score: 59.0/100.** Mean of Tool use 61, Reasoning 67, Context window 89, Multimodal 15, Coding 63 = 59.0.

> **Gap vs folder average (66.1): −7.1.** The peer set appears to weight the AA Intelligence Index 42 (launch article) heavily; the AA model page's v4.3 snapshot reads 28.1, and this report scores the underlying rows instead (GPQA 89.1%, HLE 29.2%, SciCode 44.6%, TB v2.1 57.3%). The text-only Multimodal penalty (15) and the unresolved context-window conflict (384K vs 512K vs 524K) account for the rest.

## Notes

- Verification trail: Artificial Analysis model page (Index 28; pricing; 512K; modalities), AA launch article "Upstage Solar Pro 4: Benchmarks and analysis" (2026-08-12; Index 42; 384K; 256K output; Solar Pro 3 comparison; pricing history), Upstage PR (2026-08-20; launch date 2026-08-11; AA-LCR 71; competitor comparisons; 370B tokens in a week; Hermes Agent), OpenRouter listing (524K; 131.1K output; promotional pricing; provider uptime 98.48-98.66%; 67/48 tok/s), AI Atlas (benchmark rows with evaluator/variant annotations; price history), BenchmarkList (alternate $0.03/$0.12 route — unverified, flagged).
- Known conflicts: Intelligence Index 42 (article) vs 28.1 (model page); context 384K vs 512K vs 524K; max output 256K vs 131.1K; AA-LCR 71 (PR) vs 74.0 (AA); release date 08-06 vs 08-10 vs 08-11.
- Open questions: which context window is correct; whether the Index discrepancy is re-basing; SWE-bench and MCP-Atlas rows.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: resolved context-window spec, SWE-bench row, clarification of the Intelligence Index snapshots.
