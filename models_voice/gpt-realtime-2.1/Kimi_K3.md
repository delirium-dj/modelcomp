# GPT-Realtime-2.1 — findings by Kimi K3

- Source: OpenAI/GPT-Realtime-2.1 (`gpt-realtime-2.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2.1
- **Short description:** Incremental update to OpenAI's flagship speech-to-speech Realtime API model — improved alphanumeric recognition, silence/noise handling, and interruption behavior over GPT-Realtime-2, with the same GPT-5-class reasoning, tool use, and pricing. Voice-first model, Realtime API only.
- **Provider / access:** OpenAI Realtime API (`v1/realtime`, WebSocket/WebRTC; model ID `gpt-realtime-2.1`). Not available on Chat Completions / Responses / Live (`v1/live/sessions`) / other endpoints. Not on OpenCode Zen.
- **Release / knowledge:** Released July 2026 (current competitor in xAI's 2026-07-29 Grok Voice Think Fast 2.0 comparison, which benchmarks it at High effort). Knowledge cutoff: 2024-09-30.
- **IDs:** `openai/gpt-realtime-2.1` (alias = default snapshot). No Free ID exists on Zen.
- **Context window:** 128,000 tokens total; 32,000 max output (OpenAI model docs).
- **Modalities:** Text + audio + image in; text + audio out (native speech-to-speech). Configurable reasoning effort (reasoning tokens billed); function calling and prompt caching supported.
- **Pricing (as of 2026-09-29):** Text: $4/M in, $0.40/M cached, $24/M out. Audio: $32/M in, $0.40/M cached, $64/M out. Image: $5/M in, $0.50/M cached — identical to GPT-Realtime-2 (OpenAI API docs). Paid only.
- **Architecture:** Proprietary; undisclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking / Tau3 suite: **45.7% of tasks completed on first attempt** (OpenAI API community announcement, 2026-09-10, as the comparison baseline to GPT-Live-1 + GPT-6 Astra's 83.6%)
- τ-voice Bench (agentic): **45.7%** at High effort (Artificial Analysis speech-to-speech measurements as published in xAI's Grok Voice Think Fast 2.0 announcement, 2026-07-29; Grok 2.0 leads at 56.5%)
- Terminal-Bench / GDPval-AA / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (voice surface not covered by text harnesses)

Reasoning / knowledge:

- Big Bench Audio (speech reasoning): **96.0%** at High effort (AA via xAI announcement; Grok Voice Think Fast 2.0: 97.2%)
- AA Speech-to-Speech Quality Index: **79.1%** at High effort (AA via xAI; Grok 2.0: 82.9%, Think Fast 1.0: 75.7%)
- Full Duplex Bench (conversational dynamics): **95.7%** — top of that comparison (Grok 2.0: 95.1%)
- GPQA / HLE / AA Intelligence Index / Omniscience / CritPt / LCR / MLCR: no verified public score found for this ID

Coding:

- SWE-bench / LiveCodeBench / SciCode / DeepSWE / Vibe: no verified public score found — voice-first model with no coding claims.

Long context:

- No long-context retrieval benchmark reported; 128K window is vendor-documented only.

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau3/τ-voice 45.7% with function calling in live sessions is competent but now clearly behind GPT-Live-1+Astra (83.6%) and Grok Voice Think Fast 2.0 (56.5% τ-voice). Capped: no text-harness agentic numbers exist.
- **Reasoning: 68/100.** Big Bench Audio 96.0% at High remains strong spoken reasoning, and configurable effort lets it scale; capped below the newest voice releases (Grok 2.0 at 97.2%) and by the absence of any text-reasoning evidence.
- **Context window: 55/100.** 128K/32K — mid band (100–200K), unchanged from GPT-Realtime-2; no retrieval-quality data published.
- **Multimodal: 93/100.** Native full-duplex audio out + audio/image/text in, with measurably better interruption and noise handling than its predecessor; capped just below top: no video input, no published voice-quality scores outside vendor/AA disclosures.
- **Coding: 55/100.** No coding benchmark published; capability inferred only from the family's GPT-5-class base. Provisional.
- **Cost efficiency: 40/100.** Identical pricing to GPT-Realtime-2 — audio at $32/$64 per million is premium; $0.40 cached input is the main lever. Paid only.
- **Overall Score: 66.6/100.** Mean of the five non-cost dims (62+68+55+93+55)/5 = 66.6. Best fit: teams already on the Realtime API wanting the improved noise/interruption handling without a pricing or endpoint change.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (OpenAI developers model docs for gpt-realtime-2.1, Artificial Analysis speech-to-speech figures as published by xAI, OpenAI community forum Tau3 comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
