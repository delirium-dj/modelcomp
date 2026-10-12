# GPT-6 Sol — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-6-sol`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI mid-tier frontier foundation model optimized for complex agentic workflows, software engineering, and document intelligence, positioned between GPT-6 Astra and GPT-6 Luna.
- **Provider / access:** OpenAI API (`openai/gpt-6-sol`), Microsoft Foundry, Amazon Bedrock, OpenRouter. Chat Completions and Responses API.
- **Release / knowledge:** September 22, 2026 release; knowledge cutoff August 2026.
- **IDs:** `openai/gpt-6-sol`, `azure/gpt-6-sol`
- **Context window:** 1,050,000 tokens (1.05M tokens); max output 128,000 tokens.
- **Modalities:** Multimodal input (text, image, documents); text output; reasoning effort tiers (`none`, `low`, `medium`, `high`, `xhigh`, `max`); tool calling and JSON schema support.
- **Pricing (as of October 2026):** $2.00 / 1M input, $10.00 / 1M output ($0.20 / 1M cached input).
- **Architecture:** Frontier transformer architecture with dynamic chain-of-thought reasoning tiers.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.1%**
- Tau2-Bench / Tau3-Banking: **74.5%**
- GDPval-AA: **1,285**
- Toolathon / SWE Atlas Codebase QnA: **58.6%**
- AutomationBench: High multi-step business workflow success

Reasoning / knowledge:

- GPQA Diamond: **68.4%**
- HLE (Humanity's Last Exam): **24.2%**
- LCR / MLCR: **71.0%**
- Omniscience Accuracy / Hallucination Rate: **85.1% / 9.4%**
- Artificial Analysis Intelligence Index: **82 / #12**

Coding:

- SWE-bench Verified: **52.4%**
- LiveCodeBench: **51.2%**
- SciCode / AA-SciCode: **38.6%**
- Vibe Code Bench: **73.5%**
- DeepSWE v1.1: Approaching flagship Astra-tier software synthesis

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **98.8%** retrieval consistency across 1.05M tokens.
- GDP.pdf: High-precision tabular and visual document extraction.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong tool calling via Chat Completions and Responses API, proven by 74.5% Tau2-Bench and 42.1% Terminal-Bench 2.1.
- **Reasoning: 87/100.** Versatile multi-tier reasoning (`none` to `max` effort), 68.4% GPQA Diamond, and 24.2% HLE.
- **Context window: 95/100.** 1.05M token input window and 128K token max output with 98.8% long-range retrieval fidelity.
- **Multimodal: 76/100.** Vision and document input intelligence verified on complex multi-page PDF benchmarks.
- **Coding: 88/100.** 52.4% SWE-bench Verified and 51.2% LiveCodeBench, offering competitive agentic coding throughput.
- **Cost efficiency: 74/100.** At $2.00 / $10.00 per 1M tokens ($0.20 cached), offers substantial cost savings compared to frontier Astra-class flagships.
- **Overall Score: 87/100.** Arithmetic mean of quality dimensions: (87 + 87 + 95 + 76 + 88) / 5 = 433 / 5 = 86.6 -> 87/100. High-efficiency workhorse model for enterprise coding and autonomous agent pipelines.

---

## Sources

- OpenAI GPT-6 Sol Announcement & Model Specs: https://openai.com/index/gpt-6-sol
- OpenAI Developer Platform Pricing & Context Specs: https://openai.com/pricing
- Emergent AI Independent Analysis & Benchmarks: https://emergent.sh/benchmarks/gpt-6-sol
- Artificial Analysis LLM Performance Leaderboard: https://artificialanalysis.ai/models/gpt-6-sol

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
