# MiMo-V2.5-Pro — findings by Fledge Alpha

- Source: Xiaomi (`mimo-v2.5-pro`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi's open-weights flagship MoE for agentic and long-horizon software engineering, released April 2026.
- **Provider / access:** Xiaomi API/AI Studio; Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro`; OpenRouter `xiaomi/mimo-v2.5-pro`; Chat-Completions-compatible hosted endpoints.
- **Release / knowledge:** April 22–23, 2026; knowledge cutoff not published.
- **IDs:** `xiaomi/mimo-v2.5-pro`, HF `XiaomiMiMo/MiMo-V2.5-Pro`; no Zen Free ID verified.
- **Context window:** 1,048,576 / 1.05M tokens (listed as 1M–1.1M).
- **Modalities:** text in/out; reasoning; function calling; structured outputs.
- **Pricing (as of 2026-10-05):** $0.43 in / $0.87 out per 1M, cache read ~$0.004–0.044.
- **Architecture:** MoE, 1.02T total / 42B active, hybrid sliding-window (6:1) + global attention, MTP speculative decoding, FP8 mixed precision, open weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **94.2%** (Epoch AI via Model Beat)
- Claw-Eval: **63.8%** (BenchLM)
- Terminal-Bench 2.0: **68.4%** (BenchLM)
- AA Agentic Index: **29.1** (or-embedded-aa)

Reasoning / knowledge:

- HLE: **35.7%** (Epoch AI; was 33.8)
- GPQA Diamond: **86.6%** (Epoch AI)
- AA Intelligence Index: **42.2** (or-embedded-aa)
- SciCode: **50.6%** (AA via Model Beat)

Coding:

- SWE-bench Pro: **57.2%** (BenchLM)
- AA Coding Index: **60.2** (or-embedded-aa)
- GDPval/SWE-bench Pro: vendor claims top-tier among open models

Long context:

- 1M-token context with 7× KV-cache reduction via SWA/GA; no MRCR/RULER numeric.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 86/100.** τ²-bench 94.2 and Claw-Eval 63.8 are best-in-class signals for long-horizon agents.
- **Reasoning: 82/100.** GPQA 86.6 and HLE 35.7 are strong open-weights results; CritPt-class physics numbers missing.
- **Context window: 96/100.** 1M+ native with architecture designed for it.
- **Multimodal: 15/100.** Text-only input/output (the multimodal native variant is MiMo-V2.5 non-Pro).
- **Coding: 82/100.** SWE-bench Pro 57.2, Terminal-Bench 68.4, AA Coding 60.2 support a strong open-weights coding agent.
- **Cost efficiency: 86/100.** $0.43/$0.87 per 1M is cheap for a 42B-active frontier-class open model.
- **Overall Score: 72/100.** Mean of five non-cost dims (86+82+96+15+82)/5 = 72.2 → 72; best fit: long-horizon coding agents on a strict budget, text-only.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Xiaomi MiMo launch page, BenchLM comparison pages, The Model Beat, Token Tape); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
