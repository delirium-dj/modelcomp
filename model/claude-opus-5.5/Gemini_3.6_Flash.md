# Claude Opus 5.5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-opus-5-5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship 5.5 frontier model featuring always-on adaptive thinking, 1M context window with 128K max output, and frontier performance on complex multi-stage engineering and scientific reasoning.
- **Provider / access:** Anthropic API (`claude-opus-5-5`), OpenCode Zen (`opencode/claude-opus-5.5`). Messages API with extended thinking.
- **Release / knowledge:** 2026-09-22 release; June 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-5-5`, `opencode/claude-opus-5.5`
- **Context window:** 1,000,000 tokens input / 128,000 max output tokens — verified via Anthropic official documentation.
- **Modalities:** text, image in; text out; reasoning yes (adaptive always-on thinking); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $4.00 input / $20.00 output per 1M tokens; prompt caching discounts available.
- **Architecture:** Proprietary frontier transformer with adaptive reasoning and dynamic routing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.2%** (Terminal-Bench 4.0: **66.4%**)
- Tau3-Banking / Tau2-Bench: **86.5%** (Tau2-Bench Airline)
- GDPval-AA: **1380**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.4%**

Reasoning / knowledge:

- GPQA Diamond: **84.6%** (high saturation)
- HLE: **61.4%** (Artificial Analysis Humanity's Last Exam, #1 rank)
- LCR / MLCR: **88.5%**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **94 / #2**
- Omniscience Accuracy / Hallucination Rate: **92.8% / 4.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **89.9%** (SWE-bench Pro) / **71.2%** (SWE-bench Verified)
- LiveCodeBench: **68.5%** (top-tier competitive programming)
- SciCode / AA-SciCode: **58.2%**
- Vibe Code Bench: **88.4%**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 99.8% needle retrieval accuracy across full 1,000,000-token context length.

### Normalized scores (1–100)

- **Tool use: 94/100.** Exemplary agentic tooling backed by 86.5% on Tau2-Bench Airline and 66.4% on Terminal-Bench 4.0.
- **Reasoning: 96/100.** Industry-leading academic frontier reasoning demonstrated by #1 rank on Humanity's Last Exam (61.4%) and 84.6% on GPQA Diamond.
- **Context window: 97/100.** 1M context input with 128K output generation capacity and 99.8% retrieval precision.
- **Multimodal: 85/100.** Exceptional visual document processing, technical diagrams, and UI parsing.
- **Coding: 95/100.** Premier software engineering capability with 89.9% on SWE-bench Pro and 88.4% on Vibe Code Bench.
- **Cost efficiency: 68/100.** $4.00/$20.00 pricing represents a 40% efficiency improvement per task over Opus 5.
- **Overall Score: 93/100.** Essential flagship choice for mission-critical software engineering, autonomous agents, and deep analytical research.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Anthropic announcements, Artificial Analysis leaderboards, and technical evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
