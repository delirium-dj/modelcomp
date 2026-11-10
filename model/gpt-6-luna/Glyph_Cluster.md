# GPT-6 Luna — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-6-luna`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI proprietary reasoning model in the GPT-6 Luna line (tracked as Max/reasoning configuration by AA), positioned as a cost-efficient multimodal model with 1M-token context and improved aggregate intelligence over GPT-5.6 Luna.
- **Provider / access:** OpenRouter lists `openai/gpt-6-luna` served by providers including OpenAI, Azure, and Amazon Bedrock (route/provider-dependent). AA tracks GPT-6 Luna (Max).
- **Release / knowledge:** Released 2026-09-22 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 1M tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text and image input; text output; reasoning supported (AA "Max"/reasoning configuration). Tool-calling/structured output support indicated on OpenRouter; exact capability matrix varies by provider.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $0.10 / 1M input, $0.50 / 1M output, 90% cache discount. OpenRouter provider pricing varies by route/provider (see model page); paid model.
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for the exact model/ID GPT-6 Luna (Max) as reported by accessible sources. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AA Intelligence Index evaluation context (includes agentic evaluations): per-evaluation breakdown scores not extractable from fetched text; aggregate index reported (Artificial Analysis).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **28** (v5.0.1 aggregate; AA snapshot above average among comparable models in its price class, median 24) (Artificial Analysis).
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

Performance/efficiency metadata (AA snapshot): TTFA **74.29s**, output speed **104 tok/s**, time per Intelligence Index task **12.1 min**, cost per Intelligence Index task **$0.15**, output tokens from Intelligence Index **110M**.

### Normalized scores (1–100)

> Derived from limited accessible aggregate evidence (primarily AA Intelligence Index and metadata). Missing per-benchmark detail caps confidence; scores are provisional interpretations.

- **Tool use: 52/100.** Reasoning-capable model in AA's agentic evaluation context with above-median AA Intelligence Index (28), but no verified public scores found for specific tool-use suites (Terminal-Bench/Tau/GDPval-AA/MCP) for this exact ID; capped by lack of direct per-suite evidence.
- **Reasoning: 54/100.** AA Intelligence Index 28 indicates above-average aggregate reasoning/performance for its class (median 24); absence of GPQA/HLE/LCR/CritPt specifics limits calibration.
- **Context window: 90/100.** 1M-token window reported (Artificial Analysis), mapping to large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 55/100.** Supports text and image input with text output per AA specs; no verified scores for vision benchmarks found, so capability is credited modestly.
- **Coding: 52/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found for exact model; above-median AA Intelligence Index suggests solid aggregate coding/agentic ability but evidence is indirect.
- **Cost efficiency: 90/100.** Very low pricing at $0.10/$0.50 per 1M tokens with very low AA cost-per-task ($0.15) for a 1M-context reasoning model; excellent value though not free.
- **Overall Score: 61/100.** Mean of five non-cost dims `(52+54+90+55+52)/5 = 60.6`, rounded half-up to 61. Best fit as a cost-efficient, large-context multimodal reasoning model with good aggregate intelligence evidence and limited public per-benchmark disclosure.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-6 Luna (Max)](https://artificialanalysis.ai/models/gpt-6-luna)
  - [OpenRouter — openai/gpt-6-luna](https://openrouter.ai/openai/gpt-6-luna)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
