# Nemotron 3 Ultra Free — findings by Fledge Alpha

- Source: NVIDIA (`nemotron-3-ultra-free`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** Free tier of NVIDIA's Nemotron 3 Ultra (550B/55B-active hybrid Mamba-Transformer MoE), served through OpenRouter's free OpenCode Zen-style quota.
- **Provider / access:** OpenRouter `nvidia/nemotron-3-ultra-550b-a55b:free` (free tier); NVIDIA build.nvidia.com and NVFP4 NIM for paid; 1M context.
- **Release / knowledge:** June 4, 2026; post-training cutoff May 2026.
- **IDs:** `nvidia/nemotron-3-ultra-550b-a55b:free`; no Zen Free ID verified.
- **Context window:** 1,000,000 tokens; 32,768 max output.
- **Modalities:** text in/out; reasoning effort; tool calling.
- **Pricing (as of 2026-10-05):** free on the OpenRouter/OpenCode tier; OpenMDW-1.1 open weights.
- **Architecture:** hybrid Mamba-Transformer MoE, 550B total / 55B active, NVFP4 pre-training recipe, MTP, open training recipe.

### Raw benchmarks found

Agent / tool use:

- Terminal Bench 2.1: **56.4** (BF16, NVIDIA card)
- τ²-Bench Telecom: **83.3%** (AA); TauBench V3 airline **81.5**, retail **86.4** (NVIDIA)
- GDPVal: **46.7** (NVIDIA card)
- PinchBench: **90** (NVIDIA card)
- ProfBench (Search): **56** (NVIDIA card)

Reasoning / knowledge:

- GPQA Diamond: **86.7%** (AA)
- HLE: **28.4%** (AA)
- IFBench: **81.4%** (AA)
- AA Intelligence Index: **23.4** (AA)
- CritPt: **3.1%** (AA)

Coding:

- SWE-Bench Verified: **71.9%** (BF16, NVIDIA card)
- SWE-Bench Multilingual: **67.7%** (NVIDIA card)
- SciCode: **40.3%** (AA)
- AA Coding Index: **49.3** (AA)

Long context:

- AA-LCR: **79.3%** (AA); 1M-token context per NVIDIA.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 82/100.** τ²-bench 83.3, Terminal Bench 56.4, GDPVal 46.7 — verified rows via NVIDIA card and AA.
- **Reasoning: 80/100.** GPQA 86.7, HLE 28.4, AA index 23.4 — strong-for-class, CritPt 3.1 caps it.
- **Context window: 97/100.** 1M native, AA-LCR 79.3.
- **Multimodal: 15/100.** Text-only.
- **Coding: 76/100.** SWE-Bench Verified 71.9 and multilingual 67.7 are real; SciCode 40.3 mid-tier.
- **Cost efficiency: 100/100.** Free tier; open weights.
- **Overall Score: 70/100.** Mean of five non-cost dims (82+80+97+15+76)/5 = 70.0 → 70; best fit: free-tier long-context agentic reasoning with solid coding, text-only.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (build.nvidia.com model card, AA scores via OpenRouter free listing, research.nvidia.com project page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
