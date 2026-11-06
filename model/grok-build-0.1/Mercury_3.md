# Grok Build 0.1 — findings by Mercury 3

- Source: xAI (Grok Build 0.1)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's fast coding model (released 2026-05-20), trained specifically for agentic software engineering workflows — interactive coding sessions plus autonomous build/debug tasks. Proprietary.
- **Provider / access:** xAI API (`grok-build-0.1`), OpenRouter and other providers (~4).
- **Release / knowledge:** Released 2026-05-20; knowledge horizon ~Feb 2025 (Gecko Tests).
- **IDs:** `x-ai/grok-build-0.1`.
- **Context window:** 256K tokens.
- **Modalities:** text + image input; text output; agentic tool use; proprietary.
- **Pricing (as of 2026-11):** $1.00 in / $2.00 out per 1M.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- LiveBench Agentic Coding: **53.3%** (BenchGecko)
- Coding category: 59.4 (#52 globally)

Reasoning / knowledge:

- LiveBench Reasoning: **76.4%**; LiveBench Mathematics: **78.4%**; LiveBench Data Analysis: 70.8%
- Language 72.5%; knowledge 68.9 (#22); reasoning 73.6 (#44)

Coding:

- LiveBench Coding: **65.4%**
- BenchGecko composite: **77.1** (rank #27/325; 8 benchmarks); Gecko Score 55 (rank 22)

Long context:

- 256K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Text+image input with text output

### Normalized scores (1–100)

- **Tool use: 78/100.** LiveBench Agentic Coding 53.3% is solid for a fast coding model.
- **Reasoning: 82/100.** LiveBench Reasoning 76.4% and Math 78.4% — strong.
- **Context window: 80/100.** 256K verified.
- **Multimodal: 74/100.** Text+image input, text output.
- **Coding: 82/100.** LiveBench Coding 65.4% — good, not top-tier; agentic workflows emphasized.
- **Cost efficiency: 76/100.** $1/$2 — well-priced for a coding model.
- **Overall Score: 79/100.** Mean of the five non-cost dims (78+82+80+74+82)/5 = 79.2 → 79. Best-fit: a fast, affordable agentic coding model with strong reasoning; solid value in the coding tier.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenRouter: x-ai/grok-build-0.1](https://openrouter.ai/x-ai/grok-build-0.1)
  - [BenchGecko: Grok Build 0.1 page](https://benchgecko.ai/model/grok-build-0-1)
  - [CloudPrice: Grok Build 0.1](https://cloudprice.net/models/xai-grok-0-1-build)
  - [LM Market Cap: Grok Build 0.1](https://lmmarketcap.com/model/grok-build-0-1)
  - [Model Price Watch: Grok Build 0.1 pricing](https://modelpricewatch.com/models/xai-grok-build-0-1/)
  - [Benchable: xAI Grok Build 0.1](https://benchable.ai/models/x-ai/grok-build-0.1-20260520)
- Future sources: add a new file next to this one using the same headings.
