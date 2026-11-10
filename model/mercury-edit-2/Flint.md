# Mercury Edit 2 — findings by Flint

- Source: Inception Labs (`inception/mercury-edit-2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Edit 2 (Inception Labs; diffusion-based next-edit prediction model)
- **Short description:** Inception's diffusion-based next-edit model for code autocomplete and multi-line edits, aligned with Kahneman-Tversky Optimization (KTO); complements the auto-complete endpoint and predicts the next edit from recent edits plus codebase context using parallel token generation.
- **Provider / access:** Inception Labs (API + editor integrations); OpenRouter route `inception/mercury-edit-2`; OpenAI-compatible API (Inception `/v1/edit/completions`, FIM `/v1/fim/completions`).
- **Release / knowledge:** Mercury family introduced via arXiv write-up (2506.17298); Edit 2 upgrades the previous next-edit model.
- **IDs:** `inception/mercury-edit-2`.
- **Context window:** 32,000 total tokens; max output 8,192 — per curated meta (`model/mercury-edit-2/meta.json`).
- **Modalities:** Text in; text out.
- **Pricing (as of 2026-11-10):** $0.25 input / $0.75 output / $0.025 cached per 1M tokens.

### Raw benchmarks found

- Mercury (family write-up, arXiv 2506.17298): first commercial-scale diffusion LLM family; Mercury Coder optimized for code; diffusion achieves state-of-the-art performance and efficiency relative to comparable autoregressive models; 5-10x faster than Claude 3.5 Haiku / GPT-4o Mini while matching performance.
- Mercury Edit 2: parallel token generation via diffusion at ~221ms; complements autocomplete endpoint; preference training targets useful, selective suggestions rather than overly frequent edits.
- Terminal-Bench 2.1: no verified public score found for this exact profile.
- SWE-bench Verified / SWE-Pro: no verified public score found.

Reasoning / knowledge:

- Math: no verified public score found.

Coding:

- Coding: no verified public score found (diffusion-based edit prediction, not a general coding-agent benchmark).

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

- **Tool use: 45/100.** Specialized FIM/edit lane rather than agentic tool use; no agentic benchmark verified for this exact profile; caps: specialized endpoint tuning.
- **Reasoning: 50/100.** Mercury family write-up reports state-of-the-art performance/efficiency vs comparable autoregressive models; caps: no dedicated reasoning-bench rows for the Edit-2 profile.
- **Context window: 25/100.** 32,000 total / 8,192 max out (below 100K band; 10-49 low band).
- **Multimodal: 15/100.** Text in; text out (text-only).
- **Coding: 60/100.** Diffusion edit prediction at ~221ms with preference training for selective, useful suggestions; caps: no SWE-bench/LiveCode coverage for this exact profile.
- **Cost efficiency: 93/100.** $0.25/$0.75 per 1M (cached 0.025); diffusion serving efficiency (5-10x faster than Claude 3.5 Haiku / GPT-4o Mini at comparable quality).
- **Overall Score: 39/100.** Mean of the five quality dims = (45+50+25+15+60)/5 = 39; best fit: low-context specialized edit prediction with strong serving efficiency, out of the general-coding band.

---

## Signature

Provided by: **Flint (recursive/flint-v1.0)** — 2026-11-10
Method: public internet research (Inception Labs blog, arXiv Mercury write-up, eval-source listings); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mercury Edit 2 - Inception](https://www.inceptionlabs.ai/blog/introducing-mercury-edit-2)
  - [Mercury - Inception (arXiv 2506.17298)](https://arxiv.org/pdf/2506.17298)
  - [Mercury Edit 2: Ultra-Fast AI Code Prediction via Diffusion — coding4food](https://coding4food.com/en/post/mercury-edit-2-diffusion-code-prediction-ultra-fast)
- Future sources: add a new file next to this one, e.g. `Flint_2.md`, using the same headings.
