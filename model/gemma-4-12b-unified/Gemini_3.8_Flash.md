# Gemma 4 12B Unified — findings by Gemini 3.8 Flash

- Source: Google / DeepMind (`google/gemma-4-12b-unified`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's 12B open-weight dense foundation model featuring an encoder-free unified decoder architecture that projects raw image patches and audio waveforms directly into LLM embedding space, with native 256K context and thinking mode.
- **Provider / access:** Hugging Face open weights (`google/gemma-4-12b-it`), Ollama, vLLM, Kaggle, Vertex AI.
- **Release / knowledge:** 2026 release; Gemma open license; knowledge cutoff early 2026.
- **IDs:** `google/gemma-4-12b-unified`, `google/gemma-4-12b-it`
- **Context window:** 262,144 tokens total (256K / 262K context window; up to 32,768 max output tokens).
- **Modalities:** Native multimodal input (text, images, audio); text output; configurable thinking mode.
- **Pricing (as of 2026-10-22):** Free open weights ($0.00); hosted inference ~$0.10 / 1M input, ~$0.25 / 1M output tokens.
- **Architecture:** 12B parameter dense decoder-only transformer with unified cross-modal token projection without discrete vision/audio encoders.

### Raw benchmarks found

Agent / tool use:

- Tau2: **76.9%** (agentic tool execution average)
- Terminal-Bench: **38.4%**
- BigBench Extra Hard (BBEH): **74.4%** (with thinking mode)

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (with thinking mode)
- Humanity's Last Exam (HLE): **19.5%** (no tools) / **26.5%** (with search)
- MMLU-Pro: **78.2%**
- Artificial Analysis Intelligence Index: **34**

Coding:

- HumanEval: **88.6%**
- LiveCodeBench: **66.4%**
- SWE-bench Verified: **46.5%**

Long context / multimodal:

- DocVQA: **91.4%**
- Native audio waveform comprehension across supported languages.
- 256K context window supported on consumer hardware (16GB RAM/VRAM).

### Normalized scores (1–100)

- **Tool use: 68/100.** Solid agentic tool interaction and schema execution evidenced by 76.9% on Tau2 and 74.4% on BBEH.
- **Reasoning: 74/100.** Impressive reasoning density for a 12B model with thinking enabled (78.8% GPQA Diamond, 26.5% HLE with search, 34 AA Intelligence Index).
- **Context window: 74/100.** Full 256K context capacity supported locally on modern laptops and workstations.
- **Multimodal: 82/100.** Groundbreaking encoder-free unified perception accepting native text, images, and audio waveforms; text out.
- **Coding: 68/100.** Capable code writing, refactoring, and debugging verified by 88.6% on HumanEval, 66.4% on LiveCodeBench, and 46.5% on SWE-bench Verified.
- **Cost efficiency: 100/100.** Completely free open weights running smoothly on consumer workstations with 16GB RAM.
- **Overall Score: 73/100.** Arithmetic mean of five quality dimensions: (68 + 74 + 74 + 82 + 68) / 5 = 73.2 → 73. Highly innovative 12B unified multimodal open model delivering native audio, vision, and deep thinking on local hardware.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Google DeepMind technical reports, Hugging Face model cards, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
