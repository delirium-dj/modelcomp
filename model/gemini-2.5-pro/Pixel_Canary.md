# Gemini 2.5 Pro — findings by Pixel Canary

- Source: Google (`opencode/gemini-2.5-pro`, API `gemini-2.5-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro (June 2025 flagship of the 2.x line; **no OpenCode Zen Free ID** — superseded in the catalog by Gemini 3 → 3.8 Flash)
- **Short description:** Google's June 2025 multimodal flagship — 1M-token window with text/image/audio/video/PDF input — that still matters as a reference point but now scores as a legacy model on 2026 harnesses (BenchLM 50.23, #83 of 512) because agentic and coding boards were rebuilt around tool-using models it cannot drive.
- **Provider / access:** Google AI Studio / Gemini API (`google/gemini-2.5-pro`) and Vertex AI (`google-vertex/gemini-2.5-pro`), plus a TTS-only variant (`gemini-2.5-pro-tts`, 32K in / 16K out, text→audio at $1/$20); OpenAI-compatible adapters exist on OpenRouter and gateway resellers.
- **Release / knowledge:** **2025-06-17** public preview launch (models.dev `release_date`); knowledge cutoff December 2024.
- **IDs:** `opencode/gemini-2.5-pro`, `google/gemini-2.5-pro`, `google-vertex/gemini-2.5-pro`; `gemini-2.5-pro-preview-tts` for audio output.
- **Context window:** **1,048,576 input tokens / 65,536 max output** on both Google routes. This folder's `meta.json` ("128K total / Text in-out") is a stale placeholder that misstates both the window and the modality set.
- **Modalities:** Text, image, audio, video and PDF in; text out — the widest input surface of any model in this repo's legacy tier. Reasoning: BenchLM classifies the scored configuration as **Non-Reasoning** (the thinking-budget variant is a separate configuration), tool calling and structured output supported.
- **Pricing (as of 2026-09-29):** **$1.25 / 1M input, $10.00 / 1M output, $0.125 cached input** up to 200K tokens; above 200K Google charges **$2.50 / $15.00**. Audio input is billed separately ($1.00 / 1M audio tokens ≈ 1.64 min).
- **Architecture:** proprietary, weights unpublished; parameter count never disclosed.

### Raw benchmarks found

BenchLM profile `gemini-2-5-pro` (updated 2026-09-28) — composite **50.23/100, rank #83 of 512**. These are *current-harness* re-measurements of a 2025 model, which is why several numbers look catastrophic relative to its launch-era report.

Agentic / tool use:

- GDPval-AA: **616 Elo / 0.0% normalized** — effectively last on the 2026 professional-work board
- AA Agentic Index: **3.5%** — the weakest agentic result of any frontier-branded model checked for this repo
- No Terminal-Bench, Toolathlon, τ²-bench, OSWorld or MCP Atlas row is published for this ID

Coding:

- SWE-bench Verified: **63.8%** (Vals harness **54.4%**)
- AA Coding Index: **33.3%**; AA-SciCode: 46.3%; Vibe Code Bench: **0.40%** (the harness's app-building tasks are essentially unsolved by this model)

Reasoning / knowledge:

- GPQA: **83.0%** (AA-GPQA Diamond 84.4%); HLE: **18.8%** (AA-HLE 22.5%)
- Artificial Analysis Intelligence Index: **16.1**; CritPt: **2.6%**; FrontierMath v2 Tiers 1–3: 14.1%, Tier 4: 4.2%
- AA-IFBench: **48.7%**
- AA-Omniscience: Accuracy **39.1%**, Hallucination Rate **90.9%**, Index **−16.3** — the worst honesty profile measured in this repo so far

Long context:

- AA-LCR: **69.0%** — still respectable at 1M depth; MRCRv2 / RULER / GraphWalks: no verified public score found for this ID

Multimodal:

- AA-MMMU-Pro: **74.9%**; Design Arena (website Elo): **1175**
- Audio/video input is supported by the API but no audio or video benchmark row is published for this ID on BenchLM

### Normalized scores (1–100)

- **Tool use: 18/100.** AA Agentic Index 3.5% and GDPval-AA 616 Elo (0.0% normalized) are the weakest agentic results recorded anywhere in this repo, and no Terminal-Bench, Toolathlon, τ²-bench, OSWorld or MCP Atlas row exists for the ID — it was designed before tool-using harnesses existed.
- **Reasoning: 42/100.** GPQA 83.0% (AA-GPQA Diamond 84.4%) is still respectable, but AA Intelligence Index 16.1, HLE 18.8%, CritPt 2.6%, FrontierMath Tier 4 4.2%, AA-IFBench 48.7% and an Omniscience Index of **−16.3** (39.1% accuracy, 90.9% hallucination) put it far below any 2026 frontier tier.
- **Context window: 66/100.** The 1,048,576-token window is real and AA-LCR 69.0% shows usable depth, but output is capped at 65,536, inputs above 200K jump to $2.50/$15.00, and no MRCRv2/RULER/GraphWalks curve is published for this ID.
- **Multimodal: 64/100.** Text, image, audio, video **and** PDF input — the widest input surface in this repo's legacy tier, plus a TTS variant for audio output — with AA-MMMU-Pro 74.9% as the only measured comprehension row; capped because no video or audio benchmark row exists and output is text-only apart from TTS.
- **Coding: 38/100.** SWE-bench Verified 63.8% (Vals harness 54.4%) and AA Coding Index 33.3% are legacy-era numbers, AA-SciCode 46.3% is middling, and Vibe Code Bench 0.40% means it cannot complete the harness's app-building tasks at all.
- **Cost efficiency: 45/100.** $1.25 / $10.00 with $0.125 cache reads looks cheap until the >200K tier ($2.50 / $15.00) and separate audio billing are included; there is no free ID, and four newer Gemini tiers now beat it on capability per dollar.
- **Overall Score: 45.6/100.** (18 + 42 + 66 + 64 + 38) / 5 = 45.6 — keep it only as a multimodal-input reference point or for its audio/PDF surface; for anything agentic or code-writing it has been comprehensively superseded.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `gemini-2-5-pro` refreshed 2026-09-28, models.dev pricing/limits for `google/gemini-2.5-pro` and the `gemini-2.5-pro-tts` variant, Google's June 2025 launch announcement and December-2024 cutoff statement); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
