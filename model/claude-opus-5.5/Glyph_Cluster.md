# Claude Opus 5.5 — findings by Glyph Cluster

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5 (Anthropic naming uses "Claude Opus 5.5"; Max/default-fallback variant surfaced on Artificial Analysis)
- **Short description:** Anthropic's flagship frontier reasoning model in the Claude 5.5 generation, positioned for long-running agentic coding and knowledge work. Proprietary model; reasoning-capable.
- **Provider / access:** Anthropic Claude API (`claude-opus-5-5`), Claude Platform on AWS (`claude-opus-5-5`), Amazon Bedrock (`anthropic.claude-opus-5-5`), Google Vertex / Claude Models on Google Cloud (`claude-opus-5-5`), Microsoft Foundry (`claude-opus-5-5`), Azure; also served via OpenRouter as `anthropic/claude-opus-5.5`. Messages/Chat Completions-style API access depending on provider.
- **Release / knowledge:** Released 2026-09-22 (per Artificial Analysis). Reliable knowledge cutoff June 2026; training data cutoff June 2026 (per Anthropic models overview).
- **IDs:** `anthropic/claude-opus-5.5` (OpenRouter), `claude-opus-5-5` (Claude API and multiple first-party/cloud surfaces). No free-tier ID verified.
- **Context window:** 1,000,000 tokens total context (per Anthropic models overview and Artificial Analysis); max output 128K tokens on synchronous Messages API (per Anthropic docs).
- **Modalities:** Text and image input; text output. Reasoning yes (adaptive thinking, always on per Anthropic overview). Tool use supported.
- **Pricing (as of 2026-11-10):** $4.00 / 1M input tokens, $20.00 / 1M output tokens base pricing on Anthropic/OpenRouter standard listings (cache/read/write and long-context tiers vary by provider; see provider pages). Paid model.
- **Architecture:** Proprietary (parameter count and detailed architecture not publicly disclosed).

### Raw benchmarks found

> Sources consulted: Anthropic models overview, Artificial Analysis model page, OpenRouter model page. Web search tooling was unavailable during this run (HTTP 402), so specific per-benchmark leaderboard numbers beyond the aggregate/index figures exposed on fetched pages were not independently verified.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (**aggregate, agentic-heavy mix**): **59** (#5 / 74 on fetched page, 2026-11-10 snapshot). Includes AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1, AA-Omniscience v1.1 (per AA methodology text).
- Terminal-Bench 2.1: **no verified public score found** (not individually extracted from accessible sources in this run).
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA: **no verified public score found** (GDP.pdf included in AA index, but standalone GDPval-AA Elo not verified here).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**.
- HLE: **no verified public score found** (HLE-Diamond included in AA Intelligence Index aggregate; standalone HLE score not verified).
- LCR / MLCR: **no verified public score found**.
- CritPt: **no verified public score found** (CritPt v2 Hard Subset included in AA index aggregate).
- Artificial Analysis Intelligence Index / overall: **59** (#5 / 74, AA, 2026-11-10).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (AA-Omniscience v1.1 included in AA index aggregate).

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found** (FrontierCode 2.0 and Terminal-Bench 4.0/Science are part of AA index aggregate).

Long context:

- **1M token context window** advertised (Anthropic / AA / OpenRouter); specific long-context retrieval benchmark results (MRCR/RULER/GraphWalks at 1M) **no verified public score found**.

### Normalized scores (1–100)

> Scores are normalized interpretations from available evidence (primarily AA aggregate/index and vendor specs), not official vendor scores. Where per-benchmark detail was unavailable, scores reflect conservative inference from verified aggregate positioning and may warrant revision with fuller benchmark disclosure.

- **Tool use: 93/100.** AA Intelligence Index 59 (#5/74) includes multiple agentic/tool-use evaluations (AA-Briefcase, AutomationBench-AA, Terminal-Bench series, FrontierCode 2.0), indicating top-tier agentic capability; capped by lack of individually verified public scores on dedicated tool-use suites (Tau, MCP-Atlas, GDPval-AA Elo) in this pass.
- **Reasoning: 95/100.** Strong frontier reasoning positioning (AA Intelligence Index #5/74, reasoning-capable with adaptive thinking) and inclusion of demanding reasoning/knowledge components (HLE-Diamond, CritPt v2 Hard, AA-Omniscience) support very high reasoning; capped by absence of separately verified GPQA/HLE headline numbers here.
- **Context window: 95/100.** Verified 1M-token context window and 128K max output (Anthropic/AA/OpenRouter) place it in the top context tier; capped slightly because long-context retrieval quality at full 1M was not independently benchmark-verified in this run.
- **Multimodal: 70/100.** Verified text and image input with text-only output and reasoning/tool support; no verified audio/video input or image/video generation in fetched specs, limiting modality breadth versus fully multimodal systems.
- **Coding: 93/100.** Frontier coding/agentic coding components in AA Intelligence Index (Terminal-Bench 4.0, FrontierCode 2.0, Terminal-Bench-Science 0.1) and Opus-line reputation support top-tier coding; capped by lack of direct SWE-bench Verified/LiveCodeBench figures in accessible sources for this report.
- **Cost efficiency: 45/100.** Paid pricing at $4.00/$20.00 per 1M tokens is materially above low-cost/free tiers; cache discounts exist but base cost remains premium (AA classifies as somewhat expensive). Not included in Overall.
- **Overall Score: 89/100.** Mean of the five non-cost dimensions (Tool 93, Reasoning 95, Context 95, Multimodal 70, Coding 93) = 446/5 = 89.2, rounded to 89 (half-up). Best fit: high-end agentic reasoning/coding and long-context knowledge work where premium pricing is acceptable.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched vendor/docs and benchmark-aggregator pages (web search unavailable in-session; web fetch used for primary accessible pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Models overview (Claude Opus 5.5)](https://platform.claude.com/docs/en/models/overview)
  - [Artificial Analysis — Claude Opus 5.5 (Max, Default Fallback)](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [OpenRouter — anthropic/claude-opus-5.5](https://openrouter.ai/anthropic/claude-opus-5.5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.