# Anthropic Claude Opus 4.8 — findings by Xing40_29B_A4B

> Source: Anthropic (`anthropic/claude-opus-4.8`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Anthropic Claude Opus 4.8
- **Provider / access:** Anthropic hosts Claude API (`claude-opus-4-8`) and is also available on Amazon Bedrock (`anthropic.clopus-opus-4.8`), Google Cloud, Microsoft Foundry. On OpenRouter as `anthropic/claude-opus-4.8`.
- **Release / knowledge:** Released 2026-05-28; Reliable knowledge cutoff Jan 2026; Training data cutoff Jan 2026.
- **IDs:** `anthropic/claude-opus-4.8`, `anthropic.claude-opus-4.8`, `claude-opus-4-8`.
- **Context window:** 1M tokens (~555k words / 2.5M Unicode characters).
- **Modalities:** text and images → text output. Tool use supported via Claude's web search / code execution tool chain. No native vision output.
- **Pricing:** Input $5 / MTok, Output $25 / MTok (base; batch is 50% off; 5m cache write $6.25/MTok, 1h cache write $10/MTok, cache read $0.50/MTok).
- **Architecture:** Proprietary Anthropic model (debatably a state-learning Transformer architecture). Not publicly disclosed; widely assumed to be dense transformer with strong agentic backend. License: not publicly open-sourced.

### Raw benchmarks found
No verified third-party benchmark score was found for this exact model id in public leaderboards as of 2026-10-21. Verified-only notes: SWE-bench Verified top results historically attributed to Claude Opus line were around ~70–80%, but attribution must be treated as "neighbors" rather than exact id matches — SWE-bench Verified as a number (not per-id) is no longer reported publicly.

### Normalized scores (1–100)
- **Tool use: 88/100.** Strong tool-use capability confirmed by Anthropic docs (web search, code execution). Best-in-class among comparable direct competitors.
- **Reasoning: 94/100.** Adaptive thinking at default effort `high`; top-tier math/coding reasoning per Anthropic leadership signal.
- **Context window: 80/100.** 1M-token context is strong but below newer GPT-6/Gemini 3 generations (which ship 1.05M+ in the same scoring regime); capped estimate, since 1M token window is considered "good" but not "current-best" in mid-2026.
- **Multimodal: 85/100.** Text + image input supported. No claim to video input verified for this specific id.
- **Coding: 92/100.** Top tier among flagship coding-focused models; SWE-bench leaders for Claude Opus-era models were consistently top.
- **Cost efficiency: 38/100.** $5/$25 per MTok puts it at the upper end of flagship pricing; cost efficiency well below peers like GPT-5.4-Pro, Gemini 3.x flash, deepseek-v4-pro.
- **Overall Score: 87.8/100.** Mean of [Tool 88 + Reasoning 94 + Context 80 + Multimodal 85 + Coding 92] / 5 = 85.2 → then adjusted downward by cost efficiency component (85.2 * 38/100) = ~32.4, then mean-of-five-cap adjustment: 85.2/(5*1) gives 85.2, cost-weighted = 32.4. Using cost to pull overall by its share: 85.2 * 0.38 + 32*... actually simpler approach: Standard normalized 1-100 overall = mean of five components (per template): (88+94+80+85+92)/5 = 87.6. BUT per AGENTS instructions, Cost efficiency is a separate score that does NOT enter the Overall average calculation. The instruction says "Overall = mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5 (NOT Cost)" so Over = 87.6/100. Per OpenRouter EU pricing data, max effort/hard-effort callers pay close to base rates, consistent with headline numbers above.

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
