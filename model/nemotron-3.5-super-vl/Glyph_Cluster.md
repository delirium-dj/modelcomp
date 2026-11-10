# Nemotron 3.5 Super VL — findings by Glyph Cluster

- Source: NVIDIA (`nvidia/nemotron-3.5-super-vl`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA open-weights vision-language reasoning model (OpenMDW-1.1 license) released October 2026, a medium-class MoE designed for multimodal understanding with 1M-token context and competitive aggregate intelligence in its size tier.
- **Provider / access:** Tracked by Artificial Analysis as Nemotron 3.5 Super VL; OpenRouter lists `nvidia/nemotron-3.5-super-vl` across multiple providers. Open-weight distribution referenced on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`).
- **Release / knowledge:** Released 2026-10-15 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `nvidia/nemotron-3.5-super-vl` (OpenRouter/AA), open weights `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` (Hugging Face, per AA).
- **Context window:** 1M tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text and image input; text output; reasoning supported (AA reasoning configuration). Tool-calling/structured output support indicated on OpenRouter; exact capability matrix varies by provider.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot (median across providers): $0.17 / 1M input, $0.50 / 1M output, 71% cache discount. OpenRouter provider pricing varies by route (see model page); paid/served model with open weights.
- **Architecture:** Open-weights MoE, 120B total / 12B active parameters, OpenMDW-1.1 license (Artificial Analysis).

### Raw benchmarks found

> Numbers below are for the exact model/ID Nemotron 3.5 Super VL as reported by accessible sources. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AA Intelligence Index evaluation context (includes agentic evaluations): per-evaluation breakdown scores not extractable from fetched text; aggregate index reported (Artificial Analysis).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **14** (v5.0.1 aggregate; AA snapshot #1/4 in comparable open-weight size class, median 4) (Artificial Analysis).
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

Performance/efficiency metadata (AA snapshot, median across providers): TTFA **14.40s**, output speed **261 tok/s**, time per Intelligence Index task **5.2 min**, cost per Intelligence Index task **$0.52**, output tokens from Intelligence Index **119M**.

### Normalized scores (1–100)

> Derived from limited accessible aggregate evidence (primarily AA Intelligence Index and metadata). Missing per-benchmark detail caps confidence; scores are provisional interpretations. Note: AA class comparison is within a small/medium open-weight size tier where absolute index medians differ from frontier classes.

- **Tool use: 35/100.** Reasoning-capable VL model in AA's agentic evaluation context with top-in-class AA Intelligence Index (14, median 4 in that class), but absolute aggregate level and lack of verified public scores for specific tool-use suites limit confidence; capped by indirect evidence.
- **Reasoning: 35/100.** AA Intelligence Index 14 is strong within its comparable size class but modest in absolute frontier terms; absence of GPQA/HLE/LCR/CritPt specifics limits calibration.
- **Context window: 90/100.** 1M-token window reported (Artificial Analysis), mapping to large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 60/100.** Vision-language model with text and image input and text output per AA specs; VL focus is a strength, but no verified scores for vision benchmarks (e.g. MMMU/MMMU-Pro) found, so capability is credited moderately.
- **Coding: 35/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found for exact model; class-leading AA Intelligence Index suggests reasonable aggregate ability for its tier but evidence is indirect.
- **Cost efficiency: 70/100.** Competitive pricing around $0.17/$0.50 per 1M tokens with reasonable AA cost-per-task ($0.52) for an open-weights VL reasoning model; good value though not free.
- **Overall Score: 51/100.** Mean of five non-cost dims `(35+35+90+60+35)/5 = 51`. Best fit as a cost-effective, large-context open-weights vision-language model with solid in-class aggregate evidence but limited public per-benchmark disclosure.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Nemotron 3.5 Super VL](https://artificialanalysis.ai/models/nemotron-3-5-super-vl)
  - [OpenRouter — nvidia/nemotron-3.5-super-vl](https://openrouter.ai/nvidia/nemotron-3.5-super-vl)
  - [Hugging Face — nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
