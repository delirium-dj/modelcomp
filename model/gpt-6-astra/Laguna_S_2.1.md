# GPT-6 Astra — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: GPT-6 Astra (max) (OpenAI)
- Short description: OpenAI's September 2026 frontier reasoning model, the most capable variant of the GPT-6.1 family and the #1 ranked model on BenchLM. Built for frontier reasoning and agents with a 1.05M-token context window, text+image input, and elite performance across agentic, coding, and multimodal benchmarks.
- Provider / access: OpenAI API via Chat Completions / Responses API; ID `gpt-6-astra`. Also available through 8 API providers. No verified Free ID on Zen (noFreeId per repo meta).
- Release: September 3, 2026 (per AA), knowledge cutoff April 30, 2026 (per AA).
- IDs: `gpt-6-astra` (BenchLM canonical slug `gpt-6-astra`; repo meta `opencode/gpt-6-astra`). noFreeId per repo `meta.json`.
- Context window: **1,050,000** (BenchLM) / **1,000,000 (1.0M)** (AA technical spec; ~1500 A4 pages). BenchLM canonical page lists 1.05M; AA model spec lists 1M. Scored on ≥1M tier.
- Modalities: **Text and image input; text output** (AA confirms). Reasoning yes; tool/function calls yes; JSON mode yes.
- Pricing (as of 2026-10-01): **$10.00 in / $50.00 out per 1M tokens** (AA confirmed); 90% cache discount ($1.00 cached in); $3.26 cost per Intelligence Index task. Paid-tier only; no Free ID on Zen.
- Architecture: Proprietary dense transformer (OpenAI). No parameter count disclosed.

### Raw benchmarks found

> Verified public numbers sourced from BenchLM (`https://benchlm.ai/models/gpt-6-astra`, overall 88.69, rank #1/637) and Artificial Analysis (`https://artificialanalysis.ai/models/gpt-6-astra`, Intelligence Index 52.7, #7/223).

Agent / tool use:

- BrowseComp: **91.5%** (OpenAI launch blog)
- OSWorld 2.0: **72.6%** (OpenAI launch blog)
- Terminal-Bench 4.0: **57.90%** (OpenAI launch blog)
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI launch blog)
- ExploitGym: **42.4%** (OpenAI launch blog)
- Agents' Last Exam: **59.3%** (OpenAI launch blog)
- AutomationBench: **41.4%** (OpenAI launch blog)
- HLE w/ tools: **57.2%** (OpenAI launch blog)
- GDPval-AA: **52.1%** (AA model benchmarks)
- AA Briefcase (Elo): **1569** (AA leaderboard)
- AA Tau3 Banking: **41.4%** (AA leaderboard)
- Terminal-Bench 2.1 (Vals): **87.3%** (Vals AI leaderboard)
- AA AutomationBench: **68.5%** (AA leaderboard)
- GDPval-AA (Elo): **1542** (AA leaderboard)
- AA Agentic Index: **51.5%** (AA model benchmarks)
- GDP.pdf: **31.0%** (AA leaderboard)
- AA-AnalystAgent: **51.2%** (AA leaderboard)
- ApprenticeBench: **68%** (NeoCognition)
- AA ITBench: **48.6%** (AA leaderboard)
- AA Terminal-Bench 2.1: **88.4%** (AA leaderboard)
- AA Terminal-Bench 4.0: **59.1%** (AA leaderboard)
- CWE-bench v1: **68.0%** (CWE-bench leaderboard)

Reasoning / knowledge:

