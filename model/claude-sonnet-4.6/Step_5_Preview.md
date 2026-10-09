# Claude Sonnet 4.6 — findings by Step 5 Preview

- Source: Anthropic (`claude-sonnet-4-6`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's February 2026 mid-tier model (released 2026-02-17) — the first Sonnet with a 1M-token context window (beta at launch, GA 2026-03-13 at standard pricing) and the first Sonnet preferred over its Opus predecessor (59% vs Opus 4.5). Near-Opus computer use (72.5% OSWorld vs 72.7%) and coding (79.6% vs 80.8% SWE-bench Verified) at $3/$15; notably the family's best GraphWalks 1M structured long-context reasoning. Legacy status now (Sonnet 5/5.5 succeeded it).
- **Provider / access:** Claude API `claude-sonnet-4-6`; Amazon Bedrock, Google Cloud, Microsoft Foundry; was the default model on claude.ai Free/Pro at launch; Claude Code. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-02-17; reliable knowledge cutoff Aug 2025, training data cutoff Jan 2026.
- **IDs:** `claude-sonnet-4-6` (Claude API alias and clouds).
- **Context window:** 1,000,000 tokens (GA, no beta header, standard pricing); 128K max output (300K with the Batch beta header).
- **Modalities:** Text and images in → text out. Adaptive thinking + extended thinking (effort levels); context compaction (beta); tool use.
- **Pricing (as of 2026-10-09):** $3.00 / MTok input, $15.00 output; cache reads $0.30; 5m cache write $3.75 / 1h $6; Batch API $1.50 / $7.50 (50% off).
- **Architecture:** Proprietary (pre-4.7 tokenizer — ~30% fewer tokens than the newer Claude tokenizer for the same text).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.1%** (system card, no thinking budget); Terminal-Bench 2.1: **71.2%** (AA, max) / **57.3%** (Vals Terminus-2)
- Terminal-Bench 4.0: **3%** (AA, max — the Feb-generation models fall off the new hard suite)
- MCP-Atlas: **61.3%** (system card); one release tracker lists the MCP-Atlas leaderboard at 69.5%
- OSWorld-Verified: **72.5%** (system card; leaderboard 72.1%) — within 0.2 pts of Opus 4.6; **OSWorld 2.0: 8.3%** (paper)
- GDPval-AA: **Elo 1633** (system card; another tracker lists 1676) — best-in-class office Elo at launch
- τ²-bench: Retail **91.7%** / Telecom **97.9%** (system card)
- Claw-Eval: **67.8%** (leaderboard); Finance Agent: **63.3%** (system card; Vals 51.0%); CyberGym 65.2%; JobBench 36.9%
- Vending-Bench Arena: **~$5,700** simulated profit (beats GPT-5.2; below Opus 4.6's ~$7,400)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (system card, 10 trials, max effort); Vals 85.6%; AA 79.9%
- HLE: **33.2% no tools / 49.0% with tools** (system card); AA 33.6%
- ARC-AGI-2: **58.3%** verified (60.4% at high effort — a 4.3x jump over Sonnet 4.5's 13.6%)
- MMMLU: **89.3%**; MMLU-Pro 87.3% (Vals); AIME 92.29% (Vals); MATH-500 97.8%
- AA Intelligence Index: **24.7** (rebased scale); CritPt: **3.1%** (AA, max)
- AA-Omniscience: index −3.5, accuracy 38.6%, hallucination rate 68.5%

Coding:

- SWE-bench Verified: **79.6%** (system card, 10 trials; 80.2% with a prompt modification); Vals 77.4%; SWE-bench Multilingual 75.9%
- DeepSWE v1.1: **~30%** (29.93% with tools per DataLearner)
- CursorBench 3.1: **48.8%**; Vibe Code Bench v1.1: **51.48%** (Vals) / 55.77% (Claude Code per publicai)
- LiveCodeBench: **82.1%** (Vals); FrontierCode 1.1 Main: **24.3%**; Code Migration 39.89% (Vals)
- LMArena Elo: text ~1459–1472, code 1521

Multimodal:

- MMMU-Pro: **74.5% no tools / 75.6% with tools** (system card); Vals 83.6%; CharXiv Reasoning 72.4%; LAB-Bench FigQA and WebArena-Verified reported in the system card

Long context:

- 1M-token window at standard pricing; **MRCR v2 8-needle 128K average: 84.9%**; **GraphWalks BFS 1M: F1 68.4 (64k) / 73.8 (max)** — stronger than Opus 4.6's 41.2/38.7 on the same eval; AA-LCR: 80.0% (AA, max)

### Normalized scores (1–100)

- **Tool use: 72/100.** OSWorld-Verified 72.5%, GDPval-AA Elo 1633 (best-in-class at launch), τ² Telecom 97.9% and Claw-Eval 67.8% are solidly mid-band; capped by Terminal-Bench 2.1 at 57.3–71.2% depending on harness, Terminal-Bench 4.0 at 3%, OSWorld 2.0 at 8.3% and Finance Agent 51.0% on Vals.
- **Reasoning: 76/100.** GPQA 89.9% (system card) / 85.6% (Vals), ARC-AGI-2 58.3% and MMMLU 89.3% are strong; capped by HLE 33.2% without tools, CritPt 3.1%, the AA Index at 24.7 (rebased) and an Aug-2025 knowledge cutoff — the oldest in this comparison.
- **Context window: 95/100.** 1M tokens GA at standard pricing with 128K output (300K batch) is the ≥1M tier, and it backs it with the best measured structured long-context reasoning in the Claude family (GraphWalks 1M F1 73.8) plus MRCR 128K 84.9%; only the unverified ≥98%-at-512K top tier keeps it off 100.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU-Pro 74.5–83.6% (Vals) and CharXiv 72.4%; no video/audio input or non-text output.
- **Coding: 74/100.** SWE-bench Verified 79.6% (80.2% prompted) and LiveCodeBench 82.1% are frontier-adjacent for a mid-tier model; capped by DeepSWE ~30%, CursorBench 3.1 48.8%, FrontierCode 24.3% and Vibe Code Bench 51.5% — the long-horizon and end-to-end agentic-coding gap that Sonnet 5 later closed.
- **Cost efficiency: 60/100.** $3/$15 per MTok maps to the methodology's ~$3/$15 ≈ 60 tier, with $0.30 cache reads and 50%-off batch softening it; superseded on price by Sonnet 5's $2/$10 with no free tier.
- **Overall Score: 77/100.** Best-fit recommendation: a proven legacy value model — near-Opus computer use, best-in-family 1M structured long-context reasoning and office Elo at Sonnet pricing; pick Sonnet 5/5.5 or a current frontier model for new agentic-coding deployments.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Anthropic Sonnet 4.6 model page/pricing/launch post + system card, Vals AI, Artificial Analysis, BenchLM, DigitalApplied, ZBuild, ShawnHack, publicai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.
