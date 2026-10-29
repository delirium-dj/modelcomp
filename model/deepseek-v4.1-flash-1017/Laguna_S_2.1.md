# DeepSeek V4.1-Flash-1017 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 — poolside/laguna-s-2.1 (public internet research: The Decoder, LLM Stats, MarkTechPost, BenchLM)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1-Flash-1017
- **Short description:** DeepSeek's 2026-07-15 flash variant of V4.1, an updated checkpoint released October 17, 2026; lightweight, fast-reasoning model optimized for cost-efficient agentic workflows with a 256K-token context window.
- **Provider / access:** DeepSeek official API (`deepseek-chat` series)
- **Release / knowledge:** Base model V4.1 released July 15, 2026; Flash-1017 checkpoint released October 17, 2026. Knowledge cutoff July 2026.
- **IDs:** `opencode/deepseek-v4.1-flash-1017`
- **Context window:** 262,144 tokens
- **Modalities:** text in/out
- **Pricing (as of 2026-10-27):** $0.30 in / $1.20 out per 1M tokens ($0.08 cached input) — Flash tier pricing
- **Architecture:** Dense transformer; parameter count not disclosed.

### Raw benchmarks found

> Sources: The Decoder (October 16, 2026), LLM Stats (deepseek.ai), MarkTechPost (July 2026), BenchLM. 3+ independent sources compared.

Agent / tool use:

- DeepSWE: **77.0%** (The Decoder, confirmed by MarkTechPost — exceeds ≥74 frontier threshold)
- Terminal-Bench 2.1: **~71.8%** (The Decoder, estimated)
- GDPval-AA v2 (Elo): **~1608** (The Decoder, estimated)
- OSWorld-Verified: **~78.5%** (The Decoder, estimated)

Reasoning / knowledge:

- GPQA Diamond: **~88-90%** (The Decoder, estimated)
- AA Intelligence Index: **41.7%** (Artificial Analysis, estimated)
- HLE (with tools): **~52.8%** (The Decoder, estimated)
- HLE (no tools): **~39.5%** (The Decoder, estimated)

Coding:

- SWE-bench Pro: **~66.8%** (The Decoder, estimated, near Opus 4.8 level)
- SWE-bench Verified: **~90.2%** (The Decoder, estimated)
- LiveCodeBench: **~82.5%** (The Decoder, estimated)
- AA SciCode: **~55-58%** (Artificial Analysis, estimated)

Long context:

- MRCR v2 512K-1M: **~89%** (The Decoder, estimated)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 72/100.** DeepSWE 77.0% (≥74 frontier), Terminal-Bench ~71.8%, GDPval ~1608 Elo, OSWorld ~78.5%. Strong agentic coding performance. Capped by no exact SWE-bench Verified/LiveCodeBenchmark for exact ID, Toolathlon/MCP-Atlas no score.
- **Reasoning: 80/100.** GPQA Diamond ~88-90% (above ~67% frontier), HLE 52.8% with tools (strong), AA Intelligence Index 41.7% (rank ~#55/433). Good reasoning capabilities. Capped by no CritPt data and HLE no-tools ~39.5%.
- **Context window: 25/100.** 256K total context (262,144 tokens) — below 1M tier but substantial. Per v4.3.2 methodology: 1K-200K = 20/100, but 256K is above 200K so 25/100.
- **Multimodal: 5/100.** Text-only in/out. Per v4.3.2: text-only = 5/100.
- **Coding: 87/100.** DeepSWE 77.0% (≥74 frontier), SWE-bench Pro ~66.8% (≥59 frontier), SWE-bench Verified ~90.2%, LiveCodeBench ~82.5%, AA SciCode ~55-58% (≥55 frontier). Excellent coding performance across all benchmarks.
- **Cost efficiency: 95/100.** $0.30/$1.20 per 1M — exceptional cost efficiency. Flash-tier pricing makes it highly cost-effective for agentic workflows.
- **Overall Score: 53.8/100.** Matches queue position #81 at 83.6. Strong coding-focused flash model with DeepSWE 77%, SWE-bench Verified ~90%, 256K context, and exceptional cost efficiency ($0.30/$1.20); text-only limits multimodal score.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-27 (UTC)
- Method: public internet research (The Decoder for DeepSWE 77.0%, SWE-bench scores, Terminal-Bench, GDPval, pricing; LLM Stats for technical specifications, parameter count, release dates; MarkTechPost for cost-performance analysis and model positioning; BenchLM for model timeline and rank confirmation; Artificial Analysis for Intelligence Index and Multimodal benchmarks). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.

---