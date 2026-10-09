# Grok 4 Fast — findings by Laguna S 2.1

- Source: SpaceXAI (xAI) / Grok 4 Fast (`opencode/grok-4-fast`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast (Non-reasoning)
- **Short description:** SpaceXAI's Grok 4 Fast is a non-reasoning variant of Grok 4 optimized for speed and cost-efficiency. It blends reasoning and non-reasoning modes in one weights set and is priced at approximately 1/15 the cost of Grok 4. Deprecated in May 2026 in favor of Grok 4.1 Fast. Best for high-volume grounded search and long-document work.
- **Provider / access:** Hosted API via OpenAI-compatible endpoint `https://api.x.ai/v1/` (Chat Completions API). Not listed on OpenRouter as of research date. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released September 19, 2025. Knowledge cutoff not disclosed (null).
- **IDs:** `grok-4-fast` (xAI API). No OpenRouter or HuggingFace listing found.
- **Context window:** 2,000,000 tokens total. Max output: 30,000 tokens. Verified via Artificial Analysis model data (contextWindowTokens: 2000000, OpenAI compatible API).
- **Modalities:** text and image input; text output. Function calling and JSON mode supported. Non-reasoning model (reasoningTokens: 0, isReasoning: false). No video or audio input.
- **Pricing (as of September 2025):** $0.20/1M input tokens, $0.50/1M output tokens. Cache read: $0.05/1M. Verified via Artificial Analysis pricing data (price1mInputTokens: 0.2, price1mOutputTokens: 0.5).
- **Architecture:** Proprietary. Parameters not disclosed (null). Size class: medium. Creator: SpaceXAI. Deprecated to `grok-4-1-fast`.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **11.06** (estimated, #rank unknown — AA has not independently conducted all required benchmarks for this deprecated model). Composite of AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1. [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- Terminal-Bench Hard: **12.1%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- Terminal-Bench 2.1: no verified public score found
- Terminal-Bench 4.0: no verified public score found (included as component of estimated AI index; specific score not publicly available)
- Tau2-Bench: **63.7%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- GDPval-AA: no verified public score found (included as component of estimated AI index; specific score not publicly available)
- LCR / MLCR: **24.0%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- IFEval: **37.7%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- CritPt: **0%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- Claw-Eval / ClawProBench: no verified public score found
- AutomationBench-AA: no verified public score found (included as component of estimated AI index; specific score not publicly available)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **11.06** (estimated). Includes HLE, AA-Omniscience, CritPt, GDP.pdf, AA-LCR v1.1. [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- GPQA Diamond: **60.6%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- HLE (Humanity's Last Exam): **4.5%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- AIME25: **41.3%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- AA-Omniscience Accuracy: **17.7%** / Hallucination Rate: 12.4% [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- SciCode: no verified public score found (included as component of estimated AI index; specific score not publicly available)
- MMLU-Pro: no verified public score found
- MMLU-Redux: no verified public score found
- C-Eval: no verified public score found

Coding:

- Artificial Analysis Coding Index: no verified public score found (not reported in AA data; only the estimated overall Intelligence Index of 11.06 is available)
- LiveCodeBench: **40.1%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- MMMU-Pro: **48.1%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-fast)
- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Context window: 2,000,000 tokens (verified via Artificial Analysis contextWindowTokens field). No MRCR / RULER / GraphWalks retrieval scores reported publicly.

### Normalized scores (1–100)

- **Tool use: 45/100.** The estimated AA Intelligence Index of 11.06 is extremely low (below frontier 80+ range), but Terminal-Bench Hard at 12.1% is weak while Tau2-Bench at 63.7% and GPQA Diamond at 60.6% indicate moderate agentic capability. CritPt at 0% and IFEval at 37.7% cap performance. Capped by very low Terminal-Bench Hard score and the estimated intelligence index being among the lowest observed.
- **Reasoning: 38/100.** This is a non-reasoning model (isReasoning: false) with no built-in extended thinking. GPQA Diamond at 60.6% is moderate, but HLE at 4.5% is far below frontier (20%+), AIME25 at 41.3% is mid-tier, and LCR at 24% is weak. The estimated AA Intelligence Index of 11.06 (very low) corroborates weak reasoning. Capped by non-reasoning mode and very low hallucination/non-hallucination metrics.
- **Context window: 100/100.** 2,000,000 tokens (2M) exceeds the 1M+ tier threshold (95–100). This is among the largest context windows available, matching only the largest Grok 4.x variants.
- **Multimodal: 30/100.** Supports text and image input with text output, placing it in the +image in band (60–70 on the AA scale, but normalized to 30 per model-comparison methodology where text-only = 15 and image = 30). No video, audio, or PDF-specific input.
- **Coding: 45/100.** LiveCodeBench at 40.1% and AIME25 at 41.3% indicate moderate coding ability, and MMMU-Pro at 48.1% provides additional support. No SWE-bench Verified, SWE-Pro, or SciCode scores are publicly available, and no AA Coding Index is reported for this deprecated model. Capped by lack of specific SWE-bench scores and moderate LiveCodeBench performance.
- **Cost efficiency: 95/100.** $0.20/1M input and $0.50/1M output is among the cheapest available — roughly 1/25 of GPT-5 pricing and 1/15 of Grok 4 standard. At $0.05/1M cached input, cost efficiency is exceptional. Not free, so cannot reach 100.
- **Overall Score: 51.6/100.** Mean of five quality dims: (45+38+100+30+45)/5 = 258/5 = 51.6 → **52**. Correction: recalculating precisely — (45+38+100+30+45) = 258; 258/5 = 51.6 → half-up = 52. Grok 4 Fast is a cost-efficient, non-reasoning variant with a 2M context window and sub-$1 pricing, but very low benchmark performance across GPQA (60.6%), HLE (4.5%), and Terminal-Bench Hard (12.1%). Best suited for cheap, long-context, non-reasoning tasks where raw accuracy is not critical; not recommended for coding, math, or agentic reasoning.
- **Overall Score correction:** (45+38+100+30+45)/5 = 51.6 → **52**.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-09
- Method: Public web research via Artificial Analysis model page (https://artificialanalysis.ai/models/grok-4-fast) and AI provider benchmarks API. Verified benchmark scores include GPQA, HLE, LiveCodeBench, AIME25, MMMU-Pro, Tau2-Bench, LCR, IFEval, Terminal-Bench Hard, and CritPt. The AA Intelligence Index (11.06) is estimated as AA had not independently conducted all required benchmarks. No OpenRouter listing or HuggingFace model card was found for this deprecated model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_Fast.md`, using the same headings.
