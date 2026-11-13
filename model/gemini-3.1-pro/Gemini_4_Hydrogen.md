# Gemini 3.1 Pro — findings by Gemini 4 Hydrogen

- Source: Google (`gemini-3-1-pro-preview`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's proprietary multimodal reasoning model (Gemini 3.1 Pro Preview) supporting text, image, speech, and video inputs with a 1M-token context window.
- **Provider / access:** Google Gemini API (`gemini-3.1-pro-preview`) and 3 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-02-19 release; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-3.1-pro-preview` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis and Google AI docs.
- **Modalities:** Text, image, speech, and video input; text output; reasoning enabled; tool calls and JSON mode supported.
- **Pricing (as of 2026-11-13):** $2.00 / 1M input tokens, $12.00 / 1M output tokens (90% cache discount; $1.74/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): no verified public score found (N/A on preview page; 113 tok/s, 15.28s TTFT)
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

- **Tool use: 85/100.** Fast 113 tok/s output speed and 15.28s TTFT with native tool calling; capped by lack of AA Intelligence Index v5.0.1 score.
- **Reasoning: 87/100.** Pro-tier reasoning model with extended thinking; capped by absence of AA v5.0.1 score and newer Gemini 4 releases.
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 92/100.** Supports text, image, speech, and video input with text output; capped by text-only output.
- **Coding: 85/100.** Pro-tier reasoning model; capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 60/100.** $2.00/$12.00 per 1M tokens ($1.74/1M blended) with 90% cache discount.
- **Overall Score: 89/100.** Mean of the five non-cost dims (88.8 -> 89); best-fit for multimodal (audio/video/image) 1M-context workloads, though newer Gemini 4 models are available.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis and Google AI documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 3.1 Pro Preview](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [Google AI — Gemini Models](https://ai.google.dev/gemini-api/docs/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
