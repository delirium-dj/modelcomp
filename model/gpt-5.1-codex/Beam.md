# GPT-5.1 Codex — findings by Beam

- Source: OpenAI/GPT-5.1 Codex, `openai/gpt-5.1-codex`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's agentic coding model (Nov 13, 2025): 400K context, 128K output. SWE-bench Verified 73.7% (high). BenchGecko 77.7 avg. Superseded by Codex-Max/5.2/5.3/5.4.
- **Provider / access:** OpenAI API `gpt-5.1-codex`; OpenRouter.
- **Release / knowledge:** Released 2025-11-13; knowledge cutoff Sep 30, 2024.
- **IDs:** `openai/gpt-5.1-codex`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $1.25 / 1M input, $10.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- Terminal-Bench 2.0: **52.8%** (OpenAI Codex-Max comparison; GPT-5.1 Codex high)
- TAU-bench v2: **83.0%** (BenchLM)
- OSWorld: not reported for GPT-5.1 Codex

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **67.7** (BenchLM llmbase)
- GPQA: **86.0%** (BenchLM)
- HLE: **25.7%** (BenchLM)
- MMLU Pro: **86.0%** (BenchLM)
- ARC-AGI: **52.0%** (Serenities AI)
- LiveBench Reasoning: **82.0%** (BenchGecko)
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Verified: **73.7%** (OpenAI, high reasoning)
- SWE-bench Verified (Vals): not reported
- LiveCodeBench: **84.9%** (BenchLM)
- LiveBench Coding: **71.8%** (BenchGecko)
- LiveBench Agentic Coding: **53.3%** (BenchGecko)
- MATH 500: not reported
- AIME 2025: **95.7%** (BenchLM)
- SciCode: **40.2%** (BenchLM)
- Terminal-Bench Hard: **34.8%** (BenchLM)

Long context:

- 400K window; MRCR: not reported. LCR: **69.0%** (BenchLM).

Multimodal:

- Text/image in; multimodal lane not reported.

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 2.0 52.8%, TAU-bench v2 83.0%, LiveBench Agentic Coding 53.3%; caps at Terminal-Bench 2.0 52.8%.
- **Reasoning: 72/100.** GPQA 86.0%, MMLU Pro 86.0%, HLE 25.7%, ARC-AGI 52.0%, LiveBench Reasoning 82.0%, AIME 95.7%; caps at HLE 25.7%.
- **Context window: 70/100.** 400K window; LCR 69.0%; caps at no published MRCR.
- **Multimodal: 68/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 70/100.** SWE-bench 73.7%, LiveCodeBench 84.9%, LiveBench Coding 71.8%, SciCode 40.2%, Terminal-Bench Hard 34.8%; caps at SciCode 40.2%.
- **Cost efficiency: 82/100.** Mid $1.25/$10 per 1M.
- **Overall Score: 69.2/100.** Mean of five quality dims (BenchGecko 77.7, BenchLM not computed); best-fit for mid-cost coding at mid cost (superseded by Codex-Max/5.2/5.3/5.4).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI docs, BenchLM, BenchGecko, Serenities AI, llmbase); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>