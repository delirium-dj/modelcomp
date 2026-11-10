# Inkling Small — findings by Glyph Cluster

- Source: Thinking Machines (`inkling-small`, weights: `thinkingmachines/Inkling-Small`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines open-weights reasoning MoE model (266B/12B active) with 1M context and multimodal (text/image/speech) input, showing low aggregate intelligence for its size class but fast/concise and reasonably priced task execution per Artificial Analysis.
- **Provider / access:** Available via 2 API providers tracked by Artificial Analysis. Open weights on Hugging Face (`thinkingmachines/Inkling-Small`).
- **Release / knowledge:** Released 2026-07-30 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `inkling-small` (AA slug), Hugging Face `thinkingmachines/Inkling-Small`
- **Context window:** 1M tokens (Artificial Analysis).
- **Modalities:** Text, image, and speech input; text output; reasoning supported.
- **Pricing (as of 2026-11-10):** $0.30 / 1M input, $1.20 / 1M output (AA snapshot), 80% cache discount; blended ~$0.22/1M (7:2:1) per AA FAQ.
- **Architecture:** Open-weights MoE, **266B total / 12B active parameters**, Apache 2.0 license (AA).

### Raw benchmarks found

> Numbers below are for the exact model/ID `inkling-small` from accessible sources (primarily Artificial Analysis aggregates).

Agent / tool use:

- Artificial Analysis Intelligence Index (composite including agentic/coding evals): **13** (rank #21/26 among comparable open-weight models of similar size class), at the lower end vs median 23.
- Time per Intelligence Index task: **8.3 min** (quicker than median 13.1 min); cost per Intelligence Index task: **$0.20** (Artificial Analysis).
- Terminal-Bench 2.1: **no verified public score found** (component not extracted)
- Tau3-Banking / Tau2-Bench / GDPval-AA / MCP-Atlas / other agent benchmarks: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **13** (#21/26 in comparable class, below median 23) (Artificial Analysis).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (component not extracted)
- LCR / MLCR / CritPt / AA-Omniscience: **no verified public score found** (not extracted)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench / SciCode: **no verified public score found**
- Coding components included in Intelligence Index but exact scores **not extracted**.

Long context:

- Context window: **1M tokens** (Artificial Analysis). No verified MRCR/RULER/GraphWalks retrieval score found.

Performance/efficiency (AA snapshot): TTFA **27.57s**, output speed **73 tok/s**, output tokens from Intelligence Index **71.6M** (fairly concise vs median 99.3M).

### Normalized scores (1–100)

> Derived from AA Intelligence Index 13 (low for class), 1M context, multimodal speech/image input, and favorable speed/cost aggregates. Missing extracted per-benchmark details cap precision.

- **Tool use: 34/100.** Low composite intelligence in its class suggests weak agentic/tool-use performance; no extracted direct tool-use benchmark scores found despite efficient runtime.
- **Reasoning: 36/100.** AA Intelligence Index 13 is well below comparable-class median (23), indicating limited reasoning/knowledge performance relative to peers.
- **Context window: 90/100.** 1M-token context window reported; retrieval quality at length not independently verified by benchmark scores.
- **Multimodal: 62/100.** Supports text, image, and speech input with text output (broader modality coverage than text+image-only models), but no verified multimodal benchmark scores found.
- **Coding: 38/100.** Below-median composite index implies weak coding capability for class; no extracted SWE-bench/LiveCodeBench specifics.
- **Cost efficiency: 70/100.** Moderately priced ($0.30/$1.20) with low $0.20 per Intelligence Index task and quick/concise execution, offering good efficiency despite low intelligence.
- **Overall Score: 52/100.** Mean of five non-cost dims `(34+36+90+62+38)/5 = 52`. Best fit as a fast, low-cost, large-context multimodal open model for lightweight tasks where top-tier reasoning/coding is not required.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, Hugging Face metadata via AA); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Inkling Small](https://artificialanalysis.ai/models/inkling-small)
  - [Hugging Face — thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
