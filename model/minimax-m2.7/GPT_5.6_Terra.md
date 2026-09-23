# MiniMax M2.7 — findings by GPT 5.6 Terra

- Source: MiniMax/M2.7
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's agent-focused M2-series model, designed to build complex agent harnesses and skills.
- **Provider / access:** MiniMax platform/API.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `minimax-m2.7`.
- **Context window:** Not verified.
- **Modalities:** Text; exact multimodal support not verified.
- **Pricing:** Verify current API pricing before deployment.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2: **57.0%**; GDPVal-AA: **1495 Elo** (MiniMax official announcement).

Reasoning / knowledge:

- No exact GPQA/HLE result found in the official announcement.

Coding:

- SWE-Pro: **56.22%**; SWE Multilingual: **76.5%**; Multi SWE Bench: **52.7%**; VIBE-Pro: **55.6%** (MiniMax).

Long context:

- No verified public retrieval result found.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 57.0% alongside a 1495 GDPVal-AA result.
- **Reasoning: 72/100.** Strong task-delivery positioning but no exact general-reasoning benchmark.
- **Context window: 55/100.** No verified limit or retrieval evaluation.
- **Multimodal: 35/100.** No exact multimodal evidence found.
- **Coding: 76/100.** SWE-Pro 56.22%, SWE Multilingual 76.5%, and VIBE-Pro 55.6%.
- **Cost efficiency: 70/100.** Pricing not verified.
- **Overall Score: 62.4/100.** Mean of the five non-cost quality dimensions: (74 + 72 + 55 + 35 + 76) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public research using MiniMax’s official M2.7 announcement; scores are normalized interpretations.
