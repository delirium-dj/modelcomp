# Ling 3.0 Flash — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionai/ling-3.0-flash`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash — the **flash tier of the Ling 3.0 family**, sibling to Ling 3.0 Flash VL, Ling 3.0 Flash Sante, Ling 3.0 Flash FP8, Ling 3.0 Flash Fin and Ling 3.0 Tiny, and successor to Ling 2.6 Flash. BenchLM scores it **45.88/100, #121 of 1,016** with **40 of 753 benchmarks** — **the second-best-covered model in this batch after GLM-5**, and one of the best-covered in the whole research series.
- **Short description:** A **broadly and independently measured open-weight model with a genuinely mixed profile**: strong specific benchmarks (**GPQA Diamond 85.0/85.5/84.8 across three independent harnesses, AIME 2026 93.2%, LiveCodeBench v5 82.8/84.0, BFCL v4 73.0%, MCP Atlas 65.5%**) against **collapsed composites (AA Agentic Index 21.0%, AA Coding Index 50.6%, AA Intelligence Index 20.1%, Hermes Index 21.6%)** and the family's reliability gap (**CritPt 1.7%, AA-Omniscience accuracy 18.2% with a 44.1% hallucination rate**).
- **Provider / access:** **Open weight, MIT** on Hugging Face / ModelScope (`inclusionai/ling-3.0-flash`), self-hostable at $0; served on the Ant Ling platform and OpenRouter.
- **Release / knowledge:** release date not restated; Ling 3.0 Flash is inclusionAI's current flash line. **Knowledge cutoff not disclosed.**
- **IDs:** `inclusionai/ling-3.0-flash` (Hugging Face); `ling-3-0-flash` (BenchLM canonical); repo id `ling-3.0-flash`.
- **Context window:** **262,144 tokens** — a quarter of the current 1M standard.
- **Modalities:** **text in; text out.** The vision sibling is the separate **Ling 3.0 Flash VL**, which is unranked on BenchLM.
- **Pricing (as of 2026-11-06):** **$0.075/M input, $0.22/M output** first-party (some routes list $0.021/$0.063); **MIT self-host $0.**
- **Architecture:** **open weight, MIT.** BenchLM classifies it **Reasoning**.

### Raw benchmarks found

**A provenance finding is recorded and is this model's strongest evidential property: the 40 rows are attributed across four independent sources — inclusionAI's own model card, Artificial Analysis, Vals AI and Nous Research — which means several benchmarks exist in two or three competing runs that can be compared side by side.** This is the only model in this batch where vendor and independent runs of the *same* benchmark can be checked against each other at volume.

Agentic / tool use — **broad coverage, genuinely mixed, with vendor-vs-independent conflicts**:

- **Terminal-Bench 2.1: 57.0%** [vendor card] **vs 50.2%** [Vals AI] — **a 6.8-point vendor-vs-independent conflict, recorded side by side rather than averaged**
- **BFCL v4: 73.0%**; **MCP Atlas: 65.5%**; **WideResearch: 73.6%**; **BrowseComp: 72.2%**; **DRACO: 70.4%** [vendor card] — a solid upper-mid agentic spread, and the model's best agentic rows
- **skillsBench: 44.8%**; **Hermes Bench: 53.8%** [vendor card / Nous] — mid-band
- **AA Tau3 Banking: 28.0%** [vendor card]; **GDPval-AA: 1,107 Elo** [vendor card] **/ 22.4% normalized** [AA]; **AA Agentic Index: 21.0%** [AA]; **Hermes Index: 21.6%** [Nous] — all low
- **OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, τ²-bench, τ³-bench: no verified public score found** — so **two of three frontier references are unmeasured and no composite beyond AA Agentic Index**

Coding — **the second-strongest dimension, with the same vendor-vs-independent pattern**:

- **LiveCodeBench v5: 82.8%** [vendor card] **vs 84.0%** [Vals AI] — **a 1.2-point difference, i.e. genuine agreement across harnesses**
- **SWE-bench (Vals): 65.2%** [Vals AI] — the only independently-run SWE figure
- **SWE-bench Pro: 56.6%** [vendor card] — marginally above the 55%+ reference
- **SWE Multilingual: 72.4%** [vendor card]; **Terminal-Bench 2.1: 57.0%** [vendor card] / 50.2% [Vals]
- **SciCode: 41.2%** [vendor card] **/ AA-SciCode: 42.0%** [AA] — 0.8-point agreement; both under the 55% reference
- **AA Coding Index: 50.6%** [AA] — 19.4 under the 70% reference
- **SWE-bench Verified, DeepSWE, Vibe Code Bench, FrontierCode: no verified public score found** — so **two of three coding frontier references are unmeasured**

