# Grok 4.1 Fast — findings by Ling 3.1 Flash

- Source: xAI / Grok 4.1 Fast
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's agentic tool-calling model (released 2025-11-19 with the Agent Tools API), positioned for customer support, finance and deep research. Two modes in one model: a low-latency non-reasoning mode (`grok-4-1-fast-non-reasoning`) and a reasoning mode (`grok-4-1-fast-reasoning`) at the same price. xAI deprecated Grok 4.1 Fast (with Grok 4 and Grok 3) on 2026-05-15, consolidating around Grok 4.3 — it remains served by resellers.
- **Provider / access:** xAI API (`grok-4-1-fast`, `grok-4-1-fast-reasoning`, `grok-4-1-fast-non-reasoning`); OpenRouter `x-ai/grok-4.1-fast`; Azure, Vertex, Abacus, Perplexity Agent, ZenMux, Ofox, FrogBot.
- **Release / knowledge:** 2025-11-19; knowledge cutoff not published.
- **IDs:** `x-ai/grok-4.1-fast`
- **Context window:** 2,000,000 tokens (xAI/OpenRouter; some providers cap at 1M or 256K–128K); no output token limit on the 1M-serving routes.
- **Modalities:** text + image in; text out; reasoning toggleable via API parameter; tool calls (Agent Tools API: real-time X data, web search, remote code execution).
- **Pricing (as of 2026-10-08):** $0.20 / 1M input, $0.50 / 1M output, cached input $0.05 / 1M; Agent Tools API billed separately at ≤$5 per 1,000 successful tool calls. (Free through 2025-12-03 at launch.)
- **Architecture:** proprietary; RL-trained in simulated environments across dozens of tool domains.

### Raw benchmarks found

xAI launch figures (2025-11-19) unless noted; AA rows below are the NON-REASONING variant (Dataconomy/modelscale) — reasoning-mode equivalents not published.

Agent / tool use:

