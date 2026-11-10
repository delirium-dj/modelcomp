# Grok Voice Think Fast 2.0 — findings by Inkling 2 Small

- Source: xAI (`grok-voice-think-fast-2.0`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI's thinking-capable realtime speech-to-speech model — "think fast" targets low-latency voice agents that still use server-side tools (web search, X search, file search, MCP, functions) mid-conversation. Successor in the Grok Voice line; `grok-voice-latest` aliases the current generation.
- **Provider / access:** xAI Speech-to-Speech API — WebSocket `wss://api.x.ai/v1/realtime?model=grok-voice-latest`; Voice Agent API (native turn detection, tool calls, 20+ languages, 24 kHz PCM default); OpenCode Zen `opencode/grok-voice-think-fast-2.0`.
- **Release / knowledge:** 2026 (Grok Voice generation 2.0; `grok-voice-2.0` deprecated in docs, `grok-voice-3.0` current); knowledge cutoff not publicly stated for the voice SKU.
- **IDs:** `grok-voice-think-fast-2.0` (dataset slug); `grok-voice-latest` (xAI alias per docs)
- **Context window:** 128K total (dataset meta); session-scoped realtime — no published long-horizon retrieval rows.
- **Modalities:** text, audio in → text, audio out; reasoning "think fast" (thinking-capable); tools yes (file_search, web_search, x_search, MCP, function calling); 20+ languages; 24 kHz PCM default.
- **Pricing (as of 2026-11-10):** Speech to Speech $0.08 / minute of audio ($4.80 / hour) + $0.004 per text input (xAI Voice Pricing; `grok-voice-3.0` tier — Think Fast 2.0 inherits the S2S rate card). `grok-voice-2.0` deprecated at the same $0.08/min.
- **Architecture:** proprietary realtime speech-to-speech; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- AudioAgentBench (synthetic condition): **#3 of 14**, **83.2% checks passed** (5,416/6,509, public runs n=59) (audioarena.ai methodology, snapshot 2026-11-10, per BenchLM)

Reasoning / knowledge:

- no verified public text-benchmark rows for this ID (voice evidence display-only)

Coding:

- no verified public coding score found (voice-first model)

Long context:

- 128K session scope (dataset meta); no verified public long-context retrieval score found

Multimodal:

- Speech-to-speech with server-side search/MCP tool integration; AudioAgentBench #3 of 14

### Normalized scores (1–100)

- **Tool use: 64/100.** #3 of 14 on AudioAgentBench (83.2% checks passed) verifies the voice-agent tool harness (web/X/file search + MCP); not at the top tier (GPT-Live-1-Astra #1, 90.8%) — scored provisional on voice-protocol evidence only, no public text-agent rows.
- **Reasoning: 55/100.** Provisional — "Think Fast" implies deliberative tokens but xAI publishes no reasoning rows for this ID.
- **Context window: 62/100.** 128K session scope; session-scoped realtime, not chat-context class.
- **Multimodal: 76/100.** The differentiator: native speech-to-speech + server-side live web/X search grounding + 20+ languages; mid-pack realism-era placement vs GPT-Realtime (#3/14 AudioAgentBench).
- **Coding: 15/100.** Not a coding model — the mandatory floor.
- **Cost efficiency: 52/100.** $0.08/min — premium realtime-voice tier (above GPT-Live-1's $0.05/min); $0.004/text input on top.
- **Overall Score: 54/100.** (64 + 55 + 62 + 76 + 15) / 5 = 54.4 → 54. Best fit: live voice agents needing current info (search-grounded speech), 20+ languages, at $4.80/hr — not for chat or coding.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (xAI voice docs + pricing, AudioAgentBench via BenchLM mirror, dataset meta); scores are normalized 1–100 interpretations, not official vendor scores. Voice-protocol evidence does not feed text-model rankings; used here only for Multimodal/tool-adjacent dimensions, labelled provisional.
- Reference URLs:
  - [Speech to Speech — xAI docs](https://docs.x.ai/developers/model-capabilities/audio/voice-agent)
  - [Grok Voice Think Fast 2.0 — BenchLM](https://benchlm.ai/models/grok-voice-think-fast-2-0)
  - [xAI — Models & Voice Pricing ($0.08/min S2S)](https://docs.x.ai/docs/models)
  - [AudioAgentBench — audioarena.ai methodology](https://audioarena.ai/methodology)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
