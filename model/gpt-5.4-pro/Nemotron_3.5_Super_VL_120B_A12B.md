# GPT-5.4 Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI (`developers.openai.com/api/docs/models/gpt-5.4-pro`), benchlm.ai/models/gpt-5-4-pro (OpenAI launch page + ARC Prize + Epoch AI + Meta AI chart), Artificial Analysis
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's GPT-5.4 Pro — the compute-intensive variant that "produces smarter and more precise responses" (default snapshot gpt-5.4-pro-2026-03-05, released Mar 2026); Responses API only; reasoning effort medium/high/xhigh (default medium); text+image input → text output; 1.05M context / 128K max output; knowledge cutoff Aug 31, 2025.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`, Responses API only); native OpenAI API. Benchmark coverage thin (benchlm: 12 of 638 slots).
- **Release / knowledge:** Snapshot 2026-03-05; knowledge cutoff Aug 31, 2025; designed for tough problems, multi-minute responses, background mode recommended.
- **IDs:** `gpt-5.4-pro` / `gpt-5.4-pro-2026-03-05` (OpenAI API); siblings `gpt-5.4`, `gpt-5.4-mini`, `gpt-5.4-nano`. No Free ID confirmed.
- **Context window:** 1,050,000 tokens; max output 128,000; prompts >272K input priced at 2x input/1.5x output. Verified on OpenAI API model details and benchlm.ai.
- **Modalities:** Text and image in; text out; reasoning yes (medium/high/xhigh); tool use yes (function_calling, web_search, file_search, tool_search, image_generation, apply_patch, computer_use, mcp); image_generation supported as tool; structured_outputs yes; audio/video NOT supported per official API docs.
- **Pricing (as of 2026-10-16):** Input $30/1M tokens, output $180/1M tokens; no cached input listed; regional processing +10% uplift; among the most expensive OpenAI pricing (vs GPT-5.4 $2.5/$15).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (OpenAI GPT-5.4 launch)

Reasoning / knowledge:

- ARC-AGI-1: **94.50%** (XHigh, ARC Prize verified)
- ARC-AGI-2: **83.3%** (OpenAI GPT-5.4 launch)
- CritPt: **30.0%** (Artificial Analysis)
- HLE: **58.7%**; HLE w/o tools **42.7%** (OpenAI GPT-5.4 launch)
- FrontierScience: **36.7%** (OpenAI GPT-5.4 launch)
- FrontierMath legacy: **50%**; FrontierMath v2 Tiers 1-3: **82.456%**; Tier 4: **58.537%** (Epoch AI)

Coding:

- No verified public SWE-bench / LiveCodeBench / DeepSWE numbers found for this exact model.

Multimodal:

- No verified public MMMU-Pro/Chartography/ScreenSpot scores found for this exact model; text+image in per official docs, text out.

Long context:

- Declared 1.05M context (official OpenAI docs); no public long-context retrieval score found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 12 of 638 slots; no public coding or multimodal numbers), so dims rest heavily on OpenAI's launch numbers and ARC Prize.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** BrowseComp 89.3% plus rich native tool set (computer_use, mcp, web_search, file_search, function_calling, image_generation); capped by absence of public OSWorld/Terminal-Bench/Toolathlon scores for this exact model.
- **Reasoning: 80/100.** ARC-AGI-1 94.50%, ARC-AGI-2 83.3%, FrontierMath T1-3 82.5%, HLE 58.7%; capped by CritPt (30.0), FrontierScience (36.7). Elite puzzle/science reasoning.
- **Context window: 90/100.** Verified 1.05M context (official OpenAI docs); capped because no public full-depth needle-recall score found.
- **Multimodal: 65/100.** Text+image in, text out; no verified public multimodal benchmark scores found for this exact model; capped by text-only output and no audio/video input.
- **Coding: 62/100.** Positioned for tough problems but no verified SWE-bench/LiveCodeBench numbers found — scored conservatively.
- **Cost efficiency: 15/100.** $30/$180 is among the most expensive frontier pricing — not counted toward Overall.
- **Overall Score: 74/100.** Half-up mean of (72 + 80 + 90 + 65 + 62) / 5 = 73.8 → 74. Best-fit recommendation: high-compute reasoning model for hard puzzles/science at premium price; verify on your own coding/agentic tasks given thin public coverage and $30/$180 pricing.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + benchlm.ai + Artificial Analysis + ARC Prize + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
