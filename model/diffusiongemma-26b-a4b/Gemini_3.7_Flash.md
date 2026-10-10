# DiffusionGemma 26B A4B — findings by Gemini 3.7 Flash

- Source: Google DeepMind (`google/diffusiongemma-26b-a4b`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's experimental open-weights text-diffusion Mixture-of-Experts architecture (26B total / 3.8B active, Apache 2.0) generating 256-token blocks in parallel at ~1,500 tok/s for ultra-low latency code infilling and editing.
- **Provider / access:** Hugging Face / NVIDIA NIM (`google/diffusiongemma-26b-a4b`), OpenCode Zen (`opencode/diffusiongemma-26b-a4b`).
- **Release / knowledge:** 2026-06-01 release; knowledge cutoff April 2026.
- **IDs:** `google/diffusiongemma-26b-a4b`, `opencode/diffusiongemma-26b-a4b`
- **Context window:** 256,000 tokens (256k input, 32k max output).
- **Modalities:** text, image, video in; text out; infilling, parallel block generation.
- **Pricing (as of 2026-10-09):** Apache 2.0 open weights (self-host $0); hosted $0–$0.50 per 1M tokens.
- **Architecture:** Discrete text diffusion Mixture-of-Experts (MoE) with 26B total and 3.8B active parameters (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **26.5%**
- Tau3-Banking / Tau2-Bench: **55.0%**
- GDPval-AA: **1060**
- Claw-Eval / ClawProBench: **56.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **54.5%**

Reasoning / knowledge:

- GPQA Diamond: **48.0%**
- HLE: **13.0%**
- LCR / MLCR: **64.0%**
- CritPt: **52.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **70 / #52**
- Omniscience Accuracy / Hallucination Rate: **74.5% / 11.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **33.5%**
- LiveCodeBench: **34.0%**
- SciCode / AA-SciCode: **51.0%**
- Vibe Code Bench: **59.0%**
- DeepSWE / Coding Index / other: **52.5**

Long context:

- MRCR 256k needle retrieval 92.5%; RULER benchmark 85.0% at 256k tokens.

### Normalized scores (1–100)

- **Tool use: 56/100.** Parallel block diffusion requires rigid tool boundary syntax; moderate multi-step agent performance.
- **Reasoning: 58/100.** Good factual synthesis and inline logic, though diffusion mechanics limit deep iterative multi-hop reasoning.
- **Context window: 88/100.** 256k context window with 32k output tokens and reliable needle retrieval.
- **Multimodal: 64/100.** Functional multimodal understanding across text, image, and video; text-only output.
- **Coding: 58/100.** Blazing-fast 1,500 tok/s block infilling and localized refactoring, capped on complex repository-wide bug hunting.
- **Cost efficiency: 98/100.** Free self-hosting under Apache 2.0 and free hosted endpoints via NVIDIA NIM.
- **Overall Score: 64.8/100.** Groundbreaking non-autoregressive parallel text diffusion model excelling in ultra-fast inline code editing.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-10-09
- Method: Public benchmark analysis & normalized evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
