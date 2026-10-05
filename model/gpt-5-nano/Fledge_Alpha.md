# GPT-5 nano — findings by Fledge Alpha

- Source: OpenAI (`gpt-5-nano`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 nano
- **Short description:** OpenAI's lowest-tier GPT-5 variant from August 2025, designed for classification, extraction, ranking, and lightweight subagent work.
- **Provider / access:** OpenAI API `gpt-5-nano` (Responses + Chat Completions), GPT-5 family API surface with reasoning_effort/verbosity, custom tools.
- **Release / knowledge:** August 7, 2025; knowledge cutoff not published.
- **IDs:** `gpt-5-nano`; OpenRouter `openai/gpt-5-nano`; no Zen Free ID verified.
- **Context window:** 400K (future AGI/pricepertoken) / 272K (litellm) — Oracle says 400K; treat as 272–400K.
- **Modalities:** text, image, PDF in; text out; reasoning with effort; function calling, structured output.
- **Pricing (as of 2026-10-05):** $0.05 in / $0.40 out per 1M (cached $0.005).
- **Architecture:** proprietary, same GPT-5 family as GPT-5 mini.

### Raw benchmarks found

Agent / tool use:

- Function/tool support verified; no verified τ-bench/GDPval public row for GPT-5 nano specifically.

Reasoning / knowledge:

- MRCR 2-needle 128k: **43.2%** (OpenAI GPT-5 developer post)
- GPQA/HLE for GPT-5 nano specifically: no verified public row found.

Coding:

- SWE-bench Pro for GPT-5 nano: no verified public row found; the GPT-5.4 nano launch table cites GPT-5 mini (high) at 45.7% as the reference tier.

Long context:

- OpenAI-MRCR 2-needle 256k: **34.9%** (OpenAI GPT-5 dev post); 400K context window advertised.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 52/100.** Documented function calling; no published τ²/GDPval rows for this variant.
- **Reasoning: 48/100.** No verified GPQA/HLE row; inferred weaker than GPT-4.1/5-mini tiers via MRCR.
- **Context window: 88/100.** 400K advertised on main spec pages.
- **Multimodal: 70/100.** Vision + PDF input; no vision benchmark rows published.
- **Coding: 50/100.** No verified SWE-bench row; positioned below GPT-5 mini.
- **Cost efficiency: 99/100.** $0.05/$0.40 per 1M with $0.005 cached — the cheapest OpenAI tier.
- **Overall Score: 62/100.** Mean of five non-cost dims (52+48+88+70+50)/5 = 61.6 → 62; best fit: ultra-cheap classification/extraction at high volume; scores provisional for the narrow-task tier.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (OpenAI GPT-5 for developers page, modelpricing.ai, futureagi, pricepertoken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
