# GPT 5.4 Nano — findings by Big Pickle

- Source: OpenAI (`opencode/gpt-5.4-nano`, API model `gpt-5.4-nano`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Nano
- **Short description:** The smallest and cheapest member of the GPT-5.4 family, released 2026-03-17 alongside GPT-5.4 mini — API-only (not in ChatGPT or Codex) and recommended by OpenAI for classification, data extraction, ranking, and coding subagents handling simpler supporting tasks. A significant upgrade over GPT-5 nano; it trades frontier-level depth for the lowest price point in the family.
- **Provider / access:** OpenAI API `gpt-5.4-nano`; `reasoning.effort` none (default), low, medium, high, xhigh; Azure; OpenRouter; OpenCode Zen `opencode/gpt-5.4-nano`.
- **Release / knowledge:** released 2026-03-17; knowledge cutoff 2025-08-31.
- **IDs:** `opencode/gpt-5.4-nano` (Zen, standard pricing); upstream `gpt-5.4-nano`.
- **Context window:** 400,000 tokens, 128,000 max output.
- **Modalities:** text and image input; text output; reasoning effort none–xhigh; tool calls.
- **Pricing (as of 2026-10-02):** **$0.20 in / $1.25 out per 1M**; cached input $0.02; batch ≈50%. The cheapest GPT-5.4-family endpoint and among the cheapest capability-per-token routes available.
- **Architecture:** proprietary; weights not published. Artificial Analysis measures 171–180 t/s output speed.
- **Lifecycle:** flagged as deprecated on Artificial Analysis, which now recommends GPT-5.6 Terra (xhigh).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (telecom): **92.5%** at xhigh (OpenAI launch table); **76.0%** on Artificial Analysis
- IFBench (instruction following): **75.9%** at xhigh / 64.4% medium / 32.7% non-reasoning (Artificial Analysis)
- MCP Atlas: **56.1%**; Toolathlon: **35.5%** (OpenAI launch table)
- Terminal-Bench 2.0: **46.3%**; Terminal-Bench Hard: **42.4%** at xhigh (**33.3%** medium, **24.2%** non-reasoning)
- OSWorld-Verified: **39.0%** — a large drop from GPT-5.4 mini's 72.1% and GPT-5.4's 75.0%
- Artificial Analysis Agentic Index: **17.7**

Reasoning / knowledge:

- GPQA Diamond: **82.8%** at xhigh (OpenAI); **81.7%** (AA xhigh); 76.1% medium; 55.8% non-reasoning
- HLE: **28.3%** at xhigh (**24.3%** without tools per OpenAI, **37.7%** with tools); 15.9% medium; 4.1% non-reasoning
- CritPt: **9.3%** at xhigh / 0.0% non-reasoning
- SciCode: **47.2%** at xhigh
- MMLU-Pro: **77.2%** (Vals AI via BenchLM); GPQA Diamond 77.5% (Vals)
- Artificial Analysis Intelligence Index: **21.2** at xhigh, ~20 at medium, **12** non-reasoning
- AA-Omniscience Accuracy / Non-Hallucination Rate: **25.7% / 25.8%** at xhigh — the weakest point, with hallucination as high as accuracy

Coding:

- SWE-Bench Pro (public): **52.4%** at xhigh — +6.7 over GPT-5 mini's 45.7% and only 5.3 behind full GPT-5.4
- Artificial Analysis Coding Index: **56.1**
- SWE-bench Verified / LiveCodeBench: no verified public score found for this ID

Long context:

- AA-LCR: **76.7%** at xhigh (Artificial Analysis)
- OpenAI MRCR v2 8-needle: 64K–128K **44.2%**, 128K–256K **33.1%** (GPT-5.4: 86.0%/79.3%)
- GraphWalks: BFS 0–128K **73.4%**, parents 0–128K **50.8%** (GPT-5.4: 93.1%/89.8%)

Multimodal:

- MMMU-Pro: **66.1%**, **69.5%** with Python (GPT-5.4: 81.2%/81.5%; mini: 76.6%/78.0%)
- OmniDocBench 1.5 (lower better): **0.2419** — worst in the family (GPT-5.4 0.109, mini 0.1263, GPT-5 mini 0.1791)

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench Telecom 76.0–92.5% and IFBench 75.9% at xhigh make it a credible high-volume tool caller; capped by Toolathlon 35.5%, Terminal-Bench Hard 42.4%, MCP Atlas 56.1% and OSWorld-Verified 39.0% — the same screen-use collapse that OpenAI's own table shows for this tier.
- **Reasoning: 70/100.** GPQA Diamond 81.7–82.8% and MMLU-Pro 77.2% at xhigh are unusually good for a $0.20/$1.25 model, giving it a real niche in graded extraction and classification; capped by HLE 28.3%, CritPt 9.3% and an Intelligence Index of 21.2, plus the steep non-reasoning drop (GPQA 55.8%, HLE 4.1%).
- **Context window: 72/100.** A 400,000-token window and AA-LCR 76.7% at xhigh sound strong, but the measured retention is poor: MRCR v2 44.2%/33.1% and GraphWalks parents 50.8% mean the window exists without the recall to use it.
- **Multimodal: 72/100.** Text and image input with MMMU-Pro 66.1% (69.5% with Python) is usable vision, but it trails both siblings by 10–15 points and OmniDocBench at 0.2419 edit distance is the worst document-extraction result in the family — fine for screenshots and diagrams, not for dense document parsing.
- **Coding: 72/100.** SWE-Bench Pro 52.4% at xhigh is a genuine surprise, landing within 5.3 points of full GPT-5.4 for one-fifth of its input price, with an AA Coding Index of 56.1 and SciCode 47.2%; capped by Terminal-Bench 2.0 at 46.3% and the absence of any SWE-bench Verified figure.
- **Cost efficiency: 96/100.** $0.20/$1.25 with $0.02 cache reads and half-price batch is the best price-per-capability in this comparison by a wide margin, at 171–180 t/s — which is exactly why OpenAI positions it for subagent delegation rather than direct use.
- **Overall Score: 70.8/100.** Half-up mean of the five quality dims. Best fit for bulk classification, extraction, ranking, routing and cheap coding subagents; keep it out of long-context retrieval, document parsing and anything where hallucination risk matters (Omniscience non-hallucination 25.8%).

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.4 mini/nano launch page with the full nano comparison tables, OpenAI GPT-5.4 model docs and pricing page, Artificial Analysis GPT-5.4 nano release and model pages via OpenRouter, BenchLM, opper.ai, Easy Benchmarks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.

---