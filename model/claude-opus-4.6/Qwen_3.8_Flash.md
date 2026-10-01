# Claude Opus 4.6 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Opus 4.6 (`anthropic/claude-opus-4-6`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6 (base, non-reasoning)
- **Short description:** The base (non-adaptive) Opus 4.6 — a strong agentic/browser model with excellent contest math and code, but the non-thinking variant shows mid independent reasoning (AA-HLE 19.1, Intelligence Index 26.4) and a very high 80.1% hallucination rate; the Adaptive/thinking sibling and the Opus 5 line supersede it.
- **Provider / access:** Anthropic API (`claude-opus-4-6`); no OpenCode Zen free ID (`noFreeId`). Base variant; tool calls.
- **Release / knowledge:** early 2026 (Claude Opus 4.6 system card); knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-opus-4-6`.
- **Context window:** BenchLM lists **1M** (the Opus 4.6 long-context beta); curated `meta.json` says "200K" (the standard default) — conflict, resolved in favour of the 1M beta below.
- **Modalities:** text, image in; text out (curated meta); tool calls. No published audio/video/PDF rows.
- **Pricing (as of 2026-10-02):** Paid-tier Opus-class pricing (exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (46 of 618 rows; 64.25/100, #40 of 645), citing the Claude Opus 4.6 system card, Artificial Analysis, Vals AI, Meta Muse Spark, Arcee, Cognition, Epoch AI, CyberGym, SWE-Rebench and React Native Evals (fetched 2026-10-02). BenchLM flags partial coverage; the base variant is listed as **Non-Reasoning**.

Agent / tool use:

- BrowseComp **83.7%**; τ²-bench 84.8%; OSWorld-Verified 72.7%; Claw-Eval 70.4%; CyberGym 66.6%; DeepSearchQA 73.7%
- Terminal-Bench 2.0 65.4%; Gert Labs 61.9%; JobBench 36.7%; ResearchClawBench 19.9%; ApprenticeBench **5.0%**

Reasoning / knowledge:

- GPQA 91.3 (system card; AA 84.0, Vals 89.2); HLE **53%** w/ tools (40% no-tools; **AA-HLE 19.1** on this variant); SuperGPQA 95%; MMLU-Pro 82/89.1
- AIME25 (Arcee) **99.8%**; FrontierMath v2 Tiers 1-3 40.7% / Tier 4 **22.9%** (Epoch AI) — strong math
- Intelligence Index **26.4** (low, non-reasoning); AA-LCR 67.0; CritPt **2.8%**; AA-IFBench 44.6
- **Omniscience Index 2.4 / Accuracy 45.8% / Hallucination 80.1%** — severe confabulation

Coding:

- SWE-bench Verified **80.8%** (Arcee 75.6); LiveCodeBench Pro 70.7%; React Native Evals 84.1%; SWE-Rebench 65.3%
- SWE-bench Pro 53.4%; Vibe Code 57.6%; FrontierCode 1.1 26.9%

Multimodal / long context:

- MMMU-Pro **77.3%** (AA 72.5); ScreenSpot Pro 83.1%; ERQA 51.6%; MedXpertQA (MM) 64.8%; Design Arena Website 1299
- 1M window (beta); AA-LCR 67.0, no ≥98% MRCR at length reported.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 80/100.** BrowseComp 83.7%, τ²-bench 84.8%, OSWorld-Verified 72.7% and CyberGym 66.6% are a solid agentic/browser cluster, but Terminal-Bench 2.0 65.4%, JobBench 36.7% and ApprenticeBench 5.0% keep it under the 90 band.
- **Reasoning: 70/100.** System-card GPQA 91.3 / HLE 53 and superb math (AIME 99.8%, FrontierMath Tier 4 22.9%) are strong, but the non-reasoning variant's independent reads — AA-HLE 19.1, Intelligence Index 26.4, CritPt 2.8, IFBench 44.6 — and an **80.1% hallucination rate** drag real reliability down.
- **Context window: 92/100.** Nominally the ≥1M long-context beta (BenchLM), but curated meta's standard default is 200K and AA-LCR 67.0 with no ≥98% retrieval proof at length, so just below the ≥1M floor.
- **Multimodal: 66/100.** Text+image in with a decent grounded suite (MMMU-Pro 77.3, ScreenSpot Pro 83.1) — a +image band (60–70); ERQA 51.6 and MedXpertQA 64.8 are mid, and no audio/video/PDF rows are published, so no higher-tier credit.
- **Coding: 74/100.** SWE-bench Verified 80.8%, LiveCodeBench Pro 70.7% and React Native 84.1% are good, but SWE-bench Pro 53.4%, Vibe Code 57.6% and FrontierCode 26.9% keep the hardest agentic-code profile mid.
- **Cost efficiency: 40/100.** Opus-class premium paid-tier pricing (no free ID, exact rate unpublished); anchored near the $10/$50≈30 / $3/$15≈60 midpoint as a high-end flagship. Cost is excluded from Overall.
- **Overall Score: 76/100.** Mean of Tool 80, Reasoning 70, Context 92, Multimodal 66, Coding 74 = 76.4 → 76. Best fit: browser/research agents and code where a grounding source is attached and output is fact-checked; the base non-reasoning variant is not for unaided deep reasoning (its independent HLE/factuality are weak) — pick the Adaptive sibling or the Opus 5/5.5 line for that.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Claude Opus 4.6 system card plus Artificial Analysis, Vals AI, Meta Muse Spark, Arcee, Cognition, Epoch AI, CyberGym, SWE-Rebench and React Native Evals); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
