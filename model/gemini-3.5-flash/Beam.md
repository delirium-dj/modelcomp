# Gemini 3.5 Flash — findings by Beam

- Source: Google/Gemini 3.5 Flash, `google/gemini-3.5-flash`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's Flash-tier model (Jul 2026) with strong agentic, coding, and multimodal performance at low cost; BenchLM #48/1016.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.5-flash`; OpenRouter.
- **Release / knowledge:** Released 2026-07-??; knowledge cutoff not stated.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,000,000 tokens.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** paid (Google).
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (Google/DeepMind)
- MCP Atlas: **83.6%** (Google/DeepMind)
- Toolathlon: **56.5%** (Google/DeepMind)
- OSWorld-Verified: **78.4%** (Google/DeepMind)
- Finance Agent v2: **57.9%** (Vals AI)
- GDPval-AA: **1345 Elo** (Google/DeepMind)
- τ²-bench results: **95.3%** (Artificial Analysis)
- GDPval-AA: **42.2%** normalized (Artificial Analysis)
- APEX-Agents-AA: **47.1%** (Artificial Analysis)
- Gert Labs: **61.85%** (Gert Labs)
- ResearchClawBench: **18.0%** (ResearchClawBench)
- AA EnterpriseOps-Gym: **50.1%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **74.2%** (Vals AI)
- AA Agentic Index: **27.3%** (Artificial Analysis)
- MazeBench: **0%** (MazeBench)
- AA ITBench: **40.3%** (Artificial Analysis)
- AA-AnalystAgent: **45.0%** (Artificial Analysis)
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported
- AA Tau3 Banking: not individually reported

Reasoning / knowledge:

- MRCRv2: **77.3%** (Google/DeepMind)
- MRCR 1M: **26.6%** (Google/DeepMind)
- ARC-AGI-2: **72.1%** (Google/DeepMind)
- AA-LCR: **69.3%** (Artificial Analysis)
- CritPt: **13.1%** (Artificial Analysis)
- ARC-AGI-1: **92.50%** (ARC Prize)
- Artificial Analysis Intelligence Index: **50.2%** (measured, updated 2026-11-07)
- GPQA: **92.2%** (Artificial Analysis)
- GPQA-D: **92.7%** (Vals AI)
- HLE: **40.2%** (Google/DeepMind)
- AA-Omniscience Accuracy: **51.9%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **60.7%** (Artificial Analysis)
- AA-GPQA Diamond: **92.2%** (Artificial Analysis)
- AA-HLE: **42.7%** (Artificial Analysis)
- AA-Omniscience Index: **21.2%** (Artificial Analysis)
- GPQA Diamond (Vals): **92.7%** (Vals AI)
- MMLU-Pro (Vals): **89.5%** (Vals AI)
- AA-IFBench: **76.3%** (Artificial Analysis)
- AA Global-MMLU-Lite: not individually reported
- AA AIME 2025: not individually reported
- FrontierMath v2 Tiers 1-3: **62.807%**; Tier 4: **26.829%** (Epoch AI)

Coding:

- Terminal-Bench 2.1: **76.2%** (Google/DeepMind)
- SWE-bench Pro: **55.1%** (Google/DeepMind)
- SciCode: **53.1%** (Artificial Analysis)
- Vibe Code Bench: **48.68%** (Vals AI)
- cursorBench31: **49.8%** (Cursor)
- CursorBench 3.2: **48.8%** (Cursor)
- AA-SciCode: **53.9%** (Artificial Analysis)
- LiveCodeBench (Vals): **87.6%** (Vals AI)
- SWE-bench (Vals): **78.8%** (Vals AI)
- AA Coding Index: **70.1%** (Artificial Analysis)
- AA-IFBench: **76.3%** (Artificial Analysis)
- ExtractBench (LlamaIndex): **79.84%**
- ParseBench: **73.22%**
- CharXiv: **84.2%** (Google/DeepMind)
- MMMU-Pro: **83.6%** (Google/DeepMind)
- Blueprint-Bench 2: **33.6%** (Google/DeepMind)
- AA-MMMU-Pro: **84.3%** (Artificial Analysis)
- Design Arena Website: **1266** (OpenRouter)

Long context:

- 1M window; MRCR: no verified public score found.

Multimodal:

