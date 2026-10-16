# DeepSeek V4.1 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/deepseek-v4-1-flash (DeepSeek-V4.1-Flash model card + tech report), Artificial Analysis (`artificialanalysis.ai/models/deepseek-v4-1-flash`), OpenRouter, Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's smaller V4.1-series open-weights MoE reasoning model (released 10 Sep 2026 per AA; MIT license) for coding and reasoning; 552B total / 16B active parameters, 1M-token context, text+image in → text out (AA lists text+image input), three reasoning effort modes. Successor to DeepSeek V4 Flash 0731.
- **Provider / access:** DeepSeek API (`deepseek-v4.1-flash`), open weights on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`), 26 API providers per Artificial Analysis.
- **Release / knowledge:** Released 2026-09-10 (AA); MIT license permits commercial use; knowledge cutoff not stated.
- **IDs:** `deepseek-v4.1-flash` (DeepSeek API), `deepseek-ai/DeepSeek-V4.1-Flash` (HF weights). No Free ID confirmed (MIT open weights → self-host effectively $0).
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text and image in (AA); text out; reasoning yes; tool use not specified for this variant; JSON mode not advertised. benchlm lists DeepSeek-V4.1-Flash model card — image support per AA.
- **Pricing (as of 2026-10-16):** $0.30/M input, $1.20/M output (AA; cache discount 98%, cost per task $0.27).
- **Architecture:** Open-weights MoE, 552B total / 16B active, MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek model card; Vals AI 74.5%)
- Terminal-Bench 3: **30%** (DeepSeek model card)
- Terminal-Bench 4.0: **31.20%** (DeepSeek model card; AA 26.8%)
- CyberGym: **88.1%** (DeepSeek model card)
- ExploitGym: **15.3%** (DeepSeek model card)
- HLE w/ tools: **63.9%** (DeepSeek model card)
- AutomationBench: **54.8%** (DeepSeek model card); AA AutomationBench **68.9%**
- Agents' Last Exam: **31.8%** (DeepSeek model card)
- GDPval-AA: **1600 Elo** (Artificial Analysis); normalized **55.0%**
- AA Briefcase Elo: **1422** (Artificial Analysis)
- AA ITBench: **46.9%**; AA-AnalystAgent: **35.0%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **39.5%** (#9 of 119 open-weights; median 19) (Artificial Analysis)
- GPQA: **90.9%**; GPQA-D: **90.9%** (DeepSeek model card)
- HLE: **36.8%** (DeepSeek model card); AA-HLE **39.2%**
- MMLU-Pro not found for this variant
- AA-LCR (long-context reasoning): **84.0%** (Artificial Analysis)
- MLCR-AA: **22.8%** (Artificial Analysis)
- CritPt: **14.3%** (Artificial Analysis)
- AA-Omniscience Index **-5.3%**; Accuracy **46.4%**; Hallucination rate **96.5%** (AA)
- Apex: **65.6%** (DeepSeek model card)
- FrontierMath v2 Tiers 1-3: **67.368%**; Tier 4: **26.829%** (Epoch AI)
- JevBench 1.4: **4.77**; JevBench 1.5: **6.65** (third-party)

Coding:

- Codeforces rating: **3471** (DeepSeek model card)
- DeepSWE: **74.2%** (DeepSeek model card)
- ProgramBench: **20.3%** (DeepSeek model card)
- NL2Repo: **65.4%** (DeepSeek-V4.1 tech report)
- AA-SciCode: **51.9%** (Artificial Analysis)
- Bug Hunt Bench: **21.7 fixes** (public data)
- OpenHarmony Bench: **60.3%** (leaderboard)

Multimodal & grounded:

- Chartography (tools): **78.9%** (DeepSeek model card)
- BabyVision w/ Python: **89.6%** (DeepSeek model card)
- ZeroBench w/ Python: **49.0%** (DeepSeek model card)
- AA-MMMU-Pro: **77.0%** (Artificial Analysis)
- Text+image in, text out per AA; no MMMU-Pro/Chartography breakdown beyond AA-MMMU-Pro.

Long context:

- AA-LCR: **84.0%** (Artificial Analysis); MLCR-AA: **22.8%**; declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Terminal-Bench 2.1 (90.6), CyberGym (88.1), GDPval-AA (1600 Elo), HLE w/ tools (63.9); capped by weak Terminal-Bench 4.0 (31.2), ExploitGym (15.3), Agents' Last Exam (31.8), AutomationBench raw (54.8). Strong terminal coding/cyber agent profile.
- **Reasoning: 76/100.** GPQA 90.9%, AA Intelligence Index 39 (#9 open-weights), AA-LCR 84.0%, Apex 65.6%; capped by CritPt (14.3), AA-Omniscience accuracy (46.4%), HLE (36.8–39.2%). Strong knowledge/retrieval reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 84.0%; capped because no public full-depth needle-recall score at 1M beyond AA-LCR.
- **Multimodal: 76/100.** Text + image in, text out per AA; Chartography tools 78.9%, BabyVision w/ Python 89.6%, AA-MMMU-Pro 77.0%; capped by text-only output.
- **Coding: 78/100.** Codeforces 3471, DeepSWE 74.2%, NL2Repo 65.4%, AA-SciCode 51.9%; capped by ProgramBench (20.3), Bug Hunt Bench (21.7 fixes). Strong competitive coding, weaker agentic program benchmarks.
- **Cost efficiency: 93/100.** MIT open weights (self-host ~$0) plus cheapest hosted pricing ($0.30/$1.20, 98% cache discount, $0.27/task); not counted toward Overall.
- **Overall Score: 79/100.** Half-up mean of (78 + 76 + 88 + 76 + 78) / 5 = 79.2 → 79. Best-fit recommendation: strong open-weights coding agent at 1M context with excellent value; verify on Terminal-Bench 4.0-class agentic tasks.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + DeepSeek-V4.1 model card + tech report + Artificial Analysis + OpenRouter + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
