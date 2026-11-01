# Qwen 3.5 4B — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.5-4B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-4B (post-trained; a Qwen3.5-4B-Base also exists)
- **Short description:** Alibaba's dense ~4B multimodal workhorse of the Qwen3.5 open family: 262K native context (YaRN-extendable to ~1M), image/video input, Apache 2.0 — built for light tools, local assistants and high-volume VL pipelines; beats the older Qwen3-30B on GPQA and long-context despite being ~7× smaller.
- **Provider / access:** Open weights on Hugging Face/ModelScope; hosted free lane verified on SiliconFlow; OpenCode Zen `opencode/qwen-3.5-4b`.
- **Release / knowledge:** Released 2026-03 (HF repo dated 2026-03-09). Knowledge cutoff not stated on the card.
- **IDs:** `Qwen/Qwen3.5-4B` (HF); `opencode/qwen-3.5-4b` (Zen); free hosted lane via SiliconFlow.
- **Context window:** 262,144 native; extensible to ~1,010,000 via YaRN; 81,920 max output.
- **Modalities:** Text, image, video in; text out; thinking mode (HF tables report thinking-mode language scores); tool calling supported.
- **Pricing (as of 2026-11-01):** Free Apache 2.0 open weights; verified free hosted lane (SiliconFlow) — effectively $0.
- **Architecture:** Dense 4.66B parameters; eight quantized variants published; BF16 safetensors.

### Raw benchmarks found

(vendor model card, thinking mode unless noted; third-party where labelled)

Agent / tool use:

- TAU2-Bench: **79.9%** (vendor, with the Opus-4.5-card airline fix)
- BFCL-V4: **50.3%**; VITA-Bench **22.0%**; DeepPlanning **17.6%**
- Terminal-Bench 2.1: **25.8%** (BenchmarkList Verified run, 125/196, 36th percentile)
- Visual agent: AndroidWorld **58.6%**; OSWorld-Verified **35.6%**; ScreenSpot Pro **60.3%**

Reasoning / knowledge:

- GPQA Diamond: **76.2%**; MMLU-Pro: **79.1%**; MMLU-Redux: **88.8%**; C-Eval: **85.1%**; SuperGPQA: **52.9%**
- HMMT Feb 2025: **74.0%**; HMMT Nov 2025: **76.8%**; PolyMATH: **51.1%**
- HLE: **7.8%** (third-party FitMyLLM aggregation); AA Intelligence Index **27.1** (third-party)

Coding:

- LiveCodeBench v6: **55.8%**; OJBench: **24.1%**; SciCode: **16.1%** (third-party); AA Coding Index **17.5** (third-party)

Long context:

- AA-LCR: **57.0%**; LongBench v2: **50.0%** (beats Qwen3-80B's 51.7/48.0 in the same table)

Vision / multimodal:

- MMMU **77.6%**, MMMU-Pro **66.3%**, MathVision **74.6%**, MathVista-mini **85.1%**, We-Math **75.4%**, DynaMath **83.3%**
- Documents/OCR: OmniDocBench 1.5 **86.2**, CC-OCR **76.7**, OCRBench **85.0**, CharXiv (RQ) **70.8**, MMLongBench-Doc **54.2**
- General VQA: AI2D **89.6%**, MMBench **89.4%**, RealWorldQA **79.5%**, MMStar **78.3%**, CountBench **96.3%**, V* **84.3/86.4**
- Video: VideoMME (w/ sub) **83.5%**, MLVU **82.8%**, VideoMMMU **74.1%**, MVBench **71.2%**, LVBench **66.4%**, MMVU **64.9%**

### Normalized scores (1–100)

- **Tool use: 56/100.** TAU2 79.9 is remarkable for 4B and AndroidWorld 58.6 shows usable visual-agent skills, but TB2.1 25.8 (third-party), BFCL 50.3 and VITA 22.0 cap it.
- **Reasoning: 72/100.** GPQA-D 76.2 and MMLU-Pro 79.1 with HMMT ~74–77 — exceptional per-parameter; HLE 7.8 marks the small-model ceiling.
- **Context window: 66/100.** 262K native with a verified YaRN path to ~1M; measured long-context reasoning (AA-LCR 57.0, LongBench 50.0) is mid — it beats older 30B/80B models, not current 1M-tier peers.
- **Multimodal: 80/100.** Full image+video input with strong measured VL rows across documents (OmniDocBench 86.2, OCRBench 85.0), video (VideoMME 83.5, MLVU 82.8) and STEM vision (MathVista 85.1, DynaMath 83.3) — the standout axis for the size.
- **Coding: 50/100.** LCB v6 55.8 with OJBench 24.1 and SciCode ~16 — light-coding tier only.
- **Cost efficiency: 97/100.** Apache 2.0 weights plus a verified free hosted lane — effectively zero cost.
- **Overall Score: 65/100.** Mean of the five quality dims (56+72+66+80+50)/5 = 64.8 → 65. Best fit: free/local multimodal assistants and document/video pipelines where 4B-class compute is the constraint.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (official Qwen HF model card tables, third-party verified runs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-4B model card (language + vision-language tables)](https://huggingface.co/Qwen/Qwen3.5-4B)
  - [BenchmarkList — Qwen3.5-4B verified Terminal-Bench 2.1 run](https://benchmarklist.com/models/qwen-qwen3.5-4b/)
  - [Awesome Agents — Qwen3.5-4B vs Qwen3-30B/80B comparison](https://awesomeagents.ai/models/qwen-3-5-4b/)
  - [FitMyLLM — Qwen3.5 4B spec & benchmark aggregation](https://www.fitmyllm.com/model/qwen3.5-4b)
  - [slm.expert — Qwen3.5-4B sourced score rows](https://slm.expert/models/qwen3-5-4b/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
