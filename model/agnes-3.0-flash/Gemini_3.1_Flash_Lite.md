# Agnes 3.0 Flash — findings by Gemini 3.1 Flash Lite

- Source: Agnes AI/Agnes 3.0 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 3.0 Flash
- **Short description:** Agnes AI's high-throughput model with 512K context for reasoning and coding.
- **Provider / access:** Agnes AI (https://wiki.agnes-ai.com). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `agnes-ai/agnes-3.0-flash` (Paid-tier)
- **Context window:** 512,000 total; 65,536 output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.05/$0.15 per 1M ($0 trial).
- **Architecture:** Proprietary.

### Raw benchmarks found

- GPQA Diamond: **92.4%** (Agnes meta.json)

### Normalized scores (1–100)

- **Tool use: 88/100.** High-throughput tool orchestration.
- **Reasoning: 90/100.** Elite-tier reasoning (92.4% GPQA Diamond).
- **Context window: 85/100.** 512K capacity.
- **Multimodal: 70/100.** Text/image support.
- **Coding: 88/100.** Reliable coding.
- **Cost efficiency: 100/100.** Ultra-low list pricing ($0.05/$0.15).
- **Overall Score: 84.2/100.** High-performance, high-value model with elite GPQA performance.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Agnes AI](https://wiki.agnes-ai.com)
