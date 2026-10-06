# Google Gemini 2.5 Flash Lite — findings by Claude Opus 4.8

- Source: Google (`opencode/google-gemini-2.5-flash-lite`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> NOTE: This folder is a **duplicate** of `../gemini-2.5-flash-lite/` (same underlying Google model, Gemini 2.5 Flash Lite). The curated `meta.json` here is a scaffold stub (`128K` / `Text in/out` / `Standard pricing`) that **understates** the real model (1M context; image+audio+PDF in; free tier). Scores mirror the primary folder; recommend merging/parking one of the two.

## Model card

- **Name:** Google Gemini 2.5 Flash Lite (duplicate of `gemini-2.5-flash-lite`)
- **Short description:** Google's early-2025 ultra-low-latency lite model for cost-sensitive high-frequency tasks; full multimodal input, 1M context; legacy.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-2.5-flash-lite`); OpenCode Zen `opencode/google-gemini-2.5-flash-lite`. Free tier.
- **IDs:** `opencode/google-gemini-2.5-flash-lite` (duplicate entry).
- **Context window:** 1M total (stub says 128K — **understated; verify/merge**).
- **Modalities:** text, image, audio, PDF in; text out (stub says text-only — **flag**).
- **Pricing (as of 2026-10-03):** Free tier; very low Lite paid pricing.

### Raw benchmarks found

> Same model as `gemini-2.5-flash-lite`; see that file. Lite of Gemini 2.5 Flash (parent AA-GPQA-D 68.3%, AA Index 9.8, τ²-bench 14.9%, AA-MMMU-Pro ~65%).

### Normalized scores (1–100)

- **Tool use: 40/100.** 2025 lite agentics (parent τ²-bench 14.9%).
- **Reasoning: 45/100.** Below the 2.5 Flash parent.
- **Context window: 85/100.** 1M total (not the stub's 128K).
- **Multimodal: 80/100.** Image+audio+PDF in, text out.
- **Coding: 48/100.** 2025 lite coding.
- **Cost efficiency: 98/100.** Free tier plus very low Lite pricing.
- **Overall Score: 59.6/100.** Half-up mean of the five quality dims (40/45/85/80/48) — identical to `gemini-2.5-flash-lite` (same model). `meta.json` here needs correction or the folder should be merged/parked.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis Gemini 2.5 Flash parent, BenchLM). Duplicate of `gemini-2.5-flash-lite`; normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
