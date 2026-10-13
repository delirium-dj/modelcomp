# Gemini 2.5 — findings by Ling 3.1 Flash

- Source: Google DeepMind / Gemini 2.5 (family flagship: Gemini 2.5 Pro)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google DeepMind's 2.5 family (Pro released Jun 2025; Flash alongside): natively multimodal reasoning models with dynamic thinking, a 1M-token context and tool use. Pro is the reasoning/coding flagship; Flash is the price-performance tier ($0.30/$2.50). Google now limits 2.5 access to existing users and points new projects at 3.5 Flash-Lite / 3.8 Flash, but 2.5 models continue to be served.
- **Provider / access:** Google AI Studio / Gemini API `gemini-2.5-pro`, `gemini-2.5-flash`; Google Cloud Vertex AI; Gemini 2.5 Pro Computer Use preview (shut down).
- **Release / knowledge:** Pro Jun 2025; knowledge cutoff Jan 2025.
- **IDs:** `google/gemini-2.5-pro`, `google/gemini-2.5-flash`
- **Context window:** 1M tokens; max output 64K tokens.
- **Modalities:** text, image, audio, video in; text out (audio out on TTS variants); dynamic thinking; tool use; Computer Use preview (shut down).
- **Pricing (as of 2026-10-08):** Pro $1.25 / 1M input, $10.00 / 1M output (≤200K; $2.50/$15.00 over 200K); cached input $0.125 ($0.25); Flex/Batch $0.625/$5.00. Flash $0.30 / $2.50 (audio input $1.00); cached $0.03.
- **Architecture:** proprietary; dynamic-thinking (reasoning) transformer, native multimodality.

### Raw benchmarks found

Google model card / technical report (Jun 2025) unless noted; Dataconomy/AA rows carry the same era.

Agent / tool use:

