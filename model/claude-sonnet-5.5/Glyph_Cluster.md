# Claude Sonnet 5.5 — findings by Glyph Cluster

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5 (Anthropic; "Max, Default Fallback" variant surfaced on Artificial Analysis)
- **Short description:** Anthropic's Claude Sonnet 5.5 frontier reasoning model, positioned as a strong balance of speed and intelligence for agentic coding and knowledge work. Proprietary.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-5-5`), Claude Platform on AWS, Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Vertex / Claude Models on Google Cloud, Microsoft Foundry, Azure; also served via OpenRouter as `anthropic/claude-sonnet-5.5`. Chat/completions-style API access depending on provider.
- **Release / knowledge:** Released 2026-09-28 (per Artificial Analysis). Reliable knowledge cutoff June 2026; training data cutoff June 2026 (per Anthropic models overview).
- **IDs:** `anthropic/claude-sonnet-5.5` (OpenRouter), `claude-sonnet-5-5` (Claude API and multiple first-party/cloud surfaces). No free-tier ID verified.
- **Context window:** 1,000,000 tokens total context; max output 128K tokens on synchronous Messages API (per Anthropic models overview). AA also reports 1M context window.
- **Modalities:** Text and image input; text output. Reasoning yes (adaptive thinking supported per Anthropic overview). Tool use supported.
- **Pricing (as of 2026-11-10):** $2.00 / 1M input tokens, $10.00 / 1M output tokens base pricing (Anthropic models overview, AA, OpenRouter standard listings; cache/read/write and regional tiers vary by provider). Paid model.
- **Architecture:** Proprietary (parameter count and detailed architecture not publicly disclosed).

### Raw benchmarks found

> Sources consulted: Anthropic models overview, Artificial Analysis model page, OpenRouter model page. Web search tooling was unavailable during this run (HTTP 402), so specific per-benchmark leaderboard numbers beyond the aggregate/index figures exposed on fetched pages were not independently verified.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (**aggregate, agentic-heavy mix**): **55** (#13 / 74 on fetched page, 2026-11-10 snapshot). Index components include AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1, AA-Omniscience v1.1.
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
- Artificial Analysis Intelligence Index / overall: **55** (#13 / 74, AA, 2026-11-10).
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

- **Tool use: 90/100.** AA Intelligence Index 55 (#13/74) across agentic-heavy evaluations indicates strong tool/agent capability in the upper tier; capped by missing dedicated tool-benchmark scores.
- **Reasoning: 91/100.** High AA aggregate placement and reasoning-capable design (adaptive thinking) support very strong reasoning; capped by lack of separately verified GPQA/HLE headline numbers.
- **Context window: 95/100.** Verified 1M-token context window and 128K max output place it in the top context tier; capped slightly by no independently verified 1M retrieval-quality benchmarks.
- **Multimodal: 70/100.** Verified text and image input with text-only output; no verified audio/video input or native media generation output in fetched specs.
- **Coding: 91/100.** Strong AA aggregate performance on an index that includes FrontierCode 2.0 and Terminal-Bench evaluations indicates high-end coding/agentic coding; capped by absence of direct SWE-bench/LiveCodeBench figures.
- **Cost efficiency: 72/100.** $2.00/$10.00 base pricing is reasonably competitive for a high-capability frontier model (better value than premium Opus/Fable tiers), though not low-cost/free. Not included in Overall.
- **Overall Score: 87/100.** Mean of the five non-cost dimensions (Tool 90, Reasoning 91, Context 95, Multimodal 70, Coding 91) = 437/5 = 87.4, rounded to 87 (half-up). Best fit: high-capability agentic coding and reasoning workloads needing strong performance at more moderate pricing than top-premium models.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched vendor/docs and benchmark-aggregator pages (web search unavailable in-session; web fetch used for primary accessible pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Models overview (Claude Sonnet 5.5)](https://platform.claude.com/docs/en/models/overview)
  - [Artificial Analysis — Claude Sonnet 5.5 (Max, Default Fallback)](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [OpenRouter — anthropic/claude-sonnet-5.5](https://openrouter.ai/anthropic/claude-sonnet-5.5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.