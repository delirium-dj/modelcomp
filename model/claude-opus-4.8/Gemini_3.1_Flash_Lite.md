# Claude Opus 4.8 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Opus 4.8
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's proven multi-step coding model.
- **Provider / access:** Anthropic. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `anthropic/claude-opus-4.8` (Paid only)
- **Context window:** 1M tokens total.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid-tier pricing ($5/$25 per 1M).
- **Architecture:** Proprietary (Opus architecture).

### Raw benchmarks found

- SWE-Verified: **88.6%** (Anthropic meta.json)

### Normalized scores (1–100)

- **Tool use: 88/100.** Proven reliability for chained edits.
- **Reasoning: 89/100.** Solid reasoning in complex scenarios.
- **Context window: 90/100.** 1M context for extended projects.
- **Multimodal: 70/100.** Text and image input support.
- **Coding: 92/100.** Strong specialist coding abilities (88.6% SWE-Verified).
- **Cost efficiency: 30/100.** Expensive compared to newer Opus generations.
- **Overall Score: 85.8/100.** Proven coding model, now considered legacy-pinning choice.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude](https://claude.ai)
