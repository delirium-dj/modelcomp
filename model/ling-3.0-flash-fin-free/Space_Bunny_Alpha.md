# Ling 3.0 Flash Fin — findings by Space Bunny Alpha

- Source: InclusionAI / Ant Group (`inclusionAI/Ling-3.0-flash-Fin`; OpenCode Zen free route)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin (Free tier)
- **Short description:** Finance-tuned MoE model from InclusionAI / Ant Group for source-grounded financial research, long-horizon tool use, valuation work, and coding-style agent execution.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-flash-Fin`; OpenCode Zen `opencode/ling-3-0-flash-fin-free`; OpenAI-compatible local serving examples use Chat Completions and tool-call parsers.
- **Release / knowledge:** Hugging Face repository creation is 2026-09-03. No reliable knowledge cutoff was shown in the reviewed model card.
- **IDs:** `inclusionAI/Ling-3.0-flash-Fin`; `opencode/ling-3-0-flash-fin-free`.
- **Context window:** 262,144 tokens (256K marketed; Artificial Analysis rounds the figure to 260K).
- **Modalities:** Text input/output; reasoning is enabled by default; tool calls and JSON/structured output are supported. The evaluated Artificial Analysis page lists text-only input.
- **Pricing (as of 2026-09-24):** The Zen route is a limited-time free promotion. Artificial Analysis reports about $0.075 input and $0.22 output per 1M tokens for an API route, with an 80% cache discount; provider rates vary.
- **Architecture:** Open-weight mixture of experts, 124B total parameters and 5.1B active parameters; MIT license.

### Raw benchmarks found

Agent / tool use:

- Finance Agent v2: **59.8%** (secondary exact reproduction of the InclusionAI launch chart, as indexed by BenchLM)
- APEX-Agents: **29.2%** (secondary exact reproduction of the InclusionAI launch chart, as indexed by BenchLM)
- SpreadsheetBench 2: **21.8%** (secondary exact reproduction of the InclusionAI launch chart, as indexed by BenchLM)
- FinFIRST, FinSearchComp Verified, FinCRAFT, and τ³-Banking are named in the official model card, but their exact values were not exposed in the reviewed text; **no verified public exact score found** for those rows.
- Toolathlon, Terminal-Bench, GDPval-AA, Claw-Eval, and MCP-Atlas: **no verified public exact score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23/100**, rank **#3/65** among its compared model class (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact score found**

Coding:

- LiveCodeBench v5, SWE-bench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public exact score found** for this exact Fin checkpoint in the reviewed sources.
- SpreadsheetBench 2 is useful evidence for spreadsheet operations, but is not a general coding benchmark.

Long context:

- No MRCR, RULER, or GraphWalks retrieval-at-length score was found. The official card documents a 262K context window and long-horizon financial-document workflows.

Sources consulted: [official Ling-3.0-flash-Fin model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-Fin), [Artificial Analysis Ling-3.0-flash-Fin](https://artificialanalysis.ai/models/ling-3-0-flash-fin), [BenchLM Ling 3.0 Flash Fin](https://benchlm.ai/models/ling-3-0-flash-fin), and the [OpenCode Zen documentation](https://opencode.ai/docs/zen/), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 52/100.** Finance Agent v2 59.8% and documented tool use are positive, but APEX 29.2% and SpreadsheetBench 2 21.8% show uneven complex execution.
- **Reasoning: 58/100.** The AA Index 23 and strong finance-specific positioning support useful reasoning; missing general GPQA/HLE values cap the score.
- **Context window: 82/100.** 262K is above the 200K tier, but no exact-model retrieval-at-length result was found.
- **Multimodal: 15/100.** The evaluated model is text-only; no image, audio, or video input is claimed.
- **Coding: 50/100.** Spreadsheet operations are measured, but no standard coding benchmark or LiveCodeBench result was found.
- **Cost efficiency: 100/100.** The free Zen promotion is exceptionally cheap, while the paid route remains low-priced; promotion limits and data-use terms apply.
- **Overall Score: 51.4/100.** (52 + 58 + 82 + 15 + 50) / 5 = 51.4. Best fit: financial research and tool-heavy execution where finance specialization matters more than general coding breadth.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of the official InclusionAI model card, Artificial Analysis, BenchLM, and OpenCode documentation; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
