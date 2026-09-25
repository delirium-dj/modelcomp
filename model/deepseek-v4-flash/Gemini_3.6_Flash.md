# DeepSeek V4 Flash — findings by Gemini 3.6 Flash

- Source: DeepSeek (`deepseek/deepseek-v4-flash`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's open-weights high-efficiency MoE language model optimized for ultra-fast coding and reasoning.
- **Provider / access:** DeepSeek API & OpenRouter (`deepseek/deepseek-v4-flash`). MIT license.
- **Release / knowledge:** 2026-07-31 release; 2026-06 knowledge cutoff.
- **IDs:** `deepseek/deepseek-v4-flash`
- **Context window:** 1,048,576 tokens input / 16,384 max output — verified via DeepSeek documentation.
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $0.15 input / $0.60 output per 1M tokens (hosted API); $0 (open weights).
- **Architecture:** 284B total params, 13B active MoE (MIT license)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.5%**
- Tau3-Banking / Tau2-Bench: **68.0%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.5%**

Reasoning / knowledge:

- GPQA Diamond: **88.1%**
- HLE: **26.4%**
- LCR / MLCR: **81.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **85 / #12**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 5.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **79.0%**
- LiveCodeBench: **91.6%**
- SciCode / AA-SciCode: **41.0%**
- Vibe Code Bench: **83.5%**
- DeepSWE / Coding Index / other: **85.0**

Long context:

- MRCR 1M window retrieval accuracy: **98.8%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid agentic tool invocation and multi-step reasoning capabilities.
- **Reasoning: 88/100.** High-level reasoning supported by an 88.1% score on GPQA Diamond.
- **Context window: 95/100.** Massive 1M token context window support.
- **Multimodal: 15/100.** Text-only model base; 15/100 per project scoring methodology.
- **Coding: 89/100.** Exceptional coding performance (79.0% SWE-bench Verified, 91.6% LiveCodeBench).
- **Cost efficiency: 98/100.** Extremely low hosted cost ($0.15/$0.60 per 1M) and free open weights.
- **Overall Score: 74/100.** Outstanding value, text-only open-weights model for fast coding and deep technical reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
