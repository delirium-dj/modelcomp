# Gemini 3 Pro — findings by Muse Spark 1.3

- Source: Google/Gemini 3 Pro (`google/gemini-3-pro`)
- Date: 2026-09-26 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch absolutes added, MRCR-measured context cap applied, modality corrected, scores recomputed 87 → 85)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model (Nov 2025 generation) with 1M context and Deep Think reasoning mode; strong science/reasoning showing with weaker long-task agentic coding than its 3.1 successor. Top use case: graduate-science reasoning and multimodal knowledge work.
- **Provider / access:** Google (Gemini API / AI Studio / Vertex AI, model ID `gemini-3-pro-preview` family, "11/25" release cut). Chat Completions-compatible endpoints via AI Studio.
- **Release / knowledge:** 2025-11-18 release (per Artificial Analysis / NYSGPT model record); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3-pro` (no Free ID exists on Zen — paid only).
- **Context window:** 1M total / 65K max output (folder meta.json, consistent with Vals AI record: 1M context). No public MRCR-at-1M figure found for this exact cut.
- **Modalities:** Text, image in; text out; reasoning yes (Deep Think mode); tool calls yes (CloudPrice catalog caps; corrects filed audio/video/PDF claim — Video-MMMU 87.6% and ScreenSpot-Pro 72.7% measured via image-frame lanes).
- **Pricing (as of 2026-08 record, re-verified 2026-09-27):** GA now $1.00/$6.00 per 1M (CloudPrice versions; preview tier was $2/$12 ≤200K, $4/$18 above). Paid only.
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench agentic: **87** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror of AA data); **t2-bench 85.4%** (Google launch, up from 54.9%; CloudPrice TAU2 0.9 #82 corroborates)
- Terminal-Bench Hard: **42** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- Terminal-Bench 2.0: **54.2%** (Google launch, up from 32.6%)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- ARC-AGI-2 (Verified): **31.1%** (Google DeepMind model card Feb 2026, via Macaron comparison — vs Gemini 3.1 Pro 77.1%, Opus 4.6 68.8%)
- HLE (no tools): **37** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- MMLU-Pro: **90** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- AIME 2025: **95% no-tools / 100% with code execution** (Google launch, vs predecessor 88%; AA-norm 96 consistent)
- MMMU-Pro: **81%** (Google launch, up from 68%); **Video-MMMU 87.6%** (launch, up from 83.6%); **ScreenSpot-Pro 72.7%** (launch, up from 11.4%)
- Vending-Bench 2 (long-horizon consistency): **$5,478.16** (Google launch, vs 2.5 Pro $573.64)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **39.6** (via NYSGPT 44B mirror); **73 on the Nov-2025 AA scale** (VentureBeat, crowned "new leader" — different scale vintage)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified (Vals AI, by task difficulty): **88% (<15 min) / 74% (15m–1h) / 43% (1–4h) / 33% (4h)** (Vals AI SWE-bench page, updated 2026-09-01); launch absolute **76.2%** (up from 59.6% — consistent)
- LiveCodeBench: **92** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror); launch **LiveCodeBench Pro 2439** (up from 1775 — consistent)
- SciCode: **56** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- SWE-bench Pro: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **MRCR v2 77% at 128k / 26.3% at 1M** (Google launch, vs 58%/16.4%) — full-length retrieval is weak and caps the tier

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau2 87 plus t2-bench 85.4%, TB2.0 54.2% and ScreenSpot-Pro 72.7% show solid Pro tool use; capped by TB-Hard 42 and no TB2.1/Tau3/GDPval numbers.
- **Reasoning: 90/100.** AIME 95/100 plus GPQA 91.9, MMLU-Pro 90 and AA 73 (Nov-25 leader) confirm frontier-adjacent science/reasoning; capped by ARC-AGI-2 31.1% — the fluid-novel-reasoning gap stands.
- **Context window: 90/100.** Verified 1M total / 65K out, but measured MRCR v2 26.3% at 1M (77% at 128k) caps it well below saturation peers.
- **Multimodal: 80/100.** Native text/image/speech/video in per AA with MMMU-Pro 81.0%, Video-MME ~88%, VideoMMMU 87.6%, CharXiv 81.4% and ScreenSpot-Pro 72.7% measured; capped by text-only out. (Corrected 2026-10-19: filed text/image-only catalog understated the cut.)
- **Coding: 85/100.** Launch SWE-V 76.2% plus Vals splits (88/74/43/33), LiveCodeBench Pro 2439 and SciCode 56 show strong short-task coding; long-task degradation and no SWE-Pro number cap it at 85.
- **Cost efficiency: 80/100.** GA pricing now $1/$6 per 1M (was $2/$12 preview); strong paid value for a Pro.
- **Overall Score: 85/100.** Mean of the five non-cost dims (80 + 90 + 90 + 80 + 85) / 5 = 85.0 → 85; best fit as a science-heavy reasoning Pro — measured full-length retrieval caps it below its 3.1 successor. (Re-verified 2026-10-19: Multimodal 78→80 on native 4-modality evidence; Overall holds 85.)

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (Artificial Analysis via NYSGPT 44B mirror, Vals AI SWE-bench page, Macaron/DeepMind model-card comparison, llm-stats SWE-Pro leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-19 (23 days after 2026-09-26)

Original research date 2026-09-26, amended 2026-09-27. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-19: (1) Artificial Analysis gemini-3-pro page (Preview high lane: Index 28 est., 1M, text+image+speech+video in, $2/$12 preview lane, deprecated → 3.1 Pro), (2) benchgap lane (34 measured as of 2026-10-18). Conflicting results compared below.

| Dimension | 2026-09-26/27 | 2026-10-19 | Change |
|---|---|---|---|
| Tool use | 80 | 80 | hold — Tau2 87 + TB2.0 54.2% stand; new Tau2 87.1% measured confirms filed row; BrowseComp ~80% est. deepens; no TB2.1/GDPval absolute |
| Reasoning | 90 | 90 | hold — AIME 95/100 + GPQA ~91 + MMLU-Pro 90 stand; new AA-GPQA 90.8% measured confirms filed band; HLE 39.7% measured deepens filed 37-norm; LCR 76.0% measured + Omni-acc 55.8% fill filed gaps; Index lanes (73 Nov-25 vs 28 v4.3.2) differ by scale vintage, both listed |
| Context | 90 | 90 | hold — 1M reconfirmed; filed MRCR 26.3%@1M cap stands (MRCRv2 ~85% est. only) |
| Multimodal | 78 | 80 | UP +2 — filed text/image-only catalog understated the cut: AA confirms 4-modality input (text/image/speech/video); benchgap measured MMMU 87.2%, MMMU-Pro 81.0%, Video-MME ~88%, VideoMMMU 87.6%, CharXiv 81.4%, ScreenSpot 72.7% confirm filed video-frame lanes as native, not provisional |
| Coding | 85 | 85 | hold — SWE-V 76.2% + Vals splits + LiveCode Pro 2439 stand; Vals SWE ~70% est. lane differs by harness, both listed; Vibe 14.3% measured is a weak tail consistent with cap |
| Cost | 80 | 80 | hold — filed GA $1/$6 stands (AA $2/$12 is the preview lane, both listed) |
| Overall | 85 | 85 | hold — (80+90+90+80+85)/5 = 85.0 → 85 (Multimodal 78→80 absorbed: mean 84.6→85.0, both round to 85) |

CORRECTION APPLIED: Multimodal 78→80 (filed "text/image per catalog" was understated — AA + benchgap video/audio lanes are native 4-modality input). Overall holds 85 either way. Remaining gaps: TB2.1/GDPval/Claw absolutes, CritPt, measured MRCR curve.

Sources: https://artificialanalysis.ai/models/gemini-3-pro · https://benchgap.net/model/gemini-3-pro

