# GPT-5.4 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-09→10-16): the BenchLM Nov 4 refresh
> (66.4, #25 of 1009) re-confirms the core rows and adds five genuinely new ones — LifeVal
> 73.0% (OpenAI), AA Tau3-Banking 39.6%, GDPval-AA Elo 1307, ExploitGym 6.0% and
> PostTrainBench 19.0% / ParseBench 62.2% — none score-moving. Successor pressure is now
> explicit (GPT-5.5/5.6/6.x all rank above it on the same board). All dimensions hold;
> Overall stays 87.

## Model card

- **Name:** GPT-5.4 (Thinking; Pro variant at `gpt-5.4-pro`)
- **Short description:** OpenAI's March 2026 flagship reasoning model unifying the Codex and GPT lines — native computer use that surpasses human performance on OSWorld, tool search that cuts agent token usage by 47%, and a 1M-token context window. Best for professional knowledge work and long-horizon agentic execution; now two-plus generations behind the GPT-6 line.
- **Provider / access:** OpenAI API (`gpt-5.4`, Responses and Chat Completions; Pro at `gpt-5.4-pro`); ChatGPT (Plus/Team/Pro), Codex with 1M-context experimental mode; Batch/Flex at 50%, Priority at 2x. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff not verified (GPT-5.4 Pro carries 2025-08-31).
- **IDs:** `gpt-5.4` (OpenAI API); `gpt-5.4-pro` (Pro variant).
- **Context window:** 1,050,000 total tokens (BenchLeader 1.1M; 272K standard window with 2x billing beyond; 922K input / 128K output per tracker listings).
- **Modalities:** text and image input (image detail levels original/high); text output; native computer use (Playwright code + screenshot-based mouse/keyboard); reasoning yes (xhigh default in evals); tool calls with tool search (lightweight tool list, on-demand definitions); JSON mode.
- **Pricing (as of 2026-11-05):** $2.50 / $15.00 per 1M in/out (blended $5.63/M); cached input $0.25 per 1M; Batch/Flex 50%, Priority 2x; requests over 272K context billed at 2x. Output speed 91 tok/s (AA-measured), first token 1.23s. Paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed; most token-efficient OpenAI reasoning model at release.

### Raw benchmarks found

> xhigh effort unless noted; BenchLM Nov 4 refresh re-verified; new rows flagged.

Agent / tool use:

- Terminal-Bench: **81.8%** #2 (tbench.ai leaderboard); Terminal-Bench 2.1 (AA): 78.3%; TB2.0 (Vals): 58.4%; Terminal-Bench Hard (AA): **57.6%** #11
- GDPval (wins or ties vs human professionals): **83.0%** (OpenAI); GDPval-AA v2.1: **37.3–37.4%** (#105) / **Elo 1307** (AA — NEW Elo row)
- OSWorld-Verified: **75.0%** (vs human baseline 72.4% — surpasses human performance)
- MCP Atlas (Scale AI SEAL): **70.6%** #19 (47% token reduction with tool search)
- APEX-Agents: **52.4%** #25 (Mercor); τ²-Bench Telecom (AA): 87.1%; **AA Tau3-Banking: 39.6%** (NEW); SkillsBench (Vals): 51.7%
- METR Time Horizons: **74.3%** #7; DeepSearchQA: **63.7%** #3; GBAEval 45.1%; Vending-Bench 2: 6144.2; Harvey's Legal Agent (Vals): **0.0%** (#53)
- **LifeVal: 73.0%** (OpenAI — NEW); Claw-Eval 60.3%; CyberGym 79.0% (OpenAI); τ²-Bench **98.9%** (OpenAI); Gert Labs 64.89%; JobBench 38.9%; MazeBench 0%; ApprenticeBench 11%; ResearchClawBench 15.3%
- **ExploitGym: 6.0%** (NEW — very weak); Toolathlon 54.6% (OpenAI)
- GDP.pdf / Gray Swan: no verified public score found for the base variant

Reasoning / knowledge:

- GPQA Diamond: **93.3%** #18 (Epoch, xhigh; AA 92.0%, Vals 91.7%; Pro: 94.4%)
- HLE: **36.2%** #8 (Scale/CAIS xhigh); AA 43.7%; OpenAI official table **52.1%** with tools / **39.8%** without
- ARC-AGI-2 (Verified): **74.0%** #47; ARC-AGI-1: **93.67%** #43; ARC-AGI-3: 0.2%
- CritPt: **23.4%** #46 (AA)
- FrontierMath: Tier 1–3 **78.6%** #17 / Tier 4 **49.0%** #24 (Epoch v2)
- AIME 2026: **99.2%** #3 (MathArena); HMMT February 2026: **97.7%** #2; AIME (Vals) 96.7% #5; OTIS 95.3–97.8%; MathArena Apex 54.2% #6; ProofBench 56.0%; LiveBench Math 94.2% #19
- AA-LCR: **82.0%** (post-re-scale); LMCA 52.0%; DTBench 94.4% #44
- OfficeQA 68.1% / OfficeQA Pro 53.2% (version difference, both noted); Frontier Science Research 33.0%; Kagi 63.8%
- SimpleQA Verified: **45.1%** #37; AA-Omniscience: non-hallucination **8.3%** #449 at xhigh (severe hallucination at high effort), hallucination-rate row 91.7%; MMLU-Pro (Vals): **87.5%**; MedQA (Vals): **96.1%** #5
- Artificial Analysis Intelligence Index: **39.0** (AA current composite — NEW vs the prior "no composite surfaced"; BenchLeader Index 64.2 ±2.5 #51/760)
- AA-GPQA Diamond 92.0%; AA-HLE 43.7%; AA-IFBench 73.9%

Coding:

- SWE-bench Verified: **76.9%** #8 (Epoch, high effort)
- SWE-Bench Pro: **59.1%** #2 (Scale AI SEAL, xhigh); LiveCodeBench: **84.1%** #39 (Vals); LiveCodeBench Pro **87.5%**
- SciCode: **56.6%** #30 (clears the 55% mark); DeepSWE v1.1: **51.8%** #46 (below the 74% threshold)
- Vibe Code Bench v1.1: **67.4%** (Vals); WeirdML: **77.7%** #24; GSO-Bench 31.4% #12; ALE-Bench: **1607** #13; MirrorCode 15.6% #7
- LMArena Coding 1521 #33; WebDev 1465 #64; LiveBench Coding 77.5% #36; Terminal-Bench 2.0 75.1%; React Native Evals 85.3%
- **PostTrainBench v1.1: 19.0%** (NEW)

Long context:

- MRCR: **86.0%** through 128K; **36.6%** at 512K–1M; Graphwalks BFS: **93.0%** at 0–128K; **21.4%** at 256K–1M; AA-LCR 82.0%; LMCA 52.0%

Multimodal / vision:

- MMMU Pro (no tools): **81.2%** / 82.1% w/ Python; Online-Mind2Web: **92.8%**; CharXiv **82.8%**; ScreenSpot Pro **85.4%**; MedXpertQA MM 77.1%; ERQA 65.4%; ZeroBench 41.0%; SimpleVQA 61.1%; AA-MMMU-Pro 78.4%; **ParseBench 62.23%** (Oct 28 snapshot — NEW); Design Arena Website 1218; BenchLeader Multimodal 62; CL-bench Life 21.7% #2

### Normalized scores (1–100)

- **Tool use: 90/100.** Unchanged — TB 81.8% (#2), BrowseComp 82.7%, GDPval 83.0%, OSWorld 75.0% (superhuman), the 47%-token tool search, MCP Atlas 70.6% #19 and METR 74.3% #7 hold the frontier band; the new Tau3 39.6% is mid and ExploitGym 6.0% weak — net neutral.
- **Reasoning: 93/100.** Unchanged — GPQA 93.3% (#18, corroborated), HLE 52.1% official, ARC-AGI-2 74.0%, AIME 2026 99.2% (#3), FrontierMath 78.6/49.0% (Epoch re-confirmed), plus the new LifeVal 73.0%; the 8.3% Omniscience non-hallucination at xhigh still docks it.
- **Context window: 94/100.** Unchanged — 1.05M tier; far-end degradation stands (MRCR 36.6%, Graphwalks 21.4% at 512K–1M) with AA-LCR 82.0%.
- **Multimodal: 72/100.** Unchanged — vision suite re-confirmed with ParseBench 62.2% added; no native audio/video input.
- **Coding: 85/100.** Unchanged — SWE-V 76.9% (#8), SWE-Pro 59.1% (#2), LCB 84.1%, SciCode 56.6%, Vibe 67.4% and the new PostTrainBench 19.0% hold the mid-frontier band; DeepSWE 51.8% caps it.
- **Cost efficiency: 72/100.** Unchanged — $2.50/$15.00 (blended $5.63/M) between the ~88 and ~60 anchors; Batch/Flex 50% and the 47% tool-search token reduction are partial offsets.
- **Overall Score: 87/100.** (90 + 93 + 94 + 72 + 85) / 5 = 434/5 = 86.8 → 87 (unchanged). Best-fit: still a top-tier professional knowledge-work and computer-use agent — but the successor board (GPT-5.5 → 6.1) now ranks every newer OpenAI model above it, so it's a pinned-integration or price-driven pick.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetches (web-search quota exhausted mid-pass): BenchLM GPT-5.4 page fetched 2026-11-05 (Nov 4 data) — core rows re-confirmed and five new rows added (LifeVal 73.0%, AA Tau3 39.6%, GDPval Elo 1307, ExploitGym 6.0%, PostTrainBench 19.0%, ParseBench 62.2%); AA Intelligence Index 39.0 now cited as a measured composite; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.
