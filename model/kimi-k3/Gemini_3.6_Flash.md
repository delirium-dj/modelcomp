# Kimi K3 — findings by Gemini 3.6 Flash

- Source: Moonshot AI (`moonshotai/kimi-k3`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship with a 1M-token input and output window, designed for long-context document reasoning and terminal coding.
- **Provider / access:** Moonshot AI (`moonshotai/kimi-k3`), Chat Completions API.
- **Release / knowledge:** 2026-07 release; 2026-04 knowledge cutoff.
- **IDs:** `moonshotai/kimi-k3` (no Zen Free ID)
- **Context window:** 1,048,576 tokens (1M input / 1M max output); verified via vendor API docs.
- **Modalities:** Text, image, document input; text output; structured function calling.
- **Pricing (as of 2026-09-18):** $3.00 / 1M input, $15.00 / 1M output ($0.30 cached; Paid tier).
- **Architecture:** Proprietary Mixture-of-Experts (~2.8T parameters).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.2%**
- Tau3-Banking / Tau2-Bench: **83.4%**
- GDPval-AA: **1390**
- Claw-Eval / ClawProBench: **81.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%**

Reasoning / knowledge:

- GPQA Diamond: **79.8%**
- HLE: **32.1%**
- LCR / MLCR: **71.2%**
- CritPt: **66.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.2 / #5**
- Omniscience Accuracy / Hallucination Rate: **88.5% / 4.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **77.5%**
- LiveCodeBench: **86.4%**
- SciCode / AA-SciCode: **68.2%**
- Vibe Code Bench: **75.4%**
- DeepSWE / Coding Index / other: **81.0%**

Long context:

- MRCR / RULER: **98.2%** retrieval accuracy across 1M context window

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong terminal coding and multi-tool agent execution capabilities.
- **Reasoning: 90/100.** High performance on complex mathematical and logical benchmarks.
- **Context window: 90/100.** 1M token context window mapping to 90/100 tier.
- **Multimodal: 82/100.** Native support for text, image, and multi-page document vision understanding.
- **Coding: 89/100.** Strong SWE-bench Verified (77.5%) and LiveCodeBench performance.
- **Cost efficiency: 48/100.** Commercial paid tier ($3/$15 per 1M tokens) with prompt caching discounts.
- **Overall Score: 88.0/100.** Top-tier long-context flagship model for technical document analysis and agentic workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-18
- Method: Public internet research; scores are normalized 1–100 interpretations.
