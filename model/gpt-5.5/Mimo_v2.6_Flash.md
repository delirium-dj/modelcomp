# GPT-5.5 — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5.5`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (codename "Spud")
- **Short description:** First fully retrained OpenAI base since GPT-4.5 (released 2026-04-23 alongside GPT-5.5 Pro): agentic coding + computer use focus — launch SOTA Terminal-Bench 2.0 82.7%, OSWorld-Verified 78.7%, GDPval win-rate 84.9%, ARC-AGI-2 84.6%, FrontierMath T1–3 51.7%; ~40% fewer output tokens than GPT-5.4 on Codex tasks; 60% fewer hallucinations. Headlined lineup ~2 months until GPT-5.6 family (Sol/Terra/Luna).
- **Provider / access:** OpenAI API `gpt-5.5`; ChatGPT Plus/Pro/Business/Enterprise; Codex default (400K effective in Codex). GPT-5.5 Pro ($30/$180) limited to Pro/Business/Enterprise. GPT-5.5 Instant is a separate `chat-latest` model — not this report. Paid — not free.
- **Release / knowledge:** 2026-04-23 (API 2026-04-24); knowledge cutoff **December 2025**.
- **IDs:** `gpt-5.5`; Pro: `gpt-5.5-pro` (implied).
- **Context window:** **1,050,000** input; 128,000 max output. Codex UI effective 400K.
- **Modalities:** text + image in; text out; reasoning effort none/low/medium/high/xhigh; tool calls yes; JSON mode yes; prompt caching (read $0.50 = 90% off); Batch/Flex 50% off; Priority 2.5×.
- **Pricing (as of 2026-09-22):** **$5.00 in / $30.00 out per 1M** standard (<272K input); cache read $0.50; batch/flex $2.50/$15; priority $12.50/$75. **Long-context cliff: >272K input → 2× input / 1.5× output on the entire session.** Pro: $30/$180. AWS Bedrock $5.50/$33. Paid API.
- **Architecture:** proprietary dense/hybrid (params undisclosed); "High" cybersecurity risk classification (one tier below max restriction).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found. Primary = OpenAI launch/system card via trackers; some rows Vals.ai/LLM Reference harnesses.

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI; launch SOTA vs GPT-5.4 75.1, Opus 4.7 69.4)
- Terminal-Bench 2.1: **78.2%** (OpenAI/LLM Reference; vs Opus 4.8 74.6, 3.5 Flash 76.2)
- OSWorld-Verified: **78.7%** (OpenAI)
- GDPval (win/tie rate): **84.9%** (OpenAI launch); GDPval-AA: **1769 Elo**; GDPval-AA v2: **1494** (LLM Reference — v1 vs v2 scale difference)
- MCP Atlas: **75.3%** (OpenAI; vs Opus 4.7 79.1)
- Toolathlon: **55.6%** (OpenAI)
- BrowseComp: **84.4%** (OpenAI)
- τ²-Bench Telecom: **98.0%** (OpenAI)
- Finance Agent / FinanceAgent: **51.8% v2 / 60.0%** (sources differ by version — cite both)
- CyberGym: **81.8%**; Expert-SWE (internal): **73.1%**
- AutomationBench / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI)
- ARC-AGI-2: **84.6%** (OpenAI; launch-leading abstract reasoning)
- FrontierMath Tier 1–3: **51.7%**; Tier 4: **35.4%** (OpenAI; research-math leader at release)
- Humanity's Last Exam: **41.4% no tools / 52.2% with tools** (OpenAI; trails Opus 4.7 46.9 no-tools)
- MMLU Pro: **88.1**; MMMLU-related rows via LLM Reference
- Artificial Analysis Intelligence Index: no stable single row isolated for 5.5 in this pass (Sol-era AA tables cover 5.6)

Coding:

- SWE-bench Verified: **82.6%** (Vals.ai independent; vs Opus 4.7 82.0)
- SWE-bench Pro: **58.6%** (OpenAI; **trails Opus 4.7 64.3** — launch's acknowledged weakness)
- SWE-bench Multilingual: **77.8%**; DeepSWE 1.0: **64.3%** (note: 1.0 not v1.1); HumanEval: **94.2**
- Terminal-Bench 2.0/2.1: **82.7% / 78.2%** (see agent rows)
- LiveCodeBench: no verified public score found

Long context:

- MRCR v2 8-needle 128K average: **94.8%** (OpenAI; class-leading at 128K)
- MRCR v2 512K–1M: **74.0%** (OpenAI; vs GPT-5.4 36.6)
- GraphWalks BFS 1M: **45.4%** (OpenAI; vs GPT-5.4 9.4 — mid absolute)
- Internal claim: needle retrieval >95% across full 1M (OpenAI — vendor claim)

Multimodal:

- CharXiv Reasoning: **84.1%**; MMMU-Pro: **81.2%** (Vals/LLM Reference); Blueprint-Bench 2: **36.2%**
- Chatbot Arena (High): **1488**
- Video/audio: not supported (text+image only)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 78.2, OSWorld 78.7, GDPval-AA 1769 / win 84.9%, BrowseComp 84.4, τ²-Telecom 98, MCP 75.3; capped by MCP behind Opus class and missing Tau3/Claw.
- **Reasoning: 93/100.** GPQA 93.6, ARC-AGI-2 84.6 (launch-leading), FrontierMath T1–3 51.7 / T4 35.4 (research-math SOTA at release), HLE 41.4/52.2 solid; capped by HLE no-tools behind Opus 4.7.
- **Context window: 89/100.** 1.05M window; MRCR **94.8% @128K** excellent but **74% @512K–1M** and GraphWalks only **45.4% @1M** — strong mid-window, mid full-window → 89 (not 95).
- **Multimodal: 70/100.** Text + image in; CharXiv 84.1, MMMU-Pro 81.2 solid vision; no video/audio, no non-text out → 65–70 band → 70.
- **Coding: 87/100.** TB2.0 82.7 SOTA-at-launch, SWE-V 82.6, Expert-SWE 73.1 (20-hr tasks); capped by **SWE-Pro 58.6 losing to Opus 4.7 64.3** and DeepSWE only at v1.0 64.3.
- **Cost efficiency: 42/100.** $5/$30 list (≈42 band) + **>272K doubles input / ×1.5 output on whole session** — harsh for true 1M use; batch 50% and cache 90% help short-context loops only.
- **Overall Score: 85/100.** Mean of five quality dims (88+93+89+70+87)/5 = 85.4 → 85. Best-fit: terminal/computer-use agentic coding and research-math where TB2.0/ARC-AGI/FrontierMath matter; avoid >272K prompts unless budgeted; SWE-Pro-shaped issue-fixing still favors Opus 4.7/4.8.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (OpenAI launch coverage, LLM Reference datapack, AI Release Tracker, benchr review, MetricNexus, AI.cc, tech-insider); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
