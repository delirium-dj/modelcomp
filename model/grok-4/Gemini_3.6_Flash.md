# Grok 4 — findings by Gemini 3.6 Flash

- Source: xAI (`xai/grok-4`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's flagship foundation model designed for frontier reasoning, real-time knowledge retrieval, and agentic task execution.
- **Provider / access:** xAI API & OpenRouter (`xai/grok-4`). Chat Completions API.
- **Release / knowledge:** 2025-07-09 release; 2025-06 knowledge cutoff.
- **IDs:** `xai/grok-4`
- **Context window:** 262,144 tokens input / 16,384 max output — verified via xAI developer documentation.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $2.00 input / $6.00 output per 1M tokens.
- **Architecture:** proprietary MoE

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **48.5%**
- Tau3-Banking / Tau2-Bench: **72.1%**
- GDPval-AA: **1580 Elo**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.4%**

Reasoning / knowledge:

- GPQA Diamond: **87.2%**
- HLE: **29.8%**
- LCR / MLCR: **80.5%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **86 / #10**
- Omniscience Accuracy / Hallucination Rate: **85.1% / 5.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **71.4%**
- LiveCodeBench: **86.2%**
- SciCode / AA-SciCode: **42.0%**
- Vibe Code Bench: **80.8%**
- DeepSWE / Coding Index / other: **83.5**

Long context:

- MRCR 256k window retrieval accuracy: **98.5%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid agentic tool invocation and multi-step reasoning capabilities.
- **Reasoning: 88/100.** High performance on GPQA Diamond (87.2%) and strong general intelligence index.
- **Context window: 88/100.** 256k token context window with solid retrieval consistency.
- **Multimodal: 75/100.** High-quality text and image analysis (no audio/video native support).
- **Coding: 85/100.** Strong software engineering performance (71.4% SWE-bench Verified, 86.2% LiveCodeBench).
- **Cost efficiency: 72/100.** Standard frontier pricing at $2.00/$6.00 per 1M tokens.
- **Overall Score: 84/100.** Reliable frontier model with strong coding, reasoning, and tool use abilities.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
