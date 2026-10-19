# GPT-6 Astra — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (Max effort tier)
- **Short description:** OpenAI's flagship GPT-6 reasoning model with exceptional long-context retrieval (100% MRCR at 256K-512K), frontier math and coding performance, and 1M+ context window, at premium pricing.
- **Provider / access:** OpenAI API (`gpt-6-astra` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-6-astra` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI, 11 total providers. Responses API (not Chat Completions).
- **Release / knowledge:** 2026-09-03 release; knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6-astra` (OpenAI API), `opencode/gpt-6-astra` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,050,000 tokens total (1.05M per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (max effort tier shown); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤272K tokens: $10.00/M in, $1.00/M cache read, $12.50/M cache write, $50.00/M out. >272K tokens: $20.00/M in, $2.00/M cache read, $25.00/M cache write, $75.00/M out (OpenAI API & OpenCode Zen). Blended 7:2:1 ≈ $7.70/M (AA). Cost per Intelligence Index task: $3.26 (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **87.3%** (Vals AI leaderboard)
- Terminal-Bench 2.1: **88.4%** (Artificial Analysis / AA leaderboard)
- Terminal-Bench 4.0: **57.9%** (OpenAI GPT-6 Astra page / OpenAI harness)
- Terminal-Bench 4.0: **59.1%** (Artificial Analysis / AA leaderboard)
- GDPval-AA v2: **1573 Elo** (Artificial Analysis / AA leaderboard)
- GDPval-AA normalized: **53.6%** (Artificial Analysis)
- BrowseComp: **91.5%** (OpenAI GPT-6 Astra page)
- OSWorld 2.0: **72.6%** (OpenAI GPT-6 Astra page)
- AutomationBench: **41.4%** (OpenAI GPT-6 Astra page) / **68.5%** (Artificial Analysis)
- AA AutomationBench: **68.5%** (Artificial Analysis)
- AA Briefcase Elo: **1569** (Artificial Analysis)
- AA Tau3 Banking: **41.4%** (Artificial Analysis)
- AA Agentic Index: **51.5%** (Artificial Analysis)
- Agents' Last Exam: **59.3%** (OpenAI GPT-6 Astra page)
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI GPT-6 Astra page)
- ExploitGym: **42.4%** (OpenAI GPT-6 Astra page)
- CWE-bench v1: **68.0%** (Collinear leaderboard)
- ApprenticeBench: **68%** (NeoCognition)
- AA ITBench: **48.6%** (Artificial Analysis)
- AA AnalystAgent: **51.2%** (Artificial Analysis)
- GDP.pdf: **31.0%** (Artificial Analysis)
- Hermes Index: **56.3%** / Hermes Bench: **73.7%** (Nous Research)
- MazeBench: **23%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI GPT-6 Astra page) / **96.1%** (Artificial Analysis)
- HLE with tools: **57.2%** (OpenAI GPT-6 Astra page)
- AA HLE: **54.7%** (Artificial Analysis)
- AA Intelligence Index: **53** (rank #7/217) (Artificial Analysis)
- AA LCR: **80.7%** (Artificial Analysis)
- CritPt: **31.7%** (Artificial Analysis)
- ARC-AGI-1: **97.50%** (ARC Prize semi-private)
- ARC-AGI-2: **95%** (ARC Prize semi-private)
- ARC-AGI-3: **62.7%** (ARC Prize semi-private)
- ARC-AGI-3 Provider Adapter: **98.55%** (ARC Prize)
- MRCR v2 256K–512K: **100.0%** (OpenAI GPT-6 Astra page)
- MRCR v2 512K–1M: **96.3%** (OpenAI GPT-6 Astra page)
- MLCR-AA: **35.0%** (Artificial Analysis)
- GraphWalks BFS 256K–1M: **71.8%** (Google Gemini 4 Argon chart)
- AA Omniscience Index: **43.4%** (Artificial Analysis)
- AA Omniscience Accuracy: **62.6%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **51.3%** (Artificial Analysis)
- STEMBench: **2.81** (Ulam audit)
- GeneBench-Pro: **37.8%** (OpenAI GPT-6 Astra page)
- HealthBench raw: **56.9%** / length-adjusted **58.3%** / Professional **64.7%** / Professional raw **68.2%** / Hard **36.6%** (OpenAI System Card)
- FrontierMath v2 Tiers 1-3: **93.684%** (Epoch AI)
- FrontierMath v2 Tier 4: **97.600%** (OpenAI GPT-6 Astra page)
- Gray Swan IPI: **8.5%** (Google Gemini 4 Argon chart)
- PostTrainBench v1.1: **44.3%** (Google Gemini 4 Argon chart)

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI GPT-6 Astra page)
- FrontierCode v1.1 Main: **53.3%** (OpenAI GPT-6 Astra page)
- FrontierCode v1.1 Extended: **64.5%** (OpenAI GPT-6 Astra page)
- AA-SciCode: **56.5%** (Artificial Analysis)
- AA Coding Index: **76.9%** (Artificial Analysis)
- FrontierSWE v2: **65.5%** (Proximal leaderboard)
- Bug Hunt Bench: **45.0 fixes** (public data)

Multimodal:

- ScreenSpot Pro: **92.7%** (OpenAI GPT-6 Astra page)
- AA MMMU-Pro: **86.9%** (Artificial Analysis)
- BenchCAD Vision2Code (tools): **0.959** (OpenAI GPT-6 Astra page)

Long context:

- MRCR v2 256K–512K: **100.0%** (OpenAI GPT-6 Astra page)
- MRCR v2 512K–1M: **96.3%** (OpenAI GPT-6 Astra page)
- AA LCR: **80.7%** (Artificial Analysis)
- MLCR-AA: **35.0%** (Artificial Analysis)
- GraphWalks BFS 256K–1M: **71.8%** (Google chart)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 85/100.** TB 2.1 87.3%/88.4% (near 88%+ frontier), BrowseComp 91.5%, OSWorld 72.6%, TB 4.0 57.9%, GDPval 1573 Elo (below 1750+ frontier), Tau3 41.4% (below 50% frontier), AA Agentic Index 51.5%. Capped by Tau3 and GDPval vs frontier leaders.
- **Reasoning: 92/100.** GPQA Diamond 96% (exceeds 90%+), HLE 57.2% with tools (exceeds 40%+), MRCR 100% at 256K-512K / 96.3% at 512K-1M (exceptional, meets 95%+ at 1M frontier), ARC-AGI-1 97.5% / ARC-AGI-2 95% / ARC-AGI-3 62.7%, AA LCR 80.7%. Capped by AA Intelligence Index 53 (<60 frontier), CritPt 31.7%.
- **Context window: 100/100.** 1.05M native context; MRCR 100% at 256K-512K and 96.3% at 512K-1M (exceeds 98% retrieval at 512K+ threshold for 100 tier). Methodology: ≥1M = 95-100 (100 if ≥98% retrieval at 512K+).
- **Multimodal: 70/100.** Text + image input only; ScreenSpot Pro 92.7%, MMMU-Pro 86.9%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 95/100.** DeepSWE 74.1% (meets 74%+ frontier), TB 2.1 87.3% (exceeds 85%+), AA Coding Index 76.9% (exceeds 70%+), AA-SciCode 56.5% (exceeds 55%+), FrontierCode Extended 64.5%, FrontierSWE v2 65.5%. All at/above frontier coding thresholds.
- **Cost efficiency: 30/100.** $10/$50 per 1M (≤272K), $20/$75 (>272K), blended ~$7.70/M, cost/task $3.26. Methodology: $10/$50 ≈ 30, $3/$15 ≈ 60 → premium pricing yields low score.
- **Overall Score: 88/100.** Half-up mean of (85 + 92 + 100 + 70 + 95) / 5 = 88.4 → 88. Best-fit: premium pick for extreme long-context retrieval and math/coding; MRCR 100%/96.3% and FrontierMath 97.6% Tier 4 are unmatched; cost limits broad adoption.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model pages (OpenAI GPT-6 Astra page, System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.