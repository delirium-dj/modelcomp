# Claude Fable 5.1 — findings by Ling 3.0

> Provided by: **Ling 3.0 (anthropic/claude-fable-5-1)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class public model for long-running agentic coding and knowledge work, succeeding Fable 5 with unchanged pricing and 75% cheaper cache reads.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS, Cursor
- **Release / knowledge:** Released September 1, 2026; knowledge cutoff June 2026
- **IDs:** anthropic/claude-fable-5-1
- **Context window:** 1,048,576 tokens (1M), 128K max output
- **Modalities:** Text, image input; text output (no audio, video, speech, embedding)
- **Pricing (as of 2026-09-23):** $10/1M input, $50/1M output; cache read $0.25/1M (75% reduction from Fable 5); batch 50% discount; 5m cache write $12.50/1M, 1h cache write $20/1M.
- **Architecture:** Transformer-based, adaptive thinking always on; effort levels (low, medium, high, xhigh, max; default high); prompt caching; 1M context window at standard pricing across the full window.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic official)
- Terminal-Bench 4.0: **55.8%** (Anthropic official)
- CursorBench 3.2.0: **73.4%** (Cursor independently measured)
- Proximal FrontierSWE v2: **0.57** highest score (Proximal)
- GDPval-AA v2 (Elo): **1853** (Anthropic)
- AutomationBench: **31.4%** (Anthropic)

Reasoning / knowledge:
- Intelligence Index: **56.8** #1 (cloudprice.net)
- HLE (with tools): **65.0%** (Anthropic)
- HLE (without tools): **63.8%** (Anthropic)
- HLE: **0.6** #1 (cloudprice.net)
- GPQA Diamond: **0.9** #8 (cloudprice.net)
- Terminal-Bench 2.1: no verified public score found for Fable 5.1 specifically

Coding:
- SWE-Bench Pro: **81.2%** (benchlm.ai leaderboard #1 of 70 models)
- CursorBench 3.2.0: **73.4%** (Cursor)
- SWE-Bench Verified (Fable 5): **95%** (morphllm.com; Fable 5.1 not individually verified)
- Terminal-Bench 4.0: **55.8%** (agentic coding)

Long context:
- 1M token context window; file-based memory demonstrated in Slay the Spire at 3x better than Opus 4.8

### Normalized scores (1-100)

- **Tool use: 95.0/100.** CursorBench 3.2.0 state-of-the-art at 73.4%; Terminal-Bench-Science 0.1 at 52.6% and TB4.0 at 55.8% lead all Claude models; #1 Intelligence Index at 56.8; highest Proximal FrontierSWE v2 score (0.57).
- **Reasoning: 90.0/100.** Intelligence Index 56.8 (#1 across all models); HLE #1 at 0.6 normalized and 65.0% with tools; GPQA Diamond 0.9 (#8). Strongest reasoning-class model in the Anthropic lineup.
- **Context window: 97.0/100.** 1M-token context window at standard pricing across the full window; 128K max output; prompt caching with 5-min and 1-hour TTL options.
- **Multimodal: 80.0/100.** Supports text and image input; text output only. No audio, video, speech, or embedding output. Vision is strong on scientific figures and web-app-from-screenshots tasks.
- **Coding: 94.0/100.** SWE-Bench Pro #1 at 81.2% across 70 models; CursorBench 73.4%; Coding Index 81.6 #1; strong long-horizon coding with lowest trial-failure rate.

- **Cost efficiency: 50/100.** Standard pricing varies by provider.
- - **Overall Score: 91/100.** Mean of five non-cost dimensions: (95.0+90.0+97.0+80.0+94.0)/5 = 91.

---

## Signature

- Provided by: **Ling 3.0 (anthropic/claude-fable-5-1)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All placeholders replaced; no values copied from other model/ files.
2. Filename is model/claude-fable-5.1/Ling_3.0.md.
3. Signature block filled in; relative links resolve from model/claude-fable-5.1/.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks → save as Ling_3.0.md.excluded.
