# GLM 5.2 Coding — findings by Qwen 3.8 Flash

- Source: Z.AI (Zhipu) / GLM 5.2 Coding (`opencode/glm-5.2-coding`; base weights `zai-org/GLM-5.2`, MIT)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** The coding-focused serving of Z.AI's GLM 5.2 open-weights reasoning MoE (~754B-class, MIT, released 2026-06-13) on the OpenCode Zen coding plan. Elite structured-tool agentic coding on a budget (τ²-Telecom 99.1% #1, SWE-bench Verified 78.7% #5-of-33, AIME 90 / HMMT 92.4) with 1M native context — but a **text-only** deployment whose Zen coding endpoint is capped at 128K.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2-coding` (Chat Completions, no separate Free ID); base weights `zai-org/GLM-5.2` served on ~30 OpenRouter providers (Z.ai, Baseten, Fireworks, Novita, DeepInfra fp4…).
- **Release / knowledge:** GLM 5.2 released 2026-06-13 (benchleader); knowledge cutoff not verified.
- **IDs:** `opencode/glm-5.2-coding` (Zen), `zai-org/GLM-5.2` (weights).
- **Context window:** **1M native** (measured, benchleader) but **the Zen coding endpoint lists 128K total** — scored with the practical 128K cap costing headroom (see below); the curated `meta.json` "128K / Text in/out" matches the Zen endpoint, not the native weight.
- **Modalities:** **text in / text out** (reasoning yes — max-effort strongest; tool calls; JSON mode). No vision rows exist for this deployment — text-only.
- **Pricing (as of 2026-10-02):** hosted **$1.40 / $4.40 per 1M** at Z.ai/Baseten/Fireworks, floor ~$0.56 / $1.80 (DeepInfra fp4); Zen coding plan per-tier. MIT self-hostable. Cost excluded from Overall.
- **Architecture:** open-weight MoE (`glm_moe_dsa`, ~754B-class per community metadata), MIT licence.

### Raw benchmarks found

> Verified via benchleader.com aggregates of Artificial Analysis / Epoch / Vals / LiveBench / Scale SEAL / MathArena / LMArena (max reasoning-effort config), cross-checked with the qualifying `Kimi_K3.md` report (fetched 2026-09-24). Harness sources labelled — Epoch/AA/Vals are independent; several are max-effort configs.

Agent / tool use:

- τ²-Bench **Telecom 99.1% (#1)** (AA); τ²-Bench Banking 34.6%; Terminal-Bench 2.1 **77.9%** (AA) / 67.8% (Vals); TB Hard 50.8% (AA)
- MCP Atlas **77.8% (#15)**; GDPval (AA) **42.9%**; LMArena Agent **rank #4**; APEX-Agents 33.7% (#6); ITBench SRE 42.7% (#13)

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Epoch #23) / 89.5% (AA) / 85.6% (Vals); HLE (AA) **41.1%**; AIME 2026 **90.0%**, HMMT Feb 2026 **92.4%**; AA-LCR **78.3%**; CritPt 20.9%; ARC-AGI-1 77.0% / **ARC-AGI-2 22.8%**
- AA Intelligence Index **33.7** (max effort); LiveBench 73.2%; AA-Omniscience index **4.4** (accuracy 24.3% / non-hallucination 73.7%) — moderate factuality penalty

Coding:

- SWE-bench Verified **78.7% (Epoch, #5/33)**; SWE-bench (Vals) **82.8%**; LiveCodeBench (Vals) 69.5%; SciCode (AA) 51.2%; Vibe Code Bench v1.1 64.0%; Code Migration 37.9%; DeepSWE **43.8%**; LMArena WebDev 1600 (#21) / Coding 1510 (#48); SWE-Atlas QnA 48.1 / Refactor 42.4 / Test 41.5

Long context / multimodal:

- AA-LCR 78.3% at up to 1M native; no MRCR/RULER row. Text-only — no vision rows exist (15 floor applies).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 84/100.** τ²-Telecom 99.1% (#1), TB 2.1 77.9%, MCP Atlas 77.8% and LMArena Agent #4 are a frontier structured-tool-calling cluster; trimmed from the ceiling by GDPval 42.9% and weak τ²-Banking 34.6% / APEX 33.7% on open-ended agent work.
- **Reasoning: 79/100.** GPQA 89.5–91.9%, AIME 90 / HMMT 92.4 and AA-LCR 78.3 are strong, but ARC-AGI-2 22.8%, CritPt 20.9%, AA Index 33.7 and a 24.3%-accuracy / 73.7%-non-hallucination Omniscience profile keep it high-mid rather than frontier.
- **Context window: 82/100.** The native 1M model with AA-LCR 78.3% would reach the ≥1M band, but **the Zen coding endpoint caps at 128K**, which is what this folder's ID actually serves — the practical headroom penalty plus no MRCR measurement keeps it mid-80s, not 90+.
- **Multimodal: 15/100.** Strictly text in / text out — no vision rows exist for this deployment (vision is the GLM-5V family); the text-only floor is the honest read and the single biggest drag on Overall.
- **Coding: 83/100.** SWE-bench Verified 78.7% (#5) and SWE-bench-Vals 82.8% are near-frontier repo-repair, corroborated by LCB 69.5 / WebDev 1600; capped by DeepSWE 43.8%, Code Migration 37.9% and weak test/refactor sub-scores → strong, not flawless.
- **Cost efficiency: 80/100.** ~$1.40/$4.40 hosted (down to ~$0.56/$1.80 on fp4) with MIT self-hostable weights is excellent value; not $0 on the Zen coding plan → solid but not the free-tier top band. Cost excluded from Overall.
- **Overall Score: 69/100.** Mean of Tool 84, Reasoning 79, Context 82, Multimodal 15, Coding 83 = 343/5 = 68.6 → 69. Best fit: **agentic coding on a budget with open-weight (MIT) portability** — elite τ²/SWE/MCP/LiveCode results and frontier math (AIME 90 / HMMT 92.4) at aggressive hosted pricing. Multimodal users must look elsewhere (this endpoint is text-only), and the Zen coding lane's 128K cap means you don't get the native model's full 1M headroom. Cohort average 73.3 (seven generous raters) vs this honest 69 — the gap is almost entirely the text-only 15-floor that the rater gate softens. Matches Kimi K3's below-gate 69.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (benchleader.com provider/benchmark tables aggregating Artificial Analysis / Epoch / Vals / LiveBench / Scale SEAL / MathArena / LMArena; HF hub metadata for the MIT `zai-org/GLM-5.2` weights; cross-checked against the qualifying `Kimi_K3.md` report and curated `meta.json`). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged (a) this is the coding **serving** of GLM 5.2, distinct from `glm-5.2` / `glm-5.3` base entries (do not double-count), (b) the native 1M vs Zen-coding 128K context gap, and (c) the text-only modality floor as the dominant Overall limiter.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
