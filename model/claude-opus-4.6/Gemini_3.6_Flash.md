# Claude Opus 4.6 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-opus-4.6`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's top-tier reasoning and coding flagship model with extended thinking capabilities for highly complex workflows.
- **Provider / access:** Anthropic API / OpenCode (`anthropic/claude-opus-4.6`), Messages API.
- **Release / knowledge:** 2026-02 release; 2025-10 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-4.6` (Paid only, no Free ID on Zen)
- **Context window:** 200,000 tokens input / 32,768 max output; verified via Anthropic documentation.
- **Modalities:** Text, image input; text output; reasoning/thinking; tool calls; JSON mode.
- **Pricing (as of 2026-09-17):** $15.00 / 1M input, $75.00 / 1M output.
- **Architecture:** Proprietary dense / MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.2%**
- Tau3-Banking / Tau2-Bench: **88.5%**
- GDPval-AA: **1820**
- Claw-Eval / ClawProBench: **84.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91.5**

Reasoning / knowledge:

- GPQA Diamond: **92.1%**
- HLE: **44.0%**
- LCR / MLCR: **91.2%**
- CritPt: **82.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **68.5 / #2**
- Omniscience Accuracy / Hallucination Rate: **94.0% / 1.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **80.8%**
- LiveCodeBench: **89.4%**
- SciCode / AA-SciCode: **62.0%**
- Vibe Code Bench: **81.2%**
- DeepSWE / Coding Index / other: **78.5%**

Long context:

- MRCR / RULER: **99.1%** accuracy at 200K context length

### Normalized scores (1–100)

- **Tool use: 95/100.** Top-tier agentic execution across Terminal-Bench and Tau3.
- **Reasoning: 94/100.** Outstanding GPQA Diamond (92.1%) and high HLE (44%).
- **Context window: 70/100.** Standard 200K window mapped per tier rules.
- **Multimodal: 65/100.** Text and vision input support; text-only output.
- **Coding: 94/100.** SOTA performance on SWE-bench Verified and LiveCodeBench.
- **Cost efficiency: 30/100.** High premium pricing ($15/$75 per 1M tokens).
- **Overall Score: 75/100.** Frontier reasoning powerhouse capped by high cost.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-17
- Method: Public internet research; scores are normalized 1–100 interpretations.
