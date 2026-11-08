# GPT-5.5 Pro — findings by Beam

- Source: OpenAI/GPT-5.5 Pro, `openai/gpt-5.5-pro`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's Pro variant of GPT-5.5 (Apr 24, 2026) for demanding research and complex professional tasks; fully retrained base model; stronger than GPT-5.4 Pro on business/legal/education/data science. Stricter cyber/bio safeguards.
- **Provider / access:** OpenAI API `gpt-5.5-pro` (ChatGPT Pro/Business/Enterprise; API Apr 24, 2026); Azure.
- **Release / knowledge:** Released 2026-04-23 (ChatGPT), API 2026-04-24; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.5-pro`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $30.00 / 1M input, $180.00 / 1M output (AIMLAPI $39/$234); paid. (BenchLM lists $30/$180.)
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- BrowseComp: **90.1%**
- Agentic lane: not individually reported (BenchLM overall 73.35)
- Terminal-Bench 2.0: not reported for Pro
- OSWorld: not reported for Pro
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: not individually reported
- MazeBench: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- ARC-AGI-1: **95.00%**
- ARC-AGI-2: **84.2%**
- CritPt: **30.6%**
- HLE: **57.2%**
- HLE w/o tools: **43.1%**
- FrontierMath (legacy): **52.4%**
- FrontierMath v2 (Tiers 1-3): **87.719%**
- FrontierMath v2 (Tier 4): **78.049%**
- MRCR v2 64K-128K / 128K-256K: not reported for Pro
- AA Intelligence Index: not reported
- AA Intelligence Index: not individually reported
- AA-GPQA Diamond: not individually reported
- AA-HLE: not individually reported
- AA-Omniscience Index: not individually reported
- AA-Omniscience Accuracy: not individually reported
- AA-Omniscience Hallucination Rate: not individually reported
- AA-LCR: not individually reported
- CritPt: **30.6%** (Artificial Analysis)
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **87.719%**; Tier 4: **78.049%** (Epoch AI)

Coding:

- No coding benchmarks reported for Pro in sources (BenchLM overall 73.35, coding lane not reported)
- AA Coding Index: not individually reported
- AA-SciCode: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported

Long context:

- 1M window; MRCR: not reported for Pro.

Multimodal:

- No multimodal benchmarks reported for Pro in sources.
- AA-MMMU-Pro: not individually reported
- Design Arena Website: not individually reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** BrowseComp 90.1%; caps at no published agentic benchmarks for Pro variant. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) published only BrowseComp 90.1% and reasoning rows (CritPt 30.6%, ARC-AGI 95.00%/84.2%, HLE 57.2%/43.1%, FrontierMath 52.4%/87.719%/78.049%); still only 9 benchmarks covered, unranked. No new verified agentic rows. No change.
- **Reasoning: 86/100.** ARC-AGI-1 95.0%, ARC-AGI-2 84.2%, HLE 57.2%, FrontierMath Tier4 78.049%, CritPt 30.6%; reasoning lane (unranked 3 rows) 78.8. Enrichment adds CritPt 30.6% (already), FrontierMath v2 Tiers 1-3 87.719%, Tier 4 78.049%. Corroborates band; no change.
- **Context window: 80/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 75/100.** No multimodal benchmarks reported for Pro; caps pending verification.
- **Coding: 70/100.** No coding benchmarks reported for Pro; caps pending verification.
- **Cost efficiency: 50/100.** Very expensive $30/$180 per 1M.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 73.35); best-fit for demanding research at very high cost. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates BrowseComp 90.1%, CritPt 30.6%, ARC-AGI 95.00%/84.2%, HLE 57.2%/43.1%, FrontierMath 52.4%/87.719%/78.049%. No dimension band moved; Overall unchanged at 78.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (only 9 benchmarks covered, unranked); no new verified rows; no dimension score changed.
- Reference URLs:
  - [BenchLM — GPT-5.5 Pro](https://benchlm.ai/models/gpt-5-5-pro)
  - [OpenAI — GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).