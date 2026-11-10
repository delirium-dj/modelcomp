# Kimi K3 — findings by Crouton Alpha

- Source: Moonshot AI/Kimi K3
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weights frontier model for vision + long-horizon coding; top use case is 1M-context multimodal agent self-hosting.
- **Provider / access:** Moonshot AI API; OpenCode Zen `opencode/kimi-k3` via `https://opencode.ai/inference/openai/v1/chat/completions` (OpenAI-compatible).
- **Release / knowledge:** 2026-07 (launch blog).
- **IDs:** `moonshotai/Kimi-K3` (HF), `opencode/kimi-k3` (Zen), `kimi/kimi-k3` (AA).
- **Context window:** 1.05M total (BenchLM) / 1M (AA).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $3.00 input / $15.00 output / $0.30 cached per 1M (Zen Kimi K3 row). Paid API, open weights self-host.
- **Architecture:** MoE open weights (see K3.1 Pro family), parameter count not separately disclosed for K3 base on BenchLM.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **88.3%** (launch blog); Vals **80.9%**; AA **85%**
- GDPval-AA **1584** (AA)
- Toolathlon-Verified **73.2%** (blog)
- MCP Atlas **84.2%**, BrowseComp **91.2%** (blog)
- AutomationBench **30.8%** (blog) — harness drag.

Reasoning / knowledge:

- GPQA **93.5%** (blog; AA same)
- HLE **56%** (blog); AA-HLE **46.9%**
- AA-LCR **88.7%** (AA — best seen)
- ARC-AGI-1 **94.5%** (ARC Prize)
- Intelligence **43.6**; BenchLM **69.58 #16** (AA; BenchLM)
- CritPt **23.4%** (AA)

Coding:

- DeepSWE **67.5%** (blog)
- SWE-bench (Vals) **93.4%** (Vals); LiveCodeBench (Vals) **87.2%**
- FrontierSWE **81.2%** (blog) — outlier vs v2 **25.9%**
- ProgramBench **77.8%** (blog)
- AA Coding Index **76.2** (AA)

Long context:

- 1.05M; AA-LCR **88.7%** (AA)

Multimodal:

- MMMU-Pro **81.6%** (blog); AA **80.5%**
- MathVision **94.3% / 97.8% w/Python** (blog)
- CharXiv **91.3%** (blog)
- OmniDocBench **91.1%** (blog)

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 85–88%, GDPval 1584, Toolathlon 73.2% and MCP Atlas 84.2% are frontier; AutomationBench 30.8% caps it.
- **Reasoning: 93/100.** GPQA 93.5%, HLE 56%, LCR 88.7% and ARC-AGI-1 94.5% are frontier; capped by CritPt 23.4% and ARC-AGI-2 60.4%.
- **Context window: 98/100.** 1.05M with LCR 88.7% — best LCR in this batch.
- **Multimodal: 73/100.** Image in, text out; MathVision 97.8% and CharXiv 91.3% are exceptional, but image-only caps the tier.
- **Coding: 93/100.** SWE Vals 93.4%, LiveCode 87.2%, ProgramBench 77.8% meet frontier refs; capped by FrontierSWE v2 25.9% and Architecture harness variance (81.2% vs 25.9%).
- **Cost efficiency: 62/100.** $3/$15 per 1M (Zen) — between $2/$10 (~73) and $4/$20 (~55), so ~62.
- **Overall Score: 90/100.** Mean (92+93+98+73+93)/5 = 89.8 → 90; best-fit open multimodal frontier agent.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Moonshot blog, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI: Kimi K3 launch blog](https://www.kimi.com/blog/kimi-k3)
  - [Hugging Face — moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)
  - [BenchLM — Kimi K3](https://benchlm.ai/models/kimi-k3)
  - [Artificial Analysis — Kimi K3](https://artificialanalysis.ai/models/kimi-k3)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
