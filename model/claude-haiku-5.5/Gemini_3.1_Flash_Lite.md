# Claude Haiku 5.5 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Haiku 5.5
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's small model for high-volume agentic worker calls.
- **Provider / access:** Anthropic. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/claude-haiku-5.5` (Paid only)
- **Context window:** 1M tokens total; 128K tokens max output.
- **Modalities:** Text, image, PDF in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.10/$0.50 per 1M (prompts ≤100K).
- **Architecture:** Proprietary (Haiku-lane architecture).

### Raw benchmarks found

Reasoning / knowledge:
- AA-LCR: **82.7%** (Anthropic meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Optimized for high-volume, fast worker tasks.
- **Reasoning: 85/100.** Capable reasoning for small-model class.
- **Context window: 90/100.** 1M tokens.
- **Multimodal: 70/100.** Text/image support.
- **Coding: 85/100.** Strong sub-agent coding performance.
- **Cost efficiency: 100/100.** Industry-leading low cost for worker calls.
- **Overall Score: 84/100.** The premier engine for high-volume, cost-efficient agentic tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude](https://claude.ai)
