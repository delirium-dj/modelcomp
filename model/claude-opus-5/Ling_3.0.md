# Claude Opus 5 — findings by Ling 3.0

> Provided by: **Ling 3.0 (anthropic/claude-opus-5)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus-class flagship at half the Fable 5 price, delivering near-frontier intelligence with a new per-request effort toggle.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, claude.ai, Claude Code, Claude Cowork
- **Release / knowledge:** Released July 24, 2026; knowledge cutoff May 2026
- **IDs:** anthropic/claude-opus-5
- **Context window:** 1,048,576 tokens (1M), 128K max output (300K via Batch API beta)
- **Modalities:** Text, image input; text output
- **Pricing (as of 2026-09-23):** $5/1M input, $25/1M output; fast mode $10/$50 (~2.5x speed); cache read $0.50/1M; batch 50% discount
- **Architecture:** Transformer-based, adaptive thinking always on; effort levels (low, medium, high, xhigh; default high); prompt caching; 1M context window default and maximum.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **84.64%** (vals.ai leaderboard)
- Terminal-Bench 4.0 (xhigh): **53.9%** (tbench.ai)
- Terminal-Bench 3.0 (max): **42.7%** (benchlm.ai)
- Frontier-Bench v0.1: **43.3%** (Anthropic official)
- CursorBench 3.2: **70.1%** (Anthropic comparison)
- OSWorld 2.0: **70.5%** (Anthropic comparison)

Reasoning / knowledge:
- HLE: **64.7%** (DataLearner leaderboard)
- ARC-AGI-2: **90.4%** (DataLearner leaderboard)
- ARC-AGI-3: **30.2%** (Anthropic official)
- GPQA Diamond: no verified public score found
- Intelligence Index: no verified public score found

Coding:
- SWE-bench Verified: **96.0%** (Anthropic official)
- SWE-bench Pro: **79.2%** (Anthropic official)
- Frontier-Bench v0.1: **43.3%** (Anthropic official)
- CursorBench 3.2: **70.1%**

Long context:
- 1M-token context window at standard pricing; prompt caching with up to 90% savings on cached reads

### Normalized scores (1-100)

- **Tool use: 94.0/100.** Terminal-Bench 2.1 at 84.64% (#2); Frontier-Bench v0.1 at 43.3% more than doubles Opus 4.8; CursorBench 70.1%; OSWorld 2.0 at 70.5%. Strong terminal and agentic coding performance.
- **Reasoning: 89.0/100.** HLE at 64.7%; ARC-AGI-2 at 90.4% (exceptional); ARC-AGI-3 at 30.2% (~3x next-best model). No verified GPQA Diamond score found, but ARC-AGI-2 confirms elite reasoning.
- **Context window: 97.0/100.** 1M-token context window default and maximum; prompt caching with up to 90% savings; 128K standard output, 300K via Batch API beta.
- **Multimodal: 78.0/100.** Text and image input; text output only. No audio, video, or embedding output. Vision capabilities are strong but not as broad as Gemini-class models.
- **Coding: 98.0/100.** SWE-bench Verified at 96.0% (#1); SWE-bench Pro at 79.2% (within 1 point of Fable 5); Frontier-Bench v0.1 at 43.3% (#1); CursorBench 70.1%. Near-frontier coding performance at half the price of Fable 5.

- **Cost efficiency: 50/100.** Standard pricing varies by provider.
- - **Overall Score: 91/100.** Mean of five non-cost dimensions: (94.0+89.0+97.0+78.0+98.0)/5 = 91.

---

## Signature

- Provided by: **Ling 3.0 (anthropic/claude-opus-5)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All placeholders replaced; no values copied from other model/ files.
2. Filename is model/claude-opus-5/Ling_3.0.md.
3. Signature block filled in; relative links resolve from model/claude-opus-5/.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks → save as Ling_3.0.md.excluded.
