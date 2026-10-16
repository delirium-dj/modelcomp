# GPT-5.4 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gpt-5-4 (OpenAI GPT-5.4 launch page), Artificial Analysis (`artificialanalysis.ai/models/gpt-5-4`), Vals AI, Epoch AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's flagship model for complex professional work (released March 5, 2026 per AA); reasoning model; 1M context / 922K max input / 128K max output; text+image input → text out; $2.50/$15 per MTok; knowledge cutoff Aug 2025.
- **Provider / access:** OpenAI API (`gpt-5.4`), native OpenAI API; sibling: GPT-5.4 Pro, GPT-5.4 mini, GPT-5.4 nano.
- **Release / knowledge:** Released March 5, 2026 (AA); knowledge cutoff Aug 2025.
- **IDs:** `gpt-5.4` (OpenAI API); siblings `gpt-5.4-pro`, `gpt-5.4-mini`, `gpt-5.4-nano`. No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis); max input 922K; max output 128K. Verified on benchlm.ai.
- **Modalities:** Text+image in, text out per OpenAI docs; reasoning yes; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $2.50/M input, $15.00/M output (AA; cache discount 90%, cost per task $2.17).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** (OpenAI GPT-5.4 launch page)
- BrowseComp: **82.7%** (OpenAI GPT-5.4 launch page)
- OSWorld-Verified: **75%** (OpenAI GPT-5.6 launch page)
- MCP Atlas: **70.6%** (OpenAI GPT-5.5 comparison table — cross-ref)
- Toolathlon: **54.6%** (OpenAI GPT-5.4 launch page)
- τ²-bench results: **88.9%** (OpenAI GPT-5.4 mini and nano launch page — cross-ref)
- GDPval-AA: **1307 Elo** (Artificial Analysis); normalized **37.3%**
- AA Agentic Index: **49.4%** (Artificial Analysis)
- JobBench: **38.9%** (JobBench paper)
- ExploitGym: **6.0%** (ExploitGym paper)
- ApprenticeBench: **11%** (NeoCognition)

Reasoning / knowledge:

- GPQA: **92.8%** (Alibaba Cloud Qwen3.5 comparison table — cross-ref); AA-GPQA Diamond **92.0%**
- HLE: **52.1%** (OpenAI GPT-5.5 comparison table — cross-ref); AA-HLE **43.7%**
- MMLU-Pro: **89.2%** (Vals AI)
- ARC-AGI-1: **93.67%** (XHigh, ARC Prize verified)
- ARC-AGI-2: **74.0%** (ARC Prize official leaderboard)
- Artificial Analysis Intelligence Index: **39.0%** (#63 of 217; median 27) (Artificial Analysis)
- AA-LCR (long-context reasoning): **82.0%** (Artificial Analysis)
- CritPt: **23.4%** (Artificial Analysis)
- AA-Omniscience Index **5.8%**; Accuracy **50.8%**; Hallucination rate **91.7%** (AA)
- IFBench: **73.9%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **78.596%** (Epoch AI)
- FrontierMath v2 Tier 4: **49.000%** (Epoch AI)

Coding:

- SWE-bench Pro: **57.7%** (OpenAI GPT-5.4 launch page)
- LiveCodeBench Pro: **87.5%** (Meta AI Muse Spark comparison chart — cross-ref)
- SWE-bench (Vals): **77.4%** (Vals AI)
- AA-SciCode: **47.1%** (Artificial Analysis)
- AA Coding Index: **71.0%** (Artificial Analysis)
- React Native Evals: **85.3%** (React Native Evals leaderboard)
- PostTrainBench v1.1: **19.0%** (public leaderboard)

Multimodal & grounded:

- MMMU-Pro: **81.2%** (OpenAI GPT-5.4 launch page); MMMU-Pro w/ Python: **82.1%**
- ScreenSpot Pro: **85.4%** (Meta AI Muse Spark comparison chart — cross-ref)
- CharXiv: **82.8%** (Qwen3.6-Plus multimodal comparison table — cross-ref)
- ERQA: **65.4%** (Qwen3.5-397B-A17B model card — cross-ref)
- SimpleVQA: **61.1%** (Qwen3.5-397B-A17B model card — cross-ref)
- MedXpertQA (MM): **77.1%** (Meta AI Muse Spark comparison chart — cross-ref)
- AA-MMMU-Pro: **78.4%** (Artificial Analysis)
- Design Arena Website: **1221** (OpenRouter)

Long context:

- AA-LCR: **82.0%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is moderate (benchlm 40 of 638 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Terminal-Bench 2.0 (75.1%), BrowseComp (82.7%), OSWorld-Verified (75%), τ²-bench (88.9%), GDPval-AA (1307 Elo); capped by weak JobBench (38.9%), ExploitGym (6.0%), ApprenticeBench (11%), MazeBench (0%). Solid agentic tool-use profile.
- **Reasoning: 72/100.** ARC-AGI-1 (93.67%), ARC-AGI-2 (74.0%), GPQA (92.8%), AA Intelligence Index (39.0%), AA-LCR (82.0%); capped by CritPt (23.4%), HLE (52.1%), AA-Omniscience accuracy (50.8%), Intelligence Index (39.0%). Strong knowledge reasoning.
- **Context window: 88/100.** Verified 1.05M context (benchlm.ai); AA-LCR 82.0%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 72/100.** Text+image in, text out per OpenAI docs; MMMU-Pro (81.2%), ScreenSpot Pro (85.4%), CharXiv (82.8%), ERQA (65.4%), SimpleVQA (61.1%), MedXpertQA MM (77.1%); capped by text-only output.
- **Coding: 66/100.** LiveCodeBench Pro (87.5%), SWE-bench Verified (79.6%), React Native Evals (85.3%), Vibe Code Bench (67.42%); capped by SWE-bench Pro (57.7%), FrontierCode 1.1 Main (24.3%), PostTrainBench v1.1 (19.0%). Strong verified coding, weaker agentic coding suites.
- **Cost efficiency: 55/100.** $2.50/$15 premium pricing with 90% cache discount; not counted toward Overall.
- **Overall Score: 73.6/100.** Half-up mean of (70 + 72 + 88 + 72 + 66) / 5 = 72.4 → 72. Best-fit recommendation: strong agentic reasoning model with verified coding at 1M context; premium price ($2.50/$15) justified only for demanding tasks where its ARC-AGI and verified coding edge matters.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + OpenAI GPT-5.4 launch page + Artificial Analysis + Vals AI + Epoch AI + various model-card comparison tables independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
