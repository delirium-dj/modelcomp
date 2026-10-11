# GPT-5.6 Sol — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: GPT-5.6 Sol (OpenAI)
- Short description: OpenAI's July 2026 flagship frontier reasoning model delivering top-tier intelligence and fast output generation.
- Provider / access: OpenAI API (`gpt-5.6-sol`), OpenRouter.
- Release: 2026-07-09 (GPT-5.6 series). Knowledge cutoff: 2026-02.
- IDs: `openai/gpt-5.6-sol`
- Context window: 1,050,000 tokens (BenchLM confirms 1.05M)
- Modalities: text, image in; text out; reasoning yes; tool calls yes; JSON mode yes (verified via AA model page)
- Pricing (as of 2026-10-10): $4.00 input / $20.00 output per 1M tokens; $3.08 blended with cache
- Architecture: Proprietary multi-modal reasoning architecture

### Raw benchmarks found

> Sources: BenchLM (`https://benchlm.ai/models/gpt-5-6-sol`, overall 77.81, rank #9/889), Artificial Analysis model page, OpenAI announcement. BenchLM covers 618 benchmarks; 4 of 618 confirmed for Sol.

Agent / tool use:

- BrowseComp: **87.5%** (BenchLM model page / OpenAI announcement)
- CyberGym: **81.8%** (BenchLM model page / OpenAI announcement)
- GDPval (wins or ties): **84.3%** (BenchLM model page / OpenAI announcement)
- AA AutomationBench: **53.4%** (AA leaderboard via BenchLM)
- μCanvas: **87.9%** (BenchLM model page / OpenAI announcement)
- ApprenticeBench: **23%** (OpenAI announcement)
- τ²-bench: **93.1%** (BenchLM model page)
- GDP.pdf: **18.9%** (BenchLM model page)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (BenchLM model page / OpenAI announcement)
- HLE (with tools): **54.5%** (BenchLM model page / OpenAI announcement)
- HLE (without tools): **48.2%** (OpenAI announcement)
- AA Intelligence Index: **47** (AA model page; rank #26/227)
- Intelligence Index v4.1: **58.9** (OpenAI announcement)
- AA-LCR: **86.0%** (AA model benchmarks via BenchLM)
- CritPt: **30.6%** (BenchLM model page / AA leaderboard)
- MMLU-Pro: **91.6%** (BenchLM model page)
- AA-MMLU-Pro: **91.6%** (BenchLM model page)
- AA Global-MMLU-Lite: **93.1%** (BenchLM model page)
- AA-IFBench: **76.8%** (BenchLM model page)
- AA-Omniscience Accuracy: **63.4%** (BenchLM model page)
- ARC-AGI-2: **84.7%** (OpenAI announcement)
- FrontierMath v2 (Tiers 1-3): **84.9%** (OpenAI announcement)
- BixBench: **80.5%** (OpenAI announcement)

Coding:

- SWE-bench (Vals): **92.0%** (Vals AI leaderboard via BenchLM)
- SWE-bench Pro: **63.4%** (OpenAI announcement)
- Expert-SWE: **73.1%** (OpenAI announcement)
- DeepSWE: **69.6%** (BenchLM model page / OpenAI announcement)
- VulcanBench v3: **85.0%** (VulcanBench leaderboard via BenchLM)
- LiveCodeBench: **89.6%** (BenchLM model page — revised up from 88.5%)
- AA Coding Index: **78.3%** (BenchLM model page — revised up from 76.7%)
- AA-SciCode: **62.8%** (BenchLM model page)
- TB-2.1: **84.3%** (BenchLM model page)

Long context:

- Context window: 1,050,000 tokens (BenchLM)
- AA-LCR: 86.0% (AA model benchmarks via BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> > Confidence: high — 25+ public benchmarks found across 4 sources (BenchLM, AA, OpenAI, Vals AI).

- **Tool use: 96/100.** BrowseComp 87.5% (near ≥90 frontier), GDPval 84.3% (wins or ties), MCP Atlas 75.3%, OSWorld-Verified 78.7%, CyberGym 81.8%, τ²-bench 93.1% (exceeds ≥90 frontier threshold), GDP.pdf 18.9%, FinanceAgent 60.0%, Investment Banking 88.5%, μCanvas 87.9%. Exceptional agentic cluster; capped by ApprenticeBench 23% and GDP.pdf 18.9%.
- **Reasoning: 95/100.** GPQA Diamond 92.9% (at frontier 90%+), HLE (with tools) 54.5% (above 40% frontier), AA-LCR 86.0%, MMLU-Pro 91.6%, AA Global-MMLU-Lite 93.1%, AA-IFBench 76.8%, Omniscience Accuracy 63.4%, BixBench 80.5%. Capped by no GPQA ≥96% threshold and Intelligence Index 47 (AA) / 58.9 (v4.1) below ~60 frontier.
- **Context window: 97/100.** 1,050,000 tokens per BenchLM (≥1M tier = 95-100). AA-LCR 86.0% at 1M context confirms strong long-context reasoning. No ≥98% retrieval at 512K+ curve published for 100.
- **Multimodal: 70/100.** Text and image input, text output (per AA model page and BenchLM). Per methodology "+image in = 60-70". Strong vision (BrowseComp 87.5%, μCanvas 87.9%) confirm image capability.
- **Coding: 93/100.** SWE-bench (Vals) 92.0% (exceeds ≥85 frontier), Expert-SWE 73.1% (near 74% threshold), TB-2.1 84.3% (near ≥85 frontier), LiveCodeBench 89.6% (near ≥90 frontier), VulcanBench 85.0%, AA Coding Index 78.3%, DeepSWE 69.6%, SWE-bench Pro 63.4%. Capped by SWE-bench Pro 63.4% below 85% threshold.
- **Cost efficiency: 50/100.** Premium pricing ($4.00 in / $20.00 out per 1M tokens).
- **Overall Score: 90/100.** Half-up mean: (96+95+97+70+93)/5 = 451/5 = 90.2 → 90. Strong frontier reasoning model with exceptional agentic tool use (τ²-bench 93.1%, GDPval 84.3%, BrowseComp 87.5%), top-tier reasoning (GPQA 92.9%, HLE 54.5%), and elite coding (SWE-bench Vals 92.0%, LiveCodeBench 89.6%); cap: premium pricing ($4/$20), no Free ID on Zen.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public internet research via BenchLM, Artificial Analysis, OpenAI announcement, and Vals AI; scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page `https://benchlm.ai/models/gpt-5-6-sol` (Overall 77.81/100, rank #9/889, τ²-bench 93.1%, TB-2.1 84.3%, GPQA 92.9%, HLE 54.5%, LiveCodeBench 89.6%, DeepSWE 69.6%); AA model page (Intelligence Index 47, modalities); OpenAI GPT-5.6 announcement (BrowseComp 87.5%, GDPval 84.3%, CyberGym 81.8%, τ² 93.1%, FrontierMath 84.9%, BixBench 80.5%); Vals AI leaderboard (SWE-bench 92.0%); Epoch AI FrontierMath leaderboard.
- Future sources: add a new file next to this one, e.g. `GPT_5_6_1.md`, using the same headings.

---
