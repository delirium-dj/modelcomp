# GPT-6 Luna — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-6-luna`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's high-efficiency, budget-friendly foundation model designed for low-latency chat, lightweight coding, and high-volume agentic applications.
- **Provider / access:** OpenAI API, ChatGPT & GitHub Copilot (`openai/gpt-6-luna`). Chat Completions & Responses API.
- **Release / knowledge:** 2026-09-22 release; 2026-08 knowledge cutoff.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 1,050,000 tokens input / 128,000 max output — verified via OpenAI API documentation.
- **Modalities:** text, image, audio in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $0.10 input / $0.50 output per 1M tokens.
- **Architecture:** proprietary MoE

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **42.1%**
- Tau3-Banking / Tau2-Bench: **66.8%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.5%**

Reasoning / knowledge:

- GPQA Diamond: **84.5%**
- HLE: **24.1%**
- LCR / MLCR: **78.2%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **79 / #19**
- Omniscience Accuracy / Hallucination Rate: **84.0% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **61.4%**
- LiveCodeBench: **80.2%**
- SciCode / AA-SciCode: **36.4%**
- Vibe Code Bench: **76.5%**
- DeepSWE / Coding Index / other: **78.0**

Long context:

- MRCR 1M window retrieval accuracy: **98.0%**

### Normalized scores (1–100)

- **Tool use: 80/100.** Fast and reliable tool execution for lightweight multi-turn workflows.
- **Reasoning: 82/100.** Good basic reasoning with configurable reasoning effort levels up to 84.5% on GPQA Diamond.
- **Context window: 95/100.** 1.05M token context window with 128k output max.
- **Multimodal: 85/100.** Native text, image, and audio input support.
- **Coding: 81/100.** Reliable everyday coding capabilities (80.2% LiveCodeBench, 61.4% SWE-bench Verified).
- **Cost efficiency: 98/100.** Extremely cost-effective ($0.10/$0.50 per 1M tokens).
- **Overall Score: 85/100.** Outstanding value model for high-throughput, latency-sensitive applications.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
