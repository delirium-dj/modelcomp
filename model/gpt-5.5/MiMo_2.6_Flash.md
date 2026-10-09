# GPT-5.5 — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (internal codename "Spud")
- **Short description:** The first fully retrained base since GPT-4.5 (released 2026-04-23, one week after Opus 4.7's frontier claim — and retaking the AA Intelligence Index lead by ~3 points on launch day). Headline: SOTA Terminal-Bench 2.0 (82.7%, owner leaderboard 82.0 ±2.2), ~40% fewer output tokens than GPT-5.4 on Codex tasks, 1.05M context with much stronger 1M reasoning (GraphWalks 45.4 vs 5.4's 9.4). Headlined OpenAI's lineup until the GPT-5.6 trio (Sol/Terra/Luna) arrived 2026-06-26; API access was delayed ~a day past ChatGPT for safeguard re-verification after a UK AISI-found universal jailbreak. Carries a "High" cybersecurity risk classification (one tier below the most restrictive).
- **Provider / access:** OpenAI API (Responses + Chat Completions), ChatGPT Plus/Pro/Business/Enterprise, Codex (400K context there), GitHub Copilot; Bedrock ($5.50/$33) and third-party gateways (OpenRouter, Vercel). Fast mode: 1.5× speed for 2.5× cost.
- **Release / knowledge:** released 2026-04-23 (API 2026-04-24); knowledge cutoff **December 2025**.
- **IDs:** `openai/gpt-5.5` (gateway routes) / `gpt-5.5` (native).
- **Context window:** 1,050,000 / 1.05M tokens (1M class); max output 128,000; **prompts >272K input billed at 2× input / 1.5× output for the whole session** (standard, batch, flex); 400K inside Codex.
- **Modalities:** text, image, audio, video in (native omnimodality); text out; reasoning yes (efforts none/low/medium/high/xhigh); tool calls yes.
- **Pricing (as of 2026-10-07):** **$5.00 in / $30.00 out** per 1M, cached input **$0.50**; Batch/Flex $2.50/$15, Priority 2.5× ($12.50/$75). Paid. Note: list price doubled vs GPT-5.4, but ~40% fewer output tokens put real per-task cost near ~1.2× (OpenAI/Codex framing).
- **Architecture:** proprietary, fully retrained base (parameters undisclosed).

### Raw benchmarks found

Agent / tool use (OpenAI-run unless noted):

- Terminal-Bench 2.0: **82.7** (SOTA at release; benchmark-owner leaderboard 82.0 ±2.2 — consistent, not identical). Terminal-Bench 2.1: **78.2** (#19 of 29 on aireleasetracker's board; below the 88% ref).
- GDPval: **84.9%** win/tie (highest at release) / GDPval-AA Elo **1769** (v1 — clears the 1750+ frontier ref) / GDPval-AA v2: **1494** (mid-pack: Luna 1584, Sonnet 5 1607).
- OSWorld-Verified: **78.7**. MCP-Atlas: **75.3**. BrowseComp: **84.4** (vs Gemini 3.1 Pro 85.9). Finance Agent v2: 51.8. Toolathlon: 55.6. AutomationBench: 37.2; Agents' Last Exam: 28.0 (rows from vendors' later comparison tables).

Reasoning / knowledge (OpenAI-run unless noted):

- GPQA Diamond: **93.6** — clears the 90%+ ref. HLE: **41.4** no tools / **52.2** with tools — both clear the 40%+ ref.
- AA Intelligence Index: **~60.2** launch-era (#1 by ~3 points, breaking Anthropic/Google's tie — clears the 60+ ref; per GPT-5.4 Pro comparison tables).
- FrontierMath: **51.7** T1–3 / **35.4** T4 (roughly double Gemini 3.1 Pro's T4 16.7 at release). ARC-AGI-2: **84.6/85.0** (top at release). SimpleBench/MMLU-Pro rows strong.
- AA-Omniscience (launch, independent): **86% hallucination rate vs Opus 4.7's 36%** — the flagged factuality weakness of the release.

Coding (OpenAI-run unless noted):

- SWE-bench Verified: **88.7** (vs Opus 4.7 87.6; Vals independent harness: 82.6). SWE-bench Pro: **58.6** — OpenAI disclosed possible training-set exposure for the public Pro set; trails Opus 4.7's 64.3.
- Expert-SWE (internal, ~20h median tasks): **73.1** (best on aireleasetracker's board). DeepSWE 1.0: 64.3. SWE-bench Multilingual: 77.8.
- Terminal-Bench rows as above; Vibe/AA Coding Index rows: no verified public score found for this tier.

Long context:

- MRCR v2 (8-needle): **94.8% at 128K** (best-in-class at release). GraphWalks BFS: **45.4 at 1M** (vs Opus 4.8's 68.1 — usable but mid-pack at true 1M depth). 1.05M window with the >272K price premium.

### Normalized scores (1–100)

- **Tool use: 89/100.** GDPval-AA 1769 clears the frontier ref with the best release-day win/tie rate (84.9%), TB2.0 82.7 was SOTA (TB2.1 78.2 under the 88 ref), OSWorld/MCP/BrowseComp all strong; AutomationBench/ALE mid hold it at 89.
- **Reasoning: 90/100.** All three refs cleared — GPQA 93.6 (90+), HLE 41.4/52.2 (40+), AA Index ~60.2 (60+) — plus class-leading FrontierMath and ARC-AGI-2; the 86% launch-era Omniscience hallucination rate and contamination disclosure on SWE-Pro keep it under 92.
- **Context window: 95/100.** 1.05M ≥1M tier floor; MRCR 94.8 at 128K is excellent but GraphWalks 45.4 at 1M is mid and the >272K surcharge is a practical cap → floor.
- **Multimodal: 90/100.** Text + image + **audio + video** in (top band on input breadth), text out; MMMU-Pro 81.2 and CharXiv 84.1 solid but not board-leading; no non-text output.
- **Coding: 87/100.** SWE-Verified 88.7, TB2.0 SOTA, Expert-SWE 73.1 (best-in-class long-horizon) are frontier-grade; SWE-Pro 58.6 trails Opus 4.7 *with* a contamination flag, TB2.1 78.2 is under the 88 ref, and no SWE-Verified-independent row matches Anthropic's.
- **Cost efficiency: 44/100.** $5/$30 sits between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors, output-heavy at $30 (≈45 before adjustments); batch halves help, ~40% token efficiency helps per-task, but the 272K+ surcharge and double-GPT-5.4 list price hold it at 44.
- **Overall Score: 90/100.** (89+90+95+90+87)/5 = 90.2 → 90 — at release the most balanced frontier profile in this batch: every reasoning ref cleared, GDPval and terminal leads, native audio/video input; contamination disclosure, launch-era factuality, and a 1M-retrieval mid-pack row are the honest offsets.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (OpenAI launch post, Artificial Analysis, S5 Labs, AI Release Tracker, Implicator, MetricNexus, Appaca, LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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

