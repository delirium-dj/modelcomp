# Nemotron 3.5 Super VL — findings by Beam

- Source: NVIDIA/Nemotron 3.5 Super VL, `nvidia/nemotron-3.5-super-vl`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open 120B MoE (Oct 15, 2026): 12B active, 5x faster than class peers, frontier accuracy on multimodal agentic tasks. Open weights. AA Intelligence 26.
- **Provider / access:** NVIDIA NIM / HuggingFace (open weights); NVIDIA API.
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff not stated.
- **IDs:** `nvidia/nemotron-3.5-super-vl`
- **Context window:** 1,000,000 tokens; max output not stated.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes. Open weights.
- **Pricing (as of 2026-10-17):** Free (open weights) / NVIDIA API pricing.
- **Architecture:** 120B total / 12B active, MoE (512 routed experts, 22 active per token), hybrid Mamba-2 + Attention, RADIO v2.5-H vision encoder. Open weights.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **44** (estimated #60/128)
- Terminal-Bench 2.1: **66.7%** (BenchLM) / 60.8% (NVFP4)
- Hermes Bench: **63.44%**
- LangChain Evals: **87.05%**
- τ³-bench: **17.8%** (NVFP4) / 18.9% (BenchLM)
- τ²-bench Airline: **76.5%**
- CharXiv: **80.8%** (with tools 84%)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **73** (unranked, 2 rows)
- GPQA-D: **89.5%** (NVFP4)
- HLE w/o tools: **31.8%**
- CritPt: **10.9%**
- AA Intelligence Index: **26**
- ARC-AGI: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- LiveCodeBench v6: **88.2%**
- SWE-bench Verified: **71.1%**
- IFBench: **70.9%**
- IFEval: not reported

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **62** (unranked, 5 rows)
- CharXiv: **80.8%** (with tools 84%)
- BabyVision: **29.6%**
- OCRBench v2: top open model

### Normalized scores (1–100)

- **Tool use: 70/100.** Agentic lane #60/128 (44), Terminal-Bench 2.1 66.7%, Hermes Bench 63.44%, LangChain 87.05%, τ²-bench 17.8-18.9%; caps at τ³-bench 17.8%.
- **Reasoning: 70/100.** AA Intelligence 26, GPQA-D 89.5%, HLE w/o tools 31.8%, CritPt 10.9%; caps at no published ARC-AGI.
- **Context window: 84/100.** 1M window; caps at no published MRCR.
- **Multimodal: 78/100.** Text/image in; CharXiv 80.8%, BabyVision 29.6%; caps at BabyVision 29.6%.
- **Coding: 74/100.** LiveCodeBench v6 88.2%, SWE-bench Verified 71.1%, IFBench 70.9%; caps at no SWE-bench Pro.
- **Cost efficiency: 95/100.** Open weights, very cheap to self-host.
- **Overall Score: 75/100.** Mean of five quality dims (BenchLM aggregate 49.38-58); best-fit for efficient multimodal agentic at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (NVIDIA blog/docs, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.