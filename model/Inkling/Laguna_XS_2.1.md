# Inkling — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-09 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's first open-weights Mixture-of-Experts model with 975B total parameters and 41B activated parameters per token. Apache 2.0 licensed, designed for reasoning and coding tasks with a 1M token context window.
- **Provider / access:** Hugging Face `thinkingmachines/Inkling`; OpenRouter `inkling`; various third-party hosts. Open weights available for self-hosting.
- **Release / knowledge:** July 15, 2026 (Thinking Machines Lab launch); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/inkling`; `thinkingmachines/Inkling`; `inkling` (OpenRouter).
- **Context window:** 1,000,000 tokens total (verified via external sources); up to 1M for hosts that serve it.
- **Modalities:** Text, image, and speech input; text output; reasoning support (hybrid); tool calls supported; JSON mode supported.
- **Pricing (as of 2026-10-09):** ~$1.00 input / $4.05 output per 1M tokens via OpenRouter; cache at $0.25/M (75% discount). Free tier available on OpenRouter (`inkling:free`) and NVIDIA build; Apache 2.0 self-host is free.
- **Architecture:** Proprietary dense-to-MoE architecture, 975B total parameters / 41B active per token, Apache 2.0 open weights license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (Thinking Machines Lab launch post via BenchLM)
- Terminal-Bench 4.0: **1.0%** (AA leaderboard via BenchLM)
- Tau3-Banking: **29.1%** (AA leaderboard via BenchLM)
- GDPval-AA Elo: **1064** (AA model benchmarks via BenchLM)
- AA-Briefcase: **834 Elo** (AA leaderboard via BenchLM)
- AA Agentic Index: **24.3%** (AA model benchmarks via BenchLM)
- AA AnalystAgent: **23.8%** (AA leaderboard via BenchLM)
- BrowseComp: **77.1%** (Thinking Machines Lab launch post via BenchLM)
- MCP Atlas: **74.1%** (Thinking Machines Lab launch post via BenchLM)
- Design Arena Agentic Web Dev: **1257** (Design Arena leaderboard via BenchLM)
- AA AutomationBench: **5.0%** (AA leaderboard via BenchLM)
- CWE-bench v1: **37.0%** (Collinear leaderboard via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **87.9%** (Thinking Machines Lab launch post via BenchLM)
- GPQA Diamond (Vals): **87.1%** (Vals AI leaderboard)
- HLE: **46%** (Thinking Machines Lab launch post with tools); **30%** without tools
- AA-HLE: **31.9%** (AA leaderboard via BenchLM)
- HLE w/o tools: **30%** (Thinking Machines Lab launch post)
- MMLU-Pro: **86.3%** (Vals AI leaderboard)
- Artificial Analysis Intelligence Index: **25** (AA model page; estimated)
- BenchLM normalized Intelligence Index: **25.0%**
- AA-Omniscience Index: **2.0%** (AA leaderboard via BenchLM)
- AA-Omniscience Accuracy: **41.6%** (AA model benchmarks via BenchLM)
- AA-Omniscience Hallucination Rate: **67.7%** (high)
- AA-LCR: **77.3%** (AA leaderboard via BenchLM)
- CritPt: **5.4%** (AA leaderboard via BenchLM)
- MLCR-AA: **12.2%** (AA leaderboard via BenchLM)

Coding:

- SWE-bench Verified: **77.6%** (Thinking Machines Lab launch post via BenchLM)
- SWE-bench (Vals): **77.6%** (Vals AI leaderboard)
- SWE-bench Pro: **54.3%** (Thinking Machines Lab launch post via BenchLM)
- LiveCodeBench: **85.5%** (Vals AI leaderboard)
- AA-SciCode: **47.0%** (AA leaderboard via BenchLM)
- AA Coding Index: **52.1%** (AA model benchmarks via BenchLM)
- FrontierSWE v2: **4.1%** (Proximal leaderboard via BenchLM)
- CursorBench 4.0: **no verified public score found**

Multimodal & grounded:

- MMMU-Pro: **73.5%** (AA leaderboard via BenchLM)
- CharXiv: **82%** (Thinking Machines Lab launch post); **78.1%** w/o tools
- Design Arena Website: **1229** (OpenRouter benchmarks via BenchLM)

Mathematics & instruction following:

- AIME26: **97.1%** (Thinking Machines Lab launch post via BenchLM)
- IFEval: **79.8%** (Thinking Machines Lab launch post via BenchLM)

Long context:

- AA-LCR: **77.3%** (AA leaderboard via BenchLM)
- No verified MRCR/RULER/GraphWalks scores found; 1M context window confirmed

### Normalized scores (1–100)

Derived from the benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 65/100.** Terminal-Bench 2.1 at 63.8% is solid mid-to-upper-tier; GDPval-AA at 1064 Elo is mid-range; MCP Atlas at 74.1% and BrowseComp at 77.1% reinforce competent agentic performance; capped by low TC4.0 at 1.0% and no Claw-Eval data.
- **Reasoning: 65/100.** GPQA Diamond at 87.9% and HLE at 46% are strong; AI Index at 25 is very low; CritPt at 5.4% and Omniscience Index at 2.0% with 67.7% hallucination rate indicate reliability issues; capped by poor composite reasoning metrics.
- **Context window: 95/100.** 1M token context window per AA model page and BenchLM (verified); meets ≥1M tier with 77.3% LCR; 95 rather than 100 since no verified retrieval-at-512K+ percentage found.
- **Multimodal: 90/100.** Text, image, and speech input with text output per AA model page — supports +audio input (90–100) per methodology; MMMU-Pro 73.5% shows strong vision capability.
- **Coding: 75/100.** LiveCodeBench at 85.5% (frontier-level 80%+); SWE-bench Verified 77.6% is near-frontier (85%+); SWE-bench Pro 54.3% and SCICode 47.0% are mid-tier; capped by mid-range SCICode/Coding Index and no DeepSWE data.
- **Cost efficiency: 89/100.** $1.00 input / $4.05 output per 1M tokens — moderate pricing; comprehensive open-weights (Apache 2.0) provides cost advantage; not on Zen free tier per meta.json (noFreeId).

- **Overall Score: 78/100.** Mean of five non-cost dims: (65 + 65 + 95 + 90 + 75) / 5 = 390 / 5 = 78. Strong coding capability and knowledge reasoning tempered by low agentic composite scores and hallucination concerns.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-09
- Method: public internet research (Artificial Analysis model page, BenchLM, Thinking Machines Lab launch post); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_8.md`, using the same headings.