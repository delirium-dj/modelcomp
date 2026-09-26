# Gemini 3.8 Live — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemini-3.8-live`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live (realtime-voice flagship; free tier via AI Studio unpaid quota)
- **Short description:** Google DeepMind's low-latency native speech-to-speech model for the Gemini Live API — real-time voice agents and dialogue with interleaved Thinking, function calling and search grounding; a sibling "3.8 Live Extended Thinking" variant ships alongside it.
- **Provider / access:** Google AI Studio / Gemini API — model ID `gemini-3.8-live`; Live API supported; reachable through 13+ routers/gateways (OpenRouter, LiteLLM, Portkey, Helicone, Kong). Not on OpenCode Zen.
- **Release / knowledge:** Announced September 15, 2026 (blog ~17:00 UTC). Knowledge cutoff not published.
- **IDs:** `gemini-3.8-live` (stable). Extended Thinking sibling variant documented separately.
- **Context window:** 131,072 tokens (131K) input; 65,536 max output — verified on the first-party AI.dev model page. Per-session conversational cap for realtime voice.
- **Modalities:** Text, image, video AND audio in; text AND synthesized-speech (audio) out. Native speech-to-speech. Function calling yes; search grounding yes; interleaved reasoning (Thinking) yes. Structured outputs, caching, code execution and batch NOT supported.
- **Pricing (as of 2026-09-19):** Text: $0.75 in / $4.50 out per 1M (Google AI Studio route). Audio: $3 in / $12 out per 1M (folder meta; not re-verified on the tracked route). Free via AI Studio unpaid quota — traffic may feed product development; data policy does not apply once billing is enabled.
- **Architecture:** Proprietary, closed weights; realtime-voice specialist on the Gemini 3.8 core (trained/pretrained, not fine-tuned per directory metadata).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau2 / Tau3 / GDPval / MCP-Atlas / Claw-Eval: no verified public score found
- Capability flags only: function calling and search grounding supported on the Live API (first-party docs); designed for real-time voice agents

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / LCR / MRCR: no verified public score found
- Interleaved reasoning (Thinking) supported in-session; Extended Thinking variant available (vendor positioning, no published scores)

Coding:

- SWE-bench / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found — no coding rows published for this voice-specialized model

Long context:

- 131K input / 65K output caps; no long-context retrieval numbers published

Latency / voice:

- Marketed as low-latency native speech-to-speech (no independent latency figure surfaced in reviewed sources)

### Normalized scores (1–100)

- **Tool use: 55/100.** Function calling and search grounding are supported and the Live API targets real-time voice agents, but zero published tool benchmarks — provisionally mid-band on capability flags.
- **Reasoning: 55/100.** Interleaved Thinking in-session and an Extended Thinking sibling exist, yet no GPQA/HLE/Index numbers are published; provisional mid score.
- **Context window: 58/100.** 131K input / 65K output sits in the 100K–200K tier (50–64); adequate for realtime dialogue, unverified beyond that.
- **Multimodal: 92/100.** The standout: text+image+video+audio in with native synthesized-speech output — true speech-to-speech lands in the ≥90 "audio in / non-text out" band.
- **Coding: 30/100.** No coding benchmarks at all and code execution is unsupported; voice-first model, scored near the floor pending any published rows.
- **Cost efficiency: 90/100.** Free AI Studio unpaid quota covers evaluation ($0 tier, flagged: traffic may feed product development); paid text $0.75/$4.50 ≈ the ~$0.60/$2.20→92 anchor, audio at $3/$12 is premium — docked slightly for that and the data caveat.
- **Overall Score: 58.0/100.** (55+55+58+92+30)/5 = 58.0. Best fit: real-time voice agents and spoken dialogue with screen/image awareness — not a text coding/reasoning workhorse.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: first-party AI.dev model page via LLMReference, Google launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

