# Qwen3.5 9B — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.5 9B (`qwen-3.5-9b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 9B
- **Short description:** Alibaba's compact 9B open-weight vision-language model (released 2026-02-23) for multilingual chat, reasoning and tool use, built for single-GPU and local deployment.
- **Provider / access:** OpenRouter (`qwen/qwen3.5-9b`), DeepInfra (`Qwen/Qwen3.5-9B`), LLM Gateway, Merge Gateway, Empirio Labs, plus ~17 routes. Open weights (Apache 2.0 per LLMLearner).
- **Release / knowledge:** 2026-02-23 (models.dev); some aggregators date the family to September 2025 or March 2026 — the models.dev date is used here. Knowledge cutoff not published.
- **IDs:** `qwen-3.5-9b`, `Qwen/Qwen3.5-9B`, `qwen/qwen3.5-9b`.
- **Context window:** 262,144 tokens (native); max output 235,929 (OpenRouter).
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.17 / $0.25 per 1M input/output on OpenRouter (DeepInfra/LLM Gateway $0.10/$0.15, Empirio $0.09/$0.13).
- **Architecture:** dense 9B, Gated DeltaNet hybrid attention (Qwen3.5 compact family); open weights.

### Raw benchmarks found

> BenchLM has no profile for this checkpoint (404 on `qwen3-5-9b`); the rows below are aggregator figures labelled with their source.

Agent / tool use:

- IFBench (instruction following): **64.5%** (Benchgen aggregation)
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows found for this checkpoint

Reasoning / knowledge:

- MMLU-Pro: **82.5%** (Benchgen aggregation)
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows found for this checkpoint

Coding:

- No coding benchmark row found for this checkpoint (no SWE-bench, LiveCodeBench or DeepSWE row)
- The closest proxy is IFBench 64.5%, which is instruction following rather than repo work

Long context:

- 262K native context; no MRCR / RULER / GraphWalks row found

### Normalized scores (1–100)

- **Tool use: 60/100.** IFBench 64.5% is the only verified agentic-adjacent row and it is mid; no terminal/OSWorld row was found.
- **Reasoning: 72/100.** MMLU-Pro 82.5% is decent for a 9B model and IFBench 64.5% mid; no GPQA/HLE/ARC row was found.
- **Context window: 78/100.** 262,144 tokens with a 235,929 max output on OpenRouter.
- **Multimodal: 75/100.** Text, image and video in — the compact Qwen3.5 feature set — but no public multimodal benchmark row was found.
- **Coding: 65/100.** No coding benchmark was found for this checkpoint; scored conservatively from the family profile — low confidence.
- **Cost efficiency: 95/100.** $0.10–$0.17 / $0.15–$0.25 per 1M with Apache-2.0 weights.
- **Overall Score: 70.0/100.** Best fit for local, single-GPU multilingual chat and document work; the thin public record means you should benchmark it yourself before relying on it.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Qwen3.5-9B model card, Benchgen and LLMLearner benchmark summaries, llm-stats, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.5-9B — Hugging Face](https://huggingface.co/Qwen/Qwen3.5-9B)
  - [Qwen3.5-9B benchmarks & specs — LLMLearner](https://llmlearner.com/models/qwen3-5-9b)
  - [Qwen3.5-9B benchmarks — Benchgen](https://benchgen.com/models/alibaba/qwen3-5-9b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_9B_v2.md`, using the same headings.