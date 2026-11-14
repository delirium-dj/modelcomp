# GPT-5.6 Sol — findings by DeepSeek 4.1 Flash 1017

- Source: OpenAI/`gpt-5-6-sol`
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (Max)
- **Short description:** OpenAI's July-2026 proprietary reasoning family, offered at six effort levels from non-reasoning to Max, built for long-horizon agentic work over million-token contexts; superseded by GPT-6 Sol.
- **Provider / access:** OpenAI API, Microsoft Azure, Amazon Bedrock — 6 published variants / 3 providers; model slug `gpt-5-6-sol`.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff not stated on the fetched page. Marked **deprecated** by Artificial Analysis in favour of GPT-6 Sol.
- **IDs:** `openai/gpt-5-6-sol` (effort levels: max, xhigh, high, medium, low, non-reasoning)
- **Context window:** 1M tokens (AA spec table and variant table, all six effort levels).
- **Modalities:** text + image input; text output; reasoning yes on max/xhigh/high/medium/low, no on the non-reasoning variant; MMMU-Pro tracked as a visual-reasoning eval.
- **Pricing (as of 2026-11-14):** $4.00 / $20.00 per 1M in/out; 90% cache discount; blended 7:2:1 price $3.08 per 1M — identical across the six effort levels.
- **Architecture:** proprietary; parameter count undisclosed. Output speed 95 tok/s (max) with 72.04 s to first answer token at max effort, falling to 2.08 s for non-reasoning.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: no verified public score found — AA renders **N/A** ("Unknown out of 4 units") for this model.
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found (all are tracked evals for the model, but no values are rendered on the page)

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 1M-token context window (verified across all six effort variants); no long-context retrieval figure reported.

### Normalized scores (1–100)

- **Tool use: 80/100.** Six calibrated effort levels plus a broad agentic eval suite (Briefcase, AutomationBench, GDPval, ITBench, EnterpriseOps-Gym) show clear agent orientation, but with the AA Intelligence Index unmeasured there is no basis to enter the 88–96 frontier band.
- **Reasoning: 80/100.** Extended-thinking family with an explicit Max tier and heavy reasoning latency, yet no index, HLE-Diamond or CritPt value published for this slug.
- **Context window: 96/100.** 1M tokens verified for every effort level — ≥1M tier; no retrieval-stress score to justify 100.
- **Multimodal: 65/100.** Text and image input with text-only output (MMMU-Pro is tracked, value unpublished) — standard image-capable band.
- **Coding: 50/100.** FrontierCode-AA 2.0 and Terminal-Bench 4.0 are tracked for the model but unpublished, so coding stays capped in the 45–55 range.
- **Cost efficiency: 50/100.** $4 in / $20 out per 1M is the classic premium-flagship price point (AA: above-median input, high-end output), softened only by a 90% cache discount and $3.08 blended rate.
- **Overall Score: 74/100.** Mean of 80, 80, 96, 65, 50 = 74.2 → 74; relevant only for pinned GPT-5.6 Sol deployments — GPT-6 Sol / GPT-6.1 Sol are the forward-looking choices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [GPT-5.6 Sol: Intelligence, Performance & Price Analysis](https://artificialanalysis.ai/models/gpt-5-6-sol)
