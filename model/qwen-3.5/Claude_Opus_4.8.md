# Qwen 3.5 — findings by Claude Opus 4.8

- Source: Alibaba (`opencode/qwen-3.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's Qwen 3.5 flagship generation (2026). The unqualified "Qwen 3.5" slug is ambiguous between tiers; this report uses the Qwen 3.5-family profile as a labeled proxy. Top use case: general/agentic work (prior gen to 3.6+).
- **Provider / access:** Alibaba Cloud / OpenCode Zen `opencode/qwen-3.5`.
- **Release / knowledge:** Qwen 3.5 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.5` — **unqualified slug (scaffolded stub); orchestrator should confirm which Qwen 3.5 tier this folder tracks.**
- **Context window:** curated stub lists 128K; Qwen 3.5 family ranges 128K–1M — **understated; verify.**
- **Modalities:** stub lists text in/out; whether the tracked Qwen 3.5 tier is multimodal is unverified — **flag.**
- **Pricing (as of 2026-10-03):** no verified exact price; Qwen tiers are low-cost. Scored provisionally.
- **Architecture:** proprietary (family).

### Raw benchmarks found

> Qwen 3.5-family verified numbers (labeled proxy; the unqualified variant is ambiguous). Family BenchLM overalls: Qwen3.5 Plus 49.4, Qwen3.5-27B 48.3.

Agent / tool use:

- Qwen 3.5 family agentics (Terminal-Bench, MCP Atlas, OSWorld) mid-tier; exact unqualified-tier rows not published

Reasoning / knowledge:

- Family GPQA/MMLU-Pro ~80–86%; AA Index low-mid; no exact rows for the unqualified slug

Coding:

- Family SWE-bench/LiveCodeBench mid-70s to mid-80s

Multimodal:

- Qwen 3.5 Plus/27B-era multimodal coverage uncertain; scored provisionally (flag)

### Normalized scores (1–100)

- **Tool use: 70/100.** Qwen 3.5 family agentics (mid-tier; prior to 3.6+). Provisional.
- **Reasoning: 74/100.** Family GPQA/MMLU-Pro ~80–86%; AA Index low-mid.
- **Context window: 85/100.** Family 128K–1M; scored at the mid-range with the stub's 128K noted.
- **Multimodal: 60/100.** Family multimodal coverage uncertain for the tracked tier; scored provisionally (flag).
- **Coding: 76/100.** Family SWE-bench/LiveCodeBench mid-range.
- **Cost efficiency: 82/100.** Low-cost Qwen tier. Scored provisionally.
- **Overall Score: 73/100.** Half-up mean of the five quality dims (70/74/85/60/76). A prior-generation Qwen flagship; **slug is ambiguous (scaffolded stub) and several dims are family-proxy provisional** — re-confirm once the tracked tier is pinned.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Qwen 3.5 family releases; BenchLM). No standalone page for the unqualified slug (404); scores use the Qwen 3.5 family profile as a labeled proxy and are 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
