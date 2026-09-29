# GPT-Realtime-2.1 — findings by Big Pickle

- Source: OpenAI `gpt-realtime-2.1` (Realtime API only)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2.1
- **Short description:** OpenAI's incremental update to GPT-Realtime-2, a speech-to-speech realtime voice model. Vendor-stated improvements over its predecessor are narrow and behavioural rather than capability-based: better alphanumeric recognition (order numbers, account codes), better silence and noise handling, and better interruption behaviour. It keeps GPT-Realtime-2's architecture, 128K context, identical list price and configurable reasoning effort, and its "GPT-5-class reasoning" positioning. Not an alias: it is a distinct active model ID with its own leaderboard rows and a different measured agentic profile.
- **Provider / access:** OpenAI Realtime API. Route `POST /v1/realtime` (WebRTC / WebSocket / SIP). **Chat Completions and Responses are both explicitly "Not supported"** — it cannot be dropped into a normal text pipeline. Also unsupported: batch, fine-tuning, assistants, embeddings, realtime translation, realtime transcription, speech generation, transcription, translation, image generation/edit, video, moderation and legacy completions. So it is mutually exclusive with the sibling Translate and Whisper models: each serves one dedicated endpoint.
- **Release / knowledge:** GPT-Realtime-2 launched **2026-05-07**; 2.1 is a later revision on the same ID family and has **no separate launch date** on OpenAI's model page. Knowledge cutoff **2024-09-30**.
- **IDs:** `gpt-realtime-2.1` (the only snapshot — no dated alias) and `gpt-realtime-2.1-mini`. Both are listed **Active** by the OpenAI deprecation tracker, and `gpt-realtime-2.1` is the named replacement for the now-deprecated `gpt-realtime` and `gpt-realtime-mini` (both shut down 2027-01-20). Note: this folder's `meta.json` id `opencode/gpt-realtime-2.1` matches the `opencode/` prefix convention used across this dataset rather than any OpenAI or OpenCode Zen id I could verify; flagged for the orchestrator, not edited here.
- **Context window:** **128,000 tokens total / 32,000 max output** (official OpenAI model docs). Same as GPT-Realtime-2.
- **Modalities:** In: text, **audio**, image. Out: text, **audio**. Reasoning: yes — configurable effort with reasoning-token support. Supported features: `function_calling` and `prompt_caching`. Structured outputs are not listed. Video and PDF input unsupported. EU data residency supported.
- **Pricing (as of 2026-09-29):** **Identical to GPT-Realtime-2** per OpenAI's own comparison table. Text $4.00 in / $24.00 out per 1M, cached input $0.40. **Audio $32.00 in / $64.00 out per 1M** (cached audio input $0.40) — equivalently ~$1.15/hour of input audio and ~$4.61/hour of output audio. Image input $5.00 per 1M (cached $0.50). No free tier.
- **Architecture:** proprietary. Parameter count not disclosed.

### Raw benchmarks found

All figures below are Artificial Analysis measurements of the **High** reasoning configuration unless stated. A direct fetch of the AA speech-to-speech leaderboard was used; a search-result snippet misattributed values to this model and was discarded.

Agent / tool use:

- 𝜏-Voice (replica customer-service task completion, airline / retail / telecom, with domain tools and a policy document): **45.7%** — the strongest agentic result for any OpenAI realtime model on the AA board, up from **39.8%** for GPT-Realtime-2 (High). **Caveat: 2 trials only**, versus 3 for most entries.
- Arena Task Success Rate (correct final task-completing tool call): **91.5%** (GPT-Realtime-2 High: 89.8%).
- Arena Preference Elo (human pairwise preference, tool-calling scenarios only): **928** (GPT-Realtime-2 High: 932).
- Terminal-Bench 2.1 / Tau2 / Tau3 / GDPval-AA: **no verified public score found** — realtime audio models are not entered on these text-agent harnesses.
- Claw-Eval / ClawProBench: **no verified public score found.**
- Toolathon / MCP-Atlas: **no verified public score found.**

Reasoning / knowledge:

- Speech Reasoning (Big Bench Audio, 1,000 native-audio reasoning items across Formal Fallacies / Navigate / Object Counting / Web of Lies): **96%** at High, **87%** at Minimal. GPT-Realtime-2 High is 97% — 2.1 is one point behind here.
- Conversational Dynamics (Full Duplex Bench v1 + v1.5 subset — pause handling, turn taking, user-interruption handling, backchannel handling): **95.7%** at High, **92.7%** at Minimal (GPT-Realtime-2 High: 95.3%).
- Artificial Analysis Speech to Speech Index (equal-weighted across speech reasoning, τ-Voice, arena preference and task success): **73.9** at High, **70.3** at Minimal (GPT-Realtime-2 High: 73.6). Ranked behind GPT-Live-1 (Astra, medium) at 81.5, Grok Voice Think Fast 2.0 High at 81.3, GPT-Live-1 (Sol, low) at 80.1 and Gemini 3.8 Live Extended Thinking at 82.6.
- Latency (time to first audio on Big Bench Audio): **1.21 s** at High, **0.97 s** at Minimal.
- GPQA Diamond / HLE / LCR / CritPt: **no verified public score found.**
- Artificial Analysis Intelligence Index / BenchLM: **not applicable** — AA scores this model on the Speech-to-Speech Index, not the text Intelligence Index; BenchLM lists no rows for any GPT Realtime variant.

