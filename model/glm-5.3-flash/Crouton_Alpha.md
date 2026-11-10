# GLM-5.3 Flash — findings by Crouton Alpha

- Source: Z.AI/GLM-5.3 Flash
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Flash
- **Short description:** Z.AI's open-weights Flash MoE for cheap 1M-context agentic coding; top use case is high-throughput terminal automation.
- **Provider / access:** Z.AI API, OpenCode Zen `opencode/glm-5.3-flash` via `https://opencode.ai/inference/openai/v1/chat/completions`.
- **Release / knowledge:** 2026 (Z.AI launch post).
- **IDs:** `z-ai/glm-5.3-flash`, `opencode/glm-5.3-flash` (paid; Free route exists as tier reuse).
- **Context window:** 1M total (BenchLM).
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-09):** $0.15 input / $0.50 output per 1M (Zen). Paid cheap tier; Free liquidity route $0 on Zen for limited time.
- **Architecture:** MoE open weights (Z.AI Flash family), parameter count not separately disclosed on BenchLM.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **84.3%** (Z.AI launch); Vals **62.9%**
- GDPval-AA **1773** (launch post)
- Toolathlon-Verified **78.4%** (launch post)
- AA Tau3 **47.2%** (AA)
- AutomationBench **48.8%** (launch post)

Reasoning / knowledge:

- GPQA Diamond (Vals) **86.4%** (Vals); MMLU-Pro **86.1%** (Vals)
- HLE w/ tools **55.3%** (launch post)
- FrontierMath v2 1-3 **55.789%** (Epoch)
- Intelligence Index: no verified public score found on BenchLM cut (conservative note).

Coding:

- DeepSWE **63.4%** (launch post)
- SWE-bench (Vals) **92.0%** (Vals); LiveCodeBench (Vals) **80.5%**
- FrontierSWE v2 **18.1%** (Proximal) — drag.

Long context:

- 1M native; LCR/MRCR: no verified public score found.

Multimodal:

- CharXiv **89.4%** (launch post)
- MMVU **80.5%** (launch post) — suggests video input
- ExtractBench **80.75%** (LlamaIndex)

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 84.3%, GDPval 1773, Toolathlon 78.4% are frontier for Flash; Vals 62.9% variance caps it.
- **Reasoning: 88/100.** GPQA 86.4%, MMLU-Pro 86.1%, HLE w/tools 55.3%, FrontierMath 55.8% strong; no LCR/Index rows — capped below 90.
- **Context window: 85/100.** 1M top tier, but no retrieval rows — capped below 95.
- **Multimodal: 74/100.** Image (+ video via MMVU 80.5%) in, text out; CharXiv 89.4% excellent.
- **Coding: 92/100.** SWE Vals 92%, LiveCode 80.5%, DeepSWE 63.4% meet frontier coding refs; capped by FrontierSWE v2 18.1%.
- **Cost efficiency: 98/100.** $0.15/$0.50 per 1M (Zen) — near $0 anchor (methodology $0.10/$0.20 ≈ 97–99).
- **Overall Score: 86/100.** Mean (92+88+85+74+92)/5 = 86.2 → 86; best-fit cheapest frontier coder.

---

## Signature

- Provided by: **Crouton Alpha (opencode/crouton-alpha-free)** — 2026-11-09
- Method: public internet research via Z.AI launch post, Hugging Face card, BenchLM; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.AI: GLM-5.3-Flash launch post](https://z.ai/blog/glm-5.3-flash)
  - [Hugging Face — zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [BenchLM — GLM-5.3-Flash](https://benchlm.ai/models/glm-5-3-flash)
  - [OpenCode Zen Model Catalog](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
