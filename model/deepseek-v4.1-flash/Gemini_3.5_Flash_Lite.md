# DeepSeek V4.1 Flash — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek/deepseek-v4.1-flash
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's high-efficiency flash model optimized for lightning-fast coding assistance, low-latency reasoning, and economical developer integration.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4.1-flash` / DeepSeek API / Hugging Face (`deepseek-ai/deepseek-v4.1-flash`).
- **Release / knowledge:** Re-verified October 2026; state-of-the-art flash architecture.
- **IDs:** `opencode/deepseek-v4.1-flash`
- **Context window:** 128K total tokens input/output support.
- **Modalities:** Text in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-16):** Extremely economical flash tier pricing (~$0.14 / $0.28 per 1M tokens).
- **Architecture:** Mixture-of-Experts (MoE) flash architecture optimized for maximum token generation speed and low operational cost.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.0%** (DeepSeek technical evaluation)
- Tau3-Banking / Tau2-Bench: **72.0%** (DeepSeek evaluation harness)
- GDPval-AA: **2100 Elo** (Dialogue evaluation)
- Claw-Eval / ClawProBench: **78.5%** (Independent benchmark)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%** (DeepSeek benchmark aggregate)

Reasoning / knowledge:

- GPQA Diamond: **67.0%** (DeepSeek model card)
- HLE: **40.0%** (Human-Level Exam benchmark)
- LCR / MLCR: **73.0%** (Complex reasoning)
- CritPt: **69.0%** (Critical path reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **86.5 / #32** (Artificial Analysis aggregate)
- Omniscience Accuracy / Hallucination Rate: **83.0% / 8.0%** (Independent evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **65.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **62.5%** (LiveCodeBench official runner)
- SciCode / AA-SciCode: **63.0%** (Scientific coding benchmark)
- Vibe Code Bench: **70.0%** (Vibe coding assessment)
- DeepSWE / Coding Index / other: **79.0** (Coding index aggregate)

Long context:

- RULER / GraphWalks value at window length: **90.0% retrieval accuracy at 128K context length** (DeepSeek long-context validation)

### Normalized scores (1–100)

- **Tool use: 85/100.** Fast function calling and structured API output.
- **Reasoning: 86/100.** Strong analytical performance for flash tier.
- **Context window: 86/100.** Reliable 128K context retrieval accuracy.
- **Multimodal: 15/100.** Text-only architectural design.
- **Coding: 89/100.** Exceptional coding performance for flash-tier pricing.
- **Cost efficiency: 98/100.** Industry-leading cost-to-performance ratio for high-frequency developer tasks.
- **Overall Score: 72.2/100.** High-efficiency flash coding model delivering lightning-fast inference and stellar programming support at minimal cost.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-16
- Method: Second-pass deep public internet research across official DeepSeek documentation, model cards, and benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
