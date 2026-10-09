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

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Gemini 3.1 Flash — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-3.1-flash`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's mid-tier Gemini 3.1 workhorse (released 2026-02-26, one week after 3.1 Pro): Flash-latency multimodal inference with 1M context, free tier on AI Studio/Zen; sits above 3.1 Flash-Lite and below 3.1 Pro. Note: the base `gemini-3.1-flash` ID is absent from the current Google active-models list (only `gemini-3.1-flash-lite`, Live, TTS, and Image siblings remain listed) — treat GA status as uncertain/throttled.
- **Provider / access:** Google AI Studio / Gemini API (Chat Completions–style); Vertex AI; OpenCode Zen free tier with standard rate limits. Third-party resellers list `gemini-3.1-flash` and `gemini-3.1-flash-preview`.
- **Release / knowledge:** 2026-02-26 (AI Release Tracker); knowledge cutoff January 2025 (family default).
- **IDs:** `google/gemini-3.1-flash` (variants: `-preview`, `:tool` on resellers).
- **Context window:** 1,048,576 input; 65,536 max output (LLM Atlas / meta).
- **Modalities:** text/image/audio/PDF in; text out; thinking yes; tool calls yes; JSON mode yes; no image/audio generation.
- **Pricing (as of 2026-09-22):** Conflicting public listings — LLM Atlas $0.20 in / $0.60 out per 1M; llmdb.app $0.25 / $1.50 (identical to Flash-Lite, likely conflation); free tier on AI Studio / Zen. Official Google pricing page no longer surfaces a distinct 3.1 Flash row. Treat paid rates as ~$0.20–0.25 / $0.60–1.50 pending confirmation.
- **Architecture:** proprietary (undisclosed params); Gemini 3 multimodal stack.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Tool-calling accuracy: **86/100** (llmdb.app, 2026-04-20 — aggregator composite, not Google-published)
- Terminal-Bench / Tau / GDPval-AA / Claw-Eval / Toolathlon: no verified public score found for plain 3.1 Flash (Google model card not located for this exact ID)

Reasoning / knowledge:

- GPQA: **60.5%** (llmdb.app vetted row — anomalously low vs Flash-Lite's official 86.9%; treat as low-confidence/aggregator artifact)
- MMLU: **86.8%**, MATH: **78.2%**, MT-Bench: **9.0** (llmdb.app; generic-looking values, not Google card)
- LLM Atlas published dimension: reasoning **88/100** (llmatlas.bond composite)
- HLE / ARC-AGI-2 / AA Intelligence Index: no verified public score found for 3.1 Flash specifically (3.1 Pro card reports HLE 44.4%, ARC-AGI-2 77.1% — Pro-tier only)

Coding:

- HumanEval: **88.5%** (llmdb.app)
- LLM Atlas published dimension: coding **84/100**, speed **94/100** (llmatlas.bond)
- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found for plain 3.1 Flash (3.1 Pro: SWE-Verified 80.6%, SWE-Pro 54.2%)

Long context:

- 1M window documented; MRCR v2 retrieval scores for plain 3.1 Flash: no verified public score found (3.1 Flash-Lite sibling: MRCR 128K 60.1%, 1M 12.3% — lower bound proxy only)

Multimodal:

- LLM Atlas published dimension: vision **89/100**, enterprise readiness **87/100**, safety **80/100** (llmatlas.bond)
- MMMU-Pro / CharXiv for plain 3.1 Flash: no verified public score found (siblings: Flash-Lite MMMU-Pro 76.8%, CharXiv 73.2%)

### Normalized scores (1–100)

- **Tool use: 70/100.** Only aggregator tool-calling 86/100 and free-tier API access; no Google-published Terminal-Bench/Tau/GDPval rows for this ID — missing agentic evidence caps it well below 3.5/3.6 Flash.
- **Reasoning: 74/100.** LLM Atlas reasoning 88 suggests solid Flash-class reasoning, but primary Google evals are absent and llmdb GPQA 60.5% (if real) would be a serious deficit; family context (Flash-Lite official GPQA 86.9%) implies mid-to-high 80s is likelier — score held down by verification gap.
- **Context window: 96/100.** 1,048,576 input / 64K output documented and matches the Gemini 3.1 family tier mapping for a true 1M window.
- **Multimodal: 88/100.** Native text/image/audio/PDF in with vision composite 89/100; no video input listed (video-capable siblings score higher) and no MMMU-Pro/CharXiv row for this exact model caps below 90+.
- **Coding: 76/100.** Coding composite 84/100 and HumanEval 88.5% are healthy, but zero SWE-bench / Terminal-Bench / LiveCodeBench official numbers for this ID leave agentic-coding strength unproven.
- **Cost efficiency: 90/100.** Free tier on AI Studio/Zen plus ~$0.20–0.25/$0.60–1.50 paid listing puts it in the high-value Flash band; uncertainty on the official paid rate keeps it just below free-tier-only models.
- **Overall Score: 81/100.** Mean of five quality dims (70+74+96+88+76)/5 = 80.8 → 81. Best-fit: cheap 1M-context multimodal batch/classification/search-augmented workloads where official agentic/reasoning evals are not a hard requirement; prefer 3.5/3.6+ Flash when published Terminal-Bench/SWE evidence matters.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (AI Release Tracker, LLM Atlas, llmdb.app, LMSpeed, Google Gemini API models/pricing docs, DeepMind sibling model cards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

