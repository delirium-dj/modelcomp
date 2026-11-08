# GPT-6.1 Sol — findings by Beam

- Source: OpenAI/GPT-6.1 Sol, `openai/gpt-6.1-sol`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's upgraded Sol (Sep 29, 2026): nearly matches GPT-6 Astra on agentic coding, computer use, and professional work at ~1/5 of Astra's price. Big gains over GPT-6 Sol on DeepSWE, GDP.pdf, AutomationBench, OSWorld 2.0, Terminal-Bench Science.
- **Provider / access:** OpenAI API `gpt-6.1-sol` (Chat/Responses, reasoning low..max, default medium); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff April 30, 2026.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes; search grounding.
- **Pricing (as of 2026-11-08):** $2.00 / 1M input, $10.00 / 1M output, $0.10 / 1M cached input; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **76.2** (estimated #5/128)
- AutomationBench: **36.1%**
- Terminal-Bench Science 0.1: **57.0%**
- OSWorld 2.0 (offline): outperforms GPT-6 Sol by 7pp at max effort
- Failure to disclose broken search tool (max): **2.10%**
- Reviewer bypass attempts (max): **0.00%**
- Warning circumvention (max): **23.48%**
- GDP.pdf: scores higher than Opus 5.5 with fallbacks at < half cost
- AA Briefcase: **1555** (Artificial Analysis)
- AA AutomationBench: **64.9%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **56.1%** (Artificial Analysis)
- GDP.pdf: **31.0%** (Artificial Analysis)
- AA-AnalystAgent: **50.0%** (Artificial Analysis)
- MazeBench: **17%** (MazeBench)
- Hermes Index: **57.1%**; Hermes Bench: **73.9%** (Nous Research)
- GDPval-AA: **54.8%** normalized / 1609 Elo (Artificial Analysis)
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- ARC-AGI-1: **96.50%**; ARC-AGI-2: **94.2%**; ARC-AGI-3: **52.7%**
- STEMBench: **2.76**
- FrontierMath v2 (Tiers 1-3): **93.684%**; Tier 4: **100.000%**
- GPQA: no individually reported figure (knowledge lane 85.9)
- AA Intelligence Index v4.3.2: **52** (GIGAZINE, +4 over GPT-6 Sol, within 1 of Astra)
- BioBasicsBench: **62.6%** (OpenAI)
- STEMBench: **2.76** (STEMBench120)
- AA-LCR: **83.0%** (Artificial Analysis)
- CritPt: **31.7%** (Artificial Analysis)
- MLCR-AA: **38.3%** (Artificial Analysis)
- ARC-AGI-1: **96.50%**; ARC-AGI-2: **94.2%**; ARC-AGI-3: **52.7%** (ARC Prize)
- ARC-AGI-3 Provider Adapter: **96.18%** (ARC Prize)
- HealthBench (raw): **56.7%**; (length-adjusted): **58.5%**
- HealthBench Professional: **64.2%**; Professional (raw): **67.2%**
- HealthBench Hard: **36.2%**
- Artificial Analysis Intelligence Index: **54.6%** (measured, updated 2026-11-07)
- AA-HLE: **52.9%** (Artificial Analysis)
- AA-Omniscience Index: **42.0%**
- AA-Omniscience Accuracy: **61.8%**
- AA-Omniscience Hallucination Rate: **51.9%**
- AA-GPQA Diamond: not individually reported
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **93.684%**; Tier 4: **100.000%** (Epoch AI)

Coding:

- Coding public-lane (BenchLM): **70.9** (#8/150)
- DeepSWE: **71.9%**
- Bug Hunt Bench: **44.3 fixes**
- SWE-bench Verified/Pro: no verified public score found (coming soon)
- ScarfBench: **68.4%** (Kaggle)
- DeepSWE: **71.9%** (OpenAI)
- AA-SciCode: **54.2%** (Artificial Analysis)
- Bug Hunt Bench: **44.3 fixes** (Bug Hunt Bench)
- FrontierCode 2.0: **39.0%** (Cognition)
- ExtractBench (LlamaIndex): **95.31%**; ExtractBench Pro: **12%**; ParseBench: **69.63%**
- MMMU-Pro: not individually reported; AA-MMMU-Pro: **86.0%**
- Design Arena Website: **1310** (OpenRouter)

Long context:

- 1.05M window; MRCR: no verified public score found.
- AA-LCR: **83.0%** (Artificial Analysis)

Multimodal:

- HealthBench (raw): **56.7%**; (length-adjusted): **58.5%**
- Multimodal lane (BenchLM): **87.3** (unranked, 1 row)
- AA-MMMU-Pro: **86.0%** (Artificial Analysis)
- Design Arena Website: **1310** (OpenRouter)
- ExtractBench (LlamaIndex): **95.31%**; ExtractBench Pro: **12%**; ParseBench: **69.63%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 86/100.** Agentic lane #5/128 (76.2), AutomationBench 36.1%, Terminal-Bench Science 57.0%, OSWorld 2.0 +7pp; caps at broken-search disclosure 2.1%. Enrichment (2026-11-08): added AA Briefcase 1555, AA AutomationBench 64.9%, AA Terminal-Bench 4.0 56.1%, GDP.pdf 31.0%, AA-AnalystAgent 50.0%, MazeBench 17%, Hermes Index 57.1%, Hermes Bench 73.9%, GDPval-AA 54.8% normalized/1609 Elo, AA Intelligence 54.6%, AA-HLE 52.9%, AA-Omniscience 42.0%/61.8%/51.9%, CritPt 31.7%, MLCR 38.3%, AA-LCR 83.0%, AA-IFBench not individually reported, ExtractBench (LlamaIndex) 95.31%, ExtractBench Pro 12%, ParseBench 69.63%, AA-MMMU-Pro 86.0%, Design Arena 1310. Corroborates band; no change.
- **Reasoning: 93/100.** ARC-AGI-1 96.5%, ARC-AGI-2 94.2%, ARC-AGI-3 52.7%, STEMBench 2.76, FrontierMath Tier4 100%, AA Intelligence 52; reasoning lane #2/28 (90.5). Enrichment adds BioBasicsBench 62.6%, STEMBench 2.76, AA Intelligence 54.6%, AA-HLE 52.9%, AA-Omniscience 42.0%/61.8%/51.9%, CritPt 31.7%, MLCR 38.3%, AA-LCR 83.0%, HealthBench (raw) 56.7%, (length-adjusted) 58.5%, HealthBench Professional 64.2%, Professional (raw) 67.2%, HealthBench Hard 36.2%, FrontierMath v2 Tiers 1-3 93.684%, Tier 4 100.000%, ARC-AGI-3 Provider Adapter 96.18%. Corroborates band; no change.
- **Context window: 90/100.** 1.05M window; caps at no published MRCR retrieval. Enrichment adds AA-LCR 83.0%. Corroborates band; no change.
- **Multimodal: 85/100.** Text/image in, text out; HealthBench 56.7%; multimodal lane 87.3. Enrichment adds ExtractBench (LlamaIndex) 95.31%, ExtractBench Pro 12%, ParseBench 69.63%, AA-MMMU-Pro 86.0%, Design Arena 1310. Corroborates band; no change.
- **Coding: 84/100.** DeepSWE 71.9%, coding lane #8/150 (70.9), Bug Hunt 44.3 fixes; caps at unverified SWE-bench. Enrichment adds ScarfBench 68.4%, DeepSWE 71.9%, AA-SciCode 54.2%, Bug Hunt 44.3 fixes, FrontierCode 2.0 39.0%, ExtractBench (LlamaIndex) 95.31%, ExtractBench Pro 12%, ParseBench 69.63%, AA-MMMU-Pro 86.0%, Design Arena 1310. Corroborates band; no change.
- **Cost efficiency: 85/100.** Good value $2/$10 per 1M with Astra-class capability.
- **Overall Score: 88/100.** Mean of five quality dims (BenchLM aggregate 84.06); best-fit for high-capability agentic + reasoning at mid cost. Enrichment (2026-11-08) added new verified rows (AA Briefcase 1555; AA AutomationBench 64.9%; AA Terminal-Bench 4.0 56.1%; GDP.pdf 31.0%; AA-AnalystAgent 50.0%; MazeBench 17%; Hermes Index 57.1%; Hermes Bench 73.9%; GDPval-AA 54.8% normalized/1609 Elo; AA Intelligence 54.6%; AA-HLE 52.9%; AA-Omniscience 42.0%/61.8%/51.9%; CritPt 31.7%; MLCR 38.3%; AA-LCR 83.0%; BioBasicsBench 62.6%; STEMBench 2.76; HealthBench (raw) 56.7%; (length-adjusted) 58.5%; HealthBench Professional 64.2%; Professional (raw) 67.2%; HealthBench Hard 36.2%; FrontierMath v2 Tiers 1-3 93.684%; Tier 4 100.000%; ARC-AGI-3 Provider Adapter 96.18%; ExtractBench (LlamaIndex) 95.31%; ExtractBench Pro 12%; ParseBench 69.63%; AA-MMMU-Pro 86.0%; Design Arena 1310; ScarfBench 68.4%; DeepSWE 71.9%; AA-SciCode 54.2%; Bug Hunt 44.3 fixes; FrontierCode 2.0 39.0%). No dimension band moved; Overall unchanged at 88.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-6.1 Sol](https://benchlm.ai/models/gpt-6-1-sol)
  - [Artificial Analysis — GPT-6.1 Sol](https://artificialanalysis.ai/models/gpt-6-1-sol)
  - [OpenAI — GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [OpenAI GPT-6.1 Sol system card addendum](https://cdn.openai.com/pdf/38e3efcf-545e-44cd-99ec-2b7eb395f4cc/oai_GPT_6_1_Sol.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).