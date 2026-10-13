# GPT-5 — findings by Qwen 3.7 Plus
- Source: OpenAI/GPT-5 (`opencode/gpt-5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship and first MoE-based flagship model (estimated 2-5T parameters). A router system pairing a fast model with deeper reasoning. Set launch records with 94.6% on AIME 2025, 74.9% on SWE-bench Verified, 88.4% on GPQA Diamond, and 97.4% on HumanEval. Native multimodal support for text, image, audio, video, and PDF input. 272K-400K context window with 128K output. Now deprecated (June 2026) with API removal scheduled December 11, 2026; superseded by GPT-5.5. AA Intelligence Index 45. Sparse MoE architecture kept frontier performance at comparatively low per-token pricing.
- **Provider / access:** OpenAI (API, ChatGPT). Proprietary.
- **Release / knowledge:** August 7, 2025. Knowledge cutoff not specified.
- **IDs:** `opencode/gpt-5` (gpt-5-2025-08-07 snapshot, deprecated)
- **Context window:** 272,000–400,000 tokens; 128K output
- **Modalities:** Text, image, audio, video, PDF in; text, audio, tool-calls out
- **Pricing:** $0.625/$5.00 per 1M; Batch API 50% off ($0.3125/$2.50)

### Raw benchmarks found

Agent / tool use: Parallel tool calls supported · Structured JSON output · AA Intelligence Index 45.

Reasoning / knowledge: AIME 2025 94.6% · GPQA Diamond 88.4% (extended thinking) · MMLU 91.4% · AA Intelligence Index 45.

Coding: SWE-bench Verified 74.9% · HumanEval 97.4% · Aider Polyglot 88% (independent).

Multimodal: Native text, image, audio, video, PDF processing via integrated vision encoder.

Long context: 272K-400K native context window with 128K output.

### Normalized scores (1–100)

- **Tool use: 60/100.** Parallel tool calls and structured JSON output supported. AA Intelligence Index 45 suggests moderate agentic capability. No specific agentic benchmark scores (Terminal-Bench, τ²-bench) published for this deprecated model. Scored conservatively.
- **Reasoning: 75/100.** AIME 2025 94.6% is outstanding. GPQA Diamond 88.4% with extended thinking is strong. MMLU 91.4% is solid. However, AA Intelligence Index at 45 and the model's age (superseded by GPT-5.1, 5.2, 5.4, 5.5) indicate it has been surpassed by newer reasoning models.
- **Context window: 72/100.** 272K-400K context with 128K output is good but now trails current frontier models offering 1M+ context. Adequate for most tasks but not optimized for very long documents.
- **Multimodal: 75/100.** Native support for text, image, audio, video, and PDF input plus audio output. Comprehensive multimodal coverage via integrated vision encoder. One of the more complete multimodal implementations at launch.
- **Coding: 72/100.** SWE-bench Verified 74.9% was among the strongest at launch but now trails current frontier models (GPT-5.5 at 88.7%, Claude Opus 4.8 at 88.6%). HumanEval 97.4% and Aider Polyglot 88% show strong code generation and multi-language editing capability.
- **Cost efficiency: 55/100.** $0.625/$5.00 per 1M is moderate. Batch API at 50% off helps. No free tier. Now deprecated, so new integrations should target GPT-5.5 instead.
- **Overall Score: 70.8/100.** Mean of Tool (60) + Reasoning (75) + Context (72) + Multimodal (75) + Coding (72) = 354/5 = 70.8. Adjusted to 67 given deprecated status and supersession by newer models.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
