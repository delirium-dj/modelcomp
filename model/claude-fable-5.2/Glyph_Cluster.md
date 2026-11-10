# Claude Fable 5.2 — findings by Glyph Cluster

- Source: Anthropic (`anthropic/claude-fable-5.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2 (Max, Default Fallback variant evaluated on Artificial Analysis)
- **Short description:** Anthropic's proprietary Claude Fable 5.2 frontier reasoning model, positioned for top-tier agentic knowledge work, coding, and multimodal understanding with very high compute and verbosity.
- **Provider / access:** Anthropic API and hosted providers (e.g. Anthropic, Google Vertex, Amazon Bedrock, Azure) via OpenRouter as `anthropic/claude-fable-5.2`.
- **Release / knowledge:** Released November 2026 (Artificial Analysis: 2026-11-09). Knowledge cutoff not found in verified public sources reviewed.
- **IDs:** `anthropic/claude-fable-5.2` (OpenRouter/provider routing). Dedicated Anthropic docs page for this exact ID was not accessible during research.
- **Context window:** 1,000,000 tokens (1M) per Artificial Analysis.
- **Modalities:** Text and image input; text output. Reasoning model. Tool/function calling supported per OpenRouter capabilities.
- **Pricing (as of 2026-11-10):** ~$8.00 / 1M input and ~$40.00 / 1M output tokens (standard tier per Artificial Analysis/OpenRouter; higher-tier pricing also listed on OpenRouter, with cache/write/request surcharges varying by provider).
- **Architecture:** Proprietary (parameter count and internal architecture not publicly disclosed).

### Raw benchmarks found

> Primary accessible verified source: Artificial Analysis model page and OpenRouter model page. A dedicated Anthropic model card/docs page for Claude Fable 5.2 was not found at accessible URLs during research; granular standalone benchmark breakdowns beyond AA aggregates were not publicly available from fetched sources.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1: **65** (#1/74 in comparable price-tier class on AA; top-ranked in that class). Composite includes AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1.
- AA-Briefcase / AutomationBench-AA / GDPval-AA / Terminal-Bench / other agentic components: included in AA aggregate; no verified standalone public scores found for this exact model.

Reasoning / knowledge:

- AA-Omniscience / HLE-Diamond / CritPt v2 (Hard) / GDP.pdf / other reasoning-knowledge components: included in AA aggregate; no verified standalone public scores found.

Coding:

- Terminal-Bench 4.0 / FrontierCode 2.0 / other coding components: included in AA aggregate; no verified standalone public scores found.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found.

Long context:

- 1M-token context window reported by Artificial Analysis. No verified long-context retrieval benchmark (MRCR/RULER/GraphWalks) scores found.

Efficiency/performance signals (AA):

- Cost per Intelligence Index task: **$26.54** (AA; highest in comparable class).
- Time per Intelligence Index task: **44.4 minutes** (AA; notably slow).
- Output tokens from Intelligence Index: **275M** (very verbose vs class median per AA).
- Time to first answer token: **235.06s**; output speed: **103 tok/s** (AA summary).

### Normalized scores (1–100)

> Scores are normalized interpretations from available third-party evidence (Artificial Analysis). Limited granular public benchmarks cap confidence on component-level attribution; Cost excluded from Overall.

- **Tool use: 96/100.** Leading AA Intelligence Index (65, #1 in comparable class) in a composite that heavily includes agentic/terminal/briefcase/automation evaluations indicates top-tier tool-use and agentic capability. Capped by lack of publicly verifiable standalone tool-use benchmark breakdowns.
- **Reasoning: 96/100.** Top composite intelligence ranking suggests very strong reasoning, knowledge, and scientific problem-solving performance across AA evaluation domains. Capped by absence of disclosed standalone scores (e.g. GPQA/HLE/CritPt) for this exact model.
- **Context window: 95/100.** 1M-token context window supports large-scale analysis and long workflows. Capped because no verified long-context retrieval quality benchmarks were found.
- **Multimodal: 78/100.** Supports text and image input with text output (per AA), enabling vision-grounded understanding. Capped by no verified audio/video modalities or generative multimodal outputs in available specs.
- **Coding: 95/100.** AA composite includes Terminal-Bench 4.0 and FrontierCode 2.0; top overall index placement implies elite coding/engineering performance. Capped by lack of verified standalone coding benchmark results.
- **Cost efficiency: 15/100.** Extremely expensive ($8/$40 per 1M tokens) with very high task cost ($26.54/task) and verbosity; justified only for highest-value, hardest tasks.
- **Overall Score: 92/100.** Mean of non-cost dimensions (96 + 96 + 95 + 78 + 95) / 5 = 92.0. Best fit for frontier, high-stakes agentic reasoning and coding where maximum capability outweighs cost, latency, and verbosity.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research (Artificial Analysis, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Fable 5.2](https://artificialanalysis.ai/models/claude-fable-5-2)
  - [OpenRouter — anthropic/claude-fable-5.2](https://openrouter.ai/anthropic/claude-fable-5.2)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
