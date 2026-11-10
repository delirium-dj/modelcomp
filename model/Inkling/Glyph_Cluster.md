# Inkling — findings by Glyph Cluster

- Source: Thinking Machines (`thinkingmachines/Inkling`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (Xhigh)
- **Short description:** Open-weights reasoning model from Thinking Machines released July 2026 (Apache 2.0), positioned as a large MoE model with multimodal text/image/speech inputs and text output for general and agentic tasks.
- **Provider / access:** Tracked by Artificial Analysis as Inkling (Xhigh) via Thinking Machines; AA notes no publicly available API in the fetched snapshot. Open-weight distribution referenced on Hugging Face (`thinkingmachines/Inkling`).
- **Release / knowledge:** Released July 2026 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `thinkingmachines/Inkling` (open weights; provider/API IDs not verified beyond AA listing)
- **Context window:** 1M tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text, image, and speech input; text output; reasoning supported (AA "Xhigh"/reasoning configuration). Tool-calling/JSON-mode specifics not independently verified in fetched sources.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $1.00 / 1M input, $4.05 / 1M output, 83% cache discount (median/provider snapshot context). Paid/open-weights serving costs may vary by host.
- **Architecture:** Open-weights MoE, 975B total / 41B active parameters, Apache 2.0 license (Artificial Analysis).

### Raw benchmarks found

> Numbers below are for the exact model/ID Inkling (Xhigh) as reported by accessible sources. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AA Intelligence Index evaluation context (includes agentic evaluations): per-evaluation breakdown scores not extractable from fetched text; aggregate index reported (Artificial Analysis).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **12** (v5.0.1 aggregate; AA snapshot placed it at the lower end among comparable open-weight models, median 23) (Artificial Analysis).
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

Performance/efficiency metadata (AA snapshot): TTFA **12.35s**, output speed **114 tok/s**, time per Intelligence Index task **7.5 min**, cost per Intelligence Index task **$1.35**, output tokens from Intelligence Index **80.3M**.

### Normalized scores (1–100)

> Derived from limited accessible aggregate evidence (primarily AA Intelligence Index and metadata). Missing per-benchmark detail caps confidence; scores are provisional interpretations.

- **Tool use: 22/100.** Reasoning-capable multimodal model in AA's agentic evaluation context, but no verified public scores found for Terminal-Bench/Tau/GDPval-AA/MCP/tool-use suites for this exact ID and overall AA Intelligence Index is low (12); capped by weak aggregate evidence and absent direct tool-use benchmarks.
- **Reasoning: 20/100.** AA Intelligence Index 12 indicates weak aggregate reasoning/performance versus comparable models (median 23 in AA class view); absence of GPQA/HLE/LCR/CritPt specifics limits calibration but aggregate signal is low.
- **Context window: 90/100.** 1M-token window reported (Artificial Analysis), mapping to large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 60/100.** Supports text, image, and speech input with text output per AA specs; broader-than-typical input coverage, but no verified scores for vision/audio benchmarks found, so capability is credited moderately.
- **Coding: 22/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found for exact model; low AA Intelligence Index suggests limited coding/agentic performance relative to peers, though not fully disambiguated.
- **Cost efficiency: 45/100.** Paid/open-weights serving pricing around $1.00/$4.05 per 1M tokens in AA snapshot with $1.35 cost per Intelligence Index task; not free and mid/high for this capability tier.
- **Overall Score: 43/100.** Mean of five non-cost dims `(22+20+90+60+22)/5 = 42.8`, rounded half-up to 43. Best fit as a large-context, multimodal-input open-weights model with currently weak verified aggregate intelligence evidence.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Inkling (Xhigh)](https://artificialanalysis.ai/models/inkling)
  - [Hugging Face — thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
