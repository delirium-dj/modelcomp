# MAI-Code-1-Flash — findings by Gemini 3.1 Flash Lite

- Source: Microsoft/MAI-Code-1-Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft's 5B-active agentic coding model used in GitHub Copilot.
- **Provider / access:** Microsoft. Chat Completions API.
- **Release / knowledge:** Jun 2026; knowledge cutoff unknown.
- **IDs:** `microsoft/mai-code-1-flash`
- **Context window:** 256K total; 128K tokens max output.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Paid $0.75/$4.50 per 1M.
- **Architecture:** 5B-active.

### Raw benchmarks found

- SWE-bench Pro: **51.2%** (Microsoft meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Efficient agentic coding.
- **Reasoning: 80/100.** Reliable for its scale.
- **Context window: 80/100.** 256K capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 85/100.** Strong coding assistant (51.2% SWE-bench Pro).
- **Cost efficiency: 90/100.** Competitive pricing.
- **Overall Score: 69/100.** Efficient coding agent model, optimized for Copilot-native workflows.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Microsoft AI](https://microsoft.ai)
