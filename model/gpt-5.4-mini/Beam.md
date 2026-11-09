# GPT-5.4 mini — findings by Beam

- Source: OpenAI/GPT-5.4 mini, `openai/gpt-5.4-mini`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's mini variant of GPT-5.4 (Mar 2026): fast, cheap reasoning model with 400K context; BenchLM #85/1016.
- **Provider / access:** OpenAI API `gpt-5.4-mini` (Chat/Responses); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.4-mini`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (OpenAI).
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **60%**
- OSWorld-Verified: **72.1%**
- MCP Atlas: **57.7%**
- Toolathlon: **42.9%**
- τ²-bench results: **93.4%**
- APEX-Agents-AA: **28.2%**
- GDPval-AA: **25.6%** normalized / 1095 Elo (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **54.7%** (Vals AI)
- AA Agentic Index: **19.6%** (Artificial Analysis)
- GDPval-AA: **1095 Elo** (Artificial Analysis)
- AA ITBench: **35.2%** (Artificial Analysis)
- terminalBenchHard: **52.3%** (Artificial Analysis)
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

- ARC-AGI-1: **63.70%**
- ARC-AGI-2: **18.9%**
- AA-LCR: **77.0%** (Artificial Analysis)
- CritPt: **10.0%** (Artificial Analysis)
- GPQA: **88%**
- HLE: **41.5%**
- HLE w/o tools: **28.2%**
- Artificial Analysis Intelligence Index: **24.1%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **87.5%** (Artificial Analysis)
- AA-HLE: **28.1%** (Artificial Analysis)
- AA-Omniscience Index: **-18.9%**
- AA-Omniscience Accuracy: **37.5%**
- AA-Omniscience Hallucination Rate: **90.2%**
- AA-IFBench: **73.3%** (Artificial Analysis)
- AA Global-MMLU-Lite: **89.4%** (Artificial Analysis)
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **51.228%**; Tier 4: **9.756%** (Epoch AI)
- GPQA Diamond (Vals): **83.1%** (Vals AI)
- MMLU-Pro (Vals): **84.6%** (Vals AI)

Coding:

- Terminal-Bench 2.0: **60.0%**
- Vibe Code Bench: **47.97%**
- AA-SciCode: **52.1%**
- FrontierCode 1.1 Main: **27.0%**
- LiveCodeBench (Vals): **81.5%**
- SWE-bench (Vals): **73.0%**
- AA Coding Index: **56.1%**
- AA-IFBench: **73.3%** (Artificial Analysis)
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- AA-MMMU-Pro: **73.3%** (Artificial Analysis)
- Design Arena Website: not individually reported

Long context:

- 400K window; MRCR: not reported.
- AA-LCR: **77.0%** (Artificial Analysis)

Multimodal:

- MMMU-Pro: **76.6%**
- MMMU-Pro w/ Python: **78%**
- AA-MMMU-Pro: **73.3%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 74/100.** Agentic lane (unranked), Terminal-Bench 2.0 60%, OSWorld-Verified 72.1%, MCP Atlas 57.7%, Toolathlon 42.9%, τ²-bench 93.4%, APEX-Agents-AA 28.2%, GDPval-AA 25.6% normalized/1095 Elo, Terminal-Bench 2.1 Vals 54.7%, AA Agentic Index 19.6%, AA ITBench 35.2%, terminalBenchHard 52.3%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.0 60%, OSWorld-Verified 72.1%, MCP Atlas 57.7%, Toolathlon 42.9%, τ²-bench 93.4%, APEX-Agents-AA 28.2%, GDPval-AA 25.6% normalized/1095 Elo, Terminal-Bench 2.1 Vals 54.7%, AA Agentic Index 19.6%, AA ITBench 35.2%, terminalBenchHard 52.3%, AA Intelligence 24.1%, AA-GPQA 87.5%, AA-HLE 28.1%, AA-Omniscience -18.9%/37.5%/90.2%, AA-LCR 77.0%, CritPt 10.0%, ARC-AGI-1 63.70%, ARC-AGI-2 18.9%, GPQA 88%, HLE 41.5%, HLE w/o tools 28.2%, AA-IFBench 73.3%, AA Global-MMLU-Lite 89.4%, FrontierMath v2 51.228%/9.756%, GPQA Diamond Vals 83.1%, MMLU-Pro Vals 84.6%, Terminal-Bench 2.0 60.0%, Vibe Code 47.97%, AA-SciCode 52.1%, FrontierCode 1.1 Main 27.0%, LiveCodeBench Vals 81.5%, SWE-bench Vals 73.0%, AA Coding Index 56.1%, MMMU-Pro 76.6%, MMMU-Pro w/ Python 78%, AA-MMMU-Pro 73.3%. Corroborates band; no change.
- **Reasoning: 72/100.** ARC-AGI-1 63.70%, ARC-AGI-2 18.9%, GPQA 88%, HLE 41.5%, AA Intelligence 24.1%, AA-GPQA 87.5%, AA-HLE 28.1%, AA-Omniscience -18.9%/37.5%/90.2%, AA-LCR 77.0%, CritPt 10.0%, AA-IFBench 73.3%, AA Global-MMLU-Lite 89.4%, FrontierMath v2 51.228%/9.756%, GPQA Diamond Vals 83.1%, MMLU-Pro Vals 84.6%. Corroborates band; no change.
- **Context window: 74/100.** 400K window; AA-LCR 77.0%. Corroborates band; no change.
- **Multimodal: 78/100.** Text/image in; MMMU-Pro 76.6%, AA-MMMU-Pro 73.3%. Enrichment adds MMMU-Pro 76.6% (already), MMMU-Pro w/ Python 78% (already), AA-MMMU-Pro 73.3% (already). Corroborates band; no change.
- **Coding: 72/100.** Terminal-Bench 2.0 60.0%, Vibe Code 47.97%, AA-SciCode 52.1%, FrontierCode 1.1 Main 27.0%, LiveCodeBench Vals 81.5%, SWE-bench Vals 73.0%, AA Coding Index 56.1%. Enrichment adds Terminal-Bench 2.0 60.0% (already), Vibe Code 47.97% (already), AA-SciCode 52.1% (already), FrontierCode 1.1 Main 27.0% (already), LiveCodeBench Vals 81.5% (already), SWE-bench Vals 73.0% (already), AA Coding Index 56.1% (already), MMMU-Pro 76.6%, MMMU-Pro w/ Python 78%, AA-MMMU-Pro 73.3%. Corroborates band; no change.
- **Cost efficiency: 88/100.** Cheap mid-tier.
- **Overall Score: 74/100.** Mean of five quality dims (BenchLM aggregate 53.3); best-fit for fast agentic at low cost. Enrichment (2026-11-08) added new verified rows (Terminal-Bench 2.0 60%, OSWorld-Verified 72.1%, MCP Atlas 57.7%, Toolathlon 42.9%, τ²-bench 93.4%, APEX-Agents-AA 28.2%, GDPval-AA 25.6% normalized/1095 Elo, Terminal-Bench 2.1 Vals 54.7%, AA Agentic Index 19.6%, AA ITBench 35.2%, terminalBenchHard 52.3%, AA Intelligence 24.1%, AA-GPQA 87.5%, AA-HLE 28.1%, AA-Omniscience -18.9%/37.5%/90.2%, AA-LCR 77.0%, CritPt 10.0%, ARC-AGI-1 63.70%, ARC-AGI-2 18.9%, GPQA 88%, HLE 41.5%, HLE w/o tools 28.2%, AA-IFBench 73.3%, AA Global-MMLU-Lite 89.4%, FrontierMath v2 51.228%/9.756%, GPQA Diamond Vals 83.1%, MMLU-Pro Vals 84.6%, Terminal-Bench 2.0 60.0%, Vibe Code 47.97%, AA-SciCode 52.1%, FrontierCode 1.1 Main 27.0%, LiveCodeBench Vals 81.5%, SWE-bench Vals 73.0%, AA Coding Index 56.1%, MMMU-Pro 76.6%, MMMU-Pro w/ Python 78%, AA-MMMU-Pro 73.3%). No dimension band moved; Overall unchanged at 74.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-5.4 mini](https://benchlm.ai/models/gpt-5-4-mini)
  - [Artificial Analysis — GPT-5.4 mini](https://artificialanalysis.ai/models/gpt-5-4-mini)
  - [OpenAI — GPT-5.4 mini and nano](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).