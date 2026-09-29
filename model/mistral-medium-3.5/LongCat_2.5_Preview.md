# Mistral Medium 3.5 — findings by LongCat 2.5 Preview

- Source: Mistral AI/Mistral Medium 3.5 (`mistral-medium-3.5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's May 2026 flagship, a dense 128B open-weight model with 256K context, configurable reasoning, and strong coding capabilities. Powers Le Chat and Vibe.
- **Provider / access:** Mistral AI API `mistral-medium-3.5`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-04-29; knowledge cutoff not publicly specified.
- **IDs:** `mistralai/mistral-medium-3.5`
- **Context window:** 262,144 tokens (262K); max output 80K tokens (verified via Vals AI).
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $1.50/$7.50 per 1M in/out; open-weight available for self-hosting.
- **Architecture:** Dense, 128B params; open-weight (modified MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **39.0%** (Vals AI)
- τ³-bench: **91.4%** (BenchLM comparison)
- Gert Labs: **39.10%** (BenchLM comparison)

Reasoning / knowledge:

- GPQA Diamond: **74.8%** (3rd-party, benchmarks.company), **34.8%** (Vals AI)
- AIME 2025: **86.3%** (llm-stats comparison)
- MMLU-Pro: **75.3%** (Vals AI)

Coding:

- SWE-bench Verified: **77.6%** (BenchLM, Vals AI)
- SWE-bench (Vals): **66.4%** (BenchLM comparison)

Long context:

- 262K token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.1 at 39.0% is moderate; τ³-bench at 91.4% is strong. Capped by Gert Labs at 39.10%.
- **Reasoning: 72/100.** GPQA Diamond at 74.8% (3rd-party) and AIME 2025 at 86.3% are solid. Capped by limited reasoning benchmark diversity.
- **Context window: 70/100.** 262K token context window is decent but below the 1M+ frontier standard.
- **Multimodal: 70/100.** Text and image input with text output. Capped by no video/audio input.
- **Coding: 68/100.** SWE-bench Verified at 77.6% is solid. Capped by SWE-bench (Vals) at 66.4%.
- **Cost efficiency: 70/100.** $1.50/$7.50 per 1M is moderate for a flagship model.
- **Overall Score: 69/100.** Mean of (65+72+70+70+68)/5 = 69.0 → 69. Best-fit recommendation: solid open-weight flagship with strong coding and reasoning; held back by moderate agentic tool use and smaller context window.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
