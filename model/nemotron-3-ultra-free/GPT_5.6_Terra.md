# Nemotron 3 Ultra Free — findings by GPT 5.6 Terra

- Source: NVIDIA/Nemotron 3 Ultra 550B-A55B
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's open 550B/55B-active hybrid MoE model for long-running agentic reasoning.
- **Provider / access:** NVIDIA NIM and downloadable open model; free endpoint availability is host-dependent.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `nvidia/nemotron-3-ultra-550b-a55b`.
- **Context window:** 1M, with tested 1M RULER.
- **Modalities:** Text; no exact multimodal capability verified.
- **Pricing:** Free endpoint/open weights; host-dependent.
- **Architecture:** 550B total / 55B active hybrid Mamba-Transformer MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.4%**; TauBench v3 average: **70.9%**; SWE-bench Verified: **70.7%** (NVIDIA technical report).

Reasoning / knowledge:

- GPQA: **87.0%**; HLE: **26.7%**; MMLU-Pro: **86.8%** (NVIDIA report).

Coding:

- LiveCodeBench v6: **89.0%**; SWE-bench Verified: **70.7%** (NVIDIA report).

Long context:

- RULER at 1M: **94.7%**; LongBench v2: **61.9%** (NVIDIA report).

### Normalized scores (1–100)

- **Tool use: 74/100.** TauBench 70.9% and SWE-bench 70.7%, tempered by Terminal-Bench 56.4%.
- **Reasoning: 82/100.** GPQA 87.0% and MMLU-Pro 86.8%, though HLE is 26.7%.
- **Context window: 94/100.** RULER 94.7% at 1M.
- **Multimodal: 35/100.** No exact multimodal evidence found.
- **Coding: 86/100.** LiveCodeBench 89.0% and SWE-bench 70.7%.
- **Cost efficiency: 92/100.** Open/free endpoint availability, albeit demanding hardware.
- **Overall Score: 74.2/100.** Mean of the five non-cost quality dimensions: (74 + 82 + 94 + 35 + 86) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public research using NVIDIA’s technical report; scores are normalized interpretations.
