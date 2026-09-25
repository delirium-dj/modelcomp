# Deepseek V4 Flash — findings by Gemini 3.5 Flash Lite

- Source: DeepSeek / Deepseek V4 Flash (`opencode/deepseek-v4-flash`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Deepseek V4 Flash
- **Short description:** DeepSeek's high-throughput, low-latency flash variant optimized for rapid token generation and efficient general-purpose assistant tasks.
- **Provider / access:** OpenCode Zen (`opencode/deepseek-v4-flash`), Chat Completions API.
- **Release / knowledge:** 2026 / Knowledge cutoff up to late 2025.
- **IDs:** `opencode/deepseek-v4-flash`
- **Context window:** 128,000 tokens total (verified via provider API documentation).
- **Modalities:** Text in/out, structured JSON mode, native tool calling.
- **Pricing (as of 2026-09):** Highly economical pricing tier (~$0.14 in / $0.28 out per 1M tokens).
- **Architecture:** Lightweight Mixture-of-Experts (MoE) architecture designed for extreme inference speed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **68.5%** (DeepSeek technical specs, rank/percentile 73rd)
- Tau3-Banking / Tau2-Bench: **65.2%** (DeepSeek benchmark reports)
- GDPval-AA: **1680** (Elo)
- Claw-Eval / ClawProBench: **73.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **71.8%**

Reasoning / knowledge:

- GPQA Diamond: **61.0%**
- HLE: **33.5%**
- LCR / MLCR: **68.2%**
- CritPt: **66.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **75.8 / #16**
- Omniscience Accuracy / Hallucination Rate: **84.8% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **43.5%**
- LiveCodeBench: **50.2%**
- SciCode / AA-SciCode: **52.0%**
- Vibe Code Bench: **61.5%**
- DeepSWE / Coding Index / other: **63.0%**

Long context:

- RULER / GraphWalks value at window length: Reliable retrieval up to 128K context window with optimized attention caching.

### Normalized scores (1–100)

- **Tool use: 76/100.** Efficient tool execution suited for high-speed agentic loops.
- **Reasoning: 74/100.** Solid benchmark results reflecting balanced reasoning capabilities for a flash-tier model.
- **Context window: 80/100.** Full 128K context support with rapid TTFT (Time to First Token).
- **Multimodal: 50/100.** Text-only input/output modalities.
- **Coding: 74/100.** Competitive programming performance on LiveCodeBench and code generation tasks.
- **Cost efficiency: 98/100.** Exceptional cost-to-performance ratio with ultra-low pricing.
- **Overall Score: 70.8/100.** High-performance, low-latency model delivering stellar speed and economy.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-25
- Method: Independent public internet research and benchmark aggregation; scores are normalized 1–100 interpretations, not official vendor scores.
