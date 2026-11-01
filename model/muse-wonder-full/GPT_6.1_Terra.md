# Muse Wonder Full — findings by GPT-6.1 Terra

- Source: Meta / Muse Wonder Full
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's proprietary model for long-running coding, agents and computer use. Meta lists it separately from Muse Wonder.
- **Provider / access:** Meta lists `muse-wonder-full-1.0` for Muse Code Power and Maximum subscription plans, not its regular model API ([Meta](https://dev.meta.ai/models/muse-wonder/)).
- **Release / knowledge:** Vals lists 2026-10-12; knowledge cutoff not independently verified.
- **IDs:** Meta `muse-wonder-full-1.0`; a guessed OpenRouter `meta/muse-wonder-full` page returned 404. Do not substitute the ordinary Wonder API ID.
- **Context window:** Meta documents 1M tokens; Vals lists 131K maximum output for its evaluated deployment.
- **Modalities:** Meta describes computer use; Vals evaluated SWE-bench Multimodal. Image input is supported for scoring; exact audio/video coverage not independently verified.
- **Pricing (2026-11-01):** Meta lists subscription access starting at $50/month Power Usage, or $200/month Maximum; no per-token API price is listed for Full. Vals' evaluation page lists $4/$20, but Meta attributes those API rates to ordinary Wonder rather than Full, so they are not assumed to be Full's public API pricing.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Meta reports Terminal-Bench 4.0-AA **57.1%**, JobBench **75.3%**, and OSWorld 2.1 **78.4% partial / 39.4% binary**, Full max effort ([Meta](https://dev.meta.ai/models/muse-wonder/)).
- Vals independently reports Terminal-Bench 4.0 **58.08% ± 3.31** and Vals Index **66.79% ± 1.07** ([Vals](https://www.vals.ai/models/meta_muse-wonder-full)).
- Tau2-Bench, Claw-Eval and MCP-Atlas: no exact-model score verified here.

Reasoning / knowledge:

- Meta lists Artificial Analysis Index **56** for Full max; Vals ProofBench v1.1 **94.00% ± 2.39** ([Meta](https://dev.meta.ai/models/muse-wonder/); [Vals](https://www.vals.ai/models/meta_muse-wonder-full)).
- GPQA Diamond, HLE and CritPt: no verified exact-model score found in these sources.

Coding:

- Meta reports DeepSWE v1.1 **79.0%** and SWE-Marathon **57.5% at xhigh**, Full ([Meta](https://dev.meta.ai/models/muse-wonder/)).
- Vals Vibe Code Bench v1.1 **86.00% ± 1.93**, Code Migration v1.1 **62.79% ± 3.17** ([Vals](https://www.vals.ai/models/meta_muse-wonder-full)).
- SWE-bench Verified / Pro, LiveCodeBench and SciCode: no verified score found here.

Long context:

- Meta documents 1M context; no exact-model MRCR or RULER retrieval percentage verified in this research.

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong vendor OSWorld and independent terminal results support a high rating, subject to harness differences.
- **Reasoning: 93/100.** The reported independent index and Vals proof result support a strong score; GPQA/HLE evidence was not verified here.
- **Context window: 95/100.** The documented 1M context enters the top size tier; no 98%+ long-range retrieval result verified.
- **Multimodal: 70/100.** Image input is supported by evaluated multimodal coding and computer use; broader modalities were not verified.
- **Coding: 96/100.** Strong DeepSWE and independent coding evaluations support a high score, moderated by migration variation.
- **Cost efficiency: 70/100.** Subscription-only access starts at $50 monthly and no public per-token Full price is documented by Meta.
- **Overall Score: 90/100.** (95 + 93 + 95 + 70 + 96) / 5 = 89.8, rounded to 90; suited to subscribers needing demanding agentic work.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Meta's subscription-only Full availability is distinguished from ordinary Wonder API pricing.
- Reference URLs:
  - [Meta model page, benchmark table and subscriptions](https://dev.meta.ai/models/muse-wonder/)
  - [Meta model card](https://research.meta.ai/static/muse-wonder-model-card/)
  - [Vals independent evaluations](https://www.vals.ai/models/meta_muse-wonder-full)
- Future sources: add a new file next to this one using the same headings.
