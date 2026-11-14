- Source: Thinking Machines Lab/Inkling
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's (Mira Murati) 2026-07-15 open-weight multimodal flagship, a 975B/41B-active MoE released under Apache 2.0. Explicitly positioned not as the strongest model but as a customisable, cost-controllable open foundation for enterprise fine-tuning via Tinker. A distinct model; `inkling-small` (Inkling-Small) and `inkling-2-small` are separate tracked folders.
- **Provider / access:** Apache 2.0 open weights on Hugging Face (BF16 and NVFP4 checkpoints); Tinker fine-tuning platform / Inkling Playground; third-party APIs from Together AI, Fireworks, Modal, Databricks and Baseten; transformers / SGLang / vLLM support.
- **Release / knowledge:** 2026-07-15; knowledge cutoff: no verified public score found.
- **IDs:** `inkling` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**.
- **Modalities:** **text, image and audio in; text out** (also pretrained on 45T text/image/audio/video tokens); encoder-free multimodal design — images as 40×40-pixel patches through a four-layer hMLP, audio as dMel spectrogram in 100ms discrete chunks, fused with text tokens. No verified video input or non-text output.
- **Pricing (as of 2026-11-14):** open weights (free self-hosting); third-party API pricing varies by provider — no verified public rate card found.
- **Architecture:** **66-layer decoder-only Transformer MoE, 975B total / 41B active**; 256 routed + 2 shared experts per MoE layer, 6 routed experts active per token, sigmoid routing with auxiliary-loss-free load balancing; relative positional attention instead of RoPE, ~5:1 global/sliding-window alternation, 8 KV heads, short convolutions (SConv); MTP speculative decoding; adjustable reasoning effort via system message and per-token cost control. Pretrained from scratch on **45 trillion tokens** on NVIDIA GB300 NVL72 with Muon+Adam optimisers; post-training used synthetic SFT data from Kimi K2.5 and **>30 million rollouts** of RL.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **74.1%**
- Terminal-Bench 2.1: matched NVIDIA Nemotron 3 Ultra's score while using only **~1/3 of the generated tokens** (relative efficiency claim, no absolute score published)
- FORTRESS: built-in safety protections (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AIME 2026: **97.1%**
- MMAU: **77.2%**
- Artificial Analysis composite: **41** — **#1 among US open-weight models** (with NVIDIA Nemotron 3 Ultra, Google Gemma 4 31B and OpenAI GPT-OSS-120B also on that board)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- Terminal-Bench 2.1 token-efficiency comparison above (no absolute figure)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M-token window with global/sliding-window alternation and 8 KV heads; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** MCP Atlas 74.1%, ~1/3 the tokens of Nemotron 3 Ultra on Terminal-Bench 2.1, adjustable reasoning effort and an enterprise fine-tuning ecosystem (Tinker + 5 API providers); capped by no absolute Terminal-Bench score and no τ-bench/OSWorld figure.
- **Reasoning: 89/100.** AIME 2026 97.1%, MMAU 77.2% and an AA composite of 41 (#1 US open model); capped by 41 being well below the closed frontier and no GPQA/HLE figure.
- **Context window: 93/100.** A verified 1M-token window with a purpose-built efficient attention stack (5:1 global/sliding-window, 8 KV heads, SConv) and per-token cost control; capped by no retrieval benchmark.
- **Multimodal: 92/100.** Native encoder-free text/image/audio fusion with 77.2% MMAU and 45T multimodal pretraining tokens; capped by text-only output, no verified video input, and no published image/video benchmark.
- **Coding: 84/100.** Strong Terminal-Bench 2.1 token efficiency and 30M+ RL rollouts; capped by no absolute coding benchmark score.
- **Cost efficiency: 95/100.** Apache 2.0 free weights, 41B active params, 1/3 the generation tokens of a comparable model, NVFP4 checkpoints and controllable per-token cost. Excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 88, 89, 93, 92, 84 = 89.2 → 89. Best fit: enterprise-owned, fine-tuned multimodal agents on self-hosted open weights with Tinker, where customisability and token economics dominate raw frontier scores.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Inkling article (full architecture, 975B/41B, 45T tokens, 1M context, Apache 2.0, AIME 2026 97.1%, MCP Atlas 74.1%, MMAU 77.2%, AA 41 #1 US open model, Terminal-Bench 2.1 token-efficiency comparison, Tinker ecosystem). Figures for Inkling-Small / Inkling 2 Small are separate models and are NOT merged here. The Terminal-Bench/Nemotron comparison is a relative token-efficiency claim, not an absolute score. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Inkling — 百度百科 (architecture, benchmarks, licence, ecosystem)](https://baike.baidu.com/item/Inkling/68740331)
