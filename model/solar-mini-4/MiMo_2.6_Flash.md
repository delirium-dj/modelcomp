# Solar Mini 4 — findings by MiMo 2.6_Flash

- Source: Upstage (`solar-mini-4`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact, cost-efficient agent-optimized MoE (35B total / 3B active), pretrained from the ground up for high-volume agent workloads. 512K context + 128K output at flash pricing; fluent Korean + strong English/Japanese; tool calling, reasoning mode, structured outputs. Sibling to closed flagship Solar Pro 4 (AA Index 42) and open-weights Solar Open 2. Positioned as ~MiMo-V2.5 performance at 1/5 active params and ~43% lower task cost.
- **Provider / access:** Upstage Console API; OpenRouter (`upstage/solar-mini4`); Solar Chat; on-premises (AWS/Azure/Snowflake Marketplaces); Hermes Agent free-tier promo (limited time from Oct 5).
- **Release / knowledge:** Released 2026-09-22 (`solar-mini4-260922`); training data cutoff February 2026.
- **IDs:** `upstage/solar-mini4` (OpenRouter); `solar-mini4-260922` (Upstage Console version).
- **Context window:** 512K tokens (524,288 listed on some aggregators); max output 128K tokens.
- **Modalities:** text in; text out; reasoning mode; tool calling + parallel tool calling; structured outputs; chat. No vision input.
- **Pricing (as of 2026-10-13):** Standard $0.10 / 1M input, $0.40 / 1M output, $0.01 cached input; 50% launch discount through 2026-10-22 → $0.05 / $0.20 / $0.005. Proprietary closed weights (on-prem deployment supported).
- **Architecture:** 35B total / 3B active MoE; hybrid/instant reasoning; languages EN/KO/JA.

### Raw benchmarks found

Agent / tool use:

- τ³-Banking: **47.2** (Upstage blog; policy application + multi-turn tool use)
- Tool calling + parallel tool calling (Upstage console)
- Community wrapper self-test: 98.4% field accuracy (test400, judge-model-scored; not independent)
- No independent Agent Arena / PinchBench / ClawEval figures found at launch

Coding:

- SciCode: **47.6%** (Upstage blog)
- No SWE-bench / LiveCodeBench public figure for Mini 4 itself (Solar Open 2 sibling: SWE-V 69.2%, LCB 87.8% on AA leaderboard)

Reasoning / knowledge:

- Humanity's Last Exam: **19.6%** (Upstage blog)
- AA-LCR (long-context reasoning): **83.3%** (Upstage blog)
- No AIME / GPQA / Intelligence Index published for Mini 4 at launch (orcarouter: "no Intelligence Index, no Agent Arena rank, no third-party agentic evaluation")

Long context:

- 512K window; AA-LCR 83.3% shows strong long-context reasoning (not just window size).

### Normalized scores (1–100)

- **Tool use: 62/100.** τ³-Banking 47.2 is mid for multi-turn policy/tool work; parallel tool calling + agent-optimized training + Hermes Agent integration. Capped by no independent agentic suite (PinchBench/ClawEval/Terminal-Bench unknown) and launch-stage opacity.
- **Reasoning: 65/100.** AA-LCR 83.3% is strong long-context reasoning; HLE 19.6% is modest for knowledge-intensive STEM. Capped by no AIME/GPQA figures and thin third-party intelligence coverage.
- **Context window: 88/100.** 512K native with 83.3% long-context reasoning is top-tier for a 3B-active model. Capped slightly by no MRCR/RULER and aggregation disagreement (512K vs 524K listing).
- **Multimodal: 15/100.** Text-only — no image/audio/video input. Capped at text-only floor.
- **Coding: 55/100.** SciCode 47.6% is mid; no SWE-bench figure for Mini 4 itself. Capped by absence of SWE/LCB numbers and mid SciCode.
- **Cost efficiency: 90/100.** $0.05–0.10 in / $0.20–0.40 out for 512K context + 3B active is excellent agent-volume pricing (~43% cheaper than MiMo-V2.5 on task cost per Upstage). Capped by closed weights (no free self-host).
- **Overall Score: 57/100.** Mean of (62 + 65 + 88 + 15 + 55) / 5 = 57.0 → **57**. Best-fit recommendation: cheapest credible 512K-context agent workhorse for high-volume EN/KO/JA document + tool pipelines; prefer Solar Pro 4 for heavier agentic coding/reasoning and open Solar Open 2 for self-host.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (upstage.ai blog/console, openrouter.ai, lmmarketcap.com, orcarouter.ai comparison, zeplik.ai, pricepertoken.com, chosunbiz coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
