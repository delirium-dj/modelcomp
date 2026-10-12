# Claude Opus 4.8 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-opus-4.8` / `claude-opus-4-8`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model optimized for complex agentic orchestration, high-honesty calibration, and long-horizon software engineering.
- **Provider / access:** Anthropic API (`claude-opus-4-8`), Amazon Bedrock, Google Cloud Vertex AI. Messages API with extended thinking.
- **Release / knowledge:** 2026-05-28 release; February 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-4.8`, `claude-opus-4-8`
- **Context window:** 1,000,000 tokens input / 128,000 max output tokens — verified via Anthropic documentation.
- **Modalities:** text, image in; text out; reasoning yes (configurable effort controls); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $5.00 input / $25.00 output / $1.25 cached per 1M tokens.
- **Architecture:** Proprietary transformer architecture with adaptive thinking effort and dynamic subagent orchestration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Anthropic technical report)
- Tau3-Banking / Tau2-Bench: **97.7%** (Tau2-Bench Telecom) / **76.7%** (Airline)
- GDPval-AA: **1890 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **94.0**
- Claw-Eval / ClawProBench: **88.0**

Reasoning / knowledge:

- GPQA Diamond: **93.6%**
- HLE: **49.8%** (no tools) / **57.9%** (with tools)
- Artificial Analysis Intelligence Index / BenchLM overall: **72.0 / #1** (launch snapshot)
- LCR / MLCR: **93.5%**
- Omniscience Accuracy / Hallucination Rate: **96.0% / 1.1%**
- CritPt: **86.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **69.2%** (SWE-bench Pro) / **83.5%** (SWE-bench Verified)
- LiveCodeBench: **87.8%**
- SciCode / AA-SciCode: **66.0%**
- Vibe Code Bench: **85.0%**
- DeepSWE / Coding Index / other: **82.0%**

Long context:

- MRCR / RULER: **99.5%** retrieval accuracy across 1,000,000-token context window.

### Normalized scores (1–100)

- **Tool use: 93/100.** Exceptional autonomous agent execution proven by 74.6% on Terminal-Bench 2.1 and 97.7% on Tau2-Bench Telecom.
- **Reasoning: 94/100.** Top-tier scientific and philosophical deduction evidenced by 93.6% on GPQA Diamond and 57.9% on Humanity's Last Exam.
- **Context window: 95/100.** Architectural 1M token input context window with 128K token output generation and 99.5% RULER accuracy.
- **Multimodal: 82/100.** High-fidelity technical vision for architectural diagrams and scanned documents with text output.
- **Coding: 91/100.** Premier software engineering performance backed by 69.2% on SWE-bench Pro and 87.8% on LiveCodeBench.
- **Cost efficiency: 62/100.** Professional pricing ($5.00/$25.00 per 1M tokens) with prompt caching and fast-mode cost reductions.
- **Overall Score: 91/100.** Flagship model delivering elite multi-step agentic execution, high honesty, and deep repository refactoring.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Anthropic announcements, Artificial Analysis evaluations, and developer benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
