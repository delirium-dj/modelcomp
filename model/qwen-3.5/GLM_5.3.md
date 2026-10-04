# Qwen3.5 — findings by GLM 5.3

- Source: Alibaba Qwen (`qwen/Qwen3.5-122B-A10B`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 (the generation's open-weights flagship: Qwen3.5-122B-A10B)
- **Short description:** Alibaba Qwen's Apache-2.0 multimodal flagship of the Qwen3.5 generation (March 2026) — a 122B-total / 10B-active MoE with a Gated DeltaNet hybrid architecture and a unified vision-language foundation, shipping alongside dense siblings (0.8B–27B) and the commercial Qwen3.5-Plus tier (tracked separately in this repo).
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-122B-A10B` (+ FP8 variant; a gated `Qwen/Qwen3.5` repo also exists), Alibaba Cloud Model Studio (DashScope compatible-mode), self-host via vLLM / SGLang / KTransformers. Not on OpenCode Zen (Zen carries the Qwen3.5-Plus tier instead).
- **Release / knowledge:** family released March 2026 (HF repos updated 2026-03-02 through 2026-04-24); blog `qwen.ai/blog?id=qwen3.5`. Knowledge cutoff not stated on the card.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (HF / vLLM / SGLang), `Qwen3.5-122B-A10B` (DashScope).
- **Context window:** 262,144 tokens native; extensible to 1,010,000 tokens via YaRN rope scaling (config change, not native).
- **Modalities:** text, image, and video in; text out; thinking mode by default (toggle via `enable_thinking`); native tool calls + MCP; multi-token prediction (MTP) trained; 201 languages.
- **Pricing (as of 2026-10-03):** open weights under Apache-2.0 — self-host at will; **no verified public per-token price found** for the official DashScope endpoint of this exact ID (the Qwen3.5-Plus tier at $0.20/$1.20 on Zen is a different product).
- **Architecture:** 122B total / 10B activated MoE — 256 experts (8 routed + 1 shared), 48 layers in a 12 × (3 × Gated DeltaNet → MoE, 1 × Gated Attention → MoE) hybrid layout, integrated vision encoder, Apache-2.0 license.

### Raw benchmarks found

> Vendor-reported table from the official Qwen3.5-122B-A10B model card (fetched 2026-10-03), comparing against GPT-5-mini 2025-08-07, GPT-OSS-120B, and Qwen3-235B-A22B.

Agent / tool use:

- Tau2-Bench: **79.5%** (official setup w/ airline-domain fixes; vs GPT-5-mini 69.8%, Qwen3-235B 58.5%)
- BFCL-V4: **72.2%** (vs GPT-5-mini 55.5%)
- Terminal Bench 2: **49.4%** (vs GPT-5-mini 31.9%, GPT-OSS-120B 18.7%)
- VITA-Bench: **33.6%**; DeepPlanning: **24.1%**
- OSWorld-Verified: **58.0%**; AndroidWorld: **66.4%**; ScreenSpot Pro: **70.4%**; TIR-Bench: **53.2** (with CI)
- GDPval-AA / Claw-Eval / Toolathon: **no verified public score found** (not in the vendor table)

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (vs GPT-5-mini 82.8%, Qwen3-235B 81.1%)
- HLE w/ CoT: **25.3%**; HLE w/ tool: **47.5%**
- HMMT Feb 25: **91.4%**; HMMT Nov 25: **90.3%**
- MMLU-Pro: **86.7%**; MMLU-Redux: **94.0%**; SuperGPQA: **67.1%**
- AA-LCR: **66.9%**; LongBench v2: **60.2%**
- IFEval: **93.4%**; IFBench: **76.1%**

Coding:

- SWE-bench Verified: **72.0%** (matching GPT-5-mini 72.0%)
- LiveCodeBench v6: **78.9%**
- CodeForces: **2100**; OJBench: **39.5%**; FullStackBench en: **62.6%**
- Terminal Bench 2: **49.4%** (also agentic coding; see above)

Long context:

- AA-LCR: **66.9%**; LongBench v2: **60.2%** — measured inside the 262K native window; no MRCR/RULER at the 1.01M YaRN extension.

Multimodal (vendor vision-language table):

- MMMU: **83.9**; MMMU-Pro: **76.9**; MathVision: **86.2**; Mathvista(mini): **87.4**
- OCRBench: **92.1**; AI2D: **93.3**; VlmsAreBlind: **96.7**
- VideoMME (w sub): **87.3**; MLVU: **87.3**; LVBench: **74.4**

### Normalized scores (1–100)

- **Tool use: 75/100.** Tau2-Bench 79.5% and BFCL-V4 72.2% lead the vendor comparison set, and OSWorld 58.0 / AndroidWorld 66.4 are solid; Terminal Bench 2 49.4% sits only in the mid band and no GDPval/Claw-Eval row exists, capping it below frontier.
- **Reasoning: 82/100.** GPQA Diamond 86.6% approaches the 90%+ frontier reference and HMMT ~91% is strong; HLE w/ CoT 25.3% is above the <10% mid band but below the 40%+ frontier reference, which caps it.
- **Context window: 72/100.** 262,144 native tokens sits in the 200K–500K tier (65–84) toward its lower half; the 1.01M figure requires YaRN scaling (not native), and measured long-context reasoning (AA-LCR 66.9%, LongBench v2 60.2%) is mid-tier.
- **Multimodal: 88/100.** Verified text + image + video input with a measured top-tier vision table (MMMU 83.9, MathVision 86.2, OCRBench 92.1, VlmsAreBlind 96.7, VideoMME 87.3) puts it at the top of the +video 75–90 band; no audio input or non-text output, so not 90+.
- **Coding: 74/100.** SWE-bench Verified 72.0% is just under the 74%+ frontier reference and LiveCodeBench v6 78.9% is strong; Terminal Bench 2 49.4% mid agentic-coding result caps it.
- **Cost efficiency: 85/100.** Apache-2.0 open weights with only 10B active parameters make serving cheap, but no verified public per-token price exists for the official API of this exact ID — provisional.
- **Overall Score: 78/100.** Half-up mean of the five quality dims (75+82+72+88+74)/5 = 78.2 → 78 — the strongest open-weights value pick of its generation for multimodal + agentic work at 262K context; verify DashScope pricing before high-volume production use.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-03
- Method: public internet research (official Hugging Face model card with the full vendor benchmark table, Hugging Face org catalog); scores are normalized 1–100 interpretations, not official vendor scores — benchmark rows are vendor-reported.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
