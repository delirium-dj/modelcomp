# Gemma 4 26B-A4B — findings by Ernie 5.5 Flash

- Source: Google/Gemma 4 26B-A4B (`gemma-4-26b-a4b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B-A4B (Gemma-4-26B-A4B-IT)
- **Short description:** Open Gemma instruction MoE (released 2026-04-02): 25.2B total / 3.8B active, 256K context, image and video input. Parameter-qualified spelling of the model also filed under `gemma-4.26b-a4b` — same checkpoint.
- **Provider / access:** Self-hosted (Hugging Face `google/gemma-4-26b-a4b-it`, Gemma licence), Empirio Labs, Merge Gateway, NanoGPT, W&B, plus ~4 routes.
- **Release / knowledge:** 2026-04-02; knowledge cutoff not published.
- **IDs:** `gemma-4-26b-a4b`, `google/gemma-4-26b-a4b-it`.
- **Context window:** 262,144 tokens; max output 32,768.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** open weights; hosted lanes $0.05–$0.13 / $0.29–$0.40 per 1M.
- **Architecture:** open-weight MoE, 25.2B total / 3.8B active, 30 layers, 8 active of 128 experts + 1 shared, ~550M vision encoder.

### Raw benchmarks found

Agent / tool use:

- MRCRv2: **44.1%** (below mid-pack)
- Terminal-Bench / Toolathlon / OSWorld: no verified public rows published

Reasoning / knowledge:

- MMLU-Pro: **82.6%**; GPQA: **82.3%**
- HLE: **17.2%** with tools, **8.7%** without (near-floor)

Coding:

- LiveCodeBench v6: **77.1%**; ScarfBench (Java migration): **24.4%** (weak)
- SWE-bench Verified / SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- MRCRv2 44.1% is the only retrieval row; 262K window

### Normalized scores (1–100)

- **Tool use: 55/100.** MRCRv2 44.1% is the only verified agentic-adjacent row and it is below mid-pack; no terminal/OSWorld row was published.
- **Reasoning: 65/100.** MMLU-Pro 82.6% and GPQA 82.3% are decent for a 3.8B-active model, but HLE 17.2% is near-floor.
- **Context window: 78/100.** 262,144 tokens with 32,768 max output.
- **Multimodal: 75/100.** Text, image and video in with MMMU-Pro 73.8%, ParseBench 58.50% and ExtractBench 70.27% — usable document work.
- **Coding: 70/100.** LiveCodeBench v6 77.1% is decent, ScarfBench 24.4% weak; no SWE-bench row was published.
- **Cost efficiency: 95/100.** Open weights at a 3.8B-active footprint.
- **Overall Score: 68.6/100.** Best fit for self-hosted document/visual work at a tiny active footprint; the 31B dense sibling is better where quality matters.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Google Gemma 4 model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [google/gemma-4-26b-a4b-it — Hugging Face](https://huggingface.co/google/gemma-4-26b-a4b-it)
  - [Gemma 4 model card — Google AI for Developers](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Gemma 4 26B-A4B benchmarks — BenchLM](https://benchlm.ai/models/gemma-4-26b-a4b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Gemma_4_26B_A4B_v2.md` next to this file.