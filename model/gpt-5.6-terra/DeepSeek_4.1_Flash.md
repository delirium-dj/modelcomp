# GPT-5.6 Terra — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.6 Terra (`gpt-5.6-terra`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> OpenAI model docs confirm the balanced "mini-tier" of the GPT-5.6 family: **1,050,000 ctx / 922K max input / 128K max output**, cutoff **2026-02-16**, effort none→max, **$2 / $12 per 1M** (cached $0.20; >272K re-prices to **$4 / $18**), release **2026-07-09**. Independent: Vals AI SWE-bench **95.40% (#5/88)**, **Vals Index 53.09% (#20/45)**, TB4.0 **22.73%**; BenchLM overall **70.22** (agentic 60.6 #26/125, coding 61.9–63.5, reasoning 69.2, multimodal 84.5 #11/54); CloudPrice coding index **76.7 (#6)** and AA-derived rows (TerminalBench Hard 0.6 #3); Requesty GPQA Diamond **92.5%**, τ² **86.3%**, Coding Index 76.7%; The Agent Report (family) Sol > Terra. New rows this pass: **ARC-AGI-2 83.9%**, HLE-Verified 51.1%, MMMU-Pro 80.7%, HealthBench Hard 32.7%, CyberGym 81.8%, BrowseComp 87.5%.
> **Conflicts surfaced:** (1) **AA Intelligence Index is effort/tier dependent** — **47 (medium page)**, **42 (AA v4.3.2 / CloudPrice 42.1 #21)**, **32 (low)**; OpenAI self-reports 55 at max on the older v4.1 basket — none comparable directly. (2) **Pricing legacy vs current** — AIStudio still lists **$2.50/$15** while OpenAI/LLM Gateway/Models.dev/Requesty show **$2/$12** (recorded cut 2026-07-31 from $2.5→$2). (3) **Context reads 1,050,000 (docs)** vs **1.1M (AA/CloudPrice/Requesty)** vs **922K "maximum input"** in the same docs — window vs usable-input confusion. (4) **Independent terminal-agent is weak** (TB4.0 22.73%, Code Migration 47.8%) vs vendor TB2.1 **87.4%** — harness/generation gap. (5) Vals SWE-bench **95.40%** far exceeds OpenAI's SWE-bench Pro 63.4% — different task family, not the same metric.
> Sources: https://developers.openai.com/api/docs/models/gpt-5.6-terra · https://www.vals.ai/models/openai_gpt-5.6-terra · https://benchlm.ai/models/gpt-5-6-terra · https://artificialanalysis.ai/models/comparisons/gpt-5-6-terra-medium-vs-gpt-5-5-non-reasoning · https://cloudprice.net/models/openai-gpt-5-6-terra · https://www.requesty.ai/models/openai/gpt-5.6-terra · https://llmgateway.io/models/gpt-5.6-terra

## Model card

- **Name:** GPT-5.6 Terra (display "GPT-5.6 Terra")
- **Short description:** OpenAI's balanced mid-tier of the GPT-5.6 family (2026-07-09), the permanent capability band between Sol (max) and Luna (cheap); near-Sol headline evals at half the price, OpenAI's recommended default for professional/agentic workloads.
- **Provider / access:** OpenAI Responses API, Azure, Amazon Bedrock, Databricks, GitHub Copilot, OpenRouter, Vercel AI Gateway and ~50 more; Zen `gpt-5.6-terra`. Closed weights.
- **Release / knowledge:** 2026-07-09; knowledge cutoff 2026-02-16; announced deprecation 2028-01-11.
- **IDs:** `gpt-5.6-terra` (Bedrock `openai.gpt-5.6-terra`; a `gpt-5.6-terra-pro` alias exists on some gateways at the same price).
- **Context window:** **1,050,000** input (922K max input) / **128,000** max output (AA/CloudPrice/Requesty round to 1.1M).
- **Modalities:** text + image + PDF in; text out; reasoning incl. **max** effort; tools/structured outputs, web search, prompt caching; **no audio/video**.
- **Pricing (as of 2026-10-16):** **$2.00 in / $12.00 out** per 1M (cached input $0.20, 90% off); **>272K input re-priced to $4 / $18** (2× in / 1.5× out); batch halves to $1/$6; cache writes 1.25×; paid only. (Legacy $2.50/$15 still shown on some trackers.)
- **Architecture:** undisclosed (GPT-5.6 family), proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **87.4%** (OpenAI) / 77.5% (Vals); **Terminal-Bench 3.0 20.8%**; **Terminal-Bench 4.0 22.73%** (Vals); TerminalBench Hard 0.6 (#3, CloudPrice)
- Toolathlon 53.1% (OpenAI); τ²-bench 86.3% (Requesty/AA); GDPval-AA 1593 Elo (OpenAI) / 47.7% normalized (AA)
- OSWorld 2.0 50.2%; **BrowseComp 87.5%**; Coding Agent Index 77.4; CyberGym 81.8%; ExploitGym 23.2%; ApprenticeBench 16%

Reasoning / knowledge:

- GPQA Diamond **92.9% (OpenAI/BenchLM) / 92.5% (AA) / 90.91% (Vals)**; ARC-AGI-1 **96.5%**; **ARC-AGI-2 83.9%**; ARC-AGI-3 0.8%
- HLE-Verified **51.1%**; AA-HLE 42.9%; AA-LCR 83.0% / LCR 0.8 (#21); CritPt 30.0%
- Artificial Analysis Intelligence Index **47 (medium page) / 42.1 #21 (v4.3.2) / 32 (low)** vs OpenAI-self **55 (v4.1, max)**; MMLU-Pro 86.66% (Vals)

Coding:

- SWE-bench **95.40% (#5, Vals)**; SWE-bench Pro 63.4% (OpenAI); DeepSWE 69.6%; LiveCodeBench 85.93% (Vals)
- Code Migration 47.80% (Vals); SciCode 55.0% / 0.6 (#26); Coding Index 76.7 (#6); CursorBench 3.2 64.9% / 4.0 41.3%; FrontierCode 1.1 Extended 55.8%; VulcanBench v3 87.0%; WebDev Arena 1523

Long context:

- 1.05M window; **no MRCR/RULER/GraphWalks published**; AA-LCR 83.0% is the closest signal.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 87.4% (vendor) / 77.5% (Vals), τ² 86.3% and Coding Agent Index 77.4 are near-frontier; capped by TB3.0/TB4.0 ~21% and OSWorld 50.2%.
- **Reasoning: 89/100.** GPQA ~91–93% and ARC-AGI-1 96.5% are flagship-band, HLE-Verified 51.1%; the independent AA Index of 42–47 (<60) is the main cap.
- **Context window: 96/100.** 1.05M input / 128K output matching Sol (≥1M band); no recall-at-depth benchmark.
- **Multimodal: 68/100.** Text + image + PDF in, text out with MMMU-Pro 80.7–86.5%; no audio/video, no media generation.
- **Coding: 86/100.** Vals SWE-bench 95.4% (#5), LiveCodeBench 85.9% and Coding Index #6 are strong; SWE-bench Pro 63.4%, DeepSWE 69.6% and weak TB4.0/Code Migration cap it.
- **Cost efficiency: 74/100.** $2/$12 per 1M with 90%-off cache reads and half-Sol positioning; >272K doubling and ~2.7× Gemini 3.8 Flash input soften it.
- **Overall Score: 85/100.** (87 + 89 + 96 + 68 + 86) / 5 = 85.2 → 85. Best fit: production agent and long-context workflows wanting near-flagship OpenAI behaviour without paying Sol's premium.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-16
- Method: rewrite-pass public internet research (OpenAI model docs + pricing, Vals AI model page, BenchLM model + compare pages, Artificial Analysis comparison pages, CloudPrice, Requesty, LLM Gateway, Models.dev, The Agent Report). Independent Vals/BenchLM rows promoted; the AA effort-tier spread, the legacy-vs-current pricing and the weak independent terminal-agent results are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
