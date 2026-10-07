# Gemini 1.5 Pro — findings by GPT 6 Astra

- Source: Google / Gemini 1.5 Pro (September 2024, 002)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Historical Google multimodal model; this assessment targets the September 2024 revision, not its May predecessor.
- **Provider / access:** Former Gemini API generateContent and Vertex AI access. Google records shutdown of `gemini-1.5-pro` on September 29, 2025; this is not a current deployment recommendation. [Lifecycle](https://ai.google.dev/gemini-api/docs/changelog)
- **Release / knowledge:** 002 released September 24, 2024; exact revision cutoff not independently verified. [Announcement](https://developers.googleblog.com/en/updated-gemini-models-reduced-15-pro-pricing-increased-rate-limits-and-more/)
- **IDs:** `gemini-1.5-pro-002`; historical OpenRouter `google/gemini-pro-1.5`. No verified Zen Free ID.
- **Context window:** 2 million tokens; output cap not verified here. [Announcement](https://developers.googleblog.com/en/updated-gemini-models-reduced-15-pro-pricing-increased-rate-limits-and-more/)
- **Modalities:** Text, image, video, audio and document understanding; text output. Historical function calling; current structured-output availability not applicable to the retired endpoint. [Technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf)
- **Pricing (as of 2026-10-07):** Historical October 1, 2024 rates only: $1.25 input / $5 output per million at up to 128K prompt tokens; $2.50 / $10 above that. Cached rate not verified. No current free access inferred. [Official pricing image](https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/Gemini_Pro_Price_Chart_GRHV7Tk.original.png)
- **Architecture:** Proprietary sparse MoE; parameter counts undisclosed. [Technical report](https://storage.googleapis.com/deepmind-media/gemini/gemini_v1_5_report.pdf)

### Raw benchmarks found

September 2024 Pro column, publisher evaluations, visually checked in the [official benchmark table](https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/image1_jBYRI1Z.original.png). Detailed sampling budgets are not specified there; no leaderboard rank inferred.

Agent / tool use:
- Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA, Claw-Eval, Toolathon and MCP-Atlas: no verified public score found.

Reasoning / knowledge:
- GPQA Diamond: **59.1%**; MMLU-Pro: **75.8%**; MATH: **86.5%**; HiddenMath: **52.0%**.
- HLE, LCR/MLCR, CritPt, current AA Intelligence Index and Omniscience: no verified public score found.

Coding:
- Natural2Code: **85.4%**, publisher-held-out multilingual code-generation set; not HumanEval or SWE-bench.
- SWE-bench, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: no verified public score found.

Long context / multimodal:
- MRCR at 1M tokens: **82.6%**.
- MMMU: **65.9%**; MathVista: **68.1%**; Video-MME: **78.6%**; FLEURS across 55 languages: **6.7% WER**, lower is better.
- These figures are all from the September table; earlier experimental 10M retrieval is not the serving limit.

### Normalized scores (1–100)

- **Tool use: 40/100.** Provisional historical function-calling capability; absent current agent benchmarks substantially limits confidence.
- **Reasoning: 54/100.** GPQA Diamond 59.1% and MMLU-Pro 75.8% support useful historical reasoning below current frontier tiers.
- **Context window: 96/100.** A 2M window and MRCR 82.6% at 1M support the high tier; not near-perfect measured retrieval.
- **Multimodal: 90/100.** Verified image, video and audio understanding; text-only output limits breadth.
- **Coding: 55/100.** Natural2Code 85.4% supports code generation, with no verified modern repository-agent evaluation.
- **Cost efficiency: 85/100.** Historical short-prompt $1.25/$5 pricing; long prompts cost more and the endpoint is retired.
- **Overall Score: 67/100.** Half-up mean: (40 + 54 + 96 + 90 + 55) / 5 = 67. Historical long-context reference.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-07 UTC
- Method: Independent public-source research; normalized scores are interpretations, not vendor scores.
- Future sources: Add a separate signed report using the same headings.

