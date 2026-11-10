# Claude Opus 5 — findings by Glyph Cluster

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (Anthropic; "Max" variant surfaced on Artificial Analysis)
- **Short description:** Anthropic's Claude Opus 5 frontier reasoning model (legacy, succeeded by Claude Opus 5.5), designed for complex agentic coding and knowledge work. Proprietary.
- **Provider / access:** Anthropic Claude API (`claude-opus-5`), Claude Platform on AWS, Amazon Bedrock (`anthropic.claude-opus-5`), Google Vertex / Claude Models on Google Cloud, Microsoft Foundry, Azure; also served via OpenRouter as `anthropic/claude-opus-5`. Chat/completions-style API access depending on provider.
- **Release / knowledge:** Released 2026-07-24 (per Anthropic docs and AA). Reliable knowledge cutoff May 2026; training data cutoff May 2026 (per Anthropic docs).
- **IDs:** `anthropic/claude-opus-5` (OpenRouter), `claude-opus-5` (Claude API and multiple first-party/cloud surfaces). No free-tier ID verified.
- **Context window:** 1,000,000 tokens; max output 128K tokens on synchronous Messages API (per Anthropic docs). Supports up to 300K output tokens on Message Batches API with beta header (per Anthropic docs). AA reports 1M context.
- **Modalities:** Text and image input; text output. Reasoning yes (adaptive thinking). Tool use supported.
- **Pricing (as of 2026-11-10):** $5.00 / 1M input tokens, $25.00 / 1M output tokens base pricing (Anthropic docs, AA, OpenRouter standard listings; cache/read/write and regional tiers vary). Paid, premium pricing.
- **Architecture:** Proprietary (parameter count and detailed architecture not publicly disclosed).

### Raw benchmarks found

> Sources consulted: Anthropic Claude Opus 5 overview/docs, Artificial Analysis model page, OpenRouter model page. Web search tooling was unavailable during this run (HTTP 402), so specific per-benchmark leaderboard numbers beyond the aggregate/index figures exposed on fetched pages were not independently verified.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (**aggregate, agentic-heavy mix**): **44** (#30 / 74 on fetched page, 2026-11-10 snapshot). Index components include AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1, AA-Omniscience v1.1.
- Terminal-Bench 2.1: **no verified public score found**.
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- GDPval-AA: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**.
- HLE: **no verified public score found** (HLE-Diamond included in AA index aggregate; standalone score not verified).
- LCR / MLCR: **no verified public score found**.
- CritPt: **no verified public score found** (CritPt v2 Hard Subset included in AA index aggregate).
- Artificial Analysis Intelligence Index / overall: **44** (#30 / 74, AA, 2026-11-10).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (AA-Omniscience v1.1 included in AA index aggregate).

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found** (FrontierCode 2.0 and Terminal-Bench components included in AA index aggregate).

Long context:

- **1M token context window** advertised (Anthropic/AA/OpenRouter); specific long-context retrieval benchmark results (MRCR/RULER/GraphWalks at 1M) **no verified public score found**.

### Normalized scores (1–100)

> Scores are normalized interpretations from available evidence (primarily AA aggregate/index and vendor specs), not official vendor scores. Individual benchmark breakdowns were not accessible in this pass.

- **Tool use: 80/100.** AA Intelligence Index 44 (#30/74) in an agentic-heavy aggregate indicates above-average but not frontier-leading tool/agent capability; capped by missing dedicated tool-benchmark scores.
- **Reasoning: 82/100.** Reasoning-capable legacy Opus model with above-average AA aggregate placement supports solid reasoning; capped by lack of separately verified GPQA/HLE headline numbers.
- **Context window: 95/100.** Verified 1M-token context window and extended batch output support (300K beta) place it in the top context tier; capped slightly by absence of independently verified 1M retrieval-quality benchmarks.
- **Multimodal: 70/100.** Verified text and image input with text-only output; no verified audio/video input or native media generation output in fetched specs.
- **Coding: 80/100.** AA aggregate (including FrontierCode 2.0 and Terminal-Bench evaluations) suggests competent coding/agentic coding, below current frontier leaders; capped by lack of direct SWE-bench/LiveCodeBench figures.
- **Cost efficiency: 35/100.** $5.00/$25.00 base pricing is expensive relative to many alternatives (and succeeded by newer, better-priced Opus 5.5). Not included in Overall.
- **Overall Score: 81/100.** Mean of the five non-cost dimensions (Tool 80, Reasoning 82, Context 95, Multimodal 70, Coding 80) = 407/5 = 81.4, rounded to 81 (half-up). Best fit: legacy Opus-tier agentic reasoning/coding workloads when compatibility with this specific model ID is required; newer Opus variants generally preferable.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched vendor/docs and benchmark-aggregator pages (web search unavailable in-session; web fetch used for primary accessible pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 5 overview](https://platform.claude.com/docs/en/models/opus-5/overview)
  - [Artificial Analysis — Claude Opus 5 (Max)](https://artificialanalysis.ai/models/claude-opus-5)
  - [OpenRouter — anthropic/claude-opus-5](https://openrouter.ai/anthropic/claude-opus-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.