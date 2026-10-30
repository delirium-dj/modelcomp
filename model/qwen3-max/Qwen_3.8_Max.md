# Qwen3 Max — findings by Qwen 3.8 Max

- Source: Alibaba (`qwen3-max`; id `opencode/qwen3-max`; AA `qwen3-max`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Alibaba's original 2025 Qwen3-Max flagship — a >1T-parameter, 36T-token scaled, **non-reasoning, text-only** model that anchored the Max tier before the Qwen3.6/3.7/3.8-Max line (including my namesake) replaced it. Now **deprecated and fully delisted** on Artificial Analysis v5.0 (Intelligence / Speed / Cost / Verbosity all N/A). It did publish real launch numbers (**SWE-bench Verified 69.6**, **Tau2-Bench 74.8**), which the scaffolded meta wrongly claims never existed. Best-fit today: a historical reference point for the Qwen Max lineage, not a deployment target.

## Model card

- **Name:** Qwen3 Max (Alibaba vendor style "Qwen3-Max"; AA/meta render "Qwen3 Max" / "Qwen 3 Max")
- **Short description:** Alibaba's closed-weights 2025 flagship Max-tier LLM for coding agents and general reasoning; the reference point the Qwen3.6/3.7/3.8-Max tiers replaced. Distinct from those successors and from `qwen-3.7-max` / `qwen-3.5-397b`.
- **Provider / access:** OpenCode `opencode/qwen3-max`; Alibaba Model Studio (DashScope). Chat Completions. No Free ID on Zen (`noFreeId: true`).
- **Release / knowledge:** Released 2025-09-23 (AA FAQ + qwen.ai "Qwen3-Max: Just Scale it" blog). Knowledge cutoff not independently confirmed.
- **IDs:** `opencode/qwen3-max` (no Free ID exists on Zen)
- **Context window:** 262,144 total / 65,536 max output (meta + AA spec table "262k"). AA FAQ says 260k — minor inconsistency, resolved to the 262,144 spec-table figure.
- **Modalities:** Text in → text out. **TEXT-ONLY** — AA FAQ: "does not support image input... not multimodal." Non-reasoning ("direct responses without extended chain-of-thought"). Tool calls / JSON mode supported per provider.
- **Pricing (as of 2026-10-30):** $1.20 / $6.00 per 1M in/out (Alibaba; resellers $0.36–$0.85 in). No free tier.
- **Architecture:** Proprietary, closed weights. Alibaba blog states **>1 trillion parameters, pretrained on 36 trillion tokens**; AA lists size "undisclosed" (does not surface the vendor figure).

### Raw benchmarks found

> Vendor numbers are from qwen.ai "Qwen3-Max: Just Scale it" (2025-09-23) for the **Qwen3-Max-Instruct** non-reasoning variant = the model shown on this AA page (AA: "This page shows the non-reasoning version"; the reasoning variant is the separate Qwen3-Max-Thinking, NOT reattributed here). Independent re-benchmarks are absent because AA fully delisted the model on v5.0.

Agent / tool use:

- Tau2-Bench (**agentic tool use**): **74.8%** (vendor, Qwen3-Max-Instruct)
- Terminal-Bench: no verified public score found
- GDPval-AA / AutomationBench-AA: N/A on AA v5.0 (delisted)

Reasoning / knowledge:

- AA Intelligence Index: **15.6** (meta-cited historical, pre-v5.0; **N/A / delisted on v5.0** — not among the 29 of 718 scored)
- HLE: **11.9%** (meta-cited historical)
- GPQA Diamond / CritPt: no verified public score found for this exact non-reasoning variant

Coding:

- SWE-bench Verified: **69.6%** (vendor, Qwen3-Max-Instruct)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval (MRCR / RULER) score independently verified; the 262K window is spec-only.

> **Meta-verification:** the scaffolded `meta.json` tradeoff claims "no public SWE-bench or Terminal-Bench figure was ever published for it." **This is materially wrong on SWE-bench** — Alibaba's launch blog published **SWE-bench Verified 69.6** and **Tau2-Bench 74.8** for Qwen3-Max-Instruct. (No Terminal-Bench figure was found, so that half of the claim stands.) The meta's AA Index 15.6 / HLE 11.9% are historical pre-v5.0 values, now delisted.

### Normalized scores (1–100)

- **Tool use: 76/100.** Vendor Tau2-Bench 74.8% shows real multi-turn function-calling ability for its era; capped by zero independent corroboration (AA fully delisted, no AutomationBench / GDPval).
- **Reasoning: 70/100.** Non-reasoning base; historical AA Index 15.6 and HLE 11.9% are below-median and now delisted on v5.0. >1T-param scale aids general knowledge but there is no reasoning-mode uplift.
- **Context window: 78/100.** 262K total / 65K output (spec table). Solid but mid-tier versus the 1M+ windows of its own successors; no verified long-context retrieval.
- **Multimodal: 50/100.** Text-only — AA FAQ explicitly confirms no image input. Text-only floor.
- **Coding: 73/100.** Vendor SWE-bench Verified 69.6% was strong at Sept-2025 launch but is mid-pack against the current 77–88% frontier; no LiveCodeBench / Terminal-Bench to corroborate.
- **Cost efficiency: 68/100.** $1.20/$6.00 is mid-range, but the model is deprecated, closed-weights, and fully delisted (no AA cost-per-task), so value-for-money is poor against cheaper current alternatives. Not counted in Overall.
- **Overall Score: 69/100.** Mean of the five quality dims (76+70+78+50+73)/5 = 69.4 → 69. Divergence **−2.7** vs curated 71.7, driven by the text-only Multimodal floor (50) and full AA delisting. Best-fit: a historical reference for the Qwen Max lineage, superseded for any live workload.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-30
- Method: public internet research (Artificial Analysis `qwen3-max` page, qwen.ai "Qwen3-Max: Just Scale it" launch blog, WebSearch corroboration); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
