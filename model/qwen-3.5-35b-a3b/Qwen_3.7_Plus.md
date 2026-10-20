# Qwen 3.5 35B A3B — findings by Qwen 3.7 Plus

- Source: Alibaba (`qwen-3.5-35b-a3b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B A3B
- **Short description:** Alibaba's 35B/3B-active compact MoE from the Qwen 3.5 family. Natively multimodal with 262K context, open weights. Designed for efficient local deployment with strong agentic and coding capability.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-35B-A3B`); OpenRouter; OpenCode Zen `opencode/qwen-3.5-35b-a3b`.
- **Release / knowledge:** February 2026; knowledge cutoff not publicly stated.
- **IDs:** `opencode/qwen-3.5-35b-a3b` (OpenCode Zen).
- **Context window:** 262,144 tokens (262K) (per BenchLM).
- **Modalities:** Text, image, video in; text out; reasoning mode; tool calling.
- **Pricing (as of 2026-10-20):** Open weights; hosted pricing varies by provider.
- **Architecture:** Sparse MoE, 35B total / 3B active per token; open weights; reasoning enabled.

### Raw benchmarks found

> Sources: Qwen3.5-35B-A3B model card (Hugging Face), BenchLM (benchlm.ai/models/qwen3-5-35b-a3b, 2026-10-20), Artificial Analysis (via BenchLM). Coverage: 31 of 666 benchmarks.

Agent / tool use:

- τ²-bench: **89.2%** (Artificial Analysis via BenchLM — strong)
- Terminal-Bench 2.0: **40.5%** (Qwen model card)
- BrowseComp: **61.0%** (Qwen model card)
- OSWorld-Verified: **54.5%** (Qwen model card)

Reasoning / knowledge:

- GPQA Diamond: **84.5%** (Artificial Analysis via BenchLM)
- GPQA: **84.2%** (Qwen model card)
- MMLU-Pro: **85.3%** (Qwen model card)
- SuperGPQA: **63.4%** (Qwen model card)
- AA-LCR: **72.0%** (Artificial Analysis)
- AA-HLE: **21.0%** (Artificial Analysis)
- CritPt: **0.9%** (Artificial Analysis — extremely weak)
- AA Intelligence Index: **19.3%** (Artificial Analysis)
- LongBench v2: **59.0%** (Qwen model card)
- AA-Omniscience Index: **-48.1%** (Artificial Analysis — very negative)
- IFEval: **91.9%** / IFBench: **72.5%** (Qwen model card / AA)

Coding:

- SWE-bench Verified: **69.2%** (Qwen model card)
- LiveCodeBench v6: **74.6%** (Qwen model card)
- SWE-Rebench: **53.7%** (SWE-Rebench leaderboard)
- Terminal-Bench 2.0: **40.5%** (Qwen model card)

Multimodal & Grounded:

- MMMU-Pro: **75.1%** (Qwen model card)
- MMMU: **81.4%** (Qwen blog)
- MMVU: **72.3%** (Qwen blog)
- CharXiv: **77.5%** (Qwen model card)
- AA-MMMU-Pro: **72.7%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-bench 89.2% is strong. BrowseComp 61.0% and OSWorld 54.5% are solid. Terminal-Bench 2.0 40.5% is moderate. Capped by moderate Terminal-Bench.
- **Reasoning: 52/100.** GPQA Diamond 84.5%, MMLU-Pro 85.3% are strong. However, CritPt 0.9%, HLE 21.0%, Intelligence Index 19.3%, Omniscience Index -48.1% are very weak. Capped by extremely poor CritPt and Omniscience.
- **Context window: 80/100.** 262K tokens. AA-LCR 72.0% is decent. LongBench v2 59.0% is moderate. Docked 20 for not reaching 1M tier.
- **Multimodal: 68/100.** Natively multimodal. MMMU-Pro 75.1%, MMMU 81.4% are solid. Slightly below 27B and 122B variants. Capped by lack of video-specific benchmarks.
- **Coding: 65/100.** SWE-bench Verified 69.2% is solid. LiveCodeBench 74.6% is good. SWE-Rebench 53.7% is moderate. Terminal-Bench 2.0 40.5% is moderate. Capped by moderate Terminal-Bench and SWE-Rebench.
- **Cost efficiency: 95/100.** Open weights, only 3B active — extremely efficient to self-host on consumer hardware.
- **Overall Score: 67/100.** Mean of five non-cost dims: (70 + 52 + 80 + 68 + 65) / 5 = 67.0, half-up = 67. Compact open-weight 35B/3B MoE: strong τ²-bench (89.2%), solid multimodal (MMMU 81.4%), good coding (SWE-bench 69.2%), 262K context — all with only 3B active params for ultra-efficient deployment. However, held back by extremely poor CritPt (0.9%), very weak Omniscience (-48.1%), and moderate Terminal-Bench (40.5%). Best fit for: ultra-efficient local deployment, edge devices, and cost-sensitive multimodal agentic workflows.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across Qwen model card on Hugging Face, BenchLM, Artificial Analysis, and Qwen blog; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
