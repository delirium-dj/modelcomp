# Ember-1 — findings by Mercury 3

- Source: Fireworks/Ember-1
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1 (Fireworks Research Preview)
- **Short description:** Fireworks' specialized reasoning model (released 2026-09-22) built on Kimi K3, producing ~40% shorter reasoning traces at comparable quality — an efficiency-tuned agentic coding variant with 1.04M context.
- **Provider / access:** Fireworks AI (`accounts/fireworks/models/ember-1`), plus 7 providers per models.dev (Cloudflare, Vercel, OpenRouter, Eden AI, Kilo, NanoGPT).
- **Release / knowledge:** Released 2026-09-22 (Research Preview); knowledge cutoff not published.
- **IDs:** `fireworks/ember-1` (canonical; Kimi K3-derived per models.dev).
- **Context window:** 1,048,576 tokens (1.04M) total; max output 131,072.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $3.00 input / $15.00 output per 1M tokens.
- **Architecture:** proprietary (specialized Kimi K3 derivation); not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks launch); τ²-bench Airline: **66.0%**
- GDPval/OSWorld/agentic-index figures not published in sources reviewed (sparse coverage)

Reasoning / knowledge:

- No GPQA/HLE/ARC figure verified in sources reviewed (sparse coverage)

Coding:

- SWE-bench Verified: **92.2%**; DeepSWE: **75.2%**; Terminal-Bench 2.1 82.0% (Fireworks launch)
- Vendor claims ~40% fewer reasoning tokens at comparable quality to the base model

Long context:

- 1.04M window; no verified retrieval figure.

Multimodal:

- text/image in, text out; no verified visual benchmark row found.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 82% and τ² Airline 66%; no other verified agentic benchmark — capped by missing evidence.
- **Reasoning: 80/100.** No verified reasoning rows; scored on family basis (Kimi K3-derived) — flag for re-verification.
- **Context window: 90/100.** 1.04M with no verified retrieval figure at depth.
- **Multimodal: 82/100.** image input, text output; no video/audio input.
- **Coding: 88/100.** SWE-bench Verified 92.2% and DeepSWE 75.2% are strong; capped by sparse coverage (no FrontierCode/SWE-Pro).
- **Cost efficiency: 74/100.** $3/$15 — premium for a Kimi K3-derived model (K3 itself is $2/$10 open), though the 40% token-efficiency claim changes the value calculus if it holds.
- **Overall Score: 84.4/100.** Mean of (82+80+90+82+88)/5 = 84.4 → 84. A capable efficiency-tuned agentic coder; thin independent verification flagged.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Fireworks launch post via BenchLM, models.dev registry); scores are normalized 1–100 interpretations, not official vendor scores. Sparse independent coverage (5 BenchLM rows; no AA page) flagged; family derivation (Kimi K3) noted.
- Reference URLs:
  - [Ember-1 launch post (Fireworks Research)](https://fireworks.ai/blog/ember-1)
  - [Ember-1 model page (Fireworks)](https://fireworks.ai/models/fireworks/ember-1)
  - [Ember-1 — BenchLM benchmark aggregation](https://benchlm.ai/models/ember-1)
  - [Ember-1 — models.dev registry (7 providers, $3/$15)](https://models.dev/models/fireworks/ember-1)
