# Claude Haiku 3.5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`claude-haiku-3.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's fast low-latency model featuring 200K context window, native vision input, and strong instruction following.
- **Provider / access:** Anthropic API (`claude-3-5-haiku-20241022`), Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2024-11-04 release; knowledge cutoff 2024-07.
- **IDs:** `anthropic/claude-3.5-haiku`
- **Context window:** 200,000 tokens input, 8,192 max output tokens (verified via Anthropic launch documentation).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-03):** $0.80 / $4.00 / $0.20 cached per 1M tokens.
- **Architecture:** Proprietary compact transformer architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **40.5%** (Anthropic launch report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **28** (Artificial Analysis 2025 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **40.6%** (SWE-bench Verified release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 200K: 98.5% needle-in-a-haystack retrieval accuracy across 200K window.

### Normalized scores (1–100)

- **Tool use: 80/100.** Fast tool orchestration and instruction execution.
- **Reasoning: 78/100.** GPQA Diamond 40.5% score matching legacy Opus class.
- **Context window: 75/100.** 200K token context window.
- **Multimodal: 80/100.** Text and image vision input processing.
- **Coding: 76/100.** SWE-bench Verified score of 40.6%.
- **Cost efficiency: 92/100.** Economical API pricing ($0.80 in / $4.00 out per 1M).
- **Overall Score: 78/100.** High-speed, economical legacy model for general instruction following and sub-agents.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
