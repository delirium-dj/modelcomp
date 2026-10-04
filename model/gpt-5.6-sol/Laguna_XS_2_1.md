# GPT-5.6 Sol — findings by Laguna XS 2.1

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's GPT-5.6 flagship tier (GA 2026-07-09; limited preview 2026-06-26) — SOTA at launch on Terminal-Bench 2.1 and DeepSWE, with `max` reasoning effort and an `ultra` multi-agent mode; now the value flagship below GPT-6 Astra. The `gpt-5.6` alias routes here.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`), ChatGPT, Codex, Azure, AWS Bedrock; Cerebras serving at up to 750 tok/s (select customers); Chat Completions + Responses + Batch APIs.
- **Release / knowledge:** 2026-07-09 (GA); knowledge cutoff 2026-02-16.
- **IDs:** `gpt-5.6-sol` (alias `gpt-5.6`); `openai/gpt-5.6-sol` (OpenRouter). No Zen Free ID found.
- **Context window:** 1,050,000 tokens; 128K max output.
- **Modalities:** text + image in; text out; reasoning yes (efforts none/low/medium default/high/xhigh/max; `ultra` multi-agent mode); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** promotional $4 / $20 per 1M in/out (≥20% cut, holds through at least 2026-11-21; launch list $5 / $30); cached input $0.40; cache writes 1.25x uncached input; Fast mode 2x price (up to 2.5x faster); Batch 50% off; web search tool $10/1K calls.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (OpenAI GA launch, SOTA); Terminal-Bench Hard **62.1%** (AA, high)
- Terminal-Bench 4.0: **37.3%** (Anthropic/OpenAI tables)
- DeepSWE 1.1: **72.7%** (OpenAI GA launch)
- OSWorld 2.0: **62.6%** (OpenAI; surpasses Opus 4.8 using 85% fewer output tokens); 65.7% on OpenAI's later Astra table
- BrowseComp: **90.4%** standard / **92.2%** Ultra multi-agent (OpenAI)
- Agents' Last Exam: **52.7%** (OpenAI launch; 53.6% on Astra table)
- τ²-Bench Telecom: **83.3% high / 85.1% max** (AA via OpenRouter)
- AA Coding Agent Index v1.1: **80.0** (max)
- Cyber: ExploitGym 3 **24.9% (2h) / 33.7% (6h)**; SEC-Bench **71.2%** (OpenAI)
- Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (OpenAI max); **92.8% high / 94.1% max** (AA)
- HLE: **46.0% high / ~47.5% max** (AA)
- AA Intelligence Index: **58.9 max (v4.1, July)** / **42.3 high / 47.0 max** (current methodology)
- CritPt: **25.7%** (AA high)
- IFBench: **69.2%** (AA high)
- AA-Omniscience: accuracy **58.4%** / non-hallucination **8.8%** (AA high — weak)
- HealthBench: **57.0** / Professional **60.5** (OpenAI)

Coding:

- SWE-bench Pro: **64.6%** (OpenAI GA launch)
- CursorBench 3.2: **67.2% max** (Cursor vendor-run, $5.69/task); CursorBench 4.0: **41.7% max** (Cursor)
- SciCode: **57.8%** (AA high)
- SWE-bench Verified / LiveCodeBench: no verified public score found in sources checked

Long context:

- OpenAI MRCR v2 (8-needle): **91.5%** at 256K–512K; **73.8%** at 512K–1M (OpenAI)
- GraphWalks BFS f1: **90.7%** at 256K; **77.1%** at 1M (OpenAI)
- AA-LCR: **81.7%** (AA high)

Multimodal (supporting): MMMU-Pro **83.0%** (OpenAI, max, no tools)

### Normalized scores (1–100)

- **Tool use: 91/100.** TB 2.1 88.8% (launch SOTA), BrowseComp 90.4–92.2%, τ²-Bench ~85% and OSWorld 62.6% are frontier-grade; capped by TB 4.0 37.3% and AA GDPval 49.0% well behind the newest flagships, plus weak Omniscience non-hallucination (8.8%).
- **Reasoning: 89/100.** GPQA 94.6% and AA Index 58.9 (v4.1 max, #2 at launch behind Fable 5) are strong; capped by HLE ~46–47.5% and CritPt 25.7% trailing the 2026-09 generation.
- **Context window: 95/100.** 1.05M window (95–100 tier) with MRCR 91.5% at 256–512K and GraphWalks 77.1% at 1M — real but not ≥98% retrieval, so the tier floor.
- **Multimodal: 65/100.** Text + image in, text out (image-in band); MMMU-Pro 83.0% backs solid vision; no audio/video-in or non-text output.
- **Coding: 91/100.** DeepSWE 72.7% (near the 74% ref), TB 2.1 88.8%, SWE-bench Pro 64.6% and Coding Agent Index 80.0 were launch SOTA; capped by CursorBench 4.0 41.7% max against the newest models.
- **Cost efficiency: 60/100.** Current promo $4/$20 lands between the $3/$15 (~60) and $5/$25 bands; launch list $5/$30 maps to ~50, so score holds at 60 only while the promo (through ≥2026-11-21) lasts. $0.40 cache reads and 50% Batch help.
- **Overall Score: 86.2/100.** Mean of (91, 89, 95, 65, 91) = 86.2 — still an excellent agentic-coding daily driver at promo pricing; Astra beats it on hard agentic tasks at 2.5x the price.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (OpenAI GPT-5.6 launch + pricing posts + developer docs, OpenRouter, llmreference, Think Facility, Artificial Analysis via OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
