# Qwen 3.5 0.8B — findings by DeepSeek 4.1 Flash

- Source: Alibaba/Qwen3.5-0.8B (`Qwen/Qwen3.5-0.8B`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 0.8B
- **Short description:** Alibaba's smallest dense Qwen 3.5 model (0.8B, Apache 2.0) with a 262K native window and text/image/video input, aimed at edge assistants and on-device inference; it is the lowest-capability member of the family, not an alias of any larger tier.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-0.8B`) and ModelScope; GGUF/MLX quants on Ollama/unsloth; free hosted lanes exist. No OpenCode Zen Free ID confirmed.
- **Release / knowledge:** Qwen 3.5 generation (early 2026); exact release date not published in the sources found. Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-0.8B`; Apache 2.0.
- **Context window:** 262,144 native; max output not separately published — Hugging Face card.
- **Modalities:** text, image and video in; text out; thinking/non-thinking modes; tool calling.
- **Pricing (as of 2026-10-23):** free Apache-2.0 weights; free hosted routes ($0.00/$0.00 on several providers).
- **Architecture:** dense ~0.8B (≈0.9B per Artificial Analysis) Gated DeltaNet hybrid; Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **25.3%**; TAU2-Bench: **11.6%** (huggingface.co/Qwen/Qwen3.5-0.8B)
- Claw-Eval / MCP-Atlas / Terminal-Bench: **no verified public score found**

Reasoning / knowledge:

- MMLU-Pro: **29.7%**; MMLU-Redux: **48.5%**; SuperGPQA: **21.3%**; GPQA: **11.9%** (huggingface.co/Qwen/Qwen3.5-0.8B, non-thinking column)
- IFEval: **44.0%**; IFBench: **21.0%**; MultiChallenge: **18.9%** (Hugging Face card)
- Artificial Analysis Intelligence Index: **6** (estimated, AA model page)

Coding:

- LiveCodeBench / SWE-bench / OJBench: **no verified public score found** for the 0.8B ID
- Artificial Analysis Coding Index: **0.01** (AA, as reported by apxml.com)

Long context:

- AA-LCR: **4.7%**; LongBench v2: **26.1%** (huggingface.co/Qwen/Qwen3.5-0.8B). MRCR/RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 15/100.** BFCL-V4 25.3% and TAU2-Bench 11.6% are the only tool signals and both are far below usable agent thresholds (huggingface.co/Qwen/Qwen3.5-0.8B).
- **Reasoning: 22/100.** MMLU-Pro 29.7%, SuperGPQA 21.3% and GPQA 11.9% confirm that graduate-level reasoning is out of reach at this size (Hugging Face card).
- **Context window: 45/100.** The 262K window is large on paper, but AA-LCR 4.7% and LongBench v2 26.1% show almost no effective long-context retrieval (Hugging Face card).
- **Multimodal: 30/100.** Accepts text, image and video, but no MMMU-class measurement was published; capability coverage only, at the bottom of the family.
- **Coding: 12/100.** No dated coding benchmark was published for the exact ID, and the AA Coding Index of 0.01 is effectively zero (artificialanalysis.ai via apxml.com).
- **Cost efficiency: 100/100.** Apache-2.0 weights run on-device for $0, with free hosted lanes as well (huggingface.co/Qwen/Qwen3.5-0.8B).
- **Overall Score: 25/100.** Mean of the five quality dims (15+22+45+30+12)/5 = 24.8 → 25. Best-fit: offline keyword/formatting helpers and on-device classification — not reasoning, coding or agents.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (official Hugging Face card `Qwen/Qwen3.5-0.8B`, Artificial Analysis model page, apxml aggregate); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
