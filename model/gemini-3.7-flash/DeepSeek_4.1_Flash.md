# Gemini 3.7 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥4 independent sources).
> Newly confirmed independent (Vals AI): GPQA Diamond **93.94% (#5)**, LiveCodeBench **88.65% (#5)**, MMLU-Pro 90.12%, MMMU-Pro 88.96%, **SWE-bench 80.80%**, IOI 67.83%, Vals Index 51.27% (#25), Finance Agent v2 59.04%, **Terminal-Bench 4.0 12.12%**. Also LMArena `gemini-3.7-flash-high` 1486 (#18), Artificial Analysis Intelligence Index **39 (#61/227)**.
> **Conflicts surfaced:** (1) Model card self-reports AA Index 56 vs AA current page **39**. (2) Terminal-Bench: vendor Terminal-Bench 2.1 **85.8%** vs independent Terminal-Bench 4.0 **12.12%** — a large harness/version gap (v2.1 is near-saturated, v4.0 is the hard successor). (3) Pricing $0.75/$3.75 intro (expires 2026-12-31; then $1.50/$7.50) vs Vals' $1.50/$7.50 snapshot. (4) Audio: model card + AA list audio input; Vals omits it. (5) Max output 64K (card) vs 66K (Vals). (6) AA marks it deprecated (superseded by 3.8 Flash).
> Lineage: 3.6 Flash (2026-07-21) → **3.7 Flash (2026-08-13)** → 3.8 Flash (2026-09-02, newest); all three are 1M context.
> Sources: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/ · https://deepmind.google/models/model-cards/gemini-3-7-flash · https://artificialanalysis.ai/models/gemini-3-7-flash · https://www.vals.ai/models/google_gemini-3.7-flash · https://lmarena.ai/leaderboard/text

## Model card

- **Name:** Gemini 3.7 Flash (no "Free" wording; a free AI Studio tier exists)
- **Short description:** Google's August 2026 Flash-tier refinement of Gemini 3.6 Flash (2026-08-13), achieved through algorithmic improvements rather than a new pretraining run; large long-horizon coding gains. Superseded by Gemini 3.8 Flash.
- **Provider / access:** Gemini API, AI Studio, Gemini Enterprise Agent Platform, Spark. Closed; no self-hosting.
- **Release / knowledge:** 2026-08-13; knowledge cutoff March 2026 (some domains January 2025).
- **IDs:** `gemini-3.7-flash`. No Zen Free ID.
- **Context window:** 1,048,576 tokens; max output ~64,000–65,536.
- **Modalities:** text, image, audio and video input; text output; function calling/structured output; configurable thinking levels.
- **Pricing (as of 2026-10-09):** intro **$0.75 in / $3.75 out** per 1M (through 2026-12-31; doubles Jan 2027); cached input 90% off; blended ~$0.58 (AA).
- **Architecture:** proprietary; refinement of the 3.6 Flash reasoning foundation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **85.8%** (vendor, near-saturated) vs Terminal-Bench 4.0 **12.12%** (Vals, independent) — large gap
- Tau3-Banking 45% (AA); Finance Agent v2 59.04% (Vals); GDPval-AA 1525 Elo (vendor); AutomationBench 30.4%
- Agents' Last Exam 26.3%; OSWorld 2.0 47.9%; Harvey LAB-AA 90.7% (card) / 8.75% (Vals)

Reasoning / knowledge:

- GPQA Diamond **93.94% (#5)** (Vals); HLE-Verified 53.6% (card); MMLU-Pro **90.12%** (Vals)
- Artificial Analysis Intelligence Index **39 (#61/227)** — conflict: 56 (card)
- MMMU-Pro 88.96% (Vals); CharXiv 84.5% / 88.7% (card)

Coding:

- LiveCodeBench **88.65% (#5)** (Vals); SWE-bench **80.80%** (Vals); IOI 67.83%; SkillsBench 65.89%; Vibe Code Bench 70.39%
- FrontierCode 43.6%; SciCode 57.9%; DeepSWE 65.3% (vendor)

Long context:

- 1M window; GDM-MRCR v2 128K **97.0%**; AA-LCR 81.0%; no full-window (1M) figure.

### Normalized scores (1–100)

- **Tool use: 85/100.** Tau3 45%, Finance Agent 59.04% and a strong (near-saturated) TB2.1 favour it, but independent Terminal-Bench 4.0 at 12.12% and Agents' Last Exam 26.3% cap the score.
- **Reasoning: 88/100.** Independent GPQA 93.94% (#5) and MMLU-Pro 90.12% are frontier; HLE-Verified 53.6% and the AA Index conflict (56 vs 39) hold it below 90.
- **Context window: 96/100.** 1,048,576 tokens with 97.0% MRCR-v2 at 128K; the unmeasured full-window depth is the only gap.
- **Multimodal: 89/100.** Text + image + audio + video input (audio band) with MMMU-Pro 88.96%; text-only output caps it.
- **Coding: 85/100.** Independent LiveCodeBench 88.65%, SWE-bench 80.80% and IOI 67.83% are strong; TB4.0 12.12% and SciCode 57.9% keep it mid-band.
- **Cost efficiency: 90/100.** $0.75/$3.75 intro with 90%-off caching (~$0.58 blended) is near the ~92 band; doubles in Jan 2027 and the tier is superseded.
- **Overall Score: 89/100.** (85 + 88 + 96 + 89 + 85) / 5 = 88.6 → 89. Best fit: budget coding agents and document-heavy enterprise workflows.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Google 3.7 Flash launch blog + model card, Artificial Analysis model page, Vals AI model page, LMArena, adjacent 3.6/3.8 blog cross-checks). Independent Vals rows were promoted over the vendor card; the TB2.1-vs-TB4.0 gap and the AA/index conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
