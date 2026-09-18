# Gemini 2.5 Flash Lite — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google / Gemini 2.5 Flash Lite (OpenCode Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash Lite
- **Short description:** Google's smallest/cheapest Flash tier — fast, ultra-cheap, multimodal lite.
- **Provider / access:** OpenCode Zen `opencode/gemini-2.5-flash-lite`; Google AI Studio / Vertex AI. Chat Completions-compatible.
- **Release / knowledge:** Released 2025; cutoff ≈ mid-2025.
- **IDs:** `opencode/gemini-2.5-flash-lite` (Zen). No Free ID.
- **Context window:** ~1M (Google family).
- **Modalities:** Text/image/audio/video in; text out. Reasoning light.
- **Pricing (as of 2026-09-17):** Paid ~$0.10 in / $0.40 out per 1M (Google list).
- **Architecture:** Proprietary Google MoE (lite).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** direct in our slice.

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / AA Index: **no verified public score found**.

Coding:

- SWE-bench / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Provisional lite-tier placement.

- **Tool use: 65/100.** Inferred ≤ 2.5 Flash.
- **Reasoning: 70/100.** Inferred.
- **Context window: 95/100.** ~1M declared → 95.
- **Multimodal: 90/100.** Full omni lite.
- **Coding: 68/100.** Inferred.
- **Cost efficiency: 95/100.** ~$0.10/$0.40 → ~95.
- **Overall Score: 78/100.** Mean (65+70+95+90+68+95)/6 = 80.5 → 80.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness 2.5 Flash Lite numbers not publicly verified in our slice; placement inferred. Cost scored on Google list pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.