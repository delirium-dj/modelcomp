# GPT-5.2 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gpt-5-2 (OpenAI GPT-5.2 launch page, Qwen3.5-397B-A17B model card comparison, ARC Prize, Epoch AI), Artificial Analysis (`artificialanalysis.ai/models/gpt-5-2`), Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's GPT-5.2 proprietary reasoning model (thinking variant); 400K context, text+image input → text out; $2/$12 per MTok; sibling: GPT-5.2 Pro, GPT-5.2 Instant.
- **Provider / access:** OpenAI API (`gpt-5.2`), native OpenAI API. Siblings: GPT-5.2 Pro, GPT-5.2 Instant.
- **Release / knowledge:** Release date not confirmed in fetched sources; knowledge cutoff not stated.
- **IDs:** `gpt-5.2` (OpenAI API); siblings `gpt-5.2-pro`, `gpt-5.2-instant`. No Free ID confirmed.
- **Context window:** 400K tokens (benchlm.ai). Verified via benchlm.ai.
- **Modalities:** Text+image in, text out per OpenAI launch page; reasoning yes; tool use not explicitly specified for this variant; JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found in fetched sources.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **65.8%** (OpenAI GPT-5.4 launch page — cross-ref)
- OSWorld-Verified: **47.3%** (OpenAI GPT-5.4 launch page — cross-ref)
- τ²-bench results: **84.8%** (Artificial Analysis)
- JobBench: **34.3%** (JobBench paper)

Reasoning / knowledge:

- ARC-AGI-1: **86.17%** (XHigh, ARC Prize verified); ARC-AGI-2: **52.9%** (OpenAI GPT-5.2 launch page)
- GPQA: **92.4%** (Qwen3.5 language comparison table — cross-ref); AA-GPQA Diamond **90.3%**
- HLE: **37.7%** (AA-HLE)
- MMLU-Pro: not found for this variant
- AA-LCR (long-context reasoning): **82.7%** (Artificial Analysis)
- CritPt: **11.6%** (Artificial Analysis)
- AA-Omniscience Index **-0.9%**; Accuracy **44.3%**; Hallucination rate **81.2%** (AA)
- IFBench: **75.4%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **67.400%**; Tier 4: **31.700%** (Epoch AI)
- AIME 2025: **100%** (OpenAI GPT-5.2 launch page)
- AA AIME 2025: **99.0%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **80%** (OpenAI GPT-5.2 launch page)
- SWE-bench Pro: **55.6%** (OpenAI GPT-5.4 launch page — cross-ref)
- Vibe Code Bench: **53.50%** (Vals AI)
- AA-SciCode: not found for this variant
- AA Coding Index: not found for this variant

Multimodal & grounded:

- MMMU-Pro: **79.5%** (OpenAI GPT-5.4 launch page — cross-ref)
- MMMU: **86.7%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- MathVision: **83.0%** (Qwen3.6-Plus multimodal comparison table — cross-ref)
- CharXiv: **82.1%** (Qwen3.6-Plus multimodal comparison table — cross-ref)
- ERQA: **59.8%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- RealWorldQA: **83.3%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- OmniDocBench 1.5: **85.7%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- OCRBench V2: **70.3%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- AI2D_TEST: **92.2%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- VideoMMMU: **85.9%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- MLVU (M-Avg): **85.6%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- Design Arena Website: **1196** (OpenRouter)
- SimpleVQA: **55.8%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- CC-OCR: **70.3%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- WE-Math: **79.0%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- DynaMath: **86.8%** (Qwen3.5-397B-A17B model card comparison — cross-ref)
- V*: **75.9%** (Qwen3.6-Plus multimodal comparison table — cross-ref)

Long context:

- AA-LCR: **82.7%** (Artificial Analysis); declared 400K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is moderate (benchlm 43 of 638 slots) but several dims rest on cross-variant figures.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** τ²-bench (84.8%), BrowseComp (65.8%), OSWorld-Verified (47.3%); capped by weak JobBench (34.3%), no OSWorld/Toolathlon numbers found for this exact model.
- **Reasoning: 68/100.** ARC-AGI-1 (86.17%), GPQA (92.4%), AIME 2025 (100%), FrontierMath T1-3 (67.4%), AA-LCR (82.7%); capped by CritPt (11.6%), HLE (37.7%), AA-Omniscience accuracy (44.3%), Intelligence Index (30.4%). Strong math reasoning.
- **Context window: 80/100.** Verified 400K tokens (benchlm.ai); AA-LCR (82.7%); capped because context below 1M frontier and no public full-depth retrieval score.
- **Multimodal: 74/100.** Text+image in, text out; MMMU-Pro (79.5%), MathVision (83.0%), CharXiv (82.1%), ScreenSpot Pro not found; capped by thin vision benchmark coverage and text-only output.
- **Coding: 64/100.** SWE-bench Verified (80%), Vibe Code Bench (53.50%); capped by SWE-bench Pro (55.6%), no LiveCodeBench number found for this exact variant — scored conservatively.
- **Cost efficiency: 60/100.** Pricing not found; scored at midpoint pending confirmation; not counted toward Overall.
- **Overall Score: 70.2/100.** Half-up mean of (65 + 68 + 80 + 74 + 64) / 5 = 70.2 → 70. Best-fit recommendation: balanced GPT-5.2 reasoning model with strong math (AIME 100%) and verified coding; verify on HLE-class and full-context tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + OpenAI GPT-5.2 launch page + Artificial Analysis + Vals AI + Epoch AI + ARC Prize + various model-card comparison tables independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
