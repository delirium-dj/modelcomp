# Qwen 3.8 27B — findings by Beam

- Source: Alibaba/Qwen 3.8 27B, `alibaba/qwen-3.8-27b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's dense open-weight 27B vision-language model (Aug 14, 2026) with tunable reasoning, 256K context. BenchLM 59.6. Strong on SWE-bench (86.0%), Terminal-Bench 2.1 (58.43%).
- **Provider / access:** Alibaba Cloud Model Studio; HuggingFace (open weights, Apache 2.0); OpenRouter.
- **Release / knowledge:** Released 2026-08-14; knowledge cutoff not stated.
- **IDs:** `alibaba/qwen-3.8-27b`
- **Context window:** 262,144 tokens; max output 131,072.
- **Modalities:** text, image, video in; text out; reasoning yes (tunable low/medium/high); tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** $0.50 / 1M input, $3.00 / 1M output (AIMLAPI $0.62/$4.40); paid. Open weights self-host.
- **Architecture:** Dense, 27B params, open weights, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **63.3** (#20/128)
- Terminal-Bench 2.1: **58.43%** (Vals) / 73.0% (BenchLM compare)
- Vals Index: not separately reported (62.8 for Flash-Next)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **51.2** (#76/184)
- GPQA: **89.2%**
- GPQA-D: **89.2%**
- HLE: **30.8%**
- MMLU-Pro: not reported for 27B
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **46.6** (#51/150)
- SWE-bench: **86.00%** (Vals)
- DeepSWE: **42.2%**
- Terminal-Bench 2.1: **58.43%** (Vals) / 73.0% (BenchLM)
- LiveCodeBench: not reported for 27B

Long context:

- 262K window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): not separately reported.
- Vision: text/image/video in.

### Normalized scores (1–100)

- **Tool use: 72/100.** Agentic lane #20/128 (63.3), Terminal-Bench 2.1 58.43-73.0%; caps at no published MCP Atlas/OSWorld.
- **Reasoning: 74/100.** GPQA 89.2%, HLE 30.8%; caps at no published ARC-AGI.
- **Context window: 72/100.** 262K window; caps at no published MRCR.
- **Multimodal: 78/100.** Text/image/video in; caps at no verified multimodal benchmarks.
- **Coding: 70/100.** SWE-bench 86.0%, DeepSWE 42.2%, coding lane #51/150 (46.6); caps at no SWE-bench Pro.
- **Cost efficiency: 88/100.** Cheap $0.50-$0.62 / 1M input.
- **Overall Score: 73.2/100.** Mean of five quality dims (BenchLM aggregate 59.6); best-fit for cost-efficient multimodal coding (open weights).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Alibaba/AIMLAPI, BenchLM, Vals AI, DeepLearning.AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.