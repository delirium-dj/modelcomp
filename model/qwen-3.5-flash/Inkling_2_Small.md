# Qwen 3.5 Flash — findings by Inkling 2 Small

- Source: Alibaba (`qwen-3.5-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Flash
- **Short description:** Alibaba's hosted Flash-tier member of the Qwen3.5 family — a fast, economical proprietary model with 1M-token context. Sourced benchmark coverage is sparse (7 of 804 tracked); strongest measured results are retrieval-augmented coding and knowledge checks.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (Qwen3.5 Flash); OpenRouter (`qwen/qwen3.5-flash`); Vals AI leaderboard entry (`alibaba_qwen3.5-flash`). Chat Completions-compatible.
- **Release / knowledge:** 2026 (Qwen3.5 generation); knowledge cutoff not publicly stated.
- **IDs:** `qwen3.5-flash` (Model Studio)
- **Context window:** 1,000,000 tokens (BenchLM); max output undisclosed.
- **Modalities:** text in; vision support reported family-wide but not independently verified for this SKU — provisional text-plus-image in, text out; reasoning yes; tool calls not verified.
- **Pricing (as of 2026-11-10):** no verified public price found in the sources checked (Flash-tier pricing expected, unconfirmed).
- **Architecture:** proprietary hosted; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- no verified public agentic score found (τ²/TB/OSWorld rows absent from tracked coverage)

Reasoning / knowledge:

- GPQA Diamond (Vals): **82.8%** (Vals AI)
- MMLU-Pro (Vals): **84.1%** (Vals AI)
- FrontierMath v2 (Tiers 1–3): **18.2%** (Epoch AI)
- BenchLM overall: **42.28/100** (#131/1020)

Coding:

- LiveCodeBench (Vals): **83.3%** (Vals AI)
- SWE-bench (Vals): **64.4%** (Vals AI)

Long context:

- 1M window; no verified public long-context retrieval score found (AA-LCR not tracked).

Multimodal:

- no verified public score found (vision capability unconfirmed for this SKU)

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified public agentic rows exist — scored at provisional mid-floor pending published τ²/Terminal-Bench/OSWorld measurements.
- **Reasoning: 68/100.** GPQA 82.8% and MMLU-Pro 84.1% (Vals) verified; FrontierMath 18.2% caps frontier reasoning; BenchLM 42.28 overall reflects partial coverage.
- **Context window: 88/100.** 1M-token window is the verified differentiator; retrieval unmeasured publicly — provisional pending AA-LCR.
- **Multimodal: 60/100.** Provisional — family is vision-capable but no verified public multimodal row for this SKU.
- **Coding: 76/100.** LCB 83.3% and SWE-bench 64.4% (Vals) are verified; consistent with Flash-tier expectations.
- **Cost efficiency: 70/100.** Flash-tier expected pricing; exact rate unverified — scored on tier pattern, not a published table.
- **Overall Score: 68/100.** (50 + 68 + 88 + 60 + 76) / 5 = 68.4 → 68. Best fit: high-volume, cost-sensitive chat/coding at 1M context; verify agentic and vision needs before deploying.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (BenchLM, Vals AI, Epoch AI, Alibaba Model Studio docs); scores are normalized 1–100 interpretations, not official vendor scores. Sparse verified coverage — several rows marked provisional.
- Reference URLs:
  - [Qwen3.5 Flash — BenchLM](https://benchlm.ai/models/qwen3-5-flash)
  - [Qwen3.5 Flash — Vals AI](https://www.vals.ai/models/alibaba_qwen3.5-flash)
  - [FrontierMath Tiers 1–3 — Epoch AI](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
