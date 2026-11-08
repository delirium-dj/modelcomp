# Codestral — findings by DeepSeek 4.1 Flash

- Source: Mistral AI/Codestral 22B (`codestral`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral
- **Short description:** Mistral AI's first open-weight code model — 22B dense, built for low-latency code completion, fill-in-the-middle (FIM) and developer tool assistance across 80+ languages.
- **Provider / access:** Mistral AI La Plateforme, OpenRouter, self-host (weights); OpenAI-compatible completion/chat APIs. Dataset route: `opencode/codestral`.
- **Release / knowledge:** released May 2024 as Codestral 22B (32K checkpoint); knowledge cutoff not reported. Superseded by Codestral 25.01 and 25.08.
- **IDs:** `codestral` / `codestral-latest`; weights `mistralai/Codestral-22B-v0.1`.
- **Context window:** 32,768 total natively (extended to 128K on later checkpoints; later checkpoints tracked separately in this dataset as `codestral-25.08`).
- **Modalities:** text/code in; text/code out; no reasoning mode; tool calling supported.
- **Pricing (as of 2026-11-07):** $0.30 / $0.90 per 1M in/out; cached input $0.03 (Mistral AI today; launched at $1/$3 per the original card, later reduced).
- **Architecture:** 22B dense transformer; open weights under the Mistral AI Non-Production Licence (MNPL).

### Raw benchmarks found

Agent / tool use:

- No agentic benchmark (Terminal-Bench / Tau2 / SWE-bench) reported; completion specialist, not an agent model
- Tool calling: supported per docs (not measured in the sources found)

Reasoning / knowledge:

- No reasoning mode; GPQA / HLE / MMLU: no verified public score found

Coding (Mistral's original launch card, via Langbase aggregation):

- HumanEval: **81.10%**
- MBPP: **78.20%**
- CruxEval-O: **51.30%**
- RepoBench: **34.00%**
- Spider (SQL): **63.50%**
- HumanEvalFIM (fill-in-the-middle) average: **91.60%** (Python 89.4 / JavaScript 95.1 / Java 90.3)
- HumanEval multilingual average: **61.50%** (C++ 65.2, Bash 42.4, Java 63.3, PHP 68.9, TypeScript 68.6, C# 43.7)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- No long-context retrieval benchmark reported; 32K native limit is the constraint

### Normalized scores (1–100)

- **Tool use: 36/100.** Tool calling exists but the model predates the agentic era and has no measured tool-use harness; capped by design and missing evidence.
- **Reasoning: 36/100.** No reasoning mode and no reasoning benchmarks; the 2024-generation 22B model is well below current mid-tier even for code-adjacent reasoning.
- **Context window: 57/100.** 32K native (128K only via later checkpoints tracked in another folder); bottom of the mid tier.
- **Multimodal: 15/100.** Text-only in and out (template floor for text-only models).
- **Coding: 52/100.** HumanEval 81.1% / FIM avg 91.6% were excellent in 2024 but are mid-pack against 2025–26 code models; capped by no SWE/LiveCodeBench rows and a 32K working window.
- **Cost efficiency: 70/100.** $0.30/$0.90 with $0.03 cache is cheap, and weights allow self-hosting for experimentation (MNPL forbids production use).
- **Overall Score: 39.2/100.** Best-fit: legacy FIM/autocomplete pipelines and local code-completion experiments — superseded for anything agentic or SWE-level.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-07
- Method: public internet research (Mistral's original Codestral launch card as aggregated by Langbase, Mistral docs/price listings, LLMLearner/Codesota/getbind trackers, UCStrategies and index.dev secondary coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Codestral (original launch post)](https://mistral.ai/news/codestral/)
  - [Langbase — Mistral Codestral benchmark card](https://langbase.com/models/mistral/mistral-codestral/benchmarks)
  - [Mistral Docs — Codestral 25.01 (successor checkpoint)](https://docs.mistral.ai/models/codestral-25-01)
  - [CodeSOTA — Codestral 25.01 model card](https://www.codesota.com/model/codestral-25-01)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
