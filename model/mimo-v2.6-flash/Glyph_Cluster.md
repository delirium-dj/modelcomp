# MiMo-V2.6-Flash — findings by Glyph Cluster

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`, weights: `XiaomiMiMo/MiMo-V2.6-Flash-RL`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi open-weights reasoning MoE model optimized for low-cost inference, offering above-average intelligence for its class with very high verbosity and slow task completion in AA measurements.
- **Provider / access:** Available via multiple API providers tracked by Artificial Analysis (4 providers listed). Open weights hosted on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash-RL`).
- **Release / knowledge:** Released 2026-09-21 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `xiaomi/mimo-v2.6-flash` (AA slug), Hugging Face `XiaomiMiMo/MiMo-V2.6-Flash-RL`
- **Context window:** 1M tokens (Artificial Analysis).
- **Modalities:** Text and image input; text output; reasoning supported.
- **Pricing (as of 2026-11-10):** $0.14 / 1M input, $0.28 / 1M output (AA snapshot, Xiaomi API), 98% cache discount noted; blended ~$0.058/1M (7:2:1) per AA FAQ. Very competitively priced for class.
- **Architecture:** Open-weights MoE, **309B total / 15B active parameters**, MIT license (AA/HF).

### Raw benchmarks found

> Numbers below are for the exact model/ID from accessible sources (primarily Artificial Analysis aggregates).

Agent / tool use:

- Artificial Analysis Intelligence Index (composite including agentic/coding evals): **27** (rank #10/26 among comparable open-weight models of similar size class in AA snapshot), above median 23.
- Time per Intelligence Index task: **63.6 min** (notably slow vs median 13.1 min); cost per Intelligence Index task: **$0.13** (Artificial Analysis).
- Terminal-Bench 2.1: **no verified public score found** (component not extracted)
- Tau3-Banking / Tau2-Bench / GDPval-AA / MCP-Atlas / other agent benchmarks: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **27** (#10/26 in comparable class, above median 23) (Artificial Analysis).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (component not extracted)
- LCR / MLCR / CritPt / AA-Omniscience: **no verified public score found** (not extracted)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench / SciCode: **no verified public score found**
- Coding components included in Intelligence Index but exact scores **not extracted**.

Long context:

- Context window: **1M tokens** (Artificial Analysis). No verified MRCR/RULER/GraphWalks retrieval score found.

Performance/efficiency (AA snapshot): TTFA **26.02s**, output speed **35 tok/s**, output tokens from Intelligence Index **163M** (very verbose vs median 99.3M).

### Normalized scores (1–100)

> Derived from AA Intelligence Index 27 (above-median in class), strong cost efficiency, but very slow/verbose performance and missing extracted per-benchmark details.

- **Tool use: 48/100.** Above-median composite intelligence in its open-weight class suggests some agentic/coding competence, but no extracted direct tool-use benchmark scores and very slow task completion limit practical tool-use rating.
- **Reasoning: 50/100.** AA Intelligence Index 27 is above median (23) for comparable open models, indicating moderate reasoning; lack of GPQA/HLE component detail caps score.
- **Context window: 88/100.** 1M-token context window reported; long-context retrieval quality not independently verified by benchmark scores.
- **Multimodal: 50/100.** Text and image input supported; no verified vision benchmark scores found.
- **Coding: 52/100.** Composite index performance implies reasonable coding ability for class, but no extracted SWE-bench/LiveCodeBench specifics and high verbosity/latency reduce confidence.
- **Cost efficiency: 92/100.** Extremely low pricing ($0.14/$0.28, 98% cache discount, ~$0.13 per Intelligence Index task) makes it highly cost-efficient despite slow runtime.
- **Overall Score: 58/100.** Mean of five non-cost dims `(48+50+88+50+52)/5 = 57.6` → **58** (half-up). Best fit as a low-cost, large-context open MoE for budget-conscious workloads where latency/verbosity are acceptable.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, Hugging Face metadata via AA); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — MiMo-V2.6-Flash](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [Hugging Face — XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
