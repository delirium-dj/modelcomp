# Solar Pro 4 — findings by LongCat 2.5 Preview

- Source: Upstage/Solar Pro 4 (`solar-pro4`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's agentic flagship model, built to carry multi-step work — document review, terminal tasks, multi-turn tool use — through to a finished deliverable. Features 512K context and always-on reasoning.
- **Provider / access:** Upstage API `solar-pro4`; available on OpenRouter, SolarChat, Hermes Agent. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-08-06; knowledge cutoff February 2026.
- **IDs:** `upstage/solar-pro4`
- **Context window:** 524,288 tokens (524K); max output 131K tokens (verified via CloudPrice).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $0.30/$1.20 per 1M in/out (cached $0.06).
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v2.1: **57.0%** (llm-stats blog, Benchgen)
- τ²-Bench: **83.3%** (DesignForOnline)
- BrowseComp: **49.2%** (in-house, llm-stats blog)

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (llm-stats blog, DesignForOnline)
- HLE: **29.2%** (AI Costs Compare)
- Intelligence Index: **41.6** (CloudPrice)

Coding:

- SWE-Bench Verified: **70.6%** (in-house, llm-stats blog)
- Coding Index: **52.7** (CloudPrice)
- SciCode: **43.6%** (AI Costs Compare)

Long context:

- 524K token context window; AA-LCR at 70.7% shows decent long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench v2.1 at 57.0% and τ²-Bench at 83.3% are solid. Capped by BrowseComp at 49.2%.
- **Reasoning: 72/100.** GPQA Diamond at 89.0% is strong. Capped by HLE at 29.2%.
- **Context window: 80/100.** 524K token context window is good but below the 1M+ frontier standard.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 62/100.** SWE-Bench Verified at 70.6% is solid. Capped by Coding Index at 52.7%.
- **Cost efficiency: 90/100.** $0.30/$1.20 per 1M is very cheap for a frontier-tier model.
- **Overall Score: 59/100.** Mean of (68+72+80+15+62)/5 = 59.4 → 59. Best-fit recommendation: budget-friendly agentic model with strong reasoning and cost efficiency; held back by text-only modality and moderate coding benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
