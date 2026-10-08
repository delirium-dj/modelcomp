# Gemini 3.1 Flash — findings by MiMo 2.6 Flash

- Source: existence audit across 8 independent catalogs (Artificial Analysis, BenchLM, OpenRouter, models.dev, OpenCode Zen, Google AI Studio docs/pricing, Google DeepMind model cards, DuckDuckGo index), repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Existence warning (primary finding of this report).** No public text model
> named **"Gemini 3.1 Flash"** could be found in any catalog as of 2026-10-07.
> Every score below is therefore **speculative and derived from `meta.json` alone
> plus family context** — not from measured capability.

## Model card

- **Name (per repo meta):** Gemini 3.1 Flash — "Google's efficient 3.1 Flash model, balancing speed, capability, and cost"; id `google/gemini-3.1-flash`.
- **Existence audit (all checked 2026-10-07):**
  - **Artificial Analysis** — model page 404; the full AA model index lists only **Gemini 3.1 Flash-Lite** and **Gemini 3.1 Pro Preview** from the 3.1 generation (plus Gemini 3 Flash Preview).
  - **BenchLM** — model page 404.
  - **OpenRouter API** — no `google/gemini-3.1-flash`; only `3.1-flash-lite`, `3.1-flash-image` (Nano Banana 2), and their preview/batch variants.
  - **models.dev registry (40+ providers)** — every `3.1-flash*` id is **-lite / -image / -live / -tts**; no plain text `gemini-3.1-flash` under any provider namespace.
  - **OpenCode Zen API** — gemini catalog has `gemini-3.1-pro` but **no `gemini-3.1-flash`** — directly contradicting meta's "free tier … on OpenCode Zen."
  - **Google AI Studio / Gemini API docs** — doc page `…/models/gemini-3.1-flash` **404** (Flash-Lite page 200); the model list and the pricing page contain **Gemini 3.1 Flash-Lite, 3.1 Pro, Flash Live, Flash TTS, Flash Image** — no plain Flash.
  - **Google DeepMind model cards** — 3.1 generation cards: **Flash Audio, Flash Image, Flash-Lite (Image), Pro**; direct card `gemini-3-1-flash` 404.
  - **Web index** — searches surface only Live/Image/Lite/Pro variants.
- **What this suggests:** the queue entry describes a model that was announced or stubbed but **never shipped under that name** (the 3.1 tier's efficiency slot went to **Gemini 3.1 Flash-Lite**, queued separately at 75.7), or it is a stale alias. Availability claims in meta (AI Studio + Zen free tier) are currently **false for Zen** (live catalog has no such id).
- **Spec (uncorrected, from meta — curated project data):** 1,048,576 (1M) context; **text, image, audio, PDF in; text out**; free tier + "Paid-tier pricing" (no numbers published anywhere).

### Raw benchmarks found

> **None.** Zero benchmark rows exist for this id in AA, BenchLM, Vals,
> OpenRouter or any other source consulted. The rows below are the only
> adjacent evidence and are NOT measurements of this model.

Family context (not this model's scores):

- Gemini 3 Flash Preview (AA): index **26\* estimated** — the predecessor tier's reasoning reading.
- Gemini 3.1 Flash-Lite (AA): index 16 on current v4.3.2 (25 on older re-basing), $0.25/$1.50, 1M, HLE 17, SciCode 43, LCR 74 — the sibling that *does* exist.
- Gemini 3.1 Pro Preview (AA): index 30, $1.74/$12.
- Own prior reports: Gemini 3 Flash **83**, Gemini 3.5 Flash **86**, Gemini 3.1 Flash-Lite is queued separately.

### Normalized scores (1–100)

> All six scores are **speculation from an unverifiable spec sheet**; maximum
> uncertainty discount applied to every capability dimension.

- **Tool use: 65/100.** No agentic benchmark of any kind; unverifiable model → absence band.
- **Reasoning: 65/100.** No GPQA/HLE/index exists; the predecessor tier (Gemini 3 Flash, index 26\*) is the only anchor and it is not this model.
- **Context window: 93/100.** 1M per curated meta — 1M band with zero retrieval evidence, as if a real model had no LCR row.
- **Multimodal: 90/100.** text+image+**audio**+PDF per meta → audio-in band (90–100) by the modality table; entirely unverified.
- **Coding: 62/100.** No SWE/SciCode/Coding-Index/Terminal-Bench row; absence band.
- **Cost efficiency: 85/100** (excluded from Overall). "Free tier" claim would be top-band, but it is already **falsified for Zen**, pricing is an unfilled placeholder, and the model is unlisted — so mid-80s only.
- **Overall Score: 75/100.** (65+65+93+90+62)/5 = 75.0 → 75 — this entry scores the absence of evidence: a spec sheet with no catalog presence, no benchmark, and a free-tier claim that the live Zen catalog contradicts. **Recommend the orchestrator verify whether `gemini-3.1-flash` should exist at all** (nearest real successor: Gemini 3.1 Flash-Lite, queued separately).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — an explicit **existence audit** (AA model page 404 + full AA index, BenchLM 404, OpenRouter models API, models.dev provider registry, OpenCode Zen API, Google AI Studio model list/pricing/docs (404 on direct doc page), DeepMind model-card index (404 on direct card), DuckDuckGo Lite index), all performed 2026-10-07; plus repo meta as the only spec of record and family context from own Gemini 3 Flash (83) / 3.5 Flash (86) reports. Scores are normalized 1–100 interpretations, not official vendor scores — and here they interpret **absence of a verifiable model**, which is flagged at the top of the report; the queue line (78.4) is not treated as evidence.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
