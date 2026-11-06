# Claude Sonnet 4.5 — findings by Step 5 Preview

- Source: Anthropic (`anthropic/claude-sonnet-4.5`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5. Now **five generations behind**: Sonnet 5.5 (81.89) → Fable 5.1 (81.23) → Fable 5 (80.81) → Sonnet 5 (64.45) → and this at **47.33, #115 of 1,013** with **13 benchmarks** — the second-thinnest evidence base in this batch. BenchLM classifies it **Non-Reasoning**, the tenth such model in this corpus, and note it has a separately-tracked `Claude Sonnet 4.5 Thinking` sibling with no computed BenchLM score.
- **Short description:** A 2025-era Sonnet whose measured record has aged decisively, and which holds **two of the three worst figures in this research series**: **ARC-AGI-2 13.6% and FrontierMath Tier 4 2.439%**. Its surviving assets are modest and specific: **SWE-bench Verified 77.2%, AIME 2025 87%, GPQA 83.4%** — all vendor-reported, with essentially no independent corroboration.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud Vertex, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; Sonnet 4.5 is Anthropic's 2025 mid-tier. **Knowledge cutoff not disclosed.**
- **IDs:** `anthropic/claude-sonnet-4.5`; `claude-sonnet-4-5` (BenchLM canonical); `anthropic/claude-sonnet-4.5-thinking` (the sibling).
- **Context window:** **200,000 tokens** — one-fifth of the current 1M standard, and the primary reason this model cannot rank in the top context tier.
- **Modalities:** **text and image in; text out** (Design Arena 1,188 Elo is the only visual row).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Anthropic's Opus 4.5 system card is the primary source (so most rows are **vendor-run**, and note the provenance quirk below), with Epoch AI, Gert Labs, VitaBench, the JobBench paper, Anthropic's Sonnet 4.5 news post and Openrouter supplying independent rows. **13 benchmarks total — the second-thinnest evidence base in this batch.**

**A provenance finding is recorded prominently: the majority of this model's vendor rows are attributed to *Anthropic's Claude Opus 4.5 system card*, not to a Sonnet 4.5 system card of its own.** That is weaker provenance than a same-model card, and it means the vendor figures here may describe the Opus tier rather than Sonnet. This is the same cross-citation pattern seen in Claude Opus 4.5's report (which cited Qwen's tables), and it is flagged at each affected figure rather than implied.

Agent / tool use:

- **OSWorld-Verified: 61.4%** (system card); Gert Labs: 48.51%
- **Terminal-Bench 2.0: 50.0%** (system card) — far under the 88%+ reference, and on the *older* harness
- **VITA-Bench: 17.0%** [VitaBench]; **JobBench: 27.7%** [JobBench paper]
- **Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **severely weak on open-ended depth**:

- **ARC-AGI-2: 13.6%** (system card) — **the second-lowest ARC-AGI-2 figure measured in this research series**
- **GPQA: 83.4%** (system card) — fails the 90%+ reference by 6.6 points
- **AIME 2025: 87%** (Anthropic news post) — respectable competition maths
- **FrontierMath v2 Tiers 1–3: 23.9%; Tier 4: 2.439%** [Epoch] — **the second-lowest Tier 4 figure measured in this research series**
- **HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, MRCR, MMLU-Pro, ARC-AGI-1: no verified public score found** — so **reliability is entirely unmeasured and four of five reasoning references are unmeasurable**

Coding — **the least-bad dimension**:

- **SWE-bench Verified: 77.2%** (system card) — 7.8 points under the 85%+ terminal reference
- **LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, SWE-bench Pro, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured and coding rests on a single figure

Multimodal (image-in):

