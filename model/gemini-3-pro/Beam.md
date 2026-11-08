# Gemini 3 Pro — findings by Beam

- Source: Google/Gemini 3 Pro, `google/gemini-3-pro`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's advanced multimodal reasoning model (Nov 2025) with Deep Think mode; basis for the Gemini 3 family (3.1 Pro, 3 Flash, etc.). Comprehends text, audio, images, video, and code repos.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3-pro`; Gemini app.
- **Release / knowledge:** Released November 2025; knowledge cutoff January 2025.
- **IDs:** `google/gemini-3-pro`
- **Context window:** 1,000,000 tokens (per family); max output not stated.
- **Modalities:** text, image, video, audio, file (PDF) in; text out; reasoning yes (Deep Think); tool calling yes; structured output yes.
- **Pricing (as of 2026-11-08):** $2.00 / 1M input, $12.00 / 1M output (family tier); paid.
- **Architecture:** sparse MoE transformer, native multimodal; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic lane: not individually reported (BenchLM overall 61.17)
- Terminal-Bench 2.0: not reported for 3 Pro
- τ²-bench: not reported for 3 Pro
- APEX-Agents-AA: not individually reported
- Gert Labs: **63.23%** (Gert Labs)
- JobBench: **11.4%** (JobBench paper)
- ResearchClawBench: not individually reported
- AA EnterpriseOps-Gym: not individually reported
- Terminal-Bench 2.1 (Vals): not individually reported
- AA Agentic Index: not individually reported
- AA-AnalystAgent: not individually reported
- MazeBench: not individually reported
- AA ITBench: not individually reported
- AA Tau3 Banking: not individually reported
- aaTerminalBench21: not individually reported
- AA Terminal-Bench 4.0: not individually reported
- GDP.pdf: not individually reported
- AA Briefcase: not individually reported
- AA AutomationBench: not individually reported
- OSWorld 2.1: not individually reported
- AA Cyber Index: not individually reported
- CWE-Bench-AA: not individually reported
- DeepsecBench-AA: not individually reported
- CyberGym-E2E-AA: not individually reported

Reasoning / knowledge:

- ARC-AGI-2: **31.1%** (vs 3.1 Pro 77.1%)
- HLE: not reported for 3 Pro
- GPQA Diamond: not reported for 3 Pro
- MMLU-Pro: not reported for 3 Pro
- FrontierMath: not reported for 3 Pro
- Artificial Analysis Intelligence Index: **28.0%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **90.8%** (Artificial Analysis)
- AA-HLE: **39.7%** (Artificial Analysis)
- AA-Omniscience Index: **15.3%**
- AA-Omniscience Accuracy: **55.8%**
- AA-Omniscience Hallucination Rate: **91.5%**
- AA-LCR: **76.0%** (Artificial Analysis)
- CritPt: **9.1%** (Artificial Analysis)
- ARC-AGI-1: **75.00%** (ARC Prize)
- AA MMLU-Pro: **89.8%** (Artificial Analysis)
- AA-IFBench: **70.4%** (Artificial Analysis)
- AA Global-MMLU-Lite: **92.2%** (Artificial Analysis)
- AA AIME 2025: **95.7%** (Artificial Analysis)
- GPQA Diamond (Vals): not individually reported
- MMLU-Pro (Vals): not individually reported
- FrontierMath v2 Tiers 1-3: **59.649%**; Tier 4: **26.829%** (Epoch AI)

Coding:

