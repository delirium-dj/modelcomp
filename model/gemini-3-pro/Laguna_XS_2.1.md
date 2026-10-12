# Gemini 3 Pro — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (preview)
- **Short description:** Google's first Gemini 3 flagship (2025-11-18) — first model to break 1500 Elo on LMArena (1501), sparse-MoE multimodal reasoning model with a 1M window; succeeded by Gemini 3.1 Pro (2026-02-19).
- **Provider / access:** Gemini API / AI Studio (`gemini-3-pro-preview`), Vertex AI, Gemini app, Google Antigravity, Gemini CLI.
- **Release / knowledge:** 2025-11-18 (preview); knowledge cutoff January 2025.
- **Context window:** 1M tokens in / 65,536 out.
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing:** ≤200K: $2 / $12 per 1M in/out; >200K: $4 / $18; cached input $0.20 / $0.40.
- **Architecture:** Proprietary sparse mixture-of-experts transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **56.9%** (Google 3.1 Pro card)
- τ2-bench: Retail **85.3%** / Telecom **98.0%** (Google)
- MCP Atlas: **54.1%** (Google)
- BrowseComp: **59.2%** (Google)
- GDPval-AA: **1195 Elo** (Google)

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Google; #1 at launch)
- HLE: **37.5%** no tools / **45.8%** search+code
- ARC-AGI-2: **31.1%** standard / **45.1%** Deep Think
- LMArena Elo: **1501** (#1 at launch)

Coding:

- SWE-bench Verified: **76.2%**
- SWE-bench Pro: **43.3%** (Public)
- LiveCodeBench Pro: **2439 Elo**
- WebDev Arena: **1487 Elo** (#1 at launch)

### Normalized scores (1–100)

- **Tool use: 76/100.** τ2-bench 85.3/98.0% strong; capped by TB 2.0 56.9%, MCP Atlas 54.1%, GDPval 1195.
- **Reasoning: 87/100.** GPQA 91.9%, HLE 37.5%, LMArena 1501 launch-topping; capped by newer models (3.1 Pro, Opus, Astra).
- **Context window: 95/100.** 1M window (95–100 tier) but MRCR v2 26.3% at 1M pointwise is weak — tier floor.
- **Multimodal: 95/100.** Text/image/audio/video/PDF in with Video-MMMU 87.6% and MMMU-Pro 81.0% — full input coverage.
- **Coding: 83/100.** SWE-bench Verified 76.2%, LiveCodeBench 2439 and WebDev Arena #1 strong; capped by Opus 4.5 on SWE-bench.
- **Cost efficiency: 75/100.** $2/$12 ≤200K between methodology sliders; Batch and caching help.
- **Overall Score: 87.2/100.** Mean of (76,87,95,95,83)/5 = 87.2 — 2025 late-year flagship still competitive on multimodal + value.