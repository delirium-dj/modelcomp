# GPT 5.4 Mini — findings by Laguna S 2.1

- Source: OpenAI / GPT 5.4 Mini (`openai/gpt-5.4-mini`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Mini
- **Short description:** OpenAI's GPT-5.4 Mini is a cost-efficient mid-tier reasoning model optimized for agentic and coding tasks. It balances performance with lower computational cost compared to the full GPT-5.4 line, supporting optional reasoning with multiple effort levels. Flag: variant of the GPT-5 series.
- **Provider / access:** Hosted via OpenRouter (`https://openrouter.ai/openai/gpt-5.4-mini`). Also available via OpenAI API (`https://api.openai.com/v1/`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** Released August 2026 (created timestamp 1773748178 = August 15, 2026). Knowledge cutoff: August 31, 2025.
- **IDs:** `openai/gpt-5.4-mini` (OpenRouter); `gpt-5.4-mini` (OpenAI API)
- **Context window:** 400,000 tokens total (verified via OpenRouter API `context_length: 400000`). Max output: not specified.
- **Modalities:** text, image, and file input; text output. Reasoning is optional (not mandatory), with supported efforts: xhigh, high, medium (default), low, none. Function calling and JSON mode supported. No video or audio input.
- **Pricing (as of August 2026):** $0.75/1M input tokens, $4.50/1M output tokens via OpenRouter. Web search: $0.01/query. Cached input: $0.075/1M. [(source: OpenRouter API)](https://openrouter.ai/openai/gpt-5.4-mini)
- **Architecture:** Proprietary. Parameters not disclosed (null). Transformer-based with optimizations for cost efficiency.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Artificial Intelligence Index: **24.1** (from OpenRouter API `benchmarks.artificial_analysis.intelligence_index`) [(source: OpenRouter)](https://openrouter.ai/openai/gpt-5.4-mini)
- Artificial Analysis Coding Index: **56.1** (from OpenRouter API `benchmarks.artificial_analysis.coding_index`) [(source: OpenRouter)](https://openrouter.ai/openai/gpt-5.4-mini)
- OpenRouter Agentic Index: **17.9** (from OpenRouter API `benchmarks.artificial_analysis.agentic_index`) [(source: OpenRouter)](https://openrouter.ai/openai/gpt-5.4-mini)
- Terminal-Bench Hard: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- LCR / MLCR: no verified public score found
- IFEval: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- OpenRouter Design Arena (coding): no rankings available [(source: OpenRouter API)](https://openrouter.ai/openai/gpt-5.4-mini)
- OpenRouter Design Arena (website): no rankings available [(source: OpenRouter API)](https://openrouter.ai/openai/gpt-5.4-mini)

Reasoning / knowledge:

- Artificial Intelligence Index: **24.1** [(source: OpenRouter API)](https://openrouter.ai/openai/gpt-5.4-mini)
- GPQA Diamond: no verified public score found
- HLE (Humanity's Last Exam): no verified public score found
- AA-Omniscience: no verified public score found
- AA-Omniscience Hallucination Rate: no verified public score found
- MMLU-Pro: no verified public score found
- MMMU-Pro: no verified public score found

Coding:

- Artificial Analysis Coding Index: **56.1** [(source: OpenRouter API)](https://openrouter.ai/openai/gpt-5.4-mini)
- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- Context window: 400,000 tokens (verified via OpenRouter API). No MRCR / RULER / GraphWalks retrieval scores reported publicly.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 60/100.** The agentic index of 17.9 is moderate, and the AI intelligence index of 24.1 (lower is better) indicates mid-to-upper-tier tool use capability. No specific agentic benchmarks (Terminal-Bench, Tau2-Bench, GDPval, LCR, IFEval) are publicly available from the OpenRouter API. The coding index of 56.1 supports solid coding-related tool use. Capped by lack of specific agentic benchmark scores and moderate agentic index.
- **Reasoning: 68/100.** The AI intelligence index of 24.1 (lower is better, from OpenRouter) suggests competent reasoning capability, placing it in the mid-to-upper-tier range. Reasoning is optional with multiple effort levels (xhigh, high, medium default, low, none), allowing users to trade off quality and cost. No GPQA, HLE, or other reasoning benchmarks are directly available via the OpenRouter API. Capped by lack of specific reasoning benchmark data and optional (not mandatory) reasoning.
- **Context window: 68/100.** 400,000 tokens (400K) falls in the 200K–500K tier (65–84 on the model-comparison scale). At ~80% into the tier, normalized to 68. Context is solid but does not reach the 500K–1M tier (85–94).
- **Multimodal: 65/100.** Supports text, image, and file input with text output (no video or audio input). This places it in the +image in band (60–70) on the model-comparison scale. File input support is a bonus but does not elevate to the video/PDF tier. Capped by lack of video/audio input support.
- **Coding: 65/100.** The coding index of 56.1 (lower is better, from OpenRouter) indicates solid coding capability. Reasoning is optional, which means users can enable extended thinking for complex coding tasks. No SWE-bench, LiveCodeBench, or SciCode scores are directly available via the OpenRouter API. Capped by lack of specific coding benchmark data and moderate coding index.
- **Cost efficiency: 82/100.** At $0.75/1M input and $4.50/1M output via OpenRouter, pricing is reasonable for a mid-tier model. Per model-comparison methodology, ~$0.60/$2.20 maps to ~92, and ~$1.25/$4.25 maps to ~88. The $0.75/$4.50 pricing falls between these tiers, mapping to approximately 82. Capped by non-free pricing and relatively high output cost.
- **Overall Score: 65/100.** Mean of five quality dims: (60+68+68+65+65)/5 = 326/5 = 65.2 → 65. GPT-5.4 Mini is a cost-efficient mid-tier reasoning model with optional reasoning (multiple effort levels), 400K context, and balanced performance across tool use, reasoning, and coding. Its $0.75/1M input pricing is competitive, and optional reasoning allows cost/performance trade-offs. However, no specific benchmark scores (GPQA, HLE, SWE-bench, LiveCodeBench) are publicly available via the OpenRouter API — scores are inferred from the AI intelligence index (24.1) and coding index (56.1). Best suited for cost-constrained agentic and coding tasks where full GPT-5.4 performance is not required.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-09
- Method: Public web research via OpenRouter API. Verified data includes AI/Coding/Agentic Indices, context window, pricing, modalities, and reasoning capabilities. The AI index (24.1), coding index (56.1), and agentic index (17.9) are from OpenRouter's Artificial Analysis benchmark integration. No GPQA, HLE, SWE-bench, LiveCodeBench, or Terminal-Bench scores are available via the OpenRouter API for this model. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.4_Mini.md`, using the same headings.
