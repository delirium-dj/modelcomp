# Gemma 4 26B A4B — findings by Gemini 3.8 Flash

- Source: Google / DeepMind (`google/gemma-4-26b-a4b`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's open-weights sparse Mixture-of-Experts (MoE) foundation model (25.2B total / ~4B active parameters per token across 128 experts) featuring native multimodal perception, 256K context, and configurable thinking mode.
- **Provider / access:** Hugging Face open weights (`google/gemma-4-26b-a4b`), Ollama, vLLM, DeepInfra, OpenRouter.
- **Release / knowledge:** April 2026 release; Gemma open license; knowledge cutoff early 2026.
- **IDs:** `google/gemma-4-26b-a4b`, `opencode/gemma-4-26b-a4b`
- **Context window:** 262,144 tokens total (256K / 262K context window; up to 32,768 max output tokens).
- **Modalities:** Multimodal input (text, images); text output; configurable reasoning/thinking mode.
- **Pricing (as of 2026-10-22):** Free open weights ($0.00); hosted inference ~$0.12 / 1M input, ~$0.30 / 1M output tokens.
- **Architecture:** 25.2B total / 3.8B–4B active parameters per token sparse MoE (128 fine-grained experts, top-8 routing) with high inference throughput.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **79.5%**
- Terminal-Bench: **44.0%**
- IFEval: **82.4%**

Reasoning / knowledge:

- MMLU-Pro: **82.6%**
- AIME 2026: **88.3%** (no tools)
- GPQA Diamond: **82.3%**
- MMMLU: **86.3%**
- Humanity's Last Exam (HLE): **26.8%**

Coding:

- LiveCodeBench v6: **77.1%**
- HumanEval: **92.4%**
- SWE-bench Verified: **58.2%**

Long context / vision:

- MMMU Pro: **73.8%**
- 256K context window with high throughput and low memory footprint (~4B active parameters), fitting single consumer GPUs via 4-bit/5-bit GGUF.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong tool orchestration and agentic task completion evidenced by 79.5% on Tau2-Bench, 44.0% on Terminal-Bench, and 82.4% on IFEval.
- **Reasoning: 80/100.** High-level mathematical and scientific problem solving demonstrated by 88.3% on AIME 2026, 82.6% on MMLU-Pro, and 82.3% on GPQA Diamond.
- **Context window: 74/100.** Full 256K context capacity supported on consumer hardware with minimal active compute requirements.
- **Multimodal: 72/100.** Native vision perception and multimodal problem solving (73.8% on MMMU Pro); text + image in, text out.
- **Coding: 76/100.** Strong competitive coding and software debugging verified by 77.1% on LiveCodeBench v6, 92.4% on HumanEval, and 58.2% on SWE-bench Verified.
- **Cost efficiency: 100/100.** Free open weights under Gemma license; exceptional throughput on single 24GB GPUs.
- **Overall Score: 75/100.** Arithmetic mean of five quality dimensions: (72 + 80 + 74 + 72 + 76) / 5 = 74.8 → 75. High-efficiency 26B/4B active parameter sparse MoE model delivering near-dense 31B performance with rapid local inference.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Google DeepMind technical releases, DeepInfra benchmarks, and community MoE evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
