# GPT-6 Astra — findings by Glyph Cluster

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (OpenAI; hyphenated vendor style; "Max" variant surfaced on Artificial Analysis)
- **Short description:** OpenAI's GPT-6 Astra frontier reasoning model, targeting high-end agentic, reasoning, and coding workloads with large context. Proprietary.
- **Provider / access:** OpenAI API and multiple cloud/provider surfaces (OpenAI, Azure, Amazon Bedrock listed on OpenRouter); served via OpenRouter as `openai/gpt-6-astra`. Chat/completions-style API access (OpenRouter documents Chat Completions endpoint and reasoning/verbosity-related fields).
- **Release / knowledge:** Released 2026-09-03 (per Artificial Analysis). Knowledge cutoff 2026-04-30 (per Artificial Analysis).
- **IDs:** `openai/gpt-6-astra` (OpenRouter), `gpt-6-astra` (provider naming as surfaced on AA). No free-tier ID verified.
- **Context window:** 1,000,000 tokens (per Artificial Analysis). Max output not explicitly specified on fetched pages.
- **Modalities:** Text and image input; text output. Reasoning yes (AA lists as reasoning model / "Max" variant). Tool use supported (OpenRouter advertises tools/tool_choice).
- **Pricing (as of 2026-11-10):** Varies significantly by provider/tier on OpenRouter (examples shown from ~$5/$25 to ~$60/$300 per 1M input/output across tiers/providers; see model page for full table). Artificial Analysis comparison summary lists $10.00 / 1M input and $50.00 / 1M output for the evaluated configuration. Paid, premium pricing.
- **Architecture:** Proprietary (parameter count and detailed architecture not publicly disclosed).

### Raw benchmarks found

> Sources consulted: Artificial Analysis model page, OpenRouter model page. Web search tooling was unavailable during this run (HTTP 402), so specific per-benchmark leaderboard numbers beyond the aggregate/index figures exposed on fetched pages were not independently verified.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (**aggregate, agentic-heavy mix**): **57** (#8 / 74 on fetched page, 2026-11-10 snapshot). Index components include AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1, AA-Omniscience v1.1.
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
- Artificial Analysis Intelligence Index / overall: **57** (#8 / 74, AA, 2026-11-10).
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

- **Tool use: 92/100.** AA Intelligence Index 57 (#8/74) in an agentic-heavy aggregate indicates strong frontier-level tool/agent capability; capped by missing dedicated tool-benchmark scores in this run.
- **Reasoning: 93/100.** High aggregate intelligence ranking and reasoning-capable "Max" variant support very strong reasoning; capped by lack of separately verified GPQA/HLE headline numbers.
- **Context window: 95/100.** Verified 1M-token context window is top-tier capacity; capped slightly by absence of independently verified 1M retrieval-quality benchmarks.
- **Multimodal: 70/100.** Verified text and image input with text-only output; no verified audio/video input or native media generation output in fetched specs.
- **Coding: 92/100.** Strong placement on an index including FrontierCode 2.0 and Terminal-Bench evaluations implies high-end coding/agentic coding capability; capped by lack of direct SWE-bench/LiveCodeBench figures.
- **Cost efficiency: 25/100.** AA comparison configuration is expensive ($10.00/$50.00 per 1M tokens) and OpenRouter tiers can be substantially higher, making it a premium-cost option. Not included in Overall.
- **Overall Score: 88/100.** Mean of the five non-cost dimensions (Tool 92, Reasoning 93, Context 95, Multimodal 70, Coding 92) = 442/5 = 88.4, rounded to 88 (half-up). Best fit: premium frontier agentic reasoning and coding workloads where high capability justifies high cost.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched benchmark-aggregator and provider-routing pages (web search unavailable in-session; web fetch used for primary accessible pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-6 Astra (Max)](https://artificialanalysis.ai/models/gpt-6-astra)
  - [OpenRouter — openai/gpt-6-astra](https://openrouter.ai/openai/gpt-6-astra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.