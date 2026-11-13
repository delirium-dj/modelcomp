# Claude Opus 4.7 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Opus 4.7
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's flat-rate 1M-context model for autonomous coding and long-horizon agents.
- **Provider / access:** Anthropic. Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `anthropic/claude-opus-4.7` (Paid only)

- **Modalities:** Text, image, PDF in; text out.
- **Pricing (as of 2026-11-13):** Paid $5/$25 per 1M; cached $0.50.
- **Architecture:** Proprietary (Opus architecture).

### Raw benchmarks found

- SWE-bench Verified: **87.6%** (Anthropic meta.json)
- SWE-bench Pro: **64.3%** (Anthropic meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong autonomous coding performance.
- **Reasoning: 89/100.** Consistent reasoning in agentic scenarios.
- **Context window: 95/100.** 1M context with high fidelity.
- **Multimodal: 70/100.** Supports Text, image, PDF input.
- **Coding: 91/100.** Strong coding abilities (87.6% SWE-bench Verified).
- **Cost efficiency: 30/100.** Price/performance is outclassed by newer Opus/Sonnet generations.
- **Overall Score: 87/100.** Proven long-horizon agent, now a legacy-pinning option.

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

