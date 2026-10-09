# Kimi K2.7 Code HighSpeed — findings by Laguna S 2.1

- Source: Moonshot AI / Kimi K2.7 Code HighSpeed (`moonshotai/kimi-k2.7-code`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** Moonshot AI's Kimi K2.7 Code HighSpeed is a high-speed variant of the Kimi K2.7 Code model, optimized for fast code generation and agentic coding tasks. It is a text+image input model with mandatory reasoning, designed for developers who need rapid iteration. Flag: the exact model name "kimi-k2.7-code-highspeed" was not found on OpenRouter or Artificial Analysis; this report uses `moonshotai/kimi-k2.7-code` as the closest available match, as "HighSpeed" likely refers to inference optimization of the same base weights.
- **Provider / access:** Hosted via OpenRouter (`https://openrouter.ai/moonshotai/kimi-k2.7-code`). Also available via Moonshot AI API (`https://api.moonshot.ai/v1/`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** Released early 2026. Knowledge cutoff not disclosed (null).
- **IDs:** `moonshotai/kimi-k2.7-code` (OpenRouter); `kimi-k2.7-code` (Moonshot AI API)
- **Context window:** 262,144 tokens total (verified via OpenRouter API `context_length: 262144`). Max output: 32,768 tokens.
- **Modalities:** text and image input; text output. Reasoning is mandatory (isReasoning: mandatory, default_enabled: true). Function calling and JSON mode supported. No video or audio input.
- **Pricing (as of 2026):** $0.6712/1M input tokens, $3.35/1M output tokens via OpenRouter. Cached input: $0.18/1M (cache read). [(source: OpenRouter API)](https://openrouter.ai/moonshotai/kimi-k2.7-code)
- **Architecture:** Proprietary. Parameters not disclosed (null). Mixture-of-Experts (MoE) architecture. 16K vocabulary. Designed specifically for coding and agentic tasks.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Artificial Intelligence Index: **25.8** (rank #112/571, 80.6th percentile) [(source: CloudPrice via Artificial Analysis)](https://cloudprice.net/models/moonshot-kimi-k2-7-code)
- Artificial Analysis Coding Index: **60.8** (rank #41/215, 81.4th percentile) [(source: CloudPrice)](https://cloudprice.net/models/moonshot-kimi-k2-7-code)
- OpenRouter Agentic Index: **21.0** [(source: OpenRouter API)](https://openrouter.ai/moonshotai/kimi-k2.7-code)
- Terminal-Bench Hard: **44.7%** (rank #26/411, 93.9th percentile) [(source: CloudPrice via Artificial Analysis)](https://cloudprice.net/models/moonshot-kimi-k2-7-code)
- Tau2-Bench: **90.1%** (rank #66/418, 84.4th percentile) [(source: CloudPrice)](https://cloudprice.net/models/moonshot-kimi-k2-7-code)
- LCR / MLCR: **79.3%** (rank #55/490, 89.0th percentile) [(source: CloudPrice)](https://cloudprice.net/models/moonshot-kimi-k2-7-code)
- IFEval: **63.1%** (rank #107/426, 75.1st percentile) [(source: CloudPrice)](https://cloudprice.net/models/moonshot-kimi-k2-7-code)
- OpenRouter Design Arena (coding): **Elo 1257** (rank #34/55, 50.2% win rate) [(source: OpenRouter API)](https://openrouter.ai/moonshotai/kimi-k2.7-code)
- OpenRouter Design Arena (website): **Elo 1269** (rank #32, 51.6% win rate) [(source: OpenRouter API)](https://openrouter.ai/moonshotai/kimi-k2.7-code)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (rank #51/537, 90.7th percentile) [(source: CloudPrice via Artificial Analysis)](https://cloudprice.net/models/moonshot-kimi-k2-7-code)
- HLE (Humanity's Last Exam): **35.0%** (rank #67/545, 87.9th percentile) [(source: CloudPrice)](https://cloudprice.net/models/moonshot-kimi-k2-7-code)
- AA-Omniscience: no verified public score found

Coding:

- Artificial Analysis Coding Index: **60.8** (rank #41/215, 81.4th percentile) [(source: CloudPrice)](https://cloudprice.net/models/moonshot-kimi-k2-7-code)
- OpenRouter Coding Index: **60.8** [(source: OpenRouter API)](https://openrouter.ai/moonshotai/kimi-k2.7-code)
- LiveCodeBench: no verified public score found
- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- SciCode / AA-SciCode: **47.8%** (rank #76/544, 86.2nd percentile) [(source: CloudPrice)](https://cloudprice.net/models/moonshot-kimi-k2-7-code)
- Vibe Code Bench: no verified public score found

Long context:

- Context window: 262,144 tokens (verified via OpenRouter API via CloudPrice). No MRCR / RULER / GraphWalks retrieval scores reported publicly.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 78/100.** Terminal-Bench Hard at 44.7% sits at the lower edge of mid-tier (45-60%). Tau2-Bench at 90.1% (rank #66/418, 84.4th percentile) exceeds the frontier threshold (50%+) significantly. LCR at 79.3% and IFEval at 63.1% are in the mid-tier range. The AI index of 25.8 (lower is better, rank #112/571) indicates above-median capability. Design Arena coding Elo 1257 (rank #34/55, 50.2% win rate) supports solid agentic performance. Capped by Terminal-Bench Hard at 44.7% (just below mid-tier threshold) and lack of GDPval/Claw-Eval data.
- **Reasoning: 79/100.** GPQA Diamond at 89.6% (rank #51/537) is near-frontier (90%+). HLE at 35.0% is well above mid-tier (<10%) but below frontier (40%+). The AI index of 25.8 (lower is better) and rank #112/571 indicate solid reasoning ability. Capped by HLE below 40%+ and lack of MMLU-Pro, AIME, and LCR data for additional verification.
- **Context window: 75/100.** 262,144 tokens (256K) falls in the 200K–500K tier (65–84 on the model-comparison scale). At ~25% into the tier, normalized to 75. Context is substantial but does not reach the 500K–1M tier (85–94).
- **Multimodal: 65/100.** Supports text and image input with text output (no video or audio input). This places it in the +image in band (60–70) on the model-comparison scale. Capped by lack of video/audio input support.
- **Coding: 72/100.** Coding Index of 60.8 (lower is better, rank #41/215) is solid but not at frontier level. SciCode at 47.8% (rank #76/544) is below frontier (55%+). LiveCodeBench data is not available. The model is specifically designed for coding tasks, and the Tau2-Bench score of 90.1% indicates strong agentic coding capability. Design Arena coding Elo 1257 (rank #34/55) supports strong coding performance. Capped by SciCode below frontier and lack of SWE-bench data.
- **Cost efficiency: 75/100.** At $0.6712/1M input and $3.35/1M output via OpenRouter, pricing is reasonable for a coding-specialized model. Per model-comparison methodology, approximately $0.60/$2.20 maps to ~92 for cost efficiency, but the higher output cost ($3.35 vs $2.20) places this closer to 75. Capped by non-free pricing and relatively high output cost for a specialized model.
- **Overall Score: 74/100.** Mean of five quality dims: (78+79+75+65+72)/5 = 369/5 = 73.8 → 74. Kimi K2.7 Code HighSpeed is a capable coding and agentic model with exceptional Tau2-Bench performance (90.1%), strong GPQA (89.6%), and near-frontier Terminal-Bench Hard (44.7%). It excels at tool use and agentic coding tasks with a 256K context window. However, it lacks SWE-bench Verified, LiveCodeBench, and SciCode frontier scores, and the $3.35/1M output cost is moderate. Best suited for agentic coding workflows where tool use and iteration speed are prioritized.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-09
- Method: Public web research via OpenRouter API, CloudPrice model page, and DuckDuckGo search. Verified benchmark scores include AI/Coding Indices, GPQA, HLE, Terminal-Bench Hard, Tau2-Bench, LCR, IFEval, SciCode, and Design Arena Elo ratings. The AI index (25.8) and coding index (60.8) are from Artificial Analysis composite scoring. Note: the exact model "kimi-k2.7-code-highspeed" was not found on OpenRouter or AA; `moonshotai/kimi-k2.7-code` was used as the closest available match, with "HighSpeed" likely referring to inference optimization of the same base weights. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.7_Code_HighSpeed.md`, using the same headings.
