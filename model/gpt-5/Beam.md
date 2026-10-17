# GPT-5 — findings by Beam

- Source: OpenAI/GPT-5, `openai/gpt-5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's unified frontier model (Aug 2025) with thinking + non-thinking in one system; 400K context. Major leap in accuracy, reasoning, multimodal. Superseded by GPT-5.1/5.2/5.4/5.5/5.6.
- **Provider / access:** OpenAI API `gpt-5`; ChatGPT; Azure.
- **Release / knowledge:** Released 2025-08-07; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes (thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $1.25 / 1M input, $10.00 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic: not individually reported (BenchLM overall 45.98 for medium)
- Terminal-Bench: not reported
- SWE-bench Verified: **74.9%** (with thinking)
- Aider Polyglot: **88.0%**
- OSWorld: not reported
- GDPval: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond: not reported for GPT-5 (GPT-5.2 Pro 93.2%)
- AIME 2025: **100%** (GPT-5 Pro, Python)
- HLE: not reported
- ARC-AGI-1: not reported
- MMMU: **84.2%**
- HealthBench: **46.2%** (Hard)
- HealthBench hallucination rate: **1.6%** (with thinking)
- LongFact-Concepts: **0.7%** hallucinations
- LongFact-Objects: **0.8%** hallucinations
- FActScore: **1.0%** hallucinations

Coding:

- SWE-bench Verified: **74.9%** (with thinking)
- Aider Polyglot: **88.0%**
- MBPP: **96.4%** (GPT-5.1)
- HumanEval: **98.1%** (GPT-5.1)

Long context:

- 400K window; MRCR: not reported for GPT-5.

Multimodal:

- MMMU: **84.2%**
- CharXiv (modified, image removed): **9%** deceptive (vs o3 86.7%)

### Normalized scores (1–100)

- **Tool use: 70/100.** SWE-bench Verified 74.9%, Aider Polyglot 88.0%; caps at no published agentic benchmarks.
- **Reasoning: 72/100.** AIME 2025 100% (Pro), MMMU 84.2%, HealthBench 46.2%; caps at no published HLE/ARC-AGI/GPQA for base GPT-5.
- **Context window: 72/100.** 400K window; caps at no published MRCR.
- **Multimodal: 80/100.** Text/image in; MMMU 84.2%, CharXiv modified 9% deceptive.
- **Coding: 74/100.** SWE-bench Verified 74.9%, Aider Polyglot 88.0%; caps at no SWE-bench Pro.
- **Cost efficiency: 88/100.** Cheap $1.25/$10 per 1M.
- **Overall Score: 74/100.** Mean of five quality dims (BenchLM aggregate 45.98 for medium); best-fit for general work at low cost (superseded by GPT-5.1/5.2/5.4/5.5).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI announcement/system card, Wandb, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>