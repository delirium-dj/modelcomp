# DeepSeek V4 Pro — findings by Claude Opus 4.6

- Source: DeepSeek / DeepSeek-V4-Pro
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's flagship 1.6T-parameter MoE model (2026). Features Hybrid Attention with compressed sparse and heavily compressed attention mechanisms. Supports thinking modes for complex reasoning. Being phased out in favor of V4.1-Flash.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`), DeepInfra, Lambda, OpenRouter, Ollama (local). Open weights (HuggingFace).
- **Release / knowledge:** 2026 release (V4 generation); being phased out for V4.1-Flash.
- **IDs:** `deepseek/deepseek-v4-pro` (HuggingFace: DeepSeek/DeepSeek-V4-Pro)
- **Context window:** 1,000,000 tokens (1M).
- **Modalities:** Text in; text out; tool calls. Reasoning modes: Non-think, Think High, Think Max. FP4/FP8 precision.
- **Pricing (as of 2026-10-11):** Off-peak: $0.66 / $1.98 per 1M (input/output). Peak: $1.32 / $3.96. Cache hit: $0.022 off-peak.
- **Architecture:** 1.6T total parameters, 49B active per token. Sparse MoE with Hybrid Attention (Compressed Sparse + Heavily Compressed). FP4 experts, FP8 non-expert. Open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **~67.9%** (source: datacamp.com, medium.com)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (source: datacamp.com, deepinfra.com)
- MMLU-Pro: **73.5%** (source: deepinfra.com)
- HLE (Humanity's Last Exam): no verified public score found
- ARC-AGI-2: no verified public score found

Coding:

- SWE-bench Verified: **80.6%** (source: deepinfra.com, lightning.ai)
- LiveCodeBench (Pass@1): **93.5%** (source: lambda.ai, deepinfra.com)
- Codeforces Rating: **3,206** (source: lambda.ai, deepinfra.com)
- SciCode: no verified public score found

Long context:

- 1,000,000 token context window. Hybrid attention optimized for long-sequence efficiency. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 83/100.** TB 2.0 67.9% is strong (ref: 65–70% on TB 2.0 = 80–85 range). Frontier-class agentic capability with thinking modes. Missing GDPval/Tau3 data.
- **Reasoning: 88/100.** GPQA Diamond 90.1% is strong frontier-class. MMLU-Pro 73.5% is solid. Missing HLE/ARC-AGI data prevents higher. Thinking modes enhance complex reasoning.
- **Context window: 90/100.** 1M verified. Hybrid attention architecture specifically designed for efficient long context processing. No retrieval benchmarks published.
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video input. Text-only = 15.
- **Coding: 92/100.** SWE-bench Verified 80.6% is near-frontier. LiveCodeBench 93.5% is exceptional. Codeforces 3,206 is competitive-programming elite. Very strong across all coding benchmarks.
- **Cost efficiency: 92/100.** $0.66/$1.98 off-peak is extremely affordable for 1.6T-parameter performance. Cache hits at $0.022 are nearly free. Open weights available for self-hosting.
- **Overall Score: 74/100.** Mean of (83 + 88 + 90 + 15 + 92) / 5 = 73.6, rounded to 74. Exceptional coding model held back severely by text-only modality; outstanding value at off-peak pricing.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (deepseek.com, deepinfra.com, lambda.ai, datacamp.com, huggingface.co, lightning.ai, benchlm.ai, medium.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
