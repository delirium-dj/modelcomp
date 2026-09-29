# GPT Live 1 Astra — findings by Kimi K3

- Source: OpenAI/GPT-Live-1 with GPT-6 Astra backend (`gpt-live-1` + `gpt-6-astra` delegation)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Live-1 (Astra pairing) — tracked here as the GPT-Live-1 voice front end delegating to a GPT-6 Astra backend, the reference configuration for OpenAI's published task numbers.
- **Short description:** OpenAI's premier full-duplex voice model for real-time conversations: it listens and speaks simultaneously, handles interruption/backchanneling/turn-taking natively, and delegates deeper reasoning and actions to a backend model (GPT-6 Astra in OpenAI's reference setup) via the Responses API. Replaces the classic STT→LLM→TTS chain. Powers ChatGPT Voice since July 2026; in the API since 2026-09-10.
- **Provider / access:** OpenAI Live API — endpoint `v1/live/sessions` (WebRTC/WebSocket, ephemeral keys), model ID `gpt-live-1`; backend configured via Responses delegation (`gpt-6-astra`). Note: this is a separate surface from the Realtime API (`v1/realtime`) — GPT-Live-1 is NOT available on Realtime/Chat Completions/Responses directly. No separate `gpt-live-1-astra` API ID exists; the slug denotes the Astra-backend pairing. Not on OpenCode Zen.
- **Release / knowledge:** GPT-Live announced 2026-07-08 (ChatGPT Voice); `gpt-live-1` released in the API 2026-09-10; SynthID watermarking on supported audio added 2026-07-31. Voice-model knowledge cutoff: 2025-07-31 (backend model supplies fresh knowledge).
- **IDs:** `openai/gpt-live-1` (voice layer) + `openai/gpt-6-astra` (backend). No Free ID exists on Zen; OpenAI rate-limit table explicitly marks the Free tier unsupported.
- **Context window:** Session-duration-based; no token window published for the voice layer. Delegation payload context follows the backend model (GPT-6 Astra: 272K+ tier per OpenAI pricing tiers). Provisional.
- **Modalities:** Audio + text in; audio + text out (full-duplex native voice). Image/video explicitly unsupported. Reasoning: delegated to backend (Astra at configurable reasoning effort); the voice model itself streams with function_calling support. Structured outputs NOT supported on the Live endpoint.
- **Pricing (as of 2026-09-29):** $0.05 per minute of voice session, billed per second (no rounding up); backend model and tool usage billed separately at that model's normal rates (GPT-6 Astra: $10/$50 per 1M ≤272K tokens, higher above). Paid only.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau3 suite: **83.6% of tasks completed on the first attempt** — GPT-Live-1 paired with GPT-6 Astra at medium reasoning effort (OpenAI API community announcement, 2026-09-10; comparison figure: GPT-Realtime-2.1 at 45.7%)
- Terminal-Bench / GDPval-AA / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (Live voice surface not covered by these harnesses)

Reasoning / knowledge:

- GPQA Diamond / HLE / AA Intelligence Index / CritPt / LCR / MLCR: no verified public score found for the voice layer — reasoning is delegated; backend reasoning quality is the backend model's own profile
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found — voice-first product, no coding claims made.

Long context:

- No long-context retrieval benchmark reported; voice sessions are duration-metered, not token-window-documented.

Vendor-reported behavior (non-benchmark): interruption handling, backchanneling, and turn-taking in real time; emotional intelligence in prosody (OpenAI launch post, 2026-07-08); SynthID audio watermarking with public verification API (2026-07-31).

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau3 83.6% first-attempt completion is the best published voice-agent number anywhere in this research set (GPT-Realtime-2.1: 45.7%), and function calling works over the Live endpoint with backend tool delegation. Capped: a single vendor-published suite (Tau3) and the reliance on a heavyweight backend for the heavy lifting.
- **Reasoning: 78/100.** Reasoning is architecturally delegated to GPT-6 Astra — a frontier text model — so effective reasoning is high, but the voice layer itself contributes orchestration, not cognition; no independent audio-reasoning score (Big Bench Audio) published for this model.
- **Context window: 45/100.** No token-window documentation for the voice session (duration-metered only); knowledge freshness depends entirely on the chosen backend. Provisional low-mid score pending a published spec.
- **Multimodal: 90/100.** Native full-duplex audio in + audio out plus text — top band for non-text output; capped: image and video are explicitly unsupported on the Live endpoint (unlike GPT-Realtime-2, which accepts image input).
- **Coding: 30/100.** No coding benchmark or coding positioning exists for this voice-first model. Provisional floor score, not a defect.
- **Cost efficiency: 60/100.** $0.05/min of voice is the cheapest metered premium voice layer among the models researched here (Grok Voice: $0.08/min), but the reference pairing bills GPT-6 Astra backend tokens ($10/$50 per 1M) on top, which dominates cost on reasoning-heavy calls.
- **Overall Score: 64.6/100.** Mean of the five non-cost dims (80+78+45+90+30)/5 = 64.6. Best fit: human-grade customer-facing voice agents where conversation quality and task completion (Tau3 83.6%) justify pairing with a frontier backend.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (OpenAI developers model docs for gpt-live-1, OpenAI "Introducing GPT-Live" announcement, OpenAI API community forum launch post with Tau3 figures, OpenAI Live guide). Re-research note: an earlier 2026-09-27 pass missed the Live API surface and self-excluded; this filing supersedes it with verified docs + a vendor-published Tau3 benchmark.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
