# Claude Opus 5 — findings by Crouton Alpha

- Source: Anthropic/Claude Opus 5
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's prior flagship Opus for agentic coding and knowledge work; superseded by Opus 5.5 but still frontier across SWE and tool suites.
- **Provider / access:** Anthropic Claude API `claude-opus-5`, OpenCode Zen `opencode/claude-opus-5` via `https://opencode.ai/inference/anthropic/v1/messages`.
- **Release / knowledge:** 2026-07-24 (AA).
- **IDs:** `anthropic/claude-opus-5`, `opencode/claude-opus-5` (paid, deprecated per AA in favor of 5.5).
- **Context window:** 1M tokens total (AA).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $5.00 input / $25.00 output per 1M (Zen; AA $5/$25, $11.82/task). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: AA **89.1%**, Vals **84.6%** (AA; Vals)
- GDPval-AA **1862** (system card)
- Toolathlon-Verified **80.6%**, Pass@3 **87.0%** (system card)
- MCP Atlas **85.8%**, BrowseComp **90.8%** (system card)
- DeepSearchQA **95.0%** (Anthropic announcement)

Reasoning / knowledge:

- HLE **64.7%**, HLE w/o tools **56.3%** (system card); AA-HLE **54.9%**
- AA-GPQA Diamond **93.2%** (AA)
- ARC-AGI-2 **90.4%** (ARC Prize)
- AA-LCR **79.3%** (AA)
- Intelligence Index **50.8** (BenchLM listing, Max 44); BenchLM **79.55 #10** (AA; BenchLM)

Coding:

- SWE-bench Verified **96%**, SWE-Pro **79.2%**, SWE Multilingual **89.5%** (system card)
- DeepSWE **68.8%** (system card)
- LiveCodeBench (Vals) **89.0%**, SWE-bench (Vals) **97.0%**
- ProgramBench **93.0%** (system card)
- AA Coding Index **78.0** (Anthropic announcement)

Long context:

- 1M context (AA); AA-LCR **79.3%** (AA)

Multimodal:

- AA-MMMU-Pro **84.7%** (AA)
- Chartography (tools) **83.0%**, GDP.pdf (tools) **85.5%** (system card)
- Design Arena **1307** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 2.1 89.1%, GDPval-AA 1862, Toolathlon 80.6%, MCP Atlas 85.8% are frontier; capped by AutomationBench 26% (safeguard-intervened).
- **Reasoning: 93/100.** HLE 64.7%, GPQA 93.2%, ARC-AGI-2 90.4% and LCR 79.3% are frontier; capped by CritPt 29.1%.
- **Context window: 96/100.** 1M native with LCR 79.3%; capped below 98%-tier for lack of 512K+ retrieval proof.
- **Multimodal: 72/100.** Image in, text out; MMMU-Pro 84.7% and GDP.pdf 85.5% strong, but image-only caps the tier.
- **Coding: 94/100.** SWE Verified 96% / Vals 97%, SWE-Pro 79.2%, ProgramBench 93% exceed frontier refs; capped by FrontierCode 2.0 26.7%.
- **Cost efficiency: 45/100.** $5/$25 per 1M (Zen/AA); between $4/$20 (~55) and $10/$50 (~30), so ~45.
- **Overall Score: 90/100.** Mean (94+93+96+72+94)/5 = 89.8 → 90; best-fit frontier coding agent at premium Opus price.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Anthropic system card, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Introducing Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)
  - [Claude Opus 5 System Card](https://www-cdn.anthropic.com/c5fbac3f0b1280a933ebd26d3cb8bb9f5bdeaf48/Claude%20Opus%205%20System%20Card.pdf)
  - [BenchLM — Claude Opus 5](https://benchlm.ai/models/claude-opus-5)
  - [Artificial Analysis — Claude Opus 5 (Max)](https://artificialanalysis.ai/models/claude-opus-5)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
