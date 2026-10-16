# Qwen3.5 397B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/qwen3-5-397b (Qwen3.6-Plus comparison table, Qwen3.5-397B-A17B model card), Artificial Analysis (`artificialanalysis.ai/models/qwen3-5-397b-a17b-non-reasoning`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 397B
- **Short description:** Alibaba's open-weights MoE model (397B total / 17B active per HF card), non-reasoning variant; 128K context / text+in+video in → text out; sibling: Qwen3.5 397B (Reasoning).
- **Provider / access:** Qwen API (`qwen3.5-397b`), open weights on Hugging Face (`Qwen/Qwen3.5-397B-A17B`); Qwen Community License 1.0 (commercial use allowed with restrictions).
- **Release / knowledge:** Released 2026 per Qwen; knowledge cutoff not stated.
- **IDs:** `qwen3.5-397b` (Qwen API), `Qwen/Qwen3.5-397B-A17B` (HF weights). No Free ID confirmed.
- **Context window:** 128K tokens (benchlm.ai). Verified.
- **Modalities:** Text, image, and video in; text out per Qwen docs; reasoning type: Non-Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Open-weights MoE, 397B total / 17B active, Qwen Community License 1.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **52.5%** (Qwen3.6-Plus comparison table)
- BrowseComp: **69%** (Qwen3.5-397B-A17B model card)
- OSWorld-Verified: **62.2%** (Qwen3.5-397B-A17B model card)
- Claw-Eval: **56.8%** (Claw-Eval leaderboard)
- QwenClawBench: **51.8%** (Qwen3.6-Plus comparison table)
- τ³-bench results: **68.4%** (Qwen3.6-Plus comparison table)
- VITA-Bench: **43.7%** (Qwen3.6-Plus comparison table)
- DeepPlanning: **37.6%** (Qwen3.6-Plus comparison table)
- Toolathlon: **36.3%** (Qwen3.6-Plus comparison table)
- MCP Atlas: **46.1%** (Qwen3.6-Plus comparison table)
- MCP-Tasks: **74.2%** (Qwen3.6-Plus comparison table)
- WideResearch: **74.0%** (Qwen3.6-Plus comparison table)
- τ²-bench results: **83.9%** (Artificial Analysis)
- ResearchClawBench: **14.2%** (ResearchClawBench leaderboard)
- Gert Labs: **46.76%** (Gert Labs rankings)

Reasoning / knowledge:

- GPQA: **88.4%** (Qwen3.6-Plus comparison table)
- SuperGPQA: **70.4%** (Qwen3.6-Plus comparison table)
- MMLU-Pro: **87.8%** (Qwen3.6-Plus comparison table)
- MMLU-Redux: **94.9%** (Qwen3.6-Plus comparison table)
- C-Eval: **93%** (Qwen3.6-Plus comparison table)
- HLE: **28.7%** (Qwen3.6-Plus comparison table)
- Artificial Analysis Intelligence Index: **21.4%** (Artificial Analysis)
- AA-GPQA Diamond: **86.1%** (Artificial Analysis)
- AA-HLE: **19.8%** (Artificial Analysis)
- AA-Omniscience Index **-37.9%**; Accuracy **24.5%**; Hallucination rate **82.7%** (AA)
- AA-LCR (long-context reasoning): **64.3%** (Artificial Analysis)
- CritPt: **0.9%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **25.965%** (Epoch AI)
- FrontierMath v2 Tier 4: **0.000%** (Epoch AI)

Coding:

- SWE-bench Verified: **76.2%** (Qwen3.6-Plus comparison table)
- SWE-bench Pro: **50.9%** (Qwen3.6-Plus comparison table)
- SWE Multilingual: **69.3%** (Qwen3.5-397B-A17B model card)
- LiveCodeBench v6: **83.6%** (Qwen3.6-Plus comparison table)
- NL2Repo: **32.2%** (Qwen3.6-27B model card — cross-ref)
- AA-SciCode: not found for this variant

Multimodal & grounded:

