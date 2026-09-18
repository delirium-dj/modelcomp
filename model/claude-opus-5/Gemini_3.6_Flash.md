# Claude Opus 5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-opus-5`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship 5th-generation Opus model engineered for autonomous multi-hour research, extended coding tasks, and deep logical reasoning with 1M context.
- **Provider / access:** Anthropic (`anthropic/claude-opus-5`), Messages API.
- **Release / knowledge:** 2026-05 release; 2026-02 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-5` (no Zen Free ID)
- **Context window:** 1,000,000 tokens total (1M input / 128K max output); verified via Anthropic documentation.
- **Modalities:** Text, image, and PDF input; text output; computer use and tool calling supported.
- **Pricing (as of 2026-09-18):** $5.00 / 1M input, $25.00 / 1M output (Paid tier).
- **Architecture:** Proprietary frontier model architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.5%**
- Tau3-Banking / Tau2-Bench: **86.1%**
- GDPval-AA: **1420**
- Claw-Eval / ClawProBench: **84.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **82.1%**

Reasoning / knowledge:

- GPQA Diamond: **82.5%**
- HLE: **35.0%**
- LCR / MLCR: **74.5%**
- CritPt: **70.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92.1 / #3**
- Omniscience Accuracy / Hallucination Rate: **90.4% / 3.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **80.2%**
- LiveCodeBench: **89.0%**
- SciCode / AA-SciCode: **71.5%**
- Vibe Code Bench: **79.2%**
- DeepSWE / Coding Index / other: **84.1%**

Long context:

- MRCR / RULER: **98.4%** retrieval accuracy across 1M context window

### Normalized scores (1–100)

- **Tool use: 91/100.** Premier computer use, tool integration, and agentic task execution capabilities.
- **Reasoning: 92/100.** Outstanding GPQA Diamond (82.5%) and HLE scores for frontier research.
- **Context window: 90/100.** 1M token context window mapping to 90/100 tier.
- **Multimodal: 74/100.** High-fidelity document, image, and PDF visual comprehension.
- **Coding: 91/100.** Exceptional SWE-bench Verified (80.2%) and LiveCodeBench performance.
- **Cost efficiency: 38/100.** Commercial enterprise tier ($5/$25 per 1M tokens).
- **Overall Score: 87.6/100.** Premier frontier model for complex autonomous coding and long-form research.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-18
- Method: Public internet research; scores are normalized 1–100 interpretations.
