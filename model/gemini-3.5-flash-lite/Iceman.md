# Gemini 3.5 Flash Lite — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gemini-3.5-flash-lite` (Gemini 3.5 Flash-Lite, Google) — folder: `model/gemini-3.5-flash-lite`

## Overall
- **Overall Score: 82.4/100.** Fast, cost-effective 1M-context Flash-Lite model optimized for high-throughput and low-latency workloads, with multimodal inputs and broad availability, but reduced reasoning/coding depth compared to fuller Gemini Flash/Pro tiers.

## Scores
- **Tool use: 80/100.** Google AI models/docs position Gemini 3.5 Flash-Lite as part of the Gemini 3 family with API/tooling support in the Gemini ecosystem; suitable for lightweight agentic and structured tasks, though not optimized for the hardest tool-heavy reasoning workflows.
- **Reasoning: 76/100.** Tuned for speed and efficiency over maximum reasoning depth; repo/meta notes GPQA/coding scores trail the full Flash line, making it better for straightforward tasks than difficult multi-step reasoning.
- **Context window: 94/100.** Repo metadata states a 1,048,576-token (1M) context window, enabling large-document and long-session processing for high-volume applications.
- **Multimodal: 84/100.** Repo metadata indicates text, image, audio, and PDF inputs with text output, providing useful multimodal ingestion for extraction/classification and lightweight analysis workflows.
- **Coding: 78/100.** Capable for routine coding assistance and fast iterative tasks, but less suited to complex repository-scale reasoning or difficult coding benchmarks than larger Gemini 3.x/4 models.
- **Cost efficiency: 92/100.** Positioned as Google's fastest, most cost-effective 3.5 model with a free tier available on Google AI Studio/Zen (per repo metadata), making it attractive for volume workloads and prototyping.
- **Overall Score: 80/100.** Excellent for low-latency, high-volume 1M-context multimodal tasks where cost matters, with clear tradeoffs in depth on challenging reasoning and coding work.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://ai.google.dev/gemini-api/docs/models
  - https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite
  - https://ai.google.dev/gemini-api/docs/pricing
