# GPT-6 Astra — findings by Beam

- Source: OpenAI/GPT-6 Astra, `openai/gpt-6-astra`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship frontier reasoning model (Sep 2, 2026), "world's most intelligent and aligned model"; state of the art on DeepSWE, ARC-AGI-3, FrontierMath Tier 4, and Vals Index among GPT family; strong cybersecurity (ExploitBench 100%) and long context.
- **Provider / access:** OpenAI API `gpt-6-astra` (Chat/Responses, reasoning effort none..max); Microsoft Azure; AWS Bedrock; ChatGPT Plus/Pro/Business/Enterprise.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff April 30, 2026.
- **IDs:** `openai/gpt-6-astra`
- **Context window:** 1,050,000 tokens; max output 128,000; reasoning effort none/low/medium/high/xhigh/max.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes; search grounding. No audio/video out.
- **Pricing (as of 2026-11-08):** $10.00 / 1M input, $50.00 / 1M output; paid. Hidden reasoning can carry across calls.
- **Architecture:** proprietary; params undisclosed; trained on >100k GPUs.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- BrowseComp: **91.5%**
- OSWorld 2.0: **72.6%**
- Terminal-Bench 2.1 (Vals): **87.3%**
- Terminal-Bench 4.0: **57.90%**
- ApprenticeBench: **68%**
- MazeBench: **23%**
- ExploitBench: **100.0%**; ExploitGym: **42.4%**; ExploitBench (Jun-Aug 2026): **39.0%**
- SRE-Bench: **88.0%** (OpenAI) / 56.87% (Vals)
- Agentic public-lane (BenchLM): **74.8** (#7/128)
- Search Intelligence (Parallel): **70.8** (#7)
- LifeVal: **80.6%**
- Agents' Last Exam: **59.3%**
- AutomationBench: **41.4%**
- HLE w/ tools: **57.2%**
- GDPval-AA: **53.7%** normalized / 1584 Elo (Artificial Analysis)
- AA Briefcase: **1569** (Artificial Analysis)
- AA Tau3 Banking: **41.4%** (Artificial Analysis)
- AA AutomationBench: **68.5%** (Artificial Analysis)
- AA Agentic Index: **51.5%** (Artificial Analysis)
- GDP.pdf: **31.0%** (Artificial Analysis)
- AA-AnalystAgent: **51.2%** (Artificial Analysis)
- AA ITBench: **48.6%** (Artificial Analysis)
- aaTerminalBench21: **88.4%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **59.1%** (Artificial Analysis)
- CWE-bench v1: **68.0%** (Collinear)
- Hermes Index: **56.3%**; Hermes Bench: **73.7%** (Nous Research)
- OSWorld 2.1: **75.8%** (Meta)
- AA Cyber Index: **33.4%** (Artificial Analysis)
- CWE-Bench-AA: **63.3%** (Artificial Analysis)
- DeepsecBench-AA: **36.9%** (Artificial Analysis)
- CyberGym-E2E-AA: **0.0%** (Artificial Analysis)

Reasoning / knowledge:

- ARC-AGI-1: **98.50%**; ARC-AGI-2: **95%**; ARC-AGI-3: **62.7%**
- FrontierMath v2 Tier 4: **97.600%**; Tiers 1-3: **93.684%** (Epoch AI)
- STEMBench: **2.81**
- GPQA Diamond: **96.0%** (OpenAI/BenchLM)
- HLE: 49.0% (with search, Parallel); AA-HLE: **54.7%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **56.9%** (measured, updated 2026-11-07)
- CritPt: **31.7%** (Artificial Analysis)
- MLCR-AA: **41.7%** (Artificial Analysis)
- AA-LCR: **80.7%** (Artificial Analysis)
- BioBasicsBench: **67.0%** (OpenAI)
- GeneBench-Pro: **37.8%** (OpenAI)
- GraphWalks BFS 256K-1M: **71.8%** (Google)
- MRCR v2 256K-512K: **100.0%**; 512K-1M: **96.3%**
- HealthBench (raw): 56.9%; (length-adjusted): 58.3%; Professional: 64.7%; Professional (raw): 68.2%; Hard: 36.6%
- AA-GPQA Diamond: **96.1%** (Artificial Analysis)
- AA-Omniscience Index: **42.4%**
- AA-Omniscience Accuracy: **61.6%**
- AA-Omniscience Hallucination Rate: **49.8%**

Coding:

- DeepSWE: **74.1%**
- Coding public-lane (BenchLM): **75.5** (#4/150)
- Vibe Code Bench: no verified public score found (coming soon)
- SWE-bench Verified/Pro: no verified public score found (coming soon)
- Terminal-Bench 2.1: no single figure (87.3% Vals)
- ScarfBench: **65.4%** (Kaggle)
- DeepSWE: **74.1%** (OpenAI)
- FrontierCode 1.1 Main: **53.3%**; Extended: **64.5%**; FrontierCode 2.0: **42.8%**
- FrontierSWE v2: **65.5%** (Proximal)
- AA-SciCode: **56.5%** (Artificial Analysis)
- AA Coding Index: **76.9%** (Artificial Analysis)
- Bug Hunt Bench: **45.0 fixes**
- PostTrainBench v1.1: **44.3%** (Google)
- CursorBench 4.0: not individually reported
- ExtractBench (LlamaIndex): **91.91%**; ExtractBench Pro: **58%**; ParseBench: **69.81%**
- ScreenSpot Pro: **92.7%**; BenchCAD Vision2Code (tools): **0.959**
- AA-MMMU-Pro: **86.9%**

Long context:

- OpenAI MRCR v2 8-needle 256K-512K: **100.0%**; 512K-1M: **96.3%**
- Context 1.05M; long decode supported.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** BrowseComp 91.5%, OSWorld 72.6%, Terminal-Bench 2.1 Vals 87.3%, ExploitBench 100%; agentic lane #7/128 (74.8). Caps at Terminal-Bench 4.0 57.9%. Enrichment (2026-11-08): added LifeVal 80.6%, Agents' Last Exam 59.3%, AutomationBench 41.4%, HLE w/ tools 57.2%, GDPval-AA 53.7% normalized/1584 Elo, AA Briefcase 1569, AA Tau3 Banking 41.4%, AA AutomationBench 68.5%, AA Agentic Index 51.5%, GDP.pdf 31.0%, AA-AnalystAgent 51.2%, AA ITBench 48.6%, aaTerminalBench21 88.4%, AA Terminal-Bench 4.0 59.1%, CWE-bench v1 68.0%, Hermes 56.3%/73.7%, OSWorld 2.1 75.8%, AA Cyber 33.4%, CWE-Bench-AA 63.3%, DeepsecBench 36.9%, CyberGym-E2E 0.0%. Corroborates band; no change.
- **Reasoning: 95/100.** ARC-AGI-1 98.5%, ARC-AGI-2 95%, ARC-AGI-3 62.7%, FrontierMath Tier4 97.6%, GPQA 96.0%, STEMBench 2.81; reasoning lane #1/28 (93.3). Enrichment adds AA Intelligence 56.9%, CritPt 31.7%, MLCR 41.7%, AA-LCR 80.7%, FrontierMath v2 T1-3 93.684%, BioBasicsBench 67.0%, GeneBench-Pro 37.8%, GraphWalks 71.8%, HealthBench rows, AA-GPQA 96.1%, AA-HLE 54.7%, AA-Omniscience 42.4%/61.6%/49.8%. Corroborates band; no change.
- **Context window: 92/100.** 1.05M with MRCR v2 100%/96.3% retrieval.
- **Multimodal: 88/100.** Text/image in, text out; ScreenSpot Pro 92.7%; no video/audio in. Enrichment adds ExtractBench (LlamaIndex) 91.91%, ExtractBench Pro 58%, ParseBench 69.81%, ScreenSpot Pro 92.7%, BenchCAD 0.959, AA-MMMU-Pro 86.9%. Corroborates band; no change.
- **Coding: 86/100.** Coding lane #4/150 (75.5), DeepSWE 74.1%; caps at unverified SWE-bench Verified/Pro. Enrichment adds ScarfBench 65.4%, DeepSWE 74.1%, FrontierCode 1.1 Main 53.3%/Extended 64.5%, FrontierCode 2.0 42.8%, FrontierSWE v2 65.5%, AA-SciCode 56.5%, AA Coding Index 76.9%, Bug Hunt 45.0, PostTrainBench 44.3%, ExtractBench (LlamaIndex) 91.91%, ExtractBench Pro 58%, ParseBench 69.81%, ScreenSpot Pro 92.7%, BenchCAD 0.959, AA-MMMU-Pro 86.9%. Corroborates band; no change.
- **Cost efficiency: 60/100.** Premium at $10/$50 per 1M.
- **Overall Score: 90/100.** Mean of five quality dims (BenchLM aggregate 83.87); best-fit for hardest reasoning + coding + cyber at high cost. Enrichment (2026-11-08) added new verified rows (AA Intelligence 56.9%; CritPt 31.7%; MLCR 41.7%; AA-LCR 80.7%; FrontierMath v2 T1-3 93.684%; BioBasicsBench 67.0%; GeneBench-Pro 37.8%; GraphWalks 71.8%; HealthBench rows; AA-GPQA 96.1%; AA-HLE 54.7%; AA-Omniscience 42.4%/61.6%/49.8%; LifeVal 80.6%; Agents' Last Exam 59.3%; AutomationBench 41.4%; HLE w/ tools 57.2%; GDPval-AA 53.7%/1584 Elo; AA Briefcase 1569; AA Tau3 Banking 41.4%; AA AutomationBench 68.5%; AA Agentic Index 51.5%; GDP.pdf 31.0%; AA-AnalystAgent 51.2%; AA ITBench 48.6%; aaTerminalBench21 88.4%; AA Terminal-Bench 4.0 59.1%; CWE 68.0%; Hermes 56.3%/73.7%; OSWorld 2.1 75.8%; AA Cyber 33.4%; CWE-Bench-AA 63.3%; DeepsecBench 36.9%; CyberGym-E2E 0.0%; ScarfBench 65.4%; DeepSWE 74.1%; FrontierCode 1.1 Main 53.3%/Extended 64.5%; FrontierCode 2.0 42.8%; FrontierSWE v2 65.5%; AA-SciCode 56.5%; AA Coding Index 76.9%; Bug Hunt 45.0; PostTrainBench 44.3%; ExtractBench (LlamaIndex) 91.91%; ExtractBench Pro 58%; ParseBench 69.81%; ScreenSpot Pro 92.7%; BenchCAD 0.959; AA-MMMU-Pro 86.9%). No dimension band moved; Overall unchanged at 90.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — GPT-6 Astra](https://benchlm.ai/models/gpt-6-astra)
  - [Artificial Analysis — GPT-6 Astra](https://artificialanalysis.ai/models/gpt-6-astra)
  - [OpenAI — GPT-6 Astra](https://openai.com/index/gpt-6-astra/)
  - [OpenAI GPT-6 Astra system card](https://deploymentsafety.openai.com/gpt-6-astra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).