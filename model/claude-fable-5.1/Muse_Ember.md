# Claude Fable 5.1 — findings by Crouton Alpha

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's proprietary reasoning model for agentic knowledge work and coding; top use case is enterprise agent workflows where Anthropic ecosystem wins.
- **Provider / access:** Anthropic Claude API `claude-fable-5-1`, OpenCode Zen `opencode/claude-fable-5-1` via `https://opencode.ai/inference/anthropic/v1/messages`.
- **Release / knowledge:** 2026-09-01 (system card / launch).
- **IDs:** `anthropic/claude-fable-5-1`, `opencode/claude-fable-5-1` (paid).
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $10.00 input / $50.00 output / $0.25 cached-read per 1M (BenchLM; Zen $10/$50). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals) **85.0%**; AA Terminal-Bench 2.1 **91.4%**; Terminal-Bench 4.0 **55.8%** (system card)
- GDPval-AA **1763** (Artificial Analysis leaderboard)
- Toolathlon-Verified **77.8%**, Pass@3 **81.5%** (system card)
- AA AutomationBench **59.4%** (Artificial Analysis)
- AA Tau3 Banking **47.2%** (Artificial Analysis)

Reasoning / knowledge:

- HLE **65%**, HLE w/o tools **60.9%** (system card); AA-HLE **59.1%**
- GPQA Diamond **93.7%** (AA); Vals **93.4%**
- ARC-AGI-2 **90%** (system card)
- Artificial Analysis Intelligence Index **49.2**; BenchLM **81.3/100 #7** (AA; BenchLM)
- CritPt **29.7%** (Artificial Analysis)

Coding:

- SWE-bench Pro **81.2%**, SWE Multilingual **89.1%**, SWE Multimodal **54.7%** (system card)
- DeepSWE **67.4%** (system card)
- LiveCodeBench (Vals) **90.5%**; AA Coding Index **81.6**
- AA-SciCode **63.1%** (Artificial Analysis)

Long context:

- 1M context (BenchLM)
- AA-LCR **85.3%** (Artificial Analysis)
- GraphWalks BFS 256K–1M **65.0%** (Google launch chart)

Multimodal:

- ParseBench **77.81%** (LlamaIndex snapshot)
- Design Arena Website **1308** (OpenRouter)
- Text + image in per Claude Fable family (BenchLM family page).

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 2.1 85–91.4%, GDPval-AA 1763, Toolathlon-Verified 77.8% are frontier; capped by Terminal-Bench 4.0 55.8% on newest harness.
- **Reasoning: 93/100.** HLE 65%, GPQA 93.7%, ARC-AGI-2 90% and LCR 85.3% are frontier; capped by CritPt 29.7% hard physics.
- **Context window: 96/100.** 1M with LCR 85.3% leads the class; capped by GraphWalks 65% across 256K–1M.
- **Multimodal: 71/100.** Image in, text out; ParseBench 77.8% and Design Arena 1308 are solid, but no video/audio/non-text output.
- **Coding: 93/100.** SWE Multilingual 89.1%, LiveCodeBench 90.5%, SWE Pro 81.2% meet frontier refs; capped by DeepSWE 67.4% and FrontierCode 2.0 32.4%.
- **Cost efficiency: 30/100.** $10/$50 per 1M is the methodology's ~30 anchor ($0.15 per 10K/1K request).
- **Overall Score: 89/100.** Mean (93+93+96+71+93)/5 = 89.2 → 89; best-fit agentic enterprise work at premium price.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Anthropic system card, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5.1 system card](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [BenchLM — Claude Fable 5.1](https://benchlm.ai/models/claude-fable-5-1)
  - [Artificial Analysis — Claude Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
