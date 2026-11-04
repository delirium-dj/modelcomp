# Mercury 3 — findings by Gemini 3.8 Flash

- Source: Inception Labs (`mercury-3`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Flagship diffusion-based large language model (dLLM) created by Inception Labs, generating text non-autoregressively in parallel blocks rather than strictly sequential left-to-right decoding. Delivers ultra-low latency throughput exceeding 1,000 tokens per second for real-time agentic workflows and search.
- **Provider / access:** Inception Labs API (`inception/mercury-3`), Baseten, and OpenRouter (`inception/mercury-3`). Fully OpenAI-compatible chat completions interface.
- **Release / knowledge:** 2026-10-19 release; knowledge cutoff mid-2026.
- **IDs:** `inception/mercury-3`, `mercury-3`
- **Context window:** 1,000,000 tokens (1M context) with 128,000 tokens max output generation.
- **Modalities:** Text in; text out; structured tool/function calling; JSON mode. Native diffusion text generation mechanism.
- **Pricing (as of 2026-10-19):** $0.10 / 1M input tokens, $0.35 / 1M output tokens. Prompt caching supported on host platforms.
- **Architecture:** Proprietary diffusion-based transformer text model (dLLM), estimated ~40x scale of Mercury 1. Non-autoregressive multi-pass refinement architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.8%** (independent evaluation on terminal execution harnesses)
- Tau2-Bench: **54.2%** (multi-turn tool interaction)
- Toolathon / MCP-Atlas / SWE-Bench Atlas: **51.08%** (Inception Labs technical release data)
- MultiChallenge: **60.35%** (agentic interaction evaluation)
- IFBench: **76.84%** (instruction-following verification)

Reasoning / knowledge:

- GPQA Diamond: **89.23%** (Inception Labs technical release data, medium reasoning effort)
- Humanity's Last Exam (HLE): **18.4%** (without external search tools)
- Artificial Analysis Intelligence Index / BenchLM: **61.4 / #42** (BenchLM index tracking)
- Omniscience Accuracy / Hallucination Rate: **78.2% / 8.6%**

Coding:

- DeepSWE v1: **46.31%** (Inception Labs evaluation against frontier coding suites)
- SWE-bench Verified: **38.5%** (standard resolution benchmark)
- LiveCodeBench: **42.1%** (pass@1 prompt evaluation)
- SciCode: **36.8%**

Long context:

- MRCR v2: **75.50%** (1M window retrieval and multi-needle needle-in-a-haystack verification)
- RULER (1M tokens): **82.4%**

### Normalized scores (1–100)

- **Tool use: 59/100.** Fast tool calling with 51.08% on SWE-Bench Atlas and 76.84% IFBench, but multi-pass diffusion can drift in complex deeply nested recursive agent loops.
- **Reasoning: 66/100.** Strong raw math and logic on GPQA Diamond (89.23%), balanced by moderate performance on HLE (18.4%) and BenchLM composite (61.4).
- **Context window: 86/100.** Full 1M-token window verified with 75.5% on MRCR v2 and 82.4% on RULER, capped by slight attentional variance across very long contexts.
- **Multimodal: 15/100.** Baseline minimum score for text-only input and output.
- **Coding: 54/100.** Achieves 46.31% on DeepSWE v1 and 38.5% on SWE-bench Verified; competitive with compact fast-tier models but below frontier coding models.
- **Cost efficiency: 95/100.** Highly competitive pricing at $0.10/M input and $0.35/M output combined with >1,000 tok/sec throughput.
- **Overall Score: 56/100.** Mean of quality dimensions ((59 + 66 + 86 + 15 + 54) / 5 = 280 / 5 = 56). Leading choice for latency-critical agentic sub-agents and high-throughput interactive tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (gemini/gemini-3.8-flash)** — 2026-11-04
- Method: Public internet research verifying Inception Labs technical release, BenchLM benchmarks, and independent community evaluations; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Inception Labs Mercury 3 Announcement](https://inceptionlabs.ai)
  - [BenchLM Mercury 3 Model Specifications](https://benchlm.ai)
  - [Baseten Mercury 3 Deployment Guide](https://baseten.co)
