# Kimi K3.1 Pro — findings by Crouton Alpha

- Source: Moonshot AI/Kimi K3.1 Pro
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's open-weights MoE flagship for agentic professional work; top use case is self-hostable frontier reasoning at 1M context.
- **Provider / access:** Moonshot AI API, 18 providers (AA); OpenCode Zen `opencode/kimi-k3.1-pro` covers K3, Pro via Hugging Face weights `moonshotai/Kimi-K3.1-Pro`.
- **Release / knowledge:** 2026-10-23 (AA).
- **IDs:** `moonshotai/Kimi-K3.1-Pro` (HF), `kimi/kimi-k3-1-pro` (AA); no Zen paid route verified for Pro.
- **Context window:** 1M total (AA) / 1.05M (BenchLM) — discrepancy noted.
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $2.00 input / $10.00 output per 1M (AA); $3.68/task. Paid API, open weights self-host free.
- **Architecture:** MoE open weights, 2.8T total / 104B active, Kimi K3.1-Pro Licence.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 **65.7%** (launch blog); AA TB4.0 **67.2%**
- GDPval-AA **1858** (AA leaderboard)
- AA AutomationBench **73.3%** (AA)
- OSWorld 2.0 **79.6%** (blog)
- BrowseComp **92.1%**, HLE w/ tools **70.0%**, APEX **69.4%** (blog; HF card)

Reasoning / knowledge:

- GPQA **94.2%**, HLE **70%**, AA-HLE **52.5%** (blog; AA)
- AA-LCR **86.3%** (AA)
- Intelligence **46.5 / 46 (#1/26 open)** (AA; BenchLM 75.03 #12)
- CritPt **24.6%** (AA)

Coding:

- DeepSWE **75.5%** (blog)
- Kimi Code Bench v2 **77.1%** (blog)
- sweMarathon **51.7%**, Code Bench 3.0 long-horizon **61.2%** (blog)
- AA-SciCode **60.8%** (AA)
- FrontierCode 2.0 **19.6%** (Cognition)

Long context:

- 1M/1.05M context; AA-LCR **86.3%** (AA)

Multimodal:

- MMMU-Pro **84.1% / 90% w/Python** (blog); AA-MMMU-Pro **83.9%**
- CharXiv **93.4%**, Chartography **90.2%** (blog)
- BenchCAD Vision2Code tools **0.927** (blog)

### Normalized scores (1–100)

- **Tool use: 94/100.** TB4.0 65–67% is class-leading on newest harness, GDPval 1858, AutomationBench 73.3%, OSWorld 79.6%.
- **Reasoning: 94/100.** GPQA 94.2%, HLE 70% w/tools, LCR 86.3% and #1 open Index (46) are frontier; capped by CritPt 24.6%.
- **Context window: 97/100.** 1M with LCR 86.3% leads open models.
- **Multimodal: 72/100.** Image in, text out; CharXiv 93.4% and MMMU-Pro 90% w/Python excellent but image-only caps tier.
- **Coding: 93/100.** DeepSWE 75.5%, Code Bench 77.1% exceed frontier refs; capped by FrontierCode 2.0 19.6%.
- **Cost efficiency: 73/100.** $2/$10 API (AA) — same $2/$10 anchor: ~73; self-host weights free.
- **Overall Score: 90/100.** Mean (94+94+97+72+93)/5 = 90.0 → 90; best-fit open-weights frontier agent.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Moonshot blog, Hugging Face model card, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI: Kimi K3.1 Pro](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Hugging Face — moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)
  - [Artificial Analysis — Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro)
  - [BenchLM — Kimi K3.1 Pro](https://benchlm.ai/models/kimi-k3-1-pro)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
