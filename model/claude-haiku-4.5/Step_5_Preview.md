# Claude Haiku 4.5 — findings by Step 5 Preview

- Source: Anthropic (`claude-haiku-4-5-20251001`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5 (API ID `claude-haiku-4-5-20251001`, alias `claude-haiku-4-5`)
- **Short description:** Anthropic's October 2025 small model — "what was recently at the frontier is now cheaper and faster": near-Sonnet-4 coding performance at one-third the cost and more than twice the speed. It was Anthropic's safest model at launch by automated alignment assessment (lower overall misalignment than Sonnet 4.5 and Opus 4.1), released under the lighter ASL-2 standard vs ASL-3 for its larger siblings, and it beats Sonnet 4 at some tasks (notably computer use). In 2026 it is a legacy model — still active on all platforms, but Anthropic's own docs steer users to Claude Haiku 5.5 (1M context, $0.10/$0.50) and the retirement commitment lands "not sooner than October 15, 2026" — i.e., this week.
- **Provider / access:** Claude API, Amazon Bedrock (incl. InvokeModel), Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS, Claude Code and Claude apps.
- **Release:** 2025-10-15. Knowledge cutoff Feb 2025 (training data to Jul 2025).
- **Context window:** 200K tokens; max output 64K tokens.
- **Modalities:** Text and images in → text out; manual extended thinking (`thinking.type: "enabled"` with `budget_tokens`, max 128K budget in evals); computer use via `computer_20250124`; no adaptive-thinking/effort parameter on this generation.
- **Pricing (as of 2026-10-09):** $1/M input, $5/M output (5m cache write $1.25, 1h cache write $2, cache read $0.10, batch 50% off).
- **Speed:** ~88.6 tok/s output (AA, Anthropic API); third-party catalogs list 100–244 tok/s depending on platform.

### Raw benchmarks found

Anthropic launch table (Oct 2025, 128K thinking budget where applicable):

- SWE-bench Verified: **73.3%** (avg of 50 trials, full 500-problem set)
- Terminal-Bench: **41.0%** (Terminus 2; 40.21% without thinking, 41.75% with 32K budget)
- τ²-bench: **Retail 83.2%**, **Airline 63.6%**, **Telecom 83.0%**
- OSWorld-Verified: **50.7%**
- AIME 2025: **96.3%** (with Python) / **80.7%** (no tools)
- GPQA Diamond: **73.0%**; MMMLU: **83.0%**; MMMU (validation): **73.2%**

Artificial Analysis (independent):

- Intelligence Index: **17** (16.88 reasoning / 15.41 non-reasoning); Coding Index **43.89** (29.64 non-reasoning); Agentic Index **10.31** reasoning / **32.59** non-reasoning
- HLE: **10.38%** (reasoning) / **4.22%** (no reasoning); SciCode **42.25%** / 34.38%; IFBench **54.29%** / 42.04%; τ²-Bench Telecom (AA run) **54.68%** / 32.46%
- Throughput ~88.6 tok/s; TTFT 15.18 s (Anthropic API)

Other third-party evaluations:

- ARC-AGI-1: **47.67%** (32K thinking); ARC-AGI-2: **4.03%** (32K) / 2.78% (16K)
- SWE-bench Pro: **39.45%**; SWE-bench Multilingual: **64.7%** (vectorwire/SWE-bench)
- SimpleQA: **no verified public score found** (Epoch AI's SimpleQA Verified lists 13.2%, but neither figure is Anthropic-vendor-confirmed)

### Normalized scores (1–100)

- **Tool use: 60/100.** Vendor τ²-bench numbers are strong (Retail 83.2%, Telecom 83.0%, Airline 63.6%) and OSWorld 50.7% shows real computer-use ability; the independent read is much colder — AA Agentic Index 10.31 (reasoning mode), AA's own τ²-Telecom rerun at 54.68%, Terminal-Bench 41.0% and a 31.0% Finance Agent v2 score. Genuine tool plumbing, mid-band agentic reliability.
- **Reasoning: 62/100.** GPQA Diamond 73.0%, MMMLU 83.0% and AIME 80.7–96.3% sit inside the mid band (GPQA 60–80%, HLE <10–15%); HLE 10.38% and ARC-AGI-2 4.03% show the ceiling — frontier-grade for its price tier, not a frontier reasoning model.
- **Context window: 70/100.** 200K tokens is the floor of the 200K–500K band (65–84), with no published long-context retrieval curve (MRCR/RULER/NIAH-style) to push it higher.
- **Multimodal: 66/100.** Text + image in → text out is the 60–70 band; MMMU 73.2% (validation) is solid image understanding for a small model and OSWorld 50.7% adds screen interaction, but there is no video or audio input and no non-text output.
- **Coding: 66/100.** SWE-bench Verified 73.3% (near-Sonnet-4 coding at a third of the price — the headline claim, and verified at 50-trial averaging) plus SWE-bench Multilingual 64.7%; held mid-band by Terminal-Bench 41.0%, SciCode 42.25%, SWE-bench Pro 39.45% and Coding Index 43.89 — strong classic issue-resolution coding, weaker on agentic/terminal and research-grade coding.
- **Cost efficiency: 88/100.** $1/$5 per million tokens is the efficient tier (the methodology's ~$1.25/$4.25 ≈ 88 point), with 10% cache reads and 50% batch discounts; 88.6 tok/s keeps latency-sensitive workloads cheap in practice. In 2026 the cheaper Haiku 5.5 ($0.10/$0.50) outclasses it on both axes.
- **Overall Score: 65/100.** Best-fit recommendation: the efficiency workhorse of its generation — classification, extraction, routing, sub-agent orchestration and near-frontier SWE-bench coding at small-model prices; as of October 2026 it is superseded by Haiku 5.5 on price, context and speed, and its API retirement window is opening.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Anthropic launch post + methodology notes, Haiku 4.5 system card, platform docs, Artificial Analysis via vectorwire, llmboard and third-party trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Haiku_5_5.md`, using the same headings.
