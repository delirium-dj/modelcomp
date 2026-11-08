# Gemini 3.8 Flash — findings by Beam

- Source: Google/Gemini 3.8 Flash, `google/gemini-3.8-flash`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash-class reasoning model (Sep 2026) with significant gains over 3.7 Flash in agentic, coding, and multimodal tasks; optimized for high efficiency at low cost. Cyber variant (Gemini 3.8 Flash Cyber) exists for vulnerability discovery.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.8-flash` (Chat/Responses); OpenRouter `google/gemini-3.8-flash`; OpenCode Zen. Batch tier available.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not published.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 tokens; max output 65,536 (verified via OpenRouter/Kilo).
- **Modalities:** text, image, video, audio, file (PDF) in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $0.75 / 1M input, $3.75 / 1M output, $0.075 / 1M cached; paid. 50% off promo observed.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Meta/BenchLM head-to-head); **81.3%** (Vals)
- Agentic public-lane (BenchLM): **65.9** (#16/128)
- OSWorld 2.0: **59.0%**
- AutomationBench: no verified score found (coming soon)
- MCP-Atlas / Toolathlon: no verified score found
- GDPval-AA: no verified score found
- Finance Agent v2: **61.4%** (Google)
- GDPval-AA: **46.8%** normalized / 1545 Elo (Artificial Analysis)
- OSWorld 2.0: **59.0%** (Google)
- AA Agentic Index: **41.1%** (Artificial Analysis)
- ApprenticeBench: **24%** (NeoCognition)
- AA Briefcase: **1203** (Artificial Analysis)
- AA AutomationBench: **59.9%** (Artificial Analysis)
- AA ITBench: **52.5%** (Artificial Analysis)
- AA Tau3 Banking: **44.9%** (Artificial Analysis)
- aaTerminalBench21: **87.6%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **19.7%** (Artificial Analysis)
- GDP.pdf: **21.0%** (Artificial Analysis)
- AA-AnalystAgent: **46.3%** (Artificial Analysis)
- Hermes Index: **38.1%**; Hermes Bench: **62.2%** (Nous Research)
- MazeBench: **4%** (MazeBench)
- AA Cyber Index: **25.1%** (Artificial Analysis)
- CWE-Bench-AA: **52.5%** (Artificial Analysis)
- DeepsecBench-AA: **14.5%** (Artificial Analysis)
- CyberGym-E2E-AA: **8.4%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond (Vals): **94.4%**
- MMLU-Pro (Vals): **90.2%**
- ARC-AGI-1: **98.50%**; ARC-AGI-2: **89.2%**; ARC-AGI-3: 10.4%
- HLE: no verified public score found
- CritPt / MRCR: no verified public score found (MRCRv2 coming soon)
- Artificial Analysis Intelligence Index: **30.9%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **95.3%** (Artificial Analysis)
- AA-HLE: **47.8%** (Artificial Analysis)
- AA-Omniscience Index: **23.3%**
- AA-Omniscience Accuracy: **50.5%**
- AA-Omniscience Hallucination Rate: **55.1%**
- AA-LCR: **81.3%** (Artificial Analysis)
- CritPt: **18.3%** (Artificial Analysis)
- MLCR-AA: **10.6%** (Artificial Analysis)
- ARC-AGI-3 Provider Adapter: **35.00%** (ARC Prize)
- HLE-Verified: **54.9%** (Google)
- LABBench2: **86.2%** (Google)
- BioMysteryBench (human-solvable): **88.8%**; (human-difficult): **56.5%** (Google)
- GPQA Diamond (Vals): **94.4%** (Vals AI)
- MMLU-Pro (Vals): **90.2%** (Vals AI)
- Gray Swan IPI: **5.5%** (Google)
- FrontierMath v2 Tiers 1-3: **68.421%**; Tier 4: **21.951%** (Epoch AI)

Coding:

- DeepSWE: **73.8%**
- CursorBench 3.2: **69.2%**; CursorBench 4.0: 39.6%
- Coding public-lane (BenchLM): **61** (#17/150)
- FrontierSWE v2: 19.6%
- Bug Hunt Bench: 18.0 fixes
- SWE-bench Verified/Pro: no verified public score found
- LiveCodeBench: no verified public score found
- ScarfBench: **66.0%** (Kaggle)
- DeepSWE: **73.8%** (DeepSWE v1.1)
- Terminal-Bench 2.1: **89.4%** (Google)
- AA-SciCode: **56.6%** (Artificial Analysis)
- CursorBench 3.2: **69.2%** (Cursor)
- LiveCodeBench (Vals): **89.5%** (Vals AI)
- SWE-bench (Vals): **80.0%** (Vals AI)
- AA Coding Index: **76.3%** (Artificial Analysis)
- FrontierSWE v2: **19.6%** (Proximal)
- CursorBench 4.0: **39.6%** (Cursor)
- Bug Hunt Bench: **18.0 fixes** (Bug Hunt Bench)

Long context:

- 1M window; CharXiv w/o tools 86.2%, LVBench 87.1%; MRCR: no verified public score found.

Multimodal:

- CharXiv w/o tools: **86.2%**; LVBench: **87.1%**; AA-MMMU-Pro: **85.6%**
- ExtractBench (LlamaIndex): **80.71%**; ParseBench: **71.20%**
- CharXiv w/o tools: **86.2%** (Google)
- LVBench: **87.1%** (Google)
- AA-MMMU-Pro: **85.6%** (Artificial Analysis)
- Design Arena Website: **1298** (OpenRouter)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Terminal-Bench 2.1 ~89%, agentic lane #16/128 (65.9), OSWorld 59%; caps at unverified MCP-Atlas/Toolathlon. Enrichment (2026-11-08): added Finance Agent v2 61.4%, GDPval-AA 46.8% normalized/1545 Elo, OSWorld 2.0 59.0%, AA Agentic Index 41.1%, ApprenticeBench 24%, AA Briefcase 1203, AA AutomationBench 59.9%, AA ITBench 52.5%, AA Tau3 Banking 44.9%, aaTerminalBench21 87.6%, AA Terminal-Bench 4.0 19.7%, GDP.pdf 21.0%, AA-AnalystAgent 46.3%, Hermes Index 38.1%, Hermes Bench 62.2%, MazeBench 4%, AA Cyber 25.1%, CWE-Bench-AA 52.5%, DeepsecBench 14.5%, CyberGym-E2E 8.4%. Corroborates band; no change.
- **Reasoning: 85/100.** GPQA 94.4%, ARC-AGI-1 98.5%, ARC-AGI-2 89.2%; caps at ARC-AGI-3 10.4% and no HLE. Enrichment adds AA Intelligence 30.9%, AA-GPQA 95.3%, AA-HLE 47.8%, AA-Omniscience 23.3%/50.5%/55.1%, AA-LCR 81.3%, CritPt 18.3%, MLCR 10.6%, ARC-AGI-3 10.4%, ARC-AGI-3 Provider Adapter 35.00%, HLE-Verified 54.9%, LABBench2 86.2%, BioMysteryBench 88.8%/56.5%, GPQA Diamond Vals 94.4%, MMLU-Pro Vals 90.2%, Gray Swan IPI 5.5%, FrontierMath v2 68.421%/21.951%. Corroborates band; no change.
- **Context window: 85/100.** 1M window with strong multimodal long-context (LVBench 87.1%); caps at no published MRCR.
- **Multimodal: 90/100.** Text/image/video/audio/PDF in, text out; CharXiv 86.2%, LVBench 87.1%. Enrichment adds ExtractBench 80.71%, ParseBench 71.20%, CharXiv w/o tools 86.2%, LVBench 87.1%, AA-MMMU-Pro 85.6%, Design Arena 1298. Corroborates band; no change.
- **Coding: 80/100.** DeepSWE 73.8%, CursorBench 69.2%, coding lane #17/150 (61); caps at unverified SWE-bench. Enrichment adds ScarfBench 66.0%, DeepSWE 73.8%, Terminal-Bench 2.1 89.4%, AA-SciCode 56.6%, CursorBench 3.2 69.2%, LiveCodeBench Vals 89.5%, SWE-bench Vals 80.0%, AA Coding Index 76.3%, FrontierSWE v2 19.6%, CursorBench 4.0 39.6%, Bug Hunt 18.0 fixes. Corroborates band; no change.
- **Cost efficiency: 90/100.** Low pricing $0.75/$3.75 per 1M; excellent value.
- **Overall Score: 84/100.** Mean of five quality dims (BenchLM aggregate 69.23); best-fit for high-volume agentic + multimodal at low cost. Enrichment (2026-11-08) added new verified rows (Finance Agent v2 61.4%; GDPval-AA 46.8% normalized/1545 Elo; OSWorld 2.0 59.0%; AA Agentic Index 41.1%; ApprenticeBench 24%; AA Briefcase 1203; AA AutomationBench 59.9%; AA ITBench 52.5%; AA Tau3 Banking 44.9%; aaTerminalBench21 87.6%; AA Terminal-Bench 4.0 19.7%; GDP.pdf 21.0%; AA-AnalystAgent 46.3%; Hermes Index 38.1%; Hermes Bench 62.2%; MazeBench 4%; AA Cyber 25.1%; CWE-Bench-AA 52.5%; DeepsecBench 14.5%; CyberGym-E2E 8.4%; ScarfBench 66.0%; DeepSWE 73.8%; Terminal-Bench 2.1 89.4%; AA-SciCode 56.6%; CursorBench 3.2 69.2%; LiveCodeBench Vals 89.5%; SWE-bench Vals 80.0%; AA Coding Index 76.3%; FrontierSWE v2 19.6%; CursorBench 4.0 39.6%; Bug Hunt 18.0 fixes; ExtractBench 80.71%; ParseBench 71.20%; CharXiv w/o tools 86.2%; LVBench 87.1%; AA-MMMU-Pro 85.6%; Design Arena 1298; AA Intelligence 30.9%; AA-GPQA 95.3%; AA-HLE 47.8%; AA-Omniscience 23.3%/50.5%/55.1%; AA-LCR 81.3%; CritPt 18.3%; MLCR 10.6%; ARC-AGI-3 10.4%; ARC-AGI-3 Provider Adapter 35.00%; HLE-Verified 54.9%; LABBench2 86.2%; BioMysteryBench 88.8%/56.5%; GPQA Diamond Vals 94.4%; MMLU-Pro Vals 90.2%; Gray Swan IPI 5.5%; FrontierMath v2 68.421%/21.951%). No dimension band moved; Overall unchanged at 84.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Gemini 3.8 Flash](https://benchlm.ai/models/gemini-3-8-flash)
  - [Artificial Analysis — Gemini 3.8 Flash](https://artificialanalysis.ai/models/gemini-3-8-flash)
  - [Google DeepMind — Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).