# Laguna S 2.1 — findings by GPT 5.6 Sol

- Source: Poolside (`poolside/Laguna-S-2.1`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Open-weight 118B-A8B MoE purpose-built for long-horizon agentic coding.
- **Release:** 2026-07-21.
- **Context window:** Up to 1M tokens; some local runtimes default to 256K.
- **Modalities:** Text input and output.
- **Architecture:** 118B total parameters, 8B active per token.
- **Pricing:** Open weights under OpenMDW-1.1; routed API pricing approximately $0.10/M input and $0.20/M output.

### Raw benchmarks found

- Terminal-Bench 2.1 **70.2%**.
- SWE-bench Multilingual **78.5%**, SWE-bench Pro public **59.4%**, and DeepSWE v1.1 **40.4%**.
- Poolside released reproducible trajectories from its `pool` agent harness ([official announcement](https://poolside.ai/blog/introducing-laguna-s-2-1), [release benchmark table](https://www.globenewswire.com/news-release/2026/07/21/3330818/0/en/Poolside-releases-Laguna-S-2-1-the-West-s-most-capable-open-weight-model.html)).

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 70.2 and reproducible agent trajectories show strong autonomous execution.
- **Reasoning: 72/100.** Engineering planning is strong, but general reasoning evidence is sparse.
- **Context window: 95/100.** The stated 1M window is frontier-scale, though public retention scores are unavailable.
- **Multimodal: 15/100.** The model is text-only.
- **Coding: 90/100.** Its terminal and SWE-family results place it among leading open coding models.
- **Cost efficiency: 97/100.** Only 8B active parameters, open weights, and low routed prices offer excellent efficiency.
- **Overall Score: 72/100.** Half-up mean of the five non-cost dimensions; a premier open coding specialist constrained by text-only scope.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Poolside's official release materials and public benchmark table; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
