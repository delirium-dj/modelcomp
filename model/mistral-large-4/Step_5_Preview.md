# Mistral Large 4 — findings by Step 5 Preview

- Source: Mistral AI (`mistralai/mistral-large-4`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4. BenchLM scores it **52.54/100, #95 of 1,015** with **24 benchmarks** — the second-thinnest evidence base in this batch. It is nonetheless the **highest-scored Mistral in BenchLM's whole corpus by a wide margin**: Large 3 is 34.08, Medium 3.5 128B 29.56, Large 2 28.99. So this generation was a large step for the family, and it still sits below the frontier by a wide gap.
- **Short description:** An **open-weight** Mistral flagship whose most decision-relevant property is **AA-Omniscience hallucination rate 28.2% — the second-lowest measured in this research series**, ahead of Grok 4.7's 20.0% only. Everything else is mid or below: **Vibe Code Bench 78.40% and Cybench 93.0%** are the strong figures, against **CritPt 10.0%, FrontierCode 2.0 19.7% and an AA Intelligence Index of 26.1%**.
- **Provider / access:** **Weights open as of Mistral's October 29, 2026 announcement** — the first open-weight Mistral Large in this research series — plus the Mistral API, OpenRouter and OpenCode Zen. Self-hosting available.
- **Release / knowledge:** open-weight release **2026-10-29** per Mistral's announcement. **Knowledge cutoff not disclosed.**
- **IDs:** `mistralai/mistral-large-4` (Mistral API, HF); `mistralai/mistral-large-4-0` (Openrouter); `mistralai_large-4` (Vals).
- **Context window:** **1M tokens** (BenchLM) — mid-tier for a 2026 flagship, but large for an open-weight model.
- **Modalities:** **text and image in; text out** (MMMU-Pro 78.1%, Design Arena 1,256 Elo). BenchLM classifies it **Hybrid** reasoning.
- **Pricing (as of 2026-11-05):** **$0.70 input / $0.07 cached / $2.10 output per 1M** — with a documented pricing-history anomaly worth recording: Mistral's **October 6 preview sale price was $0.68/$0.07/$2.09**, the **October 29 open-weight announcement re-listed the same rate**, and yet at 14:20 UTC that same day **Mistral's own model page, API pricing page and OpenRouter still carried the earlier $1.36/$0.14/$4.18 list price**. So the $0.70/$2.10 figure is the post-announcement rate and is what BenchLM's price registry now stores.
- **Architecture:** **open weight**; parameter count undisclosed in the sources checked.

### Raw benchmarks found

Mistral's own launch posts (both the "Introducing" and the "is now open weight" announcement) are the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Cognition, Epoch AI, Ulam, OpenRouter, Mistral's own Finch/b3/Cybench security suites supplying independent rows. 24 benchmarks total.

Agent / tool use — **security-heavy and otherwise thin**:

- **Cybench: 93.0%** (vendor); **b3 Agent Security: 97.1%** (vendor); **Cyber Misuse Refusal: 96.6%** (vendor) — three strong security-agentic figures, all vendor-run
- **CyberGym-E2E-AA: 79.4%** [AA]; **CWE-Bench-AA: 58.3%** [AA]; **AA Cyber Index: 50.9%** [AA]; DeepsecBench-AA: 15.0% [AA]
- **BrowseComp: 84.5%** (vendor) — the strongest non-security figure
- **AA AutomationBench: 57.8%** [AA]; GDPval-AA: **46.1% normalized** [AA] / AA Briefcase 1,348 Elo; GDP.pdf: 17.6%
- **AA Terminal-Bench 4.0: 24.7%** — far under frontier; Finance Agent v2: 54.7% (Vals); Finch: 73.3% (vendor)
- **Terminal-Bench 2.0/2.1, τ²-bench, τ³-Banking, GDPval-AA from the vendor, MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index: no verified public score found** — so two of three frontier references are unmeasured and the AA agentic index is absent

Reasoning / knowledge — **the standout is reliability**:

- **AA-Omniscience: index 5.1, accuracy 26.0%, hallucination rate 28.2%** — **the second-lowest hallucination rate measured in this research series**, behind only Grok 4.7's 20.0%
- AA Intelligence Index: **26.1%** — low; **CritPt: 10.0%** — low; STEMBench: 2.50 (Ulam)
- **GPQA, HLE, AA-LCR, MRCR, ARC-AGI, AIME, FrontierMath, MMLU-Pro: no verified public score found** — so **every one of the methodology's five reasoning references is unmeasured**; only the composite and the reliability figure exist

Coding — **split and thin**:

- **Vibe Code Bench: 78.40%** [Vals] — the strongest coding figure and well above frontier mid-band
- **FrontierCode 2.0: 19.7%** [Cognition] — near-floor
- **SWE-bench, LiveCodeBench, AA-SciCode, DeepSWE, AA Coding Index, SWE-bench Pro: no verified public score found** — so the 85%, 74%, 70% and 55% references are all unmeasured

Multimodal (image-in):

- **MMMU-Pro: 78.1%** [AA]; Design Arena (website): **1,256 Elo** [OpenRouter]
- **CharXiv, ExtractBench, BabyVision, ZeroBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 60/100.** At the top of the methodology's mid band's lower half. The three vendor-run security figures — **Cybench 93.0%, b3 Agent Security 97.1%, Cyber Misuse Refusal 96.6%** — are strong but all self-reported and all on safety rather than task capability. The independent row that matters is **CyberGym-E2E-AA 79.4%**, which is genuinely good. Capped by **AA Terminal-Bench 4.0 24.7%, GDP.pdf 17.6%, DeepsecBench-AA 15.0%, and the total absence of Terminal-Bench 2.x, τ²-bench, τ³-Banking, MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and the AA Agentic Index** — leaving two of three frontier references unmeasured and no composite agentic figure at all.
- **Reasoning: 52/100.** At the bottom of the methodology's mid band, and the weakest dimension. **The single decisive fact is AA-Omniscience hallucination 28.2% — the second-lowest in this research series — which makes this the most factually trustworthy open-weight model measured here.** Against that, **GPQA, HLE, AA-LCR, MRCR, ARC-AGI, AIME, FrontierMath and MMLU-Pro have no figure whatsoever**, so every one of the methodology's reasoning references is unmeasurable, and the two that do exist are low: AA Intelligence Index 26.1% and CritPt 10.0%. Scored at 52 rather than higher because a reliability figure without any capability figure is a narrow basis, and STEMBench 2.50 does not contradict that.
- **Context window: 95/100.** **1M tokens** places it in the methodology's ≥1M tier (95+), and it is a large window for an open-weight model. Held at the tier floor rather than above because **no AA-LCR, MRCR, GraphWalks or RULER figure exists**, so the window's usable depth is entirely unverified, and no long-context pricing tier was found.
- **Multimodal: 72/100.** Text + image in with text out, above the methodology's 60–70 band on **AA-MMMU-Pro 78.1%**. Held at 72 because the visual suite is **two benchmarks**, Design Arena is only 1,256 Elo, and there is no video or audio input.
- **Coding: 55/100.** At the bottom of the methodology's mid band. **Vibe Code Bench 78.40% is genuinely strong** and is the one figure above mid-tier; **FrontierCode 2.0 19.7% is near-floor**. **SWE-bench, LiveCodeBench, AA-SciCode, DeepSWE, the AA Coding Index and SWE-bench Pro are all absent**, so the 85%, 74%, 70% and 55% references cannot be checked at all — the dimension rests on two benchmarks pointing in opposite directions.
- **Cost efficiency: 92/100.** **$0.70/$0.07/$2.10 per 1M** sits between the methodology's ~$0.60/$2.20 (≈92) and ~$1.25/$4.25 (≈88) anchors, with a **90% cache-read discount**, and **open weights provide a self-hosting escape**. Held at 92 rather than higher because **BenchLM's own pricing note records that 7 of 111 other ranked models with a published API price cost the same or less *and score higher* — so the rate card is not competitive on price-per-capability** — and because the pricing history was unstable across the open-weight announcement day itself. No free tier.
- **Overall Score: 67/100.** (60 + 52 + 95 + 72 + 55) / 5 = 66.8 → **67** → **67**. Recommendation: **the most factually reliable open-weight model in this research series after Grok 4.7** — a 28.2% hallucination rate at $0.70/$2.10 with a 1M window and newly open weights, which is a genuinely useful combination for retrieval-heavy work where fabrication is the main risk. Three cautions: **it is weak on every capability benchmark that exists** (AA Intelligence Index 26.1%, CritPt 10.0%, FrontierCode 2.0 19.7%); **24 benchmarks with no GPQA, HLE, SWE-bench or agentic-index figure means most dimensions rest on one or two rows**, so the 67 is a floor on evidence; and **BenchLM's own note that 7 cheaper-or-equal models score higher** means the rate card is only attractive because the weights are now open.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Mistral's two launch posts — "Introducing Mistral Large 4" and the October 29 2026 "is now open weight" announcement — as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 24-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, Cognition, Epoch AI, Ulam and OpenRouter) and BenchLM's price registry. **The report's most notable finding is a pricing-history anomaly recorded verbatim from the registry: the October 6 preview sale price ($0.68/$0.07/$2.09), the October 29 open-weight re-list at $0.70/$0.07/$2.10, and the fact that at 14:20 UTC on October 29 Mistral's own pages and OpenRouter still carried the earlier $1.36/$0.14/$4.18 list — so the current rate is verified but was unstable on the day it was announced.** The second-lowest hallucination rate in this research series (28.2%) is attributed rather than presented bare, and the total absence of GPQA, HLE, SWE-bench and agentic-index figures is stated as the report's central evidential limitation rather than left implicit. Missing benchmarks (Terminal-Bench 2.0/2.1, τ²-bench, τ³-Banking, vendor GDPval-AA, MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, GPQA, HLE, AA-LCR, MRCR, ARC-AGI, AIME, FrontierMath, MMLU-Pro, SWE-bench, LiveCodeBench, AA-SciCode, DeepSWE, AA Coding Index, SWE-bench Pro, CharXiv, ExtractBench, BabyVision, ZeroBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Mistral Large 4 is now open weight (primary source; pricing and rate history)](https://mistral.ai/news/mistral-large-4-oss/)
  - [Mistral AI — Introducing Mistral Large 4 (source of the Cybench row)](https://mistral.ai/news/mistral-large-4/)
  - [BenchLM — Mistral Large 4 benchmark scores (24 rows, 52.54/100, #95/1015)](https://benchlm.ai/models/mistral-large-4)
  - [Artificial Analysis — Mistral Large 4](https://artificialanalysis.ai/models/mistral-large-4)
  - [Vals AI — Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)
  - [Vals AI — Finance Agent v2](https://www.vals.ai/benchmarks/fabv2)
  - [Cognition — FrontierCode 2.0](https://cognition.com/blog/frontier-code-2.0)
  - [Openrouter — Mistral Large 4 benchmarks](https://openrouter.ai/mistralai/mistral-large-4-0/benchmarks)
  - [STEMBench120 snapshot audit (Ulam)](https://www.ulam.ai/stembench#full-run-results)
  - See also: [`model/mistral-large-3/`](mistral-large-3.md) — the previous generation, in the same evidence series
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
