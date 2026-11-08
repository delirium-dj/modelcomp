# Gemini 3.7 Flash — findings by Beam

- Source: Google/Gemini 3.7 Flash, `google/gemini-3.7-flash`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's "most intelligent workhorse" Flash (Aug 13, 2026) for coding, agentic workflows, multi-step execution; deprecated and auto-routed to 3.8 Flash. Improved safeguards in CBRN and cyber offense.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.7-flash` (deprecated → 3.8 Flash); OpenRouter.
- **Release / knowledge:** Released 2026-08-13; knowledge cutoff not stated.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, file (PDF) in; text out; reasoning yes (low/medium/high thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $0.75 / 1M input, $3.75 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **85.8%**; Terminal-Bench 3.0: **14.9%**
- Terminal-Bench 2.1 (Vals): **77.5%**
- AutomationBench: **30.4%**
- OSWorld 2.0: **47.9%**
- Agents' Last Exam: **26.3%**
- ApprenticeBench: **16%**; MazeBench: **1%**
- Agentic public-lane (BenchLM): **59.2** (#29/128)
- GDPval-AA: **1525 Elo** / 44.6% (AA)
- AA Agentic Index: **36.4%** (Artificial Analysis)
- AA-AnalystAgent: **60.0%** (Artificial Analysis)
- AA ITBench: not individually reported
- AA Tau3 Banking: not individually reported
- aaTerminalBench21: **85.8%** (Artificial Analysis)
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- MazeBench: **1%** (MazeBench)
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- ARC-AGI-1: **95.50%**; ARC-AGI-2: **84.6%**; ARC-AGI-3: not reported
- MRCR v2 64K-128K: **97%**
- HLE-Verified: **53.6%** (from 3.8 Flash model card cross-ref)
- BioMysteryBench (human-solvable): **87.1%**; (human-difficult): **43.5%**
- FrontierMath v2 (Tiers 1-3): **71.579%**; Tier 4: **36.585%**
- AA Intelligence Index: **39.1%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **94.5%** (Artificial Analysis)
- AA-HLE: **47.9%** (Artificial Analysis)
- AA-Omniscience Index: **26.5%**
- AA-Omniscience Accuracy: **55.3%**
- AA-Omniscience Hallucination Rate: **64.5%**
- AA-LCR: **81.7%** (Artificial Analysis)
- CritPt: **14.3%** (Artificial Analysis)
- MLCR-AA: not individually reported
- GPQA Diamond (Vals): **93.9%** (Vals AI)
- MMLU-Pro (Vals): **90.1%** (Vals AI)
- AA-IFBench: not individually reported
- Gray Swan IPI: not individually reported
- FrontierMath v2 Tiers 1-3: **71.579%**; Tier 4: **36.585%** (Epoch AI)

Coding:

- DeepSWE: **65.3%**
- AA-SciCode: **57.2%**
- Coding public-lane (BenchLM): **57.6** (#24/150)
- FrontierCode 1.1 Main: **43.6%**
- SWE-bench Verified/Pro: no verified public score found
- LiveCodeBench (Vals): **88.7%** (Vals AI)
- SWE-bench (Vals): **80.8%** (Vals AI)
- AA Coding Index: **76.1%** (Artificial Analysis)
- FrontierSWE v2: **20.3%** (Proximal)
- CursorBench 4.0: not individually reported
- Bug Hunt Bench: not individually reported
- ExtractBench (LlamaIndex): not individually reported
- ParseBench: **70.37%** (ParseBench)
- CharXiv: **88.7%**; CharXiv w/o tools: **84.5%**
- LVBench: **85.4%**
- AA-MMMU-Pro: **85.5%** (Artificial Analysis)
- Design Arena Website: **1301** (OpenRouter)

Long context:

- 1M window; MRCR v2 64K-128K 97%; CharXiv 88.7%, CharXiv w/o tools 84.5%, LVBench 85.4%.

Multimodal:

- CharXiv: **88.7%**; CharXiv w/o tools: **84.5%**; LVBench: **85.4%**; AA-MMMU-Pro: **85.5%**; ParseBench: **70.37%**; Design Arena: **1301**.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Terminal-Bench 2.1 85.8%, agentic lane #29/128 (59.2), OSWorld 47.9%, AutomationBench 30.4%; caps at Agents' Last Exam 26.3%. Enrichment (2026-11-08): added AA Intelligence 39.1%, AA-GPQA 94.5%, AA-HLE 47.9%, AA-Omniscience 26.5%/55.3%/64.5%, AA-LCR 81.7%, CritPt 14.3%, GPQA Diamond Vals 93.9%, MMLU-Pro Vals 90.1%, LiveCodeBench Vals 88.7%, SWE-bench Vals 80.8%, AA Coding Index 76.1%, FrontierSWE v2 20.3%, ParseBench 70.37%, CharXiv 88.7%, CharXiv w/o tools 84.5%, LVBench 85.4%, AA-MMMU-Pro 85.5%, Design Arena 1301, FrontierMath v2 71.579%/36.585%. Corroborates band; no change.
- **Reasoning: 82/100.** ARC-AGI-1 95.5%, ARC-AGI-2 84.6%, HLE-Verified 53.6%, FrontierMath Tier4 36.585%; caps at MRCR beyond 128K not reported. Enrichment adds AA Intelligence 39.1%, AA-GPQA 94.5%, AA-HLE 47.9%, AA-Omniscience 26.5%/55.3%/64.5%, AA-LCR 81.7%, CritPt 14.3%, GPQA Diamond Vals 93.9%, MMLU-Pro Vals 90.1%, FrontierMath v2 71.579%/36.585%. Corroborates band; no change.
- **Context window: 82/100.** 1M window with MRCR v2 97% at 64K-128K; caps at no published beyond-128K retrieval.
- **Multimodal: 88/100.** Text/image/video/audio/PDF in; CharXiv 88.7%, LVBench 85.4%. Enrichment adds ParseBench 70.37%, CharXiv 88.7%, CharXiv w/o tools 84.5%, LVBench 85.4%, AA-MMMU-Pro 85.5%, Design Arena 1301. Corroborates band; no change.
- **Coding: 74/100.** DeepSWE 65.3%, AA-SciCode 57.2%, coding lane #24/150 (57.6); caps at unverified SWE-bench. Enrichment adds DeepSWE 65.3%, AA-SciCode 57.2%, LiveCodeBench Vals 88.7%, SWE-bench Vals 80.8%, AA Coding Index 76.1%, FrontierSWE v2 20.3%, ParseBench 70.37%. Corroborates band; no change.
- **Cost efficiency: 90/100.** Low pricing $0.75/$3.75 per 1M.
- **Overall Score: 80/100.** Mean of five quality dims (BenchLM aggregate 66.82); best-fit for high-volume agentic + multimodal at low cost (deprecated → use 3.8 Flash). Enrichment (2026-11-08) added new verified rows (AA Intelligence 39.1%; AA-GPQA 94.5%; AA-HLE 47.9%; AA-Omniscience 26.5%/55.3%/64.5%; AA-LCR 81.7%; CritPt 14.3%; GPQA Diamond Vals 93.9%; MMLU-Pro Vals 90.1%; LiveCodeBench Vals 88.7%; SWE-bench Vals 80.8%; AA Coding Index 76.1%; FrontierSWE v2 20.3%; ParseBench 70.37%; CharXiv 88.7%; CharXiv w/o tools 84.5%; LVBench 85.4%; AA-MMMU-Pro 85.5%; Design Arena 1301; FrontierMath v2 71.579%/36.585%). No dimension band moved; Overall unchanged at 80.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Gemini 3.7 Flash](https://benchlm.ai/models/gemini-3-7-flash)
  - [Artificial Analysis — Gemini 3.7 Flash](https://artificialanalysis.ai/models/gemini-3-7-flash)
  - [Google DeepMind — Gemini 3.7 Flash model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).