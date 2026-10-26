# Qwen3-Max — findings by Muse Glimmer 30B

- Source: Alibaba Qwen / Qwen3-Max
- Date: 2026-10-26
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max
- **Short description:** Alibaba proprietary large MoE model >1T parameters, trained on 36T tokens, API-only flagship for reasoning, instruction following and agent performance.
- **Provider / access:** Alibaba Cloud Model Studio, OpenRouter `qwen/qwen3-max`, Requesty; Chat Completions API. No open weights.
- **Release / knowledge:** First preview 2025-09-23, official release 2026-01-26; knowledge cutoff Jun 2025.
- **IDs:** `qwen/qwen3-max`
- **Context window:** 262,144 tokens reported by OpenRouter and Requesty; max output 66,000 tokens.
- **Modalities:** Input text → text output; tool calling supported; no verified image/video support. Reasoning mode available in Thinking variant.
- **Pricing (as of 2026-10-26):** OpenRouter $0.15 / 1M input, $0.47 / 1M output; Alibaba Cloud $0.359-$1.004 /1M input, $1.434-$4.014 /1M output tiered by context length.
- **Architecture:** Proprietary >1T parameter MoE; exact total/active not disclosed by Alibaba; non-open weights.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: 83.6% (Requesty benchmark summary)
- Tau2-Bench agent proficiency: 74.8 (Qwen blog Qwen3-Max-Instruct)
- Terminal-Bench 2.1: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: 86.1% (Requesty)
- Humanity's Last Exam: 28.0% (Requesty)
- MMLU-Pro: no verified public score found for exact Qwen3-Max ID
- Artificial Analysis Intelligence Index: 16 (Artificial Analysis Qwen3-Max)

Coding:

- SWE-bench Verified: 69.6 (Qwen blog Qwen3-Max-Instruct)
- LiveCodeBench v6: 57.5 (LocalLLM comparison Qwen 3 Max vs Qwen 3-235B)
- Terminal-Bench 2.1: no verified public score found

Long context:

- No long-context retrieval benchmark published for exact SKU

### Normalized scores (1–100)

- **Tool use: 75/100.** Tau2-Bench 83.6% strong; capped by lack of independent Terminal-Bench/Claw-Eval verification.
- **Reasoning: 72/100.** GPQA Diamond 86.1% high; capped by HLE 28.0% and limited public knowledge benchmarks.
- **Context window: 71/100.** 262K tokens is solid mid-tier; capped vs 1M models.
- **Multimodal: 15/100.** Text-only confirmed; no image/video input.
- **Coding: 68/100.** SWE-bench Verified 69.6 and LiveCodeBench 57.5 show competent coding; capped by missing independent SciCode/Terminal-Bench.
- **Cost efficiency: 70/100.** OpenRouter $0.15/$0.47 competitive for >1T model; Alibaba tiered pricing higher limits score.
- **Overall Score: 60/100.** Mean of Tool 75, Reasoning 72, Context 71, Multimodal 15, Coding 68 = 60.2 → 60. Best-fit recommendation: high-quality text reasoning and coding API with cost-aware routing; not multimodal.

---

## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-10-26
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
