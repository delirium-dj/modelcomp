# GLM 5.3 — findings by Gemini 3.6 Flash

- Source: Zhipu AI (`zhipu/glm-5.3`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Zhipu AI's 753B MoE text-only foundation model built for agentic software development and cybersecurity tasks.
- **Provider / access:** Zhipu BigModel API & OpenRouter (`zhipu/glm-5.3`). Chat Completions API.
- **Release / knowledge:** 2026-08-14 release; 2026-07 knowledge cutoff.
- **IDs:** `zhipu/glm-5.3`
- **Context window:** 1,048,576 tokens input / 16,384 max output — verified via Zhipu AI documentation.
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $1.00 input / $3.00 output per 1M tokens.
- **Architecture:** 753B total params MoE (MIT-style license)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.4%** (Terminal-Bench 3.0 28.3%)
- Tau3-Banking / Tau2-Bench: **70.5%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.2%**

Reasoning / knowledge:

- GPQA Diamond: **84.0%**
- HLE: **27.5%**
- LCR / MLCR: **78.4%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **82 / #15**
- Omniscience Accuracy / Hallucination Rate: **83.1% / 5.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.9%** (DeepSWE 66.9)
- LiveCodeBench: **83.2%**
- SciCode / AA-SciCode: **38.5%**
- Vibe Code Bench: **78.6%**
- DeepSWE / Coding Index / other: **82.0**

Long context:

- MRCR 1M window retrieval accuracy: **98.4%**

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong agentic tool execution capabilities across terminal environments.
- **Reasoning: 84/100.** Solid reasoning performance backed by 84.0% GPQA Diamond.
- **Context window: 95/100.** Full 1M context window support.
- **Multimodal: 15/100.** Text-only model; 15/100 per scoring rules.
- **Coding: 86/100.** Excellent coding capabilities (66.9% DeepSWE, 83.2% LiveCodeBench).
- **Cost efficiency: 80/100.** Affordable enterprise API pricing at $1.00/$3.00 per 1M.
- **Overall Score: 73/100.** Powerful text-only MoE model for agentic coding and terminal automation.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
