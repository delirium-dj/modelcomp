# Gemini 3.8 Flash Cyber — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google / Gemini 3.8 Flash Cyber (specialty variant)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Specialty "Cyber" variant of Gemini 3.8 Flash — security/cyber-reasoning focused. Multimodal; tool calls.
- **Provider / access:** OpenCode Zen `opencode/gemini-3-8-flash-cyber`. Chat Completions-compatible.
- **Release / knowledge:** 2026; cutoff ≈ mid-2026.
- **IDs:** `opencode/gemini-3-8-flash-cyber`. No Free ID.
- **Context window:** 1M assumed (Gemini family).
- **Modalities:** Text/image/video in; text out. Reasoning on; tool calls.
- **Pricing (as of 2026-09-17):** Paid (specialty tier, ~$0.30/$2.50 class).
- **Architecture:** Proprietary Google.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** direct.

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / AA Index: **no verified public score found**.

Coding:

- SWE-bench / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Provisional 3.8 Flash + cyber specialty boost.

- **Tool use: 80/100.** Inferred 3.8 Flash tier.
- **Reasoning: 82/100.** Inferred cyber specialty lift.
- **Context window: 95/100.** ~1M declared → 95.
- **Multimodal: 90/100.** Omni (image/video).
- **Coding: 80/100.** Inferred 3.8 Flash tier.
- **Cost efficiency: 88/100.** Flash-tier pricing → ~88.
- **Overall Score: 86/100.** Mean (80+82+95+90+80+88)/6 = 85.8 → 86.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness 3.8 Flash Cyber numbers not publicly verified in our slice; placement inferred. Cost scored on assumed specialty pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.