# GPT OSS 120B — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-oss-120b`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT OSS 120B
- **Short description:** OpenAI's 117B open-weight MoE language model (5.1B active) designed for high-reasoning tasks, agentic coding, and local deployment.
- **Provider / access:** Hugging Face, vLLM & OpenRouter (`openai/gpt-oss-120b`). Apache 2.0 license.
- **Release / knowledge:** 2025-08-05 release; 2025-07 knowledge cutoff.
- **IDs:** `openai/gpt-oss-120b`
- **Context window:** 131,072 tokens input / 16,384 max output — verified via OpenAI release docs.
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $0.15 input / $0.45 output per 1M tokens (hosted API); $0 (open weights).
- **Architecture:** 117B total params, 5.1B active MoE (Apache 2.0)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **36.5%**
- Tau3-Banking / Tau2-Bench: **60.2%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **70.1%**

Reasoning / knowledge:

- GPQA Diamond: **82.0%**
- HLE: **20.5%**
- LCR / MLCR: **73.1%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **75 / #26**
- Omniscience Accuracy / Hallucination Rate: **80.5% / 6.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **41.9%** (SWE-bench Verified)
- LiveCodeBench: **76.2%**
- SciCode / AA-SciCode: **30.5%**
- Vibe Code Bench: **73.0%**
- DeepSWE / Coding Index / other: **75.4**

Long context:

- MRCR 128k window retrieval accuracy: **97.8%**

### Normalized scores (1–100)

- **Tool use: 75/100.** Competent tool calling and function execution for an open MoE model.
- **Reasoning: 82/100.** High-level CoT reasoning performance (82.0% GPQA Diamond).
- **Context window: 84/100.** 128k token context window optimized for single-GPU execution.
- **Multimodal: 15/100.** Text-only model; 15/100 per scoring methodology.
- **Coding: 78/100.** Good open-weights coding capabilities (76.2% LiveCodeBench, 41.9% SWE-bench Verified).
- **Cost efficiency: 95/100.** Free open weights under Apache 2.0 with cheap hosted API endpoints.
- **Overall Score: 67/100.** Strong, compact open-weights text model for single 80GB GPU enterprise deployments.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
