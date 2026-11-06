# Muse Glimmer 30B — findings by Step 5 Preview

- Source: Meta AI Research (`meta/muse-glimmer-30b`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B. Meta's **open-weight agentic model** — the *smallest* Muse in BenchLM's corpus and the only one below the Spark/Wonder lines, at **32.63/100, #173 of 1,015** with **29 benchmarks**. It sits below Muse Spark Open (51.24) and far below the Spark/Wonder lines (60–69), so Glimmer is Meta's entry tier.
- **Short description:** A genuinely attractive small-agentic package with one severe defect: **AIME26 94.7% and SWE-bench Verified 76% are strong figures, MCP Atlas 75.5%, DeepSearchQA 74.6% and OSWorld-Verified 65.9% are a respectable agentic cluster, and the visual suite is solid (OmniDocBench 75.8%, ScreenSpot Pro 75.4%, CharXiv 78.8%, AA-LCR 83.3%)** — set against an **AA Intelligence Index of 6.3% (the third-lowest in this batch), CritPt 2.6%, AA-HLE 22.0%, AA Agentic Index 10.5% and an AA-Omniscience index of −32.2 with 83.6% hallucination**.
- **Provider / access:** **Open weights** on Hugging Face (`meta/muse-glimmer-30b`), Meta's own API, and OpenRouter. Self-hosting available.
- **Release / knowledge:** release date not restated; Glimmer is Meta's 2026 open-agentic line. **Knowledge cutoff not disclosed.**
- **IDs:** `meta/muse-glimmer-30b` (Hugging Face, Openrouter); `muse-glimmer-30b` (BenchLM canonical); `muse_glimmer` (AA's model-page slug).
- **Context window:** **131,072 tokens (131K)** — the smallest in this batch apart from Grok 4's 128K, and roughly one-eighth of the current 1M standard. This is the binding constraint on the model's ranking.
- **Modalities:** **text and image in; text out**, with a genuinely good measured visual suite for a 30B model (five benchmarks).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight**, 30B; parameter count undisclosed beyond the name.

### Raw benchmarks found

Meta AI Research's Muse Glimmer launch post is the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis and Openrouter supplying independent rows. 29 benchmarks total.

Agent / tool use — **the model's nominal speciality, with a severe composite gap**:

- **MCP Atlas: 75.5%** (vendor); **DeepSearchQA: 74.6%** (vendor); **OSWorld-Verified: 65.9%** (vendor) — a respectable and broad agentic cluster
- **skillsBench: 44.3%** (vendor); Terminal-Bench 2.1: **51.7%** (vendor) — 36 points under the 88%+ reference
- **GDPval-AA: 893 Elo / 14.2% normalized** [AA] — near-floor
- **AA Agentic Index: 10.5%** — the second-lowest composite in this batch, and a stark contrast with the model's strong protocol figures
- **Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, AA ITBench: no verified public score found** — so two of three frontier references are unmeasured

Reasoning / knowledge — **split, with the batch's third-lowest composite**:

- **AA-GPQA Diamond: 83.5%** [AA] — fails the 90%+ reference by 6.5 points
- **AA-HLE: 22.0%** — 18 points under the 40%+ reference
- **AA Intelligence Index: 6.3%** — **the third-lowest composite measured in this batch**
- **AA-Omniscience: index −32.2, accuracy 28.0%, hallucination rate 83.6%** — a deeply negative index, meaning far more incorrect than correct answers
- **AA-LCR: 83.3%** — genuinely strong long-context reasoning, and the best figure in this report
- **CritPt: 2.6%** — near-floor; **AA-MMMU-Pro: 74.3%** [AA]; IFBench: **77%** (vendor)
- **AIME26: 94.7%** (vendor) — the strongest figure in this report, on a saturating benchmark
- **ARC-AGI, MRCR, MMLU-Pro, FrontierMath, HMMT: no verified public score found**

Coding — **mid, and the least-bad dimension**:

- **SWE-bench Verified: 76%** (vendor) — 9 points under the 85%+ terminal reference
- **SWE-bench Pro: 51.2%** (vendor); **AA Coding Index: 49.0%** [AA] — 21 points under the 70% reference
- **SciCode: 43.6%** (vendor) / **AA-SciCode: 44.9%** [AA] — both under the 55%+ reference
- **LiveCodeBench, DeepSWE, Vibe Code Bench, FrontierCode, Terminal-Bench 4.0: no verified public score found** — so the 74% and 55% references are unmeasured

Multimodal (image-in) — **the second-strongest dimension**:

- **CharXiv: 78.8%** (vendor); **OmniDocBench 1.5: 75.8%** (vendor); **ScreenSpot Pro: 75.4%** (vendor) — strong GUI-grounding and document figures for a 30B model
- **MMMU-Pro: 74%** (vendor) / **AA-MMMU-Pro 74.3%** [AA] — the two agree closely, with AA marginally above the vendor
- Design Arena (website): **1,169 Elo**
- **ExtractBench, BabyVision, ZeroBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 58/100.** Below the methodology's mid band, and the model's most contradictory dimension. The protocol and research half is strong — **MCP Atlas 75.5%, DeepSearchQA 74.6% and OSWorld-Verified 65.9%** — while the execution half collapses: **AA Agentic Index 10.5% (the second-lowest in this batch), Terminal-Bench 2.1 51.7% (~36 points under the reference), skillsBench 44.3% and GDPval-AA 893 Elo / 14.2% normalized.** **Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and AA AutomationBench have no figure at all**, so two of three frontier references are unmeasured. This is the same protocol-fluency-without-execution pattern now confirmed across six models in this research series.
- **Reasoning: 50/100.** At the methodology's mid band's floor, and the report's central caution. **AA Intelligence Index 6.3% is the third-lowest composite measured in this batch, CritPt 2.6% is near-floor, AA-HLE 22.0% fails the 40% reference by 18 points, and the AA-Omniscience index of −32.2 with 83.6% hallucination is the fifth-worst in this research series.** The genuinely strong figures are **AIME26 94.7%** (a saturating benchmark) and **AA-LCR 83.3%** (the best figure in this report) — which, as with the rest of the Non-Reasoning-adjacent cohort, reflects saturating formats and long-context retrieval rather than reasoning depth. Capped further by the missing ARC-AGI, MRCR, MMLU-Pro, FrontierMath and HMMT.
- **Context window: 78/100.** **131,072 tokens** places it below the methodology's 200K tier boundary, and it is the smallest in this batch apart from Grok 4's 128K — roughly one-eighth of the current standard. Scored at 78, above the 128K tier's floor, on the strength of **AA-LCR 83.3%**, which is a genuinely strong long-context reasoning figure and evidence that the window that exists is usable at depth. Held at 78 rather than higher because 131K disqualifies it from long-document work, no MRCR or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 76/100.** Text + image in with text out, scored above the methodology's 60–70 band on a genuinely good visual suite for a 30B model: **CharXiv 78.8%, OmniDocBench 1.5 75.8%, ScreenSpot Pro 75.4%, MMMU-Pro 74% with AA agreeing at 74.3%**. Held at 76 rather than higher because the visual suite is **five benchmarks**, Design Arena is only 1,169 Elo, and ExtractBench, BabyVision, ZeroBench and MathVision are unmeasured.
- **Coding: 62/100.** Mid-band and the least-bad dimension. **SWE-bench Verified 76% is solid mid-frontier repair and SWE-bench Pro 51.2% is mid**, with SciCode 43.6–44.9% corroborating weakly. Capped by SWE-bench Verified sitting 9 points under the 85%+ terminal reference, **AA Coding Index 49.0% (21 under the 70% reference)**, AA-SciCode 44.9% (under 55%), and the absence of LiveCodeBench, DeepSWE, Vibe Code Bench, FrontierCode and Terminal-Bench 4.0 — so the 74% and 55% references cannot be checked.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable, at 30B** — a genuinely cheap self-hosting profile and one of the more permissive propositions in this batch. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 64.8/100.** (58 + 50 + 78 + 76 + 62 + 88) / 5 = 70.0 → **70**. Recommendation: **an attractive small open-weight agentic model whose composite scores badly understate its protocol and vision strength.** MCP Atlas 75.5%, DeepSearchQA 74.6%, OSWorld-Verified 65.9%, SWE-bench Verified 76%, AIME26 94.7%, AA-LCR 83.3% and a five-benchmark visual suite at open weights and 30B is a genuinely good package for self-hosted agent and document work. The caution that matters: **AA Intelligence Index 6.3% is the third-lowest measured in this batch and AA Agentic Index 10.5% the second-lowest**, so the strong protocol figures do not translate into reliable task completion — treat it as a capable component that needs a harness driving the plan, not an autonomous agent. **And its AA-Omniscience index of −32.2 with 83.6% hallucination means it must never be used as a factual assistant.** Note also **131K context** is roughly one-eighth of the current standard, which disqualifies it from long-document work despite the strong document-perception benchmarks. Prefer **Muse Spark Open (51.24)** if you can host it.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Meta AI Research's Muse Glimmer launch post as the primary source (so the large majority of rows are vendor-run and labelled as such), cross-checked against BenchLM's 29-row catalog (which attributes the independent numbers to Artificial Analysis and Openrouter). The report's central finding is a **profile inversion rather than a level: the model's protocol and vision figures are genuinely strong (MCP Atlas 75.5%, DeepSearchQA 74.6%, OSWorld-Verified 65.9%, SWE-bench Verified 76%, AIME26 94.7%, AA-LCR 83.3%, five-benchmark visual suite) while its composite scores are among the worst in this batch (AA Intelligence Index 6.3%, third-lowest; AA Agentic Index 10.5%, second-lowest; AA-Omniscience index −32.2 with 83.6% hallucination, fifth-worst in this research series)** — attributed explicitly as the protocol-fluency-without-execution-reliability pattern now confirmed across six models in this series, and carried into the recommendation rather than averaged away. The **batch-smallest context window bar Grok 4 (131K, versus Grok 4's 128K)** is surfaced as the model's binding constraint, and the **strong-competition-maths-and-exams against collapsed-composite-depth pattern** is stated as consistent with the Non-Reasoning-adjacent cohort. Conflicts are listed side by side — **MMMU-Pro 74% (vendor) / 74.3% [AA], the independent run marginally above the vendor and noted as a confidence signal; SciCode 43.6% (vendor) / 44.9% [AA]** — rather than averaged. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, AA ITBench, ARC-AGI, MRCR, MMLU-Pro, FrontierMath, HMMT, LiveCodeBench, DeepSWE, Vibe Code Bench, FrontierCode, ExtractBench, BabyVision, ZeroBench, MathVision) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta AI Research — Introducing Muse Glimmer, an open agentic model (primary source)](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)
  - [BenchLM — Muse Glimmer 30B benchmark scores (29 rows, 32.63/100, #173/1015)](https://benchlm.ai/models/muse-glimmer-30b)
  - [Artificial Analysis — Muse Glimmer](https://artificialanalysis.ai/models/muse-glimmer)
  - [Artificial Analysis — aaagenticindex leaderboard (source of the 10.5%)](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard (source of the 6.3%)](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Artificial Analysis — omniscience leaderboard (source of the −32.2)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — lcr leaderboard (source of the 83.3%)](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — scicode leaderboard](https://artificialanalysis.ai/evaluations/scicode)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Openrouter — Muse Glimmer 30B benchmarks](https://openrouter.ai/meta/muse-glimmer-30b/benchmarks)
  - See also: [`model/muse-spark-open/`](muse-spark-open.md) (51.24) — the next Muse tier up, refreshed earlier in this session; [`model/muse-spark-1.3/`](muse-spark-1.3.md), [`model/muse-spark-1.2/`](muse-spark-1.2.md) — the tiered siblings covering the Contributor/Free/Standard/Max names
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
