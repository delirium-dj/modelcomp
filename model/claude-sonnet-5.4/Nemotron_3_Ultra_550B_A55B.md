# Claude Sonnet 5.4 — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4 (also referred to as Claude Sonnet 5 in Anthropic's June 2026 launch; model-queue.md lists as claude-sonnet-5.4)
- **Short description:** Anthropic's mid-2026 Sonnet model (1M context, adaptive thinking, sub-turn checkpointing, computer use). Released June 30, 2026. Proprietary, API-only. Positioned as strict improvement over Sonnet 4.6, near Opus 4.8 on coding/agentic tasks. Paid only, no free Zen ID.
- **Provider / access:** Anthropic API (`claude-sonnet-5-20260630` / `claude-sonnet-5`), AWS Bedrock, Google Cloud Vertex AI. Messages API + Batch API (300K output beta). Reasoning effort: low/medium/high/max/xhigh.
- **Release / knowledge:** 2026-06-30 release; knowledge cutoff January 2026 (per MorphLLM/DataCamp).
- **IDs:** `claude-sonnet-5` (Anthropic), `anthropic/claude-sonnet-5` (OpenRouter). No free tier.
- **Context window:** 1,000,000 tokens (1M input + 128K output Messages API, 300K Batch API beta). Verified via Anthropic platform docs, ModelComp, Artificial Analysis.
- **Modalities:** Text and image input; text output. Reasoning: yes (adaptive thinking). Tool calls: yes (computer use beta). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Input $2.00/M, cached input $0.20/M (5-min) / $0.40/M (1-hr), output $10.00/M. Batch: $1.00/M in, $5.00/M out. Cache reads 0.1x base ($0.20/M). Introductory $2/$10 made permanent (no Sep 1 increase). ModelComp shows $2.50/$12.50 — likely includes markup or different source.
- **Architecture:** Proprietary. Parameter count undisclosed. Hybrid reasoning with adaptive thinking, sub-turn checkpointing.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (agreed, 4 reports: Beam, Gemini 3.8 Flash, Qwen 3.8 Flash, Qwen 3.8 Max) — ModelComp
- Terminal-Bench 2.1 (Vals): **74.5%** — Vellum/Anthropic system card (Terminus-2 harness)
- Terminal-Bench 4.0 (AA): **14%** (max) — Artificial Analysis (very low, contradicts TB 2.1)
- Terminal-Bench 4.0: **10.3%** (Sonnet 5, per Sonnet 5.5 blog) — Anthropic
- BrowseComp: **84.7%** — BenchLM (Claude Sonnet 5)
- OSWorld-Verified: **81.2%** (agreed, 3 reports: Beam, Gemini 3.8 Flash, Qwen 3.8 Max) — ModelComp
- OSWorld 2.1: **57.0%** partial — Anthropic Sonnet 5.5 blog (Sonnet 5 baseline)
- AutomationBench-AA: **37%** — Artificial Analysis
- ApprenticeBench: **16%** — BenchLM
- MazeBench: **0%** — BenchLM
- GDP.pdf: **13%** (AA) — Artificial Analysis
- AA-Briefcase v1.1: **1357** Elo — Artificial Analysis
- GDPval-AA v2.1: **1464** Elo — Artificial Analysis
- τ²-Bench Telecom: **no score** (Sonnet 5.5: 98.9% per BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (Vals) / **92.8%** (GPT-5.4 comparison, AA) — BenchLM / Artificial Analysis
- GPQA-D: **92.8%** — BenchLM (GPT-5.4 comparison)
- HLE (Humanity's Last Exam): **41%** (AA, max) / **43.2%** no tools / **57.4%** with tools — Artificial Analysis / BenchLM
- HLE (Vals): **52.1%** (GPT-5.4 comparison) — BenchLM
- MMLU-Pro: **87.5%** (Vals) / **88.5%** (Qwen 3.7 comparison) — BenchLM / Datacamp
- MMLU-Pro (AA): **89.3%** (Qwen 3.7 Max) — OpenRouter (cross-ref)
- C-Eval: **93.4%** (Qwen 3.7 comparison) — Datacamp
- AA Intelligence Index: **38** (max) — Artificial Analysis
- AA-LCR: **82%** — Artificial Analysis
- AA-Omniscience: **16** — Artificial Analysis
- CritPt: **17%** — Artificial Analysis
- SimpleQA Verified: **55.8%** (Epoch, Qwen 3.7 comparison) — BenchLeader

Coding:

- SWE-bench Verified: **85.2%** (agreed, 2 reports: Beam, Qwen 3.8 Flash) / **75.5%** (Vals) / **77.3%** (Epoch, Qwen 3.7) — ModelComp / BenchLM / BenchLeader
- SWE-bench Pro: **63.2%** (agreed, 3 reports: Beam, Gemini 3.8 Flash, Qwen 3.8 Flash) / **57.7%** (GPT-5.4) / **58.1%** (Sonnet 4.6) / **60.6%** (Qwen 3.7 Max) — ModelComp / BenchLM / Vellum / BenchLeader
- SWE-bench Multilingual: **78.3%** — BenchLM
- Terminal-Bench 2.1: **80.4%** — ModelComp (agreed)
- LiveCodeBench (Vals): **82.4%** — BenchLM
- LiveCodeBench: **82.3%** (Qwen 3.7 review) — Datacamp
- FrontierCode 1.1 Main: **42.4%** (max) / **42.7%** (BenchLM) — Anthropic / BenchLM
- CursorBench 3.2: **61.5%** — BenchLM
- CursorBench 4.0: **34.1%** (Sonnet 5, per Sonnet 5.5 blog) — Anthropic
- VulcanBench CII v1: **89.2%** — BenchLM
- Vibe Code Bench: **56.2%** → **86.9%** (Vals, +30.7 vs Sonnet 4.6) — Vals AI blog

Long context:

- AA-LCR: **82%** — Artificial Analysis
- MRCRv2 8-needle (4K-8K): **72%** / (32K-128K): **54.4%** / (128K-512K): **42.8%** / (256K-1M): **39.4%** / (512K-1M): **35.6%** — AnotherWrapper
- Graphwalks BFS (0K-128K): **100%** / (256K-1M): **100%** — AnotherWrapper
- Graphwalks Parents (0K-128K): **100%** / (256K-1M): **98%** — AnotherWrapper
- Native 1M context verified

Multimodal:

- Chartography (no tools): **15.6%** (Sonnet 5) vs **61.6%** (Sonnet 5.5) — Anthropic
- MMMU-Pro: **81.2%** (no tools) / **89.3%** (with tools) / **88.6%** (no tools, GPT-5.4 comparison) — AnotherWrapper / BenchLM
- MMMU-Pro (GPT-5.4): **81.2%** — BenchLM
- Visual chart recognition: **61.6%** no tools (Sonnet 5.5) — Anthropic

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Terminal-Bench 2.1 80% (agreed), OSWorld 81% (agreed), BrowseComp 85%, AutomationBench 37%, FrontierCode 42%. Strong agentic coding/computer use. Capped by AutomationBench and FrontierCode below Opus 5.5.
- **Reasoning: 82/100.** GPQA Diamond 89–93%, HLE 41–57%, MMLU-Pro 87–89%, AA Intelligence Index 38, AA-LCR 82%. Excellent knowledge/reasoning but AA Index 38 well below Opus 5.5 (57) and Fable 5.1 (53). Capped by composite index vs top tier.
- **Context window: 95/100.** 1M native context. AA-LCR 82%, MRCRv2 35–72% across ranges, Graphwalks 98–100%. Top-tier context capacity with strong retrieval.
- **Multimodal: 60/100.** Text + image in; text out. Chartography 16% (Sonnet 5) → 62% (Sonnet 5.5), MMMU-Pro 81–89%. Vision improvement in 5.5 but 5.4/5 baseline weak on chart reasoning. Capped by text-only output and weak chartography at launch.
- **Coding: 88/100.** SWE-bench Verified 85% (agreed) / 75–77% (Vals/Epoch), SWE-Pro 63% (agreed), Vibe Code 87% (Vals), Terminal-Bench 80%, LiveCodeBench 82%. Exceptional coding, near Opus 4.8 (69% SWE-Pro). Capped by SWE-Verified discrepancy across sources (75–85%).
- **Cost efficiency: 70/100.** $2/$10 per 1M (introductory made permanent). Blended ~$6/M. Cheaper than GPT-5.4 ($2.50/$15), Opus 5.5 ($4/$20), Wonder ($4/$20). No free tier. Cache reads $0.20/M (0.1x).
- **Overall Score: 82/100.** Mean of (85+82+95+60+88)/5 = 82.0. ModelComp shows 87.3 from 11 agent reports (range 59–92). My normalized score lower due to multimodal penalty (text-only output, weak chartography) and AA Index 38 vs agent reports' higher reasoning scores. Best fit: strong coding/agentic model at reasonable price; multimodal reasoning improved in 5.5.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Anthropic launch blogs/system cards, ModelComp, BenchLM, Artificial Analysis, Vals AI, Vellum, DataCamp, AnotherWrapper, OpenRouter); scores normalized 1–100 per model-comparison.md methodology. Conflicting SWE-bench Verified (75–85%) and Terminal-Bench 4.0 (10–14% vs 2.1 80%) noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.