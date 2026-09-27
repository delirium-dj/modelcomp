# Gemini 3.8 Live — findings by GLM 5.3

- Source: Google DeepMind (`gemini-3.8-live`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's native speech-to-speech model for real-time voice agents, announced 2026-09-15 with its higher-reasoning sibling Gemini 3.8 Live Extended Thinking; replaces Gemini 3.1 Flash Live Preview at the same price. Top use case: low-latency dialogue and voice-agent triage at scale, where the base tier undercuts every rival on audio cost.
- **Provider / access:** Gemini Live API over WebSocket (`google-genai` SDK, raw WebSockets, AI Studio Stream view); server-to-server by default (ephemeral tokens for browser/mobile). GA in Gemini API and Google AI Studio as of 2026-09-15; private preview in Gemini Enterprise; powers Search Live / Gemini Live consumer surfaces. Integration partners: Agora, Fishjam, LiveKit, LangChain, Pipecat, Vercel, Vision Agents.
- **Release / knowledge:** 2026-09-15; knowledge cutoff January 2025 (official model card, Gemini 3.8 Audio family).
- **IDs:** `gemini-3.8-live` (stable string, no preview suffix); sibling `gemini-3.8-live-extended-thinking`. Not listed on OpenCode Zen.
- **Context window:** 131,072 input / 65,536 output tokens (DataCamp/Google docs); official model card lists 128K context. Session caps without session management: 15 minutes audio-only, 2 minutes audio+video.
- **Modalities:** audio, video, image, text in; audio + text out (64K text output; Live Avatar adds video out, 24K output, enterprise). 97 languages with mid-sentence switching and accent consistency. Async function calling default (`SILENT` / `WHEN_IDLE` / `INTERRUPTED` scheduling; `behavior: BLOCKING` to force sync); base tier has interleaved reasoning, no `thinking_level` (that control belongs to Extended Thinking); proactive audio permanently on; SynthID watermark on all audio output. Reasoning: base = non-reasoning tier of the family.
- **Pricing (as of 2026-09-25):** paid tier per 1M tokens — text in $0.75, audio in $3.00 (~$0.005/min), image/video in $1.00, text out $4.50, audio out $12.00 (~$0.018/min, thinking tokens billed as output). Free tier covers both models; free-tier data used to improve Google products (paid-tier data is not). Grounding with Google Search: 5,000 free requests/month, $14 per 1,000 after.
- **Architecture:** proprietary; part of the Gemini 3.8 Audio family (Live, Live Extended Thinking, Flash TTS, Flash-Lite TTS), built on the Gemini 3 Pro generation per the official model card.

### Raw benchmarks found

> The τ-Voice, Speech-to-Speech Index, and cost-per-hour figures are Artificial Analysis' independently measured leaderboard numbers (via DataCamp, 2026-09-17); τ³-Banking is vendor-chart (Google citing Sierra). BenchLM tracks the ID but has 0 of 483 benchmarks covered ("coming soon").

Agent / tool use:

- τ-Voice (Sierra harness, AA-measured): **30.1%** (base) — below its own predecessor Gemini 3.1 Flash Live at 37.7%; sibling Extended Thinking leads the board at 68.6% vs GPT-Live-1 Astra 67.9% and Grok Voice Think Fast 2.0 at 56.5%
- τ³-Banking (vendor launch chart citing Sierra): **not listed for base** — Extended Thinking 35.1% vs GPT-Live-1 Astra 32.0%, Grok Voice Think Fast 2.0 16.5%, Gemini 3.1 Flash Live 11.3%, GPT-Realtime 2 10.3%
- Terminal-Bench 2.1: no verified public score found (voice model; not evaluated)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Protocol capability: asynchronous function calling on by default with result-scheduling options (verified in Google docs)

Reasoning / knowledge:

- Artificial Analysis Speech to Speech Index: **76.0** (base; above predecessor 3.1 Flash Live at 71.5; below Extended Thinking 82.6, GPT-Live-1 Astra 81.5, Grok Voice Think Fast 2.0 81.3)
- Big Bench Audio (Google-reported): **97.7%** — Extended Thinking variant; base-tier number not published
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index: no verified public score found (BenchLM classifies the ID as non-reasoning type, 0/483 benchmarks)
- Alphanumeric precision (spoken confirmation codes, claim numbers): highlighted capability in Google docs (qualitative, no score)
- EVA-Bench (ServiceNow, via Gemini Enterprise Agent Platform): both tiers reported to push the accuracy-vs-conversational-quality Pareto frontier (vendor claim, not public API run)

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for this ID — it is a speech-to-speech model; family proxy Gemini 3.8 Flash (text sibling) scores 73.43 overall on BenchLM, but no coding number transfers to the Live ID

Long context:

- No long-context retrieval reported (no MRCR/RULER/GraphWalks rows); 131K input is a capacity spec, and live sessions are additionally capped at 15 min audio / 2 min audio+video

### Normalized scores (1–100)

> Base-tier scores (the `gemini-3.8-live` ID). Sibling Extended Thinking data is listed for context but not scored here.

- **Tool use: 55/100.** τ-Voice 30.1% is weak multi-step agentic completion — below its own predecessor (37.7%); async-by-default function calling with scheduling controls is a genuine protocol strength, but measured task completion caps the tier well below the reasoning sibling.
- **Reasoning: 55/100.** AA Speech to Speech Index 76.0 sits mid-high (predecessor 71.5, reasoning sibling 82.6); base tier is the non-reasoning configuration with zero standardized text-reasoning rows (BenchLM 0/483, non-reasoning type).
- **Context window: 55/100.** 131,072 input / 65,536 output = 100K–200K tier (50–64 band); 15-minute audio and 2-minute audio+video session caps further constrain usable window without session management.
- **Multimodal: 95/100.** Audio, video, image, text in; native audio out (plus Live Avatar video out on enterprise) with 97-language mid-sentence switching — top-band realtime omni coverage.
- **Coding: 45/100.** No verified coding benchmark exists for this ID; the family's text sibling (Gemini 3.8 Flash) codes well but nothing transfers verifiably — provisional, capped by zero direct rows and a voice-first architecture.
- **Cost efficiency: 90/100.** $0.84 per hour of input audio in AA's cost test — cheapest of any model on Google's chart, ~7× below GPT-Live-1 Astra ($5.83); text at $0.75/$4.50 per 1M; free tier available (data-used-for-training caveat).
- **Overall Score: 61/100.** (55 + 55 + 55 + 95 + 45) / 5 = 61.0 → 61. Best-fit: the cheapest credible realtime voice agent for triage, search, and smart-device flows; route multi-step agentic voice work to Extended Thinking (τ-Voice 68.6%) instead.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (Google launch/docs, official model card, Artificial Analysis leaderboard via DataCamp, BenchLM registry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
