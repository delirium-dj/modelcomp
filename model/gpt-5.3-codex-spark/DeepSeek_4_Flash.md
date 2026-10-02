# GPT 5.3 Codex Spark — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT 5.3 Codex Spark
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex Spark (GPT-5.3-Codex-Spark)
- **Short description:** OpenAI's smaller, latency-optimised Codex variant (Cerebras-served "Spark"), tuned for real-time interactive coding at the cost of some accuracy.
- **Provider / access:** OpenAI Codex with Cerebras Spark inference; no Free ID (scaffolded).
- **Release / knowledge:** parent GPT-5.3-Codex launched 2026-02-05; the Spark variant follows.
- **IDs:** `gpt-5.3-codex-spark`
- **Context window:** 400,000 tokens reported for the Codex family (llm-stats).
- **Modalities:** text in/out (coding); parent Codex family lists multimodal input.
- **Pricing (as of 2026-10-02):** parent Codex $1.75 in / $14.00 out per 1M; Spark pricing not separately confirmed.
- **Architecture:** proprietary.

### Raw benchmarks found

Coding:

- SWE-Bench Pro: **~56%** (independent hands-on; vs Codex 5.3 ~72%) — turingcollege.com
- SWE-Bench Pro / Terminal-Bench 2.0: stronger than GPT-5.1-Codex-mini while much faster (OpenAI, Cerebras) — no single number published

Reasoning / knowledge / tool use / multimodal / long context:

- no verified public score found

### Normalized scores (1–100)

- **Tool use: 62/100.** Agentic coding harness at high speed; no Terminal-Bench/Tau2 number.
- **Reasoning: 68/100.** ~56% SWE-Bench Pro implies strong-but-below-flagship reasoning.
- **Context window: 78/100.** 400K Codex-family window.
- **Multimodal: 55/100.** Codex-family multimodal input listed; no vision benchmark.
- **Coding: 74/100.** ~56% SWE-Bench Pro at a fraction of flagship latency.
- **Cost efficiency: 72/100.** Inherits Codex pricing; Spark's speed lowers effective cost.
- **Overall Score: 67/100.** Mean of (62 + 68 + 78 + 55 + 74) / 5 = 67.4 → 67. Best-fit: fast interactive coding where latency matters more than peak accuracy.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (openai.com, cerebras.ai, turingcollege.com, benchlm.ai, llm-stats.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
