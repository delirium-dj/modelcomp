# Claude Fable 5.1 — findings by Beam

- Source: Anthropic/Claude Fable 5.1, `anthropic/claude-fable-5-1`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-22 re-run)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's frontier model (Sep 1, 2026) for ambitious coding, long-horizon agents, enterprise knowledge work; same underlying model as Mythos 5.1 with cyber/bio safeguards. Handles whole-codebase projects and multi-hour agent runs.
- **Provider / access:** Anthropic API `claude-fable-5-1`; AWS Bedrock `anthropic.claude-fable-5-1`; Google Cloud, Microsoft Foundry. Requires 30-day data retention by default.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, file (PDF) in; text out; reasoning yes (adaptive thinking, effort low..max, default high); tool calling yes; structured output yes. No audio/video.
- **Pricing (as of 2026-11-08):** $10.00 / 1M input, $50.00 / 1M output, $0.25 / 1M cache read; paid. Cache reads 75% cheaper than Fable 5.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **80.9** (#2/128)
- Terminal-Bench 4.0: **55.80%**; Terminal-Bench-Science 0.1: **52.6%**
- Terminal-Bench 2.1 (Vals): **91.4%** (AA Oct 22; prior 85.0%)
- OSWorld 2.0: **41.7%**
- AutomationBench: **31.4%**; AA AutomationBench: **59.4%**
- Toolathlon-Verified: **77.8%**; Pass@3 81.5%; Pass³ 73.1%
- ApprenticeBench: **72%**; MazeBench: **10%**
- CWE-bench v1: **58.0%**
- GDPval-AA: **62.7%** (AA); AA Briefcase: **1674**; **New (Oct 22):** GDPval-AA v2 **1853 Elo** (+130 over Fable 5); AA-Briefcase **1694 Elo**; τ³-Banking **+9** over Fable 5; AA-Omniscience **67.2%** acc / 93.4% attempt / 72.6% hallucination.
- Gray Swan IPI (15 attempts): **1.0%**
- AA Agentic Index: **58.0%** (Artificial Analysis)
- GDP.pdf: **26.2%** (Artificial Analysis)
- AA-AnalystAgent: **57.5%** (Artificial Analysis)
- AA ITBench: **49.5%** (Artificial Analysis)
- aaTerminalBench21: **91.4%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **52.0%** (Artificial Analysis)
- AA Tau3 Banking: **47.2%** (Artificial Analysis)
- OSWorld 2.1: **80.7%** (Anthropic)
- AA Cyber Index: **25.0%** (Artificial Analysis)
- CWE-Bench-AA: **50.8%** (Artificial Analysis)
- DeepsecBench-AA: **23.5%** (Artificial Analysis)
- CyberGym-E2E-AA: **0.8%** (Artificial Analysis)

Reasoning / knowledge:

- HLE: **59.1%** (max effort, AA Oct 22; prior 65%); HLE w/o tools: not separately reported (prior 60.9% at high effort)
- ARC-AGI-1: **97.50%**; ARC-AGI-2: **90%**
- AA Intelligence Index: **66** (max effort, AA Oct 22; prior 53.4)
- MRCR: no verified public score found
- CritPt: **29.7%** (Artificial Analysis)
- MLCR-AA: **15.6%** (Artificial Analysis)
- AA-LCR: **85.3%** (Artificial Analysis)
- GraphWalks BFS 256K-1M: **65.0%** (Google)
- AA-GPQA Diamond: **93.7%** (Artificial Analysis)
- AA-HLE: **59.1%** (Artificial Analysis)
- AA-Omniscience Index: **46.3%**
- AA-Omniscience Accuracy: **68.4%**
- AA-Omniscience Hallucination Rate: **70.0%**
- FrontierMath v2 Tiers 1-3: **90.175%**; Tier 4: **87.805%** (Epoch AI)
- GPQA Diamond (Vals): **93.4%** (Vals AI)
- MMLU-Pro (Vals): **92.4%** (Vals AI)

Coding:

- SciCode: **62.0%** (AA Oct 22); SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**; SWE Multimodal: **54.7%**
- DeepSWE: **67.4%**; FrontierSWE v2: **56.3%**
- Bug Hunt Bench: **43.0 fixes**
- ProgramBench: **87.6%**; CursorBench 3.2: **73.4%**
- Coding public-lane (BenchLM): **76.8** (#3/150)
- AA-SciCode: **63.1%** (Artificial Analysis)
- LiveCodeBench (Vals): **90.5%** (Vals AI)
- AA Coding Index: **81.6%** (Artificial Analysis)
- CursorBench 4.0: **51.8%** (Cursor)
- PostTrainBench v1.1: **40.2%** (Google)
- FrontierCode 2.0: **32.4%** (Cognition)
- Chartography (tools): **90.2%** (Anthropic)
- BenchCAD Vision2Code (tools): **0.962** (Anthropic)
- OfficeQA: **76.9%**; OfficeQA Pro: **65.6%** (Anthropic)
- Design Arena Website: **1308** (OpenRouter)

Long context:

- 1M window; MRCR: no verified public score found.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** Agentic lane #2/128 (80.9), Terminal-Bench 4.0 55.8%, Terminal-Bench 2.1 91.4% (up), ApprenticeBench 72%, Toolathlon-Verified 77.8%, OSWorld 41.7%; caps at AutomationBench 31.4%. Enrichment (2026-11-08): added AA Agentic Index 58.0%, AA AutomationBench 59.4%, AA Tau3 Banking 47.2%, AA-AnalystAgent 57.5%, AA ITBench 49.5%, aaTerminalBench21 91.4%, AA Terminal-Bench 4.0 52.0%, CWE 58.0%, MazeBench 10%, AA Cyber 25.0%, CWE-Bench-AA 50.8%, DeepsecBench 23.5%, CyberGym-E2E 0.8%, OSWorld 2.1 80.7%, GDP.pdf 26.2%. Corroborates band; no change.
- **Reasoning: 90/100.** HLE 59.1% (max), ARC-AGI-1 97.5%, ARC-AGI-2 90%, AA Intelligence 66 (up from 53.4); caps at HLE w/o tools ~60.9% (prior). Enrichment adds CritPt 29.7%, MLCR 15.6%, AA-LCR 85.3%, GraphWalks 65.0%, AA-GPQA 93.7%, AA-HLE 59.1%, AA-Omniscience 46.3%/68.4%/70.0%, FrontierMath v2 90.175%/87.805%, GPQA Diamond Vals 93.4%, MMLU-Pro Vals 92.4%. Corroborates band; no change.
- **Context window: 90/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 80/100.** Text/image/file in, text out; Blueprint-Bench 2 38.6%, OfficeQA Pro 57.9%. Enrichment adds Chartography (tools) 90.2%, BenchCAD 0.962, OfficeQA 76.9%, OfficeQA Pro 65.6%, Design Arena 1308, ParseBench 77.81%. Corroborates band; no change.
- **Coding: 90/100.** SWE-bench Pro 81.2%, SWE Multilingual 89.1%, ProgramBench 87.6%, Bug Hunt 43 fixes; coding lane #3/150 (76.8). Enrichment adds AA-SciCode 63.1%, LiveCodeBench Vals 90.5%, AA Coding Index 81.6%, CursorBench 4.0 51.8%, PostTrainBench 40.2%, FrontierCode 2.0 32.4%, Chartography (tools) 90.2%, BenchCAD 0.962, OfficeQA 76.9%, OfficeQA Pro 65.6%, Design Arena 1308. Corroborates band; no change.
- **Cost efficiency: 60/100.** Premium $10/$50 per 1M.
- **Overall Score: 88/100.** Mean of five quality dims (BenchLM aggregate 83.17); best-fit for frontier coding + long-horizon agents at premium cost. Enrichment (2026-11-08) added new verified rows (AA Agentic Index 58.0%; AA AutomationBench 59.4%; AA Tau3 Banking 47.2%; AA-AnalystAgent 57.5%; AA ITBench 49.5%; aaTerminalBench21 91.4%; AA Terminal-Bench 4.0 52.0%; CWE 58.0%; MazeBench 10%; AA Cyber 25.0%; CWE-Bench-AA 50.8%; DeepsecBench 23.5%; CyberGym-E2E 0.8%; OSWorld 2.1 80.7%; GDP.pdf 26.2%; CritPt 29.7%; MLCR 15.6%; AA-LCR 85.3%; GraphWalks 65.0%; AA-GPQA 93.7%; AA-HLE 59.1%; AA-Omniscience 46.3%/68.4%/70.0%; FrontierMath v2 90.175%/87.805%; GPQA Diamond Vals 93.4%; MMLU-Pro Vals 92.4%; AA-SciCode 63.1%; LiveCodeBench Vals 90.5%; AA Coding Index 81.6%; CursorBench 4.0 51.8%; PostTrainBench 40.2%; FrontierCode 2.0 32.4%; Chartography (tools) 90.2%; BenchCAD 0.962; OfficeQA 76.9%; OfficeQA Pro 65.6%; Design Arena 1308). No dimension band moved; Overall unchanged at 88.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-22 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Claude Fable 5.1](https://benchlm.ai/models/claude-fable-5-1)
  - [Artificial Analysis — Claude Fable 5.1](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [Anthropic — Claude Fable 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Fable 5.1 system card](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).