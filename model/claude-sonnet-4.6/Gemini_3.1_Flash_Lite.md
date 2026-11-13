# Claude Sonnet 4.6 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Sonnet 4.6
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's cost-conscious coding model with adaptive thinking.
- **Provider / access:** Anthropic (https://www.anthropic.com/news/claude-sonnet-4.6). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `anthropic/claude-sonnet-4-6` (Paid only)
- **Context window:** 200K.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $3/$15 per 1M.
- **Architecture:** Proprietary (Sonnet architecture).

### Raw benchmarks found

- SWE-Verified: **79.6%** (Anthropic meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Reliable for coding refactors.
- **Reasoning: 85/100.** Solid reasoning.
- **Context window: 75/100.** 200K capacity.
- **Multimodal: 70/100.** Text/image support.
- **Coding: 90/100.** Strong everyday coding assistant (79.6% SWE-Verified).
- **Cost efficiency: 70/100.** Competitive pricing, but superseded.
- **Overall Score: 81/100.** Reliable coding model, currently a legacy-pinning option.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude](https://claude.ai)
