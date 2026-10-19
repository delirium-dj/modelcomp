# GPT-5.3 Codex Spark — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's coding-specialized GPT-5.3 variant with 256K context; minimal public benchmark coverage (MazeBench 0%).
- **Provider / access:** OpenAI API (`gpt-5.3-codex-spark` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-5.3-codex-spark` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI. Responses API (not Chat Completions).
- **Release / knowledge:** 2026 (estimated); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.3-codex-spark` (OpenAI API), `opencode/gpt-5.3-codex-spark` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 256,000 tokens total (256K per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $1.75/M in, $14.00/M out (OpenCode Zen). No cache discount reported on AA.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- MazeBench: **0%** (ASCII mode, no tools)

Reasoning / knowledge:

- No verified public reasoning benchmarks found

Coding:

- No verified public coding benchmarks found

Multimodal:

- No verified public multimodal benchmarks found

Long context:

- No verified public long-context benchmarks found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 30/100.** MazeBench 0% (ASCII mode, no tools). No TB 2.0/2.1/4.0, GDPval, OSWorld, MCP Atlas, Toolathlon, Tau2, BrowseComp data. Capped by minimal agentic benchmark coverage.
- **Reasoning: 30/100.** No verified public reasoning benchmarks found. Capped by complete absence of data.
- **Context window: 55/100.** 256K native context; no MRCR/LCR data. Methodology: 200K-500K = 65-84 (at lower end).
- **Multimodal: 15/100.** Text only (no multimodal benchmarks reported). Methodology: text-only = 10-20.
- **Coding: 30/100.** No verified public coding benchmarks found. Capped by complete absence of data.
- **Cost efficiency: 45/100.** $1.75/$14 per 1M. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $1.75/$14 interpolates to ~45.
- **Overall Score: 32/100.** Half-up mean of (30 + 30 + 55 + 15 + 30) / 5 = 30.0 → 30. Best-fit: OpenAI's Codex Spark variant with minimal public benchmarks; MazeBench 0% suggests limited agentic capability; insufficient data for reliable evaluation.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Note: severely limited benchmark coverage (1 benchmark only).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.