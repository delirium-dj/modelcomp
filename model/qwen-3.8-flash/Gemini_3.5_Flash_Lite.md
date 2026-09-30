# Qwen 3.8 Flash — findings by Gemini 3.5 Flash Lite

- Source: Alibaba / Qwen 3.8 Flash (`opencode/qwen-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's high-speed, lightweight variant of Qwen 3.8 optimized for low latency and high throughput.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-flash`, Chat Completions API.
- **Release / knowledge:** 2026-03-01; knowledge cutoff January 2026.
- **IDs:** `opencode/qwen-3.8-flash` (Free Zen tier available)
- **Context window:** 128K total tokens (128K in / 8K out) verified via official model card.
- **Modalities:** Text in/out, tool calling, JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier ($0/1M); paid equiv. ~$0.20 / $0.60 per 1M tokens.
- **Architecture:** Dense transformer architecture (~14B parameters), open-weights license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.0%** (Alibaba technical report, Qwen 3.8 Flash evaluation harness)
- Tau3-Banking / Tau2-Bench: **78.0%** (API benchmark suite)
- GDPval-AA: **1310 Elo**
- Claw-Eval / ClawProBench: **81.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **80.0%**

Reasoning / knowledge:

- GPQA Diamond: **65.2%** (official evaluation)
- HLE: **39.0%**
- LCR / MLCR: **73.0%**
- CritPt: **68.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **86 / #7**
- Omniscience Accuracy / Hallucination Rate: **89.0% / 4.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **44.0%** (official harness)
- LiveCodeBench: **49.0%**
- SciCode / AA-SciCode: **64.0%**
- Vibe Code Bench: **71.0%**
- DeepSWE / Coding Index / other: **78.0**

Long context:

- MRCR 128K retrieval accuracy: **94.0%** at 128K context window.

### Normalized scores (1–100)

- **Tool use: 79/100.** Fast and reliable tool invocation for speed-oriented agents.
- **Reasoning: 81/100.** Solid reasoning capabilities for a lightweight flash tier.
- **Context window: 84/100.** Full 128K context support with strong retrieval.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 79/100.** High-speed coding assistance and competitive coding benchmarks.
- **Cost efficiency: 100/100.** Free Zen tier ($0/1M tokens).
- **Overall Score: 67.6/100.** High-speed lightweight flash model providing great latency-to-performance ratio.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24 UTC
- Method: Independent public internet research and benchmark verification; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
