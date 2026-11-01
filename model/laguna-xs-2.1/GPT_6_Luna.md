# Laguna XS 2.1 — findings by GPT-6 Luna

- Source: Poolside/Laguna XS 2.1
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's open-weight, local-first coding MoE for agentic software engineering and long-horizon terminal tasks. XS 2.1 is an upgraded checkpoint from Laguna XS.2, not a different parameter scale.
- **Provider / access:** Official weights at Hugging Face `poolside/Laguna-XS-2.1`; Poolside says it serves the model through its API and OpenRouter. Supported runtimes include vLLM, SGLang, TensorRT-LLM, Transformers, and Ollama; llama.cpp support is noted as in progress in the release announcement. OpenRouter is listed as a route in Poolside's release post; I did not independently confirm its live status in the current model registry.
- **Release / knowledge:** Released July 2, 2026. Training-data cutoff not disclosed.
- **IDs:** `poolside/Laguna-XS-2.1` (weights); `poolside/laguna-xs-2.1` (hosted route ID named by Poolside).
- **Context window:** 262,144 tokens. Poolside's release benchmark methodology used 256K context.
- **Modalities:** Text in/text out. Supports optional interleaved reasoning, tool calls, and preserved reasoning content; no image/audio/video input or non-text output.
- **Pricing (as of 2026-11-01):** OpenMDW-1.1 weights are available for self-hosting. Poolside's July 2 announcement said free and paid API endpoints were available and listed paid pricing of $0.10/M input, $0.20/M output, and $0.05/M cached read. Treat the hosted rate/route as announcement-era pricing; current live availability was not independently verified.
- **Architecture:** 33B total / 3B active MoE, 40 layers, 256 experts plus one shared expert; mixed sliding-window/global attention. OpenMDW-1.1 license.

### Raw benchmarks found

The following exact-model results are from Poolside's model card and July 2 release post. Poolside used the Harbor framework and its own agent harness, temperature 1.0, top-k 20, top-p 1.0, thinking enabled, and 256K context. Agentic scores are mean pass@1 over four attempts per task. Terminal-Bench used a larger 48 GB RAM / 32 CPU sandbox; other tasks used 8 GB RAM / 2 CPUs. Poolside notes that benchmark images/verifiers were patched for infrastructure reliability.

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (Poolside harness; no Terminal-Bench 2.1 result found).
- No direct Tau3, GDPval-AA, or Claw-Eval result verified for this exact checkpoint.

Reasoning / knowledge:

- No exact-model GPQA Diamond, HLE, AIME, or broad reasoning-index score found. The model supports configurable native reasoning, but this is a capability rather than a benchmark result.

Coding:

- SWE-bench Verified: **70.9%**; SWE-bench Multilingual: **63.1%**; SWE-bench Pro (public dataset): **47.6%**; Terminal-Bench 2.0: **37.5%**.
- Poolside reports using its `pool` agent harness for these evaluations, maximum 500 steps, and thinking mode enabled. Terminal-Bench results count web-retrieval solutions as unsuccessful, so the score is not directly comparable to evaluations that allow or credit web retrieval.

Long context:

- Context limit: **262,144 tokens**. No exact-model retrieval/needle-in-a-haystack benchmark was found.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.0 at 37.5% is evidence of some terminal-agent competence, but no general tool-call benchmark is published and the score uses a vendor harness. [Official model card](https://huggingface.co/poolside/Laguna-XS-2.1).
- **Reasoning: 55/100.** Native reasoning is supported, but no exact-model standard reasoning score was found; coding-agent results are not used as a substitute for GPQA/HLE. [Official model card](https://huggingface.co/poolside/Laguna-XS-2.1).
- **Context window: 72/100.** The 262K limit falls in the 200K–500K tier; no retrieval result confirms reliable use of the full window. [Official model card](https://huggingface.co/poolside/Laguna-XS-2.1); [NVIDIA model card](https://build.nvidia.com/poolside/laguna-xs-2.1/modelcard).
- **Multimodal: 15/100.** This is a text-to-text checkpoint. [Official model card](https://huggingface.co/poolside/Laguna-XS-2.1).
- **Coding: 72/100.** SWE-bench Verified at 70.9% and Multilingual at 63.1% are strong; SWE-bench Pro at 47.6% and Terminal-Bench 2.0 at 37.5% cap the score, and all reported runs use Poolside's harness. [Official model card](https://huggingface.co/poolside/Laguna-XS-2.1).
- **Cost efficiency: 92/100.** Open weights and the announced free API tier are attractive, with paid launch pricing at $0.10/$0.20 per million input/output tokens. Current endpoint status and rate were not independently confirmed. [Poolside release announcement](https://poolside.ai/blog/introducing-laguna-xs-2-1).
- **Overall Score: 56/100.** Half-up mean of the five quality dimensions: (65 + 55 + 72 + 15 + 72) / 5 = 55.8 → 56. Cost is excluded. Best suited to self-hosted coding-agent workloads where local deployment and a 256K context are useful; benchmark evidence does not establish frontier reasoning or general tool reliability.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model searches; cross-checked Poolside's release announcement and Hugging Face model card against NVIDIA's model card and the live model catalog. Results are kept distinct from the older XS.2 checkpoint and from comparison models in Poolside's table. Harness, effort mode, and benchmark version are recorded; normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [Poolside Laguna XS 2.1 model card](https://huggingface.co/poolside/Laguna-XS-2.1)
  - [Poolside release announcement](https://poolside.ai/blog/introducing-laguna-xs-2-1)
  - [NVIDIA Laguna XS 2.1 model card](https://build.nvidia.com/poolside/laguna-xs-2.1/modelcard)
  - [OpenRouter model listing](https://openrouter.ai/poolside/laguna-xs-2.1)
  - [models.dev model catalog](https://models.dev)

---
