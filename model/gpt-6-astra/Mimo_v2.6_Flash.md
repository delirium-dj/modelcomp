# GPT-6 Astra — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-6-astra`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's GPT-6 flagship (announced 2026-09-03, API 2026-09-04) for the hardest end-to-end agentic work: computer use, browsing, SWE, cybersecurity, science, and professional workflows. First OpenAI model at "Critical" cybersecurity capability threshold.
- **Provider / access:** OpenAI API `gpt-6-astra` (Chat Completions + Responses + Batch); Microsoft Azure; Amazon Bedrock; ChatGPT Plus/Pro/Business/Enterprise. Fast mode = 2× price/speed.
- **Release / knowledge:** 2026-09-03 (announce) / 2026-09-04 (API); knowledge cutoff 2026-04-30.
- **IDs:** `gpt-6-astra` (OpenAI); also `openai/gpt-6-astra` on gateways. No free API tier.
- **Context window:** 1,050,000 tokens; 128,000 max output; prompts >272K input billed at 2× input/cache and 1.5× output for the full request.
- **Modalities:** text + image in; text out; reasoning effort low/medium/high/xhigh/max; tool calls, web search, file search, code execution, computer use, MCP; JSON mode yes.
- **Pricing (as of 2026-09-22):** $10 in / $50 out per 1M; cached input $1; cache write $12.50 (1.25× input); batch/Flex 50%; long-context surcharge above 272K. Paid only.
- **Architecture:** proprietary (closed weights; GPT-6 family flagship; Pro variant for Pro/Business/Enterprise plans).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). All headline rows below are OpenAI self-reported on the launch page unless noted.

Agent / tool use:

- Terminal-Bench 4.0: **57.9%** (OpenAI; also listed 57.7 on some mirrors) — vs Fable 5.1 55.8%, Opus 5 52.6%
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI; vs Fable 5.1 52.6%)
- OSWorld 2.0: **72.6%** offline partial (OpenAI; ~40 min/task vs Sol's ~75 min)
- ScreenSpot-Pro: **92.7%** no tools (OpenAI)
- AutomationBench: **41.4%** (OpenAI)
- Agents' Last Exam: **59.3%** (OpenAI)
- BrowseComp: **91.5%** (OpenAI)
- SRE-Bench one-attempt: **88.0%** (OpenAI; Sol 55.9%)
- GDPval-AA v2: no verified public score found (omitted from OpenAI table)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI; saturated)
- FrontierMath Tier 4 v2: **97.6%** (OpenAI; also 97.8 on some mirrors)
- Humanity's Last Exam with tools: **57.2%** (OpenAI; Fable 5.1 65.0%)
- ARC-AGI-3: **99.9%** (Responses API harness footnote)
- ARC-AGI-2: **95.0%**; ARC-AGI-1: **98.5%** (OpenAI)
- Artificial Analysis Intelligence Index v4.1.1: **61.2** (AA; Fable 5.1 65.7, Opus 5 63.1)
- ExploitBench: **100%** (OpenAI cyber eval)

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI)
- Terminal-Bench 4.0 / Science covered under tool use
- SWE-bench Verified: no verified public score found on launch table (DeepSWE used)
- LiveCodeBench: no verified public score found
- FrontierCode 1.1: **64.5 extended / 53.3 main** (OpenAI)

Long context:

- MRCR (OpenAI): **100%** at 256K–512K; **96.3%** at 512K–1M (vs Sol 91.5% / 73.8%)

### Normalized scores (1–100)

- **Tool use: 97/100.** TB4.0 57.9% SOTA-class, TB-Science 64.6%, OSWorld 72.6%, AutomationBench 41.4%, SRE-Bench 88%; capped slightly by missing GDPval/Tau3/Claw rows and restricted launch build for offensive cyber PoCs.
- **Reasoning: 98/100.** FrontierMath T4 97.6%, GPQA 96%, ARC-AGI-2/3 95/99.9, HLE-tools 57.2%; capped just below 100 because AA Index 61.2 trails Fable 5.1/Opus 5 and HLE-tools trails Fable by ~8 pts.
- **Context window: 98/100.** 1.05M window with MRCR 100% (256K–512K) and 96.3% (512K–1M) — just under the ≥98% at 512K+ bar for a flat 100.
- **Multimodal: 65/100.** Text + image in, text out; no video/audio/non-text out → 60–70 band.
- **Coding: 96/100.** DeepSWE 74.1%, TB4.0 57.9%, FrontierCode 64.5; capped by missing SWE-bench Verified/LCB rows and DeepSWE not #1.
- **Cost efficiency: 30/100.** $10/$50 list matches the ~$10/$50 ≈ 30 anchor; >272K long-context 2× surcharge and Fast mode 2× worsen effective cost; cache read $1 better than Fable's old $1.00 base but 4× Fable 5.1's $0.25.
- **Overall Score: 91/100.** Mean of five quality dims (97+98+98+65+96)/5 = 90.8 → 91. Best-fit: top-tier autonomous computer-use, math, and cyber/RE agent work when $10/$50 and the long-context surcharge are acceptable; not the value pick.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (OpenAI launch/system card/API docs, LLM Stats, Coursiv, Convly, The AI Leaderboard); scores are normalized 1–100 interpretations, not official vendor scores; most raw rows are OpenAI self-reported.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
