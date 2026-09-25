# Qwen3.8-Max — findings by Muse Glimmer 30B

- Source: Alibaba/qwen3.8-max
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba’s flagship 2.4T sparse MoE released August 2026, focused on autonomous coding, long-horizon agentic work, office productivity and multimodal understanding.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.8-max`; OpenCode Zen `alibaba/qwen3-8-max`. Chat Completions API.
- **Release / knowledge:** 2026-08-03 announcement; snapshot qwen3.8-max-0902 released 2026-09-02.
- **IDs:** `alibaba/qwen3-8-max` (no Zen Free ID). No Free ID on Zen.
- **Context window:** 1,000,000 tokens total; max input 991,808; max output 131,072. Verified on Alibaba Model Studio.
- **Modalities:** Text, image, video in; text out; function calling, structured outputs, web search, reasoning mode.
- **Pricing (as of 2026-09-25):** Singapore $2.00 / 1M input, $6.00 / 1M output; China $1.65 / 1M input, $4.95 / 1M output. Paid only, no free tier.
- **Architecture:** 2.4 trillion parameter sparse MoE, ~95B active per token. Proprietary.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:
- Terminal-Bench 2.1: **86.6%** (BenchLM)
- OSWorld-Verified: **86.1%** (BenchLM)
- Toolathlon-Verified: **72.5%** (BenchLM)
- GDPval-AA: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: **92.6%** (BenchLM)
- HLE: **43.6%** (BenchLM)
- MRCRv2: **92.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **45** (Artificial Analysis)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:
- SWE-bench Pro: **67.7%** (BenchLM)
- DeepSWE: **56.6%** (BenchLM)
- LiveCodeBench (Vals): **87.9%** (BenchLM)
- SWE-bench (Vals): **85.6%** (BenchLM)

Long context:
- Context window 1M reported; no long-context retrieval benchmark publicly published for this exact ID.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 86.6% and OSWorld-Verified 86.1% place it near frontier agentic tool use, capped by lack of published GDPval-AA.
- **Reasoning: 92/100.** GPQA Diamond 92.6% and MRCRv2 92.9% are frontier-level; HLE 43.6% supports strong reasoning.
- **Context window: 97/100.** 1M total window with 131K output, verified on Alibaba Model Studio; tiered mapping ≥1M.
- **Multimodal: 85/100.** Native image and video input with text output; video input pushes score into 75–90 band.
- **Coding: 78/100.** SWE-bench Pro 67.7% and DeepSWE 56.6% show strong coding but below DeepSWE 74%+ frontier.
- **Cost efficiency: 70/100.** Paid $2/$6 per 1M; moderate price point for flagship performance.
- **Overall Score: 88/100.** Mean of the five quality dims; best fit for autonomous coding / long-horizon agentic work.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
