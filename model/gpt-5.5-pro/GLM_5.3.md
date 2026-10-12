# GPT-5.5 Pro — findings by GLM 5.3

- Source: OpenAI (`openai/gpt-5.5-pro`)
- Date: 2026-10-11 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's ultra-premium "even harder questions, higher-accuracy" tier of the GPT-5.5 family — its most expensive model ($30/$180 per MTok), positioned for business, legal, education, data-science and research work. Second-pass architecture fact: Pro is NOT a separate model — it is the GPT-5.5 base with **parallel test-time compute** (multiple independent reasoning threads spun up simultaneously, best results synthesized), like o1-pro relative to o1.
- **Provider / access:** OpenAI Responses + Chat Completions APIs (`https://api.openai.com/v1`); ChatGPT Pro/Business/Enterprise and Codex. On OpenCode Zen via `https://opencode.ai/zen/v1/responses` (`opencode/gpt-5.5-pro`). OpenRouter (`openai/gpt-5.5-pro`) supports reasoning_effort, verbosity, tools, response_format, seed.
- **Release / knowledge:** released 2026-04-23 (ChatGPT rollout; API available 2026-04-24 per the announcement's update note, with the system card updated the same day to describe the additional API safeguards). Knowledge cutoff not published.
- **IDs:** `gpt-5.5-pro`; Zen `opencode/gpt-5.5-pro`; OpenRouter `openai/gpt-5.5-pro`. No Free ID on Zen.
- **Context window:** 1M tokens (family API window, official announcement; BenchLM 1M; OpenRouter lists 1,050,000 input with **128,000 max output** — new second-pass spec; Codex serves the 5.5 family at 400K).
- **Modalities:** text and image input, text output; reasoning always available (xhigh research setting used in official evals); tool calls; computer use (OSWorld-class) in ChatGPT/Codex. Trusted Access for Cyber (`chatgpt.com/cyber`) relaxes cyber refusals for verified defenders.
- **Pricing (as of 2026-10-11):** $30 / $180 per MTok in/out (official, Zen, OpenRouter; BenchLeader blended $67.50/M; Zen cached read $30). No free tier. Batch/Flex at half rate; Priority at 2.5x. Output speed ~23 tok/s (OpenRouter 7-day median; AA has not measured this ID) — slowest quarter; chat reply ~$0.066, agentic coding session ~$2.52 (BenchLeader list-price estimates).
- **Architecture:** proprietary, size undisclosed; parallel test-time compute on the GPT-5.5 base; co-designed for and served on NVIDIA GB200/GB300 NVL72 systems; biological/chemical and cybersecurity capability rated High under OpenAI's Preparedness Framework (below Critical), AI self-improvement Below High (system card).

### Raw benchmarks found

> Pro-variant rows are marked (Pro). Unmarked Pro rows are absent from public tables; family evidence (GPT-5.5 base, official) is listed only as clearly-labeled family context.

Agent / tool use:

- BrowseComp: **90.1% (Pro)** (official evals table; best of all listed models incl. Gemini 3.1 Pro 85.9%, Opus 4.7 79.3%) — still the only Pro-specific agent row anywhere (second pass confirms no TB/Toolathlon/Tau2/MCP-Atlas rows for Pro)
- GDPval (wins or ties): **82.3% (Pro)** (official; base 5.5: 84.9% — Pro trails base on this table)
- Investment Banking Modeling Tasks (internal): **88.6% (Pro)** (official; base 88.5%, 5.4 Pro 83.6%)
- Terminal-Bench 2.0: no Pro-specific score published (family base 5.5: **82.7%**, SOTA at release; 5.4: 75.1%, Opus 4.7 69.4%, Gemini 3.1 Pro 68.5%)
- Toolathlon: no Pro row (family base: 55.6%); MCP Atlas: no Pro row (family base: 75.3%, Scale AI 2026-04 update; Opus 4.7 79.1%); Tau2-bench Telecom: no Pro row (family base: 98.0% original prompts)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE no tools: **43.1% (Pro)**; HLE with tools: **57.2% (Pro)** (official) — second-pass flag: GPT-5.4 Pro edges 5.5 Pro on the with-tools variant (58.7% vs 57.2%); Opus 4.7 54.7%
- SimpleBench: **76.9% #4** (high/not-stated effort, new this pass via BenchLeader/Epoch hub)
- FrontierMath: **52.4% (Pro) Tiers 1-3 / 39.6% (Pro) Tier 4** (official launch table; BenchLM's Epoch-v2 citations read 51.0/39.6) — **CONFLICT**: BenchLeader's FrontierMath-v2 rows from the Epoch AI Benchmarking Hub show **87.7% #8 (Tiers 1-3)** and **78.0% #15 (Tier 4)** at xhigh, drastically higher than the announcement numbers; either a later independent re-run or a source-join error — both sets retained and flagged, not averaged
- Epoch Capabilities Index: **162.1 #8** (new this pass; context: Opus 5.5 167.3 #1, Muse Spark 1.3 156.8 #19)
- ARC-AGI-1 (Verified): **96.5% #21** (high) / **95.0% #33** (xhigh); ARC-AGI-2 (Verified): **84.6% #29** / **84.2% #32** (ARC Prize official leaderboard via BenchLeader/BenchLM — the AGI-2 board is now saturated above it by Opus 5.5's 91-93%)
- CritPt: **30.6% — rank #13** (AA, xhigh; new this pass: BenchLeader's rank reveals it is a top-15 score of ~537 configurations, NOT the soft spot the 2026-10-01 report assumed — same lesson as Opus 5.5's 31.7% #2)
- LMCA: **53.9% #34**; DTBench: **96.0% #22** (Epoch hub, xhigh — new)
- GeneBench: **33.2% (Pro)** (official; base 5.5: 25.0%, 5.4 Pro 25.6%)
- GPQA Diamond: no Pro-specific score published (family base: 93.6%, official; second search this pass re-confirms no Pro row on AA/llm-stats/modelgrep boards)
- AA Intelligence Index: no Pro row (family base 5.5 (high) measured **59, #2/141 at launch**, per AA via agentbreaking; current AA leaderboard leaders are GPT-5.6 Sol 58.9 and Opus 5.5 57.6 — the 5.5 base has been passed)
- Family knowledge-reliability caveat (same weights, xhigh): AA-Omniscience **86% hallucination rate** — the worst of any flagship (Opus 4.7: 36%, Gemini 3.1 Pro: 50%); SimpleQA 47% hallucination without search, **9.6% with web search** — flagged as family context for Pro's grounding-dependence
- Composites: BenchLM **72.27, #14 of 889** (9 of 625 rows — conservative; was 74.62 #12/645 at first pass, bigger cohort); BenchLeader **65.5 ±8.6, #38 of 760** (xhigh; thin coverage, index trend 57→76 still settling 19 Sept-10 Oct; Reasoning 78 and Maths 72 the only populated categories)

Coding:

- SWE-Bench Pro (public): no Pro-specific score published (family base: 58.6%; Opus 4.7 64.3% — labs noted memorization evidence on this eval)
- Terminal-Bench 2.0 (family base): **82.7%**; Expert-SWE internal (family base): **73.1%** (official; Opus 4.7 and Gemini 3.1 Pro trail on both)
- Ethan Mollick's independent hands-on (via agentbreaking): GPT-5.5 Pro completed a 5000-year evolving harbor-town simulation in **20 minutes** vs GPT-5.4 Pro's 33 — faster and cleaner code
- LiveCodeBench / SciCode / Vibe Code Bench / LMArena: no verified Pro-specific public score found (second pass re-confirms)

Long context:

- MRCR v2 / GraphWalks: no Pro-specific rows published; family base GPT-5.5: MRCR v2 8-needle 512K-1M **74.0%**, 256K-512K 81.5%; GraphWalks BFS 1M f1 45.4% (official; unchanged)

### Normalized scores (1–100)

- **Tool use: 88/100.** Held: Pro-measured BrowseComp 90.1% (best in the official table) and GDPval 82.3% remain the only Pro agent rows, corroborated by family TB2.0 82.7% SOTA, Tau2 98.0%, MCP Atlas 75.3%. Still capped by zero Pro-specific Terminal-Bench/Toolathlon/Tau2 rows and by Pro trailing the base on the official GDPval table.
- **Reasoning: 90/100.** Held, with the cap rewritten: the 2026-10-01 "CritPt 30.6% soft spot" cap is resolved — the score is rank #13, a relative strength. New SimpleBench 76.9% #4, Epoch Capabilities Index 162.1 #8, and DTBench 96.0% corroborate top-tier reasoning, with the unresolved FrontierMath-v2 conflict (announcement 52.4/39.6 vs Epoch-hub 87.7/78.0) sitting on top. Remaining caps: still no Pro-specific GPQA/AA-II row, ARC-AGI-2 #29-33 (board saturated above it), GPT-5.4 Pro edging it on HLE-with-tools, and the family 86% Omniscience hallucination rate as a same-weights reliability caveat.
- **Context window: 95/100.** Held: 1M API window (≥1M tier; OpenRouter 1.05M/128K split now documented); family MRCR retrieval at 512K-1M is 74.0%, far below the 98% full-credit bar.
- **Multimodal: 65/100.** Held: text + image in, text out; no video/audio input or non-text output published; Pro-specific MMMU rows still absent (family base: MMMU-Pro 81.2% no tools / 83.2% with tools).
- **Coding: 85/100.** Held: still zero direct Pro coding rows; family TB2.0 82.7% SOTA + SWE-Pro 58.6% and OpenAI's strictly-higher-accuracy positioning, plus Mollick's independent faster-and-cleaner result, keep it above-base; the missing SWE-bench Verified/LiveCodeBench/SciCode Pro rows keep it below the 90+ tier.
- **Cost efficiency: 15/100.** Held: $30/$180 is 3x beyond the $10/$50 ≈ 30 anchor — the most expensive model on OpenCode Zen; BenchLeader blended $67.50/M at 23 tok/s (slowest quarter; AA has not measured it). Value rests entirely on one-shot accuracy per task, not token economics.
- **Overall Score: 85/100.** Half-up mean of the five quality dims: (88 + 90 + 95 + 65 + 85) / 5 = 84.6 → 85 — unchanged from 2026-10-01: the second pass resolved the CritPt misread and added SimpleBench/ECI/top-math evidence, but the Pro variant's independent coverage remains the thinnest of any top-20 model (9 BenchLM rows, ±8.6 BenchLeader error bar), so no score moves. Ultra-premium deep-reasoning tier: near-frontier everywhere at extreme cost — reserve it for the hardest, highest-stakes questions, and ground it with search or a fact-check pass whenever factual recall matters.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-11
- Method: public internet research, second pass over the 2026-10-01 report (OpenAI official GPT-5.5 announcement + evals tables re-checked including the 2026-04-24 update note, BenchLeader data as of 2026-10-12, BenchLM updated 2026-10-10, ARC Prize verified leaderboard, Epoch AI Benchmarking Hub, Artificial Analysis leaderboard references, OpenRouter model docs; two successful web searches plus the agentbreaking.com independent deep-dive covering the AA-Omniscience hallucination data and Mollick's hands-on test); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
