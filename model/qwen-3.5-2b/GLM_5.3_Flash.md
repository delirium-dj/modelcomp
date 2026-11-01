# Qwen 3.5 2B — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.5-2B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-2B (post-trained; a Qwen3.5-2B-Base also exists)
- **Short description:** Alibaba's smallest Qwen3.5 open model: a ~2B hybrid Mamba2+Transformer multimodal (WebSailor-style) workhorse with 262K context and image/video input, intended for prototyping, task-specific fine-tuning and single-GPU deployment — Apache 2.0.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-2B`); cheap/free hosted lanes on gateways; OpenCode Zen `opencode/qwen-3.5-2b`.
- **Release / knowledge:** Released 2026-03 (HF repo dated 2026-03-09; indexers say 2026-03-02). Knowledge cutoff not stated on the card.
- **IDs:** `Qwen/Qwen3.5-2B` (HF); `opencode/qwen-3.5-2b` (Zen).
- **Context window:** 262,144 tokens native (model card via third-party architecture audit); 256K per some catalogues; ~81,920 max output per provider rows (not confirmed on the HF card).
- **Modalities:** Text, image, video in; text out (image-text-to-text pipeline). Dual mode: thinking (temp 0.6, top_p 0.95, top_k 20) / non-thinking (temp 0.7, top_p 0.8); 200+ languages.
- **Pricing (as of 2026-11-01):** Free Apache 2.0 open weights; cheapest hosted routes at $0.00/$0.00.
- **Architecture:** ~2B parameters; hybrid Mamba2 + Transformer, 24 layers, hidden 2048, GQA with 2 KV heads (community architecture audit of the BF16 weights); BF16 safetensors + GGUF releases.

### Raw benchmarks found

(vendor HF model card; language scores in Thinking mode, vision scores as Thinking/Non-thinking)

Agent / tool use:

- TAU2-Bench: **48.8%** (with the Claude-Opus-4.5-card airline fix)
- BFCL-V4: **43.6%**

Reasoning / knowledge (thinking mode):

- GPQA Diamond: **51.6%** (AA-measured lane: 46%)
- MMLU-Pro: **66.5%** (non-thinking: 55.3; AA-indexed)
- MMLU-Redux: **79.6%**; C-Eval: **73.2%**; SuperGPQA: **37.5%**; MMMLU: **63.1%**
- HMMT Feb 2025: **22.9%**; PolyMATH: **26.1%**
- HLE: **3%** (AA-measured) — no-tools card figure not published
- AA measured (opper.ai): Intelligence Index **6.9** (#550/704), Coding Index **2.9**

Math / coding:

- LiveCodeBench v6: **69.4%** per a community comparison table (r/LocalLLaMA cross-family table; the HF card publishes no LCB row for 2B — provenance uncertain, treat as provisional)

Long context:

- AA-LCR: **25.6%**; LongBench v2: **38.7%** (Beats-model-class mid scores)

Vision / multimodal:

- MMMU: **64.2/64.2** (T/NT); MMMU-Pro: **50.3/47.7**; MathVista-mini: **76.7/73.9**; VlmsAreBlind: **75.8/74.3**
- OCR: OCRBench **84.5/85.4**, CC-OCR 72.9/75.8, OmniDocBench 79.8/80.9, CharXiv(RQ) 58.8/52.6, MMLongBench-Doc 45.4/38.8
- General VQA: MMBench 83.3, MMStar 71.7, AI2D 83.3, RealWorldQA 74.5, CountBench 91.4, RefCOCO-avg 84.8
- Video: VideoMME 75.6 (w sub), MLVU 76.2, VideoMMMU 62.1, LVBench 57.1, MVBench 64.9, MMVU 48.6
- Visual agent: ScreenSpot Pro **54.5** (non-thinking col)
- Medical: SLAKE 74.4/67.5, MedXpertQA-MM 26.9/19.1

### Normalized scores (1–100)

- **Tool use: 48/100.** TAU2 48.8 and BFCL 43.6 are modest but real; measured agent capability below 4B siblings.
- **Reasoning: 56/100.** GPQA 51.6 / MMLU-Pro 66.5 in thinking mode with HMMT ~23; AA Intelligence 6.9 confirms sub-4B-class floor on frontier exams.
- **Context window: 62/100.** Verified 262K window with measured (mid) long-context scores (LongBench 38.7, AA-LCR 25.6).
- **Multimodal: 74/100.** Full image+video input with a strong OCR/document suite for the size (OCRBench 84.5, OmniDocBench ~80) and usable Gamma vision agent work.
- **Coding: 50/100.** Only contest-coding evidence (community LCB 69.4, provenance uncertain; AA Coding 2.9) — no SWE-class row; scored conservatively.
- **Cost efficiency: 97/100.** Apache 2.0 weights free; hosted lanes available at literal $0 — best-in-class value for its compute class.
- **Overall Score: 58/100.** Mean of the five quality dims (48+56+62+74+50)/5 = 58.0 → 58. Best fit: prototyping, fine-tuning, OCR/document pipelines and multimodal research on a single consumer GPU.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (official Qwen HF model card with full language + vision-language tables, AA-measured rows, community architecture audit); scores are normalized 1–100 interpretations, not official vendor scores. The one community-sourced coding figure is labelled as uncertain provenance.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-2B model card (language + VL tables, Apache 2.0)](https://huggingface.co/Qwen/Qwen3.5-2B)
  - [opper.ai — QA-independent AA rows (Intelligence 6.9, GPQA 46, HLE 3)](https://opper.ai/alibaba/qwen3-5-2b)
  - [llmreference.com — Qwen3.5-2B release/GPQA/MMLU-Pro rows](https://www.llmreference.com/model/qwen3.5-2b)
  - [r/LocalLLaMA — Gemma 4 vs Qwen 3.5 community comparison (LCB v6 row, provenance labeled)](https://www.reddit.com/r/LocalLLaMA/comments/1sbp8ny/gemma_4_vs_qwen_35_benchmark_comparison/)
  - [Abliterlitics — Qwen3.5-2B architecture details (hybrid Mamba2+Transformer, 24 layers)](https://abliterlitics.dev/models/qwen3.5-2b/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
