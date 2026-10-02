# Laguna XS 2.1 — findings by Space Bunny Alpha

- Source: Poolside / Laguna XS 2.1
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's compact open-weight MoE model for agentic coding and long-horizon software work on a local machine.
- **Provider / access:** Hugging Face `poolside/Laguna-XS-2.1`; OpenRouter `poolside/laguna-xs-2.1`; Ollama, llama.cpp, vLLM, SGLang, and TensorRT-LLM-compatible serving.
- **Release / knowledge:** OpenRouter lists 2026-07-02; no verified exact knowledge cutoff found.
- **IDs:** `poolside/Laguna-XS-2.1`; OpenRouter `poolside/laguna-xs-2.1`.
- **Context window:** 262,144 tokens (official model card; benchmark setting 256K).
- **Modalities:** Text in/out; native reasoning with preserved thinking and native function/tool calling. No image/audio/video input is documented.
- **Pricing (as of 2026-09-25):** OpenRouter lists $0.06 input, $0.03 cached input, and $0.12 output per 1M tokens; a free route exists and warns that free inputs/outputs may be used to improve Poolside models.
- **Architecture:** OpenMDW-1.1 open-weight MoE, 33B total / 3B active parameters, 40 layers, 256 experts plus one shared expert, mixed sliding-window/global attention, and FP8 KV cache; the model card says it can run on a Mac with 36 GB RAM.

### Raw benchmarks found

> Poolside's official results use the Laude Institute Harbor Framework and Poolside's agent harness with thinking enabled, a 256K context, up to 500 steps, and repeated-attempt pass@1 means.

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** mean pass@1 over 5 attempts per task; **48 GB RAM / 32 CPUs** (Poolside official model card).
- SWE-bench Pro public dataset: **47.6%** mean pass@1 over 2 attempts per task (Poolside official model card).
- No exact Tau2-Bench, Toolathon, or MCP-Atlas result was found.

Reasoning / knowledge:

- No exact GPQA Diamond, HLE, or Artificial Analysis Intelligence Index result for Laguna XS 2.1 was found. Native optional reasoning and preserved thinking are verified by the model card, but no standalone exact-model reasoning benchmark was published.
- Coding-agent evidence is the primary published evaluation.

Coding:

- SWE-bench Verified: **70.9%** mean pass@1 over 4 attempts per task (Poolside official model card).
- SWE-bench Multilingual: **63.1%** mean pass@1 over 4 attempts per task (Poolside official model card).
- Aider Polyglot, LiveCodeBench, and SciCode: no verified exact-model public scores found.

Long context:

- The verified 262K context was used for official coding-agent evaluations, but no standalone MRCR/RULER/GraphWalks retrieval-at-length result was found.

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong 70.9% SWE-bench Verified, 47.6% SWE-bench Pro, and native tool calling support it; 37.5% Terminal-Bench 2.0 and the lack of broader agent benchmarks cap the score.
- **Reasoning: 63/100.** Optional interleaved reasoning is useful for agent work, but no exact standalone GPQA/HLE/intelligence result was found, so the score stays conservative.
- **Context window: 76/100.** The 262K verified window exceeds 200K, though it is below the repository's 500K-plus top tier and lacks a dedicated retrieval benchmark.
- **Multimodal: 15/100.** The exact model is text-only.
- **Coding: 88/100.** The 70.9% SWE-bench Verified and 63.1% multilingual results are excellent for a 3B-active local model, reinforced by 47.6% on SWE-bench Pro.
- **Cost efficiency: 100/100.** Hosted OpenRouter inference is $0.06/$0.12 per 1M tokens, a free route exists, and quantized weights can run locally.
- **Overall Score: 64/100.** An outstanding low-cost local coding agent with a 256K window, best for software engineering and tool loops; general knowledge and multimodal capabilities remain unproven.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: official Poolside Hugging Face model card, OpenRouter API metadata, and public release information; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Laguna_XS.md`, using the same headings.
