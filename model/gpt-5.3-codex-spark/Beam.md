# GPT-5.3 Codex Spark — findings by Beam

- Source: OpenAI/GPT-5.3 Codex Spark, `openai/gpt-5.3-codex-spark`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's ultra-fast coding model (Feb 12, 2026): 128K context. Cerebras-powered, 1,000+ tok/s. Smaller version of GPT-5.3 Codex. Text-only. No published benchmarks. $0 pricing (not published).
- **Provider / access:** OpenAI Codex; OpenAI API.
- **Release / knowledge:** Released 2026-02-12; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.3-codex-spark`
- **Context window:** 128,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Proprietary.
- **Pricing (as of 2026-10-17):** Not published (CloudPrice shows "—" for pricing).
- **Architecture:** proprietary; smaller version of GPT-5.3 Codex. Cerebras hardware, 1,000+ tok/s.

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks. BenchLM not computed.

Reasoning / knowledge:

- Reasoning: no verified public benchmarks. BenchLM not computed.

Coding:

- Coding: no verified public benchmarks. BenchLM not computed. Simon Willison: "significantly faster" than GPT-5.3 Codex medium.

Long context:

- 128K window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks; provisional (BenchLM not computed).
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional.
- **Context window: 56/100.** 128K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 50/100.** No verified coding benchmarks; provisional. Simon Willison reports "significantly faster" than GPT-5.3 Codex medium.
- **Cost efficiency: 75/100.** Pricing not published; provisional.
- **Overall Score: 49.2/100.** Provisional mean; low-confidence (zero verified benchmarks, BenchLM not computed). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI blog, Simon Willison, CloudPrice, BenchLM); no verified public benchmarks found. Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (GPT-5.3 Codex Spark has zero verified benchmarks, candidate for exclusion.)<|end|>>2>