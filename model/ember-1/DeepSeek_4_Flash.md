# Ember-1 — findings by DeepSeek 4 Flash

- Source: Fireworks/Ember-1
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's specialized token-efficient reasoning model, distilled from Kimi K3 to emit ~40% fewer reasoning tokens at comparable quality; the first of the Fireworks "Ember" line. Research Preview on Fireworks Serverless.
- **Provider / access:** Fireworks AI serverless (`accounts/fireworks/models/ember-1`); OpenAI-compatible REST/Python client. Proprietary base model, no open weights.
- **Release / knowledge:** 2026-09-22/23 (Research Preview); knowledge cutoff not disclosed.
- **IDs:** `accounts/fireworks/models/ember-1`
- **Context window:** 1,040K (1.04M) tokens — verified on the Fireworks model page and BenchLM.
- **Modalities:** text and image in; text out (Fireworks lists "Support image input: Supported"); reasoning yes; function calling yes.
- **Pricing (as of 2026-09-23):** $3.00 in / $0.30 cached in / $15.00 out per 1M tokens (Fireworks Serverless). Token-efficiency claim: ~40% fewer generated tokens than Kimi K3, so effective cost per task is lower than the list price implies.
- **Architecture:** proprietary MoE, ~2.78T parameters (Fireworks spec sheet); built by fine-tuning/specializing Kimi K3.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks Research Ember-1 launch post / BenchLM; K3-max 80.9%)
- Tau2-Bench Airline: **66.0%** (Fireworks launch post; K3-max 64%)
- GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / MRCR / LCR / CritPt / AA Intelligence Index: no verified public score found for this exact model
- Doximity Bedside Bench (Specialized Intelligence Index): ember-1 described as setting a new Pareto frontier on cost/task across open and closed models — exact score not disclosed in text

Coding:

- SWE-bench Verified: **92.2%** (Fireworks launch post; K3-max 93.2%)
- DeepSWE 1.1: **75.2%** (Fireworks launch post; K3-max 66.4%)
- SWE-Interact: **20.0%** (Fireworks launch post; K3-max 21.3%)

Long context:

- No MRCR/RULER/GraphWalks retrieval value reported; 1.04M context claimed by vendor

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 82.0% and Tau2-Airline 66.0% are both strong (Tau2 ahead of K3-max); no GDPval/Claw-Eval keeps it below the 90s.
- **Reasoning: 80/100.** Derived from the K3-max-equivalent quality claim plus SWE-Interact 20.0%; no first-party GPQA/HLE/Index number caps confidence.
- **Context window: 95/100.** 1.04M-token input verified; no published long-context retrieval data to push it to 100.
- **Multimodal: 62/100.** Image input supported per the Fireworks spec sheet; text-only output, no audio/video tier.
- **Coding: 90/100.** SWE-bench Verified 92.2% and DeepSWE 1.1 75.2% beat K3-max on DeepSWE; weak SWE-Interact (20.0%) is the only drag.
- **Cost efficiency: 66/100.** $3.00/$0.30/$15.00 per 1M at ~40% fewer tokens than K3; price point is mid-tier, token savings improve the realised value.
- **Overall Score: 82/100.** Mean of (85 + 80 + 95 + 62 + 90) / 5 = 82.4 → 82. Best-fit: token-efficient Kimi-K3-class coding/agent model for cost-sensitive multi-turn workloads.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Fireworks launch post and model page, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
