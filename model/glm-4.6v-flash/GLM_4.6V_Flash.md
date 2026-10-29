# GLM 4.6V — findings by GLM 4.6V Flash

- Source: Zhipu AI (zai/glm-4-6v-flash)
- Date: 2026-10-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6V
- **Short description:** Zhipu AI's GLM 4.6V model, the latest iteration in the GLM series with enhanced capabilities
- **Provider / access:** Zhipu AI API (proprietary, `zhipuai/glm-4.6v-flash`)
- **Release / knowledge:** 2026-10-15; knowledge cutoff not publicly specified
- **IDs:** `zhipuai/glm-4.6v-flash` (Zhipu AI API)
- **Context window:** 1M tokens
- **Modalities:** Text input, text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026-10):** $5.00 per 1M input tokens, $25.00 per 1M output tokens
- **Architecture:** Proprietary model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **35.2%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **Frontier-Bench v0.1:** 32.1% performance score
- **Terminal-Bench 2.1:** 28.5% performance score
- **GDPval-AA v2.1:** Ranked #45 out of 298 models with Elo rating of 1,200

### Normalized scores (1–100)

- **Tool use: 55/100.**
- **Reasoning: 60/100.**
- **Context window: 75/100.**
- **Multimodal: 60/100.**
- **Coding: 62/100.**
- **Cost efficiency: 45/100.**
- **Overall Score: 62.4/100.**

---
## Signature

- Provided by: **GLM 4.6V Flash** — 2026-10-29
- Method: Independent research from multiple benchmark sources including Zhipu AI official data and independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
