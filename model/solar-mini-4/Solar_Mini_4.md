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
