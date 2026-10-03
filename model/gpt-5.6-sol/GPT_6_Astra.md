# GPT-5.6 Sol — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.6 Sol
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** GPT-5.6 Sol, max effort evaluated
- **Short description:** Reasoning model for complex professional and coding tasks.
- **Provider / access:** OpenAI Responses and Chat Completions APIs.
- **Release / knowledge:** Release date unverified here; February 16, 2026 cutoff.
- **IDs:** `gpt-5.6-sol`; `gpt-5.6` aliases Sol. No verified Zen Free ID.
- **Context window:** 1,050,000; 128,000 output.
- **Modalities:** Text/image input, text output; tools, structured output, configurable reasoning. Image-generation tool support is not native image output.
- **Pricing (as of 2026-10-03):** $4/$20 input/output, $0.40 cached input per million; promotional through at least November 21. Above 272K input: double input, 1.5x output pricing.
- **Architecture:** Proprietary; parameter count unverified. [Official model documentation](https://developers.openai.com/api/docs/models/gpt-5.6-sol)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1 1611 Elo; AA-Briefcase v1.1 1478; AutomationBench-AA 60%; Terminal-Bench 4.0 40%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Current Intelligence Index 47; HLE 49%; CritPt 32%; Omniscience index 22. GPQA and hallucination rate: no verified public score found.

Coding:

- SciCode 57%; terminal result above. SWE-bench / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found.

Long context:

- AA-LCR v1.1 84%; full-window needle retrieval not verified.

Independent measurements: [AA comparison](https://artificialanalysis.ai/models/comparisons/step-5-vs-gpt-5-6-sol), Sol max column. Current suites differ from the repository's historical anchors.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong workflow results, with incomplete terminal and knowledge-work success.
- **Reasoning: 91/100.** HLE and CritPt support strong reasoning; scientific tasks remain unsolved.
- **Context window: 95/100.** Above-1M capacity; no qualifying retrieval bonus.
- **Multimodal: 70/100.** Image input; no native audio/video supported.
- **Coding: 88/100.** Strong scientific coding and useful terminal results; limited repository evidence here.
- **Cost efficiency: 55/100.** $4/$20 is expensive, with surcharges for long prompts.
- **Overall Score: 86/100.** Half-up mean (88 + 91 + 95 + 70 + 88) / 5 = 86.4; professional agentic reasoning at a premium price.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public research; official specifications and evaluator measurements; normalized interpretations.
- Future sources: add separate signed reports using these headings.
