# Gemini 2.5 Pro — findings by LongCat 2.5 Preview

- Source: Google DeepMind/gemini-2.5-pro
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's state-of-the-art thinking model from the Gemini 2.5 generation, capable of reasoning over complex problems in code, math, and STEM. Features 1M context, native multimodal input (text, image, audio, video, PDF), and thinking capabilities. Now limited to users with prior usage history.
- **Provider / access:** Google AI Studio (`gemini-2.5-pro`), Gemini API, Google Cloud Vertex AI, OpenRouter, Vercel AI Gateway. Note: access limited to users who have actively used 2.5 models in the past.
- **Release / knowledge:** 2025-06-17; knowledge cutoff January 2025.
- **IDs:** `google/gemini-2.5-pro`
- **Context window:** 1,048,576 tokens (verified via Google AI docs, OpenCode, BenchGecko); up to 65,536 output tokens.
- **Modalities:** Text, Image, Audio, Video, PDF input; Text output. Reasoning: yes (thinking). Tool calling: yes (function calling, code execution, file search, structured outputs, search grounding, URL context).
- **Pricing (as of 2026-10-09):** $1.25/1M input, $10.00/1M output (≤200K tokens); $2.50/$15.00 (>200K tokens). Cached input $0.125/1M. Batch API supported.
- **Architecture:** Proprietary decoder-only transformer. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic (BenchGecko): **18.4 / #26 globally**
- Terminal-Bench 2.0: **32.6%** (LLMReference)
- Function calling: supported (Google AI docs)
- Code execution: supported (Google AI docs)
- File search: supported (Google AI docs)
- Search grounding: supported (Google AI docs)

Reasoning / knowledge:

- AA Intelligence Index: **16.7 / #46 of 66** (Serenities AI)
- GPQA: **86.4%** (LLMReference)
- HLE: **18.8%** (LLMReference, BenchLM)
- MATH: **88.0%** (Serenities AI)
- GSM8K: **95.5%** (Serenities AI)
- BBH: **94.5%** (Serenities AI)
- Winogrande: **92.0%** (Serenities AI)
- TruthfulQA: **84.8%** (Serenities AI)
- MT-Bench: **9.3** (Serenities AI)
- MMLU-Pro: **84.0%** (Serenities AI)

Coding:

- SWE-bench Verified: **63.8%** (LLMReference)
- LiveCodeBench: **75.6%** (LLMReference)
- HumanEval: **93.1%** (LLMReference)
- Aider polyglot: **84.7** (BenchGecko)
- MATH level 5: **95.6%** (BenchGecko)
- Coding (BenchGecko): **52.4 / #78 globally**

Long context:

- Context window: **1,048,576 tokens** (verified via Google AI docs, OpenCode)

Multimodal:

- Text, Image, Audio, Video, PDF input (Google AI docs)
- Multimodal & Grounded (BenchLM): **44.3 / #79/168**
- Native multimodal with audio and video understanding

### Normalized scores (1–100)

- **Tool use: 72/100.** Function calling + code execution + file search + structured outputs + search grounding. Good tool use but agentic performance is below frontier (Terminal-Bench 2.0 32.6%).
- **Reasoning: 72/100.** AA Intelligence Index 16.7, GPQA 86.4%, HLE 18.8%, MATH 88.0%. Good reasoning across math and science, but below frontier on hardest tasks.
- **Context window: 92/100.** 1M token context verified via multiple sources. Among the largest context windows available.
- **Multimodal: 90/100.** Text, Image, Audio, Video, PDF input — the broadest multimodal coverage of any model. Native audio and video understanding.
- **Coding: 72/100.** SWE-bench Verified 63.8%, LiveCodeBench 75.6%, HumanEval 93.1%. Decent coding, below frontier on agentic coding tasks.
- **Cost efficiency: 65/100.** $1.25/$10.00 per 1M tokens (≤200K). Moderate pricing for a flagship model. Higher tier for >200K tokens.
- **Overall Score: 80/100.** Mean of Tool (72), Reasoning (72), Context (92), Multimodal (90), Coding (72) = 398/5 = 79.6 → 80. Strong multimodal model with excellent context and broad modality coverage, but aging (June 2025) and below current frontier on reasoning and coding.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
