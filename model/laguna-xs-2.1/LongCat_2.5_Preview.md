# Laguna XS 2.1 — findings by LongCat 2.5 Preview

- Source: Poolside/Laguna XS 2.1 (`laguna-xs-2.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's lightweight open-weight sparse MoE model (33B total, ~3B active) designed for agentic coding and long-horizon software engineering workflows.
- **Provider / access:** Poolside API `laguna-xs-2.1`; open-weight on HuggingFace (`poolside/laguna-xs-2.1`). Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-07-02; knowledge cutoff not publicly specified.
- **IDs:** `poolside/laguna-xs-2.1`
- **Context window:** 262,144 tokens (256K).
- **Modalities:** Text in; text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-09-29):** $0.09/$0.18 per 1M in/out.
- **Architecture:** Sparse MoE, 33B total params, ~3B active; open-weight (OpenMDW-1.1 license).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (Poolside/NVIDIA)

Reasoning / knowledge:

- No verified public reasoning benchmark found for Laguna XS 2.1 specifically.

Coding:

- SWE-bench Verified: **70.9%** (Poolside/NVIDIA)
- SWE-bench Multilingual: **63.1%** (Poolside/NVIDIA)
- SWE-bench Pro: **47.6%** (Poolside/NVIDIA)

Long context:

- 256K token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 50/100.** Terminal-Bench 2.0 at 37.5% is moderate. Capped by limited agentic benchmark coverage.
- **Reasoning: 50/100.** No verified public reasoning benchmark found for Laguna XS 2.1. Capped by absence of data.
- **Context window: 65/100.** 256K token context window is decent but below the 1M+ frontier standard.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 65/100.** SWE-bench Verified at 70.9% is solid; SWE-bench Pro at 47.6% is moderate. Capped by limited coding benchmark diversity.
- **Cost efficiency: 95/100.** $0.09/$0.18 per 1M is among the cheapest models in the frontier tier; exceptional value.
- **Overall Score: 49/100.** Mean of (50+50+65+15+65)/5 = 49.0 → 49. Best-fit recommendation: budget-friendly open-weight coding model with solid SWE-bench performance and extreme cost efficiency; held back by limited agentic and reasoning benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
