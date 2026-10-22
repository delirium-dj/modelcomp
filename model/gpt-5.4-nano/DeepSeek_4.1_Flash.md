# GPT 5.4 Nano — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.4 nano (`openai/gpt-5.4-nano`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gpt-5-4-nano`, 39 rows) computes an overall **46.83/100 (#115 of 972)** and confirms the deep pass: Terminal-Bench 2.0 46.3% (Vals 2.1 41.6%), OSWorld-Verified 39%, MCP Atlas 56.1%, τ² 92.5%, GPQA 82.8% (AA 81.7%), HLE 37.7%, AA-LCR 76.7%, MMMU-Pro 66.1%, Vibe Code Bench 26.10%, FrontierMath v2 44.91%/12.20%. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked against OpenAI's launch post (2026-03-17), Artificial Analysis, BenchLM, LLM-Stats, BenchmarkList, Benchable and AI Release Tracker (7 independent sources). New verified rows added this pass: SWE-bench Verified 69.8% (Vals), SWE-Bench Pro (Public) 52.4% and MCP Atlas 56.1% / Toolathlon 35.5% / τ²-Bench Telecom 92.5% (OpenAI), Vals LiveCodeBench 84.0%, Vals GPQA Diamond 77.5%, and long-context MRCR v2 / Graphwalks. Harness conflicts were surfaced rather than merged (τ²-Bench Telecom 92.5% OpenAI vs 76.0% AA/BenchmarkList; GPQA 82.8% OpenAI vs 81.7% AA vs 77.5% Vals). Coding was re-scored where the new SWE/LiveCode evidence warranted it (76→77); Tool use, Reasoning, Context, Multimodal and Cost were kept with refreshed justification.

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** The most lightweight and cost-efficient GPT-5.4 variant — text and image input optimised for speed-critical, high-volume work such as classification, extraction, ranking and sub-agent execution, where responsiveness beats deep reasoning. OpenAI's launch summary calls it "the smallest, cheapest version of GPT‑5.4 for tasks where speed and cost matter most" (https://openai.com/index/introducing-gpt-5-4-mini-and-nano/).
- **Provider / access:** OpenAI API (first-party; also surfaced on Azure OpenAI and listed on OpenRouter/BenchmarkList). OpenAI states GPT‑5.4 nano is "only available in the API". Not open weights. Curated prior note: OpenCode Zen tracks it as `opencode/gpt-5.4-nano`; not independently re-verified this pass. No Zen Free ID.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff August 2025 (2025-08-31 per LLM-Stats and Artificial Analysis).
- **IDs:** `gpt-5.4-nano` (OpenAI); API snapshot id `openai/gpt-5.4-nano-20260317` seen on Benchable/BenchmarkList. Distinct from `gpt-5.4` (released 2026-03-05, 1M context, $2.50/$15.00) and `gpt-5.4-mini` (400K, $0.75/$4.50) — do not merge.
- **Context window:** 400K tokens input; **128K max output** (LLM-Stats, confirmed this pass; prior note said max output "not separately published").
- **Modalities:** text and image in; text out. Reasoning yes (incl. xhigh), tool use, structured outputs, response format.
- **Pricing (as of 2026-10-11):** **$0.20 / $1.25 per 1M** in/out (OpenAI first-party, verified); cached input **$0.02**.
- **Architecture:** proprietary decoder-only, lightweight tier. Not released; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **92.5%** (xhigh, OpenAI launch) vs **76.0%** (Artificial Analysis / BenchmarkList) — **conflict** (harness differs).
- MCP Atlas: **56.1%**; Toolathlon: **35.5%**; Terminal-Bench 2.0: **46.3%**; OSWorld-Verified: **39.0%** — all OpenAI launch, xhigh.
- Terminal-Bench Hard: **42.4%** (AA); Terminal-Bench 2.1: **60.7% (xhigh)** / **41.6% (high)** (Vals/AA); Terminal-Bench 2.0 (Vals): **39.9%**.
- Tau3-Banking: **27.4%**; GDPval-AA: **22.4%** normalized / **1,035–1,104 Elo**; AA Agentic Index: **17.7**; APEX-Agents-AA: **24.9%**; AA-Briefcase Elo: **670**.
- IFBench: **75.9%** (AA). Claw-Eval: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (OpenAI) / **81.7%** (AA) / **77.5%** (Vals) — **conflict across three harnesses**.
- HLE: **37.7%** with tools, **24.3%** w/o tools (OpenAI); **28.3%** (AA-HLE) — **conflict** (tool access).
- Artificial Analysis Intelligence Index: **20.7** (xhigh, BenchLM/AA); note BenchmarkList prints an "AA Intelligence Index" value of 38.24 under a different composite — **conflict, not merged**.
- CritPt **9.3%**; ARC-AGI-1 **51.5%**; ARC-AGI-2 **5.7%**; MMLU-Pro **77.2%** (Vals); AIME **88.8%** (Vals).
- AA-Omniscience Accuracy **25.7%** / hallucination rate **74.2%** / index **−29.5%**; Vectara HHEM factual consistency **96.9%** (hallucination 3.1%).
- FrontierMath v2: Tiers 1–3 **25.86%**, Tier 4 **6.25%**.

