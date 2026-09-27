# GPT Realtime 2 — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-realtime-2`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime 2
- **Short description:** OpenAI's speech-to-speech foundation model designed for low-latency conversational voice interactions, real-time audio/image perception, and parallel tool calling.
- **Provider / access:** OpenAI Realtime API (`gpt-realtime-2`), Microsoft Azure AI Foundry (`azure/gpt-realtime-2`), and Vercel AI Gateway.
- **Release / knowledge:** 2026-05-07 release; knowledge cutoff September 2024.
- **IDs:** `openai/gpt-realtime-2`. No Zen Free tier available.
- **Context window:** 128,000 tokens total (128K context window); max output 32,000 tokens.
- **Modalities:** Audio, image, and text input; audio and text output; speech-to-speech streaming; function calling.
- **Pricing (as of 2026-05):** Text: $4.00 / 1M input, $0.40 / 1M cache read, $24.00 / 1M output; Audio: $32.00 / 1M input, $64.00 / 1M output; Image: $5.00 / 1M.
- **Architecture:** End-to-end multimodal speech-text transformer with streaming bidirectional audio transport.

### Raw benchmarks found

Agent / tool use:

- Elo Rating: **1074** (#155 across tracked conversational voice models, CloudPrice / LMSYS, 2026)
- Parallel Function Calling supported natively.
- Terminal-Bench / Tau-bench: no verified public score found

Reasoning / knowledge:

- Instruction following and conversational reasoning evaluated at speech latencies (~300ms).
- GPQA Diamond: no verified public score found
- Humanity's Last Exam: no verified public score found

Coding:

- Basic code explanation and spoken technical assistance.
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 128K context window with streaming audio buffer management.

### Normalized scores (1–100)

- **Tool use: 70/100.** Reliable function calling and real-time tool orchestration during ongoing voice dialogues, capped by lack of complex multi-step terminal environments.
- **Reasoning: 72/100.** Solid conversational logic and fast spoken reasoning (1074 Elo), though not tuned for deep test-time compute scaling.
- **Context window: 68/100.** 128K context window fits real-time session needs, matching the standard 128K tier.
- **Multimodal: 92/100.** Outstanding native bidirectional speech-to-speech audio handling combined with vision and text input.
- **Coding: 60/100.** Competent for conversational coding discussion and syntax lookups, but not an autonomous coding agent.
- **Cost efficiency: 62/100.** Premium real-time pricing ($4 / $24 text; $32 / $64 audio), justified by low-latency voice infrastructure.
- **Overall Score: 72/100.** Specialized conversational audio and multimodal powerhouse ideal for voice bots and live interactive agents.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into OpenAI Realtime API documentation and CloudPrice infrastructure benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
