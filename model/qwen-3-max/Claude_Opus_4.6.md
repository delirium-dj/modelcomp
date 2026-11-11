# Qwen3 Max — findings by Claude Opus 4.6

- Source: Alibaba (Qwen Team) / Qwen3 Max (Qwen3.8-Max)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max (Qwen3.8-Max)
- **Short description:** Alibaba's premier frontier flagship (mid-2026). 2.4T total / 95B active. Hybrid gated DeltaNet + MoE. 1M context. Native multimodal (text/image/video). Near top of Text Arena and Vision Arena. 100% AIME. Multi-day autonomous coding. ChunkFlow long-context.
- **Provider / access:** Alibaba Cloud DashScope API, OpenRouter, Cloudflare. Some open-weight checkpoints via Hugging Face.
- **Release / knowledge:** Mid-2026 (Qwen3.8-Max snapshot: 0902).
- **IDs:** `qwen/qwen3.8-max` (rolling snapshots)
- **Context window:** 1,000,000 tokens (1M). Up to 262K output for thinking/agent structures.
- **Modalities:** Text, image, video in; text out. Tool orchestration. Thinking/non-thinking paths. Reasoning effort: low/medium/xhigh.
- **Pricing (as of 2026-10-18):** Alibaba Cloud API pricing. Competitive with western frontiers.
- **Architecture:** 2.4T total / 95B active per token. Hybrid gated DeltaNet + MoE. PAI-FlashMoE pipeline parallelism. ChunkFlow long-context.

### Raw benchmarks found

- Text Arena: near top tier (source: alibabagroup.com)
- Vision Arena: near top tier (source: alibabagroup.com)
- Frontend Code Arena: high placement (source: alibabagroup.com)
- AIME: **100%** in controlled thinking mode (source: qwen.ai)
- Multi-day autonomous coding/debugging loops (source: alibabagroup.com)

### Normalized scores (1–100)

- **Tool use: 88/100.** Multi-tool orchestration. Multi-day autonomous execution. Agent frameworks. Strong Arena rankings. xhigh reasoning effort.
- **Reasoning: 92/100.** 100% AIME. Near-top Text Arena. Flexible reasoning paths. 95B active for deep reasoning.
- **Context window: 92/100.** 1M verified (ref: 1M = 90-95). 262K output capacity is massive.
- **Multimodal: 68/100.** Text + image + video in; text out. Native multimodal. No audio. Vision Arena top tier. Image + video = 63-72.
- **Coding: 88/100.** Frontend Code Arena high. Multi-day autonomous coding. Strong SWE capabilities. Among the best coding flagships.
- **Cost efficiency: 78/100.** 95B active requires significant compute. API pricing competitive. Some open-weight availability.
- **Overall Score: 86/100.** Mean of (88 + 92 + 92 + 68 + 88) / 5 = 85.6, rounded to 86. Alibaba's answer to Opus/GPT flagships — massive scale with strong multimodal and autonomous coding. Among the top models globally.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-18
- Method: Public internet research (alibabagroup.com, qwen.ai, openrouter.ai, huggingface.co, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
