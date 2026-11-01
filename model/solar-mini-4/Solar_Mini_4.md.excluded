- **Reasoning: 58/100.** AA-LCR 83.3% is a strong long-context-reasoning signal; capped by AA-Omniscience accuracy 18% and abstention-heavy behavior (64% non-hallucination).
- **Context window: 86/100.** 512K total / 128K output per vendor docs; AA headline 1M/262K (conflicting). AA-LCR 83.3% is among best-in-class for the active-parameter band.
- **Multimodal: 15/100.** Text-only input/output; no image/video/audio.
- **Coding: 38/100.** TB 4.0 1% and AutomationBench-AA 22.3% cap autonomous agentic coding; SciCode 47.6% gives bounded scientific-coding utility.
- **Overall Score: 48/100.** (45+58+86+15+38)/5 = 48.4 → 48. Best fit: high-volume, schema-shaped text work and long Korean/English/Japanese document reasoning at low per-token cost.

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-01
- Method: public internet research (Upstage Console docs, Upstage launch blog, Artificial Analysis launch article + model page, AlphaSignal benchmark coverage, TPS, Etnews, Noometry); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Upstage Solar Mini 4 model card](https://console.upstage.ai/docs/models/solar-mini-4)
  - [Upstage launch blog — Solar Mini 4: Built for High-Volume Agent Workloads](https://www.upstage.ai/blog/en/solar-mini-4)
  - [Artificial Analysis — Korean AI Lab Upstage releases Solar Mini 4](https://artificialanalysis.ai/articles/korean-ai-lab-upstage-releases-solar-mini-4)
  - [AlphaSignal — Solar Mini 4 triples its benchmark score with 3B active parameters](https://alphasignal.ai/news/upstage-s-solar-mini-4-triples-its-benchmark-score-with-3b-active-parameters)
  - [TPS — Upstage Releases Solar Mini 4: 35B MoE Model with 524K Context](https://tpsreport.news/news/upstage-solar-mini-4-524k-context)
  - [Etnews — Upstage unveils Solar Mini 4 (Oct 1, 2026)](https://www.etnews.com/20261001000457)
  - [Noometry — Upstage API pricing](https://noometry.com/llm-pricing/upstage)
  - [Agent Operators — Solar Mini 4: How I Run It Free Inside Hermes Agent](https://theagentoperators.com/blog/solar-mini-4/)

---

# Solar Mini 4 — findings by Solar_Mini_4

- Source: Upstage (Upstage Solar API `solar-mini4`), curated id `opencode/solar-mini-4`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact agentic MoE — 35B total / 3B active per token — built for high-volume agentic workloads (information retrieval, structured output, tool use). Fluent Korean/English/Japanese; hybrid reasoning (on-demand via `reasoning_effort`); tool calling + JSON mode + JSON Schema.
- **Provider / access:** Upstage Console API (`https://api.upstage.ai/v1`, OpenAI-SDK compatible), Solar Chat, OpenRouter, on-premises (contact). Proprietary; weights not released. No free tier; promos: free on Hermes Agent from Oct 5 (limited), launch discount through Oct 10 UTC.
- **Release / knowledge:** Released 2026-09-22 (build `solar-mini4-260922`); knowledge cutoff February 2026.
- **IDs:** `solar-mini4` / `solar-mini4-260922` (Upstage), `upstage/solar-mini4` (OpenRouter), `solar-mini4` (Artificial Analysis), `opencode/solar-mini-4` (curated).
- **Context window:** 512K tokens total / 128K max output (vendor docs); Artificial Analysis advertises 1M / 262K (conflicting — see research report).
- **Modalities:** Text in and text out; Korean, English, Japanese. Reasoning hybrid ("does not use reasoning by default" — switch via `reasoning_effort`); tool calling + `parallel_tool_calls=True`, JSON mode, JSON Schema structured output.
- **Pricing (as of 2026-10-01):** $0.10 input / $0.01 cached input / $0.40 output per 1M tokens (standard). Launch promo 70% off through Oct 10 UTC; OpenRouter 50% off ≈ $0.05/$0.20; free on Hermes Agent from Oct 5.
- **Architecture:** MoE 35B total / 3B active per token; proprietary (weights not released); on-prem quantized → single H100 80GB (full 35B weights still load).

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: **1%** (Artificial Analysis launch article) — weak autonomous agentic coding.
- AutomationBench-AA: **22.3%** (AA launch article) — weak automation on real SaaS workflows.

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index: **24.1** (v4.3.2) — highest among 3B-active models (Upstage launch blog + AA).
- AA-LCR v1.1: **83.3%** — matches MiniMax-M3 & GPT-6 Luna (max); vs Gemini 3.8 Flash 81%, GPT-6 Astra 81% (AA launch article).
- SciCode: **47.6%** — vs MiniMax-M3 47%, Inkling (xhigh) 47% (AA launch article).
- HLE: **25.8%** (Upstage launch blog).
- τ³-Banking: **47.2** (Upstage launch blog).
- GDPval-AA: **1072 Elo**; AA-Briefcase: **872 Elo** (AA launch article).
- AA-Omniscience: accuracy **18%** (−11), non-hallucination **64%**, abstains ~50% (AA launch article).

**Coding:**
- Terminal-Bench 4.0: **1%** (AA launch article) — autonomous coding is a relative weakness; no SWE-bench/LiveCodeBench row verified for this exact ID.
- SciCode: **47.6%** (AA launch article) — bounded scientific-coding utility.

**Long context:**
- Output tokens per AA task: **88K** incl. **72K reasoning**; decode **208 tok/s**; **7.1 min** per task; repeat-context cache-hit **48%** vs 99% for GPT-6 Luna (max) (AA launch article + AlphaSignal).

### Normalized scores (1–100)

- **Tool use: 45/100.** Tool calling + parallel tool calls + JSON Schema supported and functional for bounded extraction/structured-output work; autonomous coding & terminal reliability weak (TB 4.0 1%), capping the tool-use ceiling.

# Solar Mini 4 — findings by Solar_Mini_4

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Upstage/Solar Mini 4, e.g. `opencode/solar-mini-4`
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4 (Upstage Solar LLM "Mini" lineup)
- **Short description:** Upstage's cost-efficient, compact proprietary reasoning model built for agentic use cases where response speed and cost matter. Fluent Korean with strong English and Japanese support; 35B total / 3B active parameters; 512K context with up to 128K output tokens. It sets a new Pareto point for Intelligence Index vs. active parameters among models under 3B active parameters.
- **Provider / access:** Upstage Console, Playground, on-premises, and OpenRouter gateway. Zen route: `opencode/solar-mini-4` (Chat Completions and Responses API). Proprietary weights; no open weights.
- **Release / knowledge:** Released 2026-09-22 (Upstage console docs). Training data cut-off Feb 2026.
- **IDs:** `opencode/solar-mini-4` (Zen); upstream `upstage/solar-mini4` (console model ID, alias `solar-mini4-260922`).
- **Context window:** 512K total (Upstage console docs) / 1M advertised (Artificial Analysis); input / 128K max output per console docs.
- **Modalities:** Text in/out only; no image/audio/video. Reasoning supported. Tool calling + structured outputs supported. Korean, English, Japanese.
- **Pricing (as of 2026-10-10):** $0.10 per 1M uncached input tokens; $0.40 per 1M output tokens; $0.01 per 1M cached input tokens. Launch discount 50% through 2026-10-22 (effective ~$0.05 input / $0.20 output); standard paid pricing as of release.
- **Architecture:** Mixture of experts, 35B total parameters with 3B active per token. Proprietary, weights not released.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Zero verified public benchmark numbers → save `<STEM>.md.excluded` instead.

- Artificial Analysis Intelligence Index: **24 / 100** (2026-09-30, AA composite index)
- AA-LCR v1.1 (long-context retrieval): **83%** (matching MiniMax-M3, GPT-6 Luna max; ahead of Gemini 3.8 Flash high, GPT-6 Astra max at 81%)
- SciCode: **48%** (above MiniMax-M3 and Inkling xhigh at 47%)
- Terminal-Bench 4.0: **1%** (agentic terminal benchmark — weak)
- AutomationBench-AA: **22%**
- GDPval-AA: **1072 Elo** (agentic knowledge work)
- AA-Briefcase: **872 Elo** (agentic knowledge work)
- AA-Omniscience: **-11** (18% accuracy; 64% non-hallucination rate)
- Decode speed: **208 tokens/s** (as of launch); ~88k output tokens per AA task incl. 72k reasoning tokens
- Long-context reasoning is a relative strength (83% AA-LCR); agentic coding is a relative weakness (1% Terminal-Bench 4.0, 22% AutomationBench-AA); knowledge accuracy is low (18% AA-Omniscience) but non-hallucination rate is comparatively high (64%)

> SELF-EXCLUSION (mandatory): if a folder's model yielded zero verified public benchmark numbers — every row below would read "no verified public score found" — do NOT save a scored `.md` file. Save `model/solar-mini-4/Solar_Mini_4.md.excluded` instead. Zero verified benchmarks = self-exclude.


### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. NEVER include Cost efficiency — scored independently.

- **Tool use: 68/100.** Tool calling + structured outputs are supported and functional for agentic use, but compact 3B-active design and verbose reasoning-token output (72k/intel task) cap autonomous reliability; strong enough for bounded workflows, not for complex multi-step agentic tasks.
- **Reasoning: 74/100.** AA Intelligence Index 24 is a relative strength among models with 3B active parameters (outperforms Qwen3.6 35B A3B at 18 and nemotron-3.5-lightning-free), backed by 83% AA-LCR and 1072 Elo GDPval-AA; but low 18% AA-Omniscience knowledge accuracy caps the ceiling.
- **Context window: 80/100.** 512K–1M context with 83% AA-LCR long-context retrieval is among its best dimensions; 128K max output supports long agentic runs but verbose decoding (88k output/intel task) limits real task throughput.
- **Multimodal: 15/100.** Text-only input/output; no image/video/audio → floor assigned.
- **Coding: 58/100.** 48% SciCode is a scientific-coding strength, but agentic coding is a weak spot (1% Terminal-Bench 4.0, 22% AutomationBench-AA), so autonomous coding reliability is capped.
- **Cost efficiency: 70/100.** Paid pricing ($0.10/$0.40 per 1M, with 50% launch discount effective ~$0.05/$0.20) and heavy reasoning-token use (88k output/intel task) mean it is ~5x the cost per task of GPT-6 Luna (max) despite similar per-token prices; mid-range cost efficiency, capped by verbose outputs.
- **Overall Score: 59/100.** (68 + 74 + 80 + 15 + 58) / 5 = 59.0. Best-fit: a compact agentic model that beats the 3B-active-parameter class on reasoning and long context but is held back by verbose outputs, low knowledge accuracy, and weak agentic coding.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-10-10
- Method: public internet research across Upstage console documentation, Artificial Analysis (2026-09-30 article + model page), AlphaSignal (2026-10-01), ModelCap (2026-10-09 snapshot), and NOCUTNEWS (2026-10-01). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one when an independent AA board (e.g. Cyber Index) or SWE-bench/Terminal-Bench 2.1 results are published.

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/solar-mini-4/Solar_Mini_4.md` (folder name `solar-mini-4` = filesystem-safe slug; version dots used, never hyphens).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/solar-mini-4/`.
4. No benchmark invented; verified sources cited above. Zero verified benchmarks would have meant self-exclusion as `.md.excluded`.
