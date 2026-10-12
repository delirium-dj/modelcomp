# Claude Opus 4.5 — findings by Ling 3.1 Flash

- Source: Anthropic (`anthropic/claude-opus-4.5`; API `claude-opus-4-5-20251101`; Claude API, Claude app, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's November-2025 Opus flagship — the launch SOTA for real-world software engineering (SWE-bench Verified 80.9%) and agents (MCP Atlas 62.3% vs 43.8% next best; τ²-Bench Retail 88.9%/Telecom 98.2%; OSWorld 66.3%; Terminal-Bench 2.0 59.3%) with GPQA Diamond 86.95% and HLE 43.4% (with tools), at a 67%-reduced $5/$25 per 1M; still active (retirement scheduled 2026-11-24), superseded by Opus 4.6–5.5.
- **Provider / access:** Anthropic API, Claude app, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; 200K context, 64K max output; default effort high; evals run with 64K thinking budget, interleaved scratchpads, 5-trial averages (SWE-bench Verified: no thinking budget; Terminal-Bench: 128K).
- **Release / knowledge:** 2025-11-24 (model ID date 2025-11-01); knowledge cutoff May 2025.
- **IDs:** `anthropic/claude-opus-4.5` / `claude-opus-4-5-20251101`. `noFreeId`. (The repo `meta.json` is accurate: 200K, text/image in, $5/$25.)
- **Context window:** 200,000 tokens; 64,000 max output.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $5.00/$25.00 per 1M input/output; cache read $0.50/M (10% of input); 5m cache write $6.25/M, 1h $10/M; Batch API $2.50/$12.50 (50% off); regional/multi-region cloud endpoints +10%; blended ~$10/M at 3:1.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (system card, 64K thinking budget, 5-trial averages):

- SWE-bench Verified: **80.9%** — launch SOTA, beating Gemini 3 Pro and GPT-5.1
- MCP Atlas: **62.3%** (vs 43.8% next best — a large gap)
- τ²-Bench Retail: **88.9%**; τ²-Bench Telecom: **98.2%** — best in table
- OSWorld (computer use): **66.3%** (vs 61.4% / 44.4%) — "best model in the world for computer use" per Anthropic
- Terminal-Bench 2.0 (128K thinking budget): **59.3%** (58.1% w/ Codex) — best in table; Terminal-Bench Hard **44%** (highest of any model, per AA)
- SWE-bench Multilingual: leads **7 of 8** languages; Aider Polyglot: **+10.6pp** over Sonnet 4.5
- BrowseComp-Plus: significant jump (figure not captured); Vending-Bench: **+29%** over Sonnet 4.5
- CyberGym: **50.6%**
- Current-version agentic rows (BenchLM, Qwen3.6-Plus comparison table, 2026-10): **MCP Atlas 42.3%** (vs the system card's 62.3% on the launch version — a ~20-point version gap, conflict kept), Toolathlon **43.5%**, MCP-Tasks **71.8%**, WideResearch **76.4%**, Claw-Eval **59.6%**, QwenClawBench **52.3%**, τ³-bench **70.2%**, DeepPlanning **26.4%**, 2Repo **43.2%**, VITA-Bench **23.3%**, JobBench **32.3%** (JobBench paper), Gert Labs **64.23%**
- BrowseComp: **67.8%** (Vellum-compiled launch table)
- Prompt-injection robustness (Vellum tests via eesel): attacks succeeded only **4.7%** of the time (vs Gemini 3 Pro 12.5%, GPT-5.1 21.9%) — best-in-table at launch
- Internal performance-engineering take-home exam: higher than any human candidate ever (2-hour limit) — anecdotal

Reasoning / knowledge:

- GPQA Diamond: **86.95%** (5-trial avg; 87.0% per RankedAGI)
- Humanity's Last Exam: **43.4%** with tools / **30.8%** without (RankedAGI; +11pp over Sonnet 4.5 per AA)
- ARC-AGI-2 (Verified): **37.6%** (vs 13.6% / 31.1% / 17.6%)
- MMMU (validation): **80.7%**; MMMLU: **90.8%**; MMLU-Pro: **89.5%** (ties Gemini 3 Pro at 90% per AA)
- AA Intelligence Index: **41.9** (current version; Anthropic's best scores yet across all 10 of its benchmarks at launch)
- AA launch analysis (v4.1 era, 2025-11-25): Intelligence Index **70** (Thinking) — #2 behind Gemini 3 Pro (73), ties GPT-5.1 high (70), ahead of Grok 4 (65) and Kimi K2 Thinking (67); non-reasoning **60** (most intelligent non-reasoning model); AA-Omniscience Index **10** (#2; accuracy 43%, hallucination rate 58%); CritPt **5%** (Thinking); 48M output tokens to run the Index (vs Gemini 3 Pro 92M, GPT-5.1 81M, Grok 4 120M) but ~$1.5k per Index run (among the most expensive)
- SuperGPQA **70.6%**; MMLU-Redux **96.6%**; C-Eval **92.2%** (BenchLM/Qwen3.6-Plus table)
- RankedAGI Reasoning Score: **64.4%**; EnigmaEval: **11.9%**; SimpleQA net score: **0.09** (weak)
- LiveCodeBench: +16pp over Sonnet 4.5 (absolute figure not captured)
- Every (2026-07-10, internal benchmarks): senior engineer benchmark **63/100** (rewrite a vibe-coded codebase from first principles; GPT-5.5 62, Opus 4.7 ~33; human seniors score 80s–90s); writing benchmark **79.6/100** (vs GPT-5.5's 73 — the best writing model Every tested); noticeably stronger at extra-high reasoning than high/medium

Long context / multimodal:

- AA-LCR: +8pp over Sonnet 4.5 (absolute figure not captured); 200K window
- MMMU 80.7% (above); no Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 77/100.** MCP Atlas 62.3% (launch version; the current version reads 42.3% per BenchLM's Qwen3.6-Plus table — a ~20-point version gap), τ²-Bench Retail 88.9%/Telecom 98.2% and OSWorld 66.3% led their tables, SWE-bench Verified 80.9% was the launch SOTA and Terminal-Bench 2.0 59.3% led; current-version independent rows (Toolathlon 43.5%, JobBench 32.3%, VITA-Bench 23.3%, DeepPlanning 26.4%) cap the score; an 11-month-old model now superseded by Opus 4.6–5.5. Revised 80→77 on the current-version MCP Atlas/Toolathlon reads.
- **Reasoning: 78/100.** GPQA Diamond 86.95% and HLE 43.4% with tools (30.8% without) are near the frontier bands, with MMMU 80.7%, MMMLU 90.8%, MMLU-Pro 89.5%, MMLU-Redux 96.6% and the AA-era Index of 70 (v4.1, #2 at launch) supporting; ARC-AGI-2 37.6%, the current AA Intelligence Index of 41.9, SuperGPQA 70.6%, SimpleQA net 0.09, EnigmaEval 11.9% and CritPt 4.6–5% cap the score.
- **Context window: 70/100.** 200K-token window — the methodology's 70 anchor; AA-LCR 77.3% (max effort), AI-Needle 74% and LongBench v2 64.4% fill, but the 200K ceiling keeps this under the 1M-window band.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); MMMU 80.7% supports.
- **Coding: 76/100.** SWE-bench Verified 80.9% (launch SOTA; Bash-only harness reads 74.4%), SWE-bench Multilingual 77.5% (leads 7/8 languages), LiveCodeBench 87.1% (AA, max) and Aider Polyglot +10.6pp over Sonnet 4.5 support; Terminal-Bench 2.0 at 59.3% (59.8% per RankedAGI/Vellum) is under the current 85% bar, and 2Repo 43.2% plus Every's senior-engineer benchmark (63/100 vs human seniors' 80s–90s) cap the score.
- **Cost efficiency: 55/100.** $5/$25 per 1M (blended ~$10/M at 3:1) sits between the ~$3/$15≈60 and ~$10/$50≈30 anchors; 10%-of-input cache reads ($0.50/M) and half-rate Batch API ($2.50/$12.50) are offsets, the 67% cut from Opus 4.1 ($15/$75) is context, and ~$1.5k per AA Index run (48M output tokens — among the most expensive to evaluate) plus the cheaper $4/$20 Opus 5.5 successor weigh on it.
- **Overall Score: 73/100.** (77+78+70+65+76)/5 = 73.2 → 73 — the November-2025 agentic SOTA (MCP Atlas 62.3% on the launch version, OSWorld 66.3%, SWE-bench Verified 80.9%, HLE 43.4% w/tools) whose 200K window, $5/$25 pricing, current-version agentic reads (MCP Atlas 42.3%, Toolathlon 43.5%) and 11-month age keep it below the October-2026 frontier. Revised 74→73 on the Tool revision.

---

## Update 2026-10-08 (6-day re-research)

Full Artificial Analysis row found (fills the AA-LCR and LiveCodeBench gaps; reasoning / non-reasoning):

- Intelligence Index **29.1 / 23.7**; Math Index 91.3 / 62.7; GPQA Diamond **86.6% / 81.0%**; HLE **30.1% / 13.2%**; IFBench 58.0% / 43.0%; τ²-Bench Telecom 89.5% / 86.3%; **AA-LCR 77.3% / 70.7%**; CritPt 4.6% / 0.3%; **LiveCodeBench 87.1% / 73.8%**; Terminal-Bench Hard 47.0% / 40.9%; MMLU-Pro 89.5% / 88.9%; AA-Omniscience Accuracy 46.6% / 40.9%, Non-Hallucination Rate 39.0% / 23.8%; AIME 2025 91.3% / 62.7%
- Vals AI (nonthinking): Aider 76.9%, Aider v2 61.3%, AnalystAgent v1 54.5%, GPQA 79.5%, IOI v1 23.6%, LiveCodeBench 75.0%, LegalBench 82.8%
- LiveBench **75.96%** (llmboard, rank 12/38, evaluated 2026-10-07); category snapshot (aiagentstore, 2026-10-08): Math 90.4, Language 81.3, Coding 79.7, Reasoning 80.1, Data analysis 74.4, Instruction following 62.5, Agentic coding 39.7 (equal-weight avg 72.6)
- Lineup context (2026-10-07): Anthropic launched Haiku 5.5 and halved Sonnet 5.5 cache reads; Opus 4.5 pricing unchanged (retirement still scheduled 2026-11-24)

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Revised: Tool 80→77, Overall 74→73** — Reasoning 78 / Context 70 / Multimodal 65 / Coding 76 / Cost 55 unchanged. This pass added AA's launch analysis (v4.1-era Index 70, #2 at launch), BenchLM's Qwen3.6-Plus comparison table (current-version agentic rows), Vellum-compiled tables, Every's internal benchmarks, eesel's safety read and the long-context leaderboards (yage.ai, Awesome Agents):

- **Current-version agentic rows (BenchLM, Qwen3.6-Plus table, 2026-10):** MCP Atlas **42.3%** (vs the system card's 62.3% on the launch version — a ~20-point version gap, conflict kept), Toolathlon **43.5%**, MCP-Tasks **71.8%**, WideResearch **76.4%**, Claw-Eval **59.6%**, QwenClawBench **52.3%**, τ³-bench **70.2%**, DeepPlanning **26.4%**, 2Repo **43.2%**, VITA-Bench **23.3%**, JobBench **32.3%**, Gert Labs **64.23%**; SWE-bench Multilingual **77.5%**; LongBench v2 **64.4%**; AI-Needle **74%**; SuperGPQA **70.6%**; MMLU-Redux **96.6%**; C-Eval **92.2%**.
- **AA launch analysis (2025-11-25):** Intelligence Index **70** (Thinking, #2 behind Gemini 3 Pro's 73; ties GPT-5.1 high) and **60** non-reasoning (most intelligent non-reasoning model); AA-Omniscience Index **10** (#2; accuracy 43%, hallucination 58%); CritPt **5%** (Thinking); 48M output tokens per Index run (vs Gemini 3 Pro 92M, GPT-5.1 81M, Grok 4 120M) but ~$1.5k per run — among the most expensive to evaluate.
- **Vellum-compiled launch table (via TheExpertRanking, 2026-09-23):** BrowseComp **67.8%** (fills the file's uncaptured figure); TB 2.0 **59.8%** (vs the system card's 59.3% — variant kept); WebArena **65.3%** (single-agent web navigation, via TheAIRankings); successor comparison — Opus 4.5 vs 4.6 vs 4.7 vs 4.8: SWE-bench Verified 80.9/80.8/87.6/88.6%, TB 2.0 59.8/65.4/69.4/n/a, ARC-AGI-2 37.6/68.8/n/a/n/a, GPQA 87.0/91.3/94.2/93.6%, context 200K/1M/1M/1M at $5/$25 throughout.
- **Every (2026-07-10, internal benchmarks):** senior engineer benchmark **63/100** (rewrite a vibe-coded codebase from first principles; GPT-5.5 62, Opus 4.7 ~33; human seniors score 80s–90s); writing benchmark **79.6/100** (vs GPT-5.5's 73 — the best writing model Every tested); noticeably stronger at extra-high reasoning than high/medium.
- **Safety (Vellum tests via eesel):** prompt-injection attacks succeeded only **4.7%** of the time (vs Gemini 3 Pro 12.5%, GPT-5.1 21.9%) — best-in-table at launch.
- **Long-context status (yage.ai / Awesome Agents, 2026):** Opus 4.5 remains 200K-only — the only Claude model without 1M support (Opus 4.6 added 200K+1M beta 2026-02-05, MRCR v2 8-needle 76% at 1M); no MRCR/RULER read for Opus 4.5 itself, so the 200K anchor stands. Vals nonthinking extras: MGSM **94.8%**, MMMU Pro **81.1%**, MMLU Pro **85.6%**, TaxEval v2 **74.3%**, TB 2.0 **58.4%**; llmboard re-listed τ²-Telecom 98.2% (88.57th pct) and OSWorld 66.30% (75th pct) on 2026-10-10; knowledge cutoff May 2025 (reliable).
- **Status:** superseded four times (Opus 4.6, 4.7, 4.8, now Opus 5.5 at $4/$20); still served with retirement no sooner than 2026-11-24; 200K window and 64K output cap now the family floor; BenchLM family rank: Opus 4.5 Thinking 54.19 (between Sonnet 4.6's 55.41 and Sonnet 4.5's 47.8); overall 54.14/100 (#74 of 889, non-reasoning variant, partial coverage).
- **Conflict note:** dataku's 2026-02-03 blog reads SWE-bench Verified 64.2% / GPQA 79.8% / MMLU 92.4% / Arena Elo 1298 — inconsistent with the system card (80.9%/87.0%) and every other source; treated as an unverified outlier and not adopted.
- Still open: an independent run of the current MCP Atlas version (only the Qwen3.6-Plus-table read exists), OSWorld 2.x, Terminal-Bench 2.1/4.0, DeepSWE, and MRCR/RULER at depth.
- Score impact: Tool 80→77 on the current-version MCP Atlas 42.3% and Toolathlon 43.5% reads (the launch table's 62.3% was the old MCP Atlas version); Overall 74→73 ((77+78+70+65+76)/5 = 73.2). Reasoning 78, Context 70, Multimodal 65, Coding 76 and Cost 55 stand — AA's v4.1-era Index 70, MMLU-Redux 96.6%, LiveCodeBench 87.1% and the Bash-only SWE-bench 74.4% read corroborate the existing levels.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (Anthropic Opus 4.5 launch + system card, Artificial Analysis, RankedAGI, BenchmarkList, DataCamp, BenchLM, Vellum, TheExpertRanking, TheAIRankings, Every, eesel, yage.ai, llmboard, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4_5.md`, using the same headings.
