# Mistral Medium 3.5 — findings by Ernie 5.5 Flash

- Source: Mistral AI/Mistral Medium 3.5 (`mistral-medium-3.5`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's balanced enterprise model (released 2026-04-29) for assistants, multilingual work and tools — a dense 128B instruction-following model with image input.
- **Provider / access:** Mistral AI (`mistral-medium-2604`), OpenRouter (`mistralai/mistral-medium-3-5`), Scaleway (`mistral-medium-3.5-128b`), SAP AI Core, LLM Gateway, LowRouter, plus ~14 routes. Open weights.
- **Release / knowledge:** 2026-04-29; knowledge cutoff not published.
- **IDs:** `mistral-medium-3.5`, `mistral-medium-3-5`, `mistralai/mistral-medium-3-5`, `mistral-medium-3.5-128b`.
- **Context window:** 256,000 tokens (262,144 on some routes); max output 16,384 on the Scaleway route, 262,144 on LLM Gateway.
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $1.50 / $7.50 per 1M input/output; cache read $0.15 (Scaleway lists $1.68/$8.41).
- **Architecture:** dense 128B instruction model (Mistral); open weights.

### Raw benchmarks found

> BenchLM's profile for the plain slug 404s; the rows below are from its `mistral-medium-3-5-128b` profile — the same dense 128B checkpoint under its parameter-qualified name.

Agent / tool use:

- τ³-Bench (Tool-Agent-User): **91.4%** (best verified row)
- Terminal-Bench 2.1 (Vals AI): **39.0%** (below the agent baseline)
- Gert Labs composite: **39.10**
- Terminal-Bench 4.x / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- MMLU-Pro (Vals AI): **75.3%**
- GPQA Diamond (Vals AI): **34.8%** (near-floor for a 2026 model)
- NYT Connections: **12.9%** (near-floor)
- HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- SWE-bench Verified: **77.6%** (Vals AI **66.4%**)
- DeepSWE / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 256K context with a 16,384 max output on Scaleway; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 70/100.** τ³ 91.4% is excellent for tool-agent-user loops, but TB2.1 (Vals) 39.0% and Gert Labs 39.10 show it is not a terminal agent.
- **Reasoning: 55/100.** MMLU-Pro 75.3% is mid, GPQA 34.8% and NYT Connections 12.9% are near-floor — this is the weakest reasoning cluster of any 2026 model in this batch.
- **Context window: 78/100.** 256,000 tokens, with only 16,384 max output on the Scaleway route (262,144 on LLM Gateway).
- **Multimodal: 72/100.** Text and image in; no public image-understanding benchmark rows were published.
- **Coding: 72/100.** SWE-bench Verified 77.6% is decent for an enterprise model, SWE-bench (Vals) 66.4% mid; no Pro/DeepSWE row was published.
- **Cost efficiency: 82/100.** $1.50/$7.50 per 1M — mid-premium for the measured capability.
- **Overall Score: 69.4/100.** Best fit for European/enterprise deployments needing a GDPR-friendly, multilingual assistant with tool use; not a reasoning or coding model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Mistral AI model docs, BenchLM Mistral Medium 3.5 128B profile, llm benchmark aggregators, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Medium 3.5 — Mistral AI](https://docs.mistral.ai/getting-started/models/models_overview/)
  - [Mistral Medium 3.5 128B benchmarks & sources — BenchLM](https://benchlm.ai/models/mistral-medium-3-5-128b)
  - [Mistral Medium 3.5 — llm-stats](https://llm-stats.com/models/mistral-medium-3-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Mistral_Medium_3.5_v2.md`, using the same headings.