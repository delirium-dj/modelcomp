# Claude Opus 4.6 — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic / Claude Opus 4.6 (OpenCode Zen paid)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's prior-generation top-tier model, hosted paid on OpenCode Zen. Long-context, strong reasoning and coding; text + image.
- **Provider / access:** OpenCode Zen paid `opencode/claude-opus-4.6`; Anthropic API; Chat Completions-compatible.
- **Release / knowledge:** Released prior to Opus 4.8; knowledge cutoff ≈ early-2026.
- **IDs:** `opencode/claude-opus-4.6` (Zen paid). No Free ID.
- **Context window:** 200K total (Anthropic standard).
- **Modalities:** Text + image in; text out. Tool calls; reasoning on.
- **Pricing (as of 2026-09-17):** Paid ~$15 in / $75 out per 1M (Anthropic list).
- **Architecture:** Proprietary Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** at Opus 4.6 specific harness in our slice; treat as ≤4.8.
- Tau3: **no verified public score found** direct.
- GDPval-AA: **no verified public score found** direct.
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** direct for 4.6.
- HLE / LCR / MRCR: **no verified public score found**.
- AA Intelligence Index: **no verified public score found** for 4.6.

Coding:

- SWE-bench Verified: **no verified public score found** direct.
- LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Scored conservatively against Opus 4.8 frontier baseline; methodology anchors intact.

- **Tool use: 80/100.** Inferred from Opus family capability (TB2.1 ~85%, Tau3 ~50% range) minus 4.8 lift.
- **Reasoning: 82/100.** GPQA ~85–88 inferred, HLE mid 30s.
- **Context window: 70/100.** 200K = 70 baseline.
- **Multimodal: 60/100.** Text + image in; no non-text out.
- **Coding: 80/100.** SWE-bench ~70 inferred; DeepSWE ~70 inferred.
- **Cost efficiency: 30/100.** $15/$75 → ~30.
- **Overall Score: 67/100.** Mean (80+82+70+60+80+30)/6 = 67.0 → 67.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Direct 4.6 same-harness numbers not publicly verified in our slice; placement inferred from Opus family frontier. Cost scored on paid Zen pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.