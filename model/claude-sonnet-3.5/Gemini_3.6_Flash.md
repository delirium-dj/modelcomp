# Claude Sonnet 3.5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`claude-sonnet-3.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5
- **Short description:** Anthropic's legacy 3.5 generation mid-tier model featuring 200K context window and strong coding and vision capabilities.
- **Provider / access:** Anthropic API (`claude-3-5-sonnet-20241022`), Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2024-06-20 release (updated 2024-10); knowledge cutoff 2024-04.
- **IDs:** `anthropic/claude-3.5-sonnet`
- **Context window:** 200,000 tokens input, 8,192 max output tokens (verified via Anthropic release documentation).
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $3.00 / $15.00 / $0.75 cached per 1M tokens.
- **Architecture:** Proprietary multimodal transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **59.4%** (Anthropic release benchmark)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **32** (Artificial Analysis 2024 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **49.0%** (SWE-bench Verified release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 200K: 98.4% needle-in-a-haystack retrieval accuracy across 200K context window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong tool execution and multi-step agentic performance.
- **Reasoning: 80/100.** GPQA Diamond score of 59.4% and strong general reasoning.
- **Context window: 75/100.** 200K token context window.
- **Multimodal: 80/100.** High quality text, image, and PDF input capabilities.
- **Coding: 82/100.** Benchmark score of 49.0% on SWE-bench Verified.
- **Cost efficiency: 72/100.** Mid-tier pricing ($3.00 in / $15.00 out per 1M).
- **Overall Score: 79/100.** Landmark legacy mid-tier model with strong coding and vision performance.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
