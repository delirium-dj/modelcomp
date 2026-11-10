# Gemini 3.5 Flash-Lite — findings by Glyph Cluster

- Source: Google (`google/gemini-3.5-flash-lite`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google proprietary lightweight reasoning model in the Gemini 3.5 Flash family, optimized for speed and low latency with broad multimodal inputs (text/image/speech/video) and 1M-token context, but low aggregate intelligence in AA's snapshot.
- **Provider / access:** OpenRouter lists `google/gemini-3.5-flash-lite` served by Google AI Studio/Vertex providers. AA tracks Gemini 3.5 Flash-Lite.
- **Release / knowledge:** Released 2026-07-21 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1M tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text, image, speech, and video input; text output; reasoning supported (AA reasoning configuration). Tool-calling/structured output support indicated on OpenRouter; exact capability matrix varies by provider.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $0.30 / 1M input, $2.50 / 1M output, 90% cache discount. OpenRouter/provider pricing varies by tier/region (see model page); paid model.
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for the exact model/ID Gemini 3.5 Flash-Lite as reported by accessible sources. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AA Intelligence Index evaluation context (includes agentic evaluations): per-evaluation breakdown scores not extractable from fetched text; aggregate index reported (Artificial Analysis).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **12** (v5.0.1 aggregate; AA snapshot at the lower end among comparable models in its price class, median 24) (Artificial Analysis).
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

Performance/efficiency metadata (AA snapshot): TTFA **4.08s**, output speed **307 tok/s**, time per Intelligence Index task **1.6 min**, cost per Intelligence Index task **$0.69**, output tokens from Intelligence Index **43.8M** (highly concise).

### Normalized scores (1–100)

> Derived from limited accessible aggregate evidence (primarily AA Intelligence Index and metadata). Missing per-benchmark detail caps confidence; scores are provisional interpretations.

- **Tool use: 20/100.** Reasoning-capable model in AA's agentic evaluation context, but AA Intelligence Index is very low (12) and no verified public scores found for specific tool-use suites for this exact ID; capped by weak aggregate evidence.
- **Reasoning: 18/100.** AA Intelligence Index 12 indicates weak aggregate reasoning/performance versus comparable models (median 24); absence of GPQA/HLE/LCR/CritPt specifics limits calibration.
- **Context window: 90/100.** 1M-token window reported (Artificial Analysis), mapping to large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 75/100.** Broad input coverage (text, image, speech, and video) with text output per AA specs; strong modality breadth, but no verified benchmark scores for vision/audio/video tasks found.
- **Coding: 20/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found for exact model; low AA Intelligence Index suggests limited coding/agentic performance relative to peers.
- **Cost efficiency: 35/100.** Pricing around $0.30/$2.50 per 1M tokens and AA cost-per-task $0.69 are relatively expensive for a low-intelligence, speed-optimized model in its class (per AA comparison summary).
- **Overall Score: 45/100.** Mean of five non-cost dims `(20+18+90+75+20)/5 = 44.6`, rounded half-up to 45. Best fit as a very fast, broad-multimodal, large-context lightweight model with weak verified aggregate intelligence evidence and relatively high cost for its capability tier.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 3.5 Flash-Lite](https://artificialanalysis.ai/models/gemini-3-5-flash-lite)
  - [OpenRouter — google/gemini-3.5-flash-lite](https://openrouter.ai/google/gemini-3.5-flash-lite)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
