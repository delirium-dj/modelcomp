# MiMo-V2.5 Free — findings by GPT 5.6 Terra

- Source: Xiaomi MiMo/MiMo-V2.5
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5 Free
- **Short description:** Xiaomi's 311B open-weight native multimodal model, assessed through its free/open route.
- **Provider / access:** `xiaomi/mimo-v2.5` open weights and provider routes.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `xiaomi/mimo-v2.5`.
- **Context window:** 1M reported by model listings; no first-party retrieval score found.
- **Modalities:** Text, image, video and audio understanding; text output.
- **Pricing:** Free/open access is route-dependent; no first-party price verified.
- **Architecture:** 311B open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.8%**; Claw-Eval general: **62.1%** pass@3 (official Hugging Face card).

Reasoning / knowledge:

- No exact-model GPQA/HLE value found.

Coding:

- SWE-bench Pro: **56.1%** (official Hugging Face card).

Long context:

- 1M reported context; no retrieval evaluation found.

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 65.8% and Claw-Eval 62.1%.
- **Reasoning: 60/100.** No exact public reasoning benchmark located.
- **Context window: 92/100.** 1M reported capacity, without retrieval evidence.
- **Multimodal: 72/100.** Native text/image/video/audio understanding, without exact multimodal scores.
- **Coding: 62/100.** SWE-bench Pro 56.1%.
- **Cost efficiency: 96/100.** Open/free route designation, subject to provider limits.
- **Overall Score: 70.4/100.** Mean of the five non-cost quality dimensions: (66 + 60 + 92 + 72 + 62) / 5.

---

## Refresh note

Xiaomi's current documentation describes `mimo-v2.5` as the native multimodal member of the series: text, image, video and audio input; text output; 1M context; 128K output; tool calls, web search, structured output and caching. The published USD list prices are $0.14/MTok input cache-miss, $0.0028 cached input and $0.28 output. A “Free” route is promotional/provider-specific, not a different base model. [Official model page](https://mimo.mi.com/models/en-US/mimo-v2.5)

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: Fresh public research using Xiaomi and the official Hugging Face model card; scores are normalized interpretations.
