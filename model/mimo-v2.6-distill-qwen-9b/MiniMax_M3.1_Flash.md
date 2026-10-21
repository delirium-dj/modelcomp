# MiMo V2.6 Distill Qwen 9B — findings by MiniMax M3.1 Flash

- Source: Xiaomi (MiMo-V2.6-Distill-Qwen-9B), `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Xiaomi's September 2026 MIT-licensed research baseline — a ~9.41B dense SFT of **Qwen3.5-9B** released "as a starting point for open research in agentic reinforcement learning", with SWE-bench Verified 61.1% (up from 60.0 for the base) and Terminal-Bench 2.1 37.1%. Self-host only: no vendor API, no OpenRouter route, no Zen route.
- **Provider / access:** Hugging Face `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (MIT; 18.85 GB BF16) plus community GGUF/MLX/AWQ/FP8 quants; local serving with SGLang or vLLM. **Not on OpenRouter, not on OpenCode Zen, not in models.dev.**
- **Release / knowledge:** **2026-09-21** (HF repo created, one day before the MiMo-V2.6-Pro/Flash API release). Knowledge cutoff not published.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (HF).
- **Context window:** **262,144** tokens (`text_config.max_position_embeddings`).
- **Modalities:** text, image and video input; text out (`Qwen3.5ForConditionalGeneration` with a `qwen3_5_vision` tower and `video_token_id`; **no audio encoder**, unlike MiMo-V2.6-Pro-RL).
- **Pricing (as of 2026-10-20):** **$0** — MIT open weights, self-hosted. No hosted route exists to price.
- **Architecture:** dense 9,409,813,744 parameters (BF16), 32 layers, hidden 4096, vocab 248,320, Qwen3.5 hybrid linear/full attention (1 full-attention layer every 4) with 1 MTP layer, vision encoder 27 layers / hidden 1152 / patch 16.

### Raw benchmarks found

> Every published number comes from Xiaomi's own model card (values "as reported in the MiMo-V2.6 technical report"). No Artificial Analysis or BenchLM page exists.

Coding:

- SWE-bench Verified: **61.1%** (avg@3) vs **60.0%** for the base Qwen3.5-9B
- SWE-bench Pro: **44.6%** (avg@3) vs 32.0% · Terminal-Bench 2.1: **37.1%** (avg@1) vs 27.0% · MiMo Code (mini, internal): **51.6%** vs 19.5% · MiMo Visual Coding (mini, internal): **64.0%** vs 61.7%
- LiveCodeBench / DeepSWE / SciCode: no verified public score found

Agent / tool use:

- AutomationBench v1.0.6: **30.3%** (avg@1) vs 5.0% · Toolathlon-Verified: **35.2%** vs 25.9% · OfficeQA: **19.5%** vs 9.0% · JobBench: **18.3%** vs 2.6% · MiMo Cyber (mini, internal): **31.3%** vs 5.7% · MiMo General (mini, internal): **62.2%** vs 28.5%
- Tau2-bench / Tau3 / GDPval-AA / OSWorld / MCP-Atlas / Terminal-Bench 2.0: no verified public score found for this checkpoint

Reasoning / knowledge:

- GPQA Diamond / AIME / HLE / MMLU-Pro / FrontierMath: **no verified public score found** for the 9B distill — the MiMo GitHub README's GPQA/AIME tables are the 2025 **MiMo-7B-RL** results, a different model, and the MiMo-V2.6 technical report PDF is not text-extractable
- The internal MiMo General (mini) 62.2% is a MiMo-authored set, not a standard benchmark

Long context:

- No MRCR / RULER measurement published; the 262,144 window comes from the config only.

### Normalized scores (1–100)

- **Tool use: 42/100.** AutomationBench 30.3% and Toolathlon-Verified 35.2% are the closest agentic rows, with no τ², τ³, GDPval or OSWorld figure, and the internal MiMo sets are vendor-invented.
- **Reasoning: 42/100.** No standard reasoning benchmark (GPQA, HLE, AIME, MMLU-Pro) was ever published for this checkpoint, so the dimension is scored as unmeasured with a penalty.
- **Context window: 68/100.** 262,144 tokens in the 200K–500K tier, with no retrieval measurement.
- **Multimodal: 80/100.** Text, image and video input with text out (no audio) — the video-in band.
- **Coding: 58/100.** SWE-bench Verified 61.1% and SWE-bench Pro 44.6% are mid for a 9B, Terminal-Bench 2.1 37.1% is the drag, and no LiveCodeBench or DeepSWE figure exists.
- **Cost efficiency: 98/100.** MIT weights and self-hosting at $0 — the cheapest possible route, if you already have a GPU.
- **Overall Score: 58/100.** Mean of the five quality dims = (42 + 42 + 68 + 80 + 58) / 5 = 58.0 → **58**. Best fit: an agentic-RL research baseline — a starting checkpoint for RL experiments, not a finished model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Xiaomi MiMo Hugging Face model card and config, MiMo GitHub repository, Hugging Face API, models.dev, OpenRouter and Artificial Analysis / BenchLM absence checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Flash.md`, using the same headings.
