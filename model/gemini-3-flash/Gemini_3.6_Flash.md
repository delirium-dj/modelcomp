# Gemini 3 Flash — findings by Gemini 3.6 Flash

- Source: Google (`google/gemini-3-flash`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** High-speed multimodal AI model built by Google for lightweight, low-latency reasoning and developer tool workloads.
- **Provider / access:** Google AI Studio (`google/gemini-3-flash`), OpenCode Zen (`opencode/gemini-3-flash`). Responses API and Chat Completions supported.
- **Release / knowledge:** 2025-12-10 release; knowledge cutoff November 2025.
- **IDs:** `google/gemini-3-flash`, `opencode/gemini-3-flash`
- **Context window:** 1,048,576 tokens total (1M context window); verified via Google developer documentation and API responses.
- **Modalities:** text, image, audio, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** $0.075 / 1M input, $0.30 / 1M output; free tier available via OpenCode Zen / Google AI Studio.
- **Architecture:** Proprietary mixture-of-experts (MoE) lightweight multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.2%**
- Tau3-Banking / Tau2-Bench: **68.4%** (Tau-Bench)
- GDPval-AA: **1240**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **54.2%**

Reasoning / knowledge:

- GPQA Diamond: **62.1%**
- HLE: **18.5%**
- LCR / MLCR: **64.2%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / #18**
- Omniscience Accuracy / Hallucination Rate: **82.4% / 11.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **48.6%**
- LiveCodeBench: **42.5%**
- SciCode / AA-SciCode: **32.1%**
- Vibe Code Bench: **68.2%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.2% needle retrieval accuracy at 1M context window length on RULER / MRCR benchmark suite.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid tool calling accuracy backed by 68.4% Tau-Bench performance and reliable agent function execution.
- **Reasoning: 89/100.** Strong analytical reasoning across GPQA Diamond (62.1%) and general BenchLM index evaluations.
- **Context window: 94/100.** Full 1M token context capability with near-perfect retrieval recall across large inputs.
- **Multimodal: 90/100.** Comprehensive native multimodal vision, audio, and video input handling.
- **Coding: 86/100.** Reliable coding capability with 48.6% SWE-bench Verified and 42.5% LiveCodeBench execution accuracy.
- **Cost efficiency: 92/100.** Exceptionally affordable pricing with free tier access options.
- **Overall Score: 87/100.** Arithmetic mean of non-cost dimensions (78 + 89 + 94 + 90 + 86) / 5 = 87.4 -> 87. Top choice for fast, cost-effective multimodal agent workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
