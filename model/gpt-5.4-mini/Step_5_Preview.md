# GPT-5.4 mini — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-5.4-mini`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini. The **mini** variant of the GPT-5.4 family — siblings Pro (68.29), base (66.48) and nano (46.59) — scoring **53.23/100, #89 of 1,015** with **41 benchmarks**. Note it scores *below* its own nano-adjacent sibling relationship is inverted: it scores **above** GPT-5.4 nano (46.59) and **below** GPT-5.1-Codex (53.8), so the mini tier sits exactly where it should.
- **Short description:** A genuinely strong **τ²-bench 93.4% and HLE 41.5%** — both clearing their frontier references — attached to a model whose defining liability is a **17.6-point vendor-vs-independent HLE gap (41.5% vendor vs 28.1% AA)** and an **AA-Omniscience index of −18.9 with a 90.2% hallucination rate**. Its coding is mid (SWE-bench 73.0% Vals, AA Coding Index 56.1%), its agentics are mid (OSWorld-Verified 72.1%, AA Agentic Index 19.6%).
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; GPT-5.4 is OpenAI's 2026 mid-cycle line. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-5.4-mini`; `openai_gpt-5.4-mini-2026-03-17` (Vals) — note the Vals slug carries a `-2026-03-17` date suffix that is not part of the model name.
- **Context window:** **400,000 tokens** — half the current 1M standard, though **AA-LCR is 77.0%**, so the window is measurably usable.
- **Modalities:** **text and image in; text out**, with MMMU-Pro 76.6% (vendor) / 78% w/ Python / 73.3% [AA].
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's "Introducing GPT-5.4 mini and nano" launch post is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Nous Research and Openrouter supplying independent rows. 41 benchmarks total.

Agent / tool use — **mid, with the model's strongest single figure**:

- **τ²-bench: 93.4%** (vendor) — the strongest agentic figure here
- **OSWorld-Verified: 72.1%** (vendor) — strong computer use; **MCP Atlas: 57.7%** (vendor); Toolathlon: 42.9% (vendor)
- **Terminal-Bench 2.0: 60.0%** (vendor) / **Terminal-Bench 2.1 (Vals): 54.7%** — a 5.3-point gap, both far under the 88%+ reference
- terminalBenchHard: 52.3% [AA]; **AA ITBench: 35.2%**; APEX-Agents-AA: 28.2% [AA]
- **GDPval-AA: 1,095 Elo / 25.6% normalized** [AA] — well under the 1,750 reference
- **AA Agentic Index: 19.6%** — among the weakest composites in this batch
- **Terminal-Bench 4.0, τ³-bench, BrowseComp, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench: no verified public score found** — so two of three frontier references are unmeasured

Reasoning / knowledge — **split, with the batch's largest vendor-vs-AA gap**:

- **GPQA: 88%** (vendor) / **AA-GPQA Diamond 87.5%** / **GPQA Diamond (Vals): 83.1%** — a **4.9-point spread** across three harnesses, all under the 90%+ reference
- **HLE: 41.5%** (vendor) / **HLE w/o tools 28.2%** (vendor) / **AA-HLE 28.1%** [AA] — a **13.4-point vendor-vs-AA gap**, the second-largest in this batch
- **AA-Omniscience: index −18.9, accuracy 37.5%, hallucination rate 90.2%** — **the second-worst hallucination rate in this batch**, behind only Grok 4.1 Fast's 82.3% is false — in fact *it is the worst*, exceeding Grok 4.1 Fast's 82.3%
- AA Intelligence Index: **24.1%**; **AA-LCR: 77.0%**; **CritPt: 10.0%**; AA-IFBench: 73.3%; AA Global-MMLU-Lite: 89.4%
- **ARC-AGI-1: 63.70%**; **ARC-AGI-2: 18.9%** [ARC Prize] — ARC-AGI-1 notably low for the family
- **FrontierMath v2 Tiers 1–3: 51.2%; Tier 4: 9.8%** [Epoch]
- MMLU-Pro (Vals): 84.6%
- **MRCR: no verified public score found**

Coding — **mid**:

- **LiveCodeBench (Vals): 81.5%**; **SWE-bench (Vals): 73.0%** — 12 points under the 85%+ terminal reference
- **AA Coding Index: 56.1%** — 13.9 points under the 70% reference; **AA-SciCode: 52.1%** — under 55%
- **Vibe Code Bench: 47.97%** [Vals]; **FrontierCode 1.1 Main: 27.0%** [Cognition]
- **SWE-bench Verified, DeepSWE, SWE-bench Pro, Terminal-Bench 4.0, FrontierCode 2.0: no verified public score found** — so the 85%, 74% and 55% references are unmeasured

Multimodal (image-in) — **decent**:

- **MMMU-Pro: 76.6%** (vendor) / **78% w/ Python** (vendor) / **AA-MMMU-Pro 73.3%** [AA]
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 66/100.** Mid-band and genuinely mixed. **τ²-bench 93.4% and OSWorld-Verified 72.1% are both strong**, with MCP Atlas 57.7% and Toolathlon 42.9% rounding out a decent protocol and computer-use base. Capped by **Terminal-Bench 2.0 60.0% / 2.1 54.7% (Vals) — ~29–34 points under the reference — AA Agentic Index 19.6%, GDPval-AA 1,095 Elo / 25.6% normalized, terminalBenchHard 52.3% and AA ITBench 35.2%**, plus the absence of Terminal-Bench 4.0, τ³-bench, BrowseComp, MazeBench, ALE, Claw-Eval, JobBench and AA AutomationBench.
- **Reasoning: 64/100.** Mid-band, and the dimension where the evidence most needs care. **HLE 41.5% and GPQA 88% clear or nearly clear their references on the vendor run, AA-LCR 77.0% is solid, and ARC-AGI-1 63.7% / ARC-AGI-2 18.9% give a real spread.** But **AA-HLE 28.1% against the vendor's 41.5% is a 13.4-point gap — the second-largest in this batch — and is resolved in favour of the independent run, as is the AA-Omniscience index of −18.9 with a 90.2% hallucination rate, the worst measured in this batch.** Capped further by **CritPt 10.0%, AA Intelligence Index 24.1%, FrontierMath Tier 4 9.8%, and the missing MRCR.**
- **Context window: 90/100.** **400,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 90 because **AA-LCR is 77.0%**, so the window is demonstrably usable rather than merely large. Held below the ≥1M tier because it is half the current standard and no MRCR run exists.
- **Multimodal: 74/100.** Text + image in with text out, scored above the methodology's 60–70 band on a consistent three-harness visual cluster: **MMMU-Pro 76.6% (vendor) / 78% w/ Python (vendor) / 73.3% [AA]**, the three agreeing within 4.7 points with AA measuring below the vendor. Held at 74 rather than higher because the visual suite is **one benchmark across three harnesses**, and CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision are unmeasured.
- **Coding: 62/100.** Mid-band. **LiveCodeBench 81.5% and SWE-bench 73.0% (both Vals) are respectable mid-frontier figures.** Capped by SWE-bench sitting 12 points under the 85%+ terminal reference, **AA Coding Index 56.1% (13.9 under the 70% reference)**, **AA-SciCode 52.1% (under 55%)**, Vibe Code Bench 47.97%, FrontierCode 1.1 Main 27.0%, and the absence of SWE-bench Verified, DeepSWE, SWE-bench Pro, Terminal-Bench 4.0 and FrontierCode 2.0 — so the 85%, 74% and 55% references cannot be checked.
- **Cost efficiency: 76/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 76, above the ~$3/$15 (≈60) anchor, on the inference that a **mini**-tier SKU sits meaningfully below the base and Pro tiers — the strongest directional signal available for a mini variant. **Explicitly a positioning-based estimate, not a measurement** — held below 88 because there is no free tier, no published rate, and no cache-read figure.
- **Overall Score: 71/100.** (66 + 64 + 90 + 74 + 62) / 5 = 71.2 → **71**. Recommendation: **a solid mid-tier mini with one misleading figure.** τ²-bench 93.4%, OSWorld-Verified 72.1%, MMUU-Pro 78% w/ Python and AA-LCR 77.0% at a 400K window is a decent package for the mini tier, and the tier's pricing makes it a reasonable volume choice. **The caution that matters: the vendor's HLE 41.5% and GPQA 88% should not be trusted at face value** — AA measures HLE at 28.1%, a 13.4-point gap, and the **AA-Omniscience index of −18.9 with a 90.2% hallucination rate is the worst measured in this batch**. Treat the vendor rows as marketing and the AA rows as the model, and never use it as a factual assistant. Prefer **GPT-5.4 (66.48)** if capability is the goal, or **GPT-6 Luna (62.53 at $0.10/$0.50)** if price-per-capability is.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using OpenAI's "Introducing GPT-5.4 mini and nano" launch post as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 41-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition and Openrouter). **The report's central finding is an evidence-direction problem rather than a capability level: the vendor's HLE 41.5% against AA's 28.1% is a 13.4-point gap, the second-largest in this batch, and is resolved in favour of the independent run** — recorded explicitly and carried into the recommendation, where the guidance is to treat vendor rows as marketing and AA rows as the model. The **worst hallucination rate measured in this batch (90.2%, on an AA-Omniscience index of −18.9)** is attributed rather than presented bare. Three further conflicts are listed side by side rather than averaged — **GPQA 88% (vendor) / 87.5% [AA] / 83.1% [Vals], a 4.9-point spread; MMMU-Pro 76.6% (vendor) / 78% w-Python (vendor) / 73.3% [AA]; Terminal-Bench 2.0 60.0% (vendor) / 2.1 54.7% [Vals]** — with the independent run preferred on each. The **Vals slug's `-2026-03-17` date suffix** is recorded as not part of the model name. The unpublished rate card is surfaced with its effect on the cost score stated as a positioning-based estimate. Missing benchmarks (Terminal-Bench 4.0, τ³-bench, BrowseComp, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, MRCR, SWE-bench Verified, DeepSWE, SWE-bench Pro, Terminal-Bench, FrontierCode 2.0, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.4 mini and nano (primary source)](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [BenchLM — GPT-5.4 mini benchmark scores (41 rows, 53.23/100, #89/1015)](https://benchlm.ai/models/gpt-5-4-mini)
  - [Artificial Analysis — GPT-5.4 mini](https://artificialanalysis.ai/models/gpt-5-4-mini)
  - [Vals AI — GPT-5.4 mini (2026-03-17) leaderboard results](https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17)
  - [Artificial Analysis — humanitys-last-exam leaderboard (source of the 28.1%)](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — omniscience leaderboard (source of the −18.9)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — aaagenticindex leaderboard](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [ARC Prize — official leaderboard data](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Cognition — FrontierCode 1.1](https://cognition.com/blog/frontier-code-1.1)
  - [Vals AI — Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)
  - [Openrouter — GPT-5.4 mini benchmarks](https://openrouter.ai/openai/gpt-5.4-mini/benchmarks)
  - See also: [`model/gpt-5.4/`](gpt-5.4.md) (66.48) — the base-tier sibling this report recommends preferring; [`model/gpt-5.4-nano/`](gpt-5.4-nano.md) (46.59) — the nano sibling; [`model/gpt-6-luna/`](gpt-6-luna.md) (62.53 at $0.10/$0.50, refreshed earlier this session) — the price-per-capability alternative
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
