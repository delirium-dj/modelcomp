# HY3 Preview — findings by GLM 5.3 Flash

- Source: Tencent (`tencent/hy3-preview` — Hunyuan HY3 preview build)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 Preview (April 2026 preview of the HY3 line; no Free-tier wording)
- **Short description:** Tencent's April 2026 preview of the HY3 Hunyuan sparse MoE (295B total / 21B active, 256K window, hybrid fast-and-slow thinking) — explicitly superseded by the full July 6, 2026 HY3 release and then by the Hy4 preview in Tencent's own line. BenchLM ranks it #86 of 889 (52.5) with 22 of 625 rows.
- **Provider / access:** Preview weights/endpoints via Tencent Hunyuan and TokenHub (~$0.18/$0.59 per 1M). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Preview released April 2026 (folder meta); full HY3 released July 6, 2026. Knowledge cutoff not verified in reviewed sources.
- **IDs:** `tencent/hy3-preview` (folder meta / TokenHub preview route).
- **Context window:** 256,000 tokens (BenchLM concurs); ~32K max output (folder meta; same architecture family as the July release).
- **Modalities:** Text + image in; text out (folder meta). Hybrid thinking modes from the HY3 family (`no_think`/`low`/`high` per the released chat template).
- **Pricing (as of 2026-10-11):** TokenHub preview ~$0.18 in / $0.59 out per 1M (folder meta). No free hosted tier.
- **Architecture:** Open weights, Apache 2.0 (folder meta). Sparse MoE, 295B total / ~21B activated. Preview-stage weights — quality may differ from the July GA build.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1136** (AA — normalized **35.8%**; fills the gap the prior passes marked missing; weak); AA Agentic Index: **25.6%** (AA — new)
- Terminal-Bench 2.0: **54.4%** (Tencent model card via benchlm.ai — new; weak); Gert Labs: **36.91%** (new)
- Terminal-Bench 2.1: **71.7%** (Tencent-reported, HF model card via emergent.sh, prior pass)
- Tau2 / Tau3 / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (Tencent model card — corroborated by AA's **89.7%**); HLE: **25.5%** (AA) — **conflicts with the vendor-reported 53.2** the prior pass cited; both listed
- Artificial Analysis Intelligence Index: **41.2** (AA current board) — **up from the 34 snapshot the prior pass cited**
- AA-LCR v1.1: **66.7%** (AA — fills the long-context gap); CritPt: **4.9%** (AA — near-zero)
- AA-Omniscience: **31.5% accuracy / 73.0% non-hallucination row / −18.5 index** (AA — weak)
- IFBench: **63.1%** (AA — new)

Coding:

- SWE-bench Verified: **74.4%** (Tencent model card via benchlm.ai, 2026-10-10 — fills the gap the prior pass marked "no SWE-bench Verified row"; same value as the July GA build)
- AA-SciCode: **48.6%** (AA — fills the gap); SciCode: **41.2%** (AA); AA Coding Index: **58.8%** (AA — new, mid)
- SWE-bench Multilingual: **75.8%**; SWE-bench Pro (Public): **57.9%** (vendor rows, prior pass — corroborated by benchlm)
- DeepSWE: **28.0%** (vendor — weak)
- LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 66.7% is the first measured long-context number (mid); 256K window; no MRCR/RULER retrieval numbers published

Status (sourced, non-benchmark):

- Superseded twice over: by HY3 full release (July 6, 2026) and by Tencent's newer Hy4 preview (BenchLM radar).

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 71.7% (vendor) and the new SWE-bench Verified 74.4% row prove working agentic execution; the measured GDPval 35.8%, AA Agentic 25.6% and TB2.0 54.4% temper it — the band holds.
- **Reasoning: 78/100.** GPQA 87.2%/89.7% (two sources) and the AA Index of 41.2 (up from the cited 34) are strong; the HLE conflict (vendor 53.2 vs AA 25.5/33.5) and CritPt 4.9% cap the composite — the band holds on the corroborated rows.
- **Context window: 72/100.** 256K in the 200K–500K band (same as the July build); AA-LCR 66.7% is the first measured retrieval-adjacent evidence (mid).
- **Multimodal: 62/100.** Image-in claim from folder meta at the 60–70 band floor; no vendor vision rows.
- **Coding: 66/100.** (Was 60 on the prior pass.) SWE-bench Verified 74.4% (model card) is the decisive fill — a strong result matching the GA build — with AA-SciCode 48.6% and AA Coding Index 58.8% corroborating; DeepSWE 28.0% shows the agentic-coding weakness.
- **Cost efficiency: 94/100.** Same TokenHub preview pricing (~$0.18/$0.59) as the GA line, leaning high between the $0.10/$0.20→97–99 and $0.30/$1.20→90 anchors.
- **Overall Score: 69.2/100.** (Was 68 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (68 + 78 + 72 + 62 + 66) / 5 = 346/5 = 69.2 — nudged up on the 2026-10-11 second pass as the SWE-bench Verified fill converts the coding dock into measured evidence. Best fit: historically interesting now that its benchmark rows are comprehensive — the academic reasoning numbers are elite for a preview, but the July GA HY3 (or Hy4 preview) remains the better evaluation target.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai Hy3 Preview page citing the Tencent HF model card + AA boards, the prior 2026-09-19/10-05 passes on emergent.sh/TokenHub; 2026-10-16 re-check: BenchLM 22-row refresh corroborates every row, no new data (rank #86/889 52.5 → #91/954 52.21) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
