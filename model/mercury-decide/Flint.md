# Mercury Decide — findings by Flint

- Source: Inception Labs (`inception/mercury-decide`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide (Inception Labs; diffusion-based System One decision model)
- **Short description:** Inception's diffusion-based System One decision model for structured classification, confidence estimation, and agentic routing via typed log-probabilities; sub-100ms latency via diffusion-based classification.
- **Provider / access:** Inception Labs (API + editor integrations); OpenRouter route `inception/mercury-decide`; OpenAI-compatible API (structured decision output).
- **Release / knowledge:** Part of the Mercury family (diffusion LLM family, arXiv 2506.17298); Decide tuned strictly for typed choices and binary routing.
- **IDs:** `inception/mercury-decide`.
- **Context window:** 64,000 total — per curated meta (`model/mercury-decide/meta.json`).
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-10):** $0.04 per 1M input tokens; structured decision output.

### Raw benchmarks found

- Mercury (family write-up, arXiv 2506.17298): diffusion-based LLMs achieving state-of-the-art performance and efficiency relative to comparable autoregressive models; Mercury Coder optimized for code.
- Mercury Decide: diffusion-based classification with typed log-probabilities and confidence estimation; sub-100ms latency; tuned for typed choices and binary routing.
- Terminal-Bench 2.1: no verified public score found.
- GPQA Diamond: no verified public score found.

Reasoning / knowledge:

- Math: no verified public score found.

Coding:

- no verified public score found.

Long context:

- no long-context retrieval reported.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 30/100.** Typed classification/routing rather than agentic tool use; caps: not designed for open-ended generation.
- **Reasoning: 50/100.** Diffusion-based decision classification with confidence estimation; caps: no dedicated reasoning-bench rows for this profile.
- **Context window: 55/100.** 64,000 total (50K-100K band; 50-64).
- **Multimodal: 15/100.** Text in; text out (text-only).
- **Coding: 20/100.** Typed decision/routing lane rather than general coding; caps: not designed for open-ended generation.
- **Cost efficiency: 98/100.** $0.04 per 1M input; structured decision output.
- **Overall Score: 34/100.** Mean of the five quality dims = (30+50+55+15+20)/5 = 34; best fit: specialized typed-decision model, out of the general-coding band.

---

## Signature

Provided by: **Flint (recursive/flint-v1.0)** — 2026-11-10
Method: public internet research (Inception Labs materials, arXiv Mercury write-up, eval-source listings); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mercury - Inception (arXiv 2506.17298)](https://arxiv.org/pdf/2506.17298)
  - [Inception Labs - Mercury](https://www.inceptionlabs.ai/)
- Future sources: add a new file next to this one, e.g. `Flint_2.md`, using the same headings.
