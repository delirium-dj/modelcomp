# Kimi K3 — findings by Beam

- Source: Moonshot AI/Kimi K3, `moonshotai/kimi-k3`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's largest open-weight model (Jul 16, 2026): 2.8T params, strong coding and agentic tasks at much lower price than US frontier models. #5 of 226 on BenchLM; multimodal with 1M context.
- **Provider / access:** Moonshot API `kimi-k3`; OpenRouter; HuggingFace (open weights). Batch tier.
- **Release / knowledge:** Released 2026-07-16; knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k3`
- **Context window:** 1,000,000 tokens; max output up to 1,048,576 (Vals).
- **Modalities:** text, image in; text out; reasoning yes (max effort); tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-11-08):** $3.00 / 1M input, $15.00 / 1M output; paid (open weights self-host).
- **Architecture:** 2.8T params (MoE, ~? active); open weights; 1.02T-class serving variant (MiMo not related). License open.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Agentic public-lane (BenchLM): **69.4** (#10/128)
- Terminal-Bench 2.1: **88.3%**
- Terminal-Bench 2.1 (Vals): **80.9%**
- BrowseComp: **91.2%**
- DeepSearchQA: **95.0%**
- MCP Atlas: **84.2%**
- Toolathlon-Verified: **73.2%**
- AutomationBench: **30.8%**
- JobBench: **52.9%**
- Kimi Claw 24/7: not reported
- Finch: **77.3%** (Mistral)
- b3 Agent Security: **88.0%** (Mistral)
- Cyber Misuse Refusal: **94.0%** (Mistral)
- Terminal-Bench 2.1: **88.3%** (Moonshot)
- BrowseComp: **91.2%** (Moonshot)
- DeepSearchQA: **95.0%** (Moonshot)
- Toolathlon-Verified: **73.2%** (Moonshot)
- MCP Atlas: **84.2%** (Moonshot)
- AutomationBench: **30.8%** (Moonshot)
- JobBench: **52.9%** (Moonshot)
- APEX-Agents: **37.6%** (Moonshot)
- SpreadsheetBench 2: **34.8%** (Moonshot)
- DECK-Bench: **73.5%** (Moonshot)
- GDPval-AA: **51.6%** normalized / 1584 Elo (Artificial Analysis)
- AA Harvey LAB v1.0: **94.6%** (Artificial Analysis)
- APEX-Agents-AA: **41.3%** (Artificial Analysis)
- AA ITBench: **47.7%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **80.9%** (Vals AI)
- GDPval-AA: **1584 Elo** (Artificial Analysis)
- AA Agentic Index: **50.6%** (Artificial Analysis)
- ApprenticeBench: **18%** (NeoCognition)
- Hermes Index: **39.2%**; Hermes Bench: **71.5%** (Nous Research)
- MazeBench: **1%** (MazeBench)
- AA EnterpriseOps-Gym: **45.3%** (Artificial Analysis)
- AA Tau3 Banking: **46.0%** (Artificial Analysis)
- aaTerminalBench21: **85%** (Artificial Analysis)
- AA Cyber Index: **41.3%** (Artificial Analysis)
- CWE-Bench-AA: **53.3%** (Artificial Analysis)
- DeepsecBench-AA: **12.5%** (Artificial Analysis)
- CyberGym-E2E-AA: **58.0%** (Artificial Analysis)
- AA-AnalystAgent: **38.8%** (Artificial Analysis)

Reasoning / knowledge:

- ARC-AGI-1: **94.50%**; ARC-AGI-2: **60.4%**
- GPQA: **93.5%**
- MMLU: not individually reported
- AA Intelligence Index: **43.6%** (measured, updated 2026-11-07)
- AA-GPQA Diamond: **93.5%** (Artificial Analysis)
- AA-HLE: **46.9%** (Artificial Analysis)
- AA-Omniscience Index: **19.7%**
- AA-Omniscience Accuracy: **47.6%**
- AA-Omniscience Hallucination Rate: **53.2%**
- AA-LCR: **88.7%** (Artificial Analysis)
- CritPt: **23.4%** (Artificial Analysis)
- ARC-AGI-1: **94.50%** (ARC Prize)
- ARC-AGI-2: **60.4%** (ARC Prize)
- GPQA Diamond (Vals): **92.9%** (Vals AI)
- MMLU-Pro (Vals): **88.0%** (Vals AI)
- Gray Swan IPI: **52.7%** (Google)

Coding:

- Coding public-lane (BenchLM): **58.9** (#22/150)
- Kimi Code Bench v2: **72.9%** (#1/2)
- ProgramBench: **77.8%**
- MLS-Bench Lite: **48.3%**
- SWE-bench Verified: not reported (Vals subset 95.10%)
- Vibe Code Bench v1.1: **84.97%**
- ScarfBench: **61.3%** (Kaggle)
- DeepSWE: **67.5%** (Moonshot)
- CursorBench 3.2: **60.8%** (Cursor)
- FrontierSWE: **81.2%** (Moonshot)
- ProgramBench: **77.8%** (Moonshot)
- Kimi Code Bench v2: **72.9%** (Moonshot)
- sweMarathon: **42%** (Moonshot)
- PostTrain Bench: **36.6%** (Moonshot)
- MLS-Bench Lite: **48.3%** (Moonshot)
- AA-SciCode: **59.5%** (Artificial Analysis)
- VulcanBench v3: **73.7%** (VulcanBench)
- OpenHarmony Bench: **57.3%** (OpenHarmony Bench)
- FrontierSWE v2: **25.9%** (Proximal)
- LiveCodeBench (Vals): **87.2%** (Vals AI)
- SWE-bench (Vals): **93.4%** (Vals AI)
- AA Coding Index: **76.2%** (Artificial Analysis)
- PostTrainBench v1.1: **32.0%** (PostTrainBench)
- Bug Hunt Bench: **21.0 fixes** (Bug Hunt Bench)
- FrontierCode 2.0: **17.7%** (Cognition)

Long context:

- 1M window; MRCR: no verified public score found.
- AA-LCR: **88.7%** (Artificial Analysis)

Multimodal:

- Multimodal public-lane (BenchLM): **92.6** (#1/54)
- MMMU-Pro: **81.6%**; MMMU-Pro w/ Python: **83.4%**
- OfficeQA Pro: **63.3%**
- CharXiv w/o tools: **84.8%**; CharXiv: **91.3%**
- MathVision: **94.3%**; MathVision w/ Python: **97.8%**
- BabyVision w/ Python: **85.7%**
- ZeroBench: **23.0%**; ZeroBench w/ Python: **41.0%**
- WorldVQA ForceAnswer: **51.0%**
- OmniDocBench: **91.1%**
- PerceptionBench: **58.5%**
- AA-MMMU-Pro: **80.5%** (Artificial Analysis)
- Design Arena Website: **1333** (OpenRouter)
- ExtractBench (LlamaIndex): **83.17%**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Agentic lane #10/128 (69.4), Terminal-Bench 2.1 88.3%, BrowseComp 91.2%, DeepSearchQA 95%, MCP Atlas 84.2%; caps at AutomationBench 30.8%. Enrichment (2026-11-08): added Finch 77.3%, b3 Agent Security 88.0%, Cyber Misuse Refusal 94.0%, APEX-Agents 37.6%, SpreadsheetBench 2 34.8%, DECK-Bench 73.5%, GDPval-AA 51.6% normalized/1584 Elo, AA Harvey LAB 94.6%, APEX-Agents-AA 41.3%, AA ITBench 47.7%, Terminal-Bench 2.1 Vals 80.9%, GDPval-AA 1584 Elo, AA Agentic Index 50.6%, ApprenticeBench 18%, Hermes Index 39.2%, Hermes Bench 71.5%, MazeBench 1%, AA EnterpriseOps-Gym 45.3%, AA Tau3 Banking 46.0%, aaTerminalBench21 85%, AA Cyber 41.3%, CWE-Bench-AA 53.3%, DeepsecBench 12.5%, CyberGym-E2E 58.0%, AA-AnalystAgent 38.8%, AA Intelligence 43.6%, AA-GPQA 93.5%, AA-HLE 46.9%, AA-Omniscience 19.7%/47.6%/53.2%, AA-LCR 88.7%, CritPt 23.4%, ARC-AGI-1 94.50%, ARC-AGI-2 60.4%, GPQA Diamond Vals 92.9%, MMLU-Pro Vals 88.0%, Gray Swan IPI 52.7%. Corroborates band; no change.
- **Reasoning: 80/100.** ARC-AGI-1 94.5%, GPQA 93.5%, ARC-AGI-2 60.4%; caps at no published HLE. Enrichment adds AA Intelligence 43.6%, AA-GPQA 93.5%, AA-HLE 46.9%, AA-Omniscience 19.7%/47.6%/53.2%, AA-LCR 88.7%, CritPt 23.4%, GPQA Diamond Vals 92.9%, MMLU-Pro Vals 88.0%, Gray Swan IPI 52.7%. Corroborates band; no change.
- **Context window: 92/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 90/100.** Text/image in; multimodal lane #1/54 (92.6), MMMU-Pro 81.6%. Enrichment adds MMMU-Pro 81.6%, MMMU-Pro w/ Python 83.4%, CharXiv w/o tools 84.8%, CharXiv 91.3%, MathVision 94.3%, MathVision w/ Python 97.8%, BabyVision w/ Python 85.7%, ZeroBench 23.0%, ZeroBench w/ Python 41.0%, WorldVQA ForceAnswer 51.0%, OmniDocBench 91.1%, PerceptionBench 58.5%, AA-MMMU-Pro 80.5%, Design Arena 1333, ExtractBench 83.17%, OfficeQA Pro 63.3%. Corroborates band; no change.
- **Coding: 76/100.** Coding lane #22/150 (58.9), Kimi Code Bench 72.9%, ProgramBench 77.8%; caps at unverified SWE-bench Verified. Enrichment adds ScarfBench 61.3%, DeepSWE 67.5%, CursorBench 3.2 60.8%, FrontierSWE 81.2%, ProgramBench 77.8%, Kimi Code Bench v2 72.9%, sweMarathon 42%, PostTrain Bench 36.6%, MLS-Bench Lite 48.3%, AA-SciCode 59.5%, VulcanBench v3 73.7%, OpenHarmony Bench 57.3%, FrontierSWE v2 25.9%, LiveCodeBench Vals 87.2%, SWE-bench Vals 93.4%, AA Coding Index 76.2%, PostTrainBench v1.1 32.0%, Bug Hunt 21.0 fixes, FrontierCode 2.0 17.7%. Corroborates band; no change.
- **Cost efficiency: 75/100.** Mid-tier $3/$15 per 1M; open weights self-host cheaper.
- **Overall Score: 84/100.** Mean of five quality dims (BenchLM aggregate 69.86); best-fit for open-weight agentic + multimodal at mid cost. Enrichment (2026-11-08) added new verified rows (Finch 77.3%; b3 Agent Security 88.0%; Cyber Misuse Refusal 94.0%; APEX-Agents 37.6%; SpreadsheetBench 2 34.8%; DECK-Bench 73.5%; GDPval-AA 51.6% normalized/1584 Elo; AA Harvey LAB 94.6%; APEX-Agents-AA 41.3%; AA ITBench 47.7%; Terminal-Bench 2.1 Vals 80.9%; GDPval-AA 1584 Elo; AA Agentic Index 50.6%; ApprenticeBench 18%; Hermes Index 39.2%; Hermes Bench 71.5%; MazeBench 1%; AA EnterpriseOps-Gym 45.3%; AA Tau3 Banking 46.0%; aaTerminalBench21 85%; AA Cyber 41.3%; CWE-Bench-AA 53.3%; DeepsecBench 12.5%; CyberGym-E2E 58.0%; AA-AnalystAgent 38.8%; AA Intelligence 43.6%; AA-GPQA 93.5%; AA-HLE 46.9%; AA-Omniscience 19.7%/47.6%/53.2%; AA-LCR 88.7%; CritPt 23.4%; ARC-AGI-1 94.50%; ARC-AGI-2 60.4%; GPQA Diamond Vals 92.9%; MMLU-Pro Vals 88.0%; Gray Swan IPI 52.7%; MMMU-Pro 81.6%; MMMU-Pro w/ Python 83.4%; CharXiv w/o tools 84.8%; CharXiv 91.3%; MathVision 94.3%; MathVision w/ Python 97.8%; BabyVision w/ Python 85.7%; ZeroBench 23.0%; ZeroBench w/ Python 41.0%; WorldVQA ForceAnswer 51.0%; OmniDocBench 91.1%; PerceptionBench 58.5%; AA-MMMU-Pro 80.5%; Design Arena 1333; ExtractBench 83.17%; OfficeQA Pro 63.3%; ScarfBench 61.3%; DeepSWE 67.5%; CursorBench 3.2 60.8%; FrontierSWE 81.2%; ProgramBench 77.8%; Kimi Code Bench v2 72.9%; sweMarathon 42%; PostTrain Bench 36.6%; MLS-Bench Lite 48.3%; AA-SciCode 59.5%; VulcanBench v3 73.7%; OpenHarmony Bench 57.3%; FrontierSWE v2 25.9%; LiveCodeBench Vals 87.2%; SWE-bench Vals 93.4%; AA Coding Index 76.2%; PostTrainBench v1.1 32.0%; Bug Hunt 21.0 fixes; FrontierCode 2.0 17.7%). No dimension band moved; Overall unchanged at 84.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Kimi K3](https://benchlm.ai/models/kimi-k3)
  - [Artificial Analysis — Kimi K3](https://artificialanalysis.ai/models/kimi-k3)
  - [Moonshot AI — Kimi K3](https://www.kimi.ai/blog/kimi-k3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).