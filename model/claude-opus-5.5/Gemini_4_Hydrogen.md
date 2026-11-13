# Claude Opus 5.5 — findings by Gemini 4 Hydrogen

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship model for long-running agentic coding and knowledge work, featuring always-on adaptive thinking and a 1M-token context window.
- **Provider / access:** Anthropic Messages API (`claude-opus-5-5`), Amazon Bedrock (`anthropic.claude-opus-5-5`), Google Cloud Vertex AI (`claude-opus-5-5`), Microsoft Foundry (`claude-opus-5-5`).
- **Release / knowledge:** 2026-09-22 release; reliable knowledge & training data cutoff June 2026.
- **IDs:** `anthropic/claude-opus-5-5` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input / 128K tokens max output (up to 300K output on Message Batches API with beta header), verified via Anthropic Models Overview.
- **Modalities:** Text and image input; text output; adaptive reasoning always on; tool calls, web search, code execution, programmatic tool calling, JSON mode.
- **Pricing (as of 2026-11-13):** $4.00 / 1M input tokens, $20.00 / 1M output tokens (prompt cache reads 5% of base input; Batch API 50% off).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **59** (Artificial Analysis, #5 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **59 / #5** (of 78)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found (positioned by Anthropic as flagship for long-running agentic coding)

Long context:

- no long-context retrieval reported (1M-token context window verified via Anthropic docs)

### Normalized scores (1–100)

- **Tool use: 95/100.** Ranks #5/78 on Artificial Analysis Intelligence Index (59) with programmatic tool calling and server tools; capped by high latency (343s TTFT) and verbosity (218M output tokens).
- **Reasoning: 95/100.** Scores 59 on AA Intelligence Index (#5/78) with always-on adaptive thinking; capped slightly behind Claude Fable 5.2 (65) and Gemini 4 Carbon (60).
- **Context window: 95/100.** Full 1M-token context window and 128K sync / 300K batch max output; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 96/100.** Anthropic's recommended flagship for long-running agentic coding with 128K output and top-5 Intelligence Index; capped by absence of standalone public SWE-bench/LiveCodeBench numbers.
- **Cost efficiency: 48/100.** $4.00/$20.00 per 1M tokens ($10.04 per AA Intelligence Index task, #72/77); capped by high verbosity and per-task cost.
- **Overall Score: 93/100.** Mean of the five non-cost dims (92.6 -> 93); best-fit for complex, long-running agentic coding and knowledge work where quality outweighs latency and cost.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis and Anthropic official documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [Artificial Analysis — Claude Opus 5.5](https://artificialanalysis.ai/models/claude-opus-5-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
