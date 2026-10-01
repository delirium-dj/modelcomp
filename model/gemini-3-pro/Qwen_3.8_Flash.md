# Gemini 3 Pro — findings by Qwen 3.8 Flash

- Source: Google / Gemini 3 Pro (`google/gemini-3-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model with 1M–2M context and Deep Think mode (scored here as the non-reasoning base variant) — an omni-input multimodal powerhouse with only middling agentic/reasoning coverage pre-Deep-Think.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3-pro`); paid tier, no free ID (`noFreeId`). Base variant is non-reasoning; Deep Think is a sibling config.
- **Release / knowledge:** late 2025/2026 (Gemini 3 launch); knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3-pro`.
- **Context window:** 1M / 65K out (curated meta); BenchLM lists 2M for this variant.
- **Modalities:** text, image, audio, video, PDF in; text out; tool calls. No non-text output.
- **Pricing (as of 2026-10-02):** Paid-tier API pricing (exact rates not published in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (26 of 618 rows; base variant, non-reasoning), citing Google's Gemini 3 launch blog, Artificial Analysis, Vals AI, Epoch AI, Gert Labs and Qwen comparison tables (fetched 2026-10-02).

Agent / tool use:

- τ²-bench: **87.1%** (AA) — the only real tool-calling row; Gert Labs 63.23%
- JobBench 11.4% — no Terminal-Bench/GDPval rows published for this variant

Reasoning / knowledge:

- AA-GPQA Diamond: **90.8%**; AA-HLE **39.7%** (under the 40% bar)
- ARC-AGI-2: **31.1%** (DeepMind); AA-LCR 76.0%; CritPt 9.1%
- FrontierMath v2 Tiers1-3 **37.6%** / Tier 4 18.75% (Epoch); Intelligence Index only **28.0**
- AA MMLU-Pro 89.8; Global-MMLU-Lite 92.2; IFBench 70.4
- Omniscience Accuracy / **Hallucination: 55.8% / 91.5%** (severe flag)

Coding:

- AA LiveCodeBench: **91.7%** — elite contest code
- Vibe Code Bench: **14.3%** (Vals) — weak agentic repo work; no SWE-bench/DeepSWE/Coding Index rows

Multimodal / long context:

- VideoMMMU **87.6%**, V* **88.0%**, MathVision **86.6%**, CharXiv 81.4, ScreenSpot Pro 72.7, MMMU-Pro 81.0 (AA 80.2)
- 1M–2M window (no ≥98% long-context retrieval metric reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 75/100.** τ²-bench 87.1% is solid structured tool use, but coverage is thin (no TB/GDPval/OSWorld rows) and JobBench 11.4% is poor — well short of the 90–100 frontier band on this base variant.
- **Reasoning: 68/100.** GPQA-Diamond 90.8% clears the bar, but HLE 39.7% misses the 40 reference, ARC-AGI-2 is only 31.1%, Intelligence Index 28.0 and FrontierMath ~38 are mid, and the 91.5% Omniscience hallucination rate is a hard cap.
- **Context window: 95/100.** ≥1M tier confirmed (meta 1M / BenchLM 2M), 65K output; no published ≥98% retrieval-at-length metric (MRCR/GraphWalks), so the band floor.
- **Multimodal: 92/100.** Text+image+audio+video+PDF in with strong grounded rows across the board (VideoMMMU 87.6, V* 88.0, MathVision 86.6, CharXiv 81.4) — the audio/video-in band; text-only output keeps it under 95.
- **Coding: 72/100.** AA LiveCodeBench 91.7% is excellent, but Vibe Code Bench 14.3% and the absence of SWE-bench Pro/DeepSWE/Coding Index rows show agentic coding isn't demonstrated on this variant.
- **Cost efficiency: 60/100.** Paid-tier API at Gemini Pro-class rates (≈$2/$12 band; exact published rate not in curated meta); no free tier. Cost is excluded from Overall.
- **Overall Score: 80/100.** Mean of Tool 75, Reasoning 68, Context 95, Multimodal 92, Coding 72 = 80.4 → 80. Best fit: omnimodal understanding jobs (video, audio, charts, screens) with a huge window; for agentic coding and hard reasoning use the Deep Think sibling or a later 3.x/4 model, and always ground factual answers given the 91.5% hallucination flag.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing Google's Gemini 3 launch, DeepMind model pages, Artificial Analysis, Vals AI, Epoch AI and Gert Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
