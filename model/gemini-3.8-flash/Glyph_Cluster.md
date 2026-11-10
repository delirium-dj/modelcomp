# Gemini 3.8 Flash — findings by Glyph Cluster

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (Google; "High" reasoning variant surfaced on Artificial Analysis)
- **Short description:** Google's Gemini 3.8 Flash reasoning model, positioned as an efficient, fast multimodal model for agentic and high-throughput tasks with broad input modalities. Proprietary.
- **Provider / access:** Google AI Studio and Google Vertex AI; served via OpenRouter as `google/gemini-3.8-flash`. Chat/completions-style API access (OpenRouter documents Chat Completions endpoint).
- **Release / knowledge:** Released 2026-09-02 (per Artificial Analysis). Knowledge/training cutoff not explicitly stated on fetched sources.
- **IDs:** `google/gemini-3.8-flash` (OpenRouter and Google model naming as surfaced on AA). No free-tier ID verified.
- **Context window:** 1,000,000 tokens (per Artificial Analysis). Max output not explicitly specified on fetched AA/OpenRouter pages.
- **Modalities:** Text, image, speech, and video input; text output. Reasoning yes (AA lists as reasoning model / "High" variant). Tool use supported (OpenRouter advertises tools/tool_choice).
- **Pricing (as of 2026-11-10):** Varies by provider/tier on OpenRouter (examples shown from ~$0.375/$1.875 to ~$1.35/$6.75 per 1M input/output; see model page for full table). Artificial Analysis comparison summary lists $0.75 / 1M input and $3.75 / 1M output for the evaluated configuration. Paid, competitively priced.
- **Architecture:** Proprietary (parameter count and detailed architecture not publicly disclosed).

### Raw benchmarks found

> Sources consulted: Artificial Analysis model page, OpenRouter model page. Web search tooling was unavailable during this run (HTTP 402), so specific per-benchmark leaderboard numbers beyond the aggregate/index figures exposed on fetched pages were not independently verified.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (**aggregate, agentic-heavy mix**): **31** (#51 / 74 on fetched page, 2026-11-10 snapshot). Index components include AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1, AA-Omniscience v1.1.
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
- Artificial Analysis Intelligence Index / overall: **31** (#51 / 74, AA, 2026-11-10).
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

- **Tool use: 64/100.** AA Intelligence Index 31 (#51/74) in an agentic-heavy aggregate indicates below-median tool/agent performance for complex workflows in that benchmark mix; capped by missing dedicated tool-benchmark results.
- **Reasoning: 66/100.** Reasoning-capable "High" variant with below-median AA aggregate placement suggests moderate reasoning strength relative to peers; capped by lack of standalone reasoning benchmark figures.
- **Context window: 95/100.** Verified 1M-token context window is top-tier capacity; capped slightly by absence of independently verified 1M retrieval-quality benchmarks.
- **Multimodal: 85/100.** Verified text, image, speech, and video input provides broad input-side multimodality; text-only output and no verified native media generation output limit full multimodal breadth.
- **Coding: 64/100.** AA aggregate placement below median implies limited coding/agentic-coding strength versus stronger peers in that index; capped by lack of direct coding benchmark numbers.
- **Cost efficiency: 86/100.** Competitive pricing ($0.75/$3.75 per 1M tokens in AA summary, with even lower tiers on OpenRouter) offers strong value for its capability class. Not included in Overall.
- **Overall Score: 75/100.** Mean of the five non-cost dimensions (Tool 64, Reasoning 66, Context 95, Multimodal 85, Coding 64) = 374/5 = 74.8, rounded to 75 (half-up). Best fit: cost-efficient multimodal long-context tasks and lighter agentic workloads where broad input support and low price matter more than peak reasoning/coding performance.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched benchmark-aggregator and provider-routing pages (web search unavailable in-session; web fetch used for primary accessible pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 3.8 Flash (High)](https://artificialanalysis.ai/models/gemini-3-8-flash)
  - [OpenRouter — google/gemini-3.8-flash](https://openrouter.ai/google/gemini-3.8-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.