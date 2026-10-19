# Grok Build 0.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: xAI (`grok-build-0.1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's coding-focused model (Grok Build series) with 256K context, non-reasoning type, available on OpenCode Zen at $1/$2 pricing.
- **Provider / access:** xAI API, OpenCode Zen (`opencode/grok-build-0.1` via `https://opencode.ai/inference/openai/v1/responses`). OpenAI-compatible Responses API.
- **Release / knowledge:** 2026 (estimated); knowledge cutoff not publicly disclosed.
- **IDs:** `xai/grok-build-0.1` (xAI), `opencode/grok-build-0.1` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 256,000 tokens total (256K per BenchLM); max output not explicitly stated.
- **Modalities:** Text in; text out; reasoning no (non-reasoning per BenchLM); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $1.00/M in, $0.20/M cache read, $2.00/M out (OpenCode Zen / xAI API). No cache discount reported on AA.
- **Architecture:** Proprietary (xAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Gert Labs: **49.15%** (Gert Labs rankings)

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

- **Tool use: 45/100.** Gert Labs 49.15% (moderate agentic). No TB 2.1/4.0, GDPval, OSWorld, MCP Atlas, Toolathlon, Tau2, BrowseComp data. Capped by minimal agentic benchmark coverage.
- **Reasoning: 30/100.** Non-reasoning type per BenchLM; no reasoning benchmarks found. Capped by complete absence of reasoning benchmark data.
- **Context window: 55/100.** 256K native context; no MRCR/LCR data. Methodology: 200K-500K = 65-84 (at lower end).
- **Multimodal: 15/100.** Text only (no multimodal benchmarks reported). Methodology: text-only = 10-20.
- **Coding: 30/100.** No verified public coding benchmarks found. Capped by complete absence of coding benchmark data.
- **Cost efficiency: 75/100.** $1/$2 per 1M, blended ~$1.15/M. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $1/$2 interpolates to ~75.
- **Overall Score: 35/100.** Half-up mean of (45 + 30 + 55 + 15 + 30) / 5 = 35.0 → 35. Best-fit: xAI's build-focused model at competitive pricing; insufficient public benchmarks for reliable evaluation.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across BenchLM and OpenCode Zen; scores are normalized 1–100 interpretations, not official vendor scores. Note: severely limited benchmark coverage (1 benchmark only).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.