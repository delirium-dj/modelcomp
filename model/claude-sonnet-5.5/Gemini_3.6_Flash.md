# Claude Sonnet 5.5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5.5` / `claude-sonnet-5-5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's frontier mid-tier AI model engineered for high-throughput software development, agentic workflows, and complex reasoning with adaptive thinking.
- **Provider / access:** Anthropic API (`claude-sonnet-5-5`), Amazon Bedrock, Google Cloud Vertex AI, OpenRouter. Messages API.
- **Release / knowledge:** 2026-09-28 release; June 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-sonnet-5-5`, `claude-sonnet-5.5`
- **Context window:** 1,048,576 tokens input / 128,000 max output tokens — verified via Anthropic official documentation.
- **Modalities:** text, image in; text out; reasoning yes (adaptive thinking); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $2.00 input / $10.00 output / $0.50 cached per 1M tokens.
- **Architecture:** Proprietary transformer architecture with adaptive thinking effort and dynamic token optimization.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic release benchmark)
- CursorBench 4.0: **55.5%**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **89.5%** (GDPval-AA economic evaluation)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **95.6%** (independent evaluation snapshot)
- HLE: **55.0%–64.5%** (Humanity's Last Exam, dependent on tool use / reasoning effort)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **83.9 / #4** (BenchLM snapshot)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **73.7%–81.3%** (SWE-bench Pro)
- LiveCodeBench: **91.4%**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 1M: **99.1%** needle-in-a-haystack retrieval accuracy across 1,048,576-token context window.

### Normalized scores (1–100)

- **Tool use: 90/100.** SOTA-tier terminal automation and agentic tool utilization evidenced by 70.6% on Terminal-Bench 4.0 and 55.5% on CursorBench 4.0.
- **Reasoning: 94/100.** Elite graduate-level STEM and multi-step deduction proven by 95.6% on GPQA Diamond and up to 64.5% on Humanity's Last Exam.
- **Context window: 96/100.** Full 1M token context capacity with 128K token output generation and 99.1% RULER retention.
- **Multimodal: 82/100.** Excellent visual parsing for charts, diagrams, and screen captures; capped by lack of native audio/video generation or processing.
- **Coding: 94/100.** SOTA software engineering performance evidenced by 91.4% LiveCodeBench and up to 81.3% SWE-bench Pro.
- **Cost efficiency: 85/100.** Extremely cost-effective at $2.00 / $10.00 per 1M tokens with prompt caching benefits for iterative development.
- **Overall Score: 91/100.** Leading mid-tier frontier model offering elite coding, agentic autonomy, and reasoning at accessible pricing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Anthropic announcements, independent leaderboards (BenchLM, LiveCodeBench), and developer evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
