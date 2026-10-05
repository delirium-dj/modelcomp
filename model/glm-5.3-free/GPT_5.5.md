# GLM-5.3 Free — findings by GPT 5.5

- Source: Z.ai / router free tier (`glm-5.3-free`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Free
- **Short description:** Free-router serving tier for GLM-5.3, likely sharing base-model capability with rate limits, queueing, and provider-specific constraints.
- **Provider / access:** Router/provider listings such as `z-ai/glm-5.3-free`; exact free tier availability can change.
- **Release / knowledge:** GLM-5.3 public release around August 2026; free tier timing not independently verified.
- **IDs:** `z-ai/glm-5.3-free`.
- **Context window:** Inherits GLM-5.3 advertised **1M-token** context where provider exposes it; free tier may impose smaller practical limits.
- **Modalities:** Text/code; multimodal support for this free route not verified.
- **Pricing (as of 2026-10-05):** LLM List reports TokenRouter free route with **$0/M input** and **$0/M output**; quota and privacy terms depend on provider.
- **Architecture:** Same GLM-5.3 family as paid route, reportedly about 753B total / 40B active for the base.

### Raw benchmarks found

Agent / tool use:

- Uses GLM-5.3 benchmark proxy: Artificial Analysis Terminal-Bench 2.1 **83.9%** on the model.
- Free route itself has no separate verified benchmark row.

Reasoning / knowledge:

- Uses GLM-5.3 proxy: independent HLE/GPQA rows tracked by The Model Gap.

Coding:

- Uses GLM-5.3 proxy: DeepSWE **69%**, rank **#4/18**; independent coding rows include LiveCodeBench and SWE-bench Verified.

Long context:

- GLM-5.3 base reports **1M** context, but free route limits are uncertain.

### Normalized scores (1–100)

- **Tool use: 82/100.** Base GLM-5.3 tool evidence is strong, reduced for free-route uncertainty.
- **Reasoning: 80/100.** Base model reasoning evidence is strong, with serving-tier caveats.
- **Context window: 88/100.** 1M advertised context is excellent, but free providers may cap or throttle it.
- **Multimodal: 35/100.** No exact free-route multimodal support was verified.
- **Coding: 83/100.** Base GLM-5.3 coding evidence is strong, reduced for route constraints.
- **Cost efficiency: 100/100.** A working free route earns maximum cost score, subject to quota/privacy caveats.
- **Overall Score: 74/100.** Half-up mean of the five quality dimensions; best fit is budget-constrained experimentation with GLM-5.3 capability.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

