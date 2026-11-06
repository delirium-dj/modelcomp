# Codestral 25.08 — findings by Gemini 3.8 Flash

- Source: Mistral AI (`mistral/codestral-25.08`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral AI's specialized low-latency code generation and completion model optimized for IDE autocomplete, fill-in-the-middle (FIM), and multi-language software development.
- **Provider / access:** Mistral AI Platform (La Plateforme), OpenRouter, self-hosted deployments (vLLM / Ollama).
- **Release / knowledge:** 2025-07-28 release (versioned 25.08); commercial license (free community tier on Le Chat / non-production; commercial API rate on La Plateforme).
- **IDs:** `codestral-2508`, `mistralai/codestral-25.08`, `openrouter/mistralai/codestral-25.08`.
- **Context window:** 256,000 tokens (up to 8,192 max output tokens).
- **Modalities:** Text/code input; text/code output; fill-in-the-middle (FIM) and structured JSON support.
- **Pricing (as of 2026-11-06):** $0.30 per 1M input tokens / $0.90 per 1M output tokens.
- **Architecture:** Dense auto-regressive transformer optimized for low-latency speculative code decoding and inline fill-in-the-middle completion.

### Raw benchmarks found

Coding:

- HumanEval (Python, pass@1): **90.5%**
- Fill-In-The-Middle (FIM) pass@1: **~95.3%** across Python, Java, TypeScript, and C++
- Acceptance rate in IDE telemetry: **+30%** completion acceptance relative to baseline generation models

Reasoning / knowledge:

- IFEval (instruction following): **81.4%**
- Spider (text-to-SQL): **72.8%**

Agent / tool use:

- Standard function calling and structured JSON output supported; primarily tuned as an IDE completion backend rather than autonomous multi-tool agent.

Long context:

- 256,000 token context window supporting codebase ingestion and repository-scale prompt assemblies.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid tool and JSON schema adherence for code generation pipelines, but tuned for completions rather than autonomous multi-turn tool loops.
- **Reasoning: 82/100.** Strong programmatic and syntactic logic (81.4% IFEval, 72.8% Spider SQL), capped by its dedicated coding domain focus.
- **Context window: 86/100.** 256,000 token context window offers ample room for large codebase files and repository context.
- **Multimodal: 15/100.** Text and code input/output only (standard text-only floor per methodology).
- **Coding: 89/100.** Dedicated coding strength evidenced by 90.5% HumanEval, 95.3% multi-language FIM pass rate, and fast completion latency.
- **Cost efficiency: 94/100.** Extremely cost-effective developer pricing at $0.30 input / $0.90 output per 1M tokens.
- **Overall Score: 70/100.** Arithmetic mean of five quality dimensions: (78 + 82 + 86 + 15 + 89) / 5 = 350 / 5 = 70.0 → 70. Top-tier lightweight coding engine tailored for IDE autocompletion, refactoring, and developer assistance.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public web research across Mistral AI announcements, release benchmarks, developer platform pricing, and third-party IDE evaluation leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Codestral Release Notes](https://mistral.ai)
  - [OpenRouter — Mistral Codestral 25.08 Model Details](https://openrouter.ai)
  - [Elosia AI — Code Generation Benchmarks](https://elosia.ai)
  - [Layer3 Labs — Codestral & Devstral Comparative Analysis](https://layer3labs.io)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

