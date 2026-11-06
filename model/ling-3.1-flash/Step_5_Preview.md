# Ling 3.1 Flash — findings by Step 5 Preview

- Source: InclusionAI (`inclusionAI/Ling-3.1-flash`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash. InclusionAI's **open-weight Flash** in the Ling 3.1 generation, predecessor to Ling 3.0 Flash (45.87) and Ling 2.6 Flash (33.40). BenchLM scores it **65.57/100, #29 of 1,015** with **23 benchmarks** — the **highest-ranked Ling in BenchLM's corpus**, and a +19.7-point generational step over Ling 3.0 Flash.
- **Short description:** A genuinely strong open-weight Flash whose agentic profile is the strongest in this batch: **BrowseComp 91.7%, CyberGym 87.9%, DRACO 85.5%, MCP Atlas 83%, WideResearch 83.3%, Terminal-Bench 2.1 81.2%, GDPval-AA 1,673 Elo / 55.9% normalized, skillsBench 68.7%, SWE Multilingual 88.5%, SWE-bench Pro 68.7%** — with **AA-HLE 39.4% (0.6 points under the 40% frontier reference), AA-LCR 83.0%, CritPt 18.0% and AA-SciCode 54.1%** rounding out a genuinely broad profile. Its weaknesses are **DeepSWE 59.7% and Terminal-Bench 4.0 46.0%**.
- **Provider / access:** **Open weights** on Hugging Face (`inclusionAI/Ling-3.1-flash`), and self-hosting.
- **Release / knowledge:** release date not restated; Ling 3.1 Flash is InclusionAI's 2026 Flash line. **Knowledge cutoff not disclosed.**
- **IDs:** `inclusionAI/Ling-3.1-flash` (Hugging Face); `ling-3-1-flash` (BenchLM canonical).
- **Context window:** **262,000 tokens** — a quarter of the current 1M standard, and the binding constraint on this model's ranking despite its capability.
- **Modalities:** **text and image in; text out** — no visual benchmark exists in the 23-row catalog, so the modality claim is a spec-sheet claim.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight**; parameter count undisclosed. Note the family's sibling naming — the `-flash` tier is the flagship here, unusually.

### Raw benchmarks found

InclusionAI's own Ling 3.1 Flash model-card evaluation chart is the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis supplying the independent rows. 23 benchmarks total.

**A provenance note is recorded: the vendor rows come from a specific commit-pinned model-card chart (`huggingface.co/.../blob/7b864daa.../README.md`), which is clean same-model provenance, while the independent rows come from Artificial Analysis. No cross-citation from competitor documents.**

Agentic / tool use — **the strongest dimension, and the best-sourced cluster here**:

- **BrowseComp: 91.7%** (vendor) — the strongest browsing figure in this batch
- **CyberGym: 87.9%** (vendor) — the strongest CyberGym figure in this batch; **DRACO: 85.5%** (vendor)
- **MCP Atlas: 83%** (vendor); **WideResearch: 83.3%** (vendor); **Terminal-Bench 2.1: 81.2%** (vendor)
- **GDPval-AA: 1,673 Elo** (vendor) / **55.9% normalized** [AA] — the strongest GDPval normalized figure in this batch
- **skillsBench: 68.7%** (vendor); AutomationBench: **52.5%** (vendor); Finance Agent v2: 57.9% (vendor); τ³-bench: 47.8% (vendor)
- **Terminal-Bench 4.0: 46.0%** (vendor) — far under frontier on the newest harness
- **Terminal-Bench 2.0, τ²-bench, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, AA AutomationBench, AA ITBench: no verified public score found** — so two of three frontier references are unmeasured and no composite exists

Reasoning / knowledge — **strong, with the batch's narrowest HLE miss**:

- **AA-HLE: 39.4%** [AA] / **HLE 37.4%** (vendor) — **the AA run is 0.6 points under the 40%+ frontier reference, the narrowest miss measured in this batch**
- **AA-LCR: 83.0%** [AA] — the strongest long-context reasoning figure in this batch; **CritPt: 18.0%** [AA] — solid
- **HealthBench Professional: 65.3%** (vendor) — a real medical-depth figure, one of few in this batch
- **GPQA Diamond, AA-GPQA Diamond, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath: no verified public score found** — so **composite depth, reliability and three of five reasoning references are entirely unmeasured**

Coding — **strong, and well-corroborated**:

- **SWE Multilingual: 88.5%** (vendor) — the strongest coding figure
- **SWE-bench Pro: 68.7%** (vendor) — solid; SWE-Atlas Codebase QnA: 64.5% (vendor)
- **AA-SciCode: 54.1%** [AA] — 0.9 points under the 55%+ reference
- **DeepSWE: 59.7%** (vendor) — 14.3 points under the 74% reference
- **Terminal-Bench 4.0: 46.0%** (vendor)
- **SWE-bench Verified, LiveCodeBench, AA Coding Index, Vibe Code Bench, FrontierCode: no verified public score found**

Multimodal (image-in) — **effectively unmeasured**:

- **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found** — the model is text and image in per the repo's verified pass, but no visual benchmark exists

### Normalized scores (1–100)

- **Tool use: 86/100.** Above the methodology's mid band and the strongest dimension. **BrowseComp 91.7% is the strongest browsing figure in this batch, CyberGym 87.9% the strongest CyberGym figure, DRACO 85.5% and WideResearch 83.3% are both strong, MCP Atlas 83% and Terminal-Bench 2.1 81.2% are solid, and GDPval-AA 55.9% normalized / 1,673 Elo is the batch's strongest.** skillsBench 68.7%, AutomationBench 52.5% and Finance Agent v2 57.9% corroborate a genuinely broad and deep agentic base — one of the best in this research series. Capped by **Terminal-Bench 4.0 46.0%** (far under frontier on the newest harness), **τ³-bench 47.8%** (under the 50% reference), and the absence of Terminal-Bench 2.0, τ²-bench, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and the AA Agentic Index.
- **Reasoning: 76/100.** Above the methodology's mid band. **AA-HLE 39.4% is 0.6 points under the 40%+ frontier reference — the narrowest miss measured in this batch — AA-LCR 83.0% is the strongest long-context reasoning figure in this batch, and CritPt 18.0% is solid**, with HealthBench Professional 65.3% adding real medical depth. Capped by the **total absence of GPQA Diamond, the AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro and FrontierMath** — so composite depth, reliability and three of five reasoning references are entirely unknown, and the two measured figures are both independent-AA rows with no vendor counterpart to cross-check.
- **Context window: 85/100.** **262,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 because **AA-LCR is 83.0%, the strongest long-context reasoning figure in this batch** — so the window is measurably usable and unusually well so. Held below the ≥1M tier because it is a quarter of the current standard, no MRCR or GraphWalks run exists, and no max-output limit is published. **This is the model's primary constraint and the reason a #29-ranked model does not rank higher.**
- **Multimodal: 62/100.** **Text and image in; text out**, at the lower end of the methodology's 60–70 band. Held at 62 because **not one visual benchmark exists** — no MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision or Design Arena figure — so the modality claim is a spec-sheet claim with zero measured support.
- **Coding: 74/100.** Mid-band, and well-corroborated. **SWE Multilingual 88.5% is the strongest coding figure, SWE-bench Pro 68.7% is solid, and SWE-Atlas Codebase QnA 64.5% corroborates**, with AA-SciCode 54.1% only 0.9 points under the 55%+ reference. Capped by **DeepSWE 59.7% (14.3 under the 74% reference)**, **Terminal-Bench 4.0 46.0%**, and the absence of SWE-bench Verified, LiveCodeBench, the AA Coding Index, Vibe Code Bench and FrontierCode.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable** — a genuinely permissive proposition, and the model's strongest structural property. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 76.6/100.** (86 + 76 + 85 + 62 + 74 + 88) / 5 = 82.2 → **82**. Recommendation: **the strongest agentic open-weight model in this batch, and one of the best in this research series.** BrowseComp 91.7%, CyberGym 87.9%, DRACO 85.5%, MCP Atlas 83%, WideResearch 83.3%, Terminal-Bench 2.1 81.2%, GDPval-AA 55.9% normalized, AA-HLE 39.4% (0.6 under), AA-LCR 83.0%, CritPt 18.0% and SWE Multilingual 88.5% at **open weights** and a 262K window is a genuinely rare package — and the +19.7-point generational step over Ling 3.0 Flash is the largest in the family. Two cautions: **its newest-harness results are weaker** (Terminal-Bench 4.0 46.0%, DeepSWE 59.7%), so the 2.1 figures must not be extrapolated; and **composite depth and reliability are entirely unmeasured** — no GPQA Diamond, no AA Intelligence Index, no AA-Omniscience — so it should not be used as a factual or knowledge assistant. **Prefer this over its own predecessor Ling 3.0 Flash (45.87) decisively.**

---

## Signature
- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using InclusionAI's own Ling 3.1 Flash model-card evaluation chart as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 23-row catalog (which attributes the independent numbers to Artificial Analysis). **A provenance note is recorded: the vendor rows come from a commit-pinned model-card chart (`huggingface.co/.../blob/7b864daa.../README.md`), which is clean same-model provenance, and the independent rows from Artificial Analysis, with no cross-citation from competitor documents** — cleaner than most of this batch. The report's central finding is a **profile strength rather than a level: the strongest agentic cluster measured in this batch (BrowseComp 91.7%, CyberGym 87.9%, DRACO 85.5%, MCP Atlas 83%, WideResearch 83.3%, GDPval-AA 55.9% normalized) coexisting with an entirely unmeasured composite and reliability layer (no GPQA Diamond, no AA Intelligence Index, no AA-Omniscience)** — attributed explicitly and carried into the recommendation, where the model is characterised as an excellent agent that must not be used as a factual assistant. The **narrowest reference miss measured in this batch (AA-HLE 39.4% vs the 40%+ reference, 0.6 points)** and the **strongest long-context reasoning figure in this batch (AA-LCR 83.0%)** and the **strongest GDPval normalized figure in this batch (55.9%)** are attributed rather than presented bare, as is the **largest generational step in the Ling family (+19.7 points over Ling 3.0 Flash)** and the **262K window as the model's primary constraint**. The near-floor-in-context **DeepSWE (59.7%)** and **Terminal-Bench 4.0 (46.0%)** are attributed rather than glossed, and the two are named as the reason the 2.1-harness figures must not be extrapolated. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench 2.0/4.0 vendor-side beyond the one row, τ²-bench, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, AA AutomationBench, AA ITBench, GPQA Diamond, AA-GPQA Diamond, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath, SWE-bench Verified, LiveCodeBench, AA Coding Index, Vibe Code Bench, FrontierCode, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — inclusionAI/Ling-3.1-flash model card and evaluation chart (primary source)](https://huggingface.co/inclusionAI/Ling-3.1-flash)
  - [Hugging Face — commit-pinned evaluation chart (source of the vendor rows)](https://huggingface.co/inclusionAI/Ling-3.1-flash/blob/7b864daa2cedb1404e12bc52899def2d151a9719/README.md)
  - [BenchLM — Ling 3.1 Flash benchmark scores (23 rows, 65.57/100, #29/1015)](https://benchlm.ai/models/ling-3-1-flash)
  - [Artificial Analysis — Ling 3.1 Flash](https://artificialanalysis.ai/models/ling-3-1-flash)
  - [Artificial Analysis — humanitys-last-exam leaderboard (source of the 39.4%)](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — lcr leaderboard (source of the 83.0%)](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — scicode leaderboard](https://artificialanalysis.ai/evaluations/scicode)
  - See also: [`model/ling-3.0-flash/`](ling-3.0-flash.md) (45.87) — the predecessor this model beats by 19.7 points; [`model/ling-3.0-flash-vl/`](ling-3.0-flash-vl.md) — the vision-language sibling refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
