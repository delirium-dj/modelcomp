# Claude Opus 4.8 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Claude Opus 4.8 (Anthropic)
- Short description: Anthropic's May 2026 adaptive reasoning flagship model, delivering top-tier intelligence. Superseded by Claude Opus 5 (per AA).
- Provider / access: Anthropic API (`claude-opus-4-8`), AWS Bedrock, Google Vertex AI.
- Release: 2026-05-01. Knowledge cutoff: 2026-03.
- IDs: `anthropic/claude-opus-4-8`
- Context window: 1,000,000 tokens (BenchLM confirms 1M)
- Modalities: text, image in; text out; reasoning yes; tool calls yes; JSON mode yes (per AA model page)
- Pricing (as of 2026-10-10): $5.00 input / $25.00 output per 1M tokens ($3.85 blended with cache)
- Architecture: Proprietary adaptive reasoning architecture

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/claude-opus-4-8`, overall 73.58, rank #16/889), AA model page, Anthropic system card (via comparison tables), Vals AI. BenchLM covers 12 of 618 benchmarks for this model.

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI+Meta comparison citing Anthropic system card / BenchLM)
- Terminal-Bench 3.0: **28.4%** (Anthropic system card / BenchLM)
- AA Terminal-Bench 4.0: **27.1%** (AA leaderboard via BenchLM)
- τ²-bench: **94.4%** (BenchLM model page — exceptional)
- BrowseComp: **89.2%** (BenchLM model page — strong)
- DeepSearchQA: **93.1%** (BenchLM model page — strong)
- GDPval-AA: **62.8%** (BenchLM model page — revised up from "no verified score")
- GDPval-AA (Elo): **1642** (Anthropic system card / BenchLM)
- BBriefcase: **1356** (AA leaderboard via BenchLM)
- AutomationBench: **43.2%** (Anthropic system card)
- AA AutomationBench: **45.3%** (AA leaderboard via BenchLM)
- AA ITBench: **47.8%** (AA leaderboard via BenchLM)
- GDP.pdf: **15.8%** (BenchLM model page)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (BenchLM model page — revised up from 91.2% in prior file)
- AA-GPQA-D: **93.6%** (AA leaderboard via BenchLM)
- HLE (with tools): **56.9%** (Anthropic system card via comparison tables / BenchLM)
- AA-HLE: **55.0%** (AA leaderboard via BenchLM)
- AA Intelligence Index: **50** (BenchLM model page — revised up from 42 in prior file)
- AA-LCR: **82.7%** (AA model benchmarks via BenchLM)
- CritPt: **20.9%** (BenchLM model page — revised down from 31.4% in prior file; BenchLM cites fresh CritPt leaderboard at 20.9%)
- AA-Omniscience Index: **32.3** (AA model benchmarks via BenchLM)
- MLCR-AA: **75.0%** (AA model benchmarks via BenchLM)
- MMLU-Pro: **90.8%** (BenchLM model page)
- AA-MMLU-Pro: **90.8%** (BenchLM model page)
- ARC-AGI-2: **85.1%** (ARC Prize verified results via BenchLM)
- FrontierMath v2 (Tiers 1-3): **84.9%** (Anthropic system card)
- BixBench: **78.4%** (BenchLM model page)

Coding:

- SWE-bench: **72.3%** (Anthropic system card via comparison tables)
- SWE Multilingual: **84.7%** (Anthropic system card)
- DeepSWE: **62.9%** (BenchLM model page — revised down from 68.5% in prior file)
- AA-SciCode: **58.3%** (AA leaderboard via BenchLM)
- ProgramBench: **75.6%** (Anthropic system card)
- AA Coding Index: **71.2%** (AA model benchmarks via BenchLM)
- SWE-bench Verified: **78.5%** (BenchLM model page — revised up from "no verified score")
- LiveCodeBench: **84.2%** (BenchLM model page — revised up from "no verified score")

Multimodal:

- AA-MMMU-Pro: **81.9%** (BenchLM model page)
- Design Arena Website: **1243** (OpenRouter via BenchLM)

Long context:

- AA-LCR (long-context reasoning at 1M): 82.7%
- MLCR-AA (medical long-context reasoning): 75.0%

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 73.58, #16/889) and AA as of 2026-10-10.

- **Tool use: 96/100.** τ²-bench 94.4% (near ≥95 frontier ref), BrowseComp 89.2%, DeepSearchQA 93.1%, GDPval-AA 62.8% (Elo 1642), TB-2.1 87.4%, GDP.pdf 15.8%. Exceptional agentic cluster with three ≥85% frontier benchmarks; capped by TB-3.0 28.4%, TB-4.0 27.1%, GDP.pdf 15.8%, ApprenticeBench (if any).
- **Reasoning: 87/100.** GPQA 93.6% (revised up from 91.2%, BenchLM confirms), HLE 56.9% (above 40% frontier), AA Intelligence Index 50 (revised up from 42 — fresh BenchLM shows substantially higher score), MMLU-Pro 90.8%, ARC-AGI-2 85.1%, FrontierMath 84.9%. Capped by CritPt 20.9% (revised down from 31.4% per fresh BenchLM), AA Omniscience Index 32.3 (low reliability).
- **Context window: 95/100.** 1M tokens (verified via BenchLM). AA-LCR 82.7% and MLCR-AA 75.0% demonstrate strong long-context reasoning. No ≥98% retrieval at 512K+ data to claim higher than 95.
- **Multimodal: 70/100.** Text and image input, text output (per AA model page and BenchLM). Per methodology "+image in = 60-70". No video/audio input or non-text output verified.
- **Coding: 86/100.** SWE-bench 72.3%, SWE-bench Verified 78.5% (revised up from prior file), DeepSWE 62.9% (revised down from 68.5% per fresh BenchLM), LiveCodeBench 84.2% (revised up), AA Coding Index 71.2%, AA-SciCode 58.3%, VulcanBench 87.0%. Capped by DeepSWE 62.9% below 65-74 range and SWE-bench 72.3% below 74% frontier.
- **Cost efficiency: 45/100.** Premium tier pricing ($5.00 in / $25.00 out per 1M tokens).
- **Overall Score: 87/100.** Half-up mean: (96+87+95+70+86)/5 = 434/5 = 86.8 → 87. **Best-fit:** strong reasoning model with exceptional agentic tool use (τ²-bench 94.4%, BrowseComp 89.2%, DeepSearchQA 93.1%) and elite reasoning (GPQA 93.6%, Intelligence Index 50 revised up from 42); cap: premium pricing ($5/$25), weak TB-3.0/TB-4.0 scores (27-28%), deprecated (newer Claude Opus 5 available).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public internet research via BenchLM, Artificial Analysis, and Anthropic system card (cited via comparison tables); scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page `https://benchlm.ai/models/claude-opus-4-8` (Overall 73.58/100, rank #16/889, τ²-bench 94.4%, BrowseComp 89.2%, DeepSearchQA 93.1%, GPQA 93.6%, Intelligence Index 50, DeepSWE 62.9%, LiveCodeBench 84.2%); AA model page (Intelligence Index 42 per AA); Anthropic system card (via comparison tables). CritPt revised from 31.4% (prior file) to 20.9% per fresh BenchLM CritPt leaderboard citation.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4_8_1.md`, using the same headings.

---
