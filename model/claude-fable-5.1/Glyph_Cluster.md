# Claude Fable 5.1 — findings by Glyph Cluster

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Anthropic; "Max, Default Fallback" variant surfaced on Artificial Analysis)
- **Short description:** Anthropic's Claude Fable 5.1 frontier reasoning model for demanding reasoning and long-horizon agentic work (per Anthropic lineup context), now succeeded in AA tracking by Claude Fable 5.2. Proprietary.
- **Provider / access:** Anthropic Claude API and cloud surfaces (Azure, Amazon Bedrock, Google Vertex listed on OpenRouter); served via OpenRouter as `anthropic/claude-fable-5.1`. Chat/completions-style API access (OpenRouter documents Chat Completions endpoint and reasoning/verbosity-related fields).
- **Release / knowledge:** Released 2026-09-01 (per Artificial Analysis). Knowledge/training cutoff not explicitly stated on fetched AA/OpenRouter pages; Anthropic overview lists later Fable 5.2 with Jun 2026 cutoffs but not Fable 5.1 specifically on the fetched page.
- **IDs:** `anthropic/claude-fable-5.1` (OpenRouter), `claude-fable-5-1` (provider naming as surfaced on AA). No free-tier ID verified.
- **Context window:** 1,000,000 tokens (per Artificial Analysis). Max output not explicitly specified on fetched AA/OpenRouter pages.
- **Modalities:** Text and image input; text output. Reasoning yes (AA lists as reasoning model). Tool use supported (OpenRouter advertises tools/tool_choice).
- **Pricing (as of 2026-11-10):** $10.00 / 1M input tokens, $50.00 / 1M output tokens (per AA and OpenRouter standard listings; cache discounts and tiers vary by provider). Paid, premium pricing.
- **Architecture:** Proprietary (parameter count and detailed architecture not publicly disclosed).

### Raw benchmarks found

> Sources consulted: Artificial Analysis model page, OpenRouter model page. Web search tooling was unavailable during this run (HTTP 402), so specific per-benchmark leaderboard numbers beyond the aggregate/index figures exposed on fetched pages were not independently verified.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (**aggregate, agentic-heavy mix**): **49** (#24 / 74 on fetched page, 2026-11-10 snapshot). Index components include AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1, AA-Omniscience v1.1.
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
- Artificial Analysis Intelligence Index / overall: **49** (#24 / 74, AA, 2026-11-10).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (AA-Omniscience v1.1 included in AA index aggregate).

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found** (FrontierCode 2.0 and Terminal-Bench components included in AA index aggregate).

Long context:

- **1M token context window** advertised (AA); specific long-context retrieval benchmark results (MRCR/RULER/GraphWalks at 1M) **no verified public score found**.

### Normalized scores (1–100)

> Scores are normalized interpretations from available evidence (primarily AA aggregate/index and provider specs), not official vendor scores. Individual benchmark breakdowns were not accessible in this pass.

- **Tool use: 84/100.** AA Intelligence Index 49 (#24/74) in an agentic-heavy aggregate indicates above-average tool/agent capability but below frontier leaders; capped by missing dedicated tool-benchmark scores.
- **Reasoning: 85/100.** Reasoning-capable model with solid above-median AA aggregate placement supports strong reasoning for complex tasks; capped by lack of separately verified GPQA/HLE headline numbers.
- **Context window: 95/100.** Verified 1M-token context window is top-tier capacity; capped slightly by absence of independently verified 1M retrieval-quality benchmarks.
- **Multimodal: 70/100.** Verified text and image input with text-only output; no verified audio/video input or native media generation output in fetched specs.
- **Coding: 84/100.** AA index includes coding/agentic-coding evaluations and overall placement is above average, implying competent coding; capped by lack of direct SWE-bench/LiveCodeBench figures.
- **Cost efficiency: 20/100.** Premium pricing at $10.00/$50.00 per 1M tokens is very expensive relative to most alternatives (AA notes particularly expensive in class). Not included in Overall.
- **Overall Score: 84/100.** Mean of the five non-cost dimensions (Tool 84, Reasoning 85, Context 95, Multimodal 70, Coding 84) = 418/5 = 83.6, rounded to 84 (half-up). Best fit: demanding reasoning and long-context agentic tasks when budget is secondary to capability (noting a newer Fable 5.2 successor exists).

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched benchmark-aggregator and provider-routing pages (web search unavailable in-session; web fetch used for primary accessible pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Fable 5.1 (Max, Default Fallback)](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [OpenRouter — anthropic/claude-fable-5.1](https://openrouter.ai/anthropic/claude-fable-5.1)
  - [Anthropic — Models overview](https://platform.claude.com/docs/en/models/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.