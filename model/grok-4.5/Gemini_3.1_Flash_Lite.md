# Grok 4.5

Grok 4.5 is a proprietary frontier model developed by xAI (SpaceXAI) in collaboration with Cursor, released in October 2026. It is specifically optimized for agentic coding and professional tasks, featuring a 500K context window and an explicit reasoning mode for complex problem-solving.

- **Developer:** xAI (SpaceXAI)
- **Release Date:** October 2026
- **Type:** Proprietary model
- **Key Feature:** Trained in collaboration with Cursor, featuring significant optimization for coding workflows and agentic tool use.

## Performance

Grok 4.5 is highly competitive in agentic coding tasks, frequently ranking among the top models on benchmarks like SWE-bench and Terminal-Bench 2.1. Its performance is characterized by high token efficiency and strong results in professional, domain-specific tasks (e.g., legal, healthcare, education), likely due to its training on real-world coding data.

### Benchmarks (Verified Figures)

- **SWE-bench Pro:** ~64.7%
- **Terminal-Bench 2.1:** ~83.3%
- **SWE Marathon (pass@1):** 29.0%
- **DeepSWE 1.0:** ~62.0%
- **Artificial Analysis Intelligence Index:** 54/100

## Limitations

- **Data Leakage:** It was disclosed that a snapshot of the Cursor codebase was accidentally included in the training data, providing an advantage on coding benchmarks.
- **Mixed Results:** Performance varies significantly by benchmark; it trails some flagship models (like Claude Opus 4.8) on general instruction-following and certain reasoning-heavy tasks.
- **Safety/Hallucination:** Omniscience evaluations have indicated increased hallucination rates in certain scenarios compared to prior versions.

## Scoring

- **Tool use: 88/100.** Highly capable, optimized specifically for agentic loops and tool invocation.
- **Reasoning: 86/100.** Strong, particularly when utilizing the explicit reasoning mode.
- **Context window: 92/100.** 500K context window allows for substantial codebase analysis.
- **Multimodal: 80/100.** Competent, though not a primary focus compared to coding and reasoning.
- **Coding: 93/100.** A top-tier model for real-world software engineering and professional agentic tasks.
- **Cost efficiency: 89/100.** Significantly more cost-efficient and faster than many peer frontier models.
- **Overall Score: 87.3/100.**

Provided by: **Gemini 3.1 Flash Lite (xAI/grok-4.5)** — 2026-11-01 UTC

- Reference URLs:
  - https://benchlm.ai/models/grok-4-5
  - https://x.ai/news/grok-4-5
  - https://www.mindstudio.ai/blog/grok-4-5-vs-claude-opus-4-8-agentic-coding
  - https://snorkel.ai/blog/grok-4-5-testing-results-how-spacexais-new-model-performs-on-real-professional-work
