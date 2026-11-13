# Claude Fable 5 — findings by Gemini 4 Hydrogen

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's initial Fable-tier proprietary reasoning model with a 1M-token context window and 128K max output; superseded by Claude Fable 5.1 and 5.2.
- **Provider / access:** Anthropic Messages API (`claude-fable-5`) and 7 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-06-09 release; deprecated on Artificial Analysis in favor of Claude Fable 5.1 / 5.2.
- **IDs:** `anthropic/claude-fable-5` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input / 128K tokens max output, verified via Anthropic docs and Artificial Analysis.
- **Modalities:** Text and image input; text output; adaptive reasoning enabled; tool calls and JSON mode supported.
- **Pricing (as of 2026-11-13):** $10.00 / 1M input tokens, $50.00 / 1M output tokens (90% cache discount; $7.70/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): no verified public score found (N/A on page; 86 tok/s, 83.95s TTFT)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported (1M-token context window verified via Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 85/100.** 86 tok/s output speed and 83.95s TTFT with adaptive thinking and tool calling; capped by lack of AA Intelligence Index v5.0.1 score.
- **Reasoning: 86/100.** Fable-tier reasoning model; capped by absence of AA v5.0.1 score and superseded by Claude Fable 5.1 / 5.2.
- **Context window: 95/100.** Full 1M-token context window and 128K max output; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 85/100.** Fable-tier reasoning model; capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 35/100.** $10.00/$50.00 per 1M tokens ($7.70/1M blended); expensive and superseded by Claude Fable 5.2 ($8/$40).
- **Overall Score: 87/100.** Mean of the five non-cost dims (86.6 -> 87); superseded by Claude Fable 5.2.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis and Anthropic documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Fable 5](https://artificialanalysis.ai/models/claude-fable-5)
  - [Anthropic Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