- MMMU: **85.0%** (Qwen3.5-397B-A17B model card)
- MMMU-Pro: **79%** (Qwen3.6-Plus multimodal comparison table); AA-MMMU-Pro **52.7%** (AA)
- MathVision: **88.6%** (Qwen3.6-Plus multimodal comparison table)
- RealWorldQA: **83.9%** (Qwen3.5-397B-A17B model card)
- OmniDocBench 1.5: **90.8%** (Qwen3.5-397B-A17B model card)
- Video-MME (with subtitle): **87.5%** (Qwen3.5-397B-A17B model card)
- Video-MME (w/o subtitle): **83.7%** (Qwen3.5-397B-A17B model card)
- We-Math: **87.9%** (Qwen3.5-397B-A17B model card)
- DynaMath: **86.3%** (Qwen3.5-397B-A17B model card)
- SimpleVQA: **67.1%** (Qwen3.5-397B-A17B model card)
- CharXiv: **80.8%** (Qwen3.6-Plus multimodal comparison table)
- MMLongBench-Doc: **61.5%** (Qwen3.5-397B-A17B model card)
- CC-OCR: **82.0%** (Qwen3.5-397B-A17B model card)
- AI2D_TEST: **93.9%** (Qwen3.5-397B-A17B model card)
- CountBench: **97.2%** (Qwen3.5-397B-A17B model card)
- RefCOCO (avg): **92.3%** (Qwen3.5-397B-A17B model card)
- ODINW13: **47.0%** (Qwen3.5-397B-A17B model card)
- ERQA: **67.5%** (Qwen3.5-397B-A17B model card)
- VideoMMMU: **84.7%** (Qwen3.6-Plus multimodal comparison table)
- MLVU (M-Avg): **86.7%** (Qwen3.5-397B-A17B model card)
- ScreenSpot Pro: **65.6%** (Qwen3.6-Plus multimodal comparison table)
- V*: **95.8%** (Qwen3.6-Plus multimodal comparison table)

Instruction Following:

- IFEval: **92.6%** (Qwen3.6-Plus comparison table)
- IFBench: **76.5%** (Qwen3.5-397B-A17B model card)
- AA-IFBench: **51.6%** (Artificial Analysis)

Long context:

- AI-Needle: **68.7%** (Qwen3.6-Plus comparison table)
- LongBench v2: **63.2%** (Qwen3.6-Plus comparison table)
- AA-LCR: **64.3%** (Artificial Analysis); declared 128K context

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** MCP-Tasks (74.2%), WideResearch (74.0%), τ³-bench (68.4%), Claw-Eval (56.8%), OSWorld-Verified (62.2%); capped by weak ResearchClawBench (14.2%), Toolathlon (36.3%), DeepPlanning (37.6%). Moderate agentic tool-use profile.
- **Reasoning: 65/100.** GPQA 88.4%, MMLU-Redux 94.9%, MMLU-Pro 87.8%, C-Eval 93%, AA-LCR (64.3%); capped by CritPt (0.9%), HLE (28.7%), AA-HLE (19.8%), AA-Omniscience accuracy (24.5%), Intelligence Index (21.4%). Strong knowledge/math reasoning, weakest on HLE/open-ended reasoning.
- **Context window: 80/100.** Verified 128K tokens (benchlm.ai); AA-LCR 64.3%, AI-Needle 68.7%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AI-Needle.
- **Multimodal: 80/100.** Text + image + video in, text out; MMMU (85.0%), MathVision (88.6%), Video-MME with subtitle (87.5%), V* (95.8%), MLVU (86.7%), CountBench (97.2%); capped by text-only output.
- **Coding: 65/100.** SWE-bench Verified (76.2%), LiveCodeBench v6 (83.6%), SWE Multilingual (69.3%), Vibe Code Bench not found; capped by SWE-bench Pro (50.9%), NL2Repo (32.2%). Strong verified coding.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 70/100.** Half-up mean of (60 + 65 + 80 + 80 + 65) / 5 = 70.0 → 70. Best-fit recommendation: strong multimodal model with verified coding at 128K context; treat pricing/cost as provisional; verify on HLE-class tasks given weak results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Qwen3.5-397B model card + Qwen3.6-Plus comparison table + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
