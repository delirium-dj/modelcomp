# Qwen 3.5 27B — findings by Qwen 3.7 Plus

- Source: Alibaba (`qwen-3.5-27b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's 27B dense reasoning model from the Qwen 3.5 family. Natively multimodal with 262K context, open weights. Exceptional τ²-bench (93.9%) and strong coding (SWE-bench 72.4%, LiveCodeBench 80.7%).
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-27B`); OpenRouter; OpenCode Zen `opencode/qwen-3.5-27b`.
- **Release / knowledge:** February 2026; knowledge cutoff not publicly stated.
- **IDs:** `opencode/qwen-3.5-27b` (OpenCode Zen).
- **Context window:** 262,144 tokens (262K) (per BenchLM).
- **Modalities:** Text, image, video in; text out; reasoning mode; tool calling.
- **Pricing (as of 2026-10-20):** Open weights; hosted pricing varies by provider.
- **Architecture:** Dense 27B parameters; open weights; reasoning enabled.

### Raw benchmarks found

> Sources: Qwen3.5-27B model card (Hugging Face), BenchLM (benchlm.ai/models/qwen3-5-27b, 2026-10-20), Artificial Analysis (via BenchLM). Coverage: 31 of 666 benchmarks.

Agent / tool use:

- τ²-bench: **93.9%** (Artificial Analysis via BenchLM — exceptional)
- Terminal-Bench 2.0: **41.6%** (Qwen model card)
- BrowseComp: **61.0%** (Qwen model card)
- OSWorld-Verified: **56.2%** (Qwen model card)

Reasoning / knowledge:

- GPQA Diamond: **85.8%** (Artificial Analysis via BenchLM)
- GPQA: **85.5%** (Qwen model card)
- MMLU-Pro: **86.1%** (Qwen model card)
- SuperGPQA: **65.6%** (Qwen model card)
- AA-LCR: **77.7%** (Artificial Analysis)
- AA-HLE: **23.9%** (Artificial Analysis)
- CritPt: **0.9%** (Artificial Analysis — extremely weak)
- AA Intelligence Index: **22.9%** (Artificial Analysis)
- LongBench v2: **60.6%** (Qwen model card)
- AA-Omniscience Index: **-44.0%** (Artificial Analysis — very negative)
- IFEval: **95.0%** / IFBench: **75.6%** (Qwen model card / AA)

Coding:

- SWE-bench Verified: **72.4%** (Qwen model card)
- LiveCodeBench v6: **80.7%** (Qwen model card)
- SWE-Rebench: **58.9%** (SWE-Rebench leaderboard)
- Terminal-Bench 2.0: **41.6%** (Qwen model card)

Multimodal & Grounded:

- MMMU-Pro: **75.0%** (Qwen model card / AA)
- MMMU: **82.3%** (Qwen blog)
- MMVU: **73.3%** (Qwen blog)
- CharXiv: **79.5%** (Qwen model card)
- MathVision: **86.0%** (Qwen model card)
- V*: **93.7%** (Qwen model card)

### Normalized scores (1–100)

- **Tool use: 73/100.** τ²-bench 93.9% is exceptional. BrowseComp 61.0% and OSWorld 56.2% are solid. Terminal-Bench 2.0 41.6% is moderate. Capped by moderate Terminal-Bench.
- **Reasoning: 55/100.** GPQA Diamond 85.8%, MMLU-Pro 86.1% are strong. However, CritPt 0.9%, HLE 23.9%, Intelligence Index 22.9%, Omniscience Index -44.0% are very weak. Capped by extremely poor CritPt and Omniscience.
- **Context window: 80/100.** 262K tokens. AA-LCR 77.7% is good. LongBench v2 60.6% is decent. Docked 20 for not reaching 1M tier.
- **Multimodal: 72/100.** Natively multimodal. MMMU-Pro 75%, MMMU 82.3%, MathVision 86%, V* 93.7% are strong. Capped by lack of video-specific benchmarks.
- **Coding: 70/100.** SWE-bench Verified 72.4% is strong. LiveCodeBench 80.7% is excellent. SWE-Rebench 58.9% is moderate. Terminal-Bench 2.0 41.6% is moderate. Capped by moderate Terminal-Bench.
- **Cost efficiency: 92/100.** Open weights, 27B dense — very efficient to self-host on consumer GPUs.
- **Overall Score: 70/100.** Mean of five non-cost dims: (73 + 55 + 80 + 72 + 70) / 5 = 70.0, half-up = 70. Strong open-weight 27B dense model: exceptional τ²-bench (93.9%), strong multimodal (V* 93.7%, MathVision 86%), good coding (SWE-bench 72.4%, LiveCodeBench 80.7%), 262K context. However, held back by extremely poor CritPt (0.9%), weak Omniscience (-44.0%), and moderate Terminal-Bench (41.6%). Best fit for: self-hosted multimodal agentic workflows, tool-calling, and coding on consumer GPUs.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across Qwen model card on Hugging Face, BenchLM, Artificial Analysis, and Qwen blog; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
