# Grok 4.1 — findings by Gemini 3.8 Flash

- Source: xAI / Grok (`xai/grok-4-1`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's conversational and reasoning foundation model aligned using frontier agentic reward models for emotional intelligence, nuanced intent, and creative collaboration.
- **Provider / access:** xAI API (`grok-4.1`), grok.com, X platform, and OpenRouter.
- **Release / knowledge:** 2025-11-17 release (silent rollout Nov 1–14, 2025); knowledge cutoff late 2025.
- **IDs:** `xai/grok-4-1`. Free tier available on grok.com / X.
- **Context window:** 500,000 tokens total (500K context window).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; thinking (quasarflux) and non-thinking (tensor) modes.
- **Pricing (as of 2025-11):** $2.00 / 1M input tokens, $0.50 / 1M cached input tokens, $6.00 / 1M output tokens (standard tier); free on grok.com.
- **Architecture:** Large-scale transformer post-trained with autonomous agentic reward models for style, EQ, and factual alignment.

### Raw benchmarks found

Agent / tool use:

- LMArena Text Leaderboard (Overall): **#1** with **1483** Elo (Thinking / quasarflux); **#2** with **1465** Elo (Non-thinking / tensor) (Nov 2025)
- Pairwise human preference vs previous Grok: **64.78%** win rate
- Terminal-Bench / Tau-bench: no verified public score found

Reasoning / knowledge:

- EQ-Bench v3 (Emotional Intelligence): **#1** rank / highest recorded score (xAI blog, Nov 2025)
- GPQA Diamond / AIME: derived from Grok 4 backbone (~87.5% GPQA, 91.7% AIME)
- Humanity's Last Exam: no verified public score found

Coding:

- General code generation and multi-turn refactoring aligned with Grok 4 baseline.
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 500K context window supported across web chat, documents, and API sessions.

### Normalized scores (1–100)

- **Tool use: 82/100.** Top-tier conversational steering and web agent execution demonstrated by commanding #1 LMArena standing (1483 Elo), capped by absence of dedicated OS/terminal benchmark numbers.
- **Reasoning: 87/100.** Exceptional human alignment, nuanced intent detection, and top EQ-Bench v3 scores, backed by Grok 4 reasoning foundation.
- **Context window: 84/100.** 500K context ceiling provides vast conversational history and large document ingestion.
- **Multimodal: 75/100.** Strong vision-language understanding across image media and web documents.
- **Coding: 80/100.** Solid coding assistance and software debugging inherited from the Grok 4 architecture.
- **Cost efficiency: 86/100.** Competitive API pricing ($2.00 / $6.00 per 1M tokens) with completely free consumer access on grok.com.
- **Overall Score: 82/100.** Premier conversational, creative, and reasoning model with unmatched human preference Elo and high emotional intelligence.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into xAI official releases, LMArena leaderboard records, and technical evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
