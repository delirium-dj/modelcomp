# Grok Voice Think Fast 2.0 — findings by Mimo v2.6 Flash

- Source: xAI/`grok-voice-think-fast-2.0`
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI's flagship speech-to-speech voice model (2026-07-29) that listens, reasons and speaks on a single model path instead of chaining STT → LLM → TTS, with reasoning running in parallel with speech. Lives under `models_voice/` per the voice-routing rule. Successor to `grok-voice-think-fast-1.0`, which the `grok-voice-latest` alias stopped pointing at on 2026-08-05.
- **Provider / access:** xAI realtime WebSocket API `wss://api.x.ai/v1/realtime`, model string `grok-voice-think-fast-2.0`; Grok Voice Agent Builder (provisioned numbers); also on Vercel AI Gateway as `xai/grok-voice-think-fast-2.0`. Server-side tools billed per invocation (web search and X search $5 / 1,000 calls, document-collection search $2.50 / 1,000, file-attachment search $10 / 1,000).
- **Release / knowledge:** **2026-07-29** (xAI release note; same date on xAI's EU training-data public summary). Alias flip to `grok-voice-latest` on **2026-08-05**. Knowledge cutoff **not published**.
- **IDs:** `xai/grok-voice-think-fast-2.0`. **No OpenCode Zen Free ID.**
- **Context window:** **not published.** xAI discloses no context-window figure for this model (AI Trend Notifier records it as a genuine `unknown`, "consistent with how xAI has released the rest of the Grok Voice line"); max output likewise unpublished. Session shape is governed by connected audio time and a concurrency tier (10 concurrent sessions at base, 20/50/100/200/400 at tiers 1–5) rather than by a stated token window.
- **Modalities:** **text in, audio in → text out, audio out** (AI Model Watch modality row); no image or video input claimed. Reasoning: **yes** — runs in parallel with speech, and xAI reports ~0.4× the reasoning-token volume of 1.0 per response, so tool calls fire earlier. Transcription accuracy is a headline claim: 1.5–2.0× better WER than Deepgram Nova 3 and ElevenLabs Scribe v2 across 24 languages, widening to roughly 10× under background noise and telephony compression (xAI vendor claim).
- **Pricing (as of 2026-09-28):** **$0.08 per minute of audio** (xAI prints the equivalent **$4.80 / hour**) plus **$0.004 per text input**. Provisioned phone number in Voice Agent Builder: **+$0.01 / minute**. Server-side tools billed per invocation as above. Flat per-minute rate — no token metering, so cost is predictable and independent of verbosity. No free tier.
- **Architecture:** proprietary; **no parameter count, no architecture write-up, no context window published.** Training-data summary released for the EU market 2026-07-29 (public web crawl Jan 2024–Jun 2026, Common Voice / LibriSpeech / VoxPopuli / FLEURS plus licensed and internally recorded audio; synthetic data generated with Grok 4.3 and Grok 4.5).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). All rows below are the **Artificial Analysis** speech-to-speech suite as reproduced in xAI's release table and by third parties — vendor-published restatement of a third-party harness, noted per row.

Agent / tool use:

- τ-Voice (agentic performance): **56.5%** — vs GPT-Realtime-2.1 High 45.7%, Gemini 3.1 Flash High 37.7%; later tables show GPT-Live-1 (Astra, medium) at 67.9%, i.e. **Grok's τ-Voice lead was overtaken after this release** (Artificial Analysis, 2026-09-15)
- Speech Agent Arena task success: **94.6%** — the highest task-success figure in the comparison set used by OrcaRouter (GPT-Live-1 Astra 87.4%, Sol 90.9%)
- Speech Agent Arena Elo: **1011** — behind GPT-Live-1 Sol (1053), GPT-Live-1 Astra (1048) and Gemini 3.1 Flash Live Minimal (1096)
- Conversational Dynamics (Full Duplex Bench subset): **95.1%** (xAI/AA July table); GPT-Realtime-2.1 High 95.7%, GPT-Realtime-1.5 95.7% — Grok is **not** the leader on this sub-score
- Server-side tool usage documented (web search, X search, document collections, file attachments) with published per-call prices, but **no Terminal-Bench / GDPval / MCP-Atlas / OSWorld score found** for this ID

Reasoning / knowledge:

- Big Bench Audio (speech reasoning): **97.2%** (xAA/AA table; the AA live table rounds to 97%) — behind Qwen Audio 3.0 Realtime Plus (99.2%), ahead of GPT-Live-1 Astra (90.1%) and GPT-Realtime-2 High (97%, tied/near)
- Artificial Analysis Speech-to-Speech Quality Index (composite): **82.9%** in xAI's 2026-07-29 release table (vs GPT-Realtime-2.1 High 79.1%, Gemini 3.1 Flash High 69.5%, Think Fast 1.0 75.7%); the **2026-09-15 AA table shows 81.3% (High)**, and by then GPT-Live-1 (Astra) had taken #1 at 81.5. **Both values reported — AA revised its index components in August 2026 without publishing a changelog**, so the gap is a measurement change, not a model change (OrcaRouter, 2026-09-15).
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / BenchLM: **no verified public score found**
- Omniscience / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / AA Coding Index: **no verified public score found** — this is a voice-agent model and no coding harness has published a result for it
- Closest proxy (provisional): tool-call reliability is called out as an improvement over 1.0, but carries no published pass rate

Long context:

- No context window published at all (see Model card); MRCR / RULER / GraphWalks: **no verified public score found**

Multimodal:

- Audio in + audio out verified by the product; MMMU / CharXiv / Video-MME: **no verified public score found**; no image input claimed

Latency / speed (supporting, not a scored dim):

- Time to first audio: **0.70 s** (vs 1.25 s for Think Fast 1.0, 1.21–1.34 s for GPT-Realtime-2.1 / GPT-Live-1 Astra, 2.98 s for Gemini 3.1 Flash High). Faster models exist further down the index — Deepslate Opal 0.44 s, Gemini 2.5 Flash Native Audio Dialog 0.63 s
- Reasoning-token volume ≈ **0.4×** Think Fast 1.0 per response (xAA)

### Normalized scores (1–100)

- **Tool use: 88/100.** τ-Voice **56.5%** clears the methodology's ~50%+ frontier anchor for agentic voice tasks, and Speech Agent Arena task success **94.6%** is the best figure in the comparison set — this is the strongest measured voice-agent completion rate I found. Capped at 88 by Arena Elo (1011) sitting behind three rivals, by τ-Voice having been overtaken by GPT-Live-1 + Astra (67.9%), by the absence of any Terminal-Bench/GDPval/MCP-Atlas row, and by server-side tools billing per call on top of the rate.
- **Reasoning: 86/100.** Big Bench Audio **97.2%** is near ceiling and second only to Qwen Audio 3.0 Realtime Plus (99.2%) in the published field, with reasoning running in parallel with speech at ~0.4× the prior reasoning-token cost. Capped at 86 because there is no GPQA/HLE/LCR/AA Intelligence Index anywhere for this ID, and the composite Speech-to-Speech Index (82.9% release / 81.3% current) puts it behind GPT-Live-1 once AA's August reweighting is applied.
- **Context window: 45/100.** **No context window has ever been published for this model** — a genuine unknown, not an unread field. Scored at the top of the methodology's <100K band (10–49) on the strength of demonstrated long multi-turn phone calls and the absence of any truncation reporting, but with a documentation gap that cannot be verified against a stated limit; no retrieval benchmark exists either.
- **Multimodal: 95/100.** Native audio in and audio out on a single model path, plus text in/out, is the top of the methodology's "+audio in or any non-text out = 90–100" band, and it is what makes the 0.70 s first-audio possible. Capped at 95 because no image, video or PDF path is claimed and no vision benchmark exists.
- **Coding: 30/100.** Zero verified public coding scores for this ID. Held near the floor as an evidence gap: improved tool-call reliability is asserted in the release note but never measured, and no code harness has run this model.
- **Cost efficiency: 55/100.** $0.08/min = **$4.80/hour all-in**, flat and predictable (no token metering, reasoning included) — Artificial Analysis's normalised figure is the same $4.80, which is cheaper than GPT-Live-1 + Astra ($5.83) and far cheaper than GPT-Realtime-2.1 High ($10.75), but dearer than GPT-Realtime-2 High ($4.14) and about 3.5× Gemini 3.8 Live (~$1.38). The 60% step up from Think Fast 1.0 ($0.05/min) landed automatically for anyone on `grok-voice-latest`, and server-side tools ($5 / 1,000 web searches) plus a $0.01/min provisioned number stack on top. No free tier.
- **Overall Score: 69/100.** (88 + 86 + 45 + 95 + 30) / 5 = 68.8 → 69 — the pick for phone and support voice agents that need fast first audio and the best measured task-completion rate; weaker fit where a published context limit or a documented reasoning benchmark is a procurement requirement.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-28
- Method: public internet research (xAI release note and EU training-data summary, Artificial Analysis speech-to-speech leaderboard, eesel and Appwrite restatements, AI Model Watch catalog, AI Trend Notifier wiki, Vercel AI Gateway changelog, OrcaRouter index-revision note); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
