# MiMo-V2.6-Flash — findings by Mimo v2.6 Flash

- Source: Xiaomi/`xiaomi/mimo-v2.6-flash`
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (Xiaomi MiMo V2.6 Flash)
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse-MoE workhorse (309B total / 15B active) released Sept 2026 as the cost-efficient sibling of MiMo-V2.6-Pro, aimed at long-horizon agentic coding, visual, general and research tasks. **Self-report caveat: the author of this file is the `Mimo v2.6 Flash` reporting agent — i.e. this very model — so the scores below are self-attribution-biased; treat the peer `average.md` as the corrective check.** Sibling entry: `../mimo-v2.6-free/` is the OpenCode Zen free tier of the same weights (do not double-count as a different model).
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-flash` (Chat Completions); aggregated on OpenRouter (`xiaomi/mimo-v2.6-flash`, avg $0.12/$1.28, providers vary). **No paid OpenCode Zen ID for this slug** (`noFreeId`); Zen's `opencode/mimo-v2-6-free` free tier lives in the sibling folder.
- **Release / knowledge:** 2026-09-21/22 (OpenRouter lists Sep 21, 2026; llm-stats Sep 22, 2026). Knowledge cutoff: not published in sources found.
- **IDs:** `xiaomi/mimo-v2.6-flash` (Xiaomi API, all-lowercase); no Zen Free ID bound to this slug.
- **Context window:** 1,048,576 tokens input (1.0M); max output not published (llm-stats output row "—"); technical report: `XiaomiMiMo/MiMo-V2.6-Flash-RL` repo (`MiMo_V2_6_technical_report.pdf`).
- **Modalities:** text, image, video, audio in; text out; reasoning yes (hybrid thinking; Artificial Analysis tracks the reasoning variant); tool calls yes (agentic-workflow positioning); JSON mode: not confirmed in sources found.
- **Pricing (as of 2026-09-28):** Xiaomi API **$0.14 / 1M input, $0.0028 / 1M cached input (98% cache discount), $0.28 / 1M output** (llm-stats, Artificial Analysis); OpenRouter blended avg $0.12/$1.28; AA cost rank **#6/116** at **$0.06 per Intelligence-Index task**. No $0 tier under this slug — free inference is the sibling `mimo-v2.6-free` entry.
- **Architecture:** sparse MoE **309B total / 15B active** per token, hybrid attention (OpenRouter/Xiaomi description); **MIT open weights** (llm-stats; Hugging Face `XiaomiMiMo/MiMo-V2.6-Flash`).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = "no verified public score found"; llm-stats tracks 16 individual rows for this model, values not all extractable this pass.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** <(llm-stats; Xiaomi harness; sibling Pro 89.9)>
- Terminal-Bench 4.0: **no verified public score found** (tracked row on llm-stats; value not extracted this pass)
- OSWorld-Verified: **80.8%** <(llm-stats)>
- Toolathlon-Verified: **73.6%** <(llm-stats; Pro 76.9)>
- MiMo Cyber Bench: **77.2%** <(llm-stats)>
- CyberGym: **95.1%** <(llm-stats — the one shared row Flash beats Pro on; Pro 94.0)>
- GDPval-AA: **55.0%** <(Artificial Analysis GDPval-AA v2.1 via OpenRouter; Index component)>
- AutomationBench v1.0.6 / JobBench / Program Bench / SEC-bench Pro / ExploitBench / ExploitGym / Agents' Last Exam / MiMo Coding Bench / MiMo Visual Coding / DeepSWE 1.1: **no verified public score found** (rows tracked on llm-stats vs Pro; individual values not extracted this pass)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **37.9 (displayed 38), #8 / 116** <(AA v4.3.2: AA-Briefcase, GDPval-AA, AutomationBench, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR — Artificial Analysis, via OpenRouter)>
- HLE: **35.1%** <(Artificial Analysis via OpenRouter)>
- AA-LCR v1.1: **74.3%** <(Artificial Analysis via OpenRouter)>
- CritPt: **12.0%** <(Artificial Analysis via OpenRouter)>
- AA-Omniscience Accuracy / Non-Hallucination Rate: **27.0% / 45.6%** <(Artificial Analysis via OpenRouter)>
- GPQA Diamond: **no verified public score found**
- MMLU-Pro / AIME: **no verified public score found**
- BenchLM overall: **no verified public score found** (BenchLM tracks the model; row not retrieved this pass)
- llm-stats Reasoning index: **43.1, #45 (5 evals)** — composite TrueSkill-style rating, not a raw %

Coding:

- SciCode (AA): **51.3%** <(Artificial Analysis via OpenRouter)>
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE 1.1: **no verified public score found** (shared llm-stats row; value not extracted)
- llm-stats Coding index: **36.3, #22 (9 evals)** — composite rating, not a raw %

Long context:

- 1,048,576-token window documented (llm-stats / models.dev); MRCR / RULER / GraphWalks retrieval quality: **no verified public score found**

Multimodal:

- Omnimodal inputs (text/image/video/audio) per llm-stats modality row + Xiaomi "omnimodal" positioning; Artificial Analysis validated text+image in.
- MMMU / MathVision / CharXiv / MiMo Visual Coding values: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 87.6 sits just under the ~88 frontier reference, backed by OSWorld-Verified 80.8, Toolathlon 73.6 and CyberGym 95.1; capped by the missing Tau3/GDPval-style numbers and the composite tool-use rank (#29 of the llm-stats leaderboard).
- **Reasoning: 72/100.** HLE 35.1 approaches the 40%+ frontier band, AA-LCR 74.3 is well above the mid band, and the AA Intelligence Index 37.9 (#8/116) tops the 20–35 mid tier; capped by GPQA/MMLU-Pro being absent, CritPt only 12.0, and Index raw value still far below the 60+ frontier reference.
- **Context window: 95/100.** 1,048,576 tokens lands in the ≥1M tier (95–100); not 100 because no long-context retrieval measurement (MRCR/RULER) has been published for this checkpoint.
- **Multimodal: 92/100.** Native omnimodal input including audio and video puts it in the 90–100 band (+audio in); capped because only text+image input is independently validated (AA) and no multimodal benchmark value (MMMU/CharXiv) was retrievable.
- **Coding: 82/100.** Terminal-Bench 2.1 87.6 is frontier-adjacent and SciCode 51.3 nearly reaches the 55%+ frontier reference, but SWE-bench Verified, LiveCodeBench and DeepSWE 1.1 values were not found, which caps the score below the 90–100 tier.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M with a 98% cache discount ($0.0028) and AA cost rank #6/116 ($0.06 per Index task) maps to the ~$0.10/$0.20 ≈ 97–99 methodology band; scored on paid Xiaomi pricing (no Zen Free ID for this slug).
- **Overall Score: 85/100.** Mean of the five quality dims (85 + 72 + 95 + 92 + 82) / 5 = 85.2 → 85; best fit: cheap, always-on long-horizon agentic coding driver with vision/audio input — cross-check `average.md` peer reports since this file is self-reported.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-28
- Method: public internet research (llm-stats model + comparison pages, Artificial Analysis model page, OpenRouter model page, models.dev catalogue); scores are normalized 1–100 interpretations, not official vendor scores. Self-report: this reporting agent IS the model being scored.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