- Tau2-bench: **54.1%** (AA)
- TerminalBench Hard: **26.5%** (AA)
- SWE-bench Verified: **59.6%** single attempt / **67.2%** multiple attempts (Google scaffolding, re-scored by the model's own judgement — not directly comparable to provider reports)
- Second-pass agentic rows (2026-10-12): MCPAtlas (Scale): **8.8%** (unifybench — a severe cap); AA Agentic Index: **3.5%** (BenchLM) / **7.2%** (LMSpeed); Remote Labor Index (Scale CAIS): **0.8%**; GDPval (OpenAI): **23.3%**; GDPval-AA v2.1: **0.0%** (measured); TheAgentCompany: **30.3%**; Terminal-Bench 2.0 (Vals): **30.3%**; Terminal-Bench: **32.6%** (BenchLeader); BrowseComp: **7.8%** (OpenAI) / BrowseComp-Plus **19.9%**; DeepSearchQA: **24.6%**; τ³-Banking (AA): **9.7%**; BFCL v4: **52.3%** (unifybench); DeepResearch Bench: **42.8%**; BALROG: **43.3%**; METR Time Horizons: **55.4%**; Vending-Bench 2: 573.6; Poker Agent: 1,032.6 (TrueSkill).

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (Google report; Dataconomy 84.4%)
- Humanity's Last Exam: **17.8%** (Dataconomy) / 21.1% (Scale leaderboard era)
- AIME 2025: **88.0%**; AIME 2024: **92.0%**; MATH 500: **96.7%**
- MMLU-Pro: **86.2%**; Global-MMLU-Lite: **88.6%**
- SimpleQA: **50.8%**; IFBench: **48.7%**; ARC-AGI v2: **4.9%**
- AA Intelligence Index: **34.6** (Math Index 87.7, Coding Index 31.9) — launch-era v4.1 read; the current v4.3.2 board rescored it to **16.1** (measured, #64/111; 14.5 on AA's direct 2026-09-09 page) — the ~18-point gap is the rebase, not a regression.
- Second-pass reasoning rows (2026-10-12): AIME 2026: **95.5%** (benchgap est); FrontierMath v2 (Epoch): Tiers 1–3 **14.1%** / Tier 4 **4.2%**; SimpleBench: **62.4%**; Kagi LLM Benchmark: **70.3%**; ForecastBench: **61.3%**; LMCA: 34.8%; Chess Puzzles: 20.0%; HLE cluster: **17.8%** (Dataconomy) / 18.8% (Google) / 21.1% (Scale era) / 21.6% (Scale CAIS) / 22.5% (AA) — kept as a cluster; GPQA cluster: **86.4%** (Google) / 85.3% (Epoch) / 84.4% (AA) / 83.0% (benchgap est) / 80.8% (Vals) / 74.9% (HELM); MMLU-Pro cluster: **86.2%** (Google) / 86.3% (HELM) / 84.1% (Vals); AA-Omniscience: **−16.4** (accuracy 39.0%, non-hallucination 9.1% / hallucination rate 90.9% — a very high-hallucination profile); LMArena Hard Prompts: 1458.
- Chatbot Arena Elo: **1445.6** overall / **1227.0** coding (BenchGecko)

Coding:

- LiveCodeBench: **74.2%** (Google report, 2025-01-01→05-01 window; Dataconomy v5 75.6%)
- Aider Polyglot: **82.2%** (Aider leaderboard — highest of its era per Google)
- SciCode: **46.3%**
- Second-pass coding rows (2026-10-12): LiveCodeBench: **79.2%** (Vals) / **79.8%** (benchgap v6 est, high confidence) / **80.1%** (unifybench v5) — three independent reads 5–6 points above the vendor's 74.2%; Aider Polyglot: **83.1%** (rank 3/46 — confirms the vendor's 82.2%); SWE-bench Verified (independent runs): **57.6%** (Epoch) / **54.4%** (Vals) / **53.6%** (bash-only, official board) — below Google's 59.6–67.2% custom-scaffold figures; GSO-Bench: **3.9%**; Vibe Code Bench v1.1: **0.40%** (Vals — a near-zero cap); AA Coding Index: **33.3%** (measured); Gert Labs: 42.01%; SciCode (SciCode board): 42.8%; WeirdML: 54.0%.

Multimodal:

- MMMU: **79.6%** (rank 7/57); Video-MME: **84.8%**; Vibe-Eval: **65.6%**
- Second-pass multimodal rows (2026-10-12): MMMU-Pro: **68.0%** (official) / **74.9%** (AA) / **81.3%** (Vals) — a 13.3-point conflict cluster, kept; VISTA: **54.6%** (rank 1/57); OCRBench v2: **59.3%**; ScreenSpot: **44.7%**; AudioMC: **46.9%** (Scale SEAL); Design Arena Website: 1,170–1,178; LMArena Vision: 1,263; TutorBench: 55.6% (rank 3/27).

Long context:

- LOFT (hard): **87.0%** at ≤128K / **69.8%** at 1M; MRCR v2 (8-needle): **58.0%** at 128K average / **16.4%** at 1M pointwise; AA-LCR: **69%** (confirmed measured at 69.0% by benchgap)
- Second-pass long-context rows (2026-10-12): LongCodeBench 1M: **74%** (unifybench — a strong 1M code-retrieval read); Fiction.LiveBench 120k: **90.6%** (rank 4/35); LMArena Document: 1,431.

### Normalized scores (1–100)

- **Tool use: 61/100.** Tau2 54.1%, SWE-bench 59.6–67.2% (custom scaffold) and BFCL v4 52.3% are mid-field, but the second-pass agentic composites are severe caps: AA Agentic Index 3.5–7.2%, MCPAtlas 8.8%, Remote Labor Index 0.8%, GDPval-AA v2.1 0.0% and BrowseComp 7.8%; Terminal-Bench 32.6% and TheAgentCompany 30.3% sit low. Revised 62→61 on the MCPAtlas/Agentic-Index/Remote-Labor caps.
- **Reasoning: 68/100.** GPQA 86.4% and AIME 88.0% are strong, but HLE 17.8–21.1%, ARC-AGI v2 4.9% and AA Index 34.6 date the model against 2026 frontier reasoning.
- **Context window: 79/100.** 1M-token window with LOFT 87.0%/69.8%, AA-LCR 69.0% (now independently confirmed), LongCodeBench 1M 74% and Fiction.LiveBench 90.6% (rank 4/35) supporting, though MRCR v2 at 1M drops to 16.4% pointwise. Revised 78→79 on the LongCodeBench/Fiction.LiveBench fills.
- **Multimodal: 82/100.** Native text/image/audio/video input with MMMU 79.6% and Video-MME 84.8%; text-only output on the main endpoints.
- **Coding: 79/100.** LiveCodeBench 79.2–80.1% (three independent reads, 5–6 points above the vendor's 74.2%) and Aider Polyglot 83.1% (rank 3/46) led the field at release and still hold up; SciCode 42.8–46.3%, the independent SWE-bench runs (53.6–57.6%, below Google's 59.6–67.2% custom scaffold), Vibe Code Bench 0.40%, GSO-Bench 3.9% and Coding Index 33.3% cap it now. Revised 78→79 on the LiveCodeBench/Aider fills.
- **Cost efficiency: 45/100.** $1.25/$10 per 1M (Pro) is output-heavy pricing; Flash at $0.30/$2.50 is the value route.
- **Overall Score: 74/100.** Mean of the five quality dims (61+68+79+82+79)/5 = 73.8 → 74; a legacy but still-served family — best fit for long-context multimodal ingestion and Flash-tier high-volume tasks, with new projects steered to 3.5/3.8 models. Revised from 73.6 on the Context (+1) and Coding (+1) fills, offset by Tool (−1); still rounds to 74. BenchLeader's composite (54.0 ±3.2, #242/760) and the AA Index rebase (34.6 → 16.1, v4.3.2) date the model against the 2026 frontier.

---

## Update 2026-10-12 (deep second pass, 12 independent searches)

- **Score changes:** Tool 62→61 (MCPAtlas 8.8%, AA Agentic Index 3.5–7.2%, Remote Labor Index 0.8% caps), Context 78→79 (LongCodeBench 1M 74%, Fiction.LiveBench 90.6% rank 4/35), Coding 78→79 (LiveCodeBench 79.2–80.1% across Vals/benchgap/unifybench vs the vendor's 74.2%; Aider Polyglot 83.1% rank 3/46). Reasoning 68, Multimodal 82, Cost 45 stand; Overall 74 stands (73.6→73.8).
- **AA Intelligence Index rebase:** the launch-era 34.6 (v4.1) is now **16.1 measured** on v4.3.2 (#64/111; 14.5 on AA's direct 2026-09-09 page) — the ~18-point drop is the index rebase, not a model regression.
- **Key fills:** agentic — MCPAtlas 8.8%, AA Agentic Index 3.5–7.2%, Remote Labor Index 0.8%, TheAgentCompany 30.3%, Terminal-Bench 2.0 (Vals) 30.3%, Terminal-Bench 32.6%, GDPval 23.3%, BrowseComp 7.8% / BrowseComp-Plus 19.9%, DeepSearchQA 24.6%, BFCL v4 52.3%, DeepResearch Bench 42.8%, BALROG 43.3%, METR Time Horizons 55.4%; reasoning — AIME 2026 95.5% (est), FrontierMath v2 14.1%/4.2%, SimpleBench 62.4%, Kagi 70.3%, ForecastBench 61.3%, HLE cluster 17.8–22.5%, GPQA cluster 74.9–86.4%, AA-Omniscience −16.4 (accuracy 39.0%, hallucination 90.9%); coding — LiveCodeBench 79.2/79.8/80.1%, Aider Polyglot 83.1% (rank 3/46), SWE-bench independent 53.6–57.6% (vs Google's 59.6–67.2% custom scaffold), GSO-Bench 3.9%, Vibe Code Bench 0.40%, AA Coding Index 33.3%; multimodal — MMMU-Pro 68.0/74.9/81.3% conflict cluster, VISTA 54.6% (rank 1/57), OCRBench v2 59.3%, ScreenSpot 44.7%, AudioMC 46.9%; context — LongCodeBench 1M 74%, Fiction.LiveBench 90.6% (rank 4/35).
- **Conflicts kept:** LiveCodeBench vendor 74.2% vs 79.2–80.1% independent (harness/window differences); SWE-bench Google 59.6–67.2% (custom scaffold, self-scored) vs 53.6–57.6% independent runs; MMMU-Pro 68.0% official vs 81.3% Vals; HLE 17.8–22.5% cluster.
- **Rankings:** Rank.ai consensus #48/122 (55/100); AA #64/111 (16.1); LMArena #33/112 (1446); BenchLeader composite 54.0 ±3.2 (#242/760); Known Good Index 65 (#38/65); LMSpeed 43.0 (#118/125); undominated LMArena Elo 1457.8 ±2.44 (124,834 votes).
- **Still open:** a direct τ³-bench / Terminal-Bench 2.1 measured row; a vendor MRCR v2 1M re-run; the GDPval-AA 0.0% measured rows (benchgap/BenchLM) look like a harness/version artifact — flagged, not adopted.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08 (updated 2026-10-12)
- Method: public internet research (Google DeepMind model card + technical report, Google Cloud pricing, AI for Developers docs, Dataconomy/AA rows, BenchGecko); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
