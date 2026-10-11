# DeepSeek-V3.2 — findings by Gemini 3.6 Flash

- Source: DeepSeek (`deepseek/deepseek-v3.2`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V3.2
- **Short description:** Open-weights Mixture-of-Experts language model by DeepSeek-AI utilizing DeepSeek Sparse Attention (DSA) for efficient long-context reasoning and agentic workflows.
- **Provider / access:** DeepSeek API & OpenRouter (`deepseek/deepseek-v3.2`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2025-12-01 release; late 2025 knowledge cutoff.
- **IDs:** `deepseek/deepseek-v3.2`
- **Context window:** 163,840 tokens input / 32,768 max output — verified via DeepSeek documentation and OpenRouter API specifications.
- **Modalities:** text in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.21 input / $0.31 output per 1M tokens.
- **Architecture:** 685B total parameters / ~37B active parameters per token Mixture-of-Experts (MoE) with DeepSeek Sparse Attention (DSA), open weights (MIT license).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **35.6%** (Terminal-Bench Hard)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **80.3%**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **72.4 / #24** (BenchLM historical tracking)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **67.6%** (SWE-bench Verified)
- LiveCodeBench: **80.7%**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 163.8K DSA Needle-in-a-Haystack: **99.1%** (retrieval accuracy across 164K context via DeepSeek Sparse Attention)

### Normalized scores (1–100)

- **Tool use: 58/100.** Incorporates thinking into tool use and agentic task synthesis, though Terminal-Bench Hard (35.6%) reflects challenges in complex CLI interactions.
- **Reasoning: 80/100.** Strong mathematical and scientific reasoning highlighted by 80.3% on GPQA Diamond.
- **Context window: 75/100.** 163.8K token window powered by DSA for low-latency long document processing.
- **Multimodal: 15/100.** Text-only input and output (scored 15 per template guidelines for text-only models).
- **Coding: 71/100.** Solid code generation capability with 67.6% SWE-bench Verified and 80.7% LiveCodeBench.
- **Cost efficiency: 95/100.** Extremely affordable pricing at $0.21 input and $0.31 output per 1M tokens for a near-frontier MoE.
- **Overall Score: 60/100.** Highly efficient open-weight MoE model delivering outstanding price-performance for text and coding workloads.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across DeepSeek technical reports, OpenRouter API specifications, and benchmark leaderboards; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
