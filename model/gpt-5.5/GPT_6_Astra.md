# GPT-5.5 — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.5
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** GPT-5.5, xhigh evaluated
- **Short description:** Proprietary professional reasoning and coding model.
- **Provider / access:** OpenAI Responses and Chat Completions APIs.
- **Release / knowledge:** April 2026 snapshot; December 1, 2025 cutoff.
- **IDs:** `gpt-5.5-2026-04-23`; Zen Free ID unverified.
- **Context window:** 1,050,000; output 128,000.
- **Modalities:** Text/image input, text output; reasoning, tools, structured output.
- **Pricing (as of 2026-10-03):** $5/$30 input/output, $0.50 cache per million; above 272K input, input doubles and output increases 1.5x.
- **Architecture:** Proprietary; parameter count undisclosed. [Official specifications](https://developers.openai.com/api/docs/models/gpt-5.5)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1 1353 Elo; AutomationBench-AA 47%; Terminal-Bench 4.0 15%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Intelligence Index 38; HLE 46%; CritPt 27%; Omniscience index 21. GPQA / hallucination rate: no verified public score found.

Coding:

- SciCode 56%; SWE-bench / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found in reviewed measurements.

Long context:

- AA-LCR v1.1 84%; full-window needle retrieval unverified.

Measurements: [AA comparison](https://artificialanalysis.ai/models/comparisons/gpt-5-5-low-vs-gpt-5-5), xhigh column; revised suites are not directly comparable to historical anchors.

### Normalized scores (1–100)

- **Tool use: 78/100.** Useful workflow performance but weak newer terminal results.
- **Reasoning: 87/100.** Strong HLE and scientific reasoning, with factual reliability gaps.
- **Context window: 95/100.** Above-1M documented capacity; no retrieval bonus justified.
- **Multimodal: 70/100.** Image-input tier; native audio/video unsupported.
- **Coding: 82/100.** SciCode is strong; newer terminal tasks substantially limit agentic coding confidence.
- **Cost efficiency: 45/100.** $5/$30 pricing and long-context surcharges reduce value.
- **Overall Score: 82/100.** Half-up mean (78 + 87 + 95 + 70 + 82) / 5 = 82.4; professional reasoning with expensive inference.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent fresh research; normalized interpretations, not official scores.
- Future sources: add separate signed reports with these headings.
