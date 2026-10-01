# Claude Sonnet 3.5 — findings by Big Pickle

- Source: Anthropic (`claude-3-5-sonnet`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (Anthropic). Two checkpoints in this family: the original `claude-3-5-sonnet-20240620` (2024-06-21) and the upgraded `claude-3-5-sonnet-20241022` (2024-10-22). Where a figure differs by checkpoint, both are given; the folder tracks the family as `"anthropic/claude-3-5-sonnet"`. Distinct from Claude Sonnet 4 / 4.5 / 4.6 / 5 and from Claude 3.7 Sonnet.
- **Short description:** Anthropic's mid-tier Sonnet of its generation — a general-purpose text+vision model whose headline capability was agentic coding. It is now a deprecated model line, retired in favour of later Sonnet generations, and no current aggregator tracks it.
- **Provider / access:** Anthropic API (`claude-3-5-sonnet-20241022`), Amazon Bedrock, Google Cloud Vertex AI, and Claude.ai (web/iOS). Messages API; tool use supported.
- **Release / knowledge:** 2024-06-21 (original), 2024-10-22 (upgraded). **Knowledge cutoff April 2024** — the oldest cutoff among any entry in this comparison, and the single biggest practical limitation of the model today.
- **IDs:** `claude-3-5-sonnet-20241022` (upgraded), `claude-3-5-sonnet-20240620` (original). **No OpenCode Zen ID exists** for this model and there is no free tier.
- **Context window:** **200,000 tokens** total, **64,000 max output** — vendor-published figure (Anthropic launch post, model docs). No 1M window on any 3.5 Sonnet checkpoint.
- **Modalities:** text and image input, **text output only**. Tool use: yes (Claude 3.5-era tool-use beta was the launch feature alongside the model). Structured/JSON output: supported.
- **Pricing (as of 2026-10-01):** **$3.00 in / $15.00 out per 1M** (Anthropic list price, unchanged for the line's life; mirrored on Bedrock and Vertex). Prompt caching available at a discount on first-party API. **No free API tier for this model** — it was free on Claude.ai at launch (2024-06-21 post) but has no free paid-tier equivalent now, and no OpenCode Zen ID.
- **Architecture:** proprietary, closed weights, dense transformer. No parameter count ever disclosed.

### Raw benchmarks found

Verified public numbers, with the checkpoint and harness attached because the scaffold — not the model — dominates the score:

Agent / tool use:

- **SWE-bench Verified: 49.0%** — upgraded Claude 3.5 Sonnet under Anthropic's own agent scaffold (simple prompt + two general-purpose tools); previous SOTA 45%, original 3.5 Sonnet 33%, Claude 3 Opus 22% (Anthropic, "Raising the bar on SWE-bench Verified with Claude 3.5 Sonnet", news post 2024-10-30, engineering post 2025-01-06). Anthropic's own framing: at the time of writing, no model had crossed 50% completion on SWE-bench Verified.
- **TAU-bench (τ-bench):** upgraded model **69.2%** retail domain and **46.0%** airline domain, up from the original Sonnet's 62.6% and 36.0% (vendor-reported in the 2024-10-22 release announcement; independently relayed by the Latent Space interview with Erik Schluntz, Anthropic, 2024-11-28). Same price and speed as the predecessor.
- **OSWorld: 14.9%** screenshot-only (upgraded Claude 3.5 Sonnet, 2024-10-22), against 7.8% for the next-best system (vendor-reported at release, relayed by Artificial Intelligence News). This was the launch vehicle for Anthropic's computer-use beta — a genuine vision-plus-action datapoint, but a hard one.
- **Anthropic internal agentic coding evaluation: 64%** of problems solved versus **38%** for Claude 3 Opus — original June 2024 checkpoint, harness described in the Claude 3 model card addendum. Internal eval, so it is directional rather than comparable to public leaderboards.
- Terminal-Bench 2.1 / 2.0 / 4.0: **no verified public score found.** The llm-stats Terminal-Bench leaderboard (25 models, last updated 2026-10-01) carries no Claude 3.5 Sonnet row; the earliest Anthropic entry is Claude Opus 4. The Terminal-Bench maintainers' own TB 2.0→2.1 comparison table likewise starts at Sonnet 4.6.
- τ³-Banking (tau3-bench) / Tau2-Bench: no verified public score found — τ³ and τ² post-date this model; the τ-bench figures above are the older τ¹ suite and are **not** interchangeable with τ³.
- GDPval-AA: no verified public score found (the benchmark post-dates the model by a year).
- Claw-Eval / ClawProBench: no verified public score found (same reason).
- AutomationBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond / MMLU / MMLU-Pro: **no verified public score with a citable harness.** Anthropic's launch post claims "new industry benchmarks for graduate-level reasoning (GPQA), undergraduate-level knowledge (MMLU), and coding proficiency (HumanEval)", but the accompanying benchmark and vision tables are published as images and no numeric cell could be verified from the text.
- Artificial Analysis Intelligence Index: **no measured score.** AA's comparison pages carry an *estimate* of ~10 for Claude 3.5 Sonnet (Oct '24), explicitly marked "estimated" and not counted as an independent evaluation; AA marks the June checkpoint deprecated and continues benchmarking only its default 10k-token workload.
- HLE / CritPt / AA-LCR: no verified public score found (all post-date the model).
- AA-Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- **SWE-bench Verified: 49.0%** (as above) — the only verified public repository-level coding number for this model.
- **HumanEval: 93.7%** (original June 2024 checkpoint). HumanEval is saturated and superseded by LiveCodeBench/Aider across this comparison, so it is recorded for completeness and carries no weight in the coding score.
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / SWE-bench Pro: **no verified public score found** for either 3.5 Sonnet checkpoint.
- Long context:

- **No long-context retrieval score reported.** The 200K window is a spec; no RULER, MRCR or GraphWalks number exists for this model, so its behaviour near the limit is unmeasured.

Search coverage used (2026-10-01): Anthropic's launch post (2024-06-21), the SWE-bench Verified engineering posts (news 2024-10-30, engineering 2025-01-06), the 2024-10-22 upgrade announcement as relayed by Artificial Intelligence News and the Latent Space interview with Erik Schluntz of Anthropic (2024-11-28), the Claude 3 model card addendum for the internal agentic coding eval, Anthropic model docs/pricing, Artificial Analysis model and comparison pages (including the deprecated June checkpoint), llm-stats' Terminal-Bench and SWE-bench Verified leaderboards, and the SWE-bench official leaderboard index. Every aggregator reachable for a model of this vintage reports no row beyond what is listed above — this is an absence of measurement, not a search failure.

### Normalized scores (1–100)

- **Tool use: 58/100.** This is the model's genuine strength and the one axis where it clears the methodology's mid band on measured numbers rather than inference: **TAU-bench retail 69.2%** and **airline 46.0%** land on/above the 45–60% airline anchor, **SWE-bench Verified 49.0%** shows real multi-step tool-driven repository work, and **OSWorld 14.9%** (screenshot-only, ~2x the next-best system) is a hard vision-plus-action result. Held below the 65–75 range for dated-but-good models because **the anchors the methodology weights most are still all missing**: no Terminal-Bench (any version), no τ³ or τ², no GDPval-AA, no Claw-Eval — and every number above is 2024-vintage under a vendor-built scaffold, which is exactly the reason the methodology treats such results as era-relative rather than current.
- **Reasoning: 40/100.** No verifiable GPQA, MMLU, HLE, CritPt, LCR or Intelligence Index number exists for this exact ID — the vendor's reasoning claims are locked in image tables and the only aggregator figure available is an explicitly unverified ~10 estimate. HumanEval 93.7% and the TAU-bench airline result indicate competent multi-step reasoning, but neither is a reasoning benchmark in the methodology's sense. The score is anchored on inference plus an **April 2024 knowledge cutoff**, by far the oldest in this comparison, which disqualifies it from any knowledge-heavy reasoning task touching the last two years.
- **Context window: 68/100.** 200,000 tokens maps to the methodology's 200K anchor. Held just under the 70 anchor because the window is a spec with **no measured retrieval at any length** — no RULER, MRCR or GraphWalks number exists for this model, so its behaviour near the limit is unmeasured. For a 200K model in 2026 that is a meaningful discount, and it rules out every long-horizon workload that needs a 1M window.
- **Multimodal: 65/100.** Text+image in, text out sits in the methodology's "+image in = 60–70" band, and **OSWorld 14.9% screenshot-only** (nearly double the next-best 7.8%) is a real, hard, non-saturated vision-in-action result rather than a claim. Anthropic also shipped the model as the launch vehicle for computer use, documenting chart/graph interpretation and transcription of imperfect images. Not raised to the 70 ceiling because no standard numeric perception benchmark (MMMU, MMMU-Pro, MathVista, DocVQA) could be verified from the text sources — the launch vision table is an image. No audio, no video, no non-text output, so the 90–100 tier is unreachable.
- **Coding: 57/100.** 49.0% SWE-bench Verified is real, public and vendor-attributed, and the 33% → 49% jump on an identical scaffold cleanly isolates the model-side capability delta of the upgraded checkpoint. But it still sits well below the methodology's mid band (LiveCodeBench ~80% with SciCode <40% → 65–75) and far below the 90–100 frontier anchors (DeepSWE 74%+, Terminal-Bench 85%+, SciCode 55%+). With no LiveCodeBench, no SciCode and no DeepSWE row, and with HumanEval 93.7% too saturated to count, the score rests almost entirely on one 2024 scaffolded number.
- **Cost efficiency: 60/100.** $3.00 in / $15.00 out per 1M is exactly the methodology's ~$3/$15 ≈ 60 reference point, and the October upgrade launched at the same price as its predecessor. Mitigating factors that do not raise it: there is no free API tier and no Zen ID, so caching is the only lever. Cheaper per token than any frontier model of its day, materially more expensive than everything now competing at $0.10–$1.20.
- **Overall Score: 58/100.** (58 + 40 + 68 + 65 + 57) / 5 = 288 / 5 = 57.6 → 58. Best fit: a legacy reference point rather than a recommendation — genuinely capable agentic tool use and the best GUI/computer-use model of 2024, but with an April 2024 knowledge cutoff, zero coverage on any agentic benchmark that still exists in 2026 (Terminal-Bench, τ³, GDPval-AA), and deprecation on every major provider. Current Sonnet or a sub-$1 open-weight model dominates it on every axis the five quality dimensions measure.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-01
- Method: public internet research (Anthropic launch post 2024-06-21; Anthropic SWE-bench Verified posts — news 2024-10-30 and engineering 2025-01-06; the 2024-10-22 upgrade announcement relayed by Artificial Intelligence News for OSWorld and TAU-bench, and by the Latent Space interview with Erik Schluntz of Anthropic 2024-11-28 for TAU-bench; Claude 3 model card addendum for the internal agentic coding eval; Anthropic model docs and pricing; Artificial Analysis model and comparison pages including the deprecated June checkpoint; llm-stats Terminal-Bench and SWE-bench Verified leaderboards last updated 2026-10-01; SWE-bench official leaderboard index). Scores are normalized 1–100 interpretations, not official vendor scores. SWE-bench Verified, TAU-bench and OSWorld are vendor-reported under Anthropic-built scaffolds and are labelled as such rather than presented as independent measurement; HumanEval 93.7% is carried for completeness only. Everything else is reported as "no verified public score found" rather than estimated from vendor image tables, backfilled from later Sonnet generations, or inferred from aggregator row-order approximations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.