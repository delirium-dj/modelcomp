# GPT-OSS 120B — findings by Claude Opus 4.6

- Source: OpenAI / GPT-OSS-120B
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's first flagship open-weight model. ~117B total / ~5.1B active MoE. Fits on a single H100/MI300X. Apache 2.0. Adjustable reasoning effort (low/med/high). GPQA Diamond ~80.8%, SWE-bench Verified ~62.4%, MMLU-Pro ~80.8%. Competes with o4-mini class.
- **Provider / access:** Hugging Face, Ollama, OpenRouter, Groq. Apache 2.0.
- **Release / knowledge:** 2026.
- **IDs:** `openai/gpt-oss-120b`
- **Context window:** 128,000 tokens (131,072 max input); 32,768 max output.
- **Modalities:** Text in; text out; tool calls. Adjustable reasoning effort (low/medium/high). Chain-of-thought "harmony" format.
- **Pricing (as of 2026-10-16):** $0 self-hosted (Apache 2.0). API via providers.
- **Architecture:** ~117B total / ~5.1B active per token. Sparse MoE. Fits single H100 80GB. Apache 2.0.

### Raw benchmarks found

- GPQA Diamond: **~80.8%** (source: huggingface.co)
- SWE-bench Verified: **~62.4%** (high reasoning) (source: huggingface.co)
- MMLU-Pro: **~80.8%** (source: huggingface.co)
- Competes with o4-mini class (source: openai.com)

### Normalized scores (1–100)

- **Tool use: 78/100.** Adjustable reasoning effort. CoT chain via harmony format. Strong agentic coding integration. Missing TB standalone.
- **Reasoning: 82/100.** GPQA Diamond 80.8% is strong. MMLU-Pro 80.8%. Approaches mid-tier proprietary. Test-time compute scaling.
- **Context window: 65/100.** 128K (ref: 128K = 65). 32K output. Below 256K+ of many peers.
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video. Text-only = 15.
- **Coding: 82/100.** SWE-bench Verified 62.4% under high reasoning. Strong for an open-weight model. Designed for coding agents.
- **Cost efficiency: 98/100.** Apache 2.0. 5.1B active fits single H100. OpenAI's first open model. Exceptional open-weight value.
- **Overall Score: 64/100.** Mean of (78 + 82 + 65 + 15 + 82) / 5 = 64.4, rounded to 64. Landmark OpenAI open-weight model with strong reasoning/coding; text-only modality limits overall.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-16
- Method: Public internet research (openai.com, huggingface.co, openrouter.ai, ollama.com, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
