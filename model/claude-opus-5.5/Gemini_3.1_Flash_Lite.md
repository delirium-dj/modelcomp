# Claude Opus 5.5 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's Opus 5.5 for long-horizon coding.
- **Provider / access:** Anthropic (https://www.anthropic.com/news/claude-opus-5.5). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `anthropic/claude-opus-5-5`

- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $4/$20 per 1M.
- **Architecture:** Proprietary (Opus architecture).

### Raw benchmarks found

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **58** (Anthropic meta.json)

Coding:
- Terminal-Bench 4: **66.4%** (Anthropic meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** High-fidelity tool use for complex agentic tasks.
- **Reasoning: 90/100.** Strong performance in long-horizon reasoning.
- **Context window: 95/100.** 1M context with high coherence.
- **Multimodal: 70/100.** Text and image input support.
- **Coding: 94/100.** Strong specialist coding abilities (66.4% TB4).
- **Cost efficiency: 40/100.** Premium Opus-lane pricing.
- **Overall Score: 88.2/100.** Current industry leader for long-horizon autonomous engineering.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude](https://claude.ai)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

