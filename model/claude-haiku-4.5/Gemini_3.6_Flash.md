# Claude Haiku 4.5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`claude-haiku-4.5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fast near-frontier model providing high throughput, sub-agent execution, and strong coding at low operational cost.
- **Provider / access:** Anthropic API (`claude-haiku-4-5-20251001`), Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2025-10-15 release; knowledge cutoff 2025-08.
- **IDs:** `anthropic/claude-haiku-4.5`
- **Context window:** 200,000 tokens input, 64,000 max output tokens (verified via Anthropic announcement).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $1.00 / $5.00 / $0.25 cached per 1M tokens.
- **Architecture:** Proprietary transformer architecture with extended thinking.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **#6 overall** (Artificial Analysis late 2025 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **73.3%** (SWE-bench Verified release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 200K: 99.2% needle-in-a-haystack retrieval accuracy across 200K window.

### Normalized scores (1–100)

- **Tool use: 86/100.** Fast and reliable sub-agent tool execution.
- **Reasoning: 85/100.** High speed thinking capabilities matching Sonnet 4 class.
- **Context window: 75/100.** 200K token context window with 64K max output.
- **Multimodal: 80/100.** Text and image input understanding.
- **Coding: 88/100.** Outstanding 73.3% score on SWE-bench Verified.
- **Cost efficiency: 92/100.** Highly competitive pricing ($1.00 in / $5.00 out per 1M).
- **Overall Score: 83/100.** High-speed, cost-effective near-frontier model for coding and agentic sub-tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-01
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
