# MiMo-V2.5 (Free) — findings by Ernie 5.5 Flash

- Source: Xiaomi/MiMo-V2.5 Free (`mimo-v2.5-free`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5 (Free)
- **Short description:** The free access lane of Xiaomi's open MiMo-V2.5 (released 2026-04-22) — same weights as the metered MiMo-V2.5 tiers, served at $0 with rate limits. Also covers the "Xiaomi MiMo-V2.5 Free" name (one model, one folder).
- **Provider / access:** Xiaomi MiMo Open Platform (`mimo-v2.5`), OpenCode Zen free lane (`opencode/mimo-v2.5-free`), Kenari (`kenari/mimo-v2-5:free`), plus ~2 routes.
- **Release / knowledge:** 2026-04-22; knowledge cutoff 2024-12 (models.dev).
- **IDs:** `mimo-v2.5-free`, `xiaomi/mimo-v2.5`, `opencode/mimo-v2.5-free`, `kenari/mimo-v2-5:free`.
- **Context window:** 1,048,576 tokens (200,000 on the OpenCode free route); max output 131,072.
- **Modalities:** text, image, audio and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.00 on the free lane (rate-limited); the metered MiMo-V2.5 rate is $0.14 / $0.28 per 1M with $0.0028 cache reads.
- **Architecture:** open-weight sparse MoE (Xiaomi MiMo).

### Raw benchmarks found

> No benchlm profile exists for the free lane (404); the rows below are the MiMo-V2.5 family figures, cited labelled with the measured ID (free lanes serve the same weights).

Agent / tool use:

- Terminal-Bench 2.0: **65.8%**; Terminal-Bench 2.1 (Vals AI): **60.7%**
- ResearchClawBench: **16.9%** (near-floor); MM-ClawBench: **23.8%**; Gert Labs composite: **46.89%**
- Toolathlon / MCP-Atlas / OSWorld: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for MiMo-V2.5
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench (Vals AI): **81.5%**; SWE-bench (Vals AI): **71.0%**
- SWE-bench Pro: **56.1%**
- DeepSWE / FrontierCode: no verified public rows published

Long context:

- 1M context (200K on the OpenCode free route); no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 65/100.** TB2.0 65.8% and TB2.1 (Vals) 60.7% are mid, ResearchClawBench 16.9% and MM-ClawBench 23.8% are near-floor.
- **Reasoning: 60/100.** No public reasoning benchmark exists for MiMo-V2.5; the score is a conservative inference — low confidence.
- **Context window: 100/100.** 1,048,576 tokens on the metered route (200K on the free route).
- **Multimodal: 85/100.** Text, image, audio and video in — the broadest input set among the free tiers — though no public multimodal benchmark rows were published.
- **Coding: 72/100.** LiveCodeBench (Vals) 81.5% is decent, SWE-bench (Vals) 71.0% mid, SWE-bench Pro 56.1% weak.
- **Cost efficiency: 100/100.** Free access lane with open weights — the cheapest 1M-context multimodal route in this dataset.
- **Overall Score: 76.4/100.** Best fit for cost-zero prototyping of multimodal agents and batch automation; the rate limits and thin agent evidence make it unsuitable for production coding.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Xiaomi MiMo platform, BenchLM MiMo-V2.5 profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiMo-V2.5 — Xiaomi MiMo / Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)
  - [MiMo-V2.5 benchmarks & sources — BenchLM](https://benchlm.ai/models/mimo-v2-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `MiMo_V2.5_Free_v2.md`, using the same headings.