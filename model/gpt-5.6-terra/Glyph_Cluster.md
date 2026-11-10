# GPT-5.6 Terra — findings by Glyph Cluster

- Source: OpenAI (`openai/gpt-5.6-terra`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI proprietary reasoning model release in the GPT-5.x/GPT-6 transition line (as tracked by third-party aggregators), positioned as a high-capability multimodal text model; later superseded by GPT-6.1 Terra per Artificial Analysis.
- **Provider / access:** OpenRouter lists `openai/gpt-5.6-terra` served by providers including OpenAI, Azure, and Amazon Bedrock (exact route/API mode varies by provider). Artificial Analysis tracks a "Max" reasoning configuration.
- **Release / knowledge:** Released 2026-07 (Artificial Analysis). Knowledge cutoff not stated in accessible sources.
- **IDs:** `openai/gpt-5.6-terra`
- **Context window:** 1M tokens (Artificial Analysis; OpenRouter model listing context consistent with long-context class). Input/output split not separately verified.
- **Modalities:** Text and image input; text output; reasoning supported (AA "Max"/reasoning configuration). Tool-calling/JSON-mode specifics not independently verified in fetched sources.
- **Pricing (as of 2026-11-10):** Artificial Analysis median snapshot: $2.00 / 1M input, $12.00 / 1M output, 90% cache discount. OpenRouter provider pricing varies by route/provider (e.g. $1/$6 to $4/$24 tiers shown on model page); paid model.
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for the exact model/ID `gpt-5.6-terra` as reported by accessible sources. Where a benchmark was not found, marked accordingly. Scores are not normalized to this project's 1–100 scale unless stated in the normalized section.

Agent / tool use:

- Artificial Analysis Intelligence Index task performance aggregates (not a direct agent benchmark): time per Intelligence Index task **10.4 min**; cost per Intelligence Index task **$3.73** (Artificial Analysis, comparable-model class snapshot).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **32** (rank #47/74 in AA snapshot for comparable class) (Artificial Analysis).
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

Performance/efficiency metadata (AA snapshot): TTFA **70.62s**, output speed **106 tok/s** (provider median in AA view).

### Normalized scores (1–100)

> Derived from limited accessible aggregate evidence (primarily AA Intelligence Index and metadata). Missing per-benchmark detail caps confidence; scores are provisional interpretations.

- **Tool use: 45/100.** Reasoning-capable frontier-class model with AA-tracked agentic task evaluation context, but no verified public scores found for Terminal-Bench/Tau/GDPval-AA/MCP/tool-use suites for this exact ID; capped by lack of direct tool-use evidence.
- **Reasoning: 52/100.** AA Intelligence Index 32 (#47/74 in snapshot) indicates mid-pack reasoning/performance among compared models; absence of GPQA/HLE/LCR/CritPt specifics limits calibration.
- **Context window: 90/100.** 1M-token window reported (Artificial Analysis), mapping to large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 55/100.** Supports text and image input with text output per AA specs; no verified scores for vision benchmarks (e.g. MMMU/MMMU-Pro) found, so capability is credited modestly.
- **Coding: 48/100.** No verified SWE-bench/LiveCodeBench/SciCode scores found for exact model; AA Intelligence Index and general frontier positioning suggest non-trivial coding ability but evidence is indirect.
- **Cost efficiency: 35/100.** Paid pricing at $2.00/$12.00 per 1M tokens (AA median) with $3.73 cost per Intelligence Index task; reasonable for high-end proprietary tier but not cost-leading.
- **Overall Score: 58/100.** Mean of five non-cost dims `(45+52+90+55+48)/5 = 58` (half-up not needed). Best fit as a large-context proprietary reasoning/multimodal model with moderate aggregate intelligence evidence but sparse public per-benchmark disclosure.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-5.6 Terra (Max)](https://artificialanalysis.ai/models/gpt-5-6-terra)
  - [OpenRouter — openai/gpt-5.6-terra](https://openrouter.ai/openai/gpt-5.6-terra)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
