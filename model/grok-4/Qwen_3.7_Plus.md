# Grok 4 — findings by Qwen 3.7 Plus
- Source: xAI/Grok 4 (`xai/grok-4`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July 2025 flagship reasoning model with native tool use and real-time search integration. First model to score 50% on Humanity's Last Exam (50.7% text-only, Grok 4 Heavy). Achieves 87.7% on GPQA Diamond (AA), 61.9% on USAMO'25, 15.9% on ARC-AGI V2 (nearly double Claude 4 Opus), $4694 on Vending-Bench, 72.6% on React Native Evals, and 74.9% on τ²-bench. 256K context window. AA Intelligence Index 22 (below average). AA-Omniscience Index 2.1% (64.5% hallucination rate). Always-on reasoning mode — no lightweight variant. Now deprecated in favor of Grok 4.1+ and Grok 4.5.
- **Provider / access:** xAI (API, SuperGrok subscription). Proprietary.
- **Release / knowledge:** July 9, 2025. Knowledge cutoff not specified.
- **IDs:** `xai/grok-4`
- **Context window:** 256,000 tokens (256K)
- **Modalities:** Text and image in; text out
- **Pricing:** $3.00 in / $15.00 out per 1M tokens ($0.75 cached in); higher above 128K tokens

### Raw benchmarks found

Agent / tool use: τ²-bench 74.9% · Vending-Bench $4694.15 net worth / 4569 units sold · IFBench 53.7% · GDPval-AA 755 / 6.0% (normalized).

Reasoning / knowledge: HLE 50.7% (text-only, Grok 4 Heavy) / 26.9% (text-only) / 26.7% (AA) · GPQA Diamond 87.7% (AA) · USAMO'25 61.9% (Grok 4 Heavy) · ARC-AGI V2 15.9% · AMI 100% · FrontierMath v2 Tiers 1-3 19.7% · AA Intelligence Index 22 · AA-Omniscience Index 2.1% (accuracy 35.5%, hallucination 64.5%) · AA-LCR 68.0%.

Coding: LiveCodeBench (Jan–May 2025) strong (xAI claim competitive) · React Native Evals 72.6% · FrontierCode in AA Intelligence Index.

Multimodal: MMMU-Pro 68.8% (AAA-MMMU-Pro).

Long context: 256K native context. AA-LCR 68.0%.

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-bench 74.9% is solid. Vending-Bench $4694 (vs Claude Opus 4 $2077) is outstanding — best in class at launch. IFBench 53.7% is moderate. GDPval-AA 6.0% is very low. Native RL-trained tool use with web search and X search integration.
- **Reasoning: 50/100.** HLE 50.7% (Heavy) / 26.9% (standard) is outstanding — first model to reach 50%. GPQA Diamond 87.7% and USAMO'25 61.9% are excellent. ARC-AGI V2 15.9% is best in class. However, AA Intelligence Index 22 is below average (median 27). FrontierMath 19.7% is low. AA-Omniscience 2.1% (64.5% hallucination) is a severe reliability concern.
- **Context window: 65/100.** 256K context is good. AA-LCR 68.0% shows solid long-context reasoning. Higher pricing above 128K is a cost concern.
- **Multimodal: 45/100.** Text and image input supported. MMMU-Pro 68.8% is moderate. No video understanding (coming via retraining). Text output only.
- **Coding: 55/100.** React Native Evals 72.6% is strong. LiveCodeBench competitive (xAI claims). FrontierCode in AA Intelligence Index. No specific SWE-bench score found. Dedicated coding model (grok-build-0.1) shipped separately.
- **Cost efficiency: 25/100.** $3/$15 per 1M is expensive (above median $2/$10). Always-on reasoning adds significant token overhead. $300/month SuperGrok Heavy is the most expensive consumer AI tier. Deprecated in favor of newer, better models.
- **Overall Score: 54/100.** Mean of Tool (55) + Reasoning (50) + Context (65) + Multimodal (45) + Coding (55) = 270/5 = 54.0. Historic significance as first 50% HLE model and strong Vending-Bench performance are notable, but low AA Intelligence Index (22), high hallucination rate (64.5%), expensive pricing, and deprecated status limit the score.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
