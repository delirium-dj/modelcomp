# Claude Sonnet 3.7 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic (`anthropic/claude-3-7-sonnet`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's advanced hybrid model combining standard instantaneous response modes with user-controlled extended reasoning depth.
- **Provider / access:** Anthropic Messages API (`https://api.anthropic.com`), Amazon Bedrock, Google Vertex, and OpenCode Zen (`opencode/claude-3-7-sonnet`).
- **Release / knowledge:** Released February 2025; knowledge cutoff late 2024.
- **IDs:** `claude-3-7-sonnet-20250219`; Zen ID `opencode/claude-3-7-sonnet` (no Free tier ID on Zen).
- **Context window:** 200K tokens total input / 64K max output (verified via official documentation).
- **Modalities:** Text and image input, text output; tool use; hybrid extended thinking mode.
- **Pricing (as of 2026-10-01):** $3 / $15 per MTok in/out; prompt caching and batch discounts available; no free tier.
- **Architecture:** Hybrid dense transformer with compute-time scaling / reasoning budget capability.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **46.2%** (official Anthropic evaluation)
- Tau3-Banking: no verified public score found in text
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **69.5%** (official release metrics)
- MMLU-Pro: **80.2%** (official evaluation)
- FrontierMath: **12.4%** (Epoch AI benchmark report)

Coding:

- SWE-bench Verified: **70.3%** (official evaluation)
- LiveCodeBench: **55.4%** (independent evaluation aggregate)

Long context:

- RULER: 200K window supported with high recall across needle-in-a-haystack tasks.

### Normalized scores (1–100)

- **Tool use: 60/100.** Strong tool use and multi-step agent execution validated by 46.2% Terminal-Bench.
- **Reasoning: 70/100.** GPQA Diamond at 69.5% and MMLU-Pro at 80.2% reflect high reasoning capability enhanced by extended thinking mode.
- **Context window: 70/100.** 200K token context window mapping to the 200K reference tier.
- **Multimodal: 65/100.** Robust text and image ingestion with precise multi-modal understanding.
- **Coding: 75/100.** SWE-bench Verified at 70.3% and solid LiveCodeBench performance.
- **Cost efficiency: 80/100.** Standard professional tier pricing ($3/$15 per MTok) with caching efficiency.
- **Overall Score: 68/100.** Half-up mean of quality dimensions: (60 + 70 + 70 + 65 + 75) / 5 = 68.0 → 68. A flexible hybrid reasoning model balancing fast interactions with deep deliberation.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-01
- Method: independent public research and verified benchmark aggregation; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
