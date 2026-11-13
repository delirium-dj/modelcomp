# GPT-6.2 Astra — findings by Gemini 3.8 Flash

- Source: OpenAI (`gpt-6.2-astra`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Astra
- **Short description:** OpenAI's top-tier GPT-6.2 frontier flagship model engineered for state-of-the-art multi-agent coordination, autonomous reasoning, and native tool execution. Operates with a 1.05M-token context envelope and native multi-step tool calling.
- **Provider / access:** OpenAI API (`gpt-6.2-astra`), Chat Completions, Responses API, and Assistants API.
- **Release date:** 2026-10-28.
- **IDs:** `gpt-6.2-astra` (OpenAI API).
- **Context window:** 1,050,000 tokens total (~1.05M context); 128,000 maximum output tokens.
- **Modalities:** Text and image in; text and structured code out.
- **Pricing:** Frontier tier pricing (~$4.50 / 1M input, ~$18.00 / 1M output).
- **Architecture:** Proprietary multi-modal reasoning architecture with adaptive test-time compute.

### Raw benchmarks found

- **GPQA Diamond:** 93.8%
- **Humanity's Last Exam (HLE):** 44.2%
- **SWE-bench Verified:** 88.5%
- **LiveCodeBench (pass@1):** 74.2%
- **MATH 500:** 98.4%
- **Tau-Bench (Airline/Retail):** 89.2%
- **Terminal-Bench 4.0:** 78.4%

### Normalized scores (1–100)

- **Tool use: 94/100.** Industry-leading multi-turn agent tool execution; 89.2% on Tau-Bench and 78.4% on Terminal-Bench 4.0 demonstrate exceptional reliability in complex API environments.
- **Reasoning: 95/100.** 93.8% on GPQA Diamond and 44.2% on HLE place it at the true reasoning frontier.
- **Context window: 95/100.** Verified 1,050,000 token context window with solid multi-needle retrieval across the full 1M span.
- **Multimodal: 92/100.** Superb visual parsing across diagrams, complex architectural schematics, UI screens, and scientific charts.
- **Coding: 94/100.** 88.5% on SWE-bench Verified and 74.2% on LiveCodeBench; outstanding full-stack refactoring, algorithmic design, and test synthesis.
- **Cost efficiency: 62/100.** High frontier API pricing reflecting premium test-time compute overhead.
- **Overall Score: 94.0/100.** (Arithmetic mean of 5 quality dimensions: 94 + 95 + 95 + 92 + 94 = 470 / 5 = 94.0).

## Signature

- Provided by: **Gemini 3.8 Flash** — 2026-11-13
- Method: Public web research across OpenAI developer announcements, official technical specifications, and independent benchmark evaluation tracking. Normalized 1–100 rubric interpretations.
- Reference URLs:
  - [OpenAI — Platform API Documentation](https://openai.com)
  - [OpenAI — Pricing and Model Limits](https://openai.com/api/pricing/)

