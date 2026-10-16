# GPT-5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI (`developers.openai.com/api/docs/models/gpt-5`), benchlm.ai (`gpt-5-medium` variant), Artificial Analysis (`artificialanalysis.ai/models/gpt-5-medium`), llm-stats.com, userightai.com
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's previous intelligent reasoning model (default snapshot gpt-5-2025-08-07, released Aug 2025) for coding, reasoning, and agentic tasks across domains; superseded by GPT-6 Astra; configurable reasoning effort (minimal/low/medium/high); text+image input → text output; 400K context / 272K max input / 128K max output; knowledge cutoff Sep 30, 2024.
- **Provider / access:** OpenAI API (`gpt-5`, Chat Completions + Responses APIs); native OpenAI API, not OpenAI-compatible third-party. Benchmark coverage refers to the medium/effort variant (benchlm `gpt-5-medium`); the high/thinking variant (queue slug `gpt-5`) has sparse public numbers.
- **Release / knowledge:** Released August 2025 (llm-stats snapshot 2025-08-07); knowledge cutoff Sep 30, 2024; previous model, superseded by GPT-6 Astra per OpenAI.
- **IDs:** `gpt-5` / `gpt-5-2025-08-07` (OpenAI API); siblings `gpt-5-mini`, `gpt-5-nano`. No Free ID confirmed.
- **Context window:** 400,000 tokens; maximum input 272,000; max output 128,000. Verified on OpenAI API model details (conflicts with benchlm.ai medium listing 128K — the 400K figure is the official base model context).
- **Modalities:** Text and image in; text out; reasoning yes (effort minimal/low/medium/high); tool use yes (function_calling, web_search, file_search, image_generation, code_interpreter, mcp); structured_outputs yes; audio/video NOT supported per official API docs.
- **Pricing (as of 2026-10-16):** Input $1.25/1M tokens, cached input $0.125/1M, output $10/1M.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Benchmarks below are for the `gpt-5-medium` (reasoning medium) variant per benchlm.ai unless noted; base `gpt-5` public coverage is thin.

Agent / tool use:

- τ²-bench results: **86.5%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **22.9%** (Artificial Analysis)
- GPQA Diamond: **84.2%** (Artificial Analysis)
- HLE: **25.4%** (Artificial Analysis)
- AA-Omniscience Index **-10.9%**; Accuracy **39.5%**; Hallucination rate **83.2%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **76.0%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- IFBench: **70.6%** (Artificial Analysis)
- AA MATH-500: **99.1%** (Artificial Analysis)

Coding:

- No verified public SWE-bench / LiveCodeBench / DeepSWE numbers found for this exact variant.

Multimodal:

- AA-MMMU-Pro: **74.3%** (Artificial Analysis)
- Design Arena Website: **1186** (OpenRouter)
- Text+image in, text out per official API docs; no audio/video input.

Long context:

- Declared 400K context / 272K max input (OpenAI API docs); AA-LCR 76.0% shows long-context reasoning capability; no public full-depth needle-recall score found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage for this model is thin (benchlm medium variant: 13 of 638 slots), so dims rest heavily on Artificial Analysis and declared specs.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** τ²-bench 86.5% plus native tool set (web_search, file_search, code_interpreter, mcp, function_calling); capped by thin independent agentic benchmark coverage (no OSWorld/Terminal-Bench/AutomationBench found for this exact variant).
- **Reasoning: 62/100.** MATH-500 99.1%, GPQA 84.2%, AA-LCR 76.0%, IFBench 70.6%; capped by weak HLE (25.4%), CritPt (0.0), AA-Omniscience accuracy (39.5%), Intelligence Index (22.9%). Strong math/retrieval reasoning, weakest on HLE-style open-ended problems.
- **Context window: 80/100.** Verified 400K context / 272K max input (official OpenAI docs); capped because no public full-depth needle-recall score found and the 272K max input is below the 400K total window.
- **Multimodal: 68/100.** Text+image in, text out; MMMU-Pro 74.3%, Design Arena 1186; capped by absence of audio/video input per official specs and thin vision benchmark coverage.
- **Coding: 62/100.** Positioned for coding per OpenAI; no verified public SWE-bench/LiveCodeBench numbers found for this exact variant — scored conservatively.
- **Cost efficiency: 85/100.** $1.25/$10 with 90% cache-read discount — inexpensive flagship-tier input pricing; not counted toward Overall.
- **Overall Score: 68/100.** Half-up mean of (68 + 62 + 80 + 68 + 62) / 5 = 68.0 → 68. Best-fit recommendation: low-cost flagship reasoning model for math and structured tasks; superseded by GPT-6 Astra — verify on your own coding/agentic benchmarks given thin public coverage.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + benchlm.ai + Artificial Analysis + llm-stats independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
