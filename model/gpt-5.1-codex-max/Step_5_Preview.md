# GPT-5.1-Codex-Max — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-5.1-codex-max`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max. **A negative finding governs this report and is its headline: BenchLM carries a page for this slug but 13 source-displayable benchmark rows with no overall score** — its own text reads *"has 13 source-displayable benchmark rows but no public overall score. It remains unranked"*, with Overall Score "Not computed (unranked)". So the repo queue's Overall of 76.9 is a **roster artefact, not a measured figure** — the same discrepancy documented in the Grok 4.1, Grok 4.7 and Gemini 2.0 Flash reports.
- **Short description:** **Structurally, this model's 13 rows are almost entirely cross-cited from its own sibling `GPT-5.1-Codex`** — τ²-bench 83%, AA-MMMU-Pro 72.5%, AA-LCR 69.3%, CritPt 5.7%, AA Intelligence Index 23.7%, AA-GPQA Diamond 86.0%, AA-HLE 25.7%, AA-Omniscience index −6.5 and AA-IFBench 70.0% are all attributed to *`gpt-5.1-codex`*, not to this SKU. Only **Vibe Code Bench 22.17%** and **LiveCodeBench 83.6% (Vals)** are specific to Codex-Max. So there is almost no Max-specific evidence at all.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; GPT-5.1 Codex-Max is OpenAI's 2026 Codex Max tier. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-5.1-codex-max`; `openai_gpt-5.1-codex-max` (Vals); `gpt-5-1-codex-max` (BenchLM canonical).
- **Context window:** **400,000 tokens** — half the current 1M standard, and one of only two verified properties for this model.
- **Modalities:** **text and image in; text out** (AA-MMMU-Pro 72.5%, cross-cited from the sibling).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count and compute budget undisclosed. The "Max" tier historically implies extended reasoning compute per query.

### Raw benchmarks found

**A provenance finding is recorded prominently and is the report's central point: 11 of this model's 13 rows are attributed to `gpt-5.1-codex` — its own sibling — rather than to a Codex-Max-specific measurement.** BenchLM's own attribution text names the source as `https://artificialanalysis.ai/models/gpt-5-1-codex` for τ²-bench, AA-MMMU-Pro, AA-LCR, CritPt, AA Intelligence Index, AA-GPQA Diamond, AA-HLE, AA-Omniscience Index, AA-Omniscience Accuracy, AA-Omniscience Hallucination Rate and AA-IFBench. Only Vibe Code Bench and LiveCodeBench (Vals) are Codex-Max-specific. 13 benchmarks total.

Specific to Codex-Max:

- **LiveCodeBench (Vals): 83.6%** — the strongest coding figure
- **Vibe Code Bench: 22.17%** [Vals] — near-floor, and a **61.4-point gap from the model's own LiveCodeBench figure on a neighbouring coding benchmark**

Cross-cited from the sibling `gpt-5.1-codex` (weaker provenance, flagged per-figure):

- **τ²-bench: 83%** [AA]; **AA-LCR: 69.3%**; **CritPt: 5.7%**
- **AA Intelligence Index: 23.7%**; **AA-GPQA Diamond: 86.0%**; **AA-HLE: 25.7%**
- **AA-Omniscience: index −6.5, accuracy 39.9%, hallucination rate 77.2%**; **AA-IFBench: 70.0%**; **AA-MMMU-Pro: 72.5%**

Named as absent rather than substituted:

- **Agentic:** Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index — none measured
- **Coding beyond the two rows:** SWE-bench (all variants), DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench, FrontierCode, SWE-Rebench — none measured
- **Reasoning:** ARC-AGI, MRCR, AIME, FrontierMath, MMLU-Pro — none measured
- **Multimodal:** CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena — none measured

### Normalized scores (1–100)

> **Methodology note.** Because 11 of 13 rows are cross-cited from the sibling `gpt-5.1-codex`, **those rows describe the sibling, not this SKU**, and are used here only as a *labelled floor* on what this model can do — never as Codex-Max-specific measurements. The two Codex-Max-specific rows (LiveCodeBench 83.6%, Vibe Code Bench 22.17%) are the only genuine evidence, and they contradict each other by 61.4 points. Every quality dimension is therefore a placeholder anchored on verified structural facts and the sibling cross-citations, and the confidence interval is among the widest in this research series.

