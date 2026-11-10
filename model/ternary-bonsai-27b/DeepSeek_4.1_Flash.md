# Ternary Bonsai 27B — findings by DeepSeek 4.1 Flash

- Source: Prism ML / Ternary Bonsai 27B (`prism-ml/ternary-bonsai-27b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B (v1 of the Bonsai 27B series; sibling variant: 1-bit Bonsai 27B)
- **Short description:** Prism ML's quality-oriented ternary-quantized 27B — a Qwen3.6-27B-derived multimodal model with all language weights constrained to {−1, 0, +1} (1.58-bit representation, 1.71 effective bits/weight) that runs full reasoning, tool use and vision locally at 5.9 GB.
- **Provider / access:** open weights on Hugging Face (`prism-ml/Ternary-Bonsai-27B`, GGUF builds for llama.cpp/MLX), Apache 2.0; runs natively on Apple (MLX) and NVIDIA (CUDA) via custom low-bit kernels; limited-time free developer preview API at launch.
- **Release / knowledge:** 2026-07-14 (announcement + release posts); knowledge cutoff not disclosed.
- **IDs:** weights `prism-ml/Ternary-Bonsai-27B` (+ `-gguf`); dataset route `opencode/ternary-bonsai-27b`.
- **Context window:** **262,144 (262K) tokens** per the official posts — the folder's scaffolded metadata listing 128K is superseded/corrected here.
- **Modalities:** text + image in (4-bit vision tower: screenshots, documents, camera input), text out; thinking mode on; structured tool calls; speculative decoding support.
- **Pricing (as of 2026-11-10):** Apache-2.0 open weights → $0 self-host (5.9 GB footprint ≈ one 8-16 GB machine); free limited-time preview API at launch; standard hosted rates thereafter.
- **Architecture:** Qwen3.6-27B base (multimodal, hybrid attention), 27.8B parameters, every language-network weight ternary end-to-end (embeddings, attention, MLP, LM head — no higher-precision escape hatches), FP16 scale per group; trained on Google v5 TPUs.

### Raw benchmarks found

> Prism ML 15-benchmark suite, thinking mode, scored as category averages against the Qwen3.6-27B full-precision baseline (vendor-run, whitepaper-linked). Category scores are averages of the named benchmarks, not single-benchmark values.

Agent / tool use:

- Agentic & tool-calling category (BFCL v3, TauBench): **74.0** (vs 80.0 full precision) — "within a few points of full precision" per vendor; no independent harness rows found

Reasoning / knowledge:

- Math category (GSM8K, MATH-500, AIME25, AIME26): **93.4** (vs 95.3)
- Knowledge/STEM category (MMLU-Redux, MuSR): **77.0** (vs 83.1)
- Instruction following (IFEval, IFBench): **71.8** (vs 78.4)
- No independent GPQA/HLE/AA index rows found at check time

Coding:

- Coding category (HumanEval+, MBPP+, LiveCodeBench): **86.0** (vs 88.7) — "nearly untouched" per vendor

Multimodal:

- Vision category (MMMU-Pro, OCRBench): **65.2** (vs 72.6) — 4-bit vision tower

Long context:

- 262K context supported (vendor); no MRCR/RULER retrieval row published

Composite:

- **Overall 15-benchmark retention: 80.5 (vs 85.0 full precision) = 95% retained**; 1-bit sibling retains 90%

### Normalized scores (1–100)

- **Tool use: 70/100.** BFCL-v3/TauBench average 74.0 with near-full-precision retention makes real local tool use plausible; capped by vendor-only sourcing and the absolute 27B-class level.
- **Reasoning: 72/100.** Math 93.4 is strong and knowledge 77.0 solid for a 1.71-bit build; capped below the mid-70s+ by the compression's knowledge delta and no independent reasoning rows.
- **Context window: 80/100.** 262K (corrected from the scaffolded 128K) sits mid-high tier; no measured retrieval depth.
- **Multimodal: 60/100.** Image input with a compact 4-bit vision tower (MMMU-Pro/OCRBench category 65.2); no audio/video beyond stills.
- **Coding: 70/100.** HumanEval+/MBPP+/LiveCodeBench average 86.0 with only ~3% retention loss; capped by no independent SWE-class rows.
- **Cost efficiency: 90/100.** Apache-2.0 weights at 5.9 GB → free self-hosting on everyday hardware; the 1-bit sibling (3.9 GB, phone-class) pushes the same economics further.
- **Overall Score: 70/100.** (70 + 72 + 80 + 60 + 70) / 5 = 70.4 → 70. Best fit: fully local laptop agent/assistant stacks needing vision + tool use + a 262K window with zero marginal token cost.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-10
- Method: public internet research (Prism ML announcement + release posts, Hugging Face model/GGUF cards, docs.prismml.com; whitepaper referenced). All benchmark figures are vendor-run category averages and labelled as such; no independent harness rows found at check time. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Prism ML — Announcing Bonsai 27B: The First 27B-Class Model to Run on a Phone](https://prismml.com/news/bonsai-27b)
  - [Prism ML — PrismML Announces 1-bit Bonsai 27B](https://prismml.com/news/prismml-releases-bonsai-27b)
  - [Hugging Face — prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)
  - [PrismML Docs — Bonsai family](https://docs.prismml.com/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
