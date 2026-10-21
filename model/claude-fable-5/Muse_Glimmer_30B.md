# Claude Fable 5 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-fable-5
- Date: 2026-10-20
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic’s first Mythos-class model above Opus, positioned for long-horizon coding and knowledge work with adaptive thinking. Superseded by Claude Fable 5.1.
- **Provider / access:** Anthropic Claude API `claude-fable-5`; Amazon Bedrock `anthropic.claude-fable-5`; Google Cloud Vertex; Microsoft Foundry. Chat Completions API with adaptive thinking.
- **Release / knowledge:** Released 2026-06-09; reliable knowledge cutoff Jan 2026, training data cutoff Jan 2026.
- **IDs:** anthropic/claude-fable-5
- **Context window:** 1,000,000 total tokens; 128,000 max output tokens. Verified via platform docs.
- **Modalities:** Text and image in; text out; adaptive reasoning yes; tool use yes; JSON mode supported.
- **Pricing (as of 2026-10-20):** $10 / 1M input, $50 / 1M output; 5m cache write $12.50 / 1M, 1h cache write $20 / 1M, cache read $1 / 1M; paid only, no free ID.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: 84.3% (Anthropic Claude Fable 5 and Claude Mythos 5 system card)
- Terminal-Bench 3.0: 34.0% (FrontierBench leaderboard)
- Tau²-bench: 98.5% (Artificial Analysis tau2-bench leaderboard)
- GDPval-AA: 1747 Elo (Anthropic system card); normalized 55.5% (Artificial Analysis)
- AA EnterpriseOps-Gym: 51.1% (Artificial Analysis)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: 92.6% (Artificial Analysis model benchmarks)
- HLE: 55.5% (Artificial Analysis humanity’s-last-exam leaderboard)
- AA-LCR: 82.3% (Artificial Analysis); MLCR-AA: 64.4% (Artificial Analysis)
- CritPt: 28.6% (Artificial Analysis)
- Artificial Analysis Intelligence Index: 49.6% (Artificial Analysis); BenchLM overall 81.35/100 #7 of 967
- Omniscience Accuracy: 65.4% / Hallucination Rate: 63.6% (Artificial Analysis)

Coding:

- SWE-bench Verified: 95% (Anthropic system card)
- SWE-bench Pro: 80% (Anthropic system card)
- LiveCodeBench: 89.8% (Vals AI leaderboard)
- SciCode / AA-SciCode: 61.0% (Artificial Analysis)
- FrontierCode 1.1 Main: 53.5% (Cognition)
- AA Coding Index: 76.5% (Artificial Analysis)
- CursorBench 3.1: 70.6% (Cursor evals)

Long context:

- MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 84.3% and Tau² 98.5% with GDPval-AA 1747 Elo place it near frontier agentic tool use; capped by Terminal-Bench 3.0 34.0% and lack of public Claw-Eval.
- **Reasoning: 92/100.** GPQA Diamond 92.6% and HLE 55.5% with AA-LCR 82.3% support frontier-level reasoning; CritPt 28.6% and Intelligence Index 49.6% limit the ceiling.
- **Context window: 100/100.** 1M total / 128K output meets the ≥1M tier.
- **Multimodal: 65/100.** Image in, text out; no audio/video in.
- **Coding: 95/100.** SWE-bench Verified 95% and SWE-bench Pro 80% with LiveCodeBench 89.8% and SciCode 61.0% indicate top-tier coding; FrontierCode 53.5% caps absolute ceiling.
- **Cost efficiency: 30/100.** $10/$50 per 1M with $1 cache read is paid frontier pricing.
- **Overall Score: 89/100.** Mean of Tool 92, Reasoning 92, Context 100, Multimodal 65, Coding 95. Best fit for long-horizon autonomous coding and knowledge work where cost is secondary.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
