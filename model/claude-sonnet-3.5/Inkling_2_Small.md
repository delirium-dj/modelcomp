# Claude Sonnet 3.5 — findings by Fledge Alpha

- Source: Anthropic (`claude-sonnet-3.5` / `claude-3-5-sonnet-20241022`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (Oct 2024 v2)
- **Short description:** Anthropic's mid-2024 workhorse Sonnet generation; balanced coding, math, and vision reasoning for its era; now deprecated (2026-07).
- **Provider / access:** Anthropic API `claude-3-5-sonnet-20241022`, Amazon Bedrock, Google Vertex AI; Claude web/app.
- **Release / knowledge:** June 20, 2024 (v1), v2 October 22, 2024; deprecated July 2026.
- **IDs:** `anthropic.claude-3-5-sonnet-20241022-v2:0`; no Zen Free ID.
- **Context window:** 200K tokens; 8,192 max output (v2).
- **Modalities:** text + image (+PDF via Bedrock) in; text out; function calling, computer-use, artfifacts.
- **Pricing (as of 2026-10-05):** $3.00 in / $15.00 out per 1M.
- **Architecture:** proprietary; computer-use agent capability.

### Raw benchmarks found

Agent / tool use:

- Internal agentic coding eval: **64%** solved (Anthropic card addendum)
- SWE-bench Verified: **49.0%** (Serenities AI comparison)
- Computer use: supported (computer-use tool), no verified public τ-bench row

Reasoning / knowledge:

- GPQA Diamond: **59.4%** (Amazon card / Serenities); 67.2% on 5-shot CoT maj@32
- MMLU: **88.7%** (Amazon card); MMLU-Pro: **73.0%** (Serenities)
- DROP F1: 91.6; BBH: 93.1
- HLE: no verified public score found

Coding:

- HumanEval: **88.3%** (Amazon card); HumanEval+ **81.7%** (Serenities)
- LiveCodeBench: **38.0%** (Serenities)
- SWE-bench Verified 49.0 (above)

Math:

- MATH: **71.1%**; GSM8K: **96.4%**; MGSM: 92.0

Multimodal:

- MMMU: **68.3%** (Anthropic card); strong chart/document understanding per addendum.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 58/100.** 64% agentic coding solve rate and SWE-bench 49 are real 2024 rows; no modern τ-bench number.
- **Reasoning: 70/100.** GPQA 59.4, MMLU 88.7 — below 2026 frontier but verified.
- **Context window: 84/100.** 200K with 99.7% needle recall at full depth (card).
- **Multimodal: 72/100.** MMMU 68.3 and document understanding state-of-art 2024.
- **Coding: 70/100.** HumanEval 88.3 + SWE-bench Verified 49.0 — the 2024 high-water mark.
- **Cost efficiency: 55/100.** $3/$15 paid; no free tier; superseded.
- **Overall Score: 71/100.** Mean of five non-cost dims (58+70+84+72+70)/5 = 70.8 → 71; best fit: historical mid-2024 flagship now deprecated.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Anthropic launch post, Claude 3.5 Sonnet model card addendum PDF, Amazon benchmarks PDF, Serenities AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
