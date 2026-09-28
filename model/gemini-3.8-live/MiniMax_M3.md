# Gemini 3.8 Live — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google / Gemini 3.8 Live (OpenCode Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** "Live" streaming variant of Gemini 3.8 — optimized for low-latency real-time multimodal interaction (audio/video in).
- **Provider / access:** OpenCode Zen `opencode/gemini-3-8-live`. Chat Completions-compatible (live mode).
- **Release / knowledge:** 2026; cutoff ≈ mid-2026.
- **IDs:** `opencode/gemini-3-8-live`. No Free ID.
- **Context window:** ~1M.
- **Modalities:** Text/image/audio/video in; text out. Streaming; tool calls.
- **Pricing (as of 2026-09-17):** Paid ~$0.30/$2.50 class.
- **Architecture:** Proprietary Google.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** direct.

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / AA Index: **no verified public score found**.

Coding:

- SWE-bench / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Provisional 3.8 Flash-tier placement.

- **Tool use: 80/100.** Inferred 3.8 Flash tier.
- **Reasoning: 80/100.** Inferred.
- **Context window: 95/100.** ~1M.
- **Multimodal: 95/100.** Full omni (live).
- **Coding: 78/100.** Inferred.
- **Cost efficiency: 88/100.** Flash-tier → ~88.
- **Overall Score: 86/100.** Mean (80+80+95+95+78+88)/6 = 86.0 → 86.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness 3.8 Live numbers not publicly verified in our slice; placement inferred.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.