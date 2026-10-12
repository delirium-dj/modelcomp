# OpenAI GPT-5 — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** OpenAI GPT-5
- **Short description:** OpenAI's foundational 2025 multimodal frontier reasoning model featuring adaptive thinking routers, 400K context, and multimodal input perception.
- **Provider / access:** OpenAI API (`gpt-5`), Microsoft Azure OpenAI Service, OpenRouter (`openai/gpt-5`).
- **Release / knowledge:** 2025-08-07 release; knowledge cutoff 2025-06.
- **IDs:** `openai/gpt-5`
- **Context window:** 400,000 tokens (400K input window, 128,000 max output tokens); verified via OpenAI API specifications.
- **Modalities:** Multimodal input (text, vision, audio); text output; adaptive reasoning effort, native tool calling, and structured JSON output.
- **Pricing (as of 2026-10):** $1.25 / 1M input, $10.00 / 1M output ($0.125 / 1M cached input).
- **Architecture:** Proprietary frontier Mixture-of-Experts (MoE) with unified routing between fast response and deep deliberative thinking.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **80.0%**
- Terminal-Bench 2.1: **48.5%**
- Agent Tool Chaining: High-reliability API interaction

Reasoning / knowledge:

- GPQA Diamond: **88.4%**
- AIME 2025: **94.6%** (no external code interpreter)
- HLE (Humanity's Last Exam): **24.1%**
- Artificial Analysis Intelligence Index: **73.0**

Coding:

- SWE-bench Verified: **74.9%**
- LiveCodeBench: **68.2%**
- SciCode: **44.8%**

Multimodal & Long context:

- MMMU / MMMU-Pro: **78.0% – 84.0%**
- Needle-In-A-Haystack / MRCR (400K): **99.2%** retrieval accuracy across 400K tokens

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong tool manipulation and dual-control conversational coordination on Tau2-Bench (80.0%).
- **Reasoning: 88/100.** Exceptional 88.4% GPQA Diamond and 94.6% AIME 2025 mathematical problem solving.
- **Context window: 86/100.** 400K token input with 128K output and 99.2% retrieval accuracy.
- **Multimodal: 80/100.** Rich multimodal support across vision and audio with strong 78%–84% MMMU performance.
- **Coding: 81/100.** Robust software engineering performance verified on SWE-bench Verified (74.9%).
- **Cost efficiency: 74/100.** Established commercial API pricing at $1.25 in / $10.00 out per 1M tokens.
- **Overall Score: 83/100.** Integer half-up mean of (80 + 88 + 86 + 80 + 81) / 5 = 83.0 -> 83/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Independent public internet research; scores are normalized 1–100 interpretations.
