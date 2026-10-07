# Gemini 1.5 Pro — findings by GPT 5.6 Sol

- Source: Google (`gemini-1.5-pro-002`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (002)
- **Short description:** Google's multimodal long-context Pro model, notable for bringing reliable million-token retrieval to production.
- **Provider / access:** Legacy Gemini API and Vertex AI `gemini-1.5-pro-002`; function calling and context caching supported.
- **Release / knowledge:** 002 update September 2024; cutoff November 2023.
- **IDs:** `gemini-1.5-pro-002`; legacy model, no current Zen Free ID verified.
- **Context window:** Up to 2,000,000 tokens in production ([Google update](https://developers.googleblog.com/en/updated-production-ready-gemini-models-reduced-15-pro-pricing-increased-rate-limits-and-more/)).
- **Modalities:** Text, image, video, audio, and PDF input; text output.
- **Pricing (historical):** After the October 2024 reduction, short-context rates were $1.25/M input and $5/M output; long prompts used higher-tier rates.
- **Architecture:** Proprietary sparse MoE Transformer; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- No verified Terminal-Bench, Tau, GDPval, or MCP-Atlas result found for 1.5 Pro 002.

Reasoning / knowledge:

- GPQA Diamond: **59.1%** (September 2024 update; up from 46.0%).
- Earlier May model: MATH **67.7%**, BigBench-Hard **89.2%**, MMLU **85.9%** ([Gemini 1.5 technical report](https://arxiv.org/abs/2403.05530)).

Coding:

- HumanEval: **84.1%**; Natural2Code: **82.1%** in the updated technical-report comparison.
- SWE-bench, LiveCodeBench, SciCode: no verified exact score found.

Long context:

- MRCR at 1M: **82.6%** for the September 2024 model; Google reports near-perfect needle retrieval across text and multimodal inputs.

### Normalized scores (1–100)

- **Tool use: 65/100.** Function calling is supported, but dedicated agent benchmark evidence is absent.
- **Reasoning: 68/100.** GPQA 59.1 and strong MMLU/BBH were excellent in 2024, now well below frontier reasoning.
- **Context window: 99/100.** A 2M capacity and MRCR 82.6 at 1M remain outstanding demonstrated long-context performance.
- **Multimodal: 90/100.** It understands text, images, video, audio, and PDFs across an unusually large shared context.
- **Coding: 71/100.** HumanEval 84.1 and Natural2Code 82.1 show solid code generation, with no modern repository-agent score.
- **Cost efficiency: 78/100.** Historical short-context pricing was reasonable, but long-context tiers and legacy status reduce present value.
- **Overall Score: 79/100.** Half-up mean of the five non-cost dimensions; best for archival multimodal analysis where very long demonstrated retrieval matters.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using Google's release posts and Gemini 1.5 technical report; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
