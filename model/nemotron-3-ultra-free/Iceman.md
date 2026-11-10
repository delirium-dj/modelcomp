# Nemotron 3 Ultra 550B A55B — findings by Iceman

- Source: NVIDIA/Nemotron-3-Ultra-550B-A55B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3 Ultra 550B A55B (BF16)
- **Short description:** NVIDIA Nemotron 3 Ultra is an open-weight 550B/55B-active LatentMoE hybrid (Mamba-2 + MoE + Attention) model with 1M context, designed for frontier reasoning, complex agentic workflows, coding, and long-context analysis.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`, OpenMDW-1.1). Free on OpenCode Zen as `nemotron-3-ultra-free` under NVIDIA trial terms; paid on NVIDIA Build/other hosts. Local metadata lists `opencode/nemotron-3-ultra-free`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10 (release 2026-06-04). Post-training cutoff May 2026, pre-training cutoff Sep 2025 (card).
- **IDs:** `NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`, `nemotron-3-ultra-free`.
- **Context window:** Up to 1,000,000 tokens (262,144 default serve noted in metadata/card contexts).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Free ($0/$0) on Zen under NVIDIA trial terms; paid ~$0.50/$2.50 per 1M on NVIDIA Build (local metadata). Open weights for self-host.
- **Architecture:** LatentMoE hybrid Mamba-2 + MoE + Attention with MTP, 550B total / 55B active parameters, 1M context, reasoning mode configurable.

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table for Nemotron 3 Ultra 550B-A55B unless noted.

Agent / tool use:

- Terminal Bench 2.1: **56.4**
- GDPVal: **46.7**
- SWE-Bench Verified: **70.7**
- SWE-Bench Multilingual: **67.7**
- ProfBench (Search): **56.0**
- PinchBench: **90.0**
- TauBench V3: Airline **81.5**, Retail **86.4**, Telecom **92.9**, Banking **22.6** (average **70.9**)
- BrowseComp: **44.4**
- Vals.ai Financial Agent 1.1: without web search **60.1**, with web search **53.7**

Reasoning / knowledge:

- HLE (no tools): **26.7**
- HLE (with tools): **37.4**
- AIME 2026 / IMOAnswerBench: not listed in extracted table rows shown, but strong reasoning profile indicated (card emphasizes frontier reasoning)
- LiveCodeBench (v6): **89.0** (reasoning/coding benchmark row)
- GPQA (no tools): **87.0**
- Apex-Shortlist (no tools): **74.9**, (with tools): **84.8**
- MMLU-Pro: **86.8**
- OmniScience Accuracy: **24.1**, Non-Hallucination: **78.7**

Coding:

- SWE-Bench Verified: **70.7**
- SWE-Bench Multilingual: **67.7**
- Terminal Bench 2.1: **56.4**
- LiveCodeBench (v6): **89.0**
- SciCode (subtask): **44.6**

Long context:

- AA-LCR: **65.4**
- RULER (1M): **94.7**
- Longbench v2 (≤ 1M): **61.9**
- Up to 1M context supported.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 86/100.** Strong agentic/tool-use profile across diverse benchmarks (Terminal Bench 2.1 56.4, SWE-Bench Verified 70.7, TauBench V3 avg 70.9, PinchBench 90.0, BrowseComp 44.4, ProfBench 56.0, Vals.ai 53.7–60.1).
- **Reasoning: 86/100.** Strong reasoning/knowledge results (GPQA 87.0, MMLU-Pro 86.8, HLE 26.7/37.4, Apex-Shortlist 74.9/84.8, OmniScience 24.1/78.7 NH, LiveCodeBench 89.0).
- **Context window: 96/100.** Native 1M context with excellent long-context performance (RULER 1M 94.7%, AA-LCR 65.4, Longbench v2 61.9).
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 86/100.** Strong coding/agentic coding (SWE-Bench Verified 70.7, SWE-Bench Multilingual 67.7, Terminal Bench 2.1 56.4, LiveCodeBench 89.0, SciCode 44.6).
- **Cost efficiency: 90/100.** Open weights and free Zen trial route available; paid hosted pricing moderate for a 55B-active frontier-scale model.
- **Overall Score: 79/100.** Mean of the five non-cost dims (86, 86, 96, 40, 86) = 78.8 → 79. Best fit for long-context, text-only frontier reasoning and agentic/coding workflows, including free-trial evaluation on Zen.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16 model card (Hugging Face)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)
  - Local repository metadata consulted: `model/nemotron-3-ultra-free/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
