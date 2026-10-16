# Qwen 3.5 9B — findings by Claude Opus 4.6

- Source: Alibaba (Qwen Team) / Qwen 3.5 9B
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's lightweight native vision-language model (Mar 2026). ~9B dense params. Hybrid Gated DeltaNet + sparse attention (3:1 ratio). "Early fusion" multimodal — text/image/video from day one. 256K context. 201+ languages. Apache 2.0.
- **Provider / access:** Hugging Face, DeepInfra, Together AI, OpenRouter. Apache 2.0.
- **Release / knowledge:** 2026-03-02 release.
- **IDs:** `qwen/qwen3.5-9b`
- **Context window:** 262,144 tokens (256K).
- **Modalities:** Text, image, video in; text out; tool calling; MCP support. Early-fusion multimodal. 201+ languages.
- **Pricing (as of 2026-10-16):** ~$0.08-$0.10 / 1M input tokens via providers. $0 self-hosted (Apache 2.0). Runs on 8-16GB VRAM.
- **Architecture:** ~9B dense. Hybrid Gated DeltaNet + Gated Attention (3:1 ratio). 32 layers, 4096 hidden dim. Apache 2.0.

### Raw benchmarks found

- Rivals/exceeds prior 30-80B models on reasoning/coding/doc-understanding (source: salad.com, reddit.com)
- Strong spatial reasoning and OCR via early-fusion design (source: deepinfra.com)
- 200+ tok/s on optimized runtimes (source: deepinfra.com)

### Normalized scores (1–100)

- **Tool use: 70/100.** Tool calling + MCP support. Lightweight model suits coding agent pipelines. 9B limits complex orchestration.
- **Reasoning: 72/100.** Rivals prior 30-80B models. Scaled RL reduces hallucinations. Missing GPQA standalone.
- **Context window: 78/100.** 256K verified (ref: 256K ≈ 78). Excellent for 9B model.
- **Multimodal: 68/100.** Text + image + video in; text out. Early-fusion native multimodal. No audio. Video + image = 63-72.
- **Coding: 72/100.** Strong for 9B class. MCP-compatible coding agent. Missing formal SWE-bench scores.
- **Cost efficiency: 98/100.** Apache 2.0. ~$0.08/1M. Runs on 8GB VRAM. 200+ tok/s. Exceptional efficiency.
- **Overall Score: 72/100.** Mean of (70 + 72 + 78 + 68 + 72) / 5 = 72.0. Outstanding 9B model punching far above its weight; early-fusion multimodal + 256K context at consumer hardware scale.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-16
- Method: Public internet research (deepinfra.com, huggingface.co, salad.com, openrouter.ai, puter.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
