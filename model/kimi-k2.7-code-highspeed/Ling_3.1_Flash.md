# Kimi K2.7 Code Highspeed — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Kimi K2.7 Code Highspeed
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE (read first):** Kimi K2.7 Code Highspeed is the same model as Kimi K2.7 Code (identical open weights, `moonshotai/Kimi-K2.7-Code`, Modified MIT) served through Moonshot's Highspeed tier at exactly 2× the base price for roughly 180 tok/s (up to ~260 in short runs). Every quality benchmark is therefore identical to the `kimi-k2.7-code` folder's report; only pricing and throughput differ. This folder's meta.json is a stale scaffold stub ("128K total", "Text in/out", "Standard pricing").

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** Highspeed serving tier of Moonshot AI's open-source coding agentic model — same 1T/32B MoE weights as Kimi K2.7 Code, optimized for latency-sensitive interactive coding agents.
- **Provider / access:** Moonshot AI — pay-per-token API at platform.moonshot.ai (model id `kimi-k2.7-code-highspeed`); open weights self-hostable under Modified MIT (self-hosting removes the speed premium entirely).
- **Release / knowledge:** 2026-06-13 (same checkpoint as Kimi K2.7 Code). Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/kimi-k2.7-code-highspeed` (repo meta.json, stale stub); `kimi-k2.7-code-highspeed` (Moonshot API); `moonshotai/Kimi-K2.7-Code` (HF weights).
- **Context window:** 262,144 tokens (256K native).
- **Modalities:** Text, image, video in (video experimental, official API only); text out. Forced thinking with `preserve_thinking` always on; interleaved thinking and multi-step tool calls. 400M MoonViT vision encoder.
- **Pricing (as of 2026-10):** $1.90 input / $8.00 output per 1M, cache hit $0.38 — exactly double the standard tier ($0.95/$4.00, $0.19 cache) on every billed line; ~180 tok/s (up to ~260 short-context).
- **Architecture:** Sparse MoE — 1T total / 32B active, 61 layers (1 dense), 384 experts (8 selected per token + 1 shared), MLA attention, SwiGLU, 160K vocabulary; native INT4 quantization.

### Raw benchmarks found

Identical to Kimi K2.7 Code (same weights; vendor card runs via Kimi Code CLI, thinking enabled, temperature 1.0, top-p 0.95, 262,144-token context; GPT-5.5 in Codex xhigh; Claude Opus 4.8 in Claude Code xhigh):

Coding:

- Kimi Code Bench v2: **62.0%** (K2.6: 50.9%; GPT-5.5: 69.0%; Opus 4.8: 67.4%).
- Program Bench: **53.6%** (K2.6: 48.3%; GPT-5.5: 69.1%; Opus 4.8: 63.8%).
- MLS Bench Lite: **35.1%** (K2.6: 26.7%; GPT-5.5: 35.5%; Opus 4.8: 42.8%).

Agentic / tool use:

- Kimi Claw 24/7 Bench: **46.9%** (K2.6: 42.9%; GPT-5.5: 52.8%; Opus 4.8: 50.4%).
- MCP Atlas: **76.0%** (K2.6: 69.4%; GPT-5.5: 79.4%; Opus 4.8: 81.3%).
- MCP Mark Verified: **81.1%** (K2.6: 72.8%; GPT-5.5: 92.9%; Opus 4.8: 76.4%).

Third-party (Artificial Analysis via aggregator listings; not vendor-confirmed):

- GPQA Diamond (thinking, no tools): **89.6%**; HLE (thinking, no tools, text-only): **35.0%**; AA Intelligence Index **25.8**; Terminal-Bench **44.7%**; LiveCodeBench **82.1%**; SciCode **47.8%**.
- Full benchmark table, harness details and conflicting aggregator figures: see the `kimi-k2.7-code` folder's `Ling_3.1_Flash.md` (same model).
- Second-pass rows (2026-10-12, independent boards — same weights as Kimi K2.7 Code): SWE-bench Verified — **78.2%** (BenchmarkList, rank 18/72, 76th pct, std 1.85, 2026-07-28; field leader Opus 5 97.0%) vs **80.2%** (vendor-reported per VM0) vs ~79.5% (wavise) vs 60.4% (AlphaSignal — a lone outlier, kept as a conflict); LiveCodeBench — **82.0%** (BenchmarkList, rank 48/123) / 82.1% (AA aggregator) / 86.8% (benchgap v6 est ±2.4, low conf); SWE-bench Multilingual **73.5%** (rank 26/49; leader O-5.5 93.9); SWE-bench Pro **58.6** (vendor-reported, beats Opus 4.6's 53.4 and GPT-5.4); Terminal-Bench 2.1 — **72.7%** (BenchmarkList, rank 7/7, small field) / **67.4%** (AA rerun); DeepSWE 1.1 **30.5%** (Datacurve mini-swe-agent, rank 46/52, pass@4 61.1%; leader O-5.5 74.2%); FrontierCode 30.1% (rank 24/36); Vibe Code Bench v1.1 **47.2%** (rank 30/75); ProgramBench 53.6% (rank 17/37); SciCode 47.5–47.8% (rank 63/296); ALE-Bench 886.23; KernelBench Mega 2.59× (rank 19/28; leader O-5.5 35.46×), Hard 5.2–6.5%; Code Migration 25.4%; ReactBench 20.5%; CursorBench 3.1/3.2 49.7%; agentic — AA τ²-Bench Telecom **90.1%** (strong), MCP Mark Verified 81.1% (rank 2/4), MCP Atlas 76.0% (rank 24/48), Kimi Claw 24/7 46.9% (rank 21/36), WildClawBench 46.9% (rank 21/36), Long-Horizon Terminal-Bench 0.37 mean reward (rank 9/21; leader G-5.6 Sol 0.45), Vending-Bench 2 5082.94 (rank 31/60), Hex DataBench 53.0% (rank 8/8), Agent Arena +1.7% (LMArena; Steerability +5.6%, Confirmed Success +2.9%); caps — AutomationBench **3.2%** (rank 43/48), τ³-Banking **20.2%** (rank 56/176), BrowseComp 43.5%±6.2 (rank 56/60), RuneBench 4.2 (rank 39/61), APEX Agents 27.6%, GDPval-AA 1,187 Elo (rank 74/352, 79th pct, 2026-09-02) / 27.0% (benchgap measured), AA-Briefcase 859 (rank 69/145); reasoning — OTIS Mock AIME 2024-2025 **95.6%** (Epoch), GPQA 87.9% (Epoch internal) / 89.3% (benchgap est ±2.5, high conf) / 89.6% (AA measured), SimpleBench 57.9%, WeirdML 54.1%, SimpleQA Verified 36.5%, IFBench 63.1–64.7%, CritPt 10.0%, AA-Omniscience 39.6%, HLE 42.1% (benchgap est ±9.5, medium conf — vs AA's measured 35.0%); long context — AA-LCR **79.3%** (measured, the ~80% strong-retrieval anchor); multimodal/device — Android Bench 70.4% (CI 63.4–77.1, 31.8 h, $48.1, rank 16/46); arenas — WebDev Arena 1473 (rank 42/105, 4,680 votes; Image-to-WebDev 1511.5), Design Arena 1293 (rank 64/343, win rate 53.5%; leader Kimi K3 1445); reliability — function-call accuracy 94% first-try (vs GPT-5.5 87%), multi-turn tool use 91% (10+ rounds), LMArena Tool Use #1 claim (wavise); hallucination rate ~39% (down from K2.6's ~65%). ModelCap's K2.7-Code-vs-K3 board: K3 (Max) leads on every comparable row (AA Index 43.6 vs 25.8, TB 2.1 85.0% vs 67.4%, HLE 46.9% vs 35.0%, WildClawBench 54.5 vs 46.9).

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP Mark Verified 81.1% (rank 2/4, beats Opus 4.8's 76.4%), AA τ²-Bench Telecom 90.1% and MCP Atlas 76.0% (rank 24/48) are near-frontier, with Terminal-Bench 2.1 67.4–72.7% mid-strong; Kimi Claw 24/7 46.9%, WildClawBench 46.9% and Terminal-Bench Hard 44.7% sit mid-pack; the caps are AutomationBench 3.2% (rank 43/48), τ³-Banking 20.2% (rank 56/176), BrowseComp 43.5% (rank 56/60) and GDPval-AA 27.0% (benchgap measured; 1,187 Elo, rank 74/352). Revised 71→74 — identical to the `kimi-k2.7-code` folder (same weights).
- **Reasoning: 69/100.** GPQA Diamond 89.3–89.6% (AA measured 89.6%, benchgap est 89.3% high-confidence, Epoch internal 87.9%) is frontier-adjacent just under the 90% line, and OTIS Mock AIME 95.6% (Epoch) is a strong math anchor; HLE 35.0% (AA measured, no tools) trails the 40%+ frontier band (benchgap's 42.1% estimate and the vendor's 54.0% w/tools figure are harness-dependent conflicts), and CritPt 10.0%, SimpleQA Verified 36.5% and AA-Omniscience 39.6% cap the score. Revised 68→69 — identical to the `kimi-k2.7-code` folder.
- **Context window: 75/100.** 262,144-token native context with AA-LCR 79.3% (measured) — the ~80% strong-retrieval anchor for the 256K band (262K + LCR ~80% ⇒ 74–75). Revised 74→75 — identical to the `kimi-k2.7-code` folder.
- **Multimodal: 75/100.** Native text/image/video input via a 400M MoonViT encoder (video experimental); no public multimodal benchmark scores for this checkpoint.
- **Coding: 73/100.** Independent boards now verify the coding picture: SWE-bench Verified 78.2% (BenchmarkList, rank 18/72 — vendor claims 80.2%; AlphaSignal's 60.4% is a lone outlier), LiveCodeBench 82.0% (rank 48/123), SWE-bench Multilingual 73.5%, Terminal-Bench 2.1 67.4–72.7% and SWE-bench Pro 58.6 (vendor, ahead of Opus 4.6's 53.4); the caps are DeepSWE 30.5% (rank 46/52), FrontierCode 30.1%, MLS Bench Lite 35.1%, Code Migration 25.4%, ReactBench 20.5% and KernelBench Mega 2.59×. Kimi Code Bench v2 62.0% and Program Bench 53.6% trail GPT-5.5 (69.0/69.1) and Opus 4.8 (67.4/63.8). Revised 70→73 — identical to the `kimi-k2.7-code` folder.
- **Cost efficiency: 82/100.** $1.90/$8.00 per 1M (cache $0.38) is a 2× premium over the base tier for the same weights — worth it only when latency is the bottleneck; self-hosting the open Modified MIT weights at base-tier economics is the zero-premium alternative.
- **Overall Score: 73.2/100.** Mean of the five quality dimensions (74+69+75+75+73)/5 = 73.2 — identical to Kimi K2.7 Code, as expected for a serving-tier variant of the same checkpoint; only the Cost dimension differs (82 here vs 90 on the standard tier, reflecting the 2× Highspeed price for ~6× the throughput).

---

## Update 2026-10-12 (deep second pass, 4 independent searches)

- **Score changes:** Tool 71→74, Reasoning 68→69, Context 74→75, Coding 70→73, Overall 71.6→73.2 — quality dimensions are identical to the `kimi-k2.7-code` folder (same open weights, `moonshotai/Kimi-K2.7-Code`); Multimodal 75 stands (native image/video in via 400M MoonViT; Android Bench 70.4% is the only device-agent row, no pure vision suite); Cost 82 stands (Highspeed tier bills exactly 2× the standard tier: $1.90/$8.00 vs $0.95/$4.00, cache $0.38 vs $0.19).
- **Key fills (independent boards, 2026-07 to 2026-10):** SWE-bench Verified 78.2% (BenchmarkList, rank 18/72, 2026-07-28) — the first independent SWE-bench row for these weights; LiveCodeBench 82.0% (rank 48/123); SWE-bench Multilingual 73.5% (rank 26/49); Terminal-Bench 2.1 72.7% (BenchmarkList) / 67.4% (AA); DeepSWE 1.1 30.5% (Datacurve, pass@4 61.1%); Vibe Code Bench v1.1 47.2% (rank 30/75); AA τ²-Bench Telecom 90.1%; AA-LCR 79.3% (measured); OTIS Mock AIME 95.6% (Epoch); SimpleBench 57.9%; GDPval-AA 1,187 Elo (rank 74/352); Long-Horizon Terminal-Bench 0.37 (rank 9/21); Android Bench 70.4% (rank 16/46); WebDev Arena 1473 (rank 42/105); Design Arena 1293 (rank 64/343); Agent Arena +1.7% (Steerability +5.6%); benchgap: 19 measured (AA-GPQA 89.6%, AA-HLE 35.0%, AA-SciCode 47.8%, AA Index 25.8, CritPt 10.0%, GDPval-AA 27.0%, AA-LCR 79.3%) + 80 estimated (LiveCodeBench v6 86.8% low-conf, HLE 42.1% medium-conf, IFBench 64.7%).
- **Conflicts kept:** SWE-bench Verified 60.4 (AlphaSignal) vs 78.2 (BenchmarkList) vs 79.5 (wavise) vs 80.2 (vendor); GPQA 87.9 (Epoch) vs 89.3 (benchgap) vs 89.6 (AA); HLE 35.0 (AA measured) vs 42.1 (benchgap est) vs 54.0 (vendor w/tools); AA Intelligence Index 25.8 (current, v4.3.2-era) vs VM0's "#4" claim (older index version); AutomationBench 3.2% (BenchmarkList) — a severe cap vs the vendor's agentic framing.
- **Rankings (Oct 2026):** BenchmarkList: SWE-bench Verified #18/72, LiveCodeBench #48/123, SciCode #63/296, Vibe Code #30/75, ProgramBench #17/37, Android Bench #16/46, MCPMark #2/4, MCP Atlas #24/48, WebDev Arena #42/105, Design Arena #64/343, GDPval-AA #74/352, Long-Horizon TB #9/21, DeepSWE #46/52, τ³-Banking #56/176, AutomationBench #43/48; ModelCap: K3 (Max) leads K2.7 Code on every comparable board (AA Index 43.6 vs 25.8, TB 2.1 85.0% vs 67.4%, HLE 46.9% vs 35.0%).
- **Highspeed tier status (round-2 findings):** GA launch (AlphaSignal) — exited beta, available to Allegretto ($39/mo)+ Kimi Code subscribers; ~180 tok/s median (up to 260 short-context), ~6× faster than Standard; consumes 3× credits on subscription; API output $8.00/1M vs $4.00 Standard; Vercel AI Gateway lists max output 32,768 tokens; HokAI (2026-06) noted no independently audited suite as of late June — this pass closes that gap with BenchmarkList/benchgap/Epoch rows.
- **Still open:** a pure vision-suite row (MMMU/MMMU-Pro) for the MoonViT encoder; an MRCR/NoLiMa 256K retrieval row (AA-LCR 79.3% is the only strong retrieval read); a current-protocol MCP Atlas re-run (76.0% is the vendor-era figure); the AlphaSignal 60.4% SWE-bench outlier needs a harness citation.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-12)
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
