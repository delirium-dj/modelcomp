# Claude Haiku 5.5 — findings by Fledge Alpha

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's cheapest, fastest small model — released a day before this writing — built for high-volume, cost-sensitive workloads (summaries, compactions, classification, sub-agent coding), priced to match GPT-6 Luna.
- **Provider / access:** Claude API (`claude-haiku-5-5`), Amazon Bedrock, AI/ML API (`anthropic/claude-haiku-5.5`). Messages API; migration from Haiku 4.5 is not drop-in (tokenization, thinking, sampling, prefill, tool interfaces changed).
- **Release / knowledge:** 2026-10-07 (Simon Willison, syntaxdispatch review 2026-10-08, Indian Express).
- **IDs:** `anthropic/claude-haiku-5.5` (no Free ID on Zen found)
- **Context window:** 1M tokens (AI/ML API model page).
- **Modalities:** text + image in (computer use / browser use highlighted by Anthropic); text out; thinking support; tool calls; JSON/structured outputs. ~242 tok/s output (aiapicost).
- **Pricing (as of 2026-10-08):** $0.10 input / $0.50 output per 1M up to 100K prompt tokens; 5x tier beyond ($0.50 / $2.50); cache reads from $0.01; Batch API 50% off (syntaxdispatch, Simon Willison). ~75% cheaper to run than Haiku 4.5 (Indian Express).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- BenchCAD (with Python tool): **87.0%** (llm-stats)
- Anthropic claims much stronger computer use and agentic coding than Haiku 4.5 (syntaxdispatch review)
- Terminal-Bench 2.1 / Tau suite: no verified public score found for 5.5 yet

Reasoning / knowledge:

- Global-MMLU: **87.8%** (llm-stats)
- MILU: **87.6%** (llm-stats)
- LLM Stats Score: **50.0** (llm-stats; leads Seed 2.0 Pro's 39.4)
- GPQA Diamond / HLE: no verified public score found for 5.5 yet

Coding:

- SWE-bench Multilingual: **83.7%** (llm-stats)
- Anthropic positions it as a sub-agent for coding alongside Opus 5.5 / Sonnet 5.5 (Anthropic announcement)

Multimodal:

- Chartography: **86.2%** (llm-stats)

Long context:

- 1M-token window (AI/ML API); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 76/100.** BenchCAD-with-tool 87.0% and Anthropic's computer-use/agentic claims; capped by missing Terminal-Bench/Tau rows one day post-launch.
- **Reasoning: 75/100.** Global-MMLU 87.8% and LLM Stats 50.0; capped by absent GPQA/HLE numbers for this version.
- **Context window: 88/100.** Verified 1M window at a budget price; capped pending long-context retrieval measurements.
- **Multimodal: 68/100.** Image input with Chartography 86.2% and computer-use vision; text-only output, no audio/video.
- **Coding: 80/100.** SWE-bench Multilingual 83.7% is strong for a budget tier; capped until English SWE-bench Verified / LiveCodeBench rows land.
- **Cost efficiency: 92/100.** $0.10/$0.50 under 100K tokens with $0.01 cache reads is among the cheapest capable-model pricing on the market; 5x cliff beyond 100K noted.
- **Overall Score: 77/100.** Mean of (76, 75, 88, 68, 80) = 77.4 → 77. Best fit: high-volume sub-agent, classification, and compaction workloads where cost per task dominates.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Anthropic announcement, Simon Willison, syntaxdispatch, llm-stats, AI/ML API, Indian Express); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
