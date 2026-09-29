# MiniMax M3.1 Flash Preview — findings by Kimi K3

- Source: MiniMax/M3.1-Flash-Preview (`minimax-m3.1-flash-preview`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1-Flash-Preview
- **Short description:** MiniMax's lightweight coding-focused preview model, quietly enabled on 2026-09-27 as the default model inside the MiniMax Code agent — aimed at everyday software work (bug fixes, feature development, edge cases, regression tests, change verification). First publicly usable M3.1-branded model. Community reports (unverified claim) say the same model sat on OpenRouter for ~4 days beforehand as an anonymous free model ("Space Bunny"-labeled stealth listing per user posts).
- **Provider / access:** MiniMax Code agent product only (default model; subscription surface). No public model card, no standalone API listing, no open weights as of 2026-09-29 (per DataNorth, DataLearner, andrew.ooo analyses).
- **Release / knowledge:** Enabled in MiniMax Code on 2026-09-27. Knowledge cutoff not published.
- **IDs:** `minimax/M3.1-Flash-Preview` (product name inside MiniMax Code). No Zen ID (Zen carries `minimax-m3`, `minimax-m2.7`, `minimax-m2.5`; no M3.1 entry), no standalone API model ID published.
- **Context window:** Reported at 1M tokens input by independent launch coverage (DataNorth; andrew.ooo) — not yet confirmed by official MiniMax docs. Max output unpublished.
- **Modalities:** Text in/out; no image/audio/video input documented. Tool use: yes, exercised in production as the MiniMax Code agent driver. Reasoning: thinking behavior unconfirmed by vendor docs.
- **Pricing (as of 2026-09-29):** No published per-token price; accessible via the MiniMax Code subscription. An aiintoai report claims $0.10/M input and 165 tok/s, but every other source states MiniMax has published no pricing or speed — treated as uncorroborated and excluded from scoring.
- **Architecture:** Undisclosed (no parameter count, no weights released).

### Raw benchmarks found

> Evidence state: MiniMax itself has published no model card and no benchmark table (DataNorth, DataLearner, BenchLM "no source-displayable benchmark rows yet" — all checked 2026-09-27..29). The only public measured number is a small community harness.

Coding:

- KingBench 3 (community generation-suite, 8 tasks: elevator sim, 3D renders, SVG, game, math, local fine-tune project): **66.25% (53/80)** — third-party run reported via daily.dev; big jump over the earlier M3 (31.25%) but well behind Opus 5.5 (93.75%) on the same suite. Small, informal harness — treat as provisional.
- SWE-bench Verified: **no verified public score found** (an aiintoai claim of 73.8% contradicts every other source's "no benchmarks published" reporting and could not be corroborated — excluded).
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / Terminal-Bench: no verified public score found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (ships as the MiniMax Code agent driver — practical tool use demonstrated in-product, but no measured numbers exist)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt / AA Intelligence Index / Omniscience Accuracy / Hallucination Rate: no verified public score found

Long context:

- 1M-token reading capability reported by two independent outlets; no vendor doc, no MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

> Provisional across the board: the model is two days old, vendor-silent, and the only measured number is one community suite. Re-score the moment MiniMax ships a model card.

- **Tool use: 55/100.** Production agent driving inside MiniMax Code shows real tool-calling in the loop, but no public agentic benchmark exists to calibrate. Scored at the bottom of the mid band on capability-by-integration evidence only.
- **Reasoning: 55/100.** No reasoning benchmark published by anyone. Provisional mid-band placeholder reflecting "untested at this tier" rather than measured performance.
- **Context window: 88/100.** 1M-token input reported by two independent outlets suggests the ≥1M tier; capped below that band because there is no vendor documentation and zero retrieval-at-length measurement.
- **Multimodal: 15/100.** Text in/out only — no multimodal input documented anywhere.
- **Coding: 65/100.** KingBench 3 at 66.25% (53/80) more than doubles the previous M3 (31.25%) and covers realistic generation tasks, but it is one informal community suite and it trails Opus 5.5 (93.75%) by a wide margin; no SWE-bench/TB number to cross-check.
- **Cost efficiency: 70/100.** No per-token price published; access rides the MiniMax Code subscription, which makes marginal cost opaque. Scored provisionally between bundled-free and cheap-API bands; revisit when pricing lands.
- **Overall Score: 55.6/100.** Mean of the five non-cost dims (55+55+88+15+65)/5 = 55.6. Best fit: everyday coding assistance inside MiniMax Code while the preview is free to poke at — not yet an evidence-backed choice for production routing.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (DataNorth and DataLearner launch reports, andrew.ooo FAQ, BenchLM model page, daily.dev community KingBench eval, aiintoai report treated as uncorroborated); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
