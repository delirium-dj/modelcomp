# Jev 1.13 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: arxiv.org/html/2609.37647v1 (independent academic evaluation "Evaluating and Benchmarking the System One Model Jev", Deußer/Sparrenberg/Sifa, 2026-09-29), arxiv.org/html/2610.11978v1 ("Specialized Decision Models vs. General-Purpose LLMs: Benchmarking Jev"), arxiv.org/pdf/2609.34024 ("Jev in Medicine"), jevbench.xyz (JevBench evidence runs), jevai.wiki/models (specs/aliases/pricing), jev-ai.org / jev-api.org (TypeSafe model list), en.wikipedia.org/wiki/Jev_(AI_model), orcarouter.ai/blog/jev-open-source, huggingface.co/autotrust/JEV (open-weights student), jevmodel.ai benchmarks
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13 (TypeSafe AI) — slug `jev-1.13`
- **Short description:** A commercial "System One" decision model (non-generative) from TypeSafe AI, released 2026-09-15; given a state and typed questions it returns a choice (up to 255 options), a rubric score (2–10 levels), or a true/false probability, with calibrated probabilities; uses Reinforcement Learning for Calibrated Decisions (RLCD); text input only (string/JSON/array of strings); no image/audio/video input; 64K context per request (32K state + longest question); proprietary, not open weights (no weights repo); priced $0.042/M input tokens, output tokens free.
- **Provider / access:** TypeSafe AI API (api.typesafe.ai, POST /v1/systemone), jev-ai.org playground, OpenRouter (typesafe/jev-1.13), jev-api.org. Aliases: jev-latest (SDK default, resolves to jev-1.13.0), jev-preview (also jev-1.13.0, no preview build).
- **Release / knowledge:** jev-1.13.0 released 2026-09-15; jev-1.14.0 shipped 2026-10-14 as jev-preview; jev-latest follows ~1 week after stable. Jev developed in stealth ~2 years before announcement.
- **IDs:** `jev-1.13.0` (versioned), `jev-latest` (alias), `jev-preview` (alias, → 1.13.0), `typesafe/jev-1.13` (OpenRouter/OpenRouter-compatible).
- **Context window:** 64,000 tokens per request; 32,000 for state plus the single longest question (jevai.wiki; TypeSafe docs).
- **Modalities:** Text in only (no image/audio/video); no text generation output — choice/score/probability outputs only; reasoning n/a (decision model, not generative); tool calls n/a; structured typed output yes (choice/score/noul).
- **Pricing (as of 2026-10-16):** $0.042/M input tokens, output tokens free (jevai.wiki; TypeSafe docs); 250K tokens/sec, 1200 req/s rate limits (jevai.wiki).
- **Architecture:** Proprietary; size/architecture undisclosed by TypeSafe; open-weights student autotrust/JEV (Qwen3.5-9B distilled from Jev 1.13 output distributions) exists on Hugging Face but is not Jev itself.

### Raw benchmarks found

Independent academic evaluation (arxiv 2609.37647, 346,009 requests across 37 datasets, <$10), JevBench evidence runs (jevbench.xyz; fstandhartinger/jevbench v1; Benchmark Heaven snapshots), arxiv 2610.11978 (vs 19 LLMs on 13 MC benchmarks), arxiv 2609.34024 (medical), jevmodel.ai / jevai.wiki snapshots, orcarouter.ai (open-source analysis).

Agent / tool use: n/a — Jev is not a generative agent; no Terminal-Bench/SWE-Bench/OSWorld scores. Not applicable.

Reasoning / knowledge (JevBench / arxiv 2610.11978 vs 19 LLMs):

