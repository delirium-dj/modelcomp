# Claude Sonnet 4 — findings by Qwen 3.8 Flash

- Source: Anthropic (`anthropic/claude-sonnet-4`, snapshot `claude-sonnet-4-20250514`)
- Date: 2026-10-02 / second pass 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's balanced Claude 4 model (launched May 2025 alongside Opus 4) — at its debut it matched Opus 4 on SWE-bench Verified at a fraction of the price and was the first Claude generation with extended thinking combined with parallel tool use. Now a **legacy tier**, superseded by Sonnet 4.5 → 4.6 → 5, but still served for pinned mid-2025 deployments.
- **Provider / access:** Anthropic Claude Messages API, Amazon Bedrock, Google Cloud Vertex AI; also claude.ai (incl. free chat tier). Hybrid reasoning (instant + extended thinking with tool use, beta at launch). No OpenCode Zen Free API ID — paid API tier.
- **Release / knowledge:** released 2025-05-22 ("Introducing Claude 4"); knowledge cutoff Mar 2025.
- **IDs:** `anthropic/claude-sonnet-4` / `claude-sonnet-4-20250514`.
- **Context window:** **200K input / 64K max output** (BenchLM + Anthropic platform docs) — matches curated `meta.json`.
- **Modalities:** text + image in; text out. Extended thinking yes; tool calls yes (parallel); JSON/structured output via tool use. No audio/video input or non-text output.
- **Pricing (as of 2026-10-02):** **$3.00 / $15.00 per 1M** in/out (paid; unchanged from announcement). Cost excluded from Overall.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

