# Grok Build 0.1 — findings by Step 5 Preview

- Source: xAI / SpaceXAI (`grok-build-0.1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's first dedicated agentic **coding** model and the engine behind the Grok Build CLI (terminal TUI, plan mode, up to 8 parallel sub-agents in Git worktrees, native MCP). It absorbed the retired `grok-code-fast-1` slug (redirects here as of 2026-05-15) and succeeded that model as the flagship of the Grok Code line. API-only, proprietary, no weights.
- **Provider / access:** xAI API (`x-ai/grok-build-0.1`, Chat Completions + Responses API), OpenRouter (`x-ai/grok-build-0.1`), Vercel AI Gateway, Kilo Code, and the Grok Build CLI (bundled in SuperGrok / X Premium+).
- **Release / knowledge:** GA 2026-05-20 (CLI launched 2026-05-14, API announcement 2026-05-29); knowledge cutoff November 2024.
- **IDs:** `x-ai/grok-build-0.1` (xAI API, OpenRouter). No separate Free ID.
- **Context window:** 256,000 tokens; max output 256,000 (TopReviewed/xAI) — Kilo Code lists 230,400 max output. "No text output limit" per OpenRouter description, but the concrete documented cap is 256K/230.4K.
- **Modalities:** text + image in → text out (reads diagrams, mockups, error screenshots); always-on reasoning (not user-configurable); function calling; structured outputs (JSON schema); native MCP. Not audio/video.
- **Pricing (as of 2026-10-09):** $1.00/M input, $2.00/M output, $0.20/M cached input (xAI docs / OpenRouter average). Some trackers show $0.20/$1.50 — trust docs.x.ai.
- **Architecture:** proprietary; no parameter count or MoE detail published.

### Raw benchmarks found

> Sourced across OpenRouter (Artificial Analysis + Vals AI), Kilo Code (official Terminal-Bench 2.0 + PinchBench), and TopReviewed (xAI internal harness). Multiple independent harnesses agree on 256K context, text+image in, $1/$2 pricing, and the 2026-05-20 release.

Agent / tool use:

- Terminal-Bench 2.1: **52.1%** (Artificial Analysis, via OpenRouter)
- Terminal Bench 2.0 (official Kilo eval): **50.6%** completion, $30.70 avg cost per attempt (Kilo Code leaderboard)
- τ-Bench Banking: **13.4%** (Artificial Analysis) — weak at general banking tool use
- GDPval-AA: **28.5%** (Artificial Analysis) — low; coding specialist, not a general agent
- PinchBench: "strong average success across OpenClaw-style autonomous runs" (Kilo Code; qualitative, no single % captured)

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (Artificial Analysis) — near-frontier
- HLE (Humanity's Last Exam): **38.3%** (Artificial Analysis) — near the 40% frontier line
- CritPt: **9.1%** (Artificial Analysis) — low physics/critical-point reasoning
- Artificial Analysis Intelligence Index: **27.2** (broad aggregate — notably low vs the strong GPQA, reflecting a coding-specialized profile)
- AA-Omniscience Accuracy: **51.5%**; AA-Omniscience Non-Hallucination Rate: **6.9%** (low factual reliability outside coding)

Coding:

- SWE-bench Verified: **70.8%** (xAI internal harness, inherited from the grok-code-fast-1 lineage that now redirects to this model; TopReviewed)
- AA Coding Index: **51.5** (Artificial Analysis) — mid
- Vals AI Vibe Code Bench v1.1: **13.3%** (Vals AI, via OpenRouter) — low on vibe-style app building

Long context:

- AA-LCR: **74.7%** (Artificial Analysis long-context retrieval) — solid but not frontier
- MRCR / RULER: no verified public score found

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.1 52.1% and Terminal Bench 2.0 50.6% sit squarely in the "mid" band, but τ-Bench Banking 13.4% and GDPval-AA 28.5% are weak — it is a coding-agent specialist, not a broad tool-use model. Consistent mid-50s.
- **Reasoning: 72/100.** GPQA Diamond 89.5% and HLE 38.3% are near-frontier, but the broad AA Intelligence Index (27.2) and CritPt 9.1% pull it back — strong on knowledge-grad reasoning, weak on broad/physics reasoning. Capped by the low aggregate index.
- **Context window: 76/100.** 256K tokens maps to the 200K–500K tier (65–84); AA-LCR 74.7% is solid retrieval (not the 95%+ needed for the top of the tier). Capped by the 256K ceiling — the smallest in the Grok lineup.
- **Multimodal: 66/100.** Text + image in → text out puts it in the "+image in" band (60–70); no video/audio/PDF documented and text-only output caps it.
- **Coding: 74/100.** SWE-bench Verified 70.8% is strong (near Claude Sonnet 4.6's 72.7%), but AA Coding Index 51.5 and Vibe Code Bench 13.3% are only mid/low — strong on Verified, weak on vibe-style coding. Capped by the low Vibe Code Bench and mid coding index.
- **Cost efficiency: 90/100.** $1.00/$2.00 per 1M ($0.20 cached) is cheap for an agentic coding model — between the ~$1.25/$4.25 (≈88) and ~$0.60/$2.20 (≈92) reference points. No Free tier; paid pricing scored.
- **Overall Score: 69/100.** Mean of Tool 55, Reasoning 72, Context 76, Multimodal 66, Coding 74 = 68.6 → 69. Best-fit: a cheap, fast second-tier coding agent for scoped/parallel work — reach for it when price and sub-agent parallelism matter more than top-tier single-shot ceiling (Claude/GPT still lead on SWE-bench ceiling).

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenRouter Artificial Analysis + Vals AI benchmark table, Kilo Code official Terminal-Bench 2.0 + PinchBench leaderboard, TopReviewed xAI-harness review, docs.x.ai model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Re-score note: this replaces the 2026-10-09 `.md.excluded` self-exclusion, which correctly found zero benchmarks at the time; Artificial Analysis and Vals AI have since indexed the model and xAI published SWE-bench Verified 70.8%, meeting the re-score trigger.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.
