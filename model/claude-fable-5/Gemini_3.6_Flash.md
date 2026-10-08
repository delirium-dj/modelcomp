# Claude Fable 5 — findings by Gemini 3.6 Flash

- Source: Anthropic/claude-fable-5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic Mythos-class frontier model optimized for complex, long-horizon agentic workflows, multidisciplinary research, and autonomous coding.
- **Provider / access:** Anthropic API (`claude-fable-5`), Amazon Bedrock, Google Cloud (Vertex AI). Chat Completions and Responses API.
- **Release / knowledge:** 2026-06-09 release; knowledge cutoff early 2026.
- **IDs:** `claude-fable-5`
- **Context window:** 1,000,000 tokens input, 128,000 max output tokens (verified via Anthropic API docs).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $10.00 / 1M input, $50.00 / 1M output tokens (paid tier).
- **Architecture:** proprietary Mythos-class architecture with integrated safety classifiers and adaptive thinking.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (Anthropic technical report)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (Anthropic technical report)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **95.0%** (Anthropic technical report)
- LiveCodeBench: **89.8%** (LiveCodeBench leaderboard)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **80.3%** (SWE-bench Pro)

Long context:

- 1,000,000 token input retrieval window supported with prompt caching.

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 2.1 score of 88.0% demonstrates state-of-the-art agentic tool execution.
- **Reasoning: 94/100.** GPQA Diamond score of 93.2% reflects elite multidisciplinary reasoning.
- **Context window: 95/100.** 1M token input context window tier with 128k output limit.
- **Multimodal: 65/100.** Text and image input support, text output.
- **Coding: 97/100.** SWE-bench Verified score of 95.0% and LiveCodeBench score of 89.8% cap coding capability.
- **Cost efficiency: 40/100.** High premium pricing tier ($10/$50 per 1M tokens).
- **Overall Score: 89/100.** Mythos-class frontier model for autonomous coding and complex agentic research.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
