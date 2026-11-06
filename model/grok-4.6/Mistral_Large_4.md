# Grok 4.6 — findings by Mistral Large 4

- Source: SpaceXAI / xAI (`grok-4.6`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's August 2026 flagship (trading name SpaceXAI), tuned for long-running agents, coding and interactive prototypes; AA Index 61 tying GPT-5.6 Sol at $2/$6 — "best value" positioning; succeeded by Grok 4.7 (2026-09-21) at the same price.
- **Provider / access:** xAI API (`grok-4.6`, Responses + Chat Completions), Cursor (256K there), Grok Build (2x included usage), Bedrock; OpenRouter `x-ai/grok-4.6`.
- **Release / knowledge:** Released 2026-08-12; knowledge cutoff 2026-02-01 (llm-stats).
- **IDs:** `grok-4.6` (xAI API); `x-ai/grok-4.6` (OpenRouter).
- **Context window:** 500,000 tokens on xAI API (256K in Cursor — provider conflict cited); no published text output cap.
- **Modalities:** Text + image in, text out; reasoning effort low/medium(default)/high/xhigh; function calling, web + X search, code execution (server-side tools billed separately).
- **Pricing (as of 2026-11-05):** $2 / $6 per 1M in/out (same as 4.5); ~60% below Sol/Opus 5 list (toolstep). No free API tier.
- **Architecture:** Proprietary; longer supplemental training than 4.5 with curated model-generated reasoning/technical data, improved optimizer (official news).

### Raw benchmarks found

Official xAI news + AA cross-checked against kingy, codersera, kie, llm-stats, BenchLM, unifically, emergent.sh, datastudios; conflicts noted:

Agent / tool use:

- GDPval-AA v2: **1753 Elo** — 2nd only to (then-leading) models (AA)
- CursorBench 3.2: **70.8%** — leads (unifically)
- Terminal-Bench v3.0: loses by ~8.6 pts to GPT-5.6 Sol (kie — launch-post prose skipped this)
- Wins knowledge work and legal rows on xAI's 10-row table; Fable 5 Max takes most firsts (kie)
- Non-hallucination rate: **65.7%** (emergent.sh — hidden weakness)
- OSWorld / AutomationBench / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61 (high)** — ties GPT-5.6 Sol max, behind Opus 5 (63) and Fable 5 (62), ahead of Kimi K3 (AA/emergent.sh)
- GPQA: 4.5 lineage 93.0% (llm-stats compare); 4.6 exact not captured
- HLE: no verified public score found for 4.6

Coding:

- SWE-bench Verified: **95.6%** (Vals, 4th of 82) (unifically)
- DeepSWE 1.1 / FrontierCode 1.1 Ext / APEX-Agents: harness-specific rows on BenchLM, display-only
- SWE-bench Pro / LiveCodeBench: no verified public score found for this exact ID

Long context:

- 500K window (xAI) vs 256K (Cursor) — conflict cited; no verified MRCR/RULER for this ID

Speed: 69.2 tok/s, TTFT 35.25s (AA) — below tier median 80.5.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1753 (2nd), CursorBench 70.8% lead, strong agent loops; TB v3.0 loss and 65.7% non-hallucination noted.
- **Reasoning: 88/100.** AA 61 ties GPT-5.6 Sol; knowledge/legal wins; no GPQA/HLE captured for 4.6.
- **Context window: 92/100.** 500K xAI API in the 85–94 tier (Cursor 256K conflict cited).
- **Multimodal: 80/100.** Text + image in, text out; X search grounding; no audio/video or non-text output.
- **Coding: 91/100.** SWE-V 95.6% (4th/82), CursorBench lead, agent-focused.
- **Cost efficiency: 85/100.** $2/$6 per 1M just above the $1.25/$4.25 (~88) band; ~60% below Sol/Opus 5 list; no free tier.
- **Overall Score: 88/100.** Half-up mean of (88 + 88 + 92 + 80 + 91) / 5 = 87.8 → 88. Best fit: August–September 2026 value flagship for agents/coding at $2/$6; Grok 4.7 (2026-09-21) now the successor at same price.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official xAI news + AA cited, 2026-11-05 UTC); cross-checked against kingy, codersera, kie, llm-stats, BenchLM, unifically, emergent.sh, datastudios, toolstep, kompozy; conflicts (500K vs 256K context by provider; AA 61 vs 54/56 earlier readings; TB v3.0 loss) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Grok 4.6 — xAI/SpaceXAI news (official, 2026-08-12)](https://x.ai/news/grok-4-6)
  - [Artificial Analysis — Grok 4.6 returns xAI to the frontier (Index 61, GDPval 1753)](https://artificialanalysis.ai/articles/grok-4-6-benchmarks-and-analysis)
  - [emergent.sh — Grok 4.6 benchmarks (Index 61, non-hallucination 65.7%)](https://emergent.sh/learn/grok-4-6-benchmarks)
  - [kie — Grok 4.6 release analysis (TB v3.0 −8.6 vs Sol; 500K ctx)](https://kie.ai/blog/grok-4-6-release-analysis)
  - [unifically — Grok 4.6 (SWE-V 95.6% 4th/82, CursorBench 3.2 70.8 lead, $2/$6)](https://unifically.com/blogs/grok-4.6)
  - [llm-stats — Grok 4.6 launch (cutoff 2026-02-01, modalities, effort levels)](https://llm-stats.com/blog/research/grok-4.6-launch)
  - [codersera — Grok 4.6 launch guide (2026-08-12, 200K pricing cliff note)](https://codersera.com/blog/grok-4-6-launch-guide-2026/)
  - [kingy — Grok 4.6 price/benchmarks/context (500K xAI vs 256K Cursor)](https://kingy.ai/blog/grok-4-6-price-benchmarks-api-cursor-context-window/)
  - [datastudios — Grok 4.6 vs 4.7 (4.7 released 2026-09-21 at same price)](https://www.datastudios.org/post/grok-4-6-vs-grok-4-7-complete-comparison-and-report-on-pricing-benchmarks-independent-testing-an)
  - [OpenRouter — x-ai/grok-4.6](https://openrouter.ai/x-ai/grok-4.6)
  - [BenchLM — grok-4-6 (harness-specific rows display-only)](https://benchlm.ai/models/grok-4-6)
