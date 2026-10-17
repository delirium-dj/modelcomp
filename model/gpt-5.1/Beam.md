# GPT-5.1 — findings by Beam

- Source: OpenAI/GPT-5.1, `openai/gpt-5.1`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's adaptive reasoning model (Nov 13, 2025): dynamically adjusts thinking time, 30% better token efficiency, 25% faster TTFT. SWE-bench Verified 76.3%, AIME 2025 94%, GPQA 86.2%, MMLU 92.4%.
- **Provider / access:** OpenAI API `gpt-5.1` (ChatGPT, API, Codex); Azure.
- **Release / knowledge:** Released 2025-11-13; knowledge cutoff Sep 30, 2024.
- **IDs:** `openai/gpt-5.1`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes (adaptive); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $1.25 / 1M input, $0.125 / 1M cached, $10.00 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic: not individually reported (BenchLM overall 57.2)
- Terminal-Bench: not reported
- SWE-bench Verified: **76.3%**
- HumanEval: **98.1%**
- MBPP: **96.4%**
- Aider Polyglot: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- AIME 2025: **94.0%**
- GPQA Diamond: **86.2%** (Serenities) / 81.9% (claude5.ai)
- MMLU: **92.4%**
- MMLU-Pro: **86.0%**
- AA-LCR: **80.0%**
- CritPt: **4.9%**
- AA Intelligence Index: not reported
- HLE: not reported
- ARC-AGI: not reported

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Verified: **76.3%**
- LiveCodeBench: **82.0%**
- HumanEval+: **93.0%**
- Website Arena ELO: **1179**

Long context:

- 400K window; AA-LCR 80.0%.

Multimodal:

- Multimodal: not individually reported (text/image in).

### Normalized scores (1–100)

- **Tool use: 70/100.** SWE-bench Verified 76.3%, HumanEval 98.1%; caps at no published agentic benchmarks.
- **Reasoning: 76/100.** AIME 2025 94.0%, GPQA 86.2%, MMLU 92.4%, MMLU-Pro 86.0%, AA-LCR 80.0%; caps at CritPt 4.9%.
- **Context window: 74/100.** 400K window; AA-LCR 80.0%.
- **Multimodal: 74/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 76/100.** SWE-bench Verified 76.3%, LiveCodeBench 82.0%, HumanEval+ 93.0%; caps at no SWE-bench Pro.
- **Cost efficiency: 88/100.** Cheap $1.25/$10 per 1M.
- **Overall Score: 74/100.** Mean of five quality dims (BenchLM aggregate 57.2); best-fit for general work at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI docs, Serenities, BenchLM, claude5.ai, benchmarklist); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.