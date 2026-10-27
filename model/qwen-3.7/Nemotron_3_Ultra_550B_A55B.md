# Qwen 3.7 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (Qwen3.7-Max flagship; also Qwen3.7-Plus, Qwen3.7-Flash variants)
- **Short description:** Alibaba Cloud's Qwen 3.7 series flagship reasoning model, released May 19, 2026. Proprietary MoE architecture with 1M context. Strong multilingual (55 languages), coding, and STEM reasoning. API via Alibaba Cloud Model Studio, OpenRouter, third parties.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.7-max`), OpenRouter (`qwen/qwen3.7-max`), DeepInfra, Together AI, Novita AI. Reasoning effort: no reasoning / max / xhigh. Chat Completions API.
- **Release / knowledge:** 2026-05-19 release; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.7-max` (OpenRouter), `qwen3.7-max` (Alibaba Cloud). Free tier: 1M tokens/new account (Singapore endpoint only).
- **Context window:** 1,000,000 tokens. Verified via Alibaba Cloud docs, OpenRouter, Artificial Analysis, BenchLeader.
- **Modalities:** Text input; text output. Reasoning: yes (reasoning model, max/xhigh effort). Tool calls: yes. JSON mode: yes. Structured output: yes. **No native vision/audio** (separate Qwen3.7-Plus/Flash for vision? Qwen 3.7 appears text-only per OpenRouter).
- **Pricing (as of 2026-10-27):** Alibaba Cloud Intl: $2.50/M in, $7.50/M out (flat to 1M). OpenRouter: $2.50/M in, $7.50/M out. Blended ~$3.75/M. Free tier: 1M tokens (Singapore only). Batch/volume discounts not published.
- **Architecture:** Proprietary MoE (sparse Mixture of Experts). Parameter count undisclosed (backbone ~552B? DeepSeek V4.1 Flash cites 552B backbone; Qwen 3.7 similar class). FP4 KV caching, compressed sparse attention.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0 (AA): **1.5%** (max) — OpenRouter/Artificial Analysis (very low)
- Terminal-Bench 2.1 (AA): **74.5%** (max) — OpenRouter/Artificial Analysis
- Terminal-Bench 2.1 (Vals): **61.0%** — OpenRouter/Vals AI
- Terminal-Bench 2.0 (Vals): **59.2%** — BenchLeader
- Terminal-Bench Hard (AA): **50.8%** — OpenRouter
- τ²-Bench Telecom (AA): **94.7%** (max) — OpenRouter
- τ³-Banking (AA): **11.8%** — OpenRouter
- AutomationBench (AA): **23.0%** — BenchLeader
- GDP.pdf (AA): **8.6%** — BenchLeader
- MCP-Atlas: **76.4%** (Datacamp review) — Datacamp
- MCP-Mark: **60.8%** (Datacamp) — Datacamp
- Skillsbench: **59.2%** (Datacamp) — Datacamp
- SpreadSheetBench-v1: **87.0%** (Datacamp) — Datacamp
- AA Agentic Index: **22.5** (OpenRouter) — OpenRouter
- AA-Briefcase v1.1: **916** Elo — BenchLeader

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (AA, max) / **90.2%** (Vals) / **92.4%** (Datacamp) — OpenRouter / BenchLeader / Datacamp
- HLE (Humanity's Last Exam): **40.5%** (AA) / **41.4%** (Datacamp) — OpenRouter / Datacamp
- MMLU-Pro: **89.3%** (Vals) / **88.5%** (Qwen blog) — OpenRouter / Qwen37.lol
- MMLU-Pro (AA): **89.3%** — OpenRouter
- C-Eval: **93.4%** (Datacamp) — Datacamp
- SimpleQA Verified: **55.8%** (Epoch) — BenchLeader
- LegalBench: **84.9%** (Vals) — OpenRouter
- CorpFin v2: **63.7%** (Vals) — OpenRouter
- TaxEval v2: **75.3%** (Vals) — OpenRouter
- EMB: **57.0%** (Vals) — OpenRouter
- AA Intelligence Index v4.3: **29.5** (max) — OpenRouter / Artificial Analysis / BenchLeader
- AA-Omniscience Accuracy: **31.1%** — OpenRouter
- AA-Omniscience Non-Hallucination: **74.4%** — OpenRouter
- CritPt: **13.4%** — OpenRouter / BenchLeader
- AA-LCR: **79.0%** (max) — OpenRouter / BenchLeader
- IFBench: **80.5%** (max) — OpenRouter / BenchLeader
- LiveBench Reasoning: **83.3%** (#43) — BenchLeader

Coding:

- SWE-bench Verified: **80.4%** (Datacamp/Alibaba) / **77.3%** (Epoch) / **68.8%** (Vals) — Datacamp / BenchLeader / OpenRouter
- SWE-bench Pro: **60.6%** (Datacamp/Alibaba) / **59.0%** (Datacamp table) — Datacamp
- SWE-bench (Vals): **68.8%** — OpenRouter
- SWE-Multilingual: **78.3%** (Datacamp) — Datacamp
- LiveCodeBench: **87.1%** (Vals) / **82.3%** (Qwen blog) — OpenRouter / Qwen37.lol
- LiveBench Coding: **74.2%** (#53) — BenchLeader
- SciCode: **49.5%** (AA) / **53.5%** (Datacamp) — OpenRouter / Datacamp
- Terminal-Bench 2.1: **74.5%** (AA) / **61.0%** (Vals) — OpenRouter
- Terminal-Bench 2.0 (Terminus): **69.7%** (Datacamp) — Datacamp
- Vibe Code Bench v1.1: **47.7%** (Vals) — OpenRouter
- Code Migration: **13.1%** (Vals) — OpenRouter
- Arena Coding Elo: **1524** (#28) — BenchLeader
- ALE-Bench: **1189** (#43) — BenchLeader
- Kernel Bench L3: **1.98x** median speedup, 96% win rate — Datacamp

Long context:

- AA-LCR: **79.0%** (max) — OpenRouter / BenchLeader
- MLCR: **14.4%** — BenchLeader
- MRCR-v2 128K: **90.4%** (Datacamp) — Datacamp (ahead of Qwen3.6-Plus 85.9%, Opus 4.6 84.0%)
- Native 1M context verified

Multimodal:

- **No native multimodal input/output** per OpenRouter model card (text only). Vision variants separate (Qwen3.7-Plus-Preview for vision per RenovateQR). Score floor for text-only.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** Terminal-Bench 2.1 74% (AA) / 61% (Vals), τ²-Bench 95% (telecom only), MCP-Atlas 76%, AutomationBench 23%, GDP.pdf 9%. Strong on telecom agent tasks and MCP tools, weak on general automation/PDF grounding. Capped by low AutomationBench and GDP.pdf vs competitors.
- **Reasoning: 75/100.** GPQA Diamond 92%, HLE 40–41%, MMLU-Pro 89%, AA Intelligence Index 29.5 (low), CritPt 13%, IFBench 81%. Excellent GPQA/MMLU but composite index dragged by CritPt, Omniscience, HLE. Capped by AA Index 29.5 vs top models (50+).
- **Context window: 90/100.** 1M native context. AA-LCR 79%, MRCR-v2 90% at 128K, MLCR only 14%. Strong long-context retrieval (beats Opus 4.6 on MRCR). Capped by MLCR low score.
- **Multimodal: 15/100.** Text-only input/output per OpenRouter. No vision, audio, video. Separate vision variants exist but not this model ID. Floor for text-only model.
- **Coding: 80/100.** SWE-bench Verified 80% (Alibaba) / 77% (Epoch) / 69% (Vals), SWE-Pro 61%, LiveCodeBench 87%, SciCode 50%, Terminal-Bench 2.1 74%. Strong coding but SWE-Verified discrepancy across sources (69–80%). Capped by Vals AI lower score and Terminal-Bench 4.0 1.5%.
- **Cost efficiency: 75/100.** $2.50/$7.50 per 1M (blended $3.75). Cheaper than Opus/Wonder/GPT-5.4. Free tier 1M tokens (Singapore only). Good value for reasoning model.
- **Overall Score: 65/100.** Mean of (65+75+90+15+80)/5 = 65.0. Model-queue shows 84.0 — significant gap. My score penalized heavily by multimodal=15 (text-only) and AA Intelligence Index 29.5. Agent reports in ModelComp may weight coding/reasoning higher and not penalize text-only as severely. Best fit: strong text-only reasoning/coding model for multilingual/STEM; not a multimodal generalist.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (OpenRouter/Artificial Analysis, Alibaba Cloud docs, BenchLeader, Datacamp review, Vals AI, Qwen blog, DeepInfra, RenovateQR); scores normalized 1–100 per model-comparison.md methodology. Conflicting SWE-bench Verified (69–80%) and Terminal-Bench 4.0 (1.5% vs 2.1 74%) noted. Text-only modality confirmed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.