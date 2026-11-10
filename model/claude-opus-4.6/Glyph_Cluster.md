# Claude Opus 4.6 — findings by Glyph Cluster

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's Opus-class frontier model (Feb 2026) focused on agentic coding, long-context retrieval/reasoning, and knowledge work; first Opus-class model with 1M-token context window (beta) per launch announcement.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-6`), also available via cloud platforms/providers listed by OpenRouter (Anthropic, AWS Bedrock, Azure, Google Vertex, etc.). Supports adaptive/extended thinking and agentic workflows per announcement.
- **Release / knowledge:** Released 2026-02-05 (Anthropic announcement). Knowledge cutoff not specified in fetched sources.
- **IDs:** `anthropic/claude-opus-4.6`, API model string `claude-opus-4-6`
- **Context window:** 1M tokens in beta (Anthropic announcement); premium pricing applies above 200k tokens per announcement. Max output up to 128k tokens (announcement).
- **Modalities:** Text and image input, text output (Artificial Analysis/OpenRouter summaries). Reasoning/thinking supported; tool use/agentic features emphasized (agent teams, compaction, adaptive thinking, effort controls).
- **Pricing (as of 2026-11-10):** $5.00 / 1M input, $25.00 / 1M output (Anthropic announcement/API pricing stated unchanged), 90% cache discount noted by AA; OpenRouter/provider tiers vary (see provider pages).
- **Architecture:** Proprietary (parameter count undisclosed).

### Raw benchmarks found

> Numbers below are from Anthropic's launch announcement/system-card-linked claims and third-party aggregator metadata for the exact model `claude-opus-4-6`. Some figures are comparative (Elo deltas/ranks) rather than absolute percentages.

Agent / tool use:

- Terminal-Bench 2.0: **highest score** among compared frontier models (Anthropic announcement; exact numeric value not extracted from text).
- GDPval-AA (economically valuable knowledge-work tasks): **outperforms GPT-5.2 by ~144 Elo** and **Opus 4.5 by ~190 Elo** (Anthropic announcement, citing AA-run evaluation).
- BrowseComp (hard-to-find web information): **best performance among compared models** (Anthropic announcement).
- MCP Atlas: **62.7% at high effort** (industry-leading at that setting per announcement footnote); **score at max effort** also referenced as higher in announcement context.
- OSWorld-Verified / computer use, tool use: described as industry-leading in announcement summary; specific numeric scores not extracted from text.
- Agentic coding/long-running tasks: qualitative improvements reported (agent teams, compaction, adaptive thinking).

Reasoning / knowledge:

- Humanity's Last Exam (HLE, with tools): **leads all other frontier models** (Anthropic announcement). Footnote notes updated reported score context (53.0% with tools mentioned in changelog note in fetched text); treat as approximate/announcement-reported.
- MRCR v2 (8-needle, 1M variant, long-context retrieval): **76%** vs Sonnet 4.5 **18.5%** (Anthropic announcement).
- GPQA Diamond: **no verified public score found** in accessible fetched text.
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**

Coding:

- SWE-bench Verified: **averaged over 25 trials** (base) and **81.42% with a prompt modification** (Anthropic announcement footnote).
- Root cause analysis, multilingual coding, long-term coherence, cybersecurity/life sciences: highlighted as strong in announcement charts/text; specific numeric values not extracted from text.
- LiveCodeBench / SciCode: **no verified public score found** in accessible fetched text.

Long context:

- MRCR v2 8-needle 1M: **76%** (Anthropic announcement) — strong long-context retrieval evidence.
- 1M token context window (beta), 128k output tokens (Anthropic announcement).

### Normalized scores (1–100)

> Derived from Anthropic announcement evidence (MRCR 76%, SWE-bench Verified 81.42% with prompt mod, GDPval-AA Elo leads, Terminal-Bench/BrowseComp/HLE leadership claims). Comparative claims without extracted absolutes reduce precision; scores are normalized interpretations.

- **Tool use: 90/100.** Strong agentic/tool-use evidence: Terminal-Bench 2.0 highest, GDPval-AA large Elo leads, MCP Atlas 62.7% (high effort), BrowseComp best, plus productized agent teams/compaction/adaptive thinking; capped slightly by incomplete extracted absolute numbers across all tool benchmarks.
- **Reasoning: 88/100.** HLE leadership claim (with tools) and broad frontier performance across knowledge-work/reasoning evals support very strong reasoning; exact HLE/GPQA absolutes not fully extracted from fetched text, so capped below top-of-scale certainty.
- **Context window: 96/100.** 1M-token context (beta) with demonstrated MRCR v2 76% at 1M (8-needle) indicates high usable long-context retrieval, not just nominal window.
- **Multimodal: 60/100.** Text and image input supported (AA/OpenRouter specs), but no verified public vision-benchmark scores (e.g. MMMU/MMMU-Pro) found in fetched sources; stronger than text-only, capped by limited evidence.
- **Coding: 92/100.** SWE-bench Verified 81.42% (with prompt modification; averaged trials reported) and Terminal-Bench 2.0 highest claim indicate top-tier coding/agentic software engineering; capped pending broader absolute breakdown (LiveCodeBench/SciCode/etc.).
- **Cost efficiency: 40/100.** Premium pricing at $5/$25 per 1M tokens; high capability but expensive versus lower-cost models (cache discount available).
- **Overall Score: 85/100.** Mean of five non-cost dims `(90+88+96+60+92)/5 = 85.2` → **85** (half-up). Best fit as a top-tier agentic coding/reasoning model with excellent long-context retrieval and premium cost.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Anthropic announcement, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6)
  - [Anthropic — Claude Opus 4.6 System Card](https://www.anthropic.com/claude-opus-4-6-system-card)
  - [Artificial Analysis — Claude Opus 4.6](https://artificialanalysis.ai/models/claude-opus-4-6)
  - [OpenRouter — anthropic/claude-opus-4.6](https://openrouter.ai/anthropic/claude-opus-4.6)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
