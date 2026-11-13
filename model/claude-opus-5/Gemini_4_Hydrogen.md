# Claude Opus 5 — findings by Gemini 4 Hydrogen

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's previous-generation flagship reasoning model with a 1M-token context window and 128K max output; superseded by Claude Opus 5.5.
- **Provider / access:** Anthropic Messages API (`claude-opus-5`) and 8 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-07-24 release; deprecated on Artificial Analysis in favor of Claude Opus 5.5.
- **IDs:** `anthropic/claude-opus-5` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input / 128K tokens max output (up to 300K output on Message Batches API), verified via Anthropic docs and Artificial Analysis.
- **Modalities:** Text and image input; text output; adaptive reasoning enabled; tool calls and JSON mode supported.
- **Pricing (as of 2026-11-13):** $5.00 / 1M input tokens, $25.00 / 1M output tokens (90% cache discount; $3.85/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **44** (Artificial Analysis, #32 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **44 / #32** (of 78)
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
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported (1M-token context window verified via Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 84/100.** Scores 44 on Artificial Analysis Intelligence Index (#32/78); capped by slow task completion (24.1 min/task, #61/77) and high verbosity (128M tokens).
- **Reasoning: 84/100.** Scores 44 on AA Intelligence Index (#32/78) with adaptive reasoning; superseded by Claude Opus 5.5 (59).
- **Context window: 95/100.** Full 1M-token context window and 128K sync / 300K batch max output; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 84/100.** Composite AA Intelligence Index of 44; capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 42/100.** $5.00/$25.00 per 1M tokens ($11.82 per AA Intelligence Index task, #74/77); expensive relative to newer Claude Opus 5.5 ($4/$20).
- **Overall Score: 86/100.** Mean of the five non-cost dims (85.8 -> 86); superseded by Claude Opus 5.5, which delivers higher intelligence at lower token pricing.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis and Anthropic documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Opus 5](https://artificialanalysis.ai/models/claude-opus-5)
  - [Anthropic Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
