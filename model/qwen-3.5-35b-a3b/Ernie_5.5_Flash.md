# Qwen3.5 35B-A3B — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.5 35B-A3B (`qwen-3.5-35b-a3b`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 35B-A3B
- **Short description:** Alibaba's open-weight MoE (released 2026-02-23): 35B total / 3B active parameters, a vision-language model for visual reasoning, documents and agent tasks.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-35b-a3b`), OpenRouter, DeepInfra (`Qwen/Qwen3.5-35B-A3B`), Jalapeno, LLM Gateway, Empirio Labs, plus ~20 routes. Open weights.
- **Release / knowledge:** 2026-02-23; knowledge cutoff not published.
- **IDs:** `qwen-3.5-35b-a3b`, `Qwen/Qwen3.5-35B-A3B`, `qwen/qwen3.5-35b-a3b`.
- **Context window:** 262,144 tokens (258,048 on Empirio Labs); max output 65,536.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.25 / $2.00 per 1M input/output (Alibaba/LLM Gateway); DeepInfra $0.14/$1.00, Empirio $0.057/$0.459.
- **Architecture:** open-weight MoE, 35B total / 3B active (Qwen3.5).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **54.5%**; Terminal-Bench 2.0: **40.5%**; BrowseComp: **61%**
- Gert Labs composite: **28.96**
- Terminal-Bench 2.1 / 4.x / MCP-Atlas / Toolathlon: no verified public rows published

Reasoning / knowledge:

- LongBench v2: **59%** (long-context quality)
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for this checkpoint
- BenchLM ranks Multilingual as its strongest category (#11)

Coding:

- LiveCodeBench v6: **74.6%**; SWE-bench Verified: **69.2%**; SWE-Rebench: **53.7%**
- SWE-bench Pro / DeepSWE / FrontierCode: no verified public rows published

Long context:

- LongBench v2: **59%** — mid-pack; 262K window

### Normalized scores (1–100)

- **Tool use: 58/100.** OSWorld-Verified 54.5% and TB2.0 40.5% are below the agent baseline, BrowseComp 61% mid; Gert Labs 28.96 is weak.
- **Reasoning: 62/100.** No public GPQA/HLE/ARC/FrontierMath row exists; the score is inferred from LongBench v2 (59%) and its coding rows — low confidence.
- **Context window: 78/100.** 262,144 tokens with 65,536 max output.
- **Multimodal: 85/100.** Text, image and video in with a consistent verified cluster: MMMU 81.4%, CharXiv 77.5%, MathVision 83.9%, MM-VU 72.3%, MMMU-Pro 75.1%, ExtractBench 88.00%.
- **Coding: 68/100.** LiveCodeBench v6 74.6% and SWE-bench Verified 69.2% are mid for a 3B-active model, SWE-Rebench 53.7% weak.
- **Cost efficiency: 92/100.** $0.25/$2.00 per 1M with open weights and a $0.057/$0.459 gateway lane.
- **Overall Score: 70.2/100.** Best fit for self-hosted visual document extraction at a tiny active-parameter footprint; not an agent or reasoner.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Qwen3.5-35B-A3B model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.5-35B-A3B — Hugging Face](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [Qwen3.5 35B-A3B benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-5-35b-a3b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_35B_A3B_v2.md`, using the same headings.