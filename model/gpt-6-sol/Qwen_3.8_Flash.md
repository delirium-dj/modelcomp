# GPT 6 Sol — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-6 Sol (`opencode/gpt-6-sol`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — pricing verified at $2/$10 (Cost 65 provisional→verified) + 7-day replacement / 2027-04-01 shutdown window documented, bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Sol
- **Short description:** OpenAI's GPT-6 "Sol" reasoning tier (with Luna) — a strong enterprise-agent model (OSWorld 2.0 60.5%, AA AutomationBench 61.6%, GDPval-AA 1487) with high CritPt and HLE, but thin published coding/multimodal coverage and a weak multi-document long-context read (MLCR-AA 16.1%).
- **Provider / access:** OpenAI API / ChatGPT (`gpt-6-sol`), also on OpenCode Zen (`opencode/gpt-6-sol`). Reasoning + tool calls.
- **Release / knowledge:** 2026 (OpenAI "Introducing GPT-6 Sol and Luna"); knowledge cutoff not disclosed.
- **IDs:** `opencode/gpt-6-sol` / OpenAI `gpt-6-sol`.
- **Context window:** BenchLM and the OpenAI model doc list **1.05M**; curated `meta.json` says "128K total" — conflict, resolved in favour of the 1.05M figure.
- **Modalities:** image-in evidence (AA-MMMU-Pro) despite curated `meta.json` "Text in/out"; no audio/video rows. Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (OpenAI GPT-6 class; exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (30 of 618 rows; 79.16/100, #7 of 645), citing the OpenAI GPT-6 Sol/Luna launch post and Astra system card, Artificial Analysis (Briefcase, AutomationBench, ITBench, Terminal-Bench 4.0, MLCR), Collinear CWE-bench and Google Gemini 4 Argon charts (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- OSWorld 2.0 **60.5%**; Agents' Last Exam 56.4%; AA AutomationBench **61.6%**; AA ITBench 49.4%; CWE-bench v1 52.0%
- GDPval-AA **1487** (normalized 49.3%); AA Briefcase 1483; AA Terminal-Bench 4.0 43.9%; GDP.pdf 24.8%; ExploitGym 22.1%; AutomationBench 33.2%

Reasoning / knowledge:

- AA-HLE **47.9%** (clears the 40% bar); CritPt **30.9%** (strong); AA-LCR 83.7; Intelligence Index 47.5
- **MLCR-AA 16.1%** — weak multi-document long-context reasoning
- Omniscience Index 27.1 / Accuracy 54.5% / Hallucination 60.1%; HealthBench Professional 60.8 / Hard 30.1

Coding:

- DeepSWE **68.8%** (just under the 74 ref); AA-SciCode **57.6%** (clears the 55 ref); CWE-bench v1 52.0% (no SWE-bench Verified / LiveCodeBench / Coding-Index rows published)

Multimodal / long context:

- AA-MMMU-Pro **83.3%** (only image-grounded row published)
- 1.05M window (AA-LCR 83.7 supportive but **MLCR-AA 16.1** fails at length; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 86/100.** OSWorld 2.0 60.5%, AA AutomationBench 61.6%, Agents' Last Exam 56.4% and ITBench 49.4% are a genuine frontier enterprise-agent spread, but GDPval-AA 1487 sits under the 1750 ref, no Terminal-Bench 2.1 88% row is published and ExploitGym 22.1% / GDP.pdf 24.8% cap it below the 90 band.
- **Reasoning: 82/100.** AA-HLE 47.9% clearing the bar with CritPt 30.9% and AA-LCR 83.7 is strong, but Intelligence Index 47.5 is mid, **MLCR-AA 16.1%** and a 60.1% hallucination rate hold it under the 90 band.
- **Context window: 92/100.** A 1.05M-token window meets the ≥1M tier (curated meta conflicts at 128K), but the explicit MLCR-AA 16.1% long-context failure and no ≥98% MRCR proof pull it just below the floor.
- **Multimodal: 66/100.** The only published grounded row is image (AA-MMMU-Pro 83.3, strong), so a top-of-image band (60–70); no audio/video/PDF rows and curated meta says text-only, so no higher-tier credit.
- **Coding: 78/100.** AA-SciCode 57.6% clears the ref and DeepSWE 68.8% is close, but both sit under the strongest bands and the coverage is thin (no SWE-bench Verified / LiveCodeBench / Coding-Index rows), so a conservative mid-high placement.
- **Cost efficiency: 65/100.** OpenAI GPT-6-class "standard pricing" is mid-tier; exact per-1M rate not published in curated meta, so provisional. Cost is excluded from Overall.
- **Overall Score: 81/100.** Mean of Tool 86, Reasoning 82, Context 92, Multimodal 66, Coding 78 = 80.8 → 81. Best fit: enterprise workflow automation and multi-tool agent tasks (its clearest strength) at a 1M window; for heavy vision/audio, keep a multimodal specialist in the loop, and don't rely on it for very-long multi-document retrieval (MLCR 16.1%) — GPT-6 Astra is the stronger sibling where breadth matters.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://benchlm.ai/blog/posts/gpt-6-models-compared (**"GPT-6.1 Sol and GPT-6 Sol cost $2/$10"** per 1M input/output) and https://www.getapipulse.com/model-deprecations.html (**"GPT-6 Sol. Input: $2.00 / 1M tokens … Output: $10.00 / 1M tokens … Still callable until scheduled shutdown 2027-04-01"**) and https://kie.ai/blog/what-is-gpt-6-1-sol (Sol's cached input **$0.20**, 90% discount, halved to $0.10 on the successor) · launch/lineage — https://artificialanalysis.ai/articles/gpt-6-sol-and-luna-push-the-cost-efficiency-frontier (**"GPT-6 Sol (max) gains 2 points in the AA Coding Agent Index at half the Cost per Task of its predecessor"**, article dated **2026-09-22**) and https://openai.com/index/introducing-gpt-6-1-sol/ (**"Cached input costs just $0.10 per million tokens—95% less"**; "substantial improvements over GPT-6 Sol in our alignment [evals]") · replacement speed — https://artificialanalysis.ai/articles/gpt-6-1-sol-replaces-gpt-6-sol-after-just-7-days-with-near-astra-intelligence (**"GPT-6.1 Sol replaces GPT-6 Sol after just 7 days"**, 2026-09-29) · still profiled — https://artificialanalysis.ai/models/comparisons/gpt-6-sol-vs-gpt-5-6-sol (exact id live on AA); https://developers.openai.com/api/docs/deprecations (deprecated models **"removed from the API on April 1, 2027, with six months' notice"**).

**What moved and how it was resolved:**

1. **Cost 65 provisional→verified — no numeric move.** Pass 1 wrote 65 on a "standard GPT-6-class pricing" guess with the exact rate unpublished. Three sources now fix it at **$2/$10 per 1M** (cached $0.20 at a 90% discount) — one bracket below the $3/$15 ≈ 60 anchor, consistent with the 65 already recorded. Provisional flag lifted.
2. **Lifecycle pinned: a 7-day flagship shelf, then a 2027-04-01 shutdown window.** GPT-6 Sol launched 2026-09-22 and was replaced by GPT-6.1 Sol **after just 7 days** (AA); APIpulse places the exact id as *deprecated but still callable* until the **April 1, 2027** removal OpenAI's deprecations page announces with six months' notice. Registry-critical: this id is a legacy listing with a hard date — mirror of the gemini-3-pro watch-flag, but five months out rather than imminent; kept ranked.
3. **Every scored row stands.** AA's launch analysis restates the pattern this report measured — +2 Coding-Index points at **half the Cost per Task of GPT-5.6 Sol** (consistent with the deep-but-narrow profile: Tool 86/Coding 78 on thin coverage). BenchLM's 30-row coverage note and the MLCR-AA 16.1% long-context weakness are uncontradicted by any second-pass source; conservative placements held per evidence limits.
4. **AA v5 (2026-10-27) — batch-wide scale drift only.** Successor readings (6.1 Sol at 52 on v4.1; "1 point below GPT-6 Astra" on the current build) belong to `gpt-6-1-sol`'s own report per the exact-ID rule; no change to this base id's bands. The hidekazu lifecycle note (6-month/45-day Legacy periods for post-2026-09-07 launches) frames the 2027-04-01 date; no early shutdown announced.

**Scores changed by this pass:** None. Cost 65 converted provisional→verified at the same value (outside Overall). Tool 86, Reasoning 82, Context 92, Multimodal 66, Coding 78 → Overall = half-up mean(86, 82, 92, 66, 78) = 404/5 = 80.8 → **81, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-6 Sol/Luna launch post and Astra system card, plus Artificial Analysis, Collinear and Google charts); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (BenchLM/APIpulse/Kie pricing triangulation, OpenAI 6.1-Sol post, Artificial Analysis launch + replacement articles, OpenAI deprecations page); $2/$10 verified lifting Cost 65's provisional flag, 7-day-replacement + 2027-04-01 shutdown documented as a legacy-with-date listing, all measured rows and evidence caps uncontradicted, successor numbers kept in their own id per exact-ID rule — **no dimension changed and Overall remains 81**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
