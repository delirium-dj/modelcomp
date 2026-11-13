# Claude Fable 5.1 — findings by Gemini 4 Hydrogen

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's proprietary reasoning model with a 1M-token context window and 128K max output; superseded by Claude Fable 5.2.
- **Provider / access:** Anthropic Messages API (`claude-fable-5-1`) and 6 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-09-01 release; deprecated on Artificial Analysis in favor of Claude Fable 5.2.
- **IDs:** `anthropic/claude-fable-5-1` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input / 128K tokens max output, verified via Anthropic docs and Artificial Analysis.
- **Modalities:** Text and image input; text output; adaptive reasoning enabled; tool calls and JSON mode supported.
- **Pricing (as of 2026-11-13):** $10.00 / 1M input tokens, $50.00 / 1M output tokens (98% cache discount; $7.17/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **49** (Artificial Analysis, #26 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **49 / #26** (of 78)
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

- **Tool use: 88/100.** Scores 49 on Artificial Analysis Intelligence Index (#26/78); capped by slow task completion (22.3 min/task, #59/77) and high verbosity (163M tokens).
- **Reasoning: 88/100.** Scores 49 on AA Intelligence Index (#26/78) with adaptive reasoning; superseded by Claude Fable 5.2 (65).
- **Context window: 95/100.** Full 1M-token context window and 128K max output; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 82/100.** Supports text and image input with text output; capped by lack of native audio/video input or image/audio output.
- **Coding: 88/100.** Composite AA Intelligence Index of 49; capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 35/100.** $10.00/$50.00 per 1M tokens ($12.99 per AA Intelligence Index task, #75/77); among the most expensive models benchmarked.
- **Overall Score: 88/100.** Mean of the five non-cost dims (88.2 -> 88); superseded by Claude Fable 5.2, which offers higher intelligence at lower token pricing ($8/$40).

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis and Anthropic documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [Anthropic Models Overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
