# Qwen3.7 Max — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/qwen3-7-max (Qwen3.7-Max model page), Artificial Analysis (`artificialanalysis.ai/models/qwen3-7-max`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Max
- **Short description:** Alibaba's proprietary reasoning model; 1M context; proprietary (weights not public); sibling models: Qwen3.7 Plus, Qwen3.7 Flash.
- **Provider / access:** Qwen API (`qwen3.7-max`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per Qwen; knowledge cutoff not stated.
- **IDs:** `qwen3.7-max` (Qwen API). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out; reasoning type: Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (Qwen3.7-Max model page)
- QwenClawBench: **64.3%** (Qwen3.7-Max model page)
- QwenWebBench: **1568** (Qwen3.7-Max model page)
- Claw-Eval: **65.2%** (Qwen3.7-Max model page)
- BFCL v4: **75.0%** (Qwen3.7-Max model page)
- MCP Atlas: **76.4%** (Qwen3.7-Max model page)
- VITA-Bench: **47.9%** (Qwen3.7-Max model page)
- HLE w/ tools: **53.5%** (Qwen3.7-Max model page)
- τ²-bench results: **94.7%** (Artificial Analysis)
- GDPval-AA: **1190 Elo** (Artificial Analysis); normalized **31.4%**
- AA Agentic Index: **23.9%** (Artificial Analysis)
- ResearchClawBench: **18.7%** (ResearchClawBench leaderboard)
- Terminal-Bench 2.1 (Vals): **61.0%** (Vals AI)

Reasoning / knowledge:

- GPQA: **92.4%** (Qwen3.7-Max model page); AA-GPQA Diamond **92.3%**
- HLE: **41.4%** (Qwen3.7-Max model page); AA-HLE **40.5%**
- MMLU-Pro: **89.6%** (Qwen3.7-Max model page)
- MMLU-Redux: **95%** (Qwen3.7-Max model page)
- SuperGPQA: **73.6%** (Qwen3.7-Max model page)
- MMMLU: **90.3%** (Qwen3.7-Max model page)
- Artificial Analysis Intelligence Index: **29.5%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **79.0%** (Artificial Analysis)
- CritPt: **13.4%** (Qwen3.7-Max model page)
- AA-Omniscience Index **13.5%**; Accuracy **31.1%**; Hallucination rate **25.6%** (AA)
- GPQA Diamond (Vals): **90.2%** (Vals AI)
- MMLU-Pro (Vals): **89.3%** (Vals AI)
- IFBench: **79.1%** (Qwen3.7-Max model page)
- FrontierMath v2 Tiers 1-3: **64.561%** (Epoch AI)
- FrontierMath v2 Tier 4: **34.146%** (Epoch AI)

Coding:

- SWE-bench Verified: **80.4%** (Qwen3.7-Max model page)
- SWE-bench Pro: **60.6%** (Qwen3.7-Max model page)
- SWE Multilingual: **78.3%** (Qwen3.7-Max model page)
- NL2Repo: **47.2%** (Qwen3.7-Max model page)
- SciCode: **53.5%** (Qwen3.7-Max model page)
- LiveCodeBench v6: **91.6%** (Qwen3.7-Max model page)
- AA-SciCode: **49.5%** (Artificial Analysis)
- LiveCodeBench v6 (Vals): **87.1%** (Vals AI)
- SWE-bench (Vals): **68.8%** (Vals AI)
- AA Coding Index: **66.0%** (Artificial Analysis)
- OpenHarmony Bench: **53.4%** (OpenHarmony Bench leaderboard)

Multimodal & grounded:

- Design Arena Website: **1276** (OpenRouter)

Long context:

- MRCRv2: **90.4%** (Qwen3.7-Max model page)
- AA-LCR: **79.0%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Terminal-Bench 2.0 (69.7%), MCP Atlas (76.4%), BFCL v4 (75.0%), GDPval-AA (1190 Elo), τ²-bench (94.7%); capped by weak GDPval-AA normalized (31.4%), AA Agentic Index (23.9%), ResearchClawBench (18.7%). Strong agentic tool-use profile.
- **Reasoning: 74/100.** GPQA 92.4%, MMLU-Redux 95%, MMLU-Pro 89.6%, MRCRv2 (90.4%), AA-LCR (79.0%), FrontierMath T1-3 (64.561%); capped by CritPt (13.4%), HLE (41.4%), AA-Omniscience accuracy (31.1%), Intelligence Index (29.5%). Strong knowledge/math reasoning.
- **Context window: 90/100.** Verified 1M tokens (benchlm.ai); AA-LCR 79.0%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 60/100.** No confirmed multimodal benchmarks found beyond Design Arena Website (1276); capped by text-only output assumption and thin multimodal coverage.
- **Coding: 72/100.** SWE-bench Verified (80.4%), LiveCodeBench v6 (91.6%), SWE Multilingual (78.3%), LiveCodeBench v6 Vals (87.1%), SWE-bench Vals (68.8%), AA Coding Index (66.0%); capped by SWE-bench Pro (60.6%), NL2Repo (47.2%), AA-SciCode (49.5%). Strong verified coding.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 73.6/100.** Half-up mean of (72 + 74 + 90 + 60 + 72) / 5 = 73.6 → 74. Best-fit recommendation: strong verified coding and knowledge reasoning at 1M context; verify on multimodal tasks given thin coverage there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Qwen3.7-Max model page + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
