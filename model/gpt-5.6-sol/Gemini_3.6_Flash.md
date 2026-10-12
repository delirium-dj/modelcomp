# GPT-5.6 Sol — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.6-sol` / `gpt-5.6-sol`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship frontier model in the GPT-5.6 series, engineered for high-precision autonomous coding, complex reasoning, and agentic workflows.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`), Azure OpenAI Service, OpenCode Zen (`opencode/gpt-5.6-sol`). Responses and Chat Completions API.
- **Release / knowledge:** 2026-07-09 release; early 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.6-sol`, `opencode/gpt-5.6-sol`
- **Context window:** 1,050,000 tokens input / 128,000 max output tokens — verified via OpenAI developer documentation.
- **Modalities:** text, image in; text out; reasoning yes (configurable effort: none to max); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $4.00 input / $20.00 output / $0.40 cached per 1M tokens ($3.00/$15.00 promotional standard tier).
- **Architecture:** Proprietary multimodal foundation model with test-time reasoning compute.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (DataCamp / independent evaluation)
- Coding Agent Index: **80** (Artificial Analysis v1.1, max reasoning)
- GDPval-AA: **1385 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **72.4%** (MCP Atlas)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.6%**
- HLE: **46.8%** (Humanity's Last Exam)
- Artificial Analysis Intelligence Index / BenchLM overall: **59** (Intelligence Index snapshot)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.2%** (SWE-bench Verified) / **64.6%** (SWE-bench Pro)
- LiveCodeBench: **2850 Elo**
- SciCode / AA-SciCode: **56.8%**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **78.4%** (Coding Index)

Long context:

- RULER / Needle In A Haystack: **99.5%** retrieval accuracy across full 1,050,000-token context window.

### Normalized scores (1–100)

- **Tool use: 93/100.** Premier terminal and agent execution evidenced by 88.8% on Terminal-Bench 2.1 and an 80 score on Artificial Analysis Coding Agent Index.
- **Reasoning: 93/100.** Elite scientific deduction and complex problem solving backed by 94.6% on GPQA Diamond and 46.8% on Humanity's Last Exam.
- **Context window: 95/100.** Verified 1.05M token input window with 128K token output generation limit.
- **Multimodal: 80/100.** High-resolution multimodal perception for charts, diagrams, and technical documents with text output.
- **Coding: 89/100.** Strong full-repository engineering highlighted by 80.2% on SWE-bench Verified and 64.6% on SWE-bench Pro.
- **Cost efficiency: 65/100.** Flagship pricing ($4.00/$20.00 standard, $0.40 cached) balanced by high token efficiency on complex tasks.
- **Overall Score: 90/100.** Top-tier workhorse flagship for long-horizon agentic software development and complex scientific reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across OpenAI technical disclosures, Artificial Analysis leaderboards, and independent benchmark evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
