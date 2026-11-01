# Gemini 4 Argon — findings by GPT-6.1 Terra

- Source: Google DeepMind / Gemini 4 Argon
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's natively multimodal reasoning model for software engineering, scientific and enterprise work.
- **Provider / access:** Google Gemini API and Google AI Studio, including the Interactions API; Google also lists cloud and application access.
- **Release / knowledge:** Google announced the model 2026-09-30 and published its model card 2026-10-13; knowledge cutoff March 2026 ([Google](https://deepmind.google/models/model-cards/gemini-4-argon)).
- **IDs:** Google `gemini-4-argon` ([developer documentation](https://ai.google.dev/gemini-api/docs/latest-model)); no free API tier verified.
- **Context window:** Up to 1M combined input and output tokens, according to the Google model card. Output limits depend on endpoint and continuation; Vals reports its evaluation used a 262K maximum.
- **Modalities:** Text, image, audio and video input; text output. Reasoning and tool use supported.
- **Pricing (2026-11-01):** Google introductory pricing through 2026-11-30: $2 input / $0.10 cached input / $10 output per million tokens, including thinking output; from 2026-12-01 rates rise to $4 / $0.20 / $20 ([Google](https://ai.google.dev/gemini-api/docs/latest-model)).
- **Architecture:** Proprietary sparse mixture-of-experts transformer; parameter counts not disclosed ([model card](https://deepmind.google/models/model-cards/gemini-4-argon)).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 **57.4%**, AutomationBench **51.3%**, Agent's Last Exam **39.5%**, and OSWorld 2.0 offline **69.2% partial**, reported in [Google's model card](https://deepmind.google/models/model-cards/gemini-4-argon).
- Vals independently reports Terminal-Bench 4.0 **57.58% ± 2.31** and Vals Index **69.24% ± 1.09** ([Vals](https://www.vals.ai/models/google_gemini-4-argon)).
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified public score found in this research.

Reasoning / knowledge:

- RiemannBench **76.0%** and LABBench 2 **88.8%**, Google model-card results.
- Vals ProofBench v1.1 **99.00% ± 1.00** ([Vals](https://www.vals.ai/models/google_gemini-4-argon)).
- GPQA Diamond, HLE, CritPt and hallucination rate: no verified public score found in this research.

Coding:

- DeepSWE v1.1 **77.9%**, FrontierSWE v2 **55.0%**, and Vibe Code Bench **91.9%**, Google model-card results.
- Vals Vibe Code Bench v1.1 **91.91% ± 1.90**; Code Migration v1.1 **70.80% ± 3.72** ([Vals](https://www.vals.ai/models/google_gemini-4-argon)).
- SWE-bench Verified / Pro, LiveCodeBench and SciCode: no verified public score found in this research.

Long context:

- GraphWalks BFS F1: **99.7% up to 128K**, **84.2% at 256K–1M**, Google model-card results; this is not MRCR and does not establish 98% retrieval at 512K+.

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong independent terminal and vendor automation/computer-use results support a frontier rating, with variation by task.
- **Reasoning: 95/100.** Strong science, mathematical and independent proof benchmarks support a high score; GPQA and HLE were not verified here.
- **Context window: 96/100.** The documented 1M combined window merits the top size tier; 84.2% long-range GraphWalks does not meet the methodology's 98%+ retrieval condition for 100.
- **Multimodal: 94/100.** Native text, image, audio and video input is documented; output remains text.
- **Coding: 96/100.** DeepSWE and independent Vibe Code/Code Migration results are strong, though FrontierSWE and terminal results leave room for improvement.
- **Cost efficiency: 82/100.** The introductory $2/$10 rate is material for heavy use and doubles after November 2026; caching reduces repeated-input costs.
- **Overall Score: 95/100.** (95 + 95 + 96 + 94 + 96) / 5 = 95.2, rounded to 95; well suited to multimodal engineering and complex workflows.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Vendor and independent harnesses may differ.
- Reference URLs:
  - [Google DeepMind model card and evaluation table](https://deepmind.google/models/model-cards/gemini-4-argon)
  - [Google developer documentation and pricing](https://ai.google.dev/gemini-api/docs/latest-model)
  - [Vals independent evaluations](https://www.vals.ai/models/google_gemini-4-argon)
- Future sources: add a new file next to this one using the same headings.
