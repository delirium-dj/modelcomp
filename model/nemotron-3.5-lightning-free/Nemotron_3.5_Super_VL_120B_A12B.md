# Nemotron 3.5 Lightning 30B A3B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: build.nvidia.com endpoint `nemotron-3.5-lightning-30b-a3b` model card (NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4), research.nvidia.com Nemotron 3.5 Super and Lightning technical report, Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-{BF16,NVFP4}`, benchlm.ai, Uniphore enterprise test, Lambda, NVIDIA technical blog
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning 30B A3B
- **Short description:** NVIDIA's open 30B mixture-of-experts model (30B total / 3B active hybrid Mamba-2–Transformer + MoE) optimized for high-volume, low-latency execution in long-running AI agents; 1M-token context; OpenMDW-1.1; released 2026-08-11. "Smallest member of the Nemotron 3 model family"; execution layer routed to by NeMo Switchyard.
- **Provider / access:** NVIDIA NIM endpoint on build.nvidia.com (`nemotron-3.5-lightning-30b-a3b`, OpenAI-compatible); Hugging Face checkpoints BF16 / NVFP4; speculative decoding drafts DFlash / DSpark.
- **Release / knowledge:** Released 2026-08-11 via build.nvidia.com and Hugging Face; pretraining data cutoff September 2025, post-training cutoff May 2026; 20T+ tokens pretrained.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` (BF16), `...-NVFP4` (quantized); build.nvidia.com `nemotron-3.5-lightning-30b-a3b`.
- **Context window:** Up to 1M tokens (build.nvidia.com Model Summary).
- **Modalities:** Text in, text out (text-only — NOT multimodal); reasoning yes (configurable); tool calls yes (function calling supported); JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-16):** Not publicly disclosed in fetched sources; open weights under OpenMDW-1.1 (self-host effectively $0); hosted pricing varies by provider.
- **Architecture:** 30B total / 3B active parameters per token, Mixture-of-Experts hybrid (interleaved Mamba-2 and MoE layers + select Attention), native Multi-Token Prediction (MTP); NVFP4 pretrained; post-trained with SFT + RLVR (asynchronous GRPO via NeMo Gym).

### Raw benchmarks found

All measured numbers below come from NVIDIA's own model card / docs (evaluated via NeMo Gym) and matching third-party sources. NVFP4 column = quantized variant where reported.

Agent / tool use:

- Terminal-Bench 2.1: **23.5%** (benchlm.ai; NVIDIA card/NVFP4)
- SWE-Bench Verified: **52.8%** (benchlm.ai; NVIDIA card)
- SWE Multilingual: not published for Lightning

Reasoning / knowledge:

- MMLU Pro: **81.94%** (BF16) / **81.62%** (NVFP4) (build.nvidia.com docs)
- AA-Omniscience: **17.50%** (BF16) / **16.63%** (NVFP4)
- GPQA Diamond: **75.44%** (BF16) / **75.57%** (NVFP4)
- HLE text-only: **11.72%** (BF16) / **10.47%** (NVFP4)
- SciCode: **32.60%** (BF16) / **31.38%** (NVFP4)
- Artificial Analysis Intelligence Index: reported (benchlm.ai public-lane reasoning 59.6)

Coding:

- SWE-Bench Verified: **52.8%** (benchlm.ai)
- SciCode: **32.60%** (BF16)

Long context:

- Declared 1M-token context; long-context training not a headline for Lightning (lighter text-only pipeline); no public long-context retrieval score at 1M.

Instruction following:

- IFBench: **72.9%** (benchlm.ai; NVIDIA card)
- IFEval: public-lane 71.4 (#71/148) (benchlm.ai)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. model-queue curated Overall: **56.8**.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 40/100.** Weak agentic profile — Terminal-Bench 2.1 (23.5), SWE-Bench Verified (52.8); capped by low agentic scores vs frontier models. Execution-layer design trades agentic depth for speed.
- **Reasoning: 48/100.** Moderate — GPQA Diamond (75.4), MMLU Pro (81.9); capped by weak HLE (11.7), AA-Omniscience (17.5), SciCode (32.6). Knowledge-reasoning OK, hard reasoning weak.
- **Context window: 90/100.** Declared 1M tokens; capped because no public retrieval score measured at full 1M window.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 52/100.** SWE-Bench Verified 52.8, SciCode 32.6; below frontier open coders.
- **Cost efficiency: 85/100.** Highest-efficiency small model — ~5× throughput vs Gemma 4 31B IT (Uniphore), 4× output speed of similar-sized models, cheap to run; not counted toward Overall.
- **Overall Score: 56/100.** Half-up mean of (40 + 48 + 90 + 50 + 52) / 5 = 56.0 → 56. Best-fit recommendation: high-volume, low-latency agent execution layer — not a frontier reasoning model; pair with Super/Ultra for planning and complex reasoning via NeMo Switchyard; requires domain SFT to reach tuned accuracy on knowledge bases.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official NVIDIA model card/build.nvidia.com/docs + research.nvidia.com technical report + benchlm.ai + Uniphore enterprise test + Lambda/NVIDIA blog independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
