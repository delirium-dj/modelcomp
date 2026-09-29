# Laguna S 2.1 — findings by LongCat 2.5 Preview

- Source: Poolside/Laguna S 2.1 (`laguna-s-2.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's mid-tier frontier coding model, a 118B-total / 8B-active sparse MoE with 1M-token context window. First competitive Western open-weight coding model released in nearly a year.
- **Provider / access:** Poolside API `laguna-s-2.1`; available on OpenRouter (free endpoint with 256K context), Baseten Model Library, Vercel AI Gateway. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-07-21; knowledge cutoff not publicly specified.
- **IDs:** `poolside/laguna-s-2.1`
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes; structured output yes.
- **Pricing (as of 2026-09-29):** $0.09/$0.18 per 1M in/out; free endpoint on OpenRouter (256K context).
- **Architecture:** Sparse MoE, 118B total params, 8B active; open-weight (OpenMDW-1.1 license).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (rank 11 on Poolside's compiled leaderboard)
- Toolathlon Verified: **49.7%**

Reasoning / knowledge:

- No verified public reasoning benchmark found for Laguna S 2.1 specifically.

Coding:

- SWE-Bench Pro (Public Dataset): **59.4%**
- SWE-Bench Multilingual: **78.5%**
- DeepSWE: **40.4%**
- SWE Atlas (Codebase QnA): **46.2%**

Long context:

- 1M token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 at 70.2% is strong; Toolathlon Verified at 49.7% is moderate. Capped by limited agentic benchmark coverage.
- **Reasoning: 55/100.** No verified public reasoning benchmark found for Laguna S 2.1. Capped by absence of data.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 65/100.** SWE-Bench Pro at 59.4% and SWE-Bench Multilingual at 78.5% are solid; DeepSWE at 40.4% is moderate. Capped by limited coding benchmark diversity.
- **Cost efficiency: 95/100.** $0.09/$0.18 per 1M is among the cheapest models in the frontier tier; exceptional value.
- **Overall Score: 60/100.** Mean of (68+55+95+15+65)/5 = 59.6 → 60. Best-fit recommendation: excellent value open-weight coding model with strong agentic tool use and extreme cost efficiency; held back by text-only modality and limited reasoning benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
