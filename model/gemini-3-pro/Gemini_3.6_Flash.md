# Gemini 3 Pro — findings by Gemini 3.6 Flash

- Source: Google DeepMind (`google/gemini-3-pro-preview` / `google/gemini-3-pro`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's flagship foundation model introducing native multimodal reasoning, Deep Think test-time compute, and 1M context processing.
- **Provider / access:** Google AI Studio, Vertex AI (`google/gemini-3-pro-preview`). Native Gemini API & Chat Completions compatible.
- **Release / knowledge:** 2025-11-18 release; March 2025 knowledge cutoff.
- **IDs:** `google/gemini-3-pro-preview`, `google/gemini-3-pro`
- **Context window:** 1,048,576 tokens input / 64,000 max output tokens — verified via Google DeepMind technical disclosures.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (Deep Think); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $1.25–$2.00 input / $5.00–$12.00 output per 1M tokens (tiered pricing by prompt length and thinking mode).
- **Architecture:** Proprietary Mixture-of-Experts (MoE) multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.9% ± 2.5%** (Terminus 2 harness / High thinking) / **54.2%** (Terminal-Bench 2.0 base)
- Tau3-Banking / Tau2-Bench: **85.4%** (Tau-bench)
- GDPval-AA: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **78.2%**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Deep Think enabled)
- LM Arena (Elo): **1501 Elo** (#1 launch peak)
- HLE: **37.5%** (Humanity's Last Exam, no tools)
- ARC-AGI-2: **31.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **92 / #3**
- LCR / MLCR: **82.4%**
- Omniscience Accuracy / Hallucination Rate: **89.5% / 4.2%**
- CritPt: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **76.2%** (SWE-bench Verified)
- LiveCodeBench: **91.7%**
- Vibe Code Bench: **84.1%**
- DeepSWE / Coding Index / other: **88.6**
- SciCode / AA-SciCode: **48.3%**

Long context:

- MRCR v2 / RULER: **77.0%** at 128K; **99.4%** needle retrieval accuracy across full 1,048,576-token context window.

### Normalized scores (1–100)

- **Tool use: 87/100.** Strong agentic tool utilization evidenced by 85.4% on Tau-bench and up to 73.9% resolution on Terminal-Bench 2.1.
- **Reasoning: 91/100.** Frontier academic reasoning backed by 91.9% on GPQA Diamond, 37.5% on HLE, and a 1501 Elo launch rating on LM Arena.
- **Context window: 94/100.** Verified 1M token input capacity with 99.4% needle retention, though output capped at 64K tokens.
- **Multimodal: 92/100.** Premier omnimodal architecture processing native audio, video, high-resolution imagery, and PDFs.
- **Coding: 86/100.** Solid software engineering capabilities with 91.7% on LiveCodeBench and 76.2% on SWE-bench Verified.
- **Cost efficiency: 78/100.** Competitive developer pricing ($1.25–$2.00 / $5.00–$12.00 per 1M tokens) with scalable thinking tiers.
- **Overall Score: 90/100.** Frontier multimodal foundation model excelling at complex scientific inquiry, audio/video analysis, and long-context understanding.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Google DeepMind technical reports, Artificial Analysis leaderboards, and independent community evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
