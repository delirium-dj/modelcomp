# Claude Fable 5 — findings by Beam

- Source: Anthropic/Claude Fable 5, `anthropic/claude-fable-5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-22 re-run)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's frontier model (Jul 1, 2026 restored after export-control suspension) for ambitious coding and professional work; 5th-generation intelligence at half Fable 5.1's cost. SOTA on Frontier-Bench and GDPval-AA; strong cyber (below Mythos 5).
- **Provider / access:** Anthropic API `claude-fable-5`; AWS Bedrock (restored Jul 1); OpenRouter. Requires 30-day data retention.
- **Release / knowledge:** Released 2026-06-09 (suspended Jun 12, restored Jul 1); knowledge cutoff January 2026 (per llmbenchmark Oct 22).
- **IDs:** `anthropic/claude-fable-5`
- **Context window:** 1,000,000+ tokens; max output not stated (128K-class).
- **Modalities:** text, image, file in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $10.00 / 1M input, $50.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **75.9** (#6/128)
- Terminal-Bench 3.0: **34.0%**
- Terminal-Bench 2.1: **84.3%**
- OSWorld-Verified: **85%**
- Terminal-Bench 2.1 (Vals): **80.5%**
- ApprenticeBench: **34%**; MazeBench: **11%**
- GDPval-AA: **1747 Elo**
- BrowseComp: **88.0%** (AA Oct 22; was "coming soon")
- HLE w/ tools: coming soon
- DeepSearchQA: coming soon
- AA Agentic Index: **51.0%** (Artificial Analysis)
- AA-AnalystAgent: **48.8%** (Artificial Analysis)
- AA ITBench: not individually reported
- AA Tau3 Banking: **38.1%** (Artificial Analysis)
- aaTerminalBench21: **84.6%** (Artificial Analysis)
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- MazeBench: **11%** (MazeBench)
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- OSWorld 2.1: not individually reported

Reasoning / knowledge:

- ARC-AGI-1: **98.50%**; ARC-AGI-2: **89.2%**
- FrontierMath v2 (Tiers 1-3): **87.018%**; Tier 4: **90.200%**
- GPQA Diamond (Vals): **93.2%**
- MMLU-Pro (Vals): **91.5%**
- HLE: not individually reported (Fable 5.1 HLE 65%)
- AA Intelligence Index: **49.6** (AA Oct 22; was not individually reported)
- AA-GPQA Diamond: **92.6%** (Artificial Analysis)
- AA-HLE: **55.5%** (Artificial Analysis)
- AA-Omniscience Index: **43.3%**
- AA-Omniscience Accuracy: **65.4%**
- AA-Omniscience Hallucination Rate: **63.6%**
- AA-LCR: **82.3%** (Artificial Analysis)
- CritPt: **28.6%** (Artificial Analysis)
- GPQA Diamond (Vals): **93.2%** (Vals AI)
- MMLU-Pro (Vals): **91.5%** (Vals AI)
- AA-IFBench: **63.5%** (Artificial Analysis)
- Gray Swan IPI: **4.6%** (Google)

Coding:

- SWE-bench Verified: **95%**
- SWE-bench Pro: **80%**
- FrontierSWE v2: **47.0%**
- FrontierCode 1.1 Main: **53.5%**
- CursorBench 3.2: **70.5%**; CursorBench 3.1: **70.6%**
- VulcanBench v3: **89.5%**
- LiveCodeBench: **89.8%** (AA Oct 22)
- Coding public-lane (BenchLM): **71.3** (#7/150)
- AA-SciCode: **61.0%** (Artificial Analysis)
- LiveCodeBench (Vals): **89.8%** (Vals AI)
- AA Coding Index: **76.5%** (Artificial Analysis)
- CursorBench 4.0: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- Blueprint-Bench 2: **38.6%**
- OfficeQA Pro: **57.9%**
- ScreenSpot-Pro: **87.3%**
- Design Arena Website: **1297**

Long context:

- 1M+ window; MRCR: no verified public score found.

Multimodal:

- Blueprint-Bench 2: **38.6%**
- OfficeQA Pro: **57.9%**
- ScreenSpot-Pro: **87.3%**
- Design Arena Website: **1297**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 87/100.** Agentic lane #6/128 (75.9), Terminal-Bench 2.1 84.3%, OSWorld-Verified 85%, BrowseComp 88.0% (now verified), ApprenticeBench 34%, MazeBench 11%; caps at unverified DeepSearchQA. Enrichment (2026-11-08): added AA Agentic Index 51.0%, AA-AnalystAgent 48.8%, AA Tau3 Banking 38.1%, aaTerminalBench21 84.6%, AA-IFBench 63.5%, Gray Swan IPI 4.6%. Corroborates band; no change.
- **Reasoning: 90/100.** ARC-AGI-1 98.5%, ARC-AGI-2 89.2%, FrontierMath Tier4 90.2%, GPQA 93.2%, AA Intelligence 49.6; caps at no published HLE. Enrichment adds AA-GPQA 92.6%, AA-HLE 55.5%, AA-Omniscience 43.3%/65.4%/63.6%, AA-LCR 82.3%, CritPt 28.6%, GPQA Diamond Vals 93.2%, MMLU-Pro Vals 91.5%, AA-IFBench 63.5%, Gray Swan IPI 4.6%. Corroborates band; no change.
- **Context window: 92/100.** 1M+ window; caps at no published MRCR retrieval.
- **Multimodal: 80/100.** Text/image/file in; Blueprint-Bench 2 38.6%, OfficeQA Pro 57.9%. Enrichment adds ScreenSpot-Pro 87.3%, Design Arena 1297. Corroborates band; no change.
- **Coding: 88/100.** SWE-bench Verified 95%, SWE-bench Pro 80%, FrontierCode 53.5%, VulcanBench 89.5%; coding lane #7/150 (71.3). Enrichment adds AA-SciCode 61.0%, LiveCodeBench 89.8%, AA Coding Index 76.5%, ScreenSpot-Pro 87.3%, Design Arena 1297. Corroborates band; no change.
- **Cost efficiency: 60/100.** Premium $10/$50 per 1M.
- **Overall Score: 87/100.** Mean of five quality dims (tool 87, reasoning 90, context 92, multimodal 80, coding 88); BenchLM aggregate 81.25; best-fit for frontier coding + reasoning at premium cost (superseded by Fable 5.1). Enrichment (2026-11-08) added new verified rows (AA Agentic Index 51.0%; AA-AnalystAgent 48.8%; AA Tau3 Banking 38.1%; aaTerminalBench21 84.6%; AA-IFBench 63.5%; Gray Swan IPI 4.6%; AA-GPQA 92.6%; AA-HLE 55.5%; AA-Omniscience 43.3%/65.4%/63.6%; AA-LCR 82.3%; CritPt 28.6%; GPQA Diamond Vals 93.2%; MMLU-Pro Vals 91.5%; AA-SciCode 61.0%; LiveCodeBench 89.8%; AA Coding Index 76.5%; ScreenSpot-Pro 87.3%; Design Arena 1297). No dimension band moved; Overall unchanged at 87.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-22 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Fable 5](https://benchlm.ai/models/claude-fable)
  - [Artificial Analysis — Claude Fable 5](https://artificialanalysis.ai/models/claude-fable-5)
  - [Anthropic — Claude Fable 5](https://www.anthropic.com/news/claude-fable-5)
  - [AWS Bedrock — Claude](https://aws.amazon.com/bedrock/claude/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).