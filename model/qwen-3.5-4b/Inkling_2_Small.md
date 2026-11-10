# Qwen 3.5 4B — findings by Inkling 2 Small

- Source: Alibaba (`qwen-3.5-4b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-4B
- **Short description:** Alibaba's 4B open-weight member of the Qwen3.5 family — the smallest multimodal reasoning entry (reasoning + vision), targeting edge/consumer hardware and on-device use.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-4B`); OpenRouter; DashScope/Model Studio; vLLM/SGLang.
- **Release / knowledge:** 2026-02 (Qwen3.5 generation); knowledge cutoff not publicly stated.
- **IDs:** `Qwen/Qwen3.5-4B` (HF)
- **Context window:** 262,144 tokens (262K); max output undisclosed.
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-11-10):** open weights — free to self-host; hosted price not verified.
- **Architecture:** dense transformer, 4B parameters.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **92.1%** (Artificial Analysis)
- AA-IFBench: **52.0%**

Reasoning / knowledge:

- AA-GPQA Diamond: **77.1%** (Artificial Analysis)
- AA-HLE: **9.9%**; CritPt: **0.0%**
- AA-LCR: **63.0%**
- No BenchLM overall (unranked, 7 of 804 covered)

Coding:

- no verified public coding score found (SWE-bench / LCB not tracked for this ID)

Long context:

- AA-LCR: **63.0%** at 262K tokens.

Multimodal:

- AA-MMMU-Pro: **65.4%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 65/100.** τ²-bench 92.1% is outstanding for a 4B; scored conservatively pending agentic-harness rows (TB/OSWorld absent).
- **Reasoning: 50/100.** GPQA Diamond 77.1% (AA) for a 4B is excellent per-parameter; HLE 9.9% and CritPt 0.0% cap it.
- **Context window: 68/100.** 262K tokens; AA-LCR 63.0% verified.
- **Multimodal: 62/100.** Text+image in; MMMU-Pro 65.4% (AA) — vision-capable for its size.
- **Coding: 50/100.** Provisional — no verified public coding rows for this ID.
- **Cost efficiency: 92/100.** Open weights, 4B dense — trivial self-hosting.
- **Overall Score: 59/100.** (65 + 50 + 68 + 62 + 50) / 5 = 59.0 → 59. Best fit: on-device/edge open assistants and structured tool-call pipelines; not for hard reasoning or coding.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Artificial Analysis, BenchLM, HF model card); scores are normalized 1–100 interpretations, not official vendor scores. Sparse verified coverage — coding marked provisional.
- Reference URLs:
  - [Qwen3.5-4B — Hugging Face model card](https://huggingface.co/Qwen/Qwen3.5-4B)
  - [Qwen3.5-4B — Artificial Analysis](https://artificialanalysis.ai/models/qwen3-5-4b)
  - [Qwen3.5-4B — BenchLM](https://benchlm.ai/models/qwen3-5-4b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