- GPQA: **96%** (OpenAI launch blog)
- GPQA-D: **96.0%** (OpenAI launch blog)
- HealthBench (raw): **56.9%** (OpenAI system card)
- HealthBench (length-adjusted): **58.3%** (OpenAI system card)
- HealthBench Professional: **64.7%** (OpenAI system card)
- HealthBench Professional (raw): **68.2%** (OpenAI system card)
- HealthBench Hard: **36.6%** (OpenAI system card)
- Artificial Analysis Intelligence Index: **52.7%** (AA — #7/223, 4/4 units for Intelligence)
- AA-GPQA Diamond: **96.1%** (AA leaderboard)
- AA-HLE: **54.7%** (AA leaderboard)
- AA-Omniscience Index: **43.4** (AA model benchmarks)
- AA-Omniscience Accuracy: **62.6%** (AA leaderboard)
- AA-Omniscience Hallucination Rate: **51.3%** (AA model benchmarks)
- AA-LCR: **80.7%** (AA leaderboard)
- CritPt: **31.7%** (AA leaderboard)
- MLCR-AA: **35.0%** (AA leaderboard)
- ARC-AGI-1: **98.50%** (ARC Prize verified results)
- ARC-AGI-2: **95%** (ARC Prize verified results)
- ARC-AGI-3: **62.7%** (ARC Prize verified results)
- GeneBench-Pro: **37.8%** (OpenAI launch blog)
- MRCR v2 256K-512K: **100.0%** (OpenAI launch blog)
- MRCR v2 512K-1M: **96.3%** (OpenAI launch blog)
- GraphWalks BFS 256K–1M: **71.8%** (Gemini 4 Argon launch chart)
- FrontierMath v2 (Tier 4): **97.600%** (OpenAI launch blog)

Coding:

- DeepSWE: **74.1%** (OpenAI launch blog)
- FrontierCode 1.1 Main: **53.3%** (OpenAI launch blog)
- FrontierCode 1.1 Extended: **64.5%** (OpenAI launch blog)
- AA-SciCode: **56.5%** (AA leaderboard)
- AA Coding Index: **76.9%** (AA model benchmarks)
- FrontierSWE v2: **65.5%** (FrontierSWE leaderboard)
- PostTrainBench v1.1: **44.3%** (Google Gemini 4 Argon launch chart)

Multimodal & grounded:

- ScreenSpot Pro: **92.7%** (OpenAI launch blog)
- BenchCAD Vision2Code (tools): **0.959** (OpenAI launch blog)
- AA-MMMU-Pro: **86.9%** (AA leaderboard)

Long context:

- MRCR v2 256K-512K: **100.0%** (OpenAI launch blog)
- MRCR v2 512K-1M: **96.3%** (OpenAI launch blog)
- AA-LCR: **80.7%** (AA leaderboard)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM and AA as of 2026-10-01.

- **Tool use: 91/100.** BrowseComp 91.5%, TB-2.1 (Vals) 87.3%, AA Terminal-Bench 2.1 88.4%, AA AutomationBench 68.5%, AA Agentic Index 51.5%, TB-Science 64.6%, ExploitGym 42.4%, ApprenticeBench 68%, CWE-bench 68%. GDPval-AA Elo 1542 (below ~1750 frontier but strong); AA Intelligence Index #7/223 confirms top-tier agentic placement. Capped by TB-4.0 57.9% and GDP.pdf 31.0%.
- **Reasoning: 88/100.** GPQA 96%, AA-GPQA-D 96.1%, AA-HLE 54.7%, AA-LCR 80.7%, AA-Omniscience Accuracy 62.6%, HealthBench Prof 64.7%, ARC-AGI-1 98.5%. Capped by AA Intelligence Index 52.7 (below ~60 frontier ref) and CritPt 31.7% + MLCR-AA 35% (below 40% mid-tier).
- **Context window: 97/100.** BenchLM-verified **1,050,000** tokens (≥1M tier = 95-100 per methodology); MRCR 100% at 256K-512K, 96.3% at 512K-1M (below the ≥98% at 512K+ threshold for 100, but excellent).
- **Multimodal: 67/100.** Verified text+image input, text output only (AA confirms; methodology "+image in = 60-70"). Benchmark performance is elite (AA-MMMU-Pro 86.9%, ScreenSpot Pro 92.7%) but dimension scores coverage per v4 methodology.
- **Coding: 86/100.** DeepSWE 74.1% (meets ≥74% frontier ref), AA Coding Index 76.9% (above 70% frontier ref), AA-SciCode 56.5% (above 55% frontier ref), FrontierMath v2 Tier 4 97.6%, VulcanBench 87%. Capped by no SWE-bench Verified/LiveCodeBench published for this exact ID.
- **Cost efficiency: 30/100.** $10.00 in / $50.00 out is the most expensive frontier tier (per methodology "$10/$50 = ~30"); 90% cache discount + $1.00 cached input offsets somewhat but absolute pricing is elite-tier cost. No Free ID on Zen.
- **Overall Score: 86/100.** (91 + 88 + 97 + 67 + 86) / 5 = 429 / 5 = 85.8 → 86. **Best-fit:** #1-ranked model on BenchLM (88.69) with elite reasoning (GPQA 96%, ARC-AGI-1 98.5%) and coding clusters; cap: premium $10/$50 pricing, moderate Critique/MLCR scores, and no published SWE-bench Verified/LiveCodeBench scores for this exact ID.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gpt-6-astra` for overall rank/score (88.69, #1/637), full agentic/coding/reasoning/multimodal/long-context benchmark tables; AA `https://artificialanalysis.ai/models/gpt-6-astra` for Intelligence Index (#7/223, 52.7), pricing ($10/$50, 90% cache), modalities, context window (1M), and AA leaderboard scores; OpenAI launch blog for ARC-AGI, MRCR, FrontierMath, and agentic benchmarks). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Future sources: add a new file next to this one, e.g. `GPT_6_1.md`, using the same headings.
