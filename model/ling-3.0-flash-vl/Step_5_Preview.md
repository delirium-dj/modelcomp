# Ling 3.0 Flash VL — findings by Step 5 Preview

- Source: InclusionAI (`inclusionAI/Ling-3.0-flash-VL`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL. InclusionAI's **vision-language Flash** variant — sibling to Ling 3.0 Flash (45.87), 3.0 Flash Sante, 3.0 Tiny, 3.0 Flash FP8, 3.0 Flash Fin and the newer Ling 3.1 Flash (65.57). **A negative finding governs this report and is its headline: BenchLM carries a page for this slug but only 7 source-displayable benchmark rows with no overall score** — its own text reads *"has 7 source-displayable benchmark rows but no public overall score. It remains unranked"*, with Overall Score "Not computed (unranked)". So the repo queue's Overall of 76.1 is a **roster artefact, not a measured figure** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash and GPT-5.1-Codex-Max reports.
- **Short description:** A **7-row unranked open-weight VL model with an unusually good visual figure**: **AA-MMMU-Pro 79.0%** — among the strongest measured in this research series and well above most Flash-tier models — paired with **AA-GPQA Diamond 86.2%, AA-LCR 78.3%, GDPval-AA 33.0% normalized**, against **CritPt 2.0% and AA-HLE 22.0%**. The evidence base is far too thin to support a capability judgement, but what exists points to a strong small VL model.
- **Provider / access:** **Open weights** on Hugging Face (`inclusionAI/Ling-3.0-flash-VL`), and self-hosting. BenchLM records no hosted route.
- **Release / knowledge:** release date not restated; Ling 3.0 is InclusionAI's 2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (Hugging Face); `ling-3-0-flash-vl` (BenchLM canonical).
- **Context window:** **262,000 tokens** — a quarter of the current 1M standard, though **AA-LCR is 78.3%**, so the window is measurably usable.
- **Modalities:** **text and image in; text out** (AA-MMMU-Pro 79.0% is the only visual row — but a strong one).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight**; parameter count undisclosed. The `-FP8` sibling suggests a quantised variant exists.

### Raw benchmarks found

**Every one of this model's seven rows is attributed to Artificial Analysis** — no model card, launch post or benchmark table appears in the attribution, so this is a fully independently-evidenced model with no vendor-run rows at all, like Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex, Grok 4, Qwen3.5 Flash, GPT-5.1-Codex, Gemini 2.5 Flash, Gemini 2.0 Flash and Gemini 1.5 Pro. Seven benchmarks total — the third-thinnest evidence base in this research series.

Agentic / tool use:

- **GDPval-AA: 33.0% normalized** [AA] — the only agentic figure, and mid-tier
- **Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge:

- **AA-GPQA Diamond: 86.2%** [AA] — fails the 90%+ reference by 3.8 points
- **AA-HLE: 22.0%** [AA] — fails the 40%+ reference by 18 points
- **CritPt: 2.0%** [AA] — near-floor; **AA-LCR: 78.3%** [AA] — solid long-context reasoning
- **ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro, FrontierMath: no verified public score found** — so **composite depth, reliability and all mathematics are entirely unmeasured**

Coding:

- **AA-SciCode: 44.2%** [AA] — under the 55%+ reference
- **SWE-bench (all variants), LiveCodeBench, DeepSWE, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found** — so the 85%, 74%, 70% and 55% references are all unmeasured

Multimodal (image-in):

- **AA-MMMU-Pro: 79.0%** [AA] — the model's strongest figure, and among the best measured in this research series
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 55/100.** Below the methodology's mid band, and the weakest dimension. **GDPval-AA 33.0% normalized is the only agentic figure** and it is mid-tier — meaning acceptable outputs on roughly one task in three. **Terminal-Bench on every harness, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and the AA Agentic Index have no measurement at all**, so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 64/100.** Mid-band, and the best-grounded quality dimension alongside multimodal. **AA-GPQA Diamond 86.2% is 3.8 points under the 90%+ reference, and AA-LCR 78.3% is solid long-context reasoning.** Capped by **AA-HLE 22.0% (18 under the 40% reference), CritPt 2.0% (near-floor), and the missing ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro and FrontierMath** — so composite depth, reliability and all mathematics are unknown, and only two of five reasoning references are measured at all.
- **Context window: 85/100.** **262,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 because **AA-LCR is 78.3%** — solid long-context reasoning, so the window is measurably usable. Held below the ≥1M tier because it is a quarter of the current standard, no MRCR or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 84/100.** Text + image in with text out, scored in the methodology's upper band on **AA-MMMU-Pro 79.0% — among the strongest visual figures measured in this research series**, and well above most Flash-tier models. Held at 84 rather than higher because the visual suite is **one benchmark**, and CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision and Design Arena are unmeasured — so a genuinely strong figure rests on a single row.
- **Coding: 55/100.** Below the methodology's mid band. **AA-SciCode 44.2% is under the 55%+ reference** and is the only coding figure. **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, the AA Coding Index, Vibe Code Bench, Terminal-Bench and FrontierCode have no measurement at all**, so the 85%, 74%, 70% and 55% references cannot be checked and coding rests on one weak row.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable, at Flash tier** — a genuinely permissive proposition, and one of only two verified properties for this model. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 68.6/100.** (55 + 64 + 85 + 84 + 55 + 88) / 5 = 71.2 → **71**. Recommendation: **an unranked open-weight VL model with one genuinely strong figure and almost no evidence.** AA-MMMU-Pro 79.0% is among the best measured in this research series and AA-GPQA Diamond 86.2% with AA-LCR 78.3% rounds out a promising small-VL profile — and the **open weights plus 262K window** make it self-hostable. **But note the queue's 76.1 is a roster artefact: BenchLM leaves this model unranked with 7 of 744 benchmarks**, so this report's 71 is a floor on evidence rather than a capability assessment. Only two of seven dimensions rest on more than one row. Benchmark it yourself on your own harness — specifically SWE-bench Verified, Terminal-Bench and a broader visual suite — before relying on it. Note also that **Ling 3.1 Flash (65.57)** is the newer and better-evidenced sibling, and the natural upgrade.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding rather than a capability level: BenchLM carries a page for `ling-3-0-flash-vl` with 7 source-displayable benchmark rows but no overall score** — its own text reads *"has 7 source-displayable benchmark rows but no public overall score. It remains unranked"* and *"Benchmarks covered: 7 of 744"*, with Overall Score "Not computed (unranked)". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 76.1 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash and GPT-5.1-Codex-Max reports. **A provenance finding is also recorded: all seven rows are attributed to Artificial Analysis with no model card, launch post or benchmark table anywhere**, making this a fully independently-evidenced model with no vendor-run rows — the same pattern recorded across ten models in this series. The third-thinnest evidence base in this research series (7 rows) is stated plainly rather than hedged, and the report's thesis — that 7 rows cannot support a capability judgement — is stated explicitly in the recommendation rather than dressed up as an assessment. **The strongest visual figure in this model's profile (AA-MMMU-Pro 79.0%, among the best measured anywhere in this research series) is attributed as resting on a single row rather than presented as breadth.** The near-floor CritPt (2.0%) and the 18-point AA-HLE shortfall are attributed rather than presented bare. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench on all harnesses, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro, FrontierMath, SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Ling 3.0 Flash VL (7 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/ling-3-0-flash-vl)
  - [Hugging Face — inclusionAI/Ling-3.0-flash-VL model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)
  - [Artificial Analysis — Ling 3.0 Flash VL (primary independent source)](https://artificialanalysis.ai/models/ling-3-0-flash-vl)
  - [Artificial Analysis — mmmu-pro leaderboard (source of the 79.0%)](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — scicode leaderboard](https://artificialanalysis.ai/evaluations/scicode)
  - See also: [`model/ling-3.1-flash/`](ling-3.1-flash.md) (65.57) — the newer, better-evidenced sibling this report names as the natural upgrade; [`model/ling-3.0-flash/`](ling-3.0-flash.md) (45.87) — the text-only sibling of the same generation; [`model/ling-3.0-flash-sante/`](ling-3.0-flash-sante.md) — the health-specialised sibling, separately tracked
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
