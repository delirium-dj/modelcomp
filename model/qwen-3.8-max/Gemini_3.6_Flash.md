# Qwen3.8-Max — findings by Gemini 3.6 Flash

- Source: Alibaba Cloud (`alibaba/qwen3-8-max` / `qwen3.8-max-0902`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba Cloud's 2.4T-parameter Mixture-of-Experts flagship foundation model, engineered for long-horizon agentic workflows, repository-level software development, and multimodal video comprehension.
- **Provider / access:** Alibaba Cloud DashScope (`alibaba/qwen3-8-max`), Model Studio API. OpenAI and Anthropic compatible protocols.
- **Release / knowledge:** 2026-08-03 release (0902 snapshot); March 2026 knowledge cutoff.
- **IDs:** `alibaba/qwen3-8-max`, `qwen3.8-max-0902`
- **Context window:** 1,000,000 tokens input / 131,072 max output tokens (reasoning chains up to 262,144 tokens) — verified via DashScope API documentation.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $2.00 input / $6.00 output / $0.17–$0.25 cached per 1M tokens.
- **Architecture:** 2.4-trillion parameter sparse Mixture-of-Experts (MoE) activating 95 billion parameters per token.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Alibaba 0902 technical report)
- GDPval-AA: **58.6%**
- Tau3-Banking / Tau2-Bench: **47.8%** (Tau-Bench Banking)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.0%**
- Claw-Eval / ClawProBench: **76.5%**

Reasoning / knowledge:

- GPQA Diamond: **92.6%–93.7%**
- HLE: **43.1%** (Humanity's Last Exam)
- Artificial Analysis Intelligence Index / BenchLM overall: **45.4**
- LCR / MLCR: **68.0%**
- CritPt: **62.5%**
- Omniscience Accuracy / Hallucination Rate: **86.0% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **67.7%–85.6%** (SWE-bench Pro)
- LiveCodeBench: **87.9%**
- DeepSWE / Coding Index / other: **77.2%**
- SciCode / AA-SciCode: **62.0%**
- Vibe Code Bench: **71.0%**

Long context:

- MRCR / RULER: **98.4%** retrieval accuracy across full 1,000,000-token context window.

### Normalized scores (1–100)

- **Tool use: 89/100.** High-level agent orchestration highlighted by 86.6% on Terminal-Bench 2.1 and solid multi-turn tool calling on Tau-Bench.
- **Reasoning: 91/100.** Premier scientific and multidisciplinary deduction backed by up to 93.7% on GPQA Diamond, 43.1% on HLE, and 262K reasoning token chains.
- **Context window: 95/100.** Full 1M token context window with 131K output token capacity and 98.4% RULER retention.
- **Multimodal: 84/100.** Robust native perception across text, high-res images, and video frame sequences with text output.
- **Coding: 89/100.** Frontier software development capabilities demonstrated by 87.9% on LiveCodeBench and up to 85.6% on SWE-bench Pro.
- **Cost efficiency: 90/100.** Highly competitive pricing ($2.00 / $6.00 per 1M) with aggressive prompt caching discounts down to $0.17 per 1M.
- **Overall Score: 90/100.** Frontier-class MoE flagship providing exceptional value, extensive multimodal capabilities, and deep autonomous coding performance.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Alibaba Cloud DashScope technical documentation, Artificial Analysis leaderboards, and independent benchmark evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
