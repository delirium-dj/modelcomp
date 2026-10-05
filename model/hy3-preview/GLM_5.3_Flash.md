# HY3 Preview — findings by GLM 5.3 Flash

- Source: Tencent (`tencent/hy3-preview` — Hunyuan HY3 preview build)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 Preview (April 2026 preview of the HY3 line; no Free-tier wording)
- **Short description:** Tencent's April 2026 preview of the HY3 Hunyuan sparse MoE (295B total / 21B active, 256K window, hybrid fast-and-slow thinking) — explicitly superseded by the full July 6, 2026 HY3 release and then by the Hy4 preview in Tencent's own line. The 2026-10-05 enrichment pass surfaced Tencent-reported benchmark rows for the preview build that the 2026-09-19 pass could not find.
- **Provider / access:** Preview weights/endpoints via Tencent Hunyuan and TokenHub (~$0.18/$0.59 per 1M). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Preview released April 2026 (folder meta); full HY3 released July 6, 2026. Knowledge cutoff not verified in reviewed sources.
- **IDs:** `tencent/hy3-preview` (folder meta / TokenHub preview route).
- **Context window:** 256,000 tokens; ~32K max output (folder meta; same architecture family as the July release).
- **Modalities:** Text + image in; text out (folder meta). Hybrid thinking modes from the HY3 family (`no_think`/`low`/`high` per the released chat template).
- **Pricing (as of 2026-10-05):** TokenHub preview ~$0.18 in / $0.59 out per 1M (folder meta). No free hosted tier.
- **Architecture:** Open weights, Apache 2.0 (folder meta). Sparse MoE, 295B total / ~21B activated. Preview-stage weights — quality may differ from the July GA build.

### Raw benchmarks found

All rows are Tencent-reported (Hugging Face model-card figures compiled at emergent.sh, updated 2026-09-02); no independent verification located.

Agent / tool use:

- Terminal-Bench 2.1: **71.7%** (Tencent-reported, HF model card via emergent.sh, upd 2026-09-02)
- Tau2 / Tau3 / GDPval / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.4** (Tencent-reported, HF model card via emergent.sh, upd 2026-09-02)
- HLE: **53.2** (same source)
- Artificial Analysis Intelligence Index: **34** (Artificial Analysis, via the same compilation)
- LCR / MRCR: no verified public score found

Coding:

- SWE-bench Multilingual: **75.8%** (Tencent-reported, HF model card via emergent.sh, upd 2026-09-02)
- SWE-bench Pro (Public): **57.9%** (same source)
- DeepSWE: **28.0%** (same source)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 256K window; no MRCR/RULER retrieval numbers published

Status (sourced, non-benchmark):

- Superseded twice over: by HY3 full release (July 6, 2026) and by Tencent's newer Hy4 preview (BenchLM radar, 2026-09-18).

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 at 71.7% is a strong agentic result that replaces the old "no published agentic rows" dock; capped by the missing Tau2/GDPval rows and vendor-only sourcing.
- **Reasoning: 78/100.** GPQA Diamond 90.4 and HLE 53.2 are elite measured numbers, but the AA Intelligence Index of 34 sits mid-band and the weights are preview-stage — the strong academic rows do not carry all the way up.
- **Context window: 72/100.** 256K in the 200K–500K band (same as the July build); no retrieval numbers.
- **Multimodal: 62/100.** Image-in claim from folder meta at the 60–70 band floor; no vendor vision rows.
- **Coding: 60/100.** SWE-bench Multilingual 75.8% is solid and SWE-bench Pro 57.9% is mid, but DeepSWE 28.0% shows weak agentic-coding execution; no SWE-bench Verified row exists.
- **Cost efficiency: 94/100.** Same TokenHub preview pricing (~$0.18/$0.59) as the GA line, leaning high between the $0.10/$0.20→97–99 and $0.30/$1.20→90 anchors.
- **Overall Score: 68.0/100.** (68+78+72+62+60)/5 = 68.0. Best fit: historically interesting now that its benchmark rows exist — the academic reasoning numbers are elite for a preview, but the July GA HY3 (or Hy4 preview) remains the better evaluation target.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-19 pass: BenchLM HY3 dossier and radar, Hugging Face HY3-family model card; 2026-10-05 approved enrichment pass: Tencent-reported HF model-card figures via emergent.sh upd 2026-09-02, Artificial Analysis index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
