# Hy3 Preview — findings by GLM 5.3

- Source: Tencent (`tencent/hy3-preview`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's April-2026 preview of the Hunyuan Hy3 MoE (295B/21B active, 256K context) with text+image input — superseded by the full Hy3 release in July 2026. Top use case: budget open-weights agent/coding preview.
- **Provider / access:** open weights (BenchLM lists Open Weight); TokenHub preview API (~$0.18/$0.59 per 1M, curated pricing note); no OpenCode Zen listing (no Zen Free ID).
- **Release / knowledge:** April 2026 (preview); knowledge cutoff not stated publicly.
- **IDs:** `tencent/hy3-preview` (no Zen ID).
- **Context window:** 256K total / 32K out (curated metadata; BenchLM lists 256K).
- **Modalities:** text and image in / text out (curated metadata); reasoning yes; tool calls yes (agentic rows on BenchLM); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** TokenHub preview ~$0.18 in / $0.59 out per 1M (curated note; no Zen listing); open weights give a self-host path.
- **Architecture:** open-weights MoE, 295B total / 21B active (curated metadata).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (BenchLM)
- Gert Labs: **36.9%** (BenchLM)
- GDPval-AA: **1136 Elo** (BenchLM; normalized field 35.8% — mid band)
- AA Agentic Index: **25.6%** (BenchLM)
- Tau2/Tau3 / Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (BenchLM; AA-GPQA 89.7%)
- HLE: **25.5%** (BenchLM; AA-HLE 33.5% — below the 40% frontier line)
- LCR / MLCR: AA-LCR **66.7%** (BenchLM); MLCR no verified public score found
- CritPt: **4.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **41.2** (BenchLM — upper-mid tier)
- Omniscience: Index **-18.5**, Accuracy **31.5%**, hallucination-rate field **73.0%** (BenchLM; label ambiguous vs AA's "Non-Hallucination Rate" — flagged, not double-counted)
- IFBench: **63.1%** (BenchLM)

Coding:

- SWE-bench Verified: **74.4%** (BenchLM)
- Terminal-Bench 2.0: **54.4%** (BenchLM)
- SciCode **41.2%** / AA-SciCode **48.6%** / AA Coding Index **58.8%** (BenchLM)
- LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- AA-LCR 66.7% (BenchLM) at the 256K window; no MRCR/RULER per-length data — no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 58/100.** TB 2.0 54.4% is mid-band, GDPval-AA 1136 mid, Gert Labs 36.9% weak, AA Agentic Index 25.6% — a preview-generation agent well below the frontier.
- **Reasoning: 70/100.** GPQA up to 89.7% is near-frontier and the AA Index 41.2 is respectable, but HLE 25.5–33.5% misses the frontier line and a -18.5 Omniscience Index shows weak knowledge reliability.
- **Context window: 72/100.** 256K verified sits in the 200K–500K tier; AA-LCR 66.7% is moderate.
- **Multimodal: 62/100.** Text+image in (image tier 60–70), text out; no independent vision-benchmark rows found for the preview — lower half of the tier.
- **Coding: 68/100.** SWE-bench Verified 74.4% is solid for a 21B-active preview, but SciCode ~41–49%, AA Coding Index 58.8% and TB 2.0 54.4% sit mid-band.
- **Cost efficiency: 95/100.** ~$0.18/$0.59 per 1M undercuts the ~$0.60/$2.20 (~92) anchor materially for a 295B/21B open-weights model.
- **Overall Score: 66/100.** Half-up mean of the five quality dims (58+70+72+62+68)/5 = 66.0 — a cheap open-weights preview with near-frontier GPQA; superseded by the full Hy3 (and Hy4) for serious work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, curated platform metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
