# DeepSeek V4 Vision Exp — Evaluation Report

**Model:** DeepSeek V4 Vision Exp (`opencode/deepseek-v4-vision-exp`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** DeepSeek V4 Vision Exp (vendor: DeepSeek-V4-Flash-Vision-Exp)
**Short:** DeepSeek's experimental native multimodal vision-language MoE model designed for multi-modal code understanding, UI layout reasoning, and image-to-code generation.
**Provider:** DeepSeek — API model `deepseek-v4-flash-vision-exp` (experimental, since 2026-08-21); open weights MIT on Hugging Face `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` (2026-08-31). Repo route `opencode/deepseek-v4-vision-exp` is the OpenCode gateway id.
**Release date:** 2026-08-21 (API); 2026-08-31 (open weights).
**Architecture:** V4-Flash MoE backbone (284B text lineage; vision package ≈304.6B total, 256 experts, 6 active per token, FP4 experts, ~168GB) + vision encoder + aligner; DFlash attention, Hyper-Connections, fused DSpark draft module. Built on the V4-Flash-0731 text checkpoint.
**Context window:** 1,000,000 in / 384K out — inherits the V4-Flash line's native 1M context (documented for the V4 Flash family; vLLM recipe confirms 1M). Note: repo meta.json lists 200K, which conflicts with the official V4 Flash documentation; scored on the documented 1M.
**Modalities:** Text + image in (JPEG/PNG/GIF/WebP, ≤384 tokens/image, ≤600 images/request) → text out. No video/audio input; no image generation.
**Pricing:** Billed at V4-Flash rates with no vision premium: $0.14/M input (miss), $0.0028/M cache-hit, $0.28/M output. [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available in this ecosystem.

### Raw benchmarks found

**Official vendor scores (DeepSeek changelog 2026-08-21; DeepSeek Harness, minimal mode, max effort, top_p=0.95, temp=1.0):**
- Terminal Bench 2.1: **83.9** (text-only V4-Flash-0731: 82.7)
- NL2Repo: **57.7** (text Flash: 54.2)
- DeepSWE: **59.3** (text Flash: 54.4)
- DSBench-Hard: **63.6**
- AutomationBench (Public): **25.7**
- ApexBench Pass@1: **36.5** (text Flash ignores visual elements)
- Agents' Last Exam: **27.3**
- Chartography: **64.3**
- ZeroBench Pass@5: **35.0**

**Text-backbone reference (V4-Flash-Max, xhigh; openfluxhub Pro-vs-Flash, Apr 2026):**
- SWE-bench Verified **79.0**, LiveCodeBench **91.6**, MMLU-Pro **86.2** — model card states text agent/reasoning/world-knowledge is "on par with official V4-Flash."

**Vendor claim (directional):** multimodal agent capability "close to Opus-4.8."

**Gaps:** No independent re-runs found; no GPQA/HLE published for the vision SKU; no retrieval/synthesis measurement at 1M; AutomationBench 25.7 is weak; ALE 27.3 and ZeroBench 35.0 show visual-tool loops still trail text-only agentic strength.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal Bench 2.1 83.9 (top-decile agentic band, just under the 88% → 90–100 line), NL2Repo 57.7, and measurable multimodal-agent gains (ApexBench 36.5, ALE 27.3 vs. text Flash which ignores vision). Held back by AutomationBench Public 25.7 and the still-mid 27–37% visual-agenic loops.
- **Reasoning: 78/100.** Inherits V4-Flash's text backbone (model card: "on par with V4-Flash" on reasoning and world knowledge; Flash-Max MMLU-Pro 86.2). No GPQA/HLE published for the vision SKU; Flash trails Pro on deep factual recall (SimpleQA gap) and long-horizon tool work, capping this below the Pro/flagship tier.
- **Context window: 88/100.** Documented native 1M input / 384K output inherited from the V4 Flash line (DeepSeek: 1M costs ~27% of V3.2's FLOPs, ~10% of KV cache). No independent long-context retrieval/synthesis measurement found for the vision SKU, so scored below the evidence-backed 90+.
- **Multimodal: 40/100.** Genuine native image input (encoder-based, 384 tokens/image, up to 600 images/request) with solid chart understanding (Chartography 64.3) and image-to-code use cases, but text-only output, no video/audio, and weak visual-agent loops (ALE 27.3, ZeroBench 35.0, AutomationBench 25.7).
- **Coding: 72/100.** DeepSWE 59.3 (a +4.9 gain over the text Flash), DSBench-Hard 63.6, NL2Repo 57.7, TB2.1 83.9, plus text-backbone SWE-V 79.0 / LCB 91.6; the headline differentiator is multimodal code understanding and image-to-code generation. DeepSWE 59.3 sits below the 70+ tier that tops this cohort.
- **Cost efficiency: 96/100.** $0.14/$0.28 per 1M at native 1M context with near-zero cache-hit pricing, no vision premium (hard 384-token image cap), MIT open weights, and a free OpenCode Zen tier in this ecosystem — the cheapest 1M-multimodal option found anywhere in the audit.
- **Overall Score: 72/100.** Half-up mean of (80 + 78 + 88 + 40 + 72) / 5 = 71.6.

### Why not higher
Two caps dominate: Reasoning 78 (Flash-class backbone, no published GPQA/HLE for the vision SKU) and Multimodal 40 (image-in only, no video/audio, and 25–37% on visual-agent benchmarks). The model's real strength — 1M context at $0.14/$0.28 with native image understanding — is fully captured in Cost 96 and Context 88, but the rubric's five-dimension mean keeps a Flash-tier model below the frontier cohort's 77.9 average.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
