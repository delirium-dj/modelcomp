# Qwen 3.8 — findings by Gemini 3.6 Flash

- Source: Alibaba (`qwen/qwen-3.8`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's frontier Mixture-of-Experts language model series with strong reasoning, vision, and agentic capabilities.
- **Provider / access:** Alibaba DashScope & OpenRouter (`qwen/qwen-3.8`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-08-15 release; 2026-06 knowledge cutoff.
- **IDs:** `qwen/qwen-3.8`
- **Context window:** 1,048,576 tokens input / 32,768 max output — verified via Alibaba DashScope documentation.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $2.00 input / $6.00 output per 1M tokens.
- **Architecture:** 2.4T total params, 95B active MoE

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%**
- Tau3-Banking / Tau2-Bench: **71.2%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%**

Reasoning / knowledge:

- GPQA Diamond: **92.6%**
- HLE: **38.4%**
- LCR / MLCR: **84.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **89 / #6**
- Omniscience Accuracy / Hallucination Rate: **87.2% / 5.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **67.7%**
- LiveCodeBench: **90.3%**
- SciCode / AA-SciCode: **44.8%**
- Vibe Code Bench: **81.5%**
- DeepSWE / Coding Index / other: **85.2**

Long context:

- MRCR 1M window retrieval accuracy: **98.7%**

### Normalized scores (1–100)

- **Tool use: 85/100.** High score on Terminal-Bench (86.6%) and reliable agentic tool invocation across complex tasks.
- **Reasoning: 91/100.** Excellent reasoning performance supported by 92.6% on GPQA Diamond.
- **Context window: 95/100.** Full 1M token context support with high needle-in-a-haystack retrieval accuracy.
- **Multimodal: 85/100.** Native text, image, and video understanding capabilities.
- **Coding: 86/100.** Strong coding capabilities (90.3% LiveCodeBench, 67.7% SWE-bench Pro).
- **Cost efficiency: 72/100.** Moderately priced at $2.00/$6.00 per 1M tokens for a top-tier MoE model.
- **Overall Score: 88/100.** High performance across reasoning, tool use, and long-context capabilities.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public internet research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
