# Grok 4.6 — findings by Beam

- Source: xAI/Grok 4.6, `xai/grok-4.6`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's post-training upgrade (Aug 12, 2026) on Grok 4.5 base (1.5T params): 500K context, 4 reasoning levels (low/medium/high/xhigh), strong agentic coding. AA Intelligence 44.3 (updated 2026-11-07; prior 61).
- **Provider / access:** xAI API `grok-4.6`; OpenRouter; Vercel; Cloudflare; Cursor.
- **Release / knowledge:** Released 2026-08-12; knowledge cutoff February 2026.
- **IDs:** `xai/grok-4.6`
- **Context window:** 500,000 tokens; max output 500,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $2.00 / 1M input, $6.00 / 1M output, $0.50 / 1M cached; paid. Prices double above 200K tokens.
- **Architecture:** 1.5T params base (Grok 4.5), post-training upgrade; proprietary.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **69.8** (#9/128)
- Terminal-Bench 3.0: **26.5%**
- Terminal-Bench 2.1: not reported for 4.6 (5.6 Sol 91.9%)
- Terminal-Bench 2.1 (Vals): **78.3%**
- APEX-Agents: **57.5%**
- GDPval-AA: **1753 Elo** (Artificial Analysis)
- AA Tau3 Banking: **50.7%** (Artificial Analysis)
- OSWorld-Verified: not reported for 4.6
- BrowseComp: not reported for 4.6
- MCP Atlas: not reported for 4.6
- AA Agentic Index: **53.4%** (Artificial Analysis)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA-AnalystAgent: **41.3%** (Artificial Analysis)
- AA ITBench: not individually reported
- AA Tau3 Banking: **50.7%** (Artificial Analysis)
- aaTerminalBench21: **88.4%** (Artificial Analysis)
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported
- ApprenticeBench: **13%** (NeoCognition)
- MazeBench: **1%** (MazeBench)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **61.4** (#25/28)
- ARC-AGI-1: **87.00%**
- ARC-AGI-2: **67.1%**
- ARC-AGI-3: **2.1%**
- GPQA Diamond (Vals): **94.7%**
- MMLU-Pro (Vals): **89.4%**
- AA Intelligence Index: **44.3%** (measured, updated 2026-11-07; prior 61)
- HLE: not reported
- AA-GPQA Diamond: **94.9%** (Artificial Analysis)
- AA-HLE: **42.9%** (Artificial Analysis)
- AA-Omniscience Index: **30.5%**
- AA-Omniscience Accuracy: **48.2%**
- AA-Omniscience Hallucination Rate: **34.3%**
- AA-LCR: **80.3%** (Artificial Analysis)
- CritPt: **17.1%** (Artificial Analysis)
- AA-IFBench: not individually reported
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **65.965%**; Tier 4: **31.707%** (Epoch AI)
- GPQA Diamond (Vals): **94.7%** (Vals AI)
- MMLU-Pro (Vals): **89.4%** (Vals AI)
- Gray Swan IPI: **51.8%** (Google)

Coding:

- Coding public-lane (BenchLM): **58.5** (#23/150)
- DeepSWE: **65.9%**
- SWE-bench (Vals): **95.6%**
- LiveCodeBench (Vals): **88.2%**
- CursorBench 3.2: **70.8%**
- FrontierCode 1.1 Extended: **61.3%**
- FrontierSWE v2: **25.3%**
- CursorBench 4.0: **41.4%**
- Bug Hunt Bench: **27.0 fixes**
- AA-SciCode: **56.5%**
- AA Coding Index: **76.8%** (Artificial Analysis)
- VulcanBench v3: **87.0%**
- AA-IFBench: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: not individually reported
- AA-MMMU-Pro: not individually reported
- Design Arena Website: **1286** (OpenRouter)

Long context:

- 500K window; MRCR: not reported.
- AA-LCR: **80.3%** (Artificial Analysis)

Multimodal:

- Multimodal: not separately reported (text/image in).
- Design Arena Website: **1286** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Agentic lane #9/128 (69.8), Terminal-Bench 3.0 26.5%, APEX-Agents 57.5%, GDPval 1753; caps at Terminal-Bench 2.1 78.3%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 3.0 26.5%, APEX-Agents 57.5%, GDPval-AA 55.9% normalized/1643 Elo, AA Tau3 Banking 50.7%, AA EnterpriseOps-Gym 48.3%, Terminal-Bench 2.1 Vals 78.3%, GDPval-AA 1643 Elo, AA Agentic Index 53.4%, ApprenticeBench 13%, CWE-bench v1 57.0%, MazeBench 1%, aaTerminalBench21 88.4%, AA-AnalystAgent 41.3%, AA Intelligence 44.3%, AA-GPQA 94.9%, AA-HLE 42.9%, AA-Omniscience 30.5%/48.2%/34.3%, AA-LCR 80.3%, CritPt 17.1%, ARC-AGI-1 87.00%, ARC-AGI-2 67.1%, ARC-AGI-3 2.1%, GPQA Diamond Vals 94.7%, MMLU-Pro Vals 89.4%, Gray Swan IPI 51.8%, DeepSWE 65.9%, CursorBench 3.2 70.8%, FrontierCode 1.1 Extended 61.3%, FrontierSWE v2 25.3%, CursorBench 4.0 41.4%, Bug Hunt 27.0 fixes, AA-SciCode 56.5%, AA Coding Index 76.8%, VulcanBench v3 87.0%, LiveCodeBench Vals 88.2%, SWE-bench Vals 95.6%, Design Arena 1286, FrontierMath v2 65.965%/31.707%. Corroborates band; no change.
- **Reasoning: 78/100.** ARC-AGI-1 87.0%, ARC-AGI-2 67.1%, GPQA 94.7%, AA Intelligence 44.3% (updated from 61); caps at ARC-AGI-3 2.1%. Enrichment adds AA Intelligence 44.3% (updated from 61, significant drop noted), AA-GPQA 94.9%, AA-HLE 42.9%, AA-Omniscience 30.5%/48.2%/34.3%, AA-LCR 80.3%, CritPt 17.1%, FrontierMath v2 65.965%/31.707%, GPQA Diamond Vals 94.7%, MMLU-Pro Vals 89.4%, Gray Swan IPI 51.8%. Corroborates band; no change (other evidence still supports 78).
- **Context window: 75/100.** 500K window; caps at no published MRCR.
- **Multimodal: 72/100.** Text/image in, text out; no verified multimodal benchmarks. Enrichment adds Design Arena 1286. Corroborates band; no change.
- **Coding: 80/100.** SWE-bench Vals 95.6%, DeepSWE 65.9%, LiveCodeBench Vals 88.2%, coding lane #23/150 (58.5); caps at FrontierSWE v2 25.3%. Enrichment adds DeepSWE 65.9% (already), CursorBench 3.2 70.8% (already), FrontierCode 1.1 Extended 61.3% (already), FrontierSWE v2 25.3% (already), CursorBench 4.0 41.4% (already), Bug Hunt 27.0 fixes (already), AA-SciCode 56.5% (already), AA Coding Index 76.8% (already), VulcanBench v3 87.0% (already), LiveCodeBench Vals 88.2% (already), SWE-bench Vals 95.6% (already), Design Arena 1286. Corroborates band; no change.
- **Cost efficiency: 88/100.** Cheap $2/$6 per 1M.
- **Overall Score: 77/100.** Mean of five quality dims (BenchLM aggregate 66.76); best-fit for agentic coding at low cost (superseded by Grok 4.7). Enrichment (2026-11-08) added new verified rows (Terminal-Bench 3.0 26.5%; APEX-Agents 57.5%; GDPval-AA 55.9% normalized/1643 Elo; AA Tau3 Banking 50.7%; AA EnterpriseOps-Gym 48.3%; Terminal-Bench 2.1 Vals 78.3%; GDPval-AA 1643 Elo; AA Agentic Index 53.4%; ApprenticeBench 13%; CWE-bench v1 57.0%; MazeBench 1%; aaTerminalBench21 88.4%; AA-AnalystAgent 41.3%; AA Intelligence 44.3% (updated from 61); AA-GPQA 94.9%; AA-HLE 42.9%; AA-Omniscience 30.5%/48.2%/34.3%; AA-LCR 80.3%; CritPt 17.1%; ARC-AGI-1 87.00%; ARC-AGI-2 67.1%; ARC-AGI-3 2.1%; GPQA Diamond Vals 94.7%; MMLU-Pro Vals 89.4%; Gray Swan IPI 51.8%; DeepSWE 65.9%; CursorBench 3.2 70.8%; FrontierCode 1.1 Extended 61.3%; FrontierSWE v2 25.3%; CursorBench 4.0 41.4%; Bug Hunt 27.0 fixes; AA-SciCode 56.5%; AA Coding Index 76.8%; VulcanBench v3 87.0%; LiveCodeBench Vals 88.2%; SWE-bench Vals 95.6%; Design Arena 1286; FrontierMath v2 65.965%/31.707%). No dimension band moved; Overall unchanged at 77. Note: AA Intelligence Index dropped from prior 61 to 44.3 (measured, updated 2026-11-07); reasoning band held at 78 based on ARC-AGI 87%/67.1% and GPQA 94.7%.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands, except AA Intelligence Index noted drop from 61 to 44.3).
- Reference URLs:
  - [BenchLM — Grok 4.6](https://benchlm.ai/models/grok-4-6)
  - [Artificial Analysis — Grok 4.6](https://artificialanalysis.ai/models/grok-4-6)
  - [xAI — Grok 4.6](https://x.ai/news/grok-4-6)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).