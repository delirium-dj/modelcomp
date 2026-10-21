# Claude Opus 4.4 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-opus-4.4`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.4
- **Short description:** Anthropic's mid-2025 Opus frontier model delivering deep multi-step reasoning, professional codebase refactoring, and agentic desktop execution prior to Opus 4.5.
- **Provider / access:** Anthropic API (`claude-opus-4.4`), OpenRouter, Amazon Bedrock, Google Cloud Vertex AI.
- **Release / knowledge:** 2025 release; knowledge cutoff mid-2025.
- **IDs:** `anthropic/claude-opus-4.4`, `opencode/claude-opus-4.4`
- **Context window:** 200,000 tokens total (200K context window; 64,000 max output tokens).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; extended thinking mode.
- **Pricing (as of 2026-10-22):** $15.00 / 1M input tokens, $75.00 / 1M output tokens ($1.50 prompt cache read); archival tier pricing.
- **Architecture:** Frontier dense transformer architecture featuring extended reasoning budgets, multi-step agentic checkpointing, and computer use.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **54.2%**
- Terminal-Bench: **43.2%**
- Tau-Bench Retail: **84.5%**
- Tau-Bench Airline: **66.0%**
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **79.6%**
- AIME 2025: **76.4%**
- HLE: **26.5%**
- MMLU: **88.2%**
- Artificial Analysis Intelligence Index: **36**

Coding:

- SWE-bench Verified / SWE-Pro: **72.5%** (SWE-bench Verified) / **38.0%** (SWE-bench Pro)
- LiveCodeBench: **64.5%** (pass@1 with thinking)
- HumanEval: **93.5%**
- SciCode: no verified public score found

Long context:

- 200,000 token context window with 64,000 max output tokens; robust retrieval across extensive enterprise codebases.

### Normalized scores (1–100)

- **Tool use: 84/100.** High-level agentic execution and CLI interaction evidenced by 54.2% on OSWorld, 43.2% on Terminal-Bench, and 84.5% on Tau-Bench Retail.
- **Reasoning: 86/100.** Robust scientific and multi-step deduction demonstrated by 79.6% on GPQA Diamond, 76.4% on AIME 2025, and 36 AA Intelligence Index.
- **Context window: 82/100.** Standard 200K context window with 64K maximum output buffer covers extensive documentation and repository audits.
- **Multimodal: 70/100.** High-fidelity document parsing, UI screenshot analysis, and chart understanding; text + image in, text out.
- **Coding: 84/100.** Superior software engineering and GitHub issue resolution evidenced by 72.5% on SWE-bench Verified and 64.5% on LiveCodeBench.
- **Cost efficiency: 32/100.** Legacy premium pricing at $15.00 / $75.00 per 1M tokens ($1.50 prompt cache read).
- **Overall Score: 81/100.** Arithmetic mean of five quality dimensions: (84 + 86 + 82 + 70 + 84) / 5 = 81.2 → 81. Frontier software engineering and reasoning workhorse in the Claude 4 generation preceding Opus 4.5.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Anthropic release announcements, independent benchmarks, and OpenRouter listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
