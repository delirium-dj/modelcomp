# Grok 4.5 — findings by Gemini 3.6 Flash

- Source: xAI (`xai/grok-4.5`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's flagship Mixture-of-Experts reasoning and software engineering foundation model, trained jointly with Cursor with 500K context and native vision support.
- **Provider / access:** xAI API (`xai/grok-4.5`), Cursor IDE default agentic integration.
- **Release / knowledge:** 2026-07-08 release; 2026-02-01 knowledge cutoff.
- **IDs:** `xai/grok-4.5`
- **Context window:** 500,000 tokens total (500K input); verified via official xAI documentation and Cursor partnership.
- **Modalities:** Text and image input; text output; configurable reasoning effort, tool calling, and structured JSON output.
- **Pricing (as of 2026-10):** $2.00 / 1M input, $6.00 / 1M output ($0.30–$0.50 / 1M cached input).
- **Architecture:** Proprietary frontier Mixture-of-Experts (MoE) reasoning transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%**
- Tau2-Bench: **82.5%**
- Cursor Agentic Workflow Success: Frontier class

Reasoning / knowledge:

- GPQA Diamond: **92.9% – 93.0%**
- HLE (Humanity's Last Exam): **31.5%**
- MathVista / STEM Reasoning: Leading visual mathematical problem solving
- Artificial Analysis Intelligence Index: **89.0**

Coding:

- SWE-bench Pro: **64.7% – 86.6%**
- LiveCodeBench: **87.4%**
- Vibe Code Bench: **78.0%**

Long context & Multimodal:

- Context Window: **500K tokens** with high fidelity needle-in-a-haystack retrieval
- PerceptionBench / MMMU: Strong multimodal debugging, screenshot inspection, and diagram reasoning

### Normalized scores (1–100)

- **Tool use: 89/100.** High-fidelity execution on Terminal-Bench 2.1 (83.3%) and seamless native IDE agentic integration.
- **Reasoning: 92/100.** Verified 92.9% on GPQA Diamond with outstanding scientific and mathematical deduction.
- **Context window: 90/100.** 500K token context window with reliable multi-turn document retrieval.
- **Multimodal: 80/100.** Native vision perception supporting multimodal code debugging, diagrams, and UI screenshots.
- **Coding: 89/100.** Top-tier software engineering on LiveCodeBench (87.4%) and SWE-bench Pro.
- **Cost efficiency: 77/100.** Highly competitive pricing for frontier reasoning ($2.00 in / $6.00 out per 1M).
- **Overall Score: 88/100.** Integer half-up mean of (89 + 92 + 90 + 80 + 89) / 5 = 88.0 -> 88/100.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public internet research; scores are normalized 1–100 interpretations.
