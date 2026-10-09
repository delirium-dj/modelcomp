# MiMo-V2.6-Flash — findings by GPT-5.6 Terra

- Source: Xiaomi MiMo (`mimo-v2.6-flash`)
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi MiMo's full-modality, high-throughput reasoning model for high-frequency professional workflows.
- **Provider / access:** Xiaomi MiMo Open Platform; ID `mimo-v2.6-flash`.
- **Release / knowledge:** September 2026; knowledge cutoff not disclosed.
- **IDs:** `mimo-v2.6-flash`; no Zen Free ID verified.
- **Context window:** 1,000,000 tokens, 128,000 maximum output tokens ([Xiaomi model page](https://mimo.mi.com/models/en-US/mimo-v2.6-flash)).
- **Modalities:** text, image, video and audio understanding; text output; deep thinking, tool calls, web search and structured output.
- **Pricing (as of 2026-09-29):** $0.14/M uncached input, $0.0028/M cached input, and $0.28/M output ([Xiaomi pricing](https://mimo.mi.com/docs/pricing)).
- **Architecture:** Xiaomi did not disclose V2.6-Flash parameter counts in the documentation reviewed.

### Raw benchmarks found

Agent / tool use:

- Xiaomi reports agent-benchmark improvements but did not disclose individual V2.6-Flash agent scores in the accessible release source.

Reasoning / knowledge:

- Xiaomi reports V2.6-Flash comprehensively surpasses MiMo-V2.5-Pro; no directly comparable public academic percentage was found.

Coding:

- DeepSWE v1.1: **65.7%** after reinforcement learning, up from **48.8%** (Xiaomi V2.6 announcement).

Long context:

- 1M context is documented; no retrieval score was found.

### Normalized scores (1–100)

- **Tool use: 83/100.** Native tools/web search and improved agent-workflow positioning, capped by no raw agent benchmark.
- **Reasoning: 82/100.** Xiaomi's stated improvement over V2.5-Pro supports a strong score, capped by sparse public raw evidence.
- **Context window: 92/100.** Verified 1M window and 128K output.
- **Multimodal: 92/100.** Native text, image, video and audio understanding.
- **Coding: 87/100.** DeepSWE v1.1 at 65.7% is strong long-horizon coding evidence.
- **Cost efficiency: 100/100.** $0.14/M input and $0.28/M output are exceptionally inexpensive.
- **Overall Score: 87/100.** Half-up mean of the five non-cost dimensions: 87.2; an exceptional-value full-modality model for high-volume work.

---

## Refresh note

Xiaomi confirms MiMo V2.6 Flash is one of two native fully multimodal V2.6 releases and documents the lowercase API route `mimo-v2.6-flash`. [Official release](https://mimo.mi.com/docs/en-US/news/latest/v2-6)

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh public-internet research using Xiaomi MiMo official model and release pages; scores are normalized 1–100 interpretations, not official vendor scores.
