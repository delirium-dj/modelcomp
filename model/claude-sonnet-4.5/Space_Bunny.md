# Claude Sonnet 4.5 — findings by Space Bunny

- Source: Anthropic (`claude-sonnet-4-5-20250929`; extended thinking)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change, and a sourcing problem this pass confirms rather than resolves.** BenchLM's Claude Sonnet 4.5 page sources its **SWE-bench Verified 77.2%, Terminal-Bench 2.0 50%, OSWorld-Verified 61.4%, GPQA 83.4%, and ARC-AGI-2 13.6% all to the *Claude Opus 4.5* system card** — the same problem the prior pass flagged for ARC-AGI-2, now shown to affect four of its five headline figures. **GPQA 83.4% is therefore *not* recorded as a Sonnet 4.5 score here.** New independent data is thin and poor: **FrontierMath v2 Tier 4 at 4.167%**. Separately, this is **the one model in the Claude family that is genuinely vendor-deprecated**: Anthropic's deprecations table lists `claude-sonnet-4-5-20250929` as deprecated 2026-09-30, **retiring 2026-11-30**, replacement `claude-sonnet-5-5`. Net: **Tool use 84 → 78**, **Reasoning 78 → 74**, **Multimodal 65 → 68**, **Coding 93 → 88**, **Cost 65 → 62**, Overall **78.0 → 75.6**.

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's 2025 frontier Sonnet model for complex coding, computer use, reasoning, and long-horizon agents. Released 2025-09-29 and, unlike the rest of the Claude 4.x/5.x line still under evaluation, it is now a **retiring API model**.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-5`, snapshot `claude-sonnet-4-5-20250929`); Claude Code, Claude apps, Amazon Bedrock, Google Cloud, Microsoft Foundry. A separate **Claude Sonnet 4.5 Thinking** configuration row also exists.
- **Lifecycle — genuinely deprecated, and the only Anthropic model in this dataset that is:** Anthropic's model-deprecations table lists `claude-sonnet-4-5-20250929` as **Deprecated** (notified 2026-09-30) with **retirement on 2026-11-30** and **`claude-sonnet-5-5` as the recommended replacement**. This is a vendor deprecation with a hard date, not an evaluation-status banner. **Days remaining from this report: 51.**
- **Release / knowledge:** Announced **2025-09-29**. Knowledge cutoff reported as **January 2025** (Anthropic model overview) — now 21 months stale.
- **IDs:** `claude-sonnet-4-5`; snapshot `claude-sonnet-4-5-20250929`.
- **Context window:** **200K tokens; 64K max output** (Anthropic models overview). The announcement discusses a **1M-context SWE-bench experiment reaching 78.2%**; that is an experiment, not the standard specification, and is not treated as a general retrieval result.
- **Modalities:** Text and image input; text output. Extended thinking, tool use, computer use, code execution, and JSON/structured workflows supported. Audio/video not listed.
- **Pricing (verified 2026-10-10, unchanged):** **$3.00 per 1M input / $15.00 per 1M output.** Prompt caching: 5-minute write $3.75, 1-hour write $6.00, cache read $0.30; Batch API $1.50 / $7.50. Regional endpoints add ~10%.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

**Anthropic's own Sonnet 4.5 announcement (2025-09-29):**