- SWE-bench Verified: **76.2%**
- LiveCodeBench: not reported for 3 Pro
- Coding lane: **43** (estimated #59/150)
- Vibe Code Bench: **14.30%** (Vals AI)
- AA LiveCodeBench: **91.7%** (Artificial Analysis)
- AA-SciCode: not individually reported
- AA Coding Index: not individually reported
- PostTrainBench v1.1: not individually reported
- Bug Hunt Bench: not individually reported

Long context:

- 1M window; MRCR: not reported for 3 Pro.
- AA-LCR: **76.0%** (Artificial Analysis)

Multimodal:

- MMMU: **87.2%**
- MMMU-Pro: **81%**
- RealWorldQA: **83.3%**
- OmniDocBench 1.5: **88.5%**
- Video-MME (with subtitle): **88.4%**
- Video-MME (w/o subtitle): **87.7%**
- MathVision: **86.6%**
- We-Math: **86.9%**
- DynaMath: **85.1%**
- SimpleVQA: **73.2%**
- MMLongBench-Doc: **60.5%**
- CC-OCR: **79.0%**
- AI2D_TEST: **94.1%**
- CountBench: **97.3%**
- RefCOCO (avg): **84.1%**
- ODINW13: **46.3%**
- ERQA: **70.5%**
- VideoMMMU: **87.6%**
- MLVU (M-Avg): **83.0%**
- ScreenSpot Pro: **72.7%**
- CharXiv: **81.4%**
- V*: **88.0%**
- AA-MMMU-Pro: **80.2%**
- CharXiv: **81.4%** (vs 3.1 Pro 80.2%)
- ERQA: **70.5%** (vs 3.1 Pro 69.4%)
- SimpleVQA: **73.2%** (vs 3.1 Pro 72.4%)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** Agentic benchmarks not individually reported for 3 Pro; caps pending verification. Enrichment (2026-11-08): added APEX-Agents-AA not individually reported, Gert Labs 63.23%, JobBench 11.4%, ResearchClawBench not individually reported, AA EnterpriseOps-Gym not individually reported, Terminal-Bench 2.1 (Vals) not individually reported, AA Agentic Index not individually reported, AA-AnalystAgent not individually reported, MazeBench not individually reported, AA ITBench not individually reported, AA Tau3 Banking not individually reported, aaTerminalBench21 not individually reported, AA Terminal-Bench 4.0 not individually reported, GDP.pdf not individually reported, AA Briefcase not individually reported, AA AutomationBench not individually reported, OSWorld 2.1 not individually reported, AA Cyber Index not individually reported, CWE-Bench-AA not individually reported, DeepsecBench-AA not individually reported, CyberGym-E2E-AA not individually reported. No new verified rows; no change.
- **Reasoning: 72/100.** ARC-AGI-2 31.1% (weak vs 3.1 Pro 77.1%); caps at no published GPQA/HLE/FrontierMath. Enrichment adds Artificial Analysis Intelligence Index 28.0%, AA-GPQA 90.8%, AA-HLE 39.7%, AA-Omniscience 15.3%/55.8%/91.5%, AA-LCR 76.0%, CritPt 9.1%, ARC-AGI-1 75.00%, AA MMLU-Pro 89.8%, AA-IFBench 70.4%, AA Global-MMLU-Lite 92.2%, AA AIME 2025 95.7%, FrontierMath v2 59.649%/26.829%. Corroborates band; no change.
- **Context window: 80/100.** 1M window; caps at no published MRCR retrieval. Enrichment adds AA-LCR 76.0%. Corroborates band; no change.
- **Multimodal: 85/100.** Text/image/video/audio/PDF in; MMMU-Pro 81%, CharXiv 81.4%, ERQA 70.5%. Enrichment adds MMMU 87.2%, RealWorldQA 83.3%, OmniDocBench 1.5 88.5%, Video-MME rows, MathVision 86.6%, We-Math 86.9%, DynaMath 85.1%, SimpleVQA 73.2%, MMLongBench-Doc 60.5%, CC-OCR 79.0%, AI2D_TEST 94.1%, CountBench 97.3%, RefCOCO 84.1%, ODINW13 46.3%, ERQA 70.5%, VideoMMMU 87.6%, MLVU 83.0%, ScreenSpot Pro 72.7%, CharXiv 81.4%, V* 88.0%, AA-MMMU-Pro 80.2%. Corroborates band; no change.
- **Coding: 65/100.** SWE-bench Verified 76.2%; caps at no published LiveCodeBench/SWE-bench Pro. Enrichment adds Vibe Code Bench 14.30%, AA LiveCodeBench 91.7%, FrontierMath v2 59.649%/26.829%. Corroborates band; no change.
- **Cost efficiency: 80/100.** Mid-tier $2/$12 per 1M (family pricing).
- **Overall Score: 73/100.** Mean of five quality dims (BenchLM aggregate 61.17); superseded by Gemini 3.1 Pro. Enrichment (2026-11-08) added new verified rows (Artificial Analysis Intelligence Index 28.0%; AA-GPQA 90.8%; AA-HLE 39.7%; AA-Omniscience 15.3%/55.8%/91.5%; AA-LCR 76.0%; CritPt 9.1%; ARC-AGI-1 75.00%; AA MMLU-Pro 89.8%; AA-IFBench 70.4%; AA Global-MMLU-Lite 92.2%; AA AIME 2025 95.7%; FrontierMath v2 59.649%/26.829%; MMMU 87.2%; RealWorldQA 83.3%; OmniDocBench 1.5 88.5%; Video-MME rows; MathVision 86.6%; We-Math 86.9%; DynaMath 85.1%; SimpleVQA 73.2%; MMLongBench-Doc 60.5%; CC-OCR 79.0%; AI2D_TEST 94.1%; CountBench 97.3%; RefCOCO 84.1%; ODINW13 46.3%; ERQA 70.5%; VideoMMMU 87.6%; MLVU 83.0%; ScreenSpot Pro 72.7%; CharXiv 81.4%; V* 88.0%; AA-MMMU-Pro 80.2%; Vibe Code Bench 14.30%; AA LiveCodeBench 91.7%). No dimension band moved; Overall unchanged at 73.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Gemini 3 Pro](https://benchlm.ai/models/gemini-3-pro)
  - [Artificial Analysis — Gemini 3 Pro](https://artificialanalysis.ai/models/gemini-3-pro)
  - [Google DeepMind — Gemini 3](https://blog.google/products-and-platforms/products/gemini/gemini-3/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).