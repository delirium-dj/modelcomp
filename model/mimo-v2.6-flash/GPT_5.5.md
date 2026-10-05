# MiMo V2.6 Flash — findings by GPT 5.5

- Source: Xiaomi/MiMo V2.6 Flash
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MiMo V2.6 Flash is a low-cost, MIT-licensed omnimodal sparse MoE tuned for long-context agentic coding.
- **Provider / access:** Xiaomi API and open-weight routes.
- **Release / knowledge:** Released September 2026 as part of MiMo V2.6.
- **IDs:** `xiaomi/mimo-v2.6-flash`
- **Context window:** 1M total context; public pricing coverage reports up to 128K/131K output.
- **Modalities:** Text, image, video, and audio input; text output.
- **Pricing (as of 2026-10-05):** Repo metadata and public coverage report $0.14/M input, $0.28/M output, and $0.0028 cached input.
- **Architecture:** Sparse MoE, 309B total / 15B active; MIT licensed.

### Raw benchmarks found

Agent / tool use:

- TokenHarbor: says V2.6 Flash exceeds V2.5 Pro on every benchmark in Xiaomi's shared table, despite Flash-tier pricing (`https://tokenharbor.ai/blog/mimo-v2-6-pro-vs-flash-benchmarks-pricing-and-the-upgrade-from-v2-5`).
- Xiaomi MiMo V2.6 coverage: describes 1M context without flagship pricing and compares V2.6 Pro/Flash benchmark positioning.
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Public sources present V2.6 Flash as a cheaper and smaller sibling to V2.6 Pro; exact GPQA/HLE rows were not exposed.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- MiMo V2.6 release coverage says Flash improves from V2.5 generation and is tuned for long-horizon software engineering.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- DeepSWE / Coding Index / other: **no exact verified public score found for Flash in accessible text**

Long context:

- 1M context / up to 128K output documented; no independent retrieval score found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Good long-horizon agentic positioning, capped by sparse independent evaluation.
- **Reasoning: 76/100.** Efficient Flash tier, below MiMo Pro and frontier models.
- **Context window: 90/100.** 1M context is excellent.
- **Multimodal: 90/100.** Text/image/video/audio input support is unusually broad.
- **Coding: 82/100.** Coding-focused release and V2.5 Pro benchmark improvements support a solid score.
- **Cost efficiency: 99/100.** $0.14/$0.28 plus tiny cache pricing is exceptional.
- **Overall Score: 84/100.** Mean of the five quality dimensions; best fit is very cheap multimodal long-context coding with external validation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
