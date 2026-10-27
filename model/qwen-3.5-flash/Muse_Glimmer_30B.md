# Qwen 3.5 Flash — findings by Muse Glimmer 30B

- Source: Alibaba Cloud Model Studio / Qwen/Qwen3.5-35B-A3B
- Date: 2026-10-27
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 Flash
- **Short description:** Alibaba native vision-language Flash model built on Qwen3.5-35B-A3B hybrid linear-attention + sparse MoE architecture; optimized for high-throughput text + image + video understanding with 1M context.
- **Provider / access:** Alibaba Cloud Model Studio `qwen3.5-flash`; hosted version of Qwen3.5-35B-A3B; also available via OpenRouter.
- **Release / knowledge:** snapshot 2026-02-23; announced 2026-02-17; knowledge cutoff not published.
- **IDs:** qwen3.5-flash; Qwen/Qwen3.5-35B-A3B; functionally equivalent to qwen3.5-flash-2026-02-23.
- **Context window:** 1,000,000 total / 65,536 max output — verified Alibaba Cloud Model Studio context limits and Hugging Face README 262,144 native extensible to ~1,010,000.
- **Modalities:** input Text Image Video; output Text; function calling supported; structured outputs supported; web search supported.
- **Pricing (as of 2026-10-27):** OpenRouter $0.065 / 1M input, $0.26 / 1M output; Alibaba Model Studio $0.10 / 1M input, $0.40 / 1M output.
- **Architecture:** 35B total parameters, 3B activated per forward pass; 40 layers, 256 experts 8 routed +1 shared; Gated Delta Networks + Gated Attention MoE; vision encoder fused early.

### Raw benchmarks found

- Source, Hugging Face Qwen/Qwen3.5-35B-A3B README, 2026-03-09
- Source, Alibaba Cloud Model Studio qwen3.5-flash documentation, 2026-10-11
- Source, Vals AI Qwen 3.5 Flash benchmarks, 2026-10-17

Knowledge / reasoning:

- MMLU-Pro: 85.3
- MMLU-Redux: 93.3
- C-Eval: 90.2
- SuperGPQA: 63.4
- GPQA Diamond: 84.2
- HLE w/ CoT: 22.4
- HMMT Feb 25: 89.0
- HMMT Nov 25: 89.2

Instruction following:

- IFEval: 91.9
- IFBench: 70.2
- MultiChallenge: 60.0

Long context:

- AA-LCR: 58.5
- LongBench v2: 59.0

Coding:

- SWE-bench Verified: 69.2
- Terminal Bench 2: 40.5
- LiveCodeBench v6: 74.6
- OJBench: 36.0
- FullStackBench en: 58.1
- FullStackBench zh: 55.0

Agent / tool use:

- BFCL-V4: 67.3
- TAU2-Bench: 81.2
- DeepPlanning: 22.8
- HLE w/ tool: 47.4
- Browsecomp: 61.0
- Browsecomp-zh: 69.5

Multimodal / multilingual:

- MMMLU: 85.2
- MMLU-ProX: 81.0
- INCLUDE: 79.7
- Global PIQA: 86.6
- VITA-Bench: 31.9

### Normalized scores (1–100)

- **Tool use: 68/100.** BFCL-V4 67.3% and TAU2-Bench 81.2% show solid function-calling/agent use, tempered by DeepPlanning 22.8% and HLE w/ tool 47.4%.
- **Reasoning: 74/100.** GPQA Diamond 84.2% and MMLU-Pro 85.3% with HMMT ~89% indicate strong knowledge/reasoning, limited by HLE w/ CoT 22.4%.
- **Context window: 95/100.** 1M total context with 65,536 max output verified; native 262K extensible to ~1M per README.
- **Multimodal: 75/100.** Text + image + video input, text output confirmed; no native audio/video generation; VITA-Bench 31.9% indicates modest visual reasoning.
- **Coding: 67/100.** SWE-bench Verified 69.2% and LiveCodeBench v6 74.6% offset by Terminal Bench 2 40.5% and OJBench 36.0%.
- **Cost efficiency: 88/100.** $0.065/$0.26 per 1M via OpenRouter with 1M context places it in low-cost Flash tier.
- **Overall Score: 76/100.** mean of Tool 68 + Reasoning 74 + Context 95 + Multimodal 75 + Coding 67 = 75.8 → 76.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
