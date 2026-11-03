# GPT-5.5 — findings by Mercury 3

- Source: OpenAI/GPT-5.5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (OpenAI hyphenated style: GPT-5.5)
- **Short description:** OpenAI's April 2026 flagship (released 2026-04-23, superseded by GPT-5.6 Sol): a new class of agentic intelligence with SOTA-at-launch Terminal-Bench 2.0 (82.7%), GDPval (84.9% wins/ties), CyberGym (81.8%), plus major long-context gains (MRCR 512K–1M 74% vs 36.6% for 5.4).
- **Provider / access:** OpenAI API (`gpt-5.5` — Responses/Chat Completions), ChatGPT/Codex (400K ctx in Codex); 2 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff not published.
- **IDs:** `gpt-5.5` (OpenAI API; xhigh reasoning effort; Fast mode 1.5× at 2.5× cost).
- **Context window:** 1,000,000 tokens (1M) API / 400K Codex (AA lists 922K); max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; GPT-5.5 Thinking variant in ChatGPT.
- **Pricing (as of 2026-11-03):** $5.00 input / $30.00 output per 1M tokens, 90% cache discount; Batch/Flex −50%, Priority 2.5×.
- **Architecture:** proprietary; served on NVIDIA GB200/GB300 NVL72; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI/tbench leaderboard; 82.0% reported) vs **76.4%** TB2.1 (Vals); TB Hard: 60.6%
- GDPval (wins/ties): **84.9%**; OSWorld-Verified: **78.7%**; FinanceAgent v1.1: **60.0%**; Investment Banking Modeling (internal): **88.5%**; OfficeQA Pro: 54.1%
- τ²-bench Telecom: **98.0%** (untuned); BrowseComp: **84.4%**; MCP Atlas: **75.3%**; Toolathlon: 55.6%; CyberGym: **81.8%**
- AA Agentic Index: 37.3%; APEX-Agents-AA: 37.7%; JobBench: 42.7%; OSWorld 2.0: 13.0%; ApprenticeBench: 20%

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI/AA) vs **93.2%** (Vals); HLE: **52.2%** with tools / 41.4% without; GeneBench: 25.0%; BixBench: **80.5%**
- ARC-AGI-1: **95.0%**; ARC-AGI-2: **85.0%** (ARC Prize/OpenAI); CritPt: **27.1%**; AA-LCR: **84.3%**; AI Index: 38.4%
- FrontierMath v2: Tiers 1–3 **85.26%**, Tier 4 **72.5%** (Epoch AI)
- AA-Omniscience: accuracy 58.0%, hallucination rate **89.0%** (very high)

Coding:

- SWE-Bench Pro: **58.6%**; Expert-SWE (internal): **73.1%**; Terminal-Bench 2.0 82.7%
- SWE-bench: **82.6%**; LiveCodeBench: **85.3%** (Vals); Vibe Code Bench: **69.85%**; React Native: 84.7%; AA Coding Index: **74.9%**; FrontierCode 2.0: 22.6%

Long context:

- 1M window; MRCR v2: 98.1% @4K–8K down to **74.0% @512K–1M**; GraphWalks BFS 1M f1 45.4%; AA-LCR 84.3% — strong at depth for its era.

Multimodal:

- text/image in, text out; MMMU-Pro 81.2%/83.2% (w/ Python); ExtractBench 93.57%; ParseBench 66.63%.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.0 82.7%, OSWorld-Verified 78.7%, CyberGym 81.8%, τ² Telecom 98% — frontier agentic; capped by Toolathlon 55.6%, OSWorld 2.0 13%, and APEX 37.7%.
- **Reasoning: 91/100.** GPQA 93.6%, ARC-AGI-2 85%, FrontierMath T1–3 85.26% — elite; capped by HLE 52.2% and hallucination rate 89%.
- **Context window: 92/100.** 1M with strong MRCR/GraphWalks at depth (74% @512K–1M); below the 2026 autumn ≥90%+ deep-retrieval leaders.
- **Multimodal: 82/100.** image input with solid grounding (MMMU-Pro 83.2% w/ Python, ExtractBench 93.57%); no video/audio input.
- **Coding: 89/100.** TB2.0 82.7%, SWE-Pro 58.6%, coding index 74.9%, Vibe 69.85%; capped by FrontierCode 2.0 22.6% and CursorBench ~59%.
- **Cost efficiency: 60/100.** $5/$30 — premium; much more token-efficient than 5.4 per OpenAI (half-cost SOTA coding index).
- **Overall Score: 89/100.** Mean of (90+91+92+82+89)/5 = 88.8 → 89. A strong April-2026 flagship; GPT-5.6 Sol/GPT-6 line supersede it.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-5.5 announcement, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB2.0 82.7 vs TB2.1 76.4; GDPval Elo vs wins/ties) listed side by side.
- Reference URLs:
  - [Introducing GPT-5.5 (OpenAI, 2026-04-23)](https://openai.com/index/introducing-gpt-5-5/)
  - [GPT-5.5 System Card (OpenAI)](https://deploymentsafety.openai.com/gpt-5-5)
  - [GPT-5.5 — Artificial Analysis model page ($5/$30, 1M, 95 t/s)](https://artificialanalysis.ai/models/gpt-5-5)
  - [GPT-5.5 — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-5-5)
  - [GPT-5.5 — Vals AI model page](https://www.vals.ai/models/openai_gpt-5.5)
  - [ARC Prize results — GPT-5.5](https://arcprize.org/leaderboard)
