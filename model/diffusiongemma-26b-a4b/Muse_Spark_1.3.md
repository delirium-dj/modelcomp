# Diffusiongemma 26b A4b — findings by Muse Spark 1.3

- Source: Google DeepMind (google/diffusiongemma-26B-A4B-it)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26b A4b
- **Short description:** Google DeepMind's experimental open text-diffusion model on the Gemma 4 26B-A4B MoE; denoises 256-token blocks in parallel for up to 4x faster generation at a small quality cost.
- **Provider / access:** Open weights (Apache 2.0) via Hugging Face (`google/diffusiongemma-26B-A4B-it`); OpenCode Zen `opencode/diffusiongemma-26b-a4b`. Single-GPU local run after ~18GB quantization.
- **Release / knowledge:** 2026-06-10 release (Google model card + DataNorth); knowledge cutoff January 2025.
- **IDs:** `opencode/diffusiongemma-26b-a4b` (Zen); `google/diffusiongemma-26B-A4B-it` (HF).
- **Context window:** 256K (shared Gemma 4 26B-A4B architecture, verified via DataNorth).
- **Modalities:** text + image + video in; text out (Google model card: multimodal open VLM). Function calling per base architecture; reasoning via diffusion denoising (no thinking-mode scores published).
- **Pricing (as of 2026-10-05):** $0 open weights (Apache 2.0, commercial use permitted); >1,000 tok/s on H100, >700 tok/s on RTX 5090.
- **Architecture:** 26B MoE (3.8B active, quantized ~18GB VRAM); discrete diffusion over 256-token blocks; Apache 2.0.

### Raw benchmarks found

> Google-published comparisons vs standard autoregressive Gemma 4 26B-A4B (DataNorth 2026-06-11, from Google). No Terminal-Bench 2.1, Tau3, GDPval, Claw, HLE, or LCB harness-independent numbers found.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **73.2%** (Google-published, via DataNorth; vs 82.3 standard Gemma 4 26B-A4B)
- MMLU Pro: **77.6%** (Google-published, via DataNorth; vs 82.6 standard)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- LiveCodeBench v6: **69.1%** (Google-published, via DataNorth; vs 77.1 standard)
- Codeforces Elo: **1429** (Google-published, via DataNorth; vs 1718 standard)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 256K window shared with base architecture; no MRCR/RULER/GraphWalks score published for the diffusion variant.

### Normalized scores (1–100)

- **Tool use: 55/100.** No agent-harness numbers; diffusion infilling/editing fit (inline editing, code infilling, markdown) lifts it above floor; capped hard by zero verified TB2.1/Tau3/GDPval.
- **Reasoning: 70/100.** GPQA 73.2 + MMLU Pro 77.6 mid-tier; capped by the consistent diffusion discount vs standard (82.3/82.6) and no HLE/Index.
- **Context window: 76/100.** 256K shared architecture (tier anchor ~70, up for 256K native); capped, no diffusion-variant retrieval measurement.
- **Multimodal: 82/100.** Text + image + video in per model card; capped, text-only output and no measured vision scores for the variant.
- **Coding: 70/100.** LCB v6 69.1 + Codeforces 1429 mid-pack with infilling specialty; capped by the diffusion discount (77.1/1718 standard) and no SWE-bench.
- **Cost efficiency: 100/100.** $0 Apache 2.0 weights, single consumer GPU, 4x generation speed — free and fast is the product.
- **Overall Score: 71/100.** Mean (55+70+76+82+70)/5 = 353/5 = 70.6 → 71. Best fit: latency-sensitive local editing/infilling where 4x speed beats maximum quality.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
