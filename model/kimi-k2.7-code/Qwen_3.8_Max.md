# Kimi K2.7 Code — findings by Qwen 3.8 Max

- Source: Moonshot AI (`kimi-k2.7-code`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-specialized cut of its open-weight 1T-total / 32B-active MoE, tuned for long-horizon terminal and agentic engineering. Currently the **#1 open-weight model on Vals' SWE-bench Verified (78.2%)** and a **Terminal-Bench 2.1 open-weight leader (67%)**. **Current** (no deprecation banner); replaces K2.6 inside Kimi Code.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.7-code` (Chat Completions); open weights on Hugging Face (Moonshot AI org); Moonshot platform API.
- **Release / knowledge:** Released June 2026 (per Artificial Analysis); knowledge cutoff not published.
- **IDs:** `opencode/kimi-k2.7-code`; `noFreeId: true` — no free hosted tier on Zen (weights are free to self-host under Modified MIT).
- **Context window:** 262,144 tokens (256K), AA-confirmed (~384 A4 pages).
- **Modalities:** Text, image, video in → text out (AA independently confirms all three inputs); reasoning yes; tool calls supported (terminal/agent loops are the design target). **Note:** visual input is accepted but the model is coding-narrowed — no multimodal quality benchmarks are published (breadth "stays with the full K2.5/K3," per the meta tradeoff).
- **Pricing (as of 2026-10-26):** $0.95 / $4.00 per 1M in/out, $0.19 cached input (80% cache discount). AA: input "somewhat expensive" (median $0.43), output "expensive" (median $1.45), **$0.54 per Intelligence-Index task** (#33/46).
- **Architecture:** 1T total / 32B active MoE (AA-confirmed), **Modified MIT** license, open weights on Hugging Face. A coding-specialized post-training of the native-multimodal K2.x family (DeepSeek-V3-style MLA backbone).

### Raw benchmarks found

> Independent anchors: Artificial Analysis (AA) and Vals AI. Vendor numbers: Moonshot / press coverage. This is a **current** model — AA runs the full workload set.

Independent:

- AA Intelligence Index **v4.3.2: 26, #29/121** (median 19 → "well above average"; **4 of 4** intelligence units). No deprecation banner — actively benchmarked.
- Vals AI SWE-bench Verified: **78.2% — #1 open-weight model**; band breakdown **89 / 75 / 50 / 33%** (<15min / 15m–1h / 1–4h / >4h). Notably it does **not** collapse to 0% on >4h tasks (33%), unlike sibling Kimi K2.5 (85/66/31/0) or Qwen 3.7 Max (82/64/38/0).
- Vals AI Terminal-Bench 2.1: **67% — leads open-weight** (next-closest open-weight model is lower).
- AA speed **82.3 tok/s** (#40/78, "slower than average" 84); AA verbosity **120M** Index tokens (#21/47, "fairly concise" vs this class's median 140M); AA cost/task **$0.54** (#33/46).

Vendor / press:

- τ²-bench **90.1%** (meta / vendor-claimed; **not** independently surfaced in this research).
- **30% lower token usage** and a **21.8% coding-benchmark gain** vs its predecessor (DevOps.com, 2026-06-15) — the token-efficiency angle for agentic coding.
- Kimi Code Bench improvements over K2.6 (Moonshot internal benchmark).

> Provenance: the two decision-critical anchors — Vals SWE-bench 78.2% (#1 open-weight) and Vals Terminal-Bench 2.1 67% (open-weight lead) — are **independent** (Vals AI), as is the AA Index (26, #29/121). The τ² 90.1% and the token-efficiency percentages are vendor-reported and not independently replicated.
> Meta verification: SWE-bench **78.2%** is **confirmed** (independent Vals, #1 open-weight); context `262,144 (256K)` ✓ (AA); modalities "Text, image, video in; text out" ✓ (AA); pricing `$0.95/$4.00`, `$0.19 cached` ✓ (AA, 80% discount); 1T/32B ✓ (AA). **τ² 90.1% is vendor/meta-claimed, not independently verified.** Enriched from AA: license **Modified MIT**, release **June 2026**, AA Index **26 (#29/121)**, current (not deprecated).

### Normalized scores (1–100)

- **Tool use: 84/100.** Independently confirmed as a top open-weight agent — Vals **Terminal-Bench 2.1 67% leads open-weight**, it is the #1 open-weight SWE-bench model, and it runs ~30% more token-efficiently with "fairly concise" verbosity (AA 120M vs class median 140M). Capped below the proprietary frontier absolute (frontier Terminal-Bench 2.1 runs ~88%+).
- **Reasoning: 78/100.** AA Index 26 (#29/121, well above the median 19, 4/4 intelligence units) is a solid open-weight showing, but the model is **deliberately coding-narrowed** — general knowledge/breadth "stays with the full K2.5/K3" — so general reasoning sits a step below the full-spectrum K-models, and the absolute Index (26) is modest against a proprietary frontier of 50–60+.
- **Context window: 78/100.** 256K (262,144), AA-confirmed — maps to the 256K tier; ample for large repos but short by 1M-era standards (same band as sibling Kimi K2.5).
- **Multimodal: 77/100.** Accepts text+image+video input (AA-confirmed modality support) but publishes **zero verified multimodal quality benchmarks** and is explicitly coding-specialized, so visual capability is nominal/unproven — scored just below a verified image-only model and well below the native-VL sibling K2.5 (84, which has SOTA OCR/video numbers).
- **Coding: 84/100.** The defining strength and **independently Vals-confirmed**: #1 open-weight on SWE-bench Verified (78.2%) with band 89/75/50/33 — crucially **no >4h collapse** (33%, unlike K2.5 and Qwen 3.7 Max at 0%) — plus a Terminal-Bench 2.1 open-weight lead (67%) and a vendor 21.8% coding gain / 30% token reduction. Capped below the proprietary frontier (Vals SWE-bench ~97–98% for Opus 5 / GPT-5.6 Sol).
- **Cost efficiency: 78/100.** Modified-MIT open weights are self-hostable and the model is token-efficient (30% lower usage, "fairly concise"), but hosted pricing ($0.95 / $4.00) is flagged "somewhat expensive"/"expensive" vs open-weight medians, cost/task is $0.54, and a 1T MoE is a serious local hardware commitment. Not counted toward Overall.
- **Overall Score: 80/100.** Mean of Tool 84 + Reasoning 78 + Context 78 + Multimodal 77 + Coding 84 = 401 / 5 = 80.2 → 80. Best fit: the current **#1 open-weight coding/terminal agent** — pick it for long-horizon SWE and CLI work at open-model prices when you don't need proprietary-frontier absolute scores or real non-text multimodal capability. **Divergence note:** curated queue 82.4 vs my 80 → **−2.4** (narrow, as expected for a *current* model with strong independent confirmation and no launch-peak-vs-rebased gap). I temper only for the modest absolute AA Index (26), 256K context, coding-narrowed general reasoning, and the unverified multimodal/τ² claims — while crediting the genuine independent Vals coding/terminal lead.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis model page for `kimi-k2-7-code`; Vals AI SWE-bench Verified + Terminal-Bench 2.1 leaderboards and Vals' Kimi K2.7 Code release note; DevOps.com token-efficiency coverage; okou.ai model listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
