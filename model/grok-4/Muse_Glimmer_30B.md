# Grok 4 — findings by Muse Glimmer 30B

- Source: xAI / grok-4
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4
- **Short description:** Flagship multimodal LLM/reasoning model from xAI, trained with scaled RL on Colossus 200k GPU cluster; native tool use, real-time web/X search integration and “Think” mode.
- **Provider / access:** xAI. Available 2025-07-09 to SuperGrok/Premium+ subscribers and via xAI API. Variant Grok 4 Heavy launched alongside.
- **Release / knowledge:** Released 9 July 2025. Knowledge cutoff not explicitly published for 4.0; evaluation referenced April 3 2025 set.
- **IDs:** `grok-4`, `grok-4-heavy`
- **Context window:** Launch page notes 256,000 context window for API. Later line docs list 500k/1M for successors.
- **Modalities:** Text + vision input → text output; voice mode with camera vision.
- **Pricing as of 2026-10-24:** Original grok-4 pricing no longer listed; successor line pricing: grok-4.7 $2/$6 per 1M input/output <200k, etc.
- **Architecture:** Transformer-based LLM with next-token pre-training then large-scale RL. Parameter count undisclosed.

### Raw benchmarks found

**Official xAI launch 9 July 2025**
- Humanity’s Last Exam: first model to score 50% on HLE; Grok 4 Heavy 50.7% on text-only subset with Python + Internet tools
- ARC-AGI V2: 15.9% closed model, nearly double Opus ~8.6%
- Vending-Bench agentic: Grok 4 $4,694.15 net worth, 4,569 units sold vs Claude Opus 4 $2,077.41 / 1,412 units
- USAMO ’25: Grok 4 Heavy 61.9%
- Benchmarks mentioned without specific scores: GPQA Science, LiveCodeBench Jan-May Competitive Coding, HMMT 2025 Competitive Math, AIME ’25 Competition Math, ARC-AGI-2
Source: https://x.ai/news/grok-4

**Wikipedia overview**
- Confirms release 9 July 2025, claims outperform rival models in benchmark tests.
Source: https://en.wikipedia.org/wiki/Grok_(chatbot)

**Developer docs**
- Context listings for successor models; no current price listing for original grok-4.
Source: https://docs.x.ai/developers/models ; https://docs.x.ai/developers/pricing

### Normalized scores (1–100)

- **Tool use: 70/100.** Vending-Bench agentic net worth $4,694, units 4,569; no Terminal-Bench/GDPval-AA public numbers for 4.0.
- **Reasoning: 78/100.** Humanity’s Last Exam 50.7% with tools for Heavy variant, ARC-AGI V2 15.9%, USAMO ’25 61.9%.
- **Context window: 74/100.** 256K verified at launch; successor line larger.
- **Multimodal: 72/100.** Text + vision input, voice mode with camera; frontier multimodal understanding claimed.
- **Coding: 68/100.** LiveCodeBench Jan-May mentioned but no numeric score published; coding capability inferred from agentic results.
- **Cost efficiency: 50/100.** Original pricing not published; successor line premium pricing.
- **Overall Score: 72/100.** Mean of Tool 70, Reasoning 78, Context 74, Multimodal 72, Coding 68. Strong reasoning flagship with limited public numeric coding/tool benchmarks for base 4.0.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
