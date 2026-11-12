# DeepSeek-V4-Flash — findings by Ernie 5.5 Flash

- Source: DeepSeek/DeepSeek-V4-Flash (`deepseek-v4-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash
- **Short description:** DeepSeek's fast V4 lane (released 2026-04-24, serving build 0731) for economical reasoning, coding and long-context work, with a 1M context and 384K output.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash`), Azure, OpenRouter, GmiCloud, Jalapeno, Unorouter, plus ~60 routes. Open weights.
- **Release / knowledge:** 2026-04-24 (models.dev; BenchLM tracks the 0731 serving build); knowledge cutoff 2025-05 (models.dev).
- **IDs:** `deepseek-v4-flash`, `deepseek-ai/DeepSeek-V4-Flash`, `deepseek-v4-flash-0731`, `azure/deepseek-v4-flash`.
- **Context window:** 1,000,000 tokens (1,048,575 on GmiCloud); max output 384,000.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.19 / $0.51 per 1M input/output on Azure; $0.14/$0.28 (Jalapeno), $0.112/$0.224 (GmiCloud), $0.0625/$0.125 (Unorouter grey market — not a reference price).
- **Architecture:** open-weight sparse MoE (DeepSeek).

### Raw benchmarks found

> Figures are from BenchLM's profile of the current serving build ("DeepSeek V4 Flash 0731").

Agent / tool use:

- Terminal-Bench 2.1: **82.7%**; Terminal-Bench 2.0: **56.9%**
- DSBench-FullStack (DeepSeek): **68.7%**; DSBench-Hard: **59.6%**; OpenHarmony Bench v1.0: **53.8%**
- Terminal-Bench 4.x / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- Codeforces rating: **3052.0** (competitive-programming level)
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for this build
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench (Vals AI): **87.3%**; LiveCodeBench Pass@1 with CoT: **91.6%**
- SWE-bench Verified: **79%**; SWE-bench Pro: **52.6%**; SWE Multilingual: **73.3%**
- DeepSWE: **54.4%**; NL2Repo: **54.2%**; VulcanBench v3: **88.4%**

Long context:

- 1M context with 384K output declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.1 82.7% is strong, DSBench-FullStack 68.7% mid, TB2.0 56.9% below the current baseline; no Terminal-Bench 4.x or OSWorld row was published.
- **Reasoning: 70/100.** Codeforces 3052 and LiveCodeBench CoT 91.6% show real problem-solving strength, but no GPQA/HLE/ARC/FrontierMath row exists to confirm knowledge-level reasoning.
- **Context window: 100/100.** 1,000,000 tokens with 384,000 max output.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out) — no image, audio or video input.
- **Coding: 80/100.** LiveCodeBench (Vals) 87.3%, VulcanBench 88.4% and SWE-bench Verified 79% are strong for the price; DeepSWE 54.4% and SWE-bench Pro 52.6% are mid.
- **Cost efficiency: 95/100.** $0.19/$0.51 per 1M with open weights — among the cheapest 1M-context coding routes.
- **Overall Score: 67.4/100.** Best fit for self-hosted, high-volume text coding at 1M context; the text-only modality keeps it well below the multimodal flagships.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (DeepSeek V4 Flash announcement and model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek-V4-Flash — Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)
  - [DeepSeek V4 Flash 0731 benchmarks & sources — BenchLM](https://benchlm.ai/models/deepseek-v4-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `DeepSeek_4_Flash_v2.md`, using the same headings.