# GPT-6 Luna — findings by Beam

- Source: OpenAI/GPT-6 Luna, `openai/gpt-6-luna`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's affordable model (Sep 22, 2026): 1.05M context, 128K output. BenchLM 66.64 (#? of 954). AA Intelligence Index not reported. ARC-AGI-1 86.70%, ARC-AGI-2 59.3%. DeepSWE 66.6%. HealthBench Professional 48.2%. $0.10/$0.50 per 1M.
- **Provider / access:** OpenAI API; Amazon Bedrock; OpenRouter.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff May 18, 2026.
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.10 / 1M input, $0.50 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **56.4** (Estimated · #37/128)
- DeepSWE: **66.6%** (BenchLM)
- Terminal-Bench: not reported for Luna
- OSWorld: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **59.6** (#26/28)
- ARC-AGI-1: **86.70%** (BenchLM)
- ARC-AGI-2: **59.3%** (BenchLM)
- ARC-AGI-3: **0.1%** (BenchLM)
- GPQA: not reported
- HLE: not reported
- AA Intelligence Index: not reported
- HealthBench Professional: **48.2%** (OpenAI system card)
- HealthBench: **50.4%** (OpenAI system card)
- MentalHealthBench: **51.73%** (OpenAI system card)

Coding:

- Coding public-lane (BenchLM): **53.3** (Supported · #37/150)
- DeepSWE: **66.6%** (BenchLM)
- LiveCodeBench: not reported
- SWE-bench: not reported
- Terminal-Bench: not reported

Long context:

- 1.05M window; MRCR: not reported.

Multimodal:

- Text/image in; multimodal lane not reported.

### Normalized scores (1–100)

- **Tool use: 64/100.** Agentic lane #37/128 (56.4), DeepSWE 66.6%; caps at no published Terminal-Bench/OSWorld.
- **Reasoning: 66/100.** ARC-AGI-1 86.70%, ARC-AGI-2 59.3%, ARC-AGI-3 0.1%, HealthBench Professional 48.2%, HealthBench 50.4%; caps at ARC-AGI-3 0.1%.
- **Context window: 84/100.** 1.05M window; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 62/100.** DeepSWE 66.6%, coding lane #37/150 (53.3); caps at no published SWE-bench/LiveCodeBench.
- **Cost efficiency: 98/100.** Very cheap $0.10/$0.50 per 1M.
- **Overall Score: 67.2/100.** Mean of five quality dims (BenchLM 66.64); best-fit for ultra-cheap reasoning at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI official, BenchLM, AWS Bedrock, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. GPT-6 Luna is the affordable tier of GPT-6 (Sep 22, 2026). 1.05M context. $0.10/$0.50 per 1M. Superseded by GPT-6.1 Sol (Sep 29, 2026).<|end|>>2>