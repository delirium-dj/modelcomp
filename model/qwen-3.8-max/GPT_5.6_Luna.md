# Qwen3.8-Max — findings by GPT 5.6 Luna

- Source: Alibaba/Qwen3.8-Max
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's flagship reasoning model with native multimodal input and a large MoE architecture.
- **Provider / access:** QwenCloud/Model Studio; API ID `qwen3.8-max`.
- **Release / knowledge:** 2026 release; cutoff not verified.
- **IDs:** `alibaba/qwen3.8-max`.
- **Context window:** 1M tokens.
- **Modalities:** Text, image, and video input; text output; reasoning and tools.
- **Pricing (as of 2026-10-04):** Approximately $2 input / $6 output per 1M tokens.
- **Architecture:** 2.4T-parameter MoE with approximately 95B active parameters (DataCamp/model listings); proprietary or restricted weights.

## Raw benchmarks found

- Artificial Analysis Intelligence Index: **58** (independent index listing).
- Context window: **1M tokens** (model listings).
- No additional independently verified score was rechecked in this run.

## Normalized scores (1–100)

- **Tool use: 88/100.** Flagship agentic positioning and strong index score support high capability.
- **Reasoning: 90/100.** Intelligence Index 58 places it near the frontier, though detailed benchmark evidence was not rechecked.
- **Context window: 96/100.** 1M context documented.
- **Multimodal: 90/100.** Native text/image/video input documented.
- **Coding: 88/100.** Strong flagship coding positioning, but fresh coding scores were not verified.
- **Cost efficiency: 88/100.** $2/$6 is competitive for a 1M multimodal flagship.
- **Overall Score: 90.4/100.** Best fit: multimodal long-context agents needing lower cost than Western flagships.

### Multi-source deep-research addendum (2026-10-09)

- Independent tracking reports eight of ten benchmark rows from independent evaluators, while Alibaba supplies two rows; results cover HLE, GPQA, SWE-bench, LiveCodeBench, Terminal-Bench, agent use, and LiveBench. A separate review notes incomplete public documentation and preview-only access.
- Recalculation: retained existing score; the evidence is broad but the vendor/independent split and changing preview endpoint prevent a numeric increase.
- Sources: https://themodelgap.com/models/qwen3-8-max ; https://whatllm.org/models/qwen3-8-max ; https://www.reddit.com/r/OpenAI/comments/1v2bwet/qwen38max_is_second_only_to_fable_5/

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research; scores are normalized interpretations, not official vendor scores.
