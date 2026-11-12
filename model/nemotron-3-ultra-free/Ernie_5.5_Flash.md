# Nemotron 3 Ultra (free) — findings by Ernie 5.5 Flash

- Source: NVIDIA/Nemotron 3 Ultra 550B-A55B (`nemotron-3-ultra-free`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra (free) — Nemotron 3 Ultra 550B-A55B
- **Short description:** NVIDIA's largest Nemotron 3 model (released 2026-06-04): a 550B-total / 55B-active hybrid Mamba-Transformer MoE for maximum open-weight reasoning and agent accuracy. `Free` is an access tier — the same weights are served paid on NIM/OpenRouter.
- **Provider / access:** OpenRouter (`nvidia/nemotron-3-ultra-550b-a55b:free`), NVIDIA NIM (free endpoint), plus ~3 routes. Open weights with open training data/recipes (NVIDIA Open Model License).
- **Release / knowledge:** 2026-06-04; knowledge cutoff 2025-09 (models.dev).
- **IDs:** `nemotron-3-ultra-free`, `nvidia/nemotron-3-ultra-550b-a55b`, `nvidia/nemotron-3-ultra-550b-a55b:free`.
- **Context window:** 1,000,000 tokens (262K on some listings); max output 65,536.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.00 on the free lane (rate-limited); the paid rate is $0.50 / $2.20 per 1M with $0.10 cached input.
- **Architecture:** hybrid Mamba/Transformer MoE, 550B total / 55B active (NVIDIA).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **44.4%** (Benchgen/NVIDIA figures)
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published for this model
- BenchLeader agent/tool sub-score: **40** (weakest axis per benchleader)

Reasoning / knowledge:

- GPQA Diamond: **87.0%**; AIME 2026: **94.2%**; HLE: **37.4%** (Benchgen)
- BenchLeader maths sub-score: **62** (strongest axis)
- ARC-AGI / FrontierMath / CritPt: no verified public rows published

Coding:

- No coding benchmark row published for Nemotron 3 Ultra (no SWE-bench, LiveCodeBench or DeepSWE row)

Long context:

- 1M context declared (262K on some listings); no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 60/100.** BrowseComp 44.4% is mid and the BenchLeader agent/tool axis is its weakest (40); no terminal/OSWorld row was published.
- **Reasoning: 88/100.** GPQA Diamond 87.0% and AIME 2026 94.2% are frontier for an open-weight model, HLE 37.4% solid; the BenchLeader maths axis (62) corroborates.
- **Context window: 78/100.** 1,000,000 tokens declared (262K on some listings) with 65,536 max output.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out).
- **Coding: 65/100.** No coding benchmark was published; scored conservatively — low confidence.
- **Cost efficiency: 95/100.** Free access lane plus open weights.
- **Overall Score: 61.2/100.** Best fit for self-hosted math/reasoning work at 550B class for free; the text-only modality and missing coding rows keep it out of the top tier.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (NVIDIA Nemotron 3 Ultra model card, Benchgen and benchleader benchmark summaries, llm-stats, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Nemotron 3 Ultra (550B A55B) — NVIDIA / Hugging Face](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B)
  - [Nemotron 3 Ultra benchmarks — Benchgen](https://benchgen.com/models/nvidia/nemotron-3-ultra-550b-a55b)
  - [Nemotron 3 Ultra 550B A55B — benchleader](https://www.benchleader.com/models/nemotron-3-ultra-550b-a55b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Nemotron_3_Ultra_v2.md`, using the same headings.