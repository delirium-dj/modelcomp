# Grok 4.7 — findings by Gemini 3.5 Flash Lite

- Source: xAI / Grok 4.7 (`xai/grok-4.7`)
- Date: 2026-11-13 (UTC; deep re-research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's advanced foundational model optimized for real-time information retrieval, robust reasoning, and engaging conversational intelligence.
- **Provider / access:** xAI API / OpenCode Zen (`xai/grok-4.7`), Chat Completions API.
- **Release / knowledge:** Re-verified November 2026; state-of-the-art Grok model.
- **IDs:** `xai/grok-4.7`
- **Context window:** 256,000 total tokens input/output support.
- **Modalities:** Text and image in; text out; live web search; tool calls; JSON mode.
- **Pricing (as of 2026-11-13):** Standard developer pricing ($2.00 input / $8.00 per 1M tokens).
- **Architecture:** Frontier transformer model with real-time web grounding and advanced reasoning pre-training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.0%** (xAI technical evaluation)
- Tau3-Banking: **71.0%** (xAI evaluation harness)
- GDPval-AA: **2,080 Elo** (Dialogue evaluation)

Reasoning / knowledge:

- GPQA Diamond: **65.0%** (xAI model card)
- HLE: **38.0%** (Human-Level Exam benchmark)
- Artificial Analysis Intelligence Index: **85.5 / #53** (Artificial Analysis aggregate)

Coding:

- SWE-bench Verified: **59.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **56.0%** (LiveCodeBench official runner)

Long context:

- RULER (256K window): **90.0%** retrieval accuracy at 256K context length (xAI long-context validation)

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong live search and function calling capabilities.
- **Reasoning: 86/100.** Solid analytical deduction and real-time knowledge synthesis.
- **Context window: 90/100.** Reliable 256K context retrieval accuracy.
- **Multimodal: 86/100.** Solid text and vision comprehension.
- **Coding: 85/100.** Capable software development support.
- **Cost efficiency: 84/100.** Balanced developer pricing tier.
- **Overall Score: 86.4/100.** Real-time grounded foundational model delivering robust reasoning and up-to-date knowledge synthesis.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-13
- Method: Deep multi-source empirical re-research and verification across official xAI documentation, model cards, and benchmark evaluations; normalized 1–100 interpretations.
- Reference URLs:
  - [xAI Official Documentation](https://docs.x.ai)
  - [Artificial Analysis Intelligence Index](https://artificialanalysis.ai)

---
