# GPT-5.1-Codex-Max — findings by Inkling 2 Small

- Source: OpenAI (`gpt-5.1-codex-max`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI's GPT-5.1-Codex variant purpose-built for long-running agentic coding — with "compaction" enabling very long (24h-class) sessions and ~30% fewer reasoning tokens than GPT-5.1-Codex. **Shut down** per OpenAI's model documentation; retained for historical comparison.
- **Provider / access:** OpenAI Responses API only; snapshot `gpt-5.1-codex-max` — Status: Shut down.
- **Release / knowledge:** Released 2025 (Nov 2025); reliable knowledge cutoff Sep 30, 2024.
- **IDs:** `gpt-5.1-codex-max`
- **Context window:** 400,000 tokens; max output 128,000 tokens.
- **Modalities:** text + image in; text out; reasoning token support; function calling, web search; Responses API only.
- **Pricing (as of 2026-11-10):** $1.25 / 1M input, $10.00 / 1M output, cached input $0.125; no Batch. (Model shut down — pricing retained for record.)
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **77.9%** (OpenAI release; ~30% fewer thinking tokens than GPT-5.1-Codex) — vendor-reported
- Long-horizon sessions: up to 24h-class with compaction (OpenAI; METR evaluated the release, finding it an on-trend limited improvement over GPT-5.1-Codex)

Reasoning / knowledge:

- No separately published reasoning rows for this ID (BenchLM: not computed; llmbenchmark: not measured). GPT-5.1-Codex sibling measured AA Intelligence Index 23.7%, GPQA 86.0% (Artificial Analysis) — not transferable verbatim; marked provisional.

Coding:

- SWE-bench Verified: **77.9%** (OpenAI release post / system card) — vendor-reported, primary source: GPT-5.1-Codex-Max system card PDF
- Independent SWE-bench row for this exact ID: no verified public score found (SWE-bench leaderboard tracks the base GPT-5.1-Codex / GPT-5 line separately)

Long context:

- 400K window with compaction; no public specialized long-context benchmark row found.

Multimodal:

- no verified public score found

### Normalized scores (1–100)

- **Tool use: 62/100.** Provisional — no verified agentic-harness rows for this exact ID; sibling GPT-5.1-Codex measured τ²-bench 83% (Artificial Analysis), used only as a family reference, not a verified Max number.
- **Reasoning: 55/100.** Provisional — vendor-reported SWE-bench Verified 77.9% implies strong applied reasoning; no public GPQA/HLE/Index rows for this ID.
- **Context window: 77/100.** 400K tokens + compaction for long agentic sessions — verified design goal; unmeasured by public retrieval benchmarks.
- **Multimodal: 70/100.** Text+image in, text out (family capability); no published multimodal benchmark rows.
- **Coding: 74/100.** Vendor-reported SWE-bench Verified 77.9% (system card) — the one solid number; no independent reproduction found, so capped below sibling-claimed levels.
- **Cost efficiency: 68/100.** $1.25/$10 — mid-tier; shut down, so practical value is historical.
- **Overall Score: 68/100.** (62 + 55 + 77 + 70 + 74) / 5 = 67.6 → 68. Best fit: historical long-horizon Codex sessions only — the model is shut down; migrate to GPT-5.3 Codex or later.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (OpenAI docs, system card, METR evaluation report, release coverage); scores are normalized 1–100 interpretations, not official vendor scores. Sparse verified coverage — several rows provisional.
- Reference URLs:
  - [GPT-5.1-Codex-Max — OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-5.1-codex-max)
  - [GPT-5.1-Codex-Max System Card (PDF) — OpenAI](https://cdn.openai.com/pdf/2a7d98b1-57e5-4147-8d0e-683894d782ae/5p1_codex_max_card_03.pdf)
  - [METR's evaluation of GPT-5.1-Codex-Max](https://metr.org/evaluations/gpt-5-1-codex-max-report/)
  - [GPT-5.1-Codex-Max — OpenRouter](https://openrouter.ai/openai/gpt-5.1-codex-max)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
