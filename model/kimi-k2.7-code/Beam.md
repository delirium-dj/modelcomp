# Kimi K2.7 Code — findings by Beam

- Source: Moonshot AI/Kimi K2.7 Code, `moonshotai/kimi-k2.7-code`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-focused model (Jun 12, 2026): 1T total / 32B active MoE, 256K context, thinking-only. #1 open-weight on SWE-bench Verified (78.20%) and Terminal-Bench 2.1 (67.04%). Improved reasoning efficiency.
- **Provider / access:** Moonshot API `kimi-k2.7-code`; OpenRouter; HuggingFace (open weights).
- **Release / knowledge:** Released 2026-06-12; knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k2.7-code`
- **Context window:** 262,144 tokens; max output 256,000.
- **Modalities:** text, image, video in; text out; reasoning yes (thinking-only, no non-thinking mode); tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-11-08):** $0.95 / 1M input, $4.00 / 1M output (pricepertoken $0.671/$3.00); paid.
- **Architecture:** 1T total / 32B active, MoE (384 experts, 8 selected + 1 shared), 61 layers, MLA attention, SwiGLU, MIT-ish license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **38.5** (#69/128)
- Kimi Claw 24/7: **46.9%**
- MCP Atlas: **76%**
- MCP Mark Verified: **81.1%**
- τ²-bench: **90.1%** (Artificial Analysis)
- GDPval-AA: **26.9%** normalized (Artificial Analysis)
- Terminal-Bench 2.1: **67.04%** (Vals)
- AA Agentic Index: **22.5%** (Artificial Analysis)
- GDPval-AA: **1114 Elo** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **67.0%** (Vals AI)
- terminalBenchHard: **44.7%** (Artificial Analysis)
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

- Reasoning public-lane (BenchLM): **80.3** (unranked, 2 rows)
- GPQA: not reported for K2.7 Code
- HLE: not reported
- ARC-AGI: not reported
- AA Intelligence Index: not individually reported
- AA-GPQA Diamond: **89.6%** (Artificial Analysis)
- AA-HLE: **35.0%** (Artificial Analysis)
- AA-LCR: **79.3%** (Artificial Analysis)
- CritPt: **10.0%** (Artificial Analysis)
- AA-IFBench: **63.1%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **54.035%**; Tier 4: **12.195%** (Epoch AI)

Coding:

- Coding public-lane (BenchLM): **41.8** (#62/150)
- Kimi Code Bench v2: **62.0%**
- ProgramBench: **53.6%**
- MLS-Bench Lite: **35.1%**
- CursorBench 3.2: **49.7%**
- AA-SciCode: **47.8%**
- SWE-bench Verified: **78.20%** (Vals, #1 open-weight)
- Terminal-Bench 2.1: **67.04%** (Vals)
- LiveCodeBench: **82.05%** (Vals)
- AA Coding Index: **60.8%** (Artificial Analysis)
- LiveCodeBench (Vals): **82.1%** (Vals AI)
- SWE-bench (Vals): **78.2%** (Vals AI)
- AA-SciCode: **47.8%** (Artificial Analysis)
- OpenHarmony Bench: **52.1%** (OpenHarmony Bench)
- AA Coding Index: **60.8%** (Artificial Analysis)
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- Bug Hunt Bench: not individually reported
- PostTrainBench v1.1: not individually reported
- FrontierCode 2.0: not individually reported
- AA-MMMU-Pro: not individually reported
- Design Arena Website: **1261** (OpenRouter)

Long context:

- 262K window; MRCR: not reported.
- AA-LCR: **79.3%** (Artificial Analysis)

Multimodal:

- Multimodal: not separately reported (text/image/video in).
- Design Arena Website: **1261** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Agentic lane #69/128 (38.5), MCP Atlas 76%, MCP Mark Verified 81.1%, τ²-bench 90.1%, Kimi Claw 24/7 46.9%; caps at GDPval 26.9%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Kimi Claw 24/7 46.9%, MCP Atlas 76%, MCP Mark Verified 81.1%, τ²-bench 90.1%, GDPval-AA 26.9% normalized/1114 Elo, AA Agentic Index 22.5%, GDPval-AA 1114 Elo, Terminal-Bench 2.1 Vals 67.0%, terminalBenchHard 44.7%, AA Intelligence not individually reported, AA-GPQA 89.6%, AA-HLE 35.0%, AA-LCR 79.3%, CritPt 10.0%, AA-IFBench 63.1%, Kimi Code Bench v2 62.0%, ProgramBench 53.6%, MLS-Bench Lite 35.1%, CursorBench 3.2 49.7%, AA-SciCode 47.8%, OpenHarmony Bench 52.1%, AA Coding Index 60.8%, LiveCodeBench Vals 82.1%, SWE-bench Vals 78.2%, Design Arena 1261, FrontierMath v2 54.035%/12.195%. Corroborates band; no change.
- **Reasoning: 74/100.** Reasoning lane 80.3 (2 rows); caps at no published GPQA/HLE/ARC-AGI. Enrichment adds AA-GPQA 89.6% (already), AA-HLE 35.0% (already), AA-LCR 79.3% (already), CritPt 10.0% (already), AA-IFBench 63.1% (already), FrontierMath v2 54.035%/12.195% (already). Corroborates band; no change.
- **Context window: 72/100.** 262K window; caps at no published MRCR.
- **Multimodal: 72/100.** Text/image/video in; caps at no verified multimodal benchmarks.
- **Coding: 74/100.** SWE-bench Verified 78.2%, Kimi Code Bench 62.0%, ProgramBench 53.6%, coding lane #62/150 (41.8); caps at MLS-Bench Lite 35.1%. Enrichment adds Kimi Code Bench v2 62.0% (already), ProgramBench 53.6% (already), MLS-Bench Lite 35.1% (already), CursorBench 3.2 49.7% (already), AA-SciCode 47.8% (already), OpenHarmony Bench 52.1% (already), AA Coding Index 60.8% (already), LiveCodeBench Vals 82.1% (already), SWE-bench Vals 78.2% (already), Design Arena 1261, FrontierMath v2 54.035%/12.195%. Corroborates band; no change.
- **Cost efficiency: 86/100.** Cheap $0.67-$0.95 / 1M input.
- **Overall Score: 74/100.** Mean of five quality dims (BenchLM aggregate 49.51); best-fit for coding agents at low cost. Enrichment (2026-11-08) added new verified rows (Kimi Claw 24/7 46.9%, MCP Atlas 76%, MCP Mark Verified 81.1%, τ²-bench 90.1%, GDPval-AA 26.9% normalized/1114 Elo, AA Agentic Index 22.5%, GDPval-AA 1114 Elo, Terminal-Bench 2.1 Vals 67.0%, terminalBenchHard 44.7%, AA-GPQA 89.6%, AA-HLE 35.0%, AA-LCR 79.3%, CritPt 10.0%, AA-IFBench 63.1%, Kimi Code Bench v2 62.0%, ProgramBench 53.6%, MLS-Bench Lite 35.1%, CursorBench 3.2 49.7%, AA-SciCode 47.8%, OpenHarmony Bench 52.1%, AA Coding Index 60.8%, LiveCodeBench Vals 82.1%, SWE-bench Vals 78.2%, Design Arena 1261, FrontierMath v2 54.035%/12.195%). No dimension band moved; Overall unchanged at 74.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Kimi K2.7 Code](https://benchlm.ai/models/kimi-k2-7-code)
  - [Artificial Analysis — Kimi K2.7 Code](https://artificialanalysis.ai/models/kimi-k2-7-code)
  - [Kimi K2.7 Code — HuggingFace](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).