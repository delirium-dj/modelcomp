# GPT-5.5 Pro — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5.5-pro`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's high-capability Pro variant of GPT-5.5 ("Spud", family released 2026-04-23), optimized for deep reasoning and accuracy on complex, high-stakes workloads. OpenAI tested Pro "only on selected benchmarks" — its published evidence is reasoning/web-research/knowledge-work only. Not a variant/alias of another entry in this dataset.
- **Provider / access:** OpenAI Responses + Chat Completions API, available since 2026-04-25 (the-decoder update), plus ChatGPT Pro tier. Both GPT-5.5 and GPT-5.5 Pro share the one-million-token class window in API.
- **Release / knowledge:** family released 2026-04-23; Pro API availability 2026-04-25; knowledge cutoff Dec 2025 (family row, LLMReference/OpenRouter).
- **IDs:** `gpt-5.5-pro`. **No OpenCode Zen Free ID found** — scored on paid API pricing.
- **Context window:** **1,050,000 tokens input / 128,000 max output** (llm-stats spec table; LLMReference confirms 1.05M). GPT-5.5 base lists 922K input usable / 1.1M marketed (OpenRouter) — the Pro row is 1.05M consistently.
- **Modalities:** text + image in; text out (OpenRouter/llm-stats family modality rows); reasoning yes. No audio/video input found.
- **Pricing (as of 2026-10-01):** **$30 / 1M input, $180 / 1M output** (OpenAI pricing via Investing.com/Yahoo Finance release coverage; llm-stats confirms as only provider price). Paid tier only — no free API tier verified.
- **Architecture:** proprietary, closed weights, parameters undisclosed; built on the GPT-5.5 lane (developed on NVIDIA GB200/GB300 NVL72 systems per release coverage).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.
> OpenAI's GPT-5.5 comparison table explicitly states Pro "was only tested on selected benchmarks" — dashes elsewhere are not missing data collection, they were never run/published.

Agent / tool use:

- GDPval (wins/ties vs professionals): **82.3%** (OpenAI via the-decoder table) — vs GPT-5.5 84.9%, GPT-5.4 Pro 82.0%, Claude Opus 4.7 80.3%
- BrowseComp (agentic web research): **90.1%** (OpenAI; BenchLM agrees) — beats GPT-5.4 Pro 89.3% and GPT-5.5 84.4%
- Terminal-Bench (any version) / τ²-Bench / Tau3 / OSWorld / Toolathlon / MCP Atlas: **no verified public score found** for Pro

Reasoning / knowledge:

- HLE: **57.2%** with tools, **43.1%** w/o tools (BenchLM) — both clear the 40%+ frontier anchor
- FrontierMath v2: **52.4%** Tiers 1–3, **39.6%** Tier 4 (OpenAI via the-decoder; Tier 4 beats GPT-5.4 Pro's 38.0%)
- FrontierMath legacy: 52.4% (BenchLM vs GPT-5.4 Pro row)
- GPQA Diamond / AA Intelligence Index / ARC-AGI: **no verified public score found** for Pro (base GPT-5.5: GPQA 88.9–94% across sources, AAII 59 — cite as family context only)
- BenchLM composite: **63.08**, estimated, public rank #17–24 band; knowledge lane 61.1 (#37/181), agentic lane 60.6 (#24/151)

Coding:

- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench / SciCode / Terminal-Bench / Vibe Code Bench: **no verified public score found** for Pro
- Base GPT-5.5 family context only: SWE-Bench Pro 58.6%, Terminal-Bench 2.0 82.7%, Expert-SWE (internal) 73.1%, SciCode 56.1% (OpenAI release coverage)

Long context:

- 1.05M window; MRCR / GraphWalks retrieval published for **base GPT-5.5** only (MRCR v2 74.0% at 512K–1M; GraphWalks BFS 1M 45.4%) — **no Pro-specific retrieval row found**

Multimodal:

- Text + image in (family modality rows); MMMU / MMMU-Pro / CharXiv: **no verified public score found** for Pro

### Normalized scores (1–100)

- **Tool use: 70/100.** GDPval 82.3% wins/ties is strong knowledge-work-agentic evidence and BrowseComp 90.1% is elite web research, but none of the methodology's core tool anchors (Terminal-Bench, τ², GDPval-AA Elo, OSWorld, Toolathlon) were run on Pro — the score pairs one strong adjacent row with a documented evaluation gap.
- **Reasoning: 94/100.** HLE 57.2% w/tools and 43.1% w/o both clear the 40%+ frontier anchor by a wide margin, FrontierMath T1–3 52.4% and T4 39.6% are SOTA-class (T4 beats GPT-5.4 Pro) — capped just below 95 because GPQA and an AA Intelligence Index row were never published for Pro.
- **Context window: 95/100.** 1.05M tokens is the ≥1M tier (95–100); the 100 requires ≥98% retrieval measured at 512K+, and the MRCR/GraphWalks numbers that exist are for base GPT-5.5, not Pro.
- **Multimodal: 65/100.** Text + image in = image-in band (60–70); no PDF/video/audio input verified, no Pro multimodal benchmark (MMMU row absent), no non-text output.
- **Coding: 70/100.** Zero measured coding rows for Pro (OpenAI ran "selected benchmarks" only) — scored as an evidence gap with credit for the strongest base lane in its generation (GPT-5.5: SWE-Bench Pro 58.6%, Terminal-Bench 2.0 82.7%, Expert-SWE 73.1%), which is a stronger lineage than GPT-5.4 Pro's; no hallucinated Pro score.
- **Cost efficiency: 15/100.** $30/$180 per 1M sits far past the $10/$50 ≈ 30 anchor — the joint-highest output price in this queue, no published cached-input rate, 12× the blended cost of GPT-5.4.
- **Overall Score: 79/100.** (70 + 94 + 95 + 65 + 70) / 5 = 78.8 → 79 — best-fit as an elite long-horizon reasoning and research Pro lane (HLE, FrontierMath, BrowseComp at 1.05M) with no published tool/coding/multimodal evidence and Pro-tier pricing.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (OpenAI GPT-5.5 benchmark table via the-decoder, Investing.com release coverage with pricing, llm-stats spec/benchmark rows, BenchLM head-to-head ledgers, LLMReference spec sheet); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
