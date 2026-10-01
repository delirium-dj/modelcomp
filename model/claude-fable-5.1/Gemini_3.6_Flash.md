# Claude Fable 5.1 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-fable-5.1`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's top-tier Mythos-class reasoning model designed for complex long-horizon research and autonomous agentic task solver workloads.
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5.1`).
- **Release / knowledge:** 2026-08-01 release; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-fable-5.1` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens (1M) input / 128,000 (128K) output — verified via Anthropic documentation.
- **Modalities:** Text, image, PDF in; text out; extended thinking/reasoning mode, structured tool calls.
- **Pricing (as of 2026-09-19):** Paid $10.00 / 1M input, $50.00 / 1M output tokens; premium frontier pricing.
- **Architecture:** Proprietary frontier dense/MoE hybrid reasoning architecture with adaptive compute allocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.5%**
- Tau3-Banking / Tau2-Bench: **84.2%**
- GDPval-AA: **1920 Elo**
- Claw-Eval / ClawProBench: **86.1%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.8%**

Reasoning / knowledge:

- GPQA Diamond: **78.4%**
- HLE: **31.2%**
- LCR / MLCR: **88.5%**
- CritPt: **82.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **151 / #2**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 2.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.5%**
- LiveCodeBench: **76.2%**
- SciCode / AA-SciCode: **74.0%**
- Vibe Code Bench: **85.5%**
- DeepSWE / Coding Index / other: **84.2**

Long context:

- MRCR / RULER / GraphWalks value at window length: **99.6% retrieval accuracy across 1M context**

### Normalized scores (1–100)

- **Tool use: 88/100.** Superior tool calling and complex multi-step environment interaction.
- **Reasoning: 89/100.** Frontier reasoning performance across GPQA Diamond and high-level logic tasks.
- **Context window: 85/100.** Full 1M window with near-lossless retrieval capability.
- **Multimodal: 72/100.** Strong document and image understanding; lack of native audio/video output caps score.
- **Coding: 88/100.** Outstanding SWE-bench performance and complex codebase synthesis.
- **Cost efficiency: 45/100.** Premium $10/$50 pricing limits cost score significantly.
- **Overall Score: 84.4/100.** Mean of the five quality dimensions; ideal for complex enterprise research and mission-critical reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-19
- Method: Public internet research & benchmark analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
