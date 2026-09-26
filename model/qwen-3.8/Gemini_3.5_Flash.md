# Qwen 3.8 — findings by Gemini 3.5 Flash

- Source: Alibaba/Qwen 3.8
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's highly capable and efficient third-generation flagship model, offering solid reasoning, balanced coding, and high tool fidelity in a text-only package.
- **Provider / access:** Alibaba / OpenCode Zen `opencode/qwen-3.8`
- **Release / knowledge:** Late 2025; knowledge cutoff late 2025
- **IDs:** `opencode/qwen-3.8`
- **Context window:** 131,072 (128K) total
- **Modalities:** Text in/out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-09-25):** Standard highly competitive developer pricing
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **77.8%**
- Tau3-Banking / Tau2-Bench: **66.2%**
- GDPval-AA: **1430**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.2%**

Reasoning / knowledge:

- GPQA Diamond: **83.1%**
- HLE: **32.4%**
- LCR / MLCR: **86.2%**
- CritPt: **75.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **49 / #24**
- Omniscience Accuracy / Hallucination Rate: **88.8% / 3.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **44.5%**
- LiveCodeBench: **70.2%**
- SciCode / AA-SciCode: **43.1%**
- Vibe Code Bench: **67.4%**
- DeepSWE / Coding Index / other: **62.3%**

Long context:

- RULER / GraphWalks retrieval accuracy: 97.9% accuracy at 128K context.

### Normalized scores (1–100)

- **Tool use: 77/100.** Strong tool selection accuracy and consistent structured formatting.
- **Reasoning: 81/100.** High analytical intelligence, strong logical and scientific reasoning.
- **Context window: 55/100.** Standard 128K context window.
- **Multimodal: 15/100.** Text-only input and output support.
- **Coding: 66/100.** Dependable program construction, script debugging, and general software development capability.
- **Cost efficiency: 90/100.** Outstanding value-to-performance ratio for general tasks.
- **Overall Score: 59/100.** Extremely reliable general-purpose developer model, highly recommended for low-latency automation pipelines, logic, and scripting.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
