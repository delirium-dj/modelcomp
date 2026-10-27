# Qwen3.5-4B — findings by GPT 6 Astra

- Source: Alibaba / Qwen3.5-4B
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Identity:** Small open-weight multimodal instruction/reasoning checkpoint `Qwen/Qwen3.5-4B`, distinct from its Base checkpoint and Qwen3 4B. Dense hybrid attention/linear-attention architecture, approximately 4B parameters, Apache 2.0. Exact total including vision components and knowledge cutoff not verified.
- **Access:** Local vLLM with Chat Completions-compatible serving; DeepInfra FP8 and Requesty/Runware. No distinct Zen Free ID verified. Qwen3.5 family launched in February 2026; an exact small-checkpoint release day is not asserted here.
- **Context:** Official serving recipe sets 262,144. Requesty advertises 262K output, but input and output share the window; no universal separate full-window output guarantee established.
- **Modalities:** Text/image/video understanding, text output, thinking and tools; no native audio verified.
- **Pricing (2026-10-27):** [AA provider comparison](https://artificialanalysis.ai/models/qwen3-5-4b/providers) lists DeepInfra FP8 $0.03 input/$0.15 output per million. [Requesty](https://www.requesty.ai/model/qwen/qwen3.5-4b) lists Runware $0.05/$0.07/$0.005 cached, with 5% pay-as-you-go surcharge or no surcharge using own keys. Local weights do not imply free hardware.

### Raw benchmarks

[Official model card](https://huggingface.co/Qwen/Qwen3.5-4B), vendor measurements:

| Area | Benchmark | Result |
|---|---|---:|
| Tools | BFCL v4 / Tau2 | 50.3% / 79.9% |
| Tools | VITA / DeepPlanning | 22.0% / 17.6% |
| Visual agents | OSWorld Verified / AndroidWorld | 35.6% / 58.6% |
| Reasoning | GPQA Diamond / MMLU-Pro | 76.2% / 79.1% |
| Math | HMMT February / November 2025 | 74.0% / 76.8% |
| Coding | LiveCodeBench v6 / OJBench | 55.8% / 24.1% |
| Context | AA-LCR / LongBench v2 | 57.0% / 50.0% |
| Vision | MMMU-Pro / MathVision | 66.3% / 74.6% |
| Video | VideoMME with / without subtitles | 83.5% / 76.9% |
| Documents | OmniDocBench 1.5 / OCRBench | 86.2 / 85.0 |
| Instructions | IFEval / IFBench | 89.8% / 59.2% |

[AA independent small-model evaluation](https://artificialanalysis.ai/articles/qwen3-5-small-models) places reasoning-mode 4B at **27 on its historical Intelligence Index**, not the current v4.3.2 scale. [AA announcement](https://x.com/ArtificialAnlys/status/2029496075523141933) reports independent **MMMU-Pro approximately 65%**, broadly corroborating vendor 66.3. The article notes very high output consumption across the small-model family; no single family-wide token number is assigned to this checkpoint.

The [non-reasoning comparison](https://artificialanalysis.ai/models/comparisons/qwen3-5-4b-non-reasoning-vs-gemini-3-flash-reasoning) lists HLE 8%, CritPt 0%, Omniscience −75 and LCR v1.1 35%. These are a distinct mode, not the reasoning scores assessed here. No verified reasoning-mode exact-model HLE/CritPt, SWE-bench, terminal, SciCode, DeepSWE, Claw-Eval, MCP-Atlas or Toolathon score recovered. No high-recall 512K+ retrieval established.

### Reconciliation and limitations

Tau2 79.9 is much stronger than BFCL 50.3 and planning 17.6; selecting Tau2 alone would overstate agent breadth. Visual task results are not proof of general repository engineering. Third-party prices of $0.08/$0.12 with 32.8K context and $0.20/$0.20 for non-reasoning describe different deployments; they do not override the official 262K recipe. Quantization, context allocation and reasoning budgets affect local usability. Independent vision corroboration is stronger than independent coding coverage.

### Normalized scores (1–100)

- **Tool use: 50/100.** BFCL 50.3, planning 17.6 and OSWorld 35.6 constrain autonomy despite strong Tau2.
- **Reasoning: 65/100.** GPQA 76.2 and math results support useful small-model reasoning; limited independent component coverage caps confidence.
- **Context window: 71/100.** Native 262K, but vendor LCR 57 and LongBench 50 imply imperfect effective recall.
- **Multimodal: 75/100.** Independent MMMU-Pro about 65 and vendor video/document results support broad visual understanding; no audio/output modalities.
- **Coding: 55/100.** LiveCodeBench 55.8 and OJBench 24.1 support assistance, with unverified repository repair and terminal autonomy.
- **Cost efficiency: 98/100.** Verified low paid hosting tariffs and small local footprint offer excellent value, subject to reasoning-token volume.
- **Overall Score: 63/100.** (50 + 65 + 71 + 75 + 55) / 5 = 63.2 → 63; inexpensive compact vision/reasoning with limited autonomous engineering.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Four targeted public web searches covering primary checkpoint, independent evaluation, pricing and mode-specific evidence; normalized scores are interpretations.
