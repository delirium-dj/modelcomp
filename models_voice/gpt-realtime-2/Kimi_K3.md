# GPT-Realtime-2 — findings by Kimi K3

- Source: OpenAI/GPT-Realtime-2 (`gpt-realtime-2`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2
- **Short description:** OpenAI's most capable realtime speech-to-speech reasoning model for the Realtime API, bringing GPT-5-class reasoning into live voice conversations with configurable reasoning effort and stronger tool use for voice-agent workflows. This is a voice-first model — it lives in the Realtime API only.
- **Provider / access:** OpenAI Realtime API (`v1/realtime`, WebSocket/WebRTC sessions; model ID `gpt-realtime-2`). Not available on Chat Completions, Responses, Batch, or the standalone TTS/transcription endpoints. Also in the Microsoft Foundry catalog (`gpt-realtime-2`). Not on OpenCode Zen.
- **Release / knowledge:** Released 2026-05-08 (OpenAI announcement "Advancing voice intelligence with new models in the API", shipped alongside GPT-Realtime-Translate and GPT-Realtime-Whisper). Knowledge cutoff: 2024-09-30.
- **IDs:** `openai/gpt-realtime-2` (alias = default snapshot). No Free ID exists on Zen.
- **Context window:** 128,000 tokens total; 32,000 max output (OpenAI model docs) — 4x the 32K window of its predecessor.
- **Modalities:** Text + audio + image in; text + audio out (native speech-to-speech). Reasoning: yes (configurable effort normal/high/xhigh; reasoning tokens billed). Function calling and prompt caching supported; parallel multi-tool calls, OpenAI Agents SDK, remote MCP servers, and SIP telephony supported (per launch coverage).
- **Pricing (as of 2026-09-29):** Text: $4/M in, $0.40/M cached in, $24/M out. Audio: $32/M in, $0.40/M cached in, $64/M out. Image: $5/M in, $0.50/M cached (OpenAI API docs). No free tier.
- **Architecture:** Proprietary; undisclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- OpenAI announcement: "more reliable tool use for complex voice-agent workflows"; parallel multi-tool calling in live sessions (OpenAI docs + launch coverage). No numeric agentic benchmark found.
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Big Bench Audio (audio reasoning): **96.6%** at xhigh reasoning effort (OpenAI announcement; +15.2 points over GPT-Realtime-1.5 at high effort) — state of the art
- Audio MultiChallenge (multi-turn spoken instruction following, context integration, self-consistency, mid-speech corrections): state of the art per OpenAI announcement; exact figure not published in text form (reported in announcement chart image)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (AA does not index Realtime-API voice models)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found (vendor describes "GPT-5-class reasoning" but no coding-specific eval was published for this model)

Long context:

- No long-context retrieval benchmark reported (128K window is vendor-documented only).

### Normalized scores (1–100)

- **Tool use: 62/100.** Documented function calling with parallel multi-tool calls inside live voice sessions, plus Agents SDK / MCP / SIP integration — a genuinely strong voice-agent tool story. Capped hard: zero public numeric agentic benchmarks (no Tau, Terminal-Bench, or GDPval) to calibrate against.
- **Reasoning: 70/100.** Big Bench Audio 96.6% at xhigh is the best published audio-reasoning score, and the model is described as GPT-5-class with adjustable reasoning effort. Capped: no text-reasoning benchmarks (GPQA/HLE/index) exist for this ID, and reasoning effort trades directly against latency.
- **Context window: 55/100.** 128K total / 32K out sits in the 100K–200K band (50–64). Big for a realtime voice model (4x its predecessor) but well below the 1M text frontier; no retrieval-quality data published.
- **Multimodal: 94/100.** Full duplex native audio in + audio out, plus text and image input — squarely in the top band (non-text output). Capped just below 100: no video input; voices and audio quality improvements are vendor-reported.
- **Coding: 55/100.** No coding benchmark was ever published for this voice-first model; capability inferred only from the "GPT-5-class reasoning" framing and tool use. Treat as provisional — it is not sold as a coding model.
- **Cost efficiency: 40/100.** Audio tokens at $32/$64 per million make continuous voice sessions expensive; even text tokens ($4/$24) sit above the $3/$15 reference (~60). Cached input at $0.40/M helps long sessions; still a premium paid-only endpoint.
- **Overall Score: 67.2/100.** Mean of the five non-cost dims (62+70+55+94+55)/5 = 67.2. Best fit: production voice agents (support, telephony via SIP, in-app assistants) where spoken interaction quality and tool calling matter more than text-benchmark chops.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (OpenAI API model docs, OpenAI May 2026 announcement as covered by Build Fast with AI, Microsoft Foundry catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
