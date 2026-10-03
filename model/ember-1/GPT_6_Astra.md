# Ember-1 — findings by GPT 6 Astra

- Source: Fireworks Research / Ember-1
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Ember-1.
- **Short description:** Post-trained Kimi K3 derivative aimed at reducing reasoning-token consumption in coding workflows; research preview.
- **Provider / access:** Fireworks serverless OpenAI-compatible API, also gateway distribution. Chat Completions supported; Responses support not verified.
- **Release / knowledge:** Announced September 23, 2026; cutoff unverified. Initial preview access announced for two weeks, with permanence dependent on demand.
- **IDs:** `accounts/fireworks/models/ember-1`; router ID `fireworks/ember-1`; no verified Free Zen ID.
- **Context window:** 1,048,576 tokens in the [Fireworks catalog](https://fireworks.ai/); model detail rounds to 1040K. Output cap unverified.
- **Modalities:** Text/image input, text output; reasoning and function calling. Native audio/video and exact structured-output guarantees unverified.
- **Pricing (as of 2026-10-03):** $3 input / $15 output / $0.30 cached per million.
- **Architecture:** MoE, 2.78T total parameters listed; active count and downloadable weight license not verified. [Official model page](https://fireworks.ai/models/fireworks/ember-1).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **82.0%** (89 tasks), Tau2 Airline **66%** (50 tasks), Fireworks evaluation. [Launch research](https://fireworks.ai/blog/ember-1).
- Tau3, GDPval-AA, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA, HLE, LCR/MLCR, CritPt, AA Intelligence Index, BenchLM and Omniscience: no verified public score found for Ember-1 in reviewed sources. Parent Kimi K3 numbers are not exact-model results.

Coding:

- SWE-bench Verified **92.2%** (500 tasks), SWE-Interact **20.0%** (75), DeepSWE v1.1 **75.2%** (113). Same [vendor harness comparison](https://fireworks.ai/blog/ember-1), not independent replications or cross-provider leaderboard scores.
- SWE-Pro, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found.

Long context:

- No verified full-window retrieval result found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal 82% supports strong execution; Airline 66% and narrow coverage cap generality.
- **Reasoning: 82/100.** Provisional inference from difficult coding and the K3-derived design; no direct general reasoning suite is verified.
- **Context window: 95/100.** Million-token capacity meets the size tier; retrieval reliability remains unmeasured.
- **Multimodal: 70/100.** Vision is listed, without verified broader native modalities.
- **Coding: 93/100.** DeepSWE and Verified are strong; vendor-only harness results and SWE-Interact limit confidence.
- **Cost efficiency: 67/100.** $3/$15 is not cheap per token, but reported shorter traces improve workload cost; savings are task-dependent.
- **Overall Score: 85/100.** Half-up mean of 85, 82, 95, 70 and 93 is 85; promising for coding workflows sensitive to reasoning-token volume.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not official vendor scores. General reasoning is provisional.
- Future sources: Add a separate signed findings file alongside this report.
