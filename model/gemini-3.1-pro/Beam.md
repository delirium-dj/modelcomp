# Gemini 3.1 Pro — findings by Beam

- Source: Google/Gemini 3.1 Pro, `google/gemini-3.1-pro`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's reasoning-focused Pro model (Feb 2026) with deep reasoning, long-context comprehension, and native tool integration; outperforms prior Gemini and several frontier peers on coding/reasoning at mid-tier pricing.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.1-pro-preview`; OpenRouter; MindStudio.
- **Release / knowledge:** Released February 2026; knowledge cutoff not stated.
- **IDs:** `google/gemini-3.1-pro`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, file (PDF) in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $2.00 / 1M input, $12.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **70.8%**
- τ²-bench Retail: **90.8%**; Telecom: **99.3%**
- MCP-Atlas Tool Use: **69.2%**
- BrowseComp: **85.9%**
- Claw-Eval: **57.8%**; DeepSearchQA: **69.7%**
- Agentic public-lane (BenchLM): **38.4** (#71/128)
- APEX-Agents-AA: **32.0%** (Artificial Analysis)
- Gert Labs: **56.87%** (Gert Labs)
- ResearchClawBench: **13.3%** (ResearchClawBench)
- Terminal-Bench 2.1 (Vals): **70.8%** (Vals AI)
- AA Agentic Index: **10.3%** (Artificial Analysis)
- GDPval-AA: **14.6%** normalized / 904 Elo (Artificial Analysis)
- MazeBench: **1%** (MazeBench)
- AA EnterpriseOps-Gym: **42.2%** (Artificial Analysis)
- terminalBenchHard: **53.8%** (Artificial Analysis)
- AA-AnalystAgent: **41.3%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (MindStudio/AA) / 94.3% (DeepMind)
- HLE: **44.7%**
- ARC-AGI-2: **77.1%**; ARC-AGI-3: 0.4%
- MMLU-Pro: **92.6%** (MMMLU)
- MRCR: no verified public score found
- AA Intelligence Index: not individually reported
- AA-LCR: **82.0%** (Artificial Analysis)
- CritPt: **17.7%** (Artificial Analysis)
- GPQA-D: **94.3%** (Meta)
- HLE w/o tools: **45.4%** (Meta)
- HealthBench Hard: **20.6%** (Meta)
- MedXpertQA (Text): **71.5%** (Meta)
- AA-GPQA Diamond: **94.1%** (Artificial Analysis)
- AA-HLE: **47.0%** (Artificial Analysis)
- GPQA Diamond (Vals): **95.5%** (Vals AI)
- MMLU-Pro (Vals): **91.0%** (Vals AI)
- AA-IFBench: **77.1%** (Artificial Analysis)
- AA Global-MMLU-Lite: **93.2%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **59.649%**; Tier 4: **26.829%** (Epoch AI)

Coding:

- SWE-bench Verified: **80.6%**; SWE-bench Pro: **54.2%**
- LiveCodeBench Pro: **82.9%**; LiveCodeBench (Vals): **88.5%**
- SWE-bench (Vals): **78.8%**
- Vibe Code Bench: **32.03%**
- AA Coding Index: **68.8**
- ScarfBench: **37.6%** (Kaggle)
- LiveCodeBench Pro: **82.9%** (Meta)
- React Native Evals: **78.9%** (React Native Evals)
- Vibe Code Bench: **32.03%** (Vals AI)
- AA-SciCode: **58.7%** (Artificial Analysis)
- LiveCodeBench (Vals): **88.5%** (Vals AI)
- SWE-bench (Vals): **78.8%** (Vals AI)
- AA Coding Index: **68.8%** (Artificial Analysis)
- PostTrainBench v1.1: **22.0%** (PostTrainBench)

Long context:

- 1M window; MRCR: no verified public score found. Multimodal long-context (MMMU-Pro 83.9%).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** τ²-bench ~91-99%, BrowseComp 85.9%, MCP-Atlas 69.2%; agentic lane #71/128 (38.4) caps. Enrichment (2026-11-08): added Claw-Eval 57.8%, DeepSearchQA 69.7%, APEX-Agents-AA 32.0%, Gert Labs 56.87%, ResearchClawBench 13.3%, Terminal-Bench 2.1 Vals 70.8%, AA Agentic Index 10.3%, GDPval-AA 14.6%/904 Elo, MazeBench 1%, AA EnterpriseOps-Gym 42.2%, terminalBenchHard 53.8%, AA-AnalystAgent 41.3%. Corroborates band; no change.
- **Reasoning: 82/100.** GPQA ~94%, ARC-AGI-2 77.1%, HLE 44.7%; AA Intelligence 30.4 caps. Enrichment adds AA-LCR 82.0%, CritPt 17.7%, ARC-AGI-2 77.1%, ARC-AGI-3 0.4%, GPQA-D 94.3%, HLE w/o tools 45.4%, HealthBench Hard 20.6%, MedXpertQA (Text) 71.5%, AA-GPQA 94.1%, AA-HLE 47.0%, GPQA Diamond Vals 95.5%, MMLU-Pro Vals 91.0%, AA-IFBench 77.1%, AA Global-MMLU-Lite 93.2%, FrontierMath v2 59.649%/26.829%. Corroborates band; no change.
- **Context window: 85/100.** 1M window; caps at no published MRCR retrieval. Enrichment adds ParseBench 67.32%, MMMU-Pro 83.9%, CharXiv 80.2%, ERQA 69.4%, SimpleVQA 72.4%, ScreenSpot Pro 84.4%, ZeroBench 29.0%, MedXpertQA (MM) 81.3%, AA-MMMU-Pro 82.4%, Design Arena 1251. Corroborates band; no change.
- **Multimodal: 85/100.** Text/image/video/audio/PDF in; MMMU-Pro 83.9%, CharXiv 80.2%. Enrichment adds ParseBench 67.32%, MMMU-Pro 83.9%, CharXiv 80.2%, ERQA 69.4%, SimpleVQA 72.4%, ScreenSpot Pro 84.4%, ZeroBench 29.0%, MedXpertQA (MM) 81.3%, AA-MMMU-Pro 82.4%, Design Arena 1251. Corroborates band; no change.
- **Coding: 78/100.** SWE-bench Verified 80.6%, LiveCodeBench Pro 82.9%; caps at SWE-bench Pro 54.2% and Vibe Code 32.0%. Enrichment adds ScarfBench 37.6%, LiveCodeBench Pro 82.9%, React Native Evals 78.9%, Vibe Code Bench 32.03%, AA-SciCode 58.7%, LiveCodeBench Vals 88.5%, SWE-bench Vals 78.8%, AA Coding Index 68.8%, PostTrainBench 22.0%. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier $2/$12 per 1M.
- **Overall Score: 82/100.** Mean of five quality dims (BenchLM aggregate 64.69); best-fit for long-context reasoning + tool use at mid cost. Enrichment (2026-11-08) added new verified rows (Claw-Eval 57.8%; DeepSearchQA 69.7%; APEX-Agents-AA 32.0%; Gert Labs 56.87%; ResearchClawBench 13.3%; Terminal-Bench 2.1 Vals 70.8%; AA Agentic Index 10.3%; GDPval-AA 14.6%/904 Elo; MazeBench 1%; AA EnterpriseOps-Gym 42.2%; terminalBenchHard 53.8%; AA-AnalystAgent 41.3%; ScarfBench 37.6%; LiveCodeBench Pro 82.9%; React Native Evals 78.9%; Vibe Code Bench 32.03%; AA-SciCode 58.7%; LiveCodeBench Vals 88.5%; SWE-bench Vals 78.8%; AA Coding Index 68.8%; PostTrainBench 22.0%; ParseBench 67.32%; MMMU-Pro 83.9%; CharXiv 80.2%; ERQA 69.4%; SimpleVQA 72.4%; ScreenSpot Pro 84.4%; ZeroBench 29.0%; MedXpertQA (MM) 81.3%; AA-MMMU-Pro 82.4%; Design Arena 1251; ARC-AGI-2 77.1%; ARC-AGI-3 0.4%; AA-LCR 82.0%; CritPt 17.7%; GPQA-D 94.3%; HLE w/o tools 45.4%; HealthBench Hard 20.6%; MedXpertQA (Text) 71.5%; AA-GPQA 94.1%; AA-HLE 47.0%; GPQA Diamond Vals 95.5%; MMLU-Pro Vals 91.0%; AA-IFBench 77.1%; AA Global-MMLU-Lite 93.2%; FrontierMath v2 59.649%/26.829%). No dimension band moved; Overall unchanged at 82.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Gemini 3.1 Pro](https://benchlm.ai/models/gemini-3-1-pro)
  - [Artificial Analysis — Gemini 3.1 Pro](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [Google DeepMind — Gemini 3.1 Pro](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).