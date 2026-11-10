# Ling 3.0 Flash Fin Free — findings by Inkling 2 Small

- Source: inclusionAI / Ant Group (`ling-3.0-flash-fin-free`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** The free OpenCode Zen route of inclusionAI's Ling-3.0-flash-Fin — the first finance-enhanced model in the Ant Ling family (124B total / 5.1B active, finance-continued-trained on Ling-3.0-flash). Financial research and tool-intensive agentic workflows; same weights as the paid Fin model, hosted $0 for a limited time.
- **Provider / access:** OpenCode Zen (`opencode/ling-3-0-flash-fin-free`, free limited-time promo); Vercel promotional tier; also OpenRouter `inclusionai/ling-3.0-flash-fin:free`; Novita; Self-host via SGLang/vLLM (BF16).
- **Release / knowledge:** released 2026-09-03 (base Fin model); knowledge cutoff not publicly stated.
- **IDs:** `opencode/ling-3-0-flash-fin-free` (Zen); `inclusionai/ling-3.0-flash-fin:free` (OpenRouter)
- **Context window:** 262,144 tokens (256K marketed) / 32K out (meta); 256K per Fin model card.
- **Modalities:** text in → text out; reasoning yes (thinking enabled by default); tool calls yes (agentic finance suite); MIT license.
- **Pricing (as of 2026-11-10):** $0 — free limited-time Zen promotional tier.
- **Architecture:** MoE (bailing_hybrid), 124B total / 5.1B activated; continued training on financial data incl. FinFIRST (open-sourced dataset).

### Raw benchmarks found

ZERO verified public per-benchmark numbers for the free route's exact ID; the Fin model card evaluates on FinFIRST, FinSearchComp Verified, FinCRAFT, Finance Agent, APEX-Agents, SpreadsheetBench, τ³-Banking — all shown only as an image (`ling-3.0-flash-fin-evaluation.png`), with no text-readable values.

Agent / tool use:

- no verified public score found (evaluation exists as chart image only)

Reasoning / knowledge:

- no verified public score found

Coding:

- no verified public score found (financial spreadsheet/modeling focus, no published rows)

Long context:

- 262,144 tokens (Fin model card / models.dev); no verified public long-context retrieval score found

Multimodal:

- Text-only — no verified public multimodal evidence exists.

### Normalized scores (1–100)

- **Tool use: 65/100.** Provisional — purpose-built tool-extensive finance suite (FinFIRST/FinCRAFT/τ³-Banking research tools) exists, values unpublished; scored on documented design, not a leaderboard.
- **Reasoning: 62/100.** Provisional — finance-tuned reasoning (long-horizon research, multi-document reconciliation); no public rows.
- **Context window: 78/100.** 262,144 tokens (256K marketed), 32K max out — documented; retrieval unmeasured publicly.
- **Multimodal: 15/100.** Text-only — the mandatory text-only floor.
- **Coding: 62/100.** Provisional — strong coding retained per vendor copy (continued training preserves it, not benchmarked publicly for this route); financial spreadsheet tasks are the sweet spot.
- **Cost efficiency: 100/100.** $0.00 — free Zen promotional route with 5.1B active MoE efficiency.
- **Overall Score: 56/100.** (65 + 62 + 78 + 15 + 62) / 5 = 56.4 → 56. Best fit: finance research/agentic finance workloads at $0 on the Zen promo; professional validation required for investment conclusions.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (inclusionAI HF model card + OpenCode meta, models.dev, OpenRouter catalog); scores are normalized 1–100 interpretations, not official vendor scores. Same weights as Ling-3.0-flash-Fin — capability evidence is for that identity, labelled accordingly, not mixed into other entries. Sparse verified coverage.
- Reference URLs:
  - [Ling-3.0-flash-Fin — Hugging Face model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-Fin)
  - [Ling 3.0 Flash Fin — OpenCode meta (free Zen route)](../../models_finance/ling-3.0-flash-fin-free/meta.json)
  - [Ling 3.0 Flash Fin — models.dev](https://models.dev/models/inclusionai/ling-3.0-flash-fin)
  - [Ling-3.0-flash (base model) — Hugging Face](https://huggingface.co/inclusionAI/Ling-3.0-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
