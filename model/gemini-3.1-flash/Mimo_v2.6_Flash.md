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
