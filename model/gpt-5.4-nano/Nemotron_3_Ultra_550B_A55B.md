# GPT-5.4 Nano — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`
>
> **NOTE:** Status shown as "Deprecated" on OpenAI API docs (deprecation date April 1, 2027 per LiteLLM). Still generally available as of October 2026.

## Model card

- **Name:** GPT-5.4 Nano (gpt-5.4-nano)
- **Short description:** OpenAI's smallest and cheapest GPT-5.4 variant, released March 17, 2026. Optimized for high-volume, speed-critical tasks: classification, data extraction, ranking, coding subagents. Significant upgrade over GPT-5 Nano. Proprietary, API-only.
- **Provider / access:** OpenAI API (`gpt-5.4-nano`), Azure OpenAI, OpenRouter, Vercel AI Gateway, Cloudflare, AIHubMix, Databricks, GitHub Copilot, Perplexity. Chat Completions + Responses API + Batch API. Reasoning effort: none/low/medium/high/xhigh.
- **Release / knowledge:** 2026-03-17 release; knowledge cutoff August 31, 2025.
- **IDs:** `gpt-5.4-nano` (OpenAI), `openai/gpt-5.4-nano` (OpenRouter). No free tier.
- **Context window:** 400,000 tokens (272K input + 128K output). Verified via OpenAI API docs, OpenRouter, LiteLLM (272K context), Vercel (400K).
- **Modalities:** Text and image input; text output. Reasoning: yes (xhigh support). Tool calls: yes. JSON mode: yes. Structured output: yes. Batch API supported.
- **Pricing (as of 2026-10-27):** OpenAI: $0.20/M in, $0.02/M cached, $1.25/M out. Batch: $0.10/M in, $0.625/M out. Azure: $0.22/$1.375 (eu/us). OpenRouter: $0.20/$1.25. Blended ~$0.50–0.60/M. 4x GPT-5 Nano price ($0.05/$0.40). No free tier.
- **Architecture:** Proprietary. GPT-5.4 family base. Parameter count undisclosed. 400K context with reasoning token support.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **46.3%** (xhigh) — OpenAI blog / OpenRouter (AA)
- Terminal-Bench 2.1 (Vals): **41.6%** — OpenRouter / Vals AI
- Terminal-Bench 4.0 (AA): **0.5%** (xhigh) / **1%** (Medium) — OpenRouter (AA)
- Terminal-Bench Hard (AA): **42.4%** (xhigh) / **33.3%** (Medium) — OpenRouter
- MCP Atlas: **56.1%** (xhigh) — OpenAI blog / OpenRouter
- Toolathlon: **35.5%** (xhigh) — OpenAI blog / OpenRouter
- τ²-Bench Telecom: **92.5%** (xhigh) / **52.6%** (Medium) / **34.8%** (non-reasoning) — OpenAI blog / OpenRouter
- τ²-Bench Banking: **27.4%** (xhigh, AA) — OpenRouter
- AutomationBench-AA: **6%** (xhigh, AA) — OpenRouter
- AA Agentic Index: **16.0** (xhigh, AA) — OpenRouter

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (xhigh, OpenAI blog) / **81.7%** (xhigh, AA) / **77.5%** (Vals high) / **76.1%** (Medium, AA) / **55.8%** (non-reasoning, AA) — OpenAI / OpenRouter / Vals
- HLE (no tools): **24.3%** (xhigh, OpenAI blog) / **28.3%** (xhigh, AA) / **15.9%** (Medium, AA) / **4.1%** (non-reasoning, AA) — OpenAI / OpenRouter
- HLE (w/ tools): **37.7%** (xhigh, OpenAI blog) — OpenAI
- HLE w/ tool: **52.1%** (GPT-5.4 xhigh) / **41.5%** (mini) / **37.7%** (nano) — OpenAI blog
- MMLU-Pro: **77.2%** (Vals high) — OpenRouter
- MMLU-Pro (Vals): **77.2%** — OpenRouter
- SimpleQA Verified: **11.7%** (Epoch, same as GPT-5 nano) — Benchmark Registry
- AA Intelligence Index: **20.7** (xhigh, AA) / **20.0** (Medium) / **11.7** (non-reasoning) — OpenRouter
- IFBench: **75.9%** (xhigh) / **64.4%** (Medium) / **32.7%** (non-reasoning) — OpenRouter
- CritPt: **9.3%** (xhigh) / **5.1%** (Medium) / **0.0%** (non-reasoning) — OpenRouter
- AA-Omniscience Accuracy: **25.7%** (xhigh) / **21.9%** (Medium) / **14.9%** (non-reasoning) — OpenRouter
- AA-LCR: **76.7%** (xhigh) / **67.3%** (Medium) / **29.7%** (non-reasoning) — OpenRouter
- GDPval-AA: **22.4%** (xhigh, AA) — OpenRouter
- FrontierMath v2 Tiers 1-3: **25.9%** (xhigh, BenchLM) — BenchLM
- FrontierMath v2 Tier 4: **6.25%** (xhigh, BenchLM) — BenchLM
- AIME: **88.8%** (Vals) — OpenRouter
- SciCode: **47.2%** (xhigh, AA) — OpenRouter

