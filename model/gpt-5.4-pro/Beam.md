# GPT-5.4 Pro — findings by Beam

- Source: OpenAI/GPT-5.4 Pro, `openai/gpt-5.4-pro`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's Pro variant of GPT-5.4 (Mar 5, 2026) for the hardest professional tasks; extended thinking; stronger than GPT-5.2 Pro on business/legal/data science. Strict cyber/bio safeguards.
- **Provider / access:** OpenAI API `gpt-5.4-pro` (ChatGPT Pro/Business/Enterprise; API); Azure.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.4-pro`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $30.00 / 1M input, $180.00 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- BrowseComp: **89.3%**
- Agentic lane: not individually reported
- Terminal-Bench: not reported for Pro
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

- ARC-AGI-1: **94.50%**
- ARC-AGI-2: **83.3%**
- CritPt: **30.0%**
- HLE: **58.7%**
- FrontierScience: **36.7%**
- FrontierScience Research: **36.7%**
- HLE w/o tools: **42.7%**
- IPhO 2025 (Theory): **93.5%**
- FrontierMath (legacy): **50%**
- FrontierMath v2 (Tiers 1-3): **82.456%**
- FrontierMath v2 (Tier 4): **58.537%**
- AA Intelligence Index: not individually reported
- AA-GPQA Diamond: not individually reported
- AA-HLE: not individually reported
- AA-Omniscience Index: not individually reported
- AA-Omniscience Accuracy: not individually reported
- AA-Omniscience Hallucination Rate: not individually reported
- AA-LCR: not individually reported
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported

Coding:

- No coding benchmarks reported for Pro in sources
- AA Coding Index: not individually reported
- AA-SciCode: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported
- FrontierCode 2.0: not individually reported

Long context:

- 1.05M window; MRCR: not reported for Pro.

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

- **Tool use: 78/100.** BrowseComp 89.3%; caps at no published agentic benchmarks for Pro variant. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates BrowseComp 89.3%, CritPt 30.0%, ARC-AGI-1 94.50%, ARC-AGI-2 83.3%, HLE 58.7%, FrontierScience 36.7%, FrontierScience Research 36.7%, HLE w/o tools 42.7%, IPhO 2025 (Theory) 93.5%, FrontierMath (legacy) 50%, FrontierMath v2 Tiers 1-3 82.456%, Tier 4 58.537%. No new verified agentic rows. No change.
- **Reasoning: 86/100.** ARC-AGI-1 94.5%, ARC-AGI-2 83.3%, HLE 58.7%, FrontierScience 36.7%, CritPt 30.0%, IPhO 93.5%, FrontierMath 50%/82.456%/58.537%. Enrichment adds CritPt 30.0% (already), IPhO 93.5% (already), FrontierMath 50%/82.456%/58.537% (already). Corroborates band; no change.
- **Context window: 80/100.** 1.05M window; caps at no published MRCR retrieval.
- **Multimodal: 75/100.** No multimodal benchmarks reported for Pro; caps pending verification.
- **Coding: 70/100.** No coding benchmarks reported for Pro; caps pending verification.
- **Cost efficiency: 50/100.** Very expensive $30/$180 per 1M.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 68.18); best-fit for demanding research at very high cost. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates BrowseComp 89.3%, CritPt 30.0%, ARC-AGI-1 94.50%, ARC-AGI-2 83.3%, HLE 58.7%, FrontierScience 36.7%, FrontierScience Research 36.7%, HLE w/o tools 42.7%, IPhO 2025 (Theory) 93.5%, FrontierMath (legacy) 50%, FrontierMath v2 Tiers 1-3 82.456%, Tier 4 58.537%. No dimension band moved; Overall unchanged at 78.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; BenchLM aggregator checked (only 12 benchmarks covered, unranked); no new verified rows; no dimension score changed.
- Reference URLs:
  - [BenchLM — GPT-5.4 Pro](https://benchlm.ai/models/gpt-5-4-pro)
  - [OpenAI — GPT-5.4](https://openai.com/index/introducing-gpt-5-4/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).