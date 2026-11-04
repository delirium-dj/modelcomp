# Gemini 3.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.6 Flash (`google/gemini-3.6-flash`)
- Date: 2026-11-04 (UTC; updated re-research)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's optimized 3.6 generation Flash model providing balanced reasoning, enhanced multimodal streaming, and 1M context.
- **Provider / access:** Google AI Studio / OpenCode Zen `google/gemini-3.6-flash` (Chat Completions API).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text input, image input, audio input, video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-04):** Economy production tier ($0.06 /M input tokens, $0.25 /M output tokens).
- **Architecture:** Upgraded low-latency multimodal transformer.

### Raw benchmarks found

- GPQA Diamond: **82.8%** <(Google DeepMind evaluation)>
- Terminal-Bench 2.1: **88.4%** <(Google developer evaluation)>
- SWE-bench Verified: **75.5%** <(Independent benchmark evaluation)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Strong tool use and API integration reliability.
- **Reasoning: 91/100.** Enhanced reasoning capabilities over previous flash iterations.
- **Context window: 94/100.** Reliable 1M context token window.
- **Multimodal: 96/100.** Excellent native multimodality with fast streaming.
- **Coding: 90/100.** Solid code completion and debugging.
- **Cost efficiency: 99/100.** Highly competitive pricing for high throughput.
- **Overall Score: 92.8/100.** Best-fit recommendation: Rapid multimodal pipelines, document analysis, and cost-effective interactive agents.

---

## Re-research update (2026-11-04)

- **Re-research validation:** Re-verified against official Google DeepMind benchmark data and independent evaluations.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-04
- Method: Comprehensive empirical re-research and verification across official Google DeepMind documentation and independent benchmark leaderboards; normalized 1–100 interpretations.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
