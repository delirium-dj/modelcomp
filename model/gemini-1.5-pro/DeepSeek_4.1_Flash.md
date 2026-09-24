# Gemini 1.5 Pro — findings by DeepSeek 4.1 Flash

- Source: Google / Gemini 1.5 Pro (`gemini-1.5-pro`, API ids `gemini-1.5-pro-001` / `gemini-1.5-pro-002`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (legacy 1.5 generation; the May-2024 "002" revision carries the 2M window)
- **Short description:** Google's long-context multimodal mixture-of-experts model, announced 2024-02-15 as the first frontier model with a 1M-token context window and later extended to 2M tokens. Superseded by the Gemini 2.x/3.x lines; kept here as the 2024 long-context baseline.
- **Provider / access:** Google Gemini API / Vertex AI / AI Studio, ids `gemini-1.5-pro`, `gemini-1.5-pro-001`, `gemini-1.5-pro-002`. `generateContent` REST + SDKs (not Chat Completions); function calling, JSON mode and context caching supported. No Zen Free ID → Paid badge.
- **Release / knowledge:** released 2024-02-15 (Google launch post); 1.5 Pro-002 revision 2024-05-14; the 2M-token window reached general availability 2024-09.
- **IDs:** `google/gemini-1.5-pro` upstream. No free API ID is tracked — AI Studio is the only free surface.
- **Context window:** 1,000,000 tokens at launch, 2,000,000 tokens for the 002 revision (stated by Google Cloud's needle-in-a-haystack write-up and the Gemini 1.5 report).
- **Modalities:** text, image, audio and video in → text out; reasoning by prompting (no reasoning-effort parameter); tool calls and JSON mode; context caching for repeated long prompts.
- **Pricing (as of 2026-09-24):** paid $3.50 / $10.50 per 1M tokens (≤128K prompts), with higher tiers above 128K (Google announced tiers "from the standard 128,000 context window up to 1 million"). Free access exists only as the in-product AI Studio tier, so no free-API data-usage caveat applies.
- **Architecture:** proprietary sparse mixture-of-experts (MoE); parameter count undisclosed; no open weights.

### Raw benchmarks found

Agent / tool use:

- AgentDojo: **65.0%** (BenchmarkList aggregate, 78th percentile, rank 5 of 19)
- Android Control high-level exact match: **41.8%** (BenchmarkList, 43rd percentile); MobileMiniWob++ success rate: **57.4%** (rank 3 of 3, small field)
- BabyAI: **58.4** (BenchmarkList, rank 18 of 32); LLM Game Benchmark: **35.2%**
- Terminal-Bench / Tau2-Bench / GDPval-AA / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA (main): **41.5%** (Feb-2024 card) → **46.2%** (May-2024 card) — official Google model-card numbers as reproduced in Langbase's model-card table
- GPQA Diamond (independent harness): **58.3%** (BenchmarkList, 21st percentile, rank 93 of 117)
- MMLU: **85.9%**; MMLU-Pro: **75.0–75.3%** (BenchmarkList); Big-Bench Hard: **89.2%**; MATH: **67.7%** (official May-2024 card)
- Humanity's Last Exam: **4.9%** (BenchmarkList, rank 334 of 466); HLE text-only: **4.5% ± 0.88**
- Artificial Analysis Intelligence Index: **9.97 / rank 269 of 418** (BenchmarkList snapshot); BenchLM overall: **36 (rank 73 of 106)**; Epoch Capabilities Index: **88.74 (#313 of 398)**
- Hallucination / omniscience: CSimpleQA **56.7%** (rank 7 of 56); no AA-Omniscience or hallucination-rate figure found

Multimodal:

- MMMU: **58.5%** (Feb-2024) → **62.2%** (May-2024); MathVista: **54.7% → 63.9%**; EgoSchema (video QA): **65.1% → 72.2%** (official Google model card)
- FLEURS speech recognition (55 languages): **6.6% → 6.5% WER**; WMT23 translation: **75.2% → 75.3%** (official card)
- Video-MME: **75.0%** without subtitles / **81.3%** with subtitles (BenchmarkList third-party run); CC-OCR: **83.3%** (rank 1 of 16)

Coding:

- LiveCodeBench: **41.7%** (BenchmarkList, 11th percentile, rank 109 of 123)
- SciCode: **29.5%** (BenchmarkList, 46th percentile)
- Natural2Code: **82.6%** (official May-2024 card, leakage-controlled) — BenchmarkList's own harness records **42.3%**, so the official figure is not directly comparable
- HumanEval+: **79.3%**; EvalPlus: **77.0%**; MBPP+: **74.6%** (BenchmarkList)
- SWE-bench Verified / Pro, DeepSWE, Terminal-Bench, Vibe Code Bench: no verified public score found

Long context:

- Single-needle needle-in-a-haystack: **>99.7% recall at 1M tokens** across text, video and audio, holding at **99.2% at 10M tokens** for text (9.7M audio, 9.9M video) — Google Cloud's NIAH write-up (2024-09-11) summarising the Gemini 1.5 report (internal test)
- 100-needle multi-needle retrieval: **>99.7% up to 1M tokens**, 99.2% at 10M (same source) — the same write-up also reports a **60% recall** figure for a harder multi-needle setup, and the Gemini API long-context doc warns that multi-needle accuracy degrades versus the ~99% single-needle expectation
- Long-document QA over the full 710K-token *Les Misérables*: **91.4% AutoAIS / 80.0 AIS human eval** (Gemini 1.5 report, Table 4) versus 84.8 / 78.2 for the same model with only 4K retrieved context
- MRCR / RULER at fixed window lengths: no verified public score found

### Normalized scores (1–100)

- **Tool use: 40/100.** Function calling and JSON mode shipped at launch and agentic rows exist (AgentDojo 65.0%, Android Control 41.8% high-EM, BabyAI 58.4), but there is no Terminal-Bench, Tau2, GDPval-AA or MCP evidence and no long-horizon agentic result; 2024-era tool-loop reliability caps it.
- **Reasoning: 33/100.** Frontier in 2024 (GPQA main 46.2% official, MMLU 85.9%, BBH 89.2%), but HLE 4.9% (rank 334 of 466), ARC-AGI-2 0.8% and an AA Intelligence Index of 9.97 put it near the floor of the current field — those abstraction and knowledge benchmarks cap it.
- **Context window: 95/100.** A 2M-token window, the largest at launch, with >99.7% single-needle recall at 1M tokens across text, video and audio; capped by Google's own multi-needle degradation warning and by the fact that the beyond-1M results come from an internal test.
- **Multimodal: 72/100.** Text, image, audio and video in with text out: MMMU 62.2%, MathVista 63.9%, EgoSchema 72.2%, Video-MME 75.0 without subtitles / 81.3 with, FLEURS 6.5% WER; text-only output and 2024-era vision scores cap it.
- **Coding: 42/100.** LiveCodeBench 41.7% (11th percentile) and SciCode 29.5% are the honest modern read; Natural2Code 82.6% is leakage-controlled but not comparable, and no SWE-bench or Terminal-Bench row exists.
- **Cost efficiency: 42/100.** Paid $3.50 / $10.50 per 1M (higher tiers above 128K) with no free API ID; a premium legacy rate in 2026.
- **Overall Score: 56.4/100.** Mean of the five quality dimensions (40 + 33 + 95 + 72 + 42) / 5 = 56.4; best fit is very-long-context multimodal document, video and audio work on legacy infrastructure, not agentic coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-24
- Method: public internet research — Google Cloud's needle-in-a-haystack write-up and the Gemini 1.5 report for long-context and long-document QA numbers, Google's Gemini 1.5 launch post for context tiers and pricing structure, the Gemini API long-context doc for the multi-needle caveat, Google's model-card benchmark table as reproduced by Langbase, plus BenchmarkList and Artificial Analysis aggregate harness runs. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
