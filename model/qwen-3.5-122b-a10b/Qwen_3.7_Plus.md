# Qwen 3.5 122B A10B — findings by Qwen 3.7 Plus

- Source: Alibaba (`qwen-3.5-122b-a10b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B A10B
- **Short description:** Alibaba's 122B/10B-active MoE from the Qwen 3.5 family. Natively multimodal with 262K context, open weights. Strong agentic tool use and coding at compact active-parameter count.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-122B-A10B`); OpenRouter; OpenCode Zen `opencode/qwen-3.5-122b-a10b`.
- **Release / knowledge:** February 2026; knowledge cutoff not publicly stated.
- **IDs:** `opencode/qwen-3.5-122b-a10b` (OpenCode Zen).
- **Context window:** 262,144 tokens (262K) (per BenchLM).
- **Modalities:** Text, image, video in; text out; reasoning mode; tool calling.
- **Pricing (as of 2026-10-20):** Open weights; hosted pricing varies by provider.
- **Architecture:** Sparse MoE, 122B total / 10B active per token; open weights; reasoning enabled.

### Raw benchmarks found

> Sources: Qwen3.5-122B-A10B model card (Hugging Face), BenchLM (benchlm.ai/models/qwen3-5-122b-a10b, 2026-10-20), Artificial Analysis (via BenchLM). Coverage: 34 of 666 benchmarks — good coverage.

Agent / tool use:

- τ²-bench: **93.6%** (Artificial Analysis via BenchLM — exceptional)
- Terminal-Bench 2.0: **49.4%** (Qwen model card)
- BrowseComp: **63.8%** (Qwen model card)
- OSWorld-Verified: **58.0%** (Qwen model card)
- GDPval-AA: **15.7%** normalized / **925 Elo** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (Artificial Analysis via BenchLM)
- GPQA: **86.6%** (Qwen model card)
- MMLU-Pro: **86.7%** (Qwen model card)
- SuperGPQA: **67.1%** (Qwen model card)
- AA-LCR: **76.3%** (Artificial Analysis)
- AA-HLE: **25.2%** (Artificial Analysis)
- CritPt: **0.6%** (Artificial Analysis — extremely weak)
- AA Intelligence Index: **15.6%** (Artificial Analysis)
- LongBench v2: **60.2%** (Qwen model card)
- AA-Omniscience Index: **-41.5%** (Artificial Analysis — very negative)
- AA-Omniscience Accuracy: **24.4%** / Hallucination Rate: **87.1%** (Artificial Analysis)
- IFEval: **93.4%** / IFBench: **75.7%** (Qwen model card / AA)

Coding:

- SWE-bench Verified: **72.0%** (Qwen model card)
- LiveCodeBench v6: **78.9%** (Qwen model card)
- Terminal-Bench 2.0: **49.4%** (Qwen model card)
- AA-SciCode: **39.7%** (Artificial Analysis)
- AA Coding Index: **45.7%** (Artificial Analysis)

Multimodal & Grounded:

- MMMU-Pro: **76.9%** (Qwen model card)
- MMMU: **83.9%** (Qwen blog)
- MMVU: **74.7%** (Qwen blog)
- MathVision: **86.2%** (Qwen model card)
- CharXiv: **77.2%** / V*: **93.2%** (Qwen model card)
- AA-MMMU-Pro: **75.0%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 75/100.** τ²-bench 93.6% is exceptional. BrowseComp 63.8% and OSWorld 58.0% are strong. However, Terminal-Bench 2.0 49.4% and GDPval-AA 15.7% are weak. Capped by weak GDPval-AA.
- **Reasoning: 55/100.** GPQA Diamond 85.7%, MMLU-Pro 86.7%, SuperGPQA 67.1% are strong. However, HLE 25.2%, CritPt 0.6%, Intelligence Index 15.6%, and Omniscience Index -41.5% are very weak. Capped by extremely poor CritPt and Omniscience reliability.
- **Context window: 80/100.** 262K tokens — solid. AA-LCR 76.3% confirms effective long-context reasoning. LongBench v2 60.2% is decent. Docked 20 for not reaching 1M tier.
- **Multimodal: 72/100.** Natively multimodal (text, image, video). MMMU-Pro 76.9%, MMMU 83.9%, MathVision 86.2%, V* 93.2% are all strong. Excellent multimodal capability. Capped by lack of video-specific benchmarks.
- **Coding: 68/100.** SWE-bench Verified 72.0% is strong. LiveCodeBench 78.9% is excellent. Terminal-Bench 2.0 49.4% is moderate. SciCode 39.7% is weak. Capped by moderate Terminal-Bench and weak SciCode.
- **Cost efficiency: 90/100.** Open weights; only 10B active params — very efficient to self-host.
- **Overall Score: 70/100.** Mean of five non-cost dims: (75 + 55 + 80 + 72 + 68) / 5 = 70.0, half-up = 70. Strong open-weight 122B/10B MoE: exceptional τ²-bench (93.6%), strong multimodal (MMMU 83.9%, MathVision 86.2%), good coding (SWE-bench 72%), 262K context. However, held back by extremely poor CritPt (0.6%), weak Omniscience (-41.5%), and moderate Terminal-Bench (49.4%). Best fit for: multimodal agentic workflows, tool-calling applications, and self-hosted deployments needing strong vision + coding.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across Qwen model card on Hugging Face, BenchLM, Artificial Analysis, and Qwen blog; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
