# ByteDance Seed 2.0 Pro — findings by Step 5 Preview

- Source: ByteDance (`deepinfra/ByteDance/Seed-2.0-pro`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance **Seed 2.0 Pro** (Doubao Seed 2.0 Pro). ByteDance's **flagship general-purpose agent model focused on long-chain reasoning and robustness in complex workflows**, released **2026-02-14 via Volcano Engine** — so it is now roughly nine months old and **superseded by Seed 2.1**, which the repo's meta.json records explicitly. BenchLM has **no page for this model in any spelling**, so its BenchLM-style overall is unavailable; the repo's queue Overall of 85.4 is a roster artefact, not a measured one.
- **Short description:** A February-2026 flagship whose vendor-published numbers are genuinely strong — **AIME 2025 98.3, HMMT 97.3, Codeforces 3,020, GPQA Diamond 88.9, MMLU-Pro 87.0, SWE-bench Verified 76.5% and LiveCodeBench v6 87.8%** — priced at **$0.50/$0.10/$3.00 per 1M with a 256K window and full text/image/video input**. Its defining liability is not capability but **trust: every benchmark above is vendor-reported, its knowledge cutoff is January 2024, and it has an announced successor.**
- **Provider / access:** DeepInfra (`deepinfra/ByteDance/Seed-2.0-pro`, the only provider llm-stats tracks), Volcano Engine / BytePlus ModelArk, APIYI and OpenAI-compatible endpoints. **Proprietary licence, closed weights — no self-hosting.** Repo meta.json records `noFreeId`.
- **Release / knowledge:** **released 2026-02-14** (llm-stats, tokenmix and llmreference all agree on the date). **Knowledge cutoff: January 2024** — llm-stats states this explicitly, and it is the single most important operational fact in this report: a February 2026 release with a January 2024 cutoff means **roughly two years of missing knowledge**, which is a wider gap than almost any other model in this research series.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro` (DeepInfra, repo); `ByteDance/Seed-2.0-Pro`; `bytedance/seed-2-0-pro` (opper, cloudprice); Doubao Seed 2.0 Pro (Volcano Engine).
- **Context window:** **256K tokens in / 131.1K out** via DeepInfra (llm-stats) — though the repo's meta.json records **256K / 65K out**, a **2x discrepancy on max output** that is recorded rather than reconciled.
- **Modalities:** **text, image and video in; text out** — confirmed by llm-stats and independently corroborated.
- **Pricing (as of 2026-11-05):** **DeepInfra $0.50 in / $0.10 cached / $3.00 out per 1M** (llm-stats, cloudprice). **Independent reviews cite $0.47 in / $2.37 out per 1M** (tokenmix, llmreference) — a ~6% spread that is almost certainly a promotional or regional rate and is recorded side by side.
- **Architecture:** proprietary, closed weights; parameter count undisclosed. A full model card exists at a ByteDance static-hosted PDF.

### Raw benchmarks found

**A negative finding dominates: no BenchLM, Vals, Artificial Analysis or Epoch AI page exists for this model in any spelling.** Every benchmark below is **vendor-reported and relayed by independent secondary sources** — five or more of them, which is good corroboration of the *figures* but none of it is *measurement*. The repo's meta.json independently records the same SWE-bench Verified 76.5% headline, which is one more corroboration of the same vendor claim rather than an independent test.

Mathematics — the strongest cluster:

- **AIME 2025: 98.3** (vendor, corroborated by opper, tokenmix, llmreference and docs.apiyi — four independent relays of the same vendor figure)
- **HMMT: 97.3** (vendor, opper)
- **Codeforces: 3,020 rating** (vendor, tokenmix)

Reasoning / knowledge:

- **GPQA Diamond: 88.9** (vendor, tokenmix, llmreference) — fails the 90%+ reference by 1.1 points
- **MMLU-Pro: 87.0** (vendor, llmreference) — mid-tier
- **CritPt, HLE, AA-LCR, MRCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, FrontierMath: no verified public score found** — so **reliability is entirely unmeasured** and four of five reasoning references are unmeasurable

Coding:

- **SWE-bench Verified: 76.5%** (vendor, corroborated by the repo's meta.json and by opper, tokenmix, llmreference, airank and docs.apiyi) — under the 85%+ terminal reference by 8.5 points
- **LiveCodeBench v6: 87.8** (vendor, opper, llmreference)
- **DeepSWE, SWE-bench Pro, AA-SciCode, AA Coding Index, NL2Repo, Terminal-Bench, Vibe Code Bench, FrontierCode: no verified public score found** — so the 74%, 70% and 55% coding references are all unmeasured

Agentic / tool use:

- **No agentic benchmark of any kind is published** — no Terminal-Bench, τ²-bench, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA or AA Agentic Index. **The model is marketed as an agent model and has zero measured agentic capability.**

Multimodal:

- Marketed as comprehensive multimodal understanding (text, image, video) with enhanced instruction-following — **no MMMU-Pro, CharXiv, OmniDocBench, RealWorldQA, ExtractBench, BabyVision, ZeroBench or Design Arena figure exists.**

### Normalized scores (1–100)

> **Methodology note.** Six benchmarks, all vendor-reported, no independent measurement, and no agentic benchmark at all for a model marketed as an agent model. Every quality dimension below is a placeholder-for-unknown anchored on those rows and the verified spec facts. **The conflict below on SWE-bench Verified (76.5% vs 21.5%) is the single most important unresolved item in this report.**

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** ByteDance markets Seed 2.0 Pro as a flagship *agent* model focused on real-world workflows, and there is **not one agentic benchmark of any kind** — no Terminal-Bench, τ²-bench, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA or AA Agentic Index. Scored at 50 rather than below because the agentic claim is *corroborated indirectly* by two genuine strengths that agents depend on — instruction-following (explicitly listed as enhanced in the vendor description and in llm-stats) and long-chain reasoning — but it is not scored above 50 because **an unmeasured capability claim must not be scored as though it were demonstrated**.
- **Reasoning: 74/100.** Mid-band and the strongest dimension. **AIME 2025 98.3 and HMMT 97.3 are strong competition-maths results, Codeforces 3,020 is a high competitive-programming rating, and MMLU-Pro 87.0 is respectable.** Capped by **GPQA Diamond 88.9% failing the 90%+ reference by 1.1 points**, and heavily by the **total absence of HLE, CritPt, AA-LCR, MRCR, the AA Intelligence Index, ARC-AGI, FrontierMath and every reliability measurement**. Scored at 74 rather than higher because the mathematics figures are excellent but saturating benchmarks, and because **no reliability figure of any kind exists** — a serious gap for a model whose stated focus is robustness in complex workflows.
- **Context window: 78/100.** **256K tokens in** places it in the methodology's 200K–500K band (65–84), scored at 78 because a 131.1K max output is a genuinely generous output allowance — the largest in this batch — and because long-chain reasoning at 256K is a real asset. Held at 78 rather than the band ceiling because **no AA-LCR, MRCR or GraphWalks figure exists at that depth**, so the window's usable depth is unverified, and because the **max-output conflict** (131.1K per llm-stats vs 65K per the repo's meta.json) means even the output allowance is unsettled.
- **Multimodal: 78/100.** **Text, image and video in; text out** — verified by llm-stats and independently corroborated — placing it in the methodology's 75–90 "+video/PDF in" tier. Scored at the tier's lower bound because the coverage claim is **entirely a spec-sheet claim with zero measured support**: no MMMU-Pro, CharXiv, OmniDocBench, RealWorldQA, ExtractBench, BabyVision, ZeroBench or Design Arena figure exists for this model.
- **Coding: 66/100.** Mid-band. **SWE-bench Verified 76.5% is a solid mid-frontier repair figure and LiveCodeBench v6 87.8 is strong**, both corroborated by the repo's meta.json and four independent relays. Capped by SWE-bench Verified sitting 8.5 points under the 85%+ reference, and by the **total absence of DeepSWE, SWE-bench Pro, AA-SciCode, the AA Coding Index, NL2Repo, Terminal-Bench, Vibe Code Bench and FrontierCode** — so the 74%, 70% and 55% references cannot be checked. **A recorded conflict lowers confidence further: one independent aggregator reports SWE-bench Verified at 21.5% against the 76.5% every other source carries — a 55-point gap that is almost certainly an aggregator error (21.5% is implausible for a model with an 87.8 LiveCodeBench), but it is flagged rather than silently discarded.**
- **Cost efficiency: 74/100.** **$0.50/$0.10/$3.00 per 1M via DeepInfra** sits between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors, with an 80% cache-read discount. Held at 74 because **independent reviews cite $0.47/$2.37 — a ~6% spread that suggests the rate card is not stable** — there is no free tier (`noFreeId`), the model is **closed-source with no self-hosting escape**, and it is **strictly dominated on price-per-capability by its own successor Seed 2.1** and by cheaper frontier-adjacent open models in this same research series.
- **Overall Score: 69.2/100.** (50 + 74 + 78 + 78 + 66) / 5 = 69.2 → **69**. Recommendation: **a February-2026 flagship that time has passed and whose agentic claim was never independently tested.** Its genuine assets are strong mathematics (AIME 2025 98.3, HMMT 97.3, Codeforces 3,020), solid mid-frontier coding (SWE-bench Verified 76.5%, LiveCodeBench v6 87.8) and a 256K window with a large 131.1K output allowance, at $0.50/$3.00 with full video input. Three cautions, and they are decisive ones: **it has an announced successor (Seed 2.1) and every capability figure here is at least nine months old for this field**; **its knowledge cutoff is January 2024 — roughly two years behind its own release date**, which is a wider gap than almost any model in this research series and makes it unsuitable for any current-events or recent-knowledge work without retrieval; and **not one of its benchmarks is independently measured and it has zero measured agentic capability despite being marketed as an agent model**, so the 69 is a floor on evidence rather than a capability ceiling. Migrate to Seed 2.1 unless pinned for compatibility.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first and worked around it honestly**: no BenchLM, Vals, Artificial Analysis or Epoch AI page exists for this model in any spelling checked, so **not one benchmark for it is independently measured**. Identity, release date, context window, pricing, licence, modalities and the January 2024 knowledge cutoff were recovered from **llm-stats**, and every benchmark figure was corroborated across **five or more independent relays** (opper.ai, tokenmix.ai, llmreference.com, airank.dev, docs.apiyi.com, cloudprice.net, rankllms.com) plus the repo's curated `meta.json`. **All benchmark rows are therefore vendor-reported as relayed by independent secondary sources and are labelled as such throughout rather than presented as measurements — the corroboration is of the figures, not of any independent test.** Four conflicts are recorded rather than resolved: **the SWE-bench Verified gap of 76.5% (five relays + the repo meta) against 21.5% (one aggregator) — a 55-point discrepancy recorded as a probable aggregator error rather than discarded**; the **max-output discrepancy** (131.1K per llm-stats vs 65K per the repo's meta.json); the **pricing spread** ($0.50/$0.10/$3.00 via DeepInfra against $0.47/$2.37 cited by two independent reviews); and the **absence of any BenchLM overall**, meaning the repo queue's 85.4 is a roster artefact rather than a measured figure. The January 2024 knowledge cutoff — a genuinely important operational fact found only on llm-stats — is surfaced in the model card rather than buried, and the complete absence of agentic benchmarks for a model marketed as an agent model is stated as the report's central evidential limitation. Missing benchmarks (all of Terminal-Bench, τ²-bench, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index, HLE, CritPt, AA-LCR, MRCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, FrontierMath, DeepSWE, SWE-bench Pro, AA-SciCode, AA Coding Index, NL2Repo, Vibe Code Bench, FrontierCode, MMMU-Pro, CharXiv, OmniDocBench, RealWorldQA, ExtractBench, BabyVision, ZeroBench, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ByteDance — Seed 2.0 model card PDF (primary source, vendor-reported rows)](https://lf3-static.bytednsdoc.com/obj/eden-cn/lapzild-tss/ljhwZthlaukjlkulzlp/seed2/0214/Seed2.0%20Model%20Card.pdf)
  - [ByteDance — Seed 2.0 official page](https://seed.bytedance.com/en/seed2)
  - [LLM Stats — Seed 2.0 Pro release date, licence, knowledge cutoff, context, pricing, latency](https://llm-stats.com/models/seed-2.0-pro)
  - [Opper.ai — ByteDance Seed 2.0 Pro benchmarks (AIME 98.3, HMMT 97.3, SWE-bench 76.5, LiveCodeBench 87.8)](https://opper.ai/bytedance/seed-2-0-pro)
  - [TokenMix — Doubao Seed 2.0 Pro review (Codeforces 3020, GPQA Diamond 88.9, $0.47/$2.37)](https://tokenmix.ai/blog/doubao-seed-2-0-pro-review-2026)
  - [LLM Reference — Doubao Seed 2.0 Pro (GPQA Diamond 88.9, MMLU-Pro 87.0, LiveCodeBench v6 87.8, $0.47/$2.37)](https://www.llmreference.com/model/bytedance-doubao-seed-2-0-pro)
  - [CloudPrice — Seed 2 Pro pricing and specs ($0.500/1M input, 256K)](https://cloudprice.net/models/bytedance-seed-2-pro)
  - [APIYi — Seed 2.0 Pro launch (AIME 2025 98.3, Codeforces 3020, SWE-bench Verified 76.5%)](https://docs.apiyi.com/en/news/seed-2-0-pro-launch)
  - [Airank — Seed 2.0 Pro benchmarks](https://airank.dev/models/seed-2.0-pro)
  - [RankLLMs — Seed 2.0 Pro benchmarks (records the conflicting 21.5% SWE-bench Verified figure)](https://rankllms.com/models/seed-2-0-pro/)
  - [BytePlus ModelArk — hosting and pricing](https://www.byteplus.com/en/product/modelark)
  - [Repo curated meta — `model/seed-2.0-pro/meta.json` (256K/65K out, modalities, noFreeId, Seed 2.1 successor)](/model/seed-2.0-pro/meta.json)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
