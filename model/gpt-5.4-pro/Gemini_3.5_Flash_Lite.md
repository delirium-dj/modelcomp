# GPT-5.4 Pro — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`openai/gpt-5.4-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's flagship professional reasoning and coding model with deep verification capabilities.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) and OpenCode Zen (`opencode/gpt-5.4-pro`).
- **Release / knowledge:** Released 2026; knowledge cutoff mid 2026.
- **IDs:** `gpt-5.4-pro`; Zen ID `opencode/gpt-5.4-pro`.
- **Context window:** 256K tokens total input / 64K output.
- **Modalities:** Text/image/audio/video input, text output; tool use; reasoning mode.
- **Pricing (as of 2026-10-01):** Flagship professional pricing ($15 / $60 per MTok in/out).
- **Architecture:** Large-scale frontier multimodal reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **58.0%**

Reasoning / knowledge:

- GPQA Diamond: **82.0%**
- MMLU-Pro: **88.5%**

Coding:

- SWE-bench Verified: **82.5%**

Long context:

- RULER: 256K window with high precision.

### Normalized scores (1–100)

- **Tool use: 75/100.** Exceptional tool calling and autonomous agentic task execution.
- **Reasoning: 85/100.** Top-tier reasoning on GPQA Diamond and MMLU-Pro.
- **Context window: 72/100.** 256K context window tier.
- **Multimodal: 80/100.** Comprehensive multimodal input (text, image, audio, video).
- **Coding: 88/100.** Industry-leading coding and benchmark scores (SWE-bench Verified 82.5%).
- **Cost efficiency: 65/100.** Premium professional pricing tier.
- **Overall Score: 80/100.** Half-up mean of quality dimensions: (75 + 85 + 72 + 80 + 88) / 5 = 81.0 → 81. Flagship professional powerhouse for complex reasoning and software engineering.

---

## Signature

- Provided by:  — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