Coding:

- **Every coding benchmark: no verified public score found** for this model.

Long context:

- 128,000 total / 32,000 max output per the official docs, but **no long-context retrieval result was published** — no MRCR, RULER or GraphWalks value at any window length.

Mini sibling (for reference, not this entry): `gpt-realtime-2.1-mini` scores 75% / 63% speech reasoning at High / Minimal, 91.7% / 91.8% conversational dynamics, τ-Voice 29.4% / 22.5%, and $3.45 / $4.60 per hour of input audio.

> **Deliberately excluded proxies.** The launch blog's quantified claims — "+15.2% on Big Bench Audio", "+13.8% on Audio MultiChallenge", and Zillow's "95% vs 69% call success rate" — are all published for **GPT-Realtime-2**, not 2.1. They are recorded here so they are not silently carried over.

### Normalized scores (1–100)

- **Tool use: 72/100.** 𝜏-Voice at 45.7% is the best directly-measured agentic task completion of any OpenAI realtime model and clears the 45% floor of the methodology's mid band, reinforced by a 91.5% task success rate and 928 arena Elo. Held below the 90–100 band because the evidence is narrow and voice-specific: no Terminal-Bench, τ-bench-text, GDPval or Claw-Eval row exists, the τ-Voice figure rests on **2 trials**, and the two strongest third-party datapoints in the family (Zillow's adversarial call success, Audio MultiChallenge) belong to the predecessor model.
- **Reasoning: 87/100.** 96% on Big Bench Audio and 95.7% on conversational dynamics are frontier-grade in the audio-reasoning domain, and the minimal-reasoning configuration still holds 87% / 92.7% at 0.97 s time-to-first-audio — a genuinely useful quality/latency curve. Capped below 90 because every datapoint is audio-domain and no text-reasoning benchmark (GPQA, HLE, LCR, CritPt) exists, so the inherited "GPT-5-class reasoning" claim is unverified, and 2.1 is nominally *behind* its predecessor on speech reasoning.
- **Context window: 55/100.** 128K total sits in the 100K–200K band (50–64) and is anchored at the bottom: the figure is a spec, not a measurement, no retrieval benchmark was published, and the Sep-2024 knowledge cutoff limits how much long-horizon recall is worth.
- **Multimodal: 96/100.** Text + audio + image in, text + audio out — among the widest coverage in the comparison set. Not 100 because video and PDF input are unsupported and structured outputs are not listed.
- **Coding: 30/100.** **Provisional floor, not a measured score** — no coding benchmark of any kind exists for this model. 30 reflects only vendor positioning and `function_calling` support. Do not compare this axis against SWE-bench-bearing models.
- **Cost efficiency: 28/100.** List price is unchanged from GPT-Realtime-2 at $4.00/$24.00 text and $32.00/$64.00 audio, already the most expensive token price in the set. What makes 2.1 worse in practice is the **realized** cost: Artificial Analysis measures **$10.75 per hour of input audio at High reasoning, versus $4.14 for GPT-Realtime-2 High — 2.6× more for identical list prices**, because 2.1 spends materially more on reasoning and output tokens on the same workload. Audio output alone is 8× the price of text output.
- **Overall Score: 68.0/100.** Mean of the five quality dims: (72 + 87 + 55 + 96 + 30) / 5. **Best fit: a production voice agent that has to actually resolve customer-service issues** — τ-Voice is the one axis where 2.1 clearly beats 2. Choose it over GPT-Realtime-2 when task completion matters more than unit cost. Poor fit for text work: no Chat Completions or Responses route, a 2024-09 knowledge cutoff, no coding evidence, and the highest realized cost in the realtime-voice field.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-29
- Method: public internet research (OpenAI API model documentation and the 2026-05-07 "Advancing voice intelligence with new models in the API" launch post, Artificial Analysis speech-to-speech leaderboard fetched directly, the OpenAI model deprecation tracker, and the OpenAI Realtime translation guide). Scores are normalized 1–100 interpretations, not official vendor scores. Every number carries its source; missing rows are stated as "no verified public score found" rather than estimated. GPT-Realtime-2 figures are labelled as predecessor data and never transferred to 2.1.
- Future sources: add a new file next to this one, e.g. `Big_Pickle_GPT_Realtime_2_2.md`, using the same headings.
