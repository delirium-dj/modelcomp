# GPT-5 — findings by Grok 4.6

- Source: OpenAI (`gpt-5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI’s August 2025 unified GPT-5 system (fast model + “GPT-5 thinking” + router). Legacy vs 2026 GPT-5.x / GPT-6 lines; API docs now recommend GPT-6 Astra. GPT-5 pro is a longer-think variant — GPQA 88.4% below is **pro**, not the default router.
- **Provider / access:** OpenAI API `gpt-5`; reasoning.effort `minimal|low|medium|high`. Deprecation listed 2026-12-11 on CloudPrice.
- **Release / knowledge:** 2025-08-07 (OpenAI intro); knowledge cutoff **2024-09-30** (OpenAI API docs).
- **IDs:** `openai/gpt-5`. No OpenCode Zen Free ID found.
- **Context window:** 400,000 tokens (OpenAI docs); CloudPrice lists 410K. Max output 128K.
- **Modalities:** text + image understanding (MMMU 84.2%); tool use. CloudPrice also mentions image generation — not confirmed as native GPT-5 token output on the official intro; scored as image-in, text-out unless a first-party I/O table says otherwise.
- **Pricing (as of 2026-10-01):** $1.25 / $10 per 1M in/out; cached input $0.125 (OpenAI docs / LLMCost 2026-08-29).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- TAU2 (CloudPrice fraction **0.9** → treat as **~90%**): independent aggregator, exact harness not on the OpenAI intro
- TerminalBench Hard (CloudPrice **0.4** → **~40%**)
- GDPval-AA / Tau3 / Claw-Eval / TB 2.1: no verified public score found on the OpenAI intro

Reasoning / knowledge:

- GPQA: **88.4%** without tools for **GPT-5 pro** (OpenAI intro) — not claimed here as default `gpt-5`
- AIME 2025 (no tools): **94.6%** (OpenAI intro)
- HealthBench Hard: **46.2%** (OpenAI intro)
- HLE (CloudPrice **0.3** → **~30%**); Intelligence Index **23.0** (CloudPrice) vs **35.3** (LLMCost, older Index)
- MMLU-Pro (CloudPrice **0.9** → **~90%**)
- LCR (CloudPrice **0.8** → **~80%**)

Coding:

- SWE-bench Verified: **74.9%** (OpenAI intro; n=477 subset)
- Aider Polyglot: **88%** (OpenAI intro)
- LiveCodeBench (CloudPrice **0.8** → **~80%**)
- SciCode (CloudPrice **0.4** → **~40%**)
- Coding Index 37.8 (CloudPrice / LLMCost)

Long context:

- 400K native. LCR ~80% (CloudPrice). MRCR / RULER / GraphWalks: no verified public score found.

Multimodal extras:

- MMMU: **84.2%** (OpenAI intro)

### Normalized scores (1–100)

- **Tool use: 82/100.** TAU2 ~90% (CloudPrice) is strong; TB Hard ~40% is mid. Capped by aggregator-only agent numbers, no TB 2.1/4.0 or Tau3-Banking on the first-party card, and 2026 Index/agentic scores that sit well below 2026 Sonnet/GPT-6.
- **Reasoning: 80/100.** AIME 2025 94.6% is excellent; default-model GPQA is unpublished (88.4% is **pro**). Capped by HLE ~30%, later Intelligence Index 23, and a 2024-09-30 cutoff.
- **Context window: 78/100.** 400K is in the 200K–500K tier (70 at 200K, 85–94 at 500K–1M). LCR ~80% is not 98% at 512K+.
- **Multimodal: 68/100.** Image understanding (MMMU 84.2%) → 60–70. Not scored 90+ without verified native audio/video or image-out on the official I/O list.
- **Coding: 86/100.** SWE-Verified 74.9% meets the 74%+ ref; Aider 88% and LiveCode ~80% help. Capped by SciCode ~40% and Coding Index 37.8 (not 70%+).
- **Cost efficiency: 76/100.** $1.25 input matches the ~$1.25/$4.25 ≈88 anchor but **$10 output** is closer to Sonnet $10 than $4.25, so below 88. Cache $0.125 helps. Not $0.
- **Overall Score: 79/100.** (82+80+78+68+86)/5 = 78.8 → 79 half-up. Best-fit: legacy 400K vision coder; prefer GPT-5.x / GPT-6 for 2026 agentic Index and 1M context.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (OpenAI intro + API docs, Benchgen, CloudPrice, LLMCost); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
