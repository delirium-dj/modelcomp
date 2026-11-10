# Gemini 4 Argon — findings by Glyph Cluster

- Source: Google (`gemini-4-argon`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon (Google; "High" reasoning variant surfaced on Artificial Analysis)
- **Short description:** Google's Gemini 4-series frontier reasoning model (Argon variant), positioned for high-intelligence multimodal text/image understanding with large context. Proprietary.
- **Provider / access:** Google AI Studio and Google Vertex AI; also served via OpenRouter as `google/gemini-4-argon`. Chat/completions-style API access via provider surfaces (OpenRouter documents Chat Completions endpoint usage).
- **Release / knowledge:** Released 2026-09-30 (per Artificial Analysis). Knowledge/training cutoff not explicitly stated on fetched sources.
- **IDs:** `google/gemini-4-argon` (OpenRouter), `gemini-4-argon` (Google/provider naming as surfaced on AA). No free-tier ID verified.
- **Context window:** 1,000,000 tokens (per Artificial Analysis and OpenRouter model metadata context implied by AA spec; AA states "1M tokens context window"). Max output not explicitly specified on fetched pages.
- **Modalities:** Text and image input; text output. Reasoning yes (AA lists as reasoning model / "High" variant). Tool use supported (OpenRouter advertises tools/tool_choice).
- **Pricing (as of 2026-11-10):** Varies by provider/tier on OpenRouter (examples shown: $1–$3.60 / 1M input and $5–$18 / 1M output across Google AI Studio/Vertex standard tiers; see model page for full table). Artificial Analysis summary lists $4.00 / 1M input and $20.00 / 1M output for the compared configuration. Paid model.
- **Architecture:** Proprietary (parameter count and detailed architecture not publicly disclosed).

### Raw benchmarks found

> Sources consulted: Artificial Analysis model page, OpenRouter model page. Web search tooling was unavailable during this run (HTTP 402), so specific per-benchmark leaderboard numbers beyond the aggregate/index figures exposed on fetched pages were not independently verified.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (**aggregate, agentic-heavy mix**): **50** (#20 / 74 on fetched page, 2026-11-10 snapshot). Index components include AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1, AA-Omniscience v1.1.
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
- Artificial Analysis Intelligence Index / overall: **50** (#20 / 74, AA, 2026-11-10).
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

> Scores are normalized interpretations from available evidence (primarily AA aggregate/index and provider specs), not official vendor scores. Individual benchmark breakdowns were not accessible in this pass; scoring is conservative relative to aggregate evidence.

- **Tool use: 84/100.** AA Intelligence Index 50 (#20/74) with agentic components suggests above-average but not frontier-leading tool/agent performance in that aggregate; capped by missing dedicated tool-benchmark evidence.
- **Reasoning: 86/100.** Reasoning-capable "High" variant with solid AA aggregate placement indicates strong reasoning, but below top-tier frontier cluster (e.g. #5-level models); capped by lack of separately verified GPQA/HLE numbers.
- **Context window: 95/100.** Verified 1M-token context window places it in the top context tier; capped slightly by no independently verified 1M retrieval-quality benchmarks in this run.
- **Multimodal: 70/100.** Verified text and image input with text-only output; no verified audio/video input or native media generation in fetched specs.
- **Coding: 84/100.** AA index includes coding/agentic-coding tasks and overall placement is above average, implying competent coding; capped by absence of direct SWE-bench/LiveCodeBench figures.
- **Cost efficiency: 45/100.** AA comparison summary indicates $4.00/$20.00 pricing for the evaluated configuration (somewhat expensive in that class), though OpenRouter lists lower-priced provider tiers; overall paid and not low-cost. Not included in Overall.
- **Overall Score: 84/100.** Mean of the five non-cost dimensions (Tool 84, Reasoning 86, Context 95, Multimodal 70, Coding 84) = 419/5 = 83.8, rounded to 84 (half-up). Best fit: strong multimodal reasoning and long-context tasks where solid capability is needed but absolute frontier agentic/coding performance is not required.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched benchmark-aggregator and provider-routing pages (web search unavailable in-session; web fetch used for primary accessible pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 4 Argon (High)](https://artificialanalysis.ai/models/gemini-4-argon)
  - [OpenRouter — google/gemini-4-argon](https://openrouter.ai/google/gemini-4-argon)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.