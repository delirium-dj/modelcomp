# Gemma 4 31B IT — findings by Ernie 5.5 Flash

- Source: Google/Gemma 4 31B IT (`gemma-4-31b`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B IT (Gemma-4-31B-IT)
- **Short description:** The largest Gemma 4 instruction-tuned model (released 2026-04-02) for open, self-hosted chat and reasoning, with a 262K context and image input.
- **Provider / access:** Self-hosted (Hugging Face `google/gemma-4-31b-it`, Gemma licence), QVAC, NanoGPT, NeuralWatt, Regolo AI, plus ~9 routes.
- **Release / knowledge:** 2026-04-02; knowledge cutoff 2025-01 (models.dev).
- **IDs:** `gemma-4-31b`, `google/gemma-4-31b-it`, `gemma-4-31b-it`.
- **Context window:** 262,144 tokens (100,000 on the Regolo route); max output 32,768.
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** Open weights — free to self-host. Hosted lanes run $0.12–$0.14 / $0.37–$0.42 per 1M (NanoGPT TEE), or $0.46/$2.42 (Regolo).
- **Architecture:** open-weight dense model, 31B parameters (Google Gemma 4).

### Raw benchmarks found

Agent / tool use:

- b3 (Backbone Breaker) Agent Security: **83.0**; Cyber Misuse Refusal: **84.0%**
- MRCRv2: **66.4%**; Gert Labs composite: **35.26**
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- MMLU-Pro: **85.2%**; GPQA: **84.3%**; NYT Connections: **70.6%**
- HLE: **26.5%** with tools, **19.5%** without
- ARC-AGI / FrontierMath / CritPt: no verified public rows published

Coding:

- LiveCodeBench v6: **80.0%**; React Native Evals: **75.2%**; SWE-Rebench: **41.6%**
- SWE-bench Verified / SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- 262K context; MRCRv2 **66.4%** (mid-pack retrieval)

### Normalized scores (1–100)

- **Tool use: 60/100.** b3 83.0 and Cyber Misuse Refusal 84.0% are strong safety-agent rows and MRCRv2 66.4% is mid; Gert Labs 35.26 is weak and no terminal/OSWorld row was published.
- **Reasoning: 72/100.** MMLU-Pro 85.2% and GPQA 84.3% are respectable for a 31B open model; HLE 26.5% and NYT Connections 70.6% cap it.
- **Context window: 78/100.** 262,144 tokens with 32,768 max output.
- **Multimodal: 78/100.** Text and image in with MMMU-Pro 76.9% and ParseBench 62.40% proving document/chart work; no audio/video.
- **Coding: 72/100.** LiveCodeBench v6 80.0% and React Native Evals 75.2% are decent, SWE-Rebench 41.6% weak; no SWE-bench row was published.
- **Cost efficiency: 100/100.** Open weights (Gemma licence) at a 31B footprint — the cheapest credible self-hosted option in this dataset.
- **Overall Score: 72.0/100.** Best fit for self-hosted, privacy-sensitive chat and document work; a genuinely good small open model, but not a frontier agent.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google Gemma 4 model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [google/gemma-4-31b-it — Hugging Face](https://huggingface.co/google/gemma-4-31b-it)
  - [Gemma 4 31B benchmarks & sources — BenchLM](https://benchlm.ai/models/gemma-4-31b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemma_4_31B_IT_v2.md`, using the same headings.