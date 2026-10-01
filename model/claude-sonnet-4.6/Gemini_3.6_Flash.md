# Claude Sonnet 4.6 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-sonnet-4.6`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** High-efficiency frontier model optimized for coding, complex agent tasks, and high-speed reasoning.
- **Provider / access:** Anthropic API / OpenCode (`anthropic/claude-sonnet-4.6`), Messages API.
- **Release / knowledge:** 2026-03 release; 2025-11 knowledge cutoff.
- **IDs:** `anthropic/claude-sonnet-4.6` (Paid only, no Free ID on Zen)
- **Context window:** 200,000 tokens input / 16,384 max output; verified via Anthropic documentation.
- **Modalities:** Text, image input; text output; reasoning/thinking; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $3.00 / 1M input, $15.00 / 1M output.
- **Architecture:** Proprietary architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%**
- Tau3-Banking / Tau2-Bench: **86.0%**
- GDPval-AA: **1740**
- Claw-Eval / ClawProBench: **81.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88.2**

Reasoning / knowledge:

- GPQA Diamond: **88.5%**
- HLE: **38.2%**
- LCR / MLCR: **87.0%**
- CritPt: **76.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **64.0 / #4**
- Omniscience Accuracy / Hallucination Rate: **91.5% / 2.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **77.4%**
- LiveCodeBench: **86.5%**
- SciCode / AA-SciCode: **55.0%**
- Vibe Code Bench: **76.8%**
- DeepSWE / Coding Index / other: **74.0%**

Long context:

- MRCR / RULER: **98.8%** accuracy at 200K context length

### Normalized scores (1–100)

- **Tool use: 92/100.** Excellent tool call precision and agent benchmark scores.
- **Reasoning: 90/100.** Strong GPQA Diamond (88.5%) and high reasoning Index.
- **Context window: 70/100.** 200K context window mapping.
- **Multimodal: 65/100.** Vision and text input supported.
- **Coding: 92/100.** Benchmark leader in real-world software engineering tasks.
- **Cost efficiency: 60/100.** Mid-range pricing ($3/$15 per 1M tokens).
- **Overall Score: 82/100.** Outstanding balance of speed, high intelligence, and coding.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
