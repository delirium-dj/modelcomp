# GPT-6 Astra — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-6-astra`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-22 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's GPT-6 flagship (announced 2026-09-03, API 2026-09-04) for the hardest end-to-end agentic work: computer use, browsing, SWE, cybersecurity, science, and professional workflows. First OpenAI model at "Critical" cybersecurity capability threshold.
- **Provider / access:** OpenAI API `gpt-6-astra` (Chat Completions + Responses + Batch); Microsoft Azure; Amazon Bedrock; ChatGPT Plus/Pro/Business/Enterprise. Fast mode = 2× price/speed.
- **Release / knowledge:** 2026-09-03 (announce) / 2026-09-04 (API); knowledge cutoff 2026-04-30; listed retirement 2028-01-11 (modelbenchmark.io, 2026-10-06).
- **IDs:** `gpt-6-astra` (OpenAI); also `openai/gpt-6-astra` on gateways. No free API tier.
- **Context window:** 1.1M tokens (modelbenchmark.io/OpenRouter host tables, 2026-10-06; launch materials cited 1,050,000 — treat as ~1.05–1.1M); 128,000 max output; prompts >272K billed at $20 in / $75 out (2× input, 1.5× output), cache read $2, cache write $25.
- **Modalities:** text + image in; text out; reasoning effort low/medium/high/xhigh/max; tool calls, web search, file search, code execution, computer use, MCP; JSON mode yes.
- **Pricing (as of 2026-10-06):** $10 in / $50 out per 1M; cached input $1; cache write $12.50 (1.25× input); batch $5/$25 (50% off); priority $20/$100; >272K: input $20, cache read $2, cache write $25, output $75 (modelbenchmark.io OpenAI listing, 2026-10-06 — unchanged). Paid only.
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
- Epoch AI battery (max effort, via modelbenchmark.io 2026-10-06): Mystery Game Puzzles **84.0 ±3.7**, Chess Puzzles **72.0 ±4.5**, EBR-bench **76.2 ±8.4**, Furniture Assembly **80.0 ±4.9**, SpireClimb Ascension-10 **34.7 ±5.5** / Ascension-20 **16.7 ±4.9**
- modelbenchmark composite: **rank 2 of 340** (100th percentile; effort spread 9.8 pts between settings)
- GDPval-AA v2: no verified public score found (omitted from OpenAI table)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI; saturated) / **95.8% ±1.4** (Epoch AI, max effort — modelbenchmark.io 2026-10-06)
- FrontierMath Tier 4 v2: **97.6%** (OpenAI; also 97.8 on some mirrors; Epoch AI confirms 97.6 ±2.4 at high/max/xhigh, 87.8 medium)
- FrontierMath Tiers 1–3 v2: **93.7% ±1.4** (Epoch AI, max); FrontierMath Erdos: **2.9% ±2.1**; SimpleQA Verified: **75.6% ±1.4**; OTIS Mock AIME 2024–2025: **100.0% ±0.0** (Epoch AI via modelbenchmark.io)
- Humanity's Last Exam with tools: **57.2%** (OpenAI; Fable 5.1 65.0%)
- ARC-AGI-3: **99.9%** (Responses API harness footnote)
- ARC-AGI-2: **95.0%**; ARC-AGI-1: **98.5%** (OpenAI)
- Artificial Analysis Intelligence Index: **53** max-effort (AA v4.3.2, 2026-09-28; AA leaderboard 2026-10-06 shows Astra max 53 / xhigh 52 / high 51 / medium 50 / low 46; same-scale field: Fable 5.1 53, Opus 5 51; llm-stats composite rank 2 with GPQA 96.0% its headline reasoning number)
- ExploitBench: **100%** (OpenAI cyber eval)

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI)
- Terminal-Bench 4.0 / Science covered under tool use
- SWE-bench Verified: no verified public score found on launch table (DeepSWE used); still absent from modelbenchmark.io's tracked set (Epoch/SWE-bench/LiveBench sources, 2026-10-06)
- LiveCodeBench: no verified public score found
- LiveBench: **83.0%** (max, 23 runs — LiveBench via modelbenchmark.io 2026-10-06; distinct from LiveCodeBench)
- MirrorCode: **46.7% ±11.9** (Epoch AI, high effort)
- FrontierCode 1.1: **64.5 extended / 53.3 main** (OpenAI)

Long context:

- MRCR (OpenAI): **100%** at 256K–512K; **96.3%** at 512K–1M (vs Sol 91.5% / 73.8%)

- Fresh-source note (2026-09-28 re-audit, user-signed-off exception to RULES.md permanence): AA-native **Intelligence Index 53** (v4.3.2, max effort) supersedes the v4.1.1 reading 61.2 — whole-index rescale, not a capability drop (Fable 5.1 and Opus 5 moved the same way) — scores unchanged.
- Fresh-source note (2026-10-06 re-run, user-approved enrichment): AA leaderboard FAQ confirms max 53 (xhigh 52 / high 51 / medium 50 / low 46, #5-class); llm-stats composite **59.1, rank 2 of 400** with GPQA 96.0% its headline reasoning number; Epoch AI battery + LiveBench 83.0% + MirrorCode 46.7% added via modelbenchmark.io (2026-10-06). Scores unchanged: (97+98+98+65+96)/5 = 90.8 → 91.

### Normalized scores (1–100)

- **Tool use: 97/100.** TB4.0 57.9% SOTA-class, TB-Science 64.6%, OSWorld 72.6%, AutomationBench 41.4%, SRE-Bench 88%; capped slightly by missing GDPval/Tau3/Claw rows and restricted launch build for offensive cyber PoCs.
- **Reasoning: 98/100.** FrontierMath T4 97.6%, GPQA 96%, ARC-AGI-2/3 95/99.9, HLE-tools 57.2%; capped just below 100 because AA Index 53 (v4.3.2 refresh) sits level with Fable 5.1 and HLE-tools trails Fable by ~8 pts.
- **Context window: 98/100.** 1.05M window with MRCR 100% (256K–512K) and 96.3% (512K–1M) — just under the ≥98% at 512K+ bar for a flat 100.
- **Multimodal: 65/100.** Text + image in, text out; no video/audio/non-text out → 60–70 band.
- **Coding: 96/100.** DeepSWE 74.1%, TB4.0 57.9%, FrontierCode 64.5; capped by missing SWE-bench Verified/LCB rows and DeepSWE not #1.
- **Cost efficiency: 30/100.** $10/$50 list matches the ~$10/$50 ≈ 30 anchor; >272K long-context 2× surcharge and Fast mode 2× worsen effective cost; cache read $1 better than Fable's old $1.00 base but 4× Fable 5.1's $0.25.
- **Overall Score: 91/100.** Mean of five quality dims (97+98+98+65+96)/5 = 90.8 → 91. Best-fit: top-tier autonomous computer-use, math, and cyber/RE agent work when $10/$50 and the long-context surcharge are acceptable; not the value pick.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (OpenAI launch/system card/API docs, LLM Stats, Coursiv, Convly, The AI Leaderboard); re-run 2026-10-06 (user-approved enrichment): modelbenchmark.io model page (14 benchmarks, host/price table, Epoch AI runs), AA leaderboard, llm-stats — added Epoch battery (SimpleQA Verified, FrontierMath T1–3/Erdos, OTIS, puzzles), LiveBench, MirrorCode, >272K price tiers, retirement date; GPQA cross-checked (96.0 OpenAI / 95.8 Epoch). Scores are normalized 1–100 interpretations, not official vendor scores; most raw rows are OpenAI self-reported.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
