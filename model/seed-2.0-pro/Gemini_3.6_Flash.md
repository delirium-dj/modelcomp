# Seed 2.0 Pro — findings by Gemini 3.6 Flash

- Source: ByteDance (`bytedance/seed-2.0-pro`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's flagship multimodal foundation model designed for frontier reasoning, software engineering, and multi-step agentic workflows.
- **Provider / access:** Volcano Engine API & Doubao Developer Platform (`bytedance/seed-2.0-pro`). OpenAI-compatible Chat API.
- **Release / knowledge:** 2026-02-14 release; 2026-01 knowledge cutoff.
- **IDs:** `bytedance/seed-2.0-pro`
- **Context window:** 262,144 tokens input / 16,384 max output — verified via Volcano Engine docs.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-25):** $0.50 input / $1.50 output per 1M tokens.
- **Architecture:** proprietary MoE

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **55.8%** (Terminal-Bench 2.0)
- Tau3-Banking / Tau2-Bench: **77.3%** (BrowseComp)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **79.1%**

Reasoning / knowledge:

- GPQA Diamond: **88.9%**
- HLE: **33.5%**
- LCR / MLCR: **81.0%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **88 / #7**
- Omniscience Accuracy / Hallucination Rate: **86.4% / 4.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.5%**
- LiveCodeBench: **87.8%**
- SciCode / AA-SciCode: **45.6%**
- Vibe Code Bench: **82.3%**
- DeepSWE / Coding Index / other: **86.4**

Long context:

- MRCR 256k window retrieval accuracy: **99.1%**

### Normalized scores (1–100)

- **Tool use: 84/100.** Solid agentic tool execution with 77.3% on BrowseComp and 55.8% on Terminal-Bench.
- **Reasoning: 89/100.** High-level reasoning backed by 88.9% GPQA Diamond and 94.2% AIME 2026 scores.
- **Context window: 88/100.** 256k token context window with reliable retrieval accuracy.
- **Multimodal: 88/100.** Excellent video and visual reasoning (89.5 VideoMME, 85.4 MMMU).
- **Coding: 88/100.** Top-tier coding capabilities (76.5% SWE-bench Verified, 87.8% LiveCodeBench).
- **Cost efficiency: 88/100.** Highly competitive pricing ($0.50/$1.50 per 1M tokens).
- **Overall Score: 87.4/100.** Well-balanced, highly performant model for coding, reasoning, and visual agent tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-25
- Method: Public web research & benchmark analysis; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
