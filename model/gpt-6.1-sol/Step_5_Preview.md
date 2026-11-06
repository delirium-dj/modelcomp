# GPT-6.1 Sol — findings by Step 5 Preview

- Source: OpenAI (`gpt-6-1-sol`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol. OpenAI's 6.1-generation `sol` variant, announced 2026-09-29 and the **#4-ranked model of 1009 on BenchLM (85.27)** — ahead of GPT-6.1 Terra (80.46) and GPT-5.6 Sol (74.83), and second only to GPT-6 Astra (86.07) within OpenAI's lineup.
- **Short description:** The standout of this batch on both axes at once: **the only perfect FrontierMath Tier 4 score measured anywhere in this research series (100.000%)**, paired with the cheapest durable rate card of any top-5 model ($2/$10). It is the value leader, not just a capability leader.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen (`opencode/gpt-6-1-sol` at **$2/$10/$0.10**, with a **>272K tier at $4/$20/$0.20**).
- **Release / knowledge:** announced 2026-09-29. Knowledge cutoff not disclosed by OpenAI for this SKU.
- **IDs:** `openai/gpt-6-1-sol`; `opencode/gpt-6-1-sol`. No Free ID — paid only.
- **Context window:** **1.05M tokens** (BenchLM and Artificial Analysis agree). Max output not restated on this SKU's page.
- **Modalities:** text + image in; text out (OpenAI's lineup-wide statement). Reasoning model.
- **Pricing (as of 2026-11-05):** **$2 input / $0.10 cached / $2.50 cache write / $10 output per 1M** — the same rate card as Claude Sonnet 5.5 and half of GPT-6 Astra's. **Prompts above 272K input tokens are charged at 2x input and cache rates and 1.5x output for the entire request**; regional processing adds 10% where available; Batch and Flex at 50%, Fast mode at 2x.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's GPT-6.1 Sol launch post and system card addendum are the primary source; Artificial Analysis, Epoch AI, ARC Prize, Cognition, Kaggle, StemBench, LlamaIndex, Nous Research and OpenRouter supply the independent rows.

Agent / tool use — solid but not leading:

- **AA Terminal-Bench 4.0: 56.1%**; Terminal-Bench-Science 0.1: **57.0%** (OpenAI)
- **GDPval-AA: 1,608 Elo** / 54.8% normalized (AA) — under the 1,750 frontier reference; AA Briefcase: **1,555 Elo**
- **AA AutomationBench: 64.9%** (vs **AutomationBench 36.1%** on OpenAI's own Zapier-style benchmark — a 28.8-point gap between two benchmarks with similar names)
- AA-AnalystAgent: **50.0%**; Hermes Bench: **73.9%**; Hermes Index: 57.1%
- **MazeBench: 17%**; GDP.pdf: 31.0%; ExploitGym: 35.1%
- **Terminal-Bench 2.1, τ³-Banking and Claw-Eval: no verified public score found** — three of the methodology's frontier references cannot be checked for this model

Reasoning / knowledge — **the strongest dimension, with a perfect score**:

- **FrontierMath v2 Tier 4: 100.000%** (Epoch AI) — a perfect score, and the only one recorded in this entire research series; Tiers 1–3: **93.684%**
- Artificial Analysis Intelligence Index: **54.5** (the highest of any OpenAI model measured here)
- AA-HLE: **52.9%**; AA-Omniscience: index 42.0, accuracy **61.8%**, hallucination rate **51.9%** (the second-best in this batch)
- **ARC-AGI-1: 96.5%**; **ARC-AGI-2: 94.2%**; **ARC-AGI-3: 52.7%** (Provider-Adapter run **96.18%** — a 43.5-point harness gap)
- **CritPt: 31.7%**; **MLCR-AA: 38.3%** — both the joint-highest in this batch; AA-LCR: **83.0%**; STEMBench: 2.76
- HealthBench Professional (raw) **67.2%** / length-adjusted 64.2% / Hard 36.2%
- **GPQA Diamond: no verified public score found** — the one frontier reference that is missing; **MRCR: no verified public score found**

Coding:

- DeepSWE: **71.9%** — 2.1 points under the 74% frontier reference
- **AA-SciCode: 54.2%** — 0.8 points under the 55% frontier reference
- ScarfBench: 68.4%; FrontierCode 2.0: 39.0%; Bug Hunt Bench: 44.3 fixes; Terminal-Bench-Science 0.1: 57.0%
- **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, AA Coding Index: no verified public score found** — so the coding evidence is unusually thin for a #4-ranked model

Multimodal (image-in only): **ExtractBench: 95.31%**; **AA-MMMU-Pro: 86.0%**; ParseBench: 69.70%; Design Arena: **1,315 Elo**; **ExtractBench Pro: 12%** (a striking split against the 95.31% standard ExtractBench).

### Normalized scores (1–100)

- **Tool use: 74/100.** Middle of the band. AA AutomationBench 64.9%, Terminal-Bench-Science 57.0%, AA Terminal-Bench 4.0 56.1% and Hermes Bench 73.9% are all respectable, and AA-AnalystAgent 50.0% shows real analytical competence. Capped because **three of the methodology's frontier references cannot be checked at all** (no Terminal-Bench 2.1, no τ³-Banking, no Claw-Eval) and GDPval-AA is 1,608 Elo against the 1,750 reference — plus MazeBench 17% and GDP.pdf 31.0%.
- **Reasoning: 94/100.** The strongest reasoning profile in this batch and the only one with a perfect core score: **FrontierMath Tier 4 100.000%**, AA Intelligence Index 54.5 (highest here), AA-HLE 52.9%, ARC-AGI-2 94.2%, CritPt 31.7% and MLCR-AA 38.3% (both joint-highest here). Capped by the **missing GPQA Diamond figure** — the single most-used frontier reference — a 51.9% hallucination rate, and the ARC-AGI-3 harness gap (52.7% vs 96.18%).
- **Context window: 97/100.** 1.05M-token tier with AA-LCR 83.0%. Held just under 100 because no MRCR retrieval run exists and the >272K pricing step doubles input cost, so the top of the window is economically impractical.
- **Multimodal: 70/100.** Image-in/text-out only — no video or audio input — so it sits at the top of the methodology's "+image in" 60–70 band. Justification for the ceiling: MMMU-Pro 86.0% and ExtractBench 95.31% are both strong for an image-in-only model. Held down by ExtractBench Pro 12% and ParseBench 69.70%, which show document extraction is uneven.
- **Coding: 76/100.** Right at the boundary of the mid and frontier bands. DeepSWE 71.9% and AA-SciCode 54.2% each *just* miss their references (74% and 55%), ScarfBench 68.4% and Terminal-Bench-Science 57.0% are solid, but **SWE-bench Verified, SWE-bench Pro, LiveCodeBench and the AA Coding Index are all unpublished** for this ID, so the two clearest coding references cannot be verified. FrontierCode 2.0 39.0% is weak. A model whose coding is probably better than its measured evidence, which is exactly why it cannot be scored higher.
- **Cost efficiency: 90/100.** $2/$0.10/$10 per 1M sits just above the methodology's ~$1.25/$4.25 (≈88) anchor, and BenchLM independently reports that **only 1 of 111 other ranked models with a published API price costs the same or less while scoring higher**. Artificial Analysis measured it at **$0.72 per index task** — by far the cheapest frontier-tier figure in this research series, against GPT-6 Astra's $3.66 and Claude Opus 5.5's $5.98. Held below 100 by the >272K surcharge, the 10% regional-processing adder, and having no free tier.
- **Overall Score: 82/100.** (74 + 94 + 97 + 70 + 76) / 5 = 82.2 → **82** → 82. Recommendation: **the default pick for anyone who wants frontier reasoning at a sane price.** It pairs the only perfect FrontierMath Tier 4 result in this series with a $0.72-per-task measured cost — roughly a fifth of GPT-6 Astra's — and AA Intelligence Index 54.5, the highest of any OpenAI model here. Its gaps are documentable rather than fundamental (missing GPQA, SWE-bench and Terminal-Bench 2.1 figures), so treat the 82 as a floor on evidence rather than a ceiling on ability: re-score it upward the moment a harness publishes those three.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using OpenAI's GPT-6.1 Sol model documentation, launch post and system card addendum as the primary source, cross-checked against BenchLM's 45-row catalog (which attributes each number to OpenAI, Artificial Analysis, Epoch AI, ARC Prize, Cognition, Kaggle, STEMBench, LlamaIndex, Nous Research or OpenRouter) and OpenCode Zen's pricing table. Conflicting figures are listed side by side — AutomationBench 36.1% vs AA AutomationBench 64.9%, ARC-AGI-3 52.7% vs 96.18%, ExtractBench 95.31% vs ExtractBench Pro 12% — rather than averaged, and missing frontier-reference benchmarks (GPQA Diamond, SWE-bench Verified, Terminal-Bench 2.1, τ³-Banking, Claw-Eval, MRCR) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-6.1 Sol model documentation (context, limits, pricing, tiers)](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
  - [OpenAI — Introducing GPT-6.1 Sol (launch benchmark chart)](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [OpenAI — GPT-6.1 Sol system card addendum](https://cdn.openai.com/pdf/38e3efcf-545e-44cd-99ec-2b7eb395f4cc/oai_GPT_6_1_Sol.pdf)
  - [BenchLM — GPT-6.1 Sol benchmark scores (45 rows, 85.27/100, #4/1009)](https://benchlm.ai/models/gpt-6-1-sol)
  - [Artificial Analysis — GPT-6.1 Sol](https://artificialanalysis.ai/models/gpt-6-1-sol)
  - [ARC Prize — published semi-private results for GPT-6.1 Sol](https://arcprize.org/results/openai-gpt-6-1-sol)
  - [Epoch AI — FrontierMath v2 leaderboard (source of the 100% Tier 4 score)](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
