# Grok Voice Think Fast 2.0 — findings by Kimi K3

- Source: xAI (`grok-voice-think-fast-2.0`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Voice Think Fast 2.0
- **Short description:** xAI's flagship speech-to-speech voice model that reasons in parallel with speech — #1 on Artificial Analysis's Speech-to-Speech Quality Index at launch, with transcription accuracy beating dedicated STT models and a ~60% cut in reasoning tokens vs 1.0.
- **Provider / access:** xAI Voice API (console.x.ai voice agents), speech-to-speech per xAI docs; `grok-voice-latest` alias moved from 1.0 → 2.0 on 2026-08-05 (no prompt edits needed for migration).
- **Release / knowledge:** Released 2026-07-29 (xAI newsroom). Knowledge cutoff not publicly stated.
- **IDs:** `grok-voice-think-fast-2.0` (alias `grok-voice-latest` since 2026-08-05). No Zen ID.
- **Context window:** no verified public figure found (voice session context not published by xAI).
- **Modalities:** Audio (+text) in; audio out, reasoning-while-speaking; tool calls yes (production-verified tool use within first sentence of replies).
- **Pricing (as of 2026-09-27):** $0.08 per minute of audio, flat (xAI launch post + docs pricing page). 1.0 was $0.05/min.
- **Architecture:** Proprietary end-to-end S2S voice model with inline reasoning; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ-voice Bench (agentic performance): **56.5%** — best in xAI's AA comparison table (1.0: 52.1%, GPT-Realtime-2.1 High: 45.7%, Gemini 3.1 Flash High: 37.7%)
- Terminal-Bench / GDPval / Claw-Eval: no verified public score found (not applicable to voice surface)

Reasoning / knowledge:

- Big Bench Audio (speech reasoning): **97.2%** (vs GPT-Realtime-2.1 High 96.0%, Gemini 3.1 Flash High 96.6%)
- Full Duplex Bench (conversational dynamics): **95.1%** (vs 1.0's 77.8%; GPT-Realtime-2.1 95.7%)
- AA Speech-to-Speech Quality Index: **82.9% — #1** (1.0: 75.7%, GPT-Realtime-2.1 High: 79.1%, Gemini 3.1 Flash High: 69.5%) — Artificial Analysis, via xAI launch post
- GPQA / HLE / LCR / Intelligence Index: no verified public score found (voice model, not run on text suites)

Coding:

- All rows: no verified public score found (voice-first model, no coding evals exist)

Long context:

- No long-context retrieval reported; context window unpublished

Other measured numbers:

- Transcription WER: **1.5–2.0× improvement** vs Deepgram Nova 3 and ElevenLabs Scribe v2 (24-language xAI eval), 1.4× vs 1.0; gap grows to **~10× in noisy settings** (vendor eval)
- Time to first audio: **0.70s** (vs 1.25s on 1.0)
- Reasoning tokens per response: **0.4×** the 1.0 P50 baseline (~60% reduction)

### Normalized scores (1–100)

- **Tool use: 75/100.** τ-voice Bench 56.5% leads the voice-agent field by ~11 points over GPT-Realtime-2.1, with tool calls executing inside the first sentence of a reply; capped by absence of non-voice agentic suites.
- **Reasoning: 84/100.** Big Bench Audio 97.2% and S2S Quality Index #1 (82.9%) show top-tier inline reasoning for a voice model; capped by no text-suite corroboration (GPQA/HLE N/A).
- **Context window: 40/100.** Provisional floor — xAI publishes no context-window figure for this model; scored conservatively rather than guessing a tier.
- **Multimodal: 95/100.** Native audio in/out with top-band quality (10× noise-robust WER advantage, Full Duplex 95.1%) — the methodology's 90–100 band for non-text output.
- **Coding: 40/100.** Provisional floor: coding is out of scope for this model and no coding benchmark exists; floored rather than zeroed per no-hallucination policy.
- **Cost efficiency: 90/100.** $0.08/min flat is cheap for S2S (≈ an order below token-metered premium rivals at comparable audio rates) and predictable; 0.4× reasoning-token cut improves effective economics further.
- **Overall Score: 67/100.** (75+84+40+95+40)/5 = 66.8 → 67. Best fit: production voice agents where noisy-channel accuracy, snappy tool use, and conversational quality lead the field — pair with a text model for any coding work.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-27
- Method: public internet research (xAI newsroom launch post + AA benchmark table, pondero.ai/explainx/aitoolsrecap launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
