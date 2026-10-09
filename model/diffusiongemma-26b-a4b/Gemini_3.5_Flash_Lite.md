# DiffusionGemma 26B A4B — findings by Gemini 3.5 Flash Lite

- Source: Google DeepMind / DiffusionGemma-26B-A4B
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's experimental open-weights text-diffusion MoE (26B total / 3.8B active, Apache 2.0) generating 256-token blocks in parallel at ~1,500 tok/s; best for latency-sensitive local editing and code infilling.
- **Provider / access:** OpenCode Zen / NVIDIA NIM `opencode/diffusiongemma-26b-a4b` (Chat Completions API)
- **Release / knowledge:** 2026-03-15; knowledge cutoff February 2026
- **IDs:** `opencode/diffusiongemma-26b-a4b`
- **Context window:** 256,000 tokens input, 32,000 tokens output (verified via DeepMind technical papers)
- **Modalities:** text, image, video in; text out; tool calls; JSON mode
- **Pricing (as of 2026-10-06):** Apache 2.0 open weights ($0 self-host); hosted APIs $0.05 / $0.15 per 1M tokens
- **Architecture:** Text-diffusion Mixture of Experts (MoE), open weights (Apache 2.0)

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **59.5%** (DeepMind evaluation release)
- Tau3-Banking: **58.2%**

Reasoning / knowledge:
- GPQA Diamond: **32.1%** (DeepMind technical report)
- Artificial Analysis Intelligence Index: **62.8 / #115**

Coding:
- SWE-bench Verified: **34.5%**
- LiveCodeBench: **32.0%**

Long context:
- RULER (256K window): 84.0% retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 60/100.** Experimental text-diffusion tool calling (Terminal-Bench 59.5%).
- **Reasoning: 60/100.** Baseline reasoning for parallel generation architecture (GPQA 32.1%).
- **Context window: 84/100.** 256K context window with parallel block generation.
- **Multimodal: 80/100.** Text, image, and video input support.
- **Coding: 30/100.** Specialized for code infilling and fast editing rather than deep SWE tasks (SWE-bench 34.5%).
- **Cost efficiency: 100/100.** Free open weights (Apache 2.0) and extremely low-cost API hosting.
- **Overall Score: 63/100.** Mean of the five quality dims (60, 60, 84, 80, 30 -> average 62.8 -> 63); ultra-fast experimental text-diffusion model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/google-gemini-3.5-flash-lite)** — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
