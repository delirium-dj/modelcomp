# Nemotron 3 Nano Omni — findings by Ernie 5.5 Flash

- Source: NVIDIA/Nemotron 3 Nano Omni (`nemotron-3-nano-omni`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni (30B-A3B Reasoning)
- **Short description:** NVIDIA's open omni model combining reasoning with text, vision and audio in one 30B-total / 3B-active MoE — the free open counterpart of the Nemotron 3 Nano line.
- **Provider / access:** Self-hosted (Hugging Face `nvidia/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning`), NVIDIA NIM (free, rate-limited), Requesty, DigitalOcean, plus ~3 routes.
- **Release / knowledge:** 2026-04-28; knowledge cutoff not published.
- **IDs:** `nemotron-3-nano-omni`, `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`, `nvidia/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning`.
- **Context window:** 256,000 tokens (300,000 on Requesty; 65,536 on DigitalOcean); max output 65,536.
- **Modalities:** text, image, video and audio in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** Free on the NVIDIA NIM endpoint; $0.06/$0.24 per 1M on Requesty, $0.50/$0.90 on DigitalOcean.
- **Architecture:** open-weight MoE, 30B total / 3B active (NVIDIA).

### Raw benchmarks found

> Figures are from BenchLM's profile under the `nemotron-3-nano-omni-30b-a3b` slug (the same checkpoint under its parameter-qualified name).

Agent / tool use:

- OSWorld: **47.4%**; τ²-Bench: **45.3%** (below the agent baseline)
- Terminal-Bench / Toolathlon / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- MMMU: **70.8%**; CharXiv Reasoning: **76.3%**; MMLongBench-Doc: **57.5%**
- GPQA Diamond / HLE / ARC-AGI: no verified public rows published

Coding:

- LiveCodeBench v5: **63.2%**; SciCode: **32%** (weak)
- SWE-bench Verified / SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- 256K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 60/100.** OSWorld 47.4% and τ² 45.3% are below the agent baseline; no terminal/Toolathlon row was published.
- **Reasoning: 65/100.** MMMU 70.8% and CharXiv 76.3% are mid, MMLongBench-Doc 57.5% mid; no GPQA/HLE/ARC row was published.
- **Context window: 72/100.** 256,000 tokens (300,000 on one gateway) with 65,536 max output.
- **Multimodal: 78/100.** Text, image, video and audio in with AI2D 88.5%, RefCOCO 90.5%, Video-MME (no subtitle) 72.2% and CharXiv 76.3% — a genuinely broad omni profile for a 3B-active model.
- **Coding: 55/100.** LiveCodeBench v5 63.2% is below the coding baseline and SciCode 32% is weak.
- **Cost efficiency: 98/100.** Free NIM endpoint and open weights — the cheapest omni route in this dataset.
- **Overall Score: 66.0/100.** Best fit for free, local, always-on multimodal perception (audio, video, documents, GUI grounding); not a coding or reasoning model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (NVIDIA Nemotron 3 Nano Omni model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [nvidia/nemotron-3-nano-omni-30b-a3b-reasoning — Hugging Face](https://huggingface.co/nvidia/nvidia-nemotron-3-nano-omni-30b-a3b-reasoning)
  - [Nemotron 3 Nano Omni 30B-A3B benchmarks & sources — BenchLM](https://benchlm.ai/models/nemotron-3-nano-omni-30b-a3b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Nemotron_3_Nano_Omni_v2.md`, using the same headings.