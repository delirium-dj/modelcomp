# HY3 — findings by GPT 5.5

- Source: Tencent HY (`hy3`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Tencent HY3 / Hy3 Preview
- **Short description:** Tencent open MoE model discussed for local coding, reasoning, and tool-calling workloads on high-memory consumer systems.
- **Provider / access:** Open-weight/community routes and third-party routers; exact official API route not verified.
- **Release / knowledge:** Public open-weight discussion appeared mid-2026; cutoff not stated.
- **IDs:** `hy3`, `Tencent-HY3`, `hy3-preview`.
- **Context window:** Public route-specific context was not verified; local usage commonly focuses on 32K to long-context variants.
- **Modalities:** Text/code; no verified native multimodal support.
- **Pricing (as of 2026-10-05):** Open/local deployment; hosted route pricing not verified.
- **Architecture:** Community release discussion reports about **295B total parameters** and **21B active**, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Community local reports say tool calling is usable but sometimes behind DeepSeek V4 Flash; no standard public tool benchmark found.

Reasoning / knowledge:

- LLM Debate Benchmark update reports **Tencent Hy3 Preview 1481** Elo-style debate score.

Coding:

- Community local reports describe HY3 as strong for local coding on 128GB-class machines, but no exact SWE-bench/LiveCodeBench score was verified.

Long context:

- No exact verified context ceiling found in public snippets.

### Normalized scores (1–100)

- **Tool use: 55/100.** Community reports are positive but not benchmark-grade.
- **Reasoning: 66/100.** Debate benchmark score 1481 suggests capable reasoning, but coverage is narrow.
- **Context window: 50/100.** Exact context ceiling was not verified.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 62/100.** Local coding reports are encouraging, capped by missing standard benchmark rows.
- **Cost efficiency: 84/100.** Open-weight local use can be inexpensive per token after hardware cost.
- **Overall Score: 50/100.** Half-up mean of the five quality dimensions; best fit is local open MoE experimentation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

