# Ternary Bonsai 27B - findings by Big Pickle

- Source: PrismML/Ternary Bonsai 27B
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** PrismML's ternary-weight build of Qwen3.6 27B — the laptop-class variant (1.71 effective bits/weight, ~5.9 GB) of the Bonsai 27B release. It keeps reasoning, tool calling, vision and a 262K window while fitting on a single consumer GPU or Apple silicon machine.
- **Provider / access:** Open weights under Apache 2.0 (Hugging Face / PrismML), with a free limited-time developer preview API. Runnable via MLX on Apple devices and custom low-bit CUDA kernels on NVIDIA GPUs. `opencode/ternary-bonsai-27b` is the comparison-table ID; this is the "Bonsai 27B" generation, not the newer `ternary-bonsai-2-27b` folder.
- **Release / knowledge:** Released 2026-07-14; built on Qwen3.6 27B, so the knowledge cutoff follows that base model (not separately published).
- **IDs:** `prismml/ternary-bonsai-27b` (`opencode/ternary-bonsai-27b` in this site's table)
- **Context window:** 262,144 tokens (PrismML release post: "a full 262K-token context"). The site `meta.json` still carries a 128,000 placeholder; the vendor figure is scored here.
- **Modalities:** Text and image in; text out. Thinking mode, structured tool calls and agentic loops are supported; the vision tower ships in 4-bit.
- **Pricing (as of 2026-11-13):** $0 self-host (Apache 2.0 weights). The hosted developer preview API is free for a limited time; no standing per-token price.
- **Architecture:** 27B dense decoder (Qwen3.6 27B base) quantized end-to-end to ternary {-1, 0, +1} weights with FP16 group-wise scaling (1.71 effective bits); multimodal vision tower; Apache 2.0.

### Raw benchmarks found

> PrismML publishes a 15-benchmark suite as category aggregates (thinking mode),
> not per-benchmark rows; the per-benchmark table lives in its whitepaper. Numbers
> below are the published vendor aggregates and are labelled as such.

Agent / tool use:

- Agentic & tool-calling aggregate (BFCL v3, TauBench): **74.0** (PrismML, vs 80.0 for full-precision Qwen3.6 27B)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no per-benchmark value published (only the aggregate above)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Math aggregate (GSM8K, MATH-500, AIME25, AIME26): **93.4** (vs 95.3 base)
- Knowledge/STEM aggregate (MMLU-Redux, MuSR): **77.0** (vs 83.1 base)
- Instruction-following aggregate (IFEval, IFBench): **71.8** (vs 78.4 base)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Overall (15-benchmark vendor suite): **80.5** (vs 85.0 base); retains 95% of full-precision quality
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- Coding aggregate (HumanEval+, MBPP+, LiveCodeBench): **86.0** (vs 88.7 base)
- SWE-bench Verified / SWE-Pro: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no per-benchmark values published

Multimodal:

- Vision aggregate (MMMU Pro, OCRBench): **65.2** (vs 72.6 base)

Long context:

- No MRCR / RULER / GraphWalks curve; 262K is a serving spec. Throughput references: 134 tok/s ternary on an RTX 5090, 58 tok/s on an M5 Max.

### Normalized scores (1-100)

- **Tool use: 76/100.** BFCL v3 + TauBench aggregate 74.0 is within six points of the full-precision base, but per-benchmark and Terminal-Bench evidence is missing.
- **Reasoning: 82/100.** Math 93.4 and knowledge 77.0 average to a strong mid-80s profile; the 71.8 instruction-following aggregate and absent GPQA/HLE pull it down.
- **Context window: 74/100.** Verified 262,144-token window sits in the 200K-500K tier (65-84), between the 200K = 70 and 500K = 85 anchors.
- **Multimodal: 78/100.** Image input with a compact 4-bit vision tower and a 65.2 vision aggregate; no video, no audio.
- **Coding: 84/100.** HumanEval+/MBPP+/LiveCodeBench aggregate 86.0 (86.0 vs 88.7 full precision) is the model's strongest large-category result; no agentic SWE score caps it.
- **Cost efficiency: 100/100.** Apache 2.0 weights at $0 self-host on a laptop or single consumer GPU; the preview API is free.
- **Overall Score: 79/100.** Half-up mean of (76 + 82 + 74 + 78 + 84) / 5 = 78.8. Best fit: offline/private coding and tool-calling agents on a laptop, at 95% of the full-precision base model.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-11-13
- Method: public internet research (PrismML release post and benchmark table, model hosting pages); scores are normalized 1-100 interpretations, not official vendor scores. Category aggregates are vendor-reported and evaluated in thinking mode.
- Reference URLs:
  - [PrismML — Announcing Bonsai 27B: The First 27B-Class Model to Run on a Phone](https://prismml.com/news/bonsai-27b)
  - [PrismML models — Bonsai 27B](https://prismml.com/models)
- Future sources: add a new file next to this one, e.g. `Ternary_Bonsai_27B.md`, using the same headings.
