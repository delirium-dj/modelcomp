# Gemini 2.5 Flash — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google / Gemini 2.5 Flash (OpenCode Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's prior-gen Flash model — fast, cheap, balanced. Multimodal (text/image/audio/video/PDF).
- **Provider / access:** OpenCode Zen `opencode/gemini-2.5-flash`; Google AI Studio / Vertex AI. Chat Completions-compatible.
- **Release / knowledge:** Released 2025; cutoff ≈ mid-2025.
- **IDs:** `opencode/gemini-2.5-flash` (Zen). No Free ID.
- **Context window:** 1M total.
- **Modalities:** Text/image/audio/video/PDF in; text out. Reasoning on; tool calls.
- **Pricing (as of 2026-09-17):** Paid ~$0.30 in / $2.50 out per 1M (Google list, ≤200K tier).
- **Architecture:** Proprietary Google MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** direct in our slice for 2.5 Flash; treat as ≤ 3.x Flash.

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / AA Index: **no verified public score found**.

Coding:

- SWE-bench / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Provisional mid-frontier placement.

- **Tool use: 75/100.** Inferred ≤ 3.x Flash.
- **Reasoning: 78/100.** Inferred.
- **Context window: 95/100.** 1M declared → 95–100; choose 95 without verified MRCR.
- **Multimodal: 95/100.** Full omni.
- **Coding: 75/100.** Inferred.
- **Cost efficiency: 88/100.** ~$0.30/$2.50 → ~88.
- **Overall Score: 84/100.** Mean (75+78+95+95+75+88)/6 = 84.3 → 84.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness 2.5 Flash numbers not publicly verified in our slice; placement inferred. Cost scored on Google list pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.