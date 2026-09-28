# Gemini 3.8 Live — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.8 Live (`gemini-3.8-live`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Newly discovered model.** Not previously tracked in `model/` — added during this
> research scan (discovered via Google's September 2026 voice-agent launch coverage).

## Model card

- **Name:** Gemini 3.8 Live (non-"Free"; a free Google AI Studio / unpaid quota tier exists)
- **Short description:** Google DeepMind's default **native speech-to-speech** model for the Gemini Live API, released 2026-09-15 alongside a higher-reasoning sibling, Gemini 3.8 Live Extended Thinking. It is audio-to-audio: microphone audio plus live images and video go in, synthesized speech streams back over a persistent WebSocket, and tool calls execute in the background without interrupting the conversation. It replaces the prior Gemini 2.5 Flash and Gemini 3.1 Flash Live Preview defaults.
- **Provider / access:** Google — Gemini Live API (WebSocket, `gemini-3.8-live`), Google AI Studio, Vertex AI. First-party framework support for LiveKit, Pipecat, Agora, LangChain, Vercel, Fishjam and Vision Agents. Proprietary, closed.
- **Release / knowledge:** Released **and moved to general availability (marked "Stable") on 2026-09-15** alongside its higher-reasoning sibling Gemini 3.8 Live Extended Thinking; Google's model page is dated 2026-09-15 and lists `gemini-3.8-live` as Stable (re-verified 2026-09-27 — the first pass described only a launch). No training-data cutoff is published for the Live variant, although Google did ship a Gemini 3.8 Audio model card covering both Live models.
- **IDs:** `gemini-3.8-live` (Gemini Live API). No OpenCode Zen Free ID.
- **Context window:** 131,072 input tokens per session with up to 65,536 output tokens — roughly double the 32,000-token ceiling Google documents for older non-native-audio Live models. Session length is capped separately: an **audio-only call runs 15 minutes** before a reconnect, and a session that also streams video is capped at **2 minutes**.
- **Modalities:** text, image, video and audio input; **text and synthesized audio output**; auto-switches across 97 languages; background tool/API execution; SynthID audio watermarking on every generated clip. No context caching, code execution, structured outputs or Batch API support. **Re-verified 2026-09-27 against the vendor model page:** caching, code execution, file search, structured outputs, URL context and Batch API are all confirmed not supported; **asynchronous (`NON_BLOCKING`) function calling is now the default**; **`thinking_level` is rejected** on 3.8 Live (it belongs to the Extended Thinking sibling); proactive audio is permanently enabled; affective dialogue was removed from the API; and `send_client_content` is accepted across the whole session lifecycle. Video frames are now sent to the model by default, which is the main context/cost lever.
- **Pricing (as of 2026-09-18):** metered per direction — text $0.75 / 1M in and $4.50 / 1M out; **audio $3.00 / 1M in and $12.00 / 1M out (≈$0.005 / $0.018 per minute)**; image/video input $1.00 / 1M (≈$0.002 per minute); image/video output is not billed because it is not generated. Blended 3:1 price $1.69 / 1M (rank 30 of 61). Free through AI Studio/unpaid quota, where traffic may feed Google's product development — a policy that does not apply once billing is enabled.
- **Architecture:** proprietary; **built on the Gemini 3 Pro foundation** per Google's Gemini 3.8 Audio model card (corrected 2026-09-27 — the first pass had guessed a shared "3.8 family / sparse MoE per the 3.8 Flash card" lineage, which the vendor card does not say), with no Live-specific architecture disclosure.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Speech to Speech Quality Index: **76.0**, composed of a **92% Speech Reasoning** sub-score, a **96.1% Conversational Dynamics** sub-score and a **30.1% Agentic Performance** sub-score — the agentic component is the clear weakness
- Terminal-Bench 2.1 / 2.0, Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas: **no verified public score found** — Google publishes no text-agent benchmarks for the Live models, since they do not target text or coding

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / CritPt / LCR / MLCR: **no verified public score found**; the Speech to Speech Index is the only third-party benchmark available at launch
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- **no verified public score found** — Gemini 3.8 Live is not a coding or text-reasoning model, and no code-focused evaluation is published for it

Long context:

- session-level limits (131,072 input tokens; 15-minute audio-only sessions, 2 minutes with video) matter far more than any context benchmark, and no MRCR/RULER recall value exists for this checkpoint.

### Normalized scores (1–100)

- **Tool use: 60/100.** It executes tool and API calls asynchronously mid-conversation with first-party voice-framework support and the highest Conversational Dynamics sub-score (96.1%), but a 30.1% Agentic Performance sub-score shows shallow autonomy.
- **Reasoning: 55/100.** Speech Reasoning measures 92%, which is excellent for spoken dialogue, but no text reasoning benchmark (GPQA/HLE/MMLU-Pro) exists, so the score is capped well below text frontier models.
- **Context window: 70/100.** 131,072 input and 65,536 output tokens per session is above older Live models but far below the ~1M text tiers, and the 15-minute (2 minutes with video) session caps bind harder in practice.
- **Multimodal: 85/100.** Native audio-in/audio-out plus live image and video grounding with 97-language auto-switching and SynthID watermarking — the broadest real-time modality set found in this scan; no image/video generation.
- **Coding: 15/100.** It is not a coding model and publishes no coding benchmark; treat any code work as out of scope.
- **Cost efficiency: 80/100.** Per-minute audio rates ($0.005 in / $0.018 out) plus a free pre-production tier are competitive against GPT-Live-1's flat $0.05/minute plus a separately billed reasoning model; video sessions burn image/video tokens quickly and there are no cache or batch discounts.
- **Overall Score: 57/100.** (60 + 55 + 70 + 85 + 15) / 5 = 57.0 — v4 rule: half-up mean of the five quality dims, Cost efficiency scored but excluded. **Corrected on re-verification 2026-09-27:** this line previously carried the frozen v1–v3 arithmetic `(60 + 55 + 70 + 85 + 15 + 80) / 6 = 60.8 → 61`, which contradicted the 57 stated in the heading. Best fit: real-time voice agents that must talk and act at the same time, provided the work is conversational rather than coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (Google model page and Artificial Analysis Speech to Speech Quality Index as compiled by HokAI, launch coverage). **Re-verified 2026-09-27 against the vendor model page:** token limits (131,072 in / 65,536 out), modalities (text, image, audio, video in → text + audio out), 97 languages, SynthID, interleaved reasoning, async function calling and the unsupported-feature list all matched; **upgrades applied** — GA/Stable status, Gemini 3 Pro foundation, the migration-note changes, and the frozen `/ 6` Overall arithmetic corrected to the v4 five-dimension mean. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.