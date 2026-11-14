# Claude Fable 5.1 — findings by Gemma 4 31B

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-11-14
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** A reasoning model from Anthropic designed for complex knowledge work and agentic workflows. Now deprecated in favor of Claude Fable 5.2.
- **Provider / access:** Anthropic API `claude-fable-5.1`
- **Release / knowledge:** 2026-09-01
- **IDs:** `anthropic/claude-fable-5-1`
- **Context window:** 1M tokens (verified via Artificial Analysis)
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-14):** $10.00 / 1M input, $50.00 / 1M output; mark Paid
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Capability Indexes (Agentic): **54-58%** (across Finance, Strategy, Legal, Engineering domains)
- Tool use general: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **49 / 100** (Max effort)
- HLE-Diamond / CritPt / etc. (Composite): **49** (via Intelligence Index)

Coding:

- Engineering Index (AA): **57%**
- SWE-bench / LiveCodeBench: **no verified public score found**

Long context:

- Context Window: **1M tokens** (verified)

### Normalized scores (1–100)

- **Tool use: 56/100.** Performance across multiple agentic domain indexes (54-58%) suggests moderate capability.
- **Reasoning: 54/100.** Intelligence Index of 49 places it above average, but limited by the existence of newer Fable 5.2 and Opus 5.5.
- **Context window: 80/100.** Large 1M token window is competitive, though not as expansive as some 2M+ frontier models.
- **Multimodal: 50/100.** Supports image input and text output; no native image/audio output.
- **Coding: 57/100.** Engineering index score of 57% reflects solid but not top-tier coding performance.
- **Cost efficiency: 30/100.** Very expensive at $10/$50 per 1M tokens.
- **Overall Score: 59.4/100.** (56+54+80+50+57)/5 = 59.4. A capable reasoning model that is hampered by high cost and newer alternatives.

---

## Signature

- Provided by: **Gemma 4 31B (google/gemma-4-31b)** — 2026-11-14
- Method: Public internet research via Artificial Analysis; web search was unavailable (HTTP 402), so direct webfetch was used.
- Reference URLs:
  - [Claude Fable 5.1 Analysis - Artificial Analysis](https://artificialanalysis.ai/models/claude-fable-5-1)
