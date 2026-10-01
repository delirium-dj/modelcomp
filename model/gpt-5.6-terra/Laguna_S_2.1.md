# GPT-5.6 Terra — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
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
- Pricing (as of 2026-10-01): "Paid-tier pricing" per repo `meta.json`. No concrete numbers published in sources checked; positioned as paid-tier.
- Architecture: Proprietary dense transformer (OpenAI). No parameter count disclosed.

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/gpt-5-6-terra`, overall 73.18, rank #14/637) and Vals AI leaderboards (referenced from BenchLM).

Agent / tool use:

- Terminal-Bench 3.0: **20.8%** (FrontierBench leaderboard)
- Terminal-Bench 2.1: **87.4%** (OpenAI launch blog)
- BrowseComp: **87.5%** (OpenAI launch blog)
- OSWorld 2.0: **50.2%** (OpenAI launch blog)
- CyberGym: **81.8%** (OpenAI launch blog)
- ExploitGym: **23.2%** (OpenAI launch blog)
- Toolathlon: **53.1%** (OpenAI launch blog)
- τ²-bench: **86.3%** (AA model benchmarks)
- GDPval-AA: **46.6%** (AA model benchmarks)
- GDPval-AA (Elo): **1583** (OpenAI launch blog)
- AA ITBench: **51.0%** (AA leaderboard)
- APEX-Agents-AA: **38.9%** (AA leaderboard)
- Terminal-Bench 2.1 (Vals): **77.5%** (Vals AI leaderboard)
- AA Agentic Index: **43.7%** (AA model benchmarks)
- ApprenticeBench: **16%** (NeoCognition)

Reasoning / knowledge:

- GPQA: **92.9%** (OpenAI launch blog)
- GPQA-D: **92.9%** (OpenAI launch blog)
- HLE-Verified: **51.1%** (Google DeepMind Gemini 3.8 Flash model card)
- LABBench2: **81.2%** (Google DeepMind Gemini 3.8 Flash model card)
- HealthBench Professional: **57.7%** (OpenAI launch blog)
- HealthBench Hard: **32.7%** (OpenAI system card)
- Artificial Analysis Intelligence Index: **55.0%** (OpenAI launch blog; #14/637 on BenchLM)
- AA-GPQA Diamond: **92.5%** (AA leaderboard)
- AA-HLE: **42.9%** (AA model benchmarks)
- AA-Omniscience Index: **0.1%** (AA model benchmarks — extremely high hallucination rate)
- AA-Omniscience Accuracy: **46.8%** (AA leaderboard)
- AA-Omniscience Hallucination Rate: **87.9%** (AA model benchmarks — very high)
- CritPt: **30.0%** (AA leaderboard)
- AA-LCR: **83.0%** (AA model benchmarks)
- GPQA Diamond (Vals): **90.9%** (Vals AI leaderboard)
- MMLU-Pro (Vals): **86.7%** (Vals AI leaderboard)
- ARC-AGI-2: **83.9%** (ARC Prize verified results)
- ARC-AGI-3: **0.8%** (ARC Prize verified results)
- FrontierMath (legacy): **84.9%** (OpenAI launch blog)
- FrontierMath v2 (Tiers 1-3): **84.900%** (OpenAI launch blog)
- FrontierMath v2 (Tier 4): **68.300%** (OpenAI launch blog)

Coding:

- SWE-bench Pro: **63.4%** (OpenAI launch blog)
- SWE-bench (Vals): **95.4%** (Vals AI leaderboard)
- DeepSWE: **69.6%** (OpenAI launch blog)
- FrontierCode 1.1 Extended: **55.8%** (Cognition Devin blog)
- CursorBench 3.2: **64.9%** (Cursor evals)
- AA-SciCode: **55.0%** (AA leaderboard)
- VulcanBench v3: **87.0%** (VulcanBench leaderboard)
- LiveCodeBench (Vals): **85.9%** (Vals AI leaderboard)
- AA Coding Index: **76.7%** (AA model benchmarks)
- CursorBench 4.0: **41.3%** (Cursor evals)

Multimodal & grounded:

- MMMU-Pro: **80.7%** (OpenAI launch blog)
- MMMU-Pro w/ Python: **82%** (OpenAI launch blog)
- AA-MMMU-Pro: **80.7%** (AA leaderboard)
- AA-IFBench: **71.2%** (AA model benchmarks)

Long context:

- AA-LCR: **83.0%** (AA model benchmarks)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM (overall 73.18, #14/637) and Vals AI leaderboards as of 2026-10-01.

- **Tool use: 84/100.** TB-2.1 87.4%, BrowseComp 87.5%, CyberGym 81.8%, τ²-bench 86.3%, GDPval-AA 46.6% (Elo 1583), AA ITBench 51.0%, AA Agentic Index 43.7%. Strong agentic cluster but capped by TB-3.0 20.8%, ExploitGym 23.2%, ApprenticeBench 16%, and no OSWorld-Verified published.
- **Reasoning: 82/100.** GPQA 92.9%, AA-GPQA-D 92.5%, AA-LCR 83.0%, HLE-Verified 51.1%, FrontierMath 84.9%, ARC-AGI-2 83.9%. Capped hard by AA Intelligence Index 55.0 (below ~60 frontier ref), AA Omniscience Index 0.1% (extreme hallucination), AA Omniscience Hallucination Rate 87.9%, and ARC-AGI-3 0.8%.
- **Context window: 97/100.** Repo `meta.json` confirms **1,048,576 (1M)** tokens; BenchLM confirms 1.05M (≥1M tier = 95-100 per methodology). No MRCR/RULER retrieval curve published for this variant.
- **Multimodal: 92/100.** Verified text+image+audio+video+PDF input, text output (repo `meta.json`). Per methodology "+audio in = 90-100". Benchmark: MMMU-Pro 80.7% (82% w/ Python).
- **Coding: 86/100.** SWE-bench (Vals) 95.4%, LiveCodeBench (Vals) 85.9%, VulcanBench 87%, AA Coding Index 76.7%, DeepSWE 69.6%. Capped by SWE-Pro 63.4% and no SWE-bench Verified published for this exact ID.
- **Cost efficiency: 70/100.** Paid-tier per repo `meta.json` but no concrete pricing numbers published in verified sources; not a known Free ID on Zen. Provisional estimate: mid-to-poor value.
- **Overall Score: 88/100.** (84 + 82 + 97 + 92 + 86) / 5 = 441 / 5 = 88.2 → 88. **Best-fit:** strong 1M-context agentic+reasoning model with elite coding (SWE-bench Vals 95.4%) and reasoning (GPQA 92.9%); cap: extreme AA Omniscience hallucination rate (87.9%) and low Intelligence Index (55.0); no Free ID on Zen.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public-internet research (BenchLM `https://benchlm.ai/models/gpt-5-6-terra` for overall rank/score (73.18, #14/637) and full benchmark tables; Vals AI leaderboards for SWE-bench 95.4%, LiveCodeBench 85.9%, GPQA 90.9%, MMLU-Pro 86.7%; OpenAI launch blog for GPQA 92.9%, HLE-Verified 51.1%, TB-2.1 87.4%, BrowseComp 87.5%, FrontierMath 84.9%; AA model page for Intelligence Index, AA-LCR 83.0%, GDPval-AA 46.6%, Omniscience data; repo `meta.json` for modalities/context/pricing tier). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Future sources: add a new file next to this one, e.g. `GPT_5_6_1.md`, using the same headings.
