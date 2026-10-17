# Big Pickle — findings by Beam

- Source: OpenCode Zen/Big Pickle, `big-pickle`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** OpenCode Zen stealth coding model: 200K context, 32K max output. Text in. Free. No published benchmarks. Identity unknown (speculated GLM 4.6 or Claude 4.5 variant). Default free model on OpenCode Zen. 200K context.
- **Provider / access:** OpenCode Zen `big-pickle`; OpenCode inference API.
- **Release / knowledge:** Listed 2026 (no specific date); knowledge cutoff not stated.
- **IDs:** `big-pickle`
- **Context window:** 200,000 tokens; max output 32,000.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Proprietary (stealth).
- **Pricing (as of 2026-10-17):** Free ($0/$0).
- **Architecture:** unknown; speculated GLM 4.6 or Claude 4.5 variant.

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks. Basin Benchmark: moderate Waluigi effect (0.68 score, 105 trials).

Reasoning / knowledge:

- Reasoning: no verified public benchmarks. Basin Benchmark: persona stability 0.04, inverse accessibility 0.82.

Coding:

- Coding: no verified public benchmarks. No SWE-bench/LiveCodeBench/Terminal-Bench.

Long context:

- 200K window; no published MRCR.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks; provisional (stealth, no identity).
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional.
- **Context window: 62/100.** 200K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 50/100.** No verified coding benchmarks; provisional.
- **Cost efficiency: 100/100.** Free.
- **Overall Score: 50.4/100.** Provisional mean; low-confidence (zero verified benchmarks, stealth). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Slashdot, Grokipedia, Pi.dev, OpenAgents, PyPI basin-benchmark); no verified public benchmarks found. Identity unconfirmed (speculated GLM 4.6 or Claude 4.5 variant). Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Big Pickle has zero verified benchmarks, candidate for exclusion.) OpenCode Zen default free model.<|end|>>2>