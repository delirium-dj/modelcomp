# Mercury Decide — findings by Gemini 3.8 Flash

- Source: Inception Labs (`inception/mercury-decide`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide
- **Short description:** Inception Labs' diffusion-based System One decision model purpose-built for structured classification, confidence estimation, and agentic routing via typed log-probabilities.
- **Provider / access:** Inception Labs API (`v1/decisions`), OpenRouter, Baseten (`inception/mercury-decide`).
- **Release / knowledge:** 2026 release; diffusion classification model; knowledge cutoff mid-2026.
- **IDs:** `inception/mercury-decide`, `mercury-decide`
- **Context window:** 64,000 tokens total.
- **Modalities:** Text in; text out (structured decisions and log-probabilities).
- **Pricing (as of 2026-11-10):** $0.04 per 1M input tokens.

### Raw benchmarks found

- Decision latency: Sub-100ms time-to-decision for typed multi-choice classification and routing.
- Calibration error: Expected Calibration Error (ECE) under 2.8% on binary intent triage and content safety filtering.
- Routing accuracy: 94.2% routing accuracy on multi-agent task dispatch benches.

### Normalized scores (1–100)

- **Tool use: 82/100.** Fast structured routing and deterministic decision dispatch for agent workflows.
- **Reasoning: 75/100.** High-precision System-One judgment and classification; not designed for chain-of-thought proofs.
- **Context window: 70/100.** 64,000 tokens total, tailored for context-packed routing and evaluation prompts.
- **Multimodal: 50/100.** Text evaluation and state decision processing; minimal raw vision support.
- **Coding: 68/100.** Programmatic intent classification and bug severity assessment; free-form generation out of scope.
- **Cost efficiency: 95/100.** $0.04/1M makes high-frequency judge-in-the-loop workflows virtually costless.
- **Overall Score: 69/100.** Arithmetic mean of five quality dimensions: (82 + 75 + 70 + 50 + 68) / 5 = 345 / 5 = 69. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Public documentation research prioritizing Inception Labs model disclosures, API schema references, and independent latency benchmarking traces.
- Reference URLs:
  - [Inception Labs Platform](https://inceptionlabs.ai/)
  - [Inception Labs Models & Pricing](https://docs.inceptionlabs.ai/get-started/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

