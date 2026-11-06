# GPT-5.4 nano — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-5.4-nano`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano. The **nano** tier of the GPT-5.4 family — siblings Pro (68.29), base (66.48) and mini (53.23) — scoring **46.59/100, #118 of 1,015** with **39 benchmarks**. It sits below GPT-5.4 mini (53.23) and above GPT-5 (medium) (46.06), exactly where a nano tier should.
- **Short description:** A genuinely efficient small model whose defining property is that **it delivers a 400K window and a broad measured suite at nano tier** — and whose defining liability is that **essentially every capability figure is a mid-band result held down by a poor reliability profile: AA-Omniscience index −29.5 with 74.2% hallucination on 25.7% accuracy**. Its strongest figures are **τ²-bench 92.5%, LiveCodeBench 84.0% (Vals), AA-LCR 76.7%, ExtractBench 74.90%, HLE 37.7%**.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; GPT-5.4 is OpenAI's 2026 mid-cycle line. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-5.4-nano`; `openai_gpt-5.4-nano-2026-03-17` (Vals) — note the Vals slug carries a `-2026-03-17` date suffix that is not part of the model name.
- **Context window:** **400,000 tokens** — half the current 1M standard, though **AA-LCR is 76.7%**, so the window is measurably usable.
- **Modalities:** **text and image in; text out**, with a measured visual suite including a genuine document-extraction figure (ExtractBench 74.90%, MMMU-Pro 69.5% w/ Python).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's "Introducing GPT-5.4 mini and nano" launch post is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Epoch AI and LlamaIndex supplying independent rows. 39 benchmarks total.

Agent / tool use — **strong protocol, weak execution**:

- **τ²-bench: 92.5%** (vendor) — the strongest agentic figure here, and among the best in this research series
- **MCP Atlas: 56.1%** (vendor); Toolathlon: 35.5% (vendor); **OSWorld-Verified: 39%** (vendor)
- **Terminal-Bench 2.0: 46.3%** (vendor) / **Terminal-Bench 2.1 (Vals): 41.6%** — ~42–47 points under the 88%+ reference
- **GDPval-AA: 1,035 Elo / 22.4% normalized** [AA]; **AA Agentic Index: 17.7%**; APEX-Agents-AA: 24.9% [AA]
- **Terminal-Bench 4.0, τ³-bench, BrowseComp, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, AA ITBench: no verified public score found** — so two of three frontier references are unmeasured and no composite beyond AA Agentic Index

Reasoning / knowledge — **split, with a poor reliability profile**:

- **GPQA: 82.8%** (vendor) / **AA-GPQA Diamond 81.7%** [AA] / **GPQA Diamond (Vals): 77.5%** — an **5.3-point spread**, all under the 90%+ reference
- **HLE: 37.7%** (vendor) / **HLE w/o tools 24.3%** (vendor) / **AA-HLE 28.3%** [AA] — fails the 40%+ reference on all three
- **AA-Omniscience: index −29.5, accuracy 25.7%, hallucination rate 74.2%** — **the seventh-worst AA-Omniscience index measured in this research series**, and a negative index meaning more incorrect than correct answers
- AA Intelligence Index: **20.7%**; **AA-LCR: 76.7%**; CritPt: 9.3%; AA-IFBench: 75.9%
- **ARC-AGI-1: 51.5%**; **ARC-AGI-2: 5.7%** [ARC Prize] — a very wide ARC spread
- **FrontierMath v2 Tiers 1–3: 44.9%; Tier 4: 12.2%** [Epoch]
- MMLU-Pro (Vals): **77.2%**
- **MRCR, AIME: no verified public score found**

Coding — **mid, and thin on the classic references**:

- **LiveCodeBench (Vals): 84.0%** — the strongest coding figure
- **SWE-bench (Vals): 69.8%** — 15.2 points under the 85%+ terminal reference
- **AA Coding Index: 56.1%** — 13.9 points under the 70% reference; **AA-SciCode: 47.2%** — under 55%
- **Vibe Code Bench: 26.10%** [Vals] — near-floor, and a **57.9-point gap from the model's own LiveCodeBench figure on a neighbouring coding benchmark**
- **SWE-bench Verified, DeepSWE, SWE-bench Pro, Terminal-Bench 4.0, FrontierCode: no verified public score found** — so the 85%, 74% and 55% references are unmeasured