Coding:

- SWE-bench Verified: **52.4%** (xhigh, OpenAI blog) / **69.8%** (Vals high) / **34.8%** (GPT-5 nano, mini-swe-agent, different harness) — OpenAI / OpenRouter / Benchmark Registry
- SWE-bench Pro: **52.4%** (xhigh, OpenAI blog) — OpenAI
- LiveCodeBench (Vals): **84.0%** — OpenRouter
- Vibe Code Bench v1.1: **26.1%** (Vals) — OpenRouter
- Code Migration: **14.5%** (Vals) — OpenRouter
- Terminal-Bench 2.0: **46.3%** (xhigh) — OpenAI blog / OpenRouter
- MCP Atlas: **56.1%** (xhigh) — OpenAI blog / OpenRouter
- Toolathon: **35.5%** (xhigh) — OpenAI blog / OpenRouter
- AA Coding Index: **56.1** (xhigh, AA) — OpenRouter

Long context:

- MRCR v2 8-needle 64K–128K: **44.2%** (xhigh) — OpenAI blog
- MRCR v2 8-needle 128K–256K: **33.1%** (xhigh) — OpenAI blog
- GraphWalks BFS 0K–128K: **73.4%** (xhigh) — OpenAI blog
- GraphWalks Parents 0–128K: **50.8%** (xhigh) — OpenAI blog
- AA-LCR: **76.7%** (xhigh) / **67.3%** (Medium) / **29.7%** (non-reasoning) — OpenRouter
- Native 400K context verified

Multimodal:

- MMMU Pro (no tools): **66.1%** (xhigh) — OpenAI blog / OpenRouter
- MMMU Pro (w/ Python): **69.5%** (xhigh) — OpenAI blog
- OmniDocBench 1.5 (edit distance, lower better): **0.2419** (xhigh, reasoning none) — OpenAI blog
- OSWorld-Verified: **39.0%** (xhigh) / **42.0%** (GPT-5 mini high) — OpenAI blog
- OSWorld (Vals): **no direct score** (BenchLM coming soon)
- Vals Multimodal Index: **47.6%** — OpenRouter

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** Terminal-Bench 2.0 46%, TB 2.1 42%, MCP Atlas 56%, Toolathlon 36%, τ² Telecom 93%, AutomationBench 6%, AA Agentic Index 16. Strong telecom tool use but very weak AutomationBench and low agentic index. Capped by AutomationBench 6% and TB 4.0 0.5%.
- **Reasoning: 65/100.** GPQA Diamond 83% (xhigh), HLE 24–38%, MMLU-Pro 77%, AA Index 21 (xhigh), IFBench 76%, CritPt 9%, AA-LCR 77%, SciCode 47%, FrontierMath T1-3 26%. Good GPQA/MMLU/IFBench but HLE and AA Index very low. Capped by HLE 24% and AA Index 21 vs top models (50+).
- **Context window: 80/100.** 400K native (256K–512K tier = 70–80). MRCR 44% (64–128K) / 33% (128–256K), GraphWalks BFS 73%, Parents 51%, AA-LCR 77%. Good retrieval at 128K but drops at 256K. Capped by MRCR drop at 256K and not 1M+ native.
- **Multimodal: 65/100.** Text + image in, text out. MMMU Pro 66–70%, OSWorld 39%, OmniDocBench 0.24 edit dist, Vals Multimodal 48%. Decent vision but OSWorld very low (39% vs mini 72%). Capped by OSWorld 39% and text-only output.
- **Coding: 65/100.** SWE-bench Verified 52% (xhigh) / 70% (Vals), LiveCodeBench 84%, Terminal-Bench 2.0 46%, Vibe Code 26%, MCP Atlas 56%, AA Coding Index 56. Strong LiveCodeBench but SWE-bench and Vibe Code modest. Capped by SWE-bench 52% (xhigh) vs 5.4 mini 54% and 5.4 58%.
- **Cost efficiency: 75/100.** $0.20/$1.25 — 4x GPT-5 Nano but 3.75x cheaper than 5.4 Mini ($0.75/$4.50). Blended ~$0.50/M. Batch 50% off ($0.10/$0.625). No free tier. Good value for capability tier.
- **Overall Score: 67/100.** Mean of (60+65+80+65+65)/5 = 67.0. Queue shows 73.7 — gap due to low OSWorld (39%), AutomationBench (6%), AA Agentic Index (16), modest SWE-bench (52%). Best fit: ultra-cheap subagent/classification/extraction at scale; not for computer use or complex agentic coding.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (OpenAI API docs/blog, OpenRouter/Artificial Analysis, Vals AI, BenchLM, Benchmark Registry, LiteLLM, Vercel, Azure, Cloudflare, DataCamp blog); scores normalized 1–100 per model-comparison.md methodology. Conflicting SWE-bench Verified (52% OpenAI xhigh vs 70% Vals high vs 35% GPT-5 nano different harness) and HLE (24% vs 28% vs 38% w/tools) noted. Deprecated status (Apr 2027) noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.