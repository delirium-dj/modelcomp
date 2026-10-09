# GPT-5 — findings by Laguna S 2.1

- Source: OpenAI / OpenAI GPT-5 (`openai/gpt-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (High reasoning variant)
- **Short description:** OpenAI's GPT-5 is the fifth-generation Generative Pre-trained Transformer, described as OpenAI's most advanced model with major improvements in reasoning, code quality, and user experience. It is optimized for complex tasks requiring step-by-step reasoning, instruction following, and accuracy. As of October 2026, this model is deprecated — OpenAI has launched a newer release, GPT-5.1. The GPT-5 (High) variant shown here uses extended thinking/reasoning mode by default.
- **Provider / access:** Hosted API via OpenRouter as `openai/gpt-5` (Chat Completions API compatible at `https://openrouter.ai/api/v1/`). Also available via OpenAI's first-party API at `https://api.openai.com/v1/`. Supports `reasoning`, `reasoning_effort` (high/medium/low/minimal), `tools`, `response_format`, and `verbosity` parameters.
- **Release / knowledge:** Released August 7, 2025 (canonical slug `gpt-5-2025-08-07`). Knowledge cutoff: September 30, 2024. Note: GPT-5 is now deprecated; GPT-5.1 is the current recommended release.
- **IDs:** `openai/gpt-5` (OpenRouter), `openai/gpt-5-2025-08-07` (canonical). No Free ID on OpenCode Zen.
- **Context window:** 400,000 tokens total. Max completion output: 128,000 tokens. Verified via OpenRouter API `context_length: 400000` and `top_provider.max_completion_tokens: 128000`.
- **Modalities:** text and image input; text output. Tool calling supported. Built-in extended thinking/reasoning (mandatory, default effort: medium; supports high, medium, low, minimal). No video or audio input.
- **Pricing (as of August 2025):** $1.25/1M input tokens, $10.00/1M output tokens. Cache read discount: 90% (cache read price $0.125/1M). Web search: $0.01 per call. Verified via OpenRouter API `pricing` object and Artificial Analysis pricing table.
- **Architecture:** Proprietary. Parameters not disclosed by OpenAI. Reasoning model with extended chain-of-thought. Tokenizer: GPT.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **23** (estimated, #138/226, below average median: 26, "2 out of 4 units"). Composite of AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1. Individual sub-scores not publicly available. [(source: Artificial Analysis)](https://artificialanalysis.ai/models/gpt-5)
- Design Arena (OpenRouter): coding-category Elo ratings range from 1061 (3D, rank 96/226) to 1246 (website, rank 67/226). SVG: 1188 (rank 29), dataviz: 1225 (rank 46), gamedev: 1192 (rank 55), codecategories: 1172 (rank 68), asciiart: 1149 (rank 45), uicomponent: 1183 (rank 60). [(source: OpenRouter API)](https://openrouter.ai/api/v1/models)
- Terminal-Bench 4.0: no verified public score (included as component of the estimated AI index; specific score not publicly available per Artificial Analysis)
- GDPval-AA: no verified public score (included as component of the estimated AI index; specific score not publicly available)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23** (estimated, #138/226). Composite includes Humanity's Last Exam, AA-Omniscience, CritPt, GDP.pdf, AA-LCR v1.1. Individual benchmark scores not publicly available. [(source: Artificial Analysis)](https://artificialanalysis.ai/models/gpt-5)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- MMLU-Pro: no verified public score found
- MMLU-Redux: no verified public score found
- SuperGPQA: no verified public score found
- C-Eval: no verified public score found
- AIME26: no verified public score found
- HMMT: no verified public score found

Coding:

- Artificial Analysis Coding Index: **37.8** (from OpenRouter API). No verified public score for individual coding benchmarks. [(source: OpenRouter API)](https://openrouter.ai/api/v1/models)
- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench v6: no verified public score found
- SciCode: no verified public score found (included as component of estimated AI index; specific score not publicly available)

Multimodal / vision:

- MMMU: no verified public score found
- MMMU-Pro: no verified public score found
- MathVista: no verified public score found
- RealWorldQA: no verified public score found
- OCRBench: no verified public score found
- VideoMME: no verified public score found

Long context:

- Context window: 400,000 tokens (verified via OpenRouter API). No MRCR/RULER/GraphWalks retrieval scores reported publicly.

### Normalized scores (1–100)

- **Tool use: 58/100.** The Artificial Analysis Intelligence Index is estimated at 23 (below the median of 26, "2 out of 4 units"), including Terminal-Bench 4.0 and GDPval-AA as components. Specific Terminal-Bench and GDPval scores are not publicly available. Design Arena Elo ratings (1061–1246) place coding-category performance in the mid-tier range. Capped by no verified Terminal-Bench 2.1 score and the below-median AI index estimate.
- **Reasoning: 60/100.** AI Intelligence Index estimate of 23 falls in the methodology's mid range (Index 20–35 → 55–65), with the index including AA-Omniscience, CritPt, Humanity's Last Exam, GDP.pdf, and AA-LCR v1.1. No verified GPQA Diamond or HLE scores available — the AI index is marked as estimated with individual benchmark results not publicly released. Capped by the below-average index and knowledge cutoff of September 2024.
- **Context window: 80/100.** 400,000 tokens falls in the 200K–500K tier (methodology: 200K=70, scales to 84 at 500K). 400K is approximately two-thirds of the way through this tier, yielding ~80. Max output of 128K is strong. Capped by not reaching the 500K–1M tier (85–94).
- **Multimodal: 65/100.** Supports text and image input with text output, placing it in the +image in band (60–70). No video or audio input support. Capped by limited modality breadth compared to vision-capable frontier models.
- **Coding: 62/100.** Coding index of 37.8 from OpenRouter/Artificial Analysis is moderate. No verified SWE-bench Verified, LiveCodeBench, or SciCode scores publicly available — the coding index is derived from the estimated AI index composite. Design Arena coding Elo ratings (1061–1246) suggest mid-tier performance. Capped by lack of specific SWE-bench or LiveCodeBench numbers and no DeepSWE-level scores.
- **Cost efficiency: 78/100.** $1.25/1M input and $10/1M output is moderately expensive — cheaper than GPT-5.5 ($5/$30) but more expensive than GPT-5.6 Luna ($0.20/$1.20). The methodology reference of $1.25/$4.25 ≈ 88 is undercut by the $10 output price. 90% cache read discount helps for repeated contexts.
- **Overall Score: 65/100.** Mean of five quality dims: (58+60+80+65+62)/5 = 65.0, half-up = 65. Wait — recalculating: (58+60+80+65+62) = 325; 325/5 = 65.0 → **65**. GPT-5 is a flagship OpenAI model with 400K context and reasoning mode, but its estimated AI index of 23 (below median 26 among 226 models) and lack of publicly available specific benchmark scores suggest middling performance in this competitive landscape. Best suited for users already in the OpenAI ecosystem who need reasoning-mode capabilities; cost is the primary drawback at $1.25/$10. Deprecated in favor of GPT-5.1.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-09
- Method: Public web research via OpenRouter API, Artificial Analysis model page. Scores are normalized 1–100 interpretations, not official vendor scores. GPT-5's specific benchmark scores (GPQA, HLE, SWE-bench, LiveCodeBench, etc.) were not publicly available at research time — only the estimated Artificial Analysis Intelligence Index (23) and Coding Index (37.8) were published.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
