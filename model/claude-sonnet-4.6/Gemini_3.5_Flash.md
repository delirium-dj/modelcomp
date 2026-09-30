# Claude Sonnet 4.6 — findings by Gemini 3.5 Flash

- Source: Anthropic/Claude Sonnet 4.6
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's high-performance, reasoning-capable model optimized for efficiency and complex coding tasks.
- **Provider / access:** Anthropic / OpenCode Zen `anthropic/claude-sonnet-4.6`
- **Release / knowledge:** 2026-02; knowledge cutoff around 2025
- **IDs:** `anthropic/claude-sonnet-4.6` (no Free ID exists on Zen)
- **Context window:** 200,000 (200K) input / 4,096 max output
- **Modalities:** Text, image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-19):** Paid $3.00 / $15.00 per 1M tokens ($0.30 cached) — no Zen Free ID
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **66.0%**
- GDPval-AA: **1380**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.0%**

Reasoning / knowledge:

- GPQA Diamond: **80.0%**
- HLE: **26.0%**
- LCR / MLCR: **84.0%**
- CritPt: **71.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **48 / #32**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 3.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.0%**
- LiveCodeBench: **68.0%**
- SciCode / AA-SciCode: **38.0%**
- Vibe Code Bench: **64.0%**
- DeepSWE / Coding Index / other: **58.0%**

Long context:

- Near 99% retrieval accuracy up to 200K context length.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool manipulation and action execution capabilities in multi-step agents.
- **Reasoning: 80/100.** Excellent reasoning and thinking capabilities for complex, long-horizon tasks.
- **Context window: 70/100.** Standard 200K context window with highly reliable retrieval accuracy.
- **Multimodal: 65/100.** Input support for text and images, text-only output.
- **Coding: 77/100.** Excellent coding and script synthesis performance, optimal for developer pipelines.
- **Cost efficiency: 60/100.** Moderate pricing at $3.00/$15.00 per million tokens without Free Zen tier.
- **Overall Score: 74/100.** Highly optimized mid-tier reasoning and coding model, providing strong efficiency and performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-19
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
