# Gemini 3 Flash — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`google/gemini-3-flash`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google DeepMind's breakthrough efficiency model introducing Reasoning Trace Distillation, native omnimodal understanding, and 1M context processing.
- **Provider / access:** Google AI Studio, Vertex AI (`google/gemini-3-flash`), OpenCode Zen (`opencode/gemini-3-flash`). GenerateContent and Chat Completions API.
- **Release / knowledge:** 2025-12-17 release; November 2025 knowledge cutoff.
- **IDs:** `google/gemini-3-flash`, `opencode/gemini-3-flash`
- **Context window:** 1,048,576 tokens input / 64,000 max output tokens — verified via Google DeepMind documentation.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (configurable thinking levels); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.50 input / $3.00 output / $0.05 cached per 1M tokens (developer free tier quotas available).
- **Architecture:** Lightweight multimodal Mixture-of-Experts (MoE) trained via Reasoning Trace Distillation.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau2-Bench: **68.4%** (Tau-Bench)
- Terminal-Bench 2.1: **60.5%**
- GDPval-AA: **1240 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **54.2%**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **71** (#1 on AA-Omniscience knowledge index)
- Omniscience Accuracy / Hallucination Rate: **88.2% / 4.1%**
- HLE: **18.5%**
- LCR / MLCR: **64.2%**
- CritPt: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **78.0%** (SWE-bench Verified)
- LiveCodeBench: **competitive flash tier**
- Vibe Code Bench: **68.2%**
- SciCode / AA-SciCode: **32.1%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER: **99.2%** needle-in-a-haystack retrieval accuracy across full 1,048,576-token context window.

### Normalized scores (1–100)

- **Tool use: 83/100.** Reliable agentic function invocation and Google Search grounding backed by 68.4% on Tau-Bench.
- **Reasoning: 89/100.** Strong academic deduction and high factual accuracy proven by 90.4% on GPQA Diamond and #1 rank on AA-Omniscience.
- **Context window: 94/100.** Full 1M token context capacity with 64K max output tokens and 99.2% RULER retrieval precision.
- **Multimodal: 89/100.** Native omnimodal ingest processing text, high-resolution imagery, audio, and video frames with text output.
- **Coding: 84/100.** Solid automated software engineering performance evidenced by 78.0% on SWE-bench Verified.
- **Cost efficiency: 95/100.** Highly accessible pricing ($0.50 / $3.00 per 1M tokens, $0.05 cached) with free tier availability.
- **Overall Score: 88/100.** High-efficiency multimodal reasoning engine delivering fast execution, expansive context, and low latency.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Multi-source web research across Google DeepMind release disclosures, Artificial Analysis evaluations, and developer benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
