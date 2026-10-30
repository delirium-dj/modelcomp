# Hy3 — findings by Qwen 3.8 Max

- Source: Tencent (`hy3`; id `tencent/hy3`; AA `hy3`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Tencent's July-2026 open-weight Hunyuan 3 flagship coder — a 295B/21B-active MoE (192 routed experts + 1 shared, top-8, 3.8B MTP), Apache 2.0, 256K, **reasoning**, **text-only**, at rock-bottom cost ($0.14/$0.55 hosted; $0.0825/$0.33 off-peak fp8; $0 self-host). Strong vendor coding/science (SWE-bench Verified ~78%, GPQA Diamond 90.4%) but **AA Intelligence Index N/A** (not in v5.0's 29/718), so every capability number is vendor-side — and Tencent's terminal figures historically run optimistic vs independent (sibling hy4: vendor TB2.1 85.4 vs Vals 55.06). Best-fit: a budget open-weight agentic coder where text-only and self-hosting are acceptable.

## Model card

- **Name:** Hy3 (Tencent Hunyuan 3; AA renders "Hy3")
- **Short description:** Tencent's open-weight 295B/21B-active MoE for reasoning and agentic coding; the GA successor to hy3-preview (Apr 2026, custom license) and the sibling below hy4 (report 122). Text-only. A distinct shipped artifact — not a duplicate.
- **Provider / access:** HuggingFace `tencent/Hy3` (weights); OpenRouter `tencent/hy3` (a `:free` route ran ~2 weeks post-launch, now expired → `noFreeId`); Tencent fp8; 4 API providers per AA. Not on OpenCode Zen.
- **Release / knowledge:** Released 2026-07-06 (AA FAQ). Knowledge cutoff not independently confirmed.
- **IDs:** `tencent/hy3` (no standing Free ID on Zen)
- **Context window:** 256K total (AA spec table; FAQ says 260k — minor inconsistency, resolved to 256K); 64K–128K max output (meta, host-dependent).
- **Modalities:** Text in → text out. **TEXT-ONLY** (AA FAQ: "does not support image input... not multimodal"). **Reasoning** (AA: extended thinking / chain-of-thought). Native tool use / agentic.
- **Pricing (as of 2026-10-30):** $0.14 / $0.55 per 1M in/out (AA median across providers; "very competitive" vs $0.50 / $2.10 medians); Tencent fp8 off-peak $0.0825 / $0.33 (00:00–16:00 UTC); blended $0.11; self-host $0 (Apache 2.0).
- **Architecture:** Open-weight MoE, **295B main (vendor) / 299B per AA** total — the ~3.8B MTP layer reconciles the two — **21B active**, 192 routed experts + 1 shared, top-8 routing, **Apache 2.0** ("commercial use allowed with restrictions").

### Raw benchmarks found

> AA scores Speed/Cost but the Intelligence Index is **N/A** on v5.0 (not among the 29 of 718; every capability eval reads "No publicly available API"). All capability numbers below are therefore **vendor (Tencent HF card)** or third-party coverage — no independent AA measurement exists.

Agent / tool use:

- Terminal-Bench 2.1: **71.7%** (vendor / meta). ⚠ A Vals AI snapshot (SWE-bench Verified 75.00% / TB2.1 53.56%, #17 / #12) MAY be hy3 but attribution is UNCONFIRMED; if so it shows the familiar Tencent vendor-inflation on terminal tasks (cf. hy4: vendor TB2.1 85.4 vs Vals 55.06). Meta's own tradeoff calls hy3 "mid-tier on terminal tasks."
- GDPval-AA / AutomationBench-AA: N/A (AA Index not scored)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (vendor; corroborated across coverage) — elite-tier PhD science
- Hallucination rate: **5.4%** (flowtivity, third-party) → ~94.6% non-hallucination
- AA Intelligence Index: **N/A** on v5.0 (not scored)

Coding:

- SWE-bench Verified: **78.0%** (vendor, Tencent HF leaderboard) — but a separate source reports **74.4%**, and the (unconfirmed) Vals figure is **75.00%**. Cluster ~74–78%; conflict flagged.
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 256K window is spec; no independently verified long-context retrieval (MRCR / RULER) score found.

> **Meta-verification:** `meta.json` is largely accurate — Apache 2.0 ✓, 256K ✓, ~$0.08/$0.33 off-peak ✓ (AA median $0.14/$0.55), text-only ✓, GPQA 90.4% ✓, TB2.1 71.7% (vendor) ✓. **Flags:** (1) meta omits that hy3 is a **reasoning** model (AA confirms); (2) **param discrepancy** — meta/vendor say 295B, AA says 299B (the ~3.8B MTP layer reconciles them); (3) **SWE-bench conflict** — meta's 78.0% is the vendor number while 74.4% also circulates; (4) terminal strength is vendor-only and meta's own tradeoff calls it "mid-tier," consistent with a lower independent TB2.1.

### Normalized scores (1–100)

- **Tool use: 76/100.** Vendor Terminal-Bench 2.1 71.7% looks strong, but it is uncorroborated by AA (Index N/A), Tencent's terminal numbers run optimistic vs independent (hy4 precedent), and the meta itself says "mid-tier on terminal tasks" — scored as solid-but-vendor-leaning agentic.
- **Reasoning: 78/100.** Reasoning model (AA) with elite vendor GPQA Diamond 90.4% and low 5.4% hallucination, but the AA Intelligence Index is N/A so there is no independent confirmation — capped below frontier reasoning models.
- **Context window: 78/100.** 256K total (spec table; FAQ 260k). Solid mid-tier window; well below the 1M of sibling hy4 and the frontier.
- **Multimodal: 50/100.** Text-only — AA FAQ confirms no image input. Text-only floor.
- **Coding: 78/100.** SWE-bench Verified clusters ~74–78% (vendor 78.0%, alternate 74.4%, possible-independent 75.00%) — strong open-weight coding, but vendor-leaning with an unresolved conflict and no AA/Vals-confirmed attribution.
- **Cost efficiency: 90/100.** Outstanding value — open-weight Apache 2.0 (self-host $0), $0.14/$0.55 hosted ("very competitive"), $0.0825/$0.33 off-peak fp8, blended $0.11. Not counted in Overall.
- **Overall Score: 72/100.** Mean of the five quality dims (76+78+78+50+78)/5 = 72.0 → 72. Divergence **+0.4** vs curated 71.6 — close alignment. The text-only Multimodal floor (50) and absent AA Index offset the strong vendor coding/science and elite cost. Best-fit: a budget open-weight agentic coder where text-only is acceptable.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-30
- Method: public internet research (Artificial Analysis `hy3` page, Tencent HuggingFace `tencent/Hy3` card, flowtivity / Terminal-Bench coverage, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
