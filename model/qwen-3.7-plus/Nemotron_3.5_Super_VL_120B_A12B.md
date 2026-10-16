# Qwen3.7 Plus — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/qwen3-7-plus (Alibaba Cloud launch page), Artificial Analysis (`artificialanalysis.ai/models/qwen3-7-plus`), Vals AI, Epoch AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Plus
- **Short description:** Alibaba's proprietary Qwen3.7 Plus reasoning model (released 1 Jun 2026 per AA) for multimodal agent intelligence; 1M-token context, text+image+video in → text out, $0.40/$1.60 per MTok; part of Qwen3.7 family (Plus, Max, Flash).
- **Provider / access:** Qwen API (`qwen3.7-plus`), 1 API provider per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released 2026-06-01 (AA); knowledge cutoff not stated.
- **IDs:** `qwen3.7-plus` (Qwen API). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, and video in; text out; reasoning yes (extended thinking); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.40/M input, $1.60/M output (AA; cache discount 80%, cost per task $0.22).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **70.3%** (Alibaba Cloud launch page)
- QwenClawBench: **61.8%** (Alibaba Cloud launch page)
- QwenWebBench: **1536** (Alibaba Cloud launch page)
- Claw-Eval: **62.7%** (Alibaba Cloud launch page)
- BFCL v4: **72.9%** (Alibaba Cloud launch page)
- MCP Atlas: **73.2%** (Alibaba Cloud launch page)
- VITA-Bench: **45.6%** (Alibaba Cloud launch page)
- DeepPlanning: **62.3%** (Alibaba Cloud launch page)
- OSWorld-Verified: **73.3%** (Alibaba Cloud launch page)
- AndroidWorld: **81.0%** (Alibaba Cloud launch page)
- APEX-Agents-AA: **22.4%** (Artificial Analysis)
- τ²-bench results: **93%** (Artificial Analysis)
- GDPval-AA: **886 Elo** (Artificial Analysis)
- AA Agentic Index: **19.7%** (Artificial Analysis)
- OSWorld 2.0: **2.8%** (OSWorld 2.0 paper)

Reasoning / knowledge:

- GPQA: **90.3%**; GPQA-D: **90.3%** (Alibaba Cloud launch page); AA-GPQA Diamond **90.0%**
- HLE: **34.7%** (Alibaba Cloud launch page); AA-HLE **35.6%**
- MMLU-Pro: **88.5%** (Alibaba Cloud launch page)
- MMLU-Redux: **94.5%** (Alibaba Cloud launch page)
- SuperGPQA: **71.4%** (Alibaba Cloud launch page)
- MMMLU: **89.0%** (Alibaba Cloud launch page)
- Artificial Analysis Intelligence Index: **25.2%** (#32 of 177; median 13) (Artificial Analysis)
- AA-LCR (long-context reasoning): **73.0%** (Artificial Analysis)
- CritPt: **9.1%** (Alibaba Cloud launch page)
- MRCRv2: **91.7%** (Alibaba Cloud launch page)
- AA-Omniscience Index **1.1%**; Accuracy **22.5%**; Hallucination rate **27.7%** (AA)
- IFEval: **94.6%** (Alibaba Cloud launch page)
- IFBench: **79.1%** (Alibaba Cloud launch page); AA-IFBench **78.0%**
- HMMT Feb 2026: **92.9%** (Alibaba Cloud launch page)
- IMOAnswerBench: **86.0%** (Alibaba Cloud launch page)
- Apex: **22.7%** (Alibaba Cloud launch page)
- FrontierMath v2 Tiers 1-3: **34.386%** (Epoch AI)

Coding:

- SWE-bench Verified: **77.7%** (Alibaba Cloud launch page)
- SWE-bench Pro: **57.6%** (Alibaba Cloud launch page)
- SWE Multilingual: **75.8%** (Alibaba Cloud launch page)
- LiveCodeBench v6: **89.6%** (Qwen3.8-27B model card — cross-ref)
- NL2Repo: **41.1%** (Alibaba Cloud launch page)
- SciCode: **51.3%** (Alibaba Cloud launch page)
- AA-SciCode: **46.1%** (Artificial Analysis)
- AA Coding Index: **55.9%** (Artificial Analysis)

Multimodal & grounded:

- MMMU-Pro: **79%** (Alibaba Cloud launch page); AA-MMMU-Pro **80.5%**
- MathVision: **90.3%** (Alibaba Cloud launch page)
- CharXiv: **85.9%** (Alibaba Cloud launch page)
- ERQA: **69.8%** (Alibaba Cloud launch page)
- MedXpertQA (MM): **71.0%** (Alibaba Cloud launch page)
- ScreenSpot Pro: **79.0%** (Alibaba Cloud launch page)
- SimpleVQA: **81.7%** (Alibaba Cloud launch page)
- MMSearch-Plus: **41.4%** (Alibaba Cloud launch page)
- RealWorldQA: **86.9%** (Alibaba Cloud launch page)
- OmniDocBench 1.5: **91.4%** (Alibaba Cloud launch page)
- OCRBench V2: **70.7%** (Alibaba Cloud launch page)
- ODINW13: **51.1%** (Alibaba Cloud launch page)
- Video-MME (with subtitle): **88.0%** (Alibaba Cloud launch page)
- VideoMMMU: **85.4%** (Alibaba Cloud launch page)
- MLVU (M-Avg): **87.4%** (Alibaba Cloud launch page)
- Design Arena Website: **1271** (OpenRouter)

Long context:

- MRCRv2: **91.7%** (Alibaba Cloud launch page)
- AA-LCR: **73.0%** (Artificial Analysis)
- Declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Strong Terminal-Bench 2.0 (70.3), QwenClawBench (61.8), MCP Atlas (73.2), AndroidWorld (81.0), OSWorld-Verified (73.3), GDPval-AA (886 Elo); capped by weak OSWorld 2.0 (2.8%), VITA-Bench (45.6%), DeepPlanning (62.3%). Good agentic tool profile on terminal tasks.
- **Reasoning: 72/100.** GPQA 90.3%, MMLU-Pro 88.5%, HMMT 92.9%, IMOAnswerBench 86.0%, MRCRv2 91.7%, AA Intelligence Index 25.2; capped by CritPt (9.1), HLE (34.7%), AA-Omniscience accuracy (22.5%), Intelligence Index (25.2). Strong math knowledge, weak HLE/open-ended reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 73.0%; capped because no public full-depth needle-recall score at 1M beyond AA-LCR.
- **Multimodal: 84/100.** Text + image + video in, text out; MathVision 90.3%, CharXiv 85.9%, Video-MME 88.0%, VideoMMMU 85.4%, RealWorldQA 86.9%, OmniDocBench 91.4%, ScreenSpot Pro 79.0%, ERQA 69.8%; capped by text-only output.
- **Coding: 68/100.** SWE-bench Verified 77.7%, LiveCodeBench v6 89.6%, SWE Multilingual 75.8%, NL2Repo 41.1%, SciCode 51.3%; capped by SWE-bench Pro (57.6%), AA-SciCode (46.1%), AA Coding Index (55.9%). Strong competitive coding, weaker agentic coding benchmarks.
- **Cost efficiency: 60/100.** $0.40/$1.60 moderate pricing with 80% cache discount; not counted toward Overall.
- **Overall Score: 77.4/100.** Half-up mean of (75 + 72 + 88 + 84 + 68) / 5 = 75.8 → 76. Best-fit recommendation: strong open-weights multimodal coding agent at 1M context with excellent value; verify on HLE-class and agentic coding tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Alibaba Cloud launch page + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
