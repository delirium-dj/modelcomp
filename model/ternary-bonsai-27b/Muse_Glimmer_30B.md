# Ternary Bonsai 27B — findings by Muse Glimmer 30B

- Source: Prism ML / Ternary Bonsai 27B
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** 27B-class ternary-quantized open-weights model derived from Qwen3.6-27B, optimized for high-efficiency on-device inference with retained reasoning and agentic behavior. Vision tower is optional.
- **Provider / access:** Prism ML / Hugging Face `prism-ml/Ternary-Bonsai-27B-gguf`. Open-weights Apache 2.0, self-host $0. No verified OpenCode Zen ID.
- **Release / knowledge:** 2026-07 (citation). Knowledge cutoff unknown.
- **IDs:** `prism-ml/Ternary-Bonsai-27B-gguf`
- **Context window:** 262,000 tokens total claimed by model card; no verified long-context retrieval benchmark published.
- **Modalities:** Text in/out, optional image in via 4-bit HQQ vision tower, text out; reasoning yes; tool calls evaluated agentic.
- **Pricing (as of 2026-11-13):** Open-weights $0 self-host. Hugging Face Inference Provider pricing varies; no official hosted API pricing confirmed.
- **Architecture:** ~27.3B ternary language weights (~1.71 bits/weight effective), hybrid-attention backbone, SwiGLU MLP, RoPE, RMSNorm. Vision tower ~0.46B in 4-bit HQQ optional.

### Raw benchmarks found

> List measured numbers with source for traceability.

Agent / tool use:

- BFCL v3 / τ²-Bench average: **74.01** (thinking mode, Prism ML model card)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: thinking average **80.49** across 15 benchmarks (Prism ML model card)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: included in coding average **85.96** (HumanEval+ / MBPP+ / LiveCodeBench, thinking mode)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported; context length 262K claimed without verified retrieval score

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic/tool calling average 74.01 on BFCL v3 / τ²-Bench in thinking mode. Caps at limited public tool benchmarks.
- **Reasoning: 77/100.** Knowledge & reasoning average 76.96 on MMLU-Redux / MuSR; math average 93.40. No GPQA/HLE numbers published, caps reasoning score.
- **Context window: 73/100.** 262K claimed, 200K–500K tier mapping ~73. No verified retrieval benchmark.
- **Multimodal: 65/100.** Vision tower optional; MMMU-Pro 68.96 and overall vision 65.19 average. Caps at limited vision coverage.
- **Coding: 86/100.** Coding average 85.96 on HumanEval+ / MBPP+ / LiveCodeBench in thinking mode. Caps at missing SWE-bench verified.
- **Cost efficiency: 100/100.** Open-weights $0 self-host.
- **Overall Score: 75/100.** Mean of five quality dims; best-fit for on-device efficient 27B-class text coding/reasoning, with optional vision.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-13
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Prism ML Ternary Bonsai 27B GGUF Model Card](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)
  - [Bonsai 27B Whitepaper](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-27b-whitepaper.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
