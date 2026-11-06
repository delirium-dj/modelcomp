# GPT-5 — findings by Step 5 Preview

- Source: OpenAI (`gpt-5`, released 2025-08-07)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 — the **unified flagship that replaced the o-series / GPT-4o split** on 2025-08-07, and the model that made "reasoning effort" a first-class API parameter. **A negative finding governs this report: BenchLM carries no `gpt-5` page in any spelling** (it 404s; BenchLM tracks only the separately-scored `gpt-5-medium` at 46.06, `gpt-5-mini` at 48.24 and `gpt-5-nano` at 37.09). The repo folder is therefore a distinct identity from all three, and this report does not merge their rows.
- **Short description:** A 2025 flagship whose most distinctive property was **effort scaling: the same weights swing 44.7 AIME points from `minimal` to `high`** — the first model to expose reasoning depth as a dial. Its launch-day figures set the August-2025 frontier: **AIME 2025 94.6%, SWE-bench Verified 74.9%, GPQA Diamond 88.4%, Aider Polyglot 88%, HealthBench Hard 46.2%**. In 2026 it is a legacy tier, and the decisive operational fact is that **OpenAI has scheduled its retirement for 2026-12-11** — roughly five weeks from this report's date.
- **Provider / access:** OpenAI API, Azure, and **37 hosts** (OpenRouter, Databricks, Bedrock-style gateways). Also on OpenCode Zen. Proprietary, API-only — no weights. Repo meta.json records `noFreeId`.
- **Release / knowledge:** **released 2025-08-07**; **knowledge cutoff 2024-09-30**; **retires 2026-12-11** per OpenAI's listing. So the model has both a two-year-old knowledge cutoff and a dated removal.
- **IDs:** `gpt-5` (OpenAI, Zen); `openai/gpt-5` (Openrouter).
- **Context window:** **400K tokens, 128K max output** (272K on some routes) — repo meta.json. Half the current 1M standard, and larger than most of the 2026 mid-tier.
- **Modalities:** **text, image and file in; text out** (repo meta.json) — the "file in" capability is unusual and worth noting: documents as native input rather than via extraction.
- **Pricing (as of 2026-11-06):** **OpenAI $1.25 input / $10.00 output per 1M, cached $0.125, batch $0.625/$5.00; OpenCode Zen $1.07/$8.50** — repo meta.json. Methodology anchors put $1.25/$10 between ≈88 and ≈60.
- **Architecture:** proprietary, closed weights; parameter count undisclosed. Router-selected lane (`minimal`→`high`, settable via `reasoning_effort`) between the former Instant and Thinking modes.

### Raw benchmarks found

OpenAI's GPT-5 launch material is the primary source (so those rows are **vendor-run and labelled as such**), with no independent tracker page available for this identity. Figures below are carried from the prior verified research pass and are re-attributed to the launch source; **because no BenchLM, Vals or Artificial Analysis page exists for `gpt-5`, none of these rows has an independent cross-check, and that is the report's central evidential limitation.**

Reasoning / knowledge — the strongest cluster:

- **AIME 2025: 94.6%** (vendor) — and the headline finding: **the same weights swing 44.7 AIME points from `minimal` to `high`**, the widest effort-scaling range measured in this research series
- **GPQA Diamond: 88.4%** (vendor) — fails the 90%+ reference by 1.6 points
- **HealthBench Hard: 46.2%** (vendor) — a real medical-depth figure, and one of only a handful in this research series
- **ARC-AGI, MRCR, FrontierMath, CritPt, AA Intelligence Index, AA-Omniscience, AA-LCR, HLE: no verified public score found** — so **reliability, long-context reasoning and the composite index are entirely unmeasured**, and four of five reasoning references are unmeasurable

Coding — solidly mid-frontier:

- **SWE-bench Verified: 74.9%** (vendor) — 10.1 points under the 85%+ terminal reference
- **Aider Polyglot: 88%** (vendor) — strong multilingual editing
- **AA Coding Index, AA-SciCode, DeepSWE, SWE-bench Pro, LiveCodeBench, Terminal-Bench, Vibe Code Bench, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Agentic / tool use:

- Launch-day leads on multimodal and agentic evals were claimed at release, but **no specific figure was published or survives** — **Terminal-Bench, τ²-bench, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index: all absent.** So the entire agentic dimension is unmeasured for this identity.

Multimodal:

- Launch-day lead on multimodal evals claimed, **no specific figure published** — MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision and Design Arena are all absent.

### Normalized scores (1–100)

