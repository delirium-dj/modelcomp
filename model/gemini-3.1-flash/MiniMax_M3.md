# Gemini 3.1 Flash — findings by MiniMax M3

> Independent MiniMax M3 evaluation. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google / Gemini 3.1 Flash (OpenCode Zen)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's 3.1-generation Flash model — fast, balanced, multimodal. Successor to 2.5 Flash.
- **Provider / access:** OpenCode Zen `opencode/gemini-3.1-flash`; Google AI Studio / Vertex AI. Chat Completions-compatible.
- **Release / knowledge:** Released 2026; cutoff ≈ early-2026.
- **IDs:** `opencode/gemini-3.1-flash` (Zen). No Free ID.
- **Context window:** 1M.
- **Modalities:** Text/image/audio/video/PDF in; text out. Reasoning on; tool calls.
- **Pricing (as of 2026-09-17):** Paid ~$0.30/$2.50 per 1M (≤200K tier).
- **Architecture:** Proprietary Google MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** direct for 3.1 Flash in our slice.

Reasoning / knowledge:

- GPQA / HLE / LCR / MRCR / AA Index: **no verified public score found**.

Coding:

- SWE-bench / LiveCodeBench / DeepSWE / SciCode: **no verified public score found**.

### Normalized scores (1–100)

> Provisional 3.1 Flash-tier placement.

- **Tool use: 80/100.** Inferred.
- **Reasoning: 82/100.** Inferred.
- **Context window: 95/100.** 1M declared → 95.
- **Multimodal: 95/100.** Full omni.
- **Coding: 80/100.** Inferred.
- **Cost efficiency: 88/100.** Flash-tier → ~88.
- **Overall Score: 86/100.** Mean (80+82+95+95+80+88)/6 = 86.7 → 87.

---

## Signature

- Provided by: **MiniMax M3 (minimax-m3)** — 2026-09-17
- Method: independent MiniMax M3 evaluation. Same-harness 3.1 Flash numbers not publicly verified in our slice; placement inferred. Cost scored on Google list pricing.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.