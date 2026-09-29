# Gemini 3.1 Flash-Lite — findings by Qwen 3.8 27B

- Source: Google/gemini-3.1-flash-lite
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's fastest and most cost-efficient Gemini 3 series model (first Flash-Lite in the 3 line), optimized for high-volume, latency-sensitive workloads such as translation, content moderation, and data labeling.
- **Provider / access:** Gemini API / Google AI Studio (model ID `gemini-3.1-flash-lite`, preview ID `gemini-3.1-flash-lite-preview` until the May 2026 GA of the stable endpoint), Vertex AI; OpenCode Zen `google/gemini-3.1-flash-lite`.
- **Release / knowledge:** preview 2026-03-03; stable endpoint GA May 2026; knowledge cutoff not published in sources found.
- **IDs:** `google/gemini-3.1-flash-lite` (no Free ID on Zen).
- **Context window:** 1M tokens total (llm-stats / GA docs); max output not published in sources found.
- **Modalities:** text/image/video/audio/PDF in; text out; reasoning via configurable thinking levels (non-reasoning default); function calling; code execution; JSON mode.
- **Pricing (as of 2026-09-29):** $0.25 in / $1.50 out per 1M; cached input $0.025 per 1M. Paid — no free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals harness): **34.1%** (BenchLM)
- Gert Labs: **38.46%** (BenchLM)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (Google launch table, vendor-run); **81.1%** (Vals run, BenchLM)
- MMMU Pro: **76.8%** (Google launch table)
- MMLU-Pro: **86.2%** (Vals run, BenchLM)
- Arena.ai Leaderboard Elo: **1432** (Google launch post)
- BenchLM overall: **50.03 / #86 of 512**
- HLE / CritPt / MRCR-LCR: no verified public score found

Coding:

- SWE-bench (Vals): **62.8%**
- LiveCodeBench (Vals): **80.1%**
- Vibe Code Bench: **0.00%**
- SciCode / DeepSWE: no verified public score found

Long context:

- 1M window; no long-context retrieval (MRCR/RULER) value reported in sources found

### Normalized scores (1–100)

- **Tool use: 48/100.** TB2.1 (Vals) at 34.1% sits below the 45–60% mid band and Gert Labs 38.46% is similar — function calling and code execution exist, but agentic/terminal execution is clearly weak for the tier.
- **Reasoning: 74/100.** GPQA Diamond 81.1–86.9% and MMLU-Pro 86.2% are strong for a Lite model (upper edge of the 60–80% mid band), but the #86/512 BenchLM position and Arena Elo 1432 keep it out of the frontier 90+ band.
- **Context window: 95/100.** 1M-token window (≥1M tier floor 95); no public retrieval-at-length test found to modulate within the band.
- **Multimodal: 90/100.** Full input modality coverage (text/image/video/audio/PDF) puts it in the top tier; text-only output and basic-tier depth cap it at the band floor.
- **Coding: 70/100.** LiveCodeBench (Vals) 80.1% and SWE-bench (Vals) 62.8% are respectable, but Vibe Code Bench 0.00% lands it exactly in the methodology's "LiveCode 80% but Vibe <10% → 65–75" mid band.
- **Cost efficiency: 94/100.** $0.25/$1.50 per 1M with $0.025/M cached input is far below the $0.60/$2.20 ≈ 92 reference — one of the cheapest capable APIs, though not $0.
- **Overall Score: 75/100.** (48 + 74 + 95 + 90 + 70) / 5 = 75.4 → 75; best fit: the default high-volume/latency-sensitive pick (translation, moderation, extraction, labeling) where its price and 1M window outweigh the weak agentic-coding rows.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (Google launch blog 2026-03-03, Google Cloud GA blog May 2026, ai.google.dev model docs, BenchLM page updated 2026-09-28, llm-stats, DeepMind model card links); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
