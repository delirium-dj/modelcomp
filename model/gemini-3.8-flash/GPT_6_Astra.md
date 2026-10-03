# Gemini 3.8 Flash — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 3.8 Flash
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Gemini 3.8 Flash (high reasoning evaluated)
- **Short description:** General-purpose multimodal reasoning model; Cyber is a separate specialized variant, excluded from this assessment.
- **Provider / access:** Google API; exact endpoint and snapshot ID not independently verified.
- **Release / knowledge:** September 2, 2026; cutoff unverified.
- **IDs:** Gemini 3.8 Flash; exact API ID and Zen Free availability unverified.
- **Context window:** 1M; maximum output not verified.
- **Modalities:** Text, images, video and speech input; text output, reasoning and tool use.
- **Pricing (as of 2026-10-03):** Input/output $0.75/$3.75 per million through year-end; cached input $0.075. Undiscounted input/output $1.50/$7.50.
- **Architecture:** Proprietary; size unverified. Card source: [AA launch evaluation](https://artificialanalysis.ai/articles/gemini-3-8-flash).

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking: 45%, high reasoning. [AA launch](https://artificialanalysis.ai/articles/gemini-3-8-flash)
- GDPval-AA v2.1: 1435; AutomationBench-AA: 60%; Terminal-Bench 4.0: 20%. [AA current comparison](https://artificialanalysis.ai/models/comparisons/gemini-3-8-flash-vs-gemini-3-7-flash)
- Terminal-Bench 2.1 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found in reviewed text.

Reasoning / knowledge:

- Launch Intelligence Index: 59; current revised Index: 41. These suites are not interchangeable. [Launch](https://artificialanalysis.ai/articles/gemini-3-8-flash), [current](https://artificialanalysis.ai/models/gemini-3-8-flash)
- HLE: 48%; CritPt: 18%; AA-LCR v1.1: 81%; AA-Omniscience: 30 (index, not accuracy). GPQA and hallucination rate: no verified public score found. [AA comparison](https://artificialanalysis.ai/models/comparisons/gemini-3-8-flash-vs-gemini-3-7-flash)

Coding:

- SciCode: 57%. SWE-bench / LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found in reviewed text. [AA comparison](https://artificialanalysis.ai/models/comparisons/gemini-3-8-flash-vs-gemini-3-7-flash)

Long context:

- AA-LCR v1.1: 81%; no verified 512K-plus MRCR retrieval measurement found. [AA comparison](https://artificialanalysis.ai/models/comparisons/gemini-3-8-flash-vs-gemini-3-7-flash)

### Normalized scores (1–100)

- **Tool use: 85/100.** Banking and workflow results are strong; newer terminal performance limits the rating.
- **Reasoning: 88/100.** HLE and LCR demonstrate breadth; CritPt and revised Index show remaining limits.
- **Context window: 95/100.** Verified 1M capacity; no evidence for the highest retrieval tier.
- **Multimodal: 95/100.** Speech, video and image input; text-only output caps coverage.
- **Coding: 86/100.** Strong SciCode but weaker newer terminal tasks and missing repository scores limit confidence.
- **Cost efficiency: 91/100.** Discounted token pricing offers good value; current AA task cost is $1.24 and discounts expire. [AA](https://artificialanalysis.ai/models/gemini-3-8-flash)
- **Overall Score: 90/100.** Half-up mean (85 + 88 + 95 + 95 + 86) / 5 = 89.8; broad multimodal and long-context utility.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent fresh public research; normalized scores are interpretations. Launch and current benchmark versions are explicitly separated.
- Future sources: add a separate signed report using these headings.
