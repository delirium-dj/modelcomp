# Kimi K3.1 Pro — findings by Beam

- Source: Moonshot AI / Kimi K3.1 Pro (kimi-k3.1-pro)
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-29)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's post-trained flagship (released 2026-10-23), a 2.8T/104B-active MoE building on Kimi K3 with much more RL; open weights promised by 2026-11-04. Strong on coding, agentic, and knowledge work at 1M context.
- **Provider / access:** Moonshot AI API (`moonshot/kimi-k3-1-pro`); Kimi apps, Kimi Work, Kimi Code. Chat Completions (OpenAI-compatible); thinking mode only.
- **Release / knowledge:** 2026-10-23; knowledge cutoff not disclosed (weights pending release).
- **IDs:** `kimi-k3.1-pro` (Moonshot); `moonshot/kimi-k3-1-pro` (gateway alias).
- **Context window:** 1,048,576 tokens total; up to 1,048,576 max output (verified via Moonshot docs/aimlapi).
- **Modalities:** text, image in; text out; reasoning yes (thinking-only); tool calls yes (parallel); JSON/structured output yes.
- **Pricing (as of 2026-11-08):** $2.00 / $0.20 cached / $10.00 per 1M in/cached/out.
- **Architecture:** MoE, 2.8T total / 104B active; open weights (release by 2026-11-04); license pending.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** (Moonshot; Vals AI #3 of 57)
- SWE-Marathon v1.1: **51.7** (Moonshot, #1 in its row)
- Agents' Last Exam: **43.2** (Moonshot, #1)
- AutomationBench-AA: **73.3%** (Moonshot, lead)
- OfficeQA Pro v2: **64.4** (Moonshot, #1)
- BrowseComp: **92.1** (Moonshot, #1)
- GDP.pdf: **34.6** (Moonshot, #1)
- OSWorld V2.1: reported lead over GPT-5.6 Terra-class (Moonshot)
- ZeroBench (with tools): **63.0** (Moonshot)
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (up from K3 55.95%; behind GPT-6 Astra 66.5)
- AA Briefcase: **1675** (Artificial Analysis)
- AA AutomationBench: **73.3%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **67.2%** (Artificial Analysis)
- GDP.pdf: **31.4%** (Artificial Analysis)
- AA-AnalystAgent: **38.8%** (Artificial Analysis)
- MazeBench: **2%** (MazeBench)
- OSWorld 2.1: **79.6%** (Moonshot)
- GDPval-AA: **67.3%** normalized / 1858 Elo (Artificial Analysis)
- AA Cyber Index: **64.1%** (Artificial Analysis)
- CWE-Bench-AA: **60.8%** (Artificial Analysis)
- DeepsecBench-AA: **36.7%** (Artificial Analysis)
- CyberGym-E2E-AA: **94.7%** (Artificial Analysis)
- AA Briefcase: **1675** (Artificial Analysis)
- Gray Swan IPI: not individually reported

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (99th percentile, rank 7/478) (BenchmarkList)
- HLE (with tools): **70.0** (Moonshot, #1)
- HLE (without tools): trails GPT-6 Astra/Claude (Moonshot)
- PerceptionBench: **68.3%** (BenchmarkList)
- Vals Index v2.2: **62.52%** (#8 of 27; top open-weights) (Vals AI)
- Factual-error stress test: **8.3%** false claims (down from K3 23.4%) (Moonshot/TNW)
- Internal finance: Financial Modeling 57.6 (up 7.2), Financial Research 70.4 (up 11.6), Business Operation 37.0 (up 28.1) (Moonshot)
- AA Intelligence Index: **46.5%** (measured, updated 2026-11-07)
- AA-HLE: **52.5%** (Artificial Analysis)
- AA-Omniscience Index: **29.9%**
- AA-Omniscience Accuracy: **48.9%**
- AA-Omniscience Hallucination Rate: **37.3%**
- AA-LCR: **86.3%** (Artificial Analysis)
- CritPt: **24.6%** (Artificial Analysis)
- MLCR-AA: **38.3%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **85.965%**; Tier 4: **78.049%** (Epoch AI)
- AA-MMMU-Pro: **83.9%** (Artificial Analysis)
- Design Arena Website: **1324** (OpenRouter)
- Kimi Hallu Bench: **5.4%** (Moonshot)
- PerceptionBench: **68.3%** (Moonshot)

Coding:

- Terminal-Bench 4.0: **65.7%** (Moonshot)
- DeepSWE v1.1: lead over proprietary peers (Moonshot)
- Kimi Code Bench 3.0 Long-horizon: **61.2%** (Moonshot)
- BenchCAD (with tools): **92.7%** (Moonshot)
- ProgramBench (binary): **31.5%** (Moonshot)
- Kimi Code Bench v2: **77.1%** (Moonshot)
- sweMarathon: **51.7%** (Moonshot)
- PostTrainBench v1.2: **36.5%** (Moonshot)
- FrontierCode 2.0: **19.6%** (Cognition)
- Bug Hunt Bench: **36.0 fixes** (Bug Hunt Bench)

Long context:

- 1M-token context; AA-LCR not separately published.

Multimodal:

- MMMU-Pro: **84.1%** (Moonshot)
- MMMU-Pro w/ Python: **90%** (Moonshot)
- CharXiv: **93.4%** (Moonshot)
- CharXiv w/o tools: **89%** (Moonshot)
- Chartography (tools): **90.2%** (Moonshot)
- BabyVision w/ Python: **95.4%** (Moonshot)
- ZeroBench: **39.0%** (Moonshot)
- ZeroBench w/ Python: **63.0%** (Moonshot)
- GDP.pdf (Gemini judge): **34.6%** (Moonshot)
- GDP.pdf w/ Python (Gemini judge): **85.7%** (Moonshot)
- PerceptionBench: **68.3%** (Moonshot)
- AA-MMMU-Pro: **83.9%** (Artificial Analysis)
- Design Arena Website: **1324** (OpenRouter)
- OfficeQA Pro: **67.4%** (Moonshot)
- OfficeQA Pro v2: **64.4%** (Moonshot)
- BenchCAD Vision2Code (no tools): **0.728** (Moonshot)
- BenchCAD Vision2Code (tools): **0.927** (Moonshot)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 92/100.** Strong agentic/computer-use and professional-work numbers (TB4.0 65.7%, AutomationBench 73.3%, Agents' Last Exam 43.2, BrowseComp 92.1, OfficeQA 64.4, GDP.pdf 34.6); capped slightly by Kimi Code Bench 61.2 vs Astra 66.5. Enrichment (2026-11-08): added AA Briefcase 1675, AA AutomationBench 73.3%, AA Terminal-Bench 4.0 67.2%, GDP.pdf 31.4%, AA-AnalystAgent 38.8%, MazeBench 2%, OSWorld 2.1 79.6%, GDPval-AA 67.3% normalized/1858 Elo, AA Cyber 64.1%, CWE-Bench-AA 60.8%, DeepsecBench 36.7%, CyberGym-E2E 94.7%, FrontierCode 2.0 19.6%, Bug Hunt 36.0 fixes, PostTrainBench 36.5, ProgramBench binary 31.5%, Kimi Code Bench v2 77.1%, Kimi Hallu Bench 5.4%, PerceptionBench 68.3%, AA Intelligence 46.5%, AA-HLE 52.5%, AA-Omniscience 29.9%/48.9%/37.3%, AA-LCR 86.3%, CritPt 24.6%, MLCR 38.3%, FrontierMath v2 85.965%/78.049%, AA-MMMU-Pro 83.9%, Design Arena 1324. Corroborates band; no change.
- **Reasoning: 93/100.** GPQA 94.2%, HLE-with-tools 70.0, Vals Index 62.52% (top open-weights), and much lower factual-error rate (8.3%); capped by HLE-without-tools trailing GPT/Claude. Enrichment adds AA Intelligence 46.5%, AA-HLE 52.5%, AA-Omniscience 29.9%/48.9%/37.3%, AA-LCR 86.3%, CritPt 24.6%, MLCR 38.3%, FrontierMath v2 85.965%/78.049%, Kimi Hallu Bench 5.4%, PerceptionBench 68.3%. Corroborates band; no change.
- **Context window: 100/100.** 1M-token window.
- **Multimodal: 75/100.** Text + image input with text output; no audio/video. Enrichment adds AA-MMMU-Pro 83.9%, Design Arena 1324, OfficeQA Pro 67.4%, OfficeQA Pro v2 64.4%, BenchCAD 0.728/0.927, PerceptionBench 68.3%. Corroborates band; no change.
- **Coding: 90/100.** TB4.0 65.7%, DeepSWE lead, Kimi Code Bench 61.2, BenchCAD 92.7; capped by gap to Astra on Kimi's own long-horizon bench. Enrichment adds ProgramBench binary 31.5%, Kimi Code Bench v2 77.1%, sweMarathon 51.7%, PostTrainBench 36.5, FrontierCode 2.0 19.6%, Bug Hunt 36.0 fixes. Corroborates band; no change.
- **Cost efficiency: 80/100.** $2/$0.20-cached/$10 per 1M — mid-priced, cheaper than K3 and Claude/GPT frontier tiers, but not bargain-priced.
- **Overall Score: 90/100.** (92+93+100+75+90)/5 = 90; best fit for open-weights agentic coding and long-horizon knowledge work, pending weight release. Enrichment (2026-11-08) added new verified rows (AA Briefcase 1675; AA AutomationBench 73.3%; AA Terminal-Bench 4.0 67.2%; GDP.pdf 31.4%; AA-AnalystAgent 38.8%; MazeBench 2%; OSWorld 2.1 79.6%; GDPval-AA 67.3% normalized/1858 Elo; AA Cyber 64.1%; CWE-Bench-AA 60.8%; DeepsecBench 36.7%; CyberGym-E2E 94.7%; FrontierCode 2.0 19.6%; Bug Hunt 36.0 fixes; PostTrainBench 36.5; ProgramBench binary 31.5%; Kimi Code Bench v2 77.1%; Kimi Hallu Bench 5.4%; PerceptionBench 68.3%; AA Intelligence 46.5%; AA-HLE 52.5%; AA-Omniscience 29.9%/48.9%/37.3%; AA-LCR 86.3%; CritPt 24.6%; MLCR 38.3%; FrontierMath v2 85.965%/78.049%; AA-MMMU-Pro 83.9%; Design Arena 1324; OfficeQA Pro 67.4%; OfficeQA Pro v2 64.4%; BenchCAD 0.728/0.927). No dimension band moved; Overall unchanged at 90.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-29 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Kimi K3.1 Pro](https://benchlm.ai/models/kimi-3-1-pro)
  - [Artificial Analysis — Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro)
  - [Moonshot AI — Kimi K3.1 Pro](https://www.kimi.ai/blog/kimi-k3-1-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).