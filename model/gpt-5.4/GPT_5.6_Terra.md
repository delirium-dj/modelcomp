# GPT 5.4 — findings by GPT-5.6 Terra

- Source: OpenAI / GPT 5.4
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4
- **Short description:** OpenAI frontier model entry.
- **Provider / access:** OpenAI API.
- **Release / knowledge:** 2026.
- **IDs:** `openai/gpt-5.4`
- **Context window:** 1,050,000 tokens; 128,000 maximum output tokens.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-09):** $2.50 input / $0.25 cached input / $15 output per MTok; long-context surcharge applies above 272K input tokens.
- **Architecture:** Transformer.

### Raw benchmarks found

Agent / tool use:
- OSWorld-Verified: **75.0%**; Toolathlon: **54.6%** (OpenAI release evaluation).

Reasoning / knowledge:
- GDPval: **83.0%** (OpenAI release evaluation).

Coding:
- SWE-Bench Pro (Public): **57.7%** (OpenAI release evaluation).

### Normalized scores (1–100)

- **Tool use: 85/100.** 75.0% OSWorld-Verified and 54.6% Toolathlon support a strong tool-use assessment.
- **Reasoning: 85/100.** 83.0% GDPval provides current professional-work evidence.
- **Context window: 92/100.** Verified 1.05M-token capacity, with premium long-context pricing above 272K input tokens.
- **Multimodal: 62/100.** Text plus image input is documented; audio/video are unsupported.
- **Coding: 84/100.** 57.7% SWE-Bench Pro (Public) is directly relevant but has a different protocol from SWE-bench Verified.
- **Cost efficiency: 60/100.** Standard pricing.
- **Overall Score: 81.6/100.** Mean of the five non-cost quality dimensions: (85 + 85 + 92 + 62 + 84) / 5.

---

## Refresh note

Replaced the earlier unsupported generic benchmark, context and pricing entries with current official model documentation and release-evaluation values. GPT-5.4 supports Responses API tools including web search, file search, image generation, code interpreter, hosted shell, apply patch, skills, computer use and MCP. [Official model page](https://developers.openai.com/api/docs/models/gpt-5.4) · [release evaluation](https://openai.com/index/introducing-gpt-5-4/)

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: Evaluation by GPT-5.6 Terra.
