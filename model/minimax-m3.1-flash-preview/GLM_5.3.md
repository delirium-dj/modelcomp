# MiniMax M3.1 Flash Preview — findings by GLM 5.3

- Source: MiniMax (`minimax-ai/MiniMax-M3.1-Flash-Preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview (MiniMax-M3.1-Flash-Preview)
- **Short description:** MiniMax's first M3.1-series model — a "frontier multimodal coding model" for agentic reasoning, tool use, coding and long-context work, quietly shipped into MiniMax Code and the Token Plan on 2026-09-27 with no announcement, model card, or benchmark table. Community fingerprinting has linked it to the OpenRouter stealth model "Space Bunny Alpha" days before launch; MiniMax has not confirmed.
- **Provider / access:** MiniMax Code (desktop + web) and the M Plan / Token Plan (`platform.minimax.io`); no standalone pay-as-you-go API and no third-party routers as of 2026-10-09. models.dev lists 2 providers. Chat Completions-style API inside MiniMax's platform.
- **Release / knowledge:** 2026-09-27; knowledge cutoff not published.
- **IDs:** `MiniMax-M3.1-Flash-Preview` (MiniMax platform); no OpenCode Zen ID, no per-token price on Zen.
- **Context window:** 1,000,000 tokens verified (MiniMax API docs via ThreatFrontier; models.dev), max output 512,000 (models.dev; a 512K-context / 128K-output configuration also ships per launch-week fact-checks).
- **Modalities:** text, image, video input; text output; reasoning always-on (adaptive thinking cannot be disabled — HTTP 400 on `thinking: disabled`); five effort levels `low`/`medium`/`high`/`xhigh`/`max`, default `max`; tool calling per agentic coding product.
- **Pricing (as of 2026-10-09):** no per-token price published — subscription-bundled (M Plan / MiniMax Code / Token Plan); unlimited-use promo 1–7 October 2026. models.dev lists $0.00/$0.00 (placeholder/free listing, unverified as a real price).
- **Architecture:** MoE with 428B total / ~23B active parameters, sparse attention, native visual encoder (MiniMax's own agent-tools guide, agent.minimax.io); no open weights, no model card.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau3 / GDPval-AA / MCP Atlas: no verified public score found (no official table exists; zero aggregator rows as of 2026-10-09)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / AA Intelligence Index: no verified public score found
- Circulated "73.8% SWE-bench Verified, 165 tok/s, $0.10/M input" figures are explicitly untraceable to any primary source (ThreatFrontier fact-check, 2026-10-02) — not counted as verified.

Coding:

- KingBench 3 (AICodeKing, independent 8-task build-from-scratch suite, tested 2026-09-28): **53/80 = 66.25%** (best in same run: Claude Opus 5.5 at 93.75%) — strong on 3D geometry (9/10 folding table), weak on interactive/stateful builds (3/10 elevator simulation crash, 4/10 archery game)
- SWE-bench Verified: no verified public score found (circulated 73.8% figure unverified — see above)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- 1M-token window verified; MRCR / RULER / GraphWalks: no long-context retrieval benchmark score found

Multimodal:

- No verified public multimodal benchmark score found (image + video input shipped; native visual encoder per vendor guide; nothing measured publicly)

### Normalized scores (1–100)

- **Tool use: 52/100.** Ships as the default model of an agentic coding product (tool use, code execution, agent sessions) with always-on adaptive thinking, but zero measured tool-agent evidence exists (no Terminal-Bench/Tau/GDPval rows anywhere) — capped by total absence of numbers.
- **Reasoning: 50/100.** Five configurable thinking-effort levels and mandatory adaptive reasoning show deliberate reasoning design, but no GPQA/HLE/Index number is published or independently measured; the 428B/23B sparse-MoE scale suggests mid-tier-plus capability, unverifiable for now.
- **Context window: 96/100.** Verified 1,000,000-token window (vendor API docs + models.dev) is top-tier (≥1M band); no published ≥98% retrieval figure to justify 100.
- **Multimodal: 78/100.** Text + image + video input with a native visual encoder lands the 75–90 band, but not a single public multimodal benchmark score exists to support the top of the band; text-only output.
- **Coding: 68/100.** The one hard number — independent KingBench 3 at 66.25% (vs Opus 5.5's 93.75% in the same run) — reads as a capable mid-tier coding model with uneven quality (excellent 3D geometry, crashing interactive simulations); MiniMax Code's default-model slot supports real-world coding fitness; every aggregate coding lane (SWE-bench, LiveCodeBench) is unpublished.
- **Cost efficiency: 85/100.** No per-token price exists to score precisely; subscription bundling (M Plan / MiniMax Code) plus the unlimited-use promo week make real-world cost low for subscribers — provisional, would be rescored on published pricing.
- **Overall Score: 69/100.** Half-up mean of (52 + 50 + 96 + 78 + 68) = 68.8 → 69. Best fit: subscription-only 1M-context coding workhorse for big-repository and multimodal dev work — strong ceiling on visual/3D tasks, keep side-by-side trials on interactive or stateful code until MiniMax publishes benchmarks.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/GLM-5.3)** — 2026-10-09
- Method: public internet research (MiniMax API docs, agent.minimax.io vendor guide, models.dev, ThreatFrontier fact-check with AICodeKing KingBench 3 results, launch-week news consensus); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
