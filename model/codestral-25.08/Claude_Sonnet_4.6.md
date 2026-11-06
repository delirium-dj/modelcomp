# Codestral 25.08 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** codestral-25.08

---

## Model Overview

Codestral 25.08 (`codestral-2508`) is Mistral AI's July 2025 specialized code model for IDE autocomplete, fill-in-the-middle (FIM) completion, code correction, and test generation across 80+ programming languages. 22B parameters, 256K context (8,192 max output). Text and code in; text and code out. Priced at $0.30/$0.90 per 1M (La Plateforme, OpenRouter); source-available weights for $0 self-host (non-production license). The live `codestral-latest` alias points to this version.

---

## Scores

- **Tool use: 42/100.** Not designed for multi-step agentic tool chaining. This is a single-shot completion engine — no reasoning or agentic modes. Function calling and tool use are not its design intent; LiveCodeBench 31.5 is far below 2026 agentic coders.
- **Reasoning: 38/100.** No GPQA or multi-step reasoning benchmarks published. A 22B code-completion model without reasoning modes. IFEval instruction-following improved ~+5% over prior Codestral — appropriate for a completion engine, not a reasoning model.
- **Context window: 78/100.** 256K total context maps to the 256K tier (78). 8,192 max output — a significant limitation for long code generation runs. The long context is valuable for large codebase FIM tasks.
- **Multimodal: 15/100.** Text and code input/output only. No image, audio, or video capability.
- **Coding: 78/100.** FIM performance: +30% accepted completions, +10% retained code, 50% fewer runaway generations vs. prior Codestral. HumanEval-FIM ~95% pass@1 (vendor-cited for the Codestral family). MultiplE multi-language benchmark improved ~+5%. Best-in-class cheap FIM autocomplete for $0.30/$0.90 per 1M at 256K context.
- **Cost efficiency: 88/100.** $0.30/$0.90 per 1M is very affordable for IDE-integrated code completion at 256K context. Source-available weights available for $0 self-host (non-production license). Excellent cost per FIM completion.
- **Overall Score: 50.2/100.** Mean of Tool use (42) + Reasoning (38) + Context (78) + Multimodal (15) + Coding (78) = 251 / 5 = 50.2. The IDE autocomplete specialist — strongly recommended for Copilot-style FIM integrations and inline code corrections across 80+ languages at low cost; not suitable for agentic coding or complex reasoning tasks.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
