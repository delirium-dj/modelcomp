# Qwen3.8 27B — findings by Glyph Cluster

- Source: Alibaba/Qwen (`qwen/qwen3.8-27b`, folder slug `qwen-3.8-27b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 27B (reasoning/xhigh configuration tracked by Artificial Analysis)
- **Short description:** Alibaba open-weights dense multimodal reasoning model in the Qwen3.8 family, offering leading intelligence for its small-model size class but with high latency, verbosity, and cost relative to peers in that class.
- **Provider / access:** Available via multiple API providers (13 listed on Artificial Analysis) and OpenRouter as `qwen/qwen3.8-27b`. Open weights referenced on Hugging Face as `Qwen/Qwen3.8-27B` (per AA).
- **Release / knowledge:** Released 2026-08-14 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `qwen/qwen3.8-27b` (OpenRouter/AA naming), repo slug `qwen-3.8-27b`
- **Context window:** 256k tokens (Artificial Analysis).
- **Modalities:** Text, image, and video input; text output; reasoning supported.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $0.50 / 1M input, $3.00 / 1M output, 80% cache discount; blended ~$0.47/1M (7:2:1) per AA FAQ. OpenRouter provider pricing varies widely (~$0.035/$1.25 to $0.99/$1.49 tiers shown).
- **Architecture:** Open-weights dense model, **27B parameters** total (no MoE active split stated), Apache 2.0 license (AA).

### Raw benchmarks found

> Numbers below are for the exact model/ID `qwen3.8-27b` as tracked by accessible sources (primarily Artificial Analysis aggregates).

Agent / tool use:

- Artificial Analysis Intelligence Index (composite including agentic/coding evals): **20** (rank #2/10 among comparable open-weight models of similar small size class), well above median 8.
- Time per Intelligence Index task: **40.1 min** (notably slow vs median 13.8 min); cost per Intelligence Index task: **$3.53** (Artificial Analysis).
- Terminal-Bench 2.1: **no verified public score found** (component not extracted)
- Tau3-Banking / Tau2-Bench / GDPval-AA / MCP-Atlas / other agent benchmarks: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **20** (#2/10 in comparable class, well above median 8) (Artificial Analysis).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (component not extracted)
- LCR / MLCR / CritPt / AA-Omniscience: **no verified public score found** (not extracted)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench / SciCode: **no verified public score found**
- Coding components included in Intelligence Index but exact scores **not extracted**.

Long context:

- Context window: **256k tokens** (Artificial Analysis). No verified MRCR/RULER/GraphWalks retrieval score found.

Performance/efficiency (AA snapshot): TTFA **119.63s**, output speed **46 tok/s**, output tokens from Intelligence Index **128M** (very verbose vs median 77.7M).

### Normalized scores (1–100)

> Derived from AA Intelligence Index 20 (top-tier within small-model class) and aggregate performance/cost/context/verbosity metadata. Small-class comparison and missing extracted per-benchmark details cap precision.

- **Tool use: 55/100.** Strong relative intelligence in its size class suggests decent agentic/coding potential, but no extracted direct tool-use benchmark scores and very slow runtime limit practical score.
- **Reasoning: 60/100.** AA Intelligence Index 20 is well above median (8) for comparable small open models, indicating strong reasoning for size; absolute frontier-level reasoning remains constrained by model scale and missing component details.
- **Context window: 72/100.** 256k-token context is substantial but below 1M-tier models; no verified long-context retrieval benchmark score found.
- **Multimodal: 60/100.** Supports text, image, and video input; no verified vision/video benchmark scores found.
- **Coding: 58/100.** Above-median composite index in class implies good coding capability for a 27B model, but no extracted SWE-bench/LiveCodeBench specifics and high latency/verbosity reduce confidence.
- **Cost efficiency: 28/100.** Expensive for its class at $0.50/$3.00 with $3.53 per Intelligence Index task and very slow/verbose execution.
- **Overall Score: 61/100.** Mean of five non-cost dims `(55+60+72+60+58)/5 = 61`. Best fit as a capable small multimodal open model for quality-focused tasks where speed and cost are secondary.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Qwen3.8 27B (Xhigh)](https://artificialanalysis.ai/models/qwen3-8-27b)
  - [OpenRouter — qwen/qwen3.8-27b](https://openrouter.ai/qwen/qwen3.8-27b)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
