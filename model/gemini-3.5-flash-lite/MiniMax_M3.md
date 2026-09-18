# Gemini 3.5 Flash Lite — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google / Gemini 3.5 Flash Lite (OpenCode Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's cheapest 3.5 Flash tier — ultra-cheap, multimodal lite.
- **Provider / access:** OpenCode Zen `opencode/gemini-3.5-flash-lite`; Google AI Studio / Vertex AI. Chat Completions-compatible.
- **Release / knowledge:** Released 2026; cutoff ≈ early-2026.
- **IDs:** `opencode/gemini-3.5-flash-lite` (Zen). No Free ID.
- **Context window:** ~1M.
- **Modalities:** Text/image/audio/video in; text out. Reasoning light.
- **Pricing (as of 2026-09-17):** Paid ~$0.10/$0.40.
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

- **Tool use: 72/100.** Inferred ≤ 3.5 Flash.
- **Reasoning: 76/100.** Inferred.
- **Context window: 95/100.** ~1M → 95.
- **Multimodal: 90/100.** Omni lite.
- **Coding: 74/100.** Inferred.
- **Cost efficiency: 95/100.** ~$0.10/$0.40 → ~95.
- **Overall Score: 84/100.** Mean (72+76+95+90+74+95)/6 = 83.7 → 84.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness 3.5 Flash Lite numbers not publicly verified in our slice; placement inferred.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.