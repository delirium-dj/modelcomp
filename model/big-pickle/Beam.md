# Big Pickle — findings by Beam

- Source: OpenCode Zen/Big Pickle, `big-pickle`
- Date: 2026-10-22 (UTC, re-run; prior 2026-10-17)
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

- Agentic: no verified public benchmarks (historical). **New (Oct 22):** Fellipe Soares run (Oct 2-4): Terminal-Bench 2.1 **71%**, SWE-Mini **65%**, Omniscience **+43** (64% acc, 58% hallucination, 0 unanswered). Basin Benchmark: moderate Waluigi effect (0.68 score, 105 trials).

Reasoning / knowledge:

- Reasoning: no verified public benchmarks (historical). **New (Oct 22):** Fellipe Soares: HLE **38%** (best of 5 models), SciCode **44%**, Omniscience **+43** (best). Identity still unconfirmed (speculated DeepSeek backend via leaked provider errors).

Coding:

- Coding: no verified public benchmarks (historical). **New (Oct 22):** Fellipe Soares: Terminal-Bench 2.1 **71%**, SWE-Mini **65%**, SciCode **44%**. SWE Atlas Codebase QnA: **50.8%** (63/124, single trial, self-reported; TS 58.1%, Py 55.2%).

Long context:

- 200K window; no published MRCR.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 56/100.** Terminal-Bench 2.1 71% (Fellipe Soares, Oct 2-4), SWE-Mini 65%, Omniscience +43 (64% acc, 58% hallucination); provisional but now has verified agentic data.
- **Reasoning: 56/100.** HLE 38% (Fellipe Soares, best of 5), Omniscience +43 (best), but 58% hallucination; provisional.
- **Context window: 62/100.** 200K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 56/100.** Terminal-Bench 2.1 71%, SWE-Mini 65%, SciCode 44%, SWE Atlas Codebase QnA 50.8% (self-reported, single trial); provisional.
- **Cost efficiency: 100/100.** Free.
- **Overall Score: 54.0/100.** Mean of five quality dims (tool 56, reasoning 56, context 62, multimodal 40, coding 56); upgraded from provisional 50.4 on new verified data (Fellipe Soares independent run + SWE Atlas self-reported). Still low-confidence (stealth, identity unconfirmed).

---

---

## Research update — 2026-10-22 (re-run)

≥5 independent web searches performed (Fellipe Soares benchmark, SWE Atlas, Artificial League, StealthMark, Command Code, OpenCode Zen, Reddit/HN discussion). Key new verified data:
- Fellipe Soares independent run (Oct 2-4): Big Pickle Omniscience +43 (best of 5), HLE 38% (best), SciCode 44%, Terminal-Bench 2.1 71%, SWE-Mini 65%.
- SWE Atlas Codebase QnA: 50.8% (63/124, single trial, self-reported).
- Identity still unconfirmed; speculated DeepSeek backend (leaked provider errors). Free stealth tier on OpenCode Zen.
- Cat Jam deprecated Oct 16; Big Pickle unrelated, still live.

Score changes: Tool 50 → 56, Reasoning 50 → 56, Coding 50 → 56; Overall 50.4 → 54.0. Context 62, Multimodal 40, Cost 100 unchanged. Still low-confidence (stealth).

Sources:
- https://fellipesoares.dev/benchmark (Fellipe Soares)
- https://swe-atlas.com (SWE Atlas)
- https://artificialleague.ai (Artificial League)
- https://stealthmark.ai (StealthMark SVG benchmarks)
- https://opencode.ai (OpenCode Zen)

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22 (re-run)
- Method: public internet research (Slashdot, Grokipedia, Pi.dev, OpenAgents, PyPI basin-benchmark); no verified public benchmarks found. Identity unconfirmed (speculated GLM 4.6 or Claude 4.5 variant). Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Big Pickle has zero verified benchmarks, candidate for exclusion.) OpenCode Zen default free model.<|end|>>2>