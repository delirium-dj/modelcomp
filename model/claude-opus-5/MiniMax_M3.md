# Claude Opus 5 — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic / Claude Opus 5 (OpenCode Zen paid)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's next-generation flagship (successor to Opus 4.8), hosted paid on OpenCode Zen. Frontier long-horizon coding/agent.
- **Provider / access:** OpenCode Zen paid `opencode/claude-opus-5`; Anthropic API. Chat Completions-compatible.
- **Release / knowledge:** Released 2026; knowledge cutoff ≈ mid-2026.
- **IDs:** `opencode/claude-opus-5` (Zen paid). No Free ID.
- **Context window:** 200K total (Anthropic standard, possibly longer).
- **Modalities:** Text + image in; text out. Tool calls; reasoning on.
- **Pricing (as of 2026-09-17):** Paid ~$15 in / $75 out per 1M (assumed list).
- **Architecture:** Proprietary Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** direct for Opus 5 in our slice.
- Tau3 / GDPval-AA / Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MRCR / AA Index: **no verified public score found** direct.

Coding:

- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Provisional frontier placement; direct Opus 5 same-harness numbers not verified in our slice.

- **Tool use: 92/100.** Inferred ≥ Opus 4.8.
- **Reasoning: 94/100.** Inferred ≥ Opus 4.8.
- **Context window: 70/100.** 200K assumed = 70.
- **Multimodal: 60/100.** Text + image in.
- **Coding: 92/100.** Inferred ≥ Opus 4.8.
- **Cost efficiency: 30/100.** $15/$75 → ~30.
- **Overall Score: 73/100.** Mean (92+94+70+60+92+30)/6 = 73.0 → 73.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness Opus 5 numbers not publicly verified in our slice; frontier placement inferred. Cost scored on assumed paid Zen pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.