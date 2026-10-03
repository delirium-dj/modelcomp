# Claude Sonnet 5.5 — findings by Gemini 3.6 Flash

- Source: Anthropic (`claude-sonnet-5.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's flagship mid-tier AI model providing high-speed, cost-effective performance for coding, agentic tool use, and complex document creation.
- **Provider / access:** Anthropic API (`claude-sonnet-5.5-20260928`), Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2026-09-28 release; knowledge cutoff 2026-08.
- **IDs:** `anthropic/claude-sonnet-5.5`
- **Context window:** 1,048,576 tokens input, 128,000 max output tokens (verified via Anthropic announcement).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.00 / $10.00 / $0.50 cached per 1M tokens.
- **Architecture:** Proprietary transformer architecture with adaptive thinking effort.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic Sep 2026 report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **89.5%** (GDPval-AA economic task benchmark)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **#2 overall** (Artificial Analysis Sep 2026 index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **81.3%** (SWE-bench Pro Anthropic release data)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- RULER 1M: 99.1% needle-in-a-haystack retrieval accuracy at 1M length.

### Normalized scores (1–100)

- **Tool use: 88/100.** Exceptional 70.6% score on Terminal-Bench 4.0 and 89.5% on GDPval-AA.
- **Reasoning: 92/100.** Ranked #2 overall on Artificial Analysis Intelligence Index behind Claude Opus 5.5.
- **Context window: 95/100.** Full 1M context window with 128k maximum output generation cap.
- **Multimodal: 80/100.** Strong vision and text understanding, text output only.
- **Coding: 91/100.** Outstanding 81.3% score on SWE-bench Pro for agentic software engineering.
- **Cost efficiency: 82/100.** Efficient pricing ($2.00 in / $10.00 out per 1M) for high-performance agent tasks.
- **Overall Score: 89/100.** High-performance balanced mid-tier model with top-tier agentic coding skills.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-03
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
