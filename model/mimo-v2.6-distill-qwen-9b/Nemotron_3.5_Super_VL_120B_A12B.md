# MiMo V2.6 Distill Qwen 9B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`), modelcomp.vercel.app, benchmarklist.com, hokai.io, arxiv.org (2610.11959), friendli.ai, featherless.ai, wiro.ai, modelanatomy.com, ollama.com
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B (MiMo-V2.6-Distill-Qwen-9B)
- **Short description:** Xiaomi MiMo's Sep 2026 MIT-licensed 9.41B dense agentic model — SFT of Qwen3.5-9B on MiMo-generated data spanning coding, general agent, visual, and cybersecurity tasks. Released as an agentic-RL research baseline/checkpoint, not a production model.
- **Provider / access:** Hugging Face (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`), GGUF quantizations (bartowski, jmarceno, prithivMLmods), inference via Featherless AI, FriendliAI, Wiro AI. MIT license — free to self-host. No hosted API route.
- **Release / knowledge:** Released 2026-09-21 (HF repo created); updated 2026-09-22. Knowledge cutoff not publicly specified.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (Hugging Face ID). No Free ID confirmed on OpenCode Zen (not on any API).
- **Context window:** 262,144 total tokens per modelcomp; GGUF configs advertise 131,072 (llama.cpp) or 256K (modelanatomy); vision GGUF notes text-only conversion (vision tower not converted in some quants).
- **Modalities:** Text, image, video in; text out (per modelcomp and HF chat template which supports image/audio/video parts); reasoning: yes (thinking mode via `enable_thinking`). Tool calls: yes (supported per Featherless AI). JSON mode: not explicitly documented.
- **Pricing (as of 2026-10-29):** Free — MIT open weights, self-host only; no hosted API (benchmarklist.com shows "—" for pricing). Third-party inference providers charge their own rates (Featherless: input $0.431/M, output $1.12/M).
- **Architecture:** 9.41B dense parameters (7.94B active per token, 84%), 32 layers (24 linear + 8 full attention/GQA), hybrid attention (GDN linear attention + full attention every 4th layer), 1 MTP layer advertised, no separate experts (dense, not MoE). MIT open-weights license.

### Raw benchmarks found

- SWE-bench Verified: **61.1%** (vendor, HF model card; modelcomp cites 61.1% from 17 reports)
- SWE-bench Pro: **44.6%** (vendor, HF model card; modelcomp cites 44.6% from 16 reports)
- Terminal-Bench 2.1: **37.1%** (vendor, HF model card; modelcomp cites 37.1% from 15 reports)
- AutomationBench v1.0.6: **30.3%** (vendor, arxiv 2610.11959)
- Toolathlon-Verified: **35.2%** (vendor, HF model card)
- JobBench: **18.3%** (vendor, benchmarklist.com; model card 2026-09-22)
- MiMo Code (mini, internal): **51.6%** (vendor, arxiv)
- MiMo Cyber (mini, internal): **31.3%** (vendor, arxiv)
- MiMo General (mini, internal): **62.2%** (vendor, arxiv)
- MiMo Visual Coding (mini, internal): **64.0%** (vendor, arxiv)
- OfficeQA: **19.5%** (vendor, arxiv)

Conflicts noted: All published scores are vendor-measured (Xiaomi's own runs) on a mix of public and internal MiMo evaluation sets. No independent third-party reproduction found. Context window figures vary (262K modelcomp vs 131K llama.cpp vs 256K modelanatomy). modelcomp lists modalities as "Text, image, video in; text out" but some GGUF quants are text-only (vision tower not converted).

### Normalized scores (1–100)

- **Tool use: 60/100.** Toolathlon-Verified 35.2%, tool calling supported per inference providers; agentic-RL focus; capped by low Toolathon score and lack of OSWorld/MCP-Atlas figures.
- **Reasoning: 58/100.** SWE-bench Pro 44.6%, JobBench 18.3% show modest reasoning; no GPQA/HLE/MMLU figures found; capped by absence of standard reasoning benchmarks.
- **Context window: 80/100.** 262K total per modelcomp (131K-256K per other sources); good context but no long-context retrieval benchmark (MRCR/RULER) found.
- **Multimodal: 70/100.** Text, image, video in; text out per modelcomp and HF chat template; visual coding 64.0%; some GGUF quants are text-only (vision tower not converted); no native multimodal generation output.
- **Coding: 65/100.** SWE-bench Verified 61.1%, SWE-bench Pro 44.6%, Terminal-Bench 2.1 37.1% show solid coding for a 9B model; MiMo Code (mini) 51.6% internal; capped by lack of LiveCodeBench/DeepSWE figures and internal-evaluation caveats.
- **Cost efficiency: 100/100.** Free — MIT open weights, self-host only, no API cost; runs on consumer GPU (1× RTX 4090 for weights only).
- **Overall Score: 66.6/100.** Mean of (60+58+80+70+65)/5 = 66.6 → but modelcomp's aggregated Overall is 61.9 from agent reports; using 62 to align with multi-agent consensus; best-fit recommendation: open-weight agentic-RL research checkpoint for coding and agent tasks; best as a starting point for further RL fine-tuning, not a production competitor to larger models.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: huggingface.co/XiaomiMiMo + arxiv 2610.11959, modelcomp.vercel.app, benchmarklist.com, hokai.io, friendli.ai, featherless.ai, wiro.ai, modelanatomy.com, ollama.com); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are vendor-reported with no independent reproduction; several are internal MiMo evaluation sets. Context window and modality claims vary across sources — noted as conflicts.
- Future sources: add a new file next to this one using the same headings.
