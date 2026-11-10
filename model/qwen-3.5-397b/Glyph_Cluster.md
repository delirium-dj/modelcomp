# Qwen3.5-397B-A17B — findings by Glyph Cluster

- Source: Alibaba / Qwen (`Qwen/Qwen3.5-397B-A17B`, folder slug `qwen-3.5-397b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B
- **Short description:** Open-weights multimodal causal language model from Alibaba Qwen (Apache 2.0) using a hybrid Gated DeltaNet + sparse MoE architecture (397B total / 17B active), designed for strong reasoning, coding, agentic, and vision-language performance with long-context support.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-397B-A17B`); served by multiple inference providers/routes (e.g. via OpenRouter/hosting platforms). API modes vary by provider.
- **Release / knowledge:** Released February 2026 (Artificial Analysis lists 2026-02-16 for Qwen3.5 397B A17B). Knowledge cutoff not explicitly stated in accessible model card text.
- **IDs:** `Qwen/Qwen3.5-397B-A17B`, `qwen/qwen3.5-397b-a17b` (provider route naming varies)
- **Context window:** 262,144 tokens natively, extensible (model card notes up to ~1,010,000 with RoPE scaling). Artificial Analysis reports 262k.
- **Modalities:** Text and image input (video understanding supported in model/framework usage); text output; reasoning/thinking mode supported by default. Tool-calling support indicated in model card/framework examples.
- **Pricing (as of 2026-11-10):** Varies by provider (e.g. OpenRouter/AA snapshots around ~$0.39–$0.75 per 1M input and ~$2.34–$4.50 per 1M output depending on route); open weights with hosted serving costs.
- **Architecture:** Hybrid linear-attention (Gated DeltaNet) + gated attention with sparse MoE; 397B total / 17B active parameters, 60 layers, 512 experts (10 routed + 1 shared), Apache 2.0 license.

### Raw benchmarks found

> Numbers below are from the Qwen3.5-397B-A17B Hugging Face model card (vendor-reported benchmark tables) unless otherwise noted. Where a benchmark was not found, marked accordingly.

Agent / tool use:

- BFCL-V4: **72.9** (Qwen model card)
- TAU2-Bench: **86.7** (Qwen model card)
- VITA-Bench: **49.7** (Qwen model card)
- DeepPlanning: **34.3** (Qwen model card)
- Tool Decathlon: **38.3** (Qwen model card)
- MCP-Mark: **46.1** (Qwen model card)
- Terminal Bench 2: **52.5** (Qwen model card; agentic coding/terminal benchmark)
- OSWorld-Verified: **62.2** (Qwen model card, vision-language/agentic computer-use context)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- MMLU-Pro: **87.8** (Qwen model card)
- MMLU-Redux: **94.9** (Qwen model card)
- SuperGPQA: **70.4** (Qwen model card)
- GPQA: **88.4** (Qwen model card)
- HLE: **28.7** (Qwen model card)
- HLE-Verified: **37.6** (Qwen model card)
- AIME26: **91.3** (Qwen model card)
- HMMT Feb 25 / Nov 25: **94.8 / 92.7** (Qwen model card)
- IMOAnswerBench: **80.9** (Qwen model card)
- AA-LCR: **68.7** (Qwen model card)
- CritPt v2: **no verified public score found** (not listed in fetched card table)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **76.4** (Qwen model card)
- SWE-bench Multilingual: **69.3** (Qwen model card)
- LiveCodeBench v6: **83.6** (Qwen model card)
- Terminal Bench 2: **52.5** (Qwen model card)
- SecCodeBench: **68.3** (Qwen model card)

Long context:

- AA-LCR: **68.7** (Qwen model card)
- LongBench v2: **63.2** (Qwen model card)
- Native context 262k, extensible to ~1M with RoPE scaling (Qwen model card)

Multimodal:

- MMMU: **85.0** (Qwen model card)
- MMMU-Pro: **79.0** (Qwen model card)
- MathVista (mini): **90.3** (Qwen model card)
- RealWorldQA: **83.9** (Qwen model card)
- MMStar: **83.8** (Qwen model card)
- VideoMME (w/ sub): **87.5** (Qwen model card)
- OCRBench: **93.1** (Qwen model card)

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on the accessible vendor-reported benchmarks above (not official cross-vendor scores). Overall = mean of Tool use, Reasoning, Context window, Multimodal, Coding.

- **Tool use: 78/100.** Strong agentic/tool-use evidence: BFCL-V4 72.9, TAU2-Bench 86.7, VITA-Bench 49.7, MCP-Mark 46.1, Tool Decathlon 38.3, plus solid OSWorld-Verified 62.2 and Terminal Bench 2 52.5; competitive but not absolute frontier on hardest agent suites.
- **Reasoning: 84/100.** High reasoning/knowledge performance: MMLU-Pro 87.8, GPQA 88.4, AIME26 91.3, HMMT results ~93-95, HLE 28.7 / HLE-Verified 37.6; strong overall though HLE remains challenging.
- **Context window: 88/100.** 262k native context with extensibility to ~1M and solid long-context benchmarks (LongBench v2 63.2, AA-LCR 68.7); large practical context tier.
- **Multimodal: 84/100.** Broad and strong vision-language results (MMMU 85.0, MMMU-Pro 79.0, MathVista 90.3, MMStar 83.8, VideoMME 87.5, OCRBench 93.1) with image/video understanding support; excellent multimodal capability.
- **Coding: 80/100.** Strong coding/agentic coding evidence: SWE-bench Verified 76.4, SWE-bench Multilingual 69.3, LiveCodeBench v6 83.6, SecCodeBench 68.3, Terminal Bench 2 52.5; near-frontier in many coding tasks.
- **Cost efficiency: 65/100.** Open-weights model with hosted pricing varying by provider (often moderate for a 397B MoE class); efficient active parameter count (17B) helps serving economics, but not free.
- **Overall Score: 83/100.** Mean of five non-cost dims `(78+84+88+84+80)/5 = 82.8`, rounded half-up to 83.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (Hugging Face model card, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-397B-A17B](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Artificial Analysis — Qwen3.5 397B A17B (Reasoning)](https://artificialanalysis.ai/models/qwen3-5-397b-a17b)
  - [OpenRouter — qwen/qwen3.5-397b-a17b](https://openrouter.ai/qwen/qwen3.5-397b-a17b)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
