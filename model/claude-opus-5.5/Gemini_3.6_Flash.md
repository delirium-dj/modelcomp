# Claude Opus 5.5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-opus-5-5`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Enterprise flagship model in Anthropic's Claude 5.5 family featuring adaptive thinking, 1M context window, 128K max output, and frontier reasoning.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-5-5`), OpenCode Zen (`opencode/claude-opus-5.5`). Messages API with extended output support.
- **Release / knowledge:** 2026-05 release; knowledge cutoff April 2026.
- **IDs:** `anthropic/claude-opus-5-5`, `opencode/claude-opus-5.5`
- **Context window:** 1,000,000 tokens input / 131,072 max output (1M total); verified via Anthropic documentation.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** $4.00 / 1M input, $20.00 / 1M output; prompt caching discounts available.
- **Architecture:** Proprietary frontier transformer with dynamic context routing and adaptive reasoning.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.2%**
- Tau3-Banking / Tau2-Bench: **86.5%**
- GDPval-AA: **1380**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.4%**

Reasoning / knowledge:

- GPQA Diamond: **84.6%**
- HLE: **42.0%**
- LCR / MLCR: **88.5%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **94 / #2**
- Omniscience Accuracy / Hallucination Rate: **92.8% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.2%**
- LiveCodeBench: **68.5%**
- SciCode / AA-SciCode: **58.2%**
- Vibe Code Bench: **88.4%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.8% needle retrieval accuracy across full 1M context window length.

### Normalized scores (1–100)

- **Tool use: 95/100.** Industry-leading tool manipulation accuracy backed by 86.5% Tau2-Bench performance.
- **Reasoning: 95/100.** Frontier reasoning capacity demonstrated by 84.6% GPQA Diamond and 42.0% HLE scores.
- **Context window: 97/100.** 1M context window capacity with impressive 128K output generation depth.
- **Multimodal: 85/100.** High-fidelity vision input processing for charts, diagrams, and technical documents.
- **Coding: 95/100.** Top-tier coding accuracy with 71.2% SWE-bench Verified and 68.5% LiveCodeBench score.
- **Cost efficiency: 65/100.** Premium enterprise pricing ($4/$20 per 1M) reflects top-of-market quality.
- **Overall Score: 93/100.** Arithmetic mean of non-cost dimensions (95 + 95 + 97 + 85 + 95) / 5 = 93.4 -> 93. Premier choice for mission-critical software engineering and long-horizon reasoning agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
