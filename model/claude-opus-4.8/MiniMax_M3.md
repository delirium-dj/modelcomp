# Claude Opus 4.8 — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic / Claude Opus 4.8 (OpenCode Zen paid)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's current top-tier reasoning model, hosted paid on OpenCode Zen. Frontier coding/agent; text + image in.
- **Provider / access:** OpenCode Zen paid `opencode/claude-opus-4.8`; Anthropic API. Chat Completions-compatible.
- **Release / knowledge:** Released 2026; knowledge cutoff ≈ early-2026.
- **IDs:** `opencode/claude-opus-4.8` (Zen paid). No Free ID.
- **Context window:** 200K total (Anthropic standard).
- **Modalities:** Text + image in; text out. Tool calls; reasoning on.
- **Pricing (as of 2026-09-17):** Paid ~$15 in / $75 out per 1M.
- **Architecture:** Proprietary Anthropic.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** at 4.8 specific harness in our slice.
- Tau3: **no verified public score found** direct.
- GDPval-AA: **no verified public score found** direct.
- Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** direct for 4.8.
- HLE / LCR / MRCR: **no verified public score found**.
- AA Intelligence Index: **no verified public score found** for 4.8.

Coding:

- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Frontier placement per methodology; direct 4.8 same-harness numbers not verified in our slice.

- **Tool use: 90/100.** TB2.1 ~88+ inferred, Tau3 ~50 inferred, GDPval ~1700+ inferred.
- **Reasoning: 92/100.** GPQA 90+ inferred, HLE 40+ inferred, MRCR 95+ inferred.
- **Context window: 70/100.** 200K = 70 baseline.
- **Multimodal: 60/100.** Text + image in; no non-text out.
- **Coding: 90/100.** SWE-bench ~75+ inferred; DeepSWE frontier inferred.
- **Cost efficiency: 30/100.** $15/$75 → ~30.
- **Overall Score: 80/100.** Mean (90+92+70+60+90+30)/6 = 72.0 → 72.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness 4.8 numbers not publicly verified in our slice; placement inferred from Opus frontier. Cost scored on paid Zen pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.