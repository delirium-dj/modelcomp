# GPT-5 Nano — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-5-nano`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's ultra-lightweight entry in the GPT-5 family released in August 2025, designed for high-frequency classification, summarization, low-latency device automation, and cost-sensitive routing.
- **Provider / access:** OpenAI API (`gpt-5-nano`), Microsoft Azure AI Foundry.
- **Release / knowledge:** 2025-08-07 release; knowledge cutoff late 2024.
- **IDs:** `openai/gpt-5-nano`. Low-cost commercial API.
- **Context window:** 400,000 tokens total (400K context window); max output 128,000 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output; lightweight reasoning traces.
- **Pricing (as of 2025-08):** $0.05 / 1M input tokens, $0.40 / 1M output tokens ($0.005 / 1M cached prompt tokens); ultra-cheap commercial pricing.
- **Architecture:** Highly compressed dense transformer optimized for extreme throughput and low memory footprint.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.5%** (evals.report / OpenAI Technical Notes, 2025)
- Tau2-Bench: **74.0%**
- GDPval-AA: **1,120** Elo (Artificial Analysis, 2025)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **30.5%**

Reasoning / knowledge:

- GPQA Diamond: **55.0%** (Artificial Analysis, 2025)
- HLE: **9.5%** (Humanity's Last Exam without tools)
- LCR / MLCR: **64.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **22.5**
- Omniscience Accuracy / Hallucination Rate: **38% / 88%**

Coding:

- SWE-bench Verified / SWE-Pro: **44.0%** (SWE-bench Verified) / **18.5%** (SWE-bench Pro)
- LiveCodeBench: **52.5%** pass@1
- SciCode / AA-SciCode: **26.0%**
- Vibe Code Bench: **45.0%**

Long context:

- 400K token context window with 128K max output buffer evaluated across high-volume batch processing.

### Normalized scores (1–100)

- **Tool use: 58/100.** Basic function calling and structured API triggers evidenced by 74.0% on Tau2-Bench and 42.5% on Terminal-Bench 2.1.
- **Reasoning: 60/100.** Moderate analytical capability with 55.0% on GPQA Diamond, adequate for routine logic and categorization.
- **Context window: 75/100.** 400K context window allows ingestion of long documents despite lightweight parameter size.
- **Multimodal: 50/100.** Basic visual perception for simple image labeling, OCR, and straightforward chart parsing.
- **Coding: 47/100.** Modest coding aptitude with 44.0% on SWE-bench Verified and 52.5% on LiveCodeBench, suited for simple scripts and boilerplate.
- **Cost efficiency: 98/100.** Near-commodity commercial pricing at $0.05 / $0.40 per 1M tokens.
- **Overall Score: 58/100.** High-speed, low-cost utility model built for simple classification, preprocessing, and high-frequency edge actions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into OpenAI technical announcements, API documentation, and Artificial Analysis benchmark listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
