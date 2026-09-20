# Gemini 3.7 Flash — findings by Big Pickle

- Source: Google (`gemini-3.7-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-speed Flash iteration (Aug 2026) that jumped 16 points on DeepSWE in three weeks over 3.6 Flash; ranked #1 of 186 models on output speed and #1 on an aggregated LLM ranking by GPQA Diamond (94.8%).
- **Provider / access:** Google Gemini API (`gemini-3.7-flash`), Gemini Developer API and Vertex AI.
- **Release / knowledge:** 2026-08-13 (felloai.com, byteiota.com); 23 days after Gemini 3.6 Flash.
- **IDs:** `gemini-3.7-flash` (Google; proprietary, `open_weights = false`).
- **Context window:** 1,048,576 (1M) total / 64K max output (byteiota.com; pricing-portal context field blank but 3.6-lineage carries the 1M spec).
- **Modalities:** text, image, audio, video input; text output; native reasoning; function calling, code execution, search grounding, computer use (preview).
- **Pricing (as of 2026-09-20):** $0.75 in / $3.75 out per 1M — **introductory; doubles to $1.50 / $7.50 on 2027-01-01** (WION, llm-stats, Google-announced). AA blended ≈ $0.58/M.
- **Architecture:** Proprietary, undisclosed; post-training iteration on the 3.6 base (per analysis of benchmark cadence).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (benchlm.ai compare, 2026-09; Vals harness 77.5%)
- OSWorld 2.0: **47.9%** (benchlm.ai compare)
- AutomationBench: **30.4%** (up from 3.6's 17.0; WION/felloai)
- Agentic public-lane index: **60.7 (#23/151)** (benchlm.ai)
- Tool-use index: 28.4 (#17) on llm-stats conservative index; GDPval-AA, Claw-Eval, Tau3-Banking: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.8%** (lmmarketcap/LLM leaderboard, 2026-09-02; pricepertoken lists 94.5, 99th percentile)
- AIME 2025: **97.2%** (LLM leaderboard)
- HLE-Verified: **53.6%** (benchlm.ai compare)
- LABBench2: **82.1%**; BioMysteryBench (human-difficult / human-solvable): **43.5% / 87.1%** (benchlm.ai)
- SimpleQA: **71.2%** (LLM leaderboard)
- Artificial Analysis Intelligence Index: **56** (ahead of Claude Sonnet 5 at 55; felloai/WION); pricepertoken Intelligence **45.2 (97th pct)**
- MMLU-Pro / CritPt / LCR: **no verified public score found**

Coding:

- SWE-bench Verified: **80.8%** (LLM leaderboard, 2026-09-02)
- DeepSWE v1.1: **65.3%** (Android gap over 3.6's 49.0; felloai, WION, byteiota)
- FrontierCode 1.1 Main: **43.6%** (up from 34.4; beats GPT-5.6 Terra 41.3 and Claude Sonnet 5 42.7)
- LiveCodeBench (Vals): **88.7%** (benchlm.ai compare)
- PricePerToken Coding index: **76.1 (94th pct)**
- SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- MRCR v2 (64K–128K): **97%** (benchlm.ai compare)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 85.8% and AutomationBench jump (17→30.4%) show a real agentic push; OSWorld 47.9% and the still-modest AutomationBench absolute cap the score.
- **Reasoning: 90/100.** GPQA Diamond 94.8% (#1 on an aggregated board) and AIME 97.2% are frontier-class; HLE-Verified 53.6% leaves headroom.
- **Context window: 86/100.** 1M window with 97% MRCR at 64K–128K — top-tier, though shorter-length retrieval numbers are strongest.
- **Multimodal: 84/100.** Full text/image/audio/video input with strong grounded evals (CharXiv 84.5%, LVBench 85.4%); not a dedicated audio-transcription specialist, capping it slightly.
- **Coding: 86/100.** SWE-bench Verified 80.8%, LiveCodeBench 88.7%, and the deep DeepSWE improvement make it a genuinely strong mid-tier coder; FrontierCode Main 43.6% caps it below the leaders.
- **Cost efficiency: 78/100.** Great at the introductory $0.75/$3.75 — but the announced Jan 1, 2027 doubling to $1.50/$7.50 makes near-term adoption time-critical.
- **Overall Score: 86/100.** Mean of the five quality dims (86+90+86+84+86)/5 = 86.4 → 86. The fastest, cheapest frontier-adjacent agentic workhorse this quarter — ideal for high-volume tool-calling and automated business workflows, ideally before the price hike.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (lmmarketcap AI leaderboard, benchlm.ai, felloai.com, byteiota.com, WION, llm-stats, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.