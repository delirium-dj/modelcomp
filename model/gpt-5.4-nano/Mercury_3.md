# GPT-5.4 nano — findings by Mercury 3

- Source: OpenAI (GPT-5.4 nano)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano
- **Short description:** OpenAI's cheapest GPT-5.4-class model (released March 2026), a lightweight variant for simple high-volume tasks — classification, data extraction, ranking, and sub-agent execution at low latency.
- **Provider / access:** OpenAI API (`gpt-5.4-nano`), Azure, OpenRouter and other providers (~10).
- **Release / knowledge:** Released March 2026; knowledge cutoff 2025-08-31 (family).
- **IDs:** `openai/gpt-5.4-nano`.
- **Context window:** 400K tokens.
- **Modalities:** text + image input; text output; reasoning; tool use; proprietary.
- **Pricing (as of 2026-11-06):** $0.20 in / $1.25 out per 1M (cached $0.02; OpenAI batch $0.10/$0.63).
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Agentic category: **16.9** (BenchGecko, #70)
- LiveBench Agentic Coding: **27.1%**

Reasoning / knowledge:

- GPQA Diamond: **74.3%**; ARC-AGI: **51.5%**; LiveBench Reasoning: **17.4%**
- OTIS Mock AIME 2024–25: **87.8%**; FrontierMath Tiers 1–3: 47.3%

Coding:

- LiveBench Coding: **61.9%**; WeirdML 49.2%
- BenchGecko composite: **28.8** (rank #266/325; 27 benchmarks)

Long context:

- 400K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Text+image input with text output

### Normalized scores (1–100)

- **Tool use: 68/100.** Agentic 16.9 and LiveBench Agentic Coding 27.1% — low; suited to simple sub-agent steps, not complex agent loops.
- **Reasoning: 74/100.** GPQA 74.3% and AIME 87.8% are decent for a nano tier; LiveBench Reasoning 17.4% caps upside.
- **Context window: 85/100.** 400K verified.
- **Multimodal: 70/100.** Text+image input, text output.
- **Coding: 76/100.** LiveBench Coding 61.9% — serviceable for high-volume simple coding tasks.
- **Cost efficiency: 84/100.** $0.20/$1.25 (batch $0.10/$0.63) — excellent for high-volume workloads.
- **Overall Score: 75/100.** Mean of the five non-cost dims (68+74+85+70+76)/5 = 74.6 → 75. Best-fit: a cheap, fast nano-tier workhorse for classification/extraction/ranking; not for complex agentic work.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI: Introducing GPT-5.4 mini and nano](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)
  - [OpenAI API docs: gpt-5.4-nano model page](https://developers.openai.com/api/docs/models/gpt-5.4-nano)
  - [BenchGecko: GPT-5.4 Nano page](https://benchgecko.ai/model/gpt-5-4-nano)
  - [llm-stats: GPT-5.4 nano](https://llm-stats.com/models/gpt-5.4-nano)
  - [OpenRouter: openai/gpt-5.4-nano](https://openrouter.ai/openai/gpt-5.4-nano)
  - [BenchLM: GPT-5.4 nano](https://benchlm.ai/models/gpt-5-4-nano)
- Future sources: add a new file next to this one using the same headings.
