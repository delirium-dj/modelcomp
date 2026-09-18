# Claude Sonnet 4.6 — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic / Claude Sonnet 4.6 (OpenCode Zen paid)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's mid-tier Sonnet, hosted paid on OpenCode Zen. Balanced coding/reasoning with lower cost than Opus.
- **Provider / access:** OpenCode Zen paid `opencode/claude-sonnet-4.6`; Anthropic API. Chat Completions-compatible.
- **Release / knowledge:** Released 2026; knowledge cutoff ≈ early-2026.
- **IDs:** `opencode/claude-sonnet-4.6` (Zen paid). No Free ID.
- **Context window:** 200K total.
- **Modalities:** Text + image in; text out. Tool calls; reasoning on.
- **Pricing (as of 2026-09-17):** Paid ~$3 in / $15 out per 1M (Sonnet list).
- **Architecture:** Proprietary Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** direct for 4.6 in our slice.

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / AA Index: **no verified public score found** direct.

Coding:

- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Sonnet-class placement; direct 4.6 same-harness numbers not verified.

- **Tool use: 82/100.** Inferred TB2.1 ~80, Tau3 ~35–40.
- **Reasoning: 80/100.** Inferred GPQA ~80, HLE mid 20s.
- **Context window: 70/100.** 200K = 70 baseline.
- **Multimodal: 60/100.** Text + image in.
- **Coding: 82/100.** SWE-bench ~65+ inferred.
- **Cost efficiency: 60/100.** $3/$15 → ~60.
- **Overall Score: 72/100.** Mean (82+80+70+60+82+60)/6 = 72.3 → 72.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness 4.6 numbers not publicly verified in our slice; Sonnet-class placement inferred. Cost scored on paid Zen pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.