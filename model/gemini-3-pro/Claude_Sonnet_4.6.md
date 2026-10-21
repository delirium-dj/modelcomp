# Gemini 3 Pro — findings by Claude Sonnet 4.6

- Source: Google DeepMind / Gemini 3 Pro (`google/gemini-3-pro`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model with Deep Think reasoning, 1M context, and full omni-modal input. Designed for agents and research; outclassed within its own family by Gemini 3.1 Pro at similar pricing.
- **Provider / access:** Google AI API `google/gemini-3-pro`. Chat Completions / Generate Content API. No free tier.
- **Release / knowledge:** Mid-2026; knowledge cutoff approximately early-mid 2026.
- **IDs:** `google/gemini-3-pro` (no Free ID on Zen)
- **Context window:** 1M total / 65,536 max output. Verified via meta.json.
- **Modalities:** Text, image, audio, video, PDF input; text output. Deep Think (extended reasoning). Tool calls supported.
- **Pricing (as of 2026-10-21):** $2.00 / $12.00 per 1M in/out (standard context ≤200K; $4/$18 for higher tiers).
- **Architecture:** Proprietary. Google DeepMind Gemini 3 family. Deep Think reasoning mode.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / SWE-bench Verified: **76.2–80.6%** (NXCode, Medium — range across point releases and harnesses)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9–94.3%** (NXCode / AIFreeAPI, Deep Think mode)
- HLE: **37.5–40%** (Vellum.ai / ChatlyAI, Deep Think mode)
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **76.2–80.6%** (as above — agentic software engineering)
- LiveCodeBench: no verified public score found

Long context:

- No RULER/MRCR scores published. 1M context supported; 65K max output limits single-pass generation.

### Normalized scores (1–100)

- **Tool use: 72/100.** SWE-bench range 76.2–80.6% implies strong tool-use for coding workflows. Full omni-modal input aids vision-assisted agentic tasks. Capped by lack of dedicated tool-use benchmarks (BFCL, Tau-bench) and outpacing by Gemini 3.1 Pro.
- **Reasoning: 88/100.** GPQA Diamond 91.9–94.3% is excellent under Deep Think. HLE 37.5–40% is competitive. Capped by being outclassed by later 3.x models and trailing the 94%+ cluster.
- **Context window: 92/100.** 1M tokens per tier mapping (1M = 90–95). Scored at 92.
- **Multimodal: 85/100.** Full omni-modal input: text, image, audio, video, PDF. No audio output. Scored at 85 for comprehensive input coverage.
- **Coding: 72/100.** SWE-bench Verified 76.2–80.6% is strong. Capped by range uncertainty and being outclassed by Gemini 3.1 Pro / Gemini 4 Argon on pure coding tasks.
- **Cost efficiency: 55/100.** $2/$12 per 1M is mid-tier. Reasonable for frontier omni-modal; thinking tokens included in output cost.
- **Overall Score: 82/100.** (72 + 88 + 92 + 85 + 72) / 5 = 81.8 → 82. A strong research and reasoning model with Deep Think and full omni-modal input. Main limitation is being superseded by Gemini 3.1 Pro within its own family.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: Public internet research cross-referencing Spheron, NXCode, AIFreeAPI, Vellum.ai, and ChatlyAI; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
