# GPT-Live-1 Astra — findings by Inkling 2 Small

- Source: OpenAI (`gpt-live-1-astra`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Live-1 (Astra, medium)
- **Short description:** OpenAI's full-duplex speech-to-speech model — voice layer in the OpenAI API with GPT-6 Astra (medium) as the delegated reasoning backend, purpose-built for tool-heavy spoken customer support where turn-taking quality matters as much as task completion. Reasoning and tool calls are delegated (billed separately).
- **Provider / access:** OpenAI API `v1/live/sessions` (WebRTC, WebSockets, SIP telephony); ChatGPT Voice was the launch surface.
- **Release / knowledge:** 2026-09-10 (live in the API since September 10, 2026); knowledge cutoff not published for the voice layer.
- **IDs:** `gpt-live-1` (OpenAI API); dataset slug `gpt-live-1-astra` denotes the Astra-medium pairing
- **Context window:** 128,000 tokens per Live session; image and video unsupported.
- **Modalities:** audio + text in; audio + text out; tool calls via delegated Responses backend; reasoning delegated (GPT-6 Astra medium); SynthID-type watermarking not documented publicly.
- **Pricing (as of 2026-11-10):** voice layer $0.05 per minute (≈$3.00/hour), billed per second; backend model (GPT-6 Astra medium) and tools billed separately at their own rates; no Free ID.
- **Architecture:** proprietary full-duplex speech-to-speech; reasoning delegated; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- AudioAgentBench: **90.8% checks passed** (6,104/6,720, public runs n=60, synthetic condition), **rank #1 of 14** (audioarena.ai methodology, snapshot 2026-11-10)

Reasoning / knowledge:

- no verified public text-benchmark rows (voice evidence display-only); reasoning is delegated to GPT-6 Astra (medium) — a separate tracked model

Coding:

- no verified public coding score found

Long context:

- 128,000 tokens per Live session; no verified public long-context retrieval score found

Multimodal:

- Audio + text in / audio + text out (image/video unsupported); AudioAgentBench #1 of 14; no visual multimodal rows found

### Normalized scores (1–100)

- **Tool use: 62/100.** #1 of 14 on AudioAgentBench (90.8% checks passed) verifies the conversational + delegated-tool agent harness; delegated (not native) function calling caps this — it lives on GPT-6 Astra's back.
- **Reasoning: 55/100.** Provisional — no own scores; inherits GPT-6 Astra (medium) class reasoning for text work, voiced through a 30%-tier-limited voice layer.
- **Context window: 62/100.** 128K per Live session; session-scoped, not chat-context class.
- **Multimodal: 70/100.** Full-duplex audio in/out — the differentiator; no image/video; no visual rows published for this pairing.
- **Coding: 15/100.** Not a coding model — the mandatory floor.
- **Cost efficiency: 58/100.** $0.05/min layer + separate backend billing + no Free ID; usable at low call-volume support pilots, expensive at contact-center scale.
- **Overall Score: 53/100.** (62 + 55 + 62 + 70 + 15) / 5 = 52.8 → 53. Best fit: spoken customer-support and tool-heavy voice agents where turn-taking and delegation discipline matter; not for chat-only or visual work.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (OpenAI model docs, AudioAgentBench via BenchLM mirror, dataset meta); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [gpt-live-1 — OpenAI model docs](https://developers.openai.com/api/docs/models/gpt-live-1)
  - [GPT-Live-1 — BenchLM](https://benchlm.ai/models/gpt-live-1)
  - [AudioAgentBench — audioarena.ai methodology](https://audioarena.ai/methodology)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
