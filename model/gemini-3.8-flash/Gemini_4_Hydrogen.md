# Gemini 3.8 Flash — findings by Gemini 4 Hydrogen

- Source: Google (`gemini-3-8-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's fast, cost-efficient multimodal reasoning model supporting text, image, speech, and video inputs with a 1M-token context window.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`) and 4 API providers tracked on Artificial Analysis.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-3.8-flash` (no Free ID on OpenCode Zen)
- **Context window:** 1M tokens input, verified via Artificial Analysis and Google AI docs.
- **Modalities:** Text, image, speech, and video input; text output; reasoning enabled; tool calls and JSON mode supported.
- **Pricing (as of 2026-11-13):** $0.75 / 1M input tokens, $3.75 / 1M output tokens (90% cache discount; $0.58/1M blended 7:2:1).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index (**v5.0.1**): **31** (Artificial Analysis, #54 / 78)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index / BenchLM overall: **31 / #54** (of 78)
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

- **Tool use: 74/100.** Scores 31 on Artificial Analysis Intelligence Index (#54/78) with 112 tok/s output speed; capped by below-median composite intelligence and high verbosity (126M tokens).
- **Reasoning: 74/100.** Scores 31 on AA Intelligence Index (#54/78) with reasoning enabled.
- **Context window: 95/100.** Full 1M-token context window; capped by lack of published 1M-scale retrieval benchmarks.
- **Multimodal: 92/100.** Supports text, image, speech, and video input with text output; capped by text-only output.
- **Coding: 74/100.** Composite AA Intelligence Index of 31; capped by absence of standalone public SWE-bench or LiveCodeBench scores.
- **Cost efficiency: 78/100.** $0.75/$3.75 per 1M tokens ($0.58/1M blended) with 90% cache discount, though 126M-token verbosity raises AA task cost to $7.77.
- **Overall Score: 82/100.** Mean of the five non-cost dims (81.8 -> 82); best-fit for high-throughput multimodal (audio/video/image) and 1M-context workflows on a budget.

---

## Signature

- Provided by: **Gemini 4 Hydrogen (google/gemini-4-hydrogen)** — 2026-11-13
- Method: Public internet research via Artificial Analysis and Google AI documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 3.8 Flash](https://artificialanalysis.ai/models/gemini-3-8-flash)
  - [Google AI — Gemini Models](https://ai.google.dev/gemini-api/docs/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