Coding:

- AA Coding Index: **56.1**; SciCode: **47.2%**; SWE-bench Verified: **69.8%** (Vals); SWE-Bench Pro (Public): **52.4%** (OpenAI); LiveCodeBench: **84.0%** (Vals); Vibe Code Bench v1.1: **26.1%**; ALE-Bench: **1004.52**; IOI: **15.3%**.

Long context:

- 400K-token window, 128K max output. AA-LCR: **76.7%** (strong for a nano tier). OpenAI MRCR v2 8-needle: **44.2%** (64K–128K), **33.1%** (128K–256K); Graphwalks BFS 0–128K **73.4%**, Graphwalks parents 0–128K **50.8%**. **No RULER/GraphWalks-beyond-128K score** — **no verified public score found**.

Multimodal:

- MMMU-Pro **66.1%**, MMMU-Pro w/ Python **69.5%** (OpenAI); AA-MMMU-Pro **65.4%**; Vals MMMU Pro **73.6%**. OmniDocBench 1.5 (no tools, edit distance, lower better) **0.2419**. No audio/video documented.

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 56.1%, Terminal-Bench 2.0 46.3% and τ²-Bench Telecom 92.5% (OpenAI) are good for a nano tier, but GDPval-AA (~1,035–1,104 Elo) and the AA Agentic Index (17.7) cap it mid-band; OSWorld-Verified 39% and Toolathlon 35.5% confirm the ceiling (https://openai.com/index/introducing-gpt-5-4-mini-and-nano/, https://benchlm.ai/models/gpt-5-4-nano).
- **Reasoning: 76/100.** GPQA Diamond 81.7–82.8% is strong for the class and AIME 88.8% is solid; HLE 28.3% (AA) / 24.3% w/o tools and an Intelligence Index of 20.7 keep it out of the frontier band (https://artificialanalysis.ai/models/gpt-5-4-nano, https://openai.com/index/introducing-gpt-5-4-mini-and-nano/).
- **Context window: 80/100.** 400K tokens sits in the 200K–500K band (200K = 70, 500K = 85), now with a confirmed 128K max output; unchanged (https://llm-stats.com/models/gpt-5.4-nano).
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); MMMU-Pro 65.4–73.6% and no audio/video documented (https://openai.com/index/introducing-gpt-5-4-mini-and-nano/).
- **Coding: 77/100.** AA Coding Index 56.1 and SciCode 47.2% are mid-tier, but the newly verified SWE-bench Verified 69.8% (Vals), SWE-Bench Pro 52.4% and LiveCodeBench 84.0% lift it a notch above the prior 76; Vibe Code Bench 26.1% is the soft spot (https://benchlm.ai/models/gpt-5-4-nano, https://www.vals.ai/benchmarks/swebench).
- **Cost efficiency: 96/100.** $0.20 / $1.25 per 1M (cached $0.02) is near-budget pricing, just above the ~$0.10/$0.20 (97–99) band (https://openai.com/index/introducing-gpt-5-4-mini-and-nano/).
- **Overall Score: 75/100.** (72 + 76 + 80 + 68 + 77) / 5 = 74.6 → 75. Best fit: classification, extraction, ranking and high-volume sub-agent execution at very low cost.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (OpenAI launch post; Artificial Analysis; BenchLM; LLM-Stats; BenchmarkList; Benchable; AI Release Tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
