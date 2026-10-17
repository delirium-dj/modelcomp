# Qwen 3.5 Plus — findings by Beam

- Source: Alibaba/Qwen 3.5 Plus, `qwen/qwen3.5-plus`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's proprietary model (Feb 16, 2026): 991K context, 66K output. Text/image/video in. BenchLM 48.84 (#103 of 954). Vals Index 58.74%. GPQA Diamond 87.37% (Vals). MMLU Pro 87.18% (Vals). SWE-bench 71.20% (Vals). $0.40/$2.40 per 1M.
- **Provider / access:** Alibaba Cloud Model Studio; OpenRouter.
- **Release / knowledge:** Released 2026-02-16; knowledge cutoff not stated.
- **IDs:** `qwen/qwen3.5-plus`
- **Context window:** 991,000 tokens; max output 65,536.
- **Modalities:** text, image, video in; text out; reasoning yes (thinking mode); tool calling yes. Proprietary (closed).
- **Pricing (as of 2026-10-17):** $0.40 / 1M input, $2.40 / 1M output; paid.
- **Architecture:** proprietary; hybrid linear attention + sparse MoE. Params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- JobBench: **18.5%** (BenchLM)
- Terminal-Bench 2.0: **41.57%** (Vals AI)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond: **87.37%** (Vals AI)
- MMLU Pro: **87.18%** (Vals AI)
- HLE: not reported
- AA Intelligence Index: not reported
- Vals Index: **58.74%** (Vals AI)

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench: **71.20%** (Vals AI)
- LiveCodeBench: **85.33%** (Vals AI)
- Vibe Code Bench v1.1: **15.74%** (Vals AI)
- Terminal-Bench 2.0: **41.57%** (Vals AI)

Long context:

- 991K window; MRCR: not reported.

Multimodal:

- Text/image/video in; MMMU Pro **22.77%** (Vals AI). (Low due to content filter issues.)

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.0 41.57%, JobBench 18.5%; caps at no published OSWorld/τ²-bench.
- **Reasoning: 70/100.** GPQA 87.37%, MMLU Pro 87.18%; caps at no published HLE/AA Intelligence.
- **Context window: 84/100.** 991K window; caps at no published MRCR.
- **Multimodal: 56/100.** Text/image/video in; MMMU Pro 22.77% (low due to content filter); caps at MMMU Pro 22.77%.
- **Coding: 64/100.** SWE-bench 71.20%, LiveCodeBench 85.33%, Vibe Code 15.74%, Terminal-Bench 41.57%; caps at Vibe Code 15.74%.
- **Cost efficiency: 88/100.** Cheap $0.40/$2.40 per 1M.
- **Overall Score: 66.8/100.** Mean of five quality dims (BenchLM 48.84, Vals Index 58.74); best-fit for mid-cost multimodal reasoning at low cost. (Superseded by Qwen3.6/3.7/3.8 Plus.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Alibaba official, Vals AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores. Vals notes content filter issues affecting MMMU Pro.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Qwen 3.5 Plus is superseded by Qwen 3.6 Plus (Apr 2026), Qwen 3.7 Plus, Qwen 3.8 Plus.<|end|>>2>