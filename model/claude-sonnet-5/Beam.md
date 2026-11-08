# Claude Sonnet 5 — findings by Beam

- Source: Anthropic/Claude Sonnet 5, `anthropic/claude-sonnet-5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's Sonnet-class model (May 2026) for everyday coding and agentic tasks; 1M context, 128K output; strong on SWE-bench and agentic coding at mid cost.
- **Provider / access:** Anthropic API `claude-sonnet-5`; AWS Bedrock; OpenRouter.
- **Release / knowledge:** Released 2026-05-??; knowledge cutoff not stated.
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (Anthropic).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **64.56** (#34/1016)
- Terminal-Bench 3.0: **14.6%**
- Terminal-Bench 2.1: **80.4%**
- BrowseComp: **84.7%**
- HLE w/ tools: **57.4%**
- OSWorld-Verified: **81.2%**
- GDPval-AA: **1603 Elo** / 48.2% normalized (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **74.5%** (Vals AI)
- AA Agentic Index: **44.3%** (Artificial Analysis)
- ApprenticeBench: **16%** (NeoCognition)
- MazeBench: **0%** (MazeBench)
- AA EnterpriseOps-Gym: **44.7%** (Artificial Analysis)
- AA Tau3 Banking: **37.3%** (Artificial Analysis)
- aaTerminalBench21: **80.5%** (Artificial Analysis)
- AA-AnalystAgent: **46.3%** (Artificial Analysis)
- OSWorld 2.1: **57.0%** (Anthropic)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- HLE: **57.4%**; HLE w/o tools: **43.2%**
- HLE-Verified: **31.0%** (Google)
- LABBench2: **80.1%** (Google)
- Artificial Analysis Intelligence Index: **38.2%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **91.1%** (Artificial Analysis)
- AA-HLE: **41.3%** (Artificial Analysis)
- AA-Omniscience Index: **16.5%**
- AA-Omniscience Accuracy: **40.1%**
- AA-Omniscience Hallucination Rate: **39.4%**
- AA-LCR: **82.0%** (Artificial Analysis)
- CritPt: **16.9%** (Artificial Analysis)
- MLCR-AA: not individually reported
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **65.614%**; Tier 4: **29.268%** (Epoch AI)
- GPQA Diamond (Vals): **88.9%** (Vals AI)
- MMLU-Pro (Vals): **87.5%** (Vals AI)

Coding:

- Coding public-lane (BenchLM): **64.56** (#34/1016)
- SWE-bench Verified: **85.2%**
- SWE-bench Pro: **63.2%**
- SWE Multilingual: **78.3%**
- SWE Multimodal: **28.1%**
- Terminal-Bench 2.1: **80.4%**
- FrontierCode 1.1 Main: **42.7%**
- CursorBench 3.2: **61.5%**
- AA-SciCode: **54.3%**
- VulcanBench CII v1: **89.2%**
- LiveCodeBench (Vals): **82.4%**
- SWE-bench (Vals): **79.6%**
- AA Coding Index: **71.5%**
- CursorBench 4.0: **34.1%**

Long context:

- 1M window; MRCR: no verified public score found.
- AA-LCR: **82.0%** (Artificial Analysis)

Multimodal:

- ParseBench: **61.16%**
- CharXiv: **88.3%**
- CharXiv w/o tools: **77%**
- AA-MMMU-Pro: **77.3%**
- Design Arena Website: **1271**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Agentic lane #?/128, Terminal-Bench 4.0 not reported, Terminal-Bench 2.1 80.4%, HLE w/ tools 57.4%, Toolathlon-Verified 77.8%, OSWorld-Verified 81.2%, GDPval-AA 1603 Elo/48.2% normalized, Vals Index 67.04%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 3.0 14.6%, Terminal-Bench 2.1 80.4%, BrowseComp 84.7%, HLE w/ tools 57.4%, OSWorld-Verified 81.2%, GDPval-AA 1603 Elo/48.2% normalized, Terminal-Bench 2.1 Vals 74.5%, AA Agentic Index 44.3%, ApprenticeBench 16%, MazeBench 0%, AA EnterpriseOps-Gym 44.7%, AA Tau3 Banking 37.3%, aaTerminalBench21 80.5%, AA-AnalystAgent 46.3%, OSWorld 2.1 57.0%, AA Intelligence 38.2%, AA-GPQA 91.1%, AA-HLE 41.3%, AA-Omniscience 16.5%/40.1%/39.4%, AA-LCR 82.0%, CritPt 16.9%, FrontierMath v2 65.614%/29.268%, GPQA Diamond Vals 88.9%, MMLU-Pro Vals 87.5%, HLE 57.4%, HLE w/o tools 43.2%, HLE-Verified 31.0%, LABBench2 80.1%, Artificial Analysis Intelligence Index 38.2%, AA-GPQA 91.1%, AA-HLE 41.3%, AA-Omniscience 16.5%/40.1%/39.4%, AA-LCR 82.0%, CritPt 16.9%, ParseBench 61.16%, CharXiv 88.3%, CharXiv w/o tools 77%, AA-MMMU-Pro 77.3%, Design Arena 1271. Corroborates band; no change.
- **Reasoning: 80/100.** HLE 57.4%, HLE w/o tools 43.2%, HLE-Verified 31.0%, LABBench2 80.1%, AA Intelligence 38.2%, AA-GPQA 91.1%, AA-HLE 41.3%, AA-Omniscience 16.5%/40.1%/39.4%, AA-LCR 82.0%, CritPt 16.9%, FrontierMath v2 65.614%/29.268%, GPQA Diamond Vals 88.9%, MMLU-Pro Vals 87.5%. Corroborates band; no change.
- **Context window: 84/100.** 1M window; caps at no published MRCR retrieval. Enrichment adds AA-LCR 82.0%. Corroborates band; no change.
- **Multimodal: 82/100.** Text/image/PDF in, text out; CharXiv 88.3%. Enrichment adds ParseBench 61.16%, CharXiv 88.3%, CharXiv w/o tools 77%, AA-MMMU-Pro 77.3%, Design Arena 1271. Corroborates band; no change.
- **Coding: 80/100.** SWE-bench Verified 85.2%, SWE-bench Pro 63.2%, SWE Multilingual 78.3%, SWE Multimodal 28.1%, Terminal-Bench 2.1 80.4%, FrontierCode 1.1 Main 42.7%, CursorBench 3.2 61.5%, AA-SciCode 54.3%, VulcanBench CII v1 89.2%, LiveCodeBench Vals 82.4%, SWE-bench Vals 79.6%, AA Coding Index 71.5%, CursorBench 4.0 34.1%. Enrichment adds ParseBench 61.16%, CharXiv 88.3%, CharXiv w/o tools 77%, AA-MMMU-Pro 77.3%, Design Arena 1271. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier paid.
- **Overall Score: 80.8/100.** Mean of five quality dims (BenchLM aggregate 64.56); best-fit for everyday coding + agentic work at mid cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 3.0 14.6%; Terminal-Bench 2.1 80.4%; BrowseComp 84.7%; HLE w/ tools 57.4%; OSWorld-Verified 81.2%; GDPval-AA 1603 Elo/48.2% normalized; Terminal-Bench 2.1 Vals 74.5%; AA Agentic Index 44.3%; ApprenticeBench 16%; MazeBench 0%; AA EnterpriseOps-Gym 44.7%; AA Tau3 Banking 37.3%; aaTerminalBench21 80.5%; AA-AnalystAgent 46.3%; OSWorld 2.1 57.0%; AA Intelligence 38.2%; AA-GPQA 91.1%; AA-HLE 41.3%; AA-Omniscience 16.5%/40.1%/39.4%; AA-LCR 82.0%; CritPt 16.9%; FrontierMath v2 65.614%/29.268%; GPQA Diamond Vals 88.9%; MMLU-Pro Vals 87.5%; HLE 57.4%; HLE w/o tools 43.2%; HLE-Verified 31.0%; LABBench2 80.1%; ParseBench 61.16%; CharXiv 88.3%; CharXiv w/o tools 77%; AA-MMMU-Pro 77.3%; Design Arena 1271). No dimension band moved; Overall unchanged at 80.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Sonnet 5](https://benchlm.ai/models/claude-sonnet-5)
  - [Artificial Analysis — Claude Sonnet 5](https://artificialanalysis.ai/models/claude-sonnet-5)
  - [Anthropic — Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5)
  - [Claude Sonnet 5 system card](https://www-cdn.anthropic.com/d9bb04416ffe1352af84721476c1fa9994c07fde/Claude%20Sonnet%205%20System%20Card.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).