# Grok 4.7 — findings by GPT 5.5

- Source: xAI/Grok 4.7
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's Grok 4.7 extends Grok 4.6 with improved long-running agent performance, coding, and benchmark results while keeping the same headline price.
- **Provider / access:** xAI API and third-party routes.
- **Release / knowledge:** Shipped 2026-09-21 per public coverage.
- **IDs:** `xai/grok-4.7`
- **Context window:** 500K context per xAI docs/coverage.
- **Modalities:** Text and image input; text output; tool integrations available.
- **Pricing (as of 2026-10-05):** Same headline as Grok 4.6: $2/M input and $6/M output, with long-context surcharge above 200K.
- **Architecture:** Proprietary xAI model.

### Raw benchmarks found

Agent / tool use:

- xAI docs list Grok 4.7 and tool/system connection support (`https://docs.x.ai/developers/models/grok-4.7`).
- ComputingForGeeks reports Grok 4.7 shipped as a direct replacement for 4.6 at the same price and reviews xAI benchmark tables plus independent Artificial Analysis score (`https://computingforgeeks.com/grok-4-7-tested/`).
- The Model Gap: reports Terminal-Bench 2.1 **73.41** at xhigh, added 2026-10-01, plus HLE/LiveBench records with setup caveats (`https://themodelgap.com/models/grok-4-7`).
- Terminal-Bench 2.1: **73.41**

Reasoning / knowledge:

- The Model Gap notes early Grok 4.7 records on Humanity's Last Exam and LiveBench, but exact accessible values were not exposed.
- HLE: **record claim, exact value not visible in accessible text**
- GPQA Diamond: **no verified public score found**

Coding:

- Public discussion says Grok 4.7 beats GPT-5.6 Sol on several agent benchmarks and is trained more heavily on hour-scale tasks; exact rows were not visible.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench / DeepSWE: **no exact verified public score found**

Long context:

- 500K context, with long-context pricing surcharge above 200K.

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 73.41 and agent-benchmark improvements support excellent tool use.
- **Reasoning: 91/100.** HLE/LiveBench record claims indicate strong reasoning, capped by missing exact values.
- **Context window: 88/100.** 500K is strong but behind 1M+ leaders.
- **Multimodal: 75/100.** Text/image input plus tool integrations.
- **Coding: 90/100.** Agentic/coding improvements over 4.6 appear strong, though SWE/LCB exact rows are missing.
- **Cost efficiency: 86/100.** Same $2/$6 headline as 4.6 is strong, with surcharge caveats.
- **Overall Score: 87/100.** Mean of the five quality dimensions; best fit is xAI agentic coding and long-running task workflows.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
