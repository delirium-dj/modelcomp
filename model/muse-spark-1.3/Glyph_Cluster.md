# Muse Spark 1.3 — findings by Glyph Cluster

- Source: Meta (`muse-spark-1.3`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (Max variant surfaced on Artificial Analysis; Meta Muse family)
- **Short description:** Meta's Muse Spark 1.3 multimodal reasoning model for agentic and general tasks, part of the Muse lineup (successor context noted on AA: newer Muse Wonder release suggested). Proprietary.
- **Provider / access:** Meta / Google Vertex (per OpenRouter provider listing) and Meta model surfaces; served via OpenRouter as `meta/muse-spark-1.3`. Chat/completions-style API access (OpenRouter documents Chat Completions endpoint).
- **Release / knowledge:** Released 2026-09-02 (per Artificial Analysis). Knowledge/training cutoff not explicitly stated on fetched sources; AA page notes model is deprecated in their tracking (benchmarked less often) with Muse Wonder as newer release.
- **IDs:** `meta/muse-spark-1.3` (OpenRouter). Tier variants (Contributor/Free/Standard/Max etc.) refer to the same model weights per project alias-family rules; no separate tier-suffixed folder should be created.
- **Context window:** 1,000,000 tokens (per Artificial Analysis). Max output not explicitly specified on fetched pages.
- **Modalities:** Text, image, and video input; text output. Reasoning yes (AA lists as reasoning model). Tool use supported (OpenRouter advertises tools/tool_choice).
- **Pricing (as of 2026-11-10):** $1.25 / 1M input tokens, $4.25 / 1M output tokens on fetched OpenRouter/AA summary (cache discount noted by AA ~88%; tier/pricing details may vary). Paid pricing listed; free/community tiers may exist elsewhere but not verified as a distinct model ID in this pass.
- **Architecture:** Proprietary (parameter count and detailed architecture not publicly disclosed).

### Raw benchmarks found

> Sources consulted: Artificial Analysis model page, OpenRouter model page, Meta AI blog (Muse Spark 1.1 announcement page fetched for family context; direct Muse Spark 1.3 benchmark report not located via accessible fetches in this run). Web search tooling was unavailable during this run (HTTP 402), so specific per-benchmark leaderboard numbers beyond the aggregate/index figures exposed on fetched pages were not independently verified.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (**aggregate, agentic-heavy mix**): **37** (#40 / 74 on fetched page, 2026-11-10 snapshot). Index components include AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1, AA-Omniscience v1.1.
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
- Artificial Analysis Intelligence Index / overall: **37** (#40 / 74, AA, 2026-11-10).
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

> Scores are normalized interpretations from available evidence (primarily AA aggregate/index and provider specs), not official vendor scores. Muse Spark 1.3-specific detailed benchmark reports were not directly accessible in this pass; scoring reflects aggregate evidence conservatively.

- **Tool use: 72/100.** AA Intelligence Index 37 (#40/74) in an agentic-heavy aggregate suggests below-median-to-mid capability for complex tool/agent workflows in that benchmark mix; capped by lack of dedicated tool-benchmark results.
- **Reasoning: 74/100.** Reasoning-capable model with moderate AA aggregate placement indicates competent but not frontier-level reasoning in that evaluation set; capped by missing standalone reasoning benchmark figures.
- **Context window: 95/100.** Verified 1M-token context window is top-tier capacity; capped slightly by absence of independently verified 1M retrieval-quality benchmarks.
- **Multimodal: 82/100.** Verified text, image, and video input with text output provides strong input-side multimodality (better than text+image-only), but no verified audio input or native image/video generation output in fetched specs.
- **Coding: 70/100.** AA aggregate placement below median implies limited coding/agentic-coding strength relative to stronger peers in that index; capped by lack of direct coding benchmark numbers.
- **Cost efficiency: 78/100.** Listed pricing ($1.25/$4.25 per 1M tokens) is competitively priced versus many frontier paid models in AA comparison, offering good value for its capability tier. Not included in Overall.
- **Overall Score: 79/100.** Mean of the five non-cost dimensions (Tool 72, Reasoning 74, Context 95, Multimodal 82, Coding 70) = 393/5 = 78.6, rounded to 79 (half-up). Best fit: cost-conscious multimodal long-context assistants and lighter agentic workloads where video/image understanding matters more than peak coding/agentic performance.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched benchmark-aggregator and provider-routing pages (web search unavailable in-session; web fetch used for primary accessible pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Muse Spark 1.3 (Max)](https://artificialanalysis.ai/models/muse-spark-1-3)
  - [OpenRouter — meta/muse-spark-1.3](https://openrouter.ai/meta/muse-spark-1.3)
  - [Meta AI blog — Introducing Muse Spark 1.1 (family context)](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.