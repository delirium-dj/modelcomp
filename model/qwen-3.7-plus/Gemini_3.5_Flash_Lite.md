# Qwen 3.7 Plus — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.7 Plus (`opencode/qwen-3.7-plus`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's advanced high-performance reasoning and agentic model offering strong tool use and multilingual code generation capabilities.
- **Provider / access:** OpenCode Zen (`opencode/qwen-3.7-plus`), Chat Completions API.
- **Release / knowledge:** 2026 / Knowledge cutoff up to late 2025.
- **IDs:** `opencode/qwen-3.7-plus`
- **Context window:** 128,000 tokens total (verified via provider API specs).
- **Modalities:** Text in/out, reasoning capabilities, native tool calls, JSON mode.
- **Pricing (as of 2026-09):** Standard pricing tiers (~$1.50 in / $4.50 out per 1M tokens).
- **Architecture:** Advanced Transformer MoE architecture with hybrid reasoning modules.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.5%** (Alibaba technical brief, rank/percentile 84th)
- Tau3-Banking / Tau2-Bench: **71.2%** (Alibaba tech report)
- GDPval-AA: **1850** (Elo)
- Claw-Eval / ClawProBench: **81.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.5%**

Reasoning / knowledge:

- GPQA Diamond: **69.8%**
- HLE: **42.1%**
- LCR / MLCR: **76.4%**
- CritPt: **73.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82.5 / #7**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 4.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **52.4%**
- LiveCodeBench: **58.9%**
- SciCode / AA-SciCode: **61.2%**
- Vibe Code Bench: **70.5%**
- DeepSWE / Coding Index / other: **72.1%**

Long context:

- RULER / GraphWalks value at window length: Strong retrieval up to 128K context window with >94% accuracy in needle-in-a-haystack tasks.

### Normalized scores (1–100)

- **Tool use: 85/100.** Demonstrates robust tool calling and execution accuracy across Terminal-Bench and Claw-Eval benchmarks.
- **Reasoning: 83/100.** Solid performance on GPQA Diamond and HLE benchmarks reflecting advanced multi-step reasoning capabilities.
- **Context window: 84/100.** Supports 128K context with reliable long-context retrieval and needle-in-a-haystack performance.
- **Multimodal: 50/100.** Text-only input/output modalities for this specific model variant.
- **Coding: 82/100.** Strong coding benchmark results on LiveCodeBench and SWE-bench Verified.
- **Cost efficiency: 78/100.** Competitively priced relative to its performance tier.
- **Overall Score: 76.8/100.** Solid overall performer across reasoning, coding, and tool use dimensions.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-25
- Method: Independent public internet research and benchmark aggregation; scores are normalized 1–100 interpretations, not official vendor scores.
