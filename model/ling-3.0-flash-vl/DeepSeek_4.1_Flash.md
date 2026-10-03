# Ling 3.0 Flash VL — findings by DeepSeek 4.1 Flash

- Source: InclusionAI / Ant Group — Ling-3.0-flash-VL (`opencode/ling-3.0-flash-vl`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's (Ant Group) native multimodal Flash model — built on Ling-3.0-flash, it brings image and video understanding into the full understand → reason → act → verify loop; 124B-A5.5B sparse MoE with open weights.
- **Provider / access:** `opencode/ling-3.0-flash-vl`; also on Hugging Face (`inclusionAI/Ling-3.0-flash-VL`, 64 shards), OpenRouter, DeepInfra and Novita. Reasoning, tool calling and structured outputs per OpenRouter.
- **Release / knowledge:** 2026-09-10 (Vector Wire; HF repo created 2026-09-04). Knowledge cutoff not published.
- **IDs:** `opencode/ling-3.0-flash-vl`; upstream `inclusionAI/Ling-3.0-flash-VL`.
- **Context window:** 256K tokens (HF card: "up to 256K"; the vLLM recipe uses `--context-length 262144`). Max output not published in the card text.
- **Modalities:** Text, image and video in; text out. Thinking is enabled by default (`enable_thinking: false` to disable); recommended sampling temp 1.0 / top_p 0.95 / top_k 20.
- **Pricing (as of 2026-10-03):** ~$0.07 in / $0.22 out per 1M (Artificial Analysis); cheaper routes: OpenRouter `ling-3.0-flash-vl:free` $0.00, DeepInfra $0.06/$0.18, Novita $0.07/$0.22.
- **Architecture:** Sparse MoE, 124B total / 5.5B active per token. ViT visual encoder + 2-layer MLP projector, VideoRoPE for temporal order, 42-layer hybrid KDA/Gated-MLA backbone (5:1). MIT license, open weights.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond: **86.16%** (Artificial Analysis aggregator)
- HLE: **21.96%** (AA)
- CritPt: **2.00%** (AA)
- AA Intelligence Index: **24.57** (AA v4.x). HF card reports **42** on AA Intelligence Index v4.1.1 (vs Ling-3.0-flash 38) — different index revision, listed for traceability.
- AA-Omniscience non-hallucination: **77.95%**; Accuracy **14.35%**; net AA-Omniscience **−4.53** (AA)

Coding:

- SciCode: **44.21%** (AA)
- Terminal-Bench 2.1: **64.42%** (AA)

Agent / tool use:

- τ-Bench V3 Banking: **34.43%** (AA)
- GDPval (win rate): **32.49%** (AA)
- Terminal-Bench 4.0: **0.00%** (AA)

Multimodal:

- MMMU-Pro: **78.96%** (AA)

Long context:

- AA-LCR: **78.33%** (AA)

### Normalized scores (1–100)

- **Tool use: 68/100.** τ-Bench V3 Banking 34.43% is above the mid band (Tau3 10–25% → 50–70) and TB2.1 64.42% is mid-high, but GDPval win-rate 32.49% and TB4.0 0.00% hold it mid.
- **Reasoning: 72/100.** GPQA Diamond 86.16% is near-frontier; HLE 21.96% and AA Index 24.57 are mid, and CritPt 2.00% caps the score.
- **Context window: 74/100.** 256K sits in the 200K–500K tier (200K = 70), with AA-LCR 78.33% supporting genuine long-context retrieval.
- **Multimodal: 85/100.** Native image **and** video input (VideoRoPE), projected through a ViT; MMMU-Pro 78.96% confirms strong visual reasoning — the 75–90 band for video/PDF-in models.
- **Coding: 68/100.** SciCode 44.21% is mid and TB2.1 64.42% is fine, but no SWE-bench/DeepSWE figure lifts it into the frontier coding band.
- **Cost efficiency: 97/100.** $0.07 in / $0.22 out per 1M ≈ the ~$0.10/$0.20 (97–99) reference point, with a $0 OpenRouter route available.
- **Overall Score: 73/100.** (68 + 72 + 74 + 85 + 68) / 5 = 73.4 → **73**. Best-fit: cheap native-vision/video worker model for image- and video-heavy agent tasks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-03
- Method: independent public internet research (HF model card `inclusionAI/Ling-3.0-flash-VL`, Vector Wire's Artificial Analysis benchmark rows, BenchLM). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
