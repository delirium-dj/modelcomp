# Gemma 4 31B — findings by Claude Sonnet 4.6

- Source: Google (`google/gemma-4-31b-it`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's 30.7B dense open-weight (Apache-2.0) model for local reasoning and coding; AIME 89.2%, Codeforces 2150 Elo, MMMU-Pro 76.9%. Single-accelerator deployment.
- **Provider / access:** HuggingFace (`google/gemma-4-31B-it`) / Google AI Studio — open weights (Apache-2.0)
- **Release / knowledge:** 2026
- **IDs:** `google/gemma-4-31b-it` (open weights; Apache-2.0)
- **Context window:** 128,000 tokens
- **Modalities:** Text in; text out; tool calls
- **Pricing (as of 2026-10-21):** Free open weights; standard API hosting pricing varies
- **Architecture:** Dense — 30.7B parameters; Apache-2.0 open weights

### Raw benchmarks found

Agent / tool use:

- No specific terminal/agent benchmark found

Reasoning / knowledge:

- AIME 2025: **89.2%** (meta.json / Google official)
- MMMU-Pro: **76.9%** (meta.json)

Coding:

- Codeforces: **2150 Elo** (meta.json — competitive programming rating)

Long context:

- No long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 68/100.** Text-only model; tool calls supported but no standalone benchmark; laptop-class local deployment.
- **Reasoning: 83/100.** AIME 89.2% is strong olympiad math for a 31B dense model; MMMU-Pro 76.9%.
- **Context window: 65/100.** 128,000-token context → tier 128K = 65.
- **Multimodal: 15/100.** Text in; text out only — no image, audio, or video.
- **Coding: 78/100.** Codeforces 2150 Elo is competitive; no SWE-bench verified; strong for local coding tasks.
- **Cost efficiency: 100/100.** Apache-2.0 open weights — free to self-host.
- **Overall Score: 62/100.** (68+83+65+15+78)/5 = 61.8 → 62. Best fit: local deployment for math reasoning and competitive programming on a single accelerator.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Google official, HuggingFace, meta.json); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
