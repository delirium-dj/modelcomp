# Qwen3.6 Plus — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/qwen3-6-plus (Qwen3.6 Plus model card), Artificial Analysis (`artificialanalysis.ai/models/qwen3-6-plus`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6 Plus
- **Short description:** Alibaba's proprietary reasoning model (released April 2, 2026 per AA); 1M context / text+image+video in → text out; $0.50/$3.00 per MTok; deprecated by Qwen3.7 Plus; 1 API provider per AA.
- **Provider / access:** Qwen API (`qwen3.6-plus`), 1 API provider per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released April 2, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `qwen3.6-plus` (Qwen API). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, and video in; text out per Qwen docs; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $0.50/M input, $3.00/M output (AA; cache discount 90%, cost per task N/A).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **61.6%** (Qwen3.6 Plus model page)
- Claw-Eval: **58.8%** (Claw-Eval leaderboard)
- QwenClawBench: **57.2%** (Qwen3.6 Plus model page)
- τ³-bench results: **70.7%** (Qwen3.6 Plus model page)
- VITA-Bench: **44.3%** (Qwen3.6 Plus model page)
- DeepPlanning: **41.5%** (Qwen3.6 Plus model page)
- Toolathlon: **39.8%** (Qwen3.6 Plus model page)
- MCP Atlas: **48.2%** (Qwen3.6 Plus model page)
- MCP-Tasks: **74.1%** (Qwen3.6 Plus model page)
- WideResearch: **74.3%** (Qwen3.6 Plus model page)
- τ²-bench results: **97.7%** (Artificial Analysis)
- GDPval-AA: **1066 Elo** (Artificial Analysis); normalized **24.5%**
- ResearchClawBench: **18.0%** (ResearchClawBench leaderboard)
- GDPval-AA (Vals): not found
- Terminal-Bench 2.1 (Vals): **53.2%** (Vals AI)

Reasoning / knowledge:

- GPQA: **90.4%** (Qwen3.6 Plus model page)
- SuperGPQA: **71.6%** (Qwen3.6 Plus model page)
- MMLU-Pro: **88.5%** (Qwen3.6 Plus model page)
- MMLU-Redux: **94.5%** (Qwen3.6 Plus model page)
- C-Eval: **93.3%** (Qwen3.6 Plus model page)
- HLE: **28.8%** (Qwen3.6 Plus model page)
- Artificial Analysis Intelligence Index: **27.0%** (#110 of 216; median 27)
- AA-GPQA Diamond: **88.2%** (Artificial Analysis)
- AA-HLE: **27.8%** (Artificial Analysis)
- AA-Omniscience Index **0.9%**; Accuracy **26.4%**; Hallucination rate **34.6%** (AA)
- GPQA Diamond (Vals): **87.4%** (Vals AI)
- MMLU-Pro (Vals): **87.7%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **38.246%** (Epoch AI)

Coding:

- SWE-bench Verified: **78.8%** (Qwen3.6 Plus model page)
- SWE-bench Pro: **56.6%** (Qwen3.6 Plus model page)
- SWE Multilingual: **73.8%** (Qwen3.6 Plus model page)
- LiveCodeBench v6: **87.1%** (Qwen3.6 Plus model page)
- NL2Repo: **37.9%** (GLM-5.1 model card comparison table — cross-ref)
- Vibe Code Bench: **25.56%** (Vals AI)
- LiveCodeBench (Vals): **86.0%** (Vals AI)
- SWE-bench (Vals): **73.4%** (Vals AI)
- AA Coding Index: **54.5%** (Artificial Analysis)

Multimodal & grounded:

- MMMU: **86.0%** (Qwen3.6 Plus model page)
- MMMU-Pro: **78.8%** (Qwen3.6 Plus model page); AA-MMMU-Pro **78.0%**
- MathVision: **88.0%** (Qwen3.6 Plus model page)
- VideoMMMU: **84.0%** (Qwen3.6 Plus model page)
- ScreenSpot Pro: **68.2%** (Qwen3.6 Plus model page)
- CharXiv: **81.5%** (Qwen3.6 Plus model page)
- V*: **96.9%** (Qwen3.6 Plus model page)
- Design Arena Website: **1244** (OpenRouter)

Long context:

- AI-Needle: **68.3%** (Qwen3.6 Plus model page)
- LongBench v2: **62%** (Qwen3.6 Plus model page)
- AA-LCR: **78.3%** (Artificial Analysis); declared 1M context

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 64/100.** MCP-Tasks (74.1%), WideResearch (74.3%), τ³-bench (70.7%), Terminal-Bench 2.0 (61.6%), MCP Atlas (48.2%); capped by weak Terminal-Bench 2.1 (53.2%), GDPval-AA normalized (24.5%), ResearchClawBench (18.0%). Moderate agentic tool-use profile.
- **Reasoning: 68/100.** GPQA 90.4%, MMLU-Pro 88.5%, MMLU-Redux 94.5%, C-Eval 93.3%, AA-LCR (78.3%), FrontierMath T1-3 (38.246%); capped by CritPt (2.9%), HLE (28.8%), AA-HLE (27.8%), AA-Omniscience accuracy (26.4%), Intelligence Index (27.0%). Strong knowledge/math reasoning, weakest on open-ended reasoning.
- **Context window: 90/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 78.3%, AI-Needle 68.3%, LongBench v2 62%; capped because no public full-depth needle-recall score beyond AI-Needle and AA-LCR.
- **Multimodal: 85/100.** Text + image + video in, text out; MMMU-Pro (78.8%), MathVision (88.0%), VideoMMMU (84.0%), ScreenSpot Pro (68.2%), CharXiv (81.5%), V* (96.9%); capped by text-only output.
- **Coding: 65/100.** SWE-bench Verified (78.8%), LiveCodeBench v6 (87.1%), SWE Multilingual (73.8%), Vibe Code Bench (25.56%); capped by SWE-bench Pro (56.6%), NL2Repo (37.9%), Vibe Code Bench (25.56%). Strong verified coding.
- **Cost efficiency: 85/100.** $0.50/$3.00 competitive pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 74/100.** Half-up mean of (64 + 68 + 90 + 85 + 65) / 5 = 74.4 → 74. Best-fit recommendation: strong multimodal model at 1M context with competitive pricing; verify on HLE-class and agentic tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Qwen3.6 Plus model card + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