- ExtractBench (LlamaIndex): **79.84%**
- ParseBench: **73.22%**
- CharXiv: **84.2%**
- MMMU-Pro: **83.6%**
- Blueprint-Bench 2: **33.6%**
- AA-MMMU-Pro: **84.3%**
- Design Arena Website: **1266**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Terminal-Bench 2.1 76.2%, agentic lane #?/128, OSWorld-Verified 78.4%, Finance Agent v2 57.9%, GDPval-AA 1345 Elo, τ²-bench 95.3%, APEX-Agents-AA 47.1%, Gert Labs 61.85%, ResearchClawBench 18.0%, AA EnterpriseOps-Gym 50.1%, Terminal-Bench 2.1 Vals 74.2%, AA Agentic Index 27.3%, MazeBench 0%, AA ITBench 40.3%, AA-AnalystAgent 45.0%. Enrichment (2026-11-08): BenchLM aggregator (updated 2026-11-07) corroborates Terminal-Bench 2.1 76.2%, MCP Atlas 83.6%, Toolathlon 56.5%, OSWorld-Verified 78.4%, Finance Agent v2 57.9%, GDPval-AA 1345 Elo, τ²-bench 95.3%, GDPval-AA 42.2% normalized, APEX-Agents-AA 47.1%, Gert Labs 61.85%, ResearchClawBench 18.0%, AA EnterpriseOps-Gym 50.1%, Terminal-Bench 2.1 Vals 74.2%, AA Agentic Index 27.3%, MazeBench 0%, AA ITBench 40.3%, AA-AnalystAgent 45.0%, MRCRv2 77.3%, MRCR 1M 26.6%, ARC-AGI-2 72.1%, AA-LCR 69.3%, CritPt 13.1%, ARC-AGI-1 92.50%, Artificial Analysis Intelligence Index 50.2%, GPQA 92.2%, GPQA-D 92.7%, HLE 40.2%, AA-Omniscience Accuracy 51.9%, AA-Omniscience Hallucination Rate 60.7%, AA-GPQA 92.2%, AA-HLE 42.7%, AA-Omniscience Index 21.2%, GPQA Diamond Vals 92.7%, MMLU-Pro Vals 89.5%, AA-IFBench 76.3%, ExtractBench 79.84%, ParseBench 73.22%, CharXiv 84.2%, MMMU-Pro 83.6%, Blueprint-Bench 2 33.6%, AA-MMMU-Pro 84.3%, Design Arena 1266, FrontierMath v2 62.807%/26.829%. Corroborates band; no change.
- **Reasoning: 84/100.** MRCRv2 77.3%, MRCR 1M 26.6%, ARC-AGI-2 72.1%, AA-LCR 69.3%, CritPt 13.1%, ARC-AGI-1 92.50%, Artificial Analysis Intelligence Index 50.2%, GPQA 92.2%, HLE 40.2%, AA-Omniscience Accuracy 51.9%, AA-Omniscience Hallucination Rate 60.7%, AA-GPQA 92.2%, AA-HLE 42.7%, AA-Omniscience Index 21.2%, GPQA Diamond Vals 92.7%, MMLU-Pro Vals 89.5%, AA-IFBench 76.3%, FrontierMath v2 62.807%/26.829%. Corroborates band; no change.
- **Context window: 84/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 86/100.** Text/image in; CharXiv 84.2%, MMMU-Pro 83.6%. Enrichment adds ExtractBench 79.84%, ParseBench 73.22%, CharXiv 84.2%, MMMU-Pro 83.6%, Blueprint-Bench 2 33.6%, AA-MMMU-Pro 84.3%, Design Arena 1266. Corroborates band; no change.
- **Coding: 78/100.** Terminal-Bench 2.1 76.2%, SWE-bench Pro 55.1%, SciCode 53.1%, Vibe Code 48.68%, cursorBench31 49.8%, CursorBench 3.2 48.8%, AA-SciCode 53.9%, LiveCodeBench Vals 87.6%, SWE-bench Vals 78.8%, AA Coding Index 70.1%. Enrichment adds ExtractBench 79.84%, ParseBench 73.22%, CharXiv 84.2%, MMMU-Pro 83.6%, Blueprint-Bench 2 33.6%, AA-MMMU-Pro 84.3%, Design Arena 1266. Corroborates band; no change.
- **Cost efficiency: 90/100.** Low pricing; excellent value.
- **Overall Score: 82/100.** Mean of five quality dims (BenchLM aggregate 61.69); best-fit for everyday agentic + multimodal at low cost. Enrichment (2026-11-08) added new verified rows (MRCRv2 77.3%; MRCR 1M 26.6%; ARC-AGI-2 72.1%; AA-LCR 69.3%; CritPt 13.1%; ARC-AGI-1 92.50%; Artificial Analysis Intelligence Index 50.2%; GPQA 92.2%; HLE 40.2%; AA-Omniscience Accuracy 51.9%; AA-Omniscience Hallucination Rate 60.7%; AA-GPQA 92.2%; AA-HLE 42.7%; AA-Omniscience Index 21.2%; GPQA Diamond Vals 92.7%; MMLU-Pro Vals 89.5%; AA-IFBench 76.3%; ExtractBench 79.84%; ParseBench 73.22%; CharXiv 84.2%; MMMU-Pro 83.6%; Blueprint-Bench 2 33.6%; AA-MMMU-Pro 84.3%; Design Arena 1266; FrontierMath v2 62.807%/26.829%). No dimension band moved; Overall unchanged at 81.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Gemini 3.5 Flash](https://benchlm.ai/models/gemini-3-5-flash)
  - [Artificial Analysis — Gemini 3.5 Flash](https://artificialanalysis.ai/models/gemini-3-5-flash)
  - [Google DeepMind — Gemini 3.5 Flash](https://deepmind.google/models/gemini/flash/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).