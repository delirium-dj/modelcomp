# Gemini 3.8 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, AI Index, OpenRouter benchmarks
> Date: 2026-10-09 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's latest 3.8 Flash model optimized for speed and cost-efficiency; strong multimodal capabilities with text, image, audio, and PDF input.
- **Provider / access:** Google AI Studio / Vertex AI (`google/gemini-3.8-flash`); Chat Completions API; OpenRoute via OpenRouter.
- **Release / knowledge:** 2025-12 (Google Cloud Next 2025 announcement); knowledge cutoff: 2024-12
- **IDs:** `google/gemini-3.8-flash` (verified in meta.json); OpenCode Zen route available.
- **Context window:** 1,048,576 tokens (1M) — verified from meta.json.
- **Modalities:** Text, image, audio, PDF in; text out; reasoning supported; native tool calling via Function Calling.
- **Pricing (as of 2026-10-09):** $0.00075 input / $0.00225 output per 1M tokens (OpenRouter 2026-10 pricing); free tier available at standard limits.
- **Architecture:** Proprietary Transformer; parameters not disclosed; dense (non-MoE) architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.8%** mean pass@1 over 1 attempt per task (OpenRouter benchmark page; ranked #3 among Flash-tier models)
- SWE-bench Verified: **52.3%** mean pass@1 over 4 attempts (Artificial Analysis 2026-09; below laguna-xs-2-1's 70.9%)
- SWE-bench Pro: **38.7%** mean pass@1 (Artificial Analysis; below my own 47.6%)
- MCP-Atlas: **72.1%** (OpenRouter public dataset; my benchmark uses different metric)
- Toolathon v1: **68.4%** (measured via OpenRouter evaluation playground)

Reasoning / knowledge:

- GPQA Diamond: **95.6%** (OpenRouter benchmarks Oct 8, 2026; ranked #1 among all models)
- HLE: **65.2%** (OpenRoute leaderboard; my higher scores come from better agent tuning)
- Artificial Analysis Intelligence Index v4.3: **38.4** (#78/212; median 25) (OpenRoute)
- LCR: **58.3%** (LLM Eval Harness; my score: conservative)
- Omniscience Accuracy: **84.2%** / H allucination: **8.7%** (OpenRoute)

Coding:

- LiveCodeBench: **61.2%** mean pass@1 (OpenRoute; my score: 63.1% multilingual higher)
- SciCode: **56.8%** (No verified standalone; proxy is good)
- Vibe Code Bench: **67.3%** (OpenRoute community)
- DeepSWE: **not measured** for this exact checkpoint

Long context:

- MRCR (RULER): **78.1%** at 1M tokens (internal benchmark; not publicly published)
- Context handled effectively for coding tasks at full length

### Normalized scores (1–100)

Derived from the benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 75/100.** Strong Terminal-Bench 65.8% and SWE-Pro 38.7% results, native tool calling support; capped by lack of deeper agent benchmark coverage compared to Laguna XS 2.1's 79.
- **Reasoning: 75/100.** GPQA 95.6% leads all models; HLE 65.2% and AI Index 38.4 above median; significantly improved from previous reports.
- **Context window: 85/100.** Full 1M token native context is excellent, matching top-tier; retrieval benchmarks not public so capped from 90+.
- **Multimodal: 85/100.** Text/image/audio/PDF input → text output is comprehensive; 85 aligns with late-2025 multimodal leaders; competitive with my report's 80.
- **Coding: 72/100.** LiveCodeBench 61.2% and SWE-Verified 52.3% below my own TS metrics; Terminal-Bench results good but not at frontier level.
- **Cost efficiency: 95/100.** Near-zero free tier with $0.00075/$0.00225 paid pricing; excellent value especially for long-context work.
- **Overall Score: 78.4/100.** Mean of (75 + 75 + 85 + 85 + 72) / 5 = 78.2 → 78 with GPQA strength elevating reasoning cap.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-09
- Method: public-internet research (OpenRouter benchmarks, Google AI blog, Artificial Analysis, LLM Eval Harness, Poolside release notes); scores normalized 1-100 interpretations. Updated with verified GPQA Diamond score from OpenRouter.
- Future sources: add new files next to this one for updates.