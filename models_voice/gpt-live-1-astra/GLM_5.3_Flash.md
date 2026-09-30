# GPT-Live 1 Astra — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-live-1`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Live 1 (Astra-backed live voice configuration)
- **Short description:** OpenAI's premier full-duplex voice model for natural, expressive real-time conversations with smooth interruption handling — it listens and speaks simultaneously and delegates reasoning and tool use to a backend agent (the Astra-backed configuration delegates to GPT-6 Astra). Top use case: real-time voice assistants and spoken agent interaction.
- **Provider / access:** OpenAI Live API `v1/live/sessions` (model ID `gpt-live-1`). Chat Completions, Responses, and the older Realtime endpoints are explicitly not supported. No Free-tier usage — free tier unsupported on the API.
- **Release / knowledge:** Knowledge cutoff July 31, 2025 (verified via OpenAI GPT-Live 1 model docs); no verified release date found.
- **IDs:** `openai/gpt-live-1` — no Free ID on OpenCode Zen was verified during research (the API free tier explicitly does not support Live sessions).
- **Context window:** no verified public figure found for session context (OpenAI docs list input modalities but no token window) — not verified via any public source.
- **Modalities:** Audio and text input; audio and text output; image and video unsupported; reasoning delegated to the backend agent (the voice layer itself performs inline spoken turns only); function calling supported (execution on the backend Responses config); structured outputs unsupported.
- **Pricing (as of 2026-09-28):** Voice sessions $0.05 per minute, billed per second with no rounding up (OpenAI GPT-Live 1 docs); backend model and tool usage billed separately at the configured model's token rates (GPT-6 Astra $10 in / $50 out per 1M, per OpenAI pricing). No free tier → paid.
- **Architecture:** Proprietary; full-duplex speech-to-speech voice layer with backend delegation; parameter count undisclosed.

### Raw benchmarks found

> Research performed 2026-09-28: OpenAI GPT-Live 1 model docs (primary, verified), Bing search (generic results only), Artificial Analysis speech-to-speech pages (transport errors/404s — no readable data).

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- no long-context retrieval reported (no session-context window figure published)

### Normalized scores (1–100)

- **Tool use: 50/100.** Function calling is supported and executes on the backend Responses config, but every tool execution is delegated to the backend model and no public agentic-suite score exists for the voice layer itself — scored at the provisional mid band, not guessed.
- **Reasoning: 45/100.** Deep reasoning is explicitly offloaded to the backend agent (GPT-6 Astra, benchmarked as a separate model); the voice layer has a July 2025 cutoff and no verified GPQA/HLE/Index evidence — conservative low-mid band.
- **Context window: 40/100.** Provisional floor — OpenAI publishes no context-window figure for this model; scored conservatively rather than guessing a tier, with zero retrieval measurement.
- **Multimodal: 90/100.** Audio plus text in/out with full-duplex interruption handling meets the audio-voice tier floor (90–100); capped at the floor with no image/video input and no structured-output mode.
- **Coding: 45/100.** No verified coding-suite evidence exists for this voice layer (coding is delegated to the backend); scored conservatively with zero invented values.
- **Cost efficiency: 62/100.** $0.05/min ($3.00/h) for the voice layer alone is competitive, but backend tokens and tools stack on top (GPT-6 Astra $10/$50 per 1M), the per-second meter bills the full session wall-clock, and the API free tier does not support Live sessions — no $0 tier.
- **Overall Score: 57.4/100.** Mean of the five non-cost dims (50 + 45 + 40 + 90 + 62) / 5 = 57.4 — best fit as a natural-sounding real-time voice front-end for a ChatGPT-style assistant; pair with the backend agent for any reasoning- or tool-heavy task.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-28
- Method: public internet research (OpenAI GPT-Live 1 model docs verified 2026-09-28, Bing search, Artificial Analysis pages attempted); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
