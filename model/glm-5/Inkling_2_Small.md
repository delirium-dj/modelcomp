# GLM-5 — findings by Inkling 2 Small

- Source: Z.AI (`glm-5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Z.AI's GLM-5 foundation model — open weights, non-reasoning variant (a separate reasoning SKU exists as GLM-5 (Reasoning)), positioned for coding and agentic workloads. 200K context; the base rung of the GLM-5 family.
- **Provider / access:** Open weights on Hugging Face (`zai-org/GLM-5`); Z.AI API (`docs.z.ai/guides/llm/glm-5`); OpenRouter; vLLM/SGLang.
- **Release / knowledge:** 2025–2026 (GLM-5 generation); knowledge cutoff not publicly stated.
- **IDs:** `zai-org/GLM-5` (HF); "z-ai/glm-5" (OpenRouter)
- **Context window:** 200,000 tokens; max output undisclosed.
- **Modalities:** text in → text out (GLM-5V-Turbo is the vision sibling, not this SKU); tool calls yes; non-reasoning (thinking NOT always-on; reasoning variant exists separately).
- **Pricing (as of 2026-11-10):** open weights — self-host free; hosted pricing varies by provider (Z.AI API, OpenRouter); no first-party price verified.
- **Architecture:** proprietary open MoE (parameter count not on card); "GLM-5" bailing-moe-class architecture per HF.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **98.2%** (Artificial Analysis tau2-bench leaderboard)
- Toolathlon: **38%**; MCP Atlas: **31.1%**; MCP-Tasks: **60.8%** (Qwen3.6-Plus comparison table, qwen.ai)
- τ³-bench: **65.6%**; Claw-Eval: **57.7%**; WideResearch: **69.8%** (same source)
- BrowseComp: **62%** (HF model card); Terminal-Bench 2.0: **56.2%** (Z.AI docs)
- Claw/APEX: APEX-Agents-AA **14.5%** (Artificial Analysis)
- HLE w/ tools: **50.4%** (HF model card)

Reasoning / knowledge:

- GPQA-D: **86.0%** (HF card / qwen.ai table)
- AIME26: **95.8%**; AIME25: **93.3%**; HMMT Feb 2025: **97.5%**; HMMT Feb 2026: **86.4%** (qwen.ai table; Arcee table)
- MMLU-Pro: **85.7%** (85.8% Arcee table)
- SuperGPQA: **66.8%**
- HLE: **30.5%** (AA-HLE **29.3%**)
- AA Intelligence Index: **27.9%**; BenchLM **54.45/100** (#75/1020)
- AA-LCR: **75.7%**; CritPt: **2.0%**
- IFEval: **92.6%**; AA-IFBench **72.3%**

Coding:

- SWE-bench Verified: **77.8%** (Z.AI docs); **72.8%** (Arcee table)
- SWE Multilingual: **73.3%**; SWE-bench Pro: **55.1%**; SWE-Rebench: **62.8%** (qwen.ai / SWE-Rebench)
- React Native Evals: **74.8%** (rn-evals)
- BenchLM ranks GLM-family top member GLM-5.3 at 61.19 (reference only)

Long context:

- AA-LCR: **75.7%** at 200K; LongBench v2: **60.8%**; AI-Needle: **63.3%**.

Multimodal:

- Text-only (GLM-5V-Turbo covers vision) — score 15 by the text-only rule.

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-bench 98.2% (AA) is best-in-class; MCP-Tasks 60.8%, τ³ 65.6%, WideResearch 69.8% corroborate; capped by MCP Atlas 31.1%, Toolathlon 38% and APEX-Agents-AA 14.5%.
- **Reasoning: 72/100.** HMMT/AIME up to 97.5% and GPQA-D 86.0% are frontier-adjacent; AA Index 27.9 and HLE 30.5% cap it.
- **Context window: 68/100.** 200K tokens; AA-LCR 75.7% and AI-Needle 63.3% — solid but not 1M-class.
- **Multimodal: 15/100.** Text-only (per SKU) — the mandatory text-only floor.
- **Coding: 75/100.** SWE-bench Verified 77.8% (Z.AI) / 72.8% (Arcee), Multilingual 73.3%, Rebench 62.8%; capped by SWE-Pro 55.1%.
- **Cost efficiency: 85/100.** Open weights, free self-host; hosted pricing unverified but historically GLM-tier cheap.
- **Overall Score: 61/100.** (74 + 72 + 68 + 15 + 75) / 5 = 60.8 → 61. Best fit: open-weight coding/tool-use automation at 200K context; text-only, not for vision.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Z.AI docs, HF GLM-5 model card, Artificial Analysis, qwen.ai and Arcee comparison tables, BenchLM, SWE-Rebench); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GLM-5 — Z.AI docs](https://docs.z.ai/guides/llm/glm-5)
  - [GLM-5 — Hugging Face model card](https://huggingface.co/zai-org/GLM-5)
  - [GLM-5 — BenchLM](https://benchlm.ai/models/glm-5)
  - [GLM-5 — Artificial Analysis](https://artificialanalysis.ai/models/glm-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
