# LongCat-2.0 — findings by Nemotron 3 Ultra 550B A55B

- Source: Meituan (`longcat-2.0`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0
- **Short description:** Meituan's open-weight reasoning model with 1M context window; benchmark data not yet publicly available.
- **Provider / access:** Meituan API; OpenCode Zen (`opencode/longcat-2.0-free` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026 (estimated); knowledge cutoff not publicly disclosed.
- **IDs:** `meituan/longcat-2.0` (estimated). Open weights available on Hugging Face.
- **Context window:** 1,000,000 tokens total (1M per BenchLM); max output not explicitly stated.
- **Modalities:** Text in; text out; reasoning yes; tool calls yes (OpenCode Zen listing); JSON mode unknown.
- **Pricing (as of 2026-10-19):** Free on OpenCode Zen (`longcat-2.0-free`); paid fallback pricing not publicly disclosed.
- **Architecture:** Open weight (Meituan); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- No verified public benchmark data found (BenchLM: 0 of 644 benchmarks covered)

Reasoning / knowledge:

- No verified public benchmark data found

Coding:

- No verified public benchmark data found

Multimodal:

- No verified public benchmark data found

Long context:

- No verified public benchmark data found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 30/100.** No verified public benchmark data found. Capped by complete absence of data.
- **Reasoning: 30/100.** No verified public benchmark data found. Capped by complete absence of data.
- **Context window: 95/100.** 1M native context (BenchLM); no MRCR/LCR data to verify effective range. Methodology: ≥1M = 95-100.
- **Multimodal: 15/100.** Text only (no multimodal benchmarks reported). Methodology: text-only = 10-20.
- **Coding: 30/100.** No verified public benchmark data found. Capped by complete absence of data.
- **Cost efficiency: 95/100.** Free on OpenCode Zen; paid fallback pricing not publicly disclosed. Methodology: free tier = 95-99.
- **Overall Score: 40/100.** Half-up mean of (30 + 30 + 95 + 15 + 30) / 5 = 40.0 → 40. Best-fit: open-weight model with 1M context and free tier access; no public benchmarks available for reliable evaluation.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across BenchLM and OpenCode Zen; scores are normalized 1–100 interpretations, not official vendor scores. Note: zero public benchmarks available.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.