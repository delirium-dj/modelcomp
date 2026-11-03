# Claude Opus 4.6 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Opus 4.6 (`anthropic/claude-opus-4-6`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — pricing verified $5/$25 (Cost 40→45) + legacy status with retirement no sooner than 2027-02-05 + exact-ID still profiled on AA v5, bands unchanged
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
- **Cost efficiency: 45/100.** (Revised by the 2026-11-03 second pass from 40/100's unpublished-rate guess: Anthropic's own launch post states **"Pricing remains the same at $5/$25 per million tokens"** — the modern Opus band, not the older $15/$75.) $5/$25 sits midway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors (matching the Opus 4.7/4.8 sibling passes); no free tier. Cost is excluded from Overall.
- **Overall Score: 76/100.** Mean of Tool 80, Reasoning 70, Context 92, Multimodal 66, Coding 74 = 76.4 → 76. Best fit: browser/research agents and code where a grounding source is attached and output is fact-checked; the base non-reasoning variant is not for unaided deep reasoning (its independent HLE/factuality are weak) — pick the Adaptive sibling or the Opus 5/5.5 line for that.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://www.anthropic.com/news/claude-opus-4-6 (2026-02-05 launch: **"Pricing remains the same at $5/$25 per million tokens"**) and https://www.silicondata.com/use-cases/anthropic-claude-api-pricing-2026 (**"a modern Opus tier at $5 / $25 instead of the older $15 / $75"**) · lifecycle — https://www.therundown.ai/tools/claude-opus-4-6 (**"Anthropic currently says retirement will be no sooner than February 5, 2027. The model has not been deprecated … but its legacy [status]"**) and https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule (**claude-opus-4-6: GA, retirement 2027-02-02**) · index — https://artificialanalysis.ai/providers/anthropic (**exact variant "Claude Opus 4.6 (non-reasoning, high)" remains profiled on the Index v5 board, 1M context**) and https://benchlm.ai/models/claude-opus-4-6 (2026-11: **"#47 out of 216 … 61.82/100 … evidence status Supported"**) · supersession — https://www.anthropic.com/news/claude-opus-4-7 (**"notable gains over Opus 4.6 in advanced software engineering and the most difficult tasks"**, 2026-04-16) and https://github.com/Sagargupta16/claude-cost-optimizer (models-overview scrape: **Opus 4.8 now in the "Legacy accordion"** — the whole 4.x Opus line is previous-generation).

**What moved and how it was resolved:**

1. **Pricing corrected (Cost 40 → 45).** Pass 1 anchored from an unpublished rate; Anthropic's launch post verbatim gives **$5/$25 per 1M** ("pricing remains the same"), i.e. the modern Opus band — not the historic $15/$75. Re-anchored to 45, exactly as the Opus 4.8 sibling pass did for the same rate. Cost is excluded from Overall; the Overall is unaffected.
2. **Lifecycle: legacy, served until at least 2027-02.** Retirement "no sooner than February 5, 2027" (Anthropic via The Rundown; Foundry schedules 2027-02-02) and no deprecation notice — still fully served. Superseded three times over (4.7 Apr, 4.8 May, Opus 5/5.5 Jul+), with even 4.8 now in Anthropic's Legacy accordion; keep ranked with previous-generation framing, which pass 1 already carries.
3. **The exact-ID non-reasoning variant is still independently profiled.** AA's v5 provider page lists "Claude Opus 4.6 (non-reasoning, high)" — the variant this report scores — so the measured profile (Index 26.4, AA-HLE 19.1, CritPt 2.8, Omniscience 2.4 / 80.1% hallucination) remains on live exact-ID evidence; BenchLM's current composite (#47/216, 61.82, "Supported") is in family of pass 1's #40/645. The **"53 / clear third" figure floating in launch-era coverage belongs to the Adaptive/Max variant and older scales — recorded side by side, not applied to the base variant, no band moved. v5's rescale is methodology drift, batch-wide.
4. **No corrected absolute appeared for any scored row.** BrowseComp 83.7%, τ² 84.8%, SWE-bench Verified 80.8%, AIME 99.8% and the severe hallucination flag stand uncontradicted; the 1M-beta-vs-200K-default context conflict is untouched (AA lists the id at 1M), so Context 92 holds as scored.

**Scores changed by this pass:** Cost efficiency **40 → 45** (verified $5/$25 replacing the unpublished-rate assumption). All five quality dims unchanged: Tool 80, Reasoning 70, Context 92, Multimodal 66, Coding 74. Overall = half-up mean(80, 70, 92, 66, 74) = 382/5 = 76.4 → **76, unchanged** (Cost is excluded by methodology).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Claude Opus 4.6 system card plus Artificial Analysis, Vals AI, Meta Muse Spark, Arcee, Cognition, Epoch AI, CyberGym, SWE-Rebench and React Native Evals); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Anthropic launch posts, SiliconData, The Rundown, Microsoft Foundry retirement schedule, Artificial Analysis v5 provider page, BenchLM, cost-optimizer scrape); pricing verified $5/$25 (**Cost 40→45**), legacy-with-2027-retirement status recorded, exact non-reasoning variant confirmed still profiled, Adaptive-variant 53 figure declined for the base variant, AA v5 treated as scale drift — **no quality dimension changed and Overall remains 76**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
