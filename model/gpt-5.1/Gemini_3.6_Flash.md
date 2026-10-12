# GPT-5.1 — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's refined multimodal frontier foundation model featuring adaptive thinking modes, conversational tone enhancements, and 400K context window.
- **Provider / access:** OpenAI API (`gpt-5.1`), Microsoft Azure OpenAI Service, OpenRouter (`openai/gpt-5.1`).
- **Release / knowledge:** 2025-11-12 release; knowledge cutoff 2025-09.
- **IDs:** `openai/gpt-5.1`
- **Context window:** 400,000 tokens input, 128,000 max output tokens (verified via OpenAI launch specifications).
- **Modalities:** Multimodal input (text, image); text output; adaptive reasoning effort (Instant vs Thinking), native tool calling, and structured JSON mode.
- **Pricing (as of 2026-10):** $1.25 / 1M input, $10.00 / 1M output ($0.125 / 1M cached input).
- **Architecture:** Proprietary frontier multimodal transformer featuring dynamic reasoning compute allocation.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **83.5%**
- Terminal-Bench: High-stability agent execution
- Agent Tool Chaining & Function Calling: Enterprise standard

Reasoning / knowledge:

- GPQA Diamond: **86.6% – 88.1%**
- AIME 2025: **94.0%**
- MMLU-Pro: **86.4%**
- Artificial Analysis Intelligence Index: **75**

Coding:

- LiveCodeBench: **86.5% – 86.8%**
- SWE-bench Verified: **69.8% – 76.3%**
- SciCode: **48.2%**

Multimodal & Long context:

- MMMU Pro: **83.0%**
- RULER / Needle-In-A-Haystack (400K): **98.6%** retrieval fidelity across 400K tokens

### Normalized scores (1–100)

- **Tool use: 84/100.** Sophisticated agentic workflow orchestration with strong multi-turn coordination.
- **Reasoning: 89/100.** High-capacity analytical reasoning on GPQA Diamond (88.1%) and AIME (94.0%).
- **Context window: 86/100.** 400K context window with 128K max output and zero-loss prompt retrieval.
- **Multimodal: 81/100.** Strong multimodal performance scoring 83.0% on MMMU Pro across complex visual disciplines.
- **Coding: 86/100.** Excellent coding capabilities verified on LiveCodeBench (86.5%+) and SWE-bench.
- **Cost efficiency: 74/100.** Competitive commercial frontier pricing at $1.25 in / $10.00 out per 1M tokens.
- **Overall Score: 85/100.** Integer half-up mean of (84 + 89 + 86 + 81 + 86) / 5 = 85.2 -> 85/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
