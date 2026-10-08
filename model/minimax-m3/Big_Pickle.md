# MiniMax M3 — findings by Big Pickle

- Source: MiniMax (`minimax-m3`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's June 2026 open-weight flagship — a small-active-param multimodal MoE (428B total / ~23B active) with MiniMax Sparse Attention for economical 1M-token context, native image/video input, and agentic coding. Top open-source model on PostTrainBench; long-context leader (AA-LCR #1).
- **Provider / access:** MiniMax API / miniMax.io Token Plan, OpenRouter, Fireworks ($0.30/$1.20), DeepInfra, Together, Nebius, Novita, Azure AI Foundry, Volcengine Ark, plus a `-free` tier ($0, deal ended 2026-09-05). Weights on Hugging Face (MiniMax Community License, commercial use conditional, code MIT).
- **Release / knowledge:** 2026-05-31/06-01.
- **IDs:** `minimax-m3` / `minimaxai/minimax-m3` / `FW-MiniMax-M3` (12+ providers).
- **Context window:** 1,048,576 tokens; max output up to 512K on most providers (131K on some; 16K on NVIDIA).
- **Modalities:** text, image, video, PDF input; text output; thinking (default) and standard modes; tools, parallel function calling, structured/JSON output, prompt caching.
- **Pricing (as of 2026-09-20):** $0.30 in / $1.20 out per 1M, cache read $0.06 (MiniMax/fireworks). Cheapest frontier-tier multimodal class pricing.
- **Architecture:** Sparse MoE, ~428B total / 23B active; MiniMax Sparse Attention + hybrid; open weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **83.50%** (#15/58) (datalearner/AA).
- SWE-bench Pro: **59.0%** (#15/60, MiniMax-reported via llmreference; wheel-track agreed #14/46 ladder).
- MCP-Atlas / GDPval-AA: MiniMax-referenced but no clean public figure surfaced in my trail.
- PostTrainBench: **0.371** (#2/7 overall, **#1 open-source**) (llm-stats).
- Terminal-Bench 2.1: **66.0%** (MiniMax) vs **53.56%** (Vals #12) — harness-dependent.

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA via commandcode) / **81.31%** standard-mode (datalearner #132/270) / **0.90 #14** (cloudprice AA) — spread across evaluators and modes.
- IFBench: **0.8 (#3)**; HLE: **0.4 (#37)**; LiveBench Reasoning **74.5**; LiveBench Data Analysis **76.2** (cloudprice/benchgecko).
- SimpleBench (thinking): 45.80 (#56/92).

Coding:

- SWE-bench Verified: **80.5%** (llmreference, #14/81) / **75.00%** (Vals #17).
- Terminal-Bench 2.1 (Vals): 53.56% #12; Vibe Code Bench: **47.57%** — massive +35-point jump over MiniMax M2.7 (Vals).
- AA Coding Index: **58.6** (#33); LiveBench Coding 68.2, Agentic Coding 60.0 (benchgecko).
- Text Arena (Coding Elo 1527.75 #14); Chatbot Arena Overall 1448.2, Math 77.0 (benchgecko).
- SciCode (thinking): 45.37 (#10/15); TerminalBench Hard: 0.4 (#36) (AA).

Long context:

- **AA-LCR: 80.33% (#1/28)** (datalearner/AA); RAG and long-context-arena work verified; LCR 0.8 (#12, cloudprice AA); 512K max output on most providers.
- Context Arena (thinking): 51.15 (#87/126).

Multimodal:

- MMMU-Pro: **78.1** (LLM-Stats via llmreference); native text/image/video/PDF intake (cloudprice 4/5 input modalities); weak-to-absent audio support.

### Normalized scores (1–100)

- **Tool use: 79/100.** (Raised from 78 on 2026-10-08.) Gaps filled: **Claw-Eval 74.5%**, **MCP-Atlas 74.2%**, OSWorld-Verified 70.1%, τ²-bench 88.9%, GDPval-AA 1,245 (37.3% normalized); Terminal-Bench 2.1 still inconsistent across harnesses (66.0% MiniMax / 65.2% AA / 53.6% Vals); AA Agentic Index 30.8% and AA Tau3-Banking 15.3% are weak.
- **Reasoning: 83/100.** (Raised from 81 on 2026-10-08.) **HLE gap filled: 39.0%** (AA) — proper score replacing the old "0.4 #37" rank row; GPQA Diamond 92.9% (AA) / 92.7% (Vals) confirmed; **AA-IFBench 82.9%** (excellent instruction-following) and USAMO 2026 85.7% new; CritPt 3.7% and AA-Omniscience 1.4 remain weak.
- **Context window: 90/100.** **AA-LCR 83.0%** (up from 80.33) plus 1M window and 512K output is genuinely elite long-context territory; MLCR-AA 17.2% is the weaker mid-length companion; caveat: input >512K bills at 2x ($0.60/$2.40).
- **Multimodal: 82/100.** (Raised from 80 on 2026-10-08.) Native image/video/PDF now verified by **VideoMMMU 84.6%** and **Video-MME 85.4%** (new), OmniDocBench 1.5 91.6%, MMMU-Pro 78.1% confirmed (AA-MMMU-Pro 78.6%); OfficeQA Pro 45.1% mid; audio still absent.
- **Coding: 78/100.** SWE-bench Verified 80.5% confirmed (Vals 75.0%) and LiveCodeBench (Vals) **82.2%** new/strong; AA Coding Index 58.6 confirmed, VIBE V2 50.1%, AA-SciCode 47.1%, NL2Repo 42.1% — solid open-source coding, not frontier.
- **Cost efficiency: 93/100.** $0.30/$1.20 with $0.06 cache reads reconfirmed 2026-10-08 ("Permanent 50% off" list $0.60/$2.40) — and cheaper routes exist (OpenRouter $0.23/$0.96); plus 12+ hosting options and open weights — among the best capability-per-dollar in 2026.
- **Overall Score: 82/100.** Mean of the five quality dims (79+83+90+82+78)/5 = 82.4 → 82 (raised from 81). The best-value open multimodal workhorse of mid-2026: long-context champion at commodity prices.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 78 | 79 | +1 |
| Reasoning | 81 | 83 | +2 |
| Context window | 90 | 90 | — |
| Multimodal | 80 | 82 | +2 |
| Coding | 78 | 78 | — |
| Cost efficiency | 93 | 93 | — |
| **Overall** | **81** | **82** | **+1** |

New and corrected data (all found 2026-10-08, BenchLM updated 2026-10-07 unless noted):

- **GDPval-AA gap filled: 1,245 Elo / 37.3% normalized** (AA) plus GDPval rubrics 74.7% (model card) — old file had "no clean public figure"; the Elo lands mid-pack, not flagship.
- **MCP-Atlas gap filled: 74.2%**; **Claw-Eval gap filled: 74.5%** — both recurring gaps.
- **HLE gap properly filled: 39.0%** (AA) — replaces the ambiguous "0.4 (#37)" rank row; consistent with mid-frontier.
- New agentic rows: OSWorld-Verified 70.1%, τ²-bench 88.9% (AA), AA Agentic Index 30.8%, **AA Tau3-Banking 15.3%** (gap fill, weak), BankerToolBench 76.1%, Harvey LAB 88.4%, Terminal-Bench Hard 42.4%, AA Terminal-Bench 4.0 2.0%, OSWorld 2.0 4.6%, AA Briefcase 1,091, AutomationBench 21.3%, EnterpriseOps-Gym 32.1%, AnalystAgent 10.0%.
- New coding rows: LiveCodeBench (Vals) 82.2%, VIBE V2 50.1%, AA-SciCode 47.1%, NL2Repo 42.1%, SVG-Bench 63.7%, KernelBench Hard 28.8%; SWE-bench Verified 80.5% and SWE-bench Pro 59% confirmed.
- New reasoning rows: **AA-IFBench 82.9%**, GPQA Diamond (Vals) 92.7%, MMLU-Pro (Vals) 84.2%, USAMO 2026 85.7%, CritPt 3.7%, AA-Omniscience 1.4 (accuracy 16.7, hallucination 18.4), **MLCR-AA 17.2%** (mid-length context weaker than the LCR headline).
- New multimodal rows verifying the video claim: **VideoMMMU 84.6%**, **Video-MME (w/ subtitles) 85.4%**, OmniDocBench 1.5 91.6%, OfficeQA Pro 45.1%, Design Arena Website 1,263.
- **Artificial Analysis Intelligence Index: 29.2** on the current v4.3 scale (era re-base across all models).
- **Pricing recheck: unchanged/improved** — official MiniMax docs show $0.30/$1.20 as "Permanent 50% off" (list $0.60/$2.40), cache read $0.06; **>512K inputs bill 2x ($0.60/$2.40)** — a long-context premium the original report did not note; OpenRouter routes at $0.23/$0.96 (pricepertoken updated 2026-09-25).
- BenchLM: 54.39, #64/887 (56/623 covered); family: M3 well ahead of M2.7 (47.69) and M2.5 (50.29).

Gaps still open after re-run: MRCR/RULER (AA-LCR and MLCR only), HAL / CyberBench / APEX individual scores, Terminal-Bench 3.0, OSWorld-V rank context.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (datalearner, cloudprice/models.dev, llm-stats PostTrainBench, benchgecko, llmreference, vals.ai, commandcode, inferencex semianalysis, minimax.io); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.