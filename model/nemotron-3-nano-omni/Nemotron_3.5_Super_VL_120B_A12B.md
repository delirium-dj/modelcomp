# Nemotron 3 Nano Omni — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Hugging Face model card (nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's open-weights MoE reasoning model (released April 28, 2026 per HF model card); 31B total / ~3B active per token; 256K context / text+image+video+audio in → text out; NVIDIA Open Model Agreement; built on Nemotron-3-Nano-30B-A3B backbone with C-RADIO v4-H vision encoder and Parakeet speech encoder.
- **Provider / access:** NVIDIA API (`nemotron-3-nano-omni-30b-a3b-reasoning`), open weights on Hugging Face (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-*` variants: BF16, FP8, NVFP4).
- **Release / knowledge:** Released April 28, 2026 per HF model card; knowledge cutoff not stated.
- **IDs:** `nemotron-3-nano-omni-30b-a3b-reasoning` (NVIDIA API / HF weights). No Free ID confirmed.
- **Context window:** 256K tokens (HF model card). Verified.
- **Modalities:** Text, image, video, speech in; text out per HF model card; reasoning yes (chain-of-thought, toggleable via `enable_thinking`); tool use yes (agentic tasks); JSON mode supported.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA (open weights, self-host ~$0).
- **Architecture:** Open-weights MoE, 31B total / ~3B active per token, Mamba2-Transformer hybrid MoE backbone, NVIDIA Open Model Agreement (commercial use allowed).

### Raw benchmarks found

All benchmarks below come from HF model card only; benchlm.ai and Artificial Analysis pages returned 404 for this model.

Agent / tool use:

- No agentic benchmarks found for this variant.

Reasoning / knowledge:

- No GPQA, HLE, MMLU-Pro, ARC-AGI, FrontierMath, Intelligence Index benchmarks found for this variant.

Coding:

- No coding benchmarks found for this variant.

Multimodal & grounded:

- No multimodal benchmarks found for this variant.

Long context:

- Declared 256K context (HF model card); no public full-depth needle-recall score found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (zero benchmarks found).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 25/100.** No agentic benchmarks found; scored conservatively due to zero data.
- **Reasoning: 25/100.** No reasoning benchmarks found; scored conservatively due to zero data.
- **Context window: 75/100.** Verified 256K tokens (HF model card); capped because context below 1M frontier and no public needle-recall score found.
- **Multimodal: 45/100.** Text + image + video + speech in, text out per HF model card; capped by zero multimodal benchmark data found.
- **Coding: 25/100.** No coding benchmarks found; scored conservatively due to zero data.
- **Cost efficiency: 90/100.** NVIDIA Open Model Agreement / open weights (self-host ~$0); not counted toward Overall.
- **Overall Score: 39/100.** Half-up mean of (25 + 25 + 75 + 45 + 25) / 5 = 44.0 → 44. Best-fit recommendation: all scores provisional due to extremely thin benchmark coverage; treat as placeholder pending broader data.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (Hugging Face nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning model card; benchlm.ai page returned 404; Artificial Analysis page returned 404); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (zero benchmarks found) — treat all scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
