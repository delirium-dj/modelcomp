# Claude Haiku 5.5 — findings by Glyph Cluster

- Source: Anthropic (`anthropic/claude-haiku-5.5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5 (Max)
- **Short description:** Anthropic proprietary reasoning model in the Claude 5.5 Haiku line, positioned as a high-intelligence, fast-output but long-thinking multimodal model with 1M-token context for cost-efficient frontier-class tasks.
- **Provider / access:** OpenRouter lists `anthropic/claude-haiku-5.5` served by providers including Anthropic, Google Vertex, Amazon Bedrock, and Azure. AA tracks Claude Haiku 5.5 (Max).
- **Release / knowledge:** Released 2026-10-07 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `anthropic/claude-haiku-5.5`
- **Context window:** 1M tokens (Artificial Analysis). Input/output split not separately verified.
- **Modalities:** Text and image input; text output; reasoning supported (AA "Max"/reasoning configuration). Tool-calling/structured output support indicated on OpenRouter; exact capability matrix varies by provider.
- **Pricing (as of 2026-11-10):** Artificial Analysis snapshot: $0.10 / 1M input, $0.50 / 1M output, 90% cache discount. OpenRouter/provider pricing varies by region/route (see model page); paid model.
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for the exact model/ID Claude Haiku 5.5 (Max) as reported by accessible sources. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AA Intelligence Index evaluation context (includes agentic evaluations such as AA-Briefcase, Terminal-Bench 4.0, AutomationBench-AA etc.): per-evaluation breakdown scores not extractable from fetched text; aggregate index reported (Artificial Analysis).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **36** (v5.0.1 aggregate; AA snapshot #1/34 in comparable price-class models, median 24) (Artificial Analysis).
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

Performance/efficiency metadata (AA snapshot): TTFA **180.31s**, output speed **254 tok/s**, time per Intelligence Index task **14.8 min**, cost per Intelligence Index task **$0.41**, output tokens from Intelligence Index **298M** (very verbose).

### Normalized scores (1–100)

> Derived from limited accessible aggregate evidence (primarily AA Intelligence Index and metadata). Missing per-benchmark detail caps confidence; scores are provisional interpretations.

- **Tool use: 70/100.** Very strong aggregate AA Intelligence Index (36, #1/34 in class) implies high agentic capability in AA's composite (which includes agentic evaluations), but no verified public scores found for specific tool-use suites (Terminal-Bench/Tau/GDPval-AA/MCP) for this exact ID; capped by lack of direct per-suite evidence and very high latency.
- **Reasoning: 72/100.** AA Intelligence Index 36 is well above comparable-model median (24), indicating strong aggregate reasoning/knowledge performance; absence of GPQA/HLE/LCR/CritPt specifics limits precise calibration.
- **Context window: 90/100.** 1M-token window reported (Artificial Analysis), mapping to large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 55/100.** Supports text and image input with text output per AA specs; no verified scores for vision benchmarks found, so capability is credited modestly.
- **Coding: 70/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found for exact model; top-tier AA Intelligence Index suggests strong aggregate coding/agentic ability but evidence is indirect.
- **Cost efficiency: 85/100.** Very low pricing at $0.10/$0.50 per 1M tokens with low AA cost-per-task ($0.41) relative to high aggregate intelligence; excellent value despite verbosity/latency.
- **Overall Score: 71/100.** Mean of five non-cost dims `(70+72+90+55+70)/5 = 71.4`, rounded half-up to 71. Best fit as a high-intelligence, cost-efficient large-context reasoning model with strong aggregate evidence but limited public per-benchmark disclosure and high thinking latency/verbosity.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Haiku 5.5 (Max)](https://artificialanalysis.ai/models/claude-haiku-5-5)
  - [OpenRouter — anthropic/claude-haiku-5.5](https://openrouter.ai/anthropic/claude-haiku-5.5)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
