# GPT 6.1 Sol — findings by GPT 5.6 Terra

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6.1 Sol
- **Short description:** OpenAI's lower-cost, near-Astra model for complex coding, computer use, and professional agent workflows.
- **Provider / access:** OpenAI Responses API and Chat Completions as `gpt-6.1-sol`; Responses API is the documented route for tool calling.
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6.1-sol`
- **Context window:** 1.05M tokens total, 128K maximum output (OpenAI Models documentation).
- **Modalities:** Text and image input; text output; configurable reasoning; function calling, web search, file search, computer use, and multi-agent beta.
- **Pricing (as of 2026-10-05):** $2/M input, $0.10/M cached input, $2.50/M cache write, and $10/M output for prompts up to 272K input (OpenAI changelog).
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Science 0.1: **57.0%** at maximum effort (OpenAI launch benchmarks, reported by BenchmarkList).
- OSWorld 2.0 offline: **71.4%** (OpenAI launch benchmarks, reported by BenchmarkList).
- AutomationBench: **2.2 points above Claude Opus 5.5** at medium effort (OpenAI launch comparison, summarized by DataCamp).

Reasoning / knowledge:

- Independent 44-problem reasoning evaluation: **88/88** at high effort (joonlab, 2026-09-30; small-sample independent test).
- MathArena: **86.3%** at max effort (community-reported public result; not used as the sole basis for the score).
- Official model-selection guidance positions Sol as near-Astra for complex professional work, rather than the family leader.

Coding:

- DeepSWE v1.1: **75.2%** at high effort (OpenAI launch benchmarks, reported by BenchmarkList).
- Independent hidden-test coding evaluation: **58/58** across 29 tasks at high effort (joonlab; small-sample independent test).
- Frontier v4 independent sweep: **23/23** tasks passed at high, extra-high, and max effort; combined score **88.23** at high (VulcanBench, 23-task protocol).

Long context:

- Independent needle retrieval: **98/98** from 16K through about 914K tokens; maximum accepted input **921,858** tokens (joonlab). Official context limit is 1.05M tokens.

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong computer-use, search, file-search, function-calling, and multi-agent capabilities plus a 71.4% OSWorld result; it is capped below the Astra flagship.
- **Reasoning: 92/100.** Near-Astra positioning and strong public/independent results support a high score, while the model is expressly a cost/performance tier rather than the family maximum.
- **Context window: 96/100.** The official 1.05M-token window and independent high-retrieval result are frontier-class; the latter did not test the full advertised limit.
- **Multimodal: 85/100.** OpenAI documents image input and text output with broad tool support, but no native image/audio/video output is documented.
- **Coding: 95/100.** A 75.2% DeepSWE v1.1 result, perfect 29-task independent run, and strong Frontier v4 sweep demonstrate top-tier agentic coding; benchmark settings vary.
- **Cost efficiency: 88/100.** $2/M input and $10/M output are paid rates, but substantially below the top Astra tier and especially favorable for cached input.
- **Overall Score: 93/100.** Half-up mean of Tool use, Reasoning, Context window, Multimodal, and Coding: 92.6; best for demanding coding and professional agents where near-flagship quality matters.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
