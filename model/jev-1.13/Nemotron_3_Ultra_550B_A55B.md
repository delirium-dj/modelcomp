# Jev 1.13 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`
>
> **NOTE:** Jev 1.13 is a "System One" decision model (TypeSafe AI), not a generative LLM. It does not generate text; it answers typed questions (Choice, Score, Noul) with calibrated probabilities. Benchmarks are decision-specific (JevBench, DecisionBench). Scores below are normalized against the generative model methodology where applicable; decision-specific scores are noted in raw benchmarks.

## Model card

- **Name:** Jev 1.13 (typesafe/jev-1.13)
- **Short description:** TypeSafe AI's first "System One" decision model, released September 2026 (early access). Unlike generative LLMs, Jev reads a state once and returns structured probabilistic decisions: Choice (categorical selection with probabilities), Score (rubric position with probabilities), or Noul (yes/no probability). Optimized for fast, structured decisions in software workflows (routing, classification, moderation, tool selection). Closed model, API-only.
- **Provider / access:** TypeSafe AI API (`https://jev-ai.org/api/v1/systemone/`), OpenRouter (`typesafe/jev-1.13`), NEAR AI, Bank of AI, Kumo Router, LiteLLM. Decisions API (POST /systemone), not Chat Completions. Pinned version `jev-1.13` vs rolling `jev-latest`.
- **Release / knowledge:** 2026-09-15 public announcement (TypeSafe blog); `jev-1.13-20260917` build version. Knowledge cutoff not published (decision model, not knowledge retrieval).
- **IDs:** `typesafe/jev-1.13` (OpenRouter), `jev-1.13` (Jev API), `jev-latest` (rolling alias). No free tier; pay-per-input-token.
- **Context window:** 32,000 tokens (state + longest question) / 64,000 tokens (state + all questions). State capped at 100,000 characters. Verified via Jev API docs, OpenRouter, DecisionBench.
- **Modalities:** Text only (string, JSON object, or array). No image/audio/video input. Output: typed decisions (Choice/Score/Noul) with probabilities and confidence. No free-form text, no reasoning trace, no streaming.
- **Pricing (as of 2026-10-27):** $0.042/M input tokens; output tokens free. No cache pricing. Minimum 1 credit per call (Bank of AI: 600 credits/1M tokens ≈ $0.0006/M). OpenRouter: $0.042/M in, $0/M out.
- **Architecture:** Proprietary "System One" architecture. New model class, parallel sampler, trained with Reinforcement Learning for Calibrated Decisions (RLCD). Parameter count undisclosed. Not open-weight.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use (decision equivalents):

- JevBench (v1.6.1): **Composite 71.49** (rank #4 of 38 hosted) / **Capability 77.13** (rank #4) / **Intelligence 63.62** / **Calibration 90.63** / **Speed 91.50** / **Cost 54.73** — Benchmark Heaven dataset (independent)
- JevBench (v1.6.29, Oct 19 2026): **Composite 71.49** (rank #7 of 38) / **Capability 77.1** — JevBench live board
- DecisionBench: **Overall 63/100** (rank #5 of 20 decision models, tier 4) — DecisionBench
  - Sudoku (logical reasoning): **82.4%** accuracy, #4 of 20
  - Rulebook (following rules): **85.6%** accuracy, #8 of 20
  - Consistency: **97.3%** score, #8 of 20
  - Odds (risk weighing): **39.1%** score, #9 of 20
  - Fairness: **96.6%**, #13 of 20
- ModelTested: **Accuracy 92%**, **Hard cases 79%**, **Calibration 94%** — #4 of 17 decision models tested
- Arxiv 2609.37647 (37 datasets, 346K requests): **95–99%** on IMDB, SST-2, HellaSwag, ARC; **86.7%** on Belebele (122 langs). Beats Qwen3.8-27B on 27/37 datasets, Gemma-4-E4B on 37/37.
- LiteLLM jevrank: Per-query latency 0.58–1.88s, cost ~$0.0005–0.0007 per query, ~260 token overhead per call.

Reasoning / knowledge (decision-focused):

- GPQA Diamond: **no verified public score found** (not a generative knowledge benchmark)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **not applicable** (decision model, not tracked)
- Omniscience Accuracy / Hallucination Rate: **not applicable** (no free-form output to hallucinate)
- MMLU-Pro: **94%** on calculation-heavy questions, **91%** on other (Arxiv 2609.37647) — but via decision API, not generative

Coding (tool selection via decision API):

- SWE-bench Verified / SWE-Pro: **no verified public score found** (not a coding generator)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Tool selection: Supported via Choice questions over defined candidates (Jev docs). Execution requires application logic.
- BFCL-V4 equivalent: **no direct equivalent found**

Long context:

- Context window: 32K/64K tokens (below 128K tier)
- MRCR / RULER / GraphWalks: **no verified public score found**
- JevBench includes long-context state handling but no standard retrieval benchmark

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.
>
> **PARADIGM NOTE:** Jev is a decision model, not a generative LLM. Scores below map decision capabilities to the generative framework where possible. Multimodal and Coding dimensions are fundamentally mismatched.

- **Tool use: 70/100.** JevBench Capability 77.13, DecisionBench Sudoku 82.4% (logical reasoning as tool use proxy), Rulebook 85.6% (following constraints). Tool selection via Choice questions supported natively. Capped by no code execution, no free-form tool calling, no agentic loops.
- **Reasoning: 65/100.** JevBench Intelligence 63.62, DecisionBench Odds 39.1% (weak spot), Consistency 97.3% (strong). Arxiv eval: 95–99% on classification/reasoning datasets. Not a chain-of-thought reasoner; optimized for calibrated single-pass decisions. Capped by no multi-hop reasoning, no arithmetic/date math reliability.
- **Context window: 40/100.** 32K/64K tokens places it in 32K–64K tier (40–50 per methodology). State capped at 100K chars. No long-context retrieval benchmarks. Capped by small context vs modern 128K–1M+ generative models.
- **Multimodal: 15/100.** Text-only input and output. No vision, audio, video. Jev-Omni variant exists (multimodal) but separate model. Score floor for text-only per methodology (15).
- **Coding: 15/100.** No code generation. Tool selection via Choice questions only. DecisionBench shows no coding-specific benchmarks. ModelTested: 26 regular models (incl. Qwen3.5-27B) did better on decision tasks that overlap coding logic. Score floor for non-coding model (15).
- **Cost efficiency: 95/100.** $0.042/M input, output free — extremely cheap for decision API. ~$0.0005–0.0007 per decision call (LiteLLM). No free tier but near-zero marginal cost. Only cheaper if self-hosted open models (e.g., Laya on M4 Pro at high volume).
- **Overall Score: 41/100.** Mean of (70+65+40+15+15)/5 = 41. Best fit: specialized decision/routing/classification API where structured probabilistic outputs beat generative parsing; not a general-purpose LLM.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 3+ independent sources (JevBench/benchmarkheaven dataset, DecisionBench, ModelTested, Arxiv 2609.37647, TypeSafe AI blog/docs, Jev API docs, OpenRouter, LiteLLM benchmarks); scores normalized 1–100 per model-comparison.md methodology with paradigm adjustment noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.