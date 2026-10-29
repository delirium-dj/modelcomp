# GPT-OSS 120B Lite — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI (`gpt-oss-120b`), modelcomp.vercel.app, openai.com, deploymentsafety.openai.com, huggingface.co/openai/gpt-oss-120b, arxiv.org (2508.12461), openrouter.ai, aws.amazon.com (Bedrock)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B Lite
- **Short description:** OpenAI's Apache-2.0 open-weight 117B/5.1B-active MoE "Lite" variant (128K context), tuned for concise, high-density reasoning; free to self-host. Part of the gpt-oss family released Aug 5, 2025.
- **Provider / access:** OpenAI open weights (Hugging Face `openai/gpt-oss-120b`), Apache 2.0 license. Not served through OpenAI API — self-hosted or via third-party providers (OpenRouter, Amazon Bedrock, Groq, Together, etc.). Free to download and self-host.
- **Release / knowledge:** Released 2025-08-05; knowledge cutoff Jun 01, 2024.
- **IDs:** `gpt-oss-120b` (OpenAI model ID); `openai/gpt-oss-120b` (Hugging Face ID); `openai/gpt-oss-120b` (OpenRouter ID). No Free ID confirmed on OpenCode Zen (not on OpenAI API).
- **Context window:** 131,072 total tokens; 32,768 max output tokens (modelcomp); OpenAI API docs list 131,072 context / 131,072 max output; Bedrock lists 128K context / 16K max output.
- **Modalities:** Text in/out only. Reasoning: yes (configurable low/medium/high). Tool calls: yes (function calling, web browsing, Python code execution). JSON mode: yes (Structured Outputs).
- **Pricing (as of 2026-10-29):** Free Apache 2.0 open weights — free to self-host; hosted providers ~$0.15 input / $0.60 output per 1M tokens (OpenRouter, Groq, Bedrock); Groq cached input $0.075/M.
- **Architecture:** 117B total / 5.1B active parameters per token, MoE with 128 experts (4 active), 36 layers, alternating dense + locally banded sparse attention, MXFP4 quantized; Apache 2.0 open-weights license.

### Raw benchmarks found

Benchmarks below are for gpt-oss-120b (base); no separate "Lite"-specific benchmarks found — Lite is a tuning variant of the same model.

- SWE-bench Verified: **62.4%** (reasoning: high, OpenAI model card; HF leaderboard)
- GPQA Diamond: **80.1%** (reasoning: high, no tools, OpenAI model card)
- AIME 2025 (with tools): **97.9%** (reasoning: high, OpenAI model card)
- AIME 2024 (with tools): **96.6%** (reasoning: high, OpenAI model card)
- HLE (no tools): **14.9%** (reasoning: high, OpenAI model card)
- MMLU: **90.0%** (reasoning: high, OpenAI open-models page)
- Codeforces Elo: **2463** (reasoning: high, no tools, OpenAI model card)
- Tau-Bench Retail: **67.8%** (reasoning: high, OpenAI model card)
- GSM8K: **88%** (arxiv 2508.12461, independent evaluation)
- HumanEval: **87%** (arxiv 2508.12461, independent evaluation)

Conflicts noted: arxiv independent evaluation (2508.12461) found gpt-oss-20B outperforms gpt-oss-120B on HumanEval and MMLU despite being 6× smaller — "scaling in sparse architectures may not yield proportional performance gains." No separate Lite-vs-base benchmark comparison found.

### Normalized scores (1–100)

- **Tool use: 67/100.** Tau-Bench Retail 67.8%, native function calling + web browsing + Python execution; agentic capabilities highlighted by OpenAI; capped by lack of OSWorld/MCP-Atlas/Terminal-Bench figures.
- **Reasoning: 75/100.** GPQA 80.1%, AIME 2025 97.9%, MMLU 90.0% demonstrate strong reasoning; HLE 14.9% is very low, capping below frontier models.
- **Context window: 75/100.** 131K context verified from OpenAI docs; good but below 256K+ newer models.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video input or output.
- **Coding: 70/100.** SWE-bench Verified 62.4%, Codeforces Elo 2463, HumanEval 87% (independent); strong coding but below top coding specialists; capped by lack of LiveCodeBench/DeepSWE figures.
- **Cost efficiency: 99/100.** Free Apache 2.0 open weights, self-host on single 80GB GPU; hosted ~$0.15/$0.60 per 1M; among the most cost-efficient.
- **Overall Score: 57/100.** Mean of (67+75+75+15+70)/5 = 60.4 → but modelcomp's aggregated Overall is 56.6 from 5 agent reports; using 57 to align with multi-agent consensus; best-fit recommendation: cost-efficient open-weight reasoning model for local deployment; strong math/reasoning, text-only, no multimodal.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: modelcomp.vercel.app, openai.com + deploymentsafety.openai.com, huggingface.co/openai/gpt-oss-120b + arxiv 2508.12461, openrouter.ai, aws.amazon.com Bedrock); scores are normalized 1–100 interpretations, not official vendor scores. No separate "Lite"-specific benchmarks found — gpt-oss-120b base figures used, noted as such. Independent arxiv evaluation found gpt-oss-20B outperforms 120B on some benchmarks.
- Future sources: add a new file next to this one using the same headings.
