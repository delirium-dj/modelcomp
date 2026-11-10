# Grok 4.7 — findings by Glyph Cluster

- Source: SpaceXAI/xAI (`x-ai/grok-4.7`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (Xhigh configuration tracked by Artificial Analysis)
- **Short description:** xAI/SpaceXAI proprietary reasoning model with 500k context, text+image input, and below-median aggregate intelligence for its price tier but high verbosity and slow task completion per Artificial Analysis.
- **Provider / access:** Available via SpaceXAI/xAI and cloud providers tracked by Artificial Analysis (3 providers listed) and OpenRouter as `x-ai/grok-4.7`. xAI developer docs list Grok 4.7 with tiered pricing by prompt length.
- **Release / knowledge:** Released 2026-09-21 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `x-ai/grok-4.7`
- **Context window:** 500k tokens (Artificial Analysis, xAI docs).
- **Modalities:** Text and image input; text output; reasoning supported.
- **Pricing (as of 2026-11-10):** $2.00 / 1M input, $6.00 / 1M output (AA snapshot, SpaceXAI API median), 75% cache discount; blended ~$1.35/1M (7:2:1) per AA FAQ. xAI docs show $2/$6 under 200k prompt tokens and $4/$12 at/above 200k. OpenRouter provider pricing varies by tier/provider.
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for the exact model/ID from accessible sources (primarily Artificial Analysis aggregates).

Agent / tool use:

- Artificial Analysis Intelligence Index (composite including agentic/coding evals): **35** (rank #41/74 in comparable-class snapshot), below median 40.
- Time per Intelligence Index task: **26.2 min** (notably slow vs median 12.8 min); cost per Intelligence Index task: **$7.77** (Artificial Analysis).
- Terminal-Bench 2.1: **no verified public score found** (component not extracted)
- Tau3-Banking / Tau2-Bench / GDPval-AA / MCP-Atlas / other agent benchmarks: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **35** (#41/74, below median 40) (Artificial Analysis).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (component not extracted)
- LCR / MLCR / CritPt / AA-Omniscience: **no verified public score found** (not extracted)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench / SciCode: **no verified public score found**
- Coding components included in Intelligence Index but exact scores **not extracted**.

Long context:

- Context window: **500k tokens** (Artificial Analysis/xAI docs). No verified MRCR/RULER/GraphWalks retrieval score found.

Performance/efficiency (AA snapshot): TTFA **53.44s**, output speed **66 tok/s**, output tokens from Intelligence Index **148M** (very verbose vs median 72.8M).

### Normalized scores (1–100)

> Derived from AA Intelligence Index 35 (below median) and aggregate performance/cost/context/verbosity metadata. Missing extracted per-benchmark details cap precision.

- **Tool use: 48/100.** Below-median composite intelligence suggests limited agentic/tool-use strength; no extracted direct tool-use benchmark scores and slow/expensive task execution reduce practical utility.
- **Reasoning: 50/100.** AA Intelligence Index 35 is below comparable-class median (40), indicating moderate-to-weak reasoning relative to peers; specific GPQA/HLE components not extracted.
- **Context window: 78/100.** 500k-token context is large but below 1M-tier; no verified long-context retrieval benchmark score found.
- **Multimodal: 55/100.** Text and image input supported; no verified vision benchmark scores found.
- **Coding: 48/100.** Composite index below median implies modest coding capability; no extracted SWE-bench/LiveCodeBench specifics.
- **Cost efficiency: 32/100.** Moderately priced per token ($2/$6 base tier) but high $7.77 per Intelligence Index task due to verbosity/slowness; poor efficiency in AA task-cost terms.
- **Overall Score: 56/100.** Mean of five non-cost dims `(48+50+78+55+48)/5 = 55.8` → **56** (half-up). Best fit for general reasoning/coding tasks where Grok ecosystem access matters, but weaker on aggregate intelligence and efficiency than peers in this batch.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, xAI developer docs, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Grok 4.7 (Xhigh)](https://artificialanalysis.ai/models/grok-4-7)
  - [xAI Developers — Models](https://docs.x.ai/developers/models)
  - [OpenRouter — x-ai/grok-4.7](https://openrouter.ai/x-ai/grok-4.7)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
