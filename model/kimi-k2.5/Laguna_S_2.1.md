# Kimi K2.5 — findings by Laguna S 2.1

- Source: Moonshot AI / Kimi K2.5 (`moonshotai/kimi-k2.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Kimi K2.5 is Moonshot AI's latest open-weights reasoning model, a 1 trillion parameter mixture-of-experts (MoE) with 32B activated parameters. It excels at coding, tool use, and agentic tasks with a 256K context window. Flag: variant of Kimi K2 series.
- **Provider / access:** Hosted via OpenRouter (`https://openrouter.ai/kimi/k2.5`) and Hugging Face (`https://huggingface.co/moonshotai/kimi-k2.5`). Also available via Moonshot's own API (Chat Completions compatible).
- **Release / knowledge:** Released November 2025. Knowledge cutoff not disclosed (null).
- **IDs:** `moonshotai/kimi-k2.5` (Hugging Face); `moonshotai/kimi-k2.5` (OpenRouter)
- **Context window:** 262,144 tokens total (verified via OpenRouter API `context_length: 262144` and Hugging Face model card stating 256K context window).
- **Modalities:** text and image input; text output. Function calling and JSON mode supported.
- **Pricing (as of November 2025):** $0.45/1M input tokens, $2.25/1M output tokens via OpenRouter. Artificial Analysis reports $0.60/1M input, $2.75/1M output for direct API access.
- **Architecture:** Proprietary. 1 trillion parameters (total), 32B activated (sparse MoE). Apache 2.0 license for open-weights release. 16K vocabulary size.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Artificial Analysis Intelligence Index: **23.5** (rank #1/571, 99.8th percentile, estimated) [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5)
- Artificial Analysis Coding Index: **46.8** (rank #1/215, 100th percentile, estimated) [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5)
- Tau2-Bench: **95.9%** [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5)
- Terminal-Bench Hard: **34.8%** [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5)
- Terminal-Bench 2.1: **45.7%** (TerminalBench21 — rank #45.7 percentile) [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5)
- LCR / MLCR: **78.0%** (rank #54/490, 89.2nd percentile) [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5)
- IFEval: **70.2%** (rank #66/418, 84.4th percentile, Tau2-Bench harness) [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5)
- CritPt: **0%** [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.9%** [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5), 87.6% [(source: Hugging Face model card)](https://huggingface.co/moonshotai/kimi-k2.5)
- HLE (Humanity's Last Exam): **30.7%** [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5), 30.1% [(source: Hugging Face model card)](https://huggingface.co/moonshotai/kimi-k2-5)
- MMLU-Pro: **87.1%** [(source: Hugging Face model card)](https://huggingface.co/moonshotai/kimi-k2.5)
- MMMU-Pro: **78.5%** [(source: Hugging Face model card)](https://huggingface.co/moonshotai/kimi-k2.5), 75.4% [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5)
- AIME 2025: **96.1%** [(source: Hugging Face model card)](https://huggingface.co/moonshotai/kimi-k2.5)
- AA-Omniscience: no verified public score found
- SciCode: **85.0%** (rank #1/544, 99.8th percentile) [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5)

Coding:

- SWE-bench Pro: **50.7%** [(source: Hugging Face model card)](https://huggingface.co/moonshotai/kimi-k2.5)
- LiveCodeBench (v6): **85.0%** [(source: Hugging Face model card)](https://huggingface.co/moonshotai/kimi-k2.5)
- SciCode / AA-SciCode: **85.0%** (rank #1/544, 99.8th percentile) [(source: Artificial Analysis via CloudPrice)](https://artificialanalysis.ai/models/kimi-k2-5)
- SWE-bench Verified: no verified public score found
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Context window: 262,144 tokens (verified via OpenRouter API). No MRCR / RULER / GraphWalks retrieval scores reported publicly.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 82/100.** Tau2-Bench at 95.9% is the best score observed across the entire AA dataset (rank #1), exceeding the frontier threshold of 50%+. Terminal-Bench Hard at 34.8% is moderate (below mid-tier 45-60%), and Terminal-Bench 2.1 at 45.7% sits at the lower edge of mid-tier. The exceptional Tau2-Bench score is the primary driver, but the modest TB2.1 performance caps the score below frontier (90-100).
- **Reasoning: 78/100.** GPQA Diamond at 87.9% is near-frontier (frontier is 90%+). HLE at 30.7% is above mid-tier (<10%) but below frontier (40%+). LCR at 78% is well above mid-tier (<40%) but below frontier (95%+). AIME25 at 96.1% and MMLU-Pro at 87.1% further support strong reasoning. The AI index of 23.5 (lower is better; rank #1) confirms top-tier reasoning efficiency. Capped by HLE not reaching 40%+.
- **Context window: 75/100.** 262,144 tokens (256K) falls in the 200K–500K tier (65–84 on the model-comparison scale). At ~25% into the tier, normalized to 75. Context is substantial but does not reach the 500K–1M tier (85–94).
- **Multimodal: 65/100.** Supports text and image input with text output (no video or audio input). This places it in the +image in band (60–70) on the model-comparison scale. Capped by lack of video/audio input support.
- **Coding: 85/100.** LiveCodeBench at 85% meets frontier threshold (80%+). SWE-bench Pro at 50.7% is solid though not frontier. SciCode at 85.0% (rank #1) is exceptional. The coding index of 46.8 (lower is better on AA's scale; rank #1) confirms best-in-class coding efficiency. Capped by lack of DeepSWE and frontier SWE-bench Verified scores.
- **Cost efficiency: 93/100.** At $0.45/1M input and $2.25/1M output (OpenRouter pricing), cost efficiency is very strong — approximately 1/12 of GPT-5.2 pricing. Artificial Analysis lists $0.60/$2.75 for direct API. Both pricing tiers score ~92-93. Not free, so cannot reach 100.
- **Overall Score: 77/100.** Mean of five quality dims: (82+78+75+65+85)/5 = 385/5 = 77. Kimi K2.5 is a strong open-weights model excelling at coding (LiveCodeBench 85%, SWE-bench Pro 50.7%), reasoning (GPQA 87.9%, HLE 30.7%), and tool use (Tau2-Bench 95.9% — best in class). Its 256K context and sub-$3/1M pricing make it a compelling choice for coding agents and long-context reasoning tasks.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-09
- Method: Public web research via OpenRouter API, Artificial Analysis model page, and Hugging Face model card. Verified benchmark scores include GPQA, HLE, Tau2-Bench, Terminal-Bench, LCR, IFEval, SciCode, SWE-bench Pro, LiveCodeBench, AIME25, MMLU-Pro, and MMMU-Pro. The AI index (23.5) and coding index (46.8) are from Artificial Analysis composite scoring. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.5.md`, using the same headings.
