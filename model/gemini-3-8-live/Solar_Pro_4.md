# Gemini 3.8 Live — findings by Solar Pro 4

- Source: Google DeepMind/Gemini 3.8 Live, e.g. Google DeepMind (`google/gemini-3.8-live`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live (Google DeepMind proprietary, Gemini 3.8 family)
- **Short description:** Google DeepMind's default native speech-to-speech model for the Gemini Live API, released September 15, 2026 alongside Gemini 3.8 Live Extended Thinking. Built for real-time voice agents that talk and act simultaneously — not a text chatbot with voice bolted on. Accepts text, image, video, and audio input; streams synthesized audio output. Auto-switches across 97 languages. Stays on the line for 15 minutes before audio-only calls need reconnect. Scores 76.0 on Speech to Speech Quality Index (92% Speech Reasoning, 96.1% Conversational Dynamics, 30.1% Agentic Performance).
- **Provider / access:** Gemini Live API (WebSocket connection), Google AI Studio (no-cost tier for pre-production testing). Also available via LiveKit, Pipecat, Agora, LangChain, Vercel, Fishjam, Vision Agents integrations.
- **Release / knowledge:** Released 2026-09-15; knowledge cutoff not explicitly stated.
- **IDs:** `gemini-3.8-live` (Gemini Live API endpoint). Not available through standard Gemini API text endpoints.
- **Context window:** 131,072 tokens (128K) input; max output 65,536 tokens (64K). Audio-only session: 15 minutes before reconnect. Video+audio session: 2 minutes before reconnect.
- **Modalities:** Text, image, video, and audio input; synthesized audio output (speech-to-speech). No image or video generation. Tool calls: yes (executed asynchronously in background). Function calling: yes. Structured output: NO (no structured outputs support). Reasoning: yes (Speech Reasoning 92%). Batch API: NO. Context caching: NO.
- **Pricing (as of 2026-09-18):** Three separate rates: $0.75/$4.50 per 1M text input/output tokens; $3.00/$12.00 per 1M audio input/output tokens ($0.005/$0.018 per minute); $1.00 per 1M image/video input tokens ($0.002 per minute). No charge for image/video output. No-cost tier through Google AI Studio/unpaid Gemini API quota (data may feed Google product development unless billing turned on).
- **Architecture:** Proprietary (Google). Native speech-to-speech model — reasoning and speech in one model (unlike GPT-Live-1 which pairs voice layer with separate reasoning model). SynthID watermarked audio. No dedicated model card, training data cutoff, or red-teaming disclosure at launch.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for Gemini 3.8 Live specifically. (Google has not published SWE-bench, GPQA, or MMLU-style text-reasoning scores for Live models — neither targets text or coding.)
- SWE-bench Pro: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld-Verified: no verified public score found
- Agentic Performance (Speech to Speech Quality Index): **30.1%** (Artificial Analysis; 2026-09-16). Background tool execution capability.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for Gemini 3.8 Live specifically.
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found for Gemini 3.8 Live specifically. (Not applicable — voice model, not text intelligence.)
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found
- Speech Reasoning: **92%** (Artificial Analysis Speech to Speech Quality Index; 2026-09-16). Strong for voice reasoning.
- Conversational Dynamics: **96.1%** (Artificial Analysis Speech to Speech Quality Index; 2026-09-16). Exceptional for natural conversation.

Coding:

- SWE-bench Verified: no verified public score found
- SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found (voice model, not coding-focused)

Long context:

- Long-context recall: no verified public score found for Gemini 3.8 Live specifically. 128K input context. Session length capped (15 min audio, 2 min video).

### Normalized scores (1–100)

- **Tool use: 60/100.** Agentic Performance 30.1% (Speech to Speech Quality Index — background tool execution in voice context). No traditional coding/agent benchmarks (SWE-bench, Terminal-Bench, etc.) published for this model — it's a voice model, not a coding/agent model. Capped by: lack of traditional agent benchmarks, and Agentic Performance at 30.1% being low-mid tier. Score 60 reflects voice-context tool use capability.
- **Reasoning: 75/100.** Speech Reasoning 92% (Artificial Analysis Speech to Speech Quality Index — strong for voice reasoning). No traditional reasoning benchmarks (GPQA, HLE, MMLU) published — neither targets text reasoning. Capped by: lack of traditional reasoning benchmarks. Score 75 reflects voice-context reasoning capability.
- **Context window: 60/100.** 128K input context. Audio-only session: 15 minutes. Video+audio: 2 minutes. Per methodology: 100K-200K = 50-64, with 128K mapping to ~60. Score 60 reflects upper-mid tier context window for voice sessions. Significantly smaller than 1M-tier text models.
- **Multimodal: 95/100.** Text, image, video, and audio input; synthesized audio output. Full multimodal voice input (text+image+video+audio in, audio out). Per methodology: +video/PDF in = 75-90, +audio in or any non-text out = 90-100. With text+image+video+audio in and audio out, score 95. Capped by lack of image/video generation. Exceptional for voice/multimodal live interaction.
- **Coding: 40/100.** No coding benchmarks published — voice model, not coding-focused. Score 40 reflects unsuitability for coding tasks (not designed for code generation/editing).
- **Cost efficiency: 75/100.** $0.75/$4.50 per 1M text input/output; $3.00/$12.00 per 1M audio input/output ($0.005/$0.018 per minute); $1.00 per 1M image/video input. No-cost tier available. Per methodology: ~$0.75/$4.50 for text = ~85-90 range; audio rates are higher per-token but per-minute rates are reasonable. Blended rate depends on voice vs text ratio. Capped by: no context caching, no batch API, no structured outputs (limits cost optimization options). Score 75 reflects reasonable voice pricing with no-cost tier.
- **Overall Score: 68/100.** Mean of (60 + 75 + 60 + 95 + 40 + 75) / 6 = 67.5 → **68**. Best-fit recommendation: Gemini 3.8 Live is the best native speech-to-speech model for real-time voice agents — NOT a text/coding model. Use for voice agents that need to talk and act simultaneously (30.1% Agentic Performance, 92% Speech Reasoning, 96.1% Conversational Dynamics). For text/coding workloads, use Gemini 3.8 Flash (Overall 91) or other text models. For turn-based multimodal chat (not persistent voice session), use Gemini Omni 1.1 Flash. For on-device offline inference, use Gemini Nano. The 2-minute video session limit and 15-minute audio limit are significant constraints for long conversations.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev, Artificial Analysis), vendor release materials (Google DeepMind official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Note: Gemini 3.8 Live is a voice model — no traditional text/coding benchmarks published. Scores reflect voice-specific capabilities.
- Future sources: add a new file next to this one, e.g. `Hy3.md`, using the same headings.
