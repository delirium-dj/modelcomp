# MiMo-V2.6-Pro — findings by GPT-6.1 Terra

- Source: Xiaomi / MiMo-V2.6-Pro
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's open-weight model for reasoning, coding and agentic tasks; this report uses Vals' evaluation of the official Xiaomi API.
- **Provider / access:** OpenRouter Chat Completions `xiaomi/mimo-v2.6-pro`; Vals reports evaluation via Xiaomi's official API ([Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro)).
- **Release / knowledge:** Released 2026-09-21 per Vals; knowledge cutoff not independently verified.
- **IDs:** `xiaomi/mimo-v2.6-pro` on OpenRouter; a guessed Hugging Face card returned 401, so its exact weights URL is not asserted.
- **Context window:** Vals lists 1M context and 128K maximum output for its evaluated deployment.
- **Modalities:** Vals reports a SWE-bench Multimodal result for the evaluated model; exact supported input types were not independently confirmed, so multimodal coverage is provisional.
- **Pricing (2026-11-01):** Vals lists $0.435 input / $0.87 output per million tokens for the evaluated Xiaomi API. Recheck provider rates before use.
- **Architecture:** Vals describes open weights; exact parameter count and license not verified in this research.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 4.0 **31.31% ± 3.07**, Vals Index **57.81% ± 1.24** and CyberBench v1.1 **72.86% ± 5.50** ([Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro)).
- Terminal-Bench 2.1 **67.79%**, Vals launch evaluation; benchmark versions and run settings differ.
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified exact-model score found here.

Reasoning / knowledge:

- Vals ProofBench v1.1 **70.00% ± 4.61** and MysteryMechanism **15.31% ± 2.42** ([Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro)).
- GPQA Diamond, HLE and CritPt: no exact-model score verified in the sources used here.

Coding:

- Vals Vibe Code Bench v1.1 **85.22% ± 3.39**, Code Migration v1.1 **48.79% ± 3.88** and SWE-bench Multimodal **41.25% ± 2.25** ([Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro)).
- SWE-bench Verified / Pro, LiveCodeBench and SciCode: no verified exact-model score found here.

Long context:

- Vals documents a 1M window; no exact-model MRCR or RULER retrieval score verified in this research.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong Vals cyber and terminal results support a capable rating, though terminal scores and task outcomes vary.
- **Reasoning: 84/100.** ProofBench is strong, but MysteryMechanism and absent GPQA/HLE results limit confidence.
- **Context window: 95/100.** Vals lists 1M context; no 98%+ long-range retrieval result verified.
- **Multimodal: 68/100.** Vals' multimodal software evaluation suggests image-level capability; exact modality coverage is not independently documented here.
- **Coding: 88/100.** Vals Vibe Code and migration results show strong but uneven coding performance.
- **Cost efficiency: 94/100.** The evaluated $0.435/$0.87 paid route is inexpensive, assuming rates remain available.
- **Overall Score: 85/100.** (88 + 84 + 95 + 68 + 88) / 5 = 84.6, rounded to 85; an inexpensive coding option with modality and retrieval caveats.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Exact modality and license details remain provisional where primary documentation was unavailable.
- Reference URLs:
  - [Vals independent evaluations and Xiaomi API details](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro)
  - [OpenRouter model API route](https://openrouter.ai/xiaomi/mimo-v2.6-pro)
  - [Xiaomi developer documentation](https://platform.xiaomimimo.com/#/docs/)
- Future sources: add a new file next to this one using the same headings.
