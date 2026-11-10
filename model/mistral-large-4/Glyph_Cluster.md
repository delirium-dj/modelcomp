# Mistral Large 4 — findings by Glyph Cluster

- Source: Mistral AI (`mistralai/mistral-large-4`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (High)
- **Short description:** Open-weights Mistral reasoning model released October 2026 (Mistral Ecosystem Open-Weight License), a large MoE positioned for high-capability general reasoning/coding with multimodal image input and 1M-token context.
- **Provider / access:** Tracked by Artificial Analysis as Mistral Large 4 (High) via Mistral; open-weight distribution referenced on Hugging Face (`mistralai/Mistral-Large-4-1T-A52B`). API/provider availability in AA snapshot limited; exact OpenRouter route for this exact ID not confirmed in fetched sources.
- **Release / knowledge:** Released 2026-10-29 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `mistralai/mistral-large-4` (tracked ID), open weights `mistralai/Mistral-Large-4-1T-A52B` (Hugging Face, per AA).
- **Context window:** 1M tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text and image input; text output; reasoning supported (AA "High"/reasoning configuration). Tool-calling/JSON-mode specifics not independently verified in fetched sources.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $0.70 / 1M input, $2.10 / 1M output, 90% cache discount. Paid/served model with open weights; pricing may vary by host.
- **Architecture:** Open-weights MoE, 1.1T total / 52B active parameters, Mistral Ecosystem Open-Weight License (Artificial Analysis).

### Raw benchmarks found

> Numbers below are for the exact model/ID Mistral Large 4 (High) as reported by accessible sources. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AA Intelligence Index evaluation context (includes agentic evaluations): per-evaluation breakdown scores not extractable from fetched text; aggregate index reported (Artificial Analysis).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **26** (v5.0.1 aggregate; AA snapshot above average among comparable open-weight models, median 23) (Artificial Analysis).
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

Performance/efficiency metadata (AA snapshot): TTFA **32.13s**, output speed **109 tok/s**, time per Intelligence Index task **12.5 min**, cost per Intelligence Index task **$2.06**, output tokens from Intelligence Index **107M**.

### Normalized scores (1–100)

> Derived from limited accessible aggregate evidence (primarily AA Intelligence Index and metadata). Missing per-benchmark detail caps confidence; scores are provisional interpretations.

- **Tool use: 48/100.** Reasoning-capable model in AA's agentic evaluation context with above-median AA Intelligence Index (26), but no verified public scores found for specific tool-use suites (Terminal-Bench/Tau/GDPval-AA/MCP) for this exact ID; capped by lack of direct per-suite evidence.
- **Reasoning: 50/100.** AA Intelligence Index 26 is above comparable-model median (23), indicating moderate-to-good aggregate reasoning/knowledge performance; absence of GPQA/HLE/LCR/CritPt specifics limits calibration.
- **Context window: 90/100.** 1M-token window reported (Artificial Analysis), mapping to large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 55/100.** Supports text and image input with text output per AA specs; no verified scores for vision benchmarks found, so capability is credited modestly.
- **Coding: 50/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found for exact model; above-median AA Intelligence Index suggests decent aggregate coding/agentic ability but evidence is indirect.
- **Cost efficiency: 40/100.** Pricing around $0.70/$2.10 per 1M tokens and relatively high AA cost-per-task ($2.06) make it somewhat expensive for its class despite open weights.
- **Overall Score: 59/100.** Mean of five non-cost dims `(48+50+90+55+50)/5 = 58.6`, rounded half-up to 59. Best fit as a large-context open-weights multimodal reasoning model with moderate aggregate evidence and middling cost efficiency.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Mistral Large 4 (High)](https://artificialanalysis.ai/models/mistral-large-4)
  - [Hugging Face — mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
