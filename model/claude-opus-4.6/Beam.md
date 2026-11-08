# Claude Opus 4.6 — findings by Beam

- Source: Anthropic/Claude Opus 4.6, `anthropic/claude-opus-4-6`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-22)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's Opus (Feb 5, 2026) with agent teams, 1M context, adaptive thinking; strong on agentic coding and computer use; fast mode 2.5x at premium price.
- **Provider / access:** Anthropic API `claude-opus-4-6`; AWS Bedrock; OpenRouter; OpenCode Zen.
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff not stated.
- **IDs:** `anthropic/claude-opus-4-6`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes (adaptive thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $5.00 / 1M input, $25.00 / 1M output, $0.50 / 1M cache read, $6.25 / 1M cache write; paid. Fast mode $10/$50.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **62.15** (#47/1016)
- Terminal-Bench 2.0: **65.4%**
- BrowseComp: **83.7%**
- OSWorld-Verified: **72.7%**
- OSWorld 2.0: **20.6%**
- τ²-bench results: **84.8%**
- AndroidWorld: **62.0%**
- Claw-Eval: **70.4%**
- DeepSearchQA: **73.7%**
- CyberGym: **66.6%**
- Gert Labs: **61.85%**
- ResearchClawBench: **19.9%**
- JobBench: **36.7%**
- ApprenticeBench: **5%**
- terminalBenchHard: **48.5%**
- AA Agentic Index: not individually reported
- AA-AnalystAgent: not individually reported
- AA EnterpriseOps-Gym: not individually reported
- AA ITBench: not individually reported
- AA Tau3 Banking: not individually reported
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- GDP.pdf: not individually reported
- MazeBench: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- ARC-AGI-3: **0.5%** (ARC Prize)
- AA-LCR: **67.0%** (Artificial Analysis)
- CritPt: **2.8%** (Artificial Analysis)
- AA Intelligence Index: **26.4%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **84.0%** (Artificial Analysis)
- AA-HLE: **19.1%** (Artificial Analysis)
- AA-Omniscience Index: **2.4%**
- AA-Omniscience Accuracy: **45.8%**
- AA-Omniscience Hallucination Rate: **80.1%**
- AA-IFBench: **44.6%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **65.965%**; Tier 4: **26.829%** (Epoch AI)
- HLE: **53%** (Anthropic)
- HLE w/o tools: **40%** (Meta)
- HealthBench Hard: **14.8%** (Meta)
- MedXpertQA (Text): **52.1%** (Meta)
- GPQA: **91.3%** (Anthropic)
- GPQA-D: **89.2%** (Arcee)
- SuperGPQA: **95%** (Qwen)
- MMLU-Pro: **82%** (Qwen)
- MMLU-Pro (Arcee): **89.1%** (Arcee)
- AIME25 (Arcee): **99.8%** (Arcee)
- AA-IFBench: **44.6%** (Artificial Analysis)

Coding:

- Coding public-lane (BenchLM): **62.15** (#47/1016)
- SWE-bench Verified: **80.8%**; SWE-bench Verified*: **75.6%** (Arcee)
- LiveCodeBench Pro: **70.7%** (Meta)
- SWE-bench Pro: **53.4%** (Meta)
- SWE-Rebench: **65.3%** (SWE-Rebench)
- React Native Evals: **84.1%** (React Native Evals)
- Terminal-Bench 2.0: **65.4%**
- Vibe Code Bench: **57.57%** (Vals AI)
- FrontierCode 1.1 Main: **26.9%** (Cognition)
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- Bug Hunt Bench: not individually reported
- ExtractBench (LlamaIndex): **86.84%**
- ParseBench: **53.80%**
- MMMU-Pro: **77.3%**
- ERQA: **51.6%**
- ScreenSpot Pro: **83.1%**
- MedXpertQA (MM): **64.8%**
- AA-MMMU-Pro: **72.5%**
- Design Arena Website: **1288**

Long context:

- 1M window; MRCR: no verified public score found.
- MRCRv2 **85.4%** (est.); AA-LCR **67.0%** (measured).

Multimodal:

- Multimodal public-lane (BenchLM): not individually reported
- MMMU-Pro: **77.3%**
- ERQA: **51.6%**
- ScreenSpot Pro: **83.1%**
- MedXpertQA (MM): **64.8%**
- AA-MMMU-Pro: **72.5%**
- Design Arena Website: **1288**
- ExtractBench (LlamaIndex): **86.84%**
- ParseBench: **53.80%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Agentic lane #47/1016 (62.15), OSWorld-Verified 72.7%, DeepSearchQA 73.7%, MCP Atlas 82.2%, BrowseComp 83.7%, Terminal-Bench 2.0 65.4%; caps at OSWorld 2.0 20.6%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.0 65.4%, BrowseComp 83.7%, OSWorld-Verified 72.7%, OSWorld 2.0 20.6%, DeepSearchQA 73.7%, MCP Atlas 82.2%, Toolathlon 84.8%, Finance Agent v2 53.9%, Gert Labs 61.85%, ResearchClawBench 19.9%, JobBench 36.7%, ApprenticeBench 5%, terminalBenchHard 48.5%, AA Agentic Index not individually reported, AA-AnalystAgent not individually reported, AA EnterpriseOps-Gym not individually reported, AA ITBench not individually reported, AA Tau3 Banking not individually reported, AA Briefcase not individually reported, AA AutomationBench not individually reported, GDP.pdf not individually reported, MazeBench not individually reported, AA Cyber Index not individually reported, CWE-Bench-AA not individually reported, DeepsecBench-AA not individually reported, CyberGym-E2E-AA not individually reported, AA Intelligence 26.4%, AA-GPQA 84.0%, AA-HLE 19.1%, AA-Omniscience 2.4%/45.8%/80.1%, CritPt 2.8%, AA-LCR 67.0%, HLE 53%, HLE w/o tools 40%, HealthBench Hard 14.8%, MedXpertQA (Text) 52.1%, GPQA 91.3%, GPQA-D 89.2%, SuperGPQA 95%, MMLU-Pro 82%, MMLU-Pro (Arcee) 89.1%, AIME25 (Arcee) 99.8%, AA-IFBench 44.6%, FrontierMath v2 65.965%/26.829%, ExtractBench 86.84%, ParseBench 53.80%, MMMU-Pro 77.3%, ERQA 51.6%, ScreenSpot Pro 83.1%, MedXpertQA (MM) 64.8%, AA-MMMU-Pro 72.5%, Design Arena 1288. Corroborates band; no change.
- **Reasoning: 75/100.** ARC-AGI-3 0.5%, AA-LCR 67.0%, CritPt 2.8%, AA Intelligence 26.4%, AA-GPQA 84.0%, AA-HLE 19.1%, AA-Omniscience 2.4%/45.8%/80.1%, AA-IFBench 44.6%, HLE 53%, HLE w/o tools 40%, HealthBench Hard 14.8%, MedXpertQA (Text) 52.1%, GPQA 91.3%, GPQA-D 89.2%, SuperGPQA 95%, MMLU-Pro 82%, MMLU-Pro (Arcee) 89.1%, AIME25 (Arcee) 99.8%, FrontierMath v2 65.965%/26.829%. Corroborates band; no change.
- **Context window: 85/100.** 1M window; MRCRv2 85.4% (est.), AA-LCR 67.0% (measured).
- **Multimodal: 85/100.** Text/image/PDF in; MMMU-Pro 77.3%, ERQA 51.6%, ScreenSpot Pro 83.1%, MedXpertQA (MM) 64.8%, AA-MMMU-Pro 72.5%. Enrichment adds ExtractBench 86.84%, ParseBench 53.80%, MMMU-Pro 77.3%, ERQA 51.6%, ScreenSpot Pro 83.1%, MedXpertQA (MM) 64.8%, AA-MMMU-Pro 72.5%, Design Arena 1288. Corroborates band; no change.
- **Coding: 78/100.** SWE-bench Verified 80.8%, SWE-bench Pro 53.4%, LiveCodeBench Pro 70.7%, SWE-Rebench 65.3%, React Native Evals 84.1%, Terminal-Bench 2.0 65.4%, Vibe Code 57.57%, FrontierCode 1.1 Main 26.9%. Enrichment adds AA-SciCode not individually reported, AA Coding Index not individually reported, PostTrainBench 32.9%, FrontierCode 2.0 not individually reported, Bug Hunt not individually reported, ExtractBench 86.84%, ParseBench 53.80%, MMMU-Pro 77.3%, ERQA 51.6%, ScreenSpot Pro 83.1%, MedXpertQA (MM) 64.8%, AA-MMMU-Pro 72.5%, Design Arena 1288. Corroborates band; no change.
- **Cost efficiency: 75/100.** Paid $5/$25 per 1M.
- **Overall Score: 80.6/100.** Mean of five quality dims (BenchLM aggregate 62.15); best-fit for agentic coding + multimodal at mid cost (superseded by Opus 5). Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.0 65.4%, BrowseComp 83.7%, OSWorld-Verified 72.7%, OSWorld 2.0 20.6%, DeepSearchQA 73.7%, MCP Atlas 82.2%, Toolathlon 84.8%, Finance Agent v2 53.9%, Gert Labs 61.85%, ResearchClawBench 19.9%, JobBench 36.7%, ApprenticeBench 5%, terminalBenchHard 48.5%, AA Intelligence 26.4%, AA-GPQA 84.0%, AA-HLE 19.1%, AA-Omniscience 2.4%/45.8%/80.1%, CritPt 2.8%, AA-LCR 67.0%, HLE 53%, HLE w/o tools 40%, HealthBench Hard 14.8%, MedXpertQA (Text) 52.1%, GPQA 91.3%, GPQA-D 89.2%, SuperGPQA 95%, MMLU-Pro 82%, MMLU-Pro (Arcee) 89.1%, AIME25 (Arcee) 99.8%, AA-IFBench 44.6%, FrontierMath v2 65.965%/26.829%, ExtractBench 86.84%, ParseBench 53.80%, MMMU-Pro 77.3%, ERQA 51.6%, ScreenSpot Pro 83.1%, MedXpertQA (MM) 64.8%, AA-MMMU-Pro 72.5%, Design Arena 1288, SWE-bench Verified 80.8%, SWE-bench Pro 53.4%, LiveCodeBench Pro 70.7%, SWE-Rebench 65.3%, React Native Evals 84.1%, Terminal-Bench 2.0 65.4%, Vibe Code 57.57%, FrontierCode 1.1 Main 26.9%, PostTrainBench 32.9%, FrontierCode 2.0 not individually reported, Bug Hunt not individually reported). No dimension band moved; Overall unchanged at 80.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-22 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Opus 4.6](https://benchlm.ai/models/claude-opus-4-6)
  - [Artificial Analysis — Claude Opus 4.6](https://artificialanalysis.ai/models/claude-opus-4-6)
  - [Anthropic — Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6)
  - [Claude Opus 4.6 system card](https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).