- **Tool use: 58/100.** Anchored on the **cross-cited τ²-bench 83% [AA]** — a strong protocol figure, but one that describes the sibling and is used here only as a labelled floor. **Capped by the absence of every agentic benchmark specific to this SKU** and by the absence of Terminal-Bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index — so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 62/100.** Anchored on the **cross-cited** AA-GPQA Diamond 86.0% (4 points under the 90%+ reference), AA-LCR 69.3% and AA-IFBench 70.0% — all sibling figures used as a labelled floor. Capped by the **cross-cited** AA-HLE 25.7%, CritPt 5.7% and AA Intelligence Index 23.7%, by an **AA-Omniscience index of −6.5 with 77.2% hallucination** (also cross-cited), and by the missing ARC-AGI, MRCR, AIME, FrontierMath and MMLU-Pro.
- **Context window: 88/100.** **400,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 88 on the **cross-cited** AA-LCR 69.3% — usable but unremarkable. Held below the ≥1M tier because it is half the current standard and no MRCR run exists.
- **Multimodal: 62/100.** Text + image in with text out, at the lower end of the methodology's 60–70 band on the **cross-cited** AA-MMMU-Pro 72.5%. Held at 62 rather than 66+ because the visual suite is **one row and it is not even specific to this SKU**, and CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision and Design Arena are unmeasured.
- **Coding: 62/100.** Mid-band, with the report's central contradiction. **LiveCodeBench 83.6% (Vals) is a strong figure and is genuinely Codex-Max-specific.** Against it, **Vibe Code Bench 22.17% is near-floor and is also Codex-Max-specific — a 61.4-point gap on two neighbouring coding benchmarks**, recorded as an unresolved data conflict rather than averaged. And **SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, the AA Coding Index, Terminal-Bench and FrontierCode are entirely absent**, so the 85%, 74%, 70% and 55% references cannot be checked — the same unsupported-Codex-branding caveat recorded for GPT-5.1-Codex and GPT-5.2-Codex.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary OpenAI Codex Max SKU with unverified pricing. **Explicitly a placeholder, not an estimate** — and note that a "Max" tier is historically priced *above* the base tier, which is the one directional signal and the reason this is not scored at the unverified floor.
- **Overall Score: 66.4/100.** (58 + 62 + 88 + 62 + 62 + 60) / 5 = 66.4 → **66**. Recommendation: **an unranked Max tier with almost no Max-specific evidence.** The repo queue's 76.9 is a roster artefact — BenchLM leaves this model unranked. Of its 13 rows, **11 are cross-cited from the sibling `gpt-5.1-codex` and describe the sibling, not this SKU**, and the two genuinely Max-specific rows contradict each other by 61.4 points (LiveCodeBench 83.6% vs Vibe Code Bench 22.17%). Its only verified properties are a 400K window and a proprietary closed-weights architecture. Prefer **GPT-5.1-Codex (53.8, refreshed in this same batch)** — better-evidenced on the same evidence base — or **GPT-5.3 Codex (62.92)**, which at least carries SWE-bench Verified 85% and OSWorld-Verified 64.7% from its own system card.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is a **provenance finding rather than a capability level: 11 of this model's 13 benchmark rows are attributed to `gpt-5.1-codex` — its own sibling — rather than to a Codex-Max-specific measurement.** BenchLM's attribution text names `https://artificialanalysis.ai/models/gpt-5-1-codex` as the source for τ²-bench, AA-MMMU-Pro, AA-LCR, CritPt, AA Intelligence Index, AA-GPQA Diamond, AA-HLE, AA-Omniscience Index, AA-Omniscience Accuracy, AA-Omniscience Hallucination Rate and AA-IFBench; only Vibe Code Bench and LiveCodeBench (Vals) are Codex-Max-specific. **Those cross-cited rows are therefore used only as a labelled floor on what this model can do and are never presented as Codex-Max measurements** — the same cross-citation pattern recorded in the Claude Opus 4.5, Claude Sonnet 4.5, Grok 4.20, Gemma 4 31B, Qwen3.5-27B, Qwen3.5-35B-A3B and Gemini 2.0 Flash reports. **A second finding is recorded: BenchLM leaves this model unranked ("13 source-displayable benchmark rows but no public overall score"), so the repo queue's computed Overall of 76.9 is a roster artefact rather than a measured figure** — the same discrepancy documented in the Grok 4.1, Grok 4.7 and Gemini 2.0 Flash reports. The **61.4-point internal contradiction between the two genuinely Max-specific rows (LiveCodeBench 83.6% vs Vibe Code Bench 22.17%)** is recorded as unresolved rather than averaged. The unsupported-Codex-branding caveat is stated explicitly, consistent with the GPT-5.1-Codex and GPT-5.2-Codex reports. The unpublished rate card is surfaced with its effect on the cost score stated as a placeholder. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, AIME, FrontierMath, MMLU-Pro, SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench, FrontierCode, SWE-Rebench, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — GPT-5.1-Codex-Max (13 benchmark rows, no overall score, unranked; source attribution shows 11 rows cross-cited from `gpt-5-1-codex`)](https://benchlm.ai/models/gpt-5-1-codex-max)
  - [Artificial Analysis — GPT-5.1-Codex (the sibling that BenchLM cites as the source for 11 of the 13 rows; weaker provenance)](https://artificialanalysis.ai/models/gpt-5-1-codex)
  - [Vals AI — GPT-5.1 Codex Max leaderboard results (source of the two Max-specific rows)](https://www.vals.ai/models/openai_gpt-5.1-codex-max)
  - [Vals AI — Vibe Code Bench v1.1 (source of the 22.17%)](https://www.vals.ai/benchmarks/vibe-code)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — omniscience leaderboard](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [OpenAI — API pricing](https://openai.com/api/pricing/)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/gpt-5.1-codex/`](gpt-5.1-codex.md) (53.8) — the sibling that supplies 11 of this model's 13 rows, refreshed in this same batch; [`model/gpt-5.3-codex/`](gpt-5.3-codex.md) (62.92) — the better-evidenced Codex this report recommends
- Future sources: add a next-to-this-one, e.g. `GPT_5.md`, using the same headings.
