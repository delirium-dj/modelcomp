# Claude Sonnet 4 — findings by Qwen 3.8 Flash

- Source: Anthropic (`anthropic/claude-sonnet-4`, snapshot `claude-sonnet-4-20250514`)
- Date: 2026-10-02 (UTC)
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

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `claude-sonnet-4` rows citing Artificial Analysis — GPQA/HLE/LCR/CritPt/Omniscience/Index/Tau², overall 36.08 with 15/486 coverage; Anthropic "Introducing Claude 4" launch appendix for SWE-V 72.7/80.2, MMMU/MMMLU/AIME (no-thinking) and the loophole-reduction note; cross-checked against the qualifying `Kimi_K3.md` report). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged AA-independent vs vendor-launch lanes, thin BenchLM coverage (aggregate understates the model), and that this is a superseded legacy tier scored against 2026 bars.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
