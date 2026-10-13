# GPT-5.3 Codex Spark — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5.3-Codex-Spark
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's ultra-high-speed coding variant (Feb 2026 preview). Distilled from GPT-5.3-Codex. 1,000+ tok/s (15x standard) via Cerebras partnership. 128K context. Optimized for rapid prototyping and real-time autocomplete. Retired Sep 2026.
- **Provider / access:** ChatGPT Pro research preview (retired Sep 2026).
- **Release / knowledge:** 2026-02 research preview. Retired mid-Sep 2026.
- **IDs:** `openai/gpt-5.3-codex-spark` (retired)
- **Context window:** 128,000 tokens.
- **Modalities:** Text in; text out. Code-specialized. Speed-optimized.
- **Pricing (as of 2026-10-13):** Retired. Was part of ChatGPT Pro subscription.
- **Architecture:** Distilled from GPT-5.3-Codex. Cerebras Wafer-Scale Engine inference. 1,000+ tok/s.

### Raw benchmarks found

- SWE-bench Pro: performed well on subsets relative to size (source: openai.com)
- Terminal-Bench: performed well relative to size (source: openai.com)
- Prone to breaking complex code without human steering (source: reddit.com)
- Best as rapid prototyping assistant or low-latency sub-agent (source: medium.com)

### Normalized scores (1–100)

- **Tool use: 62/100.** Speed-optimized sub-agent role. Rapid prototyping. Breaks complex code autonomously. Better with human steering.
- **Reasoning: 62/100.** Distilled = reduced reasoning depth. Trades deep logic for speed. Basic spec compliance tasks.
- **Context window: 65/100.** 128K context (ref: 128K = 65). Smaller than full Codex's 400K.
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video. Text-only = 15.
- **Coding: 72/100.** Strong for rapid scaffolding, autocomplete, basic tests. Breaks on complex multi-file architecture. 1,000+ tok/s is revolutionary for coding speed.
- **Cost efficiency: 80/100.** Part of ChatGPT Pro subscription. No per-token billing. Good value for speed. Now retired.
- **Overall Score: 55/100.** Mean of (62 + 62 + 65 + 15 + 72) / 5 = 55.2, rounded to 55. Revolutionary speed via Cerebras but sacrificed reasoning depth; best as rapid sub-agent, not autonomous engineer. Now retired.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (openai.com, medium.com, openrouter.ai, reddit.com, simonwillison.net); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