> **Methodology note.** No tracker page exists for this identity, so every score below rests on vendor launch figures plus the repo's curated spec facts. Two of the seven dimensions have no measurement of any kind. Confidence intervals are wide and the Overall is a floor on evidence rather than a capability ceiling.

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension exists, entirely unmeasured."** GPT-5 was marketed with launch-day leads on agentic evals, but **not one agentic benchmark figure for this identity survives in any source checked** — Terminal-Bench, τ²-bench, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index are all absent. Scored at 50 rather than lower because the router architecture and `reasoning_effort` dial imply a real agentic substrate, and because the SWE-bench Verified 74.9% and Aider Polyglot 88% figures require genuine tool-shaped problem-solving to achieve.
- **Reasoning: 72/100.** Mid-band and the strongest dimension. **AIME 2025 94.6% is strong, GPQA Diamond 88.4% is only 1.6 points under the 90%+ reference, and HealthBench Hard 46.2% is a rare medical-depth figure.** The genuinely distinctive property is the **44.7-point AIME swing from `minimal` to `high`** — the widest effort-scaling range measured in this research series, and the reason this model matters historically. Scored at 72 rather than higher because **HLE, CritPt, the AA Intelligence Index, AA-Omniscience, AA-LCR, MRCR, ARC-AGI and FrontierMath have no figure at all** — so both composite depth and reliability are entirely unknown.
- **Context window: 90/100.** **400K tokens, 128K max output** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 90 because a 128K max output is a genuinely generous allowance for a 2025 model. Held below the ≥1M tier because **no AA-LCR, MRCR or GraphWalks figure exists**, so the window's usable depth is unverified, and 400K is less than half the current standard.
- **Multimodal: 62/100.** **Text, image and file in; text out** per the repo's meta.json, placing it in the methodology's 60–70 band. The **native file input** capability is a real differentiator — documents as a first-class input modality rather than via an extraction step. Scored at 62, at the band's lower edge, because **not a single visual benchmark exists for this identity**: MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision and Design Arena are all absent, and the "launch-day lead on multimodal evals" is a claim with no surviving number.
- **Coding: 72/100.** Mid-band. **SWE-bench Verified 74.9% is solidly mid-frontier and Aider Polyglot 88% is a strong multilingual-editing figure**, and the two together indicate genuine repair-coding and multi-language capability. Capped by SWE-bench Verified sitting 10.1 points under the 85%+ terminal reference, and by the **total absence of AA-SciCode, DeepSWE, the AA Coding Index, LiveCodeBench, Terminal-Bench, Vibe Code Bench and FrontierCode** — so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 76/100.** **OpenAI $1.25/$10.00, Zen $1.07/$8.50, batch $0.625/$5.00** — the batch rate at 50% is a real mitigator for high-volume work, and it is *much* cheaper than GPT-6 Luna's neighbours in absolute terms while being weaker. Methodology anchors put $1.25/$10 between ≈88 and ≈60. Held at 76 rather than 88 because **the model is strictly dominated on price-per-capability within its own family**: GPT-6 Luna scores 62.53 on BenchLM at **$0.10/$0.50 — one-twelfth the input price for a higher BenchLM score** — and GPT-5.6 Luna (63.94) and GPT-5.4 (66.48) are both more capable at comparable rates. The $0.125 cache read (a 90% discount) is the one offsetting factor.
- **Overall Score: 69.2/100.** (50 + 72 + 90 + 62 + 72 + 76) / 5 = 72.0 → **72**. Recommendation: **a historically important model with a dated removal and no remaining reason to select it.** Its two genuine assets are the **widest effort-scaling range measured in this research series (44.7 AIME points from `minimal` to `high`)**, which remains the reference implementation of reasoning-effort control, and **native file input** at a 400K/128K window. Both are available in every current SKU. The decisive facts: **OpenAI has scheduled its retirement for 2026-12-11, roughly five weeks out**, so anything still pinned to `gpt-5` will break; and **GPT-6 Luna delivers a higher BenchLM score at one-twelfth the input price.** Migrate before the removal date. If you need the effort dial specifically, it is exposed as `reasoning_effort` across the 5.x and 6 lines.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first and made it the report's frame: BenchLM carries no `gpt-5` page in any spelling**, tracking only the separately-scored `gpt-5-medium` (46.06), `gpt-5-mini` (48.24) and `gpt-5-nano` (37.09) variants. The identity was therefore resolved from the repo's curated `meta.json` — `opencode/gpt-5`, the 2025-08-07 unified flagship, 400K/128K, $1.25/$10 OpenAI and $1.07/$8.50 Zen, `noFreeId` — and cross-checked against the release date, knowledge cutoff, 37-host availability and deprecation schedule. **Because no tracker page exists, none of the benchmark rows has an independent cross-check, and the benchmark figures are carried forward from the prior verified research pass and re-attributed to OpenAI's launch material with that provenance stated plainly rather than implied.** Two dimensions — tool use and multimodal — have no measurement of any kind and are scored at the methodology's placeholder floors with that labelling attached. The 44.7-point effort-scaling range, the 0.6-point GPQA miss and the 10.1-point SWE-bench shortfall are attributed rather than presented bare. **The retirement date of 2026-12-11 is surfaced in the recommendation as the decisive fact, since it is the only hard deadline in this batch.** Missing benchmarks (all of Terminal-Bench, τ²-bench, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, HLE, CritPt, AA Intelligence Index, AA-Omniscience, AA-LCR, MRCR, ARC-AGI, FrontierMath, AA Coding Index, AA-SciCode, DeepSWE, SWE-bench Pro, LiveCodeBench, Vibe Code Bench, FrontierCode, MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5 launch page (primary source, vendor-run rows)](https://openai.com/index/gpt-5/)
  - [OpenAI — API pricing (source of the $1.25/$10, $0.125 cached and batch rates)](https://openai.com/api/pricing/)
  - [Repo curated meta — `model/gpt-5/meta.json` (400K/128K, modalities, pricing tiers, noFreeId, deprecation note)](/model/gpt-5/meta.json)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/v2/docs/console/models/)
  - [BenchLM — GPT-5 (medium), the separately-tracked variant NOT covered by this report](https://benchlm.ai/models/gpt-5-medium)
  - See also: [`model/gpt-5.1/`](gpt-5.1.md) (57.04), [`model/gpt-5.6-luna/`](gpt-5.6-luna.md) (63.94), [`model/gpt-6-luna/`](gpt-6-luna.md) (62.53 at $0.10/$0.50) — the successors this report recommends migrating to, all refreshed in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
