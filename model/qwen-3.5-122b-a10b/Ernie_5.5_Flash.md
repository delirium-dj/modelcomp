# Qwen3.5 122B-A10B — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.5 122B-A10B (`qwen-3.5-122b-a10b`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 122B-A10B
- **Short description:** Alibaba's open-weight Qwen3.5 vision-language MoE (released 2026-02-23): 122B total / 10B active parameters, for visual reasoning, documents and agent tasks.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-122b-a10b`), OpenRouter, DeepInfra (`Qwen/Qwen3.5-122B-A10B`), LLM Gateway, Empirio Labs, Jalapeno, plus ~19 routes. Open weights.
- **Release / knowledge:** 2026-02-23; knowledge cutoff not published.
- **IDs:** `qwen-3.5-122b-a10b`, `Qwen/Qwen3.5-122B-A10B`, `qwen/qwen3.5-122b-a10b`.
- **Context window:** 262,144 tokens (258,048 on Empirio Labs); max output 65,536.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.40 / $3.20 per 1M input/output (LLM Gateway/Alibaba); DeepInfra $0.29/$2.40, Empirio $0.115/$0.917.
- **Architecture:** open-weight MoE, 122B total / 10B active (Qwen).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **49.4%** (below the current agent baseline)
- LongBench v2: **60.2%** (long-context quality)
- Terminal-Bench 2.1 / 4.x / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for this checkpoint
- BenchLM ranks Multilingual as its strongest category (#9)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **72%**; LiveCodeBench v6: **78.9%**
- SWE-bench Pro / DeepSWE / FrontierCode: no verified public rows published

Long context:

- LongBench v2: **60.2%** — mid-pack long-context quality; 262K window

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.0 49.4% is below the agent baseline; no other agentic row was published, so the score is a single-row estimate.
- **Reasoning: 62/100.** No public reasoning benchmark exists for this checkpoint; the score is a conservative inference — low confidence.
- **Context window: 78/100.** 262,144 tokens with 65,536 max output.
- **Multimodal: 75/100.** Text, image and video in — the model is a vision-language model — but no public image/video benchmark rows were reached.
- **Coding: 72/100.** SWE-bench Verified 72% and LiveCodeBench v6 78.9% are decent for a 10B-active model; no Pro/DeepSWE row was published.
- **Cost efficiency: 90/100.** $0.40/$3.20 per 1M with open weights and a $0.115/$0.917 gateway lane.
- **Overall Score: 69.4/100.** Best fit for self-hosted visual document work at a small footprint; Qwen3.8 27B is better on every measured axis at a similar price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Qwen3.5-122B-A10B model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.5-122B-A10B — Hugging Face](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - [Qwen3.5 122B-A10B benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-5-122b-a10b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_122B_A10B_v2.md`, using the same headings.