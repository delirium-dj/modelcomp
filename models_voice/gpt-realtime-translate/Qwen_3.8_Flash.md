# GPT Realtime Translate — findings by Qwen 3.8 Flash

- Source: OpenAI (`opencode/gpt-realtime-translate`) — voice mirror tree
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT Realtime Translate
- **Short description:** OpenAI's **first purpose-built live speech-translation model** (added to the Realtime API 2026‑05‑07/08). Translates **speech from 70+ input languages into 13 output languages** in streaming fashion, preserving speaker voice/timing; it waits for verb-position keywords before emitting, for more natural dialogue. A single-function MT endpoint, not a conversational/reasoning model.
- **Provider / access:** OpenAI Realtime API; Azure OpenAI hosted route.
- **IDs:** `opencode/gpt-realtime-translate` (meta).
- **Context window:** curated `meta.json` is a **scaffolded stub** ("128K total", "Text in/out", "Standard pricing") — placeholder; it's an audio-in/audio-out streaming endpoint.
- **Modalities (verified):** audio in → audio out (translated speech), streaming.
- **Pricing:** ~$0.034 (duration-billed; Azure/OpenAI bill by audio duration). Stub "Standard pricing" placeholder.

### Raw benchmarks found (exact-ID)

- **Livelingo measured harness:** dedicated `gpt-realtime-translate` **"covered 98 %" at 3.33 s flat** on the test audio (coverage + latency for the exact model).
- **VoiceFrom head-to-head (independent, 5 platforms, 8 language pairs, WMT-grade quality metric):** a purpose-built competitor (**VoiceFrom Interpret**) is **substantially more accurate** than GPT‑Realtime‑Translate on average across 8 pairs, while **OpenAI's median latency is faster**. i.e., mid-tier translation quality, strong latency.
- No single absolute COMET/BLEU figure published for the exact ID; the independent result is comparative (beaten on quality, ahead on latency).

### Normalized scores (1–100)

> **Poor-fit specialist** (like `jev-1.13`): a streaming MT endpoint is not a general LLM, so Reasoning/Tool/Coding are near-absent by design and Multimodal (audio in+out) dominates. Scored honestly low on the generative rubric — the low Overall is a rubric mis-fit, **not** a quality verdict. Overall = half-up mean of five quality dims, Cost excluded.

- **Tool use: 15/100.** No agentic tool surface; a translation call in a pipeline. Floor.
- **Reasoning: 18/100.** Live translation is not a reasoning task; the "waits for verb position" behavior is contextual, not reasoning. Provisional floor.
- **Context window: 45/100.** Streaming chunked audio; stub 128K unverified. Provisional.
- **Multimodal: 90/100.** Audio in → audio out across 70+→13 languages with voice preservation — top band (audio in + non-text out). Its genuine strength; **quality capped** by the independent finding that it trails dedicated interpreters on WMT-grade accuracy.
- **Coding: 10/100.** None. Floor.
- **Cost efficiency: good.** ~$0.034 duration-billed; fast. Excluded from Overall.
- **Overall Score: 36/100.** Mean of Tool 15, Reasoning 18, Context 45, Multimodal 90, Coding 10 = 178/5 = 35.6 → **36**. Best fit: **live bilingual voice interpretation / translated calls** where low latency matters more than stage-grade accuracy. Not a reasoning or coding model — read the 36 as "narrow specialist, poor generative-rubric fit."

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥3 qualifying acquisitions (OpenAI "Advancing voice intelligence" launch details via search, Livelingo measured-latency writeup, VoiceFrom independent WMT-grade head-to-head, Azure/digitalapplied pricing). Scored on the exact-ID measured coverage/latency (98 % / 3.33 s) + independent comparative quality finding. Flagged: (a) **no absolute COMET/BLEU** published — quality is comparative (trails VoiceFrom, beats on latency); (b) **scaffolded stub meta wrong** (modality/pricing placeholders superseded — maintainer to replace); (c) **poor generative-rubric fit** — a single-function MT endpoint, low Overall is honest.
- Revisit trigger: OpenAI or a third party publishes an absolute translation-quality score (COMET/BLEU) for `gpt-realtime-translate`.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
