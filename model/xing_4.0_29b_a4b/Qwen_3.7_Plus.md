# Xing 4.0 29B A4B — findings by Qwen 3.7 Plus

- Source: China Telecom AI (`xing_4.0_29b_a4b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B A4B
- **Short description:** China Telecom's open-weight 29B/4B-active sparse MoE trained entirely on Ascend NPUs. Text-only, 256K native context (extensible to 512K via YaRN), optimized for coding and agentic tasks. First model of this scale trained on Chinese AI hardware. Apache 2.0 license.
- **Provider / access:** Open weights on Hugging Face (`XingChen-AGI/Xing4.0-29B-A4B-FP8`); ModelScope; OpenCode Zen `opencode/xing_4.0_29b_a4b` (free promotional tier).
- **Release / knowledge:** 2026-09-16; knowledge cutoff not publicly stated.
- **IDs:** `opencode/xing_4.0_29b_a4b` (OpenCode Zen).
- **Context window:** 262,144 tokens native (256K); extensible to 524,288 tokens (512K) via YaRN RoPE scaling (per Open LLM Radar).
- **Modalities:** Text in/out only; reasoning mode enabled; tool calling supported; no multimodal input.
- **Pricing (as of 2026-10-20):** Free promotional OpenCode Zen tier; Apache 2.0 open weights (self-host free); ~$0.15/$0.60 per 1M estimated based on similar models.
- **Architecture:** Sparse MoE, 29B total / 4B active per token; 64 routed experts with 4 active plus 1 shared expert; 40 layers; mHC + MLA + MTP architecture; trained on Ascend 910C clusters with MindSpore framework; open weights under Apache 2.0.

### Raw benchmarks found

> Sources: Xing4.0-29B-A4B model card (ModelScope), Open LLM Radar (open-llm-radar.com/models/xing40-29b-a4b, 2026-10-20), MindStudio blog. Coverage: 9 benchmarks reported — moderate coverage for a specialized coding model.

Agent / tool use:

- τ³-bench: **64.63%** (ModelScope model card — strong)
- Claw-Eval: **76.55%** avg of 3 runs (ModelScope model card — solid)
- Terminal-Bench 2.1: **57.5%** avg of 3 runs (ModelScope model card — moderate)
- DeepResearchBII: **60.8%** OpenCode harness, Exa MCP enabled (ModelScope model card)

Reasoning / knowledge:

- AIME 2026: **90.0%** avg of 5 runs (ModelScope model card — exceptional math)
- IFBench: **69.67%** (ModelScope model card)
- AA-LCR: **61.0%** (Open LLM Radar — decent long-context reasoning)

Coding:

- SWE-bench Verified: **75.0%** SWE-agent harness, 210K context (ModelScope model card — strong)
- SWE-bench Multilingual: **66.0%** (ModelScope model card)
- Terminal-Bench 2.1: **57.5%** (ModelScope model card)
- Claw-Eval: **76.55%** (ModelScope model card)

Multimodal & Grounded:

- Text-only model. No multimodal benchmarks.

Long context:

- AA-LCR: **61.0%** at 256K context (Open LLM Radar)
- Native 256K context, extensible to 512K via YaRN

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 65/100.** τ³-bench 64.63% is strong. Claw-Eval 76.55% is solid. Terminal-Bench 2.1 57.5% is moderate. DeepResearchBII 60.8% is decent. Capped by moderate Terminal-Bench and limited benchmark coverage.
- **Reasoning: 68/100.** AIME 2026 90.0% is exceptional math reasoning. IFBench 69.67% is solid instruction following. AA-LCR 61.0% is decent. Capped by limited reasoning benchmark coverage and moderate AA-LCR.
- **Context window: 75/100.** 256K native tokens — solid. Extensible to 512K via YaRN. AA-LCR 61.0% confirms decent long-context reasoning. Docked 25 for not reaching 1M tier and moderate AA-LCR.
- **Multimodal: 15/100.** Text-only model. No image/audio/video input.
- **Coding: 72/100.** SWE-bench Verified 75.0% is strong. SWE-bench Multilingual 66.0% is solid. Claw-Eval 76.55% is good. Terminal-Bench 2.1 57.5% is moderate. Capped by moderate Terminal-Bench and limited coding benchmark diversity.
- **Cost efficiency: 95/100.** Free promotional tier on OpenCode Zen; Apache 2.0 open weights; only 4B active params — extremely efficient to self-host on consumer GPUs (RTX 3090/4090 at 4-bit quantization).
- **Overall Score: 59/100.** Mean of five non-cost dims: (65 + 68 + 75 + 15 + 72) / 5 = 59.0, half-up = 59. Strong open-weight coding model: SWE-bench Verified 75.0%, exceptional AIME 2026 (90.0%), 256K context, first model of this scale trained entirely on Ascend NPUs — at near-zero cost. However, held back by text-only modality, moderate Terminal-Bench (57.5%), limited benchmark coverage, and specialized nature (optimized for Chinese AI hardware ecosystem). Best fit for: cost-sensitive coding agents, self-hosted deployments on consumer GPUs, and projects requiring domestic Chinese AI hardware compatibility.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across Xing4.0 model card on ModelScope, Open LLM Radar, and MindStudio blog; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
