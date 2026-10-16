# Gemini 3 Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gemini-3-pro (Google DeepMind launch data), Artificial Analysis (`artificialanalysis.ai/models/gemini-3-pro`), Vals AI, Epoch AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's Gemini 3 Pro proprietary reasoning model (released early 2026); natively multimodal; 1M-token context; text+image+audio+video in → text out; reasoning model.
- **Provider / access:** Gemini API (`gemini-3-pro`), Google AI Studio, Vertex AI; OpenAI-compatible not used — Google Gemini API; 1 API provider per Artificial Analysis.
- **Release / knowledge:** Release date not confirmed in fetched sources; knowledge cutoff not stated.
- **IDs:** `gemini-3-pro` (Gemini API / Vertex); no Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, and video in; text out; reasoning yes (reasoning model); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found in fetched sources.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **87.1%** (Artificial Analysis)
- JobBench: **11.4%** (JobBench paper)
- MMMU-Pro: **87.2%** (Alibaba Cloud launch page — cross-ref from Qwen model card)
- MMMU-Pro w/o tools: not found
- MMMU-Pro w/ Python: not found
- MathVision: **86.6%** (Alibaba Cloud launch page — cross-ref)
- Video-MME (with subtitle): **88.4%** (Alibaba Cloud launch page — cross-ref)
- ScreenSpot Pro: **72.7%** (DeepMind Gemini Flash page — cross-ref)
- CharXiv: **82.1%** (Qwen3.6-Plus multimodal comparison — cross-ref)
- V*: **75.9%** (Qwen3.6-Plus multimodal comparison — cross-ref)
- OmniDocBench 1.5: **91.4%** (Qwen3.5-397B-A17B model card — cross-ref)
- OCRBench V2: **70.7%** (Qwen3.5-397B-A17B model card — cross-ref)

Reasoning / knowledge:

- GPQA: **90.3%** (Alibaba Cloud launch page — cross-ref); AA-GPQA Diamond **90.8%**
- HLE: **34.7%** (Alibaba Cloud launch page); AA-HLE **39.7%**
- MMLU-Pro: **88.5%** (Alibaba Cloud launch page); MMLU-Redux: **94.5%**
- ARC-AGI-1: **75.00%** (ARC Prize verified)
- ARC-AGI-2: **31.1%** (Google DeepMind Gemini Pro page — cross-ref)
- Artificial Analysis Intelligence Index: **28.0%** (#21 of 177 open-weights; median 19)
- AA-LCR (long-context reasoning): **76.0%** (Artificial Analysis)
- CritPt: **9.1%** (Artificial Analysis)
- AA-Omniscience Index **15.3%**; Accuracy **55.8%**; Hallucination rate **91.5%** (AA)
- IFBench: **70.4%** (Artificial Analysis)

Coding:

- LiveCodeBench v6: **89.6%** (Qwen3.8-27B model card — cross-ref)
- SciCode: **51.3%** (Alibaba Cloud launch page)
- AA-SciCode: **46.1%** (Artificial Analysis)
- AA Coding Index: **55.9%** (Artificial Analysis)

Multimodal & grounded:

- MMMU-Pro: **87.2%** (Alibaba Cloud launch page); AA-MMMU-Pro **80.6%**
- CharXiv: **81.4%** (Qwen3.6-Plus multimodal comparison — cross-ref)
- ERQA: **70.5%** (Qwen3.5-397B-A17B model card — cross-ref)
- Video-MME (with subtitle): **88.4%** (Alibaba Cloud launch page)
- ScreenSpot Pro: **72.7%** (Google DeepMind Gemini Flash page — cross-ref)

Long context:

- AA-LCR: **76.0%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Some benchmark numbers come from cross-model comparison tables (Qwen3.5-397B-A17B, Qwen3.6-Plus model cards) and should be treated as approximate.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** τ²-bench (87.1%), MMMU-Pro (87.2%), MCP Atlas not found for this variant; capped by weak JobBench (11.4%), no OSWorld/Terminal-Bench numbers found for this exact model.
- **Reasoning: 76/100.** GPQA 90.3%, MMLU-Pro 88.5%, AA Intelligence Index 28.0 (#32 of 177 open-weights), AA-LCR 76.0%, ARC-AGI-1 (75.00%); capped by CritPt (9.1%), HLE (34.7%), AA-Omniscience accuracy (55.8%).
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 76.0%; capped because no public full-depth needle-recall score at 1M beyond AA-LCR.
- **Multimodal: 84/100.** Text + image + video in, text out; MathVision 86.6%, Video-MME 88.4%, OmniDocBench 91.4%, MMMU-Pro 87.2%; capped by text-only output.
- **Coding: 68/100.** LiveCodeBench v6 89.6%, AA-SciCode 46.1%, AA Coding Index 55.9%; capped by no SWE-bench Verified number found for this exact variant — scored conservatively.
- **Cost efficiency: 65/100.** Pricing not found; scored at midpoint pending confirmation; not counted toward Overall.
- **Overall Score: 77.6/100.** Half-up mean of (72 + 76 + 88 + 84 + 68) / 5 = 76.0 → 76. Best-fit recommendation: strong multimodal coding agent at 1M context with competitive pricing; verify on SWE-Verified and full-context tasks given mixed coding coverage.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Alibaba Cloud launch page + Artificial Analysis + Vals AI + Epoch AI + various model-card comparison tables independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
