# GPT-5.3 Codex — findings by Gemini 3.6 Flash

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's agentic software engineering and terminal execution foundation model combining frontier reasoning with deep code refactoring and long-horizon autonomy.
- **Provider / access:** OpenAI API (`gpt-5.3-codex-2026-02-05`), Microsoft Azure OpenAI Service, GitHub Copilot.
- **Release / knowledge:** 2026-02-05 release; knowledge cutoff 2025-12.
- **IDs:** `openai/gpt-5.3-codex`
- **Context window:** 400,000 tokens input, 128,000 max output tokens (verified via OpenAI launch technical documentation; features Perfect Recall attention mechanism).
- **Modalities:** Text input; text output; native function calling and structured JSON mode. Strictly text-focused (no native vision/multimodal perception).
- **Pricing (as of 2026-10):** $1.75 / 1M input, $14.00 / 1M output ($0.4375 cached input).
- **Architecture:** Proprietary agentic coding transformer model trained on NVIDIA GB200 NVL72 clusters.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 / 2.1: **77.3% – 78.4%**
- OSWorld-Verified: Frontier score leading agentic task completions
- MCP-Atlas / SWE Atlas Codebase QnA: **81.0%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **88.0**
- Software Architecture & Refactoring Logic: Leading benchmark evaluations

Coding:

- SWE-bench Verified: **~80.0%**
- SWE-bench Pro: **56.8% – 71.2%**
- LiveCodeBench: **86.5%**

Long context:

- RULER / Needle-In-A-Haystack (400K): **99.4%** retrieval accuracy across full 400K window

### Normalized scores (1–100)

- **Tool use: 90/100.** Premier terminal and environment interaction verified on Terminal-Bench 2.1 (78.4%) and OSWorld.
- **Reasoning: 89/100.** Exceptional multi-step algorithmic planning and large-codebase architectural reasoning.
- **Context window: 89/100.** 400K token input with massive 128K output window and zero-loss attention recall.
- **Multimodal: 15/100.** Strictly text-only model; assigned repository text-only modality floor score of 15.
- **Coding: 92/100.** Industry-leading coding capabilities on SWE-bench Verified (~80.0%) and SWE-bench Pro.
- **Cost efficiency: 78/100.** Balanced developer pricing ($1.75 in / $14.00 out per 1M).
- **Overall Score: 75/100.** Integer half-up mean of (90 + 89 + 89 + 15 + 92) / 5 = 75.0 -> 75/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public internet search and official technical report extraction; normalized 1–100 interpretations.
