# GPT-5.1 Codex Max — findings by Qwen 3.7 Plus

- Source: OpenAI (`gpt-5.1-codex-max`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max
- **Short description:** OpenAI's frontier agentic coding model from the GPT-5.1 generation. A reasoning-focused variant optimized for repo-scale software engineering tasks with extended token budgets. Superseded by GPT-5.2-Codex; retired July 23, 2026.
- **Provider / access:** OpenAI API (Responses API); OpenRouter `openai/gpt-5.1-codex-max`. OpenCode Zen `opencode/gpt-5.1-codex-max`.
- **Release / knowledge:** Released late 2025; retired 2026-07-23; knowledge cutoff not publicly stated.
- **IDs:** `opencode/gpt-5.1-codex-max` (OpenCode Zen), `openai/gpt-5.1-codex-max` (OpenRouter).
- **Context window:** 400,000 tokens (400K) (per BenchLM; userightai.com confirms).
- **Modalities:** Text in/out; reasoning mode enabled; tool calling supported; no multimodal input.
- **Pricing (as of 2026-10-20):** $1.25/1M input, $0.125/1M cached input, $10.00/1M output (per userightai.com, OpenRouter).
- **Architecture:** Proprietary; reasoning-focused variant of GPT-5.1 generation; exact parameter count not disclosed.

### Raw benchmarks found

> Sources: BenchLM (benchlm.ai/models/gpt-5-1-codex-max, 2026-10-20), METR evaluation report (metr.org, 2025-11-19), Artificial Analysis (via BenchLM), Vals AI (via BenchLM), userightai.com, OpenAI community forums. Coverage note: BenchLM covers only 13 of 666 benchmarks — very sparse coverage, scores are highly conservative.

Agent / tool use:

- τ²-bench: **83%** (Artificial Analysis via BenchLM — strong agentic tool use)
- METR time horizon (50%): **2h42m** (METR evaluation — on-trend improvement over GPT-5 at 2h17m)
- METR time horizon (80%): **~30m** (METR evaluation — 95% CI: 9m–80m)
- METR HCAST/RE-Bench tasks: Failed all 5 attempts at 20h+ tasks (same as GPT-5) (METR evaluation)

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Artificial Analysis via BenchLM — strong graduate-level reasoning)
- HLE (AA): **25.7%** (Artificial Analysis via BenchLM — below frontier leaders at 46-67%)
- CritPt: **5.7%** (Artificial Analysis via BenchLM — very weak)
- AA Intelligence Index: **23.7%** (Artificial Analysis via BenchLM)
- AA-Omniscience Accuracy: **39.9%** (Artificial Analysis via BenchLM)
- AA-Omniscience Hallucination Rate: **77.2%** (Artificial Analysis via BenchLM — high hallucination)
- AA-IFBench: **70.0%** (Artificial Analysis via BenchLM — decent instruction following)

Coding:

- SWE-bench Verified: **~77.9%** (OpenAI community / X posts — was frontier-leading at time of release; per Vals AI leaderboard, Claude Opus 5 now leads at 97.0%)
- LiveCodeBench (Vals): **83.6%** (Vals AI via BenchLM — excellent competitive programming)
- Vibe Code Bench: **22.17%** (Vals AI via BenchLM — poor end-to-end real-world delivery)
- τ²-bench: **83%** (also counts as agentic coding — strong terminal-based coding)

Multimodal & Grounded:

- AAA-MMMU-Pro: **72.5%** (Artificial Analysis via BenchLM — college-level multimodal understanding)

Long context:

- AA-LCR: **69.3%** at 400K context (Artificial Analysis via BenchLM — moderate long-context reasoning)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Note: BenchLM covers only 13 of 666 benchmarks — extremely sparse coverage means scores carry high uncertainty.

- **Tool use: 73/100.** τ²-bench 83% is excellent for agentic tool use. METR time horizon 2h42m (50%) shows productive autonomous coding on hour-long tasks. However, METR found the model failed all 20h+ tasks (same as GPT-5), and Codex scaffolding did not improve over METR's default scaffold. Capped by poor reliability on very long-horizon tasks and limited independent tool-use benchmark coverage.
- **Reasoning: 58/100.** GPQA Diamond 86.0% is frontier-competitive (strong graduate-level science reasoning). IFBench 70.0% is decent instruction following. However, HLE 25.7%, CritPt 5.7%, AA Intelligence Index 23.7%, and Omniscience Accuracy 39.9% are all weak. Hallucination rate 77.2% is very high. Capped by poor performance on hardest reasoning benchmarks (CritPt, HLE) and high hallucination rate.
- **Context window: 88/100.** 400K tokens — large but below the 1M+ tier. AA-LCR 69.3% confirms moderate effective long-context retrieval at that window. METR used 32M token budget per task with autocompaction, demonstrating practical long-context usage. Docked 12 for sub-1M window and moderate LCR score.
- **Multimodal: 15/100.** Text-only model. No image/audio/video input. MMMU-Pro 72.5% on BenchLM likely reflects text-based multimodal reasoning eval, but the model has no native vision input per its specification.
- **Coding: 80/100.** SWE-bench Verified ~77.9% was frontier-leading at release. LiveCodeBench 83.6% is excellent. τ²-bench 83% shows strong agentic coding. However, Vibe Code Bench 22.17% is very poor for end-to-end real-world software delivery, and METR found no improvement over GPT-5 on manually-scored 20h+ tasks. Capped by weak Vibe Code Bench and METR's finding of only incremental improvement over GPT-5.
- **Cost efficiency: 55/100.** $1.25/$10.00 per 1M is expensive — high output cost reflects heavy reasoning compute. Retired model may have limited availability. Cache pricing at $0.125 helps for repeated contexts.
- **Overall Score: 63/100.** Mean of five non-cost dims: (73 + 58 + 88 + 15 + 80) / 5 = 62.8, half-up = 63. Frontier coding specialist (SWE-bench 77.9%, LiveCodeBench 83.6%) with 400K context and strong agentic tool use (τ²-bench 83%), but held back by text-only modality, weak reasoning breadth (CritPt 5.7%, HLE 25.7%), poor Vibe Code Bench (22.17%), and only incremental improvement over GPT-5 per METR. Retired July 2026; best fit for: repo-scale code generation and agentic coding workflows where reasoning depth matters more than multimodal input.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across BenchLM, METR evaluation report, Artificial Analysis, Vals AI, userightai.com, OpenAI community forums, and X posts; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
