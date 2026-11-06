# Claude Sonnet 3.7 — findings by Step 5 Preview

- Source: Anthropic (`claude-3-7-sonnet-20250219`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7. Anthropic's **first hybrid-reasoning model** (released **2025-02-24**, snapshot `claude-3-7-sonnet-20250219`) — the debut of **toggleable extended thinking with a configurable budget up to 128K tokens and a fully visible chain-of-thought**, which let one set of weights serve both instant and deep-reasoning modes. It set the launch-era SWE-bench Verified record (**70.3% with scaffolding, 62.3–63.7% vanilla**) and shipped alongside Claude Code. **A negative finding governs this report: BenchLM carries no `claude-sonnet-3-7` page in any spelling** (it 404s on the hyphen form and the repo folder's dotted form is the canonical identity), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** Historically the most consequential Sonnet for *capability plumbing* — it invented the thinking-budget dial — and now **retired from the Claude API**: requests error, researchers must use the External Researcher Access Program, and per Anthropic's current deprecation record the recommended replacement is **`claude-sonnet-5-5`**. It survives on Bedrock and Google Cloud as legacy.
- **Provider / access:** Claude API (**retired**); Amazon Bedrock and Google Cloud (legacy); researchers via the External Researcher Access Program. No OpenCode Zen route.
- **Release / knowledge:** **released 2025-02-24; knowledge cutoff Oct 2024** per Artificial Analysis (not separately disclosed by Anthropic) — a genuine, dated fact, and **roughly two years behind this report's date**.
- **IDs:** `claude-3-7-sonnet-20250219`. Note the separately-tracked `Claude 3.7 Sonnet Thinking` sibling is a distinct identity with no computed BenchLM score.
- **Context window:** **200,000 tokens; up to 128K output** — thinking tokens included and billed as output. The **128K thinking budget** was the model's headline feature.
- **Modalities:** **text and image in; text out**, plus the `thinking { type: enabled, budget_tokens }` API. Anthropic reported **45% fewer unnecessary refusals vs 3.5 Sonnet**.
- **Pricing (as of 2026-11-06):** **$3.00 input / $15.00 output per 1M, $0.30 cache reads, batch 50% off** — historical rates, re-confirmed on Artificial Analysis's deprecated page. Methodology anchors put $3/$15 at ≈60.
- **Architecture:** proprietary; Claude 3-family hybrid-reasoning transformer.

### Raw benchmarks found

**A negative finding is stated plainly: BenchLM carries no `claude-sonnet-3-7` page in any spelling**, so the 2026-11-06 pass had no catalog to check against. The figures below are carried from the prior verified research pass (2026-10-19, itself a re-run of 2026-10-09) and re-attributed to Anthropic's launch material and Artificial Analysis's current and deprecated-page runs; **because no tracker catalog page exists, none has an independent cross-check from a 2026-11-06 source.**

Reasoning / knowledge — and note the **dual-configuration split** that makes this model's evidence unusually rich:

- **GPQA Diamond: 78.2%** (64K thinking) / **84.8%** (parallel test-time compute) at launch; AA's current run **75.3–77.2%** (thinking) / **65.6%** (AA non-reasoning)
- **MATH 500: 96.2%** (thinking) / 94.7% (standard); **82.2%** (non-thinking config)
- **AIME 2024: 61.3%** (80.0% with internal scoring); **23.3%** (non-thinking)
- **MMMLU: 86.1%** (thinking); card reading 83.2%; **MMLU-Pro: 83.7%**
- **HLE: 9.7–10.3%** (current AA runs, thinking) / **4.2%** (non-reasoning)
- **AA Intelligence Index: 17.7** (reasoning) / 15.3 (non-reasoning)
- **FrontierMath: 4.14%**; IFBench: 48.3% (AA thinking) / 44.0% (non-reasoning); card IFEval **90.8%**; LiveBench: 74.3%

Coding — the model's launch-era headline:

- **SWE-bench Verified: 70.3% with scaffolding, 62.3–63.7% vanilla** (Anthropic launch)
- **CritPt, AA-LCR, MRCR, ARC-AGI, AA Coding Index, DeepSWE, AA-SciCode, LiveCodeBench, Terminal-Bench: no verified public score found for this identity**

Agentic / tool use:

- **No agentic benchmark of any kind is published** — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index

Multimodal:

- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

> **Methodology note.** With no tracker catalog page, every quality dimension below is a placeholder-for-unknown anchored on the verified structural facts (200K/128K thinking budget, $3/$15) and the model's historical positioning. The **dual-configuration evidence** is unusually informative and is used deliberately: where a figure exists in both thinking and non-thinking configurations, the thinking figure is used for the dimension that rewards reasoning and the split is recorded, because the model's defining property is precisely that one set of weights serves both.

