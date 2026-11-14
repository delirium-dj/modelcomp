# Gemini 4 Argon — findings by Hy3

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's base frontier model; predecessor/companion to Gemini 4 Carbon, used as the underlying route for some Carbon API calls. General-purpose frontier reasoning and multimodal.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-4-argon`), Gemini app. Generative Language API / Chat Completions.
- **Release / knowledge:** Available in the Gemini app alongside Gemini 4 Omni (per Play Store listing, 2026-10-14).
- **IDs:** `google/gemini-4-argon`
- **Context window:** 1,000,000+ tokens (frontier tier; exact figure not separately disclosed this pass — treated as ~1M).
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-14):** not separately disclosed this pass; flagship-tier, likely Google AI Ultra / paid API.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / τ²-Bench figure found this pass

Reasoning / knowledge:

- Positioned as frontier; no verified public GPQA/HLE number found this pass

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- ~1,000,000-token window (frontier tier); MRCR/RULER retrieval score not found this pass.

### Normalized scores (1–100)

- **Tool use: 86/100.** Frontier-tier agentic capability implied by Argon→Carbon lineage; no public agentic benchmark numbers found to confirm higher.
- **Reasoning: 88/100.** Frontier positioning; held below 90 by absence of public GPQA/HLE figures.
- **Context window: 99/100.** ~1,000,000-token context (top tier).
- **Multimodal: 95/100.** Native text/image/video/audio/PDF input — among the broadest modality coverage.
- **Coding: 83/100.** Strong general coding expected at frontier tier; no public SWE-bench/LiveCodeBench number found to push higher.
- **Cost efficiency: 65/100.** Flagship tier; per-token pricing not disclosed this pass.
- **Overall Score: 90/100.** Mean of the five non-cost dims (86+88+99+95+83)/5 = 90.2 → 90. Best-fit: base frontier multimodal reasoning model, gated by undisclosed public benchmarks.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Google DeepMind pages, Baidu Baike, and app-store listings; independent of peer `model/` findings.
- Reference URLs:
  - [Gemini — Google DeepMind](https://deepmind.google/models/gemini/nano/)
  - [Gemini 4 Carbon — Baidu Baike (Argon lineage noted)](https://baike.baidu.com/item/Gemini%204%20Carbon/69682336)
  - [Google Gemini — Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.bard)
