# Qwen 3.5 27B — findings by GLM 5.3 Flash

- Source: Qwen (`Qwen/Qwen3.5-27B`), open weights, Apache-2.0
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba Qwen's mid-size dense (27B) member of the Qwen3.5 generation — a unified vision-language foundation model with a Gated DeltaNet hybrid layout and native multimodal input. Top use case: self-hostable multimodal agent/coding model that approaches flagship-class quality at a fraction of the size.
- **Provider / access:** open weights on Hugging Face (`Qwen/Qwen3.5-27B`); OpenRouter Chat Completions route `qwen/qwen3.5-27b` (verified live 2026-10-21); self-host via vLLM / SGLang / KTransformers / Transformers. Alibaba Model Studio's recommended-models page (checked 2026-10-21) lists hosted Qwen3.5 family tiers but not a dedicated 27B SKU.
- **Release / knowledge:** Qwen3.5 generation release (2026); exact day not verified from the card. Knowledge cutoff not stated on the card.
- **IDs:** `Qwen/Qwen3.5-27B` (weights); `qwen/qwen3.5-27b` (OpenRouter). No Free ID verified on OpenCode Zen.
- **Context window:** 262,144 native, extensible to 1,010,000 via YaRN (verified from official HF model card config/serving docs). Max output sampled up to 81,920 in card examples.
- **Modalities:** image + video + text input, text output (image-text-to-text pipeline tag); thinking mode by default with `enable_thinking: false` switch; tool calls (qwen3_coder parser); JSON via response_format. No audio input on this card.
- **Pricing (as of 2026-10-21):** no verified public hosted pricing found on the three sources checked (HF card, OpenRouter page, Alibaba Model Studio recommended-models). Weights are Apache-2.0, so self-hosting cost is hardware-only (dense 27B). Treated as provisional below.
- **Architecture:** dense 27B (64 layers, hidden 5120), hybrid layout 16 × (3 × Gated DeltaNet → FFN → 1 × Gated Attention), MTP trained; unified vision encoder (early-fusion multimodal training); open weights Apache-2.0.

### Raw benchmarks found

All numbers from the official Qwen HF model card (`huggingface.co/Qwen/Qwen3.5-27B`, thinking mode unless noted), cross-checked against the model's OpenRouter listing (route/capabilities only — no independent benchmark numbers found there).

Agent / tool use:

- BFCL-V4: **68.5** (HF card; GPT-5-mini 55.5, 122B-A10B 72.2)
- TAU2-Bench: **79.0%** (HF card, official setup with Opus-4.5-card airline fixes)
- VITA-Bench: **41.9** (HF card — best of the compared mid-size group)
- DeepPlanning: **22.6** (HF card)
- HLE w/ tool (search agent): **48.5** (HF card)
- Browsecomp: **61.0%**; Browsecomp-zh: **62.1%** (HF card)
- WideSearch: **61.1** (HF card, 256k context, no context management)
- Seal-0: **47.2** (HF card)
- Terminal Bench 2: **41.6%** (HF card)
- OSWorld-Verified: **56.2**; AndroidWorld: **64.2**; ScreenSpot Pro: **70.3** (HF card, visual agent)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (HF card)
- HLE w/ CoT: **24.3%** (HF card)
- MMLU-Pro: **86.1**; MMLU-Redux: **93.2**; SuperGPQA: **65.6** (HF card)
- AA-LCR: **66.1** (HF card)
- HMMT Feb 25: **92.0**; HMMT Nov 25: **89.8** (HF card)
- IFEval: **95.0**; IFBench: **76.5** (HF card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (AA model page 404 on the id checked 2026-10-21)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **72.4%** (HF card)
- LiveCodeBench v6: **80.7%** (HF card)
- CodeForces: **1899** (HF card, own query set)
- OJBench: **40.1**; FullStackBench en: **60.1** (HF card)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 66.1, LongBench v2 60.6 (262K window; HF card); no MRCR/RULER/GraphWalks reported

### Normalized scores (1–100)

- **Tool use: 78/100.** TAU2-Bench 79.0 and BFCL-V4 68.5 with best-in-comparison VITA-Bench 41.9 and solid search-agent results (Browsecomp 61.0) — strong agentic stack capped by Terminal Bench 2 41.6 and missing third-party agent-harness confirmation.
- **Reasoning: 82/100.** GPQA Diamond 85.5 and HMMT 92.0 near flagship level, but HLE w/ CoT 24.3 keeps it below the frontier tier.
- **Context window: 85/100.** 262K native with 1.01M YaRN extension verified from the card; retrieval numbers (AA-LCR 66.1) are good but not top-tier.
- **Multimodal: 82/100.** Native image+video input with excellent vision scores (MMMU 82.3, MathVision 86.0, VideoMME 87.0, ScreenSpot Pro 70.3); no audio input/output caps it.
- **Coding: 78/100.** SWE-bench Verified 72.4 and LCB v6 80.7 match GPT-5-mini-class; CodeForces 1899 and Terminal Bench 41.6 cap it below the flagship coding tier.
- **Cost efficiency: 80/100.** No verified hosted pricing found; scored provisionally on Apache-2.0 open weights + dense 27B self-host economics (moderate VRAM, high throughput via hybrid DeltaNet layout). Re-score when a hosted price is published.
- **Overall Score: 81/100.** Mean of the five non-cost dims (78+82+85+82+78)/5. Best fit: self-hosted multimodal coding/agent workhorse where flagship API quality is not required.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-21
- Method: public internet research (official HF model card, OpenRouter model page, Alibaba Model Studio catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
