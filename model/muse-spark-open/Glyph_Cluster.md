# Muse Spark Open — findings by Glyph Cluster

- Source: Meta (`meta-models/Muse-Spark-Open`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open (Xhigh)
- **Short description:** Open-weights Meta Muse reasoning model released October 2026 (Muse Model License), a large sparse MoE with broad multimodal inputs (text/image/speech/video) and 1M-token context aimed at fast, general-purpose performance.
- **Provider / access:** Tracked by Artificial Analysis as Muse Spark Open (Xhigh); open-weight distribution referenced on Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`). AA notes availability via multiple providers; exact API route IDs not exhaustively verified in fetched sources.
- **Release / knowledge:** Released 2026-10-15 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `meta-models/Muse-Spark-Open-816B-A42B` (open weights; tracked as Muse Spark Open in AA). OpenRouter route/ID for this exact model not confirmed in fetched sources.
- **Context window:** 1M tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text, image, speech, and video input; text output; reasoning supported (AA "Xhigh"/reasoning configuration). Tool-calling/JSON-mode specifics not independently verified in fetched sources.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot (median across providers): $1.25 / 1M input, $4.25 / 1M output, 88% cache discount. Paid/served model with open weights; pricing varies by host.
- **Architecture:** Open-weights MoE, 816B total / 42B active parameters, Muse Model License (Artificial Analysis).

### Raw benchmarks found

> Numbers below are for the exact model/ID Muse Spark Open (Xhigh) as reported by accessible sources. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AA Intelligence Index evaluation context (includes agentic evaluations): per-evaluation breakdown scores not extractable from fetched text; aggregate index reported (Artificial Analysis).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25** (v5.0.1 aggregate; AA snapshot above average among comparable open-weight models, median 23) (Artificial Analysis).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Context window reported as **1M tokens** (Artificial Analysis). No verified long-context retrieval benchmark (e.g. MRCR/RULER/GraphWalks) score found for this exact model.

Performance/efficiency metadata (AA snapshot, median across providers): TTFA **12.78s**, output speed **171 tok/s**, time per Intelligence Index task **6.5 min**, cost per Intelligence Index task **$2.02**, output tokens from Intelligence Index **90.6M**.

### Normalized scores (1–100)

> Derived from limited accessible aggregate evidence (primarily AA Intelligence Index and metadata). Missing per-benchmark detail caps confidence; scores are provisional interpretations.

- **Tool use: 48/100.** Reasoning-capable model in AA's agentic evaluation context with above-median AA Intelligence Index (25), but no verified public scores found for specific tool-use suites (Terminal-Bench/Tau/GDPval-AA/MCP) for this exact ID; capped by lack of direct per-suite evidence.
- **Reasoning: 48/100.** AA Intelligence Index 25 is modestly above comparable-model median (23), indicating moderate aggregate reasoning/knowledge performance; absence of GPQA/HLE/LCR/CritPt specifics limits calibration.
- **Context window: 90/100.** 1M-token window reported (Artificial Analysis), mapping to large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 75/100.** Broad input coverage (text, image, speech, and video) with text output per AA specs; strong modality breadth, but no verified benchmark scores for vision/audio/video tasks found, so capability is credited conservatively below top multimodal tier.
- **Coding: 48/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found for exact model; above-median AA Intelligence Index suggests decent aggregate coding/agentic ability but evidence is indirect.
- **Cost efficiency: 30/100.** Expensive pricing around $1.25/$4.25 per 1M tokens and high AA cost-per-task ($2.02) despite good speed; weak value for its class.
- **Overall Score: 62/100.** Mean of five non-cost dims `(48+48+90+75+48)/5 = 61.8`, rounded half-up to 62. Best fit as a fast, broad-multimodal, large-context open-weights reasoning model with moderate aggregate evidence and high serving cost.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Muse Spark Open (Xhigh)](https://artificialanalysis.ai/models/muse-spark-open)
  - [Hugging Face — meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
