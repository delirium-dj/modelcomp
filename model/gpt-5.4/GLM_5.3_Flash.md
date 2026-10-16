# GPT-5.4 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (Thinking; Pro variant at `gpt-5.4-pro`)
- **Short description:** OpenAI's March 2026 flagship reasoning model unifying the Codex and GPT lines — native computer use that surpasses human performance on OSWorld, tool search that cuts agent token usage by 47%, and a 1M-token context window. Best for professional knowledge work and long-horizon agentic execution.
- **Provider / access:** OpenAI API (`gpt-5.4`, Responses and Chat Completions; Pro at `gpt-5.4-pro`); ChatGPT (Plus/Team/Pro), Codex with 1M-context experimental mode; Batch/Flex at 50%, Priority at 2x. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff not verified.
- **IDs:** `gpt-5.4` (OpenAI API); `gpt-5.4-pro` (Pro variant).
- **Context window:** 1,050,000 total tokens (BenchLeader 1.1M; 272K standard window with 2x billing beyond; 922K input / 128K output per tracker listings — verified via OpenAI launch coverage, llm-stats and BenchLeader).
- **Modalities:** text and image input (image detail levels original/high); text output; native computer use (Playwright code + screenshot-based mouse/keyboard); reasoning yes (xhigh default in evals); tool calls with tool search (lightweight tool list, on-demand definitions); JSON mode.
- **Pricing (as of 2026-10-09):** $2.50 / $15.00 per 1M in/out (blended $5.63/M, BenchLeader); cached input $0.25 per 1M; Batch/Flex 50%, Priority 2x; requests over 272K context billed at 2x. Output speed 91 tok/s (AA-measured), first token 1.23s. Paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed; most token-efficient OpenAI reasoning model at release.

### Raw benchmarks found

> xhigh effort unless noted; effort sweep via BenchLeader/AA (data as of 2026-10-09). Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench: **81.8%** #2 (tbench.ai leaderboard via BenchLeader — fills the strongest terminal row); Terminal-Bench 2.1 (AA): 78.3%; TB2.0 (Vals): 58.4%; Terminal-Bench Hard (AA): **57.6%** #11
- GDPval (wins or ties vs human professionals): **83.0%** (OpenAI launch reporting); GDPval-AA v2.1: **37.4%** #105 (AA-normalized)
- OSWorld-Verified (desktop): **75.0%** (vs human baseline 72.4% — surpasses human performance)
- MCP Atlas (Scale AI SEAL): **70.6%** #19 (updates the OpenAI-table reading of 67.2%; 47% token reduction with tool search)
- APEX-Agents: **52.4%** #25 (Mercor); τ²-Bench Telecom (AA): 87.1%; SkillsBench (Vals): 51.7%
- METR Time Horizons: **74.3%** #7 (METR via BenchLeader — new measured long-horizon evidence)
- DeepSearchQA (Kaggle/Google): **63.7%** #3; GBAEval: 45.1%; Vending-Bench 2: 6144.2; Harvey's Legal Agent (Vals): **0.0%** (#53)
- Toolathlon / Claw-Eval / SWE Atlas (OpenAI rows): no verified public score found for the base variant beyond the above
- Added 2026-10-16: Toolathlon **54.6%** (OpenAI, via BenchLM); Claw-Eval **60.3%** (leaderboard); CyberGym **79.0%** (OpenAI); τ²-Bench **98.9%** (OpenAI); Gert Labs **64.89%**; JobBench **38.9%**; MazeBench ASCII **0%**; AA Coding Index **71.0%**; React Native Evals **85.3%**; AA Intelligence Index **39.0** (current composite)

Reasoning / knowledge:

- GPQA Diamond: **93.3%** #18 (Epoch, xhigh; AA 92.0% #41, Vals 91.7% — fills the missing independent rows; Pro: 94.4%)
- HLE: **36.2%** #8 (Scale AI / CAIS via BenchLeader, xhigh); AA 43.7% #51; OpenAI official comparison table **52.1%** with tools / **39.8%** without (added 2026-10-16 — strongest reading)
- ARC-AGI-2 (Verified): **74.0%** #47 (ARC Prize, xhigh — corroborates the earlier 73.3%); ARC-AGI-1: **93.7%** #43; ARC-AGI-3: 0.2% (high)
- CritPt: **23.4%** #46 (AA, xhigh — fills the previously-missing CritPt)
- FrontierMath Tier 1-3: **78.6%** #17 (Epoch v2 — updates the announcement's 47.6%); Tier 4: **49.0%** #24 (updates 27.1%)
- AIME 2026: **99.2%** #3 (MathArena); HMMT February 2026: **97.7%** #2; AIME (Vals): 96.7% #5; OTIS Mock AIME: 95.3–97.8%; MathArena Apex: 54.2% #6; ProofBench: 56.0%; LiveBench Math: 94.2% #19
- AA-LCR: **52.0%** #43 (AA reading as of 2026-10-09) — CONFLICT: the 2026-10-15 refresh reads **82.0%** (AA current); treated as a re-scale/update, the newer value used; LMCA: **52.0%** #43 (Epoch); DTBench: 94.4% #44
- OfficeQA: **68.1%** (vs GPT-5.2's 63.1%); Frontier Science Research: **33.0%**; Kagi LLM Benchmark: 63.8%
- SimpleQA Verified: **45.1%** #37 (Epoch); AA-Omniscience: non-hallucination **8.3%** #449 at xhigh (severe hallucination at high effort); MMLU-Pro (Vals): **87.5%**; MedQA (Vals): **96.1%** #5
- Artificial Analysis Intelligence Index: no verified public composite surfaced (BenchLeader Index **64.2 ±2.5**, #51 of 760, xhigh best — Reasoning 70, Coding 65, Knowledge 60)

Coding:

- SWE-bench Verified: **76.9%** #8 (Epoch, high effort — fills the previously-missing SWE-V row)
- SWE-Bench Pro: **59.1%** #2 (Scale AI SEAL, xhigh — corroborates the OpenAI-table 57.7%)
- LiveCodeBench: **84.1%** #39 (Vals — fills the previously-missing LCB)
- SciCode: **56.6%** #30 (SciCode via Epoch — fills the previously-missing SciCode; clears the 55%+ frontier mark)
- DeepSWE v1.1: **51.8%** #46 (Epoch — fills the previously-missing DeepSWE; below the 74%+ frontier threshold)
- Vibe Code Bench v1.1: **67.4%** (Vals — fills the previously-missing VCB)
- WeirdML: **77.7%** #24; GSO-Bench: 31.4% #12; ALE-Bench: **1607** #13; MirrorCode: 15.6% #7
- LMArena Coding: 1521 #33; LMArena WebDev: 1465 #64; LiveBench Coding: 77.5% #36
- Terminal-Bench 2.0: **75.1%** (OpenAI table; below GPT-5.3-Codex's 77.3%)

Long context:

- MRCR: **86.0%** through 128K; **36.6%** at 512K–1M (OpenAI reporting); Graphwalks BFS: **93.0%** at 0–128K; **21.4%** at 256K–1M; AA-LCR 52.0%→**82.0%** (2026-10-15 refresh, see conflict note); LMCA 52.0%

Multimodal / vision:

- MMMU Pro (no tools): **81.2%** (OpenAI table); Online-Mind2Web: **92.8%** (OpenAI table); BenchLeader Multimodal 62; CL-bench Life: 21.7% #2 (xhigh)
- Added 2026-10-16: CharXiv **82.8%**; ScreenSpot Pro **85.4%**; MedXpertQA MM **77.1%**; ERQA **65.4%**; ZeroBench **41.0%**; SimpleVQA **61.1%**; MMMU-Pro w/ Python **82.1%**; OfficeQA Pro **53.2%** (conflicts with the 68.1% reading — version difference, both noted); LiveCodeBench Pro **87.5%** (coding-adjacent, Meta chart)

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 81.8% (#2), BrowseComp 82.7% (Pro 89.3% SOTA), GDPval 83.0%, OSWorld 75.0% surpassing the human baseline and the 47%-token-reduction tool search all clear the frontier references; MCP Atlas 70.6% #19 and METR 74.3% #7 corroborate; Terminal-Bench 2.0 75.1% keeps it under 95.
- **Reasoning: 93/100.** CHANGED from 92 — GPQA 93.3% (#18, now independently corroborated; official table 92.8%), the newly surfaced official HLE 52.1% (up from the 36.2% Scale reading), ARC-AGI-2 74.0%, AIME 2026 99.2% (#3) and the confirmed FrontierMath 78.6%/49.0% exceed the frontier refs; the severe AA-Omniscience non-hallucination 8.3% at xhigh docks it.
- **Context window: 94/100.** CHANGED from 92 — 1.05M tokens (≥1M tier); the far-end degradation stands (MRCR 36.6%, Graphwalks 21.4% at 512K–1M) but the AA-LCR conflict resolves upward (52.0% → 82.0% on the 2026-10-15 refresh), raising the tier.
- **Multimodal: 72/100.** CHANGED from 68 — text + image input with strong measured vision (MMMU Pro 81.2%, CharXiv 82.8%, ScreenSpot Pro 85.4%, MedXpertQA MM 77.1%, Online-Mind2Web 92.8%) and screenshot-driven computer use; no native audio/video or PDF input keeps it out of the 75–90 band's top.
- **Coding: 85/100.** Now with four filled rows: SWE-V 76.9% (#8), SWE-Pro 59.1% (#2), LCB 84.1%, SciCode 56.6% (clears the 55%+ mark); DeepSWE 51.8% is below the 74%+ frontier threshold and Vibe 67.4% mid — solid mid-frontier.
- **Cost efficiency: 72/100.** $2.50/$15.00 per 1M (blended $5.63/M) sits between the $1.25/$4.25 = ~88 and $3/$15 = ~60 methodology references, near the lower-middle; Batch/Flex at 50% and 47% lower tool-search token usage are partial offsets.
- **Overall Score: 87/100.** CHANGED from 85 — mean of the five quality dims (90 + 93 + 94 + 72 + 85) / 5 = 434/5 = 86.8 → 87. Best-fit: the strongest general-purpose choice for professional knowledge work, computer-use agents and long-horizon tool ecosystems where output quality trumps token price.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (BenchLeader full effort-sweep tables data as of 2026-10-09, OpenAI launch coverage, llm-stats, Vals AI cross-checked; re-researched 2026-10-16: official HLE 52.1%, AA-LCR re-scale 52.0→82.0, vision suite added — Reasoning 92→93, Context 92→94, Multimodal 68→72, Overall 85→87); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing SWE-V 76.9% #8, LCB 84.1%, SciCode 56.6% #30, DeepSWE 51.8%, HLE 36.2% #8, TB 81.8% #2, CritPt 23.4%, AIME 2026 99.2%; updates FrontierMath 47.6→78.6 / 27.1→49.0 — Coding 82→85, Overall 85 (recalculated with filled rows).
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.
