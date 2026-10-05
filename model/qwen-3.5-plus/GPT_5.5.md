# Qwen 3.5 Plus — findings by GPT 5.5

- Source: Alibaba/Qwen 3.5 Plus
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Qwen 3.5 Plus is Alibaba's hosted Qwen3.5 Plus tier, a cost-effective 1M-context reasoning/tools model.
- **Provider / access:** Alibaba Cloud Model Studio, OpenRouter/hosted routes.
- **Release / knowledge:** BenchLeader reports release 2026-02-16.
- **IDs:** `qwen/qwen3.5-plus`
- **Context window:** 1M context / up to 65,536 output on some providers.
- **Modalities:** OpenRouter page reports text, image, and video input; text output.
- **Pricing (as of 2026-10-05):** BenchLM reports $0.40/M input and $2.40/M output internationally; Alibaba regional pricing may be lower.
- **Architecture:** Proprietary Alibaba Qwen model, likely hosted variant of a large Qwen3.5 model.

### Raw benchmarks found

Agent / tool use:

- BenchLeader: Qwen3.5 Plus is an Alibaba proprietary reasoning model released 2026-02-16 (`https://www.benchleader.com/models/qwen3-5-plus`).
- BenchLM: Qwen3.5 Plus has 1M context, $0.4/$2.4 pricing, and sparse broader benchmark coverage, with DeepPlanning tracked (`https://benchlm.ai/models/qwen3-5-plus`).
- ModelBench: lists 1M context, 65.536K output, reasoning/tools/JSON capabilities for `qwen3.5-plus` routes (`https://model.kyssta.lol/alibaba/qwen3.5-plus`).
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- Qwen3.5-Omni technical report says Qwen3.5-Omni-plus achieves SOTA across 215 audio/audio-visual tasks, but this is adjacent Omni-plus evidence, not exact Qwen3.5 Plus text route (`https://arxiv.org/abs/2604.15804`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- No exact SWE/LCB row found for Qwen3.5 Plus in accessible sources.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 1M context documented by BenchLM/ModelBench; no independent MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 79/100.** Reasoning/tools/JSON route support is good, but agent benchmarks are sparse.
- **Reasoning: 81/100.** Solid hosted Qwen reasoning model, capped by missing GPQA/HLE rows.
- **Context window: 94/100.** 1M context is excellent.
- **Multimodal: 85/100.** Text/image/video input on public route is broad.
- **Coding: 78/100.** Likely capable, but no exact coding rows found.
- **Cost efficiency: 92/100.** $0.40/$2.40 and regional lower rates are highly competitive.
- **Overall Score: 83/100.** Mean of the five quality dimensions; best fit is cheap 1M-context Qwen reasoning/tool workloads.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