- τ²-bench Telecom: **100%** score (xAI; total cost $105 across the run)
- Berkeley Function Calling Leaderboard v4: **72%** overall accuracy
- Reka Research-Eval: **63.9%** ($0.046/query; vs GPT-5 45.5%, Claude Sonnet 4.5 41.2%, Gemini 3 Pro 55.9%)
- FRAMES: **87.6%** ($0.048/query; vs GPT-5 86.0%, Sonnet 4.5 85.0%, Gemini 3 Pro 90.9%)
- X Browse: **56.3%** ($0.091/query; vs GPT-5 24.2%, Sonnet 4.5 14.6%, Gemini 3 Pro 26.5%)
- Tau2 (AA, non-reasoning): **63.7%**
- Second-pass agentic rows (2026-10-12): τ²-Bench Telecom (thinking, LLMLearner): **94.7%** (rank 20/37 — independent thinking-mode read below the vendor's 100% on a $105 run); τ²-Bench general (thinking): **82.7%** (rank 10/40); TAU-Bench (LLM Registry, 2025-11-18): **79.5**; τ³-Banking (thinking high): **13.1%** (rank 71/107 — a severe cap); Terminal-Bench Hard (thinking): **24.2%** (rank 78/150); Terminal-Bench 1.0 (thinking): **23.0%** (rank 22/26); Terminal-Bench 2.0 (LLM Registry): **16.9**; Vibe Code Bench v1.1 (thinking): **1.2%** (rank 60/63 — a severe cap); MCP Atlas (LLM Registry, old 20-turn protocol, 2025-11-18): **3.4** / 3.7 — the model is absent from Scale's April-2026 re-scored MCP-Atlas board (current leaders: Muse Spark 82.2%, Opus 4.7 79.1%), so these rows are dated and kept as conflicts; BFCL v4 (fru.dev, "Grok-4-1-fast-reasoning (FC)"): **69.6%** (rank 5/81) vs the vendor's 72%; Gert Labs: **47.32%** (BenchLM); SAGE (thinking): **31.3%**; Public Benefits Bench (thinking): **44.8%** (rank 26/26); MedCode (with tools): **28.4%** (rank 55/55); MedScribe (thinking, with tools): **78.7%** (rank 39/57); Search Arena (LMArena): 1171 (rank 21/33).

Reasoning / knowledge:

- AA Intelligence Index (non-reasoning): **23.6** (Dataconomy) / **11.3** (modelscale)
- GPQA Diamond (AA, non-reasoning): **63.7%**
- Humanity's Last Exam (AA, non-reasoning): **5.1%**
- AIME 2025 (non-reasoning): **34.3%**; IFBench: **36.5%**; MMLU-Pro: **74.3%**
- Second-pass reasoning rows (2026-10-12, REASONING/thinking mode — the mode the first pass lacked): AA-GPQA Diamond: **85.3%** (measured; LLMLearner thinking 85.0%, rank 65/186; AnotherWrapper 84.3%) vs 63.7% non-reasoning; AIME 2025 (thinking, no tools): **89.0–89.3%** (LLMLearner 89.0 rank 36/85; AA avg@10 89.3; TechBriefly/Sophon 89.3) vs 34.3% non-reasoning; AIME 2024 (avg@8): **93.3%**; AIME 2024–2025: **91.9%**; AIME 2026: **94.2%** (Benchmark Atlas); HLE (thinking): **17.6%** (LLMLearner, rank 97/135) / **19.3%** (AA measured) vs 5.1% non-reasoning; MMLU-Pro (thinking): **85.0%** (LLMLearner, rank 25/147; fru.dev 84.2% rank 38) vs 74.3% non-reasoning; IFBench (thinking): **52.7%** (TechBriefly) vs 36.5% non-reasoning; IMO-ProofBench Advanced (thinking): **18.6%** (rank 12/23); SimpleBench (normal): **56.0%** (rank 44/92); CritPt (thinking): **2.9%** (rank 72/125) vs 0.0% non-reasoning; LiveBench Reasoning: **59.99/100** (LLM Registry, verified 2026-02-20); AA Intelligence Index (reasoning): **20.4** (measured; AA comparison pages: 20 est) vs 11 non-reasoning (and the older LLM Registry read of 23.5); AA-Omniscience: **−29.9** (accuracy 25.1%, hallucination rate 73.4% — a high-hallucination profile; non-reasoning: −51).

Coding:

- SWE-bench Verified: **60.0–60.4%** (LLM Registry, verified 2025-11-18; SerenitiesAI: 60.0%, 24th of 67)
- LiveCodeBench (non-reasoning): **39.9%**; AA Coding Index: **19.5**; TerminalBench Hard: **14.4%**
- Second-pass coding rows (2026-10-12): LiveCodeBench (thinking, no tools): **82.0%** (LLMLearner, rank 33/114; AnotherWrapper 80.6%) vs 39.9% non-reasoning — the mode gap is the story; SWE-bench Verified — **60.4%** (LLM Registry, verified 2025-11-18) / **60.0%** (SerenitiesAI, rank 24/67) / **71.9%** (benchgap est ±4.4, HIGH confidence, rank 149) / **41.4%** (AnotherWrapper, reasoning) — a 30.5-point cluster, kept (mid ~60–65%); Terminal-Bench Hard (thinking): **24.2%**; Terminal-Bench 1.0 (thinking): **23.0%**; Terminal-Bench 2.0: **16.9**; Vibe Code Bench v1.1 (thinking): **1.2%** (severe cap); ALE-Bench: 1111; ARC-AGI-2: **6.7%** (Benchmark Atlas); Apex (MathArena): 5.2; APEX (Mercor): 7.7; Apex Shortlist: 57.9; APEX-v1-extended: 57.5.

Long context:

- 2M-window retrieval: **67%** (xAI launch); AA-LCR (non-reasoning): **31.3%**; CritPt: **0.0%**
- Second-pass long-context rows (2026-10-12): AA-LCR v1.1 (reasoning): **74.0%** (AA measured — modelscale/BenchLM/TechBriefly/AA comparison pages all agree; the older AA-LCR read is 68.0) vs 31.3% non-reasoning — the reasoning-mode retrieval read is mid-strong and more than doubles the non-reasoning figure.

Multimodal:

- Image input supported; no vision benchmark row found.
- Second-pass multimodal rows (2026-10-12): MMMU-Pro (thinking): **63.3%** (LLMLearner — the first vision benchmark row; vs Opus 4.5 74.0%, Sonnet 4.5 68.9%, Sonnet 4 62.4%, Gemini 3.0 Pro 80.2%); Vision Arena (LMArena): 1196 (rank 77/100, fru.dev).

### Normalized scores (1–100)

- **Tool use: 77/100.** τ²-bench Telecom 94.7–100% (independent thinking read 94.7%, rank 20/37, below the vendor's 100% on a $105 run), τ²-Bench general 82.7% (rank 10/40), BFCL v4 69.6–72% (rank 5/81), TAU-Bench 79.5, Reka Research-Eval 63.9% (2× GPT-5), FRAMES 87.6% and X Browse 56.3% (2× GPT-5) make this xAI's best tool-calling model; the caps are τ³-Banking 13.1% (rank 71/107), Terminal-Bench Hard 24.2%, Vibe Code Bench v1.1 1.2%, MCP Atlas 3.4 (old protocol — absent from the April-2026 re-scored board), SAGE 31.3% and MedCode 28.4%. Revised 82→77 on the τ³/TB-Hard/Vibe-Code caps and the τ²-Telecom 100%→94.7% vendor-to-independent correction.
- **Reasoning: 72/100.** The first pass scored only the non-reasoning variant; the reasoning-mode rows now published transform the picture: GPQA 85.0–85.3%, AIME 2025 89.0–89.3% (AIME 2026 94.2%, AIME 2024 93.3%), MMLU-Pro 84.2–85.0% and IFBench 52.7% (all thinking mode) are frontier-tier math/science, capped by HLE 17.6–19.3%, CritPt 2.9%, IMO-ProofBench 18.6%, the AA Intelligence Index rebase-era read (20.4) and AA-Omniscience −29.9 (73.4% hallucination). Revised 60→72 on the reasoning-mode fills (GPQA +21, AIME +55, MMLU-Pro +11 over the non-reasoning rows).
- **Context window: 80/100.** Headline 2M-token window (provider caps vary 128K–2M) with 67% 2M-window retrieval (vendor); the reasoning-mode AA-LCR v1.1 of 74.0% (measured, multiple sources) is mid-strong — more than double the 31.3% non-reasoning read, which stays as the low-mode conflict. Revised 75→80 on the AA-LCR 74.0% fill.
- **Multimodal: 62/100.** Text+image input; the first vision row, MMMU-Pro 63.3% (thinking), is mid-band for the era (vs Gemini 3.0 Pro 80.2%, Opus 4.5 74.0%), with Vision Arena 1196 (rank 77/100) as a second mid read. Revised 60→62 on the MMMU-Pro fill.
- **Coding: 66/100.** LiveCodeBench 82.0% (thinking, rank 33/114) is a strong new anchor and the SWE-bench Verified cluster (41.4–71.9%, mid ~60–65%, incl. a high-confidence 71.9% benchgap estimate) is respectable; Terminal-Bench Hard 24.2% (thinking), Vibe Code Bench v1.1 1.2% (thinking), AA Coding Index 19.5 (non-reasoning) and ARC-AGI-2 6.7% hold it down. Revised 62→66 on the LiveCodeBench/SWE-bench fills.
- **Cost efficiency: 90/100.** $0.20/$0.50 per 1M with $0.05 cached input — among the cheapest listed; Agent Tools API surcharges (≤$5/1K calls) apply on top.
- **Overall Score: 71.4/100.** Mean of the five quality dims (77+72+80+62+66)/5 = 71.4; best fit for high-volume tool-calling and customer-support agents, noting the model was deprecated by xAI on 2026-05-15 (Grok 4.3 is the successor; redirected calls now bill at Grok 4.3's $1.25/$2.50). Revised from 68 — the largest second-pass correction in the batch: the first pass scored the non-reasoning variant because reasoning-mode rows were missing; they now exist and lift every dimension.

---

## Update 2026-10-12 (deep second pass, 6 independent searches)

- **Score changes:** Tool 82→77 (τ³-Banking 13.1%, TB Hard 24.2%, Vibe Code 1.2%, MCP-Atlas 3.4-dated caps; τ²-Telecom 100%→94.7% vendor-to-independent correction), Reasoning 60→72 (reasoning-mode rows: GPQA 85.0–85.3%, AIME 89.0–94.2%, MMLU-Pro 84.2–85.0%), Context 75→80 (AA-LCR v1.1 74.0% reasoning, measured), Multimodal 60→62 (MMMU-Pro 63.3% thinking — first vision row), Coding 62→66 (LiveCodeBench 82.0% thinking; SWE-bench cluster 41.4–71.9%). Cost 90 stands; Overall 68→71.4.
- **Mode-split story (the core finding):** the first pass could only see the non-reasoning variant. Reasoning-mode rows now published: GPQA 63.7%→85.0–85.3%, AIME 2025 34.3%→89.0–89.3%, HLE 5.1%→17.6–19.3%, MMLU-Pro 74.3%→84.2–85.0%, IFBench 36.5%→52.7%, LiveCodeBench 39.9%→82.0%, AA-LCR 31.3%→74.0%, AA Intelligence Index 11→20.4, AA-Omniscience −51→−29.9. Scores describe `grok-4-1-fast-reasoning` unless noted.
- **Key fills:** agentic — τ²-Telecom 94.7% thinking (rank 20/37), τ²-Bench general 82.7% (rank 10/40), TAU-Bench 79.5, BFCL v4 69.6% (rank 5/81), τ³-Banking 13.1% (rank 71/107), TB Hard 24.2% thinking, TB 2.0 16.9, Vibe Code 1.2% thinking, Gert Labs 47.32%, SAGE 31.3%, MedScribe 78.7%; reasoning — AIME 2026 94.2%, AIME 2024 93.3%, IMO-ProofBench 18.6%, SimpleBench 56.0%, CritPt 2.9%, LiveBench Reasoning 59.99, AA Index 20.4, AA-Omniscience −29.9 (73.4% hallucination); context — AA-LCR v1.1 74.0% (reasoning, measured), AA-LCR 68.0 (older version); multimodal — MMMU-Pro 63.3% thinking, Vision Arena 1196 (#77/100); coding — LiveCodeBench 82.0% thinking, SWE-bench Verified 60.0/60.4/71.9-high-conf-est/41.4, ALE-Bench 1111, ARC-AGI-2 6.7%, APEX rows (Mercor 7.7, Shortlist 57.9, v1-extended 57.5).
- **Conflicts kept:** SWE-bench Verified 41.4% / 60.0% / 60.4% / 71.9% (high-conf est) — a 30.5-point cluster; τ²-Telecom 100% (vendor, $105 run) vs 94.7% (independent thinking); MCP Atlas 3.4/3.7 (old 20-turn protocol) vs absence from the April-2026 re-scored board; AA Intelligence Index 11 (non-reasoning) vs 20.4 (reasoning) vs 23.5 (older LLM Registry read).
- **Rankings (Oct 2026):** LMArena Text 1430 Elo (#112; Chinese 1462 #87, Japanese 1369 #117); Search Arena 1171 (#21/33); Vision Arena 1196 (#77/100); fru.dev #33 overall (podium 4.0); BenchLM 46.31/100 (#115/889); modelscale 46.33 (rank 113); PublicAI: strongest Tool use #5/81, weakest Safety #322/336; HumanJudge 92.4% pass rate (#8/11, 1,789 blind reviews); designforonline #121/743 (context #1/756).
- **Status note:** retired from the xAI API on 2026-05-15 (theexpertranking) — redirected calls now bill at Grok 4.3 prices ($1.25/$2.50); xAI's own framing: "great for executing agentic tasks that were meticulously planned by larger models" — an executor, not a sole reasoning engine.
- **Still open:** a current-protocol MCP-Atlas run; a Terminal-Bench 2.1 row; a vision-suite tiebreaker beyond MMMU-Pro; the SWE-bench Verified tiebreaker (four reads, 30.5-point spread).

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08 (updated 2026-10-12)
- Method: public internet research (xAI launch post, docs.x.ai, OpenRouter, Artificial Analysis rows via Dataconomy/modelscale, LLM Registry, SerenitiesAI, O-mega); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
