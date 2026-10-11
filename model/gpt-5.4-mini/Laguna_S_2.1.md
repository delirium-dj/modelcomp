# GPT-5.4 Mini — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's March 2026 fastest and most efficient small model, part of the GPT-5.4 family. Optimized for coding assistance, subagents, and computer use where latency and cost matter. Approaches GPT-5.4 on several coding evaluations while running 2x faster than GPT-5 mini. Available in the API, Codex, and ChatGPT.
- **Provider / access:** OpenAI API via Chat Completions / Responses API (`gpt-5.4-mini-2026-03-17`); also on OpenCode Zen (`opencode/gpt-5.4-mini`); in Codex app, CLI, IDE extension and web.
- **Release / knowledge:** Released March 17, 2026. Knowledge cutoff not disclosed.
- **IDs:** `gpt-5.4-mini-2026-03-17` (API), `opencode/gpt-5.4-mini` (OpenCode Zen)
- **Context window:** 400,000 tokens total; 128,000 max output (verified via Vals AI and OpenAI launch blog)
- **Modalities:** Text and image input; text output (verified via OpenAI launch blog and Vals AI). Reasoning/thinking yes (xhigh by default); tool/function calls yes; JSON mode yes; web search, file search, computer use yes.
- **Pricing (as of 2026-03-17):** $0.75 in / $4.50 out per 1M tokens; $0.075 cached input (90% discount). Free on ChatGPT for Free and Go users via "Thinking" feature; paid for all other users as fallback for GPT-5.4 Thinking.
- **Architecture:** Proprietary dense transformer (OpenAI). Parameters not disclosed.

### Raw benchmarks found

