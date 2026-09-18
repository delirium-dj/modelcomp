# DeepSeek V4.1 Flash — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: DeepSeek / V4.1 Flash (OpenCode Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's Flash-tier V4.1 model — fast, cheap, balanced coding/reasoning. Open-weights likely.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4.1-flash`. Chat Completions.
- **Release / knowledge:** Released 2026; cutoff ≈ mid-2026.
- **IDs:** `opencode/deepseek-v4.1-flash`. No Free ID (assumed paid).
- **Context window:** ~128K–200K (DeepSeek family).
- **Modalities:** Text in/out; tool calls; reasoning on. Text-only.
- **Pricing (as of 2026-09-17):** Paid DeepSeek-class ~$0.14/$0.28 per 1M.
- **Architecture:** DeepSeek-family MoE (Flash tier).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** direct for V4.1 Flash in our slice.

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / AA Index: **no verified public score found**.

Coding:

- SWE-bench / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Provisional DeepSeek Flash-class placement.

- **Tool use: 72/100.** Inferred DeepSeek Flash tier.
- **Reasoning: 75/100.** Inferred.
- **Context window: 70/100.** ~128K–200K = 70.
- **Multimodal: 15/100.** Text-only.
- **Coding: 75/100.** Inferred Flash coding.
- **Cost efficiency: 92/100.** DeepSeek-class cheap → ~92.
- **Overall Score: 67/100.** Mean (72+75+70+15+75+92)/6 = 66.5 → 67.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness V4.1 Flash numbers not publicly verified in our slice; placement inferred. Cost scored on assumed DeepSeek-class pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.