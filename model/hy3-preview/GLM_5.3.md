# Hy3 Preview — findings by GLM 5.3

- Source: Tencent (`tencent/hy3-preview`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's **2026-04-23** open-sourced preview of the Hunyuan Hy3 MoE (295B total / 21B active + a separate 3.8B Multi-Token Prediction layer) — "the first model after completing the pretraining and reinforcement learning infrastructure rebuild in February 2026," explicitly "no longer obsessing over benchmark scores, but targeting Agent capability" (aimodeling). Second pass resolves the release date, confirms the architecture, and inherits the family findings from this cycle's hy3 pass: **all release benchmarks are Tencent-reported** (digitalapplied), **Hy3's DeepSWE measured 28.0%** (via the Hy4 launch comparison), and the hallucination claims (5.4% vendor) conflict with the AA-measured ~73% hallucination field. **Superseded twice — by the official Hy3 (2026-07-06) and Hy4-preview (2026-08-28), both in this repo's dossiers.** Top use case: budget open-weights agent/coding snapshot pin.
- **Provider / access:** open weights (`tencent/Hy3-Preview` family on HF, Apache 2.0 with no regional restrictions per the official release terms); TokenHub preview API (~$0.18/$0.59 per 1M, curated note); **no OpenCode Zen listing**.
- **Release / knowledge:** **2026-04-23** (resolved — aimodeling; the first pass's "April 2026" now precise); knowledge cutoff not stated publicly.
- **IDs:** `tencent/hy3-preview` (no Zen ID).
- **Context window:** **256K native** (confirmed family-wide; 32K out per platform metadata).
- **Modalities:** text and image in / text out; reasoning (hybrid fast/slow thinking); tool calls; JSON mode not separately verified.
- **Pricing (as of 2026-10-13):** TokenHub preview ~$0.18 in / ~$0.59 out per 1M; Apache-2.0 self-host (FP8 ~300GB family build); expect transitional pricing with two successors shipped.
- **Architecture:** open-weights MoE, 295B total / 21B active **+ 3.8B MTP layer**; 256K native; Apache 2.0.

### Raw benchmarks found

> Second-pass status: the preview's rows are the same Tencent-reported evidence pool as the official Hy3 (this cycle's hy3 pass) — the preview-vs-official distinction is a snapshot boundary, not a different measurement regime. The first pass's **AA II 41.2 is flagged as a launch-era listing** (the settled family value reads ~25 per the hy3 dossier) — this cycle's standard launch-settling pattern.

Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (retained); Gert Labs 36.9%; GDPval-AA **1136 Elo / 35.8% normalized** (the preview's own listing; the official-Hy3 dossier reads 27.3% — snapshot spread retained); AA Agentic Index 25.6%
- **DeepSWE: 28.0%** (inherited — the family datum via toolporto's Hy4-vs-Hy3 comparison, this cycle's hy4 pass); τ² / τ³ / Claw-Eval / Toolathlon / MCP-Atlas: still no verified public score

Reasoning / knowledge:

- GPQA Diamond: **87.2-89.7%** (Tencent-reported, near-bar — retained); HLE: 25.5-33.5% (below the 40% line); CritPt 4.9% (very weak); AA-LCR 66.7% (moderate)
- **AA II: the first pass's 41.2 is a launch-era listing — flagged** (the settled family value per the hy3 dossier reads ~25.3; scored on the settled)
- **Honesty CONFLICT inherited: the vendor's "hallucination rate dropping to 5.4%" claim vs the AA-measured ~73% hallucination field** (preview listing: index −18.5, accuracy 31.5%) — scored on AA
- IFBench 63.1% (retained)

Coding:

- SWE-bench Verified: **74.4%** (the preview's Tencent-reported listing — retained with the family caveat); SciCode 41.2-48.6% (below the 55% reference); AA Coding Index 58.8%; **DeepSWE 28.0%** (see agents); LiveCodeBench / Vibe / DeepSWE-dedicated rows: still absent

Long context:

- 256K native confirmed; AA-LCR 66.7% — moderate; no MRCR/RULER rows.

Multimodal:

- Text+image in per platform metadata; no independent vision rows for the preview (unchanged).

### Normalized scores (1–100)

- **Tool use: 58/100.** Held: TB 2.0 54.4% mid-band, GDPval 35.8% mid, Gert Labs 36.9% weak, Agentic Index 25.6%, and the inherited DeepSWE 28.0% — the agent-first preview measured well below the frontier it targeted.
- **Reasoning: 70/100.** Held: GPQA near-bar (87.2-89.7%, Tencent-reported) and the launch-era AA II 41.2 flagged to the settled ~25 — HLE 25.5-33.5%, CritPt 4.9%, and the honesty conflict (vendor 5.4% vs AA ~73%) hold it mid-band on settled terms.
- **Context window: 72/100.** Held: 256K native confirmed, AA-LCR 66.7% moderate.
- **Multimodal: 62/100.** Held: text+image in, zero measured vision rows.
- **Coding: 68/100.** Held: the Tencent-reported SWE-V 74.4% and the inherited DeepSWE 28.0% bracket the family truth — solid listed coding, weak measured agentic coding; SciCode below the reference.
- **Cost efficiency: 95/100.** Held: ~$0.18/$0.59 hosted plus Apache-2.0 no-restrictions self-host remains outstanding value for a 295B/21B open model.
- **Overall Score: 66/100.** (58 + 70 + 72 + 62 + 68) / 5 = 66.0, unchanged. Best-fit: a cheap open-weights snapshot pin — the same Tencent-reported evidence pool as the official Hy3, with the launch-era AA II (41.2) flagged to the settled ~25, DeepSWE 28.0% inherited, and two successors (Hy3 official, Hy4-preview) shipped; pin it only for license or snapshot reasons, never for new work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader 404 — disclosed, same as the official Hy3; the release-date resolution, architecture confirmation, Tencent-reported-benchmarks caveat, hallucination conflict, and DeepSWE 28.0% inheritance all from this cycle's hy3 and hy4 passes — aimodeling/digitalapplied/toolporto/vncmac/luxsynthesis coverage; the first-pass rows retained with the AA II 41.2 launch-era flag and the snapshot-spread caveats); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
