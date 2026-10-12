# Gemini 3.6 Flash — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`google/gemini-3.6-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google DeepMind's high-efficiency workhorse foundation model engineered for rapid agentic coding, native omnimodal comprehension, and low-latency token streaming.
- **Provider / access:** Google AI Studio, Vertex AI (`google/gemini-3.6-flash`). GenerateContent & OpenAI-compatible Chat API.
- **Release / knowledge:** 2026-07-21 release; May 2026 knowledge cutoff.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 tokens input / 65,536 max output tokens — verified via Google DeepMind documentation.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $1.50 input / $7.50 output per 1M tokens (Batch API: $0.75/$3.75; free tier quotas available).
- **Architecture:** Proprietary multimodal Mixture-of-Experts (MoE) optimized for ultra-fast generation (260–300+ tok/s).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%** (Google technical report)
- MLE-Bench: **63.9%** (autonomous machine learning engineering)
- Tau3-Banking / Tau2-Bench: **74.0%**
- GDPval-AA: **1580 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.0**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%–92.8%**
- HLE: **40.8%** (Humanity's Last Exam)
- Artificial Analysis Intelligence Index / BenchLM overall: **62.5 / #7**
- LCR / MLCR: **85.0%**
- CritPt: **72.0%**
- Omniscience Accuracy / Hallucination Rate: **93.0% / 2.2%**

Coding:

- LiveCodeBench: **88.1%**
- SWE-bench Verified / SWE-Pro: **58.7%** (SWE-bench Pro) / **74.5%** (Verified)
- DeepSWE / Coding Index / other: **49.0%** (DeepSWE v1.1)
- SciCode / AA-SciCode: **54.0%**
- Vibe Code Bench: **62.0%**

Long context:

- MRCR / RULER: **99.0%** retrieval accuracy across full 1,048,576-token context window.

### Normalized scores (1–100)

- **Tool use: 86/100.** Fast and reliable agentic tool execution evidenced by 78.0% on Terminal-Bench 2.1 and 63.9% on MLE-Bench.
- **Reasoning: 90/100.** High-tier academic reasoning backed by up to 92.8% on GPQA Diamond and 40.8% on Humanity's Last Exam.
- **Context window: 95/100.** Verified 1M token input context with 65K max output and 99.0% long-context retrieval retention.
- **Multimodal: 90/100.** Native omnimodal ingest handling text, high-resolution imagery, audio, and video frame sequences with text output.
- **Coding: 86/100.** Strong competitive programming and repository tasks highlighted by 88.1% on LiveCodeBench and 58.7% on SWE-bench Pro.
- **Cost efficiency: 90/100.** Outstanding throughput (260–300+ tok/s) paired with competitive $1.50 / $7.50 per 1M pricing and accessible free tier.
- **Overall Score: 89/100.** High-speed omnimodal workhorse model delivering balanced frontier coding, reasoning, and tool execution.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Google DeepMind release documentation, Artificial Analysis benchmarks, and developer evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
