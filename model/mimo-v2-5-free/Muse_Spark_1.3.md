# MiMo V2.5 Free — findings by Muse Spark 1.3

- Source: Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: also covers the `Xiaomi MiMo-V2.5 Free` alias — same Zen ID `opencode/mimo-v2.5-free`.

## Model card

- **Name:** MiMo V2.5 Free (also requested as Xiaomi MiMo-V2.5 Free — same model)
- **Short description:** Native omni-modal open-weights MoE by Xiaomi for text, image, video, audio understanding plus strong agentic coding. Free capped tier on OpenCode Zen.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.5-free`), `https://opencode.ai/zen/v1/chat/completions`. Native: Xiaomi API Platform / AI Studio, Hugging Face `XiaomiMiMo/MiMo-V2.5` (MIT).
- **Release:** 2026-04-22 / 2026-04-24 (Zen). Knowledge 2024-12 (models.dev).
- **IDs:** `mimo-v2.5-free` (Zen cap); native `mimo-v2.5`
- **Context window:** **200,000 Zen cap / 32,000 out** (models.dev, Pi). Native base: **1M** (256K base checkpoint + 1M instruct). Zen score uses 200K cap.
- **Modalities:** models.dev: **text, image, audio, video in; text out**; reasoning = yes; tool_call = true; attachment = true; open_weights = true. Pi lists text+image (partial view) — full is 4-input per models.dev.
- **Pricing:** Free / Free / Free on Zen (limited time, data may be used). Native Xiaomi Token Plan: Input cache miss $0.14 / hit $0.0028, Output $0.28 per 1M. BenchmarkList tracker: $0.105 in / $0.28 out.
- **Architecture:** 310B total, 15B active, hybrid SWA/GA 5:1 (128 window), 3-layer MTP, 729M ViT + audio encoder, 48T tokens pre-train.

### Raw benchmarks found (base `mimo-v2.5`; Zen Free shares weights, capped context)

- Terminal-Bench 2.1: **63.7%** (rank 43/172, 75th pct); Terminal-Bench 2.0: **65.8%** (HF eval); Terminal-Bench Hard: **41.7%** (rank 29/326, 91st pct)
- Tau2 Telecom: **90.6%** (rank 49/332, 85th pct); Tau3-Banking: **8.7%** (BenchmarkList, 42nd pct) vs **69.5% Tau3 Bench** (RankedAGI, different harness — variance flagged)
- GDPval-AA: **1,148 Elo** (rank 66/334, 80th pct)
- Claw-Eval: vendor table Claw-Eval Text **65.8** (vs Opus 4.6 65.4, K2.6 66.7); ClawProBench **60.39** (rank 13/48, 74th pct); general subset **62.3** Pareto-frontier per Xiaomi
- Reasoning: Intelligence Index **38** (AA); HLE **27.2%**; GPQA **81.6%**; MMLU Pro **82.9%**; MMMU Pro 80.0%
- Coding: SWE Verified **71.0%**; SWE Pro **56.1%**; LiveCodeBench **81.5%**; SciCode **43.1%**; Vibe **42.2%**; MiMo Coding Bench **62.3** (tie K2.6); Coding Agent **71.8**; RankedAGI Coding 68.3 / Agentic 72.7 / Overall 64.0
- BenchLM `mimo-v2-5`: **58.3/100, #74/218**

### Normalized scores (1–100)

- **Tool use: 78/100.** TB Hard 91st pct, Tau2 90.6%, GDPval 80th pct, Claw top-quartile. Dragged by Tau3-Banking 8.7% on one harness.
- **Reasoning: 72/100.** GPQA 81.6%, MMLU Pro 82.9%, solid but below 90%+ frontier.
- **Context window: 70/100.** Zen Free capped 200K/32K. Native 1M would be 100 — note cap for long-repo work.
- **Multimodal: 95/100.** Full 4-input omni (text/image/video/audio), text out. Best input coverage in this file.
- **Coding: 78/100.** SWE 71%, SWE-Pro 56.1%, LiveCode 81.5%, Vibe 42.2% — well-rounded mid-frontier.
- **Cost efficiency: 100/100.** $0 Zen free.
- **Overall Score: 82/100.** Best free omni + balanced agent/coding; use native 1M endpoint when Zen cap binds.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