- Design Arena (website): **1,188 Elo** — the only row
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 48/100.** Below the methodology's mid band. OSWorld-Verified 61.4% and Gert Labs 48.51% are the only respectable figures; **Terminal-Bench 2.0 50.0% is ~38 points under the reference and on the older harness, VITA-Bench 17.0% and JobBench 27.7% are near-floor**. **Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA and the AA Agentic Index have no figure at all** — so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 45/100.** Below the methodology's mid band, and the report's central caution. **ARC-AGI-2 13.6% is the second-lowest in this research series and FrontierMath Tier 4 2.439% is the second-lowest** — both strongly negative. GPQA 83.4% fails the 90% reference and AIME 2025 87% is the one respectable figure, on a saturating benchmark. **HLE, CritPt, AA-LCR, the AA Intelligence Index, AA-Omniscience, MRCR, MMLU-Pro and ARC-AGI-1 have no figure at all**, so composite depth and reliability are entirely unknown. The pattern — a decent competition-maths score against near-zero open-ended depth — is the same signature seen across the Non-Reasoning-classified cohort, and BenchLM's classification is consistent with it.
- **Context window: 70/100.** **200,000 tokens** places it exactly on the methodology's 200K tier boundary ("200K = 70"), and it is one-fifth of the current standard. Held at the 70 floor rather than mid-tier because **no AA-LCR figure exists**, no MRCR run exists, and no max-output limit is published — so there is no evidence the window is usable at depth, only that it is nominally 200K.
- **Multimodal: 58/100.** Text + image in with text out, at the bottom of the methodology's 60–70 band and marginally below it. **Design Arena 1,188 Elo is the only visual figure and it is weak**, and **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no measurement** — so the modality claim rests on a single poor row.
- **Coding: 72/100.** Mid-band and the least-bad dimension. **SWE-bench Verified 77.2% is a solid mid-frontier repair figure** and the strongest number in this report. Capped by it sitting 7.8 points under the 85%+ terminal reference, and by the **total absence of LiveCodeBench, AA-SciCode, the AA Coding Index, DeepSWE, SWE-bench Pro, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode** — so the 74%, 70% and 55% references cannot be checked and coding rests on a single benchmark.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary Sonnet-tier SKU with unverified pricing. **Explicitly an estimate, not a measurement** — the mitigating facts are the 200K window (keeping prompt costs down) and Sonnet's historical mid-tier position, but it is not scored at the unverified floor because Sonnet 4.5 was historically priced near the top of the mid range and is strictly dominated on price-per-capability by **Sonnet 5 (64.45)** and **Sonnet 5.5 (81.89 at $2/$10)**.
- **Overall Score: 59/100.** (48 + 45 + 70 + 58 + 72) / 5 = 58.6 → **59**. Recommendation: **a legacy Sonnet with one genuinely useful figure — SWE-bench Verified 77.2% — and little else.** Its two second-worst-in-series figures (ARC-AGI-2 13.6%, FrontierMath Tier 4 2.439%) and the total absence of any reliability measurement make it unsuitable for open-ended reasoning or factual work. It is dominated on every axis by Sonnet 5 (64.45), by Sonnet 5.5 (81.89 at $2/$10), and by **Claude Haiku 5.5 (66.56, refreshed in this same batch)** which scores 19 points higher on BenchLM with AA-HLE 44.4% and the lowest hallucination rate in its cohort. Migrate unless pinned to `anthropic/claude-sonnet-4.5`; the 13-benchmark evidence base makes even this assessment a floor rather than a ceiling.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Anthropic's Opus 4.5 system card as the primary source for most vendor rows, cross-checked against BenchLM's 13-row catalog (which attributes the independent numbers to Epoch AI, Gert Labs, VitaBench, the JobBench paper and Openrouter) and Anthropic's Sonnet 4.5 news post for the AIME figure. **A provenance finding is recorded prominently: the majority of this model's vendor rows are attributed to Anthropic's *Claude Opus 4.5* system card rather than to a Sonnet 4.5 system card of its own — weaker provenance, and it means those figures may describe the Opus tier rather than Sonnet. This is the same cross-citation pattern recorded in the Claude Opus 4.5 report (which cited Qwen's tables), and it is flagged rather than implied.** The second-thinnest evidence base in this batch (13 rows) is stated plainly rather than hedged. The two series-second-worst figures — **ARC-AGI-2 13.6% and FrontierMath Tier 4 2.439%** — are attributed rather than presented bare, and the strong-competition-maths-against-collapsed-depth pattern is stated as consistent with BenchLM's **Non-Reasoning** classification. The unpublished rate card is surfaced with its effect on the cost score stated explicitly. A sibling note is recorded: the separately-tracked `Claude Sonnet 4.5 Thinking` variant has no computed BenchLM score and is **not** the same identity; this report does not merge their rows. Missing benchmarks (Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, MRCR, MMLU-Pro, ARC-AGI-1, LiveCodeBench, AA-SciCode, AA Coding Index, DeepSWE, SWE-bench Pro, Vibe Code Bench, FrontierCode, and every visual benchmark except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 4.5 system card (source of most vendor rows; weaker provenance)](https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf)
  - [Anthropic — Claude Sonnet 4.5 news post (source of the AIME 2025 87% row)](https://www.anthropic.com/news/claude-sonnet-4-5)
  - [BenchLM — Claude Sonnet 4.5 benchmark scores (13 rows, 47.33/100, #115/1015)](https://benchlm.ai/models/claude-sonnet-4-5)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [VitaBench leaderboard](https://vitabench.github.io/)
  - [JobBench paper](https://arxiv.org/abs/2605.26329)
  - [Openrouter — Claude Sonnet 4.5 benchmarks](https://openrouter.ai/anthropic/claude-sonnet-4.5/benchmarks)
  - See also: [`model/claude-sonnet-5/`](claude-sonnet-5.md) (64.45), [`model/claude-sonnet-5.5/`](claude-sonnet-5.5.md) (81.89), [`model/claude-haiku-5.5/`](claude-haiku-5.5.md) (66.56, refreshed in this same batch) — the models this report recommends migrating to
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
