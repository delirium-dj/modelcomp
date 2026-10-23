# GLM-5 — findings by DeepSeek 4.1 Flash

- Source: Z.ai / Zhipu AI (`z-ai/glm-5`, open weights `zai-org/GLM-5`, hosted as `opencode/glm-5`)
- Date: 2026-10-18 (UTC); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`glm-5`, 38 rows) computes an overall **54.81/100 (#71 of 228)** and re-confirms the prior pass. **No score change.**

## Model card

- **Name:** GLM-5
- **Short description:** Z.ai's February 2026 flagship open-weight foundation model for agentic engineering and long-horizon tasks — the base of the GLM-5.x line (5.1 / 5.2 / 5.3 are later, separate siblings). 744B-parameter MoE with DeepSeek Sparse Attention, MIT-licensed, text-first.
- **Provider / access:** Z.ai API (`glm-5`) and open weights (Hugging Face `zai-org/GLM-5`, ModelScope `ZhipuAI/GLM-5`); OpenRouter `z-ai/glm-5`; OpenCode route `opencode/glm-5`. OpenAI-compatible Chat Completions; tool calls, thinking mode, structured output.
- **Release / knowledge:** 2026-02-11/12; knowledge cutoff not published.
- **IDs:** `z-ai/glm-5`, `zai-org/GLM-5`, `opencode/glm-5` (no Free-tier ID).
- **Context window:** 200,000 input tokens (up to 202,752 confirmed in HLE-with-tools runs) / 131,072 max output (Z.ai docs; the scaffold `meta.json` 128K total is a generic placeholder).
- **Modalities:** text in / text out; native tool calls, thinking mode, structured output, and strong structured-document generation (.docx/.pdf/.xlsx in Agent mode). No native image/audio/video — the family routes those to separate V/vision models.
- **Pricing (as of 2026-10-18):** $1.00 / 1M input, $3.20 / 1M output, cached input $0.20 (Z.ai official). Token-heavy thinking mode raises effective cost; open weights allow self-hosting. Not a free tier.
- **Architecture:** 744B-parameter MoE, ~40B active (top-8 of 256 experts, ~5.9% sparsity), DeepSeek Sparse Attention, RoPE, SwiGLU; pre-trained on 28.5T tokens (up from 23T in GLM-4.x); MIT license. Trained on Huawei Ascend / MindSpore.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **56.2%** (Z.ai docs) — **60.7%** (WebCraft review, conflicting)
- Tau2-Bench (τ²-bench): **98.2%** (Artificial Analysis, via BenchLM) — **89.7%** (WebCraft, conflicting); τ³-bench **65.6%** (Qwen3.6-Plus table)
- BrowseComp: **62%** (Hugging Face model card) — **75.9%** (WebCraft, conflicting)
- MCP-Atlas: **31.1%** (Qwen3.6-Plus table); Claw-Eval **57.7%**; Toolathlon **38%**
- GDPval-AA: no verified public score found
- Vending Bench 2: **$4,432** end balance (Z.ai/WebCraft business simulation)

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Hugging Face model card + Qwen3.6-Plus table)
- HLE: **30.5%** no tools / **50.4%** with tools (Hugging Face model card)
- AA-LCR: **75.7%** (Artificial Analysis); LongBench v2 **60.8%**; AI-Needle **63.3%**
- CritPt: **2.0%** (Artificial Analysis)
- MMLU-Pro: **85.7%** (Qwen3.6-Plus table)
- Artificial Analysis Intelligence Index: **27.9%**; BenchLM overall **54.84/100, #69 of 954**
- AA-Omniscience Accuracy: **26.3%** / Hallucination Rate: **35.3%** (Artificial Analysis)
- AIME26 **95.8%**, HMMT Feb 2026 **86.4%** (Qwen3.6-Plus table)

Coding:

- SWE-bench Verified: **77.8%** (Z.ai docs) — **72.8%** (Arcee Trinity comparison table); SWE-bench Pro **55.1%**
- SWE-bench Multilingual: **73.3%**; SWE-Rebench **62.8%**; NL2Repo **35.9%**
- LiveCodeBench: no verified public score found; React Native Evals **74.8%** (via BenchLM)

Long context:

- LongBench v2 60.8% and AI-Needle 63.3% are the closest retrieval-style signals at 200K; no MRCR/RULER figure found.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 89.7–98.2%, terminal-Bench 2.0 56.2% and Vending Bench 2 autonomy are strong for an open model, capped by weak MCP-Atlas 31.1% and Toolathlon 38%.
- **Reasoning: 78/100.** GPQA Diamond 86.0% and HLE-with-tools 50.4% are solid, but AA-LCR 75.7%, AA Intelligence Index 27.9% and CritPt 2.0% keep it well below the frontier tier.
- **Context window: 70/100.** 200K input / 128K output maps to the 200K = 70 anchor; sparse attention keeps quality across the window but it does not reach the 500K–1M band.
- **Multimodal: 15/100.** Text-only natively (no image/audio/video); structured document generation is a tool-assisted capability, not true multimodality.
- **Coding: 82/100.** SWE-bench Verified 77.8% (72.8% independent) led open models at release, with Pro 55.1% and Multilingual 73.3%; no LiveCodeBench figure and weak NL2Repo 35.9% cap it.
- **Cost efficiency: 89/100.** $1.00/$3.20 with $0.20 cached input and MIT self-hosting is excellent value for a 744B-class model.
- **Overall Score: 65/100.** (78 + 78 + 70 + 15 + 82) / 5 = 64.6 → 65. Best fit: cost-sensitive long-horizon coding/agent pipelines and self-hosted enterprise text workloads.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (Z.ai docs, Hugging Face model card, BenchLM, Artificial Analysis, Qwen3.6-Plus table, WebCraft, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
