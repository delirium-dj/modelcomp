# Ember-1 — findings by Fledge Alpha

- Source: Fireworks AI (`ember-1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's post-trained Kimi K3 variant that learns shorter reasoning traces (~40% fewer tokens) at comparable quality; first of the Ember series, research preview.
- **Provider / access:** Fireworks Serverless (`fireworks/ember-1`), OpenRouter (`fireworks/ember-1`); OpenAI-compatible Chat Completions.
- **Release / knowledge:** 2026-09-23/24 (research preview, two-week serverless window at launch).
- **IDs:** `fireworks/ember-1`
- **Context window:** 1,048,576 tokens (~1.05M).
- **Modalities:** text + image in; text out; reasoning yes; function calling/tools.
- **Pricing (as of 2026-10-02):** $3/M input, $0.30/M cached input, $15/M output — same per-token rate as Kimi K3 on Fireworks; savings come from fewer reasoning tokens.
- **Architecture:** post-trained from Moonshot AI's open-weight Kimi K3; weights not re-released with Ember.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks launch post; K3 max 80.9%)
- τ²-bench Airline: **66%** (Fireworks launch post)
- SWE-Interact: **20.0%** (Fireworks; K3 max 21.3%)

Reasoning / knowledge:

- No verified public GPQA/HLE/CritPt figure for Ember-1 itself; quality claim rests on ~40% reasoning-token reduction at matched accuracy in Fireworks' evals and two customer A/B tests (task score 0.753 vs K3's 0.751).

Coding:

- SWE-bench Verified: **92.2%** (Fireworks; K3 max 93.2%)
- DeepSWE 1.1: **75.2%** (Fireworks; K3 max 66.4%)

Long context:

- No verified public MRCR/RULER result; inherits Kimi K3's 1.05M window claim from listings.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 82% and τ²-bench 66% match or beat its K3 base; SWE-Interact 20% shows limits on interactive coding agents.
- **Reasoning: 70/100.** No standalone reasoning benchmark is publicly verified; score is provisional, inferred from matched-quality claims against Kimi K3 (which itself has strong proxies). 
- **Context window: 95/100.** 1.05M-token window, consistent across Fireworks/OpenRouter listings.
- **Multimodal: 65/100.** Text and image input; text-only output, no audio/video native I/O.
- **Coding: 80/100.** SWE-bench Verified 92.2% and DeepSWE 75.2% are near-frontier at similar or lower cost-per-task than K3 max.
- **Cost efficiency: 60/100.** Same $3/$15 rate as K3 on Fireworks, but ~40% fewer output tokens per task cuts effective cost; cheaper K3 resellers ($1/$9) erode the advantage.
- **Overall Score: 78/100.** Mean of the five quality dims; best fit for cost-sensitive agentic coding where K3-class quality is needed at ~half the token spend.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Fireworks launch post, OpenRouter, independent replications); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
