# DeepSeek V3.2 — findings by Ernie 5.5 Flash

- Source: DeepSeek/DeepSeek V3.2 (`deepseek-v3.2`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's chat model (released 2025-12-17) for instruction following, coding and analysis — the last of the V3 line before V4.
- **Provider / access:** DeepSeek API (`deepseek-v3.2`), Google Vertex (`deepseek-ai/deepseek-v3.2-maas`), plus ~28 routes. Open weights.
- **Release / knowledge:** 2025-12-17; knowledge cutoff not published.
- **IDs:** `deepseek-v3.2`, `deepseek-ai/DeepSeek-V3.2`, `deepseek/deepseek-chat`.
- **Context window:** 163,840 tokens; max output 65,536.
- **Modalities:** text in / text out only; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.56 / $1.68 per 1M input/output (models.dev; BenchLM lists $0.28/$0.42 for a gateway route); cache read $0.056.
- **Architecture:** open-weight MoE (DeepSeek; undisclosed size).

### Raw benchmarks found

Agent / tool use:

- SWE-Rebench: **60.9%** (the only agentic-adjacent row); Claw-Eval: **40.2%**
- OTelBench: **11.6%** (near-floor); VITA-Bench: **18.5%**; Gert Labs: **29.57**

Reasoning / knowledge:

- NYT Connections: **8.2%** (near-floor)
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for V3.2

Coding:

- React Native Evals: **71.5%**; SWE-Rebench: **60.9%**; BinaryAudit: **12.3%**
- SWE-bench Verified / SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- 163.8K context; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 52/100.** SWE-Rebench 60.9% is mid, Claw-Eval 40.2% and OTelBench 11.6% are near-floor.
- **Reasoning: 55/100.** NYT Connections 8.2% is near-floor and Gert Labs 29.57 is weak; no GPQA/HLE/ARC row was published.
- **Context window: 60/100.** 163,840 tokens with 65,536 max output — the smallest window in this batch.
- **Multimodal: 15/100.** Text-only.
- **Coding: 70/100.** React Native Evals 71.5% and SWE-Rebench 60.9% are mid; no SWE-bench row was published.
- **Cost efficiency: 92/100.** $0.56/$1.68 per 1M with open weights.
- **Overall Score: 50.4/100.** Best fit for legacy DeepSeek V3 integrations; V4/V4.1 are better at similar prices.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (DeepSeek model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek-V3.2 — Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V3.2)
  - [DeepSeek V3.2 benchmarks — BenchLM](https://benchlm.ai/models/deepseek-v3-2)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `DeepSeek_3.2_v2.md` next to this file.