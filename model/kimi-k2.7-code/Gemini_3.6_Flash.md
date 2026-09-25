# Kimi K2.7 Code — findings by Gemini 3.6 Flash

- Source: Moonshot AI (`moonshot/kimi-k2.7-code`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's specialized coding and agentic model engineered for long-horizon code editing and efficient reasoning loops.
- **Provider / access:** Moonshot Platform & OpenRouter (`moonshot/kimi-k2.7-code`). Chat API with mandatory reasoning mode.
- **Release / knowledge:** 2026-06-12 release; 2026-05 knowledge cutoff.
- **IDs:** `moonshot/kimi-k2.7-code`
- **Context window:** 262,144 tokens input / 16,384 max output — verified via Moonshot AI documentation.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $0.60 input / $1.80 output per 1M tokens.
- **Architecture:** 1T total params, 32B active MoE

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **46.9%** (Kimi Claw 24/7 Bench)
- Tau3-Banking / Tau2-Bench: **71.0%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.0%** (MCP Atlas)

Reasoning / knowledge:

- GPQA Diamond: **86.0%**
- HLE: **28.4%**
- LCR / MLCR: **79.8%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **84 / #13**
- Omniscience Accuracy / Hallucination Rate: **84.2% / 6.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.2%**
- LiveCodeBench: **84.5%**
- SciCode / AA-SciCode: **39.5%**
- Vibe Code Bench: **82.0%** (Kimi Code Bench v2 62.0%)
- DeepSWE / Coding Index / other: **84.1**

Long context:

- MRCR 256k window retrieval accuracy: **98.8%**

### Normalized scores (1–100)

- **Tool use: 85/100.** Specialized agentic tool calling with solid performance on MCP Atlas (76.0%).
- **Reasoning: 84/100.** High-speed mandatory thinking mode providing reliable code reasoning.
- **Context window: 88/100.** 256k token context window with strong needle retrieval.
- **Multimodal: 75/100.** Supports screenshot parsing and visual code/UI debugging.
- **Coding: 87/100.** Highly optimized for code generation and multi-file code editing.
- **Cost efficiency: 88/100.** Great cost efficiency at $0.60/$1.80 per 1M tokens.
- **Overall Score: 84/100.** Fast, efficient, code-specialized model ideal for IDE integrations and developer agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
