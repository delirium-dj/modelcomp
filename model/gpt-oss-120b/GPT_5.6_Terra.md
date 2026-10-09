# gpt-oss-120b — findings by GPT-5.6 Terra

- Source: OpenAI (`gpt-oss-120b`)
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** gpt-oss-120b
- **Short description:** OpenAI's most capable open-weight reasoning model, designed for locally controlled agentic deployments.
- **Provider / access:** downloadable open weights; not served through OpenAI API or ChatGPT; model ID `openai/gpt-oss-120b`.
- **Release / knowledge:** 2025-08-05 release; knowledge cutoff 2024-06-01.
- **IDs:** `openai/gpt-oss-120b`; no Zen Free ID verified.
- **Context window:** 131,072 tokens.
- **Modalities:** text input/output only; configurable reasoning, function calling, structured outputs, web browsing and Python-code execution support.
- **Pricing (as of 2026-09-28):** Apache 2.0 open weights; inference cost depends on host hardware/provider.
- **Architecture:** 117B total parameters, 5.1B active/token; 128-expert MoE with four active experts.

### Raw benchmarks found

Agent / tool use:

- Tau-Bench Retail: **67.8%** at high reasoning; Tau-Bench Airline: **49.2%** (OpenAI model card).

Reasoning / knowledge:

- GPQA Diamond: **80.1%**; MMLU: **90.0%**; HLE with tools: **19.0%** (high reasoning, OpenAI).
- AIME 2025 with tools: **97.9%** (OpenAI).

Coding:

- SWE-Bench Verified: **62.4%**; Aider Polyglot: **44.4%**; Codeforces with tools: **2,622 Elo** (high reasoning, OpenAI).

Long context:

- 128K native context; no long-context retrieval benchmark was located.

### Normalized scores (1–100)

- **Tool use: 81/100.** Tau-Bench Retail at 67.8% supports strong function/tool execution, while Airline 49.2% limits the score.
- **Reasoning: 84/100.** 80.1% GPQA and 97.9% AIME with tools are strong, but HLE is only 19.0% with tools.
- **Context window: 70/100.** 128K is useful but substantially below current frontier million-token contexts; no retrieval result was found.
- **Multimodal: 15/100.** This exact model is text-only.
- **Coding: 82/100.** 62.4% SWE-Bench Verified and 2,622 Codeforces-with-tools Elo establish solid coding ability.
- **Cost efficiency: 96/100.** Apache 2.0 weights enable self-hosting and customization, though hardware cost remains material.
- **Overall Score: 66/100.** Half-up mean of the five non-cost dimensions: 66.4; strong local text-agent option, limited by text-only modality and 128K context.

---

## Refresh note

OpenAI's current model page specifies 117B total/5.1B active parameters, Apache 2.0 licensing, 131,072-token context and maximum output, and a June 1, 2024 knowledge cutoff. It documents configurable reasoning plus function calling and structured outputs; image/audio/video are unsupported. [Official model page](https://developers.openai.com/api/docs/models/gpt-oss-120b)

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh public-internet research using OpenAI's official model page, release post, and model card; scores are normalized interpretations, not vendor scores.
