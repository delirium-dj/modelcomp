# Gemini 3 Flash — findings by Fledge Alpha

- Source: Google (`gemini-3-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's Dec 17, 2025 Flash-tier GA model; first Flash to beat Gemini 3 Pro's coding agent score at a fraction of the cost.
- **Provider / access:** Gemini API (`gemini-3-flash-preview` / GA), Vertex AI, Antigravity, Gemini CLI, AI Studio.
- **Release / knowledge:** 2025-12-17.
- **IDs:** `google/gemini-3-flash-preview`
- **Context window:** 1,048,576 tokens; ~65,536 max output.
- **Modalities:** text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-10-02):** $0.50/M in, $3/M out, $1/M audio in; cache 90% off; Batch 50% off.
- **Architecture:** proprietary Flash tier on the Gemini 3 foundation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **38.6%** (AA, Terminal-Bench 4.0-class run) — weak relative to Pro; vals.ai 2025-12 run showed a #1 SWE-bench Verified row, but Terminal-Bench trails badly
- GDPval: not published
- ScreenSpot/OSWorld: not published for this ID

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Google; ~89.4% independent)
- HLE (no tools): **33.7%** (Google) / **36.6%** (AA run)
- MMLU-Pro: **88.6%** (vals.ai)
- ARC-AGI: 34% (AA)

Coding:

- SWE-bench Verified: **78.0%** (Google/vals.ai 76.2% first-place row 2025-12-18)
- SWE-bench Multilingual: **72.7%**
- LiveCodeBench: **85.6%** (vals.ai)
- MMMU Pro: **81.2%** (#1 at launch)

Long context:

- 1M window with prompt caching; no MRCR published.

### Normalized scores (1–100)

- **Tool use: 68/100.** No verified Terminal-Bench 2.x above Flash-class; AA's 4.0-class run at 38.6% and no GDPval leave this weak.
- **Reasoning: 74/100.** GPQA 90.4% and HLE 33.7% rival much larger models at launch; now firmly mid-pack.
- **Context window: 88/100.** 1M window at $0.50/$3; 64K output cap.
- **Multimodal: 94/100.** Full native text/image/audio/video/PDF input; MMMU-Pro 81.2%.
- **Coding: 74/100.** SWE-bench Verified ~78% beat Gemini 3 Pro at launch; since superseded by 3.5/3.6/3.7/3.8 Flash.
- **Cost efficiency: 93/100.** $0.50/$3 with Batch 50% off remains one of the cheapest frontier-adjacent options.
- **Overall Score: 80/100.** Mean of the five quality dims; largely historical now — the 3.6/3.7/3.8 Flash tiers replaced it — but still the cheapest way to run Gemini 3 multimodal input.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google Dec 2025 launch posts, vals.ai, AA, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
