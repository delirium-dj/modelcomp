# GPT 5.2 — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.2 (`opencode/gpt-5.2`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.2 (thinking)
- **Short description:** OpenAI's mid-line GPT-5.2 reasoning model — strong contest math (AIME 99%, FrontierMath) and solid SWE-bench, but a very high Omniscience hallucination rate (81.2%) and thin, partly third-party benchmark coverage.
- **Provider / access:** OpenAI API / ChatGPT (`gpt-5.2`), also surfaced on OpenCode Zen (`opencode/gpt-5.2`). Reasoning (thinking) + tool calls.
- **Release / knowledge:** late 2025 / early 2026 (OpenAI "Introducing GPT-5.2"); knowledge cutoff not disclosed.
- **IDs:** `opencode/gpt-5.2` / OpenAI `gpt-5.2`.
- **Context window:** BenchLM lists **400K**; curated `meta.json` says "128K total" — conflict, resolved in favour of the BenchLM 400K figure.
- **Modalities:** BenchLM rows include grounded/vision results (MMMU-Pro, CharXiv, MathVision, V*), so image-in despite curated `meta.json` "Text in/out"; no audio/video rows. Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (GPT-5-class, exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (27 of 618 rows; 61.92/100, #47 of 645), citing the OpenAI GPT-5.2/GPT-5.4 launch posts, Artificial Analysis, Vals AI, Epoch AI, JobBench, Gert Labs and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall); several rows are third-party comparison tables.

Agent / tool use:

- τ²-bench **84.8%**; BrowseComp 65.8%
- OSWorld-Verified **47.3%**; JobBench 34.3%; Gert Labs 46.5% — agentic cluster is weak/mid

Reasoning / knowledge:

- GPQA-Diamond 92.4/90.3%; **AA-HLE 37.7%** (under the 40% bar); Intelligence Index 30.4; CritPt 11.6%
- AA-LCR **82.7%**; ARC-AGI-2 52.9%
- **Omniscience Index -0.9 / Accuracy 44.3% / Hallucination 81.2%** — extreme confabulation
- AA AIME 2025 **99.0%**; FrontierMath v2 Tiers 1-3 40.7% / Tier 4 18.8% (Epoch AI) — strong math

Coding:

- SWE-bench Verified **80.0%**; SWE-bench Pro 55.6%; Vibe Code Bench 53.5% (no LiveCodeBench/Coding-Index row published)

Multimodal / long context:

- MMMU-Pro 79.5%; MathVision 83.0%; CharXiv 82.1%; V* 75.9%; Design Arena Website 1202
- 400K window (AA-LCR 82.7 supportive; no ≥98% MRCR at length reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 66/100.** τ²-bench 84.8% is solid single-turn tool use, but OSWorld-Verified 47.3%, JobBench 34.3%, BrowseComp 65.8% and Gert Labs 46.5% are mid-to-weak, and no Terminal-Bench 2.1 row supports a higher band.
- **Reasoning: 74/100.** GPQA-Diamond 92.4%, AA-LCR 82.7%, AIME 99.0% and FrontierMath 40.7% are genuinely strong, but HLE 37.7% misses the bar, Intelligence Index 30.4 is low, and an **81.2% Omniscience hallucination rate** (-0.9 index) is the worst factuality profile in this audit — a big reliability drag.
- **Context window: 80/100.** BenchLM's 400K window sits between the 100–200K (50–64) and ≥1M (95–100) bands; AA-LCR 82.7 is supportive but no ≥98% retrieval metric is published, and curated meta conflicts at 128K, so a mid-band placement.
- **Multimodal: 68/100.** Image-in evidence (MMMU-Pro 79.5, CharXiv 82.1, MathVision 83.0, V* 75.9) is a strong +image profile (60–70 band); no audio/video/document rows and curated meta claims text-only, so it stays in the top of the image band.
- **Coding: 70/100.** SWE-bench Verified 80.0% is good, but SWE-bench Pro 55.6%, Vibe Code 53.5% and the absence of LiveCodeBench/Coding-Index rows keep it mid.
- **Cost efficiency: 65/100.** GPT-5-class "standard pricing" is mid-tier; exact per-1M rate not published in curated meta, so provisional. Cost is excluded from Overall.
- **Overall Score: 72/100.** Mean of Tool 66, Reasoning 74, Context 80, Multimodal 68, Coding 70 = 71.6 → 72. Best fit: math-heavy and code-review tasks where an answer is verified against provided context; not for unaided factual recall — the 81.2% hallucination rate and thin coverage make unsupervised claims unreliable, and the 5.4/5.5+ siblings are the matured replacements.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-5.2/GPT-5.4 launch posts plus Artificial Analysis, Vals AI, Epoch AI, JobBench, Gert Labs and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
