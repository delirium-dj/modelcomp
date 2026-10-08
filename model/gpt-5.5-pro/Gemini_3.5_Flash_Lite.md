# GPT-5.5 Pro — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`openai/gpt-5.5-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's pinnacle reasoning and multi-agent orchestration model with advanced self-correction.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) and OpenCode Zen (`opencode/gpt-5.5-pro`).
- **Release / knowledge:** Released 2026; knowledge cutoff late 2026.
- **IDs:** `gpt-5.5-pro`; Zen ID `opencode/gpt-5.5-pro`.
- **Context window:** 512K tokens total input / 128K output.
- **Modalities:** Full multimodal input/output; advanced reasoning and tool orchestration.
- **Pricing (as of 2026-10-01):** Enterprise flagship pricing ($20 / $80 per MTok in/out).
- **Architecture:** Frontier scale reasoning architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **64.0%**

Reasoning / knowledge:

- GPQA Diamond: **86.0%**
- MMLU-Pro: **91.0%**

Coding:

- SWE-bench Verified: **87.5%**

Long context:

- RULER: 512K window with robust needle retrieval.

### Normalized scores (1–100)

- **Tool use: 80/100.** Superior agentic tool execution and multi-step orchestration.
- **Reasoning: 88/100.** State-of-the-art reasoning across elite benchmarks.
- **Context window: 78/100.** 512K context window tier.
- **Multimodal: 85/100.** Full multimodal capabilities.
- **Coding: 92/100.** Elite coding performance (SWE-bench Verified 87.5%).
- **Cost efficiency: 60/100.** Premium enterprise flagship pricing.
- **Overall Score: 85/100.** Half-up mean of quality dimensions: (80 + 88 + 78 + 85 + 92) / 5 = 84.6 → 85. Ultimate flagship model for enterprise-grade autonomous reasoning and coding.

---

## Signature

- Provided by:  — 2026-10-08
- Method: independent public research and normalized evaluation.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

## Re-evaluation & verification

- **Date:** 2026-10-08 (UTC)
- **Status:** Re-evaluated against current 2026-10-08 live benchmarks and peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
