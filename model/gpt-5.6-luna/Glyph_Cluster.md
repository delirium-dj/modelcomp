# GPT-5.6 Luna — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-5.6-luna`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI proprietary reasoning model in the GPT-5.x Luna line (tracked as Max/reasoning configuration by AA), positioned as a cost-efficient multimodal model with 1M-token context; later superseded by GPT-6 Luna per Artificial Analysis.
- **Provider / access:** OpenRouter lists `openai/gpt-5.6-luna` served by providers including OpenAI, Azure, and Amazon Bedrock (route/provider-dependent). AA tracks GPT-5.6 Luna (Max).
- **Release / knowledge:** Released 2026-07-09 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** 1M tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text and image input; text output; reasoning supported (AA "Max"/reasoning configuration). Tool-calling/structured output support indicated on OpenRouter; exact capability matrix varies by provider.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $0.20 / 1M input, $1.20 / 1M output, 90% cache discount. OpenRouter provider pricing varies by route/provider (see model page); paid model.
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for the exact model/ID GPT-5.6 Luna (Max) as reported by accessible sources. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AA Intelligence Index evaluation context (includes agentic evaluations): per-evaluation breakdown scores not extractable from fetched text; aggregate index reported (Artificial Analysis).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **24** (v5.0.1 aggregate; AA snapshot above average among comparable models in its price class, median 24) (Artificial Analysis).
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

Performance/efficiency metadata (AA snapshot): TTFA **50.09s**, output speed **115 tok/s**, time per Intelligence Index task **8.6 min**, cost per Intelligence Index task **$0.33**, output tokens from Intelligence Index **109M**.

### Normalized scores (1–100)

> Derived from limited accessible aggregate evidence (primarily AA Intelligence Index and metadata). Missing per-benchmark detail caps confidence; scores are provisional interpretations.

- **Tool use: 45/100.** Reasoning-capable model in AA's agentic evaluation context, but no verified public scores found for specific tool-use suites (Terminal-Bench/Tau/GDPval-AA/MCP) for this exact ID; AA Intelligence Index is moderate (24).
- **Reasoning: 46/100.** AA Intelligence Index 24 indicates moderate aggregate reasoning/performance (around class median in AA snapshot); absence of GPQA/HLE/LCR/CritPt specifics limits calibration.
- **Context window: 90/100.** 1M-token window reported (Artificial Analysis), mapping to large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 55/100.** Supports text and image input with text output per AA specs; no verified scores for vision benchmarks found, so capability is credited modestly.
- **Coding: 45/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found for exact model; moderate AA Intelligence Index suggests average coding/agentic performance but evidence is indirect.
- **Cost efficiency: 80/100.** Low pricing at $0.20/$1.20 per 1M tokens with low AA cost-per-task ($0.33) for a reasoning/multimodal 1M-context model; strong value though not free.
- **Overall Score: 56/100.** Mean of five non-cost dims `(45+46+90+55+45)/5 = 56.2`, rounded half-up to 56. Best fit as a cost-efficient, large-context multimodal reasoning model with moderate aggregate intelligence evidence and limited public per-benchmark disclosure.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-5.6 Luna (Max)](https://artificialanalysis.ai/models/gpt-5-6-luna)
  - [OpenRouter — openai/gpt-5.6-luna](https://openrouter.ai/openai/gpt-5.6-luna)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
