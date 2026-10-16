# DeepSeek V4 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/deepseek-v4-flash-0731 (DeepSeek-V4 technical report + API update), Artificial Analysis (`artificialanalysis.ai/models/deepseek-v4-flash`), OpenRouter, Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's smaller V4-series open-weights MoE reasoning model (0731 checkpoint released 31 Jul 2026, MIT license) for efficient coding and reasoning; 284B total / 13B active parameters, 1M-token context, text in → text out (text-only — NOT multimodal; vision is the separate `deepseek-v4-flash-vision-exp`), three reasoning effort modes. Deprecated by AA in favor of DeepSeek V4.1 Flash.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash-0731`), open weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Flash-0731`), 19 API providers per Artificial Analysis. Sibling: DeepSeek V4 Pro (1.6T/49B), DeepSeek V4.1 Flash (newer).
- **Release / knowledge:** Released 2026-07-31; knowledge cutoff not stated; deprecated by Artificial Analysis (newer V4.1 Flash exists).
- **IDs:** `deepseek-v4-flash-0731` (DeepSeek API), `deepseek-ai/DeepSeek-V4-Flash-0731` (HF weights). No Free ID confirmed (MIT open weights → self-host effectively $0).
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text in, text out (text-only per Artificial Analysis — no image input); reasoning yes; tool use not specified for this variant; JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.44/M input, $1.32/M output (Artificial Analysis; cache discount 97%, cost per task $0.22).
- **Architecture:** Open-weights MoE, 284B total / 13B active, MIT license; shares V4 architecture lineage (CSA/HCA attention, mHC) with V4 Pro.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (DeepSeek API update; Vals AI 67.0%)
- Terminal-Bench 2.0: **56.9%** (DeepSeek-V4 technical report)
- BrowseComp: **73.2%** (DeepSeek-V4 technical report)
- HLE w/ tools: **45.1%** (DeepSeek-V4 technical report)
- MCP Atlas: **69%** (DeepSeek-V4 technical report)
- GDPval-AA: **1189 Elo** (DeepSeek-V4 technical report; AA normalized 46.7%)
- Toolathlon: **47.8%**; Toolathlon-Verified **70.3%** (DeepSeek technical report / API update)
- CyberGym: **76.7%** (DeepSeek API update)
- Agents' Last Exam: **25.2%** (DeepSeek API update)
- AutomationBench: **25.1%** (DeepSeek API update)
- AA Agentic Index: **41.7%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **34.3%** (#13 of 119 open-weights; median 19) (Artificial Analysis)
- GPQA: **88.1%**; GPQA-D: **88.1%** (DeepSeek-V4 technical report); AA-GPQA Diamond **90.8%**; Vals **89.9%**
- MMLU-Pro: **86.2%** (DeepSeek technical report; Vals 86.2%)
- HLE: **34.8%** (DeepSeek-V4 technical report); AA-HLE **38.6%**
- ARC-AGI-1: **89.00%**; ARC-AGI-2: **61.4%** (ARC Prize, verified)
- AA-LCR (long-context reasoning): **79.7%** (Artificial Analysis)
- CritPt: **16.6%** (Artificial Analysis)
- AA-Omniscience Index **-14.3%**; Accuracy **40.4%**; Hallucination rate **91.7%** (AA)
- HMMT Feb 2026: **94.8%**; IMOAnswerBench: **88.4%** (DeepSeek-V4 technical report)

Coding:

- LiveCodeBench Pass@1-COT: **91.6%** (DeepSeek-V4 technical report); LiveCodeBench Vals: **87.3%** (Vals AI)
- Codeforces rating: **3052** (DeepSeek-V4 technical report)
- SWE-bench Verified: **79%** (DeepSeek-V4 technical report); SWE-bench Vals: **88.8%** (Vals AI)
- SWE-bench Pro: **52.6%** (DeepSeek-V4 technical report)
- SWE Multilingual: **73.3%** (DeepSeek-V4 technical report)
- DeepSWE: **54.4%** (DeepSeek API update)
- NL2Repo: **54.2%** (DeepSeek API update)
- DSBench-FullStack: **68.7%**; DSBench-Hard: **59.6%** (DeepSeek API update)
- AA-SciCode: **50.3%** (Artificial Analysis)
- AA Coding Index: **69.1%** (Artificial Analysis)
- VulcanBench v3: **88.4%** (vulcanbench.com)

Multimodal & grounded:

- Text-only (no vision per Artificial Analysis); Design Arena Website: **1209** (OpenRouter). No MMMU-Pro/Chartography/LVBench scores found for this text-only variant.

Long context:

- MRCR 1M: **78.7%**; CorpusQA 1M: **60.5%** (DeepSeek-V4 technical report) — strong full-window retrieval
- AA-LCR: **79.7%** (Artificial Analysis)
- Verified 1M context with strong MRCR 1M retrieval.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 76/100.** Terminal-Bench 2.1 (82.7), CyberGym (76.7), Toolathlon-Verified (70.3), GDPval-AA (1189 Elo); capped by weak Agents' Last Exam (25.2), AutomationBench (25.1), Toolathlon base (47.8). Strong terminal agent profile.
- **Reasoning: 76/100.** ARC-AGI-1 89.00%, GPQA 88.1%, HMMT 94.8%, IMOAnswerBench 88.4%, AA Intelligence Index 34.3, AA-LCR 79.7%; capped by CritPt (16.6), HLE (34.8–38.6), AA-Omniscience accuracy (40.4%). Elite math reasoning.
- **Context window: 90/100.** Verified 1M tokens with MRCR 1M 78.7% and CorpusQA 1M 60.5% — strong full-window retrieval; capped because no public needle-recall curve beyond 1M point.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal (vision is the separate deepseek-v4-flash-vision-exp model); capped by absence of image input and zero public vision benchmarks. Multimodal dim reflects text-only reality.
- **Coding: 78/100.** LiveCodeBench 91.6%/87.3%, SWE-bench Verified 79%/Vals 88.8%, Codeforces 3052, SWE Multilingual 73.3%; capped by SWE-bench Pro (52.6), DSBench-Hard (59.6), DeepSWE (54.4). Elite open-weights coding.
- **Cost efficiency: 90/100.** MIT open weights (self-host ~$0) plus cheap hosted pricing ($0.44/$1.32, 97% cache discount, $0.22/task); not counted toward Overall.
- **Overall Score: 74/100.** Half-up mean of (76 + 76 + 90 + 50 + 78) / 5 = 74.0 → 74. Best-fit recommendation: strong open-weights text-only reasoning/coding model at 1M context; use V4 Flash Vision Exp or V4 Pro for multimodal needs.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + DeepSeek-V4 technical report + Artificial Analysis + OpenRouter + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
