# MiMo-V2.6-Pro — findings by Mimo v2.6 Flash

- Source: Xiaomi/`xiaomi/mimo-v2.6-pro`
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (Xiaomi MiMo V2.6 Pro)
- **Short description:** Xiaomi's flagship MIT-licensed omnimodal MoE (1.02T total / 42B active), released 2026-09-21/22 alongside MiMo-V2.6-Flash — the #1 open-weights model on the AA Intelligence Index and Xiaomi's "on par with Claude Opus 5 / GPT-5.6 Sol on most agent benchmarks" claim (vendor characterization). **Self-report caveat: the author of this file is the `Mimo v2.6 Flash` reporting agent — a sibling Xiaomi model — so scores carry family-loyalty bias; check the peer `average.md` as corrective.**
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-pro` (plus `mimo-v2.6-pro-ultraspeed` variant per family docs); OpenRouter (`xiaomi/mimo-v2.6-pro`, $4.35/$8.70 listed there); weights on Hugging Face `XiaomiMiMo/MiMo-V2.6-Pro-RL`. Not on OpenCode Zen (no Free ID).
- **Release / knowledge:** 2026-09-21/22 (HF upload 2026-09-21; llm-stats/official page 2026-09-22). Knowledge cutoff: not published.
- **IDs:** `xiaomi/mimo-v2.6-pro`; no Zen Free ID bound to this slug.
- **Context window:** 1,048,576 tokens input (1M); up to 128K output (family spec card).
- **Modalities:** text, image, video, audio in; text out (omnimodal family); reasoning yes (adaptive effort); tool calls yes; JSON mode not confirmed in sources found.
- **Pricing (as of 2026-09-28):** Xiaomi API **$0.435 / 1M input, $0.0036 cached, $0.87 / 1M output** (cheapestinference / llm-stats round to $0.43/$0.87); AA cost per Index task **$0.13**; OpenRouter routes list $4.35/$8.70 (reseller markup).
- **Architecture:** MoE **1.02T total / 42B active**; **MIT** open weights (`MiMo-V2.6-Pro-RL`, BF16+FP8).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Xiaomi official announcement table (reproduced by PromptBluePrints) unless noted; rows marked ✅ also confirmed on llm-stats.

Agent / tool use:

- Terminal-Bench 2.1: **89.9%** ✅ <(llm-stats + Xiaomi table; frontier reference ~88+)
- Terminal-Bench 4.0: **34.9** <(Xiaomi table — harder variant)
- OSWorld-Verified: **82.0%** ✅ <(llm-stats + Xiaomi table)
- Toolathlon-Verified: **76.9%** ✅ <(llm-stats + Xiaomi table)
- AutomationBench v1.0.6: **53.1** <(Xiaomi table)
- JobBench: **62.0** <(Xiaomi table)
- GDPval-AA v2.1: **Elo 1,673** <(Xiaomi table; field frontier ~1,700+)
- MiMo Cyber Bench: **81.7%** ✅ <(llm-stats); CyberGym **94.0%** ✅, ExploitGym **17.8**, ExploitBench **47.9**, SEC-Bench Pro **66.3** <(llm-stats / Xiaomi table)
- Agents' Last Exam: **31.6** <(Xiaomi table)
- Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46, #1 open-weights model** <(AA leaderboard / Xiaomi announcement; open-weights top 3: MiMo-V2.6-Pro 46, GLM-5.3 45, Kimi K3 44; overall leaders Claude Opus 5.5 at 58)>
- GPQA Diamond / HLE / MMLU-Pro / MRCR for Pro: **no verified public score found** (AA component rows not extracted this pass)

Coding:

- DeepSWE v1.1: **71.9** <(Xiaomi table; frontier reference 74+ — field: Opus 5 74.0, GPT-5.6 Sol 73.0)>
- MiMo Code Bench: **63.2** <(Xiaomi table; Opus 5 68.6)>
- ProgramBench: **26.5** <(Xiaomi table; Opus 5 37.0)>
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- 1,048,576-token window documented (family spec / AA); MRCR / RULER retrieval: **no verified public score found**

Multimodal:

- Omnimodal inputs (text/image/video/audio) per family positioning (cheapestinference/llm-stats); AA validated text+image in.
- MMMU / MMMU-Pro / MathVision / MiMo Visual Coding value: **72.3** <(Xiaomi table — visual-agent row); MMMU family scores otherwise **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.1 89.9 clears the ~88 frontier reference, backed by OSWorld 82.0, Toolathlon 76.9, GDPval-AA Elo 1,673 and CyberGym 94.0; capped by AutomationBench 53.1 being merely mid-band and no Tau3 number.
- **Reasoning: 78/100.** The AA Intelligence Index 46 (#1 open-weights, ahead of GLM-5.3's 45 and Kimi K3's 44) sits well above the 20–35 mid band but below the 60+ frontier reference; capped further by GPQA/HLE component values not being extracted for Pro this pass.
- **Context window: 95/100.** 1,048,576 tokens is in the ≥1M tier (95–100); no retrieval measurement published, so not 100.
- **Multimodal: 92/100.** Native omnimodal input incl. audio and video (90–100 band); capped because only text+image is independently validated by AA and most multimodal benchmark rows are unpublished.
- **Coding: 86/100.** DeepSWE 71.9 (just under the 74 frontier), Terminal-Bench 2.1 89.9 (frontier) and MiMo Code Bench 63.2 are near-frontier, but SWE-bench Verified, LiveCodeBench and SciCode values are missing, which caps the score below 90.
- **Cost efficiency: 95/100.** $0.435/$0.87 with $0.0036 cached lands between the ~$0.10/$0.20 ≈ 97–99 and ~$0.60/$2.20 ≈ 92 anchors; no Zen Free ID, scored on Xiaomi API pricing.
- **Overall Score: 88/100.** Mean of the five quality dims (91 + 78 + 95 + 92 + 86) / 5 = 88.4 → 88; best fit: top open-weights frontier all-rounder for long-horizon agentic work — check `average.md` peer reports since this file is a sibling-model self-report.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-28
- Method: public internet research (Xiaomi announcement table via PromptBluePrints, Artificial Analysis leaderboard/model data, llm-stats comparison pages, CheapestInference spec/pricing review, TheModelGap provenance notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

