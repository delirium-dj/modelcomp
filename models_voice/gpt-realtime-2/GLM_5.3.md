# GPT-Realtime-2 — findings by GLM 5.3

- Source: OpenAI (`gpt-realtime-2`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-Realtime-2
- **Short description:** OpenAI's speech-to-speech realtime voice model for the Realtime API, with configurable reasoning effort, stronger instruction following, and more reliable tool use for complex voice-agent workflows. Top use case: legacy-style realtime voice agents on `v1/realtime` (superseded for new full-duplex builds by GPT-Live-1, which OpenAI says gained 30 points over the GPT-Realtime-2.1 line on Full Duplex Bench).
- **Provider / access:** OpenAI Realtime API only (`v1/realtime`); no Live/Chat-Completions/Responses route.
- **Release / knowledge:** knowledge cutoff 2024-09-30 (official model page); release date not stated on the page.
- **IDs:** `gpt-realtime-2` (single snapshot, no aliases). A GPT-Realtime-2.1 revision is tracked separately by aggregators; sibling rows are marked below.
- **Context window:** 128,000 tokens; 32,000 max output (official model page).
- **Modalities:** text, audio, image input; text and audio output; speech-to-speech; reasoning token support with configurable reasoning effort; function calling; prompt caching.
- **Pricing (as of 2026-09-25):** per 1M tokens — text $4.00 in / $0.40 cached / $24.00 out; audio $32.00 in / $0.40 cached / $64.00 out; image $5.00 in / $0.50 cached. Predecessor GPT-Realtime-1.5 lists $4/$0.40/$16 (cheaper output). No free tier.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> Only one benchmark row could be verified for the exact `gpt-realtime-2` ID; sibling GPT-Realtime-2.1 rows (Artificial Analysis via xAI's launch table) are listed separately as variant context, not own-ID evidence.

Agent / tool use:

- τ³-Banking (vendor launch chart citing Sierra, via DataCamp 2026-09-17): **10.3%** — lowest on the compared board (vs Gemini 3.8 Live Extended Thinking 35.1%, GPT-Live-1 Astra 32.0%, Grok Voice Think Fast 2.0 16.5%, Gemini 3.1 Flash Live 11.3%)
- Function calling and configurable reasoning effort: verified supported features (official model page)
- Terminal-Bench / GDPval-AA / Claw-Eval: no verified public score found (voice model; not evaluated)
- Sibling GPT-Realtime-2.1 (High), AA via xAI: τ-Voice **45.7%**, Full Duplex Bench **95.7%** (variant context)

Reasoning / knowledge:

- Reasoning token support with configurable effort (official docs; higher effort raises latency and output usage)
- GPQA Diamond / HLE / AA Speech-to-Speech Index / Big Bench Audio: no verified public score found for this ID
- Sibling GPT-Realtime-2.1 (High), AA via xAI: Speech-to-Speech Quality Index **79.1%**, Big Bench Audio **96.0%** (variant context)

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: no verified public score found for the voice model

Long context:

- No long-context retrieval reported; 128K is an official capacity spec

### Normalized scores (1–100)

> Thin own-ID benchmark coverage (one τ³-Banking row); sibling-2.1 AA rows corroborate direction. Scores are provisional.

- **Tool use: 55/100.** τ³-Banking 10.3% sits at the bottom of the September voice-agent board (mid-band floor per the Tau3 10–25% mapping); function calling and configurable effort are verified protocol capabilities, and the 2.1 sibling's τ-Voice 45.7% suggests moderate agentic reliability.
- **Reasoning: 58/100.** Reasoning tokens with configurable effort are native; the 2.1 sibling's S2S 79.1% and Big Bench Audio 96.0% indicate strong spoken-reasoning quality, but no own-ID reasoning rows exist and the Sep-2024 knowledge cutoff is stale for a 2026 deployment.
- **Context window: 55/100.** 128,000 tokens / 32,000 output = 100K–200K tier (50–64 band), official spec; no measured retrieval quality.
- **Multimodal: 88/100.** Text, audio, and image in; text and audio out — speech-to-speech with image support (audio in + non-text out, top band); no video.
- **Coding: 45/100.** No coding benchmark exists for this voice model; provisional family-proxy score capped by zero direct rows.
- **Cost efficiency: 45/100.** Audio at $32/$64 per 1M tokens works out to roughly $5.8 per hour of full-duplex conversation — among the pricier realtime routes (GPT-Live-1's Astra pairing measured $5.83/hour; Gemini 3.8 Live base is $0.84); text $4/$24 is mid-high; no free tier.
- **Overall Score: 60/100.** (55 + 58 + 55 + 88 + 45) / 5 = 60.2 → 60. Best-fit: a legacy realtime speech-to-speech endpoint worth keeping only for existing `v1/realtime` integrations; new full-duplex voice-agent builds should default to GPT-Live-1 or Gemini 3.8 Live.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (OpenAI model/pricing docs, vendor benchmark chart via DataCamp, sibling-variant AA rows via xAI launch table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
