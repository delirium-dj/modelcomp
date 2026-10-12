# Gemini 3.5 Flash — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`google/gemini-3.5-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google DeepMind's high-throughput foundation model featuring native omnimodal reasoning, configurable thinking levels, and 1M context token capacity.
- **Provider / access:** Google AI Studio, Vertex AI (`google/gemini-3.5-flash`), OpenRouter. Native Gemini API and Chat Completions compatible.
- **Release / knowledge:** 2026-05-14 release; March 2026 knowledge cutoff.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,048,576 tokens input / 65,536 max output tokens — verified via Google DeepMind documentation.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (configurable thinking levels); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $1.50 input / $9.00 output per 1M tokens; developer free tier quotas available.
- **Architecture:** Proprietary multimodal Mixture-of-Experts (MoE) architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (Google technical report)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **83.6%** (MCP Atlas)
- Tau3-Banking / Tau2-Bench: **70.0%–75.0%** (Tau-bench)
- GDPval-AA: **1420 Elo**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.4%**
- HLE: **40.2%** (Humanity's Last Exam, independent validation)
- Artificial Analysis Intelligence Index / BenchLM overall: **55** (Intelligence Index v4.0)
- LCR / MLCR: **78.0%**
- CritPt: **64.0%**
- Omniscience Accuracy / Hallucination Rate: **91.0% / 3.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **78.8%** (Verified) / **55.1%** (SWE-bench Pro)
- LiveCodeBench: **87.0%–93.0%**
- DeepSWE / Coding Index / other: **65.0%**
- SciCode / AA-SciCode: **46.0%**
- Vibe Code Bench: **48.0%**

Long context:

- MRCR v2 / RULER: **98.8%** retrieval accuracy across full 1,048,576-token context window.

### Normalized scores (1–100)

- **Tool use: 86/100.** Fast agentic tool orchestration evidenced by 76.2% on Terminal-Bench 2.1 and 83.6% on MCP Atlas.
- **Reasoning: 90/100.** Solid graduate-level STEM deduction backed by 90.4% on GPQA Diamond and 40.2% on Humanity's Last Exam.
- **Context window: 95/100.** Full 1M token input capacity with 65K max output and 98.8% long-context retrieval accuracy.
- **Multimodal: 92/100.** Native omnimodal ingest handling text, high-resolution imagery, audio, and video frames.
- **Coding: 87/100.** Competitive programming and repository maintenance highlighted by up to 93.0% on LiveCodeBench and 78.8% on SWE-bench Verified.
- **Cost efficiency: 88/100.** High-speed execution with economical $1.50 / $9.00 per 1M pricing and accessible free tier.
- **Overall Score: 90/100.** High-efficiency multimodal workhorse balancing low latency, deep reasoning, and expansive context.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Google DeepMind technical disclosures, Artificial Analysis evaluations, and developer benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
