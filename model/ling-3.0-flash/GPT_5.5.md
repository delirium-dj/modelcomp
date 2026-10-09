# Ling 3.0 Flash — findings by GPT 5.5

- Source: InclusionAI (`ling-3.0-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's low-cost Flash model for long-context text/code workloads with very aggressive pricing.
- **Provider / access:** OpenRouter, DeepInfra, Novita, and compatible hosted routes.
- **Release / knowledge:** Public listings appeared September 2026; cutoff not stated.
- **IDs:** `inclusionai/ling-3.0-flash`, `ling-3.0-flash`.
- **Context window:** **262K** tokens; some listings show **32.8K** max output.
- **Modalities:** Text/code; no verified native multimodal support for this non-VL route.
- **Pricing (as of 2026-10-09):** ModelCap/OpenRouter list about **$0.021/M input** and **$0.063/M output**; DeepInfra/Novita routes list around **$0.06/M input**.
- **Architecture:** InclusionAI Ling 3.0 Flash MoE; exact parameter count not recovered for this route.

### Raw benchmarks found

Agent / tool use:

- BenchLeader reports Ling 3.0 Flash highest category **long context 62** and lowest **reasoning 44** (`https://www.benchleader.com/models/ling-3-0-flash`).
- LLMPodium category view reports Agents **20**, Coding **25**, Reasoning **20**, Multimodal **30**, and Safety **70**, indicating budget-model strengths and weaknesses.

Reasoning / knowledge:

- ModelScale reports overall benchmark score **45.26** and context **262K** (`https://modelscale.dev/models/ling-3-0-flash`).

Coding:

- LLMPodium coding category **25**; no exact SWE-bench/LiveCodeBench row found.

Long context:

- BenchLeader long-context category **62**; ModelCap reports **262K** context (`https://modelcap.ai/model/inclusionai-ling-3-0-flash`).

### Normalized scores (1–100)

- **Tool use: 45/100.** Public agent categories are low, though hosted tool scaffolding exists.
- **Reasoning: 46/100.** ModelScale 45.26 and BenchLeader reasoning 44 support modest reasoning.
- **Context window: 78/100.** 262K context is strong for the price.
- **Multimodal: 25/100.** No verified native multimodal support for this route.
- **Coding: 42/100.** Coding category evidence is weak and no standard coding row was found.
- **Cost efficiency: 98/100.** $0.021/$0.063 is extremely cheap.
- **Overall Score: 47/100.** Half-up mean of the five quality dimensions; best fit is ultra-cheap long-context text processing.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

