# Claude Opus 5 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's "Honeycomb" flagship (July 2026) — a thoughtful, proactive model delivering close to Claude Fable 5 frontier intelligence at half the price; the default model on Claude Max and strongest on Claude Pro. Superseded by Opus 5.5 (Sept 2026).
- **Provider / access:** Claude Platform (`claude-opus-5`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Azure; Claude Max/Pro subscriptions. Messages API.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff not published. Introduced the `xhigh` reasoning-effort mode.
- **IDs:** `anthropic/claude-opus-5` (no free Zen ID; premium paid tier).
- **Context window:** 1,000,000 tokens input; 128,000 tokens max output (Claude Platform docs).
- **Modalities:** text + image in, text out; reasoning yes (effort settings incl. xhigh); tool calls yes; computer use (OSWorld) and strong visual/artifact output.
- **Pricing (as of 2026-10-20):** $5 / 1M input, $25 / 1M output (same as Opus 4.8); cache reads $0.50, cache writes $6.25. ~Half the price of Fable 5.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 (computer use): **outperforms every other model at any given cost**, surpassing Fable 5's best at ~1/3 the cost (Anthropic; chart-only exact %); OSWorld 2.1 **74.0%** partial (per the Opus 5.5 launch table)
- AutomationBench (Zapier): **~1.5x the next-best model** for the same cost per task; **26.9%** on the Opus 5.5 comparison table (later reruns)
- Terminal-Bench 4.0: **52.3%** (Anthropic's Opus 5.5 launch table; public leaderboard reproduces 51.8%)
- ARC-AGI 3: **~3x the next-best model** (novel problem solving; Anthropic, chart-only)
- GDPval-AA v2.1: **1708 Elo** (Opus 5.5 launch table)

Reasoning / knowledge:

- Humanity's Last Exam: **63.6%** with tools (Opus 5.5 launch table)
- GDPval-AA v2: state-of-the-art at release (Anthropic)
- ARC-AGI 3: ~3x next-best (see tool use)
- GPQA Diamond: no verified public score found

Coding:

- Frontier-Bench v0.1: **surpasses all other models**, more than doubling Opus 4.8 at lower cost per task (Anthropic, chart-only)
- CursorBench 4.0: **46.6%** (Opus 5.5 launch table; within 0.5% of Fable 5's peak at max effort at half the cost, per launch)
- FrontierCode v1.1 (Main): **48.0%** (Opus 5.5 launch table)
- Terminal-Bench-Science 0.1: **29.0%** (Opus 5.5 launch table)
- Chartography (visual chart recognition): **83.4%** with tools
- SWE-bench Verified: no verified public score found in accessible sources (third-party "97%" claim unverified — not counted)

Long context:

- 1M-token window; no MRCR/RULER figure published — "no long-context retrieval reported".

> Provenance: exact percentages are from Anthropic's Opus 5.5 launch comparison table (which reran Opus 5) plus the Opus 5 launch post's qualitative SOTA claims (several figures are chart-only images with no text value). Labelled accordingly; not silently merged.

### Normalized scores (1–100)

- **Tool use: 93/100.** SOTA at release on OSWorld 2.0 computer use and AutomationBench (~1.5x next-best) plus ARC-AGI 3 ~3x; capped by Terminal-Bench 4.0 52.3% and Terminal-Bench-Science 29.0% that Opus 5.5 later far exceeded.
- **Reasoning: 93/100.** GDPval-AA SOTA (1708 Elo), HLE 63.6% with tools and 3x-next-best ARC-AGI 3; held below the ceiling because Opus 5.5/Fable 5.1 now lead these rows and GPQA is unreported.
- **Context window: 98/100.** 1M-token input with 128K output; near the top, a touch below perfect absent a published long-context retrieval benchmark.
- **Multimodal: 86/100.** Chartography 83.4% with tools, OSWorld computer use and strong visual/artifact generation; capped by no MMMU-Pro / broad image-in benchmark.
- **Coding: 93/100.** Frontier-Bench SOTA (2x+ Opus 4.8) and CursorBench 46.6% within 0.5% of Fable 5 at half the cost; capped by FrontierCode 48.0% and Terminal-Bench rows that Opus 5.5 surpassed.
- **Cost efficiency: 68/100.** $5/$25 is half Fable 5's price and delivers near-Fable intelligence, but it is still a premium paid tier (2x Opus 5.5's later $4/$20, no free lane).
- **Overall Score: 93/100.** Mean of Tool 93 + Reasoning 93 + Context 98 + Multimodal 86 + Coding 93 = 92.6 → 93. Best fit: daily-driver frontier coding, computer use and knowledge work where near-Fable quality at half the cost matters; Opus 5.5 now edges it on most rows at a lower price.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (Anthropic's "Introducing Claude Opus 5" launch post and the Claude Opus 5.5 comparison table; Claude Platform docs for context/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
