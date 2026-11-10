# Gemini 4 Carbon — findings by Glyph Cluster

- Source: Google (`gemini-4-carbon`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon (Google; "High" reasoning variant surfaced on Artificial Analysis)
- **Short description:** Google's top-tier Gemini 4-series frontier reasoning model (Carbon variant), emphasizing high intelligence and broad multimodal input (text, image, speech, video) for complex agentic and knowledge tasks. Proprietary.
- **Provider / access:** Google AI Studio and Google Vertex AI; also served via OpenRouter as `google/gemini-4-carbon`. Chat/completions-style API access (OpenRouter documents Chat Completions endpoint). EU in-region routing available via Google Vertex on OpenRouter (per fetched OpenRouter page).
- **Release / knowledge:** Released 2026-10-28 (per Artificial Analysis). Knowledge/training cutoff not explicitly stated on fetched sources.
- **IDs:** `google/gemini-4-carbon` (OpenRouter), `gemini-4-carbon` (Google/provider naming as surfaced on AA). No free-tier ID verified.
- **Context window:** 1,000,000 tokens (per Artificial Analysis). Max output not explicitly specified on fetched pages.
- **Modalities:** Text, image, speech, and video input; text output. Reasoning yes (AA lists as reasoning model / "High" variant). Tool use supported (OpenRouter advertises tools/tool_choice).
- **Pricing (as of 2026-11-10):** Varies by provider/tier on OpenRouter (examples shown: ~$2–$3.60 / 1M input and ~$10–$18 / 1M output across listed Google tiers; see model page for full table). Artificial Analysis comparison summary lists $4.00 / 1M input and $20.00 / 1M output for the evaluated configuration. Paid model.
- **Architecture:** Proprietary (parameter count and detailed architecture not publicly disclosed).

### Raw benchmarks found

> Sources consulted: Artificial Analysis model page, OpenRouter model page. Web search tooling was unavailable during this run (HTTP 402), so specific per-benchmark leaderboard numbers beyond the aggregate/index figures exposed on fetched pages were not independently verified.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (**aggregate, agentic-heavy mix**): **60** (#4 / 74 on fetched page, 2026-11-10 snapshot). Index components include AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1, AA-Omniscience v1.1.
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
- Artificial Analysis Intelligence Index / overall: **60** (#4 / 74, AA, 2026-11-10).
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

- **Tool use: 94/100.** AA Intelligence Index 60 (#4/74) across agentic-heavy evaluations indicates near-frontier tool/agent performance; capped by lack of separately verified scores on dedicated tool-use suites (Tau, MCP-Atlas, GDPval-AA Elo).
- **Reasoning: 95/100.** Top-tier aggregate intelligence placement (#4/74) with reasoning-capable "High" variant supports very strong reasoning; capped by absence of individually verified GPQA/HLE headline numbers in this pass.
- **Context window: 95/100.** Verified 1M-token context window places it in the top context tier; capped slightly by no independently verified 1M retrieval-quality benchmarks.
- **Multimodal: 85/100.** Verified text, image, speech, and video input provides broad input-side multimodality; text-only output and no verified native image/video/audio generation output limit full multimodal breadth.
- **Coding: 94/100.** Strong aggregate performance on an index that includes FrontierCode 2.0 and Terminal-Bench evaluations indicates top-tier coding/agentic coding; capped by lack of direct SWE-bench/LiveCodeBench figures from accessible sources.
- **Cost efficiency: 45/100.** AA comparison configuration priced at $4.00/$20.00 per 1M tokens (somewhat expensive in class), though provider tiers vary; overall premium paid pricing. Not included in Overall.
- **Overall Score: 93/100.** Mean of the five non-cost dimensions (Tool 94, Reasoning 95, Context 95, Multimodal 85, Coding 94) = 463/5 = 92.6, rounded to 93 (half-up). Best fit: frontier agentic reasoning, coding, and rich multimodal-input analysis where premium pricing is acceptable.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched benchmark-aggregator and provider-routing pages (web search unavailable in-session; web fetch used for primary accessible pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 4 Carbon (High)](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [OpenRouter — google/gemini-4-carbon](https://openrouter.ai/google/gemini-4-carbon)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.