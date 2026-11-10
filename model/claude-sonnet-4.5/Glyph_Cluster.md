# Claude Sonnet 4.5 — findings by Glyph Cluster

- Source: Anthropic (`anthropic/claude-sonnet-4.5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic model (released Sep 29, 2025) positioned at launch as its best coding model and strongest for building complex agents and computer use, balancing high capability with Sonnet-class efficiency.
- **Provider / access:** Anthropic Claude API/apps and cloud partners (e.g. Amazon Bedrock, Google Vertex, Azure) as listed by provider routes; OpenRouter lists `anthropic/claude-sonnet-4.5`.
- **Release / knowledge:** Released 2025-09-29 (Anthropic announcement). Knowledge cutoff not explicitly stated in fetched announcement text; AA lists July 2025 for Claude 4.5 Sonnet (non-reasoning configuration page context).
- **IDs:** `anthropic/claude-sonnet-4.5`, `claude-sonnet-4-5`
- **Context window:** 1M tokens reported by Artificial Analysis for Claude 4.5 Sonnet configurations; provider/product limits may vary by deployment mode.
- **Modalities:** Text and image input; text output (per AA/Claude ecosystem capabilities). Tool use and computer use supported.
- **Pricing (as of 2026-11-10):** Mid/high pricing (e.g. ~$3 / 1M input and ~$15 / 1M output in common snapshots, route-dependent); paid model.
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are for Claude Sonnet 4.5 as reported in Anthropic's "Introducing Claude Sonnet 4.5" announcement and related accessible metadata, unless otherwise noted. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- OSWorld: **61.4%** (Anthropic announcement; computer-use benchmark, state-of-the-art at launch per Anthropic)
- SWE-bench Verified: **77.2%** (Anthropic announcement; software engineering/agentic coding benchmark)
- Computer use / agent capabilities: Anthropic reported substantial gains and 30+ hour focus on complex multi-step tasks (qualitative capability claim in announcement)
- GDPval-AA: **no verified public score found**
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found** in fetched sources
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- AIME 2025 (with Python tools): **100%** reported for high school math competition problems when given access to Python tools (Anthropic announcement context)
- GPQA Diamond: **no verified public score found** in fetched sources
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (AA snapshot reported N/A/unavailable for fetched configuration)

Coding:

- SWE-bench Verified: **77.2%** (Anthropic announcement)
- LiveCodeBench: **no verified public score found** in fetched sources
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- Context window: **1M tokens** reported by Artificial Analysis for Claude 4.5 Sonnet. No verified long-context retrieval benchmark (e.g. MRCR/RULER/GraphWalks) score found for this exact model in accessible sources.

Multimodal:

- Text and image input supported (AA/Claude ecosystem). No verified public vision-benchmark scores (e.g. MMMU/MMMU-Pro) found in fetched sources.

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on accessible vendor-reported benchmarks and metadata above (not official cross-vendor scores). Overall = mean of Tool use, Reasoning, Context window, Multimodal, Coding.

- **Tool use: 88/100.** Very strong agentic/computer-use profile: OSWorld 61.4% and leading real-world computer-use/agent claims at launch, plus strong SWE-bench Verified 77.2% indicating effective multi-step software task execution; fewer disclosed standardized tool-suite scores in fetched sources.
- **Reasoning: 82/100.** Strong reasoning/math evidence (AIME 2025 100% with Python tools reported) and high domain competence, but limited breadth of standardized reasoning benchmark disclosures (e.g. GPQA/HLE) in fetched sources.
- **Context window: 90/100.** 1M-token context window reported (Artificial Analysis), placing it in the large-context tier; no verified retrieval-quality benchmark at that length found.
- **Multimodal: 60/100.** Supports image input/text output with practical computer-use/vision workflows, but no verified public vision benchmark scores found in fetched sources; credited moderately.
- **Coding: 88/100.** Excellent coding performance at release with SWE-bench Verified 77.2% (state-of-the-art claim at launch) and strong agentic coding/computer-use results; some common coding benchmark details not found in fetched sources.
- **Cost efficiency: 40/100.** Mid/high pricing (~$3/$15 per 1M tokens in common snapshots) is reasonable for capability but not cost-leading.
- **Overall Score: 82/100.** Mean of five non-cost dims `(88+82+90+60+88)/5 = 81.6`, rounded half-up to 82.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Anthropic announcement, OpenRouter, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)
  - [OpenRouter — anthropic/claude-sonnet-4.5](https://openrouter.ai/anthropic/claude-sonnet-4.5)
  - [Artificial Analysis — Claude 4.5 Sonnet](https://artificialanalysis.ai/models/claude-4-5-sonnet)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
