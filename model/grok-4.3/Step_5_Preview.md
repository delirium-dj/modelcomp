# Grok 4.3 — findings by Step 5 Preview

- Source: xAI / Grok 4.3 (`opencode/grok-4.3`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's April 2026 general-reasoning flagship — the first Grok with native video input (plus PDF/slides document generation), a 1M context and the cheapest frontier-class token rates ($1.25/$2.50, cached $0.20) with GPQA Diamond 90.1% and the lowest frontier hallucination rate (25%); superseded by Grok 4.5 in July 2026.
- **Provider / access:** xAI/SpaceXAI API (`grok-4.3`), OpenRouter (`x-ai/grok-4.3`), OpenCode Zen (`opencode/grok-4.3`), Amazon Bedrock, Opper (EU hosting); SuperGrok Lite ($10/mo) and above in the apps; OpenAI-compatible endpoint.
- **Release / knowledge:** apps beta 2026-04-17, API GA 2026-04-30 (The AI Rankings, opper.ai); knowledge cutoff December 2025; superseded by Grok 4.5 (2026-07-08) — still available and still the only Grok with native video + 1M context.
- **IDs:** `xai/grok-4.3`, `x-ai/grok-4.3` (OpenRouter), `opencode/grok-4.3` (Zen).
- **Context window:** 1,000,000 total (all sources agree); requests above 200K input bill at double rate ($2.50/$5.00).
- **Modalities:** text, image and video in; text out; structured document generation (PDF, spreadsheets, slides); always-on reasoning; tool/function calling; multilingual 160+ (app-level).
- **Pricing (as of 2026-10-21):** $1.25/$2.50 per 1M, cached input $0.20 (The AI Rankings, llm-stats, opper.ai); >200K input doubles to $2.50/$5.00; ~171 tok/s output with a slow ~12s time-to-first-token.
- **Architecture:** proprietary; parameter count not published.

### Raw benchmarks found

Artificial Analysis (primary) + Vals AI / xAI materials via BenchLM and The AI Rankings:

Agent / tool use:

- τ²-bench: **97.7%** (xAI materials / Artificial Analysis — saturated harness)
- Terminal-Bench 2.1 (Vals): **41.9%** (Vals AI via BenchLM) — weak for a flagship
- GDPval-AA: **1,018 Elo / 29.2%** normalized (Artificial Analysis / OpenRouter via BenchLM) — low
- AA Agentic Index: **17.2%** (Artificial Analysis via BenchLM)
- APEX-Agents (AA): **17.0%** (Artificial Analysis via BenchLM)
- Gert Labs: **43.9%** (Gert Labs via BenchLM); ResearchClawBench: **12.4%** (ResearchClawBench via BenchLM)
- Tau3-Banking / Claw-Eval / MCP-Atlas / OSWorld: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (Artificial Analysis); **91.4%** (Vals AI)
- HLE: **35.0%** (Artificial Analysis via The AI Rankings); **37.2%** (AA-HLE via BenchLM)
- AA Intelligence Index: **53.2** launch-era (~38th rank, The AI Rankings); **37.6%** on the current mid scale (BenchLM); **25** on the re-based v4.3 (11 Sep 2026, 91st of 200)
- MMLU-Pro (Vals): **85.8%** (Vals AI via BenchLM)
- IFBench: **81.3%** (Artificial Analysis via BenchLM) — instruction following strength
- AA-LCR (long-context reasoning): **64.3%** (OpenRouter/AA via BenchLM) — mid
- CritPt: **8.0%** (OpenRouter/AA via BenchLM) — weak
- AA-Omniscience: Accuracy **34.6%**, Hallucination Rate **25.0%** (OpenRouter/AA via BenchLM) — lowest hallucination rate on the frontier boards (TeqVolt)
- FrontierMath v2: **42.8%** Tiers 1–3 / **14.6%** Tier 4 (Epoch AI via BenchLM)

Coding:

- SWE-bench Verified (Vals): **71.4%** (Vals AI via BenchLM)
- LiveCodeBench (Vals): **84.5%** (Vals AI via BenchLM)
- SciCode: **47.3%** / **48.3%** (Artificial Analysis via BenchLM)
- AA Coding Index: **42.3%** (Artificial Analysis via BenchLM)
- SWE-bench Pro: **not published by xAI** — conceded to trail Claude Opus 4.7 by double-digit points (The AI Rankings)
- Terminal-Bench 2.1 (Vals): **41.9%** (listed above)
- DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **64.3%** long-context reasoning (OpenRouter/AA via BenchLM) — mid-band despite the 1M window; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): MMMU-Pro 78.1% (Artificial Analysis); Design Arena Website 1196 Elo (OpenRouter).

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-bench 97.7% is a top tool-calling result, but it is a saturated harness; the honest agentic picture is GDPval 1,018 Elo (29.2%), AA Agentic Index 17.2%, APEX-Agents 17.0%, Terminal-Bench 2.1 41.9% and Gert Labs 43.9% — all mid-to-weak, matching xAI's own concession that agentic coding trails Opus 4.7 by double digits.
- **Reasoning: 82/100.** GPQA Diamond 90.1–91.4% is frontier-band science reasoning, MMLU-Pro 85.8% and IFBench 81.3% are strong, and the 25.0% hallucination rate is best-in-class honesty; capped by HLE 35–37.2%, AA-LCR 64.3%, CritPt 8.0%, FrontierMath Tier 4 14.6% and a mid-pack composite index.
- **Context window: 95/100.** 1M native window with video input lands in the ≥1M tier; AA-LCR 64.3% is only mid-band and no ≥98% retrieval-at-512K evidence exists — 95 on window size, capped on measured retrieval.
- **Multimodal: 88/100.** Text, image and video in (video-in tier 75–90) with text out plus native structured-document generation (PDFs, spreadsheets, slides); MMMU-Pro 78.1% is solid; no audio input or non-text model output.
- **Coding: 72/100.** SWE-bench Verified 71.4% and LiveCodeBench 84.5% are mid-to-upper band, but SciCode ~47–48%, AA Coding Index 42.3%, Terminal-Bench 2.1 41.9% and xAI's unpublished SWE-bench Pro (self-declared double-digit deficit to Opus 4.7) put it clearly below the frontier coding pack.
- **Cost efficiency: 85/100.** $1.25/$2.50 with $0.20 cached sits near the ~$1.25/$4.25 ≈ 88 reference band on the cheaper side; the >200K double-rate cliff and slow ~12s TTFT are the practical caveats.
- **Overall Score: 81/100.** Mean of (70 + 82 + 95 + 88 + 72) / 5 = 81.4 → 81. Best fit: cheap high-volume science reasoning and video/document analysis at 1M context — not the pick for frontier agentic coding.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (The AI Rankings launch record, Artificial Analysis/Vals AI/Epoch AI/OpenRouter figures via BenchLM, opper.ai, teqvolt); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
