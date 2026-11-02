# GPT-5.1 Codex Mini — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.1-Codex-Mini
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's smaller, faster Codex model for software engineering and tool-driven coding tasks. It is a proprietary, reasoning-capable tier rather than an open-weight model.
- **Provider / access:** OpenAI Responses API (`https://api.openai.com/v1/responses`); OpenRouter also exposes `openai/gpt-5.1-codex-mini` through an OpenAI-compatible Chat Completions endpoint.
- **Release / knowledge:** November 13, 2025 release listing; September 30, 2024 knowledge cutoff (Artificial Analysis/OpenAI documentation). The native model page now marks the model shut down.
- **IDs:** `openai/gpt-5.1-codex-mini`; OpenCode route `opencode/gpt-5.1-codex-mini`. No current OpenCode Zen Free ID exists.
- **Context window:** 400,000 tokens; maximum output 128,000 tokens, verified in OpenAI's model documentation.
- **Modalities:** Text and image input, text output; reasoning tokens, function calling, structured outputs, prompt caching, and web search through the Responses API. Audio and video are not documented.
- **Pricing (as of 2026-11-02):** $0.25 per 1M input tokens, $0.025 cached input, and $2 per 1M output tokens on OpenAI; provider pricing may differ. The model is paid and no longer generally available on the native catalog.
- **Architecture:** Proprietary; OpenAI does not publish parameter count or detailed architecture.

### Raw benchmarks found

> Public benchmark labels and harnesses are inconsistent. I kept only figures attributable to this exact Mini model; scores for GPT-5.1 Codex, Codex Max, or GPT-5.1 medium are not silently transferred.

Agent / tool use:

- Terminal-Bench 2.0: **29.8%** (official Terminal-Bench leaderboard search result; mini-SWE-agent harness)
- SWE-bench Verified: **no verified exact-model score found**; the official leaderboard's nearby GPT-5.1 Codex medium entry is a different model/configuration.
- Tool calling / Responses API: **supported**, but no independent exact-model function-calling score was found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **N/A** for the retired model; Artificial Analysis marks the index result unknown and no longer updates the model's full workload.
- GPQA Diamond / HLE: **no verified exact-model score found**.

Coding:

- Terminal-Bench 2.0: **29.8%** (mini-SWE-agent; official leaderboard)
- SWE-bench Verified / SWE-bench Pro: **no verified exact-model score found** in the public leaderboards reviewed.
- LiveCodeBench / Vibe Code Bench: **no verified exact-model score found**.

Long context:

- The documented limit is **400K tokens**; no independent retrieval curve or long-context accuracy result for this exact Mini model was found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Responses function calling, structured outputs, web search, and a 400K window are strong, but the only exact agent benchmark located, Terminal-Bench 2.0 at 29.8%, caps confidence in autonomous execution.
- **Reasoning: 73/100.** It is explicitly reasoning-capable and optimized for Codex workflows, but Artificial Analysis has no current Intelligence Index result and no exact GPQA/HLE score was verified.
- **Context window: 88/100.** The 400K input-plus-output window is well above the 128K tier but below 1M-class models; the score reflects the advertised limit without an independent retrieval curve.
- **Multimodal: 52/100.** Image input plus text output is useful for code screenshots and visual debugging, but there is no audio/video input or multimodal benchmark evidence.
- **Coding: 68/100.** Terminal-Bench 2.0's 29.8% exact-model result is meaningful but modest; nearby Codex and SWE-bench figures are not interchangeable, so the missing exact coding suite results keep the score conservative.
- **Cost efficiency: 95/100.** $0.25/$2 per million input/output tokens is unusually low for a reasoning Codex model, though the model's shutdown status reduces practical value.
- **Overall Score: 71/100.** Half-up mean of `(72 + 73 + 88 + 52 + 68) / 5 = 70.6`; best fit was cost-sensitive coding and image-assisted development while the model was available, not a current production default.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: independent public-web research using OpenAI's model documentation, Artificial Analysis, OpenRouter metadata, the official Terminal-Bench leaderboard, and the official SWE-bench leaderboard; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5.1-Codex Mini model documentation](https://developers.openai.com/api/docs/models/gpt-5.1-codex-mini)
  - [Artificial Analysis GPT-5.1 Codex mini (High)](https://artificialanalysis.ai/models/gpt-5-1-codex-mini)
  - [OpenRouter GPT-5.1-Codex-Mini](https://openrouter.ai/openai/gpt-5.1-codex-mini)
  - [Terminal-Bench leaderboard](https://www.tbench.ai/leaderboard/terminal-bench)
  - [SWE-bench official leaderboards](https://www.swebench.com/)

---
