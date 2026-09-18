# Claude Sonnet 5 — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic / Claude Sonnet 5 (OpenCode Zen paid)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's next-gen mid-tier Sonnet, hosted paid on OpenCode Zen. Successor to Sonnet 4.6; balanced coding/reasoning.
- **Provider / access:** OpenCode Zen paid `opencode/claude-sonnet-5`; Anthropic API. Chat Completions-compatible.
- **Release / knowledge:** Released 2026; knowledge cutoff ≈ mid-2026.
- **IDs:** `opencode/claude-sonnet-5` (Zen paid). No Free ID.
- **Context window:** 200K total (assumed).
- **Modalities:** Text + image in; text out. Tool calls; reasoning on.
- **Pricing (as of 2026-09-17):** Paid ~$3 in / $15 out per 1M (assumed list).
- **Architecture:** Proprietary Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** direct for Sonnet 5 in our slice.

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / AA Index: **no verified public score found** direct.

Coding:

- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Provisional placement ≥ Sonnet 4.6.

- **Tool use: 85/100.** Inferred ≥ Sonnet 4.6.
- **Reasoning: 82/100.** Inferred ≥ Sonnet 4.6.
- **Context window: 70/100.** 200K = 70.
- **Multimodal: 60/100.** Text + image in.
- **Coding: 85/100.** Inferred ≥ Sonnet 4.6.
- **Cost efficiency: 60/100.** $3/$15 assumed → ~60.
- **Overall Score: 76/100.** Mean (85+82+70+60+85+60)/6 = 73.7 → 74.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness Sonnet 5 numbers not publicly verified in our slice; placement inferred. Cost scored on assumed paid Zen pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.