# GPT-Realtime-2 — findings by Big Pickle

- Source: OpenAI `gpt-realtime-2` (Realtime API only)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2 (OpenAI's most capable realtime voice model; not a Free-tier model)
- **Short description:** OpenAI's speech-to-speech realtime model, released 2026-05-07, described by the vendor as the first voice model with "GPT-5-class reasoning". Its selling point is a voice agent that keeps a conversation moving while it reasons, calls tools in parallel, recovers from failed turns and adjusts tone. It is a specialist for voice-agent workflows, not a general-purpose text model.
- **Provider / access:** OpenAI Realtime API. Route `POST /v1/realtime` (WebRTC / WebSocket / SIP). **Chat Completions and Responses are both explicitly "Not supported"**, so it cannot be dropped into a normal text pipeline — only into a realtime session. Also unsupported: batch, fine-tuning, assistants, embeddings, speech generation, transcription, translation, image/video/moderation endpoints. Reasoning effort is a session parameter (`minimal`, `low`, `medium`, `high`, `xhigh`; `low` is the default).
- **Release / knowledge:** Released 2026-05-07. Knowledge cutoff **2024-09-30** (per the official model page) — the oldest cutoff of any model in this comparison set.
- **IDs:** `gpt-realtime-2` (only snapshot; no dated alias). No OpenCode Zen Free ID exists — this is a paid OpenAI model.
- **Context window:** **128,000 tokens total / 32,000 max output** (official OpenAI model docs). Up from 32K on GPT-Realtime-1.5; a 4× jump that OpenAI made specifically for longer agentic voice sessions. Some third-party trackers (Future AGI, tokencalc) still publish the stale 32K/4,096 figures from `gpt-realtime` v1 — the official 128K/32K is used here.
- **Modalities:** In: text, **audio**, image. Out: text, **audio**. Reasoning: yes (configurable effort, reasoning-token support). Tool calls: yes (`function_calling`, **parallel** tool calls, "tool transparency" narration). Prompt caching: yes. Structured outputs: not listed. Video and PDF input: not supported. EU data residency: supported.
- **Pricing (as of 2026-09-26):** Text $4.00 in / $24.00 out per 1M; cached text input $0.40. **Audio $32.00 in / $64.00 out per 1M** (cached audio input $0.40) — equivalently **$1.15/hour of input audio, $4.61/hour of output audio** (Artificial Analysis). Image input $5.00 per 1M (cached $0.50). This is the most expensive token price in the comparison set; no free tier and no promotional rate found.
- **Architecture:** Proprietary. Parameter count not disclosed; vendor-stated "GPT-5-class" reasoning capability, unverified by any independent text-reasoning benchmark.

### Raw benchmarks found

Agent / tool use:

- Audio MultiChallenge S2S (Scale AI): **#1 on the leaderboard**; instruction retention **36.7% → 70.8% APR** vs GPT-Realtime-1.5, plus strong voice-editing/real-time-repair behaviour (Scale AI, via AINews 2026-05-07)
- Zillow production eval (OpenAI blog, customer quote): **95% vs 69% call success rate** — a 26-point lift on Zillow's hardest adversarial benchmark after prompt optimization (vendor-published, customer-reported; not an independent harness)
- Coval simulated-call benchmark (1,401 samples, 30-day average): instruction adherence **59%** (#2; Gemini 3.1 Flash Live Preview 64%), voice-to-voice latency **1313 ms** (#1; p50 1275 ms, p99 1936 ms), 568 samples
- Terminal-Bench 2.1: **no verified public score found** (realtime audio models are not entered)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Big Bench Audio (Artificial Analysis, 1,000 native-audio reasoning items, LLM-judged): **96.6%** at high reasoning — near saturation, level with Gemini 3.1 Flash Live Preview (High) and ~13 points above the previous best native-audio result. OpenAI's own release states the same result as a +15.2% relative gain over GPT-Realtime-1.5 (Justin Uberti summarised it as ~15 percentage points, "near saturation")
- Conversational Dynamics (Artificial Analysis, Full Duplex Bench subset — pause handling, turn taking, interruption and backchannel handling): **96.1%** at minimal reasoning
- Audio MultiChallenge (Scale AI): instruction retention **70.8% APR** (see above) — the closest published proxy for multi-turn instruction following and context management
- Latency (Artificial Analysis): time-to-first-audio **2.33 s** at high reasoning, **1.12 s** at minimal
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **not applicable** — AA scores this model on the Speech-to-Speech Index, not the text Intelligence Index; BenchLM lists 0 benchmark rows
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**

Long context:

- 128K total / 32K max output per the official model docs, but **no long-context retrieval result reported** — no MRCR, RULER or GraphWalks value at any window length was published for this model.

### Normalized scores (1–100)

- **Tool use: 78/100.** The only measured evidence is voice-agent-flavoured: #1 on Scale AI's Audio MultiChallenge with instruction retention jumping to 70.8% APR, Zillow's published 95% end-to-end call success on its hardest adversarial benchmark, and 59% instruction adherence on Coval's simulated calls — with vendor-confirmed parallel tool calling. Capped below the 90–100 band because no independent agentic harness (Terminal-Bench, τ-bench, GDPval) number exists for this model, and the one near-frontier figure is a customer eval, not a controlled benchmark.
- **Reasoning: 88/100.** 96.6% on Big Bench Audio is genuinely frontier-grade in its own domain — near saturation, ~13 points clear of the previous best native-audio result — and instruction retention of 70.8% APR on Audio MultiChallenge shows the context management that agentic reasoning needs. Held just under 90 because every reasoning datapoint is audio-domain: no GPQA, HLE, LCR or CritPt exists, so the "GPT-5-class" text-reasoning claim is unverified.
- **Context window: 55/100.** Tier mapping: 128K sits in the 100K–200K band (50–64), and the 4× jump from 32K is a real gain. Anchored at the bottom of the band because the 128K figure is a spec, not a measurement — no long-context retrieval benchmark was published, and the Sep-2024 knowledge cutoff further limits how much long-horizon recall is worth.
- **Multimodal: 96/100.** Audio in **and** audio out, plus image in — the widest coverage in the comparison set (text + audio + image in, text + audio out). Not 100 because video and PDF input are unsupported and structured outputs are not listed.
- **Coding: 30/100.** **Provisional floor, not a measured score** — no coding benchmark of any kind was found for this model. 30 reflects only the vendor's "GPT-5-class" positioning and its function-calling support; treat it as a placeholder-free guess at the floor, not evidence. Do not compare this axis against SWE-bench-bearing models.
- **Cost efficiency: 30/100.** Text is $4.00/$24.00 per 1M (blended ~$9 at 3:1 in:out) and audio is $32.00/$64.00 per 1M — by far the priciest route evaluated here, above the ~$10/$50 band that maps to ~30. No free tier exists, and audio output is 8× the price of text output, so any sustained voice session burns tokens fast.
- **Overall Score: 69.4/100.** Mean of the five quality dims: (78 + 88 + 55 + 96 + 30) / 5. **Best fit: a dedicated voice-agent surface** — reception, in-car, call handling, or live translation-adjacent flows where audio out is the product. It is a poor fit for text work: no Chat Completions or Responses route, a 2024-09 knowledge cutoff, a 128K window, no coding evidence, and the highest token prices in the set. Pair it with a text model rather than treating it as a general-purpose replacement.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-26
- Method: public internet research (OpenAI model docs and launch blog, Artificial Analysis, Scale AI, Coval, AINews); scores are normalized 1–100 interpretations, not official vendor scores. Every number above carries its source; missing rows are stated as "no verified public score found" rather than estimated.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