- JevBench v1.7.46 hosted API: composite **71.5** (#7/39 API board); intelligence 63.6, calibration 90.6, speed 91.5 (0.24s median); choice 77.4 / yes-no 50.3 / score 63.2 (chance-corrected) (jev-ai.pro)
- JevBench v1.3.0 (jevmodel.ai snapshot 2026-09-21): **74.4** (#1/52 systems); intelligence 85.7, calibration 82.7, speed 83.3
- JevBench v1.4.2.1 (fstandhartinger/jevbench): **63.29** (#4)
- arxiv 2610.11978: 95–99% accuracy on IMDB, SST-2, HellaSwag, ARC; **86.7% on Belebele** (122 languages); best on MMLU-Redux and ARC-Challenge; competitive with frontier LLMs on knowledge/commonsense; beats Qwen3.8-27B on 27/37 datasets, Gemma-4-E4B on all 37; **below all 19 LLMs on MathQA** (math word problems); weak on low-resource languages, fine-grained/noisy labels, rubric judgments.
- arxiv 2609.37647 Table 3: Jev > Qwen3.8-27B on 27/37 datasets (11 non-overlapping leads), > Gemma-4-E4B on all 37.
- Medical (arxiv 2609.34024): PubMedQA **78.4%** (vs GPT-6 Sol medium 78.2%), MetaMedQA **74.8%** (vs 82.7), DiagnosisArena-MCQ **59.8%** (vs 82.4), NEJM Case Challenges **61.8%** (vs 82.4); best-calibrated on MetaMedQA (ECE 0.063 vs 0.146); poor probability discrimination on DiagnosisArena-MCQ (AUROC 0.645 vs 0.768).

Coding: n/a — no code generation; not scored.

Multimodal & grounded: n/a — text-only decision model; not scored (multimodal dim reflects non-generative, text-only reality).

Long context: 64K context (32K state + question); no long-context retrieval benchmark isolated.

Instruction following: n/a — typed decision protocol; IFEval/BBH not applicable.

### Conflicting results noted

- **JevBench composite varies by snapshot:** 71.5 (v1.7.46 API board) vs 74.4 (v1.3.0) vs 63.29 (v1.4.2.1) — different benchmark versions/boards; all cited with version.
- **Academic vs vendor framing:** arxiv evaluation shows Jev beating Qwen/Gemma on most classification datasets but losing to ALL 19 LLMs on MathQA — capability is decision-task-specific, not general intelligence.
- **Open-weights student autotrust/JEV** (Qwen3.5-9B) is a different model from TypeSafe Jev 1.13 — explicitly not to be conflated (orcarouter.ai).
- **Jev is not open source** despite 11 public tooling repos — no weights repo exists (orcarouter.ai).

### Normalized scores (1–100)

Jev is a non-generative System One decision model, so the standard 5-dimension formula is a poor fit (no coding, no multimodal, no text generation). Scores below map the closest available evidence and are low-confidence.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 40/100.** No generative tool use; typed decision outputs only; not applicable to agentic coding benchmarks — floor estimate.
- **Reasoning: 74/100.** 95–99% on IMDB/SST-2/HellaSwag/ARC, 86.7% Belebele, best on MMLU-Redux/ARC-Challenge, 78.4% PubMedQA; strong on classification/knowledge decisions, weak on MathQA (below all 19 LLMs) and multilingual low-resource.
- **Context window: 75/100.** Declared 64K (32K state + question); no long-context retrieval benchmark isolated.
- **Multimodal: 50/100.** Text-only input, no generation — not applicable to multimodal benchmarks.
- **Coding: 40/100.** No code generation capability; not applicable to coding benchmarks — floor estimate.
- **Cost efficiency: 95/100.** $0.042/M input, output free, 0.24s median latency — not counted toward Overall.
- **Overall Score: 56/100.** Half-up mean of (40 + 74 + 75 + 50 + 40) / 5 = 55.8 → 56, low confidence; best-fit interpretation: a strong calibrated decision/classification model, not a generative LLM — the standard formula is a strained fit.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (arxiv independent evaluations ×3 + JevBench evidence runs + TypeSafe model docs/aliases/pricing + jevmodel.ai + jev-api.org + Wikipedia + orcarouter.ai + huggingface.co autotrust/JEV); scores are normalized 1–100 interpretations, not official vendor scores. Jev is a non-generative decision model — the 5-dim formula is a strained fit and scores are low-confidence.
- Future sources: add a new file next to this one, using the same headings.
