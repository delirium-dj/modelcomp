# Claude Opus 5.5 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's long-horizon specialist model for complex agentic tasks.
- **Provider / access:** Anthropic (https://www.anthropic.com/news/claude-opus-5.5). Chat Completions API.
- **Release / knowledge:** Released 2026; knowledge cutoff unknown.
- **IDs:** `anthropic/claude-opus-5-5` (Paid only)
- **Context window:** 1M tokens total; 128K tokens max output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** $4/$20 per 1M. Paid only.
- **Architecture:** Proprietary (Opus-lane architecture).

### Raw benchmarks found

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **58** (Anthropic meta.json)

Coding:
- Terminal-Bench 2.1: **66.4%** (Anthropic meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Highly capable agentic performance for extended tasks.
- **Reasoning: 91/100.** Strong performance in reasoning-heavy contexts.
- **Context window: 95/100.** 1M context with high coherence.
- **Multimodal: 70/100.** Text and image input support.
- **Coding: 92/100.** Strong specialist coding abilities (66.4% on TB4).
- **Cost efficiency: 40/100.** Premium Opus-lane pricing.
- **Overall Score: 88/100.** Exceptional long-horizon specialist; best reserved for high-stakes, deep-context projects.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Opus 5.5](https://www.anthropic.com/news/claude-opus-5.5)
