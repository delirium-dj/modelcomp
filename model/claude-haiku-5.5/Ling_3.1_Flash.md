# Claude Haiku 5.5 — findings by Ling 3.1 Flash

- Source: Anthropic / Claude Haiku 5.5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's small-class model, released 2026-10-07 for high-volume, latency-sensitive work (classification, routing, extraction, subagents). First Haiku with adjustable effort settings and adaptive thinking; ~75% cheaper to run than Haiku 4.5 on average. Not a Sonnet replacement for complex agentic coding.
- **Provider / access:** Anthropic API `claude-haiku-5-5` (Messages API); also Azure AI, Amazon Bedrock, Vertex AI, OpenRouter (`anthropic/claude-haiku-5.5`), Vercel.
- **Release / knowledge:** 2026-10-07; reliable knowledge cutoff Jun 2026.
- **IDs:** `anthropic/claude-haiku-5-5`
- **Context window:** 1M tokens (128K max output; 300K max on Batch API beta); new tokenizer counts ~30% more tokens than Haiku 4.5's.
- **Modalities:** text and images in; text out; adaptive thinking (effort low/medium/high/xhigh/max, default medium); fastest comparative latency.
- **Pricing (as of 2026-10-08):** $0.10 / 1M input and $0.50 / 1M output for prompts ≤100K tokens; $0.50 / $2.50 above 100K; cache read $0.01 ($0.05 over 100K); 5m cache write $0.125 ($0.625); Batch API 50% off.
- **Architecture:** proprietary; same tokenizer family as Claude 4.7+.

### Raw benchmarks found

Anthropic-reported unless noted (system card + launch post, 2026-10-07).

Agent / tool use:

- OSWorld 2.1 (offline subset): **72.4%** (strict: 37.1%) — vs Haiku 4.5 15.7%, GPT-6 Luna 48.9%, Sonnet 5.5 83.9%
- ProgramBench (rebuild program from binary+docs, up to 1M context): **82.0%** — beats Sonnet 5.5's 79.7%
- GDPval-AA v2.1: **1620** Elo (vs Haiku 4.5 735, GPT-6 Luna 1437, Sonnet 5.5 1840)
- AA-Briefcase v1.1: **1578** Elo (AA: comparable to Muse Spark 1.3 max)
- AutomationBench-AA: **35%** (likely understated — safety-refusal issue during pre-release testing; AA expects a re-run to rise)
- HubSpot simulated CRM portal suite: **92.8%** averaged over 3 runs (customer report)

Reasoning / knowledge:

- Humanity's Last Exam: **45.9%** no tools / **57.4%** with tools (vs Haiku 4.5 10.2%/18.7%, Sonnet 5.5 56.9%/64.5%)
- AA Intelligence Index: **43** (max effort; 38 at high, 29 at low) — ahead of GLM-5.3 Flash (42), Gemini 3.8 Flash (41), GPT-6 Luna (38); comparable to Kimi K3 (44); 13 points below Sonnet 5.5 max (56)
- AA-Omniscience: accuracy **36%**, hallucination rate **40%** (lower than Gemini 3.8 Flash's 55% and GPT-6 Luna's 77%)
- CritPt: **19%**; Long-context reasoning (AA): **83%**

Coding:

- Terminal-Bench 4.0: **39.2%** at max ($2.64/task); effort ladder 12.7% (low) / 20.3% (medium) / 24.8% (high) / 31.5% (xhigh) — vs Sonnet 5.5 70.6% at max ($10.44)
- FrontierCode 1.1 (Main): **46.4%**; FrontierCode Extended (150-task): **58.4%** at max
- FrontierSWE v2: **43.8%** (vs Claude Fable 5 47.0%)
- SWE-bench Pro: **64.8%**; SWE-bench Multilingual: **83.7%**; SWE-bench Multimodal: **30.7%**
- Terminal-Bench-Science 0.1: **20.6%** (vs Sonnet 5.5 59.9%)

Multimodal:

- Chartography (no tools): **46.4%** (vs Haiku 4.5 6.4%, GPT-6 Luna 29.1%, Sonnet 5.5 61.6%)
- HealthBench Professional: **64.8%** (vs Haiku 4.5 32.2%, Sonnet 5.5 69.2%)

Long context:

- AA long-context reasoning **83%**; ProgramBench runs episodes up to the full 1M-token window.

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld 72.4% and ProgramBench 82.0% are standout small-class rows (ProgramBench beats Sonnet 5.5); AutomationBench 35% (refusal-bugged) caps it.
- **Reasoning: 72/100.** HLE 45.9% no-tools and AA Index 43 lead the small class, but CritPt 19% and Omniscience accuracy 36% keep it well below Sonnet-tier reasoning.
- **Context window: 85/100.** Full 1M tokens at standard tiered pricing with 83% long-context reasoning and 1M-token ProgramBench episodes.
- **Multimodal: 70/100.** Image+text input with Chartography 46.4% (5× Haiku 4.5) and SWE-bench Multimodal 30.7%; no audio/video.
- **Coding: 75/100.** SWE-bench Multilingual 83.7%, Pro 64.8% and FrontierCode Extended 58.4% are strong; Terminal-Bench 4.0 39.2% and TB-Science 20.6% confirm Anthropic's own "not for complex agentic coding" guidance.
- **Cost efficiency: 95/100.** $0.10/$0.50 per 1M (≤100K) with $0.01 cache reads — the cheapest frontier-adjacent model listed; ~20× cheaper per token than Sonnet 5.5.
- **Overall Score: 76/100.** Mean of the five quality dims (78+72+85+70+75)/5 = 76.0; best fit for high-volume classification, extraction, summarization, subagent and computer-use tasks where Sonnet cost is prohibitive.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Anthropic launch post, platform docs, system card, Artificial Analysis, CtrlAltDebrief, Reconscribe); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
