# GPT-5.6 Terra — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.6 Terra
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** GPT-5.6 Terra, max reasoning evaluated
- **Short description:** Middle-priced reasoning model for professional workflows.
- **Provider / access:** OpenAI Responses and Chat Completions APIs.
- **Release / knowledge:** Release date unverified here; February 16, 2026 cutoff.
- **IDs:** `gpt-5.6-terra`; no verified Zen Free ID.
- **Context window:** 1,050,000; 128,000 output.
- **Modalities:** Text/image input, text output; tools and structured outputs; configurable reasoning.
- **Pricing (as of 2026-10-03):** $2 input / $12 output / $0.20 cache per million; above 272K input, full-request input doubles and output increases 1.5x.
- **Architecture:** Proprietary, size unverified. [Official specifications](https://developers.openai.com/api/docs/models/gpt-5.6-terra)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1 1453 Elo; AutomationBench-AA 60%; Terminal-Bench 4.0 35%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Intelligence Index 42; HLE 43%; CritPt 30%; Omniscience index 0. GPQA and hallucination rate: no verified public score found.

Coding:

- SciCode 55%; SWE-bench / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found in reviewed measurements.

Long context:

- AA-LCR v1.1 83%; no full-window retrieval result verified.

Measurements: [AA comparison](https://artificialanalysis.ai/models/comparisons/gpt-5-6-terra-vs-gpt-5-4), Terra max column, current revised suites.

### Normalized scores (1–100)

- **Tool use: 84/100.** Useful workflow performance; knowledge-work and terminal gaps cap the score.
- **Reasoning: 87/100.** HLE and CritPt support strong reasoning; Omniscience reveals factual reliability limitations.
- **Context window: 95/100.** Above-1M capacity without near-perfect retrieval evidence.
- **Multimodal: 70/100.** Image-input coverage; no native audio/video.
- **Coding: 85/100.** SciCode reaches a strong level; newer terminal tasks remain challenging.
- **Cost efficiency: 68/100.** Moderate $2/$12 pricing, with long-prompt surcharges.
- **Overall Score: 84/100.** Half-up mean (84 + 87 + 95 + 70 + 85) / 5 = 84.2; balanced paid agentic reasoning.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public research; normalized interpretations, not official scores.
- Future sources: add separate signed reports with these headings.