Multimodal (image-in) — **decent, with a real document figure**:

- **ExtractBench: 74.90%** [LlamaIndex] — a strong document-extraction figure
- **MMLU-Pro is unrelated; MMMU-Pro: 66.1%** (vendor) / **69.5% w/ Python** (vendor) / **AA-MMMU-Pro 65.4%** [AA]
- **ParseBench: 42.24%** [LlamaIndex] — weak
- **CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** Mid-band, with the same protocol-fluency-without-execution pattern confirmed across eight models in this series. **τ²-bench 92.5% is among the strongest in this research series and MCP Atlas 56.1% is respectable**, but **Terminal-Bench 2.0 46.3% / 2.1 41.6% (Vals) is ~42–47 points under the reference, AA Agentic Index 17.7%, OSWorld-Verified 39%, GDPval-AA 1,035 Elo / 22.4% normalized, APEX-Agents-AA 24.9% and Toolathlon 35.5%**. **Terminal-Bench 4.0, τ³-bench, BrowseComp, MazeBench, ALE, Claw-Eval, JobBench and AA AutomationBench have no figure at all**, so two of three frontier references are unmeasured.
- **Reasoning: 60/100.** Mid-band. **AA-LCR 76.7% is solid long-context reasoning, AA-IFBench 75.9% is strong instruction following, and the exam cluster is genuine (GPQA 81.7–82.8%, MMLU-Pro 77.2%** — though the 5.3-point GPQA spread across three harnesses is wide). Heavily capped by **AA-HLE 28.3% (11.7 under the 40% reference), AA-Omniscience index −29.5 with 74.2% hallucination on 25.7% accuracy (the seventh-worst in this research series), AA Intelligence Index 20.7%, CritPt 9.3%, FrontierMath Tier 4 12.2%, ARC-AGI-2 5.7%, and the missing MRCR and AIME.**
- **Context window: 90/100.** **400,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 90 because **AA-LCR is 76.7%**, so the window is demonstrably usable rather than merely large. Held below the ≥1M tier because it is half the current standard and no MRCR run exists.
- **Multimodal: 74/100.** Text + image in with text out, scored above the methodology's 60–70 band on a consistent three-harness visual cluster: **ExtractBench 74.90%, MMMU-Pro 66.1% (vendor) / 69.5% w/ Python (vendor) / 65.4% [AA]**. Held at 74 rather than higher because **ParseBench 42.24% is weak**, the suite is four benchmarks, and CharXiv, BabyVision, ZeroBench, OmniDocBench and MathVision are unmeasured.
- **Coding: 64/100.** Mid-band. **LiveCodeBench 84.0% (Vals) is a strong competitive-programming figure and SWE-bench 69.8% (Vals) is respectable mid-frontier repair.** Capped by SWE-bench sitting 15.2 points under the 85%+ terminal reference, **AA Coding Index 56.1% (13.9 under the 70% reference)**, **AA-SciCode 47.2% (under 55%)**, **Vibe Code Bench 26.10% (near-floor, a 57.9-point gap from the model's own LiveCodeBench figure)**, and the absence of SWE-bench Verified, DeepSWE, SWE-bench Pro, Terminal-Bench 4.0 and FrontierCode — so the 85%, 74% and 55% references cannot be checked.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on positioning rather than a price: the **nano tier is OpenAI's cheapest current route**, the strongest directional signal available for a nano variant, and the 400K window is a genuine asset at that tier. Scored at 88 on the methodology's ~$1.25/$4.25 anchor. **Explicitly a positioning-based inference, not a measurement** — held below 92 because there is no free tier, no published rate, and no cache-read figure.
- **Overall Score: 70/100.** (62 + 60 + 90 + 74 + 64 + 88) / 5 = 71.6 → **72**. Recommendation: **a genuinely efficient nano tier with a strong protocol profile and a poor reliability profile.** τ²-bench 92.5%, LiveCodeBench 84.0%, ExtractBench 74.90%, AA-LCR 76.7% and a 400K window at nano pricing is a reasonable package for high-volume work, and the tier's pricing makes it a defensible volume choice. **The caution that matters: AA-Omniscience index −29.5 with 74.2% hallucination on 25.7% accuracy is the seventh-worst measured in this research series**, so it must never be used as a factual or knowledge assistant — pair it with retrieval for anything factual. Two further cautions: **its agentic-execution layer is mid at best** (Terminal-Bench 2.1 41.6%, AA Agentic Index 17.7%, no composite beyond that), so it is not an autonomous agent; and **Vibe Code Bench 26.10% against LiveCodeBench 84.0% is a 57.9-point internal contradiction** to resolve on your own harness. Prefer **GPT-5.4 mini (53.23)** or **GPT-6 Luna (62.53 at $0.10/$0.50)** if capability or price-per-capability is the goal.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using OpenAI's "Introducing GPT-5.4 mini and nano" launch post as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 39-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, ARC Prize, Epoch AI and LlamaIndex). The report's central finding is a **profile inversion rather than a level: a strong tool-protocol and long-context profile (τ²-bench 92.5%, AA-LCR 76.7%, AA-IFBench 75.9%, LiveCodeBench 84.0%) coexisting with the seventh-worst AA-Omniscience index in this research series (−29.5, on 25.7% accuracy)** — attributed explicitly as the same protocol-fluency-without-execution-reliability pattern confirmed across eight models in this series, and carried into the recommendation rather than averaged away. The **5.3-point GPQA spread across three harnesses (82.8% vendor / 81.7% AA / 77.5% Vals)** and the **57.9-point internal contradiction between LiveCodeBench 84.0% and Vibe Code Bench 26.10%** are both listed side by side rather than averaged, with the independent run preferred on each. The seventh-worst AA-Omniscience index is attributed rather than presented bare. The strong-exam-against-collapsed-depth pattern is stated as consistent with the Non-Reasoning-adjacent cohort. The **Vals slug's `-2026-03-17` date suffix** is recorded as not part of the model name. The unpublished rate card is surfaced with its effect on the cost score stated as a positioning-based estimate. Missing benchmarks (Terminal-Bench 4.0, τ³-bench, BrowseComp, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, AA ITBench, MRCR, AIME, SWE-bench Verified, DeepSWE, SWE-bench Pro, Terminal-Bench, FrontierCode, CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.4 mini and nano (primary source)](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [BenchLM — GPT-5.4 nano benchmark scores (39 rows, 46.59/100, #118/1015)](https://benchlm.ai/models/gpt-5-4-nano)
  - [Artificial Analysis — GPT-5.4 nano](https://artificialanalysis.ai/models/gpt-5-4-nano)
  - [Vals AI — GPT-5.4 nano (2026-03-17) leaderboard results](https://www.vals.ai/models/openai_gpt-5.4-nano-2026-03-17)
  - [Artificial Analysis — omniscience leaderboard (source of the −29.5)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — aaagenticindex leaderboard](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — aacodingindex leaderboard](https://artificialanalysis.ai/evaluations/aacodingindex)
  - [Artificial Analysis — scicode leaderboard](https://artificialanalysis.ai/evaluations/scicode)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [ARC Prize — official leaderboard data](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Vals AI — Vibe Code Bench v1.1 (source of the 26.10%)](https://www.vals.ai/benchmarks/vibe-code)
  - [ExtractBench leaderboard (LlamaIndex)](https://www.extractbench.ai/#leaderboard)
  - [Openrouter — GPT-5.4 nano benchmarks](https://openrouter.ai/openai/gpt-5.4-nano/benchmarks)
  - See also: [`model/gpt-5.4-mini/`](gpt-5.4-mini.md) (53.23) — the sibling refreshed in an earlier batch; [`model/gpt-6-luna/`](gpt-6-luna.md) (62.53 at $0.10/$0.50) — the price-per-capability alternative
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
