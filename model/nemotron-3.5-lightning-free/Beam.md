# Nemotron 3.5 Lightning (Free) — findings by Beam

- Source: NVIDIA/Nemotron 3.5 Lightning, `nvidia/nemotron-3.5-lightning`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning
- **Short description:** NVIDIA's 30B MoE (Aug 11, 2026): 30B total / 3B active, 1M context. BenchLM 25.51. AA Intelligence Index (Pareto frontier for small open models). PinchBench 86% (10,000 tasks, 30% faster than Qwen3.6 35B). MMLU 78.59, MMLU-Pro 67.94. Open weights (OpenMDW-1.1). Free.
- **Provider / access:** NVIDIA build.nvidia.com; OpenRouter; Ollama; HuggingFace.
- **Release / knowledge:** Released 2026-08-11; knowledge cutoff Sep 2025 (pre-training).
- **IDs:** `nvidia/nemotron-3.5-lightning`
- **Context window:** 1,000,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (OpenMDW-1.1).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
- **Architecture:** MoE, 30B total / 3B active, hybrid Mamba-Transformer, 1M context, OpenMDW-1.1. Trained on H100.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **15.3** (Estimated · #114/128)
- Terminal-Bench 2.1: **23.5%** (BenchLM)
- PinchBench: **86%** (NVIDIA, 10,000 tasks, 30% faster than Qwen3.6 35B)
- BrowseComp: **36.8%** (BenchLM)
- τ²-bench results: not reported for Lightning
- OSWorld: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **59.6** (Unranked · 1 rankable row)
- MMLU: **78.59%** (HuggingFace model card)
- MMLU-Pro: **67.94%** (HuggingFace model card)
- GPQA: **75.6%** (BenchLM)
- GPQA-D: **75.6%** (BenchLM)
- HLE: not reported
- AA Intelligence Index: Pareto frontier (NVIDIA claim)
- LongBench v2: not reported

Coding:

- Coding public-lane (BenchLM): **15.3** (Estimated · #133/150)
- SWE-bench Verified: **52.8%** (BenchLM)
- Terminal-Bench 2.1: **23.5%** (BenchLM)
- IFBench: **72.9%** (BenchLM)
- SciCode: not reported

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 54/100.** Agentic lane #114/128 (15.3), Terminal-Bench 2.1 23.5%, PinchBench 86%, BrowseComp 36.8%; caps at BrowseComp 36.8%.
- **Reasoning: 62/100.** MMLU 78.59%, MMLU-Pro 67.94%, GPQA 75.6%, IFBench 72.9%; caps at no published HLE/AA Intelligence.
- **Context window: 80/100.** 1M window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 52/100.** SWE-bench 52.8%, Terminal-Bench 2.1 23.5%; caps at no published LiveCodeBench/SciCode.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 57.6/100.** Mean of five quality dims (BenchLM 25.51); best-fit for high-volume agentic at zero cost. Defines accuracy-speed Pareto frontier for small open models.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (NVIDIA official blog, BenchLM, HuggingFace, Uniphore, Ollama); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Nemotron 3.5 Lightning is the fast execution model in NVIDIA's agent stack (NeMo Switchyard). OpenMDW-1.1 license.<|end|>>2>