# DeepSeek-V4-Vision-Exp — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: DeepSeek / V4-Vision-Exp (experimental)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Vision-Exp
- **Short description:** DeepSeek's experimental vision-enabled V4 variant. Multimodal input (image + text); reasoning on; tool calls.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4-vision-exp` (assumed paid). Chat Completions.
- **Release / knowledge:** 2026 experimental; cutoff ≈ mid-2026.
- **IDs:** `opencode/deepseek-v4-vision-exp`. No Free ID.
- **Context window:** ~128K–200K assumed (DeepSeek family).
- **Modalities:** Text + image in; text out. Reasoning on; tool calls.
- **Pricing (as of 2026-09-17):** Paid (assumed ~$0.14/$0.28 per 1M DeepSeek-class).
- **Architecture:** DeepSeek-family MoE (open-weights likely).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** direct for V4-Vision-Exp.

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / AA Index: **no verified public score found** direct.

Coding:

- SWE-bench / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Provisional DeepSeek-class placement; experimental status.

- **Tool use: 75/100.** Inferred from DeepSeek V3.x family.
- **Reasoning: 78/100.** Inferred DeepSeek V3.x reasoning.
- **Context window: 70/100.** ~128K–200K assumed = 70.
- **Multimodal: 75/100.** Text + image in (vision experimental).
- **Coding: 78/100.** Inferred DeepSeek V3.x coding.
- **Cost efficiency: 92/100.** DeepSeek-class cheap ~$0.14/$0.28 → ~92.
- **Overall Score: 78/100.** Mean (75+78+70+75+78+92)/6 = 78.0 → 78.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness V4-Vision-Exp numbers not publicly verified in our slice; placement inferred from DeepSeek-family baseline. Cost scored on assumed DeepSeek-class pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.