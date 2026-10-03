# GPT-Realtime-2 — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-realtime-2`
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2
- **Short description:** OpenAI's second-generation speech-to-speech realtime voice model and the first built on what OpenAI calls GPT-5-class reasoning, shipped alongside the Realtime API's exit from beta. Sits in `models_voice/` under the voice-routing rule (realtime voice API). Not a variant of `gpt-realtime-2.1` — that is a later sibling with its own numbers; this file scores only `gpt-realtime-2`.
- **Provider / access:** OpenAI **Realtime API** — endpoint `v1/realtime`, WebRTC and WebSocket transports; also `POST /v1/audio/speech` surfaced for speech generation. Chat-Completions-style text rates are listed separately for the same model (text in / text out). General availability, no beta waitlist, since 2026-05-07. MCP integration and SIP telephony supported.
- **Release / knowledge:** **2026-05-07** (OpenAI "Advancing voice intelligence with new models in the API"; Realtime API graduated from beta the same day). Knowledge cutoff **2024-09-30** (OpenAI model page).
- **IDs:** `openai/gpt-realtime-2`; snapshots/aliases published on the model page. **No OpenCode Zen Free ID.**
- **Context window:** **128,000 tokens** (4× the prior generation's 32K), **32,000 max output tokens** (OpenAI model page). Documented as covering instructions + conversation + audio tokens; no long-context retrieval measurement published.
- **Modalities:** **text and audio in; text and audio out.** Reasoning: **yes**, five configurable effort levels — `minimal`, `low` (default), `medium`, `high`, `xhigh`. Tool calls: **yes**, parallel tool calling with live narration, MCP tools, SIP. Image input is contested: ChatForest lists "image inputs" as a launch feature while DocsBot's model FAQ answers "No" to image support — treat vision as **unverified**. No video input; JSON/structured output via the realtime session config.
- **Pricing (as of 2026-09-28):** **audio** in **$32.00 / 1M**, audio cached in **$0.40 / 1M**, audio out **$64.00 / 1M**; **text** in **$4.00 / 1M**, cached **$0.40 / 1M**, text out **$24.00 / 1M** (OpenAI pricing + model page). Translated to wall-clock, third parties put a typical session at **~$0.10–0.18/min** on default effort and **~$0.20–0.30/min** at high effort (Mejba, ChatForest). Artificial Analysis measured **$4.14 per input-audio hour** for the High configuration. No free tier.
- **Architecture:** proprietary; parameters not disclosed. Single speech-to-speech path (no chained STT→LLM→TTS), voices include Cedar and Marin.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = "no verified public score found".

Agent / tool use:

- τ-Voice (Artificial Analysis agentic voice harness): **39.8%** (High config) / 37.4% (Medium) / 30.4% (Minimal); peers: GPT-Realtime-2.1 High 45.7%, Grok Voice Think Fast 2.0 High 56.5%, GPT-Live-1 (Astra) 67.9%
- Speech Agent Arena task success: **89.8%** (High) / 84.7% (Minimal); Arena Elo **914** (High) / 881 (Minimal)
- Conversational Dynamics (AA, Full Duplex Bench subset): **95.3%** (High), 95.2% (Medium), **96.1%** (Minimal — 3rd-highest on that sub leaderboard), 95.7% for GPT-Realtime-2.1 High
- Tooling support documented (MCP + parallel tool calls + SIP), but **no Terminal-Bench / GDPval / MCP-Atlas / OSWorld score found** for this ID

Reasoning / knowledge:

- Big Bench Audio (speech reasoning): **96.6%** (OpenAI, `high` effort) / **97%** (Artificial Analysis table, High) — tied with Gemini 3.1 Flash Live Preview High for the top of that suite; vs 81.4% for GPT-Realtime-1.5 (+15.2 pp)
- Audio MultiChallenge (multi-turn spoken instruction following): **48.5%** at `xhigh` vs 34.7% for GPT-Realtime-1.5 (+13.8 pp) — Awesome Agents / Mejba reading of OpenAI's chart. **Conflicting figure:** ChatForest reports **70.8% vs 36.7%** for a "Scale AI Audio MultiChallenge S2S" variant. Both are third-party restatements of the same launch chart; harness labels disagree, so neither is treated as canonical.
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / BenchLM: **no verified public score found** (voice-model route; no text-reasoning harness published for this ID)
- Omniscience / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / AA Coding Index: **no verified public score found** — this is a conversational voice model, and no coding harness has published a result for `gpt-realtime-2`
- Closest proxy (provisional): spoken tool-call narration and parallel tool execution are documented, but carry no published pass rate

Long context:

- 128,000-token window documented (up from 32K); MRCR / RULER / GraphWalks / long-context recall: **no verified public score found**

Multimodal:

- Audio in + audio out verified by the product itself; MMMU / MMMU Pro / CharXiv: **no verified public score found**
- Image input: **unverified** (one review says yes, one model FAQ says no)

Latency / speed (supporting, not a scored dim):

- First-audio latency **1.12 s at `low`** rising to **2.33 s at `xhigh`** (Artificial Analysis / Awesome Agents); steady-state response 300–500 ms (Mejba)
- AA time-to-first-audio on the Big Bench Audio subset: **1.14 s** (High), 1.12 s (Minimal) — vs 0.70 s for Grok Voice Think Fast 2.0 High and 1.34 s for GPT-Live-1 (Astra)

### Normalized scores (1–100)

- **Tool use: 76/100.** τ-Voice 39.8% at high effort, Arena task success 89.8% and Elo 914 show a capable production voice agent, and MCP + parallel tool calling with live narration is a real agentic feature set. Capped at 76 because τ-Voice sits below the methodology's ~50%+ frontier anchor and well below GPT-Live-1 (Astra) 67.9% and Grok 56.5%, Arena Elo trails the field, and no Terminal-Bench/GDPval/MCP-Atlas number exists for this ID.
- **Reasoning: 82/100.** Big Bench Audio **96.6–97%** is near-ceiling and tied for the best published result on that suite — reasoning is in-model here, not delegated, which is the whole point of the release. Capped at 82 by Audio MultiChallenge still landing at only 48.5% at `xhigh` (more than half the hardest spoken-instruction tasks missed, and the competing 70.8% reading of the same chart is unreconciled), plus a total absence of GPQA/HLE/AA-Intelligence-Index evidence.
- **Context window: 55/100.** 128,000 tokens sits in the 100K–200K tier (50–64), a genuine 4× jump over the prior 32K but still half of the 1M class. Capped by audio tokens sharing the same window and by no published long-context retrieval score.
- **Multimodal: 95/100.** Native audio in and audio out in a single speech-to-speech path, five reasoning levels and configurable voices — the top of the methodology's "+audio in or any non-text out = 90–100" band. Capped at 95 because image input is contradicted across sources and there is no video path or vision benchmark.
- **Coding: 30/100.** Zero verified public coding scores for this ID — no SWE-bench, LiveCodeBench, SciCode, DeepSWE or Coding Index row anywhere. Held near the floor as an evidence gap, not a measured failure: the model is a conversational voice agent and has never been put in a code harness.
- **Cost efficiency: 50/100.** No free tier, and $32/$64 per 1M audio tokens is the steepest realtime rate in this peer set (text is a saner $4/$24). Artificial Analysis's measured $4.14 per input-audio hour is better than GPT-Realtime-2.1 High ($10.75) and GPT-Live-1 + Astra ($5.83) and marginally under Grok ($4.80), but roughly 3× Gemini 3.8 Live (~$1.38). The 80× cached-audio-input discount ($0.40/1M) is the main relief valve for prompt-heavy agents.
- **Overall Score: 68/100.** (76 + 82 + 55 + 95 + 30) / 5 = 67.6 → 68 — the pick when in-conversation reasoning quality and audio reasoning benchmarks matter and budget is secondary; skip it for cheap commodity voice volume or for anything needing code.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-28
- Method: public internet research (OpenAI launch post and model/pricing pages, Artificial Analysis Speech-to-Speech leaderboard rows, Awesome Agents and Mejba launch-chart restatements, ChatForest review, DocsBot, LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
