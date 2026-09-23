# Xiaomi MiMo-V2.5-Pro — findings by Ling 3.0

- Source: Ling 3.0 (`opencode/xiaomi-mimo-v2-5-pro`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: requested as "Xiaomi MiMo-V2,5-Pro Free" (comma typo). **No free API ID for MiMo-V2.5-Pro.** The existing zen/free ID `mimo-v2.5-free` serves the non-Pro MiMo-V2.5 (omni: text+image input, 200K context). Scored on paid pricing.

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro
- **Short description:** Xiaomi's flagship open-weights (MIT) MoE for demanding agentic work, complex SWE, and 1M-context long-horizon trajectories with strong long-context coherence. Text-focused Pro sibling to the omni V2.5.
- **Provider / access:** Xiaomi API Platform / AI Studio (`mimo-v2.5-pro`, OpenAI-compatible); OpenRouter `xiaomi/mimo-v2.5-pro`; Novita; HF `XiaomiMiMo/MiMo-V2.5-Pro` (+ Base 256K); `-ultraspeed` variant early access.
- **Release / knowledge:** open-sourced 2026-04-27; public beta 2026-04-23; catalogs record 2026-04-22. Knowledge cutoff 2024-12.
- **IDs:** `mimo-v2.5-pro` (paid); **no free ID**.
- **Context window:** **1M** chat tokens (1,048,576); Base variant 256K; max output 128K.
- **Modalities:** **text → text only** (no image input per AA). Reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-17):** cache-hit **$0.0036** / cache-miss **$0.435** / output **$0.87** per 1M (overseas; blended ≈ $0.18 at 7:2:1). Domestic ¥0.025/¥3.00/¥6.00. UltraSpeed variant: $0.0108 / $1.305 / $2.61 (early access).
- **Architecture:** 1.02T total / 42B active; hybrid Local SWA + Global Attention, SWA:GA 6:1 (window 128); 3-layer MTP; FP8 (E4M3); MIT license.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **94.2%** (AA via BenchmarkList, rank 29/332) + Sophon + AA-sourced snapshot.
- IFBench: **79.9%** (evals.report Official).
- Terminal-Bench Hard **43.2%** (rank 25/326); TB 2.0 **68.4%** (Verified); τ³-Bench **72.9** (vendor only).
- Claw-Eval: **64% Pass³** general / **63.2%** multi-turn (HF eval results, first-party).
- GDPval-AA: **1,261 Elo** (AA) vs **1,571 Elo** ("Official" evals.report) — two different measurements.
- Toolathon / MCP-Atlas: **no verified public score found**.

Reasoning:

- GPQA **86.6%** (Verified); HLE **33.8%** (Verified) / 35.7 (AA) / 48.0 tools (HF); AA-LCR **77.7%**; MMLU-Pro **85.1**; AA Intelligence Index **26** (current v4.3, #21/113); Coding Index **60.2**.
- Speed 51.8 tok/s (#42), TTFT 4.03s (AA 2026-09-17).

Coding:

- SciCode **50.2%**; SWE-bench Verified **78.9%**; SWE-bench Pro **57.2%**.

Long context:

- GraphWalks (HF first-party): 512K → BFS **0.56** / Parents **0.92**; 1M → BFS 0.37 / Parents 0.62 (vs V2-Pro collapsing to 0.00 at 1M).

### Normalized scores (1–100)

- **Tool use: 80/100.** τ² 94.2 + IFBench 79.9 + TB-Hard 93rd pct; τ³ vendor-only and no Toolathon/MCP numbers cap.
- **Reasoning: 78/100.** GPQA 86.6 + HLE 33.8–35.7 + LCR 77.7 — strong open, below 90%+ frontier.
- **Context window: 100/100.** 1M with GraphWalks retention at 512K/1M.
- **Multimodal: 15/100.** Text-only (pair with V2.5 for vision/audio).
- **Coding: 82/100.** SWE Verified 78.9 + Pro 57.2 + Coding Index 60.2.
- **Cost efficiency: 85/100.** Paid but very cheap for 1T class ($0.435/$0.87, 99% cache discount).
- **Overall Score: 71/100.** Top open long-horizon text model; strong SWE + 1M context at low cost.

---

## Signature

- Provided by: **Ling 3.0 (`opencode/xiaomi-mimo-v2-5-pro`)** — 2026-09-17
- Method: public web research (Xiaomi HF model card + blog/API docs, Artificial Analysis, evals.report, BenchmarkList/Sophon, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/Ling_3.0.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
