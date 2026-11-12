# DeepSeek V4.1 Flash 1017 — findings by Ernie 5.5 Flash

- Source: DeepSeek/DeepSeek V4.1 Flash 1017 (`deepseek-v4.1-flash-1017`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** The October 17, 2026 update of DeepSeek V4.1 Flash with improved reasoning, coding, agentic tasks and (per the vendor) visual understanding — the current serving build of the V4.1 Flash line.
- **Provider / access:** DeepSeek API, Mistral router (`mistral/deepseek-v4-1-flash-1017`), OpenRouter, plus ~46 routes. Open weights.
- **Release / knowledge:** 2026-10-17; knowledge cutoff 2025-05 (models.dev).
- **IDs:** `deepseek-v4.1-flash-1017`, `deepseek-ai/DeepSeek-V4.1-Flash-1017`.
- **Context window:** 1,048,576 tokens; max output 128,000 (384K on some V4 routes).
- **Modalities:** models.dev lists **text in / text out** for this build, while the vendor description mentions "visual understanding" — treat the modality as conflicting/unverified. Reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.30 / $1.20 per 1M input/output; cache read $0.007.
- **Architecture:** open-weight sparse MoE (DeepSeek; 284B/13B per the V4 Flash line).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (best verified TB2.1 row in this dataset)
- terminalBench3: **30%**; ProgramBench: **29.1%**; Bug Hunt Bench: **39.1 fixes**

Reasoning / knowledge:

- Codeforces rating: **3471.0**
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for the 1017 build
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- DeepSWE: **77.0%**; ScarfBench (Java migration): **69.0%**; NL2Repo: **68.2%**
- FrontierCode 2.0: **19.3%** (weak); OpenHarmony Bench v1.0: **60.3%**

Long context:

- 1M context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 90.6% is the best verified TB2.1 row here, but terminalBench3 30% and ProgramBench 29.1% show the newer harnesses are weak.
- **Reasoning: 75/100.** Codeforces 3471 is strong, but no GPQA/HLE/ARC/FrontierMath row was published.
- **Context window: 100/100.** 1,048,576 tokens.
- **Multimodal: 15/100.** models.dev lists text-only for this build (vendor copy claims visual understanding) — scored at the catalog floor and flagged for verification.
- **Coding: 85/100.** DeepSWE 77.0%, ScarfBench 69.0% and NL2Repo 68.2% are the best verified coding cluster outside the very top; FrontierCode 2.0 19.3% is the weak row.
- **Cost efficiency: 92/100.** $0.30/$1.20 per 1M with $0.007 cache reads and open weights.
- **Overall Score: 71.4/100.** Best fit for self-hosted coding agents at 1M; the modality conflict and missing reasoning rows keep it out of the top tier.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (DeepSeek V4.1 Flash 1017 model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek V4.1 Flash 1017 — Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [DeepSeek V4.1 Flash 1017 benchmarks & sources — BenchLM](https://benchlm.ai/models/deepseek-v4-1-flash-1017)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `DeepSeek_4.1_Flash_1017_v2.md` next to this file.