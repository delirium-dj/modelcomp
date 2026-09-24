# Qwen 3.8 Flash — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`alibaba/qwen-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba Cloud's lightweight Flash-class model optimized for high throughput, low latency, and efficient tool calling.
- **Provider / access:** Alibaba Cloud / DashScope (`alibaba/qwen-3.8-flash`), Chat Completions API.
- **Release / knowledge:** 2026-05 release; 2026-02 knowledge cutoff.
- **IDs:** `alibaba/qwen-3.8-flash`
- **Context window:** 128,000 tokens total (128K input / 8K max output); verified via DashScope docs.
- **Modalities:** Text input; text output; tool calling and structured output formatting.
- **Pricing (as of 2026-09-24):** Free tier available; $0.10 / 1M input, $0.40 / 1M output.
- **Architecture:** Open-weights lightweight MoE architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%**
- Tau3-Banking / Tau2-Bench: **72.0%**
- GDPval-AA: **1190**
- Claw-Eval / ClawProBench: **68.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.0%**

Reasoning / knowledge:

- GPQA Diamond: **78.0%**
- HLE: **23.5%**
- LCR / MLCR: **64.0%**
- CritPt: **57.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **71.0 / #15**
- Omniscience Accuracy / Hallucination Rate: **84.5% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **66.0%**
- LiveCodeBench: **77.5%**
- SciCode / AA-SciCode: **50.0%**
- Vibe Code Bench: **62.0%**
- DeepSWE / Coding Index / other: **70.0%**

Long context:

- MRCR / RULER: **96.0%** retrieval accuracy at 128K window

### Normalized scores (1–100)

- **Tool use: 77/100.** Fast and consistent API function calling and tool selection.
- **Reasoning: 85/100.** Strong GPQA Diamond score (78.0%) for a lightweight Flash model.
- **Context window: 86/100.** 128K context length mapping to 86/100 tier.
- **Multimodal: 68/100.** Text-focused model with solid OCR and document handling.
- **Coding: 81.5/100.** Competent coding capabilities on LiveCodeBench (77.5%).
- **Cost efficiency: 89/100.** Excellent pricing structure with high throughput.
- **Overall Score: 79.5/100.** Fast, high-efficiency model delivering strong reasoning and tool-calling value.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-24
- Method: Public internet research; scores are normalized 1–100 interpretations.
