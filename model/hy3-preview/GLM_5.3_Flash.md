# HY3 Preview — findings by GLM 5.3 Flash

- Source: Tencent (`tencent/hy3-preview` — Hunyuan HY3 preview build)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 Preview (April 2026 preview of the HY3 line; no Free-tier wording)
- **Short description:** Tencent's April 2026 preview of the HY3 Hunyuan sparse MoE (295B total / 21B active, 256K window, hybrid fast-and-slow thinking) — explicitly superseded by the full July 6, 2026 HY3 release and then by the Hy4 preview in Tencent's own line.
- **Provider / access:** Preview weights/endpoints via Tencent Hunyuan and TokenHub (~$0.18/$0.59 per 1M). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Preview released April 2026 (folder meta); full HY3 released July 6, 2026. Knowledge cutoff not verified in reviewed sources.
- **IDs:** `tencent/hy3-preview` (folder meta / TokenHub preview route).
- **Context window:** 256,000 tokens; ~32K max output (folder meta; same architecture family as the July release).
- **Modalities:** Text + image in; text out (folder meta). Hybrid thinking modes from the HY3 family (`no_think`/`low`/`high` per the released chat template).
- **Pricing (as of 2026-09-19):** TokenHub preview ~$0.18 in / $0.59 out per 1M (folder meta). No free hosted tier.
- **Architecture:** Open weights, Apache 2.0 (folder meta). Sparse MoE, 295B total / ~21B activated. Preview-stage weights — quality may differ from the July GA build.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau2 / Tau3 / GDPval / MCP-Atlas / Claw-Eval: no verified public score found — BenchLM carries 0 sourced benchmark rows for the HY3 line ("tracked, but not publicly ranked yet")

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / LCR / MRCR: no verified public score found

Coding:

- SWE-bench Verified / Pro / LiveCodeBench / SciCode / DeepSWE / Vibe: no verified public score found

Long context:

- 256K window; no MRCR/RULER retrieval numbers published

Status (sourced, non-benchmark):

- Superseded twice over: by HY3 full release (July 6, 2026) and by Tencent's newer Hy4 preview (BenchLM radar, 2026-09-18). No independent or vendor benchmark tables located for the preview build in any reviewed source.

### Normalized scores (1–100)

- **Tool use: 52/100.** Preview of a tool-call-capable MoE with preserved thinking — but no published agentic rows and preview-stage weights; scored just under the full HY3's provisional midpoint.
- **Reasoning: 55/100.** Hybrid thinking modes from the same family; zero published reasoning benchmarks; docked below full HY3 for preview staleness.
- **Context window: 72/100.** 256K in the 200K–500K band (same as the July build); no retrieval numbers.
- **Multimodal: 62/100.** Image-in claim from folder meta at the 60–70 band floor; no vendor vision rows.
- **Coding: 52/100.** No coding benchmarks; preview weights superseded by the GA build — provisional floor-of-band score.
- **Cost efficiency: 94/100.** Same TokenHub preview pricing (~$0.18/$0.59) as the GA line, leaning high between the $0.10/$0.20→97–99 and $0.30/$1.20→90 anchors.
- **Overall Score: 58.6/100.** (52+55+72+62+52)/5 = 58.6. Best fit: historical entry — evaluate the July GA HY3 (or the Hy4 preview) instead unless you specifically need April-era preview behavior.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: BenchLM HY3 dossier and radar, Hugging Face HY3-family model card, Tencent blog attempt, cross-vendor tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

