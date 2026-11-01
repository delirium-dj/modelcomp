# North Mini Code — findings by GPT-6 Luna

- Source: Cohere/CohereLabs/North-Mini-Code-1.0
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's open-weight, agentic coding model for repository changes, terminal tasks, and local development. It has 30B total parameters and 3B active per token; it is a code-specialized model in the Cohere North family.
- **Provider / access:** Official Apache-2.0 weights at Hugging Face `CohereLabs/North-Mini-Code-1.0`. Cohere's model documentation lists API ID `north-mini-code-1.0`, free until rate limits are reached, and production access through Model Vault. OpenRouter and OpenCode Zen currently list free routes (`cohere/north-mini-code:free` and `opencode/north-mini-code-free`).
- **Release / knowledge:** Cohere announced the model June 9, 2026; Hugging Face checkpoint created June 5 and last modified June 15. No training-data cutoff verified.
- **IDs:** `CohereLabs/North-Mini-Code-1.0` (checkpoint); `north-mini-code-1.0` (Cohere API); `cohere/north-mini-code:free` (OpenRouter).
- **Context window:** 256K tokens; Cohere docs specify 64K maximum output.
- **Modalities:** Text in/text out. Reasoning, tool use, and structured outputs are documented; no image/audio/video input or non-text output.
- **Pricing (as of 2026-11-01):** Cohere's docs say trial and production keys can use the API for free until rate limits are reached; OpenRouter/OpenCode Zen currently list free routes. Apache-2.0 weights allow self-hosting, with compute costs borne by the operator. Cohere Model Vault production terms may vary.
- **Architecture:** 30B total / 3B active Mixture of Experts. Apache-2.0 license.

### Raw benchmarks found

Cohere's exact-model card reports each benchmark as an average across three seeds, using temperature 1.0 and top-p 0.95. SWE-bench uses SWE-Agent v1.1.0. Terminal-Bench v2 uses a ReAct harness with a single terminal-use tool based on Harbor's Tmux session implementation; Terminal-Bench Hard uses Terminus-2. The benchmark card distinguishes internally measured results for comparison models; the North Mini Code column is Cohere's evaluation.

Agent / tool use:

- Terminal-Bench v2: **36.0%**; Terminal-Bench Hard: **31.1%** (vendor, three-seed average).
- No exact-model Tau3, GDPval, or Claw-Eval result found.

Reasoning / knowledge:

- No exact-model GPQA Diamond, HLE, AIME, or general reasoning-index score verified. SciCode is reported below as coding, not general reasoning.

Coding:

- SWE-bench Verified: **67.6%**; SWE-bench Pro: **40.2%**.
- LiveCodeBench v6: **70.3%**; SciCode: **38.2%**.
- Terminal-Bench v2 and Hard: **36.0% / 31.1%**, above.

Long context:

- Maximum context: **256K**; maximum output **64K**. No exact-model MRCR/RULER or other retrieval-quality result verified.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench v2 at 36.0% and Hard at 31.1% confirm useful but not frontier terminal-agent execution; no broader tool-call benchmark was verified. [Official model card](https://huggingface.co/CohereLabs/North-Mini-Code-1.0).
- **Reasoning: 55/100.** No standard reasoning benchmark was verified for this code-focused model; coding and terminal scores are not substituted for GPQA/HLE. [Official model card](https://huggingface.co/CohereLabs/North-Mini-Code-1.0).
- **Context window: 72/100.** The 256K limit falls in the 200K–500K tier, but there is no retrieval score establishing performance near the maximum. [Cohere model documentation](https://docs.cohere.com/docs/north-mini-code-1.0).
- **Multimodal: 15/100.** Text-only input and output. [Cohere model documentation](https://docs.cohere.com/docs/north-mini-code-1.0).
- **Coding: 69/100.** SWE-bench Verified at 67.6% and LiveCodeBench v6 at 70.3% are meaningful strengths; SWE-bench Pro at 40.2%, Terminal-Bench Hard at 31.1%, and SciCode at 38.2% cap the score. [Official model card](https://huggingface.co/CohereLabs/North-Mini-Code-1.0).
- **Cost efficiency: 100/100.** Apache-2.0 weights plus currently free Cohere trial, OpenRouter, and OpenCode routes provide free lanes; hosted rate limits and local compute still apply. [Cohere model docs](https://docs.cohere.com/docs/north-mini-code-1.0); [OpenRouter registry](https://openrouter.ai/api/v1/models).
- **Overall Score: 55/100.** Half-up mean of the five quality dimensions: (65 + 55 + 72 + 15 + 69) / 5 = 55.2 → 55. Cost is excluded. Best suited to low-cost, self-hosted coding-agent workflows; evidence is stronger for code generation and repository tasks than general reasoning or tool reliability.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model searches; cross-checked Cohere's launch post, API documentation, and CohereLabs model card with Hugging Face metadata and live OpenRouter/OpenCode catalogs. Benchmark versions, seed count, temperature, top-p, and harnesses are recorded. No results from comparison models or related Cohere checkpoints are transferred. Normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [Cohere North Mini Code model card](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)
  - [Cohere launch post](https://cohere.com/blog/north-mini-code)
  - [Cohere API model documentation](https://docs.cohere.com/docs/north-mini-code-1.0)
  - [OpenRouter live model registry](https://openrouter.ai/api/v1/models)
  - [OpenCode Zen provider catalog](https://models.dev/api.json)
  - [Hugging Face model metadata](https://huggingface.co/api/models/CohereLabs/North-Mini-Code-1.0)

---
