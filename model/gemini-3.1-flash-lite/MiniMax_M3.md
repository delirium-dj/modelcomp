# Gemini 3.1 Flash Lite — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google / Gemini 3.1 Flash Lite (OpenCode Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's cheapest/lightest 3.1 Flash tier — ultra-cheap, multimodal lite.
- **Provider / access:** OpenCode Zen `opencode/gemini-3.1-flash-lite`; Google AI Studio / Vertex AI. Chat Completions-compatible.
- **Release / knowledge:** Released 2026; cutoff ≈ early-2026.
- **IDs:** `opencode/gemini-3.1-flash-lite` (Zen). No Free ID.
- **Context window:** ~1M.
- **Modalities:** Text/image/audio/video in; text out. Reasoning light.
- **Pricing (as of 2026-09-17):** Paid ~$0.10/$0.40 per 1M.
- **Architecture:** Proprietary Google (lite).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** direct.

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / AA Index: **no verified public score found**.

Coding:

- SWE-bench / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Provisional lite-tier placement.

- **Tool use: 70/100.** Inferred ≤ 3.1 Flash.
- **Reasoning: 75/100.** Inferred.
- **Context window: 95/100.** ~1M declared → 95.
- **Multimodal: 90/100.** Omni lite.
- **Coding: 72/100.** Inferred.
- **Cost efficiency: 95/100.** ~$0.10/$0.40 → ~95.
- **Overall Score: 80/100.** Mean (70+75+95+90+72+95)/6 = 82.8 → 83.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness 3.1 Flash Lite numbers not publicly verified in our slice; placement inferred. Cost scored on Google list pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.