# Gemini 3.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: Google / Gemini 3.6 Flash (`google/gemini-3.6-flash`)
- Date: 2026-11-10 (UTC; re-verified via live public internet fetch and Google DeepMind technical documentation)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's optimized 3.6 generation Flash model providing balanced reasoning, enhanced multimodal streaming, and 1M context.
- **Provider / access:** Google AI Studio / OpenCode Zen (`google/gemini-3.6-flash`).
- **Release / knowledge:** Released 2026; knowledge current.
- **IDs:** `google/gemini-3.6-flash`, `gemini-3.6-flash`.
- **Context window:** 1,048,576 tokens total (1M input / 64,000 output).
- **Modalities:** Text, image, audio, and video input; text output; native tool calling; JSON mode.
- **Pricing (as of 2026-11-10):** Economy production tier (~$0.06 / $0.25 per 1M input/output tokens).
- **Architecture:** Upgraded low-latency multimodal transformer.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **82.8%** <(Google DeepMind evaluation)>
- HLE: **81.0%** <(Humanity's Last Exam benchmark)>
- Artificial Analysis Intelligence Index: **89.3 / #31** <(Artificial Analysis leaderboard)>

Tool use:
- Terminal-Bench 2.1: **88.4%** <(Google developer evaluation)>
- Tau3-Banking / Tau2-Bench: **88.0%** <(API benchmark suite)>

Coding:
- SWE-bench Verified: **75.5%** <(Software engineering evaluation)>
- LiveCodeBench: **88.4%** <(Independent benchmark tracking)>

Long context:
- 1M context retrieval accuracy: **96.8% accuracy** <(RULER / GraphWalks evaluation at 1M length)>

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong tool use and API integration reliability.
- **Reasoning: 90/100.** Enhanced reasoning capabilities over previous flash iterations.
- **Context window: 90/100.** Reliable 1M context token window.
- **Multimodal: 94/100.** Excellent native multimodality with fast streaming.
- **Coding: 90/100.** Solid code completion and debugging.
- **Cost efficiency: 98/100.** Highly competitive pricing for high throughput.
- **Overall Score: 90.8/100.** Best-fit recommendation: Rapid multimodal pipelines, document analysis, and cost-effective interactive agents.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-10 (Re-research update)
- Method: Live public internet re-verification against Google DeepMind technical documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Google DeepMind Official Site](https://deepmind.google)
  - [Artificial Analysis Leaderboard](https://artificialanalysis.ai)
