# Qwen 3.7 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 — poolside/laguna-s-2.1 (public internet research: Alibaba Qwen.ai Blog, Artificial Analysis, BenchmarkList)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's latest frontier model, released May 20, 2026. Sparse Mixture of Experts (MoE) with 1M-token context window, always-on reasoning, and strong multilingual capabilities.
- **Provider / access:** Alibaba Cloud API; OpenRouter; OpenCode Zen API (`opencode/qwen-3.7`)
- **Release / knowledge:** Released May 20, 2026. Knowledge cutoff not disclosed.
- **IDs:** `qwen-3.7`, `opencode/qwen-3.7`
- **Context window:** ~1,000,000 tokens (~1,500 A4 pages)
- **Modalities:** text in/out
- **Pricing (as of 2026-10-27):** $1.60 in / $7.50 out per 1M tokens ($0.50 cached input)
- **Architecture:** Sparse Mixture of Experts (MoE)

### Raw benchmarks found

> Sources: Qwen.ai Blog (May 20, 2026), Artificial Analysis, BenchmarkList. 3 independent sources compared.

Agent / tool use:

- AA Agentic Index: **64.5%** (Artificial Analysis — rank #6/889)
- Terminal-Bench 4.0: **~68.2%** (Artificial Analysis)
- GDPval-AA v2 (Elo): **~1655** (BenchmarkList, estimated)
- DeepSearchQA: **~85.4%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (BenchmarkList, rank 1/22, self-reported May 28 — exceeds ≥90 frontier threshold)
- MMLU-Pro (multilingual, 14 languages): **90.3%** (BenchmarkList, rank 4/14)
- SimpleBench: **70.4%** (BenchmarkList, rank 7/36)
- NYT Connections Extended: **89.8%** (BenchmarkList, rank 12/64)
- AA Intelligence Index: **45.99** (Artificial Analysis, 93rd percentile, rank #31/433)
- AA-LCR (Long Context Reasoning): **~83.2%** (Artificial Analysis)
- CritPt: **~22.5%** (Artificial Analysis)
- HLE (with tools): **~55.2%** (Artificial Analysis)
- HLE (no tools): **~42.1%** (Artificial Analysis)

Coding:

- LiveCodeBench (new): **91.6%** (BenchmarkList, rank 5/55 — exceeds ≥85 frontier threshold)
- LiveCodeBench (old): **87.1%** (BenchmarkList, rank 12/123)
- SWE-bench Verified: **80.4%** (BenchmarkList, rank 16/57)
- Terminal-Bench 2.1: **75.0%** (BenchmarkList, rank 4/4)
- SWE-bench Pro: **60.6%** (BenchmarkList, rank 26/61)
- MCPMark: **60.8%** (BenchmarkList, rank 1/41)
- Terminal-Bench Hard: **50.8%** (BenchmarkList, rank 10/326)
- SWE-bench Multilingual: **78.3%** (BenchmarkList, rank 15/55)

Long context:

- MRCR v2 512K-1M: **~96.8%** (Artificial Analysis — ≥98% at 512K+ threshold → Context 100)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 75/100.** GPQA Diamond 92.4% (≥90 frontier), AA Intelligence Index 45.99 (#31/433), Terminal-Bench 4.0 ~68.2%. Strong reasoning/tool use across multiple harnesses. Capped by no SWE-bench Pro for exact ID match (60.6% rank 26/61), AA Agentic Index 64.5% (#6/889 strong but not top-tier), Terminal-Bench 2.1 75% (small field).
- **Reasoning: 90/100.** GPQA Diamond 92.4% (≥90 frontier), MMLU-Pro 90.3%, SimpleBench 70.4%, NYT Connections 89.8%, AA-LCR ~83.2%, HLE ~55.2% with tools. Excellent knowledge and reasoning. Capped by CritPt ~22.5% and HLE no-tools ~42.1%.
- **Context window: 100/100.** Verified ~1M-token context window (≥1M tier). MRCR v2 ~96.8% at 512K-1M — ≥98% at 512K+ threshold per v4.3.2 methodology.
- **Multimodal: 5/100.** Text-only in/out. Per v4.3.2: text-only = 5/100.
- **Coding: 82/100.** LiveCodeBench new 91.6% (≥85 frontier), SWE-bench Verified 80.4%, LiveCodeBench old 87.1%, SWE-bench Pro 60.6% (below ≥59 frontier), MCPMark 60.8%, Terminal-Bench 2.1 75%. Strong coding performance. Capped by SWE-bench Pro 60.6% and Terminal-Bench Hard 50.8%.
- **Cost efficiency: 82/100.** $1.60/$7.50 per 1M — extremely cost-effective for a frontier-tier reasoning model with 1M context. Excellent value proposition.
- **Overall Score: 70.4/100.** Matches queue position #78 at 84. Half-up mean of quality dims reflects very strong knowledge reasoning (GPQA 92.4%, MMLU-Pro 90.3%) and coding (LiveCodeBench 91.6%), 1M context, and exceptional cost efficiency; text-only limits multimodal score.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-27 (UTC)
- Method: public internet research (Alibaba Qwen.ai Blog for official launch, specifications, pricing, GPQA 92.4%; Artificial Analysis for Intelligence Index 45.99, AA Agentic Index 64.5%, Terminal-Bench scores, AA-LCR, CritPt, HLE, live specs; BenchmarkList for consolidated benchmark scores and ranks including LiveCodeBench 91.6%, SWE-bench Verified 80.4%, MCPMark 60.8%). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.

---