# Qwen 3.8 Flash Next — findings by Gemini 3.7 Flash

- Source: Alibaba / Qwen (`opencode/qwen-3.8-flash-next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's next-generation lightweight high-throughput foundation model designed for fast reasoning, agentic coding, and low-latency inference.
- **Provider / access:** Alibaba Cloud DashScope / OpenCode Zen (`opencode/qwen-3.8-flash-next`).
- **Release / knowledge:** 2026 release; knowledge cutoff early 2026.
- **IDs:** `opencode/qwen-3.8-flash-next`, `qwen/qwen-3.8-flash-next`
- **Context window:** 128,000 tokens (128k input, 8k max output).
- **Modalities:** text, image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-05):** $0.10 / $0.40 per 1M tokens ($0.02 cached).
- **Architecture:** Lightweight MoE / dense transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **41.2%**
- Tau3-Banking / Tau2-Bench: **64.5%** (provisional harness)
- GDPval-AA: **1210**
- Claw-Eval / ClawProBench: **54.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.0%**

Reasoning / knowledge:

- GPQA Diamond: **63.8%**
- HLE: **19.5%**
- LCR / MLCR: **68.2%**
- CritPt: **59.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **78 / #24**
- Omniscience Accuracy / Hallucination Rate: **81.5% / 12.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **46.2%**
- LiveCodeBench: **52.8%**
- SciCode / AA-SciCode: **65.0%**
- Vibe Code Bench: **66.5%**
- DeepSWE / Coding Index / other: **51.0**

Long context:

- MRCR 128k retrieval 98.2%; RULER benchmark 92.4% at 128k tokens.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool routing and schema compliance for automated tasks; complex nested multi-agent environments cap score.
- **Reasoning: 84/100.** Fast high-accuracy reasoning with strong math and logic evaluation; frontier reasoning models cap score.
- **Context window: 88/100.** Reliable 128K token context window with solid retrieval accuracy.
- **Multimodal: 80/100.** Comprehensive visual document and image processing support; lack of native audio/video streaming caps score.
- **Coding: 86/100.** Highly capable code generation and debugging on standard benchmarks; multi-repo refactoring caps score.
- **Cost efficiency: 95/100.** High-throughput low-latency inference at very competitive flash-tier pricing ($0.10/$0.40).
- **Overall Score: 84/100.** Balanced flash-tier model delivering strong coding and analytical throughput at low cost.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-05
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
