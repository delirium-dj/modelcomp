# GPT-5.6 Terra — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: GPT-5.6 Terra (OpenAI)
- Short description: OpenAI's flagship 5.6-generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis (per repo `meta.json` short).
- Provider / access: OpenAI API via Chat Completions; ID `gpt-5.6-terra`. noFreeId per repo `meta.json`.
- Release: 2026 (GPT-5.6 series). Knowledge cutoff: not published by vendor.
- IDs: `gpt-5.6-terra` (repo meta `openai/gpt-5.6-terra`; BenchLM canonical slug `gpt-5-6-terra`). noFreeId per repo `meta.json`.
- Context window: **1,048,576 (1M)** (repo `meta.json`); BenchLM confirms 1.05M. Scored on ≥1M tier.
- Modalities: **Text, image, audio, video, PDF in; text out** (repo `meta.json`); reasoning yes; tool calls yes; JSON mode yes.
- Pricing (as of 2026-10-10): **$6.00 input / $24.00 output** (BenchLM model page); $0.00 via ChatGPT Pro; cached $0.72 input. Paid-tier; no Free ID on Zen.
- Architecture: Proprietary dense transformer (OpenAI). No parameter count disclosed.

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/gpt-5-6-terra`, overall 73.18, rank #14/887) and Artificial Analysis (referenced from BenchLM).

Agent / tool use:

- Terminal-Bench 3.0: **20.8%** (FrontierBench leaderboard / BenchLM)
- Terminal-Bench 2.1: **87.4%** (OpenAI launch blog / BenchLM)
- BrowseComp: **87.5%** (OpenAI launch blog)
- OSWorld-Verified: **50.2%** (BenchLM model page)
- CyberGym: **81.8%** (OpenAI launch blog)
- ExploitGym: **23.2%** (OpenAI launch blog)
- Toolathlon: **53.1%** (OpenAI launch blog)
- τ²-bench: **86.3%** (AA model benchmarks via BenchLM)
- GDPval-AA: **46.6%** (AA model benchmarks via BenchLM)
- GDPval-AA (Elo): **1583** (OpenAI launch blog)
- AA ITBench: **51.0%** (AA leaderboard via BenchLM)
- AA Agentic Index: **43.7%** (AA model benchmarks via BenchLM)
- ApprenticeBench: **16%** (NeoCognition via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **95.1%** (BenchLM model page — revised up from 92.9% in prior file; fresh BenchLM confirms 95.1%)
- HLE-Verified: **51.1%** (Google DeepMind Gemini 3.8 Flash model card via BenchLM)
- LABBench2: **81.2%** (Google DeepMind Gemini 3.8 Flash model card via BenchLM)
- HealthBench Professional: **57.7%** (OpenAI launch blog)
- HealthBench Hard: **32.7%** (OpenAI system card)
- Artificial Analysis Intelligence Index: **55.0%** (OpenAI launch blog; #14/887 on BenchLM)
- AA-GPQA Diamond: **92.5%** (AA leaderboard via BenchLM)
- AA-HLE: **42.9%** (AA model benchmarks via BenchLM)
- AA-Omniscience Index: **0.1%** (AA model benchmarks — extremely high hallucination rate, 87.9%)
- AA Ominscience Accuracy: **46.8%** (AA leaderboard via BenchLM)
- CritPt: **30.0%** (AA leaderboard via BenchLM)
- AA-LCR: **83.0%** (AA model benchmarks via BenchLM)
- ARC-AGI-2: **83.9%** (ARC Prize verified results)
- ARC-AGI-3: **0.8%** (ARC Prize verified results)
- FrontierMath (legacy): **84.9%** (OpenAI launch blog)
- FrontierMath v2 (Tiers 1-3): **84.900%** (OpenAI launch blog)
- FrontierMath v2 (Tier 4): **68.300%** (OpenAI launch blog)

Coding:

- SWE-bench Pro: **63.4%** (OpenAI launch blog)
- SWE-bench (Vals): **95.4%** (Vals AI leaderboard)
- DeepSWE: **69.6%** (OpenAI launch blog)
- AA-SciCode: **55.0%** (AA leaderboard via BenchLM)
- VulcanBench v3: **87.0%** (VulcanBench leaderboard)
- LiveCodeBench (Vals): **85.9%** (Vals AI leaderboard)
- AA Coding Index: **76.7%** (AA model benchmarks via BenchLM)
- CursorBench 3.2: **64.9%** (Cursor evals)
- CursorBench 4.0: **41.3%** (Cursor evals)

Multimodal & grounded:

- MMMU-Pro: **80.7%** (OpenAI launch blog)
- MMMU-Pro w/ Python: **82%** (OpenAI launch blog)
- AA-MMMU-Pro: **80.7%** (AA leaderboard via BenchLM)
- AA-IFBench: **71.2%** (AA model benchmarks via BenchLM)

Long context:

- AA-LCR: **83.0%** (AA model benchmarks)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 73.18, #14/887) and AA as of 2026-10-10.

- **Tool use: 84/100.** TB-2.1 87.4%, BrowseComp 87.5%, CyberGym 81.8%, τ²-bench 86.3%, GDPval-AA 46.6% (Elo 1583), AA ITBench 51.0%, AA Agentic Index 43.7%. Strong agentic cluster. Capped by TB-3.0 20.8%, ExploitGym 23.2%, ApprenticeBench 16%, OSWorld-Verified 50.2%, no GDPval-AA ≥1750 Elo.
- **Reasoning: 82/100.** GPQA 95.1% (revised up from 92.9% — BenchLM confirms 95.1%), HLE-Verified 51.1% (above 40% frontier), AA-GPQA-D 92.5%, AA-LCR 83.0%, FrontierMath 84.9%, ARC-AGI-2 83.9%. Capped hard by AA Intelligence Index 55.0 (below ~60 frontier), AA Omniscience Index 0.1% (extreme hallucination, 87.9% rate), CritPt 30.0%.
- **Context window: 97/100.** Repo `meta.json` confirms **1,050,000** tokens (≥1M tier = 95–100). AA-LCR 83.0% at 1M context confirms solid long-context reasoning. No ≥98% retrieval at 512K+ curve published for 100.
- **Multimodal: 70/100.** Text and image input only (per AA model page: "Supports: text and image"). Per methodology "+image in = 60-70". Strong vision (AA-MMMU-Pro 80.7%, MMMU-Pro 82% w/ Python). Repo `meta.json` claims omni input — discrepancy noted (AA only verifies text+image).
- **Coding: 86/100.** SWE-bench (Vals) 95.4%, LiveCodeBench (Vals) 85.9%, VulcanBench 87.0%, AA Coding Index 76.7%, DeepSWE 69.6%, CursorBench 64.9%. Capped by SWE-bench Pro 63.4% and no SWE-bench Verified ≥74%.
- **Cost efficiency: 55/100.** $6.00 in / $24.00 out per 1M tokens (BenchLM model page); also free via ChatGPT Pro subscription; no Free ID on Zen.
- **Overall Score: 84/100.** Half-up mean: (84+82+97+70+86)/5 = 419/5 = 83.8 → 84. **Best-fit:** strong 1M-context agentic+reasoning model with elite coding (SWE-bench Vals 95.4%) and top-tier reasoning (GPQA 95.1%); cap: extreme AA Omniscience hallucination rate (87.9%), low Intelligence Index (55.0), no Free ID on Zen; AA verifies text+image only (meta.json omni not independently confirmed).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gpt-5-6-terra` for overall rank/score (73.18, #14/887) and full benchmark tables including GPQA 95.1%, τ²-bench 86.3%, TB-3.0 20.8%, OSWorld 50.2%; AA model page for Intelligence Index 55.0, AA-HLE 42.9%, AA-LCR 83.0%, Omniscience data, pricing); OpenAI launch blog (GPQA 92.9%, HLE-Verified 51.1%, TB-2.1 87.4%, FrontierMath 84.9%); Vals AI leaderboards (SWE-bench 95.4%, LiveCodeBench 85.9%, GPQA 90.9%). Scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page; AA model benchmarks; OpenAI launch blog; Vals AI leaderboards.
- Future sources: add a new file next to this one, e.g. `GPT_5_6_1.md`, using the same headings.

---
