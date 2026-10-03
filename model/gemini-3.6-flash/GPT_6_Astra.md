# Gemini 3.6 Flash — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 3.6 Flash
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Gemini 3.6 Flash.
- **Short description:** Multimodal reasoning workhorse based on Gemini 3.5 Flash.
- **Provider / access:** Gemini Developer API and AI Studio; native Gemini API rather than an OpenAI Responses model.
- **Release / knowledge:** July 21, 2026 model card; March 2026 cutoff for some domains, January 2025 for others.
- **IDs:** `gemini-3.6-flash`; Google free tier exists, but no verified Free Zen ID.
- **Context window:** 1M tokens; 64K output.
- **Modalities:** Text/image/audio/video input, text output; reasoning and agent tools. [Official card](https://deepmind.google/models/model-cards/gemini-3-6-flash/).
- **Pricing (as of 2026-10-03):** Paid $0.75 input / $3.75 output / $0.075 cached per million through December 31, then $1.50/$7.50/$0.15. Cache storage and grounding add charges. Free-tier data may improve Google products; paid-tier data does not. [Current pricing](https://ai.google.dev/gemini-api/docs/pricing).
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- Google: Terminal-Bench 2.1 **78.0%** (Terminus-2), OSWorld-Verified **83.0%**, historical GDPval-AA v2 **1421 Elo**. [Model card](https://deepmind.google/models/model-cards/gemini-3-6-flash/).
- AA High: GDPval-AA v2.1 **1286 Elo**, AutomationBench-AA **53%**, Terminal-Bench 4.0 **7%**. [Current comparison](https://artificialanalysis.ai/models/comparisons/gemini-3-7-flash-vs-gemini-3-6-flash); versions are not interchangeable.
- Tau3/Tau2, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found.

Reasoning / knowledge:

- AA Index v4.3.2 **34**, HLE **41%**, CritPt **11%**, Omniscience **22 index points**, GDP.pdf **17%**. Same AA comparison.
- GPQA, MLCR, BenchLM and Omniscience accuracy/hallucination rate: no verified public score found.

Coding:

- Google: SWE-Bench Pro Public **58.7%**, DeepSWE v1.1 **49%**, MLE-Bench **63.9%**. AA SciCode **53%**. Sources above.
- SWE-bench Verified, LiveCodeBench and Vibe Code Bench: no verified public score found.

Long context:

- Google MRCR v2 eight-needle: **91.8% at 128K average**, **54.0% at 1M pointwise**. AA-LCR v1.1 **80%**. These are different evaluations, not conflicting measurements.

### Normalized scores (1–100)

- **Tool use: 79/100.** OSWorld and Terminal 2.1 are strong; Terminal 4.0 and GDPval constrain broader agent confidence.
- **Reasoning: 84/100.** HLE is capable, with modest CritPt and document reasoning capping the score.
- **Context window: 95/100.** Million-token capacity qualifies for the tier; 54% full-window retrieval rules out 100.
- **Multimodal: 95/100.** Audio/video/image input is native; output remains text.
- **Coding: 83/100.** SWE-Pro and SciCode support useful coding; DeepSWE and newer terminal results limit long-horizon reliability.
- **Cost efficiency: 90/100.** Discounted $0.75/$3.75 is economical; planned doubling and reasoning-token usage matter.
- **Overall Score: 87/100.** Half-up mean of 79, 84, 95, 95 and 83 is 87; suitable for economical multimodal work with supervision.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not vendor scores.
- Future sources: Add a separate signed findings file alongside this report.
