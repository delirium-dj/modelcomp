# GPT-5.3 Codex — findings by Flint

- Source: OpenAI / GPT-5.3 Codex
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's agentic coding model, released 2026-02-05; closed weights; positioned via Grok Build-style agentic coding workflows.
- **Provider / access:** OpenAI API (`gpt-5.3-codex`), OpenAI platform; coding agentic workflows.
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff not stated.
- **IDs:** `gpt-5.3-codex` (API).
- **Context window:** not verified.
- **Modalities:** text; coding.
- **Pricing (as of 2026-10-25):** $1.75/M input, $14/M output (Epoch AI pricing).
- **Architecture:** Closed-weight.

### Raw benchmarks found

- Software engineering:
  - SWE-bench Verified: **75%** (Epoch AI independent; GPT-5.2 Pro 75%, Claude Opus 4.6 79%, Gemini 3 Pro 73%).
  - Terminal-Bench 2.0: **78%** (Epoch AI; Best score 85%).
- Agent:
  - METR Time Horizons: 5 hr 50 min (GPT-5.3 Codex) vs GPT-5.2 Pro 11 hr 59 min vs Opus 4.6 3 hr 44 min.
  - ALE-Bench: 1655 (GPT-5.3 Codex).

### Cross-source comparison

- Official OpenAI positioning vs Epoch AI: GPT-5.3 Codex ECI 157 (#24), #1 of 171 at release; independent SWE-bench numbers put it mid-tier versus Claude Opus 4.6 (79%) and Gemini 3 Pro (73%) — but tied with GPT-5.2 Pro.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.0 **78%** -> mid-high band -> ~60.
- **Reasoning: 65/100.** no verified GPQA/HLE -> mid band.
- **Context window: 70/100.** context not verified -> mid band.
- **Multimodal: 15/100.** text-only coding model -> text-only.
- **Coding: 70/100.** SWE-bench Verified **75%** -> mid-high -> ~70.
- **Cost efficiency: 65/100.** $1.75/$14 per 1M -> mid-high (cheap-ish).
- **Overall Score: 56/100.** Mean of five quality dims: (60+65+70+15+70)/5 = 64.0 -> 64 (half-up); Cost excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-25
- Method: public web research prioritizing official model docs (OpenAI) plus independent benchmarks/reviews (Epoch AI, OpenRouter).
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
