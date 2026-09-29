# GPT-Realtime-2 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-realtime-2`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2
- **Short description:** OpenAI's most capable realtime voice model — speech-to-speech interaction with configurable reasoning effort, stronger instruction following, and more reliable tool use for complex voice-agent workflows. Sits above GPT-Realtime-1.5 in the Realtime line.
- **Provider / access:** OpenAI Realtime API `v1/realtime` (model ID `gpt-realtime-2`); Live sessions and Chat Completions/Responses endpoints are explicitly not supported. Paid API only; no free tier.
- **Release / knowledge:** Knowledge cutoff September 30, 2024 (verified via OpenAI GPT-Realtime-2 model docs); no verified release date found.
- **IDs:** `openai/gpt-realtime-2` — no Free ID on OpenCode Zen was verified during research.
- **Context window:** 128,000 total tokens with 32,000 max output tokens (verified via OpenAI model docs).
- **Modalities:** Text, audio, and image input; text and audio output; reasoning yes (reasoning token support, configurable reasoning effort); function calling yes; structured outputs not listed; prompt caching supported.
- **Pricing (as of 2026-09-28):** Text tokens $4 in / $24 out / $0.40 cached per 1M; audio tokens $32 in / $64 out per 1M; image tokens $5 in per 1M (OpenAI model docs). Paid only.
- **Architecture:** Proprietary; native speech-to-speech realtime voice model; parameter count undisclosed.

### Raw benchmarks found

> Research performed 2026-09-28: OpenAI GPT-Realtime-2 model docs (primary, verified); no third-party voice-benchmark data was found in readable form during this session.

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

- no long-context retrieval reported (128K window, no MRCR/RULER/GraphWalks value found)

### Normalized scores (1–100)

- **Tool use: 55/100.** OpenAI documents "more reliable tool use for complex voice-agent workflows" with function calling and per-tool-call fees, but no public agentic-suite score exists for this model — scored at the provisional mid band, not guessed.
- **Reasoning: 55/100.** It is a reasoning model with configurable reasoning effort and reasoning-token support, but no verified GPQA/HLE/Index evidence exists — conservative mid band.
- **Context window: 55/100.** 128K total tokens maps to the documented 100K–200K tier (50–64); capped by the 32K max-output caveat, audio tokens counting against the same window, and no retrieval measurement.
- **Multimodal: 92/100.** Audio, text, and image input with text and audio output exceeds the audio-voice tier floor (90–100) by adding image input; capped one point above the floor by the absence of video and any measured multimodal benchmark.
- **Coding: 40/100.** No verified coding-suite evidence exists for this voice model; scored conservatively with zero invented values.
- **Cost efficiency: 42/100.** $4/$24 text and $32/$64 audio per 1M is expensive for a realtime voice model (output rates roughly double GPT-Realtime-1.5's $16 text output), with no free tier and per-tool-call fees stacking on agentic workflows.
- **Overall Score: 59.4/100.** Mean of the five non-cost dims (55 + 55 + 55 + 92 + 40) / 5 = 59.4 — best fit as a premium voice-agent runtime for tool-heavy spoken workflows; cheaper Live/1.5 tiers are preferable for plain conversational voice.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-28
- Method: public internet research (OpenAI GPT-Realtime-2 model docs verified 2026-09-28); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
