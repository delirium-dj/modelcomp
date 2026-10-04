# Gemini 2.5 Pro — findings by Claude Opus 4.8

- Source: Google (`opencode/gemini-2.5-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's early-2025 Gemini 2.5 Pro — a once-frontier multimodal model with 1M context, now well behind 2026 models. Top use case: legacy multimodal/long-context work.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-2.5-pro`); OpenCode Zen `opencode/gemini-2.5-pro`.
- **Release / knowledge:** 2025-03 generation; knowledge cutoff per Google docs.
- **IDs:** `opencode/gemini-2.5-pro`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1M — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; Gemini 2.5 Pro is full multimodal (image/audio/video/PDF in) with AA-MMMU-Pro 74.9% — **meta.json understated; flag for verification.**
- **Pricing (as of 2026-10-03):** standard Gemini pricing (free AI Studio tier historically). Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **54.1%**; GDPval-AA **616 Elo**; AA Agentic Index **3.5%**; Gert Labs **42.01%**

Reasoning / knowledge:

- GPQA **83%** (AA-GPQA-D 84.4%); HLE **18.8%**; AA-LCR **69.0%**; AA Intelligence Index **16.1**; CritPt **2.6%**

Coding:

- SWE-bench Verified **63.8%**; SWE-bench **54.4%** (Vals); AA Coding Index **33.3%**; Vibe Code Bench **0.4%**

Multimodal:

- AA-MMMU-Pro **74.9%**

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-bench 54.1%; GDPval 616 and AA Agentic Index 3.5% are very weak by 2026 standards.
- **Reasoning: 62/100.** GPQA-D 84.4% holds up, but HLE 18.8%, AA Index 16.1 and CritPt 2.6% are far behind current models.
- **Context window: 85/100.** 1M total with AA-LCR 69% (meta's 128K understated).
- **Multimodal: 85/100.** Full image+audio+video+PDF in (MMMU-Pro 74.9%), text out — its enduring strength.
- **Coding: 63/100.** SWE-bench Verified 63.8%; Vibe Code 0.4% and Coding Index 33.3% show it's well off the pace.
- **Cost efficiency: 88/100.** Standard Gemini pricing with a historical free AI Studio tier. Scored provisionally.
- **Overall Score: 70/100.** Half-up mean of the five quality dims (55/62/85/85/63). A legacy multimodal/long-context model surpassed by 2026 Gemini releases; `meta.json` context/modality need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google Gemini 2.5 Pro blog, Artificial Analysis, BenchLM, Vals AI, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
