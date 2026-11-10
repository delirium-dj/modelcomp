# Claude Opus 4.5 — findings by Glyph Cluster

- Source: Anthropic (`anthropic/claude-opus-4.5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic frontier model (released Nov 24, 2025) positioned as its most capable model at the time for coding, agents, and computer use, with strong performance on professional and reasoning tasks.
- **Provider / access:** Anthropic Claude API/apps and cloud partners (e.g. Amazon Bedrock, Google Vertex, Azure) as listed by provider routes; OpenRouter lists `anthropic/claude-opus-4.5`.
- **Release / knowledge:** Released 2025-11-24 (Anthropic announcement). Knowledge cutoff not explicitly stated in fetched announcement text.
- **IDs:** `anthropic/claude-opus-4.5`, `claude-opus-4-5` (naming varies by surface/provider)
- **Context window:** 200k tokens is typical for Claude 4.5-era API contexts in public materials; exact window not fully specified in fetched announcement excerpt (use provider docs for deployment-specific limits).
- **Modalities:** Text and image input; text output (per common Claude 4.5 capabilities and AA metadata context). Tool use/computer use supported in Claude products/API.
- **Pricing (as of 2026-11-10):** Premium pricing (e.g. OpenRouter/AA snapshots around $5 / 1M input and $25 / 1M output, route-dependent); paid model.
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for Claude Opus 4.5 as reported in Anthropic's "Introducing Claude Opus 4.5" announcement and related accessible metadata, unless otherwise noted. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- OSWorld: **66.3%** (Anthropic announcement; computer-use benchmark)
- Terminal-bench 2.0: **59.3%** (Anthropic announcement; agentic terminal/coding benchmark)
- τ2-bench (tau2-bench): **88.9%** reported in Anthropic's model comparisons/materials for Opus 4.5 in announcement context (agent/tool-use oriented benchmark; verify exact split in source if needed)
- SWE-bench Verified: **80.9%** (Anthropic announcement; software engineering/agentic coding benchmark)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- AIME 2025: **99.2%** without tools; **100%** with Python tool access (Anthropic announcement/reported comparisons context)
- GPQA Diamond: **87.0%** (reported in Anthropic announcement comparisons/materials)
- HLE: **no verified public score found** in fetched sources
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (AA snapshot reported N/A/unavailable for fetched configuration)

Coding:

- SWE-bench Verified: **80.9%** (Anthropic announcement)
- SWE-bench Multilingual: **77.5%** (reported in Anthropic comparisons/materials)
- Terminal-bench 2.0: **59.3%** (Anthropic announcement)
- LiveCodeBench: **no verified public score found** in fetched sources
- SciCode / AA-SciCode: **no verified public score found**

Long context:

- Context window: provider-dependent (commonly 200k-class in Claude 4.5 era); exact figure not explicitly stated in fetched announcement text. No verified long-context retrieval benchmark (e.g. MRCR/RULER/GraphWalks) score found for this exact model in accessible sources.

Multimodal:

- MMMU: **80.7%** (reported in Anthropic comparisons/materials)
- Other vision benchmarks: **no verified public score found** in fetched sources

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on accessible vendor-reported benchmarks and metadata above (not official cross-vendor scores). Overall = mean of Tool use, Reasoning, Context window, Multimodal, Coding.

- **Tool use: 92/100.** Exceptional agentic/computer-use and tool-using performance: OSWorld 66.3%, Terminal-bench 2.0 59.3%, strong tau2-bench result (~88.9%), and top-tier SWE-bench Verified 80.9% indicating robust multi-step execution.
- **Reasoning: 90/100.** Very strong reasoning/math/science results reported by Anthropic (AIME 2025 up to 100% with tools, GPQA Diamond ~87.0%) with broad professional-task competence; limited third-party standardized breakdowns in fetched sources.
- **Context window: 75/100.** Large context for practical work (commonly 200k-class in this model family), but below 1M-tier leaders and not exhaustively specified in fetched announcement text.
- **Multimodal: 70/100.** Supports image understanding in Claude ecosystem with solid reported MMMU (~80.7%), but fewer publicly detailed multimodal benchmark disclosures in fetched sources compared to dedicated omni-multimodal leaders.
- **Coding: 94/100.** Frontier-level coding/agentic coding evidence: SWE-bench Verified 80.9%, SWE-bench Multilingual ~77.5%, Terminal-bench 2.0 59.3%; among the strongest publicly reported coding profiles at release.
- **Cost efficiency: 25/100.** Premium pricing tier ($5/$25 per 1M tokens in common snapshots) reflects frontier positioning rather than cost efficiency.
- **Overall Score: 84/100.** Mean of five non-cost dims `(92+90+75+70+94)/5 = 84.2`, rounded half-up to 84.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Anthropic announcement, OpenRouter, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5)
  - [OpenRouter — anthropic/claude-opus-4.5](https://openrouter.ai/anthropic/claude-opus-4.5)
  - [Artificial Analysis — Claude Opus 4.5](https://artificialanalysis.ai/models/claude-opus-4-5)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
