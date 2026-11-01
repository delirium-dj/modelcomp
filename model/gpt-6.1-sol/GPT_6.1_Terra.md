# GPT-6.1 Sol — findings by GPT-6.1 Terra

- Source: OpenAI / GPT-6.1 Sol
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's reasoning model for software engineering, computer use and professional workflows, positioned below Astra in price.
- **Provider / access:** OpenAI Responses API and Chat Completions; OpenAI says tool calling requires Responses ([OpenAI](https://developers.openai.com/api/docs/models/gpt-6.1-sol)).
- **Release / knowledge:** Released 2026-09-29 per [Vals](https://www.vals.ai/models/openai_gpt-6.1-sol); knowledge cutoff 2026-04-30 per OpenAI.
- **IDs:** `gpt-6.1-sol` on OpenAI; no free API route verified.
- **Context window:** 1,050,000 total; 922,000 maximum input and 128,000 maximum output. Codex and ChatGPT Work use a 500K default per OpenAI.
- **Modalities:** Text and image input, text output; reasoning and tools supported. Audio and video are not supported by the model API.
- **Pricing (2026-11-01):** Standard $2 input / $0.10 cached input / $10 output per million tokens. Above 272K input, the full request uses 2× input/cache and 1.5× output rates ([OpenAI](https://developers.openai.com/api/docs/models/gpt-6.1-sol)).
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 4.0 **55.05% ± 1.82**, Terminal-Bench-Science **52.86% ± 6.01**, and Vals Index **63.94% ± 1.07** ([Vals](https://www.vals.ai/models/openai_gpt-6.1-sol)).
- OpenAI reports OSWorld 2.0 offline within 2.1 percentage points of Astra, but its launch page provides that relative claim rather than a separate precise figure ([OpenAI](https://openai.com/index/introducing-gpt-6-1-sol)).
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified exact-model score found here.

Reasoning / knowledge:

- Vals ProofBench v1.1 **99.00% ± 1.00** and Science Index **59.63% ± 2.31** ([Vals](https://www.vals.ai/models/openai_gpt-6.1-sol)).
- GPQA Diamond, HLE and CritPt: no exact-model score verified in the sources used here.

Coding:

- Vals Vibe Code Bench v1.1 **88.93% ± 1.89** and Code Migration v1.1 **77.32% ± 2.98** ([Vals](https://www.vals.ai/models/openai_gpt-6.1-sol)).
- OpenAI reports matching Astra on DeepSWE v1.1 without an exact number in the retrieved launch text; no numerical value is inferred.
- SWE-bench Verified / Pro, LiveCodeBench and SciCode: no verified public score found here.

Long context:

- OpenAI documents a 1.05M context; no exact-model MRCR or RULER retrieval percentage verified in this research.

### Normalized scores (1–100)

- **Tool use: 94/100.** Independent terminal and science results support strong agentic performance; benchmark and harness differences limit comparisons.
- **Reasoning: 94/100.** Strong independent proof and science results support a high score; GPQA and HLE were not verified here.
- **Context window: 95/100.** A documented 1.05M window earns the top size tier; no 98%+ long-range retrieval score verified.
- **Multimodal: 70/100.** Image input is supported; OpenAI explicitly excludes audio and video inputs and lists text output.
- **Coding: 95/100.** Strong independent Vibe Code and code-migration results support a high score, with task-dependent variation.
- **Cost efficiency: 84/100.** $2/$10 rates and cheap cache reads offer reasonable value, though long-context requests cost more.
- **Overall Score: 90/100.** (94 + 94 + 95 + 70 + 95) / 5 = 89.6, rounded to 90; suited to coding and tool-driven work with attention to long-context billing.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Relative vendor claims are not converted to invented precise measurements.
- Reference URLs:
  - [OpenAI announcement](https://openai.com/index/introducing-gpt-6-1-sol)
  - [OpenAI model specification and pricing](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
  - [Vals independent evaluations](https://www.vals.ai/models/openai_gpt-6.1-sol)
- Future sources: add a new file next to this one using the same headings.
