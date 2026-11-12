# Grok 4.5 — findings by Qwen 4 Max

- Source: Vendor (xAI / SpaceXSI) + independent trackers; subject slug `grok-4.5`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Grok 4.5 (`grok-4.5`)
- **Short description:** xAI's (SpaceXSI-branded) coding/agentic/knowledge-work flagship of July 2026 — "our strongest model ever," **trained alongside Cursor**; tens of thousands of NVIDIA GB300 GPUs, highly asynchronous RL over hundreds of thousands of multi-step SWE/technical tasks; marketed on token efficiency (2× comparable models, half the steps) and 80 TPS "faster than flash models."
- **Provider/access:** xAI API (`grok-4.5`, Responses API), Grok Build (default model at launch; Excel/PowerPoint/Word/Outlook plugins), Cursor (all plans), console; limited-time free usage in Grok Build/Cursor at launch. OpenCode lists $2/$6 cache $0.30/$0.60.
- **Release/knowledge:** Launch post dated **July 16 2026** (BenchLM blog says July 8; datanorth July 13 — labelled conflict; AA "July 2026"). Knowledge cutoff **February 2026** (llm-stats/datacamp). **Deprecated — AA banner names Grok 4.6** (Aug 12 2026) as successor; 4.6 itself deprecated Sept 21 → 4.7.
- **IDs:** `grok-4.5`; distinct from Grok 4.6/4.7/4.3/4.20/4.1-Fast/4-Fast.
- **Context window:** **500,000 tokens** (AA/datanorth/datacamp). No long-context surcharge tier listed for 4.5 (unlike 4.6/4.7's >200K 2× tier).
- **Modalities:** Text + image in; text out (AA). No audio/video.
- **Pricing (as of 2026-11-12, per 1M tokens):** **$2.00 in / $6.00 out, 85% cache discount** (AA; cached read $0.30, write $0.60 per OpenCode). Vendor: ~2× token efficiency — **15,954 output tokens per SWE-Pro task vs Opus 4.8 max 67,020 (4.2× fewer)**.
- **Architecture:** Proprietary; parameters undisclosed. Reasoning effort **low / medium / high (default)** (datacamp; AA tracks High). Trained with Cursor collaboration; heavy data filtering/dedup/domain selection.

### Raw benchmarks found

Vendor-reported (launch post charts; competitor figures from their system cards/leaderboards):
- DeepSWE 1.0 (Datacurve eval, AA-run, provider harnesses): **62.0%** (Fable max 66.1, GPT-5.5 xhigh 64.31, Opus 4.8 max 55.75, Opus 4.7 max 40.12).
- DeepSWE 1.1 (Datacurve mini-swe-agent): **53%** (Fable 70, GPT-5.5 67, Opus 4.8 59, GLM 5.2 44).
- SWE Marathon pass@1: **29.0%** (Opus 4.8 max 26, Fable max 24, Opus 4.7 max 16) — best in chart.
- Terminal-Bench 2.1: **83.3%** (Fable max 84.3, GPT-5.5 xhigh 83.4, Opus 4.8/4.7 max 78.9).
- SWE-bench Pro: **64.7%** (Fable max 80.4, Opus 4.8 max 69.2, Opus 4.7 max 64.3, GLM 5.2 62.1, GPT-5.5 xhigh 58.6).
- One-prompt app demos (three.js solar system etc.); Grok Build office demos (multi-sheet Excel with web research, native-shape PowerPoint diagrams).

Independent runs:
- Artificial Analysis (High; deprecated — index N/A live, historical carried): **Intelligence Index 38.8 (historical)**, GPQA-D **93.1**, AA-HLE 42.7, LCR **79.3**, CritPt 15.4, Omniscience net +25.3 (accuracy 51.6, **hallucination 54.1** — high), GDPval-AA **1,430 / normalized 44.2%**, Agentic Index 42.1, EnterpriseOps 40.8, τ³-Banking 42.1, TB2.1-AA **81.6**, SciCode 55.0, Coding Index 72.5, **MMMU-Pro 80.4**. Performance: **68 tok/s, TTFT 7.92s** (fast). (Grok 4.6 launch chart showed "Grok 4.5 High 56" on the older launch-era AA index — version-labelled, not comparable to 38.8.)
- Vals AI: SWE-bench **86.6**, TB2.1 **67.8**, LCB **87.4**, GPQA 92.9, MMLU-Pro 89.2.
- Cursor: SWE Multilingual **78%**; CursorBench 3.2 **66.7** (Cursor-run).
- ARC Prize (semi-private): ARC-1 **85.67**, ARC-2 **52.6**, ARC-3 0.3. Epoch FM v2: T1-3 **57.193** / T4 **24.390**. TB4.1 **12.4**, TB3.0 15.7 (weak new-terminal generations). VulcanBench v3 89.9; PostTrainBench v1.1 23.4; Design Arena Website 1,276.
- BenchLM aggregate: **62.84/100, #40 of 1026** (44/815 rows, conservative).

### Normalized scores (1–100)

- **Tool use: 78/100.** SWE Marathon 29.0 (best in vendor chart), TB2.1-AA 81.6, τ³-Banking 42.1, EnterpriseOps 40.8, Agentic Index 42.1; capped by GDPval normalized **44.2%** (mid-pack, 1,430 Elo) and no BrowseComp/OSWorld/Toolathlon/MCP-Atlas/Briefcase rows — office-agent demos are qualitative, not benchmarked.
- **Reasoning: 82/100.** GPQA **93.1** (AA; Vals 92.9 confirms — top tier), MMLU-Pro 89.2, AA-HLE 42.7, FM v2 57.2/24.4, ARC-1 85.67; capped by ARC-2 **52.6**, ARC-3 0.3, CritPt 15.4, and **54.1% hallucination** (Omniscience +25.3 — materially worse than 4.6's 34.3%/+30.5).
- **Context window: 78/100.** 500K with LCR **79.3** and 85% cache; no long-context surcharge tier listed (unlike 4.6/4.7); half the 1M frontier class; no MRCR depth evidence; 68 tok/s / 7.92s TTFT keeps long sessions practical.
- **Multimodal: 76/100.** Image input with a real vision row — **MMMU-Pro 80.4** (AA) — plus Design Arena 1,276 Elo and visual app-building demos; no CharXiv/ScreenSpot/Video-MME/audio rows; single-benchmark evidence caps the tier.
- **Coding: 84/100.** SWE-Pro **64.7** (beats GPT-5.5/Opus 4.7), TB2.1 **83.3** vendor / 81.6 AA (Vals 67.8 — harness spread labelled), Vals SWE 86.6, LCB 87.4, DeepSWE 1.0 62.0 / 1.1 53, SWE Marathon 29.0, CursorBench 3.2 66.7, SWE Multilingual 78, VulcanBench 89.9, 4.2× token efficiency; capped by TB4.1 **12.4** / TB3.0 15.7 and PostTrainBench 23.4.
- **Cost efficiency: 84/100.** $2/$6 with **85% cache** ($0.30 read), **7.92s TTFT** (fastest of the Grok 4.x line), 68–80 tok/s, and 2× token efficiency (15,954 tok/SWE-Pro task) — strong intelligence per dollar; deprecated status and no free tier beyond launch promo deduct.
- **Overall Score: 79.6/100.** Mean of the five quality dimensions (Cost excluded): (78+82+78+76+84)/5 = 79.6. A Cursor-co-trained coding specialist with frontier GPQA and excellent token economy — above Qwen3.7-Plus (79.4) on coding, below Grok 4.6 (80.6) on agentic breadth/knowledge reliability and 4.7 (80.0) on terminal generations; two deprecations behind the current flagship.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (xAI launch post, Artificial Analysis live deprecation page, BenchLM, Vals/Cursor/ARC Prize/Epoch/tbench/VulcanBench/PostTrainBench via trackers, llm-stats/datanorth/datacamp snippets); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: release date (Jul 16 official post vs Jul 8 BenchLM blog vs Jul 13 datanorth); AA index (N/A live deprecated vs 38.8 historical vs "56" launch-era chart on Grok 4.6's post — different index versions); TB2.1 (83.3 vendor vs 81.6 AA vs 67.8 Vals — harness spread); DeepSWE (62.0 v1.0 AA-run vs 53 v1.1 Datacurve — different versions/harnesses); GPQA (93.1 AA vs 92.9 Vals); cache discount (85% AA/OpenCode $0.30 vs 4.6/4.7's 75%/$0.50 — different models); SWE-Pro 64.7 vendor vs Vals SWE-bench 86.6 (different benchmarks).
- Reference URLs:
  - [Introducing Grok 4.5 — xAI news](https://x.ai/news/grok-4-5)
  - [Grok 4.5 (High) — Artificial Analysis](https://artificialanalysis.ai/models/grok-4-5)
  - [Grok 4.5 Benchmark Scores — BenchLM](https://benchlm.ai/models/grok-4-5)
  - [Grok 4.5 — Vals AI](https://www.vals.ai/models/grok_grok-4.5)
  - [Grok 4.5 — Cursor blog](https://cursor.com/en-US/blog/grok-4-5)
  - [Grok 4.5 — ARC Prize results](https://arcprize.org/results/xai-grok-4-5)
  - [Grok 4.5 — llm-stats](https://llm-stats.com/models/grok-4.5)
  - [xAI releases Grok 4.5 — DataNorth](https://datanorth.ai/news/xai-releases-grok-4-5-coding-focused-model)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.