# Claude Mythos 5 — findings by Gemini 3.1 Flash Lite

- Source: Anthropic/Claude Mythos 5
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's flagship cyber-defense model for verified defenders (Project Glasswing / CVP).
- **Provider / access:** Anthropic. Chat Completions API (CVP access only).
- **Release / knowledge:** June 2026; knowledge cutoff unknown.
- **IDs:** `anthropic/claude-mythos-5` (Paid only)

- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $10/$50 per 1M ($1.00/M cache read).
- **Architecture:** Proprietary (Claude Fable 5-class weights).

### Raw benchmarks found

Reasoning / knowledge:
- GPQA: **94.1%** (Anthropic meta.json)

Coding:
- SWE-bench Verified: **95.5%** (Anthropic meta.json)

### Normalized scores (1–100)

- **Tool use: 96/100.** Flagship cyber-defense capabilities; expert agentic performance.
- **Reasoning: 96/100.** Industry-leading reasoning (94.1% GPQA).
- **Context window: 95/100.** 1M context with high retrieval and coherence.
- **Multimodal: 70/100.** Text and image input support.
- **Coding: 98/100.** Exceptional coding performance (95.5% SWE-bench Verified).
- **Cost efficiency: 20/100.** Premium cybersecurity-focused pricing ($10/$50).
- **Overall Score: 91/100.** Frontier model for specialized cyber-defense; not for general-public use.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research (Anthropic official announcements via fallback); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic News (Official)](https://www.anthropic.com/news)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

