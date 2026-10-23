# Claude Sonnet 5.4 — findings by Qwen 3.8 Flash

- Source: Anthropic (`claude-sonnet-5.4`; curated id `opencode/claude-sonnet-5.4`), cross-checked against Anthropic's Sonnet 5 / Sonnet 5.5 announcements, the SWE-bench & Morph leaderboards, emergent.sh / morphllm Sonnet-5 benchmark write-ups and llm-stats / aggregator spec listings
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** A **mid-cycle point release of Anthropic's Claude Sonnet 5** line — the same deployed Sonnet-5 model family, refined with **adaptive thinking, sub-turn checkpointing and computer use**, priced and specced as the workhorse between **Sonnet 5** (GA 2026‑06‑30, $2/$10) and **Sonnet 5.5** (2026‑09‑28, faster/cheaper). It carries the Sonnet-5 signature strengths — elite agentic coding, strong tool/computer use, a 1M-token window and image input — at slightly premium mid-tier pricing. **Paid-only; no free Zen id.**
- **Provider / access:** Anthropic API / Claude platforms (`claude-sonnet-5.4`); closed weights; reachable via routers. No free tier route.
- **Release / knowledge:** **mid-2026** — Anthropic has not surfaced a dedicated, independently-reproduced 5.4 benchmark page; it sits in the window between Sonnet 5 (2026-06-30) and Sonnet 5.5 (2026-09-28). Exact day and knowledge cutoff unconfirmed.
- **IDs:** `claude-sonnet-5.4`; precedes `claude-sonnet-5.5`; descends from `claude-sonnet-5` (and Sonnet 4.6/4.5 lineage); sibling flagship `claude-opus-5`.
- **Context window:** **1,000,000 tokens** / **128,000 max output**.
- **Modalities:** **text + image in**, text out; reasoning yes (adaptive thinking); **tool use + computer use yes**; no audio input.
- **Pricing (as of 2026-10-23):** **$2.50/M input, $12.50/M output, $0.25/M cached read** — a modest premium over Sonnet 5's $2/$10, consistent with a capability-refined point release.
- **Architecture:** proprietary; same Sonnet-5 base, with sub-turn checkpointing (resumable agent turns) and adaptive thinking added.

### Raw benchmarks found

> **Provenance caveat:** 5.4-specific *independent* reproductions are thin — the curated entry itself notes limited dedicated data. The numbers below are the **Sonnet-5 line** figures (Anthropic launch + leaderboards) that 5.4 inherits/refines, reproduced as a *same-model-family bracket*, explicitly **not** presented as fresh co-measured 5.4 rows. One aggregator independently lists the endpoint at 1.0M context, closed source, ~$2.89 blended cost.

Coding (agent):

- SWE-bench Verified: **85.2%** (Sonnet 5 line, morphllm); SWE-bench Pro: **63.2%** (Sonnet 5 line)
- Terminal-Bench 2.1: **80.4%** (Sonnet 5 line; the successor 5.5 lists 70.6% on the harder Terminal-Bench **4.0**, a different, tougher harness)

Reasoning / knowledge:

- HLE (with tools): Sonnet 5 beats GPT-5.5 by ~+5.2 on codingfleet's read; OSWorld-Verified and agentic-search evals "jump more than 13 points" over Sonnet 4.6 (emergent.sh) — strong, Sonnet-5-line.
- GPQA Diamond / MMLU-Pro: Sonnet-5-class high band; no separate 5.4 absolute transcribed.

Agent / tool use:

- Computer use + tool use native; adaptive thinking; the Sonnet 5 line led Anthropic's agentic-search comparisons vs Sonnet 4.6 / Opus 4.8 at matched effort.

Long context / multimodal:

- 1M window / 128K out; image input per the Sonnet vision lane; **no 5.4-specific MRCR/RULER retrieval score** and no audio/image-gen.

### Normalized scores (1–100)

- **Tool use: 88/100.** The Sonnet-5 lane's defining strength — native computer use + tool use with adaptive thinking and sub-turn checkpointing for durable agent loops — inherited directly by 5.4; a touch under the Opus flagship on the very hardest long-horizon orchestration.
- **Reasoning: 84/100.** Frontier-adjacent depth (Sonnet-5-class HLE/GPQA high band, strong agentic-search gains over 4.6), positioned just below the Opus-5 top of the family; scored high but not peak.
- **Context window: 88/100.** A real **1M-token** window with 128K output is top-tier in span; held under the 90s because no 5.4-specific single-window retrieval score is published.
- **Multimodal: 66/100.** Solid image-understanding input (Sonnet vision lane), text out — well above text-only peers, but **no audio input and no image generation**, and 5.4-specific vision benchmarking is absent.
- **Coding: 90/100.** The headline: the Sonnet-5 line is an elite agentic coder (**85.2% SWE-bench Verified, 63.2% SWE-Pro, 80.4% Terminal-Bench 2.1**) and 5.4 is its refinement — genuinely top-of-class for a mid-tier, though the figures are line-inherited rather than freshly co-measured for this exact build.
- **Cost efficiency: 72/100.** $2.50/$12.50 (cached $0.25) is a modest premium over Sonnet 5 — fair value for the added checkpointing/adaptive-thinking, but not a budget lane; the successor 5.5 is explicitly cheaper/faster.
- **Overall Score: 83.2/100.** Half-up mean of the five quality dims (88+84+88+66+90)/5 = 83.2. Best fit: **production agentic coding and computer-use workflows** that want near-Opus capability at mid-tier cost with a 1M window and durable (checkpointed) agent turns. Scored confidently on the Sonnet-5 line it belongs to, with the explicit caveat that **5.4-specific independent benchmark reproduction is still thin** — the numbers are same-family brackets, not fresh co-measurements.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — Anthropic "Introducing Claude Sonnet 5" (GA 2026-06-30) and "Claude Sonnet 5.5" (2026-09-28) announcements bracketing the 5.4 point release, emergent.sh / morphllm / codingfleet Sonnet-5 benchmark tables (85.2% SWE-V, 63.2% SWE-Pro, 80.4% Terminal-Bench 2.1, OSWorld/agentic-search gains), the SWE-bench & Morph leaderboards, and llm-stats plus an independent aggregator listing `claude-sonnet-5.4` (1.0M ctx, closed, ~$2.89 blended). Curated `meta.json` (not scaffolded) supplied the 5.4-specific specs ($2.50/$12.50, $0.25 cached, 1M/128K, adaptive thinking, sub-turn checkpointing, computer use, text+image). Scores are normalized 1–100 interpretations; because dedicated 5.4 reproductions are scarce, coding/reasoning are anchored on the **same-model Sonnet-5 line** and flagged as lineage figures, not fabricated per-endpoint absolutes.
- Revisit trigger: an Anthropic 5.4 model card / launch post with its own published SWE-bench-Verified / GPQA / Terminal-Bench numbers, or an Artificial Analysis single-number row specifically for `claude-sonnet-5.4`.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
