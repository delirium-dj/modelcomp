# Claude Mythos 5.1 — findings by Glyph Cluster

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (Anthropic)
- **Short description:** Anthropic's Claude Mythos 5.1, documented by Anthropic as the same model as Claude Fable 5.1 but available only to organizations verified through Anthropic's verification programs (e.g. Cyber Verification Program). Frontier reasoning model for demanding, long-horizon agentic work.
- **Provider / access:** Claude API (`claude-mythos-5-1`), Amazon Bedrock (`anthropic.claude-mythos-5-1`), Claude Models on Google Cloud (Google managed, `claude-mythos-5-1`), Microsoft Foundry (`claude-mythos-5-1`) — verification required per Anthropic.
- **Release / knowledge:** Released 2026-09-01 (per Anthropic docs). Reliable knowledge cutoff June 2026; training data cutoff June 2026 (per Anthropic docs). Successor Mythos model: Claude Mythos 5.2 (per Anthropic docs).
- **IDs:** `claude-mythos-5-1` (Claude API and listed platforms). No free-tier ID verified.
- **Context window:** 1,000,000 tokens; max output 128K tokens (per Anthropic docs).
- **Modalities:** Text and image input; text output. Reasoning: adaptive (always on). Tool use supported (standard Claude capabilities implied).
- **Pricing (as of 2026-11-10):** $10.00 / 1M input tokens, $50.00 / 1M output tokens (same as Claude Fable 5.1, per Anthropic docs). 5m cache write $12.50/MTok, 1h cache write $20/MTok, cache read $0.25/MTok; Batch API 50% discount. Paid, premium pricing.
- **Architecture:** Proprietary (parameter count and detailed architecture not publicly disclosed). Anthropic states Mythos 5.1 has the same specifications and pricing as Claude Fable 5.1.

### Raw benchmarks found

> Primary sources: Anthropic Claude Mythos 5.1 overview/docs and Claude Fable 5.1 evidence (same model per Anthropic). Also consulted Artificial Analysis Claude Fable 5.1 page for aggregate benchmark context. Web search tooling was unavailable during this run (HTTP 402), so no separate Mythos 5.1-specific public leaderboard page with distinct benchmark numbers was located via accessible fetches.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (**aggregate, agentic-heavy mix**, Claude Fable 5.1 / same-model proxy): **49** (#24 / 74 on AA Fable 5.1 page, 2026-11-10 snapshot). Index components include AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1, AA-Omniscience v1.1.
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
- Artificial Analysis Intelligence Index / overall (same-model proxy): **49** (#24 / 74, AA Claude Fable 5.1).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (AA-Omniscience v1.1 included in AA index aggregate).

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: **no verified public score found** (FrontierCode 2.0 and Terminal-Bench components included in AA index aggregate).

Long context:

- **1M token context window** advertised (Anthropic docs); specific long-context retrieval benchmark results (MRCR/RULER/GraphWalks at 1M) **no verified public score found**.

### Normalized scores (1–100)

> Scores are normalized interpretations from available evidence. Because Anthropic documents Claude Mythos 5.1 as the same model/spec as Claude Fable 5.1, aggregate capability evidence from Claude Fable 5.1 is used as a same-model proxy where Mythos-specific public benchmark reporting was not separately accessible.

- **Tool use: 84/100.** Same-model proxy (Claude Fable 5.1 AA Intelligence Index 49, #24/74, agentic-heavy aggregate) indicates above-average tool/agent capability but below frontier leaders; capped by missing dedicated tool-benchmark scores.
- **Reasoning: 85/100.** Same-model proxy and adaptive-always-on reasoning support strong reasoning for complex tasks; capped by lack of separately verified GPQA/HLE headline numbers.
- **Context window: 95/100.** Verified 1M-token context window and 128K max output are top-tier capacity; capped slightly by absence of independently verified 1M retrieval-quality benchmarks.
- **Multimodal: 70/100.** Verified text and image input with text-only output; no verified audio/video input or native media generation output in fetched specs.
- **Coding: 84/100.** Same-model proxy on AA aggregate (includes coding/agentic-coding evaluations) implies competent above-average coding; capped by lack of direct SWE-bench/LiveCodeBench figures.
- **Cost efficiency: 20/100.** Premium pricing at $10.00/$50.00 per 1M tokens is very expensive relative to most alternatives. Not included in Overall.
- **Overall Score: 84/100.** Mean of the five non-cost dimensions (Tool 84, Reasoning 85, Context 95, Multimodal 70, Coding 84) = 418/5 = 83.6, rounded to 84 (half-up). Best fit: verification-gated deployments needing the same capability profile as Claude Fable 5.1 for demanding reasoning and long-context agentic tasks where budget is secondary.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched Anthropic docs and benchmark-aggregator/provider pages (web search unavailable in-session; web fetch used for primary accessible pages). Mythos 5.1 is treated as same-model/spec as Claude Fable 5.1 per Anthropic documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Mythos 5.1 overview](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Anthropic — Claude Fable 5.1 overview](https://platform.claude.com/docs/en/models/fable-5-1/overview)
  - [Artificial Analysis — Claude Fable 5.1 (Max, Default Fallback)](https://artificialanalysis.ai/models/claude-fable-5-1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.