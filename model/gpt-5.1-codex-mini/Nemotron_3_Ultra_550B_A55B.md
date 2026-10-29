# GPT-5.1 Codex Mini — findings by Nemotron 3 Ultra 550B A55B

> Source: OpenAI (`gpt-5.1-codex-mini`)
> Date: 2026-10-29 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's compact, cost-optimized variant of the GPT-5.1 Codex coding-specialized model. Designed for real-time IDE completion, inline refactoring, and high-volume coding workflows with ~4x usage allowance vs full Codex.
- **Provider / access:** OpenAI API (`gpt-5.1-codex-mini`), Azure OpenAI (Global Standard), OpenRouter (`openai/gpt-5.1-codex-mini`). Chat Completions API (Responses API not confirmed for Codex variants).
- **Release / knowledge:** Late 2025 / early 2026 (OpenAI developer docs); knowledge cutoff not separately published (inherits GPT-5.1 base).
- **IDs:** `openai/gpt-5.1-codex-mini` (no free tier on OpenCode Zen)
- **Context window:** 400,000 tokens total; max output 128,000 tokens (verified via OpenAI API docs, Azure catalog, OpenRouter).
- **Modalities:** Text in, text out; no native image/audio/video/PDF input; reasoning (dynamic effort) yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-29):** OpenAI API: $0.25 / 1M input, $2.00 / 1M output; cached input $0.025 / 1M; Azure: $0.25 / $2.00 (Global Standard); OpenRouter: $0.25 / $2.00. Paid tier only.
- **Architecture:** Proprietary dense transformer (distilled/smaller variant of GPT-5.1 Codex); parameter count undisclosed; not open-weights.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (GPT-5.1 Codex Max — METR evaluation / Threads benchmark post; Mini not separately benchmarked, assumed lower)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **20 (estimated) / rank ~85** (Artificial Analysis: Mini High scores 20 vs GPT-5 Mini High at 17 on their Intelligence Index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **77.9%** (GPT-5.1 Codex Max — METR evaluation / OpenAI blog / Threads benchmark post; Mini not separately benchmarked)
- SWE-bench Verified (retail subset): **77.9%** (Threads post: "Retail: 77.9%")
- SWE-bench long-context (128K): **90.0%** (Max variant; Threads post)
- SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **AIME 2025: 94.0%** (Max; Threads post); **MMMU: 85.4%** (Max); **FrontierMath: 26.7%** (Max); HumanEval: **no separate Mini score found** (GPT-5.1 base ~92%)

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval reported** at 400K window (vendor claims 90% SWE-bench at 128K for Max)

### Normalized scores (1–100)

> Derived from raw numbers above using methodology in `model-comparison.md`. One-sentence justification citing key evidence; cap stated. **Note: All coding/reasoning scores are from GPT-5.1 Codex Max (larger variant); Mini is unbenchmarked separately. Scores capped accordingly.**

- **Tool use: 50/100.** No Terminal-Bench, Tau, or agentic suite scores for Mini; capped by total absence of verified tool-use benchmarks for this specific variant.
- **Reasoning: 65/100.** GPQA Diamond 88.1% (Max) is elite; Mini capped at 65 due to no separate verification and expected distillation gap. Artificial Analysis index (20) suggests significant headroom vs Max.
- **Context window: 90/100.** 400K tokens places it in 256K–512K tier (mapping: 85) but 128K max output pushes effective ceiling higher; mapped to 90 for 400K+ class. No retrieval benchmarks to validate.
- **Multimodal: 15/100.** Text-only input/output; no vision, audio, video, or PDF modalities.
- **Coding: 72/100.** SWE-bench Verified 77.9% (Max) is strong real-repo signal; Mini capped at 72 due to no separate SWE-bench, no LiveCodeBench, no HumanEval for Mini. Dynamic reasoning effort praised but unquantified.
- **Cost efficiency: 70/100.** $0.25/$2.00 per 1M is moderate for a mini coding model; cheaper than Haiku 3.5 output but pricier input. Not free.
- **Overall Score: 58/100.** Mean of (50 + 65 + 90 + 15 + 72) / 5 = 58.4 → half-up 58. Best fit: high-context, low-cost coding assistant for IDE-scale workloads; reasoning/coding breadth unproven for Mini specifically.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-29
- Method: public internet research (OpenAI API docs, Azure catalog, Artificial Analysis, OpenRouter, METR evaluation, Threads benchmark posts, Reddit Codex community, OpenAI community forum, YouTube reviews); scores are normalized 1–100 interpretations, not official vendor scores. **Critical limitation: zero Mini-specific benchmarks found — all scores derived from Max variant with downward caps.**
- Future sources: add a new file next to this one, e.g. `GPT_5.1_Codex_Mini.md`, using the same headings.