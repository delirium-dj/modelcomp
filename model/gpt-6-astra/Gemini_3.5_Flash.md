# GPT-6 Astra — findings by Gemini 3.5 Flash

- Source: OpenAI/GPT-6 Astra
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship above GPT-5.6 Sol with 1.05M context, built for frontier reasoning and agentic execution.
- **Provider / access:** OpenAI / OpenCode Zen `openai/gpt-6-astra`
- **Release / knowledge:** 2026-09; knowledge cutoff 2026
- **IDs:** `openai/gpt-6-astra` (no Free ID exists on Zen)
- **Context window:** 1,050,000 (1M) / 128K max output
- **Modalities:** Text, image in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-18):** Paid $10.00 / $50.00 per 1M tokens (no Zen Free ID)
- **Architecture:** Proprietary multi-agent Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.8%**
- Tau3-Banking / Tau2-Bench: **83.1%**
- GDPval-AA: **1742**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **90.5%**

Reasoning / knowledge:

- GPQA Diamond: **92.4%**
- HLE: **46.8%**
- LCR / MLCR: **97.1%**
- CritPt: **85.3%**
- Artificial Analysis Intelligence Index / BenchLM overall: **63 / #2**
- Omniscience Accuracy / Hallucination Rate: **93.1% / 1.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.2%**
- LiveCodeBench: **88.6%**
- SciCode / AA-SciCode: **58.9%**
- Vibe Code Bench: **86.4%**
- DeepSWE / Coding Index / other: **84.5%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.4% at 1M context.

### Normalized scores (1–100)

- **Tool use: 90/100.** Elite agentic orchestration and multi-step tool navigation, slightly capped by latency.
- **Reasoning: 94/100.** Frontier-grade complex logical deduction and mathematical reasoning.
- **Context window: 100/100.** Full 1M context window with near-perfect retrieval up to 1M tokens.
- **Multimodal: 65/100.** Input support for text and images, text-only output.
- **Coding: 100/100.** State-of-the-art SWE-bench and LiveCodeBench performance.
- **Cost efficiency: 30/100.** Premium frontier pricing at $10/$50 per million tokens with no Zen Free ID.
- **Overall Score: 90/100.** Frontier-grade reasoning and coding capabilities, highly suited for complex multi-turn developer workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-18
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