> Verified public numbers sourced from OpenAI launch blog (`https://openai.com/index/introducing-gpt-5-4-mini-and-nano/`), BenchLM (`https://benchlm.ai/models/gpt-5-4-mini`, overall 53.87, rank #77/889, 38 of 625 benchmarks), and Vals AI (`https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17`). 38 benchmark rows verified across 3 independent sources.

Agent / tool use:

- Terminal-Bench 2.0: **60.0%** (OpenAI launch blog / BenchLM)
- OSWorld-Verified: **72.1%** (OpenAI launch blog / BenchLM)
- MCP Atlas: **57.7%** (OpenAI launch blog / BenchLM)
- Toolathlon: **42.9%** (OpenAI launch blog / BenchLM)
- τ²-bench Telecom: **93.4%** (OpenAI launch blog / BenchLM — meets ≥90 frontier!)
- Terminal-Bench 2.1 (Vals): **54.7%** (Vals AI leaderboard / BenchLM)
- aaTerminalBench21: **no verified public score found**
- GDPval-AA (Elo): **1095** (Artificial Analysis model benchmarks / BenchLM — below ~1750 frontier)
- GDPval-AA (normalized): **25.8%** (Artificial Analysis model benchmarks / BenchLM — low)
- AA Agentic Index: **19.6%** (Artificial Analysis model benchmarks / BenchLM — very low)
- GDP.pdf: **no verified public score found**
- AA ITBench: **no verified public score found**
- ApprenticeBench: **no verified public score found**

Coding:

- SWE-bench Pro: **54.4%** (OpenAI launch blog — approaches GPT-5.4 at 57.7%)
- SWE-bench (Vals): **73.0%** (Vals AI leaderboard / BenchLM)
- LiveCodeBench (Vals): **81.5%** (Vals AI leaderboard / BenchLM)
- AA-SciCode: **52.1%** (Artificial Analysis / BenchLM — below 55% frontier)
- Vibe Code Bench: **47.97%** (Vals AI Vibe Code Bench v1.1 leaderboard / BenchLM)
- AA Coding Index: **56.1%** (Artificial Analysis model benchmarks / BenchLM — below 70% frontier)
- CursorBench: **no verified public score found**
- DeepSWE: **no verified public score found**
- FrontierCode: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.0%** (OpenAI launch blog / BenchLM — near ≥90 frontier, below 95)
- GPQA Diamond (Vals): **83.1%** (Vals AI leaderboard / BenchLM)
- AA-GPQA-D: **87.5%** (Artificial Analysis model benchmarks / BenchLM — near ≥90 frontier)
- HLE w/ tools: **41.5%** (OpenAI launch blog / BenchLM — at ≥40% frontier)
- HLE: **no verified public score found** (HLE w/ tools is the closest at 41.5%)
- AA-HLE: **28.1%** (Artificial Analysis / BenchLM — below 40% frontier)
- AA Intelligence Index: **24.1%** (Artificial Analysis model benchmarks / BenchLM — below ~60 frontier ref, #77/889)
- AA-LCR: **77.0%** (Artificial Analysis / BenchLM)
- CritPt: **10.0%** (Artificial Analysis / BenchLM — very low)
- MLCR-AA: **no verified public score found**
- MMLU-Pro (Vals): **84.6%** (Vals AI leaderboard / BenchLM)
- ARC-AGI-1: **63.70%** (ARC Prize official leaderboard data / BenchLM)
- ARC-AGI-2: **18.9%** (ARC Prize official leaderboard data / BenchLM — weak)
- Omniscience: **no verified public score found**
- FrontierMath: **no verified public score found**

Multimodal:

- AA-MMMU-Pro: **73.3%** (Artificial Analysis model benchmarks / BenchLM)
- MMMU-Pro w/ Python: **78.0%** (OpenAI launch blog)
- MMMU-Pro: **76.6%** (OpenAI launch blog)
- Design Arena Website: **no verified public score found**

Long context:

- Context window: 400,000 tokens total; 128,000 max output (verified via Vals AI)
- OpenAI MRCR v2 8-needle 64K-128K: **47.7%** (OpenAI launch blog — at 64K depth, low)
- OpenAI MRCR v2 8-needle 128K-256K: **33.6%** (OpenAI launch blog — low)
- Graphwalks BFS 0K–128K: **71.5%** (OpenAI launch blog — accuracy)
- Graphwalks parents 0–128K: **50.8%** (OpenAI launch blog — accuracy; low)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from OpenAI launch blog (`https://openai.com/index/introducing-gpt-5.4-mini-and-nano/`), BenchLM (`https://benchlm.ai/models/gpt-5-4-mini`, overall 53.87, #77/889, 38 benchmarks), and Vals AI as of 2026-10-11.

- **Tool use: 68/100.** τ²-bench Telecom 93.4% (meets ≥90 frontier!), OSWorld-Verified 72.1% (decent), MCP Atlas 57.7%, Terminal-Bench 2.0 60.0%, GDPval-AA Elo 1095 (below 1750 frontier). Strong τ²-bench is the highlight. Capped by GDPval-AA normalized 25.8% (low), AA Agentic Index 19.6% (very low), GDP.pdf no data, AA ITBench no data, TB-2.1 (Vals) 54.7% (below 55%), ApprenticeBench no data, no Terminal-Bench-4.0 data.

- **Reasoning: 76/100.** GPQA Diamond 88.0% / AA-GPQA-D 87.5% (near ≥90 frontier), HLE w/ tools 41.5% (at ≥40% frontier), MMLU-Pro (Vals) 84.6%, AA-LCR 77.0%, ARC-AGI-1 63.70%. Solid reasoning with near-frontier GPQA. Capped by AA Intelligence Index 24.1 (well below ~60 frontier ref, #77/889), HLE w/o tools not separately found (28.2% via AA), CritPt 10.0% (very low), ARC-AGI-2 18.9% (weak), no Omniscience data, no FrontierMath, no GPQA Diamond above 90%.

- **Context window: 76/100.** 400,000 total tokens, 128,000 max output (Vals AI verified; below 500K-1M tier = 65-84). Capped by MRCR 8-needle at 47.7% (64K-128K) and 33.6% (128K-256K) — well below ≥98% retrieval threshold; Graphwalks BFS 71.5% (decent but not ≥80% threshold); no ≥98% retrieval at 128K+ published.

- **Multimodal: 76/100.** Verified text and image input, text output (+image in = 60-70 tier per methodology, score 76 with AA-MMMU-Pro 73.3% pushing toward upper range). AA-MMMU-Pro 73.3%, MMMU-Pro 76.6%, MMMU-Pro w/ Python 78.0%. Capped by text-only output, no video/audio input, no CharXiv, no LVBench, no Design Arena, no AA-Video-MME.

- **Coding: 76/100.** LiveCodeBench (Vals) 81.5% (strong, near ≥90 frontier), SWE-bench (Vals) 73.0% (good), SWE-bench Pro 54.4% (near GPT-5.4 at 57.7%), Vibe Code Bench 47.97%. Capped by AA-SciCode 52.1% (below 55% frontier), AA Coding Index 56.1% (below 70% frontier), SWE-bench Verified no verified score, no VulcanBench, no CursorBench, no DeepSWE.

- **Cost efficiency: 90/100.** $0.75 in / $4.50 out per 1M tokens (very cheap for OpenAI, 90% cache discount on input). Free on ChatGPT for Free and Go users. Capped by premium GPT-5.4 pricing comparison ($2.50/$15.00 for GPT-5.4).

- **Overall Score: 74.4/100.** Half-up mean: (68+76+76+76+76)/5 = 372/5 = 74.4 → 74. **Best-fit:** GPT-5.4 Mini is OpenAI's efficient small model with strong τ²-bench (93.4%, ≥90 frontier) and LiveCodeBench (81.5%, near ≥90 frontier), GPQA 87.5-88%, and HLE w/ tools 41.5% (at ≥40% frontier); cap: Intelligence Index 24.1 (below ~60 frontier, #77/889), GDPval-AA normalized 25.8%, MRCR 47.7% at 64K-128K (poor retrieval), Arc-AGI-2 18.9%, $0.75/$4.50 pricing. Free on ChatGPT for Free/Go users.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-11
- Method: public-internet research (OpenAI launch blog `https://openai.com/index/introducing-gpt-5-4-mini-and-nano/` for 12 benchmark rows including SWE-bench Pro 54.4%, Terminal-Bench 2.0 60.0%, GPQA 88.0%, HLE 41.5%, MMMU-Pro 76.6%, τ²-bench 93.4%; BenchLM `https://benchlm.ai/models/gpt-5-4-mini` for overall rank/score (#77/889, 53.87) and 38 benchmark rows; Artificial Analysis for Intelligence Index 24.1, GDPval-AA normalized 25.8%, GDPval-AA Elo 1095, AA-HLE 28.1%, AA-MMMU-Pro 73.3%, AA-LCR 77.0%, CritPt 10.0%, AA Coding Index 56.1%, AA-SciCode 52.1%; Vals AI for TB-2.1 54.7%, GPQA 83.1%, GPQA-D 87.5%, MMLU-Pro 84.6%, SWE-bench 73.0%, LiveCodeBench 81.5%, Vibe Code Bench 47.97%). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Key findings: GPT-5.4 Mini released March 17, 2026; 400K context / 128K output; text+image in, text out; τ²-bench Telecom 93.4% (≥90 frontier), LiveCodeBench 81.5%, GPQA 87.5-88%, HLE w/ tools 41.5% (≥40% frontier), OSWorld-Verified 72.1%, SWE-bench (Vals) 73.0%; Intelligence Index 24.1 (low, #77/889); $0.75/$4.50 per 1M; free on ChatGPT for Free/Go users.
- Future sources: add a new file next to this one, e.g. `GPT_5.4.md`, using the same headings.

---
