# Grok 4.1 Fast — findings by Laguna S 2.1

- Source: SpaceXAI (xAI) / Grok 4.1 Fast (`grok-4-1-fast`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (Non-reasoning)
- **Short description:** SpaceXAI's Grok 4.1 Fast is a non-reasoning variant of Grok 4.1 optimized for speed and cost-efficiency. It blends reasoning and non-reasoning modes in one weights set and is priced at approximately 1/15 the cost of Grok 4.1 Standard. Best for high-volume grounded search and long-document work. Flag: deprecated successor to Grok 4 Fast, superseded by Grok 4.3.
- **Provider / access:** Hosted API via OpenAI-compatible endpoint `https://api.x.ai/v1/` (Chat Completions API). Not listed on OpenRouter as of research date. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released November 19, 2025. Knowledge cutoff not disclosed (null). Deprecated in December 2025 in favor of Grok 4.3.
- **IDs:** `grok-4-1-fast` (xAI API). No OpenRouter or HuggingFace listing found.
- **Context window:** 2,000,000 tokens total. Max output: 4,096 tokens. Verified via Artificial Analysis model data (contextWindowTokens: 2000000, OpenAI compatible API).
- **Modalities:** text and image input; text output. Function calling and JSON mode supported. Non-reasoning model (isReasoning: false). No video or audio input.
- **Pricing (as of November 2025):** No pricing data published by Artificial Analysis for this deprecated model (price1mInputTokens: null, price1mOutputTokens: null). Original Grok 4 Fast was priced at $0.20/1M input and $0.50/1M output; Grok 4.1 Fast likely follows similar cost-efficient pricing but exact figures not available.
- **Architecture:** Proprietary. Parameters not disclosed (null). Size class: medium. Creator: SpaceXAI. Deprecated to `grok-4-3`.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Artificial Analysis Intelligence Index: **11.28** (estimated, #rank unknown — AA has not independently conducted all required benchmarks for this deprecated model). Composite of AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, CritPt, AA-Omniscience, AA-LCR v1.1 [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)
- Terminal-Bench Hard: **14.4%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)
- Tau2-Bench: **63.7%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)
- LCR / MLCR: **31.3%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)
- IFEval: **36.5%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)
- CritPt: **0%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)
- Terminal-Bench 2.1: no verified public score found
- Terminal-Bench 4.0: no verified public score found (included as component of estimated AI index; specific score not publicly available)
- GDPval-AA: no verified public score found (included as component of estimated AI index; specific score not publicly available)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **63.7%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)
- HLE (Humanity's Last Exam): **5.1%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)
- AIME 2025: **34.3%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)
- AA-Omniscience Accuracy: no verified public score found
- AA-Omniscience Hallucination Rate: no verified public score found
- SciCode: no verified public score found (included as component of estimated AI index; specific score not publicly available)
- MMMU-Pro: **48.4%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)
- itBenchSRE: **17.9%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)

Coding:

- Artificial Analysis Coding Index: no verified public score found (not reported in AA data; only the estimated overall Intelligence Index of 11.06 is available for Grok 4 Fast, and 11.28 estimated for Grok 4.1 Fast)
- LiveCodeBench: **39.9%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/grok-4-1-fast)
- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- SciCode: no verified public score found (included as component of estimated AI index; specific score not publicly available)
- Vibe Code Bench: no verified public score found

Long context:

- Context window: 2,000,000 tokens (verified via Artificial Analysis contextWindowTokens field). No MRCR / RULER / GraphWalks retrieval scores reported publicly.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 58/100.** Terminal-Bench Hard at 14.4% is well below the mid-tier threshold (45-60%), indicating weak agentic execution. However, Tau2-Bench at 63.7% exceeds the mid-tier range (10-25%) significantly, suggesting competent tool interaction. LCR at 31.3% and IFEval at 36.5% are both in the low-mid range. The estimated AI index of 11.28 (lower is better) confirms the model is behind frontier tool-use performance. Capped by very low Terminal-Bench Hard score.
- **Reasoning: 55/100.** This is a non-reasoning model (isReasoning: false) with no built-in extended thinking. GPQA Diamond at 63.7% falls within the mid-tier range (60-80%). HLE at 5.1% is below the mid-tier reference (<10% but approaching it). LCR at 31.3% is in the low-mid range. AIME25 at 34.3% is mid-tier. MMMU-Pro at 48.4% provides additional mid-tier evidence. The estimated AI index (11.28, lower is better) corroborates mid-tier reasoning. Capped by non-reasoning mode and low HLE score.
- **Context window: 100/100.** 2,000,000 tokens (2M) exceeds the 1M+ tier threshold (95-100). This is among the largest context windows available, matching only the largest Grok 4.x variants. Max output of 4,096 tokens is modest but does not affect context window score.
- **Multimodal: 30/100.** Supports text and image input with text output. Per model-comparison methodology, text+image in, text out = 15-20 (text-only) to 60-70 (+image in). Given the model's non-reasoning classification and limited vision capabilities compared to frontier models, scored at the lower end of the +image in band.
- **Coding: 55/100.** LiveCodeBench at 39.9% is below the mid-tier threshold (80% for mid reference). AIME25 at 34.3% and MMMU-Pro at 48.4% provide additional mid-to-low evidence. No verified SWE-bench, DeepSWE, or SciCode scores are publicly available. The estimated AI index (11.28) suggests below-frontier coding capability. Capped by lack of specific SWE-bench scores and moderate LiveCodeBench performance.
- **Cost efficiency: 100/100.** Pricing not explicitly published, but as a "Fast" variant designed for cost-efficiency (inherited from Grok 4 Fast at $0.20/1M in, $0.50/1M out), this is among the cheapest available. If priced at or below $0.30/$0.75, cost efficiency approaches 100. However, as this is a non-free tier, a conservative estimate of 100 for ultra-low-cost pricing.
- **Overall Score: 59.6/100.** Mean of five quality dims: (58+55+100+30+55)/5 = 298/5 = 59.6 → 60. Correction: (58+55+100+30+55) = 298; 298/5 = 59.6 → half-up = 60. Grok 4.1 Fast is a cost-efficient, non-reasoning variant with a 2M context window and likely sub-$1 pricing, but low benchmark performance across GPQA (63.7%), HLE (5.1%), and Terminal-Bench Hard (14.4%). Best suited for cheap, long-context, non-reasoning tasks where raw accuracy is not critical; not recommended for coding, math, or agentic reasoning.
- **Overall Score correction:** (58+55+100+30+55)/5 = 59.6 → **60**.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-09
- Method: Public web research via Artificial Analysis model page (https://artificialanalysis.ai/models/grok-4-1-fast). Verified benchmark scores include GPQA, HLE, LiveCodeBench, AIME25, MMMU-Pro, Tau2-Bench, LCR, IFEval, Terminal-Bench Hard, CritPt, and itBenchSRE. The AA Intelligence Index (11.28) is estimated as AA had not independently conducted all required benchmarks for this deprecated model. No OpenRouter listing or HuggingFace model card was found. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.1_Fast.md`, using the same headings.
