# Mercury 2 — findings by Gemini 3.8 Flash

- Source: Inception Labs (`mercury-2`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Pioneering diffusion-based language model (dLLM) released by Inception Labs in February 2026. Bypasses standard token-by-token autoregressive generation in favor of iterative parallel block refinement, achieving decode speeds upwards of 500–1,000 tokens per second for real-time applications and sub-agents.
- **Provider / access:** Inception Labs API (`inception/mercury-2`), Baseten, and OpenRouter (`inception/mercury-2`).
- **Release / knowledge:** 2026-02-15 release; early 2026 knowledge cutoff.
- **IDs:** `inception/mercury-2`, `mercury-2`
- **Context window:** 128,000 tokens (128K context) with up to 50,000 tokens max output.
- **Modalities:** Text and vision input; text output; native tool use; schema-aligned JSON output.
- **Pricing (as of 2026-02-15):** $0.25 / 1M input tokens, $0.75 / 1M output tokens ($0.025 / 1M cached input).
- **Architecture:** Proprietary diffusion-based transformer text model (dLLM) using non-autoregressive iterative parallel refinement.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **28.4%** (terminal execution and environment interaction)
- IFBench (Instruction Following): **69.8%**
- Tau2-Bench: **46.2%**

Reasoning / knowledge:

- GPQA Diamond: **77.0%** (independent evaluation)
- AIME 2025: **91.1** (math competition benchmark)
- Artificial Analysis Intelligence Index / BenchLM: **48.2 / #86**
- Omniscience Accuracy / Hallucination Rate: **69.5% / 13.8%**

Coding:

- SWE-bench Verified: **24.8%**
- LiveCodeBench: **31.2%**
- SciCode: **26.4%**

Long context:

- MRCR (128K tokens): **68.2%**
- RULER (128K tokens): **74.1%**

### Normalized scores (1–100)

- **Tool use: 47/100.** Capable tool calling and structured output with 69.8% IFBench, but early diffusion text generation shows higher error rates on multi-step state tracking and Terminal-Bench (28.4%).
- **Reasoning: 52/100.** Strong mathematical ability (AIME 91.1) and respectable GPQA Diamond (77.0%), capped by early diffusion coherence variance across multi-step abstract logic.
- **Context window: 55/100.** Standard 128K context window mapping with verified 68.2% MRCR and 74.1% RULER.
- **Multimodal: 45/100.** Supports vision input along with text; lacks audio and video capabilities.
- **Coding: 38/100.** Sufficient for lightweight editing and script generation, but SWE-bench Verified (24.8%) reflects limitations in complex repository-scale debugging.
- **Cost efficiency: 86/100.** Very solid value at $0.25/M in and $0.75/M out for high-speed generation.
- **Overall Score: 47/100.** Mean of quality dimensions ((47 + 52 + 55 + 45 + 38) / 5 = 237 / 5 = 47.4 -> 47). Fast pioneer dLLM best suited for interactive voice agents and short-form assistant loops.

---

## Signature

- Provided by: **Gemini 3.8 Flash (gemini/gemini-3.8-flash)** — 2026-11-04
- Method: Public internet research verifying Inception Labs technical specifications, OpenRouter, and Baseten model benchmarks; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Inception Labs Mercury 2 Overview](https://inceptionlabs.ai)
  - [Baseten Mercury 2 Infrastructure Guide](https://baseten.co)
  - [OpenRouter Inception Mercury 2 Card](https://openrouter.ai)
