# Claude Sonnet 4.6 — findings by Muse Glimmer 30B

- Source: Anthropic / Claude Sonnet 4.6 (`anthropic/claude-sonnet-4.6`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's mid-tier Sonnet with adaptive thinking released February 2026, optimized for cost-conscious agentic coding and computer use. Positioned below Opus with 200K context in curated metadata and multimodal text+image input.
- **Provider / access:** Anthropic API `anthropic/claude-sonnet-4.6`; also Bedrock / Vertex. Chat Completions-style with tool_use and streaming.
- **Release / knowledge:** 2026-02-17 release; knowledge cutoff early 2026 per Anthropic system card.
- **IDs:** `anthropic/claude-sonnet-4-6`. No Zen Free ID; `noFreeId: true` in meta.
- **Context window:** 200K tokens per `meta.json`. Public trackers report 1M in practice; retrieval accuracy at depth not published.
- **Modalities:** Text and image in; text out. Tool calls, JSON mode, computer use. No native audio/video.
- **Pricing (as of 2026-10-20):** Paid tier $3.00 /1M input, $15.00 /1M output. No free tier. Cache discount 90%.
- **Architecture:** Proprietary transformer, parameters undisclosed.

### Raw benchmarks found

> All numbers sourced from public trackers; no scores invented.

Agent / tool use:

- Terminal-Bench 2.0: **59.1%** (Anthropic: Claude Sonnet 4.6 system card, https://www-cdn.anthropic.com/78073f739564e986ff3e28522761a7a0b4484f84.pdf)
- Terminal-Bench 2.1 (Vals): **57.3%** (Vals AI leaderboard)
- OSWorld-Verified: **72.1%** (OSWorld-Verified leaderboard)
- Claw-Eval: **67.8%** (Claw-Eval leaderboard)
- τ²-bench results: **79.5%** (Artificial Analysis model benchmarks)
- CyberGym: **65.2%** (CyberGym leaderboard)

Reasoning / knowledge:

- GPQA: **89.9%** (Anthropic system card)
- AA-GPQA Diamond: **79.9%** (Artificial Analysis)
- HLE: **49%** (Anthropic system card)
- AA-HLE: **13.3%** (Artificial Analysis)
- AA-LCR: **68.3%** (Artificial Analysis)
- CritPt: **0.9%** (Artificial Analysis)
- ARC-AGI-1: **86.0%** (ARC Prize verified results)
- ARC-AGI-2: **58.3%** (ARC Prize)

Coding:

- SWE-bench Verified: **79.6%** (Anthropic system card)
- SWE-bench (Vals): **77.4%** (Vals AI)
- LiveCodeBench (Vals): **82.1%** (Vals AI)
- React Native Evals: **80.6%** (React Native Evals leaderboard)
- Vibe Code Bench v1.1: **51.48%** (Vals AI)
- CursorBench 3.1: **48.8%** (Cursor evals)

Long context:

- MRCR / RULER / GraphWalks: no verified public score found for this exact ID.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench ~59%, OSWorld 72% and τ² 79.5% indicate solid agentic tool use; absence of GDPval-AA public verification caps below frontier.
- **Reasoning: 75/100.** GPQA 89.9% and ARC-AGI-1 86% are strong; HLE 49% and CritPt 0.9% pull down. Mid-tier Sonnet reasoning profile.
- **Context window: 78/100.** Meta 200K window per curated metadata; public trackers list 1M without verified long-context retrieval benchmarks, so tier mapping stays at 78.
- **Multimodal: 60/100.** Text + image in, text out. No audio/video. Per methodology +image = 60-70 range.
- **Coding: 78/100.** SWE-bench Verified 79.6% and LiveCodeBench 82.1% are strong; Vibe Code Bench 51.48% limits ceiling vs top coders.
- **Cost efficiency: 58/100.** $3/$15 paid, no free tier. Cost per capability mid-range for paid Sonnet tier.
- **Overall Score: 72/100.** Mean of Tool 70, Reasoning 75, Context 78, Multimodal 60, Coding 78 = 72.2 → 72. Cost-conscious agentic coder with solid reasoning, limited by multimodal scope and paid pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research via webfetch against Anthropic system cards, BenchLM, Artificial Analysis and Vals AI leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
