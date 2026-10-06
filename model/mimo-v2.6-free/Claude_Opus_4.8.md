# MiMo V2.6 Free — findings by Claude Opus 4.8

- Source: Xiaomi (`opencode/mimo-v2-6-free`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** The free OpenCode Zen tier of Xiaomi's MiMo V2.6 Flash (same MIT open weights) — omnimodal input (image/video/audio), 1M context. Top use case: free omnimodal agentic coding.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2-6-free` (free tier of `mimo-v2.6-flash`); open weights (`XiaomiMiMo/MiMo-V2.6-Flash-RL`).
- **Release / knowledge:** 2026-09; knowledge cutoff not published.
- **IDs:** `opencode/mimo-v2-6-free` (Free Zen tier; same weights as MiMo V2.6 Flash).
- **Context window:** 1M total (per MiMo V2.6 Flash; curated stub lists 128K — **understated; verify**).
- **Modalities:** text, image, video, audio in; text out (omnimodal — stub says text-only; **flag**).
- **Pricing (as of 2026-10-03):** Free Zen tier ($0); free self-host (open weights).
- **Architecture:** 309B total / 15B active omnimodal sparse MoE (= MiMo V2.6 Flash).

### Raw benchmarks found

> Benchmarks are MiMo V2.6 Flash (same weights; this is the free tier).

Agent / tool use:

- OSWorld-Verified **80.8%**; Terminal-Bench 2.1 **87.6%**; Toolathlon-Verified **73.6%**; CyberGym **95.1%**; JobBench **61.2%**; GDPval-AA (normalized) **55.0%**; TB4.0 28.8%

Reasoning / knowledge:

- AA Intelligence Index **37.9**; AA-HLE **35.1%**; AA-LCR **74.3%**; CritPt 12%

Coding:

- DeepSWE **67.9%**; Terminal-Bench 2.1 **87.6%**; AA-SciCode **51.3%**; ProgramBench 26%

Multimodal:

- Image+video+audio input (AA-MMMU-Pro **73.1%**), text out

### Normalized scores (1–100)

- **Tool use: 83/100.** OSWorld-Verified 80.8%, TB2.1 87.6%, Toolathlon 73.6%, CyberGym 95.1%; TB4.0 28.8% caps it.
- **Reasoning: 76/100.** AA-LCR 74.3%, AA Index 37.9, AA-HLE 35.1%; CritPt 12% caps it.
- **Context window: 93/100.** 1M total with AA-LCR 74.3% (stub's 128K understated).
- **Multimodal: 87/100.** Image+video+audio in, text out — broad omnimodal.
- **Coding: 82/100.** DeepSWE 67.9%, TB2.1 87.6%, SciCode 51.3%; ProgramBench 26% is the floor.
- **Cost efficiency: 100/100.** Free Zen tier ($0); free self-host (open weights).
- **Overall Score: 84.2/100.** Half-up mean of the five quality dims (83/76/93/87/82). The free tier of MiMo V2.6 Flash — a strong free omnimodal agentic-coding model; `meta.json` context/modality need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Xiaomi MiMo-V2.6 technical report + HF card, Artificial Analysis, BenchLM). Benchmarks are the MiMo V2.6 Flash weights (this is the $0 tier); normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
