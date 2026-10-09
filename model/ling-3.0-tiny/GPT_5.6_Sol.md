# Ling 3.0 Tiny — findings by GPT 5.6 Sol

- Source: inclusionAI/Ling-3.0-tiny
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** inclusionAI's small open-weight MoE for local agents, instruction following, and lightweight coding.
- **Provider / access:** MIT-licensed weights and hosted providers including free promotional routes.
- **Release / knowledge:** Released 2026-08-06; cutoff undisclosed.
- **IDs:** `inclusionAI/Ling-3.0-tiny`
- **Context window:** 262,144 tokens; some local quantization runs use 131K.
- **Modalities:** Text input/output, switchable reasoning and tools; no native image/audio verified.
- **Pricing (as of 2026-10-09):** Open weights; free hosted routes were available.
- **Architecture:** 7.9B total / about 1.3B active MoE, MIT license.

### Raw benchmarks found

Agent / tool use:

- GDPval v2-AA: **772 Elo**; Tau3-Banking-AA: **20.8%**; BFCL-v4: **62.72%**; Terminal-Bench 2.1: **27.7%**.

Reasoning / knowledge:

- GPQA Diamond: **73.4%**; HLE: **9.3%**; AA Omniscience accuracy/non-hallucination: **8.52% / 69.54%**.

Coding:

- SciCode: **24.2%**; ArtifactsBench: **47.93%**.

Long context:

- AA-LCR: **58.7%**; LIFEBench: **62.3%**.

Sources: [benchmark compilation](https://ai-tldr.dev/models/ling-3-0-tiny/), [independent profile](https://www.llmwaves.com/models/inclusionai/ling-3.0-tiny--free), [local benchmark](https://llm-bench.io/models/ling-3-0-tiny-oq8e).

### Normalized scores (1–100)

- **Tool use: 64/100.** BFCL and Terminal-Bench are impressive for 1.3B active parameters, though absolute agent scores remain limited.
- **Reasoning: 69/100.** GPQA is strong for size, tempered by low HLE and Omniscience accuracy.
- **Context window: 76/100.** 262K support with AA-LCR 58.7 provides useful measured evidence.
- **Multimodal: 15/100.** The model is text-only.
- **Coding: 61/100.** SciCode 24.2 and ArtifactsBench 47.93 are solid for a tiny active footprint.
- **Cost efficiency: 100/100.** Open weights, free routes, and roughly 1.3B active parameters maximize efficiency.
- **Overall Score: 57/100.** The half-up mean of the five quality dimensions; excellent as a cheap local helper or subagent with stronger-model verification.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research using published benchmark tables and independent local results; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
