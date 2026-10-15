# GPT-5.1 — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's November 2025 revised GPT-5 Thinking model for balanced reasoning/coding. ChatGPT's **Instant** and **Auto** are separate deployment/mode configurations; this report concerns API `gpt-5.1`, not `gpt-5.1-chat-latest` ([OpenAI launch](https://openai.com/index/gpt-5-1/)).
- **Provider / access:** OpenAI API `gpt-5.1` snapshot `gpt-5.1-2025-11-13` via **Responses and Chat Completions** ([API docs](https://developers.openai.com/api/docs/models/gpt-5.1)); [OpenCode Console](https://opencode.ai/docs/zen/) lists paid `gpt-5.1` Responses route. No verified free Zen API tier.
- **Release / knowledge:** ChatGPT rollout November 12, API snapshot November 13, 2025; September 30, 2024 cutoff ([OpenAI launch](https://openai.com/index/gpt-5-1/), [model docs](https://developers.openai.com/api/docs/models/gpt-5.1)).
- **IDs:** `gpt-5.1` first-party with stable `gpt-5.1-2025-11-13`; not 5.1 Pro/Instant or 5.1-Codex.
- **Context window:** [OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.1) **400,000 total / 128,000 max output**; [BenchLM](https://benchlm.ai/models/gpt-5-1) lists a 200K window for a measured provider route, not a change to first-party API's specification.
- **Modalities:** Text/image in → text output, reasoning none (API default), low/medium/high, function calling, structured output and Responses tools ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.1)); no native audio/video I/O.
- **Pricing (as of 2026-10-15):** [First-party OpenAI](https://developers.openai.com/api/docs/models/gpt-5.1) **$1.25 input / $0.125 cached input / $10 output per 1M**; [OpenCode Console](https://opencode.ai/docs/zen/) lists its provider-specific **$1.07/$0.107/$8.50** paid route.
- **Architecture:** Proprietary, unpublished parameter count ([OpenAI docs](https://developers.openai.com/api/docs/models/gpt-5.1)).

### Raw benchmarks found

OpenAI's [November launch](https://openai.com/index/gpt-5-1/) is primarily a product/behavior announcement, not a full numeric API benchmark table. Independent [Vals high effort](https://www.vals.ai/models/openai_gpt-5.1-2025-11-13) and [AA-attributed](https://benchlm.ai/models/gpt-5-1) results provide the model-specific evidence. Historic Vals November #2 news used a smaller cohort and must not be interpreted as its 2026 rank.

Agent / tool use:

- [Vals Terminal-Bench 2.0 **44.94% ±5.30**, SAGE **43.23% ±3.16**, MortgageTax **61.37% ±0.93**, TaxEval v2 **74.86% ±0.85**](https://www.vals.ai/models/openai_gpt-5.1-2025-11-13); [AA attributed τ² **81.9%**, GDPval-AA **930 Elo**](https://benchlm.ai/models/gpt-5-1). MCP Atlas/OSWorld/Claw-Eval for this exact 5.1 snapshot **no verified public score found**.

Reasoning / knowledge:

- [Vals GPQA Diamond **86.62% ±1.71**, MMLU-Pro **86.38% ±0.34**, MedScribe **88.09% ±1.94**](https://www.vals.ai/models/openai_gpt-5.1-2025-11-13); [AA GPQA **87.3%**, HLE **28.5%**, CritPt **4.9%**, Intelligence Index **24.7**](https://benchlm.ai/models/gpt-5-1) under a separately evolving index.

Coding:

- [Vals SWE-bench **69.80% ±2.06**, LiveCodeBench **86.49% ±0.98**, Vibe Code Bench v1.1 **24.61% ±4.25**, Terminal-Bench 2.0 **44.94%**](https://www.vals.ai/models/openai_gpt-5.1-2025-11-13). Exact-ID SWE-bench Pro or DeepSWE for base 5.1 **no verified public score found** in reviewed sources; 5.1-Codex is not interchangeable.

Long context / multimodal:

- [OpenAI 400K/128K API](https://developers.openai.com/api/docs/models/gpt-5.1) and [AA-LCR **80.0%**](https://benchlm.ai/models/gpt-5-1), but a window-length-specific 400K MRCR/GraphWalks result **not verified** for this exact snapshot.
- [Vals MMMU-Pro **83.18% ±0.90**](https://www.vals.ai/models/openai_gpt-5.1-2025-11-13) and [AA MMMU-Pro **75.5%**](https://benchlm.ai/models/gpt-5-1) under distinct visual harnesses; native input image/text only.

### Normalized scores (1–100)

- **Tool use: 70/100.** TB2.0 45%, τ² 81.9% and SAGE 43% point to functional but uneven agents; missing GUI/MCP tests.
- **Reasoning: 79/100.** GPQA 86–87%, HLE 28.5% and CritPt 4.9% indicate useful reasoning with clear hard-problem limits.
- **Context window: 84/100.** API 400K/128K, AA-LCR 80%; full 400K retrieval not established and some providers list smaller windows.
- **Multimodal: 66/100.** Text/image with MMMU 75–83% across harnesses, no audio/video native input or output.
- **Coding: 73/100.** SWE ~70%, LiveCodeBench 86.5%, Vibe Code 24.6% and TB2.0 45% limit long-horizon execution.
- **Cost efficiency: 74/100.** OpenAI $1.25/$10 or Console $1.07/$8.50 paid with caching; not a verified free API.
- **Overall Score: 74/100.** (70 + 79 + 84 + 66 + 73) / 5 = 74.4, half-up 74; general text/image assistant for bounded code and research when effort and current provider limits are known.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh OpenAI API/launch documentation compared with Vals high and AA-attributed exact-ID benchmark outcomes; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
