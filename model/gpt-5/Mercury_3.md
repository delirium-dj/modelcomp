# GPT-5 — findings by Mercury 3

- Source: OpenAI/GPT-5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's landmark August 2025 unified model (released 2025-08-07, superseded by GPT-5.1/5.2/5.4/5.5): built-in router + thinking, SOTA math at launch (AIME 2025 94.6%), strong coding (SWE-bench Verified 74.9%), 400K context, Sep 2024 cutoff, $1.25/$10 — now well behind the GPT-5.6/6 line.
- **Provider / access:** OpenAI API (`gpt-5`), ChatGPT (default Free/Pro 2025); 38 providers per models.dev; GPT-5 pro/thinking/mini variants.
- **Release / knowledge:** Released 2025-08-07; knowledge cutoff Sep 30, 2024.
- **IDs:** `gpt-5` (OpenAI API; high reasoning; `gpt-5-thinking` variant).
- **Context window:** 400,000 tokens total; max output 128,000.
- **Modalities:** text + image input, text output; reasoning (built-in router/thinking); tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $1.25 input / $10.00 output per 1M tokens, 90% cache discount (fast variant 2×).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **84.8%** (AA); GDPval-AA: **1015 Elo** (20.9% normalized); JobBench: 8.5%; no strong modern agentic rows
- Instruction following/agentic gains per OpenAI launch (benchmarks not enumerated); Aider Polyglot: **88%**

Reasoning / knowledge:

- GPQA Diamond: **85.4%** (AA) / GPQA pro 88.4% without tools (OpenAI); HLE: **28.5%** (AA); MMLU-Pro: 87.1%; AIME 2025: **94.3%** (AA) / 94.6% (OpenAI); MATH-500: **99.4%**; Global-MMLU-Lite: 90.7%; IFBench: 73.1%
- AA-LCR: **78.2%**; CritPt: 5.7%; AA II: 23.0; MMMU: **84.2%** (OpenAI); HealthBench Hard: 46.2%
- AA-Omniscience: accuracy 40.3%, hallucination rate 82.2%

Coding:

- SWE-bench Verified: **74.9%** (OpenAI); LiveCodeBench: **84.6%** (AA); AA Coding Index: 37.8%; Vibe Code Bench: 20.09% (Vals)

Long context:

- 400K window; AA-LCR 78.2%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU 84.2% (OpenAI); MMMU-Pro 74.2% (AA); Design Arena 1184 Elo.

### Normalized scores (1–100)

- **Tool use: 66/100.** τ² 84.8% decent; capped by GDPval 1015 (20.9%), JobBench 8.5%, and no modern agentic rows — an old-generation profile.
- **Reasoning: 78/100.** AIME 94.3%, MATH-500 99.4%, GPQA 85.4%; capped by HLE 28.5%, CritPt 5.7%, II 23, and hallucination rate 82.2%.
- **Context window: 78/100.** 400K (below the 1M class) with moderate LCR 78.2%.
- **Multimodal: 82/100.** image input with strong MMMU 84.2%; text-only output.
- **Coding: 78/100.** SWE Verified 74.9%, LCB 84.6%; capped by Coding Index 37.8% and Vibe 20.09%.
- **Cost efficiency: 78/100.** $1.25/$10 with 90% cache discount — fair; 116.4 t/s, TTFT 69s.
- **Overall Score: 76/100.** Mean of (66+78+78+82+78)/5 = 76.4 → 76. A landmark 2025 model, now far behind the GPT-5.6/6 line — the queue average leans optimistic.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (OpenAI GPT-5 launch, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-5 (OpenAI, 2025-08-07)](https://openai.com/index/introducing-gpt-5/)
  - [GPT-5 — Artificial Analysis model page ($1.25/$10, 400K, cutoff Sep 2024)](https://artificialanalysis.ai/models/gpt-5)
  - [GPT-5 (high) — BenchLM benchmark aggregation](https://benchlm.ai/models/gpt-5-high)
  - [GPT-5 — models.dev registry (38 providers)](https://models.dev/models/openai/gpt-5)
