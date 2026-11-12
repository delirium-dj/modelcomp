# Gemini 2.5 Pro — findings by Qwen 4 Max

- Source: Vendor (Google DeepMind) + independent trackers; subject slug `gemini-2.5-pro`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemini 2.5 Pro (GA `gemini-2.5-pro`; preview `gemini-2.5-pro-exp-03-25` / preview-05-06 lineage)
- **Short description:** Google's first "thinking" flagship — reasoning built into the model before responding; debuted #1 on LMArena (Mar 2025) and led math/science/coding benchmarks of its era. Now two generations old and deprecated.
- **Provider/access:** Google AI Studio / Gemini API / Vertex AI; Gemini app (Advanced at launch). **Deprecated**: no longer selectable in AI Studio; API access to 2.5 models limited to existing users (official docs); AA banner points to Gemini 3 Pro Preview as successor; 2 AA-tracked providers remain.
- **Release/knowledge:** Experimental preview March 25 2025 (blog updated Mar 26 with MRCR evals); GA June 5 2025 (AA; widely reported June 17 GA pricing — AA date used). Knowledge cutoff January 1 2025.
- **IDs:** `gemini-2.5-pro`, `gemini-2.5-pro-exp-03-25` (deprecated OpenRouter experimental endpoint).
- **Context window:** 1M tokens (1,048,576 per third-party spec sheets); max output 65,536; 2M "coming soon" at launch never shipped for 2.5 Pro. **>200K prompts billed at 2× ($2.50/$15)**.
- **Modalities:** Text + image + speech/audio + video in (native multimodal, incl. PDF/code repos); text out. TTS variant tracked separately (`gemini-2.5-pro-preview-tts`, 8K ctx — different SKU, not scored here).
- **Pricing (as of 2026-11-12, per 1M tokens):** $1.25 in / $10.00 out ≤200K; $2.50/$15.00 >200K; 90% cache discount (~$0.13 hit); AA blended $1.34 (7:2:1); Batch ~50% (Vertex). Access restricted to existing API users.
- **Architecture:** Proprietary thinking model; parameters undisclosed. AA tracks the **reasoning** version; BenchLM labels "Non-Reasoning" — classification conflict labelled (2.5 Pro is a thinking model per official blog; thinking budget configurable).

### Raw benchmarks found

Vendor-reported (Google launch blog + DeepMind model page, via BenchLM citation; harness = vendor):
- SWE-bench Verified 63.8 (custom agent setup), HLE 18.8 (no tools — SOTA at launch), GPQA 83 (DeepMind page; launch blog claims GPQA/AIME 2025 leadership without majority voting), AIME 2024 92 (Phi-4-reasoning-plus peer table), MRCR evaluations added Mar 26 2025 (values in blog image, not machine-readable). #1 LMArena at debut.

Independent runs:
- Artificial Analysis (reasoning; live index N/A — deprecated): historical Intelligence Index 16.1; GPQA-D 84.4, AA-HLE 22.5, LCR 69.0, CritPt 2.6, τ²-bench 54.1, AA Agentic Index 3.5, GDPval-AA 616 Elo (0.0% normalized), AA Coding Index 33.3, SciCode 46.3, LiveCodeBench 80.1, MMMU-Pro 74.9, IFBench 48.7, MMLU-Pro 86.2, Global-MMLU-Lite 90.3, MATH-500 96.7, Omniscience −16.3 (accuracy 39.1, **hallucination 90.9%**). Live performance: 109 tok/s, TTFT 18.11s.
- Vals AI: SWE-bench 54.4, Vibe Code Bench 0.40. Gert Labs 42.01. Epoch FrontierMath v2: Tiers 1–3 24.561, Tier 4 0.000. Design Arena (Website) 1163 (OpenRouter).
- BenchLM aggregate: 48.92/100, #104 of 1026 (33/815 rows, partial coverage, conservative).

### Normalized scores (1–100)

- **Tool use: 62/100.** τ² 54.1 was respectable for 2025, but modern agentic evals collapse: AA Agentic Index 3.5, GDPval-AA 616 (0% normalized) — far below Gemini 3 Flash and every current frontier model.
- **Reasoning: 72/100.** Launch-era SOTA (GPQA 84.4, HLE 18.8 no-tools, AIME 92, MATH-500 96.7) ages to mid-tier: AA-HLE 22.5, CritPt 2.6, FrontierMath v2 24.6/0, and Omniscience −16.3 with 90.9% hallucination — severe reliability penalty.
- **Context window: 76/100.** 1M with LCR 69.0 (decent) but 65,536 output cap, 2× surcharge >200K, and no compaction — below Sonnet 4.6 (84, same LCR band, no surcharge).
- **Multimodal: 76/100.** Native text+image+audio+video input is broad, but the only strong independent row is MMMU-Pro 74.9; no video/audio eval coverage in the tracked set; Design Arena 1163 modest.
- **Coding: 68/100.** SWE-V 63.8 vendor / 54.4 Vals, AA Coding Index 33.3, Vibe 0.40 — superseded by Gemini 3 Flash (SWE-V 78) and all current models; LiveCodeBench 80.1 and SciCode 46.3 keep it usable for non-agentic code.
- **Cost efficiency: 76/100.** $1.25/$10 with 90% cache (blended $1.34) and 109 tok/s is cheap per token, but >200K doubles the rate, TTFT 18.1s, and deprecation + existing-users-only access cap practical value.
- **Overall Score: 70.8/100.** Mean of the five quality dimensions (Cost excluded): (62+72+76+76+68)/5 = 70.8. A historic March-2025 SOTA thinking model, now two generations behind: agentic collapse and 90.9% hallucination dominate the current assessment.

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Google official launch blog, Artificial Analysis, BenchLM, AI Studio docs deprecation notice, third-party pricing sheets); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: reasoning classification (BenchLM "Non-Reasoning" vs AA "Reasoning: Yes" vs official thinking-model blog); release date (Mar 25 preview vs June 5 AA GA); context (1M official vs 1.05M spec sheets); GPQA (83 vendor vs 84.4 AA); HLE (18.8 vendor no-tools vs 22.5 AA); SWE-V (63.8 vendor custom-agent vs 54.4 Vals); AA index (N/A live vs 16.1 historical — version unstated).
- Reference URLs:
  - [Gemini 2.5: Our most intelligent AI model — Google blog](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/)
  - [Gemini 2.5 Pro — Artificial Analysis](https://artificialanalysis.ai/models/gemini-2-5-pro)
  - [Gemini 2.5 Pro Benchmark Scores — BenchLM](https://benchlm.ai/models/gemini-2-5-pro)
  - [Models (deprecation notice) — Gemini API docs (via search snippet)](https://aistudio.google.com/docs/models)
  - [AI API Pricing 2026 (>200K tier) — userightai (via search snippet)](https://www.userightai.com/pricing)
  - [Gemini News & Updates (spec sheet) — i10x (via search snippet)](https://i10x.ai/news/product/gemini/page/21)
  - [Gemini Pro model page — Google DeepMind (via BenchLM attribution)](https://deepmind.google/models/gemini/pro/)
  - [Vals AI — Gemini 2.5 Pro (via BenchLM attribution)](https://www.vals.ai/models/google_gemini-2.5-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.