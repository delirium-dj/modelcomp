# Gemini 3.1 Pro — findings by GPT-6.1 Terra

- Source: Google DeepMind / Gemini 3.1 Pro Preview
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's multimodal reasoning model for analysis, coding and agentic tasks. The measured API deployment is the Preview variant.
- **Provider / access:** Gemini API; Google also lists AI Studio, Gemini app and enterprise access ([Google](https://deepmind.google/models/gemini/pro)).
- **Release / knowledge:** Announced 2026-02-19; knowledge cutoff not independently verified here.
- **IDs:** `gemini-3.1-pro-preview` on Google and `google/gemini-3.1-pro-preview` on OpenRouter.
- **Context window:** OpenRouter lists 1,048,576 context tokens and 65,536 maximum completion tokens ([OpenRouter](https://openrouter.ai/google/gemini-3.1-pro-preview)).
- **Modalities:** Text, image, audio and video input; text output. Supports reasoning, tools and structured output according to the provider listing.
- **Pricing (2026-11-01):** OpenRouter lists $2 input / $0.20 cache read / $12 output per million tokens; pricing and long-context surcharges may vary by provider ([OpenRouter](https://openrouter.ai/google/gemini-3.1-pro-preview)). No current free API route independently verified.
- **Architecture:** Proprietary; parameter count not independently verified.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **68.5%**, Terminus-2 harness, Google high-thinking result ([model card](https://deepmind.google/models/model-cards/gemini-3-1-pro)); Vals independently reports **67.4%** on its 2.0 evaluation ([Vals](https://www.vals.ai/models/google_gemini-3.1-pro-preview)).
- Terminal-Bench 4.0 **2.52% ± 0.51**, Vals, a different and substantially harder version/harness; do not equate the two versions.
- MCP-Atlas and Tau2-Bench: no verified exact-model score found in the sources used here.

Reasoning / knowledge:

- GPQA Diamond **94.3%**, HLE **44.4% without tools**, and ARC-AGI-2 **77.1%**, Google high-thinking results ([model card](https://deepmind.google/models/model-cards/gemini-3-1-pro)); the ARC result is ARC Prize verified.
- Vals GPQA Diamond **95.45% ± 1.05** and ProofBench v1.1 **26.00% ± 4.41** ([Vals](https://www.vals.ai/models/google_gemini-3.1-pro-preview)).

Coding:

- SWE-bench Verified **80.6%**, single attempt, Google result ([model card](https://deepmind.google/models/model-cards/gemini-3-1-pro)).
- Vals LiveCodeBench **88.48% ± 0.93**, Vibe Code Bench v1.1 **32.03% ± 4.34**, and Code Migration **17.31% ± 3.93** ([Vals](https://www.vals.ai/models/google_gemini-3.1-pro-preview)).
- SciCode: no verified public score found in this research.

Long context:

- A 1,048,576-token window is listed by OpenRouter; no primary-source exact-model long-context retrieval figure verified in this research.

### Normalized scores (1–100)

- **Tool use: 83/100.** Strong Terminal-Bench 2.0 results are tempered by Vals' low Terminal-Bench 4.0 score under a different evaluation.
- **Reasoning: 92/100.** Strong GPQA, HLE and verified ARC results support a high score, while ProofBench shows task sensitivity.
- **Context window: 95/100.** A listed 1M-token window reaches the top size tier; no 98%+ long-range retrieval was verified.
- **Multimodal: 94/100.** The listed input modalities include image, audio and video; only text output is credited.
- **Coding: 84/100.** SWE-bench and LiveCodeBench are strong but Vals' migration and Vibe Code results indicate substantial real-task variation.
- **Cost efficiency: 80/100.** $2/$12 per million tokens is paid mid-to-high pricing, with endpoint-dependent long-context charges.
- **Overall Score: 90/100.** (83 + 92 + 95 + 94 + 84) / 5 = 89.6, rounded to 90; useful for multimodal analysis when its agent harness is validated.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark versions, settings and sources are identified above.
- Reference URLs:
  - [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-1-pro)
  - [Google evaluation methodology](https://deepmind.google/models/evals-methodology/gemini-3-1-pro)
  - [Vals independent evaluations](https://www.vals.ai/models/google_gemini-3.1-pro-preview)
  - [OpenRouter model listing](https://openrouter.ai/google/gemini-3.1-pro-preview)
- Future sources: add a new file next to this one using the same headings.
