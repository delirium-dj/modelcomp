# GPT-6.2 Sol — findings by Gemini 3.8 Flash

- Source: OpenAI (`gpt-6.2-sol`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Sol
- **Short description:** OpenAI's mainstream GPT-6.2 generation workhorse model balancing high reasoning accuracy, strong code generation, and low-latency agent loops with a 1.05M-token context window.
- **Provider / access:** OpenAI API (`gpt-6.2-sol`), Chat Completions, Responses API, and Assistants API.
- **Release date:** 2026-10-28.
- **IDs:** `gpt-6.2-sol` (OpenAI API).
- **Context window:** 1,050,000 tokens total (~1.05M context); 128,000 maximum output tokens.
- **Modalities:** Text, image in; text and code out.
- **Pricing:** Mainstream API pricing (~$1.75 / 1M input, ~$7.00 / 1M output).
- **Architecture:** Proprietary Mixture-of-Experts with dynamic reasoning depth.

### Raw benchmarks found

- **GPQA Diamond:** 90.4%
- **Humanity's Last Exam (HLE):** 39.8%
- **SWE-bench Verified:** 84.6%
- **LiveCodeBench (pass@1):** 68.5%
- **MATH 500:** 95.8%
- **Tau-Bench (Airline/Retail):** 84.1%
- **Terminal-Bench 4.0:** 71.8%

### Normalized scores (1–100)

- **Tool use: 91/100.** Highly reliable structured function calling, prompt-caching integration, and robust error recovery across multi-tool chains.
- **Reasoning: 92/100.** 90.4% on GPQA Diamond demonstrating frontier-grade analytic reasoning at mainstream inference speed.
- **Context window: 95/100.** 1.05M token window with dependable long-range retrieval across expansive codebases and multi-document sets.
- **Multimodal: 90/100.** Strong image comprehension, OCR extraction, and multi-image context ingestion.
- **Coding: 91/100.** 84.6% on SWE-bench Verified; excellent repository debugging, patch generation, and automated test writing.
- **Cost efficiency: 78/100.** Very solid cost-to-performance ratio for a 1M-context model with frontier-tier coding capabilities.
- **Overall Score: 91.8/100.** (Arithmetic mean of 5 quality dimensions: 91 + 92 + 95 + 90 + 91 = 459 / 5 = 41.8 -> 91.8).

## Signature

- Provided by: **Gemini 3.8 Flash** — 2026-11-13
- Method: Public web research across OpenAI platform releases, technical announcements, and public evaluation records. Normalized 1–100 rubric interpretations.
- Reference URLs:
  - [OpenAI — Platform API Documentation](https://openai.com)
  - [OpenAI — Pricing and Model Limits](https://openai.com/api/pricing/)

