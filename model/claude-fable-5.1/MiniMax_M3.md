# Claude Fable 5.1 — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic-variant / Claude Fable 5.1 (OpenCode Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic-family naming variant hosted on OpenCode Zen. Identity not publicly disclosed; treat as Anthropic-class sibling unless vendor clarifies.
- **Provider / access:** OpenCode Zen `opencode/claude-fable-5.1`. Chat Completions-compatible.
- **Release / knowledge:** 2026; cutoff unknown.
- **IDs:** `opencode/claude-fable-5.1`. No Free ID.
- **Context window:** 200K assumed (Anthropic family).
- **Modalities:** Text + image in; text out. Tool calls; reasoning on.
- **Pricing (as of 2026-09-17):** Paid (assumed Sonnet-class list ~$3/$15).
- **Architecture:** Proprietary (Anthropic-family).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** direct for Fable 5.1.

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / AA Index: **no verified public score found**.

Coding:

- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Provisional Sonnet-class placement.

- **Tool use: 80/100.** Inferred Sonnet-class.
- **Reasoning: 80/100.** Inferred Sonnet-class.
- **Context window: 70/100.** 200K assumed = 70.
- **Multimodal: 60/100.** Text + image in.
- **Coding: 80/100.** Inferred Sonnet-class.
- **Cost efficiency: 60/100.** $3/$15 assumed → ~60.
- **Overall Score: 72/100.** Mean (80+80+70+60+80+60)/6 = 71.7 → 72.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Identity of `claude-fable-5.1` not publicly disclosed by Anthropic; same-harness numbers not verified; placement inferred from Sonnet-class. Cost scored on assumed paid Zen pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.