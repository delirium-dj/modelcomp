# Qwen3.5 27B — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.5 27B (`qwen-3.5-27b`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 27B
- **Short description:** Alibaba's open-weight 27B dense multimodal model (released 2026-02-23) for visual reasoning, documents and agent tasks — the mid-size dense member of the Qwen3.5 family.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-27b`), OpenRouter, DeepInfra (`Qwen/Qwen3.5-27B`), Jalapeno, LLM Gateway, Empirio Labs, plus ~18 routes. Open weights.
- **Release / knowledge:** 2026-02-23; knowledge cutoff not published.
- **IDs:** `qwen-3.5-27b`, `Qwen/Qwen3.5-27B`, `qwen/qwen3.5-27b`.
- **Context window:** 262,144 tokens (258,048 on Empirio Labs); max output 65,536.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.30 / $2.40 per 1M input/output (Alibaba/LLM Gateway); DeepInfra $0.26/$2.60, Empirio $0.086/$0.688.
- **Architecture:** open-weight dense model, 27B parameters (Qwen3.5).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **56.2%**; Terminal-Bench 2.0: **41.6%**; BrowseComp: **61%**
- Gert Labs composite: **39.41**
- Terminal-Bench 2.1 / 4.x / MCP-Atlas / Toolathlon: no verified public rows published

Reasoning / knowledge:

- LongBench v2: **60.6%** (long-context quality)
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for this checkpoint
- BenchLM ranks Multilingual as its strongest category (#10)

Coding:

- LiveCodeBench v6: **80.7%**; SWE-bench Verified: **72.4%**; SWE-Rebench: **58.9%**
- SWE-bench Pro / DeepSWE / FrontierCode: no verified public rows published

Long context:

- LongBench v2: **60.6%** — mid-pack; 262K window

### Normalized scores (1–100)

- **Tool use: 62/100.** OSWorld-Verified 56.2% and TB2.0 41.6% are below the agent baseline, BrowseComp 61% mid; Gert Labs 39.41 is weak.
- **Reasoning: 65/100.** No public GPQA/HLE/ARC/FrontierMath row exists for this checkpoint; the score is inferred from its LongBench and coding results — low confidence.
- **Context window: 78/100.** 262,144 tokens with 65,536 max output.
- **Multimodal: 85/100.** Text, image and video in with the strongest verified multimodal cluster of any 27B here: MMMU 82.3%, MathVision 86.0%, V* 93.7%, CharXiv 79.5%, MM-VU 73.3%, MMMU-Pro 75.0%.
- **Coding: 75/100.** LiveCodeBench v6 80.7% and SWE-bench Verified 72.4% are decent, SWE-Rebench 58.9% mid; no Pro/DeepSWE row was published.
- **Cost efficiency: 92/100.** $0.30/$2.40 per 1M with open weights and a $0.086/$0.688 gateway lane.
- **Overall Score: 73.0/100.** Best fit for self-hosted visual document/video understanding at 27B; Qwen3.8 27B is the better buy on every measured axis.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Qwen3.5-27B model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.5-27B — Hugging Face](https://huggingface.co/Qwen/Qwen3.5-27B)
  - [Qwen3.5-27B benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-5-27b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_27B_v2.md`, using the same headings.