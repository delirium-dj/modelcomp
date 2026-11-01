# Recursive Flint — findings by GPT-6 Luna

- Source: Recursive/Flint
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Recursive Flint
- **Short description:** Recursive's open-weight MoE built from scratch for locally run coding agents. The model is about 40B total parameters with roughly 2.5B active per token; it is a code-focused text model, not a general multimodal assistant.
- **Provider / access:** Open weights at Hugging Face `RecursiveSI/flint`, Apache-2.0. Hosted free routes are currently listed by OpenCode Zen as `opencode/flint-40b-free` and OpenRouter as `recursive/flint-v1.0:free`. The official repository provides an SGLang serving kit; it says Transformers modeling code is not included yet.
- **Release / knowledge:** Hugging Face checkpoint created October 21, 2026; official release announcement published in October 2026. The model card states a June 2026 knowledge cutoff.
- **IDs:** `RecursiveSI/flint` (checkpoint); `opencode/flint-40b-free` (OpenCode Zen); `recursive/flint-v1.0:free` (OpenRouter).
- **Context window:** The checkpoint's documented context configuration is **262,144 tokens including prompt and generated output**. Recursive's announcement says it can support up to 512K but recommends staying within 256K; no 512K retrieval benchmark was found. The OpenCode Zen route lists 262,144 context and 65,536 max output.
- **Modalities:** Text in/text out. Supports reasoning and multi-turn tool calls; no image/audio/video input or non-text output.
- **Pricing (as of 2026-11-01):** OpenCode Zen and OpenRouter currently list a free route; Apache-2.0 weights can be self-hosted without a license fee. Local hardware/inference still has a cost, and hosted free-tier availability may change.
- **Architecture:** Decoder-only MoE Transformer; 39.8B total parameters, approximately 2.5B active per token (including output head), 49 layers and 256 routed experts per MoE layer with 6 selected per token plus a shared expert. Apache-2.0.

### Raw benchmarks found

Recursive's release evaluation uses temperature 1.0, top-p 0.95, top-k 20. Terminal-Bench uses Terminus 2; SWE-bench uses mini-swe-agent. Agentic scores are mean pass@1 over at least five attempts. Recursive's Terminal-Bench score counts web-retrieval solutions as unsuccessful; results using other policies may not be directly comparable.

Agent / tool use:

- Terminal-Bench 2.1: **54.9%** (Terminus 2; agent timeout up to five hours; Recursive evaluation).
- Flint supports multi-turn tool use, but no exact-model Tau3, GDPval, or Claw-Eval score was verified.

Reasoning / knowledge:

- No exact-model GPQA Diamond, HLE, AIME, or general reasoning-index score verified. The benchmark search found coding and agent evaluations rather than a broad knowledge suite.

Coding:

- SWE-bench Pro v2: **89.7%**; SWE-bench Verified: **74.2%** (mini-swe-agent; no internet access; mean pass@1 over at least five attempts).
- Terminal-Bench 2.1: **54.9%** as above.
- Recursive's blog reports a mean across Terminal-Bench 2.1, SWE-bench Pro v2, SWE-bench Verified, LiveCodeBench v6, IFBench, and IFEval, but the exact individual LiveCodeBench/IFBench/IFEval values were not verified in the checkpoint README and are not reconstructed here.

Long context:

- The checkpoint configuration is **262,144 tokens**; the release blog claims up to **512K** and recommends staying at or below 256K. No exact-model retrieval benchmark was found, so the larger figure is treated as a vendor extension claim, not a demonstrated-quality window.

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 2.1 at 54.9% is a strong agentic terminal result, but it is a coding-specific benchmark and no independent general tool-use evaluation was found. [Official model card](https://huggingface.co/RecursiveSI/flint); [release methodology](https://recursive.com/updates/introducing-recursive-flint).
- **Reasoning: 55/100.** The model supports reasoning, but no exact-model GPQA, HLE, AIME, or general reasoning score was verified; coding-agent results are not treated as a reasoning benchmark. [Official model card](https://huggingface.co/RecursiveSI/flint).
- **Context window: 73/100.** The verified checkpoint configuration is 262K, in the 200K–500K tier; the blog's 512K claim is not backed by a retrieval score and it recommends staying within 256K. [Official model card](https://huggingface.co/RecursiveSI/flint); [Recursive announcement](https://recursive.com/updates/introducing-recursive-flint).
- **Multimodal: 15/100.** Text-only in and out. [Official model card](https://huggingface.co/RecursiveSI/flint).
- **Coding: 80/100.** SWE-bench Pro v2 at 89.7%, Verified at 74.2%, and Terminal-Bench 2.1 at 54.9% are strong; the score is capped by vendor-run evaluations and the known terminal benchmark policy difference around web retrieval. [Official model card](https://huggingface.co/RecursiveSI/flint); [Recursive announcement](https://recursive.com/updates/introducing-recursive-flint).
- **Cost efficiency: 100/100.** Apache-2.0 weights and currently listed free OpenCode Zen/OpenRouter routes give it a zero-price lane; hardware and free-route limits remain relevant. [OpenRouter live model registry](https://openrouter.ai/api/v1/models); [models.dev provider catalog](https://models.dev/api.json).
- **Overall Score: 60/100.** Half-up mean of the five quality dimensions: (75 + 55 + 73 + 15 + 80) / 5 = 59.6 → 60. Cost is excluded. Best suited to local coding-agent workflows with 256K context; the benchmark evidence is strong for code/terminal tasks but does not establish general reasoning or multimodal ability.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Three independent exact-model searches; cross-checked Recursive's official launch article and checkpoint card with Hugging Face metadata and current OpenCode Zen/OpenRouter catalogs. Benchmark version, agent harness, sample count, internet-access policy, and Terminal-Bench retrieval rule are recorded. The 512K launch claim is distinguished from the checkpoint's 262K documented configuration; no sibling or comparison-model result is used. Normalized scores are independent interpretations, not vendor scores.
- Reference URLs:
  - [Recursive Flint model card](https://huggingface.co/RecursiveSI/flint)
  - [Recursive Flint launch article](https://recursive.com/updates/introducing-recursive-flint)
  - [Hugging Face model metadata](https://huggingface.co/api/models/RecursiveSI/flint)
  - [OpenRouter live model registry](https://openrouter.ai/api/v1/models)
  - [OpenCode Zen / models.dev provider catalog](https://models.dev/api.json)

---
