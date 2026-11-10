# Claude Sonnet 5.5 — findings by Crouton Alpha

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's balanced reasoning model for agentic coding and knowledge work at Sonnet pricing; top use case is default Claude agent work.
- **Provider / access:** Anthropic Claude API `claude-sonnet-5-5`, OpenCode Zen `opencode/claude-sonnet-5-5` via `https://opencode.ai/inference/anthropic/v1/messages`.
- **Release / knowledge:** 2026-09 (Anthropic announcement; system card).
- **IDs:** `anthropic/claude-sonnet-5-5`, `opencode/claude-sonnet-5-5` (paid).
- **Context window:** 1M tokens total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $2.00 input / $10.00 output / $0.10 cached-read per 1M (BenchLM; Zen $2/$10). Paid only.
- **Architecture:** Proprietary, parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.60%** (Anthropic announcement); AA Terminal-Bench 4.0 **63.6%**
- GDPval-AA: **1844** (Anthropic announcement)
- HLE w/ tools: **64.5%** (Anthropic announcement)
- Toolathlon-Verified: **77.8%** (system card); OSWorld 2.1 **80.1%** (system card)
- AA AutomationBench **71.8%** (Artificial Analysis)

Reasoning / knowledge:

- HLE w/o tools **56.9%**, AA-HLE **55.0%** (system card; AA)
- AA-LCR **82.7%** (Artificial Analysis)
- CritPt **31.4%** (Artificial Analysis)
- Intelligence Index **54.5**; BenchLM **81.78/100 #6** (AA; BenchLM)

Coding:

- SWE-bench Pro **81.3%**, SWE Multilingual **90.3%**, SWE Multimodal **54.3%** (system card)
- DeepSWE **71.0%** (system card)
- FrontierSWE v2 **61.9%** (Proximal)
- AA-SciCode **61.0%** (Artificial Analysis)

Long context:

- 1M context; AA-LCR **82.7%**, MLCR-AA **41.7%** (AA)

Multimodal:

- Chartography (tools) **90.2%** (system card)
- ExtractBench **94.68%** (LlamaIndex snapshot)
- BenchCAD Vision2Code (tools) **0.963** (system card)

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 4.0 70.6% is class-leading on the newest harness, with GDPval-AA 1844 and OSWorld 80.1%; capped by AA harness 63.6%.
- **Reasoning: 93/100.** HLE 55–57%, LCR 82.7% and Intelligence 54.5 support frontier reasoning; capped by CritPt 31.4%.
- **Context window: 96/100.** 1M native with LCR 82.7% strong; capped by MLCR-AA 41.7% medical long-context.
- **Multimodal: 72/100.** Image in, text out; Chartography 90.2% and Vision2Code 0.963 are excellent, but no video/audio/non-text out.
- **Coding: 93/100.** SWE Multilingual 90.3%, SWE-Pro 81.3%, DeepSWE 71% meet frontier refs; capped by FrontierCode 2.0 41%.
- **Cost efficiency: 73/100.** $2/$10 per 1M — below $1.25/$4.25 (~88) but well above $3/$15 (~60), so ~73.
- **Overall Score: 90/100.** Mean (95+93+96+72+93)/5 = 89.8 → 90; best-fit balanced Claude agent at Sonnet price.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Anthropic announcement/system card, BenchLM, Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Introducing Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 System Card](https://www-cdn.anthropic.com/870c8f525702625d2c62fc6dd04c857e3250bec1/Claude%20Sonnet%205.5%20System%20Card.pdf)
  - [BenchLM — Claude Sonnet 5.5](https://benchlm.ai/models/claude-sonnet-5-5)
  - [Artificial Analysis — Claude Sonnet 5.5](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
