# Qwen 3.5 Flash Lite — findings by Muse Glimmer 30B

- Source: Alibaba Qwen (opencode/qwen-3.5-flash-lite)
- Date: 2026-10-27
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Ultra-low-cost multimodal API tier from Alibaba based on Qwen3.5-35B-A3B, 1M context for high-volume work.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5-flash-lite`; Alibaba Cloud Model Studio `qwen3.5-flash`; Chat Completions.
- **Release / knowledge:** 2026-02 release snapshot; knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.5-flash-lite`
- **Context window:** 1,000,000 total; 65,536 max output, verified Alibaba docs.
- **Modalities:** Text, image, video in; text out; tool calling, structured outputs, web search supported.
- **Pricing (as of 2026-10-27):** ~$0.10/$0.40 per 1M in/out commercial tier; ultra-low for volume.
- **Architecture:** 35B total / 3B active MoE, proprietary API tier.

### Raw benchmarks found

> Benchmarks reported for Qwen3.5-35B-A3B which underlies qwen3.5-flash.

Agent / tool use:

- BFCL-V4: **67.3** (Hugging Face README Qwen3.5-35B-A3B)
- TAU2-Bench: **81.2%** (Hugging Face README)
- Terminal Bench 2: **40.5%** (Hugging Face README)

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (Hugging Face README)
- MMLU-Pro: **85.3%** (Hugging Face README)
- HLE w/ CoT: **22.4%** (Hugging Face README)

Coding:

- SWE-bench Verified: **69.2%** (Hugging Face README)
- LiveCodeBench v6: **74.6%** (Hugging Face README)
- Terminal Bench 2: **40.5%**

Long context:

- AA-LCR: **58.5%** (Hugging Face README)

### Normalized scores (1–100)

- **Tool use: 68/100.** BFCL-V4 67.3 + TAU2-Bench 81.2% strong; Terminal Bench 2 40.5% caps.
- **Reasoning: 75/100.** GPQA Diamond 84.2% and MMLU-Pro 85.3% high; HLE 22.4% limits ceiling.
- **Context window: 95/100.** 1M token tier.
- **Multimodal: 75/100.** Image/video in; no verified multimodal eval numbers for Lite tier.
- **Coding: 70/100.** SWE-bench Verified 69.2% + LiveCodeBench v6 74.6% solid for class.
- **Cost efficiency: 90/100.** Very low per-token cost for volume tier.
- **Overall Score: 77/100.** Mean of five quality dims (68+75+95+75+70)/5 = 76.6 → 77.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
