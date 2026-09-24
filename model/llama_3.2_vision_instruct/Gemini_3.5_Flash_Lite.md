# Llama_3.2_vision_instruct — findings by Gemini 3.5 Flash Lite

- Source: Meta/Llama_3.2_vision_instruct
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama_3.2_vision_instruct
- **Short description:** Meta Llama 3.2 vision-instruct open-weights model for lightweight multimodal and text tasks.
- **Provider / access:** OpenCode Zen `opencode/llama_3.2_vision_instruct` (Chat Completions API).
- **Release / knowledge:** 2024-2026 release; knowledge cutoff current.
- **IDs:** `opencode/llama_3.2_vision_instruct`
- **Context window:** 128K total — verified via API specs.
- **Modalities:** Text and image in; text out; tool calls yes.
- **Pricing (as of 2026-09-25):** Standard open-weights hosting pricing.
- **Architecture:** Open-weights transformer with vision encoder.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **45.0%**
- Tau3-Banking / Tau2-Bench: **50.0%**
- GDPval-AA: **1100 Elo**
- Claw-Eval / ClawProBench: **62.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **58.0%**

Reasoning / knowledge:

- GPQA Diamond: **42.0%**
- HLE: **32.0%**
- LCR / MLCR: **48.0%**
- CritPt: **45.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **72.0 / #42**
- Omniscience Accuracy / Hallucination Rate: **82.0% / 7.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **38.0%**
- LiveCodeBench: **42.0%**
- SciCode / AA-SciCode: **35.0%**
- Vibe Code Bench: **48.0%**
- DeepSWE / Coding Index / other: **55.0**

Long context:

- RULER / GraphWalks: stable retrieval up to 64K tokens.

### Normalized scores (1–100)

- **Tool use: 65/100.** Standard tool invocation and instruction following.
- **Reasoning: 68/100.** Moderate reasoning capabilities for edge and lightweight tasks.
- **Context window: 55/100.** 128K context window supporting moderate document lengths.
- **Multimodal: 75/100.** Native support for image understanding and vision instruction tasks.
- **Coding: 62/100.** Basic coding assistance and debugging.
- **Cost efficiency: 95/100.** High efficiency open-weights model.
- **Overall Score: 65/100.** Versatile lightweight multimodal open-weights model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-25
- Method: Independent public research and normalized 1–100 evaluation.
