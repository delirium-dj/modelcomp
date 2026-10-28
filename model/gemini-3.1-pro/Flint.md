# Gemini 3.1 Pro — findings by Flint

- Source: Google / Gemini 3.1 Pro
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Google DeepMind's most advanced reasoning Gemini model; flagship of the Gemini 3 Pro series; built to refine the Gemini 3 Pro series with better thinking, improved token efficiency, grounded/factually consistent experience; optimized for software engineering behavior and agentic workflows)
- **Short description:** Frontier reasoning model with enhanced software engineering performance, improved agentic reliability, more efficient token usage; built on multimodal foundation (text, image, video, audio, PDF, code repos); 1M token context.
- **Provider / access:** Google AI (Gemini API `gemini-3.1-pro-preview`, AI Studio, Gemini Enterprise Agent Platform); Antigravity; custom tools endpoint `gemini-3.1-pro-preview-customtools` (bash/custom tools optimized); pricing $2/M in / $12/M out (Kilo/LLMBench/OpenRouter); cache read $0.10/M.
- **Release / knowledge:** Released 2026-02-19 (public preview); knowledge cutoff not stated in sources found.
- **IDs:** `gemini-3.1-pro-preview`, `gemini-3.1-pro-preview-customtools`.
- **Context window:** 1,048,576 tokens (1M); max output 65,536.
- **Modalities:** Text, image, video, audio, PDF input; text output; thinking; function calling, structured outputs, code execution, grounding, system instructions, context caching; multimodal.

- **Architecture:** Proprietary Google model; sparse MoE (Gemini 3 generation); multimodal with native reasoning.

### Raw benchmarks found

Coding:

- SWE-bench Verified (agentic coding, single attempt): **80.6%**
- Terminal-Bench 2.0 (Terminus-2 harness): **68.5%**
- Terminal-Bench 2.1 (Vals): **70.8%**

Reasoning / knowledge:

- Humanity's Last Exam Academic Reasoning (full set, text + MM, Thinking High): **44.4%**
- GPQA Diamond: **94.1%**
- ScienceIndex / SciCode: **58.9%** / **59%**

Long context / multimodal:

- MRCR v2 (8-needle long context, 128k avg): **84.9%**
- MMMU-Pro Multimodal: **80.5%**
- MMMLU Multilingual Q&A: **92.6%**

### Cross-source comparison

- Google reports Gemini 3.1 Pro Thinking High: SWE-bench Verified **80.6%**, TB2.0 **68.5%**, MCP Atlas **69.2%**, BrowseComp **85.9%**, LiveCodeBench Pro Elo **2887**, MRCR v2 **84.9%**, MMMU-Pro **80.5%**.
- LMArena: Gemini 3.1 Pro Arena Elo **1505** (Quality 96; tied with Claude Opus 4.7 / GPT-5.5 Pro at frontier band; top-10 with ~1500 barrier crossed).
- Independent: llmbenchmark.ai — SWE-bench Verified (Vals) **78.8%, LMArena WebDev **1447**, AA Intelligence **29.7**, AA Coding **68.8; BenchGecko composite **79.4%** / 92 in Coding category.

### Normalized scores (1–100)

- **Tool use: 65/100.** SWE-bench Verified **80.6%, TB2.1 (Vals) **70.8%, MCP Atlas **69.2%, TB2.0 **68.5% → agentic coding mid-high.
- **Reasoning: 75/100.** GPQA **94.1%, ARC-AGI-2 **77.1%, HLE **44.4%** → reasoning high.
- **Context window: 100/100.** Documented **1,048,576** (1M); MRCR v2 **84.9%**.
- **Multimodal: 82/100.** MMMU-Pro **80.5%, MMMLU **92.6% → multimodal strong.
- **Coding: 80/100.** SWE-bench Verified **80.6%, TB2.1 (Vals) **70.8%, TB2.0 **68.5%, DeepSWE **62.7% → coding strong.
- **Cost efficiency: 90/100.** $2/M in / $12/M out → mid-tier frontier pricing.

- **Overall Score: 80/100.** Mean of the five quality dims (Tool 65 + Reasoning 75 + Context 100 + Multimodal 82 + Coding 80) / 5 = 80.4 → 80; Cost efficiency excluded.

## Signature

- Provided by: **Flint (gemini-3.1-pro)** — 2026-10-22
- Method: public web research prioritizing official model card/docs (DeepMind, Google AI) plus independent benchmarks/reviews (BenchGecko, LMArena, llmbenchmark.ai, Vals AI, Artificial Analysis) — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
