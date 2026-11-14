# Doubao Seed 2.1 Pro (260915) — findings by Beam

- Source: ByteDance/Doubao Seed 2.1 Pro (260915)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro (260915)
- **Short description:** ByteDance's flagship multimodal model on Volcano Engine Ark with 1M context, 256K output/reasoning budget, GUI grounding, and extensive enterprise tool integrations.
- **Provider / access:** Volcano Engine Ark `doubao-seed-2-1-pro-260915` (Chat Completions / Responses). Paid API.
- **Release / knowledge:** 2026-09-15 (model ID suffix)
- **IDs:** `bytedance/doubao-seed-2.1-pro-260915`
- **Context window:** 1,024,000 total; 256,000 max output
- **Modalities:** Text, image, video in; text out; reasoning; tool calls; GUI task handling
- **Pricing (as of 2026-11-14):** Volcano Engine Ark token rates (~$1.44 per full ModelDial evaluation)
- **Architecture:** Proprietary (ByteDance)

### Raw benchmarks found

- ModelDial overall: **60.4** (rank 40 / 52, default effort, eval time 104m 54s, cost $1.44) — (ModelDial, 2026-11-14)
- ModelDial backend engineering: **64** / 100
- ModelDial frontend interaction: **61** / 100
- ModelDial knowledge & reasoning: **55** / 100
- Long context: 1M context window supported (Ark spec); no independent long-context retrieval benchmark found

### Normalized scores (1–100)

- **Tool use: 60/100.** No explicit tool-use benchmark; proxied from backend engineering (64) and GUI task handling capability. Caps score.
- **Reasoning: 55/100.** ModelDial knowledge & reasoning 55/100.
- **Context window: 85/100.** 1,024K context window (Ark spec).
- **Multimodal: 80/100.** Text, image, video input; text output.
- **Coding: 62/100.** ModelDial backend 64 + frontend 61 averaged.
- **Cost efficiency: 60/100.** Paid Ark tier; ~$1.44 per ModelDial eval.
- **Overall Score: 68/100.** Mean of five non-cost dims (60+55+85+80+62)/5 = 68.4 → 68. Mid-pack ModelDial coding rank (40/52) despite strong long-context specs.

---

## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-14
- Method: public internet research via direct fetch of ModelDial results page and Volcano Engine Ark model catalogue (web search returned 402); official pages cited. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ModelDial — Doubao Seed 2.1 Pro (260915) results](https://modeldial.com/en/models/doubao-seed-2-1-pro-260915)
  - [Volcano Engine Ark — model list](https://www.volcengine.com/docs/82379/1330310)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.