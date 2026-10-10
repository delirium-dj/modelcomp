# Claude Sonnet 4 — findings by Space Bunny

- Source: Anthropic (`claude-sonnet-4-20250514`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-27
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **No score changes — this is a documentation-only pass, and deliberately so.** The model has been **retired** since 2026-06-15, there is no live endpoint, and no new benchmark can be generated for it. **Scores are carried unchanged: Tool 55, Reasoning 58, Context 78, Multimodal 68, Coding 72, Cost 60, Overall 66.2.** Three factual corrections were made to the prior version, one of them material:

> **CORRECTION 1 (material): the prior report named `claude-sonnet-4-6` as the replacement model. Anthropic's own deprecations table names `claude-sonnet-5-5`.** The 2026-04-14 deprecation announcement lists `claude-sonnet-4-20250514` → **`claude-sonnet-5-5`**, retiring 2026-06-15. `claude-sonnet-4-6` is Active and is *not* the designated migration target. Anyone who followed the prior report's advice migrated a generation too far back.
>
> **CORRECTION 2: lifecycle status is "Retired", not "deprecated".** Anthropic's status table lists `claude-sonnet-4-20250514` as **Retired** (deprecated 2026-04-14, retired 2026-06-15). The prior report described AA as flagging it "deprecated"; the authoritative status is Retired, which means requests now fail.
>
> **CORRECTION 3: the BenchLM profile no longer resolves.** `https://benchlm.ai/models/claude-sonnet-4` and `.../claude-sonnet-4-20250514` both return **404** as of 2026-10-10, consistent with removal from the benchmark index. The prior report's cited composite (36.08/100, #129 **of 508**) refers to a benchmark pool that now numbers 889 models, so that rank is stale and is retained below as historical only.

## Model card

- **Name:** Claude Sonnet 4 (May 2025 generation, mid-tier)
- **Short description:** Anthropic's May 2025 Sonnet, a strong coding/agent model in its own launch window and the direct predecessor of the 4.5/4.6 Sonnet line. **It is retired** — Anthropic shut `claude-sonnet-4-20250514` down on 2026-06-15 and named **`claude-sonnet-5-5`** as the replacement. Kept here as a historical reference point, not a current recommendation. Distinct from `claude-sonnet-4.5` / `claude-sonnet-4.6` / `claude-sonnet-5`.
- **Provider / access:** Anthropic Messages API, model ID `claude-sonnet-4-20250514`; formerly AWS Bedrock and Google Vertex AI. **Retired from all three as of 2026-06-15 — no live endpoint to score against.**
- **Release / knowledge:** released **2025-05-22**; knowledge cutoff **2025-03-01** (Artificial Analysis technical specifications) — now 19 months stale.
- **IDs:** `claude-sonnet-4-20250514`. No Free-tier Zen ID exists; Artificial Analysis shows $0.00/$0.00 only because the model is withdrawn from the API, **not** because it is free.
- **Context window:** **200,000 tokens** default, **64K max output** (Anthropic pricing/docs). A **1M-token context beta** was offered for the Claude 4 generation and Artificial Analysis lists the context window as 1.0M, so 1M was reachable but was never the default served limit — the 200K figure is what the public evals below were run at.
- **Modalities:** text + image in (PDF via document blocks), text out; **non-reasoning (no extended thinking)**; tool calls; no audio/video input; no non-text output.
- **Pricing (historical, at retirement):** list price was **$3.00 / 1M input, $15.00 / 1M output** (Anthropic pricing page, confirmed by two independent aggregators; $18.00 blended per 1M+1M). **Model no longer purchasable.**
- **Architecture:** proprietary. Anthropic has **not** disclosed a parameter count — a third-party tracker lists "~500B dense", which is unverified and is not repeated as fact here.

### Raw benchmarks found

> **Historical evidence, frozen.** The model is retired and its BenchLM profile now 404s; no new measurements can exist. All values below are carried unchanged from the 2026-09-27 pass, which cross-checked multiple aggregators.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (absent from the 61-model Terminal-Bench 2.1 leaderboard)
- Terminal-Bench 2.0: **35.5%** (LLM Stats leaderboard, rank 13/25, all rows self-reported; anotherwrapper reports the same)
- τ²-bench: **52.3%** (BenchLM); τ-bench Retail **80.5%**, Airline **60.0%** (anotherwrapper, single source)
- GDPval-AA, Claw-Eval, ClawProBench, Toolathlon, MCP-Atlas: **no verified public score found**
- Other agentic: OSWorld **38.6%** / OSWorld-Verified **35.8%**, APEX-Agents **9.3%**, The Agent Company **43.2%**, Gert Labs **39.66%**, JobBench **18.4%**, DeepResearch Bench **47.8%**

Reasoning / knowledge:

- GPQA Diamond: **77.8%** (vendor/aggregator) / **68.3%** (BenchLM AA-GPQA) / **74.0%** (aiflashreport) — a ~10-point spread across sources, all three listed as harness variance
- HLE: **7.8%** (anotherwrapper); **AA-HLE 4.3%** (BenchLM)
- AA-LCR: **44.0%**; CritPt: **1.1%** (BenchLM) / **0.3%** (anotherwrapper) — near-zero physics reasoning on both sources, consistent rather than a harness glitch
- **AA Intelligence Index: 17** (#41/299 among non-reasoning models; "well above average" vs a class median of 7, but far below the 60+ frontier band)
- **Omniscience Accuracy / Hallucination Rate: 22.7% / 41.0%**; **AA-Omniscience Index: −9.0%** — a negative knowledge-reliability index; more wrong answers than right on the probed set
- Other knowledge: MMLU **88.7%**, MMLU-Pro **79.4%**, MMMLU **86.5%**, MATH **84.4%**, AIME 2025 **70.5%**, ARC-AGI-2 **5.9%**, ARC-AGI-1 Verified **23.8%**
- BenchLM composite **36.08/100, #129 of 508** — historical; the profile now 404s

Coding:

- SWE-bench Verified: **72.7%** (BenchLM; aiflashreport 72.3% — same launch-era run)
- **SWE-bench Pro: 74.8%** (single source, uncorroborated, unusually high for this generation — **provisional**, not carried into scoring as authoritative)
- LiveCodeBench **59.7%**; SciCode **40.0%**; Aider Polyglot **56.4%**
- Vibe Code Bench, DeepSWE, AA Coding Agent Index: **no verified public score found** — the model was retired before the current coding-agent index existed
- Multimodal: MMMU **74.4%**, AA-MMMU-Pro **62.4%**, Design Arena Website **1157**

Long context: **No long-context retrieval reported at window length.** No MRCR, RULER, or GraphWalks figure exists. The only long-horizon signal is **AA-LCR 44.0%**; LongBench-style rows are absent.

Sources consulted: [Anthropic model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations) (retrieved 2026-10-10, authoritative for lifecycle), [BenchLM Claude Sonnet 4](https://benchlm.ai/models/claude-sonnet-4) (now 404 — removal confirmed), Artificial Analysis model page and Intelligence Index methodology, LLM Stats Terminal-Bench leaderboard, Anthropic pricing documentation, aiflashreport and anotherwrapper aggregators, accessed 2026-09-27 and re-verified 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 55/100.** Unchanged. Terminal-Bench 2.0 35.5% and OSWorld 38.6% sit in the methodology's mid band; τ²-bench 52.3% and τ-bench Retail 80.5% keep it out of the bottom. Capped by APEX-Agents 9.3%, JobBench 18.4%, Gert Labs 39.66%, and by having no row at all on Terminal-Bench 2.1, GDPval-AA or Claw-Eval — the lanes that now define this axis.
- **Reasoning: 58/100.** Unchanged. GPQA Diamond 77.8% / 68.3%, MMLU 88.7% and AIME 2025 70.5% are respectable. Capped by HLE 7.8% (AA-HLE 4.3%), a negative Omniscience Index of −9.0% with a 41.0% hallucination rate, ARC-AGI-2 at 5.9%, CritPt at 1.1%/0.3%, and an AA Intelligence Index of only 17 — squarely the "GPQA 60–80%, HLE <10%, LCR <40%, Index 20–35 → 55–65" band, at the low end because the index is below even that band.
- **Context window: 78/100.** Unchanged. The default served limit is 200K (methodology maps to 70); the documented 1M context beta justifies the uplift toward the 500K–1M tier. Held below 85 because no MRCR/RULER/GraphWalks retrieval was ever measured, AA-LCR is a mid-band 44.0%, and max output is only 64K.
- **Multimodal: 68/100.** Unchanged. Text and image in with document/PDF blocks, text out — the "+image in = 60–70" band, supported by MMMU 74.4% and AA-MMMU-Pro 62.4%. Capped because nothing leaves the text channel and there is no audio or video input.
- **Coding: 72/100.** Unchanged. SWE-bench Verified 72.7% was a strong launch number; SciCode 40.0% and Aider Polyglot 56.4% are respectable. It sits in the 65–75 mid band rather than the 90+ frontier band because LiveCodeBench is only 59.7%, Terminal-Bench 2.0 is 35.5%, and the single-source SWE-bench Pro reading (74.8%) is uncorroborated and explicitly treated as provisional.
- **Cost efficiency: 60/100.** Unchanged. $3.00 in / $15.00 out is the methodology's explicit ~$3/$15 ≈ 60 anchor. This is a **historical** price — the model is withdrawn, and Artificial Analysis's current $0.00/$0.00 display reflects unavailability, not value. Scoring it on the live display would reward a model nobody can buy.
- **Overall Score: 66.2/100.** (55 + 58 + 78 + 68 + 72) / 5 = 66.2 — **unchanged, and correctly so.** A capable 2025-vintage coder whose tool-use and knowledge-hygiene numbers have been overtaken by every current-generation alternative, and which is no longer purchasable. **Best read: a historical baseline.** For any live workload, migrate to **`claude-sonnet-5-5`**, which is the replacement Anthropic names — priced at **$2.00 / $10.00**, a third less than this model's list price, and stronger on every measured dimension.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Direct retrieval of Anthropic's official model-deprecations page (authoritative for lifecycle and replacement targets), plus a re-check of BenchLM's Claude Sonnet 4 profile which now returns 404, cross-referenced against the Artificial Analysis model page, the LLM Stats Terminal-Bench leaderboard, Anthropic pricing documentation, and the aiflashreport and anotherwrapper aggregators. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **a pass that changes no scores is the correct outcome for a retired model, and the value of this pass is in the corrections rather than the numbers.** The material one: **the prior report named `claude-sonnet-4-6` as the migration target; Anthropic names `claude-sonnet-5-5`.** That is a one-generation error with a direct operational consequence, and it is corrected here. Second, the lifecycle status is **Retired**, not Deprecated — requests fail, so "deprecated" understates the severity. Third, the BenchLM profile now 404s and its cited rank (#129 of 508) is against a stale 508-model pool where the index now carries 889; it is retained as historical and no longer treated as a live figure. **No benchmark was re-measured or re-estimated, and the seven scores are carried unchanged**, because the model has had no live endpoint since 2026-06-15 and no new evidence can exist. The single-source SWE-bench Pro 74.8% remains flagged provisional and is still not relied upon. Search-provider rate limiting (HTTP 429) persisted; the deprecations correction rests on direct retrieval of Anthropic's own documentation and does not depend on search.
- Future sources: add a new file next to this one, e.g. `Sonnet_4_Recheck.md`, using the same headings.