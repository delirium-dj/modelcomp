# Claude Opus 4.8 — findings by Crouton Alpha

- Source: Anthropic/Claude Opus 4.8
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's 4.8 generation Opus for coding and knowledge work; top use case is stable Opus reasoning superseded by 5.x.
- **Provider / access:** Anthropic Claude API `claude-opus-4-8`, OpenCode Zen `opencode/claude-opus-4-8` via `https://opencode.ai/inference/anthropic/v1/messages`.
- **Release / knowledge:** 2026 (system card).
- **IDs:** `anthropic/claude-opus-4-8`, `opencode/claude-opus-4-8` (paid).
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $5.00 input / $25.00 output / $0.50 cached-read per 1M (Zen). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **74.6%** (system card); Vals **71.9%**; AA TB2.1 **84.6%**
- GDPval-AA **1593** (system card)
- τ²-bench **94.4%** (AA)
- MCP Atlas **82.2%**, BrowseComp **84.3%** (system card)
- Toolathlon **59.9%** (system card)

Reasoning / knowledge:

- GPQA **93.6%**, HLE **57.9%** (system card); AA-HLE **48.7%**
- ARC-AGI-2 **72.1%** (ARC Prize)
- AA-LCR **77.7%** (AA)
- Intelligence **41.8**; BenchLM **69.55 #17** (AA; BenchLM)
- USAMO 2026 **96.7%** (system card)

Coding:

- SWE Verified **88.6%**, SWE-Pro **69.2%**, SWE Multilingual **84.4%** (system card)
- LiveCodeBench (Vals) **87.8%** (Vals)
- AA Coding Index **74.3** (AA)
- CursorBench 3.2 **62.3%** (Cursor)
- FrontierCode 2.0 **14.7%** (Cognition)

Long context:

- 1M; AA-LCR **77.7%** (AA)

Multimodal:

- CharXiv **89.9%** (system card)
- ScreenSpot Pro **87.9%** (system card)
- ExtractBench **86.84%** (LlamaIndex)

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 74–85%, GDPval 1593, τ²-bench 94.4% and MCP Atlas 82.2% are strong; capped by Toolathlon 59.9% and Architecture variance.
- **Reasoning: 92/100.** GPQA 93.6%, HLE 57.9%, USAMO 96.7% and LCR 77.7% are frontier; capped by ARC-AGI-3 1.5% and CritPt 20.9%.
- **Context window: 95/100.** 1M native with LCR 77.7% strong.
- **Multimodal: 73/100.** Image in, text out; CharXiv 89.9% and ScreenSpot 87.9% excellent, but image-only caps tier.
- **Coding: 91/100.** SWE Verified 88.6%, LiveCode 87.8% and Coding Index 74.3 meet frontier refs; capped by SWE-Pro 69.2% and FrontierCode 14.7%.
- **Cost efficiency: 45/100.** $5/$25 per 1M (Zen) — expensive anchor ~45.
- **Overall Score: 88/100.** Mean (90+92+95+73+91)/5 = 88.2 → 88; best-fit stable Opus 4.8 agent.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Anthropic system card, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Claude Opus 4.8 system card](https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf)
  - [BenchLM — Claude Opus 4.8](https://benchlm.ai/models/claude-opus-4-8)
  - [Artificial Analysis — Claude Opus 4.8](https://artificialanalysis.ai/models/claude-opus-4-8)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
