# GLM 5.2 Coding — findings by MiniMax M3.1 Flash

- Source: Z.ai (Zhipu) (GLM-5.2), `glm-5.2`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding — **identity note: no distinct "GLM-5.2-Coding" SKU exists**
- **Short description:** **ID correction.** Z.ai has never published a "GLM-5.2-Coding" model: their pricing page, docs index, blog, Hugging Face org, OpenCode Zen catalogue, models.dev and OpenRouter all list only GLM-5.3 / 5.3-Flash / 5.3-FlashX / **GLM-5.2** / 5.1 / 5.0, and BenchLM has no `glm-5-2-coding` page (404). The closest real model is the base **GLM-5.2** (`glm-5.2` on Z.ai, OpenCode Zen and OpenRouter `z-ai/glm-5.2`; HF `zai-org/GLM-5.2`), and this report scores that model. "Coding" strings in the ecosystem are *plan* names (`zai-coding-plan`, `zhipuai-coding-plan`), not model ids. The repo's claimed "SWE-bench 78.7%" for this id could not be verified in any source — Z.ai publishes no SWE-bench Verified for GLM-5.2 and Vals AI measured 82.8%.
- **Provider / access:** Z.ai platform (`glm-5.2`), OpenCode Zen `opencode/glm-5.2` (**$1.40/M in, $4.40/M out, $0.26/M cached**), OpenRouter `z-ai/glm-5.2`, Hugging Face `zai-org/GLM-5.2` (MIT licence, self-hostable).
- **Release / knowledge:** GLM-5.2 released **June 2026** (AA release date). Knowledge cutoff not published.
- **IDs:** `glm-5.2` (Z.ai / Zen / models.dev), `z-ai/glm-5.2` (OpenRouter), `zai-org/GLM-5.2` (HF). There is no `glm-5.2-coding` id on any provider.
- **Context window:** **1,000,000** tokens (models.dev opencode entry), max output **131,072**; AA lists 1.0M. `max_position_embeddings` on the HF config is 1,048,576.
- **Modalities:** text in / text out only; reasoning effort none/xhigh/high (default high) on the API.
- **Pricing (as of 2026-10-20):** **$1.40/M in, $4.40/M out, $0.26/M cached** (Z.ai pricing page and OpenCode Zen; cached storage free for a limited time).
- **Architecture:** MoE, ~355B total / 32B active (same base family as GLM-5.3), 1M context, **MIT licence** (unlike GLM-5.3's custom licence).

### Raw benchmarks found

> All numbers are base GLM-5.2 (Z.ai card/blog, Vals AI, Artificial Analysis, BenchLM). Vendor and independent agentic numbers conflict and are both listed.

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (Z.ai card, Terminus-2 harness; 82.7% best harness) vs **77.9%** (AA) vs **67.8%** (Vals AI) — conflict flagged
- Tau2-bench: **99.12%** (AA) — the figure usually attached to the "GLM-5.2 coding" claim · Tau3-Banking: **34.6%** (AA)
- GDPval-AA: **1372.01** (AA) · GDPval all-pass: not published for 5.2
- MCP Atlas: **76.8%** (BenchLM) · Toolathlon: **48.2%** (BenchLM) · HLE with tools: **54.7%** (Z.ai card)
- Terminal-Bench 3.0: **4.6%** (BenchLM) · ResearchClawBench: **20.7%** (BenchLM) · AutomationBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Z.ai card) vs **89.49%** (AA) vs **85.6%** (Vals AI)
- HLE: **40.5%** (no tools) / **54.7%** (with tools) (Z.ai card) vs **41.1%** (AA) · AA-LCR: **78.3%** (AA) · CritPt: **20.9%** (AA)
- Artificial Analysis Intelligence Index: **33.71** (AA), #16/121 among open-weight models; output speed **87.8 tok/s**
- MMLU-Pro: **86.7%** (Vals AI) · AIME 2026: **99.2%** (BenchLM, #1 of its cohort) · HMMT Feb 2026: **92.5%**
- FrontierMath v2 Tiers 1–3: **59.2%** · Tier 4: **29.3%** (BenchLM) · MMAnswerBench: **91.0%** (BenchLM)

Coding:

- SWE-bench: **82.8%** (Vals AI, independent) — no SWE-bench Verified number is published by Z.ai for GLM-5.2
- SWE-bench Pro: **62.1%** (Z.ai card) · LiveCodeBench: **69.5%** (Vals AI) · ProgramBench: **63.7%** (BenchLM)
- SciCode: **51.16%** (AA) · Terminal-Bench 2.1: 81.0% (vendor) / 67.8% (Vals AI)

Long context:

- No MRCR / RULER retrieval measurement published for GLM-5.2 despite the 1M window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 81.0% (vendor), τ²-bench 99.1%, MCP Atlas 76.8% and GDPval-AA 1372 are frontier-adjacent; Toolathlon 48.2% and the Vals Terminal-Bench run of 67.8% keep it below 85.
- **Reasoning: 84/100.** GPQA 85.6–91.2%, HLE 40.5–54.7%, MMLU-Pro 86.7%, AIME 2026 99.2% and FrontierMath T1–3 59.2% are frontier-tier numbers, capped by an AA Intelligence Index of 33.7 (open-weight cohort) and no published AA GPQA row.
- **Context window: 92/100.** 1,000,000 tokens with 131,072 max output is the top tier, discounted because no long-context retrieval measurement exists.
- **Multimodal: 15/100.** Text-in/text-out only; Z.ai's vision models (GLM-4.6V, GLM-OCR) are separate products.
- **Coding: 80/100.** SWE-bench 82.8% (independent), SWE-bench Pro 62.1%, LiveCodeBench 69.5% and ProgramBench 63.7% are strong mid-to-high band coding results, held back by the weak Terminal-Bench 3.0 score (4.6%) and the absence of a DeepSWE number.
- **Cost efficiency: 78/100.** $1.40/M in and $4.40/M out at 1M context with a $0.26/M cache read is mid-market — good value next to the Claude tier, not next to the $0.30/M open weights.
- **Overall Score: 70/100.** Mean of the five quality dims = (78 + 84 + 92 + 15 + 80) / 5 = 69.8 → **70**. Best fit: long-horizon software-engineering agents on a self-hostable MIT-licensed MoE — and note that the id in this folder has no separate "coding" SKU, so `glm-5.2` is the model to actually request.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Z.ai pricing page, docs index, blog, Hugging Face org and cards, Artificial Analysis, BenchLM + Vals AI, OpenRouter API, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
