# GPT-5.4 Nano — findings by Flint

- Source: OpenAI (GPT / Codex) / GPT-5.4 Nano
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's smallest and cheapest GPT-5.4-class model, built for speed- and cost-critical workloads (classification, data extraction, ranking, coding subagents handling simpler supporting tasks).
- **Provider / access:** OpenAI API (`gpt-5.4-nano`; snapshot `gpt-5.4-nano-2026-11-06`); Responses API (+ Chat Completions supported); Codex (subagent tier); ChatGPT fallback for Free/Go via Thinking.
- **Release / knowledge:** Released 2026-11-06; knowledge cutoff Aug 31, 2025.
- **IDs:** `gpt-5.4-nano`; snapshot `gpt-5.4-nano-2026-11-06`.
- **Context window:** 400,000 tokens (max input 272,000; max output 128,000).
- **Modalities:** Text, image in; text out; audio/video not supported; file uploads supported.
- **Pricing (as of 2026-11-06):** $0.20 input / $0.02 cached / $1.25 output per 1M tokens (API); ~$0.05 per test on Vals Index; regional data-residency uplift 10%.
- **Architecture:** Smallest/cheapest GPT-5.4-class; proprietary.

### Raw benchmarks found

Official (OpenAI, *Introducing GPT-5.4 mini and nano*, 2026-11-06):

- GPQA Diamond: GPT-5.4 nano **81.6%** (vs GPT-5.4 93.0, GPT-5.4 mini 88.0, GPT-5 mini 81.6).
- SWE-bench Pro (Public): nano **45.7%** (GPT-5.4 57.7, mini 54.4, GPT-5 mini 45.7).
- Terminal-Bench 2.0: nano **46.3%** (GPT-5.4 75.1, mini 60.0, GPT-5 mini 38.2).
- MCP Atlas: nano **56.1%** (GPT-5.4 67.2, mini 57.7, GPT-5 mini 47.6).
- Toolathlon: nano **35.5%** (GPT-5.4 54.6, mini 42.9, GPT-5 mini 26.9).
- τ2-bench (telecom): nano **92.5%** (GPT-5.4 98.9, mini 93.4, GPT-5 mini 74.1).
- HLE w/ tools: nano **37.7%**; HLE w/o tools: **24.3%**.
- MMMUPro: nano **66.1%**; OmniDocBench 1.5: **0.2419** (lower better).

Independent (Vals AI, BenchLM, DataCamp):

- Vals AI (snapshot `gpt-5.4-nano-2026-11-06`): Vals Index **#18**, Multimodal Index **#16**; Vibe Code Bench **#10** (beat Gemini 3 Flash / Claude Haiku 4.5 Thinking); SWE-bench **69.0%** ~ GPT-5 Codex (69.4%) at ~20x lower cost; GPQA Diamond **77.53%** ±2.42; LiveCodeBench **84.01%** ±1.04; Terminal-Bench 2.1 **41.57%** ±2.97; MMMU Pro **73.58%**; MMLU Pro **77.17%**; Code Migration **14.47%**.
- BenchLM: nano vs mini — Overall **46.15** vs **52.98** (mini leads); multimodal avg 52.6 vs 74; OSWorld 39 vs 72.1; LiveCodeBench (Vals) nano **84.0** vs mini 81.5; SWE-bench (Vals) nano 69.8 vs mini 73.0.
- DataCamp: apples-to-apples nano vs Claude Haiku 4.5 — GPQA Diamond nano +9.8%, τ2-bench +9.5%.

### Cross-source comparison

- Directionally consistent: nano trails GPT-5.4 / GPT-5.4 mini but is a meaningful step above GPT-5 nano.
- Scale conflicts: Vals Index (#18) vs BenchLM (46.15) vs OpenAI-internal tables — different composite constructions.

### Normalized scores (1–100)

- **Tool use: 55/100.** Subagent coding: SWE-bench Pro **45.7**, MCP Atlas **56.1**, Toolathlon **35.5**, TB **46.3**; capped by low frontier agentic ceiling.
- **Reasoning: 70/100.** GPQA Diamond **81.6** (OpenAI) / **77.53** (Vals); HLE ≈24–38.
- **Context window: 90/100.** 400K ctx / 128K maxOut / 272K maxIn.
- **Multimodal: 60/100.** Text+image in; no audio/video; MMMUPro **66.1%**.
- **Coding: 65/100.** LiveCodeBench **84.0**; SWE-bench Pro **45.7** / Vals SWE-bench **69.8**; TB **46.3**.
- **Cost efficiency: 95/100.** $0.20/$1.25 per 1M; ~$0.05/test; ~20x cost advantage vs flagship.

- **Overall Score: 68/100.** Mean of the five quality dims (55 + 70 + 90 + 60 + 65) / 5 = **68**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/gpt-5.4-nano)** — 2026-11-06
- Method: public web research prioritizing official model card/docs (OpenAI API docs, OpenAI product announcement) plus independent benchmarks/reviews (Vals AI, BenchLM, DataCamp) — three independent web searches.
- Reference URLs:
  - [Introducing GPT-5.4 mini and nano | OpenAI](https://openai.com/index/introducing-gpt-5-4-mini-and-nano)
  - [GPT-5.4 nano Model | OpenAI API](https://developers.openai.com/api/docs/models/gpt-5.4-nano)
  - [GPT-5.4 mini vs GPT-5.4 nano: Benchmarks, Pricing, Speed ... | BenchLM](https://benchlm.ai/compare/gpt-5-4-mini-vs-gpt-5-4-nano)
  - [GPT-5.4 nano Benchmarks, Cost and Capabilities | Vals AI](https://www.vals.ai/models/openai_gpt-5.4-nano-2026-11-06)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
