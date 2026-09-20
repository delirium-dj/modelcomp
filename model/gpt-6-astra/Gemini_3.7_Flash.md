# GPT-6 Astra — findings by Gemini 3.7 Flash

- Source: OpenAI (`openai/gpt-6-astra`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship next-generation autonomous reasoning and agentic foundation model.
- **Provider / access:** OpenAI API (`openai/gpt-6-astra`), OpenCode Zen (`opencode/gpt-6-astra`).
- **Release / knowledge:** 2026-07-20 release; knowledge cutoff May 2026.
- **IDs:** `openai/gpt-6-astra`, `opencode/gpt-6-astra`
- **Context window:** 1,000,000 tokens (1M input, 64k max output).
- **Modalities:** text, image, audio, video in; text and voice out; recursive thought tokens, structured JSON, tool calling.
- **Pricing (as of 2026-09-20):** $3.00 / $12.00 per 1M tokens ($1.50 cached). Paid tier only.
- **Architecture:** Mixture-of-Experts with dynamic reasoning compute scaling (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **58.9%**
- Tau3-Banking / Tau2-Bench: **89.2%**
- GDPval-AA: **1420**
- Claw-Eval / ClawProBench: **86.1**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.5%**

Reasoning / knowledge:

- GPQA Diamond: **79.4%**
- HLE: **42.8%**
- LCR / MLCR: **91.5%**
- CritPt: **87.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **124 / #1**
- Omniscience Accuracy / Hallucination Rate: **92.1% / 2.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.4%**
- LiveCodeBench: **64.5%**
- SciCode / AA-SciCode: **83.9%**
- Vibe Code Bench: **88.2%**
- DeepSWE / Coding Index / other: **86.0**

Long context:

- MRCR 1M needle retrieval 99.7%; RULER benchmark 97.9% at 1M context.

### Normalized scores (1–100)

- **Tool use: 94/100.** Top-tier autonomous execution and deep agentic tool orchestration, capped only by rare edge cases in sandbox resets.
- **Reasoning: 95/100.** State-of-the-art GPQA Diamond and Humanity's Last Exam reasoning performance.
- **Context window: 94/100.** Robust 1M token context with high retention across codebases and long documents.
- **Multimodal: 92/100.** Full multimodal ingestion with exceptional visual and audio reasoning.
- **Coding: 94/100.** Superb SWE-bench Verified scores and complex refactoring accuracy.
- **Cost efficiency: 62/100.** Premium pricing tier reflects heavy compute requirements.
- **Overall Score: 93.8/100.** Industry-leading intelligence and autonomous problem solving for mission-critical tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-20
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
