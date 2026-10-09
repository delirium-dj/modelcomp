# Gemma 4 31B — findings by Laguna S 2.1

- Source: Google / Gemma 4 31B (`google/gemma-4-31b-it`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (Instruction-Tuned)
- **Short description:** Google's Gemma 4 31B is a 30.7-billion parameter open-weights reasoning model released under the Apache 2.0 license. It is the smallest Gemma 4 variant, offering strong reasoning and coding performance at reduced compute cost compared to the 70B and 9B variants. Flag: variant of the Gemma 4 family.
- **Provider / access:** Hosted via OpenRouter (`https://openrouter.ai/google/gemma-4-31b-it`). Also available on Hugging Face (`https://huggingface.co/google/gemma-4-31b-it`). Apache 2.0 license for open-weights release.
- **Release / knowledge:** Released April 2025. Knowledge cutoff: November 2024.
- **IDs:** `google/gemma-4-31b-it` (OpenRouter); `google/gemma-4-31b-it` (Hugging Face)
- **Context window:** 262,144 tokens total (verified via OpenRouter API `context_length: 262144` and Artificial Analysis `contextWindow: 256000`). Max output: 8,192 tokens.
- **Modalities:** text and image input; text output. Reasoning is mandatory (isReasoning: true). Function calling and JSON mode supported. No video or audio input.
- **Pricing (as of April 2025):** $0.09/1M input tokens, $0.34/1M output tokens via OpenRouter. Artificial Analysis reports free ($0/$0) for open-weights download and local inference.
- **Architecture:** Open-weights. 30.7B parameters total (dense). Apache 2.0 license. 16K vocabulary. Transformer-based with Grouped-Query Attention (GQA).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Artificial Analysis Intelligence Index: **14.67** (not estimated, rank #45/571, 92.4th percentile) [(source: Artificial Analysis)](https://artificialanalysis.ai/models/gemma-4-31b-it)
- Terminal-Bench Hard: **36.4%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/gemma-4-31b-it)
- Tau2-Bench: **59.9%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/gemma-4-31b-it)
- LCR / MLCR: **69.7%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/gemma-4-31b-it)
- IFEval: **75.6%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/gemma-4-31b-it)
- CritPt: **1.4%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/gemma-4-31b-it)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Terminal-Bench 4.0: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.7%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/gemma-4-31b-it), 84.3% [(source: Hugging Face model card)](https://huggingface.co/google/gemma-4-31b-it)
- HLE (Humanity's Last Exam): **23.6%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/gemma-4-31b-it), 19.5% [(source: Hugging Face model card)](https://huggingface.co/google/gemma-4-31b-it)
- MMLU-Pro: **85.2%** [(source: Hugging Face model card)](https://huggingface.co/google/gemma-4-31b-it)
- MMMU-Pro: **73.4%** [(source: Artificial Analysis)](https://artificialanalysis.ai/models/gemma-4-31b-it)
- Tau2-Bench: **76.9%** [(source: Hugging Face model card)](https://huggingface.co/google/gemma-4-31b-it)
- SciCode: no verified public score found

Coding:

- Artificial Analysis Coding Index: no verified public score found (not reported in AA data)
- LiveCodeBench: no verified public score found
- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- OpenRouter Coding Index: **43.4** (from OpenRouter API `benchmarks.artificial_analysis.coding_index`) [(source: OpenRouter)](https://openrouter.ai/google/gemma-4-31b-it)
- Codeforces ELO: **2150** [(source: Hugging Face model card)](https://huggingface.co/google/gemma-4-31b-it)

Long context:

- Context window: 262,144 tokens (verified via OpenRouter API). No MRCR / RULER / GraphWalks retrieval scores reported publicly.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 59/100.** Terminal-Bench Hard at 36.4% is below the mid-tier threshold (45-60%). Tau2-Bench at 59.9% exceeds the mid-tier range (10-25%) but is below the frontier threshold (50%+). LCR at 69.7% and IFEval at 75.6% are in the mid-to-good range. CritPt at 1.4% shows minimal instruction-following. The AI index of 14.67 (lower is better, rank #45/571) indicates mid-to-lower-tier tool use capability. Capped by low Terminal-Bench Hard and non-frontier Tau2-Bench.
- **Reasoning: 78/100.** GPQA Diamond at 85.7% is near-frontier (frontier is 90%+). HLE at 23.6% is well above mid-tier (<10%) but below frontier (40%+). MMLU-Pro at 85.2% and Tau2-Bench at 76.9% (from HF) further support strong reasoning. MMMU-Pro at 73.4% provides additional evidence. The AI index of 14.67 (lower is better) and rank #45/571 in the 92.4th percentile confirm strong reasoning efficiency. Capped by HLE not reaching 40%+.
- **Context window: 75/100.** 262,144 tokens (256K) falls in the 200K–500K tier (65–84 on the model-comparison scale). At ~25% into the tier, normalized to 75. Context is substantial but does not reach the 500K–1M tier (85–94).
- **Multimodal: 65/100.** Supports text and image input with text output (no video or audio input). This places it in the +image in band (60–70) on the model-comparison scale. Capped by lack of video/audio input support.
- **Coding: 60/100.** Coding Index of 43.4 (from OpenRouter, lower is better) indicates moderate coding capability. Codeforces ELO of 2150 on Hugging Face shows competitive programmatic problem-solving. No verified SWE-bench, LiveCodeBench, or SciCode scores are publicly available. The model is optimized for reasoning and general-purpose use rather than specialized coding. Capped by lack of SWE-bench data and the coding index not reaching frontier levels.
- **Cost efficiency: 100/100.** As an open-weights model with Apache 2.0 license, the cost is $0 for download and local inference. Via OpenRouter at $0.09/1M in, $0.34/1M out, it is also extremely inexpensive. At $0 local, cost efficiency is at maximum.
- **Overall Score: 67/100.** Mean of five quality dims: (59+78+75+65+60)/5 = 337/5 = 67.4 → 67. Gemma 4 31B is a strong open-weights reasoning model with excellent value (free locally, $0.09/1M on OpenRouter). It excels at reasoning (GPQA 85.7%, HLE 23.6%) and offers a 256K context window. However, it trails frontier models in coding (no SWE-bench data, Codeforces ELO 2150) and agentic tool use (TB Hard 36.4%). Best suited for cost-effective reasoning and general-purpose tasks where local deployment is preferred.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-09
- Method: Public web research via OpenRouter API, Artificial Analysis model page, and Hugging Face model card. Verified benchmark scores include GPQA, HLE, MMLU-Pro, MMMU-Pro, Tau2-Bench, Terminal-Bench Hard, LCR, IFEval, CritPt, Codeforces ELO, and OpenRouter AI/Coding Indices. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_4_31B.md`, using the same headings.
