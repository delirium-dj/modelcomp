# MiMo V2.6 Pro — findings by Qwen 3.8 27B

- Source: Xiaomi/mimo-v2.6-pro
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship open-weight model (September 2026), a 1.02T/42B MoE with a natively omnimodal RL checkpoint; at release it was the highest-scoring open-source model on the Artificial Analysis Intelligence Index.
- **Provider / access:** Xiaomi platform API (`mimo-v2.6-pro`, Chat Completions-style endpoint); OpenCode Zen `xiaomi/mimo-v2.6-pro`; open weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Pro-RL`), MIT licence.
- **Release / knowledge:** released 2026-09-21 (AA model page) / September 2026 (official MiMo-V2.6 series page); knowledge cutoff not published in sources found.
- **IDs:** `xiaomi/mimo-v2.6-pro` (no Free ID on Zen; paid API + open weights).
- **Context window:** 1M tokens (1,050,000 per OpenRouter model page); max output not published in sources found.
- **Modalities:** text/image/audio/video in (natively omnimodal RL checkpoint per BenchLM), text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $0.435 in / $0.87 out per 1M on Xiaomi API (llm-stats / codersera); cached input ~$0.003–0.004 per 1M; same pricing as the V2.5 series API. Paid (very low-cost) — open weights also available.
- **Architecture:** ~1.02T total / 42B active, MoE, open weights (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** (BenchLM)
- Terminal-Bench 4.0: **34.9%** (BenchLM; AA run 34.8%)
- GDPval-AA: **1673** (BenchLM)
- AA-Briefcase: **Elo 1517**
- Toolathlon-Verified: **76.9%**
- AutomationBench: **53.1%**; AA-AutomationBench: **58.6%**
- OSWorld-Verified: **82%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.32 / #1 open-source** (top open-weight result at release)
- AA-HLE: **49.4%**
- AA-LCR: **86.3%**
- MLCR-AA: **18.3%**
- CritPt: **26.6%**
- AA-Omniscience Accuracy / Hallucination Rate: **34.8% / 40.6%**
- GPQA Diamond: no verified public score found

Coding:

- DeepSWE: **71.9%**
- AA-SciCode: **60.9%**
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- 1M window; MLCR-AA **18.3%** suggests retrieval degrades at very long context; no MRCR/RULER value at 512K+ reported

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 89.9% and OSWorld 82% are frontier-grade, but the much harder TB4.0 lands at 34.9% and GDPval-AA 1673 sits just under the 1750+ frontier line; strong mid-to-high band with a visible harness split.
- **Reasoning: 78/100.** HLE 49.4% and LCR 86.3% are strong, and it is the #1 open-weight on the AA Index (46.32), yet MLCR 18.3% and CritPt 26.6% keep it clearly below the 90+ frontier band.
- **Context window: 95/100.** 1M-token window (≥1M tier floor 95); the low MLCR-AA 18.3% is a retrieval caveat, but no 512K+ retrieval test was found to justify dropping below the tier.
- **Multimodal: 90/100.** Natively omnimodal input (text/image/audio/video) on the RL checkpoint — top of the audio-in tier; text-only output.
- **Coding: 82/100.** DeepSWE 71.9% (just under the 74%+ frontier marker) and SciCode 60.9% are strong, TB2.1 coding 89.9% is elite, but TB4.0 34.9% and missing SWE-bench numbers cap the score.
- **Cost efficiency: 94/100.** $0.435/$0.87 per 1M with ~$0.003/M cached input is far below the $0.60/$2.20 ≈ 92 reference, plus MIT open weights for self-hosting.
- **Overall Score: 85/100.** (80 + 78 + 95 + 90 + 82) / 5 = 85.0 → 85; best fit: the best-value open-weight omni model for long-context and multimodal agentic work.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (BenchLM model page updated 2026-09-28, Artificial Analysis model page 2026-09-21, llm-stats / codersera / cldnavi release coverage, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
