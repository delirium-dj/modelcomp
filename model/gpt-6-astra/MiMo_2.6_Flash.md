# GPT-6 Astra — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's first GPT-6-generation frontier flagship (released 2026-09-03), "the most capable model we have ever broadly deployed" — built to operate software (terminal, browser, apps) for long-horizon agentic work, plus computer use, science, and document work. Not a successor language for GPT-5.6 Sol/Terra/Luna (all remain on sale) — a new family entry.
- **Provider / access:** OpenAI API (`gpt-6-astra`, Chat Completions + Responses API), Microsoft Azure, Amazon Bedrock, ChatGPT Plus/Pro/Business/Enterprise (usage in existing allowances; GPT-6 Astra Pro tier for paid plans). Codex supports experimental cross-context notes.
- **Release / knowledge:** released 2026-09-03; knowledge cutoff 2026-04-30 (OpenAI model page).
- **IDs:** `openai/gpt-6-astra` (gateway routes) / `gpt-6-astra` (native).
- **Context window:** 1,050,000 tokens (max input 922,000); max output 128,000 tokens.
- **Modalities:** text + image in; text out; reasoning yes (efforts low/medium/high/xhigh/max); tool calls yes (terminal, browser/computer use, code interpreter-class tools); JSON/structured outputs. Cyber capabilities gated behind OpenAI's Daybreak program (Critical threshold on ExploitBench).
- **Pricing (as of 2026-10-07):** $10 in / $50 out per 1M for prompts ≤272K input tokens; **above 272K the entire request reprices at $20 / $75**; cache read $1.00, cache write $12.50; Batch/Flex 50% of standard; Fast mode 2× price for up to 2× speed. Paid — no free tier.
- **Architecture:** proprietary sparse Mixture-of-Experts (per third-party ARMES docs; OpenAI discloses no parameter count).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (tbench.ai official board, high effort, Codex harness, rank 1/18, ±1.8) / 88.4% (AA, max) / 87.3% (vals.ai).
- Terminal-Bench 4.0: **57.9%** (OpenAI) / **59.1%** (Artificial Analysis) / 58.2% (rank 4/59, LLMLearner).
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI, new high) / **68.1%** (rank 1/20).
- OSWorld 2.0 computer use: **72.6%** (OpenAI; ~47% less time per task than Sol); ScreenSpot-Pro 92.7%.
- AutomationBench: **41.4%** (OpenAI; ahead of Fable 5.1 31.4% and Opus 5 26.9%).
- GDPval-AA: no verified public score found for Astra. Tau3/Tau2 / Claw-Eval / Toolathon: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI) / **96.1–96.3%** (AA, extra-high, rank 1/189).
- HLE: **54.7%** no tools (AA, 2026-09-04) / **57.2%** with tools (OpenAI).
- Artificial Analysis Intelligence Index v4.1.1: **61.2** (vs Fable 5.1 65.7, Opus 5 63.1).
- ARC-AGI-2: **95.0%** (max, arcprize.org); ARC-AGI-3: 99.9% under OpenAI's adapter harness, **62.7%** on the standardized harness.
- FrontierMath Tier 4 v2: 97.6% no tools / 93.7% with tools (rank 1); CritPt 31.7 (rank 4/124); LiveBench / LCR / Omniscience: no verified public score found.

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI) / 74.0% (Datacurve board, xhigh, tied for first).
- Terminal-Bench 2.1/4.0 as above; FrontierCode 1.1 Main **53.3%**, Extended **64.5%**; FrontierSWE v2 65.5%.
- SciCode: **56.5%** (max, no tools, rank 16/89); Vibe Code Bench v1.1: **89.6%** (rank 6/63).
- AA Coding Agent Index v1.4: **67.0** (vs Opus 5 68.1, Fable 5.1 67.2). SRE-Bench 88.0%; IOI (Vals v2) 100.
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: **no published OpenAI figure** — OpenAI quotes DeepSWE instead; no like-for-like SWE-bench row exists.

Long context:

- OpenAI MRCR v2 8-needle: **100%** at 256K–512K and **96.3%** at 512K–1M (vs GPT-5.6 Sol 91.5% / 73.8%).

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 87.4–88.4 at/near the ~88 frontier ref (rank 1 board), TB4.0 57.9–59.1 leading, OSWorld 72.6%, AutomationBench 41.4% all frontier-grade; capped below 95 by the missing GDPval-AA and Tau3/Claw-Eval numbers.
- **Reasoning: 96/100.** All four methodology frontier refs cleared — GPQA 96.0–96.3 (90+), HLE 54.7 no-tools (40+), AA Index 61.2 (60+), MRCR 96.3–100 at 512K–1M (95+ to 1M); ARC-AGI-2 95.0 and FrontierMath Tier 4 97.6 corroborate. Not 100 because HLE trails Fable 5.1 and AA Index is below Fable/Opus.
- **Context window: 98/100.** 1.05M window with 100% MRCR at 256K–512K and 96.3% at 512K–1M — just under the ≥98% bar at the top band for a clean 100.
- **Multimodal: 68/100.** Text + image in, text out only = 60–70 band; no video/audio/PDF input and no non-text output.
- **Coding: 94/100.** DeepSWE 74.1 (74%+ frontier ref), TB2.1 rank 1 at 87.4, SciCode 56.5 (55%+ ref), Vibe 89.6, FrontierCode Extended 64.5; capped at 94 because OpenAI published no SWE-bench Verified/Pro or LiveCodeBench row and AA Coding Index 67.0 sits just under the 70+ ref.
- **Cost efficiency: 30/100.** $10/$50 is the methodology's $10/$50 = 30 anchor exactly; the 272K pricing cliff (whole-request $20/$75 above it) and $1.00 cache reads (4× Fable 5.1's) hurt agentic workloads, batch/flex at half price is the only offset.
- **Overall Score: 90/100.** (92+96+98+68+94)/5 = 89.6 → 90 — top-of-field reasoning/long-context/computer-use flagship for customers who need SOTA and will pay $10/$50 (and keep prompts under 272K).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (OpenAI launch post + model docs, DataCamp, LLMLearner, The Model Gap, UseRightAI, Techplained, Modelscale, tbench.ai/AA/vals cross-checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

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

