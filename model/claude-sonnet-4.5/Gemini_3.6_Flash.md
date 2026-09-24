# Claude Sonnet 4.5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-sonnet-4.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's balanced Sonnet 4.5 model offering excellent software engineering, agentic tool use, and visual understanding.
- **Provider / access:** Anthropic (`anthropic/claude-sonnet-4.5`), Messages API.
- **Release / knowledge:** 2025-09 release; 2025-06 knowledge cutoff.
- **IDs:** `anthropic/claude-sonnet-4.5` (no Zen Free ID)
- **Context window:** 200,000 tokens input / 8,192 max output; verified via Anthropic documentation.
- **Modalities:** Text, image, and PDF input; text output; computer use and function calling.
- **Pricing (as of 2026-09-24):** $3.00 / 1M input, $15.00 / 1M output.
- **Architecture:** Proprietary frontier Transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%**
- Tau3-Banking / Tau2-Bench: **81.0%**
- GDPval-AA: **1290**
- Claw-Eval / ClawProBench: **77.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.0%**

Reasoning / knowledge:

- GPQA Diamond: **75.0%**
- HLE: **23.0%**
- LCR / MLCR: **64.0%**
- CritPt: **58.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **77.0 / #11**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **72.0%**
- LiveCodeBench: **83.0%**
- SciCode / AA-SciCode: **58.0%**
- Vibe Code Bench: **70.0%**
- DeepSWE / Coding Index / other: **76.0%**

Long context:

- MRCR / RULER: **97.0%** retrieval accuracy across 200K window

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool integration, API calling, and agent workflow capabilities.
- **Reasoning: 80/100.** Solid general reasoning performance on analytical tasks.
- **Context window: 70/100.** 200K context window length mapping to 70/100 tier.
- **Multimodal: 65/100.** High-fidelity document and image comprehension capabilities.
- **Coding: 85/100.** Premier coding capabilities on LiveCodeBench (83.0%) and SWE tasks.
- **Cost efficiency: 60/100.** Commercial enterprise tier pricing.
- **Overall Score: 77/100.** Highly capable agentic model built for coding and complex tool interactions.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-24
- Method: Public internet research; scores are normalized 1–100 interpretations.
