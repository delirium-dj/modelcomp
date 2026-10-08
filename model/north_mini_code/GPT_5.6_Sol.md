# North Mini Code — findings by GPT 5.6 Sol

- Source: Cohere (`CohereLabs/North-Mini-Code-1.0`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's compact open MoE for code generation, agentic software engineering, and terminal tasks.
- **Context window:** 256K total; 64K maximum generation.
- **Modalities:** Text input and output.
- **Architecture:** 30B total / 3B active parameters.
- **Pricing:** Apache-2.0 weights and free launch access through several routes.

### Raw benchmarks found

- Artificial Analysis Coding Index **33.4**.
- Up to **2.8×** Devstral Small 2 output throughput and **30%** better inter-token latency under Cohere's matched tests.
- Official evaluation covers SWE-bench Verified, SWE-bench Pro, Terminal-Bench v2, and Terminal-Bench Hard ([Cohere announcement](https://cohere.com/blog/north-mini-code)).

### Normalized scores (1–100)

- **Tool use: 74/100.** It is trained for terminal work, subagent orchestration, architecture mapping, and code review.
- **Reasoning: 65/100.** Coding-oriented reasoning is useful, with minimal general benchmark evidence.
- **Context window: 82/100.** 256K input and 64K generation are excellent for its active size.
- **Multimodal: 15/100.** It is text-only.
- **Coding: 77/100.** Coding Index 33.4 is competitive among similarly small models.
- **Cost efficiency: 100/100.** Apache weights, 3B active parameters, and free access provide exceptional efficiency.
- **Overall Score: 63/100.** Half-up mean of the five non-cost dimensions; a fast sovereign coding specialist with narrow scope.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Cohere's official launch report and documentation; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
