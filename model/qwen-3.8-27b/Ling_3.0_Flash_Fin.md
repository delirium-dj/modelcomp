# Qwen 3.8 27B (xhigh) — findings by Ling 3.0 Flash

- Source: Alibaba / Qwen (`qwen/qwen3.8-27b`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B (xhigh reasoning)
- **Short description:** Alibaba's dense 27B open-weight vision-capable model with strong agentic coding and computer-use performance, released August 2026.
- **Provider / access:** QwenCloud (`qwen3.8-27b`), Hugging Face (`Qwen/Qwen3.8-27B`), OpenRouter. Text, image, and video in; text out. Responses API.
- **Release / knowledge:** 2026-08-14. Knowledge cutoff not explicitly stated.
- **IDs:** `qwen/qwen3.8-27b` (HuggingFace), `qwen3.8-27b` (OpenRouter)
- **Context window:** 256,000 tokens total
- **Modalities:** Text, image, and video in; text out; reasoning enabled; tool calls; JSON mode
- **Pricing (as of 2026-09-23):** $0.50/1M input, $3.00/1M output (Alibaba API)
- **Architecture:** 27B dense parameters, Apache 2.0 license, 64 layers, MTP support

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- Terminal-Bench 2.1: **73.0%** (Qwen official)
- OSWorld-Verified: **84.3%** (Qwen official)
- WebArena-Verified: **64.8%** (Qwen official)
- AndroidWorld: **81.9%** (Qwen official)
- Agentic Index: **51/100** (Artificial Analysis, rank above Claude Opus 4.8)
- Toolathlon Verified: **72.5%** (Qwen official)

Reasoning / knowledge:
- GPQA Diamond: **89.2%** (Qwen official)
- HLE: **30.8%** (Qwen official)
- IFBench: **79.5%** (Qwen official)
- Artificial Analysis Intelligence Index: **52** (xhigh) / **34** (non-reasoning)
- MRCR v2 256K: **92.9%** (Qwen official)
- AIME 2026: **94.7%** (BenchmarkList)

Coding:
- SWE-bench Pro: **61.7%** (Qwen official)
- DeepSWE 1.1: **42.2%** (Qwen official)
- QwenSWEBench: **79.0%** (Qwen official)
- LiveCodeBench v6: **90.3%** (Qwen official)
- Terminal-Bench Hard: **37.9%** (Artificial Analysis)
- Coding Agent Index: **50.877/100** (Artificial Analysis, rank 51)

Long context:
- MRCR v2 256K: **92.9%** (Qwen official, 8-needle)
- Context window: 256K tokens

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 80/100.** Excellent on OSWorld-Verified (84.3%), Terminal-Bench 2.1 (73%), Agentic Index 51, Toolathlon (72.5%). Strong agentic tool use but high pricing caps cost efficiency.
- **Reasoning: 72/100.** Strong math (GPQA 89.2%, AIME 94.7%, IFBench 79.5%) but moderate HLE (30.8%). AA Intelligence Index 52 at xhigh is competitive for 27B dense model.
- **Context window: 85/100.** 256K context with MRCR-v2 256K at 92.9%. Not extendable beyond 256K like some competitors.
- **Multimodal: 88/100.** Strong vision capabilities: OSWorld-Verified 84.3%, ScreenSpot Pro 84.5%, MathVision 94.6% (with CI), OmniDocBench 91.1%. One of the best 27B multimodal models.
- **Coding: 82/100.** Excellent on LiveCodeBench v6 (90.3%), QwenSWEBench (79%), SWE-bench Pro (61.7%), DeepSWE 1.1 (42.2%). Coding Agent Index 51 ranks above Opus 4.8.
- **Cost efficiency: 45/100.** $0.50/1M input, $3.00/1M output. Expensive for a 27B model. Default xhigh reasoning drives high token usage (160M per Intelligence Index task).
- **Overall Score: 81/100.** Mean of the five non-cost dimensions (80 + 72 + 85 + 88 + 82) / 5 = 81.4, rounded half-up to 81.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, Qwen official model card, BenchmarkList, Qubrid AI, and Simon Willison blog; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
