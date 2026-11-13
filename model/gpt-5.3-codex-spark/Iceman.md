# GPT-5.3 Codex Spark — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `gpt-5.3-codex-spark` (GPT-5.3-Codex-Spark, OpenAI) — folder: `model/gpt-5.3-codex-spark`

## Overall
- **Overall Score: 67.6/100.** Ultra-fast real-time coding preview model served on Cerebras hardware (>1000 tokens/s) with strong interactive coding performance and 128K context, but text-only, limited/research-preview availability, and deprecated as of 2026-09-14.

## Scores
- **Tool use: 80/100.** Designed for real-time Codex workflows and agentic software engineering tasks; OpenCode Zen exposes it via the OpenAI Responses endpoint, indicating compatibility with modern tool/agent integrations, though detailed tool feature parity was not fully documented in fetched sources.
- **Reasoning: 78/100.** Demonstrated strong capability on coding benchmarks for a speed-optimized smaller model (OpenAI cites SWE-Bench Pro and Terminal-Bench 2.0 performance; repo metadata notes TB 2.0 58.4%, SWE-Bench Pro 51.5%), but it is tuned for fast, lightweight interactive edits rather than maximal deep reasoning.
- **Context window: 74/100.** 128,000-token context window with 32,000 max output (per repo metadata and OpenAI announcement), sufficient for focused coding sessions but much smaller than long-context frontier models.
- **Multimodal: 20/100.** Text-only at launch/research preview (no image/audio/video input support documented), limiting use for screenshot/UI or multimodal debugging workflows.
- **Coding: 86/100.** Optimized for real-time coding in Codex with very low latency, targeted edits, and strong agentic coding benchmark results for its size/speed class, making it effective for rapid iteration.
- **Cost efficiency: 82/100.** No first-party public per-token API price was announced for the ChatGPT Pro/design-partner preview, but OpenCode Zen lists $1.75/$14.00 per 1M input/output, which is reasonable for high-speed coding if available through that route.
- **Overall Score: 79/100.** Excellent for latency-sensitive interactive coding, but constrained by text-only modality, smaller context, preview/retirement status, and limited public pricing/access details.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://openai.com/index/introducing-gpt-5-3-codex-spark/
  - https://opencode.ai/docs/zen/
  - https://developers.openai.com/codex/changelog
