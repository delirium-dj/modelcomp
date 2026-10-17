# Nemotron 3.5 Super VL 120B A12B — findings by Muse Spark 1.3

- Source: NVIDIA/Nemotron 3.5 Super VL, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's open-weight 120B/12B-active Mamba-2–Transformer hybrid MoE vision-language model for specialized text+vision agents, NVFP4-quantized with near-lossless quality.
- **Provider / access:** NVIDIA NIM / Build.nvidia.com API, Hugging Face weights, hosts (NanoGPT, DeepInfra, Baseten); OpenCode Zen `opencode/nemotron-3.5-super-vl`.
- **Release / knowledge:** 2026-10-15 (Build.nvidia.com + Hugging Face; AA article same day); cutoff not disclosed
- **IDs:** `opencode/nemotron-3.5-super-vl` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,000,000 native (host-served 262,144 on some endpoints) — verified via NVIDIA model card + AA article
- **Modalities:** text, image, video in; text out; configurable reasoning (enable_thinking True/False); tool calls yes
- **Pricing (as of 2026-10-17):** NanoGPT $0.15 in / $0.50 out per 1M (cache $0.02); open weights under OpenMDW-1.1 (self-host free); paid on Zen
- **Architecture:** 120B total / 12B active hybrid MoE (512 routed experts/layer, Mamba-2 + attention, C-RADIO vision encoder, MTP speculative decoding); OpenMDW-1.1 license

### Raw benchmarks found

Agent / tool use:

- AA Intelligence Index: **26.5** (AA article — #1 US open weights, ahead of Inkling Small 25.7, Ultra 23; 2x predecessor Super 13, ~60% fewer output tokens 46k/task)
- Terminal-Bench 2.1: **66.7% measured** (benchgap, AA-measured lane 65.3% est. — consistent band)
- BrowseComp: **78.0% measured** (benchgap)
- Tau3-bench: **18.9% measured** (benchgap — weak lane)
- GDPval-AA: **33.1% measured** (benchgap lane; scale differs from Elo reads — provisional)
- MCP Atlas: **72.7% estimated** (benchgap est. ±10.8, low confidence — provisional)
- Claw-Eval: **61.8% estimated** (benchgap est. — provisional, no measured absolute found)


Reasoning / knowledge:

- GPQA Diamond: **89.5% measured** (benchgap; AA-GPQA lane 88.1% est. — consistent)
- HLE: **29.2% measured** (benchgap; AA-HLE 30.7%, HLE w/o tools 31.8% — consistent band)
- AA-LCR: **68.6% measured** (benchgap)
- CritPt: **10.9% measured** (benchgap — weak lane)
- AA-Omniscience Accuracy: **26.2% measured** (benchgap)
- IFBench: **70.9% measured** (benchgap)
- MMMLU: **89.7% estimated** (benchgap est. — provisional)

Coding:

- SWE-bench Verified: **71.1% measured** (benchgap)
- SWE-bench Pro: **51.8% measured** (benchgap)
- SWE Multilingual: **67.7% measured** (benchgap)
- LiveCodeBench v6: **88.2% measured** (benchgap — standout lane)
- AA-SciCode: **47.8% measured** (benchgap; SciCode 47.7% est. — consistent)
- Vibe Code Bench: **0.8% estimated** (benchgap est. — negligible/provisional)
- DeepSWE: **59.3% estimated** (benchgap est. low confidence — provisional)

Long context:

- **1M native verified (host 262K some endpoints); MRCRv2 67.7% est. low-confidence provisional; 630 tok/s at 100K prompts (AA/DeepInfra) supports long-agent use**

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 66.7% plus BrowseComp 78.0% and AA Index 26.5 (#1 US open) with 5x throughput; Tau3 18.9% caps it.
- **Reasoning: 80/100.** GPQA 89.5% plus LCR 68.6%, IFBench 70.9%, MMMLU ~89.7%; HLE ~30% band and CritPt 10.9% cap it.
- **Context window: 97/100.** 1M native verified (host 262K some endpoints); just under full-native tier.
- **Multimodal: 92/100.** Text+image+video in, CharXiv 80.8%, V* 85.6%, MathVision 78.2%, MLVU ~85.9%; below omni audio-out.
- **Coding: 84/100.** LiveCode v6 88.2% plus SWE-Verified 71.1%, SWE-Pro 51.8%, Multilingual 67.7%, SciCode 47.8%; est-only lanes cap it.
- **Cost efficiency: 88/100.** $0.15/$0.50 NanoGPT plus open-weights self-host free; paid on Zen so below 100.
- **Overall Score: 87/100.** Mean (80+80+97+92+84)/5 = 86.6 → 87; best-fit open-weight multimodal agent pick at low serving cost.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-17
- Method: public internet research (NVIDIA model card + tech blog 2026-10-15, AA Super+Bolt article, benchgap measured lane); normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
