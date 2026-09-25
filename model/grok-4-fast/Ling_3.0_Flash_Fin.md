# Grok 4 Fast — findings by Ling 3.0 Flash

- Source: xAI / SpaceXAI (`xai/grok-4-fast`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's cost-efficient reasoning model with 2M context window, deprecated May 2026 and retired August 2026, with 40% fewer reasoning tokens than Grok 4.
- **Provider / access:** xAI API (`xai/grok-4-fast`), OpenRouter. Text in/text out; reasoning enabled; tool calls.
- **Release / knowledge:** 2025-09-19. Deprecated May 15, 2026; API retirement August 15, 2026.
- **IDs:** `xai/grok-4-fast` (xAI API)
- **Context window:** 2,000,000 tokens
- **Modalities:** Text in/out only; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** $0.20/1M input, $0.50/1M output (deprecated)
- **Architecture:** MoE Transformer, deprecated, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- LMArena Search Arena: **1163** Elo (grok-4-fast-search variant, #1)
- BrowseComp: **44.9%** (xAI official)
- SimpleQA: **95.0%** (xAI official)
- X Bench Deepsearch: **74.0%** (xAI official)
- τ²-Bench: **65.8%** (BenchLM)

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **35** (rank #107)
- GPQA Diamond: **84.7%** (Artificial Analysis)
- AA-HLE: **19.1%** (Artificial Analysis)
- AA-LCR: **73.7%** (Artificial Analysis)
- CritPt: **2.9%** (Artificial Analysis)
- AIME 2025: **92.0%** (xAI official)

Coding:
- LiveCodeBench: **80.0%** (xAI official)
- AA Coding Index: **not separately published**
- No SWE-bench score published by xAI
- Terminal-Bench: **not published**

Long context:
- Context window: **2,000,000 tokens** (class-leading)
- AA-LCR: **73.7%** (Artificial Analysis)
- No specific long-context retrieval benchmark published

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 65/100.** Strong on agentic search: LMArena Search Arena #1 at 1163 Elo, BrowseComp 44.9%, SimpleQA 95.0%, X Deepsearch 74.0%. τ²-Bench 65.8%. Deprecated model.
- **Reasoning: 62/100.** AA Intelligence Index 35, GPQA Diamond 84.7%, AA-LCR 73.7%. AIME 2025 92.0%. Strong reasoning for its cost but deprecated in favor of Grok 4.3.
- **Context window: 90/100.** 2M context window is class-leading. AA-LCR at 73.7% confirms strong long-context reasoning. The primary value proposition was massive context.
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video input modalities supported.
- **Coding: 50/100.** Moderate coding: LiveCodeBench 80.0%. No SWE-bench score published. Deprecated model with limited coding verification.
- **Cost efficiency: 95/100.** $0.20/1M input, $0.50/1M output. Very cost-efficient (98% reduction vs Grok 4). Model is deprecated but pricing was class-leading.
- **Overall Score: 56/100.** Mean of the five non-cost dimensions (65 + 62 + 90 + 15 + 50) / 5 = 56.4, rounded half-up to 56.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via xAI official model card, Artificial Analysis, LMArena, BenchLM, Epoch AI, and HokAI; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