- **SWE-bench Verified: 77.2%**, averaged over 10 trials with a 200K thinking budget, standard scaffold with bash and file editing
- **SWE-bench Verified high-compute variant: 82.0%** — after multiple parallel attempts with internal patch selection (a methodology OpenAI and Google do not use for their headline numbers, so it is not directly comparable to other models' single-attempt figures)
- **OSWorld-Verified: 61.4%** — official OSWorld-Verified, 100 max steps, averaged across four runs
- 1M-context SWE-bench experiment: **78.2%**

**Sourced by BenchLM to the *Claude Opus 4.5* system card — NOT verified Sonnet 4.5 scores:**

- SWE-bench Verified **77.2%** · Terminal-Bench 2.0 **50.0%** · OSWorld-Verified **61.4%** · **GPQA 83.4%** · **ARC-AGI-2 13.6%**

These are recorded for completeness and are **excluded from scoring** where the prior pass did not already have a first-party value.

**Independent:**

- **FrontierMath v2 Tiers 1–3: 13.495%**; **Tier 4: 4.167%** (Epoch AI official leaderboard)
- VITA-Bench **17.0%** (VitaBench leaderboard); JobBench **27.7%** (JobBench paper, arXiv 2605.26329); Gert Labs **48.51%**
- Design Arena Website **1196** (OpenRouter)
- AIME 2025 **87%** (upstream/launch reporting)
- BenchLM overall **47.80/100**, rank **#107 of 889** (conservative — only 13 of 625 benchmarks covered)

**Still absent:** SWE-bench Pro, SWE-bench Multilingual, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench, HLE, τ²-bench, MCP-Atlas, Toolathlon, GDPval-AA, and any long-context retrieval benchmark at 200K.

Sources consulted: [BenchLM Claude Sonnet 4.5 (updated 2026-10-10)](https://benchlm.ai/models/claude-sonnet-4-5), [Claude Platform model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations), [Claude Sonnet 4.5 model overview](https://platform.claude.com/docs/en/models/sonnet-4-5), [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard), [VitaBench leaderboard](https://vitabench.github.io/), [JobBench paper](https://arxiv.org/abs/2605.26329), [Gert Labs rankings](https://gertlabs.com/rankings), and [Claude Sonnet 4.5 announcement](https://www.anthropic.com/news/claude-sonnet-4-5), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 78/100.** Reduced from 84. **OSWorld-Verified 61.4%** and **Terminal-Bench 2.0 50.0%** are the only real agentic measurements, and neither is on a current harness. The independent rows are weak: **JobBench 27.7%**, **VITA-Bench 17.0%**, **Gert Labs 48.51%**. There is still **no τ²-bench, GDPval-AA, Toolathlon, or MCP-Atlas figure at all** for this model, and no Terminal-Bench 2.1, 3.0, or 4.0 row.
- **Reasoning: 74/100.** Reduced from 78. **AIME 2025 at 87%** is the one strong first-party math figure. The reductions: **FrontierMath v2 Tier 4 at 4.167% and Tiers 1–3 at only 13.495%** (Epoch AI) place this model at the bottom of the Claude 4.5 family on hard mathematics; **GPQA 83.4% is not credited to this model** because BenchLM sources it to the Opus 4.5 system card; and the only ARC-AGI-2 figure available (**13.6%**) is likewise an Opus 4.5 row, meaning **this model has no verified abstract-reasoning score of its own**.
- **Context window: 70/100.** Unchanged. The standard **200K window with 64K max output** places it below every 1M-class model in this dataset, and there is **no long-context retrieval benchmark at 200K**. The 1M SWE-bench experiment at 78.2% is a single-task experiment and is explicitly not treated as a context guarantee.
- **Multimodal: 68/100.** Raised from 65. **Design Arena Website at 1196 Elo** is a live preference signal and the only new evidence. Still held near the bottom of the tier: **no absolute vision benchmark** exists for this model, no audio or video input is listed, and output is text-only.
- **Coding: 88/100.** Reduced from 93. **SWE-bench Verified 77.2%** over 10 trials and **82.0%** on the high-compute variant remain respectable — and were launch-leading in September 2025. The reductions: the 82.0% figure relies on a **parallel-attempt-with-patch-selection methodology no other lab uses**, so it is not comparable to peers' single-attempt numbers; **Terminal-Bench 2.0 is only 50.0%**; and there is **no SWE-bench Pro, LiveCodeBench, SciCode, or DeepSWE** figure at all. Claude Sonnet 5 scores 79.6% on SWE-bench Verified with a normal methodology at $2/$10.
- **Cost efficiency: 62/100.** Reduced from 65. **$3.00 / $15.00** was mid-priced in 2025; in 2026 it is simply expensive — **Claude Sonnet 5 and Sonnet 5.5 are both $2.00 / $10.00**, Claude Haiku 5.5 starts at $0.10/$0.50, and the Flash tier is $0.30–$1.60. Paying 50% more than the direct successor for a model that is measurably weaker on every axis is not defensible, and with **retirement in 51 days** the migration is mandatory rather than optional.
- **Overall Score: 75.6/100.** (78 + 74 + 70 + 68 + 88) / 5 = 378 / 5 = 75.6, down from 78.0. The prior pass credited a 93 on Coding from figures that, on inspection, are substantially sourced to the **Opus 4.5** system card — 93 overstated what is verifiable for *this* model. **Best fit: existing pinned Sonnet 4.5 deployments only.** **Migrate now, not later:** `claude-sonnet-5-5` is named as the replacement, costs a third less on input, has a 1M context against 200K, and scores 38.2 on the AA Index against an estimate in the mid-20s here. Do not start new work on this model — it has 51 days.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Anthropic's Sonnet 4.5 announcement and model overview, the Claude Platform deprecations table, BenchLM, Epoch AI's FrontierMath v2 leaderboard, VitaBench, the JobBench paper, Gert Labs, and OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the central finding of this pass is a sourcing defect, not a new number:** BenchLM's Claude Sonnet 4.5 page draws **five of its figures — SWE-bench Verified, Terminal-Bench 2.0, OSWorld-Verified, GPQA, and ARC-AGI-2 — from the Claude Opus 4.5 system card.** The prior pass caught this for ARC-AGI-2 alone and credited the rest. GPQA is now excluded from scoring and the remaining four are labelled. **Lifecycle confirmed as a genuine vendor deprecation** (retires 2026-11-30, replacement `claude-sonnet-5-5`) — distinct from the evaluation-status banners found on Claude Opus 4.5 and Sonnet 4.6 in earlier batches, both of which turned out to be Active. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct retrievals rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4_5_Recheck.md`, using the same headings.