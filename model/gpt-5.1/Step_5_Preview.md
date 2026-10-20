# GPT-5.1 — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.1`, released 2025-11-13)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 (2025-11-12/13; the usability-focused refresh of GPT-5)
- **Short description:** OpenAI's response to GPT-5's criticisms — a warmer, more conversational model with **adaptive reasoning** spread across two coordinated SKUs (Instant for speed, Thinking for depth) and an automatic router between them, so the effort spent thinking tracks task difficulty (~2× faster than GPT-5 on the easiest tasks, ~2× slower on the hardest). OpenAI deliberately shipped it without benchmark tables, and held the flagship spot for just under a month before GPT-5.2 (2025-12-11) — the fastest flagship turnaround in its history. Capability still moved (GPQA Diamond 88.1%, SWE-bench Verified 76.3% at launch), and the API landed at the same $1.25/$10.00 price. Legacy tier in 2026 (retires 2027-04-01), but it remains the reference for "adaptive effort" as an API primitive.
- **Provider / access:** OpenAI API (`gpt-5.1`, `gpt-5.1-chat-latest` for Instant), Azure, OpenRouter; ChatGPT all tiers.
- **Release:** 2025-11-13; knowledge cutoff 2024-09-30; retires 2027-04-01.
- **Context window:** 400K tokens; max output 128K.
- **Modalities:** Text and image in → text out; reasoning effort none/low/medium/high (none default per API docs).
- **Pricing (as of 2026-10-09):** $1.25/M input, $10.00/M output, $0.125–0.13 cache read; Flex/batch $0.625/$5.00; Fast $2.50/$20.00.
- **Speed:** 48–55 tps interactive; 114 tps on Flex.

### Raw benchmarks found

- BenchLM composite (2026-10-19): **57.22/100** overall, #62 of 956 models, 18 of 644 benchmarks covered (partial coverage — conservative; note BenchLM lists a 200K context vs OpenAI docs/AA's 400K — conflict flagged, official 400K retained)
- Artificial Analysis today (2026-10-19): Intelligence Index **25** (estimated, #126/217 — matches the prior 24.7; deprecated page, 10k workload only), 118.7 tok/s (#54/186), TTFT 32.14s, $1.25/$10.00 with 90% cache discount (blended $1.34/M), 400k context, text+image, 2 providers, cutoff Sep 2024 — DEPRECATED on AA (suggests GPT-5.2)

Launch (release trackers):

- GPQA Diamond: **88.1%**; SWE-bench Verified: **76.3%**

Artificial Analysis (high effort; non-reasoning in parentheses):

- Intelligence Index: **24.7** (13.3); Coding Index **49.4**; Math Index **94.0** (38.0)
- GPQA Diamond: **87.3%** (64.3); HLE: **28.5%** (5.3); AIME 2025: **94.0%** (38.0)
- IFBench: **72.9%** (43.2); τ²-Bench Telecom: **81.9%** (46.5); τ-Bench Banking: 15.9%
- AA-LCR: **80.0%** (45.0); GDPval-AA: 16.5% (Elo 930); CritPt: 4.9%; LiveCodeBench: **86.8%** (49.4)
- Terminal-Bench Hard: **45.5%** (22.7); TB 2.1: **52.4%**; MMLU-Pro: **87.0%** (80.1); AA-Omniscience 37.7% accuracy / 48.1% non-hallucination

Epoch AI (via modelbenchmark.io):

- GPQA Diamond: **87.6 ±1.9** (high); OTIS Mock AIME: **88.6 ±4.0** (high) / 85.6 (medium) / 63.9 (low)
- SWE-bench Verified: **66.9 ±2.1** (high) / 66.0 (mini-SWE-agent, medium)
- SimpleQA Verified: **48.0**; FrontierMath v1: 31.0 (high); FrontierMath T4: 12.5; Chess Puzzles 32.0; Mystery Game Puzzles 19.0
- Derived composite: 74th percentile of 342 (coding 62nd, reasoning 74th, math 72nd); effort range 8.3 composite points

Leaderboards (models.fru.dev):

- MCP Atlas: **50.1%** (#32 of 34); ARC-AGI-1: **72.8%** (#11); ARC-AGI-2: 17.6% (#47); MultiChallenge: 63.4% (#7); HLE: 23.7% (#16); MMLU-Pro: 86.4%; Text Arena 1,456 Elo; WebDev Arena 1,395
- Vals AI: SWE-bench 69.8%; TB 2.0 44.9%; Vibe Code Bench **24.6%**; IOI 21.5%; MMMU-Pro 83.2%; MedQA 96.4%; TaxEval 74.9%; Vals Index 53.6%
- benchmarklist.com (independent, 153 results, 2026-10-07): ARC-AGI-1 72.8% (#48/97), ARC-AGI-2 17.6% (#49/99), MCP Atlas **50.1% (#46/48 — a weak spot)**, GDPval-AA **Elo 994 (#115/352)**, Terminal-Bench Hard 45.5% (#18/326), TB 2.1 52.4% (#74/194), TB 2.0 44.9% (#28/68), Tau2-Bench Telecom 81.9% (#83/332), Tau3-Banking 15.9% (#67/176), LiveCodeBench 86.5% (#15/123), ALE-Bench 1192 (#11/83), IOI 21.5% (#23/58)
- BenchLM rows (2026-10-19): Gert Labs **41.24%**, AA-MMMU-Pro **75.5%** (below the Vals MMMU-Pro 83.2% — harness spread noted), Design Arena Website **1188** (OpenRouter), AA-Omniscience hallucination-rate metric **51.9%** (accuracy 37.7% reconfirmed), GDPval-AA **16.3% normalized / Elo 930** (reconfirms the prior 16.5%/930 read), Vibe Code Bench **24.61%** and AA Coding Index **49.4%** reconfirmed

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-Telecom 81.9% and IFBench 72.9% are solid, but MCP Atlas 50.1%, GDPval-AA Elo 930 (16.5% normalized) and TB 2.1 52.4% show the agentic side of GPT-5.1 was not its strength — mid-upper band.
- **Reasoning: 82/100.** GPQA Diamond 87.3–88.1%, AIME 2025 94.0%, Math Index 94.0 and ARC-AGI-1 72.8% are upper-mid-band; HLE 28.5%, CritPt 4.9% and the AA Intelligence Index of 24.7 place it a step below the frontier trio.
- **Context window: 80/100.** 400K is the 200K–500K band (65–84) with AA-LCR at 80.0% — genuinely good long-context reasoning, a quarter of the 1M norm.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU-Pro 83.2% and Vision Arena 1,251 Elo; no video/audio input, no non-text output.
- **Coding: 72/100.** SWE-bench Verified 66.9–76.3% (sources/settings disagree) and LiveCodeBench 86.5–86.8% are strong classic coding; Coding Index 49.4%, TB 2.1 52.4% and Vibe Code Bench 24.6% show agentic coding was explicitly not where 5.1 invested (that was 5.1-Codex-Max's job a week later).
- **Cost efficiency: 85/100.** $1.25/$10.00 with $0.125 cache and half-price Flex/batch — the methodology's ~$1.25/$4.25 ≈ 88 range, unchanged from GPT-5 while capability improved modestly.
- **Overall Score: 74/100.** Best-fit recommendation: the conversational frontier of late 2025 — GPQA 88% and AIME 94% with adaptive effort at the GPT-5 price; a one-month flagship superseded by GPT-5.2 and not the pick for agentic coding (use the Codex line or GPT-5.6).

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (deprecated page, suggests GPT-5.2: Index 25 estimated #126/217, 118.7 tok/s, TTFT 32.14s, pricing unchanged) and BenchLM (composite 57.22/100, #62/956, 18/644 benchmarks; Gert Labs 41.24%, AA-MMMU-Pro 75.5% vs Vals 83.2% — harness spread, Design Arena 1188, Omniscience hallucination 51.9%; lists a 200K context vs the official 400K — conflict flagged, official retained). All consistent with the existing Tool use 68 / Reasoning 82 / Context 80 / Multimodal 70 / Coding 72 reads — no score change; GPT-5.1 remains a legacy Nov-2025 model (retires 2027-04-01) not built for agentic coding. Second-pass verification (2026-10-10) cross-referenced benchmarklist.com (153 primary-source results, updated 2026-10-07 — ARC-AGI-2 17.6% #49/99, MCP Atlas 50.1% #46/48, GDPval-AA Elo 994 #115/352, TB Hard 45.5% #18/326, TB 2.1 52.4% #74/194, LCB 86.5% #15/123) — same conclusion. Prior pass (2026-10-09) used OpenAI GPT-5.1 announcement + API docs, Artificial Analysis and Vals AI via OpenRouter, modelbenchmark.io Epoch-AI table, models.fru.dev leaderboard aggregation.
- Future sources: add a new file next to this one, e.g. `GPT_5_2.md`, using the same headings.
