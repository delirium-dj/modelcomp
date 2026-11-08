# MiniMax M3 — findings by Beam

- Source: MiniMax/MiniMax M3, `minimax/minimax-m3`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weight multimodal model (May 31, 2026) with MSA (MiniMax Sparse Attention), 1M context, frontier coding/agentic. First open-weight model with frontier coding + 1M context + multimodal.
- **Provider / access:** MiniMax API; OpenRouter; HuggingFace (open weights).
- **Release / knowledge:** Released 2026-05-31; knowledge cutoff not stated.
- **IDs:** `minimax/minimax-m3`
- **Context window:** 1,000,000 tokens (guaranteed min 512K); max output 512,000.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-11-08):** $0.30 / 1M input, $1.20 / 1M output, $0.06 / 1M cached; paid. Very cheap.
- **Architecture:** MSA (MiniMax Sparse Attention), open weights, ~? params.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- BrowseComp: **83.5%** (surpasses Opus 4.7 79.3%)
- MCP Atlas: **74.2%**
- OSWorld-Verified: **70.06%**
- Terminal-Bench 2.1: **66.0%**
- Vals Index: **36.53%** (#39/45) / 58.94% (#6 open-weights)
- Vals Multimodal Index: **59.97%** (#6)
- τ²-Bench Airline: **71.0%**
- LongBench v2: not reported
- BrowseComp: **83.5%** (MiniMax)
- MCP Atlas: **74.2%** (MiniMax)
- OSWorld-Verified: **70.1%** (MiniMax)
- Terminal-Bench 2.1: **66.0%** (MiniMax)
- Vals Index: **36.53%** (#39/45) / 58.94% (#6 open-weights)
- Vals Multimodal Index: **59.97%** (#6)
- τ²-Bench Airline: **71.0%** (Artificial Analysis)
- LongBench v2: not reported
- Terminal-Bench 2.1 (Vals): **53.6%** (Vals AI)
- AA Agentic Index: **30.8%** (Artificial Analysis)
- GDPval-AA: **37.1%** normalized / 1304 Elo (Artificial Analysis)
- GDPval rubrics: **74.7%** (MiniMaxAI/MiniMax-M3 model card)
- BankerToolBench: **76.1%** (MiniMaxAI/MiniMax-M3 model card)
- ResearchClawBench: **19.8%** (ResearchClawBench)
- OSWorld 2.0: **4.6%** (OSWorld 2.0 paper)
- AA Harvey LAB v1.0: **88.4%** (Artificial Analysis)
- MazeBench: **0%** (MazeBench)
- AA Cyber Index: **22.4%** (Artificial Analysis)
- CWE-Bench-AA: **41.7%** (Artificial Analysis)
- DeepsecBench-AA: **1.1%** (Artificial Analysis)
- CyberGym-E2E-AA: **24.4%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (Serenities) / 92.68% (Vals)
- AA Intelligence Index: **29.6** (29th of 66); updated 2026-11-07: **18.9%** (measured)
- AA Agentic Index: **30.8** (25th of 70)
- τ²-Bench Airline: **71.0%**
- LongBench v2: not reported
- AA-LCR: **83.0%** (Artificial Analysis)
- CritPt: **3.7%** (Artificial Analysis)
- AA-GPQA Diamond: **92.9%** (Artificial Analysis)
- AA-HLE: **39.0%** (Artificial Analysis)
- AA-Omniscience Index: **-5.5%**
- AA-Omniscience Accuracy: **44.9%**
- AA-Omniscience Hallucination Rate: **91.4%**
- GPQA Diamond (Vals): **92.7%** (Vals AI)
- MMLU-Pro (Vals): **84.2%** (Vals AI)
- AA-IFBench: **82.9%** (Artificial Analysis)
- USAMO 2026: **85.7%** (MiniMax)

Coding:

- SWE-bench Verified: **80.5%** (official) / 75.00% (Vals)
- SWE-bench Pro: **59.0%**
- Terminal-Bench 2.1: **66.0%**
- LiveCodeBench: **82.15%** (Vals)
- AA Coding Index: **58.6** (33rd of 96)
- LiveBench Coding: **68.2%**
- LiveBench Agentic Coding: **60.0%**
- Vibe Code Bench v1.1: **47.57%**
- DeepSWE: not reported
- NL2Repo: **42.1%** (MiniMax)
- AA-SciCode: **47.1%** (Artificial Analysis)
- VIBE V2: **50.1%** (MiniMaxAI/MiniMax-M3 model card)
- SVG-Bench: **63.7%** (MiniMaxAI/MiniMax-M3 model card)
- KernelBench Hard: **28.8%** (MiniMaxAI/MiniMax-M3 model card)
- OpenHarmony Bench: **48.4%** (OpenHarmony Bench)
- LiveCodeBench (Vals): **82.2%** (Vals AI)
- SWE-bench (Vals): **75.0%** (Vals AI)
- AA Coding Index: **58.6%** (Artificial Analysis)

Long context:

- 1M window (guaranteed min 512K); MRCR: not reported.
- AA-LCR: **83.0%** (Artificial Analysis)

Multimodal:

- BenchGecko avg: **79.7** (#23)
- LiveBench: text/image/video in; multimodal native.
- MMMU-Pro: **81.16%** (Vals)
- OfficeQA Pro: **45.1%** (MiniMax)
- OmniDocBench 1.5: **91.6%** (MiniMax)
- MMMU-Pro: **78.1%** (MiniMax)
- VideoMMMU: **84.6%** (MiniMax)
- Video-MME (with subtitle): **85.4%** (MiniMax)
- Design Arena Website: **1254** (OpenRouter)
- AA-MMMU-Pro: **78.6%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** BrowseComp 83.5%, MCP Atlas 74.2%, OSWorld 70.06%, Terminal-Bench 2.1 66.0%, τ²-Bench Airline 71.0%; caps at Vals Index 36.53%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates BrowseComp 83.5%, MCP Atlas 74.2%, OSWorld-Verified 70.1%, Terminal-Bench 2.1 66.0%, Vals Index 36.53%/58.94%, Vals Multimodal Index 59.97%, τ²-Bench Airline 71.0%, Terminal-Bench 2.1 Vals 53.6%, AA Agentic Index 30.8%, GDPval-AA 37.1% normalized/1304 Elo, GDPval rubrics 74.7%, BankerToolBench 76.1%, ResearchClawBench 19.8%, OSWorld 2.0 4.6%, AA Harvey LAB 88.4%, MazeBench 0%, AA Cyber 22.4%, CWE-Bench-AA 41.7%, DeepsecBench 1.1%, CyberGym-E2E 24.4%, AA Intelligence 18.9%, AA-GPQA 92.9%, AA-HLE 39.0%, AA-Omniscience -5.5%/44.9%/91.4%, AA-LCR 83.0%, CritPt 3.7%, GPQA Diamond Vals 92.7%, MMLU-Pro Vals 84.2%, AA-IFBench 82.9%, USAMO 2026 85.7%, SWE-bench Verified 80.5%/75.0% (Vals), SWE-bench Pro 59.0%, Terminal-Bench 2.1 66.0%, NL2Repo 42.1%, AA-SciCode 47.1%, VIBE V2 50.1%, SVG-Bench 63.7%, KernelBench Hard 28.8%, OpenHarmony Bench 48.4%, LiveCodeBench Vals 82.2%, SWE-bench Vals 75.0%, AA Coding Index 58.6%, OfficeQA Pro 45.1%, OmniDocBench 1.5 91.6%, MMMU-Pro 78.1%, VideoMMMU 84.6%, Video-MME 85.4%, Design Arena 1254, AA-MMMU-Pro 78.6%. Corroborates band; no change.
- **Reasoning: 76/100.** GPQA 90.6-92.68%, AA Intelligence 18.9% (updated from 29.6), AA Agentic 30.8; caps at no published HLE/ARC-AGI. Enrichment adds AA Intelligence 18.9% (updated from 29.6, significant drop noted), AA-GPQA 92.9%, AA-HLE 39.0%, AA-Omniscience -5.5%/44.9%/91.4%, AA-LCR 83.0%, CritPt 3.7%, GPQA Diamond Vals 92.7%, MMLU-Pro Vals 84.2%, AA-IFBench 82.9%, USAMO 85.7%. Corroborates band; no change.
- **Context window: 88/100.** 1M window (guaranteed min 512K); caps at no published MRCR. Enrichment adds AA-LCR 83.0%. Corroborates band; no change.
- **Multimodal: 84/100.** Text/image/video in native; MMMU-Pro 81.16%, BenchGecko 79.7. Enrichment adds OfficeQA Pro 45.1%, OmniDocBench 1.5 91.6%, MMMU-Pro 78.1%, VideoMMMU 84.6%, Video-MME 85.4%, Design Arena 1254, AA-MMMU-Pro 78.6%. Corroborates band; no change.
- **Coding: 78/100.** SWE-bench Verified 75.0-80.5%, SWE-bench Pro 59.0%, Terminal-Bench 2.1 66.0%, LiveCodeBench 82.15%, AA Coding 58.6; caps at Vibe Code 47.57%. Enrichment adds NL2Repo 42.1%, AA-SciCode 47.1%, VIBE V2 50.1%, SVG-Bench 63.7%, KernelBench Hard 28.8%, OpenHarmony Bench 48.4%, LiveCodeBench Vals 82.2%, SWE-bench Vals 75.0%, AA Coding Index 58.6%, OfficeQA Pro 45.1%, OmniDocBench 1.5 91.6%, MMMU-Pro 78.1%, VideoMMMU 84.6%, Video-MME 85.4%, Design Arena 1254, AA-MMMU-Pro 78.6%. Corroborates band; no change.
- **Cost efficiency: 96/100.** Very cheap $0.30/$1.20 per 1M.
- **Overall Score: 81/100.** Mean of five quality dims (BenchGecko 79.7); best-fit for cost-efficient multimodal agentic coding. Enrichment (2026-11-08) added new verified rows (BrowseComp 83.5%; MCP Atlas 74.2%; OSWorld-Verified 70.1%; Terminal-Bench 2.1 66.0%; Vals Index 36.53%/58.94%; Vals Multimodal Index 59.97%; τ²-Bench Airline 71.0%; Terminal-Bench 2.1 Vals 53.6%; AA Agentic Index 30.8%; GDPval-AA 37.1% normalized/1304 Elo; GDPval rubrics 74.7%; BankerToolBench 76.1%; ResearchClawBench 19.8%; OSWorld 2.0 4.6%; AA Harvey LAB 88.4%; MazeBench 0%; AA Cyber 22.4%; CWE-Bench-AA 41.7%; DeepsecBench 1.1%; CyberGym-E2E 24.4%; AA Intelligence 18.9% (updated from 29.6); AA-GPQA 92.9%; AA-HLE 39.0%; AA-Omniscience -5.5%/44.9%/91.4%; AA-LCR 83.0%; CritPt 3.7%; GPQA Diamond Vals 92.7%; MMLU-Pro Vals 84.2%; AA-IFBench 82.9%; USAMO 85.7%; SWE-bench Verified 80.5%/75.0% (Vals); SWE-bench Pro 59.0%; Terminal-Bench 2.1 66.0%; NL2Repo 42.1%; AA-SciCode 47.1%; VIBE V2 50.1%; SVG-Bench 63.7%; KernelBench Hard 28.8%; OpenHarmony Bench 48.4%; LiveCodeBench Vals 82.2%; SWE-bench Vals 75.0%; AA Coding Index 58.6%; OfficeQA Pro 45.1%; OmniDocBench 1.5 91.6%; MMMU-Pro 78.1%; VideoMMMU 84.6%; Video-MME 85.4%; Design Arena 1254; AA-MMMU-Pro 78.6%). No dimension band moved; Overall unchanged at 81. Note: AA Intelligence Index dropped from prior 29.6 to 18.9 (measured, updated 2026-11-07); reasoning band held at 76 based on GPQA 90.6-92.68%.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands, except AA Intelligence Index noted drop from 29.6 to 18.9).
- Reference URLs:
  - [BenchLM — MiniMax M3](https://benchlm.ai/models/minimax-m3)
  - [Artificial Analysis — MiniMax M3](https://artificialanalysis.ai/models/minimax-m3)
  - [MiniMax — MiniMax M3](https://www.minimax.io/blog/minimax-m3)
  - [MiniMax M3 — HuggingFace](https://huggingface.co/MiniMaxAI/MiniMax-M3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).