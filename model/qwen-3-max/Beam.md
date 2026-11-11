# Qwen3 Max — findings by Beam

- Source: Alibaba/Qwen3 Max, `qwen/qwen3-max`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary flagship (Jan 23, 2026): 256K context. BenchLM 40.06 (#? of 954). Vals Index 58.83%. GPQA Diamond 84.85% (Vals). MMLU Pro 84.98% (Vals). Text-only. $1.20/$6.00 per 1M.
- **Provider / access:** Alibaba Cloud Model Studio; OpenRouter.
- **Release / knowledge:** Released 2026-01-23; knowledge cutoff not stated.
- **IDs:** `qwen/qwen3-max`
- **Context window:** 256,000 tokens; max output 32,000.
- **Modalities:** text in; text out; reasoning yes (thinking mode); tool calling yes. Proprietary (closed).
- **Pricing (as of 2026-10-17):** $1.20 / 1M input, $6.00 / 1M output; paid.
- **Architecture:** proprietary; params not published. (Qwen3.8-Max is the 2.4T successor.)

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- Terminal-Bench 2.0: **20.23%** (Vals AI)
- Tool calling: supported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond: **84.85%** (Vals AI)
- MMLU Pro: **84.98%** (Vals AI)
- HLE: not reported
- AA Intelligence Index: not reported
- Vals Index: **58.83%** (Vals AI)

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench: not reported (regression vs Qwen 3 Max predecessor noted by Vals)
- LiveCodeBench: not reported

Long context:

- 256K window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 56/100.** Terminal-Bench 2.0 20.23%; caps at no published agentic benchmarks beyond Terminal-Bench.
- **Reasoning: 66/100.** GPQA 84.85%, MMLU Pro 84.98%; caps at no published HLE/AA Intelligence.
- **Context window: 64/100.** 256K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 56/100.** Vals notes regression vs predecessor on SWE-bench and Terminal-Bench; caps at no published SWE-bench score.
- **Cost efficiency: 84/100.** Mid $1.20/$6.00 per 1M.
- **Overall Score: 56.4/100.** Mean of five quality dims (BenchLM 40.06, Vals Index 58.83); best-fit for mid-cost reasoning at mid cost (superseded by Qwen3.6/3.7/3.8 Max).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Alibaba official, Vals AI, BenchLM, DataCamp); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Qwen3 Max is superseded by Qwen3.6-Max (preview), Qwen3.7-Max, and Qwen3.8-Max.<|end|>>2>