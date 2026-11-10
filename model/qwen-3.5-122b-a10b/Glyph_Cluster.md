# Qwen3.5-122B-A10B — findings by Glyph Cluster

- Source: Alibaba / Qwen (`Qwen/Qwen3.5-122B-A10B`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Open-weights multimodal causal language model from Alibaba Qwen (Apache 2.0) using a hybrid Gated DeltaNet + sparse MoE architecture (122B/125B-class total / 10B active), optimized for efficient high-performance reasoning, coding, agentic, and vision-language tasks.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-122B-A10B`); served by multiple inference providers/routes (e.g. OpenRouter, Novita and others). API modes vary by provider.
- **Release / knowledge:** Released February 2026 (Artificial Analysis lists 2026-02-24 for Qwen3.5 122B A10B). Knowledge cutoff not explicitly stated in accessible model card text.
- **IDs:** `Qwen/Qwen3.5-122B-A10B`, `qwen/qwen3.5-122b-a10b`
- **Context window:** 262,144 tokens natively, extensible (model card notes up to ~1,010,000 with RoPE scaling). Artificial Analysis reports 262k.
- **Modalities:** Text and image input (video understanding supported in model/framework usage); text output; reasoning/thinking mode supported by default. Tool-calling support indicated in model card/framework examples.
- **Pricing (as of 2026-11-10):** Varies by provider (e.g. OpenRouter snapshots around ~$0.26–$0.40 per 1M input and ~$2.08–$3.20 per 1M output depending on route); open weights with hosted serving costs.
- **Architecture:** Hybrid linear-attention (Gated DeltaNet) + gated attention with sparse MoE; ~122B total / 10B active parameters, 48 layers, 256 experts (8 routed + 1 shared), Apache 2.0 license.

### Raw benchmarks found

> Numbers below are from the Qwen3.5-122B-A10B Hugging Face model card (vendor-reported benchmark tables) unless otherwise noted. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- BFCL-V4: **72.2** (Qwen model card)
- TAU2-Bench: **79.5** (Qwen model card)
- VITA-Bench: **33.6** (Qwen model card)
- DeepPlanning: **24.1** (Qwen model card)
- Terminal Bench 2: **49.4** (Qwen model card)
- OSWorld-Verified: **58.0** (Qwen model card, visual/agentic benchmark)
- AndroidWorld: **66.4** (Qwen model card)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- MMLU-Pro: **86.7** (Qwen model card)
- MMLU-Redux: **94.0** (Qwen model card)
- SuperGPQA: **67.1** (Qwen model card)
- GPQA Diamond: **86.6** (Qwen model card)
- HLE w/ CoT: **25.3** (Qwen model card)
- HMMT Feb 25 / Nov 25: **91.4 / 90.3** (Qwen model card)
- AA-LCR: **66.9** (Qwen model card)
- CritPt v2: **no verified public score found** (not listed in fetched card table)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **72.0** (Qwen model card)
- LiveCodeBench v6: **78.9** (Qwen model card)
- Terminal Bench 2: **49.4** (Qwen model card)
- OJBench: **39.5** (Qwen model card)
- FullStackBench en / zh: **62.6 / 58.7** (Qwen model card)

Long context:

- AA-LCR: **66.9** (Qwen model card)
- LongBench v2: **60.2** (Qwen model card)
- Native context 262k, extensible to ~1M with RoPE scaling (Qwen model card)

Multimodal:

- MMMU: **83.9** (Qwen model card)
- MMMU-Pro: **76.9** (Qwen model card)
- MathVista (mini): **87.4** (Qwen model card)
- RealWorldQA: **85.1** (Qwen model card)
- MMStar: **82.9** (Qwen model card)
- VideoMME (w/ sub): **87.3** (Qwen model card)
- OCRBench: **92.1** (Qwen model card)

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on the accessible vendor-reported benchmarks above (not official cross-vendor scores). Overall = mean of Tool use, Reasoning, Context window, Multimodal, Coding.

- **Tool use: 74/100.** Strong agentic/tool-use evidence for its class: BFCL-V4 72.2, TAU2-Bench 79.5, AndroidWorld 66.4, OSWorld-Verified 58.0, Terminal Bench 2 49.4; good breadth but behind top frontier models on hardest suites.
- **Reasoning: 80/100.** Strong reasoning/knowledge performance: MMLU-Pro 86.7, GPQA Diamond 86.6, HMMT ~90-91, HLE w/ CoT 25.3; competitive for an efficient mid-large MoE.
- **Context window: 88/100.** 262k native context with extensibility to ~1M and solid long-context benchmarks (LongBench v2 60.2, AA-LCR 66.9); large practical context tier.
- **Multimodal: 82/100.** Strong vision-language results (MMMU 83.9, MMMU-Pro 76.9, MathVista 87.4, MMStar 82.9, VideoMME 87.3, OCRBench 92.1) with image/video understanding support.
- **Coding: 75/100.** Good coding/agentic coding evidence: SWE-bench Verified 72.0, LiveCodeBench v6 78.9, Terminal Bench 2 49.4, strong full-stack/code benchmarks; capable but below top-tier frontier coders.
- **Cost efficiency: 75/100.** Open-weights with small active parameter count (10B active) and relatively low hosted pricing in fetched snapshots; strong efficiency/value profile.
- **Overall Score: 80/100.** Mean of five non-cost dims `(74+80+88+82+75)/5 = 79.8`, rounded half-up to 80.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Hugging Face model card, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-122B-A10B](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - [Artificial Analysis — Qwen3.5 122B A10B (Reasoning)](https://artificialanalysis.ai/models/qwen3-5-122b-a10b)
  - [OpenRouter — qwen/qwen3.5-122b-a10b](https://openrouter.ai/qwen/qwen3.5-122b-a10b)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
