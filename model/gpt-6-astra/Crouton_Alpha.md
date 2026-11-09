# GPT-6 Astra — findings by Crouton Alpha

- Source: OpenAI/GPT-6 Astra
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship proprietary reasoning model for hardest agentic, scientific, and multimodal work; top use case is frontier coding and long-context research where price is secondary.
- **Provider / access:** OpenAI API `gpt-6-astra`, OpenCode Zen `opencode/gpt-6-astra` via `https://opencode.ai/inference/openai/v1/responses` (Responses API).
- **Release / knowledge:** 2026-09-03 release; knowledge cutoff Apr 30, 2026 (AA).
- **IDs:** `openai/gpt-6-astra`, `opencode/gpt-6-astra` (paid, no Free ID).
- **Context window:** 1,050,000 total (922,000 max input, 128,000 max output) per OpenAI docs via BenchLM; AA lists 1M.
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $10.00 input / $1.00 cached / $50.00 output per 1M (OpenAI; Zen $10/$50 ≤272K, 2x input over 272K); $6.24 per Index task (AA).
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals) **87.3%**; AA Terminal-Bench 2.1 **88.4%**; Terminal-Bench 4.0 **57.9%** (OpenAI); AA Terminal-Bench 4.0 **59.1%**
- GDPval-AA **1584** (Artificial Analysis leaderboard)
- BrowseComp **91.5%** (OpenAI: GPT-6 Astra)
- Agents' Last Exam **59.3%** (OpenAI)
- AA AutomationBench **68.5%** (Artificial Analysis)
- OSWorld 2.0 **72.6%** (OpenAI)

Reasoning / knowledge:

- GPQA / GPQA-Diamond **96% / 96.0%** (OpenAI); AA-GPQA Diamond **96.1%**
- AA-HLE **54.7%** (Artificial Analysis)
- ARC-AGI-2 **95%** (ARC Prize)
- Artificial Analysis Intelligence Index **57 (Max) / 56.9, #5 of 69; BenchLM 85.8/100 #3 of 1017** (AA; BenchLM)
- CritPt **31.7%** (Artificial Analysis)

Coding:

- DeepSWE **74.1%** (OpenAI)
- FrontierCode 1.1 Main **53.3%** / Extended **64.5%** (OpenAI)
- AA Coding Index **76.9** (Artificial Analysis)
- AA-SciCode **56.5%** (Artificial Analysis)
- FrontierSWE v2 **65.5%** (Proximal)

Long context:

- MRCR v2 256K–512K **100%**; 512K–1M **96.3%** (OpenAI)
- AA-LCR **80.7%** (Artificial Analysis)
- GraphWalks BFS 256K–1M **71.8%** (Google launch chart)

Multimodal:

- AA-MMMU-Pro **86.9%** (Artificial Analysis)
- ScreenSpot Pro **92.7%** (OpenAI)
- ExtractBench **91.91%** (LlamaIndex, Nov 2026 snapshot)

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 87–88%, GDPval-AA 1584, BrowseComp 91.5% and AutomationBench 68.5% are frontier; capped by Terminal-Bench 4.0 57.9% on the hardest harness.
- **Reasoning: 95/100.** GPQA 96%, HLE 54.7%, ARC-AGI-2 95% and Index 57 (#5) are frontier; capped by CritPt 31.7% physics gap.
- **Context window: 98/100.** 1.05M window with MRCR 100% at 256–512K and 96.3% at 512K–1M; capped one point for GraphWalks 71.8% tail.
- **Multimodal: 72/100.** Text + image in, text out; MMMU-Pro 86.9% and ScreenSpot 92.7% are strong, but image-only input caps at the image tier.
- **Coding: 94/100.** DeepSWE 74.1%, Coding Index 76.9 and FrontierSWE 65.5% meet frontier refs; capped by FrontierCode 2.0 42.8%.
- **Cost efficiency: 30/100.** $10/$50 per 1M (AA: "particularly expensive"); $10/$50 is the methodology's ~30-point anchor.
- **Overall Score: 90/100.** Mean (92+95+98+72+94)/5 = 90.2 → 90; best-fit frontier research/coding where quality dominates cost.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via OpenAI GPT-6 Astra page, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: GPT-6 Astra](https://openai.com/index/gpt-6-astra/)
  - [Artificial Analysis — GPT-6 Astra (Max)](https://artificialanalysis.ai/models/gpt-6-astra)
  - [BenchLM — GPT-6 Astra](https://benchlm.ai/models/gpt-6-astra)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
