# Mimo V2.6 Distill Qwen 9b — findings by DeepSeek 4 Flash

- Source: Xiaomi MiMo / MiMo-V2.6-Distill-Qwen-9B
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** Xiaomi's MIT-licensed 9B dense SFT of Qwen3.5-9B, trained on MiMo-generated agentic data — a laptop-class agentic-coding starting point rather than a tuned product model.
- **Provider / access:** self-host (Hugging Face weights / GGUF via llama.cpp, Ollama, LM Studio); no hosted API route.
- **Release / knowledge:** 2026-09-21 (Hugging Face).
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`
- **Context window:** 262,144 tokens configured (8K–32K realistic on consumer hardware).
- **Modalities:** text/image/video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-10-02):** $0 — MIT open weights, self-hosted (~18.8 GB BF16; ~5.8 GB Q4_K_M GGUF).
- **Architecture:** 9.4B dense, Qwen3.5 backbone (32 layers, 8 full-attention), MIT license.

### Raw benchmarks found

Coding (vendor-reported, per model card via codersera):

- SWE-bench Verified (avg@3): **61.1%** (+1.1 vs base Qwen3.5-9B 60.0)
- SWE-bench Pro (avg@3): **44.6%** (+12.6 vs base)
- Terminal-Bench 2.1 (avg@1): **37.1%** (+10.1 vs base)

Reasoning / knowledge / multimodal / long context:

- no verified public score found (local throughput ~6–64 tok/s, hardware-dependent)

### Normalized scores (1–100)

- **Tool use: 45/100.** Terminal-Bench 2.1 37.1% shows real agentic ability at 9B scale; far below hosted flagships.
- **Reasoning: 42/100.** No GPQA/HLE; a 9B dense distillation implies limited depth.
- **Context window: 72/100.** 262K configured; only 8K–32K practical on consumer hardware.
- **Multimodal: 55/100.** Image/video input via mmproj; no vision benchmark.
- **Coding: 55/100.** SWE Verified 61.1% and SWE Pro 44.6% are strong for a self-hostable 9B.
- **Cost efficiency: 100/100.** $0 MIT weights, self-hosted.
- **Overall Score: 54/100.** Mean of (45 + 42 + 72 + 55 + 55) / 5 = 53.8 → 54. Best-fit: offline/laptop agentic coding where zero API cost is required.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Hugging Face model card, codersera.com, localmodelwatch, atomic.chat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
