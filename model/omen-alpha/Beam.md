# Omen Alpha — findings by Beam

- Source: OpenCode/Omen Alpha, `omen-alpha`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** OpenCode stealth coding model (Sep 4, 2026): ~180 tok/s, OpenAI-compatible API. $0.20/$0.66 per 1M. Zero data retention. Identity unconfirmed (fingerprinting points to GLM family). OpenCode coding score 23.14/40 (#15). Not officially released.
- **Provider / access:** OpenCode Go; TokenRa (omen-alpha model ID).
- **Release / knowledge:** Spotted 2026-09-04; no official release.
- **IDs:** `omen-alpha`
- **Context window:** Not published (unknown).
- **Modalities:** text in; text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-17):** $0.20 / 1M input, $0.66 / 1M output; paid.
- **Architecture:** unknown; fingerprinting suggests Zhipu GLM family.

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks. OpenCode coding score 23.14/40 (#15).

Reasoning / knowledge:

- Reasoning: no verified public benchmarks. OpenCode coding score only.

Coding:

- Coding: OpenCode coding score 23.14/40 (#15). No SWE-bench/LiveCodeBench/Terminal-Bench.

Long context:

- Context window: not published.

Multimodal:

- Text-only (likely). Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks; provisional (unconfirmed identity).
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional.
- **Context window: 50/100.** Context size not published; provisional.
- **Multimodal: 40/100.** Text-only (likely).
- **Coding: 52/100.** OpenCode coding score 23.14/40 (#15); caps at no published SWE-bench/LiveCodeBench.
- **Cost efficiency: 94/100.** Cheap $0.20/$0.66 per 1M.
- **Overall Score: 48.4/100.** Provisional mean; low-confidence (unconfirmed identity, no verified benchmarks). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed. (Omen Alpha has 1 verified benchmark, so not excluded.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Omen Alpha official, RankLLMs, BuildFastWithAI, AIIntelReport, StealthModelWatch); no verified public benchmarks beyond OpenCode coding score. Identity unconfirmed (fingerprinting points to GLM family). Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Omen Alpha has 1 verified benchmark, so not excluded.)<|end|>>2>