# GPT-5.1 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI (`developers.openai.com/api/docs/models/gpt-5.1`), benchlm.ai/models/gpt-5-1, Artificial Analysis (`artificialanalysis.ai/models/gpt-5-1`), llm-stats.com, openai.com announcement
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's flagship model for coding and agentic tasks (default snapshot gpt-5.1-2025-11-13, released Nov 2025) with configurable reasoning/non-reasoning effort (none default, low/medium/high); text+image input → text output; 400K context / 128K max output; knowledge cutoff Sep 30, 2024.
- **Provider / access:** OpenAI API (`gpt-5.1`, Chat Completions + Responses APIs); native OpenAI API. Benchmark coverage thin (benchlm: 18 of 638 slots).
- **Release / knowledge:** Released November 2025; knowledge cutoff Sep 30, 2024; iterative update to GPT-5 balancing intelligence and speed.
- **IDs:** `gpt-5.1` / `gpt-5.1-2025-11-13` (OpenAI API); sibling `gpt-5.1-instant`. No Free ID confirmed.
- **Context window:** 400,000 tokens (official OpenAI API docs); benchlm.ai lists 200K — conflicting figure; max output 128,000.
- **Modalities:** Text and image in; text out; reasoning yes (configurable effort none/low/medium/high, adapts to task complexity); tool use yes (function_calling, web_search, file_search, image_generation, code_interpreter, apply_patch, mcp); structured_outputs yes; audio/video NOT supported per official API docs.
- **Pricing (as of 2026-10-16):** Input $1.25/1M tokens, cached input $0.125/1M, output $10/1M — identical to GPT-5.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model with adaptive effort.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **81.9%** (Artificial Analysis)
- GDPval-AA normalized: **16.3%** / Elo **930** (Artificial Analysis)
- Gert Labs: **41.24%** (gertlabs.com)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **24.7%** (Artificial Analysis)
- GPQA Diamond: **87.3%** (Artificial Analysis)
- HLE: **28.5%** (Artificial Analysis)
- AA-Omniscience Index **5.4%**; Accuracy **37.7%**; Hallucination rate **51.9%** (AA)
- AA-LCR (long-context reasoning): **80.0%** (Artificial Analysis)
- CritPt: **4.9%** (Artificial Analysis)
- IFBench: **72.9%** (Artificial Analysis)
- ARC-AGI-1: **72.83%** (Thinking High, ARC Prize verified)

Coding:

- AA Coding Index: **49.4%** (Artificial Analysis)
- Vibe Code Bench: **24.61%** (Vals AI)
- No verified public SWE-bench / LiveCodeBench numbers found for this exact model.

Multimodal:

- AA-MMMU-Pro: **75.5%** (Artificial Analysis)
- Design Arena Website: **1188** (OpenRouter)
- Text+image in, text out per official API docs; no audio/video input.

Long context:

- Declared 400K context (official) / benchlm 200K (conflicting); AA-LCR 80.0% shows long-context reasoning; no public full-depth needle-recall score found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 18 of 638 slots), so dims rest heavily on Artificial Analysis.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 66/100.** τ²-bench 81.9% plus rich native tool set (code_interpreter, apply_patch, mcp, function_calling); capped by thin agentic benchmark coverage (no OSWorld/Terminal-Bench/AutomationBench found).
- **Reasoning: 64/100.** GPQA 87.3%, ARC-AGI-1 72.83%, AA-LCR 80.0%, IFBench 72.9%; capped by weak HLE (28.5%), CritPt (4.9%), AA-Omniscience accuracy (37.7%), Intelligence Index (24.7%).
- **Context window: 80/100.** Verified 400K context (official OpenAI docs; benchlm lists 200K — conflicting); capped because no public full-depth needle-recall score found.
- **Multimodal: 68/100.** Text+image in, text out; MMMU-Pro 75.5%, Design Arena 1188; capped by absence of audio/video input and thin vision coverage.
- **Coding: 60/100.** Positioned as best for coding and agentic tasks per OpenAI; AA Coding Index 49.4%, Vibe Code Bench 24.61%; no verified SWE-bench/LiveCodeBench numbers — scored conservatively.
- **Cost efficiency: 85/100.** $1.25/$10 with 90% cache-read discount — inexpensive flagship-tier input pricing; not counted toward Overall.
- **Overall Score: 67.6/100.** Half-up mean of (66 + 64 + 80 + 68 + 60) / 5 = 67.6 → 68. Best-fit recommendation: configurable-effort flagship for coding/agentic tasks; superseded by GPT-6 Astra — verify on your own coding benchmarks given thin public coverage.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + benchlm.ai + Artificial Analysis + llm-stats independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