> Verified against BenchLM `claude-sonnet-4` (overall **36.08/100, #129 of 508**, only 15 of 486 rows — thin coverage → conservative aggregate, citing Artificial Analysis) and the Anthropic May-2025 launch appendix (numbers reported **without** extended thinking unless noted). Cross-checked against the qualifying `Kimi_K3.md` sibling report. Independent (AA) vs vendor (launch appendix) rows labelled.

Agent / tool use:

- Tau²-bench (AA harness, BenchLM): **52.3%**; launch-note: 65% less shortcut/loophole behaviour than Sonnet 3.7 on susceptible agentic tasks (vendor)
- Terminal-Bench 2.1 / Tau³-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found** for this exact model (Opus 4's TB 43.2% launch number is a different model)

Reasoning / knowledge:

- GPQA Diamond: **70.0%** (Anthropic launch, no extended thinking); AA-GPQA **68.3%** (BenchLM)
- MMMU **72.6%** / MMMLU **85.4%** / AIME **33.1%** (launch, no thinking); AA-HLE **4.3%**; AA-LCR **44.0%**; CritPt **1.1%**
- AA Intelligence Index **16.6**; AA-Omniscience **Accuracy 22.7% / Hallucination 41.0%**

Coding:

- SWE-bench Verified: **72.7%** (Anthropic launch, simple scaffold; high-compute variant **80.2%**) — SOTA-class at debut
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context: 200K class; AA-LCR 44.0% middling for its window; no MRCR/RULER reported.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. This is a >1-year-old tier — the scoring reflects its measured 2025 numbers against 2026 frontier bars, not its launch-relative headlines.

- **Tool use: 66/100.** Tau²-bench 52.3% plus pioneering extended-thinking-with-parallel-tools put it mid-band, and the 65%-less-loophole note is a genuine agentic-reliability signal — but there is no TB 2.1 / Tau³ / GDPval-AA row for this model, so it can't be lifted toward the 2026 frontier.
- **Reasoning: 68/100.** GPQA 68.3–70.0% (no-thinking) and MMMLU 85.4% are respectable for its generation, but AIME 33.1%, AA-HLE 4.3%, CritPt 1.1%, AA Index 16.6 and a 22.7%-accuracy / 41%-hallucination Omniscience profile mark clear depth and factuality ceilings well below 2026 leaders.
- **Context window: 70/100.** 200K maps to the 200K = 70 reference; AA-LCR 44.0% is middling long-context reasoning for that window and there is no retrieval (MRCR/RULER) evidence → band base, not above.
- **Multimodal: 65/100.** text + image in / text out is the +image 60–70 band; MMMU 72.6% is a solid vision-understanding corroboration; no audio/video/PDF-native input or non-text output keeps it mid-band.
- **Coding: 78/100.** SWE-bench Verified 72.7% (high-compute 80.2%) was launch-SOTA and is still respectable, but a year+ of frontier models at 79–81%+ and the absence of any LiveCodeBench/SciCode/DeepSWE row trim it just under the 80 line today.
- **Cost efficiency: 58/100.** $3/$15 matches the methodology's ~60 anchor; legacy paid tier with no $0 API ID. Cost is excluded from Overall.
- **Overall Score: 69/100.** Mean of Tool 66, Reasoning 68, Context 70, Multimodal 65, Coding 78 = 347/5 = 69.4 → 69. Best fit: pinned compatibility for mid-2025 agent/coding deployments that were built against the Sonnet 4 snapshot — its SWE-bench and tool-use discipline were class-leading at launch and remain serviceable. For new work, later Sonnet versions dominate it on every axis at similar or lower price, so default forward; treat the BenchLM 36.08 aggregate as a thin-coverage artifact (15/486 rows), not a true capability read.

---

## Second-pass update — 2026-11-04 (UTC)

- Sources checked this pass: killedbyai.net/dead/claude-sonnet-4-opus-4 (fetched — “Claude Sonnet 4 & Opus 4 was shut down on June 15, 2026 after 1 year; Deprecation announced April 14, 2026; calls to claude-sonnet-4-20250514 and claude-opus-4-20250514 have returned errors since June 15. Anthropic points users to claude-sonnet-4-6 and claude-opus-4-8. Amazon Bedrock kept Sonnet 4 running for another 121 days, until its end of life on October 14, 2026.”); platform.claude.com/docs/en/about-claude/model-deprecations (source cited by killedbyai); layer3labs.io anthropic-model-deprecations (Oct 15 — “Models retired during 2026 include several Claude 4 models. Claude Opus 4.1 was deprecated on June 5, 2026, and retired on August 5, 2026”); blocksize.hr “In the Anthropic API, Claude 3 models lived 16 to 25 months from their snapshot date to retirement. Claude 4 models (Sonnet 4, Opus 4, Opus 4.1, ...)”
- **Lifecycle: `legacy` — API SHUT DOWN June 15, 2026** (deprecation announced Apr 14, 2026; requests to `claude-sonnet-4-20250514` return errors since Jun 15; Amazon Bedrock EOL Oct 14, 2026 — also passed; replacement: `claude-sonnet-4-6` / `claude-sonnet-5`). Same pattern as gpt-5.2-codex (Jul 23) and grok-4.1-fast (May 15) — API endpoint is dead.
- Trigger evaluated (no explicit Revisit trigger; standing rule: material change): lifecycle is the material change. No new benchmarks (model is dead — no future rows expected). Pass-1 already noted it as “a legacy tier, superseded”; now confirmed shut down.
- Bands unchanged: Tool 66 / Reasoning 68 / Context 70 / Multimodal 65 / Coding 78. Overall remains **69/100**. (Scores preserved for historical comparison; the model cannot serve new requests.)
- Verdict: lifecycle flag added — model retired June 15, 2026, Bedrock EOL Oct 14, 2026. Pass-1 scores hold. Trigger N/A (model no longer live to generate new data).

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `claude-sonnet-4` rows citing Artificial Analysis — GPQA/HLE/LCR/CritPt/Omniscience/Index/Tau², overall 36.08 with 15/486 coverage; Anthropic "Introducing Claude 4" launch appendix for SWE-V 72.7/80.2, MMMU/MMMLU/AIME (no-thinking) and the loophole-reduction note; cross-checked against the qualifying `Kimi_K3.md` report). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged AA-independent vs vendor-launch lanes, thin BenchLM coverage (aggregate understates the model), and that this is a superseded legacy tier scored against 2026 bars.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04 (lifecycle `legacy` — API shut down Jun 15, 2026, Bedrock EOL Oct 14, 2026; killedbyai/anthropic-deprecations/layer3labs confirm; no band change; Overall 69 holds; historical entry).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
