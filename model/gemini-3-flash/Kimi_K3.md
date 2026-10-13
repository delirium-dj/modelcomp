# Gemini 3 Flash — findings by Kimi K3

- Source: Google / Gemini 3 Flash (`gemini-3-flash`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; price, release date, knowledge cutoff, and audio/video input now verified; model now marked deprecated at Artificial Analysis)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (officially "Gemini 3 Flash Preview", non-reasoning variant)
- **Short description:** Google's entry Flash model of the Gemini 3 generation — non-reasoning (per BenchLM/AA classification), fast and cheap, with strong multilingual QA but weak frontier reasoning. Succeeded upward by 3.5/3.6/3.7/3.8 Flash. **Deprecated at Artificial Analysis as of 2026-10** — AA only continues its default 10k-input performance workload; independent figures below are its final snapshot.
- **Provider / access:** Google Gemini API (`gemini-3-flash`), AI Studio; still listed live on OpenCode Zen as `gemini-3-flash` (zen/v1/models listing, verified 2026-10-13) — first pass found no Zen ID.
- **Release / knowledge:** released 2025-12-17 (Artificial Analysis); knowledge cutoff Jan 2025 (Artificial Analysis) — both verified this pass.
- **IDs:** `google/gemini-3-flash`; OpenCode Zen ID `gemini-3-flash`.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis); max output not verified.
- **Modalities:** text, image, **speech, and video** in → text out (Artificial Analysis technical specs — broader than first pass's text/image note); reasoning no (confirmed); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** **$0.50/M input, $3.00/M output, 90% cache discount; blended (7:2:1) ≈ $0.43/M** (Artificial Analysis, Google first-party API) — first pass had no verified price.
- **Architecture:** proprietary (Google DeepMind); params undisclosed.
- **Performance:** 202.7 output tokens/s, TTFT 0.86 s (Artificial Analysis) — notably fast for the tier.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **43.3%** (benchlm.ai, first-pass snapshot)
- Claw-Eval: **49.2%** (benchlm.ai, first-pass snapshot)
- Terminal-Bench 2.1 (Vals): **53.9%** (benchlm.ai, first-pass snapshot); other harnesses: no verified public score found
- Gert Labs: **56.6%**; JobBench: **11.4%** (benchlm.ai, first-pass snapshot)
- GDPval-AA / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (AA); 87.9% (Vals) (benchlm.ai, first-pass snapshot)
- HLE (AA-HLE): **15.0%** (benchlm.ai, first-pass snapshot)
- AA-LCR: **55.3%**; CritPt: **1.4%** (benchlm.ai, first-pass snapshot)
- Artificial Analysis Intelligence Index: **18 (estimated; #25/57 in class, class median 15)** — artificialanalysis.ai 2026-10-13, consistent with first-pass 17.9 (benchlm.ai)
- BenchLM overall **55.61/100, #52 of 507** (benchlm.ai, first-pass snapshot)
- AA-Omniscience Index: **−4.3%** — Accuracy **45.8%** / Hallucination Rate **92.4%** (benchlm.ai, first-pass snapshot)
- MMLU-Pro (Vals): **88.6%**; AA Global-MMLU-Lite: **92.7%** (benchlm.ai, first-pass snapshot)
- FrontierMath v2 T1–3: **35.6%**, Tier 4: **4.2%** (benchlm.ai, first-pass snapshot)

Coding:

- SWE-bench (Vals): **75.0%**; SWE-bench Verified: no separate verified public score found (benchlm.ai, first-pass snapshot)
- LiveCodeBench (Vals): **85.6%** (benchlm.ai, first-pass snapshot)
- Vibe Code Bench: **20.2%** (benchlm.ai, first-pass snapshot)
- SciCode / AA Coding Index: no verified public score found

Long context:

- AA-LCR 55.3% at the 1M window (first-pass snapshot); no MRCR/RULER/GraphWalks public score found.

Multimodal:

- AA-MMMU-Pro: **78.6%**; Design Arena Website: **1207 Elo** (benchlm.ai, first-pass snapshot)
- Input breadth re-verified this pass: text/image/**speech/video** in (Artificial Analysis specs); output remains text-only.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 62/100.** Unchanged — Claw-Eval 49.2% and TB 2.1 (Vals) 53.9% usable; capped by τ²-bench 43.3% and JobBench 11.4%. No new agentic rows found this pass (model deprecated, evaluation frozen).
- **Reasoning: 60/100.** Unchanged — decent static QA (GPQA 81–88%, MMLU-Pro 88.6%) but near-floor on hard reasoning (HLE 15%, CritPt 1.4%, AA Index 18 est.) — non-reasoning profile confirmed.
- **Context window: 80/100.** Unchanged — 1M window confirmed by both trackers; capped by weak LCR (55.3%).
- **Multimodal: 80/100.** +4 vs first pass — input breadth now officially verified to include speech and video (not just text/image); MMMU-Pro 78.6% vision quality; text-only output still caps it.
- **Coding: 78/100.** Unchanged — LiveCodeBench 85.6% and SWE-bench (Vals) 75.0% strong for the tier; capped hard by Vibe Code Bench 20.2%.
- **Cost efficiency: 85/100.** Price now **verified** (was provisional at the same 85): $0.50/$3.00 with 90% cache discount — genuinely the cheapest credible Gemini 3 tier.
- **Overall Score: 72/100.** Mean of the five quality dims (62+60+80+80+78)/5 = 72.0 → 72 (was 71; +1 from verified multimodal breadth). Best fit: cheap, fast multilingual chat/QA, lightweight coding, and speech/video-ingestion tasks where depth of reasoning is not required.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (artificialanalysis.ai model page 2026-10-13 — deprecation status, verified $0.50/$3.00 price, cutoff Jan 2025, release 2025-12-17, speech/video input, speed/latency; OpenCode Zen `/zen/v1/models` listing verified 2026-10-13 — `gemini-3-flash` still live; benchmark rows retained from first-pass benchlm.ai snapshot, flagged as historical). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