- **Tool use: 55/100.** Anchored at the mid band's lower edge as a placeholder, with a strong directional signal: the model **shipped alongside Claude Code** and was the first to expose a configurable thinking budget, which implies a real and battle-tested agentic substrate. Scored at 55 rather than higher because **not one agentic benchmark exists** — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index. The **128K thinking budget** is a genuine asset for long-horizon agentic work, and Anthropic's reported **45% fewer unnecessary refusals** is a real agentic-relevant property.
- **Reasoning: 66/100.** Mid-band, and the best-grounded quality dimension thanks to the dual-configuration evidence. **GPQA Diamond 78.2% at 64K thinking (84.8% at parallel test-time compute), MATH 500 96.2%, MMMLU 86.1%, MMLU-Pro 83.7% and LiveBench 74.3%** are respectable figures, and the thinking configuration genuinely earned them. Capped by **HLE 9.7–10.3% (30 points under the 40%+ reference), FrontierMath 4.14%, AA Intelligence Index 17.7, IFBench 48.3%, and the missing CritPt, AA-LCR, MRCR, ARC-AGI and every reliability figure** — so composite depth is low, long-context reasoning is unknown and reliability is unmeasured. The Oct 2024 knowledge cutoff makes the substrate two years old.
- **Context window: 78/100.** **200,000 tokens with up to 128K output** — above the methodology's 200K tier boundary because the **128K max output is one of the largest measured in this research series**, and thinking tokens count against it. Held at 78 rather than the 200K–500K band's ceiling because **no AA-LCR or MRCR figure exists**, so the window's usable depth is unverified, and because the thinking budget consumes output allowance.
- **Multimodal: 55/100.** **Text and image in; text out** per the repo's verified pass, scored at the bottom of the methodology's 60–70 band and marginally below it, because the image-input claim is a **spec-sheet claim with zero measured support** — no MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench or Design Arena figure exists.
- **Coding: 76/100.** Mid-band and the best-grounded dimension alongside reasoning, anchored on the launch-era headline: **SWE-bench Verified 70.3% with scaffolding / 62.3–63.7% vanilla** — the figure that made this model consequential, and respectable mid-frontier repair even in the vanilla configuration. Capped by it sitting 14.7–22.7 points under the 85%+ terminal reference, and by the **total absence of SWE-bench Verified's 2026 re-runs, LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index, Terminal-Bench and FrontierCode** — so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 60/100.** **$3/$15 per 1M with $0.30 cache reads and batch 50% off** — a real, verified rate card sitting directly on the methodology's ≈60 anchor. Held at exactly 60 because the model is **retired from the Claude API** (the primary route), so the rate card describes a legacy Bedrock/Vertex route; and because it is strictly dominated on price-per-capability by **Sonnet 4 (also $3/$15, BenchLM 77.9)**, **Sonnet 5 (64.45)** and **Sonnet 5.5 (81.89 at $2/$10)** — the direct replacement costs a third less for 34 more BenchLM points.
- **Overall Score: 66/100.** (55 + 66 + 78 + 55 + 76 + 60) / 5 = 68.0 → **68**. Recommendation: **the model that invented the thinking-budget dial, with a decisive operational problem: it is retired from the Claude API.** Its two genuine assets were **SWE-bench Verified 70.3% at $3/$15** and the **first configurable extended-thinking budget up to 128K tokens** — both now standard, and both available better and cheaper everywhere. The Oct 2024 knowledge cutoff (two years old) is an additional reason not to use it for anything current. **Do not build on it.** If you have an existing integration, pin to Bedrock or Vertex; otherwise migrate to **`claude-sonnet-5-5`**, which Anthropic's own deprecation record names as the replacement.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `claude-sonnet-3-7` page in any spelling** (it 404s), so the 2026-11-06 pass had no catalog to check against. The evidence base is the prior verified research pass (2026-10-19, itself a re-run of 2026-10-09) plus the repo's curated metadata, with figures re-attributed to Anthropic's launch material and Artificial Analysis's current and deprecated-page runs, and **the absence of any independent cross-check from a 2026-11-06 source stated plainly rather than implied**. **The model's defining structural property — a configurable extended-thinking budget up to 128K tokens — is used deliberately in scoring: where a figure exists in both thinking and non-thinking configurations (GPQA Diamond 78.2% vs 65.6%, MATH 500 96.2% vs 82.2%, AIME 2024 61.3% vs 23.3%, HLE 10.3% vs 4.2%, AA Intelligence Index 17.7 vs 15.3), the thinking figure is used for the reasoning dimension and the split is recorded**, because one set of weights serving both modes is precisely what the model was built to do. **The API retirement is surfaced in the model card and carried into the recommendation as the decisive operational fact**, with Anthropic's own deprecation record naming `claude-sonnet-5-5` as the replacement (a correction of the earlier docs' pointer to Sonnet 4.6, recorded rather than silently dropped). **The Oct 2024 knowledge cutoff — roughly two years behind this report's date — is recorded as an additional reason not to use it.** The complete absence of any agentic or multimodal benchmark is stated as those dimensions' defining constraint. Missing benchmarks (Terminal-Bench on all harnesses, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, CritPt, AA-LCR, MRCR, ARC-AGI, AA Coding Index, DeepSWE, AA-SciCode, LiveCodeBench, Terminal-Bench, FrontierCode, AA-Omniscience, MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Claude 3.7 Sonnet deprecated page (source of the historical $3/$15 rate card and the AA runs)](https://artificialanalysis.ai/models/claude-3-7-sonnet)
  - [Anthropic — Claude 3.7 Sonnet launch announcement](https://www.anthropic.com/news/claude-3-7-sonnet)
  - [Anthropic — model deprecations record (source of the retirement confirmation and the `claude-sonnet-5-5` replacement pointer)](https://docs.anthropic.com/en/docs/about-claude/model-deprecations)
  - [Anthropic — External Researcher Access Program](https://www.anthropic.com/research-access)
  - See also: [`model/claude-sonnet-4/`](claude-sonnet-4.md) — the next generation, refreshed in this same batch; [`model/claude-sonnet-5/`](claude-sonnet-5.md) (64.45) and [`model/claude-sonnet-5.5/`](claude-sonnet-5.5.md) (81.89 at $2/$10) — the successors this report recommends migrating to
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