Reasoning / knowledge — **strong on the specific, weak on the composite and on reliability**:

- **GPQA Diamond: 85.0%** [vendor card] **/ 85.5%** [AA] **/ 84.8%** [Vals AI] — **three independent runs agreeing within 0.7 points, the strongest cross-harness agreement in this research series**; 4.5–5 points under the 90% frontier reference
- **HLE: 22.7%** [vendor card] **/ AA-HLE: 23.7%** [AA] — **1.0-point agreement**, and 16.3–17.3 points under the 40%+ reference
- **AIME 2026: 93.2%; HMMT Feb 2026: 87.0%; IMO-AnswerBench: 83.7%** [vendor card] — near-saturated competition mathematics
- **MMLU-Pro (Vals): 82.0%** [Vals AI]; **IFBench: 74.5%** [vendor card]
- **AA-LCR: 73.0%**; **CritPt: 1.7%** [AA] — near-floor
- **AA Intelligence Index: 20.1%** [AA] — low composite depth
- **AA-Omniscience Index: −17.9%; Accuracy: 18.2%; Hallucination Rate: 44.1%** [AA] — **a negative omniscience index, meaning the model is worse than uninformed on this axis**
- **ARC-AGI, MRCR, MMLU-Pro beyond the Vals run, SuperGPQA, MATH, FrontierMath: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 65/100.** Mid-band, and genuinely mixed across 14 agentic rows. **BFCL v4 73.0%, WideResearch 73.6%, BrowseComp 72.2%, DRACO 70.4% and MCP Atlas 65.5%** form a solid upper-mid spread, and **Terminal-Bench 2.1 at 57.0% (vendor) / 50.2% (Vals)** is respectable. Against that, **AA Tau3 Banking 28.0%, GDPval-AA 22.4% normalized, AA Agentic Index 21.0% and Hermes Index 21.6%** are all low — so the model is a competent tool *caller* and a mid-tier autonomous *agent*. Held at 65 rather than higher by those four low rows, by **the 6.8-point Terminal-Bench vendor-vs-independent conflict**, and by the **absence of OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval and JobBench** figures.
- **Reasoning: 68/100.** Mid-band, and the strongest cross-verified dimension. **GPQA Diamond at 85.0/85.5/84.8 across three independent harnesses** is a genuinely well-corroborated result 4.5–5 points under the frontier reference, and **AIME 2026 93.2%, HMMT Feb 2026 87.0%, IMO-AnswerBench 83.7% and MMLU-Pro 82.0%** corroborate. Held below the frontier tier by **HLE 22.7%/23.7% (16.3–17.3 under the 40%+ reference)**, **CritPt 1.7% near-floor**, **AA Intelligence Index 20.1%**, and **AA-Omniscience accuracy 18.2% with a 44.1% hallucination rate and a negative −17.9% omniscience index** — the model is measurably worse than uninformed on that axis, which is the single most damaging row in the file.
- **Context window: 85/100.** **262,144 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 on the strength of **AA-LCR 73.0%** — real, if not top-tier, long-context retrieval evidence, which is more than most models in this batch can claim. Held at the ceiling rather than the ≥1M tier because **no MRCR or GraphWalks figure exists** and 262K is a quarter of the current standard.
- **Multimodal: 15/100.** **Text in; text out** per the repo's curated meta — squarely in the methodology's text-only 10–20 band. **The vision capability lives in the separate Ling 3.0 Flash VL sibling (unranked on BenchLM), and a sibling non-import is recorded: that sibling's existence is named as the comparison point and explicitly not merged into this SKU's multimodal score.**
- **Coding: 62/100.** Below the mid band's top, and the second-strongest dimension. **LiveCodeBench v5 at 82.8% (vendor) / 84.0% (Vals) is a strong competitive-programming result corroborated across harnesses**, and **SWE Multilingual 72.4% and SWE-bench Pro 56.6%** are respectable. Held below the upper band by **SciCode 41.2/42.0% (13 under the 55% reference)**, **AA Coding Index 50.6% (19.4 under the 70% reference)**, **Terminal-Bench 2.1 57.0/50.2%**, and the **absence of SWE-bench Verified, DeepSWE, Vibe Code Bench and FrontierCode** — so two of three coding references are unmeasured and the only independently-run SWE row is the Vals 65.2%.
- **Cost efficiency: 92/100.** **$0.075/$0.22 per 1M** (with routes as low as $0.021/$0.063) and **MIT-licensed weights for true $0 self-hosting** — the methodology's near-$0 anchor with a genuinely cheap metered route. Held below 100 because $0.075/$0.22 is a real metered price and only the self-host route is literally free.
- **Overall Score: 59/100.** (65 + 68 + 85 + 15 + 62) / 5 = 59 → **59**. **A three-way disagreement is recorded rather than reconciled: BenchLM scores this model 45.88/100 (#121/1,016), the repo queue carries 65.2, and this report reads 59** — three different instruments with three different weightings, none of them an error, and the gap stated plainly because it is the most useful fact about how much the choice of instrument matters. Recommendation: **the best-evidenced open-weight flash tier in this batch, and a model whose specific benchmarks run well ahead of its composites.** GPQA Diamond corroborated three ways at ~85%, AIME 2026 93.2%, LiveCodeBench ~83%, BFCL v4 73.0% and MCP Atlas 65.5% at $0.075/$0.22 with MIT weights is a real package. Three cautions: **the composites collapse (AA Agentic Index 21.0%, AA Coding Index 50.6%, AA Intelligence Index 20.1%, Hermes Index 21.6%)**, so this is a model that performs well on named benchmarks and inconsistently on integrated ones; **AA-Omniscience accuracy 18.2% with a 44.1% hallucination rate and a negative omniscience index** make it unsuitable for factual work; and **the Terminal-Bench 6.8-point vendor-vs-independent conflict** is a reminder that its headline agentic figures are partly vendor-run. Prefer the successor **Ling 3.1 Flash (65.57)** for the current generation.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using BenchLM's 40-of-753-benchmark catalog as the direct source — **the second-best-covered model in this batch and one of the best-covered in the whole research series**, which is what makes this report's central method possible. **A provenance finding is recorded and is the model's strongest evidential property: the rows are attributed across four independent sources (inclusionAI's model card, Artificial Analysis, Vals AI, Nous Research), so several benchmarks exist in two or three competing runs that can be compared side by side** — and three of the report's central claims rest on exactly that. **The vendor-vs-independent conflicts are recorded side by side rather than averaged**: Terminal-Bench 2.1 at 57.0% (vendor) against 50.2% (Vals), a 6.8-point gap that is the reason the tool-use score sits at 65; and **the agreements are recorded as corroboration**: GPQA Diamond at 85.0/85.5/84.8 across three harnesses within 0.7 points (the strongest cross-harness agreement in this research series), HLE at 22.7/23.7 within 1.0 point, SciCode at 41.2/42.0 within 0.8 points, and LiveCodeBench at 82.8/84.0 within 1.2 points. **A three-way instrument disagreement is recorded rather than reconciled: BenchLM's 45.88/100 (#121/1,016), the repo queue's 65.2 and this report's 59**, with all three named as valid outputs of different weighting schemes and the gap stated in the score line rather than buried. **The negative AA-Omniscience index (−17.9%) is attributed as the single most damaging row in the file** — worse than uninformed — alongside the 44.1% hallucination rate, and is the reason the recommendation rules the model out for factual work. **A sibling non-import is recorded: the vision capability lives in the separate Ling 3.0 Flash VL sibling (unranked on BenchLM), named as the comparison point and explicitly not merged into this SKU's multimodal score.** Missing benchmarks (OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, τ²-bench, τ³-bench, ARC-AGI, MRCR, SuperGPQA, MATH, FrontierMath, SWE-bench Verified, DeepSWE, Vibe Code Bench, FrontierCode, and every true visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Ling 3.0 Flash (40 of 753 benchmarks, 45.88/100, #121/1016)](https://benchlm.ai/models/ling-3-0-flash)
  - [Hugging Face — inclusionAI/Ling-3.0-flash model card (MIT weights; source for all vendor-attributed rows)](https://huggingface.co/inclusionAI/Ling-3.0-flash)
  - [Artificial Analysis — Ling 3.0 Flash (AA-GPQA-Diamond, AA-HLE, AA-LCR, AA Coding Index, AA-Omniscience)](https://artificialanalysis.ai/models/ling-3-0-flash)
  - [Vals AI — ant/ling-3.0-flash-2607 (independent Terminal-Bench 2.1, LiveCodeBench, SWE-bench, GPQA-D, MMLU-Pro runs)](https://www.vals.ai/models/ant_ling-3.0-flash-2607)
  - [Nous Research — Hermes Index leaderboard](https://portal.nousresearch.com/bench)
  - [Repo curated meta — `model/ling-3.0-flash/meta.json` ($0.075/$0.22, 262K, text-only)](/model/ling-3.0-flash/meta.json)
  - See also: [`model/ling-3.1-flash/`](ling-3.1-flash.md) (65.57) — the successor this report recommends preferring; [`model/ling-3.0-tiny/`](ling-3.0-tiny.md) — the tiny sibling refreshed in this same batch; [`model/ling-2.6-flash/`](ling-2.6-flash.md) (33.42) — the predecessor
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
