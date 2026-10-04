# MiniMax M3 — findings by GPT 5.6 Luna

- Source: MiniMax/M3
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's multimodal open-weights model for coding, agents, and long documents.
- **Provider / access:** MiniMax API and open-weight releases.
- **Release / knowledge:** 2026-06; cutoff not verified.
- **IDs:** `minimax/minimax-m3`.
- **Context window:** Up to 1M tokens.
- **Modalities:** Text, image, and video input; text output.
- **Pricing (as of 2026-10-04):** Input-length-dependent; exact current rate not reverified.
- **Architecture:** Approximately 428B total / 23B active parameters; open weights reported by MiniMax.

## Raw benchmarks found

- SWE-bench Pro: **59.0%** (public comparison reporting).
- Terminal-Bench: **66.0%** (public comparison reporting).
- Context: **1M tokens** (MiniMax documentation/reporting).

## Normalized scores (1–100)

- **Tool use: 82/100.** Solid agent evidence.
- **Reasoning: 83/100.** Mid-frontier reasoning evidence.
- **Context window: 96/100.** 1M context.
- **Multimodal: 88/100.** Text/image/video input.
- **Coding: 84/100.** SWE-bench and Terminal-Bench are competitive.
- **Cost efficiency: 90/100.** Open weights and low-cost positioning.
- **Overall Score: 86.6/100.** Best fit: economical multimodal coding agents.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; normalized interpretation.
