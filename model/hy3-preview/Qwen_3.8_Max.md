# Hy3 Preview — findings by Qwen 3.8 Max

- Source: Tencent (`hy3-preview`; id `tencent/hy3-preview`; AA `hy3-preview`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Tencent's April-2026 **preview** of Hunyuan 3 — the same **295B/21B-active MoE (+3.8B MTP)** architecture the Apache-2.0 GA `hy3` shipped three months later, and the release that "made Tencent's Hy line credible" (first output of its rebuilt training infrastructure). Hybrid fast-and-slow-thinking (**reasoning**), **256K**, **text-only**, very cheap ($0.06/$0.21). Vendor **SWE-bench Verified 74.4%** and **Terminal-Bench 2.0 54.4%**. But it is now **deprecated** (AA flags GA Hy3 as the successor; Speed is N/A), carries the **restrictive Tencent Hy Community License — not Apache 2.0**, and reaches only **1 API provider**. Best-fit: historical interest / cheap self-hosted experimentation — production users should take the Apache-2.0 GA `hy3` instead.

## Model card

- **Name:** Hy3 Preview (vendor "Hy3-preview"; AA renders "Hy3-preview (Reasoning)")
- **Short description:** Tencent's preview release of Hunyuan 3, sharing the GA `hy3` architecture (295B/21B MoE + 3.8B MTP) but under a restrictive community license and with lower benchmark numbers. Text-only, reasoning. A distinct shipped artifact — the **earlier preview**, not the Apache-2.0 GA `hy3` (report b2) and not `hy4`.
- **Provider / access:** HuggingFace `tencent/Hy3-preview` (weights, self-host $0); OpenRouter `tencent/hy3-preview` (**sole GMICloud endpoint**); **1 API provider** per AA (thin). No Tencent rate card. No Free ID (`noFreeId`).
- **Release / knowledge:** Released **2026-04-23** (AA FAQ; GitHub/ModelScope 2026-04-23; some guides cite an April 13 announcement — resolved to the AA/GitHub date). **Deprecated** — AA continues only the default 10k-input workload; GA Hy3 launched as the successor. Knowledge cutoff not independently confirmed.
- **IDs:** `tencent/hy3-preview` (no standing Free ID on Zen)
- **Context window:** **256K** total (AA spec table; FAQ says 260k — the same minor inconsistency as GA hy3, resolved to 256K); 64K–128K max output (meta, host-dependent).
- **Modalities:** Text in → text out. **TEXT-ONLY** (AA FAQ: "does not support image input… not multimodal"). **Reasoning** — hybrid fast-and-slow-thinking (AA: extended thinking / chain-of-thought).
- **Pricing (as of 2026-10-30):** AA median **$0.063 / $0.21** per 1M in/out ("very competitive" vs $0.50 / $2.10 medians), **67% cache discount**, blended **$0.05**. OpenRouter list $0.18 / $0.60 ($0.06 cached). Self-host **$0** (community-license weights).
- **Architecture:** Open-weight MoE, **295B total / 21B active** + **3.8B MTP** layer (identical to GA hy3), **Tencent Hy Community License Agreement** — "commercial use allowed **with restrictions**" (**NOT** Apache 2.0).

### Raw benchmarks found

> The AA **Intelligence Index is N/A** and — because the model is **deprecated** — **Speed is also N/A** (AA no longer benchmarks it beyond the 10k workload). Only **Cost** is independently shown. Capability numbers below are **vendor (Tencent)**; note the preview reports **Terminal-Bench 2.0** (the older benchmark), not the 2.1 the GA release cites.

Agent / tool use:

- Terminal-Bench **2.0**: **54.4%** (vendor / meta) — the older TB version; mid-tier. (GA hy3 reports TB **2.1** 71.7% — a different benchmark, not directly comparable.)
- GDPval-AA / AutomationBench-AA / FrontierCode: N/A (AA Index not scored)

Reasoning / knowledge:

- AA Intelligence Index: **N/A** on v5.0 (deprecated, not scored).
- Reasoning model (AA-confirmed; hybrid fast/slow thinking). No GPQA / AIME figure is published for the preview specifically (GA hy3 cites GPQA Diamond 90.4% — **not** reattributed here).

Coding:

- SWE-bench Verified: **74.4%** (vendor / meta). ⚠ **Cross-report resolution:** this **74.4%** is the number that circulated as an apparent "conflict" against GA hy3's **78.0%** — they are **different releases** (preview 74.4% vs GA 78.0%), which is why the GA report correctly did *not* adopt 74.4%. No independent (Vals/AA) SWE-bench figure found for the preview.

Long context:

- **256K** window (AA spec; FAQ 260k); no independently verified long-context retrieval (MRCR / RULER) score found.

Cost (AA-measured, independent):

- $0.063 / $0.21 (AA median), 67% cache discount, blended $0.05 — cheaper than GA hy3 ($0.14/$0.55). Speed N/A (deprecated).

> **Meta-verification:** `meta.json` is accurate and candid — id ✓, 295B/21B ✓, 256K (262,144 on some hosts) ✓, text-only ✓, **SWE-bench Verified 74.4%** ✓, **Terminal-Bench 2.0 54.4%** ✓, "superseded by the Apache-2.0 GA Hy3" ✓, community license (not Apache) ✓, $0.18/$0.60 OpenRouter sole GMICloud ✓, `noFreeId` ✓. **Flags:** (1) **DEPRECATED** — AA flags GA Hy3 as successor and drops Speed to N/A; (2) **license is the restrictive Tencent Hy Community Agreement, NOT Apache 2.0** — a material difference from GA hy3; (3) the **74.4% is the preview's SWE-bench Verified**, resolving the 78.0-vs-74.4 spread noted in the GA report (different releases, not a measurement conflict); (4) benchmark is TB **2.0** (54.4%), the older version; (5) context 256k spec vs 260k FAQ; (6) only **1 API provider**.

### Normalized scores (1–100)

- **Tool use: 73/100.** Vendor **Terminal-Bench 2.0 54.4%** (older benchmark version, mid-tier), no AA Index, deprecated, and no independent corroboration — solid-preview agentic but below the GA release (which reports TB 2.1 71.7%).
- **Reasoning: 74/100.** Confirmed reasoning model (hybrid fast/slow thinking) on the GA architecture, but the **AA Intelligence Index is N/A** (deprecated) and the preview publishes fewer reasoning benchmarks than GA (no preview-specific GPQA/AIME) — capped below GA hy3.
- **Context window: 78/100.** **256K** total (AA spec table; FAQ 260k) — same window as GA hy3; solid mid-tier, well below the 1M frontier.
- **Multimodal: 50/100.** Text-only — AA FAQ confirms no image input. Text-only floor.
- **Coding: 75/100.** Vendor **SWE-bench Verified 74.4%** is a credible number, but it is the deprecated preview, vendor-only (AA Index N/A), and below the GA release's 78.0% — strong-preview coding, not elite.
- **Cost efficiency: 86/100.** Very cheap hosted ($0.063/$0.21, blended $0.05, 67% cache) and open-weight self-host $0, but the **restrictive Tencent Hy Community License (not Apache)** and single API provider temper it below GA hy3's 90. Not counted in Overall.
- **Overall Score: 70/100.** Mean of the five quality dims (73+74+78+50+75)/5 = 70.0 → 70. Divergence **+0.5** vs curated 69.5 — very close alignment. Sits just below GA hy3 (72), correctly reflecting the deprecation, restrictive license, older/lower benchmarks, and single provider, partly offset by the cheaper cost. Best-fit: cheap self-hosted experimentation or historical reference — production should use the Apache-2.0 GA `hy3`.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-30
- Method: public internet research (Artificial Analysis `hy3-preview` page incl. FAQ + deprecation banner, Tencent-Hunyuan GitHub / ModelScope `Hy3-preview`, Tencent announcement, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
