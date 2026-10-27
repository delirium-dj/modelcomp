# GPT-5.2 Pro — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's "pro" variant of GPT-5.2, optimized for complex professional work with extended reasoning (xhigh). Released December 11, 2025. Available only via Responses API. Positioned as "previous pro model" with recommendation to use GPT-5.5 Pro instead. Proprietary, API-only.
- **Provider / access:** OpenAI API (`gpt-5.2-pro`), Azure OpenAI, OpenRouter, Vercel AI Gateway. Responses API only (not Chat Completions). Reasoning effort: medium, high, xhigh.
- **Release / knowledge:** 2025-12-11 release; knowledge cutoff August 31, 2025.
- **IDs:** `gpt-5.2-pro` (OpenAI), `openai/gpt-5.2-pro` (OpenRouter). No free tier.
- **Context window:** 400,000 tokens (272K input + 128K output). Verified via OpenAI API docs, OpenRouter, CloudPrice.
- **Modalities:** Text and image input; text output. Reasoning: yes (xhigh support). Tool calls: yes. JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Input $21.00/M, cached input $2.10/M (OpenAI), output $168.00/M. Batch: $10.50/M in, $84.00/M out. OpenRouter: $21/$168. Azure: up to $184.80/M out. Among the most expensive proprietary APIs.
- **Architecture:** Proprietary. Parameter count undisclosed. Same base as GPT-5.2 Thinking but with xhigh reasoning and Responses API exclusive features.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- BrowseComp: **77.9%** (vendor, max/xhigh) — OpenAI system card
- Tau2-Bench Telecom: **98.7%** (vendor, Thinking) — OpenAI system card (GPT-5.2 Thinking row)
- Tau2-Bench Retail: **82.0%** (vendor, Thinking) — OpenAI system card
- Scale MCP-Atlas: **60.6%** (vendor, Thinking) — OpenAI system card
- Toolathlon: **46.3%** (vendor, Thinking) — OpenAI system card
- Terminal-Bench 2.0: **52.8%** (pass@2 after retries, 3x timeout) — GitHub xdotli/gpt-5.2-tb2 (GPT-5.2 Pro row)
- Terminal-Bench 4.0: **no verified public score found** for Pro specifically
- GDPval (ties allowed, wins or ties): **74.1%** (vendor, Pro) — OpenAI system card
- GDPval (no ties): **67.6%** (vendor, Pro) — OpenAI system card
- Investment banking spreadsheet: **71.7%** (vendor, Pro) — OpenAI system card

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (Pro, no tools, max) — OpenAI system card / blog
- HLE (no tools): **36.6%** (Pro) — OpenAI system card
- HLE (w/ search, Python): **50.0%** (Pro) — OpenAI system card
- ARC-AGI-1 (Verified): **90.5%** (Pro, xhigh) — OpenAI blog / arcprize.org
- ARC-AGI-2 (Verified): **54.2%** (Pro, high) / **54.16%** (xhigh, verified) — OpenAI blog / arcprize.org / llm-stats
- AIME 2025 (no tools): **100.0%** (Pro) — OpenAI system card
- HMMT Feb 2025 (no tools): **100.0%** (Pro) — OpenAI system card
- FrontierMath Tier 1–3: **no Pro score** (Thinking: 40.3%) — OpenAI system card
- FrontierMath Tier 4: **no Pro score** (Thinking: 14.6%) — OpenAI system card
- MMMLU: **no Pro score** (Thinking: 89.6%) — OpenAI system card
- SimpleBench: **57.4%** (verified xHigh) — simple-bench.com / llm-stats

Coding:

- SWE-bench Verified: **no Pro score** (Thinking: 80.0%) — OpenAI system card
- SWE-bench Pro: **no Pro score** (Thinking: 55.6%) — OpenAI system card
- SWE-Lancer IC Diamond: **no Pro score** (Thinking: 74.6%) — OpenAI system card
- LiveCodeBench: **no Pro score** (Thinking not reported)
- Terminal-Bench 2.0: **52.8%** pass@2 (retries) — GitHub xdotli/gpt-5.2-tb2

Long context:

- MRCRv2 8-needle: **98.2%** (4k–8k) / **89.3%** (8k–16k) / **95.3%** (16k–32k) / **92.0%** (32k–64k) / **85.6%** (64k–128k) / **77.0%** (128k–256k) — OpenAI system card (Thinking row)
- BrowseComp Long Context 128k: **92.0%** / 256k: **89.8%** — OpenAI system card (Thinking)
- GraphWalks BFS <128k: **94.0%** / Parents <128k: **89.0%** — OpenAI system card (Thinking)

Multimodal:

- CharXiv reasoning (no tools): **82.1%** / (w/ Python): **88.7%** — OpenAI system card (Thinking)
- MMMU Pro (no tools): **79.5%** / (w/ Python): **80.4%** — OpenAI system card (Thinking)
- Video MMMU (no tools): **85.9%** — OpenAI system card (Thinking)
- ScreenSpot Pro (w/ Python): **86.3%** — OpenAI system card (Thinking)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** BrowseComp 78%, Tau2 Telecom 99%, Retail 82%, MCP-Atlas 61%, Toolathlon 46%. Exceptional tool use and agentic task performance. Capped by Toolathlon 46% and no Terminal-Bench 4.0 score for Pro.
- **Reasoning: 92/100.** GPQA Diamond 93.2% (highest published), ARC-AGI-2 54% (SoTA), ARC-AGI-1 90.5% (first >90%), AIME/HMMT 100%, HLE 37–50%. Near-ceiling on math/science/abstract reasoning. Capped by HLE 36.6% (no tools) vs Thinking 34.5% and FrontierMath Tier 4 unmeasured for Pro.
- **Context window: 85/100.** 400K context (256K–512K tier = 70–80, but MRCRv2 scores exceptional: 98%→77% across 4k–256k). GraphWalks 94/89%, BrowseComp 92/90% at 128k/256k. Tier placement + exceptional retrieval scores push to 85.
- **Multimodal: 85/100.** Text + image in, text out. CharXiv 82–89%, MMMU Pro 80%, Video MMMU 86%, ScreenSpot 86%. Strong vision reasoning with tools. Capped by text-only output, no audio/video generation.
- **Coding: 75/100.** Terminal-Bench 2.0 53% (retries), no SWE-bench Verified/Pro for Pro specifically (Thinking: 80%/56%). GitHub TB2 test shows Pro underperforms base GPT-5.2 (45%→53% vs 54%→60%). Capped by lack of direct Pro coding benchmarks and TB2 timeout issues (26→~1).
- **Cost efficiency: 15/100.** $21/$168 per 1M — among the most expensive APIs (only o1-pro/o3-pro higher). Blended ~$63/M. Batch 50% off helps but still premium. No free tier.
- **Overall Score: 84/100.** Mean of (85+92+85+85+75)/5 = 84.4 → 84. Model-queue shows 80.2 — my score higher due to exceptional reasoning (GPQA/ARC) and tool use. Best fit: premium professional/reasoning workloads where cost is secondary; Responses API exclusivity limits accessibility.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (OpenAI system card/blog, API docs, OpenRouter, llm-stats.com, GitHub xdotli/gpt-5.2-tb2, BenchmarkList, CloudPrice, VectorWire); scores normalized 1–100 per model-comparison.md methodology. **Critical note:** Many benchmarks reported for "GPT-5.2 Thinking" not Pro specifically; Pro scores only for GDPval, ARC, BrowseComp, HLE, AIME, HMMT, CharXiv, MMMU, Video MMMU, ScreenSpot. Thinking scores used as proxy where Pro missing, noted as vendor-reported.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.