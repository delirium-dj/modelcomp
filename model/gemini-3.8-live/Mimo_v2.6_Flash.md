# Gemini 3.8 Live — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-3.8-live`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Live
- **Short description:** Google's default low-latency speech-to-speech Live API model (2026-09-15) — audio-to-audio dialogue with interleaved reasoning, async function calling, visual grounding, 97 languages; Extended Thinking sibling ranks #1 on AA Speech-to-Speech leaderboard. Powers Search Live and developer voice agents.
- **Provider / access:** Gemini API / Google AI Studio `gemini-3.8-live` (Live API, not Chat Completions); Gemini App; Search Live; Gemini Enterprise (private preview paths); partners Agora/LiveKit/Pipecat/Vercel/etc. Free AI Studio unpaid quota (data may feed product development until billing enabled).
- **Release / knowledge:** 2026-09-15 (Google blog + DeepMind audio model card); knowledge cutoff not separately restated for Live (inherits 3.8 family).
- **IDs:** `gemini-3.8-live` (and sibling `gemini-3.8-live-extended-thinking`).
- **Context window:** **131,072** input (128K session) / **65,536** output per API docs (meta: 131K per session / 65K out). DeepMind card: 128K in / 64K out.
- **Modalities:** text/image/video/audio in; **text + audio out**; audio generation yes; interleaved thinking yes; async (NON_BLOCKING) function calling; Search grounding; proactive audio permanently on; **no** structured outputs, no caching, no code execution, no image gen on this ID.
- **Pricing (as of 2026-09-22):** Meta: free AI Studio unpaid quota; paid **text $0.75 / $4.50 per 1M**, **audio $3 / $12 per 1M**. Google dev blog also quotes Live-style **$0.005/min audio in / $0.018/min audio out** for the 3.8 Live pair — cite both token and per-minute framings.
- **Architecture:** proprietary Gemini 3.8 audio stack (native S2S, not cascaded STT→LLM→TTS); SynthID watermarking on generated audio.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Google blog/model card 2026-09-15 unless noted.

Agent / tool use:

- Asynchronous function calling / background tool loops while streaming audio: supported (Google — core product claim; multi-step voice tool reliability narrative vs prior Live)
- ComplexFuncBench Audio: prior 3.1 Flash Live scored **90.8%** (Google 3.1-era card — **not** restated as 3.8 Live's score in sources reviewed; do not attribute 90.8 to 3.8 Live)
- Tau / MCP-Atlas / OSWorld text-agent boards: no verified public score found for 3.8 Live (wrong surface — Live API)

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index for 3.8 Live specifically: no verified public score found (Live focuses on dialogue latency + tool orchestration; Extended Thinking sibling is the high-reasoning variant)
- Extended Thinking sibling: **#1 on Artificial Analysis Speech-to-Speech leaderboard** (Google claim for the pair's higher tier — attribute to Extended Thinking, not base 3.8 Live)

Coding:

- Terminal-Bench / SWE-bench / DeepSWE: no verified public score found (voice product surface)

Long context:

- 128K session window; MRCR-style retrieval: no verified public score found

Multimodal:

- Native audio/video/image/text in with audio+text out — full real-time multimodal Live stack; 97 languages mid-conversation switching; visual near-real-time grounding (Google)
- Speech-to-speech human preference: Scale AI Voice Showdown had **not yet included** 3.8 Live at launch coverage (Applied AI Tools note) — no independent S2S arena rank extracted for 3.8 Live itself beyond Google's Extended-Thinking #1 claim
- Prior-gen ComplexFuncBench 90.8% / Audio MultiChallenge 36.1% / BigBench Audio 95.9% belong to **3.1 Flash Live**, not 3.8 Live

### Normalized scores (1–100)

- **Tool use: 74/100.** Async non-blocking tool calls + background execution while talking is best-in-class Live tool UX on paper; no Tau/MCP/GDPval-style public % for 3.8 Live yet — product capability strong, independent agentic scores missing.
- **Reasoning: 68/100.** Interleaved thinking on base Live; high-reasoning work is steered to Extended Thinking sibling (AA S2S #1 claim); no GPQA/HLE for base 3.8 Live — mid reasoning by design for latency.
- **Context window: 62/100.** 128K session / 64K out is healthy for voice sessions (2× thread length claims vs prior gen) but far below 1M chat tiers; no long-context retrieval curve.
- **Multimodal: 94/100.** True real-time text+image+video+audio in with audio+text out, 97-language switching, visual grounding, SynthID — top-band Live multimodal (per-minute audio billing and no structured-output mode are product quirks, not coverage gaps).
- **Coding: 30/100.** Not a coding product surface; no SWE/TB/LiveCodeBench rows for this ID — scored low for the dimension, not because voice tooling is weak.
- **Cost efficiency: 70/100.** Free AI Studio unpaid quota helps evaluation; paid path is dual-metered (text $0.75/$4.50 + audio $3/$12, or ~$0.005/$0.018 per minute) — competitive for native S2S vs cascades but audio rates add up fast on long calls; free-tier privacy caveat until billing enabled.
- **Overall Score: 66/100.** Mean of five quality dims (74+68+62+94+30)/5 = 65.6 → 66. Best-fit: production voice agents and Search-Live-style real-time assistants that need async tools + vision while talking — not a general text/coding model; choose `gemini-3.8-live-extended-thinking` when multi-step reasoning mid-call matters more than pure latency.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Google blog 2026-09-15 Live launch + developer build post, DeepMind Gemini 3.8 Audio model card, Gemini API `gemini-3.8-live` / extended-thinking docs, DeepMind live-dialogue model info); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
