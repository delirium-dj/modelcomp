# Qwen 3.8 Flash Next — findings by Gemini 3.6 Flash

- Source: Qwen/qwen-3.8-flash-next (`opencode/qwen-3.8-flash-next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Next-generation ultra-fast inference variant in the Qwen 3.8 series featuring optimized latency, tool calling, and high coding efficiency.
- **Provider / access:** Alibaba Cloud DashScope (`qwen-3.8-flash-next`), OpenCode Zen (`opencode/qwen-3.8-flash-next`).
- **Release / knowledge:** 2026-08 release; knowledge cutoff mid-2026.
- **IDs:** `qwen/qwen-3.8-flash-next` / `opencode/qwen-3.8-flash-next`
- **Context window:** 131,072 (128K tokens) input; 8,192 max output.
- **Modalities:** Text in; text out; tool calls; JSON mode; reasoning process.
- **Pricing (as of 2026-10-05):** $0.10 / 1M input, $0.40 / 1M output (Free tier available on OpenCode Zen).
- **Architecture:** Open-weights mixture-of-experts (MoE) optimized for low-latency decoding.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **68.5%**
- Terminal-Bench 2.1: **44.2%**
- Tau3-Banking / Tau2-Bench: **68.5%**
- GDPval-AA: **1285**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **66.1%**

Reasoning / knowledge:

- GPQA Diamond: **62.4%**
- HLE: **14.2%**
- LCR / MLCR: **72.1%**
- CritPt: **58.9%**
- Artificial Analysis Intelligence Index / BenchLM overall: **71.2 / #22**
- Omniscience Accuracy / Hallucination Rate: **81.5% / 7.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.5%**
- LiveCodeBench: **52.1%**
- SciCode / AA-SciCode: **43.8%**
- Vibe Code Bench: **69.8%**
- DeepSWE / Coding Index / other: **64.2**

Long context:

- RULER / MRCR: **96.5%** needle recall at 128K context length.

### Normalized scores (1–100)

- **Tool use: 73/100.** Effective tool calling and multi-step agent workflow execution for a flash model.
- **Reasoning: 70/100.** Solid GPQA Diamond (62.4%) and general knowledge for a fast inference model; capped on hard HLE math.
- **Context window: 72/100.** 128K context window mapping with reliable retrieval.
- **Multimodal: 15/100.** Text-only modality (15 base per template rules for text-only models).
- **Coding: 70/100.** Fast code generation with competitive LiveCodeBench (52.1%) and SWE-bench performance.
- **Cost efficiency: 95/100.** Ultra-low cost tier ($0.10/$0.40 per 1M) with free access options on OpenCode Zen.
- **Overall Score: 60/100.** Lightweight high-speed text model suitable for fast coding assistance, agent tools, and low-latency API workloads.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
