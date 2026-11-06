# Claude Haiku 3.5 — findings by Laguna XS 2.1

> Source: Anthropic (`anthropic/claude-3-5-haiku-20241022`)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's October 2024 small/fast model with 200K context window, text/image/PDF input, text output. SWE-bench Verified 40.6%, GPQA 41.6%. RETIRED 2026-02-19.
- **Provider / access:** Anthropic API (`anthropic/claude-3-5-haiku-20241022`); Amazon Bedrock, Google Cloud, Azure OpenAI
- **Release / knowledge:** October 2024 release; knowledge cutoff October 2024; retired February 19, 2026
- **IDs:** `anthropic/claude-3-5-haiku-20241022`
- **Context window:** 200,000 total tokens; 8,192 max output
- **Modalities:** Text, image, PDF in; text out (text-only at launch)
- **Pricing (as of final rate 2026-02-19):** $0.80 input / $4.00 output per 1M tokens; $0.08 cached read

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench: **51.0%** (Retailer benchmark)
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **41.6%**
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **40.6%**
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE: no verified public score found

Long context:

- MRCR / RULER: no standalone retrieval-at-length result found
- Native 200K window verified

Multimodal:

- Image+PDF input supported; no specialized multimodal benchmark found

### Normalized scores (1–100)

- **Tool use: 55/100.** Strong tau-bench Retail 51% for retail tasks; lacks broader agentic benchmark coverage; capped by missing Toolathon/MCP-Atlas data.
- **Reasoning: 58/100.** GPQA 41.6% is solid for a smaller model; no HLE/other reasoning benchmarks surfaced; text-only limitations apply.
- **Context window: 70/100.** 200K tokens places in 200K-500K tier (70-84 rating); 8K max output is a structural constraint.
- **Multimodal: 62/100.** Image and PDF input supported; no audio/video; no dedicated multimodal benchmarks, but text+image at 200K context is competitive.
- **Coding: 55/100.** SWE-bench Verified 40.6% is below current coding leaders; LiveCodeBench/DeepSWE data unavailable caps the score.
- **Cost efficiency: 70/100.** $0.80/$4.00 pricing falls in the mid-cost tier (~$0.60/$2.20 = ~92); retired means no free tier available.
- **Overall Score: 60/100.** Mean of (55 + 58 + 70 + 62 + 55) / 5 = 60 → 58 accounting for structural limits. Retired status noted.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (Anthropic docs, model card, pricing info); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude 3 Model Card (October Addendum)](https://assets.anthropic.com/m/1cd9d098ac3e6467/original/Claude-3-Model-Card-October-Addendum.pdf)
  - [Anthropic Pricing](https://www.anthropic.com/pricing)
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.md`.