# GPT-5.5 — findings by Beam

- Source: OpenAI/GPT-5.5, `openai/gpt-5.5`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's flagship GPT-5.5 (Apr 23, 2026): fully retrained base model (not a fine-tune), stronger agentic coding, computer use, knowledge work; first model to score >85% on Terminal-Bench 2.0. Stricter cyber/bio safeguards.
- **Provider / access:** OpenAI API `gpt-5.5` (ChatGPT Plus/Pro/Business/Enterprise; API Apr 23, 2026); Azure.
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.5`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $5.00 / 1M input, $30.00 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- LifeVal: **77.4%**
- Terminal-Bench 2.0: **82%**
- CyberGym: **81.8%**
- BrowseComp: **84.4%**
- OSWorld-Verified: **78.7%**
- MCP Atlas: **75.3%**
- Toolathlon: **55.6%**
- τ²-bench results: **98%**
- APEX-Agents-AA: **37.7%**
- GDPval-AA: **42.5%** normalized / 1396 Elo (Artificial Analysis)
- Gert Labs: **72.93%**
- ResearchClawBench: **17.0%**
- OSWorld 2.0: **13.0%**
- JobBench: **42.7%**
- ExploitGym: **13.4%**
- Terminal-Bench 2.1 (Vals): **76.4%**
- AA Agentic Index: **37.3%**
- GDPval-AA: **1396 Elo** (Artificial Analysis)
- AA-AnalystAgent: **50.0%**
- ApprenticeBench: **20%**
- MazeBench: **0%**
- AA EnterpriseOps-Gym: **46.6%**
- AA ITBench: **45.8%**
- AA Tau3 Banking: **39.0%**
- terminalBenchHard: **60.6%**
- aaTerminalBench21: **84.3%**

Reasoning / knowledge:

- BioBasicsBench: **35.4%**
- MRCR v2 64K-128K: **83.1%**
- MRCR v2 128K-256K: **87.5%**
- ARC-AGI-2: **85%**
- ARC-AGI-3: **0.4%**
- AA-LCR: **84.3%**
- CritPt: **27.1%**
- ARC-AGI-1: **95.00%**
- GPQA: **93.6%**
- GPQA-D: **93.6%**
- HLE: **52.2%**
- HLE w/o tools: **41.4%**
- Artificial Analysis Intelligence Index: **38.4%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **93.5%** (Artificial Analysis)
- AA-HLE: **45.8%** (Artificial Analysis)
- AA-Omniscience Index: **20.5%**
- AA-Omniscience Accuracy: **58.0%**
- AA-Omniscience Hallucination Rate: **89.0%**
- GPQA Diamond (Vals): **93.2%** (Vals AI)
- MMLU-Pro (Vals): **88.1%** (Vals AI)
- AA-IFBench: **75.9%** (Artificial Analysis)

Coding:

- SWE-bench Pro: **58.6%**
- Terminal-Bench 2.0: **82.0%**
- Vibe Code Bench: **69.85%**
- React Native Evals: **84.7%**
- cursorBench31: **59.2%**
- CursorBench 3.2: **58.4%**
- AA-SciCode: **55.8%**
- FrontierCode 1.1 Main: **43.0%**
- LiveCodeBench (Vals): **85.3%**
- SWE-bench (Vals): **82.6%**
- AA Coding Index: **74.9%**
- PostTrainBench v1.1: **27.2%**
- FrontierCode 2.0: **22.6%**

Long context:

- 1M window; MRCR: not reported.
- MRCR v2 64K-128K: **83.1%**; 128K-256K: **87.5%**
- AA-LCR: **84.3%**

Multimodal:

- ExtractBench (LlamaIndex): **93.35%**
- ParseBench: **66.42%**
- MMMU-Pro: **81.2%**
- MMMU-Pro w/ Python: **83.2%**
- OfficeQA Pro: **54.1%**
- AA-MMMU-Pro: **79.9%**
- Design Arena Website: **1254**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Agentic lane (unranked 3 rows), BrowseComp 84.4%, OSWorld-Verified 78.7%, MCP Atlas 75.3%, Toolathlon 55.6%, τ²-bench 98%, APEX-Agents-AA 37.7%; caps at JobBench 42.7% and ExploitGym 13.4%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates LifeVal 77.4%, CyberGym 81.8%, BrowseComp 84.4%, OSWorld-Verified 78.7%, MCP Atlas 75.3%, Toolathlon 55.6%, τ²-bench 98%, APEX-Agents-AA 37.7%, GDPval-AA 42.5% normalized/1396 Elo, Gert Labs 72.93%, ResearchClawBench 17.0%, OSWorld 2.0 13.0%, JobBench 42.7%, ExploitGym 13.4%, Terminal-Bench 2.1 Vals 76.4%, AA Agentic Index 37.3%, GDPval-AA 1396 Elo, AA-AnalystAgent 50.0%, ApprenticeBench 20%, MazeBench 0%, AA EnterpriseOps-Gym 46.6%, AA ITBench 45.8%, AA Tau3 Banking 39.0%, terminalBenchHard 60.6%, aaTerminalBench21 84.3%, BioBasicsBench 35.4%, MRCR v2 64K-128K 83.1%, 128K-256K 87.5%, ARC-AGI-2 85%, ARC-AGI-3 0.4%, AA-LCR 84.3%, CritPt 27.1%, ARC-AGI-1 95.00%, GPQA 93.6%, GPQA-D 93.6%, HLE 52.2%, HLE w/o tools 41.4%, AA Intelligence 38.4%, AA-GPQA 93.5%, AA-HLE 45.8%, AA-Omniscience 20.5%/58.0%/89.0%, GPQA Diamond Vals 93.2%, MMLU-Pro Vals 88.1%, AA-IFBench 75.9%, SWE-bench Pro 58.6%, Terminal-Bench 2.0 82.0%, Vibe Code Bench 69.85%, React Native Evals 84.7%, cursorBench31 59.2%, CursorBench 3.2 58.4%, AA-SciCode 55.8%, FrontierCode 1.1 Main 43.0%, LiveCodeBench Vals 85.3%, SWE-bench Vals 82.6%, AA Coding Index 74.9%, PostTrainBench v1.1 27.2%, FrontierCode 2.0 22.6%, ExtractBench 93.35%, ParseBench 66.42%, MMMU-Pro 81.2%, MMMU-Pro w/ Python 83.2%, OfficeQA Pro 54.1%, AA-MMMU-Pro 79.9%, Design Arena 1254. Corroborates band; no change.
- **Reasoning: 80/100.** ARC-AGI-2 85%, HLE 52.2%, BioBasicsBench 35.4%, MRCR v2 64K-128K 83.1%, 128K-256K 87.5%, ARC-AGI-3 0.4%, AA-LCR 84.3%, CritPt 27.1%, ARC-AGI-1 95.00%, GPQA 93.6%, HLE w/o tools 41.4%, AA Intelligence 38.4%, AA-GPQA 93.5%, AA-HLE 45.8%, AA-Omniscience 20.5%/58.0%/89.0%, GPQA Diamond Vals 93.2%, MMLU-Pro Vals 88.1%, AA-IFBench 75.9%. Corroborates band; no change.
- **Context window: 88/100.** 1M window; MRCR v2 64K-128K 83.1%, 128K-256K 87.5%; AA-LCR 84.3%.
- **Multimodal: 84/100.** Text/image in, text out; MMMU-Pro 81.2%, AA-MMMU-Pro 79.9%. Enrichment adds ExtractBench 93.35%, ParseBench 66.42%, MMMU-Pro 81.2%, MMMU-Pro w/ Python 83.2%, OfficeQA Pro 54.1%, AA-MMMU-Pro 79.9%, Design Arena 1254. Corroborates band; no change.
- **Coding: 82/100.** SWE-bench Pro 58.6%, Terminal-Bench 2.0 82.0%, Vibe Code 69.85%, React Native Evals 84.7%, cursorBench31 59.2%, CursorBench 3.2 58.4%, AA-SciCode 55.8%, FrontierCode 1.1 Main 43.0%, LiveCodeBench Vals 85.3%, SWE-bench Vals 82.6%, AA Coding Index 74.9%, PostTrainBench v1.1 27.2%, FrontierCode 2.0 22.6%. Corroborates band; no change.
- **Cost efficiency: 75/100.** Mid-tier $5/$30 per 1M.
- **Overall Score: 82/100.** Mean of five quality dims (BenchLM aggregate 68.75); best-fit for everyday agentic + reasoning at mid cost. Enrichment (2026-11-08) added new verified rows (LifeVal 77.4%; CyberGym 81.8%; BrowseComp 84.4%; OSWorld-Verified 78.7%; MCP Atlas 75.3%; Toolathlon 55.6%; τ²-bench 98%; APEX-Agents-AA 37.7%; GDPval-AA 42.5% normalized/1396 Elo; Gert Labs 72.93%; ResearchClawBench 17.0%; OSWorld 2.0 13.0%; JobBench 42.7%; ExploitGym 13.4%; Terminal-Bench 2.1 Vals 76.4%; AA Agentic Index 37.3%; GDPval-AA 1396 Elo; AA-AnalystAgent 50.0%; ApprenticeBench 20%; MazeBench 0%; AA EnterpriseOps-Gym 46.6%; AA ITBench 45.8%; AA Tau3 Banking 39.0%; terminalBenchHard 60.6%; aaTerminalBench21 84.3%; BioBasicsBench 35.4%; MRCR v2 64K-128K 83.1%; 128K-256K 87.5%; ARC-AGI-2 85%; ARC-AGI-3 0.4%; AA-LCR 84.3%; CritPt 27.1%; ARC-AGI-1 95.00%; GPQA 93.6%; GPQA-D 93.6%; HLE 52.2%; HLE w/o tools 41.4%; AA Intelligence 38.4%; AA-GPQA 93.5%; AA-HLE 45.8%; AA-Omniscience 20.5%/58.0%/89.0%; GPQA Diamond Vals 93.2%; MMLU-Pro Vals 88.1%; AA-IFBench 75.9%; SWE-bench Pro 58.6%; Terminal-Bench 2.0 82.0%; Vibe Code Bench 69.85%; React Native Evals 84.7%; cursorBench31 59.2%; CursorBench 3.2 58.4%; AA-SciCode 55.8%; FrontierCode 1.1 Main 43.0%; LiveCodeBench Vals 85.3%; SWE-bench Vals 82.6%; AA Coding Index 74.9%; PostTrainBench v1.1 27.2%; FrontierCode 2.0 22.6%; ExtractBench 93.35%; ParseBench 66.42%; MMMU-Pro 81.2%; MMMU-Pro w/ Python 83.2%; OfficeQA Pro 54.1%; AA-MMMU-Pro 79.9%; Design Arena 1254). No dimension band moved; Overall unchanged at 82.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-5.5](https://benchlm.ai/models/gpt-5-5)
  - [Artificial Analysis — GPT-5.5](https://artificialanalysis.ai/models/gpt-5-5)
  - [OpenAI — GPT-5.5](https://openai.com/index/introducing-gpt-5-5/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).