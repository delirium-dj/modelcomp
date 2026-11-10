# Muse Wonder Full — findings by Glyph Cluster

- Source: Meta (`muse-wonder-full`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full (Meta; "Max" variant surfaced on Artificial Analysis)
- **Short description:** Meta's Muse Wonder Full frontier reasoning model, positioned as a high-intelligence multimodal model in the Muse family. Proprietary; distinct from Muse Wonder 1.0 (API SKU) per project alias guidance.
- **Provider / access:** Meta model family (specific public API route/pricing not clearly documented on fetched pages). Artificial Analysis lists it as a proprietary Meta model; no OpenRouter API page found via accessible fetch in this run.
- **Release / knowledge:** Released 2026-10-12 (per Artificial Analysis). Knowledge/training cutoff not explicitly stated on fetched sources.
- **IDs:** Exact public API model ID not verified from fetched sources in this run (AA page does not expose a standard provider route string in text). No free-tier ID verified.
- **Context window:** 1,000,000 tokens (per Artificial Analysis). Max output not explicitly specified on fetched pages.
- **Modalities:** Text, image, speech, and video input; text output. Reasoning yes (AA lists as reasoning model). Tool use capability not explicitly detailed on fetched pages.
- **Pricing (as of 2026-11-10):** No verified public per-token pricing found on fetched sources in this run (AA cost/performance pricing metrics shown as unavailable for this model). Paid/subscription access may apply, but pricing details are unverified.
- **Architecture:** Proprietary (parameter count and detailed architecture not publicly disclosed).

### Raw benchmarks found

> Sources consulted: Artificial Analysis model page. Web search tooling was unavailable during this run (HTTP 402), and no accessible OpenRouter/vendor API page with additional benchmark detail was found; specific per-benchmark leaderboard numbers beyond the aggregate/index figures exposed on fetched pages were not independently verified.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (**aggregate, agentic-heavy mix**): **50** (#22 / 119 on fetched page class view, 2026-11-10 snapshot). Index components include AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1, AA-Omniscience v1.1.
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
- Artificial Analysis Intelligence Index / overall: **50** (AA, 2026-11-10).
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

> Scores are normalized interpretations from available evidence (primarily AA aggregate/index and listed specs), not official vendor scores. Public pricing and detailed benchmark breakdowns were limited in accessible sources for this pass.

- **Tool use: 84/100.** AA Intelligence Index 50 in an agentic-heavy aggregate indicates strong above-average tool/agent capability; capped by lack of separately verified dedicated tool-benchmark scores and limited public API/tooling detail.
- **Reasoning: 86/100.** Reasoning-capable model with solid AA aggregate placement supports strong reasoning; capped by absence of individually verified GPQA/HLE headline numbers.
- **Context window: 95/100.** Verified 1M-token context window is top-tier capacity; capped slightly by no independently verified 1M retrieval-quality benchmarks.
- **Multimodal: 88/100.** Verified text, image, speech, and video input provides broad input-side multimodality; output is text-only and no verified native media generation output in fetched specs.
- **Coding: 84/100.** AA aggregate performance (including coding/agentic-coding components) suggests strong coding capability for its class; capped by lack of direct SWE-bench/LiveCodeBench figures.
- **Cost efficiency: 50/100.** No verified public per-token pricing found on accessible sources in this run; scored as neutral/unknown-value midpoint pending verifiable pricing. Not included in Overall.
- **Overall Score: 87/100.** Mean of the five non-cost dimensions (Tool 84, Reasoning 86, Context 95, Multimodal 88, Coding 84) = 437/5 = 87.4, rounded to 87 (half-up). Best fit: high-capability multimodal long-context reasoning tasks where broad input modalities are valuable and access/pricing constraints are acceptable.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-10
- Method: Public-source synthesis from fetched benchmark-aggregator page (web search unavailable in-session; web fetch used for primary accessible pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Muse Wonder Full (Max)](https://artificialanalysis.ai/models/muse-wonder-full)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.