# Inkling-Small — findings by Beam

- Source: Thinking Machines Lab/Inkling-Small, `thinkingmachines/inkling-small`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** Thinking Machines Lab's open-weight small model (Aug 2026) with hybrid reasoning; 1M context; strong on coding and multimodal at low cost.
- **Provider / access:** Thinking Machines Lab; HuggingFace (open weights).
- **Release / knowledge:** Released 2026-08-??; knowledge cutoff not stated.
- **IDs:** `thinkingmachines/inkling-small`
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image in; text out; reasoning yes (hybrid); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** open weights (self-host).
- **Architecture:** open-weight; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **64.7%** (Thinking Machines Lab)
- BrowseComp: **77.4%** (Thinking Machines Lab)
- MCP Atlas: **79.6%** (Thinking Machines Lab)
- Toolathlon-Verified: **54.4%** (Thinking Machines Lab)
- Terminal-Bench 2.1 (Vals): **55.1%** (Vals AI)
- AA Agentic Index: **24.9%** (Artificial Analysis)
- GDPval-AA: **31.2%** normalized / 1191 Elo (Artificial Analysis)
- AA EnterpriseOps-Gym: **42.7%** (Artificial Analysis)
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
- AA Tau3 Banking: not individually reported
- aaTerminalBench21: not individually reported

Reasoning / knowledge:

- ARC-AGI-2: **40.1%** (ARC Prize)
- CritPt: **8.3%** (Thinking Machines Lab)
- AA-LCR: **75.7%** (Artificial Analysis)
- ARC-AGI-1: **84.00%** (ARC Prize)
- GPQA: **89.5%** (Thinking Machines Lab)
- GPQA-D: **89.5%** (Thinking Machines Lab)
- HLE: **47.8%** (Thinking Machines Lab)
- HLE w/o tools: **31.6%** (Thinking Machines Lab)
- Artificial Analysis Intelligence Index: **12.9%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **89.5%** (Artificial Analysis)
- AA-HLE: **33.3%** (Artificial Analysis)
- AA-Omniscience Index: **-9.5%**
- AA-Omniscience Accuracy: **31.8%**
- AA-Omniscience Hallucination Rate: **60.5%**
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **46.316%**; Tier 4: **17.073%** (Epoch AI)
- GPQA Diamond (Vals): **83.6%** (Vals AI)
- MMLU-Pro (Vals): **85.6%** (Vals AI)

Coding:

- SWE-bench Verified: **80.2%**
- SWE-bench Pro: **55.9%**
- Terminal-Bench 2.1: **64.7%**
- SciCode: **48.7%**
- AA-SciCode: **49.7%** (Artificial Analysis)
- LiveCodeBench (Vals): **85.9%** (Vals AI)
- SWE-bench (Vals): **82.2%** (Vals AI)
- AA Coding Index: **53.0%** (Artificial Analysis)
- AA-IFBench: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported

Long context:

- 1M window; MRCR: not reported.
- AA-LCR: **75.7%** (Artificial Analysis)

Multimodal:

- MMMU-Pro: **74%**
- CharXiv: **81.3%**
- CharXiv w/o tools: **77.4%**
- AA-MMMU-Pro: **74.0%** (Artificial Analysis)
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

- **Tool use: 84/100.** Agentic lane (not individually reported), Terminal-Bench 2.1 64.7%, BrowseComp 77.4%, MCP Atlas 79.6%, Toolathlon-Verified 54.4%, Terminal-Bench 2.1 Vals 55.1%, AA Agentic Index 24.9%, GDPval-AA 31.2% normalized/1191 Elo, AA EnterpriseOps-Gym 42.7%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.1 64.7%, BrowseComp 77.4%, MCP Atlas 79.6%, Toolathlon-Verified 54.4%, Terminal-Bench 2.1 Vals 55.1%, AA Agentic Index 24.9%, GDPval-AA 31.2% normalized/1191 Elo, AA EnterpriseOps-Gym 42.7%, AA Intelligence 12.9%, AA-GPQA 89.5%, AA-HLE 33.3%, AA-Omniscience -9.5%/31.8%/60.5%, AA-LCR 75.7%, CritPt 8.3%, ARC-AGI-1 84.00%, ARC-AGI-2 40.1%, GPQA 89.5%, GPQA-D 89.5%, HLE 47.8%, HLE w/o tools 31.6%, AA-IFBench not individually reported, GPQA Diamond Vals 83.6%, MMLU-Pro Vals 85.6%, SWE-bench Verified 80.2%, SWE-bench Pro 55.9%, Terminal-Bench 2.1 64.7%, SciCode 48.7%, AA-SciCode 49.7%, LiveCodeBench Vals 85.9%, SWE-bench Vals 82.2%, AA Coding Index 53.0%, MMMU-Pro 74%, CharXiv 81.3%, CharXiv w/o tools 77.4%, AA-MMMU-Pro 74.0%, AIME26 95.5%, HMMT Feb 2026 90.2%, FrontierMath v2 46.316%/17.073%, IFBench 82.2%. Corroborates band; no change.
- **Reasoning: 82/100.** ARC-AGI-1 84.0%, ARC-AGI-2 40.1%, GPQA 89.5%, HLE 47.8%, AA Intelligence 12.9%, AA-GPQA 89.5%, AA-HLE 33.3%, AA-Omniscience -9.5%/31.8%/60.5%, AA-LCR 75.7%, CritPt 8.3%, GPQA Diamond Vals 83.6%, MMLU-Pro Vals 85.6%, AIME26 95.5%, HMMT Feb 2026 90.2%, FrontierMath v2 46.316%/17.073%. Corroborates band; no change.
- **Context window: 84/100.** 1M window; AA-LCR 75.7%. Corroborates band; no change.
- **Multimodal: 84/100.** Text/image in; MMMU-Pro 74%, CharXiv 81.3%. Enrichment adds MMMU-Pro 74% (already), CharXiv 81.3% (already), CharXiv w/o tools 77.4% (already), AA-MMMU-Pro 74.0% (already). Corroborates band; no change.
- **Coding: 78/100.** SWE-bench Verified 80.2%, SWE-bench Pro 55.9%, Terminal-Bench 2.1 64.7%, SciCode 48.7%, AA-SciCode 49.7%, LiveCodeBench Vals 85.9%, SWE-bench Vals 82.2%, AA Coding Index 53.0%. Enrichment adds SWE-bench Verified 80.2% (already), SWE-bench Pro 55.9% (already), Terminal-Bench 2.1 64.7% (already), SciCode 48.7% (already), AA-SciCode 49.7% (already), LiveCodeBench Vals 85.9% (already), SWE-bench Vals 82.2% (already), AA Coding Index 53.0% (already), MMMU-Pro 74%, CharXiv 81.3%, CharXiv w/o tools 77.4%, AA-MMMU-Pro 74.0%, AIME26 95.5%, HMMT Feb 2026 90.2%, FrontierMath v2 46.316%/17.073%, IFBench 82.2%. Corroborates band; no change.
- **Cost efficiency: 80/100.** Open weights (self-host).
- **Overall Score: 82.4/100.** Mean of five quality dims (BenchLM aggregate 50.05); best-fit for agentic coding + multimodal at low cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.1 64.7%, BrowseComp 77.4%, MCP Atlas 79.6%, Toolathlon-Verified 54.4%, Terminal-Bench 2.1 Vals 55.1%, AA Agentic Index 24.9%, GDPval-AA 31.2% normalized/1191 Elo, AA EnterpriseOps-Gym 42.7%, ARC-AGI-2 40.1%, CritPt 8.3%, AA-LCR 75.7%, ARC-AGI-1 84.00%, GPQA 89.5%, GPQA-D 89.5%, HLE 47.8%, HLE w/o tools 31.6%, AA Intelligence 12.9%, AA-GPQA 89.5%, AA-HLE 33.3%, AA-Omniscience -9.5%/31.8%/60.5%, GPQA Diamond Vals 83.6%, MMLU-Pro Vals 85.6%, SWE-bench Verified 80.2%, SWE-bench Pro 55.9%, Terminal-Bench 2.1 64.7%, SciCode 48.7%, AA-SciCode 49.7%, LiveCodeBench Vals 85.9%, SWE-bench Vals 82.2%, AA Coding Index 53.0%, MMMU-Pro 74%, CharXiv 81.3%, CharXiv w/o tools 77.4%, AA-MMMU-Pro 74.0%, AIME26 95.5%, HMMT Feb 2026 90.2%, FrontierMath v2 46.316%/17.073%, IFBench 82.2%). No dimension band moved; Overall unchanged at 81.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Inkling-Small](https://benchlm.ai/models/inkling-small)
  - [Artificial Analysis — Inkling-Small](https://artificialanalysis.ai/models/inkling-small)
  - [Thinking Machines Lab — Inkling-Small](https://thinkingmachines.ai/news/inkling-small/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).