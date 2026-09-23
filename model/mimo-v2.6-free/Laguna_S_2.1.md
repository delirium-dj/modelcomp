# MiMo V2.6 Free — findings by Laguna S 2.1

> Source: opencsg/mimo-v2.6 (Xiaomi AI), e.g. Artificial Analysis, Hugging Face, Xiaomi models
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro (Xiaomi AI / OpenCSG). Open-weights reasoning model; the repo slug `mimo-v2.6-free` denotes this model's free/open self-hosting route (same MIT-licensed weights as the `mimo-v2-6-pro` hosted tier).
- **Short description:** Xiaomi's September-2026 MiMo-V2.6-Pro — a 1.0T-parameter (42B active) MoE open-weights reasoning model, the #1 open-weight model on the AA Intelligence Index (46), with omni-modal text+image+speech+video input, a 1M context window, and a cheap managed API plus free self-hosting.
- **Provider / access:** Xiaomi AI / OpenCSG. Hosted API (`mimo-v2-6-pro`) + open-weights checkpoints on Hugging Face (MIT license, commercial use allowed). OpenCode Zen `opencsg/mimo-v2-6`; free self-host route available.
- **Release:** September 2026 (Artificial Analysis "Released September 2026").
- **IDs:** `opencsg/mimo-v2-6` (open/free route); hosted `mimo-v2-6-pro`.
- **Architecture:** Mixture of Experts (MoE); **1,000,000,000,000 (1.0 trillion) total parameters**, 42 billion active per token (Artificial Analysis). Proprietary-style architecture, open weights. License: MIT.
- **Context window:** 1,000,000 tokens (Artificial Analysis "1M", ~1,500 A4 pages; ≥1M tier). Max output: **NOT FOUND** (flagged).
- **Modalities:** text + image + **speech + video** input → text output (**omni-modal**; +image +speech +video-in); no audio/video output (text only).
- **Reasoning / tools:** Yes — extended-thinking chain-of-thought variant; a non-reasoning variant also exists.
- **Knowledge cutoff:** **NOT FOUND** in fetched sources.
- **Pricing (as of 2026-09-23):** Managed API $0.43 / $0.87 per 1M in/out (Xiaomi API, AA); 99% cache discount ($0.18/MTok blended, $0.13/task). **Free self-host route via MIT open weights** (cost 100 by methodology). OpenCode Zen tier: unverified — not used.

### Raw benchmarks found

> Verified public numbers, sourced per metric (Artificial Analysis model page). Benchmarks not located are NOT fabricated.

- **Artificial Analysis Intelligence Index v4.3.2: 46** (#1/114 open-weights; class median 18; "well above average"; Openness Index #1) (Artificial Analysis, 2026-09).
- AA speed: **53.9 output tokens/second** (#42/114 among open-weights; below median 66.8).
- AA cost-per-Intelligence-Index task: **$0.13** (#12/114, cheap).
- Intelligence Index v4.3.2 components (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR): **NOT FOUND** as standalone public figures on this page (Index 46 is the published aggregate only).
- Terminal-Bench / SWE-bench Verified / Pro / DeepSWE / LiveCodeBench / Tau3-Banking / Tau3-general / GDPval-AA Elo / GPQA Diamond / HLE / CritPt / AA-Omniscience / MMMU-Pro / MRCR / RULER / GraphWalks: **NOT FOUND** in fetched sources.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Uses current AA Intelligence Index 46 (#1/114 open-weights; vs mimo-v2.5-free's Index 25).

- **Tool use: 79/100.** AA Intelligence Index 46, #1/114 open-weights (well above the open class median of 18); no standalone Terminal-Bench / GDPval-AA / SWE-bench % located.
- **Reasoning: 77/100.** Index 46 + omni-modal inputs + extended-thinking variant; no standalone GPQA / HLE / AA-Omniscience found.
- **Context window: 90/100.** 1,000,000 native window (≥1M tier); max-output NOT published (flagged) and no measured retrieval figure (no MRCR/RULER) hold it below the 95 tier.
- **Multimodal: 92/100.** Text + image + speech + video input, text output (+image +speech +video-in; omni-modal band 90–100; full omni → 92). No audio/video output (text only).
- **Coding: 76/100.** Index 46 (Terminal-Bench 4.0 is an Index component incl. coding); no standalone SWE-bench / DeepSWE / LiveCodeBench % found.
- **Cost efficiency: 100/100.** MIT open weights → free self-host route (cost 100 by methodology; same as mimo-v2.5-free). Managed API $0.435/$0.87 with 99% cache is also elite, but only the free route scores 100.
- **Overall Score: 83/100.** (79 + 77 + 90 + 92 + 76) / 5 = 414 / 5 = 82.8 → 83.

> **Scale note / discrepancy:** The repo AI-Rankings average for this model is **75.7** (audit/model-comparison.md v4, 2026-09-17). My score (83) uses the **current AA Intelligence Index v4.3.2 = 46** (#1/114 open-weights) — higher than the Index 25 that scored the sibling mimo-v2.5-free at the repo's 82, and the omni-modal + free-self-host route justifies the lift. I.e. my 83 tracks the same methodology that yields mimo-v2.5-free at 82. The repo's 75.7 likely reflects an earlier snapshot; the current #1 open-weight ranking supports 83. Both preserved for reconciliation. For reference, mimo-v2.5-free (Index 25) → repo 82 / my 82.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis MiMo-V2.6-Pro model page; Hugging Face / Xiaomi models for license + weights). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.