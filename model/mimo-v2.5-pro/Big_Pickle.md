# Xiaomi MiMo-V2.5-Pro — findings by Big Pickle

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Note: requested as "Xiaomi MiMo-V2,5-Pro Free" (comma typo). **No free API ID exists for MiMo-V2.5-Pro.** The Zen free `mimo-v2.5-free` serves the non-Pro omni V2.5 (200K context). Scored on paid pricing.

## Model card

- **Name:** Xiaomi MiMo-V2.5-Pro
- **Short description:** Xiaomi's flagship open-weights (MIT) MoE for demanding agentic work, complex SWE, and 1M-context long-horizon trajectories with strong long-context coherence. Text-focused Pro sibling to the omni V2.5.
- **Provider / access:** Xiaomi API Platform / AI Studio (`mimo-v2.5-pro`, OpenAI-compatible); OpenRouter `xiaomi/mimo-v2.5-pro`; Novita; HF `XiaomiMiMo/MiMo-V2.5-Pro` (+ Base 256K); `-ultraspeed` variant early access.
- **Release / knowledge:** open-sourced 2026-04-27; public beta 2026-04-23; catalogs record 2026-04-22. Knowledge cutoff 2024-12.
- **IDs:** `mimo-v2.5-pro` (paid); **no free ID**.
- **Context window:** **1M** chat tokens (1,048,576); Base variant 256K; max output 128K.
- **Modalities:** **text → text only** (no image input per AA). Reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-17):** cache-hit **$0.0036** / cache-miss **$0.435** / output **$0.87** per 1M (overseas; blended ≈ $0.18 at 7:2:1). Domestic ¥0.025/¥3.00/¥6.00. Cache write limited-time free.
- **Architecture:** 1.02T total / 42B active; hybrid Local SWA + Global Attention, SWA:GA 6:1 (window 128); 3-layer MTP; FP8 (E4M3); MIT license.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **94.2%** (AA/BenchmarkList, rank 29/332); IFBench **79.9%** (evals.report Official)
- Terminal-Bench Hard **43.2%** (rank 25/326); TB 2.0 **68.4%** (Verified, re-confirmed 2026-10-01 via benchlm relay); Tau3 **72.9** (vendor, via NYU RITS)
- Claw-Eval: **64% Pass³** general / **63.2%** multi-turn (HF eval results, first-party); **63.8%** (benchlm relay 2026-10-01 — consistent with the first-party general row)
- GDPval-AA: **1,261 Elo** (AA) vs **1,571 Elo** ("Official" evals.report) — two different measurements
- Gert Labs **36.68%** (benchlm relay 2026-10-01; MiMo-V2.5 scores 46.89% on the same suite)
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA **86.6%** (Verified); HLE **33.8%** (Verified) / 35.7 (AA) / 48.0 tools (HF) / 48% (benchlm relay); AA-LCR **77.7%**; MMLU-Pro **85.1**
- AA Intelligence Index **26** (v4.3.2, estimated, **#23/117** as of 2026-10-01 — was #21/113 on 2026-09-17; the value held, the class grew). Historical 43 (v4.1.x) / 42.9 (BenchmarkList) — cite version. Note: AA's cached *comparison* pages still render "43", but AA's live model page reads 26; treat the model page as authoritative.
- Speed **28.7 tok/s** (#62/117) and TTFT **2.31s** on 2026-10-01 (Xiaomi first-party API) — **corrects the 51.8 tok/s (#42) / TTFT 4.03s recorded on 2026-09-17**: throughput dropped sharply while first-token latency improved
- Cost efficiency datapoint (new 2026-10-01): **$0.05 per Intelligence Index task, #5/117**; **110M** output tokens on the Index (#13/117, concise vs 140M class median)

Coding:

- SWE-bench Verified **78.9%** (Verified; **78%** on a 2026-10-01 benchlm relay — consistent); SWE-bench Pro **57.2%** (Verified, re-confirmed); SciCode **50.2%**; AA Coding Index **60.2**

Long context:

- GraphWalks (HF first-party): 512K → BFS **0.56** / Parents **0.92**; 1M → BFS 0.37 / Parents 0.62 (vs V2-Pro collapsing to 0.00 at 1M)

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau2 94.2 + IFBench 79.9 + TB-Hard 93rd pct; Tau3 vendor-only and no Toolathon/MCP numbers cap.
- **Reasoning: 78/100.** GPQA 86.6 + HLE 33.8–35.7 + LCR 77.7 — strong open, below 90%+ frontier.
- **Context window: 100/100.** 1M with GraphWalks retention at 512K/1M.
- **Multimodal: 15/100.** Text-only (pair with V2.5 for vision/audio).
- **Coding: 82/100.** SWE Verified 78.9 + Pro 57.2 + Coding Index 60.2.
- **Cost efficiency: 88/100.** Paid but very cheap for 1T class ($0.435/$0.87, 98% cache discount). Raised from 85 on 2026-10-01 on the strength of a measured **$0.05 per Intelligence Index task (#5/117)** and below-median verbosity (110M output tokens, #13/117 vs 140M class median) — the sticker-price rationale alone understated it. Still below a free tier, and the deprecated release train is a real cost of ownership.
- **Overall Score: 71/100.** (80 + 78 + 100 + 15 + 82) / 5 = 71.0. Top open long-horizon text model; strong SWE + 1M context at low cost. Re-derived 2026-10-01 after re-verification — unchanged, all five quality dimensions held.

## Re-verification — 2026-10-01 (14 days after original)

Original research date 2026-09-17. Re-run requested by the user to compare prior findings against current data. Original findings above are preserved; corrections are marked inline.

| Dimension | 2026-09-17 | 2026-10-01 | Change |
| --- | --- | --- | --- |
| Tool use | 80 | 80 | — (corroborated) |
| Reasoning | 78 | 78 | — (corroborated) |
| Context window | 100 | 100 | — (re-confirmed) |
| Multimodal | 15 | 15 | — (re-confirmed text-only) |
| Coding | 82 | 82 | — (corroborated) |
| Cost efficiency | 85 | 88 | **+3** (not counted in Overall) |
| **Overall** | **71** | **71** | **—** |

**Corrections to prior findings:**

- **Throughput was materially wrong: 51.8 → 28.7 tok/s.** The 2026-09-17 figure (recorded as #42 of the class) has fallen to **28.7 tok/s, #62/117** on AA's current measurement against Xiaomi's first-party API. First-token latency moved the other way, 4.03s → **2.31s**. Neither is a scored dimension, so no Overall change follows, but the practical story changed: this is a slow generator with a fast first token, which matters a great deal for interactive agent loops.
- **AA Intelligence Index confirmed at 26**, rank slipping from #21/113 to **#23/117** purely because the comparison class grew. Worth flagging: AA's *cached comparison pages* still render "43" for this model, while AA's *live model page* reads 26. The original report's instinct to distrust the 43 as a v4.1.x artifact was correct.

**What held up unchanged:** every scored dimension, and the raw benchmark set re-confirmed independently — Terminal-Bench 2.0 **68.4%**, SWE-bench Pro **57.2%**, τ³ **72.9%**, Claw-Eval **63.8%** (against the first-party 64% general row), HLE **48%**, SWE-bench Verified **78%** (vs the 78.9% originally recorded), SciCode **50.2%**, AA Coding Index **60.2**. Also re-confirmed: **text-only input** (AA's technical spec still reads "Supports: text"; no image path), so Multimodal stays at the methodology floor, and 1M context, so Context stays at 100. Also new: Gert Labs **36.68%**, where sibling MiMo-V2.5 scores 46.89%.

**Newly found 2026-10-01:**

- **The model is deprecated.** AA now carries: "This model is deprecated. We only continue performance benchmarking for the default 10k input token workload. Results for other workloads are historical and no longer updated," recommending `MiMo-V2.6-Pro`. Xiaomi's own site states the **entire MiMo-V2 series was deprecated 2026-06-30**.
- **Measured cost efficiency:** **$0.05 per Intelligence Index task (#5/117)** and 110M output tokens (#13/117, below the 140M class median). This is the evidence behind the Cost efficiency bump to 88.
- **AA index composition changed** (v4.3.2): Terminal-Bench 4.0, AA-Briefcase v1.1, AutomationBench-AA and GDP.pdf in; τ³-Banking, Terminal-Bench 2.1 and GPQA Diamond out. So the τ³ 72.9% anchor that supports the Tool use score is now a legacy, out-of-index measurement.
- Sibling variant pricing reference: `MiMo-V2.5-Pro-UltraSpeed` remains early-access at 3x price (¥9/¥18 per 1M cache-miss/output, ~500–1000 tok/s, daily-approval limited capacity).

**Net assessment:** this is the better-retained of the two 2026-09-17 reports — no capability number had to be walked back, and the one measured regression (throughput) falls outside the scoring rubric. The real reason to revisit the conclusion is lifecycle: with the V2 line deprecated in favour of V2.6-Pro, the honest recommendation framing shifts from "top open long-horizon text model" to "still-competent 1M-context workhorse on a supported-cost basis, but plan a migration".

### Re-verification addendum — 2026-10-01 (second pass, user-approved refresh)

- Independent re-attestation of the first 2026-10-01 pass: no newer benchmark, pricing, or lifecycle event for `mimo-v2.5-pro` surfaced. Scores unchanged: Tool 80 / Reasoning 78 / Context 100 / Multimodal 15 / Coding 82 / Cost 88 / **Overall 71**. The deprecation caveat (V2 line EOL 2026-06-30, migrate to V2.6-Pro) remains the actionable item.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-10-01 (re-verified; original research 2026-09-17)
- Method: public web research (Xiaomi HF model card + blog/API docs, Artificial Analysis, evals.report, BenchmarkList/Sophon, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.