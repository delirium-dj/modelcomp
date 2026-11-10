# MiniMax-M3 — findings by Glyph Cluster

- Source: MiniMax (`minimax/minimax-m3`, weights: `MiniMaxAI/MiniMax-M3`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M3
- **Short description:** MiniMax open-weights reasoning MoE model (428B/23B active) with 1M context and multimodal (text/image/video) input, positioned as a reasonably priced but below-median-intelligence model in its class per Artificial Analysis.
- **Provider / access:** Available via multiple API providers tracked by Artificial Analysis (12 providers listed) and OpenRouter (`minimax/minimax-m3`). Open weights on Hugging Face (`MiniMaxAI/MiniMax-M3`). MiniMax platform docs list M3 in its language model lineup.
- **Release / knowledge:** Released 2026-06-01 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `minimax/minimax-m3`, Hugging Face `MiniMaxAI/MiniMax-M3`
- **Context window:** 1M tokens (Artificial Analysis).
- **Modalities:** Text, image, and video input; text output; reasoning supported.
- **Pricing (as of 2026-11-10):** $0.30 / 1M input, $1.20 / 1M output (AA snapshot, MiniMax API median), 80% cache discount; blended ~$0.22/1M (7:2:1) per AA FAQ. OpenRouter/provider pricing varies (~$0.224/$0.88 to $0.45/$1.80 tiers).
- **Architecture:** Open-weights MoE, **428B total / 23B active parameters**. License: MINIMAX COMMUNITY LICENSE (commercial use with restrictions per AA FAQ).

### Raw benchmarks found

> Numbers below are for the exact model/ID from accessible sources (primarily Artificial Analysis aggregates).

Agent / tool use:

- Artificial Analysis Intelligence Index (composite including agentic/coding evals): **19** (rank #16/26 among comparable open-weight models of similar size class), below median 23.
- Time per Intelligence Index task: **12.4 min** (quicker than median 13.1 min); cost per Intelligence Index task: **$1.29** (Artificial Analysis).
- Terminal-Bench 2.1: **no verified public score found** (component not extracted)
- Tau3-Banking / Tau2-Bench / GDPval-AA / MCP-Atlas / other agent benchmarks: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **19** (#16/26 in comparable class, below median 23) (Artificial Analysis).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (component not extracted)
- LCR / MLCR / CritPt / AA-Omniscience: **no verified public score found** (not extracted)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench / SciCode: **no verified public score found**
- Coding components included in Intelligence Index but exact scores **not extracted**.

Long context:

- Context window: **1M tokens** (Artificial Analysis). No verified MRCR/RULER/GraphWalks retrieval score found.

Performance/efficiency (AA snapshot): TTFA **61.28s**, output speed **123 tok/s**, output tokens from Intelligence Index **104M** (somewhat verbose vs median 99.3M).

### Normalized scores (1–100)

> Derived from AA Intelligence Index 19 (below median for class), multimodal input coverage, and pricing/performance aggregates. Missing extracted per-benchmark details cap precision.

- **Tool use: 40/100.** Below-median composite intelligence in its class suggests limited agentic/tool-use strength; no extracted direct tool-use benchmark scores found.
- **Reasoning: 42/100.** AA Intelligence Index 19 is below the comparable-class median (23), indicating weaker reasoning/knowledge performance relative to peers; specific GPQA/HLE components not extracted.
- **Context window: 88/100.** 1M-token context window reported; retrieval quality at length not independently verified by benchmark scores.
- **Multimodal: 65/100.** Supports text, image, and video input with text output (broader than text+image-only peers), but no verified vision/video benchmark scores found.
- **Coding: 44/100.** Composite index below median implies modest coding capability for class; no extracted SWE-bench/LiveCodeBench specifics.
- **Cost efficiency: 58/100.** Moderately priced at $0.30/$1.20 with $1.29 per Intelligence Index task and reasonable speed for class; not a low-cost leader but competitive.
- **Overall Score: 56/100.** Mean of five non-cost dims `(40+42+88+65+44)/5 = 55.8` → **56** (half-up). Best fit as a large-context, multimodal open MoE for general tasks where top-tier reasoning/coding is not required.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter, MiniMax platform docs, Hugging Face metadata via AA); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — MiniMax-M3](https://artificialanalysis.ai/models/minimax-m3)
  - [OpenRouter — minimax/minimax-m3](https://openrouter.ai/minimax/minimax-m3)
  - [MiniMax Platform — Model overview](https://platform.minimaxi.com/docs/guides/models-intro)
  - [Hugging Face — MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
