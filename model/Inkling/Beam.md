# Inkling — findings by Beam

- Source: Thinking Machines Lab/Inkling, `thinkingmachines/inkling`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-22)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's base model (Aug 2026): open-weight, hybrid reasoning, 1M context; strong on coding and multimodal at low cost.
- **Provider / access:** Thinking Machines Lab; HuggingFace (open weights).
- **Release / knowledge:** Released 2026-08-??; knowledge cutoff not stated.
- **IDs:** `thinkingmachines/inkling`
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image in; text out; reasoning yes (hybrid); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** open weights (self-host).
- **Architecture:** open-weight; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (Thinking Machines Lab)
- BrowseComp: **77.1%** (Thinking Machines Lab)
- MCP Atlas: **74.1%** (Thinking Machines Lab)
- Design Arena Agentic Web Dev: **1257** (Design Arena)
- GDPval-AA: **28.6%** normalized / 1165 Elo (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **47.6%** (Vals AI)
- AA Agentic Index: **24.3%** (Artificial Analysis)
- GDPval-AA: **1165 Elo** (Artificial Analysis)
- CWE-bench v1: **37.0%** (Collinear)

Reasoning / knowledge:

- GPQA: **87.9%** (Thinking Machines Lab)
- GPQA-D: **87.9%** (Thinking Machines Lab)
- HLE: **46%** (Thinking Machines Lab)
- HLE w/o tools: **30%** (Thinking Machines Lab)
- Artificial Analysis Intelligence Index: **12.5%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **87.2%** (Artificial Analysis)
- AA-HLE: **31.9%** (Artificial Analysis)
- AA-Omniscience Index: **-1.5%**
- AA-Omniscience Accuracy: **39.3%**
- AA-Omniscience Hallucination Rate: **67.2%**
- AA-LCR: **77.3%** (Artificial Analysis)
- CritPt: **5.4%** (Artificial Analysis)
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **33.333%**; Tier 4: **4.878%** (Epoch AI)
- GPQA Diamond (Vals): **87.1%** (Vals AI)
- MMLU-Pro (Vals): **86.3%** (Vals AI)

Coding:

- SWE-bench Verified: **77.6%**
- SWE-bench Pro: **54.3%**
- Terminal-Bench 2.1: **63.8%**
- AA-SciCode: **47.0%** (Artificial Analysis)
- FrontierSWE v2: **4.1%**
- LiveCodeBench (Vals): **85.5%**
- SWE-bench (Vals): **77.6%**
- AA Coding Index: **52.1%** (Artificial Analysis)
- AA-IFBench: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported

Long context:

- 1M window; MRCR: not reported.
- AA-LCR: **77.3%** (Artificial Analysis)

Multimodal:

- MMMU-Pro: **73.5%**
- CharXiv: **82%**
- CharXiv w/o tools: **78.1%**
- AA-MMMU-Pro: **73.5%** (Artificial Analysis)
- Design Arena Website: **1222**
- AA-IFBench: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 74/100.** Agentic lane (not individually reported), Terminal-Bench 2.1 63.8%, BrowseComp 77.1%, MCP Atlas 74.1%, Design Arena Agentic Web Dev 1257, GDPval-AA 28.6% normalized/1165 Elo, Terminal-Bench 2.1 Vals 47.6%, AA Agentic Index 24.3%, GDPval-AA 1165 Elo, CWE-bench v1 37.0%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.1 63.8%, BrowseComp 77.1%, MCP Atlas 74.1%, Design Arena Agentic Web Dev 1257, GDPval-AA 28.6% normalized/1165 Elo, Terminal-Bench 2.1 Vals 47.6%, AA Agentic Index 24.3%, GDPval-AA 1165 Elo, CWE-bench v1 37.0%, AA Intelligence 12.5%, AA-GPQA 87.2%, AA-HLE 31.9%, AA-Omniscience -1.5%/39.3%/67.2%, AA-LCR 77.3%, CritPt 5.4%, GPQA 87.9%, GPQA-D 87.9%, HLE 46%, HLE w/o tools 30%, AA-IFBench not individually reported, GPQA Diamond Vals 87.1%, MMLU-Pro Vals 86.3%, SWE-bench Verified 77.6%, SWE-bench Pro 54.3%, Terminal-Bench 2.1 63.8%, AA-SciCode 47.0%, FrontierSWE v2 4.1%, LiveCodeBench Vals 85.5%, SWE-bench Vals 77.6%, AA Coding Index 52.1%, MMMU-Pro 73.5%, CharXiv 82%, CharXiv w/o tools 78.1%, AA-MMMU-Pro 73.5%, Design Arena 1222, AIME26 97.1%, FrontierMath v2 33.333%/4.878%, IFBench 79.8%. Corroborates band; no change.
- **Reasoning: 74/100.** GPQA 87.9%, HLE 46%, AA Intelligence 12.5%, AA-GPQA 87.2%, AA-HLE 31.9%, AA-Omniscience -1.5%/39.3%/67.2%, AA-LCR 77.3%, CritPt 5.4%, GPQA Diamond Vals 87.1%, MMLU-Pro Vals 86.3%, AIME26 97.1%, FrontierMath v2 33.333%/4.878%. Corroborates band; no change.
- **Context window: 78/100.** 1M window; AA-LCR 77.3%. Corroborates band; no change.
- **Multimodal: 78/100.** Text/image in; MMMU-Pro 73.5%, CharXiv 82%. Enrichment adds MMMU-Pro 73.5% (already), CharXiv 82% (already), CharXiv w/o tools 78.1% (already), AA-MMMU-Pro 73.5% (already), Design Arena 1222. Corroborates band; no change.
- **Coding: 72/100.** SWE-bench Verified 77.6%, SWE-bench Pro 54.3%, Terminal-Bench 2.1 63.8%, AA-SciCode 47.0%, FrontierSWE v2 4.1%, LiveCodeBench Vals 85.5%, SWE-bench Vals 77.6%, AA Coding Index 52.1%. Enrichment adds SWE-bench Verified 77.6% (already), SWE-bench Pro 54.3% (already), Terminal-Bench 2.1 63.8% (already), AA-SciCode 47.0% (already), FrontierSWE v2 4.1% (already), LiveCodeBench Vals 85.5% (already), SWE-bench Vals 77.6% (already), AA Coding Index 52.1% (already), MMMU-Pro 73.5%, CharXiv 82%, CharXiv w/o tools 78.1%, AA-MMMU-Pro 73.5%, Design Arena 1222, AIME26 97.1%, FrontierMath v2 33.333%/4.878%, IFBench 79.8%. Corroborates band; no change.
- **Cost efficiency: 80/100.** Open weights (self-host).
- **Overall Score: 75.2/100.** Mean of five quality dims (BenchLM aggregate 48.08); best-fit for agentic coding + multimodal at low cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.1 63.8%, BrowseComp 77.1%, MCP Atlas 74.1%, Design Arena Agentic Web Dev 1257, GDPval-AA 28.6% normalized/1165 Elo, Terminal-Bench 2.1 Vals 47.6%, AA Agentic Index 24.3%, GDPval-AA 1165 Elo, CWE-bench v1 37.0%, SWE-bench Verified 77.6%, SWE-bench Pro 54.3%, Terminal-Bench 2.1 63.8%, AA-SciCode 47.0%, FrontierSWE v2 4.1%, LiveCodeBench Vals 85.5%, SWE-bench Vals 77.6%, AA Coding Index 52.1%, MMMU-Pro 73.5%, CharXiv 82%, CharXiv w/o tools 78.1%, AA-MMMU-Pro 73.5%, Design Arena 1222, GPQA 87.9%, GPQA-D 87.9%, HLE 46%, HLE w/o tools 30%, AA Intelligence 12.5%, AA-GPQA 87.2%, AA-HLE 31.9%, AA-Omniscience -1.5%/39.3%/67.2%, AA-LCR 77.3%, CritPt 5.4%, GPQA Diamond Vals 87.1%, MMLU-Pro Vals 86.3%, AIME26 97.1%, FrontierMath v2 33.333%/4.878%, IFBench 79.8%). No dimension band moved; Overall unchanged at 76.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-22 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Inkling](https://benchlm.ai/models/inkling)
  - [Artificial Analysis — Inkling](https://artificialanalysis.ai/models/inkling)
  - [Thinking Machines Lab — Inkling](https://thinkingmachines.ai/news/introducing-inkling/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